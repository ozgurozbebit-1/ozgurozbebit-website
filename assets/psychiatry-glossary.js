const glossarySource = `
Nesne sürekliliği|Bir kişi veya nesne görünmediğinde de varlığını sürdürdüğünü kavrama becerisidir.
Ortak dikkat|İki kişinin dikkatini aynı nesne ya da olaya karşılıklı olarak yöneltmesidir.
Sosyal karşılıklılık|Sosyal etkileşimde karşıdakinin işaretlerine uygun ve iki yönlü yanıt verme becerisidir.
Zihin kuramı|Başkalarının kendinden farklı düşünce, inanç ve niyetleri olabileceğini kavrama becerisidir.
Duygu tanıma|Yüz ifadesi, ses tonu ve bağlamdan duygusal durumları ayırt etme becerisidir.
Duygu adlandırma|Kişinin hissettiği duyguları uygun kelimelerle ifade edebilmesidir.
Duygusal okuryazarlık|Duyguları tanıma, anlama ve uygun şekilde ifade etmeyle ilgili beceriler bütünüdür.
Öz düzenleme|Dikkat, duygu ve davranışı hedefe ve koşullara uygun biçimde yönetme becerisidir.
Birlikte düzenleme|Çocuğun duygularını yönetirken güvenilir yetişkinin desteğinden yararlanmasıdır.
Duygusal eş düzenleme|İki kişinin etkileşim yoluyla birbirinin duygusal uyarılmasını etkileyip düzenlemesidir.
Ebeveyn duyarlılığı|Bakım verenin çocuğun sinyallerini fark edip uygun ve zamanında karşılık vermesidir.
Ebeveyn yansıtıcılığı|Bakım verenin çocuğun davranışlarının ardındaki duygu ve zihinsel durumları düşünmesidir.
Ebeveyn tükenmişliği|Çocuk bakımına bağlı uzun süreli stresle ilişkili belirgin zihinsel ve duygusal yorgunluktur.
Ebeveynlik stresi|Çocuk yetiştirme sorumluluklarının kişinin kaynaklarını zorladığı hissidir.
Olumlu pekiştirme|Bir davranışın ardından olumlu sonuç verilerek o davranışın tekrarının artırılmasıdır.
Olumsuz pekiştirme|Bir davranışın ardından rahatsız edici uyaranın kalkmasıyla o davranışın artmasıdır.
Sönme|Pekiştirilmeyen öğrenilmiş davranışın zamanla azalması sürecidir.
Model alma|Başkalarının davranışlarını gözleyerek benzer davranışları öğrenmedir.
Davranış zinciri|Bir beceriyi oluşturan ardışık küçük adımların öğrenilip birbirine bağlanmasıdır.
Davranışsal aktivasyon|Anlamlı ve ödüllendirici etkinliklerin planlı artırılmasıyla depresif kaçınmanın azaltılmasıdır.
Davranışsal inhibisyon|Yeni veya belirsiz durumlara temkinli yaklaşma eğilimidir.
Gecikmiş ödül|Daha büyük bir kazanım için anlık ödülü erteleyebilme becerisiyle ilgili kavramdır.
Öz yeterlik|Kişinin belirli bir görevi başarabileceğine ilişkin inancı ve değerlendirmesidir.
Bilişsel esneklik|Değişen koşullara uyum için düşünme veya davranış stratejisini değiştirebilme becerisidir.
İnhibisyon kontrolü|Uygun olmayan otomatik tepki veya dürtüyü durdurabilme becerisidir.
Planlama becerisi|Bir hedefe ulaşmak için adımları sıralayıp gerekli kaynakları düzenleme becerisidir.
Görev başlatma|Bir işi uygun zamanda başlatabilme ve harekete geçebilme becerisidir.
Zaman körlüğü|Geçen süreyi veya gelecekteki zaman gereksinimini kestirmede belirgin güçlük yaşanmasıdır.
Görev değiştirme|Bir etkinlikten diğerine geçerken dikkat ve davranış kurallarını değiştirme becerisidir.
Sürdürülen dikkat|Belirli bir görev veya uyaran üzerinde dikkati zaman boyunca koruma becerisidir.
Seçici dikkat|Çeldiricileri azaltarak hedef uyaranlara odaklanma becerisidir.
Bölünmüş dikkat|Birden fazla görevin gerektirdiği bilginin aynı zaman diliminde yönetilmesidir.
Dikkat dalgalanması|Odaklanma düzeyinin zaman içinde belirgin artıp azalmasıdır.
Duyusal arayış|Kişinin hareket, dokunma veya ses gibi duyusal uyaranları yoğun biçimde aramasıdır.
Duyusal kaçınma|Rahatsız edici hissedilen duyusal uyaranlardan uzaklaşmaya çalışma eğilimidir.
Motor stereotipi|Benzer biçimde tekrarlanan, çoğu zaman ritmik motor hareketlerdir.
Ekolalik konuşma|Duyulan sözlerin hemen veya gecikmeli olarak tekrarlanması biçimindeki konuşmadır.
Pragmatik dil|Dilin sosyal bağlama ve iletişim amacına uygun kullanılma becerisidir.
Alıcı dil|Söylenen veya yazılan dili anlama becerisidir.
İfade edici dil|Düşünce ve gereksinimleri sözlü, yazılı veya başka yollarla ifade etme becerisidir.
Fonolojik farkındalık|Sözcüklerin ses yapısını ayırt etme ve seslerle zihinsel işlem yapma becerisidir.
Disleksi|Okuma doğruluğu veya akıcılığında kalıcı güçlüklerle belirginleşebilen özgül öğrenme bozukluğudur.
Diskalkuli|Sayı kavramı ve matematik becerilerinde belirgin güçlüklerle seyreden özgül öğrenme alanıdır.
Disgrafi|Yazılı anlatım veya yazı üretimiyle ilgili güçlükleri tanımlamak için kullanılan terimdir.
Gelişimsel koordinasyon bozukluğu|Motor koordinasyon güçlüğünün günlük işlevleri etkilediği nörogelişimsel durumdur.
Kekemelik|Konuşma akışında tekrar, uzatma veya blokların görülebildiği akıcılık bozukluğudur.
Gece alt ıslatma|Çocuğun gelişimsel yaşına uygun olmayan dönemde uykuda istemsiz idrar kaçırmasıdır.
Gece korkuları|Çocuklarda karanlık veya ayrılık gibi durumlarla ilişkili gelişimsel korkuların genel adıdır.
Ayrılma anksiyetesi bozukluğu|Bağlandığı kişilerden ayrılmaya ilişkin gelişimsel düzeye göre aşırı korku ve sıkıntıdır.
Okul devamsızlığı|Çocuğun eğitim ortamına katılımının çeşitli nedenlerle aksamasıdır; her zaman okul reddi değildir.
Okula uyum güçlüğü|Yeni okul veya sınıf koşullarına alışırken yaşanan belirgin zorlanmadır.
Sosyal çekingenlik|Sosyal ortamlarda geri durma ve etkileşim başlatmakta zorlanma eğilimidir.
Akran reddi|Bir çocuğun akran grubunca tekrarlayan biçimde dışlanması veya kabul edilmemesidir.
Siber zorbalık|Dijital kanallar üzerinden tekrarlanan zarar verici veya aşağılayıcı davranışlardır.
Dijital oyun süresi|Oyunla geçirilen zamanın miktarıdır; tek başına oyun oynama bozukluğu tanısı koydurmaz.
Ekran maruziyeti|Telefon, televizyon veya bilgisayar gibi ekranlarla geçirilen zaman ve içerik deneyimidir.
Sosyal medya karşılaştırması|Kişinin kendini çevrimiçi başkalarının yaşam ve görünüşleriyle değerlendirmesidir.
Ergen kimlik gelişimi|Ergenlikte değerlerin, hedeflerin ve aidiyetlerin araştırılarak kişisel kimliğin biçimlenmesidir.
Ergen risk alma|Gelişimsel değişimlerle birlikte heyecan arama ve sonuçları sınama eğilimidir.
Ergenlikte uyku gecikmesi|Biyolojik zamanlamanın ergenlerde daha geç uyuma yönünde kayabilmesidir.
Akran baskısı|Kişinin grup kabulü için davranışlarını arkadaş çevresinin beklentilerine göre ayarlamasıdır.
Sosyal aidiyet|Bir topluluk tarafından kabul görme ve onun parçası olma hissidir.
Öz şefkat|Kişinin zorlanma veya hata anlarında kendine anlayışlı ve dengeli yaklaşmasıdır.
Psikolojik dayanıklılık|Zorluklara rağmen uyum sağlayıp toparlanmaya katkı veren değişken beceri ve kaynaklardır.
Uyum kapasitesi|Yeni koşullara karşı düşünce, duygu ve davranışları yeniden düzenleyebilme potansiyelidir.
Nörogelişim|Sinir sisteminin gebelikten erişkinliğe uzanan olgunlaşma ve değişim sürecidir.
Sinaptik budanma|Beyin gelişiminde daha az kullanılan sinaptik bağlantıların seçici olarak azalmasıdır.
Sinaptik iletim|Bir sinir hücresinin diğerine kimyasal veya elektriksel sinyal aktarmasıdır.
Miyelinizasyon|Sinir liflerinin çevresindeki miyelin kılıfın gelişerek iletim hızına katkı sağlamasıdır.
Beyin kaynaklı nörotrofik faktör|Nöronların yaşaması ve sinaptik değişimiyle ilişkili BDNF adlı proteindir.
Nörogenez|Yeni sinir hücrelerinin oluşması sürecidir; erişkin insan beynindeki kapsamı araştırılmaktadır.
Nöroinflamasyon|Sinir sistemi içindeki bağışıklıkla ilişkili iltihabi yanıt süreçleridir.
Nörodejenerasyon|Sinir hücrelerinin veya bağlantılarının ilerleyici kaybıyla giden biyolojik süreçtir.
Nöroendokrin yanıt|Sinir sistemi ile hormon sisteminin stres veya başka uyaranlara ortak verdiği yanıttır.
Otonom sinir sistemi|Kalp hızı, sindirim ve terleme gibi istemsiz bedensel işlevleri düzenleyen sinir ağıdır.
Sempatik sinir sistemi|Uyarılma, enerji kullanımı ve savaş-kaç yanıtıyla ilişkili otonom sistem bölümüdür.
Parasempatik sinir sistemi|Dinlenme, sindirim ve toparlanma süreçlerinde rol oynayan otonom sistem bölümüdür.
Vagus siniri|Beyin sapıyla çeşitli iç organlar arasında duyusal ve motor bilgi taşıyan önemli sinirdir.
İnterosepsiyon|Kalp atışı, açlık ve solunum gibi beden içi sinyallerin algılanmasıdır.
Propriyosepsiyon|Bedenin uzaydaki konumunu ve hareketini duyumsama becerisidir.
Eksterosepsiyon|Dış çevreden gelen ses, ışık ve dokunma gibi duyusal bilgilerin algılanmasıdır.
Duyusal bütünleme|Farklı duyulardan gelen bilgileri işlevsel bir algı ve davranış için birleştirme sürecidir.
Duyusal aşırı yüklenme|Birden fazla uyaranın baş etmeyi güçleştiren yoğunlukta algılanmasıdır.
Habituasyon|Tekrarlanan ve zararsız uyaranlara verilen tepkinin zamanla azalmasıdır.
Sensitizasyon|Tekrarlanan veya güçlü uyaranlara verilen tepkinin artmasıdır.
Nöral ağ|Birbiriyle bağlantılı nöronların birlikte bilgi işlediği işlevsel yapıdır.
Varsayılan mod ağı|Beynin kendilikle ilgili düşünme ve içsel zihinsel süreçlerde etkinleşen ağlarından biridir.
Belirginlik ağı|Dikkate değer iç veya dış uyaranların seçilmesinde rol oynayan beyin ağıdır.
Merkezî yürütücü ağ|Hedefe yönelik dikkat, çalışma belleği ve problem çözmeyle ilişkili beyin ağıdır.
Anterior insula|Beden içi duyumları, duyguları ve önemli uyaranları bütünleştirmede rol oynayan beyin bölgesidir.
Orbitofrontal korteks|Ödül değerini değerlendirme ve karar verme süreçleriyle ilişkili frontal beyin alanıdır.
Dorsolateral prefrontal korteks|Planlama, çalışma belleği ve bilişsel kontrol süreçlerine katkı sağlayan kortikal alandır.
Ventromedial prefrontal korteks|Duygusal değer biçme, karar verme ve kendilikle ilişkili işlemlerde rol oynayan alandır.
Nukleus akkumbens|Ödül, motivasyon ve pekiştirmeyle ilişkili bazal ön beyin yapısıdır.
Talamus|Birçok duyusal ve motor sinyalin kortekse iletilmesinde görev alan beyin yapısıdır.
Hipotalamus|Hormon, açlık, susuzluk, uyku ve beden dengesini düzenlemede rol oynayan beyin alanıdır.
Beyincik|Hareket koordinasyonunun yanı sıra bazı bilişsel ve duygusal süreçlerde rol oynayan yapıdır.
Beyin sapı|Solunum, uyanıklık ve yaşamsal reflekslerin düzenlenmesinde görev alan beyin bölümüdür.
Retiküler aktive edici sistem|Uyanıklık ve dikkat düzeyinin düzenlenmesine katkı sağlayan beyin sapı ağıdır.
Asetilkolin|Dikkat, öğrenme, bellek ve kas hareketlerinde görev alan nörotransmitterdir.
Histamin|Uyanıklık ve çeşitli bedensel süreçlerde rol oynayan kimyasal ileticidir.
Oksitosin|Doğum ve süt salınımının yanı sıra sosyal bağlanma süreçleriyle ilişkili hormondur.
Vazopressin|Su dengesi ve bazı sosyal davranış süreçlerinde rol oynayan hormondur.
Endorfin|Vücudun ürettiği, ağrı algısı ve ödülle ilişkili opioid etkili peptitlerdir.
Endokannabinoid sistem|İştah, ağrı, stres ve sinaptik sinyal düzenlenmesine katkıda bulunan biyolojik sistemdir.
Sirkadiyen faz kayması|Biyolojik uyku-uyanıklık zamanlamasının daha erken veya geç saatlere kaymasıdır.
Sosyal jetlag|Hafta içi ve hafta sonu uyku saatlerinin uyumsuzluğuyla oluşan biyolojik zaman farkıdır.
Kronotip|Bireyin doğal olarak daha erken veya geç uyumaya ve uyanmaya eğilimidir.
Uyku basıncı|Uyanık kalma süresi uzadıkça artan biyolojik uyuma ihtiyacıdır.
Uyku ataleti|Uyanmanın hemen ardından geçici sersemlik ve düşük zihinsel performans yaşanmasıdır.
Mikro uyku|Kişinin farkına varmadan saniyeler süren kısa uyku dönemleridir.
Uyku apnesi|Uyku sırasında solunumun tekrarlayan biçimde durması veya azalmasıyla seyreden durumdur.
Huzursuz bacak sendromu|Özellikle dinlenirken bacaklarda hareket ettirme ihtiyacı ve rahatsızlık hissidir.
Gecikmiş uyku fazı|Uykuya dalma ve uyanma zamanının istenen saatlerden belirgin geç olmasıdır.
İleri uyku fazı|Uykuya dalma ve uyanmanın alışılmış saatlerden belirgin erken olmasıdır.
Gece terörü|Genellikle derin uykudan ani korku ve otonom uyarılmayla kısmi uyanmadır.
Uyurgezerlik|Uyku sırasında yürüme veya karmaşık davranışların görülebildiği parasomnidir.
REM uykusu davranış bozukluğu|REM dönemindeki kas gevşemesinin bozulmasıyla rüya içeriğine uygun hareketlerin yapılmasıdır.
Hipnagojik halüsinasyon|Uykuya dalma sırasında ortaya çıkan canlı duyusal yaşantılardır.
Hipnopompik halüsinasyon|Uykudan uyanma sırasında ortaya çıkan canlı duyusal yaşantılardır.
Uyku felci|Uykuya dalarken veya uyanırken kısa süre hareket edememe yaşantısıdır.
Lucid rüya|Kişinin rüya sırasında rüya gördüğünün farkında olduğu yaşantıdır.
Bellek konsolidasyonu|Yeni öğrenilen bilgilerin zaman içinde daha kalıcı belleğe yerleşme sürecidir.
Bellek geri çağırma|Önceden öğrenilmiş bilgiyi gerektiğinde yeniden hatırlama sürecidir.
Prospektif bellek|Gelecekte yapılması planlanan bir işi doğru zamanda hatırlama becerisidir.
İşlemsel bellek|Bisiklet sürmek gibi beceri ve alışkanlıkların öğrenilmiş bilgisini kapsayan bellek türüdür.
Otobiyografik bellek|Kişinin kendi yaşam öyküsündeki olaylara ve kişisel bilgilere ilişkin belleğidir.
Kaynak belleği|Öğrenilen bilginin nereden, ne zaman veya kimden edinildiğini hatırlama becerisidir.
Bellek yanlılığı|Bazı bilgilerin duygusal veya bilişsel nedenlerle diğerlerinden daha kolay hatırlanmasıdır.
Yanlış anı|Gerçekte yaşanmayan veya farklı yaşanan bir olayın anı olarak hatırlanmasıdır.
Anksiyete duyarlılığı|Kaygıya eşlik eden bedensel duyumları tehlikeli veya zararlı olarak yorumlama eğilimidir.
Beklenti kaygısı|Henüz yaşanmamış bir olay ya da belirtinin ortaya çıkma olasılığına yönelik önceden hissedilen kaygıdır.
Belirsizliğe tahammülsüzlük|Sonucu bilinmeyen durumları katlanılması güç veya tehdit edici görme eğilimidir.
Kaçınma davranışı|Kaygıyı azaltmak amacıyla korkulan durum, düşünce ya da etkinlikten uzak durmadır.
Güvenlik davranışı|Korkulan sonucu önlemeye çalışırken kaygının sürmesine katkıda bulunabilen koruyucu alışkanlıktır.
Panik atağı|Ani başlayan, kısa sürede yoğunlaşan korku veya rahatsızlıkla birlikte bedensel belirtilerin yaşandığı dönemdir.
Panik döngüsü|Bedensel duyumların tehlike işareti sayılarak korkuyu ve duyumları karşılıklı artırdığı süreçtir.
Hiperventilasyon|İhtiyaçtan hızlı veya derin solunum nedeniyle kandaki karbondioksit düzeyinin düşebilmesidir.
Bedensel hipervijilans|Kişinin kalp atışı veya solunumu gibi bedensel duyumlarını aşırı dikkatle izlemesidir.
Sağlık kaygısı|Bedensel belirtilerin ciddi hastalık göstergesi olabileceğine dair yoğun ve süregelen endişedir.
Hastalık kaygısı bozukluğu|Ciddi bir hastalığa sahip olma veya yakalanma korkusunun belirgin sıkıntı yarattığı durumdur.
Somatik belirti bozukluğu|Bedensel yakınmalara eşlik eden aşırı düşünce, kaygı veya davranışlarla seyreden tablodur.
Konversiyon bozukluğu|Sinir sistemi işlevleriyle ilgili belirtilerin bilinen nörolojik hastalık örüntüsüyle uyuşmaması durumudur.
İşlevsel nörolojik belirti|Hareket, duyu veya nöbet benzeri yakınmaların sinir sistemi işleyişindeki değişimlerle ilişkili belirtisidir.
Psikojenik epileptik olmayan nöbet|Epileptik elektriksel boşalımla açıklanmayan, nöbete benzeyen atakların klinik adlandırmalarından biridir.
Kaygı hiyerarşisi|Korkulan durumların daha az kaygı verenden daha çoğa doğru sıralandığı çalışma listesidir.
Sistematik duyarsızlaştırma|Korkulan uyaranlara aşamalı yaklaşmayı gevşeme gibi becerilerle birleştiren davranışçı yöntemdir.
İnteroceptif maruz bırakma|Korkulan bedensel duyumlarla güvenli ve kontrollü biçimde karşılaşmaya dayalı uygulamadır.
Bilişsel yeniden yapılandırma|İşlevsiz düşüncelerin kanıtlar ışığında sorgulanıp daha dengeli alternatiflerle değerlendirilmesidir.
Davranış deneyi|Bir inancın doğruluğunu gündelik yaşamda planlı ve gözlenebilir biçimde sınama uygulamasıdır.
Otomatik düşünce|Bir olay karşısında hızla beliren ve çoğu zaman sorgulanmadan kabul edilen zihinsel yorumdur.
Temel inanç|Kişinin kendisi, başkaları veya dünya hakkında geliştirdiği köklü ve genelleyici kabuldür.
Ara inanç|Temel inançlarla günlük otomatik düşünceler arasında yer alan kural, tutum veya varsayımdır.
Olumsuz benlik şeması|Kişinin kendi değerine veya yeterliliğine ilişkin süreğen olumsuz bilgi örgütlenmesidir.
Düşünce-duygu-davranış ilişkisi|Bir olayı yorumlama biçimi, duygusal tepki ve davranışın karşılıklı etkileşimini anlatır.
Düşünce bastırma|İstenmeyen düşünceleri bilinçli olarak uzaklaştırmaya çalışma; bazen düşüncelerin sıklaşmasına yol açabilir.
Düşünce-eylem kaynaşması|Bir düşünceyi yaşamanın o eylemi gerçekleştirmekle ahlaken eşit ya da gerçekleşme olasılığını artırır sayılmasıdır.
Büyüsel düşünce|Düşünce veya ritüellerin nedensel bağlantı olmaksızın olayları etkileyebileceğine inanılmasıdır.
Obsesif kuşku|Kesinlik sağlanmasına rağmen kişinin aynı olasılığı tekrar tekrar sorgulamasıdır.
Kontrol kompulsiyonu|Kaygıyı azaltmak amacıyla kapı, ocak veya başka durumları tekrarlayıcı biçimde denetlemedir.
Yıkama kompulsiyonu|Kirlenme kaygısını azaltmak için gereğinden fazla yıkama veya temizleme davranışıdır.
Zihinsel ritüel|Kaygıyı azaltmak için zihinden sayı sayma, tekrar etme veya belirli ifadeleri düşünme davranışıdır.
Simetri obsesyonu|Nesnelerin tam dengeli veya belirli düzende olması gerektiğine ilişkin ısrarlı takıntıdır.
Bulaşma obsesyonu|Mikrop, kir veya zararlı maddeyle temas etme olasılığına ilişkin yoğun ve tekrarlayan düşüncedir.
Zarar verme obsesyonu|İstem dışı gelen, kendine ya da başkasına zarar verme içerikli rahatsız edici düşüncedir.
Dini obsesyon|İnanç veya ibadetle ilgili istenmeyen düşünceler nedeniyle yoğun suçluluk ve kuşku yaşanmasıdır.
İlişki obsesyonu|İlişkinin doğruluğu veya partnerin özellikleri hakkında tekrarlayan kuşku ve zihinsel uğraştır.
Biriktirme bozukluğu|Eşyaları elden çıkarmakta kalıcı güçlük ve bunun yaşam alanını bozmasıyla seyreden durumdur.
Trikotillomani|Yineleyici saç veya kıl yolma sonucunda belirgin kayıp oluşmasıyla seyreden bozukluktur.
Deri yolma bozukluğu|Deride lezyonlara neden olabilen tekrarlayan yolma davranışıdır.
Beden dismorfik bozukluğu|Görünümde fark edilmeyen veya küçük kusurlarla aşırı zihinsel uğraş ve tekrarlayıcı davranışlardır.
Referans sanrısı|Nötr olayların doğrudan kendisiyle ilgili özel mesajlar içerdiğine ilişkin sarsılmaz yanlış inançtır.
Perseküsyon sanrısı|Kişinin izlenme, zarar görme veya kendisine komplo kurulması konusunda sabit yanlış inancıdır.
Somatik sanrı|Bedende olağan dışı veya gerçek dışı bir durum bulunduğuna ilişkin sarsılmaz yanlış inançtır.
Nihilistik sanrı|Kendisinin, organlarının veya dünyanın var olmadığına ilişkin ağır gerçeklik dışı inançtır.
Erotomanik sanrı|Bir başkasının kendisine âşık olduğu yönünde kanıtlarla değişmeyen yanlış inançtır.
Kıskançlık sanrısı|Partnerin sadakatsiz olduğuna ilişkin gerçeklikle uyuşmayan, sarsılmaz inançtır.
Düşünce sokulması|Düşüncelerin kişinin kendi zihnine dışarıdan yerleştirildiği yaşantısıdır.
Düşünce çekilmesi|Düşüncelerin kişinin zihninden başka bir güç tarafından alındığını hissetmesidir.
Düşünce yayınlanması|Kişinin düşüncelerinin başkaları tarafından doğrudan bilindiğine veya yayıldığına inanmasıdır.
İşitsel varsanı|Dışarıda gerçek ses kaynağı yokken konuşma veya başka sesler duyma yaşantısıdır.
Görsel varsanı|Dışarıda karşılığı olmayan kişi, nesne veya görüntülerin algılanmasıdır.
Olfaktör varsanı|Gerçek bir koku kaynağı olmadan koku algılanması yaşantısıdır.
Dokunsal varsanı|Dış uyaran olmaksızın ten üzerinde temas veya hareket hissedilmesidir.
Komut veren sesler|Kişiye bir davranışı yapmasını söyleyen işitsel varsanı içeriğidir; güvenlik açısından değerlendirilir.
İçgörü düzeyi|Kişinin yaşantısının veya inancının hastalıkla ilişkili olabileceğini kavrama derecesidir.
Gerçeklik değerlendirmesi|Algı ve düşünceleri dış dünyanın doğrulanabilir özellikleriyle karşılaştırma becerisidir.
Negatif semptomlar|Duygusal ifade, konuşma, istek veya sosyal katılımın azalması gibi belirtilerdir.
Alogi|Konuşmanın miktarında veya içeriğinin zenginliğinde belirgin azalmadır.
Asosyalite|Başkalarıyla ilişki kurma veya ilişkileri sürdürmeye yönelik isteğin azalmasıdır.
Anosognozi|Kişinin sahip olduğu hastalık veya işlev kaybını nörolojik nedenlerle fark edememesidir.
Düşünce uçuşması|Fikirlerin hızlı ve art arda geldiği, çağrışımların konuşma akışını hızlandırdığı durumdur.
Çağrışım gevşekliği|Düşünceler arasındaki mantıksal bağlantıların belirgin biçimde zayıflamasıdır.
Neolojizm|Kişinin kendisine özgü yeni sözcükler üretmesidir.
Perseverasyon|Bir yanıt veya davranışın uygun olmadığı durumda bile tekrarlanarak sürdürülmesidir.
Abuli|Karar verme ve harekete geçme isteğinde belirgin azalma olmasıdır.
Açık uçlu soru|Kişinin kendini ayrıntılı anlatmasına alan açan, evet-hayırla sınırlı olmayan sorudur.
Adaptasyon|Kişinin yeni koşullara ruhsal ve davranışsal olarak uyum sağlamasıdır.
Afazi|Dil becerilerinin beyin kaynaklı olarak bozulması; konuşma veya anlama güçlüğüdür.
Affekt|Kişinin o anda dışarıdan gözlenen duygusal ifadesidir.
Akatizi|Özellikle bazı ilaçlarla ilişkili olabilen iç huzursuzluk ve yerinde duramama halidir.
Akinezi|Hareket başlatma veya sürdürmede belirgin yavaşlama ya da azalmadır.
Akut stres tepkisi|Ani ve zorlayıcı bir olaydan hemen sonra ortaya çıkan geçici yoğun stres belirtileridir.
Algı|Duyulardan gelen bilgilerin beyin tarafından anlamlandırılmasıdır.
Algı bozukluğu|Gerçek uyaranların yanlış yorumlanması veya olmayan uyaranların algılanmasıdır.
Amnezi|Bellek kaybı veya bazı bilgileri hatırlamada belirgin güçlük yaşanmasıdır.
Anhedoni|Önceden keyif veren etkinliklerden artık zevk alamama halidir.
Anksiyete|Tehdit algısı, endişe ve bedensel uyarılma ile seyreden kaygı durumudur.
Apati|İlgi, motivasyon ve duygusal katılımda belirgin azalma olmasıdır.
Apraksi|Kas gücü korunmasına rağmen öğrenilmiş amaçlı hareketleri yapmakta zorlanmadır.
Avolisyon|İstek ve hedefe yönelik davranış başlatmada belirgin azalma olmasıdır.
Bilinç|Kişinin kendisinin ve çevresinin farkında olma durumudur.
Bilinç bulanıklığı|Dikkat, farkındalık ve çevreyi değerlendirme becerisinde bozulmadır.
Blokaj|Konuşma veya düşünce akışının aniden kesilmesi durumudur.
Çökkün duygudurum|Üzüntü, isteksizlik ve enerji azalmasıyla giden düşük ruh hali durumudur.
Derealizasyon|Çevrenin gerçek değilmiş, uzak veya yabancıymış gibi algılanmasıdır.
Depersonalizasyon|Kişinin kendisine, bedenine veya duygularına yabancılaşmış gibi hissetmesidir.
Dezorganize konuşma|Düşünce akışının dağılması nedeniyle konuşmanın anlaşılması güç hale gelmesidir.
Dissosiyasyon|Bilinç, bellek, kimlik veya algı bütünlüğünde geçici kopma yaşanmasıdır.
Duygudurum|Kişinin süreklilik gösteren genel duygusal halidir.
Dürtüsellik|Sonuçlarını yeterince değerlendirmeden hızlı ve ani davranma eğilimidir.
Ekolali|Başkasının söylediği sözcük veya cümlelerin istemsiz biçimde tekrarlanmasıdır.
Ekopraksi|Başkasının hareketlerinin istemsiz biçimde taklit edilmesidir.
Künt duygulanım|Duygusal ifadenin belirgin şekilde azalması ve yüz ifadesinin sınırlanmasıdır.
İçgörü|Kişinin yaşadığı ruhsal belirtileri ve yardım ihtiyacını fark edebilmesidir.
İllüzyon|Var olan bir uyaranın yanlış algılanmasıdır.
İntihar düşüncesi|Kişinin yaşamına son verme düşüncelerinin zihninde yer almasıdır.
Katatoni|Hareket, duruş, konuşma ve tepki verme alanlarında belirgin bozulma ile seyreden durumdur.
Konfüzyon|Zihinsel karışıklık, yönelim bozukluğu ve dikkat dağınıklığı halidir.
Labil duygulanım|Duygusal ifadenin kısa sürede ve belirgin biçimde değişmesidir.
Psikomotor ajitasyon|Kaygı veya gerginlikle artmış hareketlilik, huzursuzluk ve yerinde duramamadır.
Psikomotor retardasyon|Hareket, konuşma ve düşünce akışında belirgin yavaşlamadır.
Ruminasyon|Aynı olumsuz düşüncelerin tekrar tekrar zihinde dönüp durmasıdır.
Somatizasyon|Ruhsal sıkıntıların bedensel belirtiler şeklinde yaşanmasıdır.
Tetikleyici|Belirtiyi başlatan veya artıran olay, düşünce, ortam ya da uyarandır.
Majör depresif bozukluk|En az iki hafta süren çökkünlük, ilgi kaybı ve işlevsellik azalmasıyla giden depresyon tablosudur.
Distimi|Uzun süreli, daha hafif ama kalıcı depresif duygu durumudur.
Bipolar I bozukluk|En az bir manik dönemle seyreden duygudurum bozukluğudur.
Bipolar II bozukluk|Hipomanik dönemler ve depresif dönemlerle seyreden bipolar spektrum tablosudur.
Siklotimi|Uzun süreli hafif hipomanik ve depresif dalgalanmalarla giden durumdur.
Yaygın anksiyete bozukluğu|Birçok konu hakkında kontrol edilmesi zor, sürekli endişe yaşanmasıdır.
Panik bozukluk|Beklenmedik panik ataklar ve tekrar yaşanacağına dair kaygıyla seyreden bozukluktur.
Agorafobi|Kaçmanın zor olabileceği yerlerde yoğun kaygı ve kaçınma yaşanmasıdır.
Sosyal anksiyete bozukluğu|Sosyal ortamlarda değerlendirilme, utanma veya eleştirilme korkusudur.
Özgül fobi|Belirli nesne veya durumlara karşı aşırı ve kalıcı korku yaşanmasıdır.
Obsesif kompulsif bozukluk|İstenmeyen takıntılı düşünceler ve bunları azaltmaya yönelik tekrar eden davranışlarla seyreden bozukluktur.
Travma sonrası stres bozukluğu|Travmatik olay sonrası yeniden yaşantılama, kaçınma ve aşırı uyarılma belirtileridir.
Akut stres bozukluğu|Travmatik olaydan sonraki ilk haftalarda ortaya çıkan yoğun stres belirtileridir.
Uyum bozukluğu|Yaşam değişikliği veya stresöre verilen belirgin duygusal ve davranışsal zorlanmadır.
DEHB|Dikkat eksikliği, dürtüsellik ve/veya hiperaktivite belirtileriyle seyreden nörogelişimsel durumdur.
Otizm spektrum bozukluğu|Sosyal iletişim güçlükleri ve sınırlı tekrarlayıcı davranış örüntüleriyle seyreden nörogelişimsel durumdur.
Şizofreni|Sanrı, varsanı, dezorganize düşünce ve işlevsellik kaybıyla seyredebildiği ciddi psikiyatrik bozukluktur.
Şizoaffektif bozukluk|Psikotik belirtilerle birlikte belirgin duygudurum dönemlerinin görüldüğü tablodur.
Sanrısal bozukluk|Gerçeklikle uyuşmayan sabit inançların ön planda olduğu psikiyatrik bozukluktur.
Kısa psikotik bozukluk|Kısa süreli sanrı, varsanı veya dezorganize davranışlarla giden psikotik tablodur.
Madde kullanım bozukluğu|Maddenin zararlarına rağmen kullanımın sürdürülmesi ve kontrol kaybı yaşanmasıdır.
Alkol kullanım bozukluğu|Alkol kullanımını kontrol etmekte güçlük ve olumsuz sonuçlara rağmen sürdürmedir.
Kumar oynama bozukluğu|Zararlarına rağmen kumar oynama dürtüsünün kontrol edilememesidir.
Anoreksiya nervoza|Kilo alma korkusu, beden algısı bozulması ve belirgin kilo kaybıyla giden yeme bozukluğudur.
Bulimiya nervoza|Tıkınırcasına yeme atakları ve telafi davranışlarıyla seyreden yeme bozukluğudur.
Tıkınırcasına yeme bozukluğu|Kontrol kaybıyla kısa sürede fazla miktarda yeme atakları yaşanmasıdır.
İnsomnia|Uykuya dalma, uykuyu sürdürme veya dinlenmiş uyanmada güçlük yaşanmasıdır.
Hipersomnia|Yeterli uykuya rağmen aşırı uykululuk veya uzun uyuma ihtiyacıdır.
Kabus bozukluğu|Tekrarlayan korkutucu rüyalar nedeniyle uyku kalitesinin bozulmasıdır.
Parasomni|Uyku sırasında ortaya çıkan olağandışı davranış, hareket veya deneyimlerdir.
Psikoterapi|Ruhsal sorunları konuşma, anlamlandırma ve değişim hedefiyle ele alan tedavi yöntemidir.
Bilişsel davranışçı terapi|Düşünce, duygu ve davranış ilişkisini ele alan yapılandırılmış psikoterapi yaklaşımıdır.
Psikodinamik terapi|Belirtilerin içsel çatışmalar, ilişkiler ve geçmiş deneyimlerle bağını araştıran terapi yaklaşımıdır.
Destekleyici psikoterapi|Kişinin baş etme becerilerini, güvenini ve işlevselliğini güçlendirmeyi hedefler.
EMDR|Travmatik anıların işlenmesine yönelik göz hareketleri ve çift yönlü uyarım kullanan terapi yöntemidir.
Maruz bırakma|Kaygı yaratan durumla güvenli ve kontrollü biçimde karşılaşma tekniğidir.
Tepki önleme|OKB’de kompulsiyon yapmadan kaygıyla kalmayı öğrenmeye yönelik tekniktir.
Psikoeğitim|Kişiye yaşadığı durum, belirtiler ve tedavi seçenekleri hakkında bilgi verilmesidir.
Motivasyonel görüşme|Değişim isteğini ve içsel motivasyonu güçlendiren görüşme yaklaşımıdır.
Şema terapi|Erken dönemden gelen kalıplaşmış duygu ve düşünce örüntülerini ele alan terapi yaklaşımıdır.
Kabul ve kararlılık terapisi|Zor duygularla mücadeleyi azaltıp değer odaklı yaşamı güçlendiren terapi yaklaşımıdır.
Diyalektik davranış terapisi|Duygu düzenleme, kriz yönetimi ve ilişki becerilerini geliştiren yapılandırılmış terapi yaklaşımıdır.
Aile terapisi|Aile içi iletişim, roller ve ilişki örüntülerini ele alan terapi yöntemidir.
Çift terapisi|Partnerler arasındaki iletişim, çatışma ve bağlanma örüntülerini ele alır.
Grup terapisi|Benzer güçlükleri yaşayan kişilerin terapist eşliğinde grup içinde çalışmasıdır.
Terapötik ittifak|Danışan ve terapist arasındaki güven, iş birliği ve ortak hedef ilişkisidir.
Formülasyon|Belirtilerin kişinin yaşam öyküsü, ilişkileri ve mevcut koşullarıyla birlikte anlamlandırılmasıdır.
Aktarım|Kişinin geçmiş ilişkilerindeki duygu ve beklentileri terapiste yansıtmasıdır.
Karşı aktarım|Terapistin danışana yönelik kendi duygusal tepkilerini fark etmesi gereken süreçtir.
Direnç|Değişim veya farkındalık sürecine karşı bilinçli ya da bilinçdışı zorlanmadır.
Savunma mekanizması|Kişinin kaygı ve çatışmalarla baş etmek için kullandığı otomatik ruhsal yöntemlerdir.
Bastırma|Rahatsız edici düşünce veya anıların bilinç dışında tutulmasıdır.
Yansıtma|Kişinin kabul etmekte zorlandığı duygu veya düşünceleri başkasına atfetmesidir.
İnkar|Rahatsız edici gerçeğin kabul edilmemesi veya yok sayılmasıdır.
Rasyonalizasyon|Davranışa sonradan mantıklı ve kabul edilebilir açıklamalar getirme eğilimidir.
Entelektüalizasyon|Duygusal konuyu aşırı zihinsel ve mesafeli biçimde ele alma savunmasıdır.
Regresyon|Stres altında daha erken gelişim dönemlerine ait davranış biçimlerine dönmedir.
Bölme|Kişileri veya durumları tamamen iyi ya da tamamen kötü olarak algılama eğilimidir.
Sublimasyon|Kabul edilmesi zor dürtülerin üretken ve toplumsal olarak uygun alanlara yönlendirilmesidir.
Mentalizasyon|Kendi ve başkalarının davranışlarını duygu, düşünce ve niyetlerle anlayabilme becerisidir.
Klinik görüşme|Belirti, öykü, işlevsellik ve ihtiyaçların uzman tarafından değerlendirildiği görüşmedir.
Mental durum muayenesi|Görünüm, konuşma, duygu, düşünce, algı ve bilişin sistemli değerlendirilmesidir.
Öykü alma|Kişinin mevcut yakınmaları, geçmişi, aile ve yaşam koşullarının ayrıntılı öğrenilmesidir.
Ayırıcı tanı|Benzer belirtilerle seyreden farklı durumların birbirinden ayrılması sürecidir.
Tanı ölçütleri|Bir bozukluğun tanımlanması için kullanılan belirti, süre ve işlevsellik kriterleridir.
DSM|Amerikan Psikiyatri Birliği tarafından yayımlanan ruhsal bozukluklar tanı sınıflandırmasıdır.
ICD|Dünya Sağlık Örgütü tarafından yayımlanan hastalıkların uluslararası sınıflandırmasıdır.
Ölçek|Belirti şiddeti veya işlevselliği sistemli değerlendirmek için kullanılan ölçme aracıdır.
Tarama testi|Bir belirti alanı için ön bilgi sağlayan, tanı koymak için tek başına yeterli olmayan testtir.
PHQ-9|Depresif belirtilerin son iki haftadaki şiddetini değerlendiren kısa ölçektir.
GAD-7|Yaygın kaygı belirtilerini değerlendirmek için kullanılan yedi maddelik ölçektir.
ASRS|Erişkin DEHB belirtilerini taramak için kullanılan öz bildirim ölçeğidir.
MDQ|Bipolar spektrum açısından risk işaretlerini taramaya yardımcı ölçektir.
Y-BOCS|OKB belirtilerinin şiddetini değerlendirmede kullanılan klinik ölçektir.
PANSS|Şizofrenide pozitif, negatif ve genel belirtileri değerlendiren ölçektir.
Risk değerlendirmesi|Kendine veya başkasına zarar, ihmal ya da acil durum olasılıklarının değerlendirilmesidir.
İntihar riski|Kişinin kendine zarar verme veya yaşamına son verme olasılığının klinik değerlendirmesidir.
İşlevsellik|Kişinin iş, okul, ilişki ve günlük yaşam sorumluluklarını sürdürebilme düzeyidir.
Remisyon|Belirtilerin belirgin ölçüde azalması veya kaybolması durumudur.
Nüks|Düzelmiş belirtilerin yeniden ortaya çıkmasıdır.
Relaps|Tedaviyle yatışan hastalık belirtilerinin tekrar alevlenmesidir.
Prognoz|Bir durumun zaman içindeki beklenen seyri ve gidişatıdır.
Komorbidite|Bir kişide birden fazla ruhsal veya bedensel durumun birlikte bulunmasıdır.
Premorbid|Hastalık başlamadan önceki kişilik, işlevsellik ve yaşam özelliklerini ifade eder.
Prodrom|Hastalığın belirginleşmesinden önce görülen erken uyarı belirtileridir.
Epizod|Belirli süre devam eden hastalık veya duygudurum dönemidir.
Atak|Belirtilerin belirgin şekilde başladığı veya yoğunlaştığı dönemdir.
Şiddet derecesi|Belirtilerin hafif, orta veya ağır düzeyde olmasını ifade eder.
Tedavi yanıtı|Uygulanan tedaviye belirtilerin ne ölçüde azalarak karşılık verdiğidir.
İzlem|Tedavi sürecinde belirtilerin, yan etkilerin ve işlevselliğin düzenli takip edilmesidir.
Antidepresan|Depresyon ve bazı kaygı bozukluklarında kullanılan ilaç grubudur.
SSRI|Serotonin geri alımını azaltarak etki gösteren yaygın antidepresan ilaç grubudur.
SNRI|Serotonin ve noradrenalin üzerinde etkili olan antidepresan ilaç grubudur.
Trisiklik antidepresan|Daha eski kuşak antidepresanlardan oluşan ilaç grubudur.
MAOI|Monoamin oksidaz enzimini etkileyen, özel dikkat gerektiren antidepresan grubudur.
Duygudurum düzenleyici|Bipolar bozuklukta duygudurum dalgalanmalarını dengelemeye yardımcı ilaç grubudur.
Lityum|Bipolar bozukluk tedavisinde kullanılan klasik duygudurum düzenleyicidir.
Valproat|Bipolar bozukluk ve bazı nörolojik durumlarda kullanılan duygudurum düzenleyicidir.
Lamotrijin|Özellikle bipolar depresyonun önlenmesinde kullanılabilen duygudurum düzenleyicidir.
Karbamazepin|Bazı bipolar ve nörolojik durumlarda kullanılan duygudurum düzenleyici ilaçtır.
Antipsikotik|Psikotik belirtiler, bazı duygudurum durumları ve ajitasyonda kullanılan ilaç grubudur.
Atipik antipsikotik|Yeni kuşak antipsikotik ilaçları ifade eder.
Tipik antipsikotik|Daha eski kuşak antipsikotik ilaçları ifade eder.
Benzodiazepin|Kısa süreli kaygı, uykusuzluk veya ajitasyonda kullanılabilen yatıştırıcı ilaç grubudur.
Anksiyolitik|Kaygı belirtilerini azaltmak için kullanılan ilaçları ifade eder.
Hipnotik|Uykuya dalmayı veya uykuyu sürdürmeyi kolaylaştıran ilaç grubudur.
Stimülan|Dikkat ve uyanıklığı artırabilen, DEHB tedavisinde kullanılan ilaç grubudur.
Atomoksetin|DEHB tedavisinde kullanılan, stimülan olmayan bir ilaçtır.
Yan etki|İlacın beklenen tedavi edici etkisi dışında ortaya çıkabilen istenmeyen etkidir.
Etkileşim|İki ilaç, madde veya besinin birbirinin etkisini değiştirmesidir.
Doz titrasyonu|İlacın dozunun klinik yanıta göre aşamalı biçimde ayarlanmasıdır.
İlaç uyumu|Kişinin ilacı önerilen şekilde ve düzenli kullanma düzeyidir.
Kesilme belirtileri|Bazı ilaçlar azaltılırken veya bırakılırken ortaya çıkabilen geçici belirtilerdir.
Tolerans|Aynı etkinin oluşması için zamanla daha yüksek doz gereksinimi gelişmesidir.
Bağımlılık|Kullanımın kontrol edilememesi ve zararlarına rağmen sürdürülmesidir.
Yoksunluk|Madde veya ilacın kesilmesiyle ortaya çıkan bedensel ve ruhsal belirtilerdir.
Farmakokinetik|İlacın vücutta emilim, dağılım, metabolizma ve atılım sürecidir.
Farmakodinamik|İlacın vücutta hangi mekanizmalarla etki gösterdiğini inceleyen alandır.
Plasebo|Etkin madde içermeyen ancak beklenti etkisiyle değişim oluşturabilen uygulamadır.
Tedaviye direnç|Yeterli süre ve dozda tedaviye rağmen belirtilerin beklenen düzeyde düzelmemesidir.
Nörotransmitter|Sinir hücreleri arasında iletişimi sağlayan kimyasal habercidir.
Serotonin|Duygudurum, kaygı, uyku ve iştahla ilişkili önemli nörotransmitterdir.
Dopamin|Ödül, motivasyon, hareket ve psikotik belirtilerle ilişkili nörotransmitterdir.
Noradrenalin|Uyanıklık, dikkat ve stres yanıtıyla ilişkili nörotransmitterdir.
GABA|Beyinde yatıştırıcı etkisi olan temel inhibitör nörotransmitterdir.
Glutamat|Beyinde öğrenme ve uyarılma süreçlerinde rol alan temel uyarıcı nörotransmitterdir.
Kortizol|Stres yanıtında salgılanan temel hormonlardan biridir.
Melatonin|Uyku-uyanıklık döngüsünü düzenlemeye yardımcı hormondur.
Limbik sistem|Duygu, motivasyon ve bellek süreçlerinde rol alan beyin ağıdır.
Amigdala|Korku, tehdit algısı ve duygusal öğrenmede önemli beyin bölgesidir.
Hipokampus|Belleğin oluşumu ve bağlamsal öğrenmede rol alan beyin bölgesidir.
Prefrontal korteks|Planlama, karar verme, dürtü kontrolü ve değerlendirmede görev alan beyin bölgesidir.
Bazal ganglionlar|Hareket, alışkanlık ve tekrar eden davranışların düzenlenmesinde rol oynar.
Anterior singulat korteks|Hata fark etme, dikkat ve duygusal düzenlemede rol alan beyin bölgesidir.
HPA aksı|Stres yanıtını düzenleyen hipotalamus, hipofiz ve adrenal bezler arasındaki sistemdir.
Nöroplastisite|Beynin deneyim ve öğrenmeye bağlı olarak değişebilme kapasitesidir.
Ödül sistemi|Haz, motivasyon ve pekiştirme süreçlerinde görev alan beyin ağıdır.
Yürütücü işlevler|Planlama, esneklik, dikkat, çalışma belleği ve dürtü kontrolü becerileridir.
Dikkat|Zihinsel kaynakları belirli bir uyarana veya göreve yönlendirme becerisidir.
Çalışma belleği|Bilgiyi kısa süre zihinde tutup işlemeyi sağlayan bilişsel sistemdir.
Epizodik bellek|Kişisel yaşantı ve olayların zaman ve bağlamıyla hatırlanmasıdır.
Semantik bellek|Kavramlar, kelimeler ve genel bilgilerle ilgili bellektir.
Duygu düzenleme|Duyguları fark etme, adlandırma ve uygun biçimde yönetebilme becerisidir.
Stres yanıtı|Tehdit veya zorlanma karşısında beden ve zihnin verdiği uyum tepkisidir.
Sirkadiyen ritim|Yaklaşık 24 saatlik biyolojik uyku, hormon ve enerji döngüsüdür.
Uyku hijyeni|Sağlıklı uyku için önerilen düzenli alışkanlık ve çevresel koşullardır.
REM uykusu|Rüyaların sık görüldüğü, bellek ve duygu işlemede rol alan uyku evresidir.
Non-REM uykusu|Derin dinlenme ve bedensel yenilenme süreçlerinin yoğun olduğu uyku evreleridir.
Bilişsel çarpıtma|Gerçekliği olduğundan daha olumsuz veya tek yönlü yorumlama eğilimidir.
Katastrofizasyon|Bir durumu en kötü olasılık üzerinden değerlendirme eğilimidir.
Kişilik|Kişinin kalıcı düşünme, hissetme, ilişki kurma ve davranış örüntüleridir.
Kişilik bozukluğu|Kişinin ve ilişkilerinin işlevselliğini bozan katı kişilik örüntüleridir.
Borderline kişilik örüntüsü|Duygu dalgalanması, terk edilme hassasiyeti ve ilişkilerde yoğunlukla seyreden örüntüdür.
Narsisistik kişilik örüntüsü|Özdeğerin kırılgan olduğu, onay ve üstünlük ihtiyacının belirginleştiği örüntüdür.
Kaçıngan kişilik örüntüsü|Eleştirilme ve reddedilme korkusuyla sosyal geri çekilmenin öne çıktığı örüntüdür.
Obsesif kompulsif kişilik|Düzen, kontrol, mükemmeliyetçilik ve katılık eğiliminin baskın olduğu kişilik örüntüsüdür.
Antisosyal kişilik örüntüsü|Toplumsal kuralları ve başkalarının haklarını ihlal etme eğilimiyle seyreden örüntüdür.
Bağımlı kişilik örüntüsü|Karar verme ve sorumluluk almada aşırı destek ihtiyacıyla seyreden örüntüdür.
Histrionik kişilik örüntüsü|Yoğun ilgi görme ihtiyacı ve dramatik duygusal ifadeyle belirgin örüntüdür.
Paranoid kişilik örüntüsü|Başkalarının niyetlerine karşı sürekli kuşku ve güvensizlikle seyreden örüntüdür.
Mizaç|Biyolojik temelli, erken dönemden itibaren görülen duygusal tepki tarzıdır.
Karakter|Kişinin değerleri, seçimleri ve yaşam deneyimleriyle şekillenen özellikleridir.
Benlik|Kişinin kendisiyle ilgili algı, duygu ve düşüncelerinin bütünüdür.
Özsaygı|Kişinin kendisini değerli ve yeterli hissetme düzeyidir.
Kimlik|Kişinin kim olduğu, değerleri ve yaşamda nerede durduğuna dair içsel bütünlüktür.
Bağlanma|Kişinin yakın ilişkilerde güven, yakınlık ve ayrılık deneyimleme biçimidir.
Güvenli bağlanma|Yakınlık ve bağımsızlığın dengeli yaşanabildiği bağlanma örüntüsüdür.
Kaygılı bağlanma|Terk edilme korkusu ve sürekli güvence ihtiyacının belirgin olduğu bağlanmadır.
Kaçıngan bağlanma|Yakınlıktan uzak durma ve duygusal mesafe koyma eğilimiyle giden bağlanmadır.
Dezorganize bağlanma|Yakınlık isteği ile korkunun karıştığı tutarsız bağlanma örüntüsüdür.
Sınır|Kişinin kendisini, ihtiyaçlarını ve ilişkilerdeki kabul edilebilir alanı belirlemesidir.
Duygusal ihmal|Çocuğun duygusal ihtiyaçlarının yeterince görülmemesi ve karşılanmamasıdır.
Travmatik bağlanma|Zarar veren bir ilişkiye korku, bağımlılık ve aralıklı ödülle bağlanma durumudur.
Şema|Kişinin kendisi, diğerleri ve dünya hakkında erken dönemde oluşan kalıcı inanç örüntüsüdür.
Terk edilme şeması|Yakın kişilerin mutlaka ayrılacağı veya bırakacağı beklentisidir.
Kusurluluk şeması|Kişinin kendisini sevilmeye değmez, eksik veya hatalı hissetme örüntüsüdür.
Yetersiz özdenetim|Dürtüleri, sınırları ve uzun vadeli hedefleri yönetmede güçlük örüntüsüdür.
Mükemmeliyetçilik|Hata yapmaya tahammülsüzlük ve sürekli kusursuz olma çabasıdır.
Duygusal yoksunluk|Duygusal ihtiyaçların başkaları tarafından karşılanmayacağı beklentisidir.
Onay arayıcılık|Kişinin değerini büyük ölçüde başkalarının onayına bağlamasıdır.
Çocuk psikiyatrisi|Çocuk ve ergenlerde ruhsal, davranışsal ve gelişimsel sorunları değerlendiren alandır.
Ergenlik|Bedensel, ruhsal ve sosyal değişimlerin yoğun yaşandığı gelişim dönemidir.
Gelişimsel değerlendirme|Çocuğun yaşına uygun bilişsel, dil, sosyal ve motor gelişiminin incelenmesidir.
Ayrılma kaygısı|Bağlanılan kişiden ayrılma durumunda aşırı kaygı ve zorlanma yaşanmasıdır.
Okul reddi|Kaygı, depresyon veya ilişki sorunları nedeniyle okula gitmekte direnç ve zorlanmadır.
Tik bozukluğu|Ani, tekrarlayıcı, istemsiz motor hareketler veya seslerle seyreden durumdur.
Tourette sendromu|Motor ve vokal tiklerin birlikte bulunduğu nörogelişimsel bozukluktur.
Öğrenme güçlüğü|Akademik becerilerde beklenenin altında kalma ve öğrenmede belirgin zorlanmadır.
Özgül öğrenme bozukluğu|Okuma, yazma veya matematik alanında kalıcı öğrenme güçlüğüdür.
Dikkat eksikliği|Dikkati sürdürme, organize olma ve görevleri tamamlama güçlüğüdür.
Hiperaktivite|Yaşa ve ortama göre aşırı hareketlilik ve yerinde durmakta zorlanmadır.
Dürtü kontrolü|Ani istek ve davranışları durdurma veya erteleme becerisidir.
Davranım bozukluğu|Kuralları, başkalarının haklarını veya toplumsal normları tekrarlayan biçimde ihlal etme durumudur.
Karşıt olma karşı gelme bozukluğu|Otorite figürlerine karşı tartışma, inatlaşma ve öfke eğilimiyle seyreden bozukluktur.
Selektif mutizm|Çocuğun bazı sosyal ortamlarda konuşamaması, diğer ortamlarda konuşabilmesidir.
Enürezis|Çocuğun gelişimsel yaşına rağmen tekrarlayan idrar kaçırmasıdır.
Enkoprezis|Gelişimsel yaşa rağmen uygun olmayan yerlere dışkı kaçırma durumudur.
Gelişimsel gecikme|Çocuğun bir veya birden fazla gelişim alanında yaşıtlarının gerisinde kalmasıdır.
Sosyal iletişim|Sözel ve sözel olmayan yollarla ilişki kurma ve anlam paylaşma becerisidir.
Duyusal hassasiyet|Ses, ışık, dokunma veya koku gibi uyaranlara aşırı ya da düşük tepki verme durumudur.
Ebeveyn tutumu|Anne-babanın çocuğa yaklaşım, sınır koyma ve destek verme biçimidir.
Akran ilişkileri|Çocuğun yaşıtlarıyla kurduğu sosyal bağlar ve etkileşimlerdir.
Akran zorbalığı|Bir çocuğun başka bir çocuk tarafından tekrarlayan biçimde fiziksel, sözel veya sosyal zarar görmesidir.
Sınav kaygısı|Sınav öncesi veya sırasında performansı etkileyen yoğun kaygı yaşanmasıdır.
Dijital bağımlılık|Dijital araç kullanımının kontrol edilememesi ve işlevselliği bozmasıdır.
Oyun oynama bozukluğu|Oyun davranışının kontrol edilememesi ve yaşam alanlarını bozmasıdır.
Ergen depresyonu|Ergenlik döneminde çökkünlük, irritabilite, isteksizlik ve işlevsellik azalmasıyla giden depresyondur.
Ergen anksiyetesi|Ergenlik döneminde yoğun kaygı, kaçınma ve bedensel belirtilerle seyreden durumdur.
Kendine zarar verme|Ölüm amacı olmadan bedene kasıtlı zarar verme davranışıdır.
Aile görüşmesi|Tedavi sürecinde aile üyeleriyle bilgi paylaşımı, destek ve planlama amacıyla yapılan görüşmedir.
Mahremiyet|Kişinin özel bilgilerinin ve sınırlarının korunması ilkesidir.
Gizlilik|Görüşme bilgilerinin etik ve yasal sınırlar içinde korunmasıdır.
Bilgilendirilmiş onam|Kişinin değerlendirme veya tedavi hakkında bilgi alarak gönüllü onay vermesidir.
Hasta hakları|Sağlık hizmeti alan kişinin bilgi, mahremiyet, saygı ve güvenlik haklarıdır.
Damgalanma|Ruhsal sorunlar nedeniyle kişiye olumsuz etiket veya ayrımcılık uygulanmasıdır.
Stigma|Toplumsal önyargı ve etiketleme nedeniyle kişinin dışlanması veya değersizleştirilmesidir.
İçselleştirilmiş stigma|Kişinin toplumsal önyargıları kendisine yöneltip değersizlik hissetmesidir.
Psikososyal destek|Ruhsal iyilik hali için sosyal, duygusal ve pratik desteklerin birlikte sunulmasıdır.
Rehabilitasyon|Kişinin işlevselliğini ve toplumsal katılımını güçlendirmeyi amaçlayan süreçtir.
Toplum ruh sağlığı|Ruh sağlığını birey, aile ve toplum düzeyinde destekleyen hizmet alanıdır.
Kriz müdahalesi|Ani ruhsal zorlanma veya risk durumunda hızlı destek ve güvenlik planlamasıdır.
Acil psikiyatri|Kendine zarar, psikotik alevlenme, ağır ajitasyon gibi acil ruhsal durumların değerlendirilmesidir.
Zorunlu yatış|Kişinin ciddi risk taşıdığı durumlarda yasal çerçevede istemsiz yatış uygulanmasıdır.
Adli psikiyatri|Psikiyatrinin hukuk, ceza ehliyeti, rapor ve risk değerlendirmesiyle kesişen alanıdır.
Ehliyet değerlendirmesi|Sürücülük güvenliği açısından ruhsal ve bilişsel durumun değerlendirilmesidir.
Maluliyet|Hastalık veya işlev kaybı nedeniyle çalışma gücünde azalma durumudur.
İşlev kaybı|Ruhsal veya bedensel durum nedeniyle günlük yaşam becerilerinin azalmasıdır.
Bakım veren yükü|Yakınına bakım veren kişinin duygusal, fiziksel ve sosyal zorlanmasıdır.
Sosyal destek|Aile, arkadaş ve çevreden gelen duygusal, pratik ve bilgilendirici destektir.
Psikiyatrik rapor|Klinik değerlendirme sonucunda düzenlenen tıbbi ve yasal belge türüdür.
Konsültasyon|Bir uzmanlık alanından diğerine değerlendirme ve görüş isteme sürecidir.
Liyezon psikiyatrisi|Bedensel hastalıklar ile ruhsal durumlar arasındaki ilişkiyi ele alan psikiyatri alanıdır.
Multidisipliner yaklaşım|Farklı uzmanlık alanlarının birlikte değerlendirme ve tedavi planlamasıdır.
Koruyucu ruh sağlığı|Ruhsal sorunlar ortaya çıkmadan riskleri azaltmayı ve dayanıklılığı artırmayı amaçlar.
Nüks önleme|Belirtilerin tekrarını azaltmak için erken uyarı işaretleri ve baş etme planı oluşturmadır.
Güvenlik planı|Kriz anında kişinin kendini koruması için adım adım hazırlanan destek planıdır.
İlaç kan düzeyi|Bazı ilaçların kandaki miktarının güvenlik ve etki açısından ölçülmesidir.
Psikiyatrik yatış|Yoğun izlem, güvenlik veya tedavi düzenleme amacıyla hastaneye yatış sürecidir.
Taburculuk planı|Yatış sonrası ilaç, kontrol, destek ve kriz planının düzenlenmesidir.
Tedavi planı|Kişinin ihtiyaçlarına göre ilaç, psikoterapi, takip ve yaşam düzeni önerilerinin bütünüdür.
Ajitasyon|Yoğun huzursuzluk, gerginlik ve artmış hareketlilikle kendini gösterebilen klinik durumdur.
Obsesyon|Kişinin istemediği halde zihnine gelen, kaygı uyandıran tekrarlayıcı düşünce veya dürtüdür.
Kompulsiyon|Obsesyonun yarattığı sıkıntıyı azaltmak için yapılan tekrarlayıcı davranış veya zihinsel eylemdir.
Sanrı|Kanıta rağmen değişmeyen, gerçeklikle uyumsuz sabit inançtır.
Varsanı|Dış uyaran olmadan ses, görüntü, koku veya dokunma gibi algı yaşanmasıdır.
Halüsinasyon|Varsanı ile aynı anlamda, dış uyaran olmadan algısal deneyim yaşanmasıdır.
Referans fikirleri|Nötr olayların kişinin kendisiyle özel olarak ilişkili olduğu düşüncesidir.
Paranoid düşünce|Başkalarının zarar verme, izleme veya kötü niyet taşıdığına dair kuşkucu düşüncelerdir.
Grandiyözite|Kişinin önemini, gücünü veya yeteneklerini gerçekçi olmayan biçimde abartmasıdır.
Negatif belirti|Duygu, konuşma, motivasyon ve sosyal katılımda azalma gibi eksilme belirtileridir.
Pozitif belirti|Sanrı, varsanı veya dezorganize davranış gibi olağan deneyime eklenen belirtilerdir.
Dezorganize davranış|Amaca uygun olmayan, dağınık veya öngörülemez davranış örüntüsüdür.
Psikoz|Gerçekliği değerlendirme becerisinde belirgin bozulma ile seyreden klinik durumdur.
Mani|Taşkın veya irritabl duygu durum, enerji artışı ve işlevsellik bozulmasıyla giden dönemdir.
Hipomani|Maniye göre daha hafif, enerji ve duygu durum artışıyla seyreden dönemdir.
Karma özellik|Depresif ve manik belirtilerin aynı dönemde birlikte bulunmasıdır.
Psikotik özellik|Duygudurum veya başka bir bozukluğa sanrı ya da varsanıların eşlik etmesidir.
Zihin okuma|Kanıt olmadan başkalarının ne düşündüğünü bildiğini varsayan bilişsel çarpıtmadır.
Seçici soyutlama|Bir durumun yalnızca olumsuz ayrıntısına odaklanıp bütünü gözden kaçırmadır.
Aşırı genelleme|Tek bir olumsuz deneyimden geniş ve kalıcı sonuçlar çıkarma eğilimidir.
Kişiselleştirme|Kişinin kendisiyle ilgisi sınırlı olayları gereğinden fazla kendi sorumluluğuna bağlamasıdır.
Güvence arama|Kaygıyı azaltmak için tekrar tekrar onay veya rahatlatıcı bilgi isteme davranışıdır.
`;

const glossaryDetailPages = {
  "Dezorganize bağlanma": "dezorganize-baglanma",
  "Direnç": "direnc",
  "DSM": "dsm",
  "Duygudurum düzenleyici": "duygudurum-duzenleyici",
  "Entelektüalizasyon": "entelektualizasyon",
  "Enürezis": "enurezis",
  "Epizod": "epizod",
  "Ergen depresyonu": "ergen-depresyonu",
  "Ergenlik": "ergenlik",
  "Etkileşim": "etkilesim",
  "Benzodiazepin": "benzodiazepin",
  "Bilgilendirilmiş onam": "bilgilendirilmis-onam",
  "Bölme": "bolme",
  "Damgalanma": "damgalanma",
  "Davranım bozukluğu": "davranim-bozuklugu",
  "Doz titrasyonu": "doz-titrasyonu",
  "Duygusal yoksunluk": "duygusal-yoksunluk",
  "Ebeveyn tutumu": "ebeveyn-tutumu",
  "Ehliyet değerlendirmesi": "ehliyet-degerlendirmesi",
  "Enkoprezis": "enkoprezis",
  "Antisosyal kişilik örüntüsü": "antisosyal-kisilik-oruntusu",
  "ASRS": "asrs",
  "Atak": "atak",
  "Atipik antipsikotik": "atipik-antipsikotik",
  "Atomoksetin": "atomoksetin",
  "Ayırıcı tanı": "ayirici-tani",
  "Bakım veren yükü": "bakim-veren-yuku",
  "Bazal ganglionlar": "bazal-ganglionlar",
  "Bağımlı kişilik örüntüsü": "bagimli-kisilik-oruntusu",
  "Benlik": "benlik",
  "Acil psikiyatri": "acil-psikiyatri",
  "Adli psikiyatri": "adli-psikiyatri",
  "Aile görüşmesi": "aile-gorusmesi",
  "Akran ilişkileri": "akran-iliskileri",
  "Aktarım": "aktarim",
  "Amigdala": "amigdala",
  "Anksiyolitik": "anksiyolitik",
  "Anterior singulat korteks": "anterior-singulat-korteks",
  "Antidepresan": "antidepresan",
  "Antipsikotik": "antipsikotik",
  "Psikodinamik terapi": "psikodinamik-terapi",
  "Destekleyici psikoterapi": "destekleyici-psikoterapi",
  "Maruz bırakma": "maruz-birakma",
  "Tepki önleme": "tepki-onleme",
  "Psikoeğitim": "psikoegitim",
  "Motivasyonel görüşme": "motivasyonel-gorusme",
  "Şema terapi": "sema-terapi",
  "Kabul ve kararlılık terapisi": "kabul-ve-kararlilik-terapisi",
  "Diyalektik davranış terapisi": "diyalektik-davranis-terapisi",
  "Aile terapisi": "aile-terapisi",
  "Açık uçlu soru": "acik-uclu-soru",
  "Adaptasyon": "adaptasyon",
  "Afazi": "afazi",
  "Akut stres tepkisi": "akut-stres-tepkisi",
  "Apraksi": "apraksi",
  "Bilinç": "bilinc",
  "Blokaj": "blokaj",
  "Dezorganize konuşma": "dezorganize-konusma",
  "Ekolali": "ekolali",
  "Ekopraksi": "ekopraksi",
  Anhedoni: "anhedoni",
  Ajitasyon: "ajitasyon",
  Depersonalizasyon: "depersonalizasyon",
  Derealizasyon: "derealizasyon",
  Dissosiyasyon: "dissosiyasyon",
  Dopamin: "dopamin",
  Dürtüsellik: "durtusellik",
  Hipomani: "hipomani",
  İçgörü: "icgoru",
  Katatoni: "katatoni",
  Kompulsiyon: "kompulsiyon",
  Mani: "mani",
  Obsesyon: "obsesyon",
  Psikoz: "psikoz",
  Remisyon: "remisyon",
  Ruminasyon: "ruminasyon",
  Sanrı: "sanri",
  Serotonin: "serotonin",
  Somatizasyon: "somatizasyon",
  Varsanı: "varsani",
  Akatizi: "akatizi",
  "Akut stres bozukluğu": "akut-stres-bozuklugu",
  "Akran zorbalığı": "akran-zorbaligi",
  Anksiyete: "anksiyete",
  Apati: "apati",
  Bağımlılık: "bagimlilik",
  "Bilişsel çarpıtma": "bilissel-carpitma",
  "Panik bozukluk": "panik-bozukluk",
  "Travma sonrası stres bozukluğu": "travma-sonrasi-stres-bozuklugu",
  "Yaygın anksiyete bozukluğu": "yaygin-anksiyete-bozuklugu",
  "Sosyal anksiyete bozukluğu": "sosyal-anksiyete-bozuklugu",
  Agorafobi: "agorafobi",
  DEHB: "dehb",
  "Bipolar I bozukluk": "bipolar-1-bozukluk",
  Şizofreni: "sizofreni",
  "Majör depresif bozukluk": "major-depresif-bozukluk",
  "İntihar düşüncesi": "intihar-dusuncesi",
  "Psikomotor retardasyon": "psikomotor-retardasyon",
  "Uyum bozukluğu": "uyum-bozuklugu",
  "Uyku hijyeni": "uyku-hijyeni",
  "Paranoid düşünce": "paranoid-dusunce",
  "Negatif belirti": "negatif-belirti",
  "Künt duygulanım": "kunt-duygulanim",
  "Güvence arama": "guvence-arama",
  "Dürtü kontrolü": "durtu-kontrolu",
  "Kendine zarar verme": "kendine-zarar-verme",
  Amnezi: "amnezi",
  "Bilinç bulanıklığı": "bilinc-bulanikligi",
  Konfüzyon: "konfuzyon",
  Dikkat: "dikkat",
  "Dikkat eksikliği": "dikkat-eksikligi",
  Hiperaktivite: "hiperaktivite",
  "Duygu düzenleme": "duygu-duzenleme",
  "Sirkadiyen ritim": "sirkadiyen-ritim",
  Psikoterapi: "psikoterapi",
  "Bilişsel davranışçı terapi": "bilissel-davranisci-terapi",
  EMDR: "emdr",
  "Risk değerlendirmesi": "risk-degerlendirmesi",
  Nüks: "nuks",
  Komorbidite: "komorbidite",
  "Sosyal destek": "sosyal-destek",
  "Psikososyal destek": "psikososyal-destek",
  Rehabilitasyon: "rehabilitasyon",
  İşlevsellik: "islevsellik",
  "Yeme bozukluğu": "yeme-bozuklugu",
  "Psikotik özellik": "psikotik-ozellik",
  "Pozitif belirti": "pozitif-belirti",
  "Dezorganize davranış": "dezorganize-davranis",
  Affekt: "affekt",
  "Kişilik bozukluğu": "kisilik-bozuklugu",
  "Borderline kişilik örüntüsü": "borderline-kisilik-oruntusu",
  "Narsisistik kişilik örüntüsü": "narsisistik-kisilik-oruntusu",
  "Kaçıngan kişilik örüntüsü": "kacingan-kisilik-oruntusu",
  Bağlanma: "baglanma",
  "Kaygılı bağlanma": "kaygili-baglanma",
  "Kaçıngan bağlanma": "kacingan-baglanma",
  "Travmatik bağlanma": "travmatik-baglanma",
  "Duygusal ihmal": "duygusal-ihmal",
  "Sınav kaygısı": "sinav-kaygisi",
  "Ergen anksiyetesi": "ergen-anksiyetesi",
  "Obsesif kompulsif bozukluk": "obsesif-kompulsif-bozukluk",
  "Bipolar II bozukluk": "bipolar-2-bozukluk",
  "Özgül fobi": "ozgul-fobi",
  "Otizm spektrum bozukluğu": "otizm-spektrum-bozuklugu",
  "Distimi": "distimi",
  "Şizoaffektif bozukluk": "sizoaffektif-bozukluk",
  "Sanrısal bozukluk": "sanrisal-bozukluk",
  "Kısa psikotik bozukluk": "kisa-psikotik-bozukluk",
  "Madde kullanım bozukluğu": "madde-kullanim-bozuklugu",
  "Alkol kullanım bozukluğu": "alkol-kullanim-bozuklugu",
  "Kumar oynama bozukluğu": "kumar-oynama-bozuklugu",
  "Dijital bağımlılık": "dijital-bagimlilik",
  "Anoreksiya nervoza": "anoreksiya-nervoza",
  "Bulimiya nervoza": "bulimiya-nervoza",
  "Tıkınırcasına yeme bozukluğu": "tikinarcasina-yeme-bozuklugu",
  "İnsomnia": "insomnia",
  "Hipersomnia": "hipersomnia",
  "Kabus bozukluğu": "kabus-bozuklugu",
  "Duygudurum": "duygudurum",
  "Çökkün duygudurum": "cokkun-duygudurum",
  "Abuli": "abuli",
  "Akinezi": "akinezi",
  "Avolisyon": "avolisyon",
  "Algı": "algi",
  "Algı bozukluğu": "algi-bozuklugu",
  "İllüzyon": "illuzyon",
  "Labil duygulanım": "labil-duygulanim",
  "Psikomotor ajitasyon": "psikomotor-ajitasyon",
  "Tetikleyici": "tetikleyici",
  "Siklotimi": "siklotimi",
  "Parasomni": "parasomni",
  "Melatonin": "melatonin",
  "Yürütücü işlevler": "yurutucu-islevler",
  "Çalışma belleği": "calisma-bellegi",
  "Epizodik bellek": "epizodik-bellek",
  "Semantik bellek": "semantik-bellek",
  "Katastrofizasyon": "katastrofizasyon",
  "Zihin okuma": "zihin-okuma",
  "Seçici soyutlama": "secici-soyutlama",
  "Aşırı genelleme": "asiri-genelleme",
  "Kişiselleştirme": "kisilestirme",
  "Bastırma": "bastirma",
  "Yansıtma": "yansitma",
  "İnkar": "inkar",
  "Mentalizasyon": "mentalizasyon",
  "Stres yanıtı": "stres-yaniti",
  "Oyun oynama bozukluğu": "oyun-oynama-bozuklugu",
  "Duyusal hassasiyet": "duyusal-hassasiyet",
  "Ayrılma kaygısı": "ayrilma-kaygisi",
  "Okul reddi": "okul-reddi",
  "Farmakodinamik": "farmakodinamik",
  "Farmakokinetik": "farmakokinetik",
  "Formülasyon": "formulasyon",
  "GABA": "gaba",
  "GAD-7": "gad-7",
  "Gelişimsel değerlendirme": "gelisimsel-degerlendirme",
  "Gelişimsel gecikme": "gelisimsel-gecikme",
  "Gizlilik": "gizlilik",
  "Glutamat": "glutamat",
  "Grandiyözite": "grandiyozite",
  "Grup terapisi": "grup-terapisi",
  "Güvenli bağlanma": "guvenli-baglanma",
  "Güvenlik planı": "guvenlik-plani",
  "Halüsinasyon": "halusinasyon",
  "Hasta hakları": "hasta-haklari",
  "Hipnotik": "hipnotik",
  "Hipokampus": "hipokampus",
  "Histrionik kişilik örüntüsü": "histrionik-kisilik-oruntusu",
  "HPA aksı": "hpa-aksi",
  "ICD": "icd",
  "İlaç kan düzeyi": "ilac-kan-duzeyi",
  "İlaç uyumu": "ilac-uyumu",
  "İntihar riski": "intihar-riski",
  "İzlem": "izlem",
  "İçselleştirilmiş stigma": "icsellestirilmis-stigma",
  "İşlev kaybı": "islev-kaybi",
  "Karakter": "karakter",
  "Karbamazepin": "karbamazepin",
  "Karma özellik": "karma-ozellik",
  "Karşı aktarım": "karsi-aktarim",
  "Karşıt olma karşı gelme bozukluğu": "karsit-olma-karsi-gelme-bozuklugu",
  "Kesilme belirtileri": "kesilme-belirtileri",
  "Kimlik": "kimlik",
  "Kişilik": "kisilik",
  "Klinik görüşme": "klinik-gorusme",
  "Konsültasyon": "konsultasyon",
  "Kortizol": "kortizol",
  "Koruyucu ruh sağlığı": "koruyucu-ruh-sagligi",
  "Kriz müdahalesi": "kriz-mudahalesi",
  "Kusurluluk şeması": "kusurluluk-semasi",
  "Lamotrijin": "lamotrijin",
  "Limbik sistem": "limbik-sistem",
  "Lityum": "lityum",
  "Liyezon psikiyatrisi": "liyezon-psikiyatrisi",
  "Mahremiyet": "mahremiyet",
  "Maluliyet": "maluliyet",
  "MAOI": "maoi",
  "MDQ": "mdq",
  "Mental durum muayenesi": "mental-durum-muayenesi",
  "Mizaç": "mizac",
  "Multidisipliner yaklaşım": "multidisipliner-yaklasim",
  "Mükemmeliyetçilik": "mukemmeliyetcilik",
  "Non-REM uykusu": "non-rem-uykusu",
  "Noradrenalin": "noradrenalin",
  "Nöroplastisite": "noroplastisite",
  "Nörotransmitter": "norotransmitter",
  "Nüks önleme": "nuks-onleme",
  "Obsesif kompulsif kişilik": "obsesif-kompulsif-kisilik",
  "Onay arayıcılık": "onay-arayicilik",
  "PANSS": "panss",
  "Paranoid kişilik örüntüsü": "paranoid-kisilik-oruntusu",
  "PHQ-9": "phq-9",
  "Plasebo": "plasebo",
  "Prefrontal korteks": "prefrontal-korteks",
  "Premorbid": "premorbid",
  "Prodrom": "prodrom",
  "Prognoz": "prognoz",
  "Psikiyatrik rapor": "psikiyatrik-rapor",
  "Psikiyatrik yatış": "psikiyatrik-yatis",
  "Rasyonalizasyon": "rasyonalizasyon",
  "Referans fikirleri": "referans-fikirleri",
  "Regresyon": "regresyon",
  "Relaps": "relaps",
  "REM uykusu": "rem-uykusu",
  "Savunma mekanizması": "savunma-mekanizmasi",
  "Selektif mutizm": "selektif-mutizm",
  "SNRI": "snri",
  "Sosyal iletişim": "sosyal-iletisim",
  "SSRI": "ssri",
  "Stigma": "stigma",
  "Çift terapisi": "cift-terapisi",
  "Terapötik ittifak": "terapotik-ittifak",
  "Sublimasyon": "sublimasyon",
  "Öykü alma": "oyku-alma",
  "Tanı ölçütleri": "tani-olcutleri",
  "Ölçek": "olcek",
  "Tarama testi": "tarama-testi",
  "Y-BOCS": "y-bocs",
  "Şiddet derecesi": "siddet-derecesi",
  "Tedavi yanıtı": "tedavi-yaniti",
  "Trisiklik antidepresan": "trisiklik-antidepresan",
  "Valproat": "valproat",
  "Tipik antipsikotik": "tipik-antipsikotik",
  "Stimülan": "stimulan",
  "Yan etki": "yan-etki",
  "Tolerans": "tolerans",
  "Yoksunluk": "yoksunluk",
  "Tedaviye direnç": "tedaviye-direnc",
  "Ödül sistemi": "odul-sistemi",
  "Özsaygı": "ozsaygi",
  "Sınır": "sinir",
  "Şema": "sema",
  "Terk edilme şeması": "terk-edilme-semasi",
  "Yetersiz özdenetim": "yetersiz-ozdenetim",
  "Çocuk psikiyatrisi": "cocuk-psikiyatrisi",
  "Tik bozukluğu": "tik-bozuklugu",
  "Tourette sendromu": "tourette-sendromu",
  "Öğrenme güçlüğü": "ogrenme-guclugu",
  "Özgül öğrenme bozukluğu": "ozgul-ogrenme-bozuklugu",
  "Toplum ruh sağlığı": "toplum-ruh-sagligi",
  "Zorunlu yatış": "zorunlu-yatis",
  "Taburculuk planı": "taburculuk-plani",
  "Tedavi planı": "tedavi-plani",
};

const PSYCHIATRY_GLOSSARY_TERMS = glossarySource
  .trim()
  .split("\n")
  .map((line) => {
    const [term, ...definitionParts] = line.split("|");
    const termName = term.trim();
    const detailSlug = glossaryDetailPages[termName] || "";
    return {
      term: termName,
      definition: definitionParts.join("|").trim(),
      detailSlug,
      detailUrl: detailSlug ? `/psikiyatri-sozlugu/${detailSlug}/` : "",
    };
  })
  .filter((item) => item.term && item.definition)
  .sort((a, b) => a.term.localeCompare(b.term, "tr"));

if (typeof window !== "undefined") {
  window.PSYCHIATRY_GLOSSARY_TERMS = PSYCHIATRY_GLOSSARY_TERMS;
}

const normalizeGlossaryText = (value) =>
  value
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");

const renderGlossary = () => {
  const list = document.querySelector("[data-glossary-list]");
  if (!list) return;

  const search = document.querySelector("[data-glossary-search]");
  const letters = document.querySelector("[data-glossary-letters]");
  const count = document.querySelector("[data-glossary-count]");
  const empty = document.querySelector("[data-glossary-empty]");
  let activeLetter = "Tümü";

  const firstLetter = (term) => term.trim().charAt(0).toLocaleUpperCase("tr");
  const availableLetters = ["Tümü", ...new Set(PSYCHIATRY_GLOSSARY_TERMS.map((item) => firstLetter(item.term)))];

  const makeCard = (item) => {
    const article = document.createElement("article");
    article.className = "glossary-card";
    const heading = document.createElement("h2");
    heading.textContent = item.term;
    const paragraph = document.createElement("p");
    paragraph.textContent = item.definition;
    article.append(heading, paragraph);
    if (item.detailUrl) {
      const link = document.createElement("a");
      link.className = "glossary-detail-link";
      link.href = item.detailUrl;
      link.textContent = "Detaylı oku";
      article.append(link);
    }
    return article;
  };

  const applyFilters = () => {
    const query = normalizeGlossaryText(search?.value || "");
    const filtered = PSYCHIATRY_GLOSSARY_TERMS.filter((item) => {
      const letterMatches = activeLetter === "Tümü" || firstLetter(item.term) === activeLetter;
      const haystack = normalizeGlossaryText(`${item.term} ${item.definition}`);
      return letterMatches && (!query || haystack.includes(query));
    });

    list.replaceChildren(...filtered.map(makeCard));
    if (count) count.textContent = `${filtered.length} / ${PSYCHIATRY_GLOSSARY_TERMS.length} terim`;
    if (empty) empty.hidden = filtered.length > 0;
  };

  if (letters) {
    letters.replaceChildren(
      ...availableLetters.map((letter) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "glossary-letter-button";
        button.textContent = letter;
        button.setAttribute("aria-pressed", String(letter === activeLetter));
        button.addEventListener("click", () => {
          activeLetter = letter;
          letters.querySelectorAll("button").forEach((item) => {
            item.setAttribute("aria-pressed", String(item === button));
          });
          applyFilters();
        });
        return button;
      })
    );
  }

  search?.addEventListener("input", applyFilters);
  applyFilters();
};

if (typeof document !== "undefined") {
  renderGlossary();
}
