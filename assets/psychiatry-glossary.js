const glossarySource = `
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
