<?php
session_start();

require_once "../config/editorial_engine.php";
require_once "../config/database.php";

ini_set('display_errors', 0);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

try {

    if(!isset($_SESSION["user_id"])){
        echo json_encode(["success"=>false,"message"=>"Oturum bulunamadı."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    require_once "../config/openai.php";
    require_once "../config/color_engine.php";
    require_once "../config/lighting_engine.php";
    require_once "../config/avoid_engine.php";
    require_once "../config/diversity_engine.php";

    $apiKey = "";

    if(isset($OPENAI_API_KEY) && $OPENAI_API_KEY !== ""){
        $apiKey = $OPENAI_API_KEY;
    } elseif(defined("OPENAI_API_KEY")) {
        $apiKey = OPENAI_API_KEY;
    }

    if($apiKey === ""){
        echo json_encode(["success"=>false,"message"=>"OpenAI API anahtarı bulunamadı."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $input = json_decode(file_get_contents("php://input"), true);
    if(!is_array($input)){ $input = []; }

    $title = trim($input["title"] ?? "");

    if($title === ""){
        echo json_encode(["success"=>false,"message"=>"Başlık boş."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $lowerTitle = mb_strtolower($title, 'UTF-8');

    $colorPalette = getColorPalette($title);
    $colorText = implode(", ", $colorPalette);

    $lightingStyle = getLightingStyle($title);
    $lightingText = implode(", ", $lightingStyle);

    $avoidRules = getAvoidRules($title);
    $avoidText = implode(", ", $avoidRules);

    $editorialStyle = getEditorialStyle($title);

    $diversityHints = getDiversityHints($title);
    $diversityText = implode(", ", $diversityHints);

    /*
    |--------------------------------------------------------------------------
    | V17 GÖRSEL HAFIZA SİSTEMİ
    |--------------------------------------------------------------------------
    */

    $visualMemoryText = "";
    $visualMemoryNote = "";

    try{
        $stmt = $pdo->prepare("
            SELECT topic, visual_style, main_metaphor, composition_type
            FROM visual_memory
            ORDER BY used_at DESC
            LIMIT 12
        ");

        $stmt->execute();
        $recentVisuals = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if(is_array($recentVisuals) && count($recentVisuals) > 0){
            $visualMemoryText = "V17 GÖRSEL HAFIZA - SON KULLANILAN GÖRSEL KALIPLAR:\n";

            foreach($recentVisuals as $row){
                $visualMemoryText .= "- Konu: ".($row["topic"] ?? "")." | Stil: ".($row["visual_style"] ?? "")." | Metafor: ".($row["main_metaphor"] ?? "")." | Kompozisyon: ".($row["composition_type"] ?? "")."\n";
            }

            $visualMemoryText .= "
Bu kalıpları birebir tekrar etme.
Aynı sisli yol, aynı pencere ışığı, aynı masa üstü obje, aynı yalnız insan, aynı terapi odası, aynı ayna kompozisyonu tekrarından kaçın.
Gerekirse aynı metaforu farklı mesafe, farklı kadraj, farklı materyal, farklı ışık ve farklı atmosferle yorumla.
";
            $visualMemoryNote = "Son görsel kalıplar GPT promptuna eklendi.";
        }else{
            $visualMemoryText = "V17 GÖRSEL HAFIZA: Henüz kayıtlı görsel hafıza bulunamadı. Özgün bir kompozisyon kur.";
            $visualMemoryNote = "Görsel hafıza boş.";
        }

    }catch(Exception $e){
        $visualMemoryText = "V17 GÖRSEL HAFIZA: Hafıza okunamadı. Yine de klişe tekrarlarından kaçın.";
        $visualMemoryNote = "Görsel hafıza okunamadı.";
    }

    /*
    |--------------------------------------------------------------------------
    | V16 + V16.1 METAFOR KÜTÜPHANESİ VE METAFOR HAFIZASI
    |--------------------------------------------------------------------------
    */

    $metaphorLibrary = [];
    $selectedMetaphor = "";
    $metaphorMemoryNote = "";

    $metaphorFile = "../config/metaphors.php";

    if(file_exists($metaphorFile)){
        $loadedMetaphors = require $metaphorFile;

        if(is_array($loadedMetaphors)){
            $metaphorLibrary = $loadedMetaphors;
        }
    }

    foreach($metaphorLibrary as $keyword => $pool){

        $keywordLower = mb_strtolower($keyword, 'UTF-8');

        if(str_contains($lowerTitle, $keywordLower)){

            if(is_array($pool) && count($pool) > 0){

                $availablePool = $pool;

                try{
                    $stmt = $pdo->prepare("
                        SELECT metaphor
                        FROM metaphor_usage
                        ORDER BY used_at DESC
                        LIMIT 20
                    ");

                    $stmt->execute();
                    $recentMetaphors = $stmt->fetchAll(PDO::FETCH_COLUMN);

                    if(is_array($recentMetaphors) && count($recentMetaphors) > 0){
                        $filteredPool = array_values(array_diff($availablePool, $recentMetaphors));

                        if(count($filteredPool) > 0){
                            $availablePool = $filteredPool;
                            $metaphorMemoryNote = "Son kullanılan metaforlar filtrelendi.";
                        }else{
                            $metaphorMemoryNote = "Tüm metaforlar yakın zamanda kullanılmış; havuz tekrar açıldı.";
                        }
                    }

                }catch(Exception $e){
                    $metaphorMemoryNote = "Metafor hafızası okunamadı; rastgele seçim yapıldı.";
                }

                $selectedMetaphor = $availablePool[array_rand($availablePool)];
                break;
            }
        }
    }

    $metaphorSupportText = "";

    if($selectedMetaphor !== ""){
        $metaphorSupportText = "
V16 METAFOR KÜTÜPHANESİ SEÇİMİ:
- Bu konu için sistem tarafından önerilen ana metafor: ".$selectedMetaphor."
- Eğer konuya uygunsa öncelikle bu metaforu kullan.
- Bu metaforu doğrudan, zarif, premium ve psikiyatrik sağlık iletişimine uygun biçimde yorumla.
- Aynı metaforu klişe kullanma; ışık, kadraj, kompozisyon ve atmosferle özgünleştir.
- V16.1 metafor hafızası notu: ".$metaphorMemoryNote."
";
    } else {
        $metaphorSupportText = "
V16 METAFOR KÜTÜPHANESİ SEÇİMİ:
- Bu konu için hazır metafor eşleşmesi bulunamadı.
- Konunun psikolojik anlamına göre özgün, etik ve premium bir metafor seç.
";
    }

    $seedConcept = "";

    if(str_contains($lowerTitle, "ilaç") || str_contains($lowerTitle, "tedavi") || str_contains($lowerTitle, "takip")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Dağ manzarası içinde giderek sakinleşen ve küçülen nehir
- Fırtınadan sonra berraklaşan gökyüzü
- Sisli yoldan daha net görünen ufka doğru ilerleyen patika
- Düzenli bakım gören bir bahçede yavaş yavaş toparlanan bitkiler

STİL TERCİHİ:
Doğa metaforu, fotoğraf gerçekçi, sinematik doğal ışık.
";
    }
    elseif(str_contains($lowerTitle, "depres")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Keman telinden süzülen tek bir gözyaşı
- Loş odada pencere kenarından gelen ince sabah ışığı
- Yağmur sonrası camda kalan damlalar ve uzakta açılan ışık
- Solmuş bir çiçeğin yanında yeni filizlenen küçük yeşil yaprak
- Sisli orman yolunda uzakta beliren yumuşak sabah ışığı

STİL TERCİHİ:
Sanat metaforu, minimal obje fotoğrafı, sinematik loş ama umutlu atmosfer.
";
    }
    elseif(str_contains($lowerTitle, "anksiyete") || str_contains($lowerTitle, "kaygı") || str_contains($lowerTitle, "endişe")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Sisli bir yolda uzakta görünen yumuşak ışık
- Rüzgarlı denizden sakin limana geçiş
- Masada dağılmış iplerin yavaşça çözülmesi
- Bulutlu gökyüzünde açılan küçük berrak alan

STİL TERCİHİ:
Sinematik fotoğraf, doğa metaforu, sakin ama gerilim hissi taşıyan premium atmosfer.
";
    }
    elseif(str_contains($lowerTitle, "okb") || str_contains($lowerTitle, "obses") || str_contains($lowerTitle, "takınt")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Kusursuz hizalanmış taşlar içinde tekrar kontrol edilen tek taş
- Sonsuz döngü hissi veren dairesel merdiven
- Simetrik dizilmiş objelerde küçük bir tekrar hareketi
- Dairesel su halkaları ve sürekli geri dönen ritim

STİL TERCİHİ:
Minimal obje fotoğrafı, geometrik kompozisyon, premium soyut görsel.
";
    }
    elseif(str_contains($lowerTitle, "dehb") || str_contains($lowerTitle, "dikkat") || str_contains($lowerTitle, "odak")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Masada dağılmış ışık noktaları ve tek bir net odak alanı
- Birçok bulanık yol çizgisi içinde netleşen tek rota
- Dağınık kağıtlar arasında belirginleşen tek temiz sayfa
- Hareketli şehir ışıkları içinde sakin bir odak noktası

STİL TERCİHİ:
Sinematik obje fotoğrafı, modern şehir/metafor, kontrollü hareket hissi.
";
    }
    elseif(str_contains($lowerTitle, "nars")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Kırık olmayan ama abartılı yansımalar veren büyük ayna
- Sonsuz ayna koridorunda merkeze çekilen yansıma
- Parlak yüzeyde büyüyen ama çevreyi silikleştiren yansıma
- Tek objenin kendi yansımasıyla sahneyi domine etmesi

STİL TERCİHİ:
Sinematik fotoğraf, premium obje metaforu, ayna ve yansıma estetiği.
";
    }
    elseif(str_contains($lowerTitle, "borderline") || str_contains($lowerTitle, "sınır")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- İki farklı ışık tonu arasında kalan cam yüzey
- Dalgalı su üzerinde iki farklı renk yansıması
- Bir köprüde iki farklı yöne açılan ışıklı yol
- İnce ama kopmamış bir ip üzerinde dengede duran obje

STİL TERCİHİ:
Soyut sinematik fotoğraf, duygu geçişi, iki tonlu ışık kompozisyonu.
";
    }
    elseif(str_contains($lowerTitle, "bipolar")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Aynı ufukta hem gün doğumu hem gece mavisi tonları
- Dalga formu gibi yükselip alçalan ışık çizgileri
- İki farklı mevsimi andıran ama dengeli tek manzara
- Denge terazisi yerine doğal ışık geçişleri

STİL TERCİHİ:
Doğa metaforu, sinematik ışık geçişi, premium soyut atmosfer.
";
    }
    elseif(str_contains($lowerTitle, "panik")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Ani nefes daralmasını temsil eden sıkışık ama açılan alan
- Göğüs baskısını sembolik anlatan dar koridordan ferah alana geçiş
- Sakinleşen ritim hissi veren soyut dalga
- Yalnızca panik atak konusunda kalp ritmi veya nefes metaforu sınırlı şekilde kullanılabilir

STİL TERCİHİ:
Sinematik psikolojik metafor, sade insan veya soyut alan kompozisyonu.
";
    }
    elseif(str_contains($lowerTitle, "anoreksi") || str_contains($lowerTitle, "yeme") || str_contains($lowerTitle, "beden")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- İnce kuru dal üzerinde duran kırılgan çiğ damlası
- Büyük boş tabakta tek küçük yaprak ve yumuşak ışık
- Aynada flu görünen beden silueti yerine kırılgan doğa metaforu
- Kırılgan porselen yüzeyde ince çatlak ama dramatik olmayan kompozisyon

STİL TERCİHİ:
Minimal obje fotoğrafı, doğa metaforu, kırılgan ama damgalayıcı olmayan premium estetik.
";
    }
    else{
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Konunun anlamına uygun doğa, obje, sanat veya soyut metafor seç
- İnsan figürü zorunlu değildir
- Basit beyin ikonu, EKG, terapi koltuğu ve üzgün insan klişesinden kaçın
- Premium sağlık markası estetiğiyle özgün bir görsel düşün

STİL TERCİHİ:
Konuya göre fotoğraf gerçekçi, sinematik, minimal obje, doğa metaforu veya premium illüstrasyon.
";
    }

    $prompt = "
Sen deneyimli bir psikiyatri içerik stratejisti, sanat yönetmeni ve sağlık iletişimi editörüsün.

Görev:
Verilen konu için profesyonel, özgün ve metaforik bir görsel konsept üret.

KONU:
".$title."

".$metaphorSupportText."

".$visualMemoryText."

".$seedConcept."

MARKA GÖRSEL DİLİ:
- Uzm. Dr. Özgür Özbebit psikiyatri markasına uygun olmalı.
- Premium, sakin, güven veren ve etik sağlık iletişimi estetiği kullanılmalı.
- Görsel çok basit çizim veya ucuz stok ikon gibi olmamalı.
- Fotoğraf gerçekçi, sinematik, minimal obje, doğa metaforu veya sanat metaforu önceliklidir.
- İnsan figürü zorunlu değildir.
- İllüstrasyon kullanılacaksa premium, derinlikli ve profesyonel olmalıdır.

RENK PSİKOLOJİSİ STRATEJİSİ:
- Bu konu için önerilen renk paleti: ".$colorText."
- Renkler görselin duygusal tonunu desteklemeli.
- Renk paleti doğal, premium ve sağlık iletişimine uygun kullanılmalı.
- Aşırı parlak, ucuz, neon veya rastgele renklerden kaçınılmalı.

IŞIK VE ATMOSFER STRATEJİSİ:
- Bu konu için önerilen ışık dili: ".$lightingText."
- Işık, konunun psikolojik atmosferini desteklemeli.
- Kontrast, gölge ve parlaklık abartılı değil; premium ve etik sağlık iletişimine uygun olmalı.
- Korkutucu, travmatik veya manipülatif ışık kullanılmamalı.

EDİTORYAL YAKLAŞIM:
- Bu konu için tercih edilen editoryal tarz: ".$editorialStyle."
- Görsel premium bir sağlık markasının sosyal medya hesabında yayınlanabilecek kalite ve estetikte olmalı.
- Kompozisyon, ışık, kadraj ve atmosfer bu editoryal stile uygun kurulmalı.

KONUYA ÖZEL KISITLAMA MOTORU:
- Özellikle şu klişe veya uygunsuz görsel kalıplardan kaçın: ".$avoidText."
- Bu yasaklı kalıplar yerine metaforik, estetik, premium ve dolaylı anlatım kullan.

ÇEŞİTLİLİK MOTORU:
- Tekrarlayan metaforlardan kaçın.
- Mümkünse şu yaratıcı yönlerden ilham al: ".$diversityText."
- Son dönemde kullanılan klişe psikiyatri görsellerini tekrar etme.
- Her içerik yeni bir sanat yönetmeni tarafından hazırlanmış hissi vermeli.

V17 GÖRSEL HAFIZA TALİMATI:
- V17 hafızasında listelenen son görsel kalıpları birebir tekrar etme.
- Aynı kompozisyon ailesi gerekiyorsa kamera açısını, obje türünü, ışık yönünü, arka plan dokusunu ve atmosferi belirgin biçimde değiştir.
- Aynı pencere, aynı sisli yol, aynı masa üstü obje, aynı yalnız kişi ve aynı terapi odası hissini tekrar etme.
- Görsel yeni bir seri gibi değil, yeni bir sanat yönetmeni tarafından tasarlanmış ayrı bir iş gibi görünmeli.

ANA HEDEF:
- Konuyu doğrudan anlatan klişe klinik semboller yerine, konunun duygusal ve psikolojik anlamını zarif bir metaforla anlat.
- Eğer V16 METAFOR KÜTÜPHANESİ SEÇİMİ içinde ana metafor verilmişse öncelikle onu kullan.
- O metaforun etrafında özgün kompozisyon geliştir.
- Aynı metaforu her seferinde farklı açı, ışık, kadraj, mesafe ve atmosferle yorumla.

KESİN KAÇINILACAKLAR:
- Konu panik atak değilse EKG, kalp ritmi, göğüs tutma, kalp krizi çağrışımı kullanma.
- Kişilik bozuklukları için EKG, kalp, acil servis, dramatik kriz görseli kullanma.
- Her konuda üzgün insan, danışma odası, beyin ikonu, kalp ritmi, doktor-hasta sahnesi kullanma.
- Korkutucu, damgalayıcı, karanlık, travmatik veya manipülatif görsel önerme.
- Yazı, harf, kelime, tabela, logo veya watermark önerme.

ÇIKTI FORMATINI AYNEN KORU:

GÖRSEL STİLİ:
Buraya tek bir net stil yaz. Örnek: fotoğraf gerçekçi sinematik doğa metaforu

ANA METAFOR:
Buraya konuya özel tek ve güçlü metaforu yaz.

KOMPOZİSYON:
Görselin nasıl kurulacağını ayrıntılı ama net anlat. İnsan olmak zorunda değil. Sol üstte başlık için boş alan, altta marka bandı için sakin alan bırakılacağını belirt.

KAÇINILACAKLAR:
Bu konu için özellikle kullanılmaması gereken sembolleri yaz.
";

    $payload = [
        "model" => "gpt-4.1-mini",
        "messages" => [
            [
                "role" => "user",
                "content" => $prompt
            ]
        ],
        "temperature" => 0.85,
        "max_tokens" => 700
    ];

    $ch = curl_init("https://api.openai.com/v1/chat/completions");

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_TIMEOUT => 60,
        CURLOPT_HTTPHEADER => [
            "Content-Type: application/json",
            "Authorization: Bearer " . $apiKey
        ],
        CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE)
    ]);

    $response = curl_exec($ch);

    if($response === false){
        $curlError = curl_error($ch);
        curl_close($ch);

        echo json_encode([
            "success"=>false,
            "message"=>"OpenAI bağlantı hatası: ".$curlError
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $data = json_decode($response, true);

    if($httpCode < 200 || $httpCode >= 300){
        echo json_encode([
            "success"=>false,
            "message"=>"OpenAI hata döndürdü.",
            "http_code"=>$httpCode,
            "raw"=>$data ?: $response
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $concept = trim($data["choices"][0]["message"]["content"] ?? "");

    if($concept === ""){
        $concept = "GÖRSEL STİLİ:\nFotoğraf gerçekçi sinematik metafor\n\nANA METAFOR:\nKonuya özgü zarif ve etik bir psikolojik metafor\n\nKOMPOZİSYON:\nSol üstte başlık için boş alan, altta marka bandı için sakin alan bırakan premium görsel.\n\nKAÇINILACAKLAR:\nYazı, EKG, kalp ritmi, klişe beyin ikonu, üzgün insan.";
    }

    $visualStyleForMemory = "";
    $mainMetaphorForMemory = $selectedMetaphor;
    $compositionForMemory = "";

    if(preg_match('/GÖRSEL STİLİ:\s*(.*?)(ANA METAFOR:|$)/su', $concept, $m)){
        $visualStyleForMemory = trim($m[1]);
    }

    if(preg_match('/ANA METAFOR:\s*(.*?)(KOMPOZİSYON:|$)/su', $concept, $m)){
        $extractedMetaphor = trim($m[1]);
        if($extractedMetaphor !== ""){
            $mainMetaphorForMemory = $extractedMetaphor;
        }
    }

    if(preg_match('/KOMPOZİSYON:\s*(.*?)(KAÇINILACAKLAR:|$)/su', $concept, $m)){
        $compositionForMemory = trim($m[1]);
    }

    if($selectedMetaphor !== ""){
        try{
            $stmt = $pdo->prepare("
                INSERT INTO metaphor_usage
                (
                    topic,
                    metaphor
                )
                VALUES
                (
                    ?,
                    ?
                )
            ");

            $stmt->execute([
                $title,
                $selectedMetaphor
            ]);
        }catch(Exception $e){
            // Metafor hafızası yazılamazsa görsel konsept üretimi bozulmasın.
        }
    }

    try{
        $stmt = $pdo->prepare("
            INSERT INTO visual_memory
            (
                topic,
                visual_style,
                main_metaphor,
                composition_type
            )
            VALUES
            (
                ?,
                ?,
                ?,
                ?
            )
        ");

        $stmt->execute([
            $title,
            mb_substr($visualStyleForMemory, 0, 250, 'UTF-8'),
            mb_substr($mainMetaphorForMemory, 0, 250, 'UTF-8'),
            mb_substr($compositionForMemory, 0, 250, 'UTF-8')
        ]);

    }catch(Exception $e){
        $visualMemoryNote .= " Görsel hafıza yazılamadı.";
    }

    echo json_encode([
        "success"=>true,
        "concept"=>$concept,
        "v16_metaphor"=>$selectedMetaphor,
        "v16_memory_note"=>$metaphorMemoryNote,
        "v17_memory_note"=>$visualMemoryNote
    ], JSON_UNESCAPED_UNICODE);
    exit;

} catch(Throwable $e) {

    echo json_encode([
        "success"=>false,
        "message"=>"PHP hata yakaladı: ".$e->getMessage(),
        "file"=>$e->getFile(),
        "line"=>$e->getLine()
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
?>