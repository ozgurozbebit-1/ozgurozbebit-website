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
            $visualMemoryText = "SON KULLANILAN GÖRSEL KALIPLAR:\n";

            foreach($recentVisuals as $row){
                $visualMemoryText .= "- Konu: ".($row["topic"] ?? "")." | Stil: ".($row["visual_style"] ?? "")." | Metafor: ".($row["main_metaphor"] ?? "")." | Kompozisyon: ".($row["composition_type"] ?? "")."\n";
            }

            $visualMemoryText .= "
Bu kalıpları birebir tekrar etme.
Aynı sisli yol, aynı pencere ışığı, aynı masa üstü obje, aynı yalnız insan, aynı danışmanlık odası, aynı ayna kompozisyonu tekrarından kaçın.
Gerekirse aynı metaforu farklı mesafe, farklı kadraj, farklı materyal, farklı ışık ve farklı atmosferle yorumla.
";
            $visualMemoryNote = "Son görsel kalıplar prompta eklendi.";
        }else{
            $visualMemoryText = "Henüz kayıtlı görsel hafıza bulunamadı. Özgün bir kompozisyon kur.";
            $visualMemoryNote = "Görsel hafıza boş.";
        }

    }catch(Exception $e){
        $visualMemoryText = "Görsel hafıza okunamadı. Yine de klişe tekrarlarından kaçın.";
        $visualMemoryNote = "Görsel hafıza okunamadı.";
    }

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
METAFOR KÜTÜPHANESİ SEÇİMİ:
- Bu konu için sistem tarafından önerilen ana metafor: ".$selectedMetaphor."
- Eğer konuya uygunsa öncelikle bu metaforu kullan.
- Bu metaforu doğrudan, zarif, premium ve aile danışmanlığı iletişimine uygun biçimde yorumla.
- Aynı metaforu klişe kullanma; ışık, kadraj, kompozisyon ve atmosferle özgünleştir.
- Metafor hafızası notu: ".$metaphorMemoryNote."
";
    } else {
        $metaphorSupportText = "
METAFOR KÜTÜPHANESİ SEÇİMİ:
- Bu konu için hazır metafor eşleşmesi bulunamadı.
- Konunun aile, çocuk, ebeveynlik veya ilişki yaşamındaki anlamına göre özgün, etik ve premium bir metafor seç.
";
    }

    $seedConcept = "";

    if(str_contains($lowerTitle, "sınav") || str_contains($lowerTitle, "kaygı") || str_contains($lowerTitle, "endişe")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Çalışma masasındaki dağınık notların yanında yumuşak ışıkla belirginleşen sade bir plan
- Fırtınalı gökyüzünden sakin ve açık bir ufka geçiş
- Çocuğun yolunu gösteren küçük ama güven veren bir ışık çizgisi
- Takvim, kalem ve açık defterle kurulmuş sakin bir hazırlık atmosferi

STİL TERCİHİ:
Sinematik fotoğraf, sakin çalışma alanı, doğal ışık, güven veren aile danışmanlığı estetiği.
";
    }
    elseif(str_contains($lowerTitle, "çocuk") || str_contains($lowerTitle, "ebeveyn") || str_contains($lowerTitle, "anne") || str_contains($lowerTitle, "baba")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Birlikte tamamlanan yapboz parçaları
- Sıcak ışıklı bir ev köşesinde yan yana duran farklı boy kitaplar
- Küçük bir fidanı destekleyen yumuşak ahşap çubuklar
- Aile içi bağı anlatan zarif ip veya köprü metaforu

STİL TERCİHİ:
Sıcak, sade, doğal ışıklı, aile yaşamına uygun premium fotoğraf estetiği.
";
    }
    elseif(str_contains($lowerTitle, "ergen") || str_contains($lowerTitle, "genç")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- İki farklı yöne açılan ama aynı köprüde birleşen yollar
- Gün batımında yeni bir yola bakan sade bir sırt çantası
- Bir defterde yarım kalmış çizimlerin yanında yeni açılan temiz sayfa
- Geçiş dönemini anlatan yumuşak ışıkla aydınlanan koridor

STİL TERCİHİ:
Modern, genç, sade, umut veren ve abartısız sinematik atmosfer.
";
    }
    elseif(str_contains($lowerTitle, "dikkat") || str_contains($lowerTitle, "dürtü") || str_contains($lowerTitle, "odak") || str_contains($lowerTitle, "dehb")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Dağınık renkli kalemler arasında netleşen tek sade çizgi
- Oyun parçaları ve okul defteri arasında kurulan düzenli küçük alan
- Hareketli ışıkların içinde sakin bir odak noktası
- Ev rutini panosunda sadeleşen küçük adımlar

STİL TERCİHİ:
Canlı ama kontrollü, çocuk ve aile yaşamına uygun, düzen ve odak metaforu taşıyan modern fotoğraf estetiği.
";
    }
    elseif(str_contains($lowerTitle, "çift") || str_contains($lowerTitle, "ilişki") || str_contains($lowerTitle, "evlilik") || str_contains($lowerTitle, "iletişim")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Aynı masada birbirine dönük iki fincan ve aradaki sıcak ışık
- İki ayrı ipliğin düğüm olmadan zarifçe yan yana ilerlemesi
- Yarım kalmış köprünün iki ucunu birleştiren yumuşak ışık
- Farklı iki taşın su üzerinde dengeli şekilde yan yana durması

STİL TERCİHİ:
Sıcak, olgun, sakin, ilişkide iletişim ve denge duygusu veren premium kompozisyon.
";
    }
    elseif(str_contains($lowerTitle, "aile")){
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Aynı ağacın farklı dallarında yumuşak ışık
- Ev sıcaklığını anlatan sade bir pencere ve doğal gün ışığı
- Birlikte tamamlanan küçük yapı taşları
- Farklı boyutlarda ama aynı zeminde duran taşlar

STİL TERCİHİ:
Sıcak, sade, güven veren, doğal ışıklı aile danışmanlığı estetiği.
";
    }
    else{
        $seedConcept = "
ÖNCELİKLİ METAFOR BANKASI:
- Konunun anlamına uygun aile, ev, köprü, fidan, ışık, yol, defter, yapboz veya doğa metaforu seç
- İnsan figürü zorunlu değildir
- Basit ikonlar, abartılı yüz ifadeleri, dramatik sahneler ve ucuz stok görsellerden kaçın
- Premium aile danışmanlığı markası estetiğiyle özgün bir görsel düşün

STİL TERCİHİ:
Konuya göre fotoğraf gerçekçi, sinematik, minimal obje, doğa metaforu veya premium illüstrasyon.
";
    }

    $prompt = "
Sen deneyimli bir aile danışmanlığı içerik stratejisti, sanat yönetmeni ve sosyal medya görsel iletişim editörüsün.

Görev:
Verilen konu için profesyonel, özgün ve metaforik bir görsel konsept üret.

KONU:
".$title."

".$metaphorSupportText."

".$visualMemoryText."

".$seedConcept."

MARKA GÖRSEL DİLİ:
- Şelale Özbebit aile danışmanlığı markasına uygun olmalı.
- Premium, sakin, güven veren, sıcak ve etik bir iletişim estetiği kullanılmalı.
- Görsel çok basit çizim veya ucuz stok ikon gibi olmamalı.
- Fotoğraf gerçekçi, sinematik, minimal obje, doğa metaforu, ev yaşamı metaforu veya sanat metaforu önceliklidir.
- İnsan figürü zorunlu değildir.
- İllüstrasyon kullanılacaksa premium, derinlikli ve profesyonel olmalıdır.

DİL VE MESLEKİ SINIR:
- Danışmanlık alanına uygun düşün.
- Tıbbi, medikal veya mesleki kapsamı aşan çağrışımlardan kaçın.
- Korku, kriz, acil durum, damgalama veya yoğun karanlık atmosfer kurma.
- Ailelere, ebeveynlere, çocuk ve ergen gelişimine uygun sıcak ve güven veren bir görsel dil kullan.

RENK STRATEJİSİ:
- Bu konu için önerilen renk paleti: ".$colorText."
- Şelale TOM için turkuaz, yeşil, açık mavi, açık bej, beyaz ve doğal ahşap tonları özellikle uygundur.
- Renkler görselin duygusal tonunu desteklemeli.
- Renk paleti doğal, premium ve güven veren kullanılmalı.
- Aşırı parlak, ucuz, neon veya rastgele renklerden kaçınılmalı.

IŞIK VE ATMOSFER STRATEJİSİ:
- Bu konu için önerilen ışık dili: ".$lightingText."
- Işık, konunun aile yaşamı ve danışmanlık bağlamındaki atmosferini desteklemeli.
- Kontrast, gölge ve parlaklık abartılı değil; premium ve etik iletişime uygun olmalı.
- Korkutucu, travmatik veya manipülatif ışık kullanılmamalı.

EDİTORYAL YAKLAŞIM:
- Bu konu için tercih edilen editoryal tarz: ".$editorialStyle."
- Görsel premium bir aile danışmanlığı markasının sosyal medya hesabında yayınlanabilecek kalite ve estetikte olmalı.
- Kompozisyon, ışık, kadraj ve atmosfer bu editoryal stile uygun kurulmalı.

KONUYA ÖZEL KISITLAMA MOTORU:
- Özellikle şu klişe veya uygunsuz görsel kalıplardan kaçın: ".$avoidText."
- Bu yasaklı kalıplar yerine metaforik, estetik, premium ve dolaylı anlatım kullan.

ÇEŞİTLİLİK MOTORU:
- Tekrarlayan metaforlardan kaçın.
- Mümkünse şu yaratıcı yönlerden ilham al: ".$diversityText."
- Son dönemde kullanılan klişe sosyal medya görsellerini tekrar etme.
- Her içerik yeni bir sanat yönetmeni tarafından hazırlanmış hissi vermeli.

GÖRSEL HAFIZA TALİMATI:
- Hafızada listelenen son görsel kalıpları birebir tekrar etme.
- Aynı kompozisyon ailesi gerekiyorsa kamera açısını, obje türünü, ışık yönünü, arka plan dokusunu ve atmosferi belirgin biçimde değiştir.
- Aynı pencere, aynı sisli yol, aynı masa üstü obje, aynı yalnız kişi ve aynı danışmanlık odası hissini tekrar etme.
- Görsel yeni bir seri gibi değil, yeni bir sanat yönetmeni tarafından tasarlanmış ayrı bir iş gibi görünmeli.

ANA HEDEF:
- Konuyu doğrudan anlatan klişe semboller yerine, konunun aile, ebeveynlik, çocuk gelişimi veya ilişki yaşamındaki anlamını zarif bir metaforla anlat.
- Eğer METAFOR KÜTÜPHANESİ SEÇİMİ içinde ana metafor verilmişse öncelikle onu kullan.
- O metaforun etrafında özgün kompozisyon geliştir.
- Aynı metaforu her seferinde farklı açı, ışık, kadraj, mesafe ve atmosferle yorumla.

KESİN KAÇINILACAKLAR:
- Medikal cihaz, beyaz önlük, muayene sahnesi, acil durum, yoğun karanlık kriz atmosferi kullanma.
- Her konuda üzgün insan, danışmanlık odası, beyin ikonu, kalp ritmi veya dramatik yüz ifadesi kullanma.
- Korkutucu, damgalayıcı, karanlık, travmatik veya manipülatif görsel önerme.
- Yazı, harf, kelime, tabela, logo veya watermark önerme.

ÇIKTI FORMATINI AYNEN KORU:

GÖRSEL STİLİ:
Buraya tek bir net stil yaz. Örnek: fotoğraf gerçekçi sinematik aile yaşamı metaforu

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
        $concept = "GÖRSEL STİLİ:\nFotoğraf gerçekçi sinematik aile yaşamı metaforu\n\nANA METAFOR:\nKonuya özgü zarif ve etik bir aile danışmanlığı metaforu\n\nKOMPOZİSYON:\nSol üstte başlık için boş alan, altta marka bandı için sakin alan bırakan premium görsel.\n\nKAÇINILACAKLAR:\nYazı, kalp ritmi, klişe ikon, üzgün insan, dramatik yüz ifadesi.";
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