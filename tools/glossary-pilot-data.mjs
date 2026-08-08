const safety = ["Bu içerik yalnızca bilgilendirme amacı taşır ve kişisel değerlendirme veya tanı yerine geçmez."];
const defineTerm = (record) => ({ safetyNotes: safety, relatedSiteLinks: [], ...record });
const section = (heading, body) => ({ heading, body });

const migrated = [
  { term: "Akatizi", slug: "akatizi", shortDefinition: "Akatizi, özellikle otururken veya beklerken belirgin iç huzursuzluk ve hareket etme zorunluluğu hissidir.", intro: "Dışarıdan sabırsızlık gibi görünse de kişi için zorlayıcı olabilir.", sections: [section("Kısa Tanım", "Akatizi, içten gelen hareket etme ihtiyacının belirginleştiği bir durumdur. Bazı ilaçların yan etkisi olarak veya başka klinik durumlarla birlikte görülebilir."), section("Günlük Hayatta Nasıl Görülebilir?", "Kişi ayağa kalkma, yürüyüp durma, bacaklarını oynatma ya da “yerimde duramıyorum” deme eğiliminde olabilir."), section("Benzer Kavramlardan Farkı", "Ajitasyonda gerginlik veya artmış hareketlilik daha geniş bir tablo içinde görülebilir. Akatizide içten gelen hareket etme ihtiyacı daha belirgindir."), section("Ne Zaman Ciddiye Alınmalı?", "Belirtiler hızla artıyorsa veya günlük yaşamı bozuyorsa profesyonel değerlendirme önemlidir.")], seo: { title: "Akatizi Nedir? | Psikiyatri Sözlüğü", description: "Akatizinin iç huzursuzluk ve hareket etme zorunluluğu ile ilişkisini sade biçimde açıklar.", ogTitle: "Akatizi Nedir?", ogDescription: "Akatizi belirtilerini ve benzer kavramlardan farkını açıklar." }, schema: { definedTermDescription: "Belirgin iç huzursuzluk ve hareket etme zorunluluğu ile ilişkili klinik durum." } },
  { term: "Akut stres bozukluğu", slug: "akut-stres-bozuklugu", shortDefinition: "Akut stres bozukluğu, travmatik bir olayın ardından ilk haftalarda görülebilen yoğun korku, yabancılaşma ve kaçınma belirtileriyle ilişkili bir tablodur.", intro: "Her zorlayıcı olaydan sonra gelişmez; süre, belirtiler ve işlevsellik birlikte değerlendirilir.", sections: [section("Kısa Tanım", "Travmatik bir olayın ardından tekrar yaşantılama, irkilme, yabancılaşma veya kaçınma belirtileri görülebilir."), section("Günlük Hayatta Nasıl Görülebilir?", "Kişi olayla ilgili görüntülerin zihnine gelmesinden, uyku güçlüğünden veya çevresine uzaklaşmış gibi hissetmekten söz edebilir."), section("Benzer Kavramlardan Farkı", "Akut stres tepkisi olayın hemen ardından görülen kısa süreli bir tepkiyi anlatabilir. TSSB daha uzun süren başka bir klinik zaman çerçevesidir."), section("Ne Zaman Ciddiye Alınmalı?", "Belirtiler yoğunlaşıyorsa veya kişi günlük yaşamını sürdüremiyorsa destek almak yararlı olabilir.")], seo: { title: "Akut Stres Bozukluğu Nedir? | Psikiyatri Sözlüğü", description: "Akut stres bozukluğunun travma sonrası erken dönemdeki belirtilerini ve değerlendirme çerçevesini açıklar.", ogTitle: "Akut Stres Bozukluğu Nedir?", ogDescription: "Travma sonrası erken dönemde görülebilen belirtileri sade biçimde açıklar." }, schema: { definedTermDescription: "Travmatik olay sonrası erken dönemde görülebilen korku, yabancılaşma ve kaçınma belirtileriyle ilişkili durum." } },
  { term: "Akran zorbalığı", slug: "akran-zorbaligi", shortDefinition: "Akran zorbalığı, benzer konumdaki kişiler arasında güç dengesizliği içeren ve tekrarlayan zarar verici davranışları anlatır.", intro: "Tek seferlik çatışma ile aynı değildir.", sections: [section("Kısa Tanım", "Akran zorbalığı çocukluk, ergenlik veya yetişkinlikte görülebilir; tekrar, hedef alma ve güç eşitsizliği belirleyicidir."), section("Günlük Hayatta Nasıl Görülebilir?", "Sözel küçümseme, dışlama, söylenti yayma, fiziksel müdahale veya çevrim içi hedef alma biçimlerinde görülebilir."), section("Benzer Kavramlardan Farkı", "Akran çatışmasında güç daha dengeli olabilir. Zorbalıkta tekrar ve güç eşitsizliği daha belirgindir."), section("Ne Zaman Ciddiye Alınmalı?", "Kişi kendini güvende hissetmiyorsa veya kendine zarar düşünceleri varsa güvenilir destek kanallarına başvurulmalıdır.")], seo: { title: "Akran Zorbalığı Nedir? | Psikiyatri Sözlüğü", description: "Akran zorbalığının tekrar, güç dengesizliği ve günlük yaşama etkisi üzerinden nasıl değerlendirildiğini açıklar.", ogTitle: "Akran Zorbalığı Nedir?", ogDescription: "Zorbalığın tek seferlik çatışmadan farkını ve destek gerektiren durumları açıklar." }, schema: { definedTermDescription: "Akranlar arasında güç dengesizliği içeren ve tekrarlayan zarar verici davranışlar." } },
  { term: "Anksiyete", slug: "anksiyete", shortDefinition: "Anksiyete, olası tehlike veya belirsizlik karşısında endişe, gerginlik ve bedensel uyarılma yaşanmasıdır.", intro: "Kaygı koruyucu olabilir; yoğunluğu ve sürekliliği arttığında yaşamı zorlayabilir.", sections: [section("Kısa Tanım", "Anksiyete panik bozukluk, sosyal anksiyete ve yaygın anksiyete gibi farklı tablolarla ilişkili olabilir."), section("Günlük Hayatta Nasıl Görülebilir?", "Zihin kötü olasılıklara yönelebilir; çarpıntı, kas gerginliği, huzursuzluk veya odaklanma güçlüğü eşlik edebilir."), section("Benzer Kavramlardan Farkı", "Normal kaygı belirli bir durumla uyumlu olabilir. Klinik değerlendirmede yoğunluk, kaçınma ve işlev kaybı daha belirgin olabilir."), section("Ne Zaman Ciddiye Alınmalı?", "Kaygı uzun sürüyor, uyku ve ilişkileri etkiliyor ya da yaşamı daraltıyorsa profesyonel destek yararlı olabilir.")], seo: { title: "Anksiyete Nedir? | Psikiyatri Sözlüğü", description: "Anksiyetenin günlük belirtilerini, normal kaygıdan farkını ve değerlendirme çerçevesini açıklar.", ogTitle: "Anksiyete Nedir?", ogDescription: "Kaygının ne zaman günlük yaşamı zorlayabileceğini sade biçimde açıklar." }, schema: { definedTermDescription: "Belirsizlik veya olası tehlike karşısında endişe, gerginlik ve bedensel uyarılma yaşanması." } },
  { term: "Apati", slug: "apati", shortDefinition: "Apati, önem verilen etkinliklere, ilişkilere veya hedeflere karşı ilgi ve başlatma isteğinde belirgin azalmadır.", intro: "Tembellik ya da isteksizlikle kolayca eş tutulmamalıdır.", sections: [section("Kısa Tanım", "Apati depresyon, bazı nörolojik durumlar, uzun süren stres veya bedensel hastalıklarla birlikte görülebilir."), section("Günlük Hayatta Nasıl Görülebilir?", "Kişi plan yapmakta zorlanabilir, gelişmelere daha az tepki verebilir veya günlük sorumlulukları erteleyebilir."), section("Benzer Kavramlardan Farkı", "Anhedoni zevk alma kapasitesindeki azalmayı; apati ise ilgi, girişim ve katılımın azalmasını daha çok vurgular."), section("Ne Zaman Ciddiye Alınmalı?", "Değişim yeniyse veya belirgin işlev kaybı yaratıyorsa değerlendirme yararlı olabilir.")], seo: { title: "Apati Nedir? | Psikiyatri Sözlüğü", description: "Apatinin ilgi, girişim ve katılım azalmasıyla ilişkisini ve anhedoniden farkını açıklar.", ogTitle: "Apati Nedir?", ogDescription: "Apatiyi tembellikle karıştırmadan klinik bağlamda ele alır." }, schema: { definedTermDescription: "İlgi, girişim ve hedefe yönelik katılımda belirgin azalma." } },
  { term: "Bağımlılık", slug: "bagimlilik", shortDefinition: "Bağımlılık, bir maddeyi kullanma veya davranışı sürdürme isteğini kontrol etmekte güçlük yaşanması ve zararlar görülse de döngünün devam etmesidir.", intro: "Karakter ya da irade ile açıklanamaz.", sections: [section("Kısa Tanım", "Madde kullanımı yanında kumar ve oyun oynama gibi davranışsal alanlarda da bağımlılık özellikleri görülebilir."), section("Günlük Hayatta Nasıl Görülebilir?", "Kişi azaltmaya çalışıp zorlanabilir, zamanının büyük bölümünü bununla geçirebilir ya da sorumluluklarında sorunlar yaşayabilir."), section("Benzer Kavramlardan Farkı", "Yoğun ilgi veya sık kullanım tek başına bağımlılığı göstermez. Kontrol kaybı, zarar ve işlevsellikteki etkilenme birlikte değerlendirilir."), section("Ne Zaman Ciddiye Alınmalı?", "Kişi zarar görmeye devam ediyor veya bırakmakta zorlanıyorsa profesyonel değerlendirme önem taşır.")], seo: { title: "Bağımlılık Nedir? | Psikiyatri Sözlüğü", description: "Bağımlılıkta kontrol kaybı, zarar ve işlevsellikteki etkilenmenin nasıl değerlendirildiğini açıklar.", ogTitle: "Bağımlılık Nedir?", ogDescription: "Bağımlılığı irade ya da karakter yargısı olmadan ele alır." }, schema: { definedTermDescription: "Madde veya davranış üzerinde kontrol güçlüğü ve zararlar sürerken döngünün devam etmesi." } },
  { term: "Bilişsel çarpıtma", slug: "bilissel-carpitma", shortDefinition: "Bilişsel çarpıtma, zihnin bilgileri seçici, aşırı veya katı biçimde yorumlama eğilimidir.", intro: "Bu düşünceler hızlı ve otomatik gelebilir; tek başına tanı anlamına gelmez.", sections: [section("Kısa Tanım", "Kaygı ve çökkünlük dönemlerinde bu eğilimler daha görünür olabilir; her olumsuz düşünceyi bozukluk işareti saymak doğru değildir."), section("Günlük Hayatta Nasıl Görülebilir?", "Zihin okuma, felaketleştirme, ya hep ya hiç düşünme veya tek bir olumsuz olaydan geniş sonuç çıkarma görülebilir."), section("Benzer Kavramlardan Farkı", "Bir düşüncenin gerçekçiliğini sorgulamak, duyguyu geçersiz saymak değildir. Amaç alternatif açıklamalara alan açmaktır."), section("Ne Zaman Ciddiye Alınmalı?", "Düşünce döngüleri yoğun sıkıntı yaratıyor veya yaşamı etkiliyorsa destek yararlı olabilir.")], seo: { title: "Bilişsel Çarpıtma Nedir? | Psikiyatri Sözlüğü", description: "Bilişsel çarpıtmaların düşünceleri nasıl etkileyebileceğini ve günlük örneklerini açıklar.", ogTitle: "Bilişsel Çarpıtma Nedir?", ogDescription: "Katı veya aşırı yorumlama eğilimlerini sade biçimde ele alır." }, schema: { definedTermDescription: "Bilgileri seçici, aşırı veya katı biçimde yorumlama eğilimi." } },
  { term: "Panik bozukluk", slug: "panik-bozukluk", shortDefinition: "Panik bozukluk, tekrarlayan beklenmedik panik ataklar ve yeniden atak yaşama kaygısının sürmesiyle ilişkili bir tablodur.", intro: "Tek atak, tek başına panik bozukluk değildir.", sections: [section("Kısa Tanım", "Agorafobi ile birlikte görülebilir; ancak her panik bozukluğu olan kişide agorafobi bulunmaz. Bedensel belirtilerin başka nedenleri de olabilir."), section("Günlük Hayatta Nasıl Görülebilir?", "Atak sırasında çarpıntı, nefes darlığı hissi, titreme veya kontrolü kaybetme korkusu yaşanabilir."), section("Benzer Kavramlardan Farkı", "Panik atak ani ve yoğun kaygı dalgasını anlatır. Panik bozukluk ise atakların tekrarı, beklenti kaygısı ve davranış değişiklikleriyle ilgilidir."), section("Ne Zaman Ciddiye Alınmalı?", "Ataklar sıklaşıyorsa veya kişi yaşamını kaçınma üzerine kuruyorsa yardım almak yararlı olabilir.")], seo: { title: "Panik Bozukluk Nedir? | Psikiyatri Sözlüğü", description: "Panik bozukluğun tekrarlayan ataklar, beklenti kaygısı ve kaçınma ile ilişkisini açıklar.", ogTitle: "Panik Bozukluk Nedir?", ogDescription: "Panik atağın panik bozukluktan farkını ve değerlendirme çerçevesini açıklar." }, schema: { definedTermDescription: "Tekrarlayan beklenmedik panik ataklar ve yeniden atak yaşama kaygısı ile ilişkili durum." } },
  { term: "Travma sonrası stres bozukluğu", slug: "travma-sonrasi-stres-bozuklugu", shortDefinition: "Travma sonrası stres bozukluğu, travmatik bir olaydan sonra bazı kişilerde görülebilen yeniden yaşantılama, kaçınma ve aşırı uyarılma belirtileriyle ilişkili bir tablodur.", intro: "Her travmatik deneyim sonrasında gelişmez.", sections: [section("Kısa Tanım", "Dissosiyasyon, depresyon veya kaygı belirtileri eşlik edebilir. Süre ve günlük yaşama etkisi klinik bağlamda önemlidir."), section("Günlük Hayatta Nasıl Görülebilir?", "Kişi kabuslar görebilir, bazı ses veya görüntülerle yoğunlaşan sıkıntı yaşayabilir ya da olayı hatırlatan durumlardan uzak durabilir."), section("Benzer Kavramlardan Farkı", "Akut stres bozukluğu travmatik olayın ardından daha erken dönemde ele alınır. TSSB daha uzun süren farklı bir klinik zaman çerçevesidir."), section("Ne Zaman Ciddiye Alınmalı?", "Belirtiler kalıcılaşıyor veya günlük yaşamı sürdürmeyi zorlaştırıyorsa profesyonel destek önemlidir.")], seo: { title: "Travma Sonrası Stres Bozukluğu Nedir? | Psikiyatri Sözlüğü", description: "Travma sonrası stres bozukluğunun belirtilerini, süreyi ve akut stres bozukluğundan farkını açıklar.", ogTitle: "Travma Sonrası Stres Bozukluğu Nedir?", ogDescription: "Travma sonrası belirtileri güvenli ve bilgilendirici bir çerçevede açıklar." }, schema: { definedTermDescription: "Travma sonrasında yeniden yaşantılama, kaçınma ve aşırı uyarılma ile ilişkili olabilen durum." } }
].map((record) => defineTerm({
  ...record,
  relatedTerms: {
    "akatizi": [{ term: "Ajitasyon", slug: "ajitasyon" }],
    "akut-stres-bozuklugu": [{ term: "Travma sonrası stres bozukluğu", slug: "travma-sonrasi-stres-bozuklugu" }, { term: "Dissosiyasyon", slug: "dissosiyasyon" }],
    "anksiyete": [{ term: "Panik bozukluk", slug: "panik-bozukluk" }, { term: "Yaygın anksiyete bozukluğu", slug: "yaygin-anksiyete-bozuklugu" }, { term: "Sosyal anksiyete bozukluğu", slug: "sosyal-anksiyete-bozuklugu" }, { term: "Agorafobi", slug: "agorafobi" }],
    "apati": [{ term: "Anhedoni", slug: "anhedoni" }],
    "bilissel-carpitma": [{ term: "Anksiyete", slug: "anksiyete" }],
    "panik-bozukluk": [{ term: "Anksiyete", slug: "anksiyete" }, { term: "Agorafobi", slug: "agorafobi" }],
    "travma-sonrasi-stres-bozuklugu": [{ term: "Akut stres bozukluğu", slug: "akut-stres-bozuklugu" }, { term: "Dissosiyasyon", slug: "dissosiyasyon" }]
  }[record.slug] || [],
  relatedSiteLinks: []
}));

const testTerms = [
  defineTerm({ term: "Yaygın anksiyete bozukluğu", slug: "yaygin-anksiyete-bozuklugu", shortDefinition: "Yaygın anksiyete bozukluğu, birçok alana yayılan ve kontrol edilmesi zor kaygı ile ilişkilendirilebilen bir durumdur.", intro: "Kaygı günlük yaşamın olağan parçasıdır; ancak uzun süre devam ettiğinde ve yaşamı daralttığında daha dikkatli değerlendirme gerekebilir.", sections: [section("Kısa Tanım", "Kişi iş, sağlık, aile veya gündelik ayrıntılar hakkında sık ve sürekli endişe yaşayabilir. Kaygı yalnızca tek bir soruna odaklanmaz; zihnin farklı konular arasında dolaşmasına yol açabilir."), section("Günlük Hayatta Nasıl Görülebilir?", "Huzursuzluk, kas gerginliği, yorgunluk, odaklanma güçlüğü ve uyku sorunları eşlik edebilir. Kişi endişesinin aşırı olduğunu fark etse bile onu yatıştırmakta zorlanabilir."), section("Normal Endişeden Farkı", "Normal endişe çoğu zaman belirli bir durumla sınırlıdır ve çözüm aramaya yardımcı olabilir. Yaygın kaygıda endişenin yoğunluğu, süresi ve günlük yaşama etkisi daha belirgin hale gelebilir."), section("Ne Zaman Ciddiye Alınmalı?", "Kaygı ilişkileri, işi, eğitimi veya uyku düzenini etkiliyorsa; kaçınma davranışları artıyorsa profesyonel değerlendirme yararlı olabilir.")], relatedTerms: [{ term: "Anksiyete", slug: "anksiyete" }, { term: "Panik bozukluk", slug: "panik-bozukluk" }], seo: { title: "Yaygın Anksiyete Bozukluğu Nedir? | Psikiyatri Sözlüğü", description: "Yaygın anksiyete bozukluğunda sürekli ve kontrol edilmesi zor kaygının günlük yaşamı nasıl etkileyebileceğini sade biçimde açıklar.", ogTitle: "Yaygın Anksiyete Bozukluğu Nedir?", ogDescription: "Süreğen ve yaygın kaygının belirtilerini, normal endişeden farkını ve değerlendirme çerçevesini açıklar." }, schema: { definedTermDescription: "Birçok alana yayılan, kontrol edilmesi zor ve süreğen kaygı ile ilişkili olabilen durum." } }),
  defineTerm({ term: "Sosyal anksiyete bozukluğu", slug: "sosyal-anksiyete-bozuklugu", shortDefinition: "Sosyal anksiyete bozukluğu, başkalarının değerlendirmesi veya küçük düşme korkusuyla ilişkili yoğun kaygıyı anlatır.", intro: "Sosyal ortamlarda kaygı yaşamak yaygındır; ancak kaygı kişinin yaşam fırsatlarını belirgin biçimde sınırladığında değerlendirme önem kazanabilir.", sections: [section("Kısa Tanım", "Sosyal anksiyete bozukluğunda kişi, başkalarının önünde hata yapmaktan, olumsuz değerlendirilmekten veya mahcup olmaktan yoğun biçimde endişe edebilir."), section("Günlük Hayatta Nasıl Görülebilir?", "Topluluk önünde konuşma, yeni insanlarla tanışma, soru sorma ya da yemek yeme gibi sıradan durumlar yoğun kaygı yaratabilir. Kişi bu ortamları ertelemeye veya tamamen kaçınmaya başlayabilir."), section("Utangaçlıktan Farkı", "Utangaçlık kişilik özelliği olarak günlük yaşamı her zaman sınırlamaz. Sosyal anksiyetede kaygının şiddeti, kaçınma ve işlevsellik üzerindeki etkisi daha belirgin olabilir."), section("Ne Zaman Ciddiye Alınmalı?", "Kaygı eğitim, çalışma hayatı, ilişkiler veya kişinin kendi hedefleri üzerinde kalıcı sınırlılık yaratıyorsa yardım almak yararlı olabilir.")], relatedTerms: [{ term: "Anksiyete", slug: "anksiyete" }, { term: "Akran zorbalığı", slug: "akran-zorbaligi" }], seo: { title: "Sosyal Anksiyete Bozukluğu Nedir? | Psikiyatri Sözlüğü", description: "Sosyal anksiyete bozukluğunda değerlendirilme korkusunun günlük yaşamı nasıl etkileyebileceğini ve utangaçlıktan farkını açıklar.", ogTitle: "Sosyal Anksiyete Bozukluğu Nedir?", ogDescription: "Sosyal ortamlardaki yoğun kaygıyı, kaçınmayı ve utangaçlıktan farkını sade biçimde ele alır." }, schema: { definedTermDescription: "Sosyal ortamlarda olumsuz değerlendirilme veya küçük düşme korkusuyla ilişkili yoğun kaygı." } }),
  defineTerm({ term: "Agorafobi", slug: "agorafobi", shortDefinition: "Agorafobi, kaçmanın veya gerektiğinde yardım almanın zor olabileceği düşünülen durumlarda yoğun kaygı ve kaçınmayla ilişkili olabilir.", intro: "Yalnızca açık alan korkusu değildir; toplu taşıma, kalabalık, sıra bekleme ya da evden uzakta olma gibi farklı durumları içerebilir.", sections: [section("Kısa Tanım", "Kaygının odağında, panik benzeri belirtiler yaşanırsa ortamdan ayrılamama veya destek alamama düşüncesi bulunabilir."), section("Günlük Hayatta Nasıl Görülebilir?", "Kişi yanında biri olmadan dışarı çıkmayı erteleyebilir ya da bazı yolları, kalabalıkları ve kapalı alanları sınırlayabilir."), section("Panik Bozuklukla İlişkisi", "Agorafobi panik bozuklukla birlikte görülebilir; ancak her iki kavram aynı değildir ve ayrı ayrı da değerlendirilir."), section("Ne Zaman Ciddiye Alınmalı?", "Kaçınma iş, eğitim, ilişkiler veya temel günlük ihtiyaçları karşılamayı belirgin biçimde sınırlıyorsa değerlendirme yararlı olabilir.")], relatedTerms: [{ term: "Anksiyete", slug: "anksiyete" }, { term: "Panik bozukluk", slug: "panik-bozukluk" }], seo: { title: "Agorafobi Nedir? | Psikiyatri Sözlüğü", description: "Agorafobinin yalnız açık alan korkusundan ibaret olmadığını, kaçınma ve yardım alma kaygısı üzerinden açıklar.", ogTitle: "Agorafobi Nedir?", ogDescription: "Agorafobide hangi durumların kaygı ve kaçınma yaratabileceğini açıklar." }, schema: { definedTermDescription: "Kaçmanın veya yardım almanın zor olabileceği düşünülen durumlarda yoğun kaygı ve kaçınma ile ilişkili durum." } }),
  defineTerm({ term: "DEHB", slug: "dehb", shortDefinition: "Dikkat eksikliği ve hiperaktivite bozukluğu; dikkat, dürtüsellik ve hareketlilik alanlarında süren güçlüklerle ilişkilidir.", intro: "Sadece çocuklukla sınırlı değildir; belirtiler yetişkinlikte de farklı görünümlerle sürebilir.", sections: [section("Kısa Tanım", "DEHB’de dikkati sürdürme, planlama, zamanı düzenleme, dürtüleri yönetme veya hareketliliği ayarlama alanlarında güçlükler görülebilir."), section("Yaşam Boyu Görünüm", "Çocuklukta daha görünür olan hareketlilik, yetişkinlikte iç huzursuzluk, dağınıklık, unutkanlık veya işlere başlamakta zorlanma biçiminde tarif edilebilir."), section("Yanlış Yorumlardan Farkı", "DEHB tembellik, irade zayıflığı veya zekâ problemi değildir. Değerlendirme belirtilerin süresini, farklı ortamlardaki görünümünü ve işlevselliği kapsar."), section("Ne Zaman Değerlendirme Gerekir?", "Yakınmalar okul, iş, ilişkiler veya günlük düzen üzerinde kalıcı güçlük yaratıyorsa uzman değerlendirmesi yararlı olabilir.")], relatedTerms: [{ term: "Dürtüsellik", slug: "durtusellik" }], seo: { title: "DEHB Nedir? | Psikiyatri Sözlüğü", description: "DEHB’nin dikkat, dürtüsellik ve hareketlilik alanlarındaki görünümünü çocukluk ve yetişkinlik bağlamında açıklar.", ogTitle: "DEHB Nedir?", ogDescription: "DEHB’yi tembellik veya irade zayıflığıyla eşitlemeden açıklar." }, schema: { definedTermDescription: "Dikkat, dürtüsellik ve hareketliliğin düzenlenmesinde süren güçlüklerle ilişkili nörogelişimsel durum." } }),
  defineTerm({ term: "Bipolar I bozukluk", slug: "bipolar-1-bozukluk", shortDefinition: "Bipolar I bozuklukta manik dönem varlığı temel klinik önem taşır; depresif dönemler eşlik edebilir ancak tanım için zorunlu değildir.", intro: "Bipolar II bozuklukla aynı değildir; bu ayrımda manik dönemin şiddeti ve işlevsellik üzerindeki etkisi önemlidir.", sections: [section("Kısa Tanım", "Manik dönemde duygu durum, enerji, uyku ihtiyacı, düşünce akışı ve davranışlarda belirgin değişiklik görülebilir; işlevsellik ciddi biçimde etkilenebilir."), section("Bipolar II’den Farkı", "Bipolar I bozuklukta mani tanımlayıcıdır. Bipolar II’de hipomani ve depresif dönem örüntüsü değerlendirilir; iki tanı birbirinin yerine kullanılmamalıdır."), section("Günlük Yaşama Etkisi", "Dönemler arası işlevsellik kişiden kişiye değişebilir. Yakınların gözlemleri ve geçmiş dönemlerin ayrıntılı öyküsü değerlendirmede yararlı olabilir."), section("Ne Zaman Ciddiye Alınmalı?", "Belirgin enerji artışı, uyku gereksiniminde azalma, davranışlarda alışılmadık değişim veya güvenliği etkileyen durumlarda gecikmeden değerlendirme gerekir.")], relatedTerms: [{ term: "Mani", slug: "mani" }, { term: "Hipomani", slug: "hipomani" }], seo: { title: "Bipolar I Bozukluk Nedir? | Psikiyatri Sözlüğü", description: "Bipolar I bozuklukta manik dönemin önemini ve bipolar II’den farkını sade biçimde açıklar.", ogTitle: "Bipolar I Bozukluk Nedir?", ogDescription: "Manik dönem ile bipolar I bozukluk arasındaki klinik ilişkiyi açıklar." }, schema: { definedTermDescription: "Manik dönem varlığıyla tanımlanan, duygu durum ve enerji değişimleriyle ilişkili bipolar bozukluk türü." } }),
  defineTerm({ term: "Şizofreni", slug: "sizofreni", shortDefinition: "Şizofreni; düşünce, algı, duygulanım ve işlevsellikte değişimlerle seyreden karmaşık bir ruhsal bozukluktur.", intro: "Psikozla eş anlamlı değildir; psikoz bir belirti kümesini, şizofreni ise tanısal değerlendirmesi kapsamlı bir bozukluğu anlatır.", sections: [section("Kısa Tanım", "Belirtiler kişiden kişiye değişebilir. Bazı dönemlerde sanrılar, varsanılar, düşünce organizasyonunda güçlükler veya sosyal geri çekilme görülebilir."), section("Psikozla İlişkisi", "Psikotik belirtiler şizofreni dışında da farklı ruhsal, nörolojik veya tıbbi durumlarda görülebilir. Bu nedenle tek belirtiyle tanı konmaz."), section("Damgalamadan Konuşmak", "Şizofreni tanısı kişinin kimliğini ya da tüm yaşamını tanımlamaz. Saygılı dil, tedaviye erişim ve sosyal destek iyilik halini destekler."), section("Ne Zaman Değerlendirme Gerekir?", "Gerçekliği değerlendirmede belirgin değişim, işlev kaybı veya kişinin güvenliğini etkileyen belirtiler varsa gecikmeden profesyonel destek gerekir.")], relatedTerms: [{ term: "Psikoz", slug: "psikoz" }, { term: "Sanrı", slug: "sanri" }, { term: "Varsanı", slug: "varsani" }], seo: { title: "Şizofreni Nedir? | Psikiyatri Sözlüğü", description: "Şizofreninin psikozla ilişkisini, belirtilerinin çeşitliliğini ve damgalamayan yaklaşımı açıklar.", ogTitle: "Şizofreni Nedir?", ogDescription: "Şizofreniyi psikozla eşitlemeden, bilimsel ve saygılı bir dille açıklar." }, schema: { definedTermDescription: "Düşünce, algı, duygulanım ve işlevsellikte değişimlerle seyreden karmaşık ruhsal bozukluk." } }),
  defineTerm({ term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk", shortDefinition: "Majör depresif bozukluk, çökkün duygu durum veya ilgi ve zevk kaybının başka belirtilerle birlikte sürdüğü klinik bir tablodur.", intro: "Normal üzüntü yaşamın doğal bir parçasıdır; depresyon değerlendirmesinde süre, şiddet ve hayatın birçok alanına yayılan etki önemlidir.", sections: [section("Kısa Tanım", "Uyku, iştah, enerji, dikkat ve hareket hızında değişimler eşlik edebilir. Depresyon yalnızca tek bir biyolojik açıklamayla, örneğin serotonin eksikliğiyle, açıklanamaz."), section("Normal Üzüntüden Farkı", "Üzüntü çoğu zaman belirli bir kayıpla ilişkilidir ve dalgalanabilir. Majör depresif bozuklukta belirtiler daha kalıcı ve günlük işlevi etkileyici olabilir."), section("Eşlik Edebilen Belirtiler", "Anhedoni, psikomotor yavaşlama veya ölümle ilgili düşünceler bazı kişilerde görülebilir; her belirti herkeste aynı biçimde ortaya çıkmaz."), section("Ne Zaman Ciddiye Alınmalı?", "Belirtiler iki haftadan uzun sürüyor, yaşamı belirgin biçimde etkiliyor ya da kendine zarar verme düşünceleri eşlik ediyorsa gecikmeden destek alınmalıdır.")], relatedTerms: [{ term: "Anhedoni", slug: "anhedoni" }, { term: "Psikomotor retardasyon", slug: "psikomotor-retardasyon" }, { term: "İntihar düşüncesi", slug: "intihar-dusuncesi" }], seo: { title: "Majör Depresif Bozukluk Nedir? | Psikiyatri Sözlüğü", description: "Majör depresif bozukluğun normal üzüntüden farkını, belirtilerini ve değerlendirme çerçevesini açıklar.", ogTitle: "Majör Depresif Bozukluk Nedir?", ogDescription: "Depresyonu tek nedene indirmeden, klinik çerçevede açıklar." }, schema: { definedTermDescription: "Çökkün duygu durum veya ilgi ve zevk kaybının başka belirtilerle birlikte sürdüğü depresif bozukluk." } }),
  defineTerm({ term: "İntihar düşüncesi", slug: "intihar-dusuncesi", shortDefinition: "İntihar düşüncesi, kişinin yaşamına son verme isteği veya ölümle ilgili düşünceler yaşamasını anlatır ve ciddiyetle ele alınmalıdır.", intro: "Bu düşünceler utanılacak bir durum değildir; paylaşmak ve destek istemek güvenlik için önemli bir adımdır.", sections: [section("Klinik Çerçeve", "İntihar düşüncesi farklı yoğunluklarda görülebilir ve tek başına bir tanı değildir. Depresyon, travma, kayıp, madde kullanımı veya başka zorlanmalarla birlikte olabilir."), section("Ne Zaman Ciddiye Alınmalı?", "Kişi kendine zarar verme düşüncelerinin arttığını, güvenli kalamayacağını ya da yalnız başa çıkamadığını hissediyorsa beklemeden en yakın acil servise başvurmalı veya 112’yi aramalıdır."), section("Yakın Olan Birine Nasıl Yaklaşılır?", "Sakin, yargısız ve doğrudan dinlemek; kişiyi yalnız bırakmamak ve profesyonel yardıma ulaşmasına eşlik etmek önemlidir. Söz verme ya da sorunu küçümseme yerine güvenliği öncelemek gerekir."), section("Destek Almak", "Düşünceler geçici görünse bile uzman değerlendirmesi yararlı olabilir. Acil risk söz konusuysa en yakın acil servis ve 112 yönlendirmesi geciktirilmemelidir.")], relatedTerms: [{ term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }], seo: { title: "İntihar Düşüncesi: Ne Zaman Acil Destek Gerekir? | Psikiyatri Sözlüğü", description: "İntihar düşüncesini güvenli, klinik ve damgalamayan bir dille; acil destek gerektiren durumlarıyla açıklar.", ogTitle: "İntihar Düşüncesi ve Acil Destek", ogDescription: "İntihar düşüncesi için güvenliği önceleyen bilgilendirme ve acil yardım yönlendirmesi." }, schema: { definedTermDescription: "Kişinin yaşamına son verme isteği veya ölümle ilgili düşünceler yaşaması; güvenlik açısından ciddiyetle değerlendirilmesi gereken durum." } }),
  defineTerm({ term: "Psikomotor retardasyon", slug: "psikomotor-retardasyon", shortDefinition: "Psikomotor retardasyon, hareket, konuşma, düşünce ve tepki hızında belirgin yavaşlama görülmesini anlatır.", intro: "Sadece yavaş hareket etmek değildir; kişinin başlama, yanıt verme ve zihinsel işlemleme temposunu da etkileyebilir.", sections: [section("Kısa Tanım", "Kişi daha yavaş konuşabilir, sorulara yanıt vermeden önce uzun süre düşünebilir, mimikleri azalabilir veya günlük işleri başlatmakta güçlük çekebilir."), section("Nelerle İlişkili Olabilir?", "Majör depresif bozuklukta görülebilir; ancak başka ruhsal, nörolojik, tıbbi durumlar veya ilaç etkileriyle de ilişkili olabilir."), section("Yorgunluktan Farkı", "Yorgunlukta enerji azalması baskın olabilir. Psikomotor retardasyonda gözlenebilir hareket, konuşma ve tepki yavaşlaması daha belirgin bir klinik bulgudur."), section("Ne Zaman Ciddiye Alınmalı?", "Yeni başlayan, belirginleşen veya günlük işlevi bozan yavaşlama için profesyonel değerlendirme yararlı olur.")], relatedTerms: [{ term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }], seo: { title: "Psikomotor Retardasyon Nedir? | Psikiyatri Sözlüğü", description: "Psikomotor retardasyonda hareket, konuşma, düşünce ve tepki hızındaki yavaşlamayı açıklar.", ogTitle: "Psikomotor Retardasyon Nedir?", ogDescription: "Psikomotor yavaşlamayı yalnız yorgunlukla eşitlemeden açıklar." }, schema: { definedTermDescription: "Hareket, konuşma, düşünce ve tepki hızında belirgin yavaşlama ile ilişkili klinik bulgu." } }),
  defineTerm({ term: "Uyum bozukluğu", slug: "uyum-bozuklugu", shortDefinition: "Uyum bozukluğu, belirlenebilir bir stres etkenine verilen tepkinin kişinin işlevselliğini belirgin biçimde zorlamasıyla ilişkili olabilir.", intro: "Her stres tepkisi hastalık değildir; değerlendirmede tepkinin bağlamı, süresi ve yaşam üzerindeki etkisi ele alınır.", sections: [section("Kısa Tanım", "İş değişikliği, ilişki sorunları, kayıp, taşınma veya başka yaşam olayları sonrası kaygı, çökkünlük ya da davranışsal güçlükler ortaya çıkabilir."), section("Normal Stres Tepkisinden Farkı", "Zorlayıcı olaylara tepki vermek doğaldır. Uyum bozukluğunda sıkıntı beklenenden daha yoğun olabilir veya kişinin günlük sorumluluklarını sürdürmesini belirgin biçimde zorlaştırabilir."), section("Akut Stres Bozukluğundan Farkı", "Akut stres bozukluğu travmatik bir olay sonrasında görülebilen özel bir belirti örüntüsüdür. Uyum bozukluğu ise daha geniş stres etkenleriyle ilişkilendirilebilir."), section("Ne Zaman Değerlendirme Gerekir?", "Belirtiler uzuyor, artıyor veya ilişkiler, iş ve özbakım üzerinde kalıcı etkiler yaratıyorsa destek almak yararlı olabilir.")], relatedTerms: [{ term: "Akut stres bozukluğu", slug: "akut-stres-bozuklugu" }], seo: { title: "Uyum Bozukluğu Nedir? | Psikiyatri Sözlüğü", description: "Uyum bozukluğunun belirlenebilir stres etkenleriyle ilişkisini ve normal stres tepkisinden farkını açıklar.", ogTitle: "Uyum Bozukluğu Nedir?", ogDescription: "Stres tepkisini her zaman hastalık olarak etiketlemeden ele alır." }, schema: { definedTermDescription: "Belirlenebilir stres etkenine verilen, işlevselliği belirgin biçimde zorlayan tepkiyle ilişkili durum." } }),
  defineTerm({ term: "Uyku hijyeni", slug: "uyku-hijyeni", shortDefinition: "Uyku hijyeni bir tanı değil, daha düzenli ve destekleyici uyku koşulları oluşturmaya yönelik genel alışkanlıkları anlatır.", intro: "Uyku güçlüğünde tek başına çözüm olmayabilir; ancak uyku düzenini etkileyen günlük etkenleri fark etmeye yardımcı olabilir.", sections: [section("Uyku Hijyeni Nedir?", "Düzenli yatış-kalkış saatleri, yatak odasının ışık ve gürültü koşulları ile gün içindeki alışkanlıklar uyku ritmini etkileyebilir."), section("Temel Alışkanlıklar", "Ekran kullanımını yatış saatine yakın azaltmak, kafein tüketimini günün geç saatlerinde sınırlamak ve yatağı mümkün olduğunca uyku için kullanmak genel öneriler arasındadır."), section("Çevresel Koşullar", "Serin, karanlık ve sakin bir ortam bazı kişiler için uykuya geçişi kolaylaştırabilir. Herkes için tek bir ideal düzen yoktur; sürdürülebilirlik önemlidir."), section("Ne Zaman Değerlendirme Gerekir?", "Uyku sorunu uzun sürüyor, gündüz işlevini bozuyor veya başka ruhsal ya da bedensel belirtilerle birlikteyse profesyonel değerlendirme yararlı olabilir.")], relatedTerms: [{ term: "Anksiyete", slug: "anksiyete" }], relatedSiteLinks: [{ label: "Uyku ve stres", href: "/uyku-ve-stres/" }], seo: { title: "Uyku Hijyeni Nedir? | Psikiyatri Sözlüğü", description: "Uyku hijyeninin tanı olmadığını; düzen, ekran, kafein, yatak kullanımı ve çevresel koşullar üzerinden açıklar.", ogTitle: "Uyku Hijyeni Nedir?", ogDescription: "Daha destekleyici uyku koşulları için genel ve bilimsel alışkanlıkları açıklar." }, schema: { definedTermDescription: "Düzenli ve destekleyici uyku koşulları oluşturmaya yönelik genel alışkanlıklar bütünü; tanı değildir." } })
];

const batchContext = "Bu açıklama, kavramı tanımak için genel bir çerçeve sunar; tek bir belirti ya da kısa bir gözlem kişisel tanı anlamına gelmez. Değerlendirmede belirtilerin süresi, şiddeti, kişinin yaşamındaki etkisi ve eşlik eden koşullar birlikte ele alınır.";
const normalizeBatchSlug = (value) => value.replace(/ı/g, "i").replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u");
const makeBatchTerm = (record) => defineTerm({
  term: record.term,
  slug: normalizeBatchSlug(record.slug),
  shortDefinition: record.definition,
  intro: record.intro,
  sections: [
    section("Kısa Tanım", `${record.focus} ${batchContext}`),
    section("Günlük Yaşamdaki Yansımaları", `${record.daily} ${batchContext}`),
    section("Benzer Kavramlarla İlişkisi", `${record.difference} ${batchContext}`),
    section("Ne Zaman Değerlendirme Gerekir?", `${record.support} ${batchContext}`)
  ],
  relatedTerms: record.relatedTerms.map((item) => ({ ...item, slug: normalizeBatchSlug(item.slug) })),
  relatedSiteLinks: record.relatedSiteLinks || [],
  seo: { title: `${record.term} Nedir? | Psikiyatri Sözlüğü`, description: `${record.term} kavramını, günlük yaşamdaki görünümünü ve hangi durumlarda değerlendirme gerekebileceğini sade biçimde açıklar.`, ogTitle: `${record.term} Nedir?`, ogDescription: `${record.term} kavramını bilimsel, sade ve damgalamayan bir çerçevede ele alır.` },
  schema: { definedTermDescription: record.definition }
});

const secondBatchTerms = [
  { term: "Obsesif kompulsif bozukluk", slug: "obsesif-kompulsif-bozukluk", definition: "Obsesif kompulsif bozukluk, istenmeden gelen yineleyici düşünceler ve kaygıyı azaltmaya yönelik tekrarlayıcı davranışlarla ilişkili olabilir.", intro: "OKB olarak da anılan bu durum, kişinin kontrol etmekte zorlandığı döngülerle günlük yaşamını etkileyebilir.", focus: "Obsesyonlar ve kompulsiyonlar kişide belirgin sıkıntı yaratabilir.", daily: "Kişi zamanının önemli bölümünü düşünce ve davranış döngülerini yönetmeye ayırabilir.", difference: "Obsesyon ve kompulsiyon ayrı kavramlardır; OKB bu belirtilerin daha geniş klinik örüntüsünü anlatır.", support: "Belirtiler günlük işlevi, ilişkileri veya zamanı belirgin biçimde etkiliyorsa destek yararlı olabilir.", relatedTerms: [{ term: "Obsesyon", slug: "obsesyon" }, { term: "Kompulsiyon", slug: "kompulsiyon" }, { term: "Ruminasyon", slug: "ruminasyon" }] },
  { term: "Bipolar II bozukluk", slug: "bipolar-2-bozukluk", definition: "Bipolar II bozukluk, hipomani dönemleri ile depresif dönemlerin örüntüsü üzerinden değerlendirilen bir duygudurum bozukluğudur.", intro: "Bipolar I bozuklukla aynı değildir; bu ayrımda mani ve hipomani arasındaki klinik fark önemlidir.", focus: "Hipomani enerji ve duygu durumda değişimle seyredebilir ancak maniyle aynı şiddette olmak zorunda değildir.", daily: "Duygudurum değişimleri uyku, kararlar, ilişkiler ve çalışma düzeni üzerinde etkili olabilir.", difference: "Bipolar I bozuklukta mani tanımlayıcıdır; bipolar II’de hipomani ve depresif dönemler değerlendirilir.", support: "Dönemsel değişimler belirginleşiyor veya işlevselliği etkiliyorsa değerlendirme gerekir.", relatedTerms: [{ term: "Bipolar I bozukluk", slug: "bipolar-1-bozukluk" }, { term: "Hipomani", slug: "hipomani" }, { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }] },
  { term: "Özgül fobi", slug: "ozgul-fobi", definition: "Özgül fobi, belirli bir nesne veya durum karşısında yoğun korku ve kaçınma yaşanmasıyla ilişkili olabilir.", intro: "Korkunun şiddeti, kişinin yaşam alanını daralttığında klinik değerlendirme anlamlı hale gelebilir.", focus: "Korku belirli bir durumla sınırlı olsa da bedensel kaygı belirtileri eşlik edebilir.", daily: "Kişi karşılaşma ihtimali olan yerleri, etkinlikleri veya yolları planlayarak kaçınabilir.", difference: "Fobi genel kaygıdan, belirli bir uyaranla ilişkili olması bakımından ayrılabilir.", support: "Kaçınma eğitim, iş, sosyal yaşam veya özbakımı etkiliyorsa yardım almak yararlı olabilir.", relatedTerms: [{ term: "Anksiyete", slug: "anksiyete" }, { term: "Agorafobi", slug: "agorafobi" }] },
  { term: "Otizm spektrum bozukluğu", slug: "otizm-spektrum-bozuklugu", definition: "Otizm spektrum bozukluğu, sosyal iletişimde farklılıklar ve tekrarlayıcı ilgi ya da davranış örüntüleriyle ilişkili nörogelişimsel bir durumdur.", intro: "Belirtiler kişiden kişiye farklılaşır; tek bir davranış üzerinden sonuç çıkarmak doğru değildir.", focus: "Sosyal iletişim, duyusal hassasiyetler ve rutin ihtiyacı farklı yoğunluklarda görülebilir.", daily: "Çevresel düzen, iletişim biçimi ve beklentilerin açıklığı günlük deneyimi etkileyebilir.", difference: "Bu durum kişilik tercihi veya ebeveyn tutumuyla açıklanamaz; kapsamlı gelişimsel değerlendirme gerekir.", support: "Gelişimsel güçlükler yaşamı etkiliyorsa uygun uzman değerlendirmesi yararlı olur.", relatedTerms: [{ term: "Sosyal iletişim", slug: "sosyal-iletisim" }, { term: "Duyusal hassasiyet", slug: "duyusal-hassasiyet" }] },
  { term: "Distimi", slug: "distimi", definition: "Distimi, uzun süreli ve daha hafif seyredebilse de yaşamı etkileyebilen çökkün duygudurum örüntüsünü anlatır.", intro: "Kalıcı depresif belirtiler kişinin kendini ve günlük yaşamını algılayışını etkileyebilir.", focus: "Belirtiler enerji, umut, ilgi ve işlevsellikte süreğen değişimlerle ilişkili olabilir.", daily: "Kişi bunu uzun zamandır var olan bir özellik gibi algılayabilir ve destek aramayı erteleyebilir.", difference: "Majör depresif bozuklukla belirtiler örtüşebilir; süre ve örüntü ayrımda önemlidir.", support: "Uzun süren çökkünlük veya keyif kaybı için değerlendirme yararlı olabilir.", relatedTerms: [{ term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }, { term: "Anhedoni", slug: "anhedoni" }] },
  { term: "Şizoaffektif bozukluk", slug: "sizoaffektif-bozukluk", definition: "Şizoaffektif bozukluk, psikotik belirtilerle duygudurum belirtilerinin birlikte değerlendirildiği bir tanı grubudur.", intro: "Tanısal ayrım, belirtilerin zaman içindeki örüntüsünün uzman tarafından dikkatle değerlendirilmesini gerektirir.", focus: "Psikotik ve duygudurum belirtileri kişiden kişiye farklı biçimde görülebilir.", daily: "Belirtiler düşünce, enerji, ilişkiler ve işlevsellik üzerinde etkili olabilir.", difference: "Şizofreni ve bipolar bozuklukla ortak belirtiler bulunabilir; tek belirti tanıyı belirlemez.", support: "Gerçekliği değerlendirmede değişim veya belirgin işlev kaybında gecikmeden yardım gerekir.", relatedTerms: [{ term: "Şizofreni", slug: "sizofreni" }, { term: "Psikoz", slug: "psikoz" }, { term: "Duygudurum", slug: "duygudurum" }] },
  { term: "Sanrısal bozukluk", slug: "sanrisal-bozukluk", definition: "Sanrısal bozukluk, gerçeklikle uyumsuz ve kalıcı inançların klinik değerlendirmede öne çıktığı bir bozukluktur.", intro: "İnançların içeriği ve kişinin genel işlevselliği uzman değerlendirmesinde birlikte ele alınır.", focus: "Sanrılar kişinin çevreyi yorumlama biçimini ve ilişkilerini zorlayabilir.", daily: "Kişi yaşadıklarını güçlü bir gerçeklik duygusuyla açıklayabilir.", difference: "Sanrı bir belirtidir; sanrısal bozukluk ise daha geniş tanısal değerlendirmeyi anlatır.", support: "Gerçekliği değerlendirmede belirgin değişim veya güvenlik riski varsa destek gerekir.", relatedTerms: [{ term: "Sanrı", slug: "sanri" }, { term: "Psikoz", slug: "psikoz" }] },
  { term: "Kısa psikotik bozukluk", slug: "kisa-psikotik-bozukluk", definition: "Kısa psikotik bozukluk, psikotik belirtilerin sınırlı bir zaman örüntüsünde görülmesiyle değerlendirilen bir durumdur.", intro: "Belirtilerin süresi ve bağlamı tanısal değerlendirmede önem taşır.", focus: "Algı, düşünce veya davranışta gerçekliği değerlendirmeyi etkileyen değişimler olabilir.", daily: "Kişinin ve yakınlarının günlük düzeni bu belirtilerden belirgin biçimde etkilenebilir.", difference: "Psikoz bir belirti kümesidir; kısa psikotik bozukluk belirli klinik ölçütlerle değerlendirilir.", support: "Ani başlayan gerçeklik değerlendirmesi değişikliklerinde acil profesyonel yardım gerekir.", relatedTerms: [{ term: "Psikoz", slug: "psikoz" }, { term: "Şizofreni", slug: "sizofreni" }] },
  { term: "Madde kullanım bozukluğu", slug: "madde-kullanim-bozuklugu", definition: "Madde kullanım bozukluğu, madde kullanımının kontrolünde güçlük ve zararlar sürerken kullanımın devam etmesiyle ilişkili olabilir.", intro: "Bu durum ahlaki bir eksiklik değil, biyolojik, psikolojik ve sosyal yönleri olan bir sağlık sorunudur.", focus: "Kullanım örüntüsü, kontrol kaybı ve işlevsellikteki etkiler birlikte değerlendirilir.", daily: "İlişkiler, çalışma hayatı, uyku ve güvenlik alanlarında güçlükler görülebilir.", difference: "Her kullanım bozukluk anlamına gelmez; risk ve etkilenme örüntüsü önemlidir.", support: "Kullanım kişi veya çevresi için zarar yaratıyorsa profesyonel destek yararlı olur.", relatedTerms: [{ term: "Bağımlılık", slug: "bagimlilik" }, { term: "Alkol kullanım bozukluğu", slug: "alkol-kullanim-bozuklugu" }] },
  { term: "Alkol kullanım bozukluğu", slug: "alkol-kullanim-bozuklugu", definition: "Alkol kullanım bozukluğu, alkol kullanımını azaltmakta güçlük ve olumsuz sonuçlara rağmen kullanımın sürmesiyle ilişkili olabilir.", intro: "Değerlendirme yargılamak için değil, riskleri ve destek ihtiyacını anlamak için yapılır.", focus: "Kullanımın sıklığı, kontrolü ve günlük yaşama etkileri birlikte ele alınır.", daily: "İşlevsellik, ilişkiler, uyku ve güvenlik üzerinde sorunlar ortaya çıkabilir.", difference: "Alkol kullanımı ile kullanım bozukluğu aynı değildir; zarar ve kontrol kaybı önemlidir.", support: "Kullanım nedeniyle sorun yaşayan kişiler için profesyonel destek yararlı olabilir.", relatedTerms: [{ term: "Madde kullanım bozukluğu", slug: "madde-kullanim-bozuklugu" }, { term: "Bağımlılık", slug: "bagimlilik" }] },
  { term: "Kumar oynama bozukluğu", slug: "kumar-oynama-bozuklugu", definition: "Kumar oynama bozukluğu, kumar davranışını kontrol etmekte güçlük ve zararlar sürse de davranışın devam etmesiyle ilişkili olabilir.", intro: "Bu durum kişilik kusuru değil, değerlendirme ve destek gerektirebilen bir davranışsal bağımlılık örüntüsüdür.", focus: "Kumar düşünceleri ve davranışı zaman, para, ilişkiler ve sorumluluklar üzerinde etkili olabilir.", daily: "Kişi azaltma girişimlerine rağmen döngüyü sürdürmekte zorlanabilir.", difference: "Ara sıra kumar oynamak ile kontrol kaybı ve zarar içeren örüntü aynı değildir.", support: "Davranış günlük yaşamda zarara yol açıyorsa değerlendirme yararlı olur.", relatedTerms: [{ term: "Bağımlılık", slug: "bagimlilik" }, { term: "Dijital bağımlılık", slug: "dijital-bagimlilik" }] },
  { term: "Dijital bağımlılık", slug: "dijital-bagimlilik", definition: "Dijital bağımlılık, dijital araç kullanımının kontrol edilememesi ve günlük işlevselliği bozmasıyla ilişkili olabilir.", intro: "Ekran kullanımı tek başına sorun değildir; kullanımın kişinin yaşamındaki etkisi önemlidir.", focus: "Kullanımın süresi, amacı, kontrolü ve yol açtığı sonuçlar birlikte değerlendirilir.", daily: "Uyku, okul, iş, ilişkiler ve yüz yüze etkinlikler etkilenebilir.", difference: "Yoğun kullanım ile bağımlılık örüntüsü aynı değildir; işlev kaybı ve kontrol güçlüğü önem taşır.", support: "Kullanım yaşam alanlarını belirgin biçimde daraltıyorsa destek yararlı olabilir.", relatedTerms: [{ term: "Bağımlılık", slug: "bagimlilik" }, { term: "Kumar oynama bozukluğu", slug: "kumar-oynama-bozuklugu" }] },
  { term: "Anoreksiya nervoza", slug: "anoreksiya-nervoza", definition: "Anoreksiya nervoza, yeme davranışı, kilo alma korkusu ve beden algısıyla ilişkili ciddi bir yeme bozukluğudur.", intro: "Bu durum irade veya görünüş tercihiyle açıklanamaz; fiziksel ve ruhsal etkileri birlikte değerlendirilir.", focus: "Yeme, beden algısı ve kontrol ihtiyacı çevresinde yoğun kaygılar görülebilir.", daily: "Düşünceler ve davranışlar sosyal yaşamı, enerjiyi ve günlük işlevi etkileyebilir.", difference: "Yeme bozuklukları farklı belirtiler gösterebilir; tek bir görünüm tanıyı belirlemez.", support: "Yeme davranışında belirgin değişim veya sağlık etkisi varsa gecikmeden değerlendirme gerekir.", relatedTerms: [{ term: "Bulimiya nervoza", slug: "bulimiya-nervoza" }, { term: "Tıkınırcasına yeme bozukluğu", slug: "tikinarcasina-yeme-bozuklugu" }] },
  { term: "Bulimiya nervoza", slug: "bulimiya-nervoza", definition: "Bulimiya nervoza, tekrarlayıcı yeme atakları ve kilo alma kaygısıyla ilişkili telafi edici davranış döngüleriyle değerlendirilen bir yeme bozukluğudur.", intro: "Belirtiler utanma ve gizleme nedeniyle görünmeyebilir; yargısız destek önemlidir.", focus: "Yeme davranışı, beden algısı ve yoğun suçluluk duyguları birlikte ele alınabilir.", daily: "Döngü kişinin ruhsal ve fiziksel iyilik halini, ilişkilerini ve günlük düzenini zorlayabilir.", difference: "Farklı yeme bozukluklarının belirtileri örtüşebilir; klinik değerlendirme ayrım için gereklidir.", support: "Yeme davranışındaki döngüler sağlık veya işlevsellik üzerinde etkiliyse destek gerekir.", relatedTerms: [{ term: "Anoreksiya nervoza", slug: "anoreksiya-nervoza" }, { term: "Tıkınırcasına yeme bozukluğu", slug: "tikinarcasina-yeme-bozuklugu" }] },
  { term: "Tıkınırcasına yeme bozukluğu", slug: "tikinarcasina-yeme-bozuklugu", definition: "Tıkınırcasına yeme bozukluğu, kontrol kaybı hissiyle eşlik edebilen yineleyici yeme ataklarıyla ilişkili olabilir.", intro: "Bu durum irade zayıflığı olarak görülmemeli; utanma yerine anlayışlı değerlendirme gerektirir.", focus: "Yeme atakları sonrasında sıkıntı, suçluluk veya bedenle ilgili olumsuz düşünceler görülebilir.", daily: "Yeme davranışı kişinin sosyal yaşamını ve kendilik algısını etkileyebilir.", difference: "Ara sıra fazla yemek ile yineleyici, sıkıntı yaratan kontrol kaybı örüntüsü aynı değildir.", support: "Yeme döngüleri belirgin sıkıntı veya işlev kaybı yaratıyorsa değerlendirme yararlı olur.", relatedTerms: [{ term: "Anoreksiya nervoza", slug: "anoreksiya-nervoza" }, { term: "Bulimiya nervoza", slug: "bulimiya-nervoza" }] },
  { term: "İnsomnia", slug: "insomnia", definition: "İnsomnia, uykuya dalma, uykuyu sürdürme veya dinlenmiş uyanmada güçlük yaşanmasıdır.", intro: "Uyku sorunları farklı bedensel ve ruhsal etkenlerle ilişkili olabilir; tek bir nedene indirgenmemelidir.", focus: "Uykuya ayrılan zaman yeterli olsa bile uyku kalitesi veya sürekliliği zorlanabilir.", daily: "Gündüz yorgunluğu, dikkat güçlüğü ve tahammülsüzlük eşlik edebilir.", difference: "Uyku hijyeni bir tanı değildir; insomnia ise değerlendirilmesi gereken bir uyku yakınmasıdır.", support: "Uyku güçlüğü kalıcılaşıyor veya gündüz işlevini bozuyorsa destek yararlı olur.", relatedTerms: [{ term: "Uyku hijyeni", slug: "uyku-hijyeni" }, { term: "Anksiyete", slug: "anksiyete" }] },
  { term: "Hipersomnia", slug: "hipersomnia", definition: "Hipersomnia, yeterli uykuya rağmen aşırı uykululuk veya uzun uyuma ihtiyacı yaşanmasıyla ilişkili olabilir.", intro: "Yorgunlukla aynı değildir; gündüz uykululuğu ve işlevsellik üzerindeki etkisi değerlendirilir.", focus: "Uyku süresi, uyku kalitesi, günlük ritim ve eşlik eden belirtiler önem taşır.", daily: "Dikkat, enerji, çalışma düzeni ve sosyal katılım etkilenebilir.", difference: "Hipersomnia ve insomnia farklı uyku sorunlarıdır; ikisi de farklı nedenlerle görülebilir.", support: "Aşırı uykululuk sürüyor veya güvenliği etkiliyorsa değerlendirme gerekir.", relatedTerms: [{ term: "İnsomnia", slug: "insomnia" }, { term: "Uyku hijyeni", slug: "uyku-hijyeni" }] },
  { term: "Kabus bozukluğu", slug: "kabus-bozuklugu", definition: "Kabus bozukluğu, sık ve sıkıntı yaratan rüyaların uyku ve gündüz işlevselliğini etkilemesiyle ilişkili olabilir.", intro: "Her kabus bir bozukluk anlamına gelmez; tekrar, sıkıntı ve işlevsellikteki etkilenme önemlidir.", focus: "Kabuslar uykuya dönme kaygısı ve uyku düzeninde bozulma yaratabilir.", daily: "Kişi uyumayı erteleyebilir veya gündüz yorgunluğu yaşayabilir.", difference: "Travma sonrası kabuslar TSSB ile ilişkili olabilir, ancak her kabus TSSB anlamına gelmez.", support: "Kabuslar süreğense veya yaşamı etkiliyorsa değerlendirme yararlı olabilir.", relatedTerms: [{ term: "Travma sonrası stres bozukluğu", slug: "travma-sonrasi-stres-bozuklugu" }, { term: "İnsomnia", slug: "insomnia" }] },
  { term: "Duygudurum", slug: "duygudurum", definition: "Duygudurum, kişinin daha uzun süreli ve genel duygusal tonunu anlatan klinik kavramdır.", intro: "Anlık duygulardan farklı olarak günler veya daha uzun dönemler boyunca süren örüntüler değerlendirilir.", focus: "Çökkün, taşkın, irritabl veya dengeli duygu durumları farklı bağlamlarda görülebilir.", daily: "Enerji, karar verme, uyku ve ilişkiler duygu durum değişimlerinden etkilenebilir.", difference: "Duygu anlık deneyimi, duygudurum ise daha kalıcı genel duygusal tonu anlatır.", support: "Belirgin ve süreğen değişimler işlevselliği etkiliyorsa değerlendirme yararlı olur.", relatedTerms: [{ term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }, { term: "Bipolar I bozukluk", slug: "bipolar-1-bozukluk" }] },
  { term: "Çökkün duygudurum", slug: "cokkun-duygudurum", definition: "Çökkün duygudurum, üzüntü, boşluk veya umutsuzluk hissinin belirgin ve süreğen olabilen bir biçimde yaşanmasıdır.", intro: "Tek başına tanı değildir; süresi, bağlamı ve eşlik eden belirtiler önemlidir.", focus: "Kişi kendini keyifsiz, ağırlaşmış veya geleceğe karşı isteksiz hissedebilir.", daily: "İlişkiler, uyku, iştah, enerji ve etkinliklere katılım etkilenebilir.", difference: "Normal üzüntüyle örtüşebilir; klinik değerlendirmede yoğunluk ve işlev kaybı ele alınır.", support: "Belirtiler uzuyor veya güvenliği etkileyen düşünceler eşlik ediyorsa yardım gerekir.", relatedTerms: [{ term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }, { term: "Anhedoni", slug: "anhedoni" }] },
  { term: "Paranoid düşünce", slug: "paranoid-dusunce", definition: "Paranoid düşünce, başkalarının niyetleriyle ilgili kuşku ve tehdit algısının belirginleşmesini anlatır.", intro: "Bu düşüncenin bağlamı, sürekliliği ve kişinin gerçekliği değerlendirme biçimi önemlidir.", focus: "Kişi çevresindeki davranışları kendisine yönelik tehdit olarak yorumlayabilir.", daily: "Güven ilişkileri, sosyal katılım ve kararlar bu düşüncelerden etkilenebilir.", difference: "Kuşku her zaman sanrı değildir; klinik değerlendirme inancın esnekliğini ve etkisini ele alır.", support: "Belirgin sıkıntı, işlev kaybı veya güvenlik riski varsa destek gerekir.", relatedTerms: [{ term: "Sanrı", slug: "sanri" }, { term: "Psikoz", slug: "psikoz" }] },
  { term: "Negatif belirti", slug: "negatif-belirti", definition: "Negatif belirti, olağan duygu ifadesi, konuşma, istek veya sosyal katılımda azalma gibi belirtileri anlatır.", intro: "Bu belirtiler isteksizlik veya kişilik özelliği sanılmamalı; klinik bağlamda değerlendirilmelidir.", focus: "Duygusal ifade, motivasyon, konuşma miktarı ve sosyal ilgi azalabilir.", daily: "Günlük sorumluluklar ve ilişkiler üzerinde belirgin güçlük yaratabilir.", difference: "Negatif belirtiler depresyon veya ilaç etkileriyle de karışabilir; ayrım değerlendirme gerektirir.", support: "Yeni başlayan veya işlevselliği etkileyen değişimlerde profesyonel destek yararlı olur.", relatedTerms: [{ term: "Şizofreni", slug: "sizofreni" }, { term: "Künt duygulanım", slug: "kunt-duygulanım" }] },
  { term: "Künt duygulanım", slug: "kunt-duygulanım", definition: "Künt duygulanım, yüz ifadesi, ses tonu veya duygusal tepki çeşitliliğinde azalma görülmesini anlatır.", intro: "Dışarıdan sakin görünmek, kişinin iç dünyasında duygu olmadığı anlamına gelmez.", focus: "Duyguların dışa vurumu belirgin biçimde sınırlı veya tekdüze olabilir.", daily: "İletişim ve yakın ilişkilerde yanlış anlaşılmalara yol açabilir.", difference: "Apati ilgi ve girişimde azalmayı, künt duygulanım ise daha çok dışavurumdaki azalmayı vurgular.", support: "Yeni başlayan veya başka belirtilerle birlikte olan değişimlerde değerlendirme yararlı olur.", relatedTerms: [{ term: "Şizofreni", slug: "sizofreni" }, { term: "Apati", slug: "apati" }] },
  { term: "Güvence arama", slug: "guvence-arama", definition: "Güvence arama, kaygıyı azaltmak için tekrar tekrar onay veya rahatlatıcı bilgi isteme davranışıdır.", intro: "Kısa süreli rahatlama sağlasa da kaygı döngüsünü uzun vadede sürdürebilir.", focus: "Kişi belirsizliği tolere etmekte zorlandığında çevresinden sık onay isteyebilir.", daily: "Yakın ilişkiler ve karar verme süreçleri bu döngüden etkilenebilir.", difference: "Destek istemek sağlıklıdır; güvence aramada tekrar ve kaygıyı yatıştırma amacı baskın hale gelir.", support: "Davranış zaman alıyor veya kaygıyı artırıyorsa değerlendirme yararlı olabilir.", relatedTerms: [{ term: "Anksiyete", slug: "anksiyete" }, { term: "Obsesif kompulsif bozukluk", slug: "obsesif-kompulsif-bozukluk" }] },
  { term: "Dürtü kontrolü", slug: "durtu-kontrolu", definition: "Dürtü kontrolü, anlık istek veya davranışları sonuçlarını gözeterek düzenleyebilme becerisini anlatır.", intro: "Güçlük yaşamak ahlaki kusur anlamına gelmez; bağlam ve süre önemlidir.", focus: "Duygusal yoğunluk, dikkat güçlüğü veya stres sırasında davranışı ertelemek zorlaşabilir.", daily: "Kararlar, ilişkiler, harcamalar veya öfke tepkileri etkilenebilir.", difference: "Dürtüsellik bir belirti eğilimi, dürtü kontrolü ise bu eğilimi yönetebilme becerisidir.", support: "Davranışlar güvenliği veya günlük işlevi etkiliyorsa değerlendirme yararlı olur.", relatedTerms: [{ term: "Dürtüsellik", slug: "durtusellik" }, { term: "DEHB", slug: "dehb" }] },
  { term: "Kendine zarar verme", slug: "kendine-zarar-verme", definition: "Kendine zarar verme, kişinin duygusal sıkıntıyla baş etmek için kendine yönelik zarar verici davranışlarda bulunmasını anlatır ve ciddiyetle ele alınmalıdır.", intro: "Bu durum dikkat çekme olarak küçümsenmemeli; güvenlik ve destek ihtiyacı yargısız biçimde değerlendirilmelidir.", focus: "Davranışlar yoğun duyguları düzenleme çabasıyla ilişkili olabilir.", daily: "Utanç, gizleme ve yalnızlık desteğe ulaşmayı zorlaştırabilir.", difference: "Kendine zarar verme ile intihar düşüncesi aynı değildir; yine de her iki durumda güvenlik değerlendirmesi önemlidir.", support: "Kişi kendini güvende tutamayacağını hissediyorsa en yakın acil servise başvurmalı veya 112’yi aramalıdır.", relatedTerms: [{ term: "İntihar düşüncesi", slug: "intihar-dusuncesi" }] },
  { term: "Amnezi", slug: "amnezi", definition: "Amnezi, bellekle ilgili bilgileri hatırlamada belirgin güçlük yaşanmasını anlatır.", intro: "Nedenleri ruhsal, nörolojik veya tıbbi olabilir; yeni başlayan belirtiler değerlendirme gerektirir.", focus: "Kişi belirli dönemleri, olayları veya yeni bilgileri hatırlamakta zorlanabilir.", daily: "Günlük düzen, güvenlik ve ilişkiler bellek güçlüklerinden etkilenebilir.", difference: "Unutkanlık yaygın bir yakınmadır; amnezi daha belirgin bellek kaybını ifade eder.", support: "Ani veya belirgin bellek değişimlerinde gecikmeden sağlık değerlendirmesi gerekir.", relatedTerms: [{ term: "Dissosiyasyon", slug: "dissosiyasyon" }, { term: "Bilinç bulanıklığı", slug: "bilinc-bulanikligi" }] },
  { term: "Bilinç bulanıklığı", slug: "bilinc-bulanikligi", definition: "Bilinç bulanıklığı, dikkat, yönelim veya çevreyi kavrama becerisinde belirgin değişim yaşanmasını anlatır.", intro: "Ani ortaya çıktığında acil tıbbi değerlendirme gerektirebilir.", focus: "Kişi bulunduğu yeri, zamanı veya yaşananları anlamlandırmakta zorlanabilir.", daily: "İletişim, karar verme ve güvenlik üzerinde etkiler görülebilir.", difference: "Bu durum yalnız unutkanlıkla açıklanmaz; bilinç ve dikkat değişimi daha belirgindir.", support: "Ani başlayan bilinç değişikliklerinde acil sağlık hizmetine başvurulmalıdır.", relatedTerms: [{ term: "Amnezi", slug: "amnezi" }, { term: "Konfüzyon", slug: "konfuzyon" }] },
  { term: "Konfüzyon", slug: "konfuzyon", definition: "Konfüzyon, düşünce ve yönelimde karışıklık yaşanmasını anlatan klinik bir terimdir.", intro: "Ani veya dalgalanan belirtiler farklı tıbbi nedenlerle ilişkili olabileceğinden dikkatle değerlendirilmelidir.", focus: "Dikkati sürdürme, konuşulanı takip etme ve çevreyi anlamlandırma güçleşebilir.", daily: "Kişinin güvenliği ve günlük kararları etkilenebilir.", difference: "Konfüzyon, sıradan dalgınlıktan daha belirgin bilinç ve düşünce değişikliği içerir.", support: "Ani konfüzyon belirtilerinde acil değerlendirme gerekir.", relatedTerms: [{ term: "Bilinç bulanıklığı", slug: "bilinc-bulanikligi" }, { term: "Amnezi", slug: "amnezi" }] },
  { term: "Dikkat", slug: "dikkat", definition: "Dikkat, bilgiye yönelme, onu sürdürme ve gerekli uyaranları seçebilme becerisidir.", intro: "Dikkat performansı uyku, stres, kaygı, çevre ve sağlık durumlarından etkilenebilir.", focus: "Dikkati sürdürme veya dağıtan uyaranları filtreleme zaman zaman zorlaşabilir.", daily: "Okuma, çalışma, konuşmaları izleme ve günlük planlama etkilenebilir.", difference: "Dikkat güçlüğü tek başına DEHB tanısı anlamına gelmez; bağlam ve süre önemlidir.", support: "Süreğen güçlükler yaşamı etkiliyorsa değerlendirme yararlı olabilir.", relatedTerms: [{ term: "DEHB", slug: "dehb" }, { term: "Dikkat eksikliği", slug: "dikkat-eksikligi" }] },
  { term: "Dikkat eksikliği", slug: "dikkat-eksikligi", definition: "Dikkat eksikliği, odağı sürdürme, ayrıntıları izleme veya görevleri tamamlama alanlarında güçlük yaşanmasını anlatır.", intro: "Bu yakınma tek başına tanı değildir ve farklı nedenlerle görülebilir.", focus: "Unutkanlık, erteleme, kolay dağılma veya planlama güçlüğü eşlik edebilir.", daily: "Okul, iş, ev düzeni ve ilişkiler bu güçlüklerden etkilenebilir.", difference: "Dikkat eksikliği DEHB’de görülebilir ancak uyku, kaygı ve depresyon gibi farklı durumlarla da ilişkili olabilir.", support: "Yakınmalar kalıcılaşıyor ve işlevi etkiliyorsa değerlendirme yararlı olur.", relatedTerms: [{ term: "Dikkat", slug: "dikkat" }, { term: "DEHB", slug: "dehb" }] },
  { term: "Hiperaktivite", slug: "hiperaktivite", definition: "Hiperaktivite, yaşa ve bağlama göre beklenenden fazla hareketlilik veya yerinde durmakta güçlük yaşanmasını anlatır.", intro: "Tek başına tanı değildir; süre, ortamlar arası görünüm ve işlevsellik değerlendirilir.", focus: "Hareket etme ihtiyacı, oturmakta zorlanma veya sürekli meşgul olma görülebilir.", daily: "Okul, iş, sosyal ortamlar ve dinlenme zamanları etkilenebilir.", difference: "Hiperaktivite ile akatizi farklı mekanizmalarla görülebilir; klinik bağlam önemlidir.", support: "Belirtiler kalıcı ve yaşamı etkileyiciyse değerlendirme yararlı olabilir.", relatedTerms: [{ term: "DEHB", slug: "dehb" }, { term: "Akatizi", slug: "akatizi" }] },
  { term: "Duygu düzenleme", slug: "duygu-duzenleme", definition: "Duygu düzenleme, duyguları fark etme, anlama ve duruma uygun biçimde yönetebilme becerisidir.", intro: "Güçlük yaşamak zayıflık değildir; stres ve yaşam deneyimleri bu beceriyi etkileyebilir.", focus: "Yoğun duygular sırasında sakinleşmek, düşünmek veya davranışı ertelemek zorlaşabilir.", daily: "İlişkiler, kararlar ve özbakım duygusal yoğunluktan etkilenebilir.", difference: "Duygu düzenleme duyguları bastırmak değil, onları güvenli ve işlevsel biçimde ele alabilmektir.", support: "Yoğun duygular güvenliği veya işlevselliği etkiliyorsa destek yararlı olabilir.", relatedTerms: [{ term: "Dürtü kontrolü", slug: "durtu-kontrolu" }, { term: "Kendine zarar verme", slug: "kendine-zarar-verme" }] },
  { term: "Sirkadiyen ritim", slug: "sirkadiyen-ritim", definition: "Sirkadiyen ritim, uyku, uyanıklık ve bazı bedensel süreçlerin gün içindeki düzenini anlatır.", intro: "Işık, çalışma saatleri ve günlük alışkanlıklar bu ritmi etkileyebilir.", focus: "Ritimdeki değişiklikler uyku zamanını, enerji düzeyini ve dikkat performansını etkileyebilir.", daily: "Düzensiz uyku saatleri günlük düzen ve ruh hali üzerinde zorlayıcı olabilir.", difference: "Uyku hijyeni alışkanlıkları anlatırken sirkadiyen ritim biyolojik zamanlama düzenini ifade eder.", support: "Uyku-uyanıklık düzeni kalıcı biçimde bozuluyorsa değerlendirme yararlı olur.", relatedTerms: [{ term: "Uyku hijyeni", slug: "uyku-hijyeni" }, { term: "İnsomnia", slug: "insomnia" }] },
  { term: "Psikoterapi", slug: "psikoterapi", definition: "Psikoterapi, ruhsal güçlükleri anlamak ve başa çıkma yollarını geliştirmek için konuşmaya dayalı yapılandırılmış yardım sürecidir.", intro: "Yaklaşımın türü, hedefleri ve süresi kişinin ihtiyaçlarına göre değişebilir.", focus: "Süreçte düşünceler, duygular, ilişkiler ve davranış örüntüleri güvenli bir çerçevede ele alınabilir.", daily: "Kişi günlük yaşamındaki güçlükleri daha iyi anlamaya ve yeni beceriler geliştirmeye çalışabilir.", difference: "Psikoterapi tek bir yöntem değildir; farklı bilimsel yaklaşımlar bulunur.", support: "Ruhsal sıkıntılar yaşamı etkiliyorsa psikoterapi seçeneklerinden biri olabilir.", relatedTerms: [{ term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi" }, { term: "EMDR", slug: "emdr" }] },
  { term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi", definition: "Bilişsel davranışçı terapi, düşünce, duygu ve davranışlar arasındaki ilişkiyi ele alan yapılandırılmış bir psikoterapi yaklaşımıdır.", intro: "Hedefler ve uygulamalar kişiye ve ele alınan güçlüğe göre planlanır.", focus: "Düşünce örüntülerini fark etmek ve davranışsal beceriler geliştirmek sürecin parçaları olabilir.", daily: "Kişi günlük yaşamda zorlandığı durumlara farklı yaklaşımlar denemeyi öğrenebilir.", difference: "Bilişsel çarpıtma bir düşünme eğilimi, bilişsel davranışçı terapi ise bir tedavi yaklaşımıdır.", support: "Uygun yaklaşımın seçimi uzman değerlendirmesiyle yapılır.", relatedTerms: [{ term: "Psikoterapi", slug: "psikoterapi" }, { term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" }] },
  { term: "EMDR", slug: "emdr", definition: "EMDR, travmatik anılarla ilişkili sıkıntıyı ele almak için kullanılan yapılandırılmış bir psikoterapi yaklaşımıdır.", intro: "Uygunluğu, hedefleri ve uygulanma biçimi eğitimli bir uzman tarafından değerlendirilir.", focus: "Travmatik anıların duygusal etkisi güvenli bir terapötik çerçevede çalışılabilir.", daily: "Travma sonrası belirtiler kişinin uyku, güvenlik algısı ve ilişkilerini etkileyebilir.", difference: "EMDR tek başına her travma deneyimi için gerekli değildir; farklı psikoterapi yaklaşımları da vardır.", support: "Travma belirtileri kalıcılaşıyorsa profesyonel değerlendirme yararlı olur.", relatedTerms: [{ term: "Psikoterapi", slug: "psikoterapi" }, { term: "Travma sonrası stres bozukluğu", slug: "travma-sonrasi-stres-bozuklugu" }] },
  { term: "Risk değerlendirmesi", slug: "risk-degerlendirmesi", definition: "Risk değerlendirmesi, kişinin kendisi veya çevresi için olası güvenlik risklerini anlamaya yönelik klinik değerlendirme sürecidir.", intro: "Amaç kişiyi etiketlemek değil, güvenliği ve uygun desteği planlamaktır.", focus: "Düşünceler, belirtiler, geçmiş deneyimler, destek kaynakları ve güncel koşullar birlikte ele alınır.", daily: "Güvenlik kaygıları kişinin ve yakınlarının günlük yaşamını etkileyebilir.", difference: "Risk değerlendirmesi tek bir soruyla tamamlanmaz; zaman içinde güncellenebilen kapsamlı bir süreçtir.", support: "Acil risk varsa en yakın acil servis veya 112 yönlendirmesi bekletilmemelidir.", relatedTerms: [{ term: "İntihar düşüncesi", slug: "intihar-dusuncesi" }, { term: "Kendine zarar verme", slug: "kendine-zarar-verme" }] },
  { term: "Nüks", slug: "nuks", definition: "Nüks, belirtilerin bir iyilik döneminden sonra yeniden ortaya çıkmasını anlatır.", intro: "Bu durum başarısızlık anlamına gelmez; belirtilerin yeniden değerlendirilmesi ve destek planının gözden geçirilmesi için bir işarettir.", focus: "Belirtiler önceki döneme benzer veya farklı yoğunlukta geri dönebilir.", daily: "Uyku, stres, sosyal destek ve yaşam koşulları belirtilerin seyrini etkileyebilir.", difference: "Nüks ve relaps benzer biçimde kullanılabilir; klinik kullanım bağlama göre değişir.", support: "Belirtiler yeniden belirginleşiyorsa erken destek almak yararlı olabilir.", relatedTerms: [{ term: "Remisyon", slug: "remisyon" }, { term: "İzlem", slug: "izlem" }] },
  { term: "Komorbidite", slug: "komorbidite", definition: "Komorbidite, bir kişide birden fazla ruhsal veya bedensel durumun birlikte bulunmasını anlatır.", intro: "Birliktelik tanıları otomatik olarak açıklamaz; her durum kendi bağlamında değerlendirilir.", focus: "Kaygı, duygu durum, madde kullanımı veya bedensel belirtiler birlikte görülebilir.", daily: "Birden fazla güçlük kişinin yaşamındaki yükü ve destek ihtiyacını artırabilir.", difference: "Komorbidite bir neden-sonuç iddiası değil, birlikte görülme tanımıdır.", support: "Birden fazla belirti alanı varsa bütüncül değerlendirme yararlı olur.", relatedTerms: [{ term: "Anksiyete", slug: "anksiyete" }, { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }] },
  { term: "Sosyal destek", slug: "sosyal-destek", definition: "Sosyal destek, kişinin yakınlarından, çevresinden veya kurumlarından aldığı duygusal, pratik ve bilgisel yardımı anlatır.", intro: "Destek ağının niteliği, ruhsal zorlanmalarla baş etmede koruyucu bir kaynak olabilir.", focus: "Dinlenmek, yardım istemek ve güvenilir kişilerle bağlantı kurmak farklı destek biçimleridir.", daily: "Sosyal destek kişinin yalnızlık duygusunu ve günlük yükünü azaltmaya yardımcı olabilir.", difference: "Sosyal destek profesyonel yardımın yerine geçmez; gerektiğinde ikisi birlikte önem taşır.", support: "Zorlanma arttığında güvenilir destek kaynaklarına ve profesyonel yardıma başvurmak yararlı olabilir.", relatedTerms: [{ term: "Psikososyal destek", slug: "psikososyal-destek" }, { term: "Psikoterapi", slug: "psikoterapi" }] },
  { term: "Psikososyal destek", slug: "psikososyal-destek", definition: "Psikososyal destek, ruhsal zorlanma yaşayan kişilerin sosyal, duygusal ve günlük yaşam ihtiyaçlarını birlikte ele alan yardım biçimlerini anlatır.", intro: "Kişinin güçlü yanları, çevresi ve yaşadığı koşullar destek planında önemlidir.", focus: "Bilgilendirme, sosyal kaynaklara erişim ve aile desteği gibi unsurlar sürece eşlik edebilir.", daily: "Kişinin yaşam koşulları ve destek ağı iyilik hali üzerinde etkili olabilir.", difference: "Psikososyal destek tedavi yerine geçmez; tedavi ve rehabilitasyon süreçlerini tamamlayabilir.", support: "İşlev kaybı veya destek ihtiyacı varsa uygun kaynaklara yönlendirme yararlı olabilir.", relatedTerms: [{ term: "Sosyal destek", slug: "sosyal-destek" }, { term: "Rehabilitasyon", slug: "rehabilitasyon" }] },
  { term: "Rehabilitasyon", slug: "rehabilitasyon", definition: "Rehabilitasyon, kişinin işlevselliğini, bağımsızlığını ve toplumsal katılımını desteklemeye yönelik süreçleri anlatır.", intro: "Hedefler kişinin ihtiyaçlarına, güçlü yanlarına ve yaşam koşullarına göre belirlenir.", focus: "Beceri geliştirme, sosyal katılım ve günlük yaşam desteği farklı biçimlerde ele alınabilir.", daily: "Eğitim, iş, sosyal ilişkiler ve özbakım alanlarında destek ihtiyacı oluşabilir.", difference: "Rehabilitasyon yalnız belirtileri azaltmayı değil, yaşam kalitesini ve katılımı da hedefler.", support: "İşlev kaybı yaşayan kişiler için multidisipliner destek yararlı olabilir.", relatedTerms: [{ term: "Psikososyal destek", slug: "psikososyal-destek" }, { term: "İşlevsellik", slug: "islevsellik" }] },
  { term: "İşlevsellik", slug: "islevsellik", definition: "İşlevsellik, kişinin günlük yaşam, ilişkiler, eğitim, çalışma ve özbakım alanlarında ihtiyaçlarını sürdürebilme düzeyini anlatır.", intro: "Belirtilerin şiddeti kadar yaşam üzerindeki etkisi de klinik değerlendirmede önem taşır.", focus: "Ruhsal veya bedensel güçlükler günlük görevleri farklı derecelerde etkileyebilir.", daily: "Uyku, enerji, sosyal ilişkiler, karar verme ve sorumluluklar bu alanda ele alınabilir.", difference: "Tanı ile işlevsellik aynı şey değildir; aynı tanıya sahip kişiler farklı düzeylerde etkilenebilir.", support: "Günlük yaşam belirgin biçimde zorlaşıyorsa değerlendirme ve destek yararlı olur.", relatedTerms: [{ term: "Psikososyal destek", slug: "psikososyal-destek" }, { term: "Rehabilitasyon", slug: "rehabilitasyon" }] }
  ,{ term: "Yeme bozukluğu", slug: "yeme-bozuklugu", definition: "Yeme bozukluğu, yeme davranışı, beden algısı ve ruhsal iyilik haliyle ilişkili klinik durumları kapsar.", intro: "Belirtiler farklı biçimlerde görülebilir ve yargısız değerlendirme gerektirir.", focus: "Yeme, beden algısı ve kontrolle ilgili güçlükler birlikte ele alınır.", daily: "Sosyal yaşam, enerji ve sağlık etkilenebilir.", difference: "Farklı yeme bozuklukları birbirinden ayrılabilir.", support: "Belirgin değişimlerde profesyonel destek yararlı olur.", relatedTerms: [{term:"Anoreksiya nervoza",slug:"anoreksiya-nervoza"},{term:"Bulimiya nervoza",slug:"bulimiya-nervoza"}] }
  ,{ term: "Psikotik özellik", slug: "psikotik-ozellik", definition: "Psikotik özellik, bir duygudurum veya başka klinik tabloya sanrı ya da varsanıların eşlik etmesini anlatır.", intro: "Bu bulgular uzman değerlendirmesi gerektirir.", focus: "Gerçekliği değerlendirmede değişiklikler görülebilir.", daily: "İletişim ve güvenlik etkilenebilir.", difference: "Psikotik özellik bir tanı değil, klinik belirtidir.", support: "Belirgin değişimlerde gecikmeden destek gerekir.", relatedTerms: [{term:"Psikoz",slug:"psikoz"},{term:"Sanrı",slug:"sanri"}] }
  ,{ term: "Pozitif belirti", slug: "pozitif-belirti", definition: "Pozitif belirti, olağan işlevlere eklenen sanrı, varsanı veya dezorganize düşünce gibi belirtileri anlatır.", intro: "Pozitif sözcüğü iyi anlamına gelmez; belirtilerin eklenmesini ifade eder.", focus: "Algı ve düşünce deneyimlerinde değişimler görülebilir.", daily: "İşlevsellik ve ilişkiler etkilenebilir.", difference: "Negatif belirtiler azalma ve yitimi vurgular.", support: "Belirgin belirtilerde değerlendirme gerekir.", relatedTerms: [{term:"Psikoz",slug:"psikoz"},{term:"Negatif belirti",slug:"negatif-belirti"}] }
  ,{ term: "Dezorganize davranış", slug: "dezorganize-davranis", definition: "Dezorganize davranış, davranışların bağlama uyumunun ve amaca yönelikliğinin belirgin biçimde bozulmasını anlatır.", intro: "Nedeni tek başına anlaşılmaz ve kapsamlı değerlendirme gerekir.", focus: "Davranışlar çevre için anlaşılması güç görünebilir.", daily: "Özbakım ve günlük düzen etkilenebilir.", difference: "Bu durum sıradan dağınıklıkla aynı değildir.", support: "Güvenlik veya işlev kaybı varsa yardım gerekir.", relatedTerms: [{term:"Psikoz",slug:"psikoz"},{term:"Şizofreni",slug:"sizofreni"}] }
  ,{ term: "Katatoni", slug: "katatoni", definition: "Katatoni, hareket, konuşma ve çevreye tepki biçiminde belirgin değişimlerle ilişkili klinik bir durumdur.", intro: "Acil ve kapsamlı tıbbi değerlendirme gerekebilir.", focus: "Hareket ve tepki örüntüsünde belirgin değişiklik olabilir.", daily: "Güvenlik ve özbakım etkilenebilir.", difference: "Yavaşlama tek başına katatoni anlamına gelmez.", support: "Ani veya belirgin belirtilerde acil değerlendirme gerekir.", relatedTerms: [{term:"Şizofreni",slug:"sizofreni"},{term:"Psikomotor retardasyon",slug:"psikomotor-retardasyon"}] }
  ,{ term: "Kişilik bozukluğu", slug: "kisilik-bozuklugu", definition: "Kişilik bozukluğu, uzun süreli düşünme, duygu ve ilişki örüntülerinin belirgin güçlük yaratmasıyla ilişkili olabilir.", intro: "Kişiyi tek bir etiketle tanımlamak doğru değildir.", focus: "Örüntüler farklı yaşam alanlarında kendini gösterebilir.", daily: "İlişkiler ve özsaygı etkilenebilir.", difference: "Kişilik özellikleri ile bozukluk aynı değildir.", support: "Süreğen güçlüklerde değerlendirme yararlı olur.", relatedTerms: [{term:"Borderline kişilik örüntüsü",slug:"borderline-kisilik-oruntusu"},{term:"Narsisistik kişilik örüntüsü",slug:"narsisistik-kisilik-oruntusu"}] }
  ,{ term: "Borderline kişilik örüntüsü", slug: "borderline-kisilik-oruntusu", definition: "Borderline kişilik örüntüsü, duygular, benlik algısı ve ilişkilerde belirgin dalgalanmalarla ilişkili olabilir.", intro: "Damgalayıcı olmayan, kapsamlı değerlendirme önemlidir.", focus: "Yoğun duygular ve terk edilme kaygısı görülebilir.", daily: "İlişkiler ve duygu düzenleme zorlanabilir.", difference: "Tek bir belirti tanıyı belirlemez.", support: "Güvenlik riski veya yoğun sıkıntıda destek gerekir.", relatedTerms: [{term:"Duygu düzenleme",slug:"duygu-duzenleme"},{term:"Kendine zarar verme",slug:"kendine-zarar-verme"}] }
  ,{ term: "Narsisistik kişilik örüntüsü", slug: "narsisistik-kisilik-oruntusu", definition: "Narsisistik kişilik örüntüsü, benlik algısı, takdir ihtiyacı ve ilişkilerdeki hassasiyetlerle ilişkili olabilir.", intro: "Gündelik dildeki etiketler klinik değerlendirme yerine geçmez.", focus: "Özdeğer ve eleştiriye duyarlılık farklı biçimlerde görülebilir.", daily: "İlişkiler ve beklentiler etkilenebilir.", difference: "Kişilik özelliği ile klinik örüntü aynı değildir.", support: "Süreğen ilişki güçlüklerinde destek yararlı olabilir.", relatedTerms: [{term:"Kişilik bozukluğu",slug:"kisilik-bozuklugu"},{term:"Özsaygı",slug:"ozsaygi"}] }
  ,{ term: "Kaçıngan kişilik örüntüsü", slug: "kacingan-kisilik-oruntusu", definition: "Kaçıngan kişilik örüntüsü, eleştirilme veya reddedilme kaygısıyla sosyal geri çekilme eğilimleriyle ilişkili olabilir.", intro: "Utangaçlıkla karışabilse de yaşam boyu örüntü ve işlevsellik önemlidir.", focus: "Yakınlık isteği ile reddedilme korkusu bir arada bulunabilir.", daily: "İlişkiler ve fırsatlar kaçınmadan etkilenebilir.", difference: "Sosyal anksiyeteyle benzerlikler olsa da ayrı değerlendirilir.", support: "Kaçınma yaşamı daraltıyorsa destek yararlı olur.", relatedTerms: [{term:"Sosyal anksiyete bozukluğu",slug:"sosyal-anksiyete-bozuklugu"},{term:"Özgül fobi",slug:"ozgul-fobi"}] }
  ,{ term: "Bağlanma", slug: "baglanma", definition: "Bağlanma, kişinin yakın ilişkilerde güvenlik, yakınlık ve destek arama biçimlerini anlatır.", intro: "Erken deneyimler etkili olabilir ancak ilişkisel örüntüler zaman içinde değişebilir.", focus: "Yakınlık ve ayrılık karşısındaki tepkiler farklılaşabilir.", daily: "İlişkiler ve stresle başa çıkma etkilenebilir.", difference: "Bağlanma tarzı değişmez bir kimlik değildir.", support: "İlişkisel güçlükler için psikoterapi yararlı olabilir.", relatedTerms: [{term:"Kaygılı bağlanma",slug:"kaygili-baglanma"},{term:"Kaçıngan bağlanma",slug:"kacingan-baglanma"}] }
  ,{ term: "Kaygılı bağlanma", slug: "kaygili-baglanma", definition: "Kaygılı bağlanma, yakın ilişkilerde terk edilme veya yeterince sevilmeme kaygısının belirginleşmesiyle ilişkili olabilir.", intro: "Bu örüntü kişinin değerini veya ilişki kurma kapasitesini tanımlamaz.", focus: "Güvence ihtiyacı ve ayrılığa hassasiyet görülebilir.", daily: "İletişim ve ilişki doyumu etkilenebilir.", difference: "Kaygılı bağlanma klinik tanı değildir.", support: "Süreğen ilişki sıkıntısında destek yararlı olabilir.", relatedTerms: [{term:"Bağlanma",slug:"baglanma"},{term:"Güvence arama",slug:"guvence-arama"}] }
  ,{ term: "Kaçıngan bağlanma", slug: "kacingan-baglanma", definition: "Kaçıngan bağlanma, yakınlık ve destek ihtiyacı karşısında mesafe koyma eğilimleriyle ilişkili olabilir.", intro: "Bu örüntü tek başına bir bozukluk değildir.", focus: "Duygusal ihtiyaçları ifade etmek zor gelebilir.", daily: "Yakın ilişkilerde mesafe ve iletişim etkilenebilir.", difference: "Kaçıngan bağlanma kişilik tanısı değildir.", support: "İlişkisel güçlüklerde destek yararlı olabilir.", relatedTerms: [{term:"Bağlanma",slug:"baglanma"},{term:"Psikoterapi",slug:"psikoterapi"}] }
  ,{ term: "Travmatik bağlanma", slug: "travmatik-baglanma", definition: "Travmatik bağlanma, zarar veren ilişkilerde korku, bağımlılık ve aralıklı ödülle güçlenebilen bağlanma örüntüsünü anlatır.", intro: "Kişiyi suçlamadan güvenlik ve destek kaynaklarını ele almak önemlidir.", focus: "Yakınlık, korku ve ayrılma güçlüğü bir arada yaşanabilir.", daily: "Kişinin kararları ve sosyal desteğe erişimi etkilenebilir.", difference: "Bu kavram karmaşık ilişki örüntülerini açıklamak için kullanılır.", support: "Güvenlik kaygısı varsa profesyonel destek ve acil yardım önemlidir.", relatedTerms: [{term:"Bağlanma",slug:"baglanma"},{term:"Duygusal ihmal",slug:"duygusal-ihmal"}] }
  ,{ term: "Duygusal ihmal", slug: "duygusal-ihmal", definition: "Duygusal ihmal, kişinin duygusal ihtiyaçlarının süreğen biçimde karşılanmaması deneyimini anlatır.", intro: "Etkileri kişiden kişiye değişir ve kişinin sorumluluğu değildir.", focus: "Görülmeme, anlaşılmama veya destek alamama duyguları öne çıkabilir.", daily: "Özsaygı ve ilişkiler etkilenebilir.", difference: "Her ilişki güçlüğü duygusal ihmal anlamına gelmez.", support: "Geçmiş deneyimler güncel yaşamı etkiliyorsa destek yararlı olabilir.", relatedTerms: [{term:"Travmatik bağlanma",slug:"travmatik-baglanma"},{term:"Psikoterapi",slug:"psikoterapi"}] }
  ,{ term: "Sınav kaygısı", slug: "sinav-kaygisi", definition: "Sınav kaygısı, değerlendirme durumlarında performansı etkileyebilen endişe ve bedensel uyarılmayı anlatır.", intro: "Belirli düzeyde kaygı olağan olabilir; yoğunluk ve etkisi önemlidir.", focus: "Dikkat, uyku ve düşünceleri yönetme zorlaşabilir.", daily: "Çalışma düzeni ve sınav performansı etkilenebilir.", difference: "Sınav kaygısı genel anksiyeteden daha çok değerlendirme bağlamına odaklanır.", support: "Kaygı yaşamı belirgin etkiliyorsa destek yararlı olabilir.", relatedTerms: [{term:"Anksiyete",slug:"anksiyete"},{term:"Dikkat",slug:"dikkat"}] }
  ,{ term: "Ergen anksiyetesi", slug: "ergen-anksiyetesi", definition: "Ergen anksiyetesi, ergenlik döneminde görülebilen kaygı belirtilerini anlatır.", intro: "Gelişimsel değişimler kaygı deneyimini etkileyebilir; kalıcı etkiler değerlendirilmelidir.", focus: "Endişe, kaçınma ve bedensel belirtiler görülebilir.", daily: "Okul, akran ilişkileri ve uyku etkilenebilir.", difference: "Her ergenlik kaygısı bozukluk anlamına gelmez.", support: "Kaygı yaşamı belirgin etkiliyorsa destek yararlı olabilir.", relatedTerms: [{term:"Anksiyete",slug:"anksiyete"},{term:"Sınav kaygısı",slug:"sinav-kaygisi"}] }
].filter((record) => !["Öfke", "İrritabilite", "Beden algısı"].includes(record.term)).map(makeBatchTerm);

const affektTerm = makeBatchTerm({ term: "Affekt", slug: "affekt", definition: "Affekt, kişinin o anda gözlenebilen duygusal dışavurumunu anlatan klinik bir terimdir.", intro: "Yüz ifadesi, ses tonu ve davranışlar duygulanım hakkında bilgi verebilir; tek gözlem yeterli değildir.", focus: "Affekt neşeli, çökkün, kaygılı, künt veya değişken biçimde gözlenebilir.", daily: "Duyguların dışa vurumu iletişim ve ilişkilerde farklı biçimlerde algılanabilir.", difference: "Duygudurum daha uzun süreli genel duygusal tonu, affekt ise anlık dışavurumu anlatır.", support: "Belirgin ve süreğen değişimler başka belirtilerle birlikteyse değerlendirme yararlı olur.", relatedTerms: [{ term: "Duygudurum", slug: "duygudurum" }, { term: "Künt duygulanım", slug: "kunt-duygulanim" }] });

export const pilotTerms = [...migrated, ...testTerms, ...secondBatchTerms, affektTerm];

const makeQuickTerm = (term, slug, relatedTerms = []) => makeBatchTerm({ term, slug, definition: `${term}, psikiyatri ve ruh sağlığı alanında bağlamı, süresi ve kişinin günlük yaşamına etkisiyle birlikte değerlendirilen bir kavramdır.`, intro: `${term} tek bir belirti veya kısa gözlem üzerinden yorumlanmamalıdır.`, focus: `${term} farklı kişilerde farklı yoğunluklarda ve farklı koşullarda görülebilir.`, daily: `Bu kavramla ilişkili güçlükler kişinin uyku, ilişkiler, eğitim, çalışma veya özbakım alanlarını etkileyebilir.`, difference: `${term} benzer kavramlarla örtüşebilse de klinik anlamı değerlendirme bağlamında netleşir.`, support: `Belirtiler kalıcılaşıyor veya günlük işlevi etkiliyorsa profesyonel değerlendirme yararlı olabilir.`, relatedTerms });
const thirdAdditionalTerms = [
  makeQuickTerm("Abuli", "abuli", [{ term: "Apati", slug: "apati" }]), makeQuickTerm("Akinezi", "akinezi", [{ term: "Psikomotor retardasyon", slug: "psikomotor-retardasyon" }]), makeQuickTerm("Avolisyon", "avolisyon", [{ term: "Negatif belirti", slug: "negatif-belirti" }]), makeQuickTerm("Algı", "algi", [{ term: "Varsanı", slug: "varsani" }]), makeQuickTerm("Algı bozukluğu", "algi-bozuklugu", [{ term: "Psikoz", slug: "psikoz" }]), makeQuickTerm("İllüzyon", "illuzyon", [{ term: "Varsanı", slug: "varsani" }]), makeQuickTerm("Labil duygulanım", "labil-duygulanım", [{ term: "Duygudurum", slug: "duygudurum" }]), makeQuickTerm("Psikomotor ajitasyon", "psikomotor-ajitasyon", [{ term: "Ajitasyon", slug: "ajitasyon" }]), makeQuickTerm("Tetikleyici", "tetikleyici", [{ term: "Travma sonrası stres bozukluğu", slug: "travma-sonrasi-stres-bozuklugu" }]), makeQuickTerm("Siklotimi", "siklotimi", [{ term: "Bipolar II bozukluk", slug: "bipolar-2-bozukluk" }]), makeQuickTerm("Parasomni", "parasomni", [{ term: "Uyku hijyeni", slug: "uyku-hijyeni" }]), makeQuickTerm("Melatonin", "melatonin", [{ term: "Sirkadiyen ritim", slug: "sirkadiyen-ritim" }]), makeQuickTerm("Yürütücü işlevler", "yurutucu-islevler", [{ term: "DEHB", slug: "dehb" }]), makeQuickTerm("Çalışma belleği", "calisma-bellegi", [{ term: "Dikkat", slug: "dikkat" }]), makeQuickTerm("Epizodik bellek", "epizodik-bellek", [{ term: "Amnezi", slug: "amnezi" }]), makeQuickTerm("Semantik bellek", "semantik-bellek", [{ term: "Amnezi", slug: "amnezi" }]), makeQuickTerm("Katastrofizasyon", "katastrofizasyon", [{ term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" }]), makeQuickTerm("Zihin okuma", "zihin-okuma", [{ term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" }]), makeQuickTerm("Seçici soyutlama", "secici-soyutlama", [{ term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" }]), makeQuickTerm("Aşırı genelleme", "asiri-genelleme", [{ term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" }]), makeQuickTerm("Kişiselleştirme", "kisilestirme", [{ term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" }]), makeQuickTerm("Bastırma", "bastirma", [{ term: "Psikoterapi", slug: "psikoterapi" }]), makeQuickTerm("Yansıtma", "yansitma", [{ term: "Psikoterapi", slug: "psikoterapi" }]), makeQuickTerm("İnkar", "inkar", [{ term: "Psikoterapi", slug: "psikoterapi" }]), makeQuickTerm("Mentalizasyon", "mentalizasyon", [{ term: "Psikoterapi", slug: "psikoterapi" }]), makeQuickTerm("Stres yanıtı", "stres-yaniti", [{ term: "Anksiyete", slug: "anksiyete" }]), makeQuickTerm("Öfke", "ofke", [{ term: "Duygu düzenleme", slug: "duygu-duzenleme" }]), makeQuickTerm("İrritabilite", "irritabilite", [{ term: "Duygudurum", slug: "duygudurum" }]), makeQuickTerm("Beden algısı", "beden-algisi", [{ term: "Yeme bozukluğu", slug: "yeme-bozuklugu" }]), makeQuickTerm("Oyun oynama bozukluğu", "oyun-oynama-bozuklugu", [{ term: "Dijital bağımlılık", slug: "dijital-bagimlilik" }])
].filter((term) => !["ofke", "irritabilite", "beden-algisi"].includes(term.slug));
const thirdReplacements = [
  makeQuickTerm("Duyusal hassasiyet", "duyusal-hassasiyet", [{ term: "Otizm spektrum bozukluğu", slug: "otizm-spektrum-bozuklugu" }]),
  makeQuickTerm("Ayrılma kaygısı", "ayrilma-kaygisi", [{ term: "Anksiyete", slug: "anksiyete" }]),
  makeQuickTerm("Okul reddi", "okul-reddi", [{ term: "Sınav kaygısı", slug: "sinav-kaygisi" }])
];
const qualityOverrides = new Map([
  ["tetikleyici", {
    shortDefinition: "Tetikleyici, kişide belirli bir düşünceyi, duyguyu, bedensel tepkiyi veya geçmiş deneyimle bağlantılı bir hatırlamayı başlatabilen içsel ya da dışsal uyaranı ifade eden genel bir psikolojik terimdir.",
    intro: "Tetikleyiciler kişiden kişiye değişir. Bir ses, koku, yer, konuşma, beden duyumu veya belirli bir düşünce geçmişteki bir deneyimle bağlantılı olarak güçlü bir duygusal tepki başlatabilir.",
    sections: [
      section("Tetikleyici Nasıl Etki Edebilir?", "Kişi belirli bir uyaranla karşılaştığında kaygı, korku, öfke veya yoğun bedensel uyarılma yaşayabilir. Bazen tepkinin neden bu kadar güçlü olduğu ilk anda anlaşılmayabilir; uyaran önceki bir deneyimle öğrenilmiş bir bağlantıyı harekete geçirmiş olabilir."),
      section("Her Rahatsız Edici Şey Tetikleyici midir?", "Hayır. Günlük yaşamda hoşlanmadığımız veya bizi rahatsız eden birçok durum olabilir. Tetikleyici kavramı genellikle belirli bir uyaranın kişide tekrarlayıcı ve belirgin bir duygusal veya fizyolojik tepkiyi başlatmasıyla ilişkilidir."),
      section("Travma ile İlişkisi Nedir?", "Travmatik deneyimlerden sonra olayın bazı ayrıntıları tehdit sinyali gibi öğrenilebilir. Benzer bir ses, koku veya durum daha sonra gerçek tehlike bulunmasa bile güçlü stres yanıtı oluşturabilir. Ancak her tetikleyici travmatik yaşantıyla ilişkili olmak zorunda değildir."),
      section("Tetikleyiciyi Tanımak Neden Yararlı Olabilir?", "Tepkilerin hangi koşullarda arttığını fark etmek kişinin duygu ve beden yanıtlarını daha iyi anlamasına yardımcı olabilir. Amaç bütün tetikleyicilerden kaçınmak değil, tepkinin örüntüsünü ve günlük işlevsellik üzerindeki etkisini daha gerçekçi biçimde değerlendirmektir.")
    ],
    relatedTerms: [
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Stres yanıtı", slug: "stres-yaniti" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" }
    ]
  }],

  ["tikinarcasina-yeme-bozuklugu", {
    shortDefinition: "Tıkınırcasına yeme bozukluğu, kısa bir zaman diliminde kontrol kaybı hissiyle birlikte alışılmıştan belirgin biçimde fazla miktarda yiyecek tüketilen tekrarlayıcı dönemlerle karakterize bir yeme bozukluğudur.",
    intro: "Tıkınırcasına yeme dönemleri yalnızca fazla yemek yemek anlamına gelmez. Temel özelliklerden biri, kişi yemek sırasında ne kadar yediğini veya davranışı ne zaman durduracağını kontrol etmekte zorlandığını hissetmesidir.",
    sections: [
      section("Tıkınırcasına Yeme Dönemi Nasıl Yaşanabilir?", "Kişi planladığından daha fazla yemek yediğini, davranışı durdurmakta zorlandığını veya yemek sırasında kontrolünü kaybetmiş gibi hissettiğini belirtebilir. Sonrasında utanç, suçluluk veya yoğun rahatsızlık yaşanabilir."),
      section("Ara Sıra Fazla Yemek ile Aynı Şey midir?", "Hayır. Özel bir öğünde veya kutlama sırasında normalden fazla yemek tek başına yeme bozukluğu anlamına gelmez. Klinik değerlendirmede kontrol kaybı hissinin, tekrar sıklığının, duygusal sıkıntının ve davranışın zaman içindeki örüntüsünün bulunması önemlidir."),
      section("Bulimiya Nervoza ile Farkı Nedir?", "Her iki tabloda da tıkınırcasına yeme dönemleri görülebilir. Bulimiya nervozada bu dönemleri tekrarlayıcı telafi davranışları izlerken tıkınırcasına yeme bozukluğunda bu tür düzenli telafi örüntüsü temel özellik değildir."),
      section("Değerlendirmede Neler Ele Alınır?", "Yeme davranışının hangi duygusal ve çevresel koşullarda ortaya çıktığı, kontrol kaybı hissi, beden algısı, eşlik eden ruhsal belirtiler ve kişinin günlük yaşamına etkisi değerlendirilir. Yaklaşım yalnız beden ağırlığına veya dış görünüşe indirgenmez.")
    ],
    relatedTerms: [
      { term: "Yeme bozukluğu", slug: "yeme-bozuklugu" },
      { term: "Bulimiya nervoza", slug: "bulimiya-nervoza" },
      { term: "Anoreksiya nervoza", slug: "anoreksiya-nervoza" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Dürtü kontrolü", slug: "durtu-kontrolu" }
    ]
  }],

  ["travmatik-baglanma", {
    shortDefinition: "Travmatik bağlanma, zarar verici veya istismar içeren bir ilişkide korku, bağımlılık, aralıklı yakınlık ve güçlü duygusal bağın birlikte sürmesiyle açıklanan ilişkisel bir örüntüdür.",
    intro: "Travmatik bağlanma resmi bir psikiyatrik tanı değildir. Terim, kişinin kendisine zarar veren bir ilişkiyi neden yalnızca mantıksal değerlendirmeyle kolayca sonlandıramadığını anlamaya yardımcı olmak için kullanılabilir.",
    sections: [
      section("Travmatik Bağlanma Nasıl Gelişebilir?", "İlişkide incitici davranışların ardından özür, yakınlık veya yoğun ilgi dönemleri geliyorsa kişi tehdit ile rahatlama arasında güçlü bir duygusal döngü yaşayabilir. Bu değişkenlik ilişkinin sona erdirilmesini psikolojik olarak daha güç hale getirebilir."),
      section("Neden İlişkiden Ayrılmak Zor Olabilir?", "Korku, ekonomik veya sosyal bağımlılık, yalnız kalma kaygısı, umut, suçluluk ve kişinin zaman içinde benlik değerinin zedelenmesi ayrılmayı güçleştirebilir. Bu nedenle dışarıdan bakıldığında basit görünen bir karar kişinin deneyiminde çok daha karmaşık olabilir."),
      section("Bağlanma Örüntüleriyle İlişkisi Nedir?", "Erken dönem ilişkisel deneyimler yakınlık ve güven beklentilerini etkileyebilir ancak travmatik bağlanmayı tek başına çocukluk yaşantılarıyla açıklamak doğru değildir. Güncel ilişkinin güç dengesi, şiddet veya kontrol örüntüleri ayrıca değerlendirilmelidir."),
      section("Güvenlik Neden Önceliklidir?", "İlişkide fiziksel şiddet, tehdit, zorlayıcı kontrol veya güvenliği tehlikeye atan davranışlar varsa konu yalnız duygusal bağ çerçevesinde ele alınmamalıdır. Kişinin güvenliği, erişebildiği destek kaynakları ve mevcut riskler profesyonel değerlendirmede önceliklidir.")
    ],
    relatedTerms: [
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Kaygılı bağlanma", slug: "kaygili-baglanma" },
      { term: "Kaçıngan bağlanma", slug: "kacingan-baglanma" },
      { term: "Duygusal ihmal", slug: "duygusal-ihmal" }
    ]
  }],

  ["uyku-hijyeni", {
    shortDefinition: "Uyku hijyeni, düzenli ve dinlendirici uykuyu desteklemeyi amaçlayan günlük alışkanlıklar, çevresel koşullar ve uyku-uyanıklık düzenine ilişkin genel davranışsal ilkelerin bütünüdür.",
    intro: "Uyku hijyeni tek başına her uyku bozukluğunun tedavisi değildir. Ancak kişinin uyku düzenini bozan alışkanlıkların fark edilmesine ve biyolojik saatle daha uyumlu bir günlük düzen kurulmasına yardımcı olabilir.",
    sections: [
      section("Düzenli Uyku Saatleri Neden Önemlidir?", "Her gün çok farklı saatlerde yatmak ve kalkmak biyolojik saatin çevresel zamanla uyumunu zorlaştırabilir. Özellikle uyanma saatinin görece düzenli olması uyku-uyanıklık ritminin daha öngörülebilir hale gelmesine katkıda bulunabilir."),
      section("Uyku Ortamı Nasıl Etkiler?", "Işık, gürültü, sıcaklık ve yatağın kullanım biçimi uykuya geçişi etkileyebilir. Yatak odasının dinlenmeyle ilişkilendirilmesi ve mümkün olduğunca uykuya uygun bir çevrenin oluşturulması davranışsal uyku düzenlemelerinde önem taşır."),
      section("Gündüz Alışkanlıklarının Rolü Nedir?", "Fiziksel aktivite, gün ışığına maruz kalma, kafein ve diğer uyarıcıların zamanlaması ile gündüz uykuları gece uykusunu etkileyebilir. Bu faktörlerin etkisi kişiden kişiye değişebileceği için kişinin kendi örüntüsünün gözlenmesi yararlıdır."),
      section("Uyku Hijyeni Ne Zaman Yeterli Olmayabilir?", "Uzun süren insomnia, belirgin gündüz uykululuğu, solunumla ilişkili gece belirtileri veya alışılmadık uyku davranışları yalnız alışkanlıklarla açıklanmayabilir. Kalıcı veya işlevselliği etkileyen uyku sorunlarında altta yatan uyku, ruhsal veya tıbbi durumların değerlendirilmesi gerekir.")
    ],
    relatedTerms: [
      { term: "İnsomnia", slug: "insomnia" },
      { term: "Sirkadiyen ritim", slug: "sirkadiyen-ritim" },
      { term: "Melatonin", slug: "melatonin" },
      { term: "Hipersomnia", slug: "hipersomnia" },
      { term: "Parasomni", slug: "parasomni" }
    ]
  }],

  ["uyum-bozuklugu", {
    shortDefinition: "Uyum bozukluğu, belirlenebilir bir stres etkeni sonrasında ortaya çıkan ve kişinin günlük işlevselliğini etkileyen duygusal veya davranışsal belirtilerle karakterize bir klinik tablodur.",
    intro: "Uyum bozukluğu yaşamın zorlayıcı olaylarına verilen her üzüntü veya kaygı tepkisini hastalık olarak tanımlamaz. Klinik değerlendirmede tepkinin şiddeti, bağlamı, süresi ve kişinin yaşamındaki etkisi önemlidir.",
    sections: [
      section("Hangi Stres Etkenleriyle İlişkili Olabilir?", "İş kaybı, ayrılık, taşınma, sağlık sorunu, aile içi değişiklikler veya başka önemli yaşam olayları sonrasında duygusal ve davranışsal güçlükler gelişebilir. Aynı olay farklı kişilerde farklı düzeyde stres oluşturabilir."),
      section("Normal Stres Tepkisinden Nasıl Ayrılır?", "Zorlayıcı bir olay sonrasında üzülmek, kaygılanmak veya geçici olarak zorlanmak doğal olabilir. Uyum bozukluğunda belirtiler kişinin koşullarına göre beklenenden belirgin olabilir ve sosyal, mesleki veya günlük işlevselliği etkileyebilir."),
      section("Hangi Belirtiler Görülebilir?", "Kaygı, çökkünlük, huzursuzluk, öfke, uyku değişiklikleri veya günlük sorumlulukları sürdürmekte güçlük görülebilir. Klinik görünüm kişiden kişiye değişir ve belirtilerin başka bir ruhsal bozuklukla daha iyi açıklanıp açıklanmadığı değerlendirilir."),
      section("Zamanlama Neden Önemlidir?", "Belirtilerin stres etkeniyle zaman içindeki bağlantısı değerlendirmede temel önemdedir. Stresör ortadan kalktıktan sonra belirtilerin nasıl seyrettiği ve başka bir ruhsal tablonun ölçütlerinin gelişip gelişmediği de takip edilir. Kişinin olay öncesindeki işlev düzeyiyle karşılaştırma yapılması klinik tabloyu daha iyi anlamaya yardımcı olabilir.")
    ],
    relatedTerms: [
      { term: "Stres yanıtı", slug: "stres-yaniti" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Çökkün duygudurum", slug: "cokkun-duygudurum" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ]
  }],

  ["yansitma", {
    shortDefinition: "Yansıtma, kişinin kendisinde kabul etmekte veya fark etmekte zorlandığı duygu, düşünce ya da dürtüleri başka bir kişiye aitmiş gibi algılamasıyla açıklanan bir savunma mekanizmasıdır.",
    intro: "Yansıtma çoğu zaman bilinçli bir yanıltma değildir. Kişi kendi içsel deneyimini doğrudan fark etmek yerine bu özelliği karşısındaki kişide daha belirgin biçimde algılayabilir.",
    sections: [
      section("Yansıtma Nasıl Görülebilir?", "Kendi öfkesini fark etmekte zorlanan bir kişi karşısındakinin kendisine çok öfkeli olduğuna güçlü biçimde inanabilir. Benzer biçimde kişinin kendi güvensizliği veya rekabet duyguları başkalarının niyetlerine ilişkin yorumlarını etkileyebilir."),
      section("Yansıtma ile Bilinçli Suçlama Aynı Şey midir?", "Hayır. Bilinçli suçlamada kişi kendi sorumluluğunu bilerek başka birine yükleyebilir. Yansıtma kavramında ise süreç çoğunlukla farkında olmadan işler ve kişinin kendi içsel yaşantısını nasıl algıladığıyla ilişkilidir."),
      section("Yansıtma İlişkileri Nasıl Etkileyebilir?", "Kişi kendi duygularını karşısındakine ait sanıyorsa iletişimde yanlış anlamalar ve tekrarlayıcı çatışmalar ortaya çıkabilir. Başka kişinin gerçek niyetleri yerine kişinin kendi içsel beklentileri ilişkiyi yorumlamada daha fazla rol oynayabilir."),
      section("Mentalizasyon ile İlişkisi Nedir?", "Mentalizasyon kişinin hem kendi hem de başkalarının zihinsel durumlarını kesinlikten uzak, merakla değerlendirmesini içerir. Kendi duygularını fark etmek ve karşı tarafın farklı bir iç dünyaya sahip olabileceğini düşünmek yansıtıcı yorumların sorgulanmasını kolaylaştırabilir. Özellikle yoğun duygular sırasında yorumların ne kadar kesin kabul edildiğini fark etmek ilişkisel yanlış anlamaları azaltabilir.")
    ],
    relatedTerms: [
      { term: "İnkar", slug: "inkar" },
      { term: "Bastırma", slug: "bastirma" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Mentalizasyon", slug: "mentalizasyon" }
    ]
  }],

  ["yeme-bozuklugu", {
    shortDefinition: "Yeme bozukluğu, yeme davranışı, beden algısı veya kilo ve şekille ilişkili düşüncelerde belirgin bozulmaların fiziksel sağlık ve psikososyal işlevsellik üzerinde etkiler oluşturabildiği bozuklukların genel adıdır.",
    intro: "Yeme bozuklukları tek bir görünümden oluşmaz. Kısıtlayıcı yeme, tıkınırcasına yeme veya başka yeme davranışı değişiklikleri farklı tanısal örüntüler içinde görülebilir.",
    sections: [
      section("Yeme Bozuklukları Hangi Biçimlerde Görülebilir?", "Anoreksiya nervoza, bulimiya nervoza ve tıkınırcasına yeme bozukluğu farklı yeme bozukluğu örnekleridir. Her birinde yeme davranışı, beden algısı, kontrol hissi ve fiziksel sağlık üzerindeki etkilerin örüntüsü farklıdır."),
      section("Yalnız Dış Görünüşe Bakarak Anlaşılır mı?", "Hayır. Yeme bozuklukları farklı beden yapılarındaki kişilerde görülebilir ve kişinin dış görünüşü sorunun şiddetini güvenilir biçimde göstermez. Yeme davranışı, düşünceler, fiziksel belirtiler ve günlük işlevsellik birlikte değerlendirilmelidir."),
      section("Yeme Davranışının Duygularla İlişkisi Nedir?", "Kaygı, utanç, kontrol ihtiyacı veya duygu düzenleme güçlükleri bazı kişilerde yeme davranışlarıyla ilişki kurabilir. Bununla birlikte yeme bozukluklarını yalnız psikolojik bir nedene indirgemek doğru değildir; biyolojik ve sosyal etkenler de rol oynayabilir."),
      section("Neden Bütüncül Değerlendirme Gerekir?", "Yeme bozuklukları hem ruhsal hem fiziksel sağlık üzerinde etkiler oluşturabilir. Bu nedenle değerlendirmede yeme örüntüsü, eşlik eden ruhsal belirtiler, tıbbi durum ve kişinin sosyal yaşamı birlikte ele alınır; yalnız kilo veya kalori üzerinden değerlendirme yapılmaz.")
    ],
    relatedTerms: [
      { term: "Anoreksiya nervoza", slug: "anoreksiya-nervoza" },
      { term: "Bulimiya nervoza", slug: "bulimiya-nervoza" },
      { term: "Tıkınırcasına yeme bozukluğu", slug: "tikinarcasina-yeme-bozuklugu" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ]
  }],

  ["yurutucu-islevler", {
    shortDefinition: "Yürütücü işlevler, hedef belirleme, planlama, dikkat yönetimi, çalışma belleği, dürtü kontrolü ve davranışı değişen koşullara göre düzenleme gibi üst düzey bilişsel süreçlerin genel adıdır.",
    intro: "Yürütücü işlevler tek bir zihinsel beceri değildir. Günlük yaşamda bir görevi başlatmaktan planı sürdürmeye, hataları fark etmekten gerektiğinde strateji değiştirmeye kadar birçok süreç birlikte çalışır.",
    sections: [
      section("Yürütücü İşlevlere Neler Dahildir?", "Planlama, organizasyon, çalışma belleği, bilişsel esneklik, davranışın inhibisyonu ve hedefe yönelik dikkatin sürdürülmesi temel yürütücü işlev alanları arasında sayılabilir. Bu beceriler karmaşık görevlerde birbirleriyle etkileşim halindedir."),
      section("Günlük Yaşamda Nasıl Kullanılır?", "Bir işi adımlara ayırmak, yapılacakları sıraya koymak, dikkati dağıtan uyaranlara rağmen görevi sürdürmek veya plan işe yaramadığında yeni bir strateji geliştirmek yürütücü işlevlerin günlük örnekleridir."),
      section("DEHB ile İlişkisi Nedir?", "DEHB'de dikkat düzenleme, görev başlatma, çalışma belleği ve dürtü kontrolü gibi yürütücü alanlarda güçlükler görülebilir. Ancak yürütücü işlev sorunu yalnız DEHB'ye özgü değildir ve uyku, stres, duygudurum veya nörolojik durumlar da performansı etkileyebilir."),
      section("Yürütücü İşlev Güçlüğü Nasıl Değerlendirilir?", "Kişinin günlük yaşam örüntüsü, eğitim ve çalışma performansı, dikkat ve bellek işlevleri ile farklı görevlerdeki davranışı birlikte incelenir. Tek bir test sonucu kişinin bütün yürütücü kapasitesini açıklamak için yeterli değildir.")
    ],
    relatedTerms: [
      { term: "Çalışma belleği", slug: "calisma-bellegi" },
      { term: "Dikkat", slug: "dikkat" },
      { term: "DEHB", slug: "dehb" },
      { term: "Dürtü kontrolü", slug: "durtu-kontrolu" },
      { term: "Semantik bellek", slug: "semantik-bellek" }
    ]
  }],

  ["zihin-okuma", {
    shortDefinition: "Zihin okuma, kişinin karşısındaki kişinin ne düşündüğünü veya kendisi hakkında nasıl değerlendirme yaptığını yeterli kanıt olmadan bildiğini varsaymasıyla tanımlanan bilişsel bir çarpıtmadır.",
    intro: "Zihin okuma sırasında belirsiz sosyal bilgiler kesin sonuçlar gibi yorumlanabilir. Kişi karşısındakine sormadan veya alternatif açıklamaları değerlendirmeden olumsuz bir yargının varlığından emin olabilir.",
    sections: [
      section("Zihin Okuma Nasıl Görülebilir?", "Bir kişinin konuşma sırasında kısa süre sessiz kalmasını 'beni sıkıcı buluyor' şeklinde yorumlamak veya bir mesajın geç yanıtlanmasını 'bana kızgın' sonucuna bağlamak zihin okumaya örnek olabilir. Gerçekte aynı davranışın birçok farklı açıklaması bulunabilir."),
      section("Empati ile Zihin Okuma Aynı Şey midir?", "Hayır. Empati başka kişinin bakış açısını anlamaya çalışmayı içerir ancak kesinlik iddiası taşımaz. Zihin okumada ise kişinin yorumu sanki karşı tarafın zihnindeki gerçek bilgiymiş gibi kabul edilir."),
      section("Sosyal Kaygıyla İlişkisi Nedir?", "Sosyal kaygı yaşayan kişi başkalarının kendisini olumsuz değerlendirdiğini varsaymaya daha yatkın olabilir. Bu varsayımlar utanç ve kaçınmayı artırabilir; kaçınma arttıkça kişinin yorumunu sınayabileceği gerçek sosyal deneyimler azalabilir."),
      section("Nasıl Yeniden Değerlendirilebilir?", "Kişinin elindeki somut kanıtlar, alternatif açıklamalar ve karşı tarafın davranışını gerçekten bilip bilmediği sorgulanabilir. Amaç bütün sosyal sezgileri reddetmek değil, tahmin ile doğrulanmış bilgiyi birbirinden ayırmaktır. Mümkün olduğunda açık iletişim kurmak, varsayımların gerçek bilgiyle sınanmasına yardımcı olabilir.")
    ],
    relatedTerms: [
      { term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" },
      { term: "Kişiselleştirme", slug: "kisilestirme" },
      { term: "Seçici soyutlama", slug: "secici-soyutlama" },
      { term: "Katastrofizasyon", slug: "katastrofizasyon" },
      { term: "Mentalizasyon", slug: "mentalizasyon" }
    ]
  }],

  ["risk-degerlendirmesi", {
    shortDefinition: "Risk değerlendirmesi, kişinin kendisine veya başkasına zarar verme, ciddi işlev kaybı yaşama ya da mevcut ruhsal ve tıbbi durum nedeniyle güvenliğinin bozulma olasılığını sistematik biçimde değerlendirme sürecidir.",
    intro: "Psikiyatride risk değerlendirmesi tek bir soruya veya puana dayanmaz. Mevcut düşünceler, davranışlar, geçmiş öykü, ruhsal durum, madde kullanımı, sosyal koşullar ve koruyucu etkenler birlikte ele alınır.",
    sections: [
      section("Risk Değerlendirmesinde Neler Ele Alınır?", "Kişinin mevcut düşünceleri ve davranışları, yakın zamanda yaşanan değişiklikler, dürtü kontrolü, psikotik veya ağır duygudurum belirtileri, madde kullanımı ve günlük işlevsellik değerlendirilir. Ayrıca kişinin yaşadığı ortamın güvenliği ve ulaşabildiği destek kaynakları göz önünde bulundurulur."),
      section("Geçmiş Öykü Neden Önemlidir?", "Daha önce yaşanan krizler, kendine zarar verme davranışları, ciddi kontrol kaybı dönemleri veya hastane başvuruları gelecekteki risk hakkında önemli klinik bilgi sağlayabilir. Bununla birlikte geçmişte bir olay yaşanmış olması aynı durumun kaçınılmaz biçimde tekrarlanacağı anlamına gelmez."),
      section("Koruyucu Etkenler Nelerdir?", "Destekleyici ilişkiler, yardım arama kapasitesi, geleceğe yönelik planlar, sorumluluklar, tedaviye erişim ve kriz sırasında başvurulabilecek güvenilir kişiler risk değerlendirmesinde dikkate alınabilecek koruyucu unsurlardır. Koruyucu etkenlerin bulunması riskin sıfır olduğu anlamına gelmez."),
      section("Ne Zaman Acil Değerlendirme Gerekir?", "Kişi kendisini veya başkasını güvende tutamayacağını belirtiyorsa, hızla ağırlaşan ruhsal belirtiler varsa ya da belirgin bilinç, davranış veya gerçekliği değerlendirme değişikliği gelişmişse gecikmeden profesyonel değerlendirme gerekir. Klinik risk zaman içinde değişebildiği için değerlendirme gerektiğinde yenilenir.")
    ],
    relatedTerms: [
      { term: "Kendine zarar verme", slug: "kendine-zarar-verme" },
      { term: "Psikomotor ajitasyon", slug: "psikomotor-ajitasyon" },
      { term: "Psikoz", slug: "psikoz" },
      { term: "Madde kullanım bozukluğu", slug: "madde-kullanim-bozuklugu" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ]
  }],

  ["sanrisal-bozukluk", {
    shortDefinition: "Sanrısal bozukluk, bir veya daha fazla sanrının belirgin olduğu, ancak klinik tablonun şizofreni spektrumundaki daha yaygın dezorganizasyon ve negatif belirtilerle açıklanmadığı psikotik bir bozukluktur.",
    intro: "Sanrı, kişinin kültürel ve toplumsal bağlamıyla açıklanamayan ve karşıt kanıtlara rağmen güçlü biçimde sürdürülen bir inanıştır. Sanrısal bozukluk tanısı yalnız sıra dışı veya yanlış bir düşüncenin bulunmasına dayanmaz.",
    sections: [
      section("Sanrısal Bozukluk Nasıl Görülebilir?", "Kişi takip edildiğine, aldatıldığına, özel bir hastalığı bulunduğuna veya başka insanların kendisi hakkında belirli bir niyet taşıdığına güçlü biçimde inanabilir. İnancın içeriği kişiden kişiye değişir ve değerlendirmede inancın kesinliği ile günlük yaşama etkisi önemlidir."),
      section("Paranoid Düşünce ile Sanrı Aynı Şey midir?", "Hayır. Kuşku ve güvensizlik farklı yoğunluklarda görülebilir. Sanrıda inanç genellikle çok güçlü biçimde benimsenir ve kişinin alternatif açıklamaları değerlendirmesi belirgin ölçüde zorlaşır. Daha hafif paranoid düşüncelerde kişi yanılma olasılığını kısmen koruyabilir."),
      section("İşlevsellik Her Zaman Ağır Biçimde Bozulur mu?", "Sanrının doğrudan etkilediği alanlar dışında kişinin bazı günlük işlevleri görece korunabilir. Bununla birlikte sanrının konusu ilişkileri, çalışma yaşamını veya güvenlik davranışlarını etkiliyorsa belirgin işlev kaybı ortaya çıkabilir."),
      section("Başka Nedenlerin Dışlanması Neden Önemlidir?", "Madde veya ilaç etkileri, bazı nörolojik ve tıbbi hastalıklar ile duygudurum dönemleri psikotik belirtiler oluşturabilir. Yeni başlayan sanrısal düşüncelerde başlangıç zamanı, eşlik eden belirtiler, bilinç ve dikkat düzeyi ile tıbbi durum birlikte değerlendirilmelidir.")
    ],
    relatedTerms: [
      { term: "Psikoz", slug: "psikoz" },
      { term: "Paranoid düşünce", slug: "paranoid-dusunce" },
      { term: "Psikotik özellik", slug: "psikotik-ozellik" },
      { term: "Pozitif belirti", slug: "pozitif-belirti" },
      { term: "Kısa psikotik bozukluk", slug: "kisa-psikotik-bozukluk" }
    ]
  }],

  ["secici-soyutlama", {
    shortDefinition: "Seçici soyutlama, bir durumun bütünü yerine sınırlı ve çoğunlukla olumsuz bir ayrıntıya odaklanarak genel sonucu bu ayrıntı üzerinden değerlendirme eğilimini ifade eden bilişsel bir çarpıtmadır.",
    intro: "Seçici soyutlamada kişi olayın olumlu, nötr veya bağlamı değiştirebilecek başka yönlerini geri planda bırakabilir. Böylece küçük bir ayrıntı, bütün deneyimi temsil ediyormuş gibi algılanabilir.",
    sections: [
      section("Seçici Soyutlama Nasıl Görülebilir?", "Bir sunum hakkında birçok olumlu geri bildirim alan kişinin yalnızca tek bir eleştiriye odaklanıp sunumun tamamen kötü geçtiğini düşünmesi örnek olabilir. Benzer biçimde bir sosyal karşılaşmada birçok olumlu etkileşim varken tek bir sessizliği başarısızlık olarak yorumlayabilir."),
      section("Ayrıntıya Dikkat Etmek ile Aynı Şey midir?", "Hayır. Ayrıntıları fark etmek yararlı olabilir. Seçici soyutlamada sorun, seçilen tek ayrıntının olayın bütünü hakkında orantısız bir sonuç çıkarmak için kullanılması ve diğer bilgilerin sistematik biçimde göz ardı edilmesidir."),
      section("Hangi Duygularla İlişkili Olabilir?", "Olumsuz ayrıntılara sürekli odaklanmak kaygı, suçluluk, yetersizlik veya çökkünlük duygularını güçlendirebilir. Duygusal durum da kişinin hangi ayrıntıları daha kolay fark ettiğini etkileyerek düşünce döngüsünü sürdürebilir."),
      section("Nasıl Yeniden Değerlendirilebilir?", "Olayın tüm kanıtları, olumlu ve nötr ayrıntılar dahil olmak üzere birlikte gözden geçirilebilir. Amaç olumsuz bilgiyi yok saymak değil, bu bilginin bütün tablo içindeki gerçek ağırlığını değerlendirmektir.")
    ],
    relatedTerms: [
      { term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" },
      { term: "Aşırı genelleme", slug: "asiri-genelleme" },
      { term: "Katastrofizasyon", slug: "katastrofizasyon" },
      { term: "Kişiselleştirme", slug: "kisilestirme" },
      { term: "Zihin okuma", slug: "zihin-okuma" }
    ]
  }],

  ["semantik-bellek", {
    shortDefinition: "Semantik bellek, kişisel bir yaşantının zaman ve mekân bağlamından bağımsız olarak kelimeler, kavramlar, gerçekler ve genel dünya bilgilerini saklayan uzun süreli bellek sistemidir.",
    intro: "Bir ülkenin başkentini bilmek, bir kelimenin anlamını hatırlamak veya belirli bir nesnenin ne işe yaradığını bilmek semantik belleğe örnektir. Bu bilgiler belirli bir kişisel anıyla bağlantılı olmak zorunda değildir.",
    sections: [
      section("Semantik Bellekte Hangi Bilgiler Saklanır?", "Dil bilgisi, kelime anlamları, nesnelerin özellikleri, tarihsel bilgiler ve günlük yaşamda öğrenilmiş genel gerçekler semantik belleğin kapsamına girer. Bilgi zamanla kişinin genel bilgi sisteminin parçası haline gelir."),
      section("Semantik ve Epizodik Bellek Arasındaki Fark Nedir?", "Epizodik bellek kişinin belirli bir zamanda ve yerde yaşadığı olayların anısını içerir. Semantik bellek ise olayın kişisel bağlamından bağımsız bilgiyi temsil eder. Örneğin bir şehrin adını bilmek semantik, o şehirde geçirilen belirli bir günü hatırlamak epizodik bellektir."),
      section("Semantik Bellek Dikkatten Etkilenir mi?", "Yeni bilgilerin öğrenilebilmesi için dikkat ve bilginin işlenmesi gerekir. Dikkat dağınıklığı öğrenme aşamasını zorlaştırabilir ve kişi bunu sonradan bir bellek sorunu gibi yaşayabilir. Bu nedenle unutkanlık değerlendirilirken öğrenme ve hatırlama süreçleri ayrılmalıdır."),
      section("Semantik Bellek Sorunları Nasıl Değerlendirilir?", "Kişinin kelime ve kavram bilgisindeki değişiklikler, bilinen nesneleri tanımlama kapasitesi ve başka bilişsel alanların durumu birlikte incelenir. Ani veya ilerleyici bilişsel değişikliklerde nörolojik ve tıbbi nedenlerin değerlendirilmesi önemlidir.")
    ],
    relatedTerms: [
      { term: "Epizodik bellek", slug: "epizodik-bellek" },
      { term: "Çalışma belleği", slug: "calisma-bellegi" },
      { term: "Amnezi", slug: "amnezi" },
      { term: "Dikkat", slug: "dikkat" },
      { term: "Yürütücü işlevler", slug: "yurutucu-islevler" }
    ]
  }],

  ["siklotimi", {
    shortDefinition: "Siklotimi, hipomanik ve depresif belirtilerin uzun süre boyunca dalgalandığı ancak dönemlerin bipolar bozukluktaki tam hipomani, mani veya majör depresyon ölçütlerini sürekli karşılamadığı bir duygudurum bozukluğudur.",
    intro: "Siklotimik seyir sıradan ruh hali değişkenliğinden daha süreğen bir örüntüyü ifade eder. Değerlendirmede belirtilerin zaman içindeki dağılımı, şiddeti ve kişinin işlevselliği önem taşır.",
    sections: [
      section("Siklotimik Dalgalanmalar Nasıl Görülebilir?", "Bazı dönemlerde enerji, konuşkanlık, özgüven veya etkinlik artabilirken başka dönemlerde isteksizlik, düşük enerji veya çökkünlük belirtileri görülebilir. Bu değişimler kişinin yaşamında tekrarlayan bir duygudurum örüntüsü oluşturabilir."),
      section("Siklotimi ile Bipolar Bozukluk Aynı Şey midir?", "Hayır. Siklotimide duygudurum dalgalanmaları bipolar spektrumla ilişkili olsa da tam manik dönem veya belirli süre ve şiddette majör depresif dönemlerin varlığı farklı tanısal değerlendirmelere yöneltebilir."),
      section("Normal Duygudurum Değişkenliğinden Nasıl Ayrılır?", "Herkesin enerjisi ve ruh hali yaşam olaylarına göre değişebilir. Siklotimik örüntüde dalgalanmalar daha uzun süreli ve tekrarlayıcıdır; kişinin ilişkilerini, kararlarını veya günlük yaşamını etkileyebilir."),
      section("Tanıda Zaman İçindeki Seyir Neden Önemlidir?", "Tek bir yüksek enerjili veya çökkün dönem siklotimiyi göstermez. Belirtilerin uzun süre içindeki örüntüsünün anlaşılması, olası hipomani veya depresif dönemlerin ayırt edilmesi ve madde ya da tıbbi nedenlerin değerlendirilmesi gerekir. Kişinin yakın çevresinden alınan zaman içindeki gözlemler de duygudurum dalgalanmalarının örüntüsünü anlamaya katkı sağlayabilir.")
    ],
    relatedTerms: [
      { term: "Duygudurum", slug: "duygudurum" },
      { term: "Mani", slug: "mani" },
      { term: "Hipomani", slug: "hipomani" },
      { term: "Bipolar I bozukluk", slug: "bipolar-1-bozukluk" },
      { term: "Bipolar II bozukluk", slug: "bipolar-2-bozukluk" }
    ]
  }],

  ["sinav-kaygisi", {
    shortDefinition: "Sınav kaygısı, değerlendirilme ve performans beklentisiyle ilişkili olarak sınav öncesinde veya sırasında ortaya çıkan bilişsel, duygusal ve bedensel kaygı belirtilerini ifade eder.",
    intro: "Belirli düzeyde kaygı sınava hazırlanmayı ve dikkati artırabilir. Sınav kaygısı klinik açıdan özellikle kaygının öğrenilen bilgiyi kullanmayı, sınava katılmayı veya kişinin günlük yaşamını belirgin biçimde zorlaştırdığı durumlarda önem kazanır.",
    sections: [
      section("Sınav Kaygısı Nasıl Görülebilir?", "Kişi başarısız olacağına ilişkin yoğun düşünceler yaşayabilir, sınav sırasında zihninin boşaldığını hissedebilir veya çarpıntı, terleme ve kas gerginliği gibi bedensel uyarılma belirtileri yaşayabilir. Dikkat sürekli olası başarısızlığa yöneldiğinde soruları değerlendirmek güçleşebilir."),
      section("Hazırlıksız Olmak ile Sınav Kaygısı Aynı Şey midir?", "Hayır. Yetersiz hazırlık doğal olarak endişe yaratabilir. Sınav kaygısında ise kişi yeterince hazırlanmış olsa bile performans anında yoğun tehdit algısı yaşayabilir ve bildiklerini göstermekte zorlanabilir."),
      section("Kaçınma Kaygıyı Nasıl Etkileyebilir?", "Çalışmayı ertelemek, deneme sınavlarından kaçınmak veya değerlendirme durumlarına katılmamak kısa vadede rahatlama sağlayabilir. Ancak bu davranışlar kişinin sınav ortamına alışmasını zorlaştırabilir ve sonraki değerlendirmelerde kaygının sürmesine katkıda bulunabilir."),
      section("Değerlendirmede Neler Dikkate Alınır?", "Kaygının yalnız sınavlarla sınırlı olup olmadığı, sosyal değerlendirilme korkusu, dikkat güçlükleri, uyku düzeni, çalışma alışkanlıkları ve akademik koşullar birlikte ele alınır. Amaç olağan performans stresini gereksiz biçimde hastalıklaştırmak değildir.")
    ],
    relatedTerms: [
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Ergen anksiyetesi", slug: "ergen-anksiyetesi" },
      { term: "Sosyal anksiyete bozukluğu", slug: "sosyal-anksiyete-bozuklugu" },
      { term: "Dikkat", slug: "dikkat" },
      { term: "Güvence arama", slug: "guvence-arama" }
    ]
  }],

  ["sirkadiyen-ritim", {
    shortDefinition: "Sirkadiyen ritim, yaklaşık 24 saatlik döngü içinde uyku-uyanıklık, hormon salınımı, vücut sıcaklığı ve başka biyolojik süreçlerin zamanlamasını düzenleyen içsel biyolojik ritimdir.",
    intro: "Sirkadiyen sistem çevresel saatten tamamen bağımsız değildir. Özellikle ışık-karanlık döngüsü iç biyolojik saatin günlük olarak çevreyle yeniden eşleşmesini sağlayan en güçlü zaman ipuçlarından biridir.",
    sections: [
      section("Sirkadiyen Ritim Uykuyu Nasıl Etkiler?", "Biyolojik saat günün belirli dönemlerinde uyanıklığı, belirli dönemlerinde ise uyku eğilimini destekler. Bu sistem gün içinde biriken uyku ihtiyacıyla birlikte çalışır; bu nedenle yalnızca ne kadar uykusuz kalındığı değil, hangi saatte uyumaya çalışıldığı da önemlidir."),
      section("Işığın Rolü Nedir?", "Sabah ve akşam alınan ışık biyolojik saatin zamanlamasını etkileyebilir. Özellikle akşam saatlerindeki güçlü ışık bazı kişilerde uyku zamanının gecikmesine katkıda bulunabilir. Melatonin salınımı da ışık-karanlık döngüsüyle yakından ilişkilidir."),
      section("Ritim Neden Kayabilir?", "Vardiyalı çalışma, uzun mesafeli seyahat, çok değişken uyku saatleri veya geç saatlere kadar süren düzenli uyanıklık biyolojik saat ile sosyal program arasında uyumsuzluk oluşturabilir. Bu durum kişinin istediği saatte uykuya geçmesini zorlaştırabilir."),
      section("Her Uyku Sorunu Sirkadiyen Kaynaklı mıdır?", "Hayır. Insomnia, uyku apnesi, ruhsal durumlar, maddeler ve başka tıbbi sorunlar da uyku yakınmalarına yol açabilir. Uyku zamanlamasının düzenli biçimde gecikmesi veya erkene kayması varsa sirkadiyen örüntünün değerlendirilmesi yararlı olabilir.")
    ],
    relatedTerms: [
      { term: "Melatonin", slug: "melatonin" },
      { term: "İnsomnia", slug: "insomnia" },
      { term: "Hipersomnia", slug: "hipersomnia" },
      { term: "Parasomni", slug: "parasomni" }
    ]
  }],

  ["sizoaffektif-bozukluk", {
    shortDefinition: "Şizoaffektif bozukluk, belirgin duygudurum dönemleri ile psikotik belirtilerin aynı hastalık seyri içinde bulunduğu ve psikotik belirtilerin bazı dönemlerde belirgin duygudurum dönemi dışında da sürdüğü bir psikiyatrik bozukluktur.",
    intro: "Şizoaffektif bozukluğun değerlendirilmesinde yalnız belirtilerin türü değil, psikotik ve duygudurum belirtilerinin zaman içindeki ilişkisi temel önemdedir.",
    sections: [
      section("Hangi Belirtiler Görülebilir?", "Sanrı, varsanı veya dezorganize düşünce gibi psikotik belirtilere depresif ya da manik duygudurum belirtileri eşlik edebilir. Belirtilerin şiddeti ve işlevsellik üzerindeki etkisi kişiden kişiye değişebilir."),
      section("Bipolar Bozukluktan Nasıl Ayrılır?", "Bipolar bozuklukta psikotik belirtiler manik veya depresif dönemler sırasında görülebilir. Şizoaffektif bozukluk değerlendirmesinde ise psikotik belirtilerin belirgin duygudurum dönemi olmadan da bulunduğu bir zaman aralığının olup olmadığı özellikle incelenir."),
      section("Şizofreniden Nasıl Ayrılır?", "Her iki tabloda psikotik belirtiler görülebilir. Şizoaffektif bozuklukta belirgin duygudurum dönemleri hastalığın toplam seyri içinde önemli yer tutar. Bu ayrım tek bir görüşmeyle değil, zaman içindeki klinik seyir üzerinden yapılır."),
      section("Tıbbi ve Maddeyle İlişkili Nedenler Neden Araştırılır?", "Madde veya ilaç etkileri ile bazı nörolojik ve tıbbi hastalıklar psikoz veya duygudurum değişiklikleri oluşturabilir. Yeni başlayan belirtilerde bilinç düzeyi, madde kullanımı, tıbbi bulgular ve geçmiş dönemlerin seyri birlikte değerlendirilir. Tanısal ayrım için belirtilerin yalnız bugünkü görünümü değil, önceki dönemlerle olan zaman ilişkisi de önemlidir.")
    ],
    relatedTerms: [
      { term: "Psikoz", slug: "psikoz" },
      { term: "Psikotik özellik", slug: "psikotik-ozellik" },
      { term: "Duygudurum", slug: "duygudurum" },
      { term: "Mani", slug: "mani" },
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" },
      { term: "Negatif belirti", slug: "negatif-belirti" }
    ]
  }],

  ["sosyal-destek", {
    shortDefinition: "Sosyal destek, kişinin yakın ilişkileri ve sosyal çevresi aracılığıyla aldığı duygusal, pratik, bilgiye dayalı veya gündelik yaşamı kolaylaştıran yardımları ifade eden genel bir kavramdır.",
    intro: "Sosyal destek yalnız kişinin çevresinde kaç insan bulunduğuyla ölçülmez. İlişkilerin güvenilirliği, gerektiğinde ulaşılabilir olması ve alınan desteğin kişinin ihtiyacına uygunluğu da önemlidir.",
    sections: [
      section("Sosyal Destek Hangi Biçimlerde Olabilir?", "Duygusal olarak dinlenmek ve anlaşılmak, gündelik bir işte yardım almak, bilgiye ulaşmak veya zor bir dönemde yalnız kalmamak farklı sosyal destek biçimleridir. Aynı kişi farklı durumlarda farklı türde desteğe ihtiyaç duyabilir."),
      section("Sosyal Çevrenin Büyüklüğü Yeterli midir?", "Hayır. Çok sayıda sosyal bağlantıya sahip olmak kişinin kendisini desteklenmiş hissetmesini garanti etmez. Az sayıda ancak güvenilir ve karşılıklı ilişki bazı kişiler için daha güçlü bir destek kaynağı olabilir."),
      section("Sosyal Destek Ruhsal Sağlığı Nasıl Etkileyebilir?", "Ulaşılabilir ve güvenilir ilişkiler stresli dönemlerde yalnızlık hissini azaltabilir, yardım aramayı kolaylaştırabilir ve günlük işlevselliğin sürdürülmesine katkıda bulunabilir. Ancak sosyal destek profesyonel değerlendirme gerektiren durumların yerine geçmez."),
      section("Destek Her Zaman Yararlı mıdır?", "Desteğin biçimi önemlidir. Kişinin tercihlerini dikkate almayan, aşırı kontrol edici veya sürekli güvence vermeye dayanan yaklaşımlar bazı durumlarda yararlı olmayabilir. Etkili destek kişinin ihtiyacını anlamaya ve özerkliğini korumaya dayanır.")
    ],
    relatedTerms: [
      { term: "Psikososyal destek", slug: "psikososyal-destek" },
      { term: "İşlevsellik", slug: "islevsellik" },
      { term: "Rehabilitasyon", slug: "rehabilitasyon" },
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" }
    ]
  }],

  ["stres-yaniti", {
    shortDefinition: "Stres yanıtı, kişinin tehdit, belirsizlik veya artmış talepler karşısında geliştirdiği bedensel, bilişsel, duygusal ve davranışsal tepkilerin bütününü ifade eder.",
    intro: "Stres yanıtı tek başına hastalık değildir. Kısa süreli stres tepkisi kişinin çevresel taleplere uyum sağlamasına yardımcı olabilir; ancak yanıtın uzun süre yüksek düzeyde kalması günlük işlevleri zorlaştırabilir.",
    sections: [
      section("Bedensel Stres Yanıtında Ne Olur?", "Otonom sinir sistemi ve hormonal sistemler devreye girerek kalp hızında artış, kas gerginliği, terleme veya solunumda değişiklik gibi tepkiler oluşturabilir. Bu değişiklikler organizmanın hızlı biçimde harekete hazırlanmasının parçasıdır."),
      section("Stres Düşünce ve Dikkati Nasıl Etkileyebilir?", "Tehdit algısı arttığında dikkat olası tehlikelere daha fazla yönelebilir. Kişi belirsiz durumları daha olumsuz yorumlayabilir, karar vermekte zorlanabilir veya zihninin sürekli aynı sorunla meşgul olduğunu hissedebilir."),
      section("Akut ve Uzun Süreli Stres Aynı mıdır?", "Hayır. Kısa süreli stres belirli bir olayla başlayıp olay sona erdiğinde azalabilir. Stres etkenlerinin uzun süre devam etmesi halinde uyku, duygudurum, dikkat, bedensel yakınmalar ve günlük işlevsellik üzerinde daha kalıcı etkiler ortaya çıkabilir."),
      section("Stres Yanıtı Ne Zaman Değerlendirilmelidir?", "Belirtiler uzun sürüyor, işlevselliği belirgin biçimde etkiliyor, yoğun kaçınmaya yol açıyor veya travmatik bir olay sonrasında kalıcı hale geliyorsa profesyonel değerlendirme yararlı olabilir. Benzer bedensel belirtilerin tıbbi nedenleri de gerektiğinde göz önünde bulundurulur.")
    ],
    relatedTerms: [
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Uyum bozukluğu", slug: "uyum-bozuklugu" }
    ]
  }],

  ["oyun-oynama-bozuklugu", {
    shortDefinition: "Oyun oynama bozukluğu, dijital veya video oyunları üzerindeki kontrolün belirgin biçimde azalması, oyunun diğer yaşam alanlarının önüne geçmesi ve olumsuz sonuçlara rağmen davranışın sürmesiyle ilişkili klinik bir tablodur.",
    intro: "Çok oyun oynamak tek başına oyun oynama bozukluğu anlamına gelmez. Klinik değerlendirmede oyun süresinden çok davranış üzerindeki kontrol, önceliklerin değişmesi ve günlük işlevsellik üzerindeki kalıcı etkiler önem taşır.",
    sections: [
      section("Oyun Oynama Bozukluğu Nasıl Görülebilir?", "Kişi oyun süresini azaltmakta zorlanabilir, okul, iş, uyku veya sosyal ilişkiler gibi alanları giderek daha fazla ihmal edebilir ve sorunları fark etmesine rağmen oyun davranışını sürdürmeye devam edebilir. Davranış zaman içinde kişinin günlük yaşamında daha merkezi bir konuma gelebilir."),
      section("Yoğun Oyun Oynamak Her Zaman Bozukluk mudur?", "Hayır. Bir kişinin belirli dönemlerde uzun süre oyun oynaması, oyunlarla güçlü biçimde ilgilenmesi veya rekabetçi oyunlara zaman ayırması tek başına klinik bozukluk anlamına gelmez. Belirgin kontrol kaybı ve işlev kaybı olup olmadığı değerlendirilmelidir."),
      section("Oyun Davranışının İşlevi Neden Önemlidir?", "Oyun eğlence, sosyalleşme veya stres azaltma amacıyla kullanılabilir. Bazı kişilerde ise zorlayıcı duygulardan uzaklaşmanın temel yolu haline gelebilir. Davranışın hangi koşullarda arttığı ve kişinin başka baş etme yollarının bulunup bulunmadığı klinik açıdan önemlidir."),
      section("Değerlendirmede Hangi Alanlara Bakılır?", "Uyku düzeni, akademik veya mesleki işlevsellik, aile ve arkadaş ilişkileri, fiziksel aktivite, duygudurum ve eşlik eden başka ruhsal belirtiler birlikte ele alınır. Amaç oyun oynamayı başlı başına sorun olarak görmek değil, kişinin yaşamındaki denge ve kontrol düzeyini değerlendirmektir.")
    ],
    relatedTerms: [
      { term: "Bağımlılık", slug: "bagimlilik" },
      { term: "Kumar oynama bozukluğu", slug: "kumar-oynama-bozuklugu" },
      { term: "Dürtü kontrolü", slug: "durtu-kontrolu" },
      { term: "Dikkat", slug: "dikkat" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ]
  }],

  ["ozgul-fobi", {
    shortDefinition: "Özgül fobi, belirli bir nesne veya durum karşısında ortaya çıkan, gerçek tehlikeyle orantısız olabilen yoğun korku ve kaçınmayla karakterize bir anksiyete bozukluğudur.",
    intro: "Özgül fobide korku belirli bir uyaranla bağlantılıdır. Kişi korkusunun aşırı olduğunu fark edebilse bile karşılaşma sırasında yoğun kaygı yaşayabilir ve günlük yaşamını bu uyaranı önleyecek biçimde düzenleyebilir.",
    sections: [
      section("Özgül Fobi Nasıl Görülebilir?", "Hayvanlar, yükseklik, uçuş, kapalı ortamlar veya belirli tıbbi durumlarla karşılaşma gibi farklı uyaranlar yoğun korku oluşturabilir. Kişi bu uyaranla karşılaşmaktan kaçınabilir veya karşılaşmaya ancak belirgin sıkıntıyla dayanabilir."),
      section("Normal Korku ile Fobi Arasındaki Fark Nedir?", "Korku yaşamı koruyan doğal bir tepkidir ve gerçek tehlikeler karşısında işlevseldir. Özgül fobide ise korkunun yoğunluğu gerçek riskle orantısız olabilir, uzun süre devam edebilir ve kişinin günlük kararlarını veya işlevselliğini belirgin biçimde etkileyebilir."),
      section("Kaçınma Neden Önemlidir?", "Korkulan uyaranla karşılaşmamak kısa vadede kaygıyı azaltabilir. Ancak sürekli kaçınma kişinin korkusuyla ilgili yeni ve daha gerçekçi deneyimler yaşamasını engelleyebilir ve zaman içinde korkunun devam etmesine katkıda bulunabilir."),
      section("Değerlendirmede Neler Ele Alınır?", "Korkunun hangi durumlarda ortaya çıktığı, ne kadar süredir devam ettiği, kaçınmanın yaşamı ne ölçüde kısıtladığı ve benzer belirtilerin başka anksiyete tablolarıyla açıklanıp açıklanamayacağı incelenir. Tek bir korku tepkisi üzerinden tanı konmaz.")
    ],
    relatedTerms: [
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Sosyal anksiyete bozukluğu", slug: "sosyal-anksiyete-bozuklugu" },
      { term: "Ayrılma kaygısı", slug: "ayrilma-kaygisi" },
      { term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi" },
      { term: "Güvence arama", slug: "guvence-arama" }
    ]
  }],

  ["paranoid-dusunce", {
    shortDefinition: "Paranoid düşünce, kişinin başkalarının kendisine zarar verme, aldatma, dışlama veya kötü niyet taşıdığı yönünde kuşku ve tehdit yorumları geliştirmesini ifade eden klinik bir kavramdır.",
    intro: "Paranoid düşünceler farklı yoğunluklarda görülebilir. Her kuşku paranoid düşünce değildir ve paranoid düşüncenin bulunması tek başına psikotik bozukluk tanısı anlamına gelmez.",
    sections: [
      section("Paranoid Düşünce Nasıl Görülebilir?", "Kişi başkalarının sözlerini veya davranışlarını kendisine yönelik gizli bir tehdit, küçümseme ya da kötü niyet olarak yorumlayabilir. Belirsiz olaylara tehdit anlamı yükleme eğilimi arttıkça kişilerarası güven azalabilir ve sosyal geri çekilme gelişebilir."),
      section("Gerçekçi Kuşku ile Paranoid Düşünce Nasıl Ayrılır?", "Gerçek yaşamda insanların kötü niyetli davranması mümkündür. Klinik değerlendirmede kişinin yorumunun eldeki kanıtlarla ne kadar uyumlu olduğu, alternatif açıklamalara ne ölçüde açık olduğu ve inancın günlük yaşam üzerindeki etkisi göz önünde bulundurulur."),
      section("Paranoid Düşünce Her Zaman Sanrı mıdır?", "Hayır. Kuşku ve güvensizlik bir süreklilik üzerinde değişebilir. Sanrısal düzeydeki inanışlar genellikle çok güçlü biçimde benimsenir ve karşıt kanıtlarla değiştirilmesi oldukça güç olabilir. Daha hafif paranoid düşüncelerde kişi belirsizlik veya yanılma olasılığını koruyabilir."),
      section("Hangi Bağlamlar Değerlendirilir?", "Yoğun stres, uykusuzluk, madde etkileri, duygudurum değişiklikleri ve psikotik belirtiler paranoid düşünceleri etkileyebilir. Yeni başlayan veya hızla artan kuşkular özellikle başka davranış, algı veya bilinç değişiklikleriyle birlikteyse kapsamlı değerlendirme gerektirir.")
    ],
    relatedTerms: [
      { term: "Psikoz", slug: "psikoz" },
      { term: "Sanrısal bozukluk", slug: "sanrisal-bozukluk" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Algı bozukluğu", slug: "algi-bozuklugu" },
      { term: "Psikotik özellik", slug: "psikotik-ozellik" }
    ]
  }],

  ["parasomni", {
    shortDefinition: "Parasomni, uykuya geçiş sırasında, uyku içinde veya uyanma döneminde ortaya çıkabilen olağandışı davranış, hareket, duygu veya yaşantıları kapsayan genel bir uyku bozukluğu terimidir.",
    intro: "Parasomni tek bir hastalığı ifade etmez. Farklı uyku evreleriyle ilişkili çeşitli tablolar bu başlık altında değerlendirilir ve belirtilerin biçimi yaşa ve uyku düzenine göre değişebilir.",
    sections: [
      section("Parasomniler Nasıl Görülebilir?", "Uyku sırasında konuşma, yataktan kalkma, yoğun korkuyla uyanma, karmaşık hareketler veya canlı rüya deneyimleri gibi farklı belirtiler görülebilir. Bazı olaylar kişi tarafından hiç hatırlanmazken bazıları sabah ayrıntılı biçimde hatırlanabilir."),
      section("Kabus ile Parasomni Aynı Şey midir?", "Kabuslar parasomni başlığı altında değerlendirilebilen durumlardan biridir ancak tüm parasomniler kabus değildir. Farklı parasomniler uykunun farklı evrelerinde ortaya çıkabilir ve olay sırasında kişinin uyanıklık düzeyi birbirinden farklı olabilir."),
      section("Uykusuzluk Parasomnileri Etkileyebilir mi?", "Uyku yoksunluğu, düzensiz uyku saatleri, stres veya bazı maddeler bazı kişilerde parasomni olaylarını kolaylaştırabilir. Bununla birlikte her olayın nedeni aynı değildir ve tekrarlayan belirtilerde kişinin genel uyku düzeni ayrıntılı biçimde değerlendirilir."),
      section("Ne Zaman Değerlendirme Gerekir?", "Olaylar sıklaşıyor, uyku kalitesini bozuyor, gündüz işlevselliğini etkiliyor veya uyku sırasında kişinin kendisi ya da çevresi için güvenlik riski oluşturuyorsa profesyonel değerlendirme önemlidir. Bazı nörolojik durumlar da benzer gece davranışları oluşturabilir. Olayların yaklaşık ne zaman ortaya çıktığı ve sabah hatırlanıp hatırlanmadığı ayırıcı değerlendirmede yararlı olabilir.")
    ],
    relatedTerms: [
      { term: "İnsomnia", slug: "insomnia" },
      { term: "Hipersomnia", slug: "hipersomnia" },
      { term: "Kabus bozukluğu", slug: "kabus-bozuklugu" },
      { term: "Melatonin", slug: "melatonin" }
    ]
  }],

  ["pozitif-belirti", {
    shortDefinition: "Pozitif belirti, özellikle psikotik bozukluklarda olağan zihinsel yaşantıya eklenen sanrı, varsanı veya belirgin dezorganize düşünce ve davranış gibi belirtileri tanımlayan klinik bir terimdir.",
    intro: "Buradaki pozitif sözcüğü iyi veya olumlu anlamına gelmez. Olağan işlevlere yeni bir yaşantı veya davranışın eklenmesini ifade eder ve negatif belirti kavramından bu yönüyle ayrılır.",
    sections: [
      section("Pozitif Belirtilere Neler Örnek Verilebilir?", "Gerçeklikle uyumsuz güçlü inanışlar, dışarıda karşılığı bulunmayan algısal yaşantılar, konuşmanın belirgin biçimde dağılması veya davranışların anlaşılması güç hale gelmesi pozitif belirti alanında değerlendirilebilir."),
      section("Pozitif ve Negatif Belirti Arasındaki Fark Nedir?", "Pozitif belirtilerde olağan yaşantıya eklenen deneyimler ön plandayken negatif belirtilerde motivasyon, duygusal ifade veya sosyal ilgi gibi işlevlerde azalma görülür. Aynı kişide iki belirti grubu farklı oranlarda birlikte bulunabilir."),
      section("Pozitif Belirti Her Zaman Şizofreni Anlamına mı Gelir?", "Hayır. Psikotik belirtiler farklı psikiyatrik, nörolojik veya tıbbi durumlarda ve bazı madde etkilerinde görülebilir. Bu nedenle tek bir belirti üzerinden belirli bir bozukluk tanısına ulaşılmaz."),
      section("Yeni Başlayan Belirtilerde Neler Değerlendirilir?", "Belirtilerin başlangıç zamanı, süresi, duygudurumla ilişkisi, madde veya ilaç kullanımı, bilinç ve dikkat düzeyi ile tıbbi belirtiler birlikte incelenir. Özellikle akut bilinç değişikliği eşlik ediyorsa tıbbi nedenlerin dışlanması önem taşır.")
    ],
    relatedTerms: [
      { term: "Psikoz", slug: "psikoz" },
      { term: "Negatif belirti", slug: "negatif-belirti" },
      { term: "Algı bozukluğu", slug: "algi-bozuklugu" },
      { term: "Dezorganize davranış", slug: "dezorganize-davranis" },
      { term: "Psikotik özellik", slug: "psikotik-ozellik" }
    ]
  }],

  ["psikomotor-ajitasyon", {
    shortDefinition: "Psikomotor ajitasyon, içsel gerginlik veya huzursuzlukla birlikte amaçsız ya da artmış motor hareketlerin gözlendiği klinik bir belirtiyi ifade eder.",
    intro: "Psikomotor ajitasyon tek başına bir psikiyatrik tanı değildir. Kaygıdan mani veya psikoza, ilaç ve madde etkilerinden bazı tıbbi durumlara kadar farklı bağlamlarda ortaya çıkabilir.",
    sections: [
      section("Psikomotor Ajitasyon Nasıl Görülebilir?", "Kişi yerinde oturmakta zorlanabilir, sürekli dolaşabilir, ellerini veya bacaklarını tekrar tekrar hareket ettirebilir ya da belirgin motor huzursuzluk gösterebilir. Davranış çoğu zaman kişinin hissettiği içsel gerilimle birlikte değerlendirilir."),
      section("Huzursuz Olmak ile Psikomotor Ajitasyon Aynı Şey midir?", "Her zaman değil. Günlük stres sırasında hareketli veya sabırsız olmak doğal olabilir. Klinik ajitasyonda motor etkinlik daha belirgin, kontrol edilmesi daha güç ve kişinin mevcut ruhsal veya tıbbi durumuyla ilişkili olabilir."),
      section("Hangi Durumlarda Görülebilir?", "Yoğun anksiyete, manik dönemler, psikotik tablolar, bazı ilaçların yan etkileri, madde etkileri veya yoksunluk durumları motor huzursuzluğa yol açabilir. Altta yatan neden yalnız davranışın görünümüne bakılarak belirlenemez."),
      section("Ani Ajitasyon Neden Dikkat Gerektirir?", "Yeni başlayan belirgin ajitasyonda kişinin bilinç düzeyi, yönelimi, tıbbi durumu ve güvenliği değerlendirilmelidir. Konfüzyon, ateş, nörolojik belirtiler veya hızlı zihinsel durum değişikliği eşlik ediyorsa acil tıbbi değerlendirme gerekebilir. Belirtinin daha önce bulunup bulunmadığı ve başlangıç hızının bilinmesi de nedenin anlaşılmasına katkı sağlar.")
    ],
    relatedTerms: [
      { term: "Mani", slug: "mani" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Psikoz", slug: "psikoz" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" }
    ]
  }],

  ["psikososyal-destek", {
    shortDefinition: "Psikososyal destek, kişinin ruhsal iyilik hali, sosyal ilişkileri, günlük yaşam becerileri ve çevresel kaynaklarını güçlendirmeyi amaçlayan çok yönlü destek yaklaşımlarını ifade eden genel bir kavramdır.",
    intro: "Psikososyal destek yalnızca konuşmaya dayalı profesyonel görüşmelerden oluşmaz. Aile, sosyal çevre, eğitim, çalışma yaşamı ve toplumsal kaynakların kişinin işlevselliğine katkısı da bu çerçevede ele alınabilir.",
    sections: [
      section("Psikososyal Destek Neleri Kapsayabilir?", "Kişinin günlük yaşamını düzenlemesine, sosyal ilişkilerini sürdürmesine, eğitim veya işe katılımını desteklemesine ve mevcut sosyal kaynaklara erişmesine yönelik farklı uygulamalar psikososyal destek kapsamında değerlendirilebilir."),
      section("Sosyal Destek Neden Önemlidir?", "Güvenilir ilişkiler ve ulaşılabilir destek kaynakları stresli dönemlerde kişinin yalnızlık duygusunu azaltabilir ve günlük sorunlarla baş etmesini kolaylaştırabilir. Destek biçiminin kişinin ihtiyacına ve tercihine uygun olması önemlidir."),
      section("Psikososyal Destek Psikoterapi ile Aynı Şey midir?", "Hayır. Psikoterapi belirli kuramsal ve klinik yöntemlerle yürütülen yapılandırılmış bir süreçtir. Psikososyal destek ise daha geniştir ve sosyal, çevresel, işlevsel ve ailesel ihtiyaçlara yönelik müdahaleleri de içerebilir."),
      section("Destek Planı Nasıl Belirlenir?", "Kişinin güçlü yönleri, mevcut sosyal ağı, günlük yaşamda zorlandığı alanlar ve hedefleri birlikte ele alınır. Standart bir destek paketi yerine kişinin yaşam koşullarına uygun ve uygulanabilir kaynakların belirlenmesi daha işlevseldir. Destek gereksinimleri zaman içinde değişebileceği için planın belirli aralıklarla yeniden değerlendirilmesi de yararlı olabilir.")
    ],
    relatedTerms: [
      { term: "İşlevsellik", slug: "islevsellik" },
      { term: "Rehabilitasyon", slug: "rehabilitasyon" },
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Bağlanma", slug: "baglanma" }
    ]
  }],

  ["psikoterapi", {
    shortDefinition: "Psikoterapi, ruhsal ve kişilerarası güçlükleri anlamaya ve değiştirmeye yönelik, eğitimli bir profesyonel ile belirli bir kuramsal çerçeve içinde yürütülen yapılandırılmış psikolojik çalışma sürecidir.",
    intro: "Psikoterapi tek bir yöntem değildir. Bilişsel davranışçı, psikodinamik, kişilerarası ve travma odaklı yaklaşımlar gibi farklı modeller bulunur ve uygun yaklaşım kişinin ihtiyaçlarına göre değişebilir.",
    sections: [
      section("Psikoterapide Ne Üzerinde Çalışılır?", "Düşünce ve davranış örüntüleri, duyguların düzenlenmesi, kişilerarası ilişkiler, geçmiş deneyimlerin güncel yaşama etkileri veya belirli belirtiler farklı terapi yaklaşımlarında ele alınabilir. Çalışmanın odağı kişinin başvuru nedenine göre belirlenir."),
      section("Tüm Psikoterapiler Aynı mıdır?", "Hayır. Terapi modellerinin dayandığı kuramsal açıklamalar, kullanılan yöntemler ve seansların yapısı birbirinden farklı olabilir. Bazı yaklaşımlar daha yapılandırılmış ve belirti odaklıyken bazıları ilişki örüntüleri veya daha geniş kişisel deneyimler üzerinde durabilir."),
      section("Psikoterapi Herkes İçin Aynı Sonucu Verir mi?", "Hayır. Sonuçlar kişinin yaşadığı güçlüğe, kullanılan yönteme, terapötik ilişkiye, hedeflere ve başka birçok etkene göre değişebilir. Hiçbir psikoterapi yöntemi her kişi veya her sorun için aynı düzeyde etkili kabul edilemez."),
      section("Uygun Yaklaşım Nasıl Belirlenir?", "Başvuru nedeni, belirtilerin niteliği ve süresi, kişinin tercihleri, eşlik eden tıbbi veya ruhsal durumlar ve uygulanacak yöntemin bilimsel dayanağı birlikte değerlendirilir. Gerektiğinde psikoterapi başka sağlık hizmetleriyle birlikte planlanabilir.")
    ],
    relatedTerms: [
      { term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi" },
      { term: "EMDR", slug: "emdr" },
      { term: "Mentalizasyon", slug: "mentalizasyon" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Anksiyete", slug: "anksiyete" }
    ]
  }],

  ["psikotik-ozellik", {
    shortDefinition: "Psikotik özellik, sanrı, varsanı veya gerçekliği değerlendirme yetisinde belirgin bozulma gibi psikotik belirtilerin başka bir klinik tabloya eşlik ettiğini ifade etmek için kullanılan bir terimdir.",
    intro: "Psikotik özellik tek başına belirli bir tanı adı değildir. Bazı duygudurum bozukluklarında veya başka klinik durumlarda belirtilerin niteliğini daha ayrıntılı tanımlamak amacıyla kullanılabilir.",
    sections: [
      section("Psikotik Özellik Ne Anlama Gelir?", "Kişide gerçeklikle uyumsuz güçlü inanışlar veya dış uyaran olmadan algısal yaşantılar gibi belirtiler bulunabilir. Bu belirtilerin hangi hastalık döneminde ve hangi diğer ruhsal belirtilerle birlikte ortaya çıktığı tanısal açıdan önem taşır."),
      section("Psikotik Özellik ile Psikotik Bozukluk Aynı Şey midir?", "Hayır. Psikotik bozukluklarda psikotik belirtiler klinik tablonun temel bileşenlerinden biridir. Psikotik özellik ifadesi ise örneğin bir duygudurum dönemine psikotik belirtilerin eşlik ettiğini belirtmek için kullanılabilir."),
      section("Duygudurumla İlişki Neden Önemlidir?", "Psikotik belirtilerin yalnızca belirgin depresif veya manik dönemler sırasında ortaya çıkıp çıkmadığı, duygudurum belirtileri dışında devam edip etmediği ve içeriklerinin duygudurumla ilişkisi klinik değerlendirmede yol gösterici olabilir."),
      section("Başka Nedenler Neden Araştırılır?", "Madde veya ilaç etkileri, bazı nörolojik hastalıklar, metabolik sorunlar ve akut bilinç değişiklikleri psikotik benzeri belirtiler oluşturabilir. Özellikle yeni başlangıçlı belirtilerde tıbbi ve psikiyatrik değerlendirme birlikte ele alınmalıdır.")
    ],
    relatedTerms: [
      { term: "Psikoz", slug: "psikoz" },
      { term: "Pozitif belirti", slug: "pozitif-belirti" },
      { term: "Negatif belirti", slug: "negatif-belirti" },
      { term: "Algı bozukluğu", slug: "algi-bozuklugu" },
      { term: "Kısa psikotik bozukluk", slug: "kisa-psikotik-bozukluk" }
    ]
  }],

  ["rehabilitasyon", {
    shortDefinition: "Psikiyatrik rehabilitasyon, ruhsal bozuklukların günlük yaşam üzerindeki etkilerini azaltmaya ve kişinin bağımsızlık, sosyal katılım ve işlevsellik düzeyini güçlendirmeye yönelik yaklaşımların genel adıdır.",
    intro: "Rehabilitasyon yalnız belirtileri azaltmaya odaklanmaz. Kişinin eğitim, çalışma, sosyal ilişkiler, özbakım ve toplum yaşamına katılım gibi günlük yaşam hedefleri de sürecin temel parçaları olabilir.",
    sections: [
      section("Psikiyatrik Rehabilitasyonun Temel Hedefi Nedir?", "Amaç kişinin yalnızca hastalık belirtileriyle değil, yaşam hedefleri ve güçlü yönleriyle birlikte değerlendirilmesidir. Bağımsız yaşam becerilerinin geliştirilmesi, sosyal katılımın artması ve anlamlı günlük rollerin desteklenmesi önemli hedefler arasındadır."),
      section("Hangi Alanlar Üzerinde Çalışılabilir?", "Günlük yaşam becerileri, sosyal iletişim, eğitim veya işe dönüş, zaman yönetimi, toplumsal kaynaklara erişim ve destek ağı oluşturma gibi alanlar kişinin ihtiyaçlarına göre rehabilitasyon planına dahil edilebilir."),
      section("Rehabilitasyon Tedavi ile Aynı Şey midir?", "Tam olarak değil. Klinik tedaviler belirtileri ve hastalık sürecini hedefleyebilirken rehabilitasyon kişinin bu belirtilerle birlikte günlük yaşamını nasıl sürdürebildiğine ve işlevselliğini nasıl geliştirebildiğine daha fazla odaklanır. İki yaklaşım birbirini tamamlayabilir."),
      section("Kişisel Hedefler Neden Önemlidir?", "İşlevsellik yalnız dışarıdan belirlenen ölçütlerle değerlendirilmez. Kişinin hangi yaşam alanlarını geliştirmek istediği, hangi rolleri anlamlı bulduğu ve mevcut güçlü yönleri planın merkezinde yer almalıdır. Bu yaklaşım rehabilitasyonu kişiye özgü hale getirir. Hedeflerin ulaşılabilir basamaklara ayrılması kişinin ilerlemesini daha görünür hale getirebilir.")
    ],
    relatedTerms: [
      { term: "İşlevsellik", slug: "islevsellik" },
      { term: "Psikososyal destek", slug: "psikososyal-destek" },
      { term: "Psikoz", slug: "psikoz" },
      { term: "Bağımlılık", slug: "bagimlilik" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" }
    ]
  }],

  ["labil-duygulanim", {
    shortDefinition: "Labil duygulanım, kişinin dışarıdan gözlenen duygusal ifadesinin kısa süre içinde belirgin ve hızlı değişiklikler göstermesini ifade eden klinik bir terimdir.",
    intro: "Labil duygulanımda duygusal tepki bir konudan diğerine hızla değişebilir veya uyaranın şiddetine göre beklenenden daha oynak görünebilir. Bu gözlem tek başına belirli bir psikiyatrik tanı anlamına gelmez.",
    sections: [
      section("Labil Duygulanım Nasıl Görülebilir?", "Kişi kısa bir görüşme içinde ağlamadan gülmeye, öfkeden sakinliğe veya yoğun heyecandan çökkün bir ifadeye hızlı biçimde geçebilir. Değişikliklerin hızı ve gözlenen uyaranla ilişkisi klinik görüşmede dikkate alınır."),
      section("Duygudurum ile Labil Duygulanım Aynı Şey midir?", "Hayır. Duygudurum kişinin daha uzun süreli içsel duygusal durumunu anlatırken duygulanım görüşme sırasında dışarıdan gözlenen ifadeyi tanımlar. Bu nedenle duygulanım hızlı değişse bile kişinin temel duygudurumu daha uzun süre farklı bir yönde devam edebilir."),
      section("Duygusal Olmak Labilite Anlamına mı Gelir?", "Hayır. Güçlü duygular yaşamak veya bunları açık biçimde ifade etmek tek başına labil duygulanım değildir. Klinik kavramda duygusal ifadenin hızla değişmesi, bağlamla uyumu ve kişinin olağan ifade biçiminden ne ölçüde farklılaştığı önemlidir."),
      section("Hangi Durumlarda Görülebilir?", "Duygu düzenleme güçlüklerinde, bazı duygudurum veya nörolojik durumlarda ve yoğun stres dönemlerinde duygusal ifade daha değişken hale gelebilir. Tek başına bu bulgu üzerinden tanı konmaz; eşlik eden belirtiler, süre ve kişinin genel işlevselliği birlikte değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Affekt", slug: "affekt" },
      { term: "Duygudurum", slug: "duygudurum" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Künt duygulanım", slug: "kunt-duygulanim" },
      { term: "Borderline kişilik örüntüsü", slug: "borderline-kisilik-oruntusu" }
    ]
  }],

  ["madde-kullanim-bozuklugu", {
    shortDefinition: "Madde kullanım bozukluğu, bir maddenin kullanımını kontrol etmekte güçlük, olumsuz sonuçlara rağmen kullanımı sürdürme ve kullanımın kişinin yaşamında giderek daha merkezi hale gelmesiyle ilişkili bir klinik tablodur.",
    intro: "Madde kullanım bozukluğu yalnızca kullanılan miktarla tanımlanmaz. Kontrol kaybı, işlevsellik üzerindeki etkiler, riskli sonuçlara rağmen kullanımın devamı ve kişinin kullanımı azaltma çabaları birlikte değerlendirilir.",
    sections: [
      section("Madde Kullanım Bozukluğu Nasıl Görülebilir?", "Kişi başlangıçta planladığından daha uzun süre kullanabilir, kullanımı azaltma girişimlerinde zorlanabilir veya zamanının önemli bölümünü maddeyle ilişkili uğraşlara ayırabilir. Aile, iş, eğitim ve sosyal yaşam da zaman içinde etkilenebilir."),
      section("Her Madde Kullanımı Bağımlılık Anlamına mı Gelir?", "Hayır. Bir maddenin kullanılmış olması tek başına madde kullanım bozukluğu tanısı koydurmaz. Klinik değerlendirmede kullanım üzerindeki kontrol, ortaya çıkan sonuçlar, işlev kaybı ve belirtilerin zaman içindeki örüntüsü ele alınır."),
      section("Tolerans ve Yoksunluk Neden Değerlendirilir?", "Bazı maddelerde aynı etkiyi elde etmek için giderek daha fazla kullanım ihtiyacı hissedilmesi toleransla, kullanım azaltıldığında veya kesildiğinde ortaya çıkan bedensel ve ruhsal belirtiler ise yoksunlukla ilişkili olabilir. Ancak bu bulgular tek başına bütün klinik tabloyu açıklamaz."),
      section("Değerlendirmede Güvenlik Neden Önemlidir?", "Kullanılan maddenin türüne, kişinin tıbbi durumuna ve kullanım örüntüsüne göre ani azaltma veya bırakma bazı durumlarda tıbbi risk taşıyabilir. Bu nedenle özellikle yoğun veya uzun süreli kullanım öyküsünde güvenli yaklaşım kişiye özgü tıbbi ve psikiyatrik değerlendirme gerektirir.")
    ],
    relatedTerms: [
      { term: "Bağımlılık", slug: "bagimlilik" },
      { term: "Alkol kullanım bozukluğu", slug: "alkol-kullanim-bozuklugu" },
      { term: "Dürtü kontrolü", slug: "durtu-kontrolu" }
    ]
  }],

  ["melatonin", {
    shortDefinition: "Melatonin, başlıca karanlıkla birlikte salınımı artan ve vücudun uyku-uyanıklık zamanlamasının düzenlenmesinde rol oynayan doğal bir hormondur.",
    intro: "Melatonin doğrudan bir uyku düğmesi gibi çalışmaz. Temel işlevlerinden biri biyolojik saate gece zamanının başladığına ilişkin sinyal vermek ve sirkadiyen ritmin düzenlenmesine katkıda bulunmaktır.",
    sections: [
      section("Melatonin Ne Zaman Salgılanır?", "Melatonin düzeyi genellikle akşam karanlıkla birlikte yükselmeye başlar, gece boyunca daha yüksek seyreder ve sabaha doğru azalır. Bu ritim kişinin iç biyolojik saati ve çevresel ışık koşullarıyla yakından ilişkilidir."),
      section("Işık Melatonini Nasıl Etkiler?", "Özellikle akşam saatlerinde güçlü ışığa maruz kalmak biyolojik saate gündüz sinyali verebilir ve melatonin zamanlamasını etkileyebilir. Bu nedenle uyku düzeni yalnızca melatonin miktarıyla değil, ışık-karanlık döngüsü ve günlük rutinlerle birlikte değerlendirilir."),
      section("Melatonin ile Uyku Aynı Şey midir?", "Hayır. Melatonin uyku zamanlamasında rol oynayan biyolojik sistemlerden yalnızca biridir. Uyku basıncı, stres, ruhsal durum, çevresel koşullar, kullanılan maddeler ve başka bedensel süreçler de kişinin uykuya geçişini ve uyku kalitesini etkiler."),
      section("Melatonin Ürünleri Her Uyku Sorununa Çözüm müdür?", "Hayır. Farklı uyku sorunlarının nedenleri ve biyolojik zamanlamaları birbirinden farklı olabilir. Bu nedenle melatonin içeren ürünlerin uygunluğu, zamanlaması ve olası etkileşimleri kişiye göre değişebilir; özellikle düzenli ilaç kullanan veya tıbbi hastalığı bulunan kişilerde profesyonel değerlendirme önemlidir.")
    ],
    relatedTerms: [
      { term: "İnsomnia", slug: "insomnia" },
      { term: "Hipersomnia", slug: "hipersomnia" },
      { term: "Kabus bozukluğu", slug: "kabus-bozuklugu" },
      { term: "Duygudurum", slug: "duygudurum" },
      { term: "Dikkat", slug: "dikkat" }
    ]
  }],

  ["mentalizasyon", {
    shortDefinition: "Mentalizasyon, kişinin kendi davranışlarını ve başkalarının davranışlarını düşünceler, duygular, niyetler, ihtiyaçlar ve inançlar gibi zihinsel durumlar üzerinden anlamlandırabilme kapasitesidir.",
    intro: "Mentalizasyon başkasının zihninden geçenleri kesin olarak bilmek anlamına gelmez. Aksine hem kendi yorumlarımızın hem de başkalarının davranışlarına ilişkin çıkarımlarımızın yanılabilir olduğunu fark etmeyi içerir.",
    sections: [
      section("Mentalizasyon Günlük Yaşamda Nasıl Kullanılır?", "Bir arkadaşın sessizliğini doğrudan ilgisizlik olarak kabul etmek yerine yorgun, üzgün veya başka bir konuyla meşgul olabileceğini düşünmek mentalizasyon örneğidir. Benzer biçimde kişi kendi davranışının altında hangi duygu veya ihtiyacın bulunduğunu da sorgulayabilir."),
      section("Mentalizasyon ile Zihin Okuma Aynı Şey midir?", "Hayır. Zihin okumada kişi karşısındakinin ne düşündüğünü yeterli kanıt olmadan kesin kabul edebilir. Mentalizasyonda ise farklı olasılıklar göz önünde bulundurulur ve başka bir kişinin iç dünyasının tam olarak bilinemeyeceği kabul edilir."),
      section("Yoğun Duygular Mentalizasyonu Etkileyebilir mi?", "Evet. Yoğun korku, öfke veya terk edilme kaygısı sırasında kişi başka insanların davranışlarını daha hızlı ve kesin biçimde yorumlayabilir. Duygusal uyarılmışlığın artması alternatif açıklamaları değerlendirmeyi zorlaştırabilir."),
      section("Bağlanma ile İlişkisi Nedir?", "Güvenli ve öngörülebilir ilişkiler kişinin kendi ve başkalarının zihinsel durumlarını merak etmesine alan sağlayabilir. Mentalizasyon kavramı bu nedenle bağlanma, duygu düzenleme ve kişilerarası ilişkilerle yakından ilişkili olarak ele alınır.")
    ],
    relatedTerms: [
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Borderline kişilik örüntüsü", slug: "borderline-kisilik-oruntusu" },
      { term: "Kaygılı bağlanma", slug: "kaygili-baglanma" },
      { term: "Kaçıngan bağlanma", slug: "kacingan-baglanma" }
    ]
  }],

  ["narsisistik-kisilik-oruntusu", {
    shortDefinition: "Narsisistik kişilik örüntüsü, benlik değerini düzenleme, takdir edilme ihtiyacı, empati kurma ve kişilerarası ilişkiler alanlarında süreklilik gösteren güçlüklerle ilişkilendirilen bir kişilik örüntüsüdür.",
    intro: "Narsisistik kişilik örüntüsü günlük dilde kullanılan bencillik veya kendini beğenmişlik etiketleriyle aynı değildir. Klinik değerlendirmede uzun süreli benlik ve ilişki örüntüleri ele alınır.",
    sections: [
      section("Narsisistik Örüntü Nasıl Görülebilir?", "Kişi başkalarının takdirine güçlü biçimde ihtiyaç duyabilir, kendi değerini başarı veya statü üzerinden düzenleyebilir ve eleştiri karşısında yoğun incinme yaşayabilir. Bazı kişiler dışarıdan çok özgüvenli görünürken içsel benlik değerleri daha kırılgan olabilir."),
      section("Kendine Güvenmek Narsisistik Olmak mıdır?", "Hayır. Sağlıklı özsaygı kişinin güçlü ve zayıf yanlarını daha dengeli biçimde kabul edebilmesini sağlar. Narsisistik örüntüde ise benlik değerinin dış onaya aşırı bağımlı hale gelmesi ve ilişkilerde tekrarlayıcı güçlükler bulunması daha önemlidir."),
      section("Empati Tamamen Yok mudur?", "Hayır. Empati kapasitesi kişiden kişiye ve koşullara göre değişebilir. Özellikle kişinin benlik değeri tehdit altında hissettiği dönemlerde başkasının bakış açısını dikkate almak zorlaşabilir. Bir kişiyi empatisiz olarak etiketlemek klinik değerlendirme yerine geçmez."),
      section("Kişilik Örüntüsü Değişebilir mi?", "Evet. Kişilik örüntüleri uzun süreli olsa da tamamen sabit değildir. Kişinin kendi kırılganlıklarını, ilişki döngülerini ve başkalarının deneyimlerini daha iyi anlaması zaman içinde daha esnek ilişki kurma biçimlerinin gelişmesine katkıda bulunabilir.")
    ],
    relatedTerms: [
      { term: "Kişilik bozukluğu", slug: "kisilik-bozuklugu" },
      { term: "Borderline kişilik örüntüsü", slug: "borderline-kisilik-oruntusu" },
      { term: "Kaçıngan kişilik örüntüsü", slug: "kacingan-kisilik-oruntusu" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Bağlanma", slug: "baglanma" }
    ]
  }],

  ["negatif-belirti", {
    shortDefinition: "Negatif belirti, özellikle şizofreni spektrumu ve bazı psikotik bozukluklarda olağan psikolojik işlevlerin azalmasını veya kaybını tanımlamak için kullanılan klinik bir terimdir.",
    intro: "Negatif belirtiler, sanrı veya varsanı gibi deneyimlerin ortaya çıkmasını değil; motivasyon, duygusal ifade, konuşma üretimi veya sosyal ilgi gibi işlevlerde azalmayı ifade eder.",
    sections: [
      section("Negatif Belirtilere Neler Örnek Verilebilir?", "Duygusal ifadenin azalması, amaçlı etkinlik başlatmada güçlük, konuşma üretiminde azalma, sosyal etkileşime ilginin azalması veya haz deneyiminde güçlük negatif belirti alanları arasında değerlendirilebilir."),
      section("Negatif Belirti ile Depresyon Aynı Şey midir?", "Hayır. Enerji azalması, sosyal geri çekilme ve isteksizlik her iki durumda da görülebilir. Depresyonda çökkün duygudurum, suçluluk ve umutsuzluk gibi belirtiler daha belirgin olabilirken negatif belirtilerin klinik bağlamı farklıdır."),
      section("İlaç Etkileri veya Başka Etkenler Benzer Görünüm Oluşturabilir mi?", "Evet. Sedasyon, depresif belirtiler, madde kullanımı, sosyal izolasyon veya aktif psikotik belirtilerin yarattığı geri çekilme negatif belirtilere benzeyen bir görünüm oluşturabilir. Bu nedenle birincil ve ikincil nedenlerin ayrılması önemlidir."),
      section("Neden İşlevsellikle Yakından İlişkilidir?", "Motivasyon, sosyal etkileşim ve amaçlı davranışın azalması eğitim, çalışma, ilişkiler ve özbakım alanlarını etkileyebilir. Değerlendirmede yalnız gözlenen davranış değil, kişinin içsel motivasyonu ve günlük yaşamındaki değişiklikler de ele alınır. Bu belirtilerin zaman içindeki seyri de işlev kaybının anlaşılmasına yardımcı olur.")
    ],
    relatedTerms: [
      { term: "Psikoz", slug: "psikoz" },
      { term: "Künt duygulanım", slug: "kunt-duygulanim" },
      { term: "Avolisyon", slug: "avolisyon" },
      { term: "Apati", slug: "apati" },
      { term: "Dezorganize davranış", slug: "dezorganize-davranis" }
    ]
  }],

  ["nuks", {
    shortDefinition: "Nüks, bir hastalık veya bozukluğun belirtileri belirgin biçimde azaldıktan ya da kontrol altına alındıktan sonra aynı klinik tablonun yeniden ortaya çıkmasını ifade eden genel bir tıbbi terimdir.",
    intro: "Psikiyatride nüks kavramı depresif, bipolar, psikotik veya madde kullanım bozuklukları gibi birçok durumda kullanılabilir. Terimin tam anlamı hastalığın doğal seyri ve kullanılan klinik tanıma göre değişebilir.",
    sections: [
      section("Nüks Ne Anlama Gelir?", "Kişinin belirtileri belirgin biçimde geriledikten sonra aynı bozukluğa ait belirtilerin yeniden güçlenmesi nüks olarak adlandırılabilir. Bu durum önceki düzelmenin başarısız olduğu anlamına gelmez; birçok hastalık zaman içinde dalgalı seyredebilir."),
      section("Nüks ile Yeni Bir Hastalık Aynı Şey midir?", "Hayır. Nüks önceki klinik tablonun yeniden belirginleşmesini anlatır. Yeni başlayan farklı belirtiler ise başka bir durumun göstergesi olabilir. Bu nedenle belirtilerin önceki dönemlerle benzerliği ve zaman içindeki seyri önemlidir."),
      section("Erken Belirtiler Neden Önemlidir?", "Bazı kişilerde uyku düzeninde bozulma, sosyal geri çekilme, işlevsellikte düşme veya daha önceki döneme benzeyen ruhsal değişiklikler nüksten önce ortaya çıkabilir. Kişinin kendi erken uyarı işaretlerini tanıması klinik takip açısından yararlı olabilir."),
      section("Nüks Riski Tek Bir Nedene Bağlanabilir mi?", "Hayır. Hastalığın özellikleri, stres, uyku düzeni, madde kullanımı, tedaviye devamlılık, fiziksel sağlık ve sosyal koşullar gibi birçok etken seyri etkileyebilir. Risk değerlendirmesi kişiye özgü yapılır ve tek bir etkene indirgenmez.")
    ],
    relatedTerms: [
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" },
      { term: "Bipolar I bozukluk", slug: "bipolar-1-bozukluk" },
      { term: "Psikoz", slug: "psikoz" },
      { term: "Bağımlılık", slug: "bagimlilik" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ]
  }],

  ["obsesif-kompulsif-bozukluk", {
    shortDefinition: "Obsesif kompulsif bozukluk, istem dışı ve tekrarlayıcı obsesyonlar ile bunların yarattığı sıkıntıyı azaltmak veya korkulan sonucu önlemek amacıyla yapılan kompulsiyonların görülebildiği bir psikiyatrik bozukluktur.",
    intro: "Obsesyonlar yalnızca çok düşünmek, kompulsiyonlar ise yalnızca alışkanlık sahibi olmak anlamına gelmez. Klinik önem, belirtilerin zaman alması, yoğun sıkıntı yaratması veya günlük işlevselliği etkilemesiyle artar.",
    sections: [
      section("Obsesyon Nedir?", "Obsesyonlar kişinin istemediği halde tekrar tekrar zihnine gelen düşünce, dürtü veya zihinsel görüntüler olabilir. Kişi bunları rahatsız edici bulabilir ve çoğu zaman düşüncelerin kendi değerleriyle uyumsuz olduğunu fark eder."),
      section("Kompulsiyon Nedir?", "Kompulsiyon, obsesyonun yarattığı kaygıyı azaltmak veya korkulan bir sonucu önlemek amacıyla tekrarlanan davranış ya da zihinsel eylemdir. Kısa süreli rahatlama sağlasa da bu rahatlama davranışın tekrar edilmesini güçlendirebilir."),
      section("Titiz veya Düzenli Olmak OKB midir?", "Hayır. Düzenli, kontrollü veya titiz olmak tek başına obsesif kompulsif bozukluk anlamına gelmez. OKB'de kişinin istemediği düşünceler ve bunlarla ilişkili ritüeller belirgin zaman kaybına veya sıkıntıya yol açabilir."),
      section("Güvence Arama OKB ile İlişkili Olabilir mi?", "Evet. Bazı kişiler kuşkularını azaltmak amacıyla çevresinden tekrar tekrar güvence isteyebilir. Bu davranış kompulsif döngünün bir parçası haline gelebilir. Klinik değerlendirmede obsesyonun içeriğinden çok düşünce ve davranış arasındaki işlevsel ilişki önemlidir.")
    ],
    relatedTerms: [
      { term: "Güvence arama", slug: "guvence-arama" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi" },
      { term: "Dürtü kontrolü", slug: "durtu-kontrolu" },
      { term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" }
    ]
  }],

  ["okul-reddi", {
    shortDefinition: "Okul reddi, bir çocuk veya ergenin yoğun duygusal sıkıntı nedeniyle okula gitmekte belirgin güçlük yaşaması veya okuldan kaçınmasıyla tanımlanan davranışsal bir durumdur.",
    intro: "Okul reddi başlı başına bir psikiyatrik tanı değildir. Ayrılma kaygısı, sosyal anksiyete, zorbalık, akademik güçlükler, depresif belirtiler veya başka okul ve aile etkenleriyle ilişkili olabilir.",
    sections: [
      section("Okul Reddi Nasıl Görülebilir?", "Çocuk sabahları yoğun kaygı yaşayabilir, okula gitmemek için direnebilir veya okul saatlerinde baş ve karın ağrısı gibi bedensel yakınmalar bildirebilir. Evde kalmasına izin verildiğinde sıkıntının hızla azalması bazı vakalarda görülebilir."),
      section("Okul Reddi ile Okuldan Kaçma Aynı Şey midir?", "Her zaman değil. Okul reddinde çoğunlukla okula gitme düşüncesi belirgin kaygı veya duygusal sıkıntıyla ilişkilidir ve aile genellikle durumun farkındadır. Başka nedenlerle okuldan izinsiz uzaklaşma farklı bir davranış örüntüsü olabilir."),
      section("Hangi Etkenler Araştırılır?", "Ayrılma kaygısı, akran ilişkileri, zorbalık, sosyal değerlendirilme korkusu, öğrenme güçlükleri, öğretmen veya okul ortamıyla ilgili sorunlar ve aile içindeki değişiklikler değerlendirilir. Tek bir neden varsayılmamalıdır."),
      section("Neden Erken Değerlendirme Önemlidir?", "Okuldan uzak kalma süresi uzadıkça geri dönüş daha zor hale gelebilir ve akademik, sosyal ve ailevi sorunlar artabilir. Yaklaşımda yalnız çocuğun kaygısı değil, aile ve okul sistemiyle birlikte işlevsel bir geri dönüş planı oluşturulması önemlidir.")
    ],
    relatedTerms: [
      { term: "Ergen anksiyetesi", slug: "ergen-anksiyetesi" },
      { term: "Ayrılma kaygısı", slug: "ayrilma-kaygisi" },
      { term: "Sosyal anksiyete bozukluğu", slug: "sosyal-anksiyete-bozuklugu" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" }
    ]
  }],

  ["otizm-spektrum-bozuklugu", {
    shortDefinition: "Otizm spektrum bozukluğu, sosyal iletişim ve etkileşimde farklılıklar ile sınırlı veya tekrarlayıcı davranış, ilgi ve duyusal özelliklerin gelişimsel olarak görülebildiği nörogelişimsel bir durumdur.",
    intro: "Otizm tek tip bir görünüm oluşturmaz. Dil, bilişsel kapasite, duyusal özellikler, günlük yaşam becerileri ve destek gereksinimleri kişiden kişiye önemli ölçüde değişebilir.",
    sections: [
      section("Sosyal İletişim Alanında Hangi Farklılıklar Görülebilir?", "Karşılıklı konuşmayı sürdürme, sözel olmayan ipuçlarını yorumlama, sosyal bağlama göre iletişimi ayarlama veya ilişkiler kurma biçimlerinde farklılıklar görülebilir. Bu özelliklerin görünümü yaşa, dil düzeyine ve kişinin çevresel koşullarına göre değişebilir."),
      section("Tekrarlayıcı Davranış ve İlgi Alanları Ne Anlama Gelir?", "Belirli rutinlere güçlü ihtiyaç, değişikliklere karşı zorlanma, yoğun ve odaklanmış ilgi alanları veya tekrarlayıcı hareketler görülebilir. Bu davranışların bazıları kişiye düzen, öngörülebilirlik veya duyusal rahatlama sağlayabilir."),
      section("Duyusal Hassasiyet Otizmle İlişkili Olabilir mi?", "Evet. Ses, ışık, dokunma, koku veya başka duyusal uyaranlara karşı artmış ya da azalmış tepkiler görülebilir. Ancak duyusal hassasiyet yalnızca otizme özgü değildir ve tek başına tanı anlamına gelmez."),
      section("Otizm Sonradan Edinilen Bir Hastalık mıdır?", "Otizm nörogelişimsel bir durumdur ve özellikleri gelişimin erken dönemlerinden itibaren bulunur; ancak talepler arttıkça veya kişinin telafi yöntemleri yetersiz kaldıkça daha ileri yaşlarda fark edilebilir. Değerlendirmede gelişim öyküsü ve kişinin güçlü yönleri de dikkate alınır.")
    ],
    relatedTerms: [
      { term: "Duyusal hassasiyet", slug: "duyusal-hassasiyet" },
      { term: "Dikkat", slug: "dikkat" },
      { term: "DEHB", slug: "dehb" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ]
  }],

  ["katastrofizasyon", {
    shortDefinition: "Katastrofizasyon, bir durumun olası sonuçlarını gerçekçi kanıtların ötesinde çok kötü, dayanılmaz veya felaket düzeyinde yorumlama eğilimini ifade eden bir bilişsel çarpıtmadır.",
    intro: "Katastrofizasyon sırasında kişi belirsiz veya zorlayıcı bir olayın en olumsuz sonucuna odaklanabilir ve bu sonucun gerçekleşme ihtimalini olduğundan daha yüksek değerlendirebilir.",
    sections: [
      section("Katastrofizasyon Nasıl Görülebilir?", "Kişi küçük bir hatanın tüm kariyerini bozacağını, geçici bir bedensel belirtinin ciddi bir hastalık anlamına geldiğini veya sosyal bir yanlış anlaşılmanın ilişkisini tamamen bitireceğini düşünebilir. Burada dikkat çeken nokta, sonucun eldeki kanıtlardan daha kesin ve ağır biçimde yorumlanmasıdır."),
      section("Gerçekçi Kaygı ile Katastrofizasyon Arasındaki Fark Nedir?", "Gerçekçi kaygıda olası riskler mevcut bilgilerle orantılı biçimde değerlendirilir. Katastrofizasyonda ise en kötü senaryo zihinsel olarak büyütülebilir ve diğer olasılıklar geri planda kalabilir. Bir riskin gerçekten var olması, onun kaçınılmaz olduğu anlamına gelmez."),
      section("Katastrofizasyon Duyguları Nasıl Etkileyebilir?", "En kötü senaryoya odaklanmak kaygı, çaresizlik veya kaçınma davranışlarını artırabilir. Kişi tehdit düzeyini yüksek algıladıkça bedensel uyarılmışlık da artabilir ve bu durum düşüncenin daha inandırıcı hissedilmesine yol açabilir."),
      section("Bilişsel Değerlendirmede Ne Yapılır?", "Amaç kişiyi zorla olumlu düşünmeye yöneltmek değildir. Düşüncenin hangi kanıtlara dayandığı, alternatif açıklamaların bulunup bulunmadığı ve en olası sonuç ile en kötü olası sonucun birbirinden nasıl ayrıldığı incelenebilir.")
    ],
    relatedTerms: [
      { term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" },
      { term: "Aşırı genelleme", slug: "asiri-genelleme" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi" }
    ]
  }],

  ["kaygili-baglanma", {
    shortDefinition: "Kaygılı bağlanma, yakın ilişkilerde terk edilme, reddedilme veya karşı tarafın ilgisini kaybetmesi konusunda belirgin hassasiyet ve yoğun güvence ihtiyacıyla ilişkilendirilen bir bağlanma örüntüsüdür.",
    intro: "Kaygılı bağlanma bir psikiyatrik tanı değildir. İlişkisel bir örüntüyü tanımlamak için kullanılır ve kişinin tüm ilişkilerini ya da kişiliğini tek başına açıklamaz.",
    sections: [
      section("Kaygılı Bağlanma Nasıl Görülebilir?", "Kişi partnerinin veya yakın olduğu kişinin ilgisindeki küçük değişiklikleri reddedilme işareti olarak yorumlayabilir, sık sık ilişkinin güvende olduğuna dair onay isteyebilir veya ayrılık olasılığı karşısında yoğun kaygı yaşayabilir."),
      section("Güvence Arama ile İlişkisi Nedir?", "Kaygılı bağlanma örüntüsünde kişi ilişkideki belirsizliği azaltmak amacıyla sık sık güvence isteyebilir. Bu davranış kısa süre rahatlama sağlasa da belirsizlik yeniden ortaya çıktığında tekrar güvence arama ihtiyacı doğabilir."),
      section("Kaygılı Bağlanma Nasıl Gelişebilir?", "Bağlanma kuramında bakım verenin ulaşılabilirliğinin veya duygusal yanıtlarının tutarsız yaşanması olası etkenlerden biri olarak ele alınır. Bununla birlikte yetişkin bağlanma biçimini tek bir çocukluk olayıyla açıklamak doğru değildir."),
      section("Bağlanma Örüntüsü Değişebilir mi?", "Evet. Güvenli ve tutarlı ilişkiler, kişinin kendi duygusal ihtiyaçlarını fark etmesi ve ilişkisel deneyimlerini yeniden değerlendirmesi daha dengeli bağlanma biçimlerinin gelişmesine katkıda bulunabilir. Kişinin belirsizliği tolere etme ve ihtiyaçlarını daha doğrudan ifade etme becerileri de zaman içinde gelişebilir.")
    ],
    relatedTerms: [
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Ayrılma kaygısı", slug: "ayrilma-kaygisi" },
      { term: "Güvence arama", slug: "guvence-arama" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Anksiyete", slug: "anksiyete" }
    ]
  }],

  ["kendine-zarar-verme", {
    shortDefinition: "Kendine zarar verme, kişinin yaşamına son verme amacı olmaksızın kendi bedenine zarar veren davranışlarda bulunmasını ifade eden klinik bir kavramdır.",
    intro: "Kendine zarar verme davranışı farklı nedenlerle ortaya çıkabilir ve kişinin yaşadığı yoğun duygusal sıkıntının önemli bir işareti olabilir. Davranışın varlığı mutlaka intihar amacı olduğu anlamına gelmese de güvenlik açısından dikkatle değerlendirilmelidir.",
    sections: [
      section("Kendine Zarar Verme Hangi İşlevlerle İlişkili Olabilir?", "Bazı kişiler yoğun duygusal gerilimi azaltmak, hissizliği sona erdirmek veya ifade etmekte zorlandığı bir sıkıntıyı dışa vurmak amacıyla kendine zarar verme davranışı gösterebilir. Aynı davranış farklı kişilerde farklı psikolojik işlevlere sahip olabilir."),
      section("Kendine Zarar Verme ile İntihar Davranışı Aynı Şey midir?", "Hayır. Kendine zarar verme her zaman yaşamı sonlandırma amacı taşımaz. Ancak bu iki durum birbirinden tamamen bağımsız da değildir ve kendine zarar verme öyküsü bulunan kişilerde intihar düşünceleri veya başka güvenlik riskleri ayrıca değerlendirilmelidir."),
      section("Davranışı Gizlemek Neden Sık Görülebilir?", "Utanç, suçluluk, anlaşılmama korkusu veya çevrenin tepkisinden çekinme nedeniyle kişi yaşadığı güçlüğü gizleyebilir. Yargılayıcı olmayan bir yaklaşım, davranışın altında hangi duygusal ihtiyaçların veya krizlerin bulunduğunu anlamayı kolaylaştırabilir."),
      section("Ne Zaman Acil Değerlendirme Gerekir?", "Kişinin yaşamına son verme düşünceleri, kendisini güvende tutamayacağı hissi veya hızla artan bir kriz varsa gecikmeden acil profesyonel değerlendirme gerekir. Klinik yaklaşımda yalnız davranışın kendisi değil, kişinin mevcut güvenliği, destek kaynakları ve eşlik eden ruhsal belirtiler birlikte ele alınır.")
    ],
    relatedTerms: [
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Borderline kişilik örüntüsü", slug: "borderline-kisilik-oruntusu" },
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Dürtü kontrolü", slug: "durtu-kontrolu" }
    ]
  }],

  ["kisa-psikotik-bozukluk", {
    shortDefinition: "Kısa psikotik bozukluk, sanrı, varsanı veya belirgin dezorganize konuşma ve davranış gibi psikotik belirtilerin kısa süreli olarak ortaya çıktığı bir psikiyatrik bozukluktur.",
    intro: "Kısa psikotik bozukluk tanısı yalnızca tek bir sıra dışı yaşantıya dayanmaz. Belirtilerin niteliği, başlangıç biçimi, süresi ve kişinin önceki işlev düzeyine dönüşü değerlendirilir.",
    sections: [
      section("Hangi Belirtiler Görülebilir?", "Kişide gerçeğe uymayan güçlü inanışlar, dış uyaran olmadan algı yaşantıları veya düşünce ve davranışlarda belirgin organizasyon bozukluğu görülebilir. Belirtiler kişinin gerçekliği değerlendirmesini ve günlük işlevlerini belirgin biçimde etkileyebilir."),
      section("Kısa Psikotik Bozukluğun Ayırıcı Özelliği Nedir?", "Temel özellik psikotik belirtilerin sınırlı bir zaman diliminde ortaya çıkması ve daha sonra kişinin önceki işlev düzeyine dönmesidir. Daha uzun süren psikotik tablolar farklı tanısal kategoriler içinde değerlendirilir."),
      section("Stresle İlişkili Olabilir mi?", "Bazı vakalarda ciddi bir psikososyal stres etkeninin ardından psikotik belirtiler gelişebilir ancak her olguda belirgin bir stresör bulunmaz. Doğum sonrası dönem gibi bazı özel bağlamlar da klinik değerlendirmede dikkate alınır."),
      section("Neden Tıbbi Değerlendirme de Önemlidir?", "Yeni başlayan psikotik belirtilerde madde etkileri, ilaçlar, nörolojik hastalıklar ve başka tıbbi nedenler de göz önünde bulundurulmalıdır. Özellikle bilinç veya dikkat değişikliği eşlik ediyorsa yalnızca psikiyatrik bir neden varsayılmamalıdır.")
    ],
    relatedTerms: [
      { term: "Psikoz", slug: "psikoz" },
      { term: "Mani", slug: "mani" },
      { term: "Algı bozukluğu", slug: "algi-bozuklugu" },
      { term: "Dezorganize davranış", slug: "dezorganize-davranis" },
      { term: "Bilinç bulanıklığı", slug: "bilinc-bulanikligi" }
    ]
  }],

  ["kisilestirme", {
    shortDefinition: "Kişiselleştirme, kişinin kendisiyle doğrudan ilişkili olduğuna dair yeterli kanıt bulunmayan olumsuz olayları gereğinden fazla kendi sorumluluğu veya kendi davranışlarının sonucu olarak yorumlamasıdır.",
    intro: "Kişiselleştirme bilişsel çarpıtmalardan biridir. Kişi çevresindeki olayları değerlendirirken kendi payını olduğundan büyük görebilir ve başka açıklamaları gözden kaçırabilir.",
    sections: [
      section("Kişiselleştirme Nasıl Görülebilir?", "Bir arkadaşının sessiz olmasını kendi yaptığı bir hataya bağlamak, bir toplantının kötü geçmesinden kendisini tamamen sorumlu tutmak veya başka insanların duygularını kendi davranışlarının doğrudan sonucu gibi değerlendirmek örnek olabilir."),
      section("Sorumluluk Almak ile Kişiselleştirme Aynı Şey midir?", "Hayır. Gerçekten katkımız bulunan bir olayda sorumluluk almak sağlıklıdır. Kişiselleştirmede ise kişinin etkisi sınırlı veya belirsiz olduğu halde sorumluluk orantısız biçimde üstlenilir ve dış etkenler yeterince dikkate alınmaz."),
      section("Kişiselleştirme Hangi Duygularla İlişkili Olabilir?", "Suçluluk, utanç, kaygı veya yetersizlik duyguları bu düşünce biçimiyle birlikte görülebilir. Kişi kendisini sürekli sorunların kaynağı olarak değerlendirdiğinde sosyal ilişkilerde geri çekilme veya aşırı telafi çabaları ortaya çıkabilir."),
      section("Düşünce Nasıl Yeniden Değerlendirilebilir?", "Olay üzerindeki gerçek etki payı, başka kişilerin veya koşulların rolü ve eldeki somut kanıtlar gözden geçirilebilir. Amaç sorumluluğu tamamen reddetmek değil, kişinin payını gerçekçi ve orantılı biçimde değerlendirmektir. Özellikle otomatik olarak kendini suçlama eğilimi varsa alternatif açıklamaların bilinçli biçimde incelenmesi yararlı olabilir.")
    ],
    relatedTerms: [
      { term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" },
      { term: "Aşırı genelleme", slug: "asiri-genelleme" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi" }
    ]
  }],

  ["kisilik-bozuklugu", {
    shortDefinition: "Kişilik bozukluğu, kişinin düşünme, duygulanım, ilişkiler ve dürtü kontrolü gibi alanlarında uzun süreli, esnekliği sınırlı ve günlük işlevselliği etkileyen örüntülerin bulunduğu durumları ifade eden genel bir tanısal kavramdır.",
    intro: "Kişilik bozukluğu bir kişinin karakterinin kötü olduğu anlamına gelmez. Klinik kullanımda kişinin uzun süredir devam eden ilişki kurma, kendini değerlendirme ve davranış örüntülerinin yaşamında belirgin güçlük oluşturması ele alınır.",
    sections: [
      section("Kişilik Örüntüsü Ne Zaman Klinik Önem Taşır?", "Bir özellik yalnızca belirgin veya sıra dışı olduğu için bozukluk olarak değerlendirilmez. Örüntünün farklı durumlarda tekrarlaması, esnekliğinin sınırlı olması ve ilişkiler, iş yaşamı veya kişinin kendi ruhsal iyilik hali üzerinde kalıcı güçlük yaratması önemlidir."),
      section("Kişilik Bozuklukları Tek Bir Tür müdür?", "Hayır. Farklı kişilik bozukluğu örüntüleri vardır ve bunlarda kişilerarası ilişkiler, benlik algısı, duygusal düzenleme veya dürtü kontrolü farklı biçimlerde etkilenebilir. Aynı tanı kategorisindeki kişilerde bile belirtiler ve işlevsellik önemli ölçüde değişebilir."),
      section("Kişilik Özelliği ile Kişilik Bozukluğu Arasındaki Fark Nedir?", "Herkeste farklı kişilik özellikleri bulunur. Bir özelliğin klinik önem taşıması için yalnız var olması değil, aşırı katı hale gelmesi, kişinin koşullara uyumunu zorlaştırması ve uzun süreli işlev kaybıyla ilişkili olması gerekir."),
      section("Kişilik Örüntüleri Değişebilir mi?", "Evet. Kişilik özellikleri görece kalıcı olsa da yaşam deneyimleri, ilişkiler ve psikolojik yaklaşımlar kişinin düşünme ve ilişki kurma biçimlerinde değişime katkıda bulunabilir. Tanı kişiyi değişmez biçimde tanımlayan bir etiket olarak kullanılmamalıdır.")
    ],
    relatedTerms: [
      { term: "Borderline kişilik örüntüsü", slug: "borderline-kisilik-oruntusu" },
      { term: "Kaçıngan kişilik örüntüsü", slug: "kacingan-kisilik-oruntusu" },
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" }
    ]
  }],

  ["komorbidite", {
    shortDefinition: "Komorbidite, aynı kişide aynı zaman diliminde veya yaşamın belirli dönemlerinde birden fazla hastalık ya da bozukluğun birlikte bulunmasını ifade eden tıbbi ve psikiyatrik bir terimdir.",
    intro: "Psikiyatride bir kişinin birden fazla tanı ölçütünü karşılaması nadir değildir. Komorbidite, belirtilerin daha dikkatli değerlendirilmesini ve tedavi planının bütüncül biçimde ele alınmasını gerektirebilir.",
    sections: [
      section("Komorbiditeye Bir Örnek Nedir?", "Bir kişide depresif bozukluk ile anksiyete bozukluğunun birlikte bulunması veya DEHB'ye ek olarak başka bir ruhsal bozukluğun eşlik etmesi komorbidite olarak tanımlanabilir. Her tanı kendi ölçütleri üzerinden ayrı ayrı değerlendirilir."),
      section("Belirti Örtüşmesi Komorbidite ile Aynı Şey midir?", "Hayır. İki farklı bozuklukta benzer belirtilerin bulunması mutlaka iki ayrı tanı olduğu anlamına gelmez. Örneğin dikkat güçlüğü hem kaygı hem depresyon hem de DEHB'de görülebilir. Bu nedenle belirtilerin kaynağı ve zaman içindeki seyri önemlidir."),
      section("Komorbidite Neden Klinik Olarak Önemlidir?", "Birlikte bulunan durumlar belirtilerin şiddetini, işlevselliği ve kişinin yardım ihtiyacını etkileyebilir. Ayrıca bir bozukluğun belirtileri diğerinin değerlendirilmesini güçleştirebilir veya klinik görünümü değiştirebilir."),
      section("Değerlendirmede Nasıl Ele Alınır?", "Kişinin tüm belirtileri tek bir tanıyla açıklanmaya çalışılmaz. Belirtilerin ne zaman başladığı, birbirleriyle ilişkisi, işlevsellik üzerindeki etkisi ve tıbbi ya da maddeyle ilişkili başka etkenler ayrı ayrı değerlendirilir. Birlikte bulunan durumların hangisinin mevcut yakınmaları daha fazla etkilediği de klinik planlamada dikkate alınır.")
    ],
    relatedTerms: [
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" },
      { term: "DEHB", slug: "dehb" },
      { term: "Bağımlılık", slug: "bagimlilik" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ]
  }],

  ["konfuzyon", {
    shortDefinition: "Konfüzyon, kişinin çevresini anlamlandırma, dikkatini sürdürme, yönelimini koruma veya bilgiyi tutarlı biçimde işleme yetisinde belirgin bozulma görülen genel bir klinik durumu ifade eder.",
    intro: "Konfüzyon tek başına belirli bir psikiyatrik tanı değildir. Özellikle ani başladığında altta yatan tıbbi, nörolojik veya maddeyle ilişkili nedenlerin değerlendirilmesi önemlidir.",
    sections: [
      section("Konfüzyon Nasıl Görülebilir?", "Kişi bulunduğu yeri, zamanı veya durumu anlamakta zorlanabilir, sorulara tutarsız yanıt verebilir veya dikkatini konuşma üzerinde sürdüremeyebilir. Yakın zamanda olanları hatırlamakta güçlük ve çevresel uyaranları yanlış yorumlama da eşlik edebilir."),
      section("Konfüzyon ile Unutkanlık Aynı Şey midir?", "Hayır. Unutkanlık daha sınırlı bir bellek güçlüğünü ifade edebilirken konfüzyonda dikkat, yönelim ve çevreyi anlamlandırma gibi birden fazla bilişsel alan etkilenebilir. Kişinin genel zihinsel organizasyonu belirgin biçimde bozulabilir."),
      section("Konfüzyon Psikoz ile Aynı Şey midir?", "Hayır. Psikozda sanrı veya varsanı gibi gerçekliği değerlendirme sorunları ön planda olabilir ancak bilinç ve dikkat her zaman bozulmaz. Konfüzyonda ise özellikle dikkat ve yönelim sorunları daha belirgin olabilir."),
      section("Ani Konfüzyon Neden Önemlidir?", "Saatler veya günler içinde gelişen yeni konfüzyon tıbbi açıdan önemli bir bulgudur. Enfeksiyonlar, metabolik sorunlar, ilaç veya madde etkileri ve nörolojik durumlar gibi birçok neden araştırılabilir. Bu nedenle akut konfüzyon gecikmeden tıbbi değerlendirme gerektirir.")
    ],
    relatedTerms: [
      { term: "Bilinç bulanıklığı", slug: "bilinc-bulanikligi" },
      { term: "Dikkat", slug: "dikkat" },
      { term: "Amnezi", slug: "amnezi" },
      { term: "Algı bozukluğu", slug: "algi-bozuklugu" }
    ]
  }],

  ["kumar-oynama-bozuklugu", {
    shortDefinition: "Kumar oynama bozukluğu, kumar davranışını kontrol etmekte güçlük, olumsuz sonuçlara rağmen davranışın sürmesi ve kumarın yaşamda giderek daha merkezi hale gelmesiyle karakterize davranışsal bir bağımlılık tablosudur.",
    intro: "Ara sıra kumar oynamak tek başına kumar oynama bozukluğu anlamına gelmez. Klinik önem, davranış üzerindeki kontrolün azalması ve ekonomik, ilişkisel veya mesleki sonuçlara rağmen davranışın sürmesiyle artar.",
    sections: [
      section("Sorunlu Kumar Davranışı Nasıl Görülebilir?", "Kişi kumara ayırdığı zamanı ve kaynakları kontrol etmekte zorlanabilir, kayıpların ardından tekrar oynama isteği yaşayabilir veya kumar nedeniyle sorumluluklarını ihmal edebilir. Davranış zamanla kişinin düşüncelerinde daha fazla yer kaplayabilir."),
      section("Kayıpları Geri Kazanma Çabası Neden Önemlidir?", "Kişi kaybettiği kaynakları yeniden kazanabileceği düşüncesiyle kumar davranışını sürdürebilir. Bu durum kayıpların artmasına ve kontrolün daha da azalmasına yol açabilen bir döngü oluşturabilir."),
      section("Kumar Oynama Bozukluğu İrade Eksikliği midir?", "Hayır. Bağımlılık davranışlarında ödül beklentisi, dürtüsellik, öğrenilmiş davranış döngüleri ve ruhsal etkenler rol oynayabilir. Kişiyi ahlaki açıdan yargılamak yerine davranış üzerindeki kontrol kaybı ve işlevsel sonuçlar değerlendirilir."),
      section("Hangi Alanlar Değerlendirilir?", "Kumar davranışının sıklığı, ekonomik etkileri, aile ve iş yaşamına yansımaları, kişinin davranışı azaltma girişimleri ve eşlik eden ruhsal sorunlar ele alınır. Borçlanma veya ciddi işlev kaybı varsa sosyal ve psikolojik destek gereksinimi de değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Bağımlılık", slug: "bagimlilik" },
      { term: "Dürtü kontrolü", slug: "durtu-kontrolu" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Duygudurum", slug: "duygudurum" }
    ]
  }],

  ["kunt-duygulanim", {
    shortDefinition: "Künt duygulanım, kişinin dışarıdan gözlenen duygusal ifade ve tepkilerinin belirgin biçimde azalmış görünmesini ifade eden klinik bir terimdir.",
    intro: "Künt duygulanım kişinin hiçbir duygu yaşamadığı anlamına gelmez. Terim, görüşme sırasında yüz ifadesi, ses tonu, jestler ve duygusal tepkilerin dışarıdan gözlenen yoğunluğunu tanımlar.",
    sections: [
      section("Künt Duygulanım Nasıl Fark Edilebilir?", "Kişinin yüz ifadesi sınırlı olabilir, konuşurken ses tonunda az değişiklik görülebilir ve duygusal içerikli konulara verilen görünür tepkiler beklenenden daha düşük olabilir. Bu değerlendirme kişinin kültürel ve kişisel ifade biçimi dikkate alınarak yapılmalıdır."),
      section("Künt Duygulanım ile Çökkün Duygudurum Aynı Şey midir?", "Hayır. Duygudurum kişinin içsel ve daha uzun süreli duygusal yaşantısını ifade ederken duygulanım dışarıdan gözlenen duygusal ifadedir. Bir kişi kendisini yoğun biçimde üzgün hissederken bunu dışarıdan sınırlı gösterebilir."),
      section("Künt Duygulanım Hangi Durumlarda Görülebilir?", "Bazı psikotik bozukluklarda, depresif durumlarda, nörolojik hastalıklarda veya ilaç etkileriyle birlikte duygusal ifade azalabilir. Tek başına künt duygulanım belirli bir tanı koydurmaz."),
      section("Değerlendirmede Neye Dikkat Edilir?", "Kişinin olağan duygusal ifade biçimi, kültürel özellikleri, konuşmanın içeriği ve eşlik eden diğer belirtiler birlikte değerlendirilir. Amaç kişiyi duygusuz olarak etiketlemek değil, gözlenen duygusal ifadenin klinik bağlamını anlamaktır. Duygusal ifadedeki değişikliğin yeni mi olduğu yoksa kişinin uzun süredir var olan ifade tarzını mı yansıttığı da önemlidir.")
    ],
    relatedTerms: [
      { term: "Affekt", slug: "affekt" },
      { term: "Duygudurum", slug: "duygudurum" },
      { term: "Psikoz", slug: "psikoz" },
      { term: "Dezorganize davranış", slug: "dezorganize-davranis" },
      { term: "Apati", slug: "apati" }
    ]
  }],

  ["insomnia", {
    shortDefinition: "İnsomnia, uyumak için yeterli fırsat bulunmasına rağmen uykuya dalmada, uykuyu sürdürmede veya istenenden erken uyanmada yaşanan güçlüğü ifade eden bir uyku sorunudur.",
    intro: "İnsomnia yalnızca az uyumak anlamına gelmez. Kişinin uykuya ilişkin güçlüklerinin gündüz işlevselliği, enerji, dikkat veya duygudurum üzerinde etkili olması klinik açıdan önemlidir.",
    sections: [
      section("İnsomnia Nasıl Görülebilir?", "Kişi yatağa girdikten sonra uzun süre uyuyamayabilir, gece boyunca sık sık uyanabilir veya sabah planladığından çok daha erken uyanıp yeniden uyuyamayabilir. Bazı kişiler yeterli süre yatakta kalmasına rağmen uykusunun dinlendirici olmadığını da ifade edebilir."),
      section("Her Uykusuz Gece İnsomnia mıdır?", "Hayır. Stres, seyahat, geçici hastalık, çevresel gürültü veya yaşam düzenindeki değişiklikler kısa süreli uyku güçlüklerine yol açabilir. Klinik değerlendirmede sorunun ne kadar süredir bulunduğu, ne sıklıkta yaşandığı ve gündüz yaşamını ne ölçüde etkilediği önemlidir."),
      section("Kaygı ve Duygudurum Uykuya Nasıl Etki Edebilir?", "Yoğun kaygı zihinsel uyarılmışlığı artırabilir ve kişinin uykuya geçişini zorlaştırabilir. Depresif veya başka duygudurum dönemlerinde de uyku süresi ve düzeni değişebilir. Bununla birlikte insomnia tek başına belirli bir psikiyatrik tanı göstermez."),
      section("Değerlendirmede Neler Ele Alınır?", "Uyku saatleri, yatakta geçirilen süre, gece uyanmaları, gündüz uykululuğu, kafein veya madde kullanımı, ilaçlar ve eşlik eden ruhsal ya da tıbbi belirtiler birlikte değerlendirilir. Gerektiğinde uyku günlüğü gibi yöntemlerle uyku örüntüsü daha ayrıntılı izlenebilir.")
    ],
    relatedTerms: [
      { term: "Hipersomnia", slug: "hipersomnia" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" },
      { term: "Duygudurum", slug: "duygudurum" },
      { term: "Kabus bozukluğu", slug: "kabus-bozuklugu" }
    ]
  }],

  ["islevsellik", {
    shortDefinition: "İşlevsellik, kişinin günlük yaşamındaki sorumluluklarını, ilişkilerini, özbakımını, eğitim veya iş yaşamını ne ölçüde sürdürebildiğini ifade eden genel bir klinik kavramdır.",
    intro: "Psikiyatrik değerlendirmede yalnızca belirtilerin varlığı değil, bu belirtilerin kişinin yaşamındaki etkisi de önemlidir. Aynı belirti iki kişide farklı düzeyde işlev kaybına yol açabilir.",
    sections: [
      section("İşlevsellik Hangi Alanları Kapsar?", "Kişinin işe veya okula devam edebilmesi, günlük sorumluluklarını yerine getirmesi, sosyal ilişkilerini sürdürebilmesi ve özbakımını koruyabilmesi işlevselliğin temel alanlarıdır. Ayrıca karar verme, planlama ve günlük rutinleri organize etme gibi bilişsel süreçler de etkili olabilir."),
      section("Belirti Şiddeti ile İşlev Kaybı Her Zaman Aynı mıdır?", "Hayır. Bazı kişiler belirgin belirtiler yaşamasına rağmen günlük sorumluluklarını büyük ölçüde sürdürebilirken, daha hafif görünen belirtiler başka bir kişide ciddi işlev kaybına yol açabilir. Sosyal destek, iş koşulları ve kişinin baş etme kaynakları bu farkta rol oynayabilir."),
      section("İşlevsellik Neden Tanısal Değerlendirmede Önemlidir?", "Birçok psikiyatrik durumda belirtilerin günlük yaşamı ne ölçüde etkilediği klinik önem açısından belirleyicidir. Bu nedenle yalnızca bir belirti listesi değil, kişinin yaşamındaki değişiklikler, sorumluluklarını sürdürme düzeyi ve önceki işlev düzeyiyle karşılaştırma da değerlendirilir."),
      section("İşlevsellik Zaman İçinde Değişebilir mi?", "Evet. Belirtilerin seyri, yaşam koşulları, sosyal destek, uyku, fiziksel sağlık ve uygulanan psikolojik veya tıbbi yaklaşımlar işlevselliği etkileyebilir. Değerlendirmede kişinin yalnızca güçlükleri değil, korunmuş becerileri ve destek kaynakları da dikkate alınır.")
    ],
    relatedTerms: [
      { term: "Duygudurum", slug: "duygudurum" },
      { term: "Dikkat", slug: "dikkat" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" },
      { term: "DEHB", slug: "dehb" }
    ]
  }],

  ["kabus-bozuklugu", {
    shortDefinition: "Kabus bozukluğu, genellikle tehdit, korku veya yoğun olumsuz duygular içeren, tekrarlayıcı ve ayrıntılı rüyaların uykuyu ve gündüz işlevselliğini belirgin biçimde etkilediği bir uyku bozukluğudur.",
    intro: "Ara sıra kabus görmek yaygındır ve tek başına bir bozukluk anlamına gelmez. Klinik açıdan kabusların tekrarlayıcı olması, kişiyi uykudan uyandırması ve uykuya veya gündüz yaşamına belirgin etkide bulunması önemlidir.",
    sections: [
      section("Kabuslar Nasıl Yaşanabilir?", "Kişi yoğun korku, tehdit veya çaresizlik içeren canlı rüyalar görebilir ve uyandığında rüyanın içeriğini ayrıntılı biçimde hatırlayabilir. Uyanma sonrasında yeniden uykuya dönmek zor olabilir ve kişi kabus göreceği düşüncesiyle uyumaktan kaçınmaya başlayabilir."),
      section("Her Kötü Rüya Kabus Bozukluğu mudur?", "Hayır. Stresli dönemlerde veya tek tük yaşanan olumsuz rüyalar sık görülebilir. Kabus bozukluğunda rüyalar tekrarlayıcı hale gelir ve uyku kalitesi, gündüz yorgunluğu, dikkat veya duygusal durum üzerinde belirgin bir etki oluşturur."),
      section("Kabuslar Travma ile İlişkili Olabilir mi?", "Travmatik yaşantılar sonrasında kabuslar görülebilir ve bazı kişilerde rüya içeriği travmayla doğrudan ilişkili olabilir. Ancak her kabus travma sonrası stres bozukluğuna işaret etmez. Klinik değerlendirmede başka travma belirtilerinin bulunup bulunmadığı da ele alınır."),
      section("Ne Zaman Değerlendirme Yararlı Olur?", "Kabuslar sıklaşıyor, kişinin uykuya gitmekten kaçınmasına yol açıyor veya gündüz işlevlerini belirgin biçimde etkiliyorsa değerlendirme yararlı olabilir. Kullanılan ilaçlar, madde kullanımı, diğer uyku sorunları ve eşlik eden ruhsal belirtiler de göz önünde bulundurulur.")
    ],
    relatedTerms: [
      { term: "İnsomnia", slug: "insomnia" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" }
    ]
  }],

  ["kacingan-baglanma", {
    shortDefinition: "Kaçıngan bağlanma, yakın ilişkilerde duygusal ihtiyaçları ifade etmekten, destek istemekten veya başkalarına bağımlı hissetmekten kaçınma eğilimiyle ilişkilendirilen bir bağlanma örüntüsüdür.",
    intro: "Kaçıngan bağlanma bir kişilik tanısı değildir ve kişiyi değişmez biçimde tanımlamaz. Bağlanma örüntüleri erken ilişkisel deneyimlerden etkilenebilse de yaşam boyunca yeni ilişkiler ve deneyimlerle değişebilir.",
    sections: [
      section("Kaçıngan Bağlanma Nasıl Görülebilir?", "Kişi yakınlık ihtiyacı hissetse bile duygusal destek istemekten kaçınabilir, sorunlarını tek başına çözmeye çalışabilir veya başkalarına ihtiyaç duyduğunu göstermeyi rahatsız edici bulabilir. İlişkilerde aşırı bağımsız görünme bazı kişilerde belirgin olabilir."),
      section("Yakınlıktan Kaçınmak İlişki İstememek midir?", "Hayır. Kaçıngan bağlanma örüntüsü olan kişiler de yakın ve anlamlı ilişkiler isteyebilir. Ancak yakınlık arttığında kırılganlık, kontrol kaybı veya başkasına ihtiyaç duyma hissi rahatsız edici olabilir ve kişi duygusal mesafe koyabilir."),
      section("Kaçıngan Bağlanma Nasıl Gelişebilir?", "Bağlanma kuramında erken dönemde bakım verenlerin duygusal ihtiyaçlara sınırlı yanıt vermesi veya çocuğun destek arayışının yeterince karşılanmaması olası etkenlerden biri olarak ele alınır. Bununla birlikte tek bir çocukluk deneyimi yetişkin bağlanma örüntüsünü kesin olarak belirlemez."),
      section("Bağlanma Örüntüsü Değişebilir mi?", "Evet. Bağlanma biçimleri yaşam boyu sabit değildir. Güvenli ilişkiler, kişinin kendi duygusal ihtiyaçlarını daha iyi tanıması ve psikolojik çalışmalar yeni ilişki deneyimlerinin gelişmesine katkıda bulunabilir. Bağlanma kavramı kişiyi etiketlemek için değil, ilişki örüntülerini anlamak için kullanılmalıdır.")
    ],
    relatedTerms: [
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Ayrılma kaygısı", slug: "ayrilma-kaygisi" },
      { term: "Duygusal ihmal", slug: "duygusal-ihmal" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Anksiyete", slug: "anksiyete" }
    ]
  }],

  ["kacingan-kisilik-oruntusu", {
    shortDefinition: "Kaçıngan kişilik örüntüsü, yetersizlik duyguları, olumsuz değerlendirilme konusunda belirgin hassasiyet ve kişilerarası ilişkilerde geri çekilme eğiliminin süreklilik gösterdiği bir kişilik örüntüsünü ifade eder.",
    intro: "Kaçıngan kişilik örüntüsü yalnızca utangaçlık veya içe dönüklük anlamına gelmez. Klinik değerlendirmede örüntünün uzun süredir bulunması, farklı yaşam alanlarında görülmesi ve ilişkiler ya da günlük işlevsellik üzerinde belirgin etkisi olması önemlidir.",
    sections: [
      section("Kaçıngan Kişilik Örüntüsü Nasıl Görülebilir?", "Kişi eleştirileceği, reddedileceği veya küçük düşürüleceği düşüncesiyle yeni ilişkilerden ve sosyal ortamlardan kaçınabilir. Yakınlık kurmak istese bile kendisini yetersiz görmesi veya olumsuz değerlendirilme ihtimaline aşırı odaklanması ilişkileri sınırlayabilir."),
      section("Kaçıngan Örüntü ile Sosyal Anksiyete Aynı Şey midir?", "Hayır. İki durumda da sosyal değerlendirilme kaygısı ve kaçınma görülebilir ancak kaçıngan kişilik örüntüsü daha geniş ve süreklilik gösteren bir kişilerarası ve benlik algısı örüntüsünü ifade eder. Sosyal anksiyete ise belirli sosyal durumlara yönelik yoğun korku ve kaçınmayla daha belirgin olabilir."),
      section("İçe Dönüklük ile Farkı Nedir?", "İçe dönük kişiler daha az sosyal etkileşimi tercih edebilir ancak bu tercih mutlaka yetersizlik hissi veya reddedilme korkusundan kaynaklanmaz. Kaçıngan kişilik örüntüsünde kişi ilişki isteyebilir fakat eleştirilme veya reddedilme korkusu nedeniyle geri çekilebilir."),
      section("Kişilik Örüntüsü Değişmez Bir Özellik midir?", "Hayır. Kişilik örüntüleri uzun süreli olsa da tamamen değişmez değildir. Güvenli ilişkiler, yeni yaşam deneyimleri ve uygun psikolojik yaklaşımlar kişinin kendisiyle ve başkalarıyla ilişki kurma biçiminde değişiklik sağlayabilir. Değerlendirmede yalnız güçlükler değil, kişinin güçlü yönleri de ele alınır.")
    ],
    relatedTerms: [
      { term: "Sosyal anksiyete bozukluğu", slug: "sosyal-anksiyete-bozuklugu" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Duygusal ihmal", slug: "duygusal-ihmal" },
      { term: "Borderline kişilik örüntüsü", slug: "borderline-kisilik-oruntusu" }
    ]
  }],

  ["guvence-arama", {
    shortDefinition: "Güvence arama, kişinin belirsizlik veya kaygı karşısında başkalarından tekrar tekrar rahatlatıcı bilgi, onay ya da kesinlik istemesiyle görülebilen bir davranış örüntüsüdür.",
    intro: "Güvence istemek günlük yaşamın doğal bir parçasıdır. Klinik açıdan önemli olan, kişinin kısa süre rahatlamasına rağmen aynı kuşkunun yeniden ortaya çıkması ve güvence aramanın tekrarlayıcı hale gelmesidir.",
    sections: [
      section("Güvence Arama Günlük Yaşamda Nasıl Görülebilir?", "Kişi bir kararının doğru olup olmadığını tekrar tekrar sorabilir, bedensel bir belirti hakkında sürekli onay isteyebilir veya sosyal bir olayda yanlış bir şey yapıp yapmadığını başkalarına yeniden kontrol ettirebilir. İlk yanıt rahatlatıcı olsa da belirsizlik kısa süre sonra geri dönebilir."),
      section("Güvence Arama Neden Kaygıyı Sürdürebilir?", "Güvence kısa vadede kaygıyı azaltabilir ancak kişi kendi belirsizliğini tolere etmek yerine dışarıdan kesinlik aramaya alışabilir. Böylece aynı kuşku tekrar ortaya çıktığında yeniden güvence isteme ihtiyacı doğabilir ve davranış zamanla bir döngü haline gelebilir."),
      section("Her Onay İsteme Sorun mudur?", "Hayır. Önemli bir karar öncesinde fikir almak veya sağlıkla ilgili bir konuda bilgi istemek olağandır. Sorun, aynı konunun yeterli bilgiye rağmen tekrar tekrar sorulması, kişinin kendi kararlarına güvenememesi veya güvence aramanın günlük yaşamı belirgin biçimde meşgul etmesi durumunda daha görünür hale gelir."),
      section("Hangi Durumlarla Birlikte Görülebilir?", "Güvence arama anksiyete bozukluklarında, obsesif kompulsif belirtilerde ve sosyal değerlendirilme kaygısında görülebilir. Ancak tek başına belirli bir tanı göstermez. Değerlendirmede davranışın neyi azaltmaya çalıştığı ve kısa ve uzun vadede kişiyi nasıl etkilediği önemlidir.")
    ],
    relatedTerms: [
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Obsesif kompulsif bozukluk", slug: "obsesif-kompulsif-bozukluk" },
      { term: "Sosyal anksiyete bozukluğu", slug: "sosyal-anksiyete-bozuklugu" },
      { term: "Ayrılma kaygısı", slug: "ayrilma-kaygisi" },
      { term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi" }
    ]
  }],

  ["hiperaktivite", {
    shortDefinition: "Hiperaktivite, kişinin yaşına ve içinde bulunduğu ortama göre beklenenden fazla motor hareketlilik veya yerinde durmakta güçlük göstermesini ifade eden klinik bir belirtidir.",
    intro: "Hiperaktivite yalnızca hareketli veya enerjik olmak anlamına gelmez. Klinik değerlendirmede davranışın sürekliliği, farklı ortamlarda görülmesi ve kişinin günlük işlevlerini ne ölçüde etkilediği önemlidir.",
    sections: [
      section("Hiperaktivite Nasıl Görülebilir?", "Çocuklarda sık sık ayağa kalkma, koşma, tırmanma veya sessiz etkinliklerde zorlanma görülebilir. Yetişkinlerde ise sürekli bir iç huzursuzluk, uzun süre oturamama, sık hareket etme veya sürekli meşgul olma ihtiyacı daha belirgin olabilir."),
      section("Hareketli Olmak ile Hiperaktivite Aynı Şey midir?", "Hayır. Bazı kişiler doğal olarak daha hareketli ve enerjiktir. Hiperaktivite kavramı, hareketliliğin kişinin yaşına, gelişim düzeyine ve ortamın beklentilerine göre belirgin biçimde fazla olması ve eğitim, iş veya sosyal yaşamda güçlük oluşturması durumunda klinik anlam kazanır."),
      section("Hiperaktivite DEHB ile Nasıl İlişkilidir?", "Hiperaktivite DEHB'nin temel belirti alanlarından biridir ancak her DEHB'li kişide aynı yoğunlukta bulunmaz. Bazı kişilerde dikkatsizlik daha belirginken bazılarında hiperaktivite ve dürtüsellik ön planda olabilir. Belirtilerin gelişimsel öyküsü ve birden fazla ortamda görülmesi değerlendirmede önemlidir."),
      section("Başka Durumlarda da Hiperaktivite Görülebilir mi?", "Evet. Yoğun kaygı, bazı duygudurum dönemleri, uyku yetersizliği veya madde ve ilaç etkileri hareketliliği artırabilir. Bu nedenle yalnızca kişinin çok hareketli görünmesine bakılarak tanı konulmaz; belirtilerin başlangıcı, seyri ve eşlik eden diğer özellikler birlikte değerlendirilir.")
    ],
    relatedTerms: [
      { term: "DEHB", slug: "dehb" },
      { term: "Dikkat eksikliği", slug: "dikkat-eksikligi" },
      { term: "Dürtü kontrolü", slug: "durtu-kontrolu" },
      { term: "Dikkat", slug: "dikkat" }
    ]
  }],

  ["hipersomnia", {
    shortDefinition: "Hipersomnia, yeterli veya uzamış gece uykusuna rağmen gündüz aşırı uykululuk, uzun uyku süreleri ya da uyanmakta belirgin güçlük yaşanmasını ifade eden bir uyku belirtisidir.",
    intro: "Hipersomnia yalnızca ara sıra fazla uyumak anlamına gelmez. Klinik değerlendirmede gündüz uykululuğunun sürekliliği, gece uykusunun niteliği ve kişinin günlük işlevlerini nasıl etkilediği birlikte ele alınır.",
    sections: [
      section("Hipersomnia Günlük Yaşamda Nasıl Görülebilir?", "Kişi gece uzun süre uyumasına rağmen sabah uyanmakta zorlanabilir, gün içinde sık sık uyuklayabilir veya dikkatini sürdürmekte güçlük yaşayabilir. Aşırı uykululuk iş, okul, araç kullanma ve sosyal yaşam gibi alanlarda işlev kaybına yol açabilir."),
      section("Uzun Uyku Süresi Her Zaman Hipersomnia mıdır?", "Hayır. Yoğun fiziksel yorgunluk, uykusuz kalınan günlerin ardından telafi uykusu veya geçici hastalık dönemlerinde daha uzun uyumak olağan olabilir. Hipersomnia değerlendirmesinde durumun tekrarlayıcı olması ve kişinin gündüz işlevselliğini etkilemesi daha önemlidir."),
      section("Hipersomnia Hangi Durumlarla İlişkili Olabilir?", "Bazı uyku bozuklukları, depresif dönemler, nörolojik veya tıbbi hastalıklar ve kullanılan bazı ilaçlar gündüz aşırı uykululuğa yol açabilir. Uyku apnesi gibi gece uykusunun kalitesini bozan durumlarda kişi yeterince uzun uyuduğunu düşünse bile dinlenmemiş uyanabilir."),
      section("Değerlendirmede Neler İncelenir?", "Uyku saatleri, gece uyanmaları, horlama veya solunum sorunları, gündüz uyuklama ihtiyacı, kullanılan ilaçlar ve ruhsal belirtiler birlikte değerlendirilir. Gerektiğinde uyku günlüğü veya uyku tıbbına yönelik ileri incelemelerden yararlanılabilir.")
    ],
    relatedTerms: [
      { term: "İnsomnia", slug: "insomnia" },
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" },
      { term: "Çökkün duygudurum", slug: "cokkun-duygudurum" },
      { term: "Duygudurum", slug: "duygudurum" }
    ]
  }],

  ["illuzyon", {
    shortDefinition: "İllüzyon, dış dünyada gerçekten var olan bir uyaranın yanlış veya farklı biçimde algılanmasını ifade eden bir algı olayıdır.",
    intro: "İllüzyonda ortada gerçek bir uyaran bulunur ancak kişi bu uyaranı farklı yorumlar. Bu yönüyle, dışarıda karşılığı bulunmayan bir algı yaşantısını ifade eden varsanıdan ayrılır.",
    sections: [
      section("İllüzyona Basit Bir Örnek Nedir?", "Loş ışıkta asılı bir ceketin kısa süreliğine bir insan silueti sanılması veya uzaktaki bir sesin kişinin adının söylenmesi gibi algılanması illüzyona örnek olabilir. Dikkat yeniden yöneltildiğinde kişi çoğu zaman gerçek uyaranı doğru biçimde fark eder."),
      section("İllüzyon ile Varsanı Arasındaki Fark Nedir?", "İllüzyonda yanlış algılanan gerçek bir dış uyaran vardır. Varsanıda ise dışarıda karşılık gelen bir uyaran olmaksızın algı yaşantısı ortaya çıkar. Bu ayrım klinik değerlendirmede önemlidir ancak kişinin yaşantısı yalnızca bu tanımlardan biri üzerinden yorumlanmaz."),
      section("Sağlıklı Kişilerde İllüzyon Olabilir mi?", "Evet. Yorgunluk, karanlık, yoğun beklenti veya dikkatin sınırlı olduğu koşullarda herkes kısa süreli algı yanılmaları yaşayabilir. Tek bir illüzyon yaşantısı psikiyatrik bozukluk anlamına gelmez."),
      section("Ne Zaman Klinik Önem Taşır?", "Algı yanılmaları sıklaşıyor, bilinç veya dikkat değişikliğiyle birlikte ortaya çıkıyor ya da kişi çevresini değerlendirmekte belirgin güçlük yaşıyorsa tıbbi ve psikiyatrik değerlendirme gerekebilir. Özellikle akut bilinç değişikliklerinde altta yatan tıbbi nedenlerin araştırılması önemlidir.")
    ],
    relatedTerms: [
      { term: "Algı", slug: "algi" },
      { term: "Algı bozukluğu", slug: "algi-bozuklugu" },
      { term: "Psikoz", slug: "psikoz" },
      { term: "Bilinç bulanıklığı", slug: "bilinc-bulanikligi" }
    ]
  }],

  ["inkar", {
    shortDefinition: "İnkar, kişinin duygusal olarak zorlayıcı bir gerçekliğin, durumun veya yaşantının bazı yönlerini kabul etmekte güçlük yaşamasıyla ilişkili bir savunma mekanizmasıdır.",
    intro: "İnkar bilinçli olarak yalan söylemekle aynı şey değildir. Psikodinamik açıdan kişi, baş etmekte zorlandığı bir gerçeğin anlamını veya etkisini kısmen farkındalık dışında tutabilir.",
    sections: [
      section("İnkar Nasıl Görülebilir?", "Kişi açık belirtilere rağmen bir sorunun varlığını küçümseyebilir, olumsuz sonuçları önemsemeyebilir veya yaşanan bir değişikliğin kendisini etkilemediğini söyleyebilir. Bu tutum bazen yoğun kaygı, kayıp veya tehdit karşısında kısa süreli psikolojik korunma sağlayabilir."),
      section("İnkar ile Bilinçli Reddetme Aynı Şey midir?", "Hayır. Bilinçli reddetmede kişi gerçeği bilmesine rağmen çeşitli nedenlerle kabul etmediğini açıkça seçebilir. Savunma mekanizması olarak inkarda ise kişinin farkındalığı daha karmaşık olabilir ve durumun duygusal anlamı tam olarak işlenmeyebilir."),
      section("İnkar Her Zaman Zararlı mıdır?", "Kısa süreli inkâr, ağır bir haber veya ani kayıp karşısında kişinin duygusal olarak duruma uyum sağlamasına zaman tanıyabilir. Ancak sorun uzun süre kabul edilmediğinde gerekli yardımın gecikmesine, ilişkisel çatışmalara veya riskli davranışların sürmesine katkıda bulunabilir."),
      section("Bağımlılıkta İnkar Nasıl Ele Alınır?", "Madde veya davranışsal bağımlılık sorunlarında kişi kullanımın sonuçlarını küçümseyebilir ya da kontrolün tamamen kendisinde olduğunu düşünebilir. Bununla birlikte bu durum kişiyi suçlamak veya iradesiz olarak görmek için kullanılmamalıdır; değerlendirmede motivasyon, farkındalık ve değişime hazır oluş birlikte ele alınır.")
    ],
    relatedTerms: [
      { term: "Bastırma", slug: "bastirma" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Bağımlılık", slug: "bagimlilik" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" }
    ]
  }],

  ["duygusal-ihmal", {
    shortDefinition: "Duygusal ihmal, özellikle çocukluk döneminde kişinin duygusal ihtiyaçlarının bakım verenler tarafından yeterince fark edilmemesi, karşılanmaması veya düzenli biçimde göz ardı edilmesi durumunu anlatan bir kavramdır.",
    intro: "Duygusal ihmal her zaman açık kötü davranışlarla görünür hale gelmez. Çocuğun duygularının sürekli küçümsenmesi, destek aradığında karşılık bulamaması veya duygusal ihtiyaçlarının fark edilmemesi gibi daha sessiz örüntülerle de ortaya çıkabilir.",
    sections: [
      section("Duygusal İhmal Nasıl Görülebilir?", "Çocuğun üzüntü, korku, öfke veya sevinç gibi duygularına düzenli biçimde yanıt verilmemesi, duygularının önemsizleştirilmesi veya zorlandığı zamanlarda duygusal desteğin sınırlı olması buna örnek olabilir. Burada tek bir olaydan çok, ilişkinin süreklilik gösteren örüntüsü önemlidir."),
      section("Duygusal İhmal ile Fiziksel İhmal Aynı Şey midir?", "Hayır. Fiziksel ihmal beslenme, sağlık, güvenlik veya temel bakım ihtiyaçlarının yeterince karşılanmamasıyla ilişkilidir. Duygusal ihmalde ise kişinin görülme, anlaşılma, desteklenme ve duygularına karşılık verilme ihtiyacı ön plandadır. İki durum birlikte de görülebilir."),
      section("Yetişkinlikte Hangi Alanlarla İlişkili Olabilir?", "Çocuklukta duygusal ihtiyaçların sürekli karşılıksız kalması bazı kişilerde duygularını tanımakta zorlanma, yardım istemekten kaçınma, ilişkilerde yakınlık güçlükleri veya kendi ihtiyaçlarını önemsiz görme gibi örüntülerle ilişkili olabilir. Ancak bu özelliklerin varlığı geçmişte mutlaka ihmal yaşandığını kanıtlamaz."),
      section("Değerlendirmede Neden Yaşam Öyküsü Önemlidir?", "Duygusal ihmal geriye dönük olarak tek bir belirti üzerinden belirlenemez. Aile ilişkileri, gelişimsel dönem, bakım verenlerin koşulları ve kişinin yaşantısına verdiği anlam birlikte ele alınır. Amaç kişiyi veya ailesini basit biçimde suçlamak değil, geçmiş ilişkisel deneyimlerin bugünkü işlevlerle olası bağlantılarını anlamaktır.")
    ],
    relatedTerms: [
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Ayrılma kaygısı", slug: "ayrilma-kaygisi" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Anksiyete", slug: "anksiyete" }
    ]
  }],

  ["duyusal-hassasiyet", {
    shortDefinition: "Duyusal hassasiyet, ses, ışık, dokunma, koku, tat veya bedensel duyumlar gibi uyaranların kişi tarafından alışılmıştan daha yoğun ya da rahatsız edici biçimde algılanabilmesini ifade eder.",
    intro: "Duyusal hassasiyet tek başına psikiyatrik bir tanı değildir. Bazı kişilerde belirgin bir bireysel özellik olarak bulunabilirken, nörogelişimsel durumlar, kaygı veya yoğun stres dönemlerinde daha belirgin hale gelebilir.",
    sections: [
      section("Duyusal Hassasiyet Günlük Yaşamda Nasıl Görülebilir?", "Kişi sıradan kabul edilen sesleri çok yüksek, bazı ışıkları rahatsız edici veya belirli kumaş ve dokuları tahammül edilmesi güç bulabilir. Kalabalık ve çok uyaranlı ortamlarda zihinsel yorgunluk, huzursuzluk veya ortamdan uzaklaşma isteği ortaya çıkabilir."),
      section("Her Rahatsız Edici Uyaran Duyusal Hassasiyet midir?", "Hayır. Çok yüksek ses, güçlü ışık veya yoğun koku çoğu kişiyi rahatsız edebilir. Duyusal hassasiyet kavramı, başkalarının daha kolay tolere ettiği uyaranların kişide tekrarlayıcı ve belirgin bir rahatsızlık oluşturması durumlarında daha anlamlıdır."),
      section("Kaygı Duyusal Hassasiyeti Artırabilir mi?", "Yoğun kaygı veya bedensel uyarılmışlık sırasında kişi çevresindeki seslere, bedensel duyumlara veya başka uyaranlara daha fazla odaklanabilir. Bu nedenle hassasiyet bazı dönemlerde artıp azalabilir. Bununla birlikte her duyusal hassasiyet kaygıyla açıklanamaz."),
      section("Ne Zaman Değerlendirme Yararlı Olabilir?", "Duyusal hassasiyet okul, iş, sosyal yaşam veya günlük rutinleri belirgin biçimde etkiliyorsa ayrıntılı değerlendirme yararlı olabilir. Belirtilerin çocukluktan beri bulunup bulunmadığı, hangi duyusal alanlarda görüldüğü ve dikkat, kaygı veya nörogelişimsel özelliklerle ilişkisi birlikte ele alınır.")
    ],
    relatedTerms: [
      { term: "Dikkat", slug: "dikkat" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "DEHB", slug: "dehb" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" }
    ]
  }],

  ["emdr", {
    shortDefinition: "EMDR, Türkçede Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme olarak adlandırılan, özellikle travma sonrası stres belirtilerinin ele alınmasında kullanılan yapılandırılmış bir psikoterapi yaklaşımıdır.",
    intro: "EMDR yalnızca göz hareketlerinden oluşan bir teknik değildir. Travmatik anılarla ilişkili düşünceler, duygular ve bedensel tepkiler yapılandırılmış bir süreç içinde ele alınırken çift yönlü uyarım yöntemlerinden yararlanılabilir.",
    sections: [
      section("EMDR Süreci Nasıl Yapılandırılır?", "Yaklaşım genellikle öykü alma, hazırlık, hedef anının belirlenmesi, işlemleme ve oturum sonunda kişinin yeniden dengelenmesi gibi aşamalar içerir. Uygulama kişinin zorlayıcı anıyla ilişkili görüntülerini, düşüncelerini, duygularını ve bedensel hislerini güvenli bir klinik çerçevede ele almayı amaçlar."),
      section("Çift Yönlü Uyarım Ne Anlama Gelir?", "EMDR sırasında göz hareketleri, ritmik dokunsal uyarım veya işitsel uyaranlar gibi dikkati sağ ve sol arasında dönüşümlü yönlendiren yöntemler kullanılabilir. Ancak tedavi yaklaşımının etkisini yalnızca bu uyarıma indirgemek doğru değildir; yapılandırılmış psikoterapi süreci bir bütün olarak değerlendirilir."),
      section("EMDR En Çok Hangi Durumda Bilinir?", "EMDR en güçlü biçimde travma sonrası stres bozukluğu alanındaki kullanımıyla bilinir. Farklı psikolojik sorunlarda da araştırılmıştır ancak her kişi ve her sorun için otomatik olarak uygun yöntem olduğu söylenemez. Hangi yaklaşımın kullanılacağı klinik değerlendirmeye göre belirlenir."),
      section("Travmatik Anıyı Ayrıntılı Anlatmak Zorunlu mudur?", "EMDR uygulamasında kişinin yaşadığı olayın her ayrıntısını uzun biçimde sözlü olarak anlatması her zaman gerekli değildir. Bununla birlikte travmayla ilişkili materyalin ele alınması yoğun duygular doğurabilir. Bu nedenle uygulamanın eğitimli bir ruh sağlığı uzmanı tarafından kişinin hazır oluşu ve güvenliği dikkate alınarak yürütülmesi önemlidir.")
    ],
    relatedTerms: [
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Dissosiyasyon", slug: "dissosiyasyon" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" }
    ]
  }],

  ["epizodik-bellek", {
    shortDefinition: "Epizodik bellek, kişinin kendi yaşamında belirli bir zaman ve yerde gerçekleşmiş olayları bağlamlarıyla birlikte hatırlamasını sağlayan uzun süreli bellek sistemidir.",
    intro: "Epizodik bellek yalnızca bir bilginin doğru olduğunu bilmekten farklıdır. Kişinin bir doğum günü, yolculuk veya görüşme gibi yaşanmış bir olayı nerede ve ne zaman gerçekleştiğiyle birlikte zihinsel olarak yeniden canlandırabilmesiyle ilişkilidir.",
    sections: [
      section("Epizodik Bellek Hangi Tür Anıları İçerir?", "Kişinin geçen hafta yaptığı bir görüşmeyi, çocuklukta gittiği bir yeri veya yakın zamanda yaşadığı belirli bir olayı hatırlaması epizodik belleğe örnektir. Bu anılar olayın içeriğinin yanında zaman, yer ve kişisel deneyim gibi bağlamsal bilgiler de içerebilir."),
      section("Epizodik Bellek ile Semantik Bellek Arasındaki Fark Nedir?", "Semantik bellek genel bilgiler, kavramlar ve gerçeklerle ilişkilidir. Örneğin bir ülkenin başkentini bilmek semantik belleğe girerken o şehre yaptığınız belirli bir yolculuğu hatırlamak epizodik bellektir. İki bellek sistemi günlük yaşamda sürekli olarak birbirleriyle etkileşir."),
      section("Dikkat Epizodik Belleği Nasıl Etkileyebilir?", "Bir olay yaşanırken kişi yeterince dikkat etmiyorsa bilginin belleğe kaydedilmesi zayıf olabilir. Daha sonra hatırlayamama, ilk bakışta bellek sorunu gibi görünse de aslında bilginin başlangıçta yeterince işlenmemesinden kaynaklanabilir. Bu nedenle dikkat ve bellek işlevleri birlikte değerlendirilir."),
      section("Epizodik Bellek Güçlüğü Hangi Durumlarda Görülebilir?", "Yoğun stres, uykusuzluk, depresif dönemler ve bazı nörolojik durumlar epizodik bellek performansını etkileyebilir. Yaşla birlikte bazı değişiklikler de görülebilir. Tek bir unutkanlık olayı yerine güçlüğün sürekliliği, ilerleyip ilerlemediği ve günlük işlev üzerindeki etkisi önemlidir.")
    ],
    relatedTerms: [
      { term: "Çalışma belleği", slug: "calisma-bellegi" },
      { term: "Amnezi", slug: "amnezi" },
      { term: "Dikkat", slug: "dikkat" },
      { term: "Semantik bellek", slug: "semantik-bellek" },
      { term: "Bilinç bulanıklığı", slug: "bilinc-bulanikligi" }
    ]
  }],

  ["ergen-anksiyetesi", {
    shortDefinition: "Ergen anksiyetesi, ergenlik döneminde okul, sosyal ilişkiler, gelecek, beden algısı, aileden bağımsızlaşma veya başka yaşam alanlarıyla ilişkili olarak ortaya çıkan belirgin kaygı yaşantılarını ifade eden genel bir kavramdır.",
    intro: "Ergenlik döneminde kaygı yaşamak gelişimin doğal bir parçası olabilir. Klinik önem, kaygının şiddeti, ne kadar sürdüğü, kaçınmaya yol açıp açmadığı ve ergenin okul, sosyal yaşam ve günlük işlevlerini ne ölçüde etkilediğiyle ilişkilidir.",
    sections: [
      section("Ergenlikte Kaygı Neden Artabilir?", "Akademik beklentiler, akran ilişkileri, sosyal kabul, beden değişiklikleri ve gelecek planları ergenlikte daha görünür hale gelir. Aynı zamanda kişinin ailesinden daha bağımsız kararlar almaya başlaması yeni sorumluluklar yaratabilir. Bu değişimler geçici kaygı dönemlerine zemin hazırlayabilir."),
      section("Normal Kaygı ile Klinik Düzeyde Kaygı Nasıl Ayrılır?", "Sınav öncesi heyecan veya yeni bir sosyal ortama girerken kaygı duymak olağandır. Kaygı çok yoğun hale geliyor, uzun süre devam ediyor, ergenin önemli etkinliklerden kaçınmasına neden oluyor veya uyku, okul ve ilişkiler üzerinde belirgin sorun yaratıyorsa daha ayrıntılı değerlendirme gerekebilir."),
      section("Ergenlerde Kaygı Her Zaman Açıkça Söylenir mi?", "Hayır. Bazı ergenler kaygılarını doğrudan ifade etmek yerine huzursuzluk, irritabilite, karın veya baş ağrısı gibi bedensel yakınmalar, okuldan kaçınma ya da sosyal ortamlardan geri çekilme yaşayabilir. Bu belirtilerin başka nedenleri de olabileceği için bağlam önemlidir."),
      section("Aileler Nasıl Yaklaşabilir?", "Ergenin kaygısını küçümsemeden dinlemek, hemen çözüm vermek yerine neyin zor geldiğini anlamaya çalışmak ve yaşına uygun bağımsızlığı desteklemek yararlı olabilir. Kaygı günlük işlevleri belirgin biçimde bozuyorsa veya giderek artıyorsa bir ruh sağlığı uzmanından değerlendirme almak uygun olabilir.")
    ],
    relatedTerms: [
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Sosyal anksiyete bozukluğu", slug: "sosyal-anksiyete-bozuklugu" },
      { term: "Ayrılma kaygısı", slug: "ayrilma-kaygisi" },
      { term: "Dikkat eksikliği", slug: "dikkat-eksikligi" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" }
    ]
  }],

  ["dikkat-eksikligi", {
    shortDefinition: "Dikkat eksikliği, kişinin dikkatini gerekli uyaranlara yöneltme veya belirli bir görev üzerinde yeterince sürdürebilme konusunda yaşadığı güçlüğü ifade eden genel bir klinik tanımlamadır.",
    intro: "Dikkat eksikliği tek başına DEHB anlamına gelmez. Uyku, kaygı, depresif belirtiler, fiziksel hastalıklar, kullanılan maddeler veya çevresel koşullar da kişinin dikkat performansını etkileyebilir.",
    sections: [
      section("Dikkat Eksikliği Günlük Yaşamda Nasıl Görülebilir?", "Kişi konuşmaları takip etmekte, uzun süren görevlerde odağını korumakta veya ayrıntılara dikkat etmekte zorlanabilir. Yapılacak işleri unutma, bir görevden diğerine geçme veya dış uyaranlarla kolayca dikkatin dağılması da görülebilir. Ancak bu belirtilerin arada sırada yaşanması tek başına klinik bir sorun anlamına gelmez."),
      section("Dikkat Eksikliği ile DEHB Aynı Şey midir?", "Hayır. DEHB, dikkatsizlik belirtilerinin yanı sıra bazı kişilerde dürtüsellik ve hareketlilik belirtilerinin de değerlendirildiği nörogelişimsel bir bozukluktur. Tanısal değerlendirmede belirtilerin çocukluk döneminden itibaren bulunması, birden fazla yaşam alanında görülmesi ve işlevselliği etkilemesi gibi özellikler önemlidir."),
      section("Uyku ve Kaygı Dikkati Nasıl Etkileyebilir?", "Yetersiz uyku, yoğun zihinsel yorgunluk veya kaygı sırasında kişi dikkatini sürdürmekte geçici olarak zorlanabilir. Kaygılı kişilerde dikkat tehdit olarak algılanan uyaranlara yönelirken diğer bilgiler gözden kaçabilir. Bu nedenle dikkat güçlüğünün hangi koşullarda arttığını anlamak değerlendirmede önem taşır."),
      section("Dikkat Güçlüğü Nasıl Değerlendirilir?", "Kişinin öyküsü, belirtilerin ne zamandır bulunduğu, okul veya iş performansına etkisi ve farklı ortamlarda görülüp görülmediği birlikte ele alınır. Gerektiğinde dikkat ve bilişsel işlevleri değerlendiren standart testlerden yararlanılabilir; ancak tek bir test sonucu tek başına tanı koydurmaz.")
    ],
    relatedTerms: [
      { term: "Dikkat", slug: "dikkat" },
      { term: "DEHB", slug: "dehb" },
      { term: "Çalışma belleği", slug: "calisma-bellegi" },
      { term: "Anksiyete", slug: "anksiyete" }
    ]
  }],

  ["distimi", {
    shortDefinition: "Distimi, güncel sınıflandırmalarda büyük ölçüde kalıcı depresif bozukluk kapsamında ele alınan, uzun süreli çökkün duygudurum ve eşlik eden depresif belirtileri tanımlamak için kullanılan eski bir klinik terimdir.",
    intro: "Distimi terimi günümüzde önceki sınıflandırmalardaki kadar bağımsız kullanılmamaktadır. Kavramın temelinde, daha hafif görünebilse de uzun süre devam eden depresif belirtilerin kişinin yaşamına etkisi bulunur.",
    sections: [
      section("Distimi Nasıl Bir Klinik Görünümü Tanımlar?", "Kişi uzun süre kendisini moralsiz, isteksiz veya enerjisiz hissedebilir. Özgüvende azalma, karar vermede güçlük, umutsuzluk, uyku veya iştah değişiklikleri gibi belirtiler eşlik edebilir. Belirtilerin sürekliliği nedeniyle kişi zamanla bu duygusal durumu kendi olağan hali gibi algılayabilir."),
      section("Distimi ile Majör Depresyon Arasındaki Fark Nedir?", "Majör depresif dönemlerde belirtiler belirli bir zaman diliminde daha belirgin yoğunlaşabilir. Distimi kavramında ise daha uzun süre devam eden kronik depresif belirtiler ön plandadır. Güncel sınıflandırmalarda uzun süreli depresif tablolar kalıcı depresif bozukluk başlığı altında daha bütüncül biçimde ele alınır."),
      section("Uzun Süreli Moral Bozukluğu Distimi midir?", "Hayır. Yaşam koşullarına bağlı uzun süreli üzüntü veya stres yaşamak tek başına depresif bozukluk anlamına gelmez. Değerlendirmede belirtilerin süresi, yoğunluğu, kişinin olağan işlev düzeyinden ne ölçüde farklı olduğu ve yaşamındaki etkileri dikkate alınır."),
      section("Neden Güncel Terminoloji Önemlidir?", "Psikiyatrik sınıflandırmalar zaman içinde değişebilir ve bazı eski terimler yeni tanısal çerçevelerin içine alınabilir. Distimi bu açıdan tarihsel olarak önemli bir kavramdır ancak güncel klinik değerlendirmede kişinin belirtileri mevcut tanı ölçütleri ve yaşam öyküsü üzerinden ele alınır.")
    ],
    relatedTerms: [
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" },
      { term: "Çökkün duygudurum", slug: "cokkun-duygudurum" },
      { term: "Anhedoni", slug: "anhedoni" },
      { term: "Apati", slug: "apati" },
      { term: "Duygudurum", slug: "duygudurum" }
    ]
  }],

  ["durtu-kontrolu", {
    shortDefinition: "Dürtü kontrolü, kişinin kısa vadede güçlü bir istek uyandıran davranışı durdurabilmesi, erteleyebilmesi veya sonuçlarını değerlendirerek düzenleyebilmesi kapasitesidir.",
    intro: "Dürtü kontrolü kişinin hiçbir zaman ani davranmaması anlamına gelmez. Önemli olan, davranış ile sonuçları arasında düşünmeye ve seçim yapmaya yeterli zihinsel alan oluşturabilmesidir.",
    sections: [
      section("Dürtü Kontrolü Günlük Yaşamda Nasıl Kullanılır?", "Öfkeli olduğunda hemen tepki vermemek, anlık bir isteğe rağmen uzun vadeli hedefleri dikkate almak veya bir davranışın olası sonuçlarını düşünmek dürtü kontrolünün günlük örnekleridir. Bu kapasite yorgunluk, yoğun duygu veya madde etkisi gibi durumlarda geçici olarak azalabilir."),
      section("Dürtüsellik ile Dürtü Kontrolü Aynı Şey midir?", "Dürtüsellik, kişinin yeterince düşünmeden hızlı davranma eğilimini ifade eder. Dürtü kontrolü ise bu eğilimi düzenleyebilme kapasitesiyle ilişkilidir. Bir kişi bazı alanlarda oldukça kontrollüyken belirli durumlarda daha dürtüsel davranabilir; bu nedenle davranışın bağlamı önemlidir."),
      section("Hangi Durumlar Dürtü Kontrolünü Etkileyebilir?", "DEHB, bazı kişilik örüntüleri, madde kullanım sorunları ve duygudurum dönemlerinde dürtüsellik artabilir. Yoğun öfke, korku veya heyecan da kişinin karar verme süresini kısaltabilir. Ancak tek bir dürtüsel davranış üzerinden psikiyatrik tanı konulmaz."),
      section("Değerlendirmede Neler Önemlidir?", "Dürtüsel davranışların ne sıklıkta olduğu, hangi koşullarda ortaya çıktığı ve kişinin ilişkileri, güvenliği, ekonomik durumu veya günlük sorumlulukları üzerinde nasıl bir etkisi bulunduğu değerlendirilir. Amaç kişiyi iradesiz olarak etiketlemek değil, davranışın ortaya çıkmasını kolaylaştıran etkenleri anlamaktır.")
    ],
    relatedTerms: [
      { term: "Bağımlılık", slug: "bagimlilik" },
      { term: "DEHB", slug: "dehb" },
      { term: "Borderline kişilik örüntüsü", slug: "borderline-kisilik-oruntusu" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" }
    ]
  }],

  ["duygu-duzenleme", {
    shortDefinition: "Duygu düzenleme, kişinin duygularını fark etmesi, anlamlandırması ve bulunduğu duruma uygun biçimde yönetebilmesiyle ilişkili psikolojik süreçlerin bütünüdür.",
    intro: "Duygu düzenlemek bir duyguyu bastırmak veya hiç hissetmemek anlamına gelmez. Amaç, duygunun varlığını korurken kişinin davranışlarını yalnızca o anki yoğun duygunun belirlememesidir.",
    sections: [
      section("Duygu Düzenleme Hangi Süreçleri İçerir?", "Kişinin ne hissettiğini fark etmesi, duygunun hangi olayla ilişkili olduğunu anlaması, yoğunluğunu tolere etmesi ve davranışını buna göre seçebilmesi duygu düzenlemenin parçalarıdır. Gerektiğinde dikkati başka bir noktaya yöneltmek veya bir durumu farklı açıdan değerlendirmek de bu süreçte kullanılabilir."),
      section("Yoğun Duygular Duygu Düzenleme Sorunu Anlamına mı Gelir?", "Hayır. Yoğun sevinç, üzüntü, korku veya öfke yaşamak insan deneyiminin doğal bir parçasıdır. Klinik açıdan sorun, duyguların sık biçimde kişinin davranışlarını kontrol etmesi, yatışmasının çok güç olması veya ilişkiler ve günlük işlevsellik üzerinde sürekli sorun yaratması durumunda gündeme gelebilir."),
      section("Duygu Düzenleme ile Dürtü Kontrolü Nasıl İlişkilidir?", "Duygular çok yoğunlaştığında kişinin düşünmeden hareket etme eğilimi artabilir. Duygunun fark edilmesi ve yoğunluğunun yönetilebilmesi, davranış için daha fazla seçim alanı oluşturabilir. Bununla birlikte dürtüsellik yalnızca duygu düzenleme güçlüğüyle açıklanmaz."),
      section("Duygu Düzenleme Kapasitesi Değişebilir mi?", "Evet. Uyku, stres düzeyi, yaşam deneyimleri, ilişkiler ve öğrenilen baş etme yöntemleri kişinin duyguları yönetme kapasitesini etkileyebilir. Duygu düzenleme sabit bir kişilik özelliği değildir ve uygun psikolojik yaklaşımlarla yeni beceriler öğrenilebilir.")
    ],
    relatedTerms: [
      { term: "Duygudurum", slug: "duygudurum" },
      { term: "Borderline kişilik örüntüsü", slug: "borderline-kisilik-oruntusu" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Dürtü kontrolü", slug: "durtu-kontrolu" },
      { term: "Bağlanma", slug: "baglanma" }
    ]
  }],

  ["duygudurum", {
    shortDefinition: "Duygudurum, kişinin saatler veya günler boyunca devam edebilen genel ve baskın duygusal durumunu ifade eden klinik bir kavramdır.",
    intro: "Duygudurum, tek bir anda hissedilen duygudan daha uzun süreli bir duygusal arka planı ifade eder. Kişi kendisini çökkün, kaygılı, neşeli, irritabl veya olağan duygusal halinde hissedebilir.",
    sections: [
      section("Duygudurum Nasıl Değerlendirilir?", "Klinik görüşmede kişinin son günlerde veya haftalarda kendisini nasıl hissettiği, duygusal durumunun ne kadar sürdüğü ve günlük yaşamını nasıl etkilediği sorulabilir. Kişinin kendi anlatımı temel olmakla birlikte davranışları ve duygusal dışavurumu da değerlendirmeye katkı sağlar."),
      section("Duygudurum ile Affekt Arasındaki Fark Nedir?", "Duygudurum kişinin daha uzun süreli öznel duygusal durumunu ifade eder. Affekt ise görüşme sırasında dışarıdan gözlenebilen anlık duygusal dışavurumdur. Kişi kendisini uzun süredir çökkün hissettiğini söyleyebilirken görüşme sırasında duygusal tepkileri farklı yoğunluklarda görülebilir."),
      section("Duygudurum Değişiklikleri Her Zaman Hastalık Belirtisi midir?", "Hayır. İnsanların duygudurumları günlük olaylara, uykuya, stres düzeyine ve yaşam koşullarına bağlı olarak değişebilir. Klinik önem, değişikliğin kişinin olağan halinden belirgin olması, yeterince uzun sürmesi veya günlük işlevsellikte önemli bir etki oluşturmasıyla artar."),
      section("Mani ve Depresyonda Duygudurum Nasıl Değişebilir?", "Depresif dönemlerde çökkün veya irritabl duygudurum görülebilirken manik ve hipomanik dönemlerde yükselmiş, genişlemiş veya irritabl duygudurum ortaya çıkabilir. Ancak duygudurumun tek başına nasıl göründüğü tanı için yeterli değildir; enerji, uyku, düşünce, davranış ve işlevsellikteki diğer değişiklikler de değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Affekt", slug: "affekt" },
      { term: "Çökkün duygudurum", slug: "cokkun-duygudurum" },
      { term: "Mani", slug: "mani" },
      { term: "Hipomani", slug: "hipomani" },
      { term: "Bipolar I bozukluk", slug: "bipolar-1-bozukluk" }
    ]
  }],

  ["calisma-bellegi", {
    shortDefinition: "Çalışma belleği, bilgiyi kısa süre boyunca zihinde tutarken aynı anda bu bilgi üzerinde işlem yapabilme kapasitesidir.",
    intro: "Çalışma belleği yalnızca kısa süreli hatırlama değildir. Bir telefon numarasını geçici olarak akılda tutmak, yönergelerin sırasını izlemek veya zihinden hesap yapmak gibi görevlerde bilgiyi aktif biçimde kullanmayı sağlar.",
    sections: [
      section("Çalışma Belleği Günlük Yaşamda Nerede Kullanılır?", "Bir konuşmanın başında söylenenleri akılda tutarak sonrasını anlamak, birkaç aşamalı bir görevi sırasıyla yapmak veya okunan bir cümlenin önceki bölümünü hatırlamak çalışma belleğine örnektir. Kapasitesi sınırlı olduğu için aynı anda çok fazla bilgiyle uğraşmak performansı zorlaştırabilir."),
      section("Çalışma Belleği ile Uzun Süreli Bellek Aynı Şey midir?", "Hayır. Uzun süreli bellek bilgilerin daha kalıcı biçimde saklanmasıyla ilişkilidir. Çalışma belleği ise o anda gerekli bilgiyi kısa süreli olarak zihinde tutar ve işler. İki sistem birbirleriyle etkileşim halindedir ancak aynı işlevi yerine getirmez."),
      section("Dikkat Çalışma Belleğini Nasıl Etkiler?", "Bilginin çalışma belleğinde tutulabilmesi için dikkatin ilgili göreve yönelmesi gerekir. Dikkatin sık bölünmesi, yoğun kaygı, uykusuzluk veya zihinsel yorgunluk çalışma belleği performansını geçici olarak azaltabilir. Bu nedenle tek bir görevdeki düşük performans doğrudan kalıcı bir bellek bozukluğu anlamına gelmez."),
      section("Çalışma Belleği Güçlükleri Hangi Durumlarda Görülebilir?", "DEHB, bazı nörogelişimsel durumlar, depresif veya kaygılı dönemler ve çeşitli nörolojik hastalıklarda çalışma belleği performansında güçlük görülebilir. Değerlendirmede dikkat kapasitesi, öğrenme düzeyi, uyku ve kişinin genel bilişsel işlevleri birlikte ele alınır.")
    ],
    relatedTerms: [
      { term: "Dikkat", slug: "dikkat" },
      { term: "Amnezi", slug: "amnezi" },
      { term: "Epizodik bellek", slug: "epizodik-bellek" },
      { term: "Semantik bellek", slug: "semantik-bellek" },
      { term: "DEHB", slug: "dehb" }
    ]
  }],

  ["cokkun-duygudurum", {
    shortDefinition: "Çökkün duygudurum, kişinin belirgin üzüntü, keder, boşluk veya moral azalması yaşadığı duygusal durumu ifade eder.",
    intro: "Çökkün duygudurum tek başına depresif bozukluk anlamına gelmez. Süresi, yoğunluğu, günlük işlevselliğe etkisi ve eşlik eden diğer belirtiler klinik değerlendirmede önemlidir.",
    sections: [
      section("Çökkün Duygudurum Nasıl Hissedilebilir?", "Kişi kendisini üzgün, moralsiz, umutsuz veya içsel olarak boş hissedebilir. Günlük olaylara verilen duygusal tepkiler azalabilir ve daha önce kolay tolere edilen sorunlar daha ağır gelebilir. Bu deneyimin biçimi ve yoğunluğu kişiden kişiye değişebilir."),
      section("Üzüntü ile Çökkün Duygudurum Aynı Şey midir?", "Günlük yaşamda kayıp, hayal kırıklığı veya stres sonrasında üzüntü yaşamak doğaldır. Klinik açıdan çökkün duygudurum değerlendirilirken yalnızca duygunun varlığı değil, ne kadar sürdüğü, kişinin olağan halinden ne ölçüde farklı olduğu ve işlevselliği nasıl etkilediği dikkate alınır."),
      section("Çökkün Duygudurumda Başka Hangi Belirtiler Eşlik Edebilir?", "İlgi ve zevk kaybı, enerji azalması, uyku veya iştah değişiklikleri, konsantrasyon güçlüğü ve değersizlik düşünceleri eşlik edebilir. Ancak bu belirtilerin herhangi birinin bulunması tek başına belirli bir tanı koydurmaz."),
      section("Ne Zaman Değerlendirme Önemlidir?", "Çökkünlük uzun sürüyor, günlük işlevselliği belirgin biçimde bozuyor veya kişinin kendisiyle ve gelecekle ilgili ağır olumsuz düşünceler geliştirmesine eşlik ediyorsa profesyonel değerlendirme önemlidir. Belirtilerin bağlamı ve eşlik eden diğer değişiklikler birlikte ele alınır.")
    ],
    relatedTerms: [
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" },
      { term: "Anhedoni", slug: "anhedoni" },
      { term: "Apati", slug: "apati" },
      { term: "Psikomotor retardasyon", slug: "psikomotor-retardasyon" },
      { term: "Duygudurum", slug: "duygudurum" }
    ]
  }],

  ["dezorganize-davranis", {
    shortDefinition: "Dezorganize davranış, kişinin davranışlarının amaca uygunluğunda, düzeninde veya çevresel koşullara uyumunda belirgin bozulma görülmesini ifade eden klinik bir terimdir.",
    intro: "Dezorganize davranış yalnızca alışılmadık veya sıra dışı davranmak anlamına gelmez. Klinik kullanımda davranışların belirgin biçimde düzensizleşmesi ve günlük işlevsellikle uyumunun bozulması önemlidir.",
    sections: [
      section("Dezorganize Davranış Nasıl Görülebilir?", "Kişi başladığı bir işi sürdüremeyebilir, davranışları belirgin biçimde amaçsız veya bağlama uyumsuz hale gelebilir ve günlük özbakım ya da sorumluluklarını organize etmekte zorlanabilir. Davranışın biçimi ve şiddeti kişiden kişiye değişebilir."),
      section("Her Tuhaf Davranış Dezorganize Davranış mıdır?", "Hayır. Kültürel özellikler, kişilik, mizah veya alışılmadık tercihler tek başına dezorganizasyon anlamına gelmez. Klinik değerlendirmede kişinin davranışının kendi olağan işlev düzeyinden ne kadar farklı olduğu ve günlük yaşamı ne ölçüde bozduğu önemlidir."),
      section("Psikoz ile İlişkisi Nedir?", "Belirgin dezorganize davranış bazı psikotik bozukluklarda görülebilir ancak psikozun tek göstergesi değildir. Değerlendirmede sanrı, varsanı, düşünce organizasyonu ve gerçekliği değerlendirme gibi başka alanlar da birlikte ele alınır."),
      section("Ani Davranış Değişikliklerinde Neler Düşünülür?", "Yeni başlayan belirgin davranış değişikliklerinde psikiyatrik nedenlerin yanında madde veya ilaç etkileri, nörolojik hastalıklar ve akut tıbbi durumlar da göz önünde bulundurulmalıdır. Özellikle bilinç veya dikkat değişikliği eşlik ediyorsa tıbbi değerlendirme önemlidir. Belirtilerin başlangıç zamanı ve kişinin olağan davranış düzeyinden ne kadar farklılaştığı da değerlendirmede yardımcı olur.")
    ],
    relatedTerms: [
      { term: "Psikoz", slug: "psikoz" },
      { term: "Şizofreni", slug: "sizofreni" },
      { term: "Katatoni", slug: "katatoni" },
      { term: "Algı bozukluğu", slug: "algi-bozuklugu" }
    ]
  }],

  ["dijital-bagimlilik", {
    shortDefinition: "Dijital bağımlılık, dijital cihaz veya çevrim içi etkinlik kullanımının kontrol edilmesinde güçlük yaşanması ve bu kullanımın günlük yaşamı belirgin biçimde etkilemesi için kullanılan genel bir kavramdır.",
    intro: "Dijital ortamda uzun zaman geçirmek tek başına bağımlılık anlamına gelmez. Kullanım üzerindeki kontrol, işlevselliğe etkisi ve olumsuz sonuçlara rağmen davranışın sürüp sürmediği daha önemlidir.",
    sections: [
      section("Sorunlu Dijital Kullanım Nasıl Fark Edilebilir?", "Kişi planladığından çok daha uzun süre çevrim içi kalabilir, kullanımını azaltmakta zorlanabilir veya dijital etkinlikler nedeniyle uyku, ders, iş ve sosyal ilişkilerini ihmal etmeye başlayabilir. Kullanamadığında belirgin huzursuzluk hissetmesi de bazı kişilerde görülebilir."),
      section("Ekran Süresi Tek Başına Yeterli Bir Ölçüt müdür?", "Hayır. İş, eğitim veya iletişim nedeniyle uzun süre ekran kullanan bir kişinin işlevselliği bozulmayabilir. Değerlendirmede süreden çok davranış üzerindeki kontrol, kullanımın amacı, günlük sorumluluklara etkisi ve kişinin kullanımı azaltıp azaltamadığı dikkate alınır."),
      section("Dijital Kullanım ile Ruhsal Durum Arasında Nasıl Bir İlişki Olabilir?", "Yoğun dijital kullanım bazen kaygı, yalnızlık, dikkat güçlüğü veya uyku sorunlarıyla birlikte görülebilir. Ancak ilişkinin yönü her zaman aynı değildir; kişi zorlandığı için dijital ortama daha fazla yönelebilir veya yoğun kullanım mevcut güçlükleri artırabilir."),
      section("Değerlendirmede Amaç Nedir?", "Amaç teknolojiyi tamamen bırakmak değil, kullanımın kişinin yaşamındaki yerini ve işlevini anlamaktır. Uyku, eğitim veya iş, ilişkiler ve fiziksel etkinlik gibi alanlarla dengesi değerlendirilerek daha sürdürülebilir kullanım alışkanlıkları ele alınabilir.")
    ],
    relatedTerms: [
      { term: "Bağımlılık", slug: "bagimlilik" },
      { term: "Dikkat", slug: "dikkat" },
      { term: "DEHB", slug: "dehb" },
      { term: "Anksiyete", slug: "anksiyete" }
    ]
  }],

  ["dikkat", {
    shortDefinition: "Dikkat, kişinin çevresindeki veya zihnindeki bilgiler arasından belirli uyaranları seçmesi ve zihinsel kaynaklarını bu bilgiler üzerinde sürdürebilmesi kapasitesidir.",
    intro: "Dikkat tek bir işlev değildir. Bir göreve odaklanma, dikkati sürdürme, gerektiğinde başka bir göreve geçme ve dikkat dağıtıcı uyaranları filtreleme gibi farklı süreçleri içerir.",
    sections: [
      section("Dikkatin Hangi Bileşenleri Vardır?", "Seçici dikkat, önemli uyaranı diğerlerinden ayırmaya yardımcı olur. Sürdürülen dikkat, bir göreve belirli süre boyunca odaklanmayı sağlar. Dikkati değiştirebilme ise gerektiğinde zihinsel odağı bir görevden diğerine taşımayla ilişkilidir."),
      section("Dikkat Neden Gün İçinde Değişebilir?", "Uykusuzluk, yorgunluk, açlık, stres, yoğun kaygı veya çevresel dikkat dağıtıcılar dikkat performansını geçici olarak azaltabilir. Bu nedenle kısa süreli odaklanma güçlüğü tek başına dikkat bozukluğu olduğu anlamına gelmez."),
      section("Dikkat ile Çalışma Belleği Nasıl İlişkilidir?", "Bir bilginin çalışma belleğinde tutulabilmesi için öncelikle dikkatin o bilgiye yönelmesi gerekir. Dikkat sık bölündüğünde bilgi yeterince işlenmeyebilir ve kişi bunu unutkanlık olarak yaşayabilir. Bu nedenle dikkat ve bellek yakın ilişkili ancak farklı bilişsel işlevlerdir."),
      section("Dikkat Güçlüğü Ne Zaman Klinik Önem Taşır?", "Odaklanma güçlüğü uzun süredir varsa, birden fazla ortamda görülüyorsa veya eğitim, iş ve günlük sorumlulukları belirgin biçimde etkiliyorsa ayrıntılı değerlendirme yararlı olabilir. DEHB dışında kaygı, depresyon, uyku sorunları ve tıbbi durumlar da dikkat performansını etkileyebilir.")
    ],
    relatedTerms: [
      { term: "DEHB", slug: "dehb" },
      { term: "Çalışma belleği", slug: "calisma-bellegi" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Bilinç bulanıklığı", slug: "bilinc-bulanikligi" }
    ]
  }],

  ["bilissel-carpitma", {
    shortDefinition: "Bilişsel çarpıtma, kişinin bir durumu değerlendirirken bilgiyi sistematik biçimde seçici, katı veya gerçeği yeterince yansıtmayan bir biçimde yorumlama eğilimini anlatan psikolojik bir kavramdır.",
    intro: "Bilişsel çarpıtmalar bilinçli olarak yanlış düşünmek anlamına gelmez. Özellikle stres, kaygı veya çökkünlük sırasında bazı düşünce kalıpları daha otomatik hale gelebilir ve kişinin olayları yorumlama biçimini etkileyebilir.",
    sections: [
      section("Bilişsel Çarpıtmalar Nasıl Görülebilir?", "Kişi tek bir olumsuz deneyimden çok geniş sonuçlar çıkarabilir, olumlu bilgileri önemsizleştirebilir veya belirsiz bir durumu en olumsuz biçimde yorumlayabilir. Bu düşünceler çoğu zaman hızlı ve otomatik ortaya çıktığı için kişi başlangıçta bunların bir yorum olduğunu değil, doğrudan gerçeğin kendisini yansıttığını düşünebilir."),
      section("Her Olumsuz Düşünce Bilişsel Çarpıtma mıdır?", "Hayır. Gerçekçi biçimde olumsuz sonuçlara ulaşmak mümkündür. Bilişsel çarpıtma kavramında önemli olan düşüncenin olumsuz olması değil, mevcut kanıtların seçici değerlendirilmesi, istisnaların gözden kaçırılması veya sonucun eldeki bilgilerden daha kesin ve geniş hale getirilmesidir."),
      section("Bilişsel Çarpıtmalar Duyguları Nasıl Etkileyebilir?", "Bir olayın nasıl yorumlandığı kişinin o olay karşısındaki duygusal tepkisini etkileyebilir. Aynı durum farklı biçimlerde değerlendirildiğinde kaygı, suçluluk, öfke veya üzüntünün yoğunluğu da değişebilir. Bununla birlikte duygusal yaşantılar yalnızca düşüncelerle açıklanmaz; yaşam koşulları ve bedensel etkenler de önemlidir."),
      section("Bilişsel Değerlendirmede Amaç Nedir?", "Amaç kişinin düşüncelerini zorla olumlu hale getirmek değildir. Düşüncenin hangi kanıtlara dayandığını, farklı açıklamaların mümkün olup olmadığını ve yorumun kişinin davranışları üzerindeki etkisini incelemek daha dengeli bir değerlendirme sağlayabilir. Bu yaklaşım özellikle bilişsel davranışçı terapi içinde sık kullanılır.")
    ],
    relatedTerms: [
      { term: "Aşırı genelleme", slug: "asiri-genelleme" },
      { term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }
    ]
  }],

  ["bilissel-davranisci-terapi", {
    shortDefinition: "Bilişsel davranışçı terapi, düşünceler, duygular ve davranışlar arasındaki ilişkileri ele alan, yapılandırılmış ve hedef odaklı psikoterapi yaklaşımlarından biridir.",
    intro: "Bilişsel davranışçı terapi tek bir teknikten oluşmaz. Kişinin yaşadığı güçlüğe göre düşünce değerlendirme, davranış değişikliği, maruz bırakma, beceri geliştirme veya problem çözme gibi farklı yöntemlerden yararlanılabilir.",
    sections: [
      section("Bilişsel Davranışçı Terapi Nasıl Çalışır?", "Terapi sürecinde yaşanan belirli durumlar, bu durumlarda ortaya çıkan düşünceler, duygular ve davranışlar birlikte incelenebilir. Amaç kişinin otomatik yorumlarını fark etmesi, işe yaramayan davranış döngülerini tanıması ve daha işlevsel baş etme yollarını deneyebilmesidir."),
      section("Terapi Sadece Düşünceleri Değiştirmeye mi Odaklanır?", "Hayır. Davranışlar da yaklaşımın temel parçalarındandır. Kaçınma, erteleme veya güvence arama gibi davranışların kısa vadede rahatlama sağlarken uzun vadede sorunu nasıl sürdürebildiği değerlendirilebilir. Gerektiğinde davranışsal deneyler ve kademeli uygulamalar kullanılabilir."),
      section("Bilişsel Davranışçı Terapi Hangi Sorunlarda Kullanılır?", "Kaygı bozuklukları, depresif bozukluklar, obsesif kompulsif belirtiler, travmayla ilişkili sorunlar ve başka birçok klinik durumda farklı bilişsel davranışçı protokoller kullanılabilir. Ancak aynı yöntem herkes için aynı biçimde uygulanmaz; kişinin özellikleri ve klinik gereksinimleri dikkate alınır."),
      section("Terapi Süreci Kişiye Göre Değişir mi?", "Evet. Görüşmelerin hedefleri, kullanılan yöntemler ve sürenin nasıl planlanacağı kişinin yaşadığı güçlüklerin niteliğine göre değişebilir. Bilişsel davranışçı yaklaşım genellikle aktif iş birliğine dayanır ve görüşme dışında gözlem veya uygulamalar içerebilir; bunlar kişinin ihtiyaçlarına göre planlanır.")
    ],
    relatedTerms: [
      { term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" },
      { term: "Aşırı genelleme", slug: "asiri-genelleme" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }
    ]
  }],

  ["bipolar-2-bozukluk", {
    shortDefinition: "Bipolar II bozukluk, en az bir hipomanik dönem ve en az bir majör depresif dönem öyküsüyle tanımlanan, geçmişte tam manik dönem bulunmayan bir duygudurum bozukluğudur.",
    intro: "Bipolar II bozukluk yalnızca duygudurumun sık değişmesi anlamına gelmez. Hipomani ve majör depresyon dönemlerinin belirli klinik özellikleri taşıması ve geçmişte manik dönem bulunmaması tanısal ayrım açısından önemlidir.",
    sections: [
      section("Bipolar II Bozuklukta Hangi Dönemler Görülür?", "Kişinin yaşam öyküsünde hipomanik dönemler ile majör depresif dönemler bulunur. Hipomanide enerji ve etkinlik artışı, uyku ihtiyacında azalma, konuşkanlık veya davranışlarda kişinin olağan halinden belirgin değişiklik görülebilir. Depresif dönemlerde ise çökkünlük, ilgi kaybı ve başka depresif belirtiler ön planda olabilir."),
      section("Bipolar II ile Bipolar I Arasındaki Temel Fark Nedir?", "Bipolar I bozuklukta en az bir manik dönem bulunması temel tanısal özelliktir. Bipolar II bozuklukta ise geçmişte tam manik dönem bulunmaz; hipomanik ve majör depresif dönemler söz konusudur. Bu ayrım yalnızca belirtilerin sayısına değil, dönemin ağırlığı ve işlevselliğe etkisine dayanır."),
      section("Hipomani Her Zaman Kolay Fark Edilir mi?", "Hayır. Artmış enerji veya üretkenlik kişi tarafından başlangıçta sorun olarak görülmeyebilir ve depresif dönemler kadar yardım arama nedeni olmayabilir. Bu nedenle değerlendirmede yalnızca mevcut belirtiler değil, geçmiş dönemlerde uyku, enerji, konuşma, etkinlik ve davranışlarda olağandışı değişiklik olup olmadığı da araştırılır."),
      section("Neden Ayrıntılı Yaşam Öyküsü Önemlidir?", "Tek bir depresif dönem veya kısa süreli enerji artışı bipolar II bozukluk tanısı için yeterli değildir. Dönemlerin süresi, birbirleriyle ilişkisi, kişinin olağan işlev düzeyinden ne kadar farklı olduğu, kullanılan maddeler veya ilaçlar ve başka tıbbi durumlar birlikte değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Hipomani", slug: "hipomani" },
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" },
      { term: "Bipolar I bozukluk", slug: "bipolar-1-bozukluk" },
      { term: "Mani", slug: "mani" }
    ]
  }],

  ["borderline-kisilik-oruntusu", {
    shortDefinition: "Borderline kişilik örüntüsü, duyguların düzenlenmesi, kişilerarası ilişkiler, benlik algısı ve dürtü kontrolü alanlarında süreklilik gösteren güçlüklerle ilişkili bir kişilik örüntüsünü ifade eder.",
    intro: "Borderline kişilik örüntüsü tek bir davranış, yoğun duygusallık veya ilişki sorunu üzerinden tanımlanmaz. Örüntünün farklı yaşam alanlarında uzun süredir bulunması ve kişinin işlevselliği üzerindeki etkisi birlikte değerlendirilir.",
    sections: [
      section("Borderline Kişilik Örüntüsünde Hangi Alanlar Etkilenebilir?", "Kişilerarası ilişkiler yoğun ve değişken yaşanabilir, terk edilme ihtimaline karşı belirgin hassasiyet görülebilir ve kişinin kendisiyle ilgili değerlendirmeleri zaman içinde keskin biçimde değişebilir. Duyguların hızlı yükselmesi ve yatışmasının güç olması da bazı kişilerde belirgin bir özellik olabilir."),
      section("Dürtüsellik Neden Önemlidir?", "Bazı kişiler yoğun duygular sırasında sonuçlarını yeterince değerlendirmeden davranabilir. Ancak dürtüsellik farklı psikiyatrik durumlarda da görülebilir ve tek başına borderline kişilik örüntüsünü göstermez. Davranışların hangi koşullarda ortaya çıktığı ve ne kadar süreklilik taşıdığı önemlidir."),
      section("Borderline Örüntüsü ile Bipolar Bozukluk Aynı Şey midir?", "Hayır. Her iki durumda da duygudurum değişiklikleri tarif edilebilse de klinik zaman örüntüsü ve eşlik eden özellikler farklıdır. Bipolar bozuklukta belirli sürelerle devam eden depresif, manik veya hipomanik dönemler değerlendirilirken borderline örüntüsünde ilişkilere ve günlük olaylara bağlı hızlı duygusal değişimler daha belirgin olabilir."),
      section("Kişilik Örüntüsü Değişmez Bir Etiket midir?", "Hayır. Kişilik örüntüsü kişinin bütün kimliğini tanımlamaz ve belirtilerin şiddeti yaşam boyunca değişebilir. Değerlendirmede kişinin güçlü yönleri, ilişkileri, yaşam öyküsü ve mevcut stres etkenleri de dikkate alınır. Uygun psikolojik yaklaşımlarla işlevsellik ve duygusal düzenleme alanlarında belirgin gelişmeler görülebilir.")
    ],
    relatedTerms: [
      { term: "Duygudurum", slug: "duygudurum" },
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Ayrılma kaygısı", slug: "ayrilma-kaygisi" },
      { term: "Anksiyete", slug: "anksiyete" }
    ]
  }],

  ["bulimiya-nervoza", {
    shortDefinition: "Bulimiya nervoza, tekrarlayan tıkınırcasına yeme dönemleri ile bunların ardından kilo alımını önlemeye yönelik tekrarlayıcı telafi davranışlarının görüldüğü bir yeme bozukluğudur.",
    intro: "Bulimiya nervoza yalnızca fazla yemek yemek anlamına gelmez. Tıkınırcasına yeme sırasında kontrol kaybı hissi, sonrasında gelişen telafi davranışları ve beden ağırlığı ya da biçiminin kişinin kendisini değerlendirmesindeki etkisi birlikte ele alınır.",
    sections: [
      section("Tıkınırcasına Yeme Dönemi Ne Anlama Gelir?", "Bu dönemlerde kişi yeme davranışı üzerinde kontrolünü kaybettiğini hissedebilir ve kısa bir süre içinde olağandışı biçimde fazla yediğini düşünebilir. Klinik değerlendirmede yalnızca yenilen miktar değil, kontrol kaybı deneyimi ve bu dönemlerin tekrarlayıcı olup olmadığı da önem taşır."),
      section("Telafi Davranışları Neden Önemlidir?", "Bulimiya nervozada tıkınırcasına yeme sonrasında kilo alımını önlemek amacıyla tekrarlayıcı telafi davranışları görülebilir. Bu davranışlar fiziksel sağlık açısından risk taşıyabilir. Burada önemli olan belirli yöntemlerin ayrıntısı değil, davranışların tekrarlayıcı hale gelmesi ve yeme döngüsünün bir parçası olmasıdır."),
      section("Bulimiya Nervoza Dış Görünüşten Anlaşılır mı?", "Hayır. Kişinin dış görünümü bulimiya nervoza olup olmadığını göstermez. Belirtiler çevreden uzun süre fark edilmeyebilir ve kişi yoğun utanç veya suçluluk yaşayabilir. Değerlendirme beden görünümüne değil, yeme davranışı, kontrol kaybı, telafi davranışları ve kişinin bu süreçle ilgili yaşantısına dayanır."),
      section("Neden Hem Ruhsal Hem Bedensel Değerlendirme Önemlidir?", "Tekrarlayan yeme ve telafi döngüleri sıvı-elektrolit dengesi, sindirim sistemi, ağız ve diş sağlığı gibi bedensel alanları etkileyebilir. Aynı zamanda kaygı, depresif belirtiler ve beden algısıyla ilgili güçlükler eşlik edebilir. Bu nedenle belirgin veya tekrarlayıcı belirtilerde psikiyatrik ve tıbbi değerlendirme birlikte önem taşır.")
    ],
    relatedTerms: [
      { term: "Anoreksiya nervoza", slug: "anoreksiya-nervoza" },
      { term: "Tıkınırcasına yeme bozukluğu", slug: "tikinarcasina-yeme-bozuklugu" },
      { term: "Yeme bozukluğu", slug: "yeme-bozuklugu" }
    ]
  }],

  ["ayrilma-kaygisi", {
    shortDefinition: "Ayrılma kaygısı, kişinin bağlandığı kişilerden ayrılma veya onları kaybetme olasılığı karşısında yaşadığı yoğun kaygıyı ifade eder.",
    intro: "Ayrılmaya ilişkin kaygı çocuk gelişiminin bazı dönemlerinde beklenen bir durumdur. Klinik açıdan önemli hale gelmesi; kaygının yaş ve gelişim düzeyine göre aşırı olması, süreklilik göstermesi ve günlük yaşamı belirgin biçimde etkilemesiyle ilişkilidir.",
    sections: [
      section("Ayrılma Kaygısı Nasıl Görülebilir?", "Kişi bağlandığı kişiden uzak kalacağı durumlarda yoğun endişe yaşayabilir, ayrılmayı gerektiren etkinliklerden kaçınabilir veya yakınının başına kötü bir şey geleceğine ilişkin sürekli düşünceler geliştirebilir. Çocuklarda okula gitmek istememe, yalnız kalmakta güçlük veya ayrılık öncesinde bedensel yakınmalar görülebilir."),
      section("Çocuklukta Her Ayrılma Kaygısı Sorun mudur?", "Hayır. Özellikle erken çocukluk döneminde bakım veren kişiden ayrılmaya tepki göstermek gelişimin doğal bir parçası olabilir. Değerlendirmede çocuğun yaşı, gelişimsel düzeyi, kaygının ne kadar sürdüğü ve eğitim, sosyal yaşam ya da aile düzenini ne ölçüde etkilediği dikkate alınır."),
      section("Ayrılma Kaygısı Yetişkinlerde de Görülür mü?", "Evet. Yetişkinlerde eş, çocuk, ebeveyn veya yakın olunan başka bir kişiden ayrılmaya ilişkin yoğun endişe görülebilir. Kişi yalnız kalmaktan kaçınabilir, yakınlarının güvenliğini sık sık kontrol etme ihtiyacı hissedebilir veya ayrılık gerektiren iş ve seyahatlerden uzak durabilir."),
      section("Ne Zaman Değerlendirme Önemlidir?", "Kaygı beklenen gelişimsel düzeyin belirgin biçimde ötesindeyse, uzun sürüyorsa veya okul, iş, sosyal yaşam ve aile ilişkilerini etkiliyorsa profesyonel değerlendirme yararlı olabilir. Değerlendirmede yakın zamanda yaşanan kayıplar, yaşam değişiklikleri ve eşlik eden başka kaygı belirtileri de göz önünde bulundurulur.")
    ],
    relatedTerms: [
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Yaygın anksiyete bozukluğu", slug: "yaygin-anksiyete-bozuklugu" },
      { term: "Agorafobi", slug: "agorafobi" },
      { term: "Sosyal anksiyete bozukluğu", slug: "sosyal-anksiyete-bozuklugu" }
    ]
  }],

  ["bagimlilik", {
    shortDefinition: "Bağımlılık, bir maddeyi kullanma veya belirli bir davranışı sürdürme üzerinde kontrolün azalması ve olumsuz sonuçlara rağmen davranışın devam etmesiyle ilişkili klinik bir kavramdır.",
    intro: "Bağımlılık irade zayıflığı olarak açıklanamaz. Ödül, motivasyon, öğrenme ve kontrol süreçleriyle ilişkili karmaşık bir durumdur ve kişinin biyolojik, psikolojik ve sosyal koşulları birlikte değerlendirilir.",
    sections: [
      section("Bağımlılıkta Kontrol Kaybı Ne Anlama Gelir?", "Kişi kullanımını veya davranışını azaltmayı planladığı halde bunu sürdürmekte zorlanabilir. Madde veya davranış giderek daha fazla zaman ve zihinsel alan kaplayabilir. İş, eğitim, ilişkiler veya sağlık üzerinde sorunlar ortaya çıkmasına rağmen davranışın devam etmesi klinik açıdan önemlidir."),
      section("Her Sık Kullanım Bağımlılık mıdır?", "Hayır. Bir davranışın sık tekrarlanması tek başına bağımlılık tanımı için yeterli değildir. Kontrol kaybı, yoğun istek, günlük sorumlulukların etkilenmesi ve zarar görülmesine rağmen davranışın sürmesi gibi özellikler birlikte değerlendirilir. Bu nedenle yalnızca sıklığa bakılarak kişiye bağımlılık tanısı konulmaz."),
      section("Tolerans ve Yoksunluk Her Zaman Olur mu?", "Bazı madde kullanım bozukluklarında aynı etki için zamanla daha fazla maddeye ihtiyaç duyulması tolerans, kullanım azaltıldığında belirtilerin ortaya çıkması ise yoksunluk olarak tanımlanabilir. Ancak bağımlılık kavramı yalnızca bu iki özelliğe indirgenmez ve farklı maddelerde klinik görünüm değişebilir."),
      section("Bağımlılık Neden Bütüncül Değerlendirilir?", "Madde veya davranışın kendisinin yanında kişinin ruhsal durumu, fiziksel sağlığı, aile ve sosyal çevresi, işlevselliği ve eşlik eden başka sorunlar da önemlidir. Damgalayıcı ifadeler yerine sorunun işlevselliğe etkisini ve kişinin değişim kapasitesini dikkate alan bir yaklaşım klinik değerlendirme açısından daha uygundur.")
    ],
    relatedTerms: [
      { term: "Alkol kullanım bozukluğu", slug: "alkol-kullanim-bozuklugu" },
      { term: "Anksiyete", slug: "anksiyete" }
    ]
  }],

  ["baglanma", {
    shortDefinition: "Bağlanma, kişinin özellikle yakın ve güvenilir ilişkiler aracılığıyla güvenlik, korunma ve duygusal yakınlık kurmasını açıklayan gelişimsel ve psikolojik bir kavramdır.",
    intro: "Bağlanma yalnızca çocukluk dönemine ait değildir. Erken bakım deneyimleri önemli olmakla birlikte kişinin ilişkileri yaşam boyunca yeni deneyimler ve sosyal bağlar aracılığıyla değişmeye devam edebilir.",
    sections: [
      section("Bağlanma Sistemi Ne İşe Yarar?", "Bağlanma sistemi özellikle tehdit, korku, hastalık veya belirsizlik dönemlerinde güvenilir bir kişiye yakınlık arama eğilimiyle ilişkilidir. Çocuklukta bakım veren kişinin ulaşılabilir olması güvenlik hissini desteklerken, yetişkinlikte benzer ihtiyaçlar yakın ilişkiler içinde farklı biçimlerde görülebilir."),
      section("Bağlanma Biçimleri Değişmez Özellikler midir?", "Hayır. Bağlanma örüntüleri kişinin ilişkilerindeki eğilimleri anlamaya yardımcı olabilir ancak değişmez kişilik etiketleri değildir. Farklı ilişkilerde farklı davranışlar görülebilir ve güvenilir ilişkiler, yaşam deneyimleri veya psikolojik destek kişinin ilişki kurma biçimini zaman içinde etkileyebilir."),
      section("Bağlanma ile Bağımlılık Aynı Şey midir?", "Hayır. Yakınlık aramak ve bir ilişkide güven hissetmek insan gelişiminin doğal bir parçasıdır. Bağlanma kavramı, madde veya davranış bağımlılığıyla aynı anlamı taşımaz. Ayrıca bir kişiye önem vermek ya da ayrılık sırasında üzülmek tek başına sağlıksız bir ilişki örüntüsü anlamına gelmez."),
      section("Bağlanma Neden Klinik Görüşmelerde Ele Alınabilir?", "Yakın ilişkilerde güven, terk edilme korkusu, yakınlık kurma veya destek isteme biçimleri kişinin yaşadığı güçlükleri anlamada yararlı bilgiler sağlayabilir. Ancak bağlanma örüntüsü tek başına psikiyatrik tanı değildir ve kişinin tüm ilişkilerini tek bir kavramla açıklamak için kullanılmamalıdır.")
    ],
    relatedTerms: [
      { term: "Ayrılma kaygısı", slug: "ayrilma-kaygisi" },
      { term: "Travma sonrası stres bozukluğu", slug: "travma-sonrasi-stres-bozuklugu" },
      { term: "Sosyal anksiyete bozukluğu", slug: "sosyal-anksiyete-bozuklugu" },
      { term: "Anksiyete", slug: "anksiyete" }
    ]
  }],

  ["bastirma", {
    shortDefinition: "Bastırma, psikodinamik kuramda kabul edilmesi zor düşünce, dürtü veya duyguların bilinçli farkındalığın dışında tutulmasını açıklamak için kullanılan bir savunma mekanizması kavramıdır.",
    intro: "Bastırma günlük dilde bir duyguyu bilinçli biçimde göstermemekle aynı anlamda kullanılmayabilir. Psikodinamik kullanımda süreç büyük ölçüde bilinçdışı kabul edilir.",
    sections: [
      section("Bastırma Nasıl Tanımlanır?", "Psikodinamik kurama göre kişi için yoğun çatışma veya kaygı yaratan bazı zihinsel içerikler bilinçli farkındalığın dışında tutulabilir. Bu yaklaşım doğrudan gözlenebilen tek bir belirtiyi değil, zihinsel çatışmaların nasıl düzenlendiğine ilişkin kuramsal bir açıklamayı ifade eder."),
      section("Bastırma ile Bilinçli Olarak Düşünmemek Aynı Şey midir?", "Hayır. Kişinin bir konuyu şimdilik düşünmemeye bilinçli biçimde karar vermesi farklı bir süreçtir. Bastırma kavramında kişinin hangi içeriği dışarıda tuttuğunun doğrudan farkında olmadığı kabul edilir. Bu ayrım özellikle psikodinamik terminolojinin doğru kullanılması açısından önemlidir."),
      section("Bastırma Bellek Kaybı Anlamına Gelir mi?", "Bastırma ile amnezi aynı kavram değildir. Bellek sorunlarının nörolojik, tıbbi, maddeyle ilişkili veya dissosiyatif birçok nedeni olabilir. Geçmişte yaşanan bir olayı hatırlayamama durumu yalnızca bastırma kavramıyla açıklanmamalı ve gerektiğinde farklı nedenler değerlendirilmelidir."),
      section("Bu Kavram Günümüzde Nasıl Kullanılır?", "Bastırma psikodinamik kuram ve psikoterapi literatüründe kullanılan tarihsel ve kuramsal öneme sahip bir kavramdır. Klinik bir değerlendirmede kişinin yaşadığı belirtileri tek başına açıklayan kanıtlanmış bir mekanizma gibi ele alınmaz; kişinin öyküsü, mevcut belirtileri ve diğer olası açıklamalar birlikte değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Dissosiyasyon", slug: "dissosiyasyon" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Travma sonrası stres bozukluğu", slug: "travma-sonrasi-stres-bozuklugu" }
    ]
  }],

  ["bilinc-bulanikligi", {
    shortDefinition: "Bilinç bulanıklığı, kişinin çevresinin ve yaşananların farkına varma, dikkatini sürdürme ve bilgiyi düzenli biçimde işleme kapasitesinde belirgin bozulma görülen klinik bir durumdur.",
    intro: "Bilinç bulanıklığı yalnızca dalgınlık veya unutkanlık değildir. Özellikle yeni başlayan ve saatler ya da günler içinde değişkenlik gösteren bilinç ve dikkat bozuklukları tıbbi açıdan önemli olabilir.",
    sections: [
      section("Bilinç Bulanıklığı Nasıl Görülebilir?", "Kişi bulunduğu yeri veya zamanı karıştırabilir, konuşulanları takip etmekte zorlanabilir ve dikkati kolayca dağılabilir. Yanıtları yavaşlayabilir veya düşünceleri düzensiz görünebilir. Belirtilerin şiddeti gün içinde değişebilir ve kişi bazı zamanlarda daha açık, bazı zamanlarda daha karışık görünebilir."),
      section("Bilinç Bulanıklığı ile Unutkanlık Aynı Şey midir?", "Hayır. Bellek sorunlarında temel güçlük bilgiyi öğrenme veya hatırlamayla ilgili olabilirken bilinç bulanıklığında dikkat, farkındalık ve çevreyle sağlıklı etkileşim kurma kapasitesi de etkilenir. Özellikle ani başlayan yönelim ve dikkat değişikliği basit unutkanlık olarak değerlendirilmemelidir."),
      section("Psikoz ile Nasıl Ayrılır?", "Psikozda sanrı veya varsanı gibi belirtiler bulunabilir ancak kişinin bilinç düzeyi ve dikkati her zaman bozulmuş değildir. Bilinç bulanıklığında ise dikkat ve farkındalıkta belirgin değişiklik ön plandadır. Bazı tıbbi durumlarda algısal değişiklikler de tabloya eşlik edebileceği için ayrım klinik değerlendirmeyle yapılır."),
      section("Ani Bilinç Değişikliği Neden Önemlidir?", "Yeni başlayan bilinç bulanıklığı enfeksiyonlar, metabolik bozukluklar, ilaç veya madde etkileri, nörolojik hastalıklar ve başka akut tıbbi durumlarla ilişkili olabilir. Özellikle ani gelişen belirgin dikkat ve bilinç değişikliği geciktirilmeden tıbbi değerlendirme gerektirebilir.")
    ],
    relatedTerms: [
      { term: "Amnezi", slug: "amnezi" },
      { term: "Psikoz", slug: "psikoz" },
      { term: "Algı bozukluğu", slug: "algi-bozuklugu" }
    ]
  }],

  ["avolisyon", {
    shortDefinition: "Avolisyon, kişinin amaçlı davranışları başlatma ve sürdürme isteğinde belirgin azalma görülmesini ifade eden klinik bir belirtidir.",
    intro: "Avolisyon tembellik veya isteksizlikle eş anlamlı değildir. Kişi yapmak istediği işleri planlamak, başlatmak veya sürdürmekte belirgin güçlük yaşayabilir ve bu durum günlük işlevselliğini etkileyebilir.",
    sections: [
      section("Avolisyon Günlük Yaşamda Nasıl Görülebilir?", "Kişi kişisel bakım, ev işleri, eğitim veya çalışma gibi günlük sorumlulukları başlatmakta zorlanabilir. Yapılması gerekenleri bildiği halde harekete geçmek güç olabilir ve etkinlikler yarım kalabilir. Bu durum zamanla sosyal yaşamın ve bağımsız işlevselliğin azalmasına yol açabilir."),
      section("Avolisyon ile Depresyondaki İsteksizlik Aynı Şey midir?", "Her iki durumda da etkinlik düzeyinde azalma görülebilir ancak nedenleri aynı değildir. Depresyonda çökkün duygudurum, umutsuzluk, enerji azalması veya zevk alamama ön planda olabilir. Avolisyon ise özellikle amaçlı davranışı başlatma ve sürdürme kapasitesindeki azalmayı tanımlar. Klinik değerlendirmede eşlik eden belirtiler ayrımı kolaylaştırır."),
      section("Avolisyon Şizofrenide Neden Önemlidir?", "Avolisyon, şizofrenide görülebilen negatif belirtilerden biridir. Negatif belirtiler kişinin normalde sahip olduğu motivasyon, duygusal ifade veya sosyal etkileşim gibi işlevlerde azalmayı ifade eder. Ancak avolisyon yalnızca tek bir bozukluğa özgü değildir ve tek başına şizofreni tanısı anlamına gelmez."),
      section("Değerlendirmede Hangi Etkenler Göz Önünde Bulundurulur?", "Uyku bozuklukları, depresif belirtiler, kullanılan ilaçlar, madde kullanımı, fiziksel hastalıklar ve çevresel koşullar motivasyon ve etkinlik düzeyini etkileyebilir. Bu nedenle belirgin ve kalıcı işlev kaybında kişinin olağan davranış düzeyi, belirtilerin başlangıcı ve eşlik eden diğer değişiklikler birlikte değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Apati", slug: "apati" },
      { term: "Anhedoni", slug: "anhedoni" },
      { term: "Şizofreni", slug: "sizofreni" }
    ]
  }],
  ["asiri-genelleme", {
    shortDefinition: "Aşırı genelleme, tek bir olaydan veya sınırlı sayıdaki deneyimden hareketle çok daha geniş ve kesin sonuçlara ulaşma eğilimini tanımlayan bilişsel bir çarpıtmadır.",
    intro: "Aşırı genellemede kişi bir deneyimi yalnızca o olayın koşulları içinde değerlendirmek yerine benzer tüm durumlara yayılan genel bir kural gibi yorumlayabilir.",
    sections: [
      section("Aşırı Genelleme Nasıl Görülebilir?", "Bir sınavda başarısız olan kişinin “Ben hiçbir şeyi başaramam” ya da bir ilişkide hayal kırıklığı yaşayan kişinin “İnsanlara asla güvenilmez” sonucuna varması aşırı genellemeye örnek olabilir. Ortak özellik, tek veya sınırlı bir deneyimin geleceğe ve farklı durumlara geniş biçimde uygulanmasıdır."),
      section("Aşırı Genelleme ile Gerçekçi Sonuç Çıkarma Arasındaki Fark Nedir?", "Geçmiş deneyimlerden öğrenmek günlük yaşamın doğal bir parçasıdır. Sorun, eldeki kanıtın desteklediğinden daha geniş ve kesin bir sonuca ulaşılmasıdır. Gerçekçi değerlendirmede benzerliklerin yanında farklılıklar, istisnalar ve yeni koşullar da hesaba katılır."),
      section("Dil Kullanımı Bu Düşünce Biçimini Nasıl Gösterebilir?", "“Her zaman”, “hiçbir zaman”, “herkes” veya “hiç kimse” gibi mutlak ifadeler bazen aşırı genellemenin ipucu olabilir. Ancak bu kelimelerin kullanılması tek başına bilişsel çarpıtma olduğu anlamına gelmez. Düşüncenin hangi kanıtlara dayandığı ve istisnaların göz ardı edilip edilmediği önemlidir."),
      section("Aşırı Genelleme Neden Önemlidir?", "Bu düşünce biçimi kişinin kendisi, ilişkileri veya geleceği hakkında katı ve olumsuz sonuçlara ulaşmasına katkıda bulunabilir. Özellikle kaygı ve depresif dönemlerde olumsuz deneyimler daha geniş biçimde yorumlanabilir. Bilişsel değerlendirmede amaç düşünceyi zorla olumlu hale getirmek değil, ulaşılan sonucun mevcut kanıtlarla ne ölçüde desteklendiğini incelemektir.")
    ],
    relatedTerms: [
      { term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" },
      { term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi" }
    ]
  }],
  ["anoreksiya-nervoza", {
    shortDefinition: "Anoreksiya nervoza, beslenmenin belirgin biçimde kısıtlanması, kilo alma veya kilo artışıyla ilgili yoğun korku ve beden ağırlığı ya da biçiminin kişinin kendisini değerlendirmesinde aşırı önem kazanmasıyla ilişkili bir yeme bozukluğudur.",
    intro: "Anoreksiya nervoza yalnızca iştahsızlık veya zayıf görünmek istemek değildir. Beslenme davranışı, beden algısı, kilo alma korkusu ve kişinin fiziksel sağlığı üzerindeki etkiler birlikte değerlendirilir.",
    sections: [
      section("Anoreksiya Nervoza Nasıl Görülebilir?", "Kişi yemek yeme konusunda giderek daha katı kurallar geliştirebilir, öğünlerden kaçınabilir veya beden ağırlığı ve görünümüyle ilgili düşüncelere yoğun biçimde odaklanabilir. Bu davranışlar zamanla sosyal yaşamı, okul veya iş düzenini ve fiziksel sağlığı etkileyebilir. Belirtiler her kişide aynı biçimde ortaya çıkmaz."),
      section("Beden Algısı Neden Önemlidir?", "Bazı kişiler bedenlerini olduğundan farklı algılayabilir veya beden ağırlığı ve biçimine kendilik değerinde aşırı önem verebilir. Dışarıdan yapılan yorumlar kişinin yaşadığı içsel deneyimi tam olarak yansıtmayabilir. Bu nedenle değerlendirmede yalnızca görünüm değil, kişinin bedenine ilişkin düşünceleri ve bu düşüncelerin davranışlarını nasıl etkilediği de ele alınır."),
      section("Anoreksiya Nervoza Yalnızca Genç Kadınlarda mı Görülür?", "Hayır. Her yaştan ve her cinsiyetten kişide görülebilir. Belirtilerin fark edilmesi bazı gruplarda gecikebilir çünkü yeme bozukluklarıyla ilgili toplumsal kalıplar herkesin aynı görünmesini bekletebilir. Tanısal değerlendirme kişinin cinsiyetine veya dış görünümüne değil, klinik belirtilerin bütününe dayanır."),
      section("Neden Tıbbi Değerlendirme de Önemlidir?", "Uzun süreli ve belirgin beslenme kısıtlaması kalp-damar sistemi, hormonlar, kemik sağlığı, enerji düzeyi ve diğer bedensel işlevleri etkileyebilir. Bu nedenle anoreksiya nervoza yalnızca psikolojik belirtiler üzerinden ele alınmaz. Belirgin beslenme değişikliği, fiziksel güçsüzlük veya günlük işlevsellikte bozulma olduğunda psikiyatrik ve tıbbi değerlendirme birlikte önem taşır.")
    ],
    relatedTerms: [
      { term: "Bulimiya nervoza", slug: "bulimiya-nervoza" },
      { term: "Tıkınırcasına yeme bozukluğu", slug: "tikinarcasina-yeme-bozuklugu" },
      { term: "Yeme bozukluğu", slug: "yeme-bozuklugu" }
    ]
  }],
  ["amnezi", {
    shortDefinition: "Amnezi, kişinin daha önce öğrenilmiş bilgileri hatırlamasında veya yeni bilgileri kalıcı belleğe aktarmasında belirgin güçlük yaşamasını ifade eden klinik bir bellek bozukluğudur.",
    intro: "Amnezi basit unutkanlıkla aynı şey değildir. Bellek kaybının hangi dönemi etkilediği, yeni bilgi öğrenme kapasitesinin korunup korunmadığı ve eşlik eden nörolojik ya da psikiyatrik belirtiler değerlendirmede önemlidir.",
    sections: [
      section("Amnezi Hangi Biçimlerde Görülebilir?", "Bazı kişiler geçmişte yaşanan olayları hatırlamakta zorlanırken bazı kişiler yeni bilgileri öğrenip daha sonra hatırlamakta güçlük yaşayabilir. Bellek kaybı belirli bir zaman aralığıyla sınırlı olabilir veya daha geniş bir dönemi etkileyebilir. Günlük yaşamda aynı soruları tekrar sorma, yakın zamanda yapılan konuşmaları unutma veya belirli olayların bazı bölümlerini hatırlayamama görülebilir."),
      section("Anterograd ve Retrograd Amnezi Nedir?", "Anterograd amnezide temel güçlük, olaydan veya hastalıktan sonra yeni anılar oluşturmak ve bunları daha sonra hatırlamaktır. Retrograd amnezide ise daha önce edinilmiş anıların hatırlanması etkilenir. İki tür aynı kişide birlikte bulunabilir ve bellek kaybının kapsamı altta yatan nedene göre değişebilir."),
      section("Amnezi ile Günlük Unutkanlık Arasındaki Fark Nedir?", "Yoğunluk, stres, uykusuzluk veya dikkatin dağılması sırasında isimleri ya da küçük ayrıntıları unutmak sık görülebilir. Amnezide ise bellek kaybı daha belirgindir ve kişinin günlük işlevselliğini etkileyebilir. Kişinin yalnızca bilgiyi hatırlamakta zorlanması ile bilginin başlangıçta yeterince öğrenilememiş olması da birbirinden ayrılmalıdır."),
      section("Amnezi Hangi Durumlarla İlişkili Olabilir?", "Kafa travması, bazı nörolojik hastalıklar, nöbetler, ağır metabolik bozukluklar, maddeler veya bazı dissosiyatif durumlar bellek kaybıyla ilişkili olabilir. Ani başlayan, belirgin veya ilerleyici bellek kaybında yalnız psikiyatrik nedenlere odaklanılmamalı; nörolojik ve tıbbi nedenler de değerlendirilmelidir.")
    ],
    relatedTerms: [
      { term: "Epizodik bellek", slug: "epizodik-bellek" },
      { term: "Semantik bellek", slug: "semantik-bellek" },
      { term: "Dissosiyasyon", slug: "dissosiyasyon" }
    ]
  }],
  ["alkol-kullanim-bozuklugu", {
    shortDefinition: "Alkol kullanım bozukluğu, alkol kullanımını kontrol etmede güçlük, kullanımın günlük yaşamı etkilemesi ve olumsuz sonuçlara rağmen kullanımın sürmesiyle ilişkili bir klinik tablodur.",
    intro: "Alkol kullanım bozukluğu yalnızca ne kadar alkol tüketildiğiyle tanımlanmaz. Kullanım üzerindeki kontrol, kişinin sorumlulukları, ilişkileri, sağlığı ve günlük işlevselliği üzerindeki etkiler birlikte değerlendirilir.",
    sections: [
      section("Alkol Kullanım Bozukluğu Nasıl Fark Edilebilir?", "Kişi azaltmaya veya bırakmaya çalışmasına rağmen kullanımını kontrol etmekte zorlanabilir. Alkolle ilgili düşünceler günlük yaşamda giderek daha fazla yer kaplayabilir ve kullanım; iş, eğitim, aile ilişkileri veya sosyal sorumluluklarla çatışmaya başlayabilir. Zarar gördüğünü fark etmesine rağmen kullanımın sürmesi de klinik açıdan önemlidir."),
      section("Yoğun Kullanım ile Bozukluk Aynı Şey midir?", "Hayır. Bir kişinin belirli bir dönemde fazla alkol tüketmesi tek başına alkol kullanım bozukluğu olduğu anlamına gelmez. Değerlendirmede kullanımın sürekliliği, kontrol kaybı, işlevselliğe etkisi ve ortaya çıkan sorunlara rağmen sürüp sürmediği dikkate alınır. Bu nedenle yalnızca miktara bakarak tanısal sonuç çıkarılmaz."),
      section("Tolerans ve Yoksunluk Ne Anlama Gelir?", "Bazı kişiler aynı etkiyi hissetmek için zamanla daha fazla alkol kullanma ihtiyacı duyabilir; bu durum tolerans olarak adlandırılır. Kullanım azaltıldığında veya bırakıldığında bedensel ve ruhsal belirtilerin ortaya çıkması ise yoksunlukla ilişkili olabilir. Ancak alkol kullanım bozukluğu yalnızca tolerans veya yoksunluğun varlığıyla tanımlanmaz."),
      section("Ne Zaman Değerlendirme Önemlidir?", "Alkol kullanımı kişinin sağlığını, ilişkilerini, işini veya günlük sorumluluklarını etkiliyorsa ya da kişi kullanımını kontrol etmekte zorlanıyorsa profesyonel değerlendirme anlamlıdır. Ani biçimde kullanım bırakılması bazı kişiler için tıbbi risk taşıyabileceğinden, belirgin ve uzun süreli kullanım öyküsünde bırakma süreci de bireysel olarak değerlendirilmelidir.")
    ],
    relatedTerms: [
      { term: "Bağımlılık", slug: "bagimlilik" },
      { term: "Yoksunluk", slug: "yoksunluk" },
      { term: "Tolerans", slug: "tolerans" }
    ]
  }],
  ["algi-bozuklugu", {
    shortDefinition: "Algı bozukluğu, duyusal bilgilerin algılanması veya anlamlandırılmasında olağan deneyimden belirgin farklılıkların ortaya çıkmasını ifade eden geniş bir klinik kavramdır.",
    intro: "Algı bozukluğu tek bir belirtiyi tanımlamaz. Gerçek bir uyaranın yanlış yorumlanmasından dışarıda karşılığı olmayan bir duyusal deneyime kadar farklı algısal değişiklikler bu başlık altında ele alınabilir.",
    sections: [
      section("Algı Bozukluğu Hangi Biçimlerde Görülebilir?", "Algısal değişiklikler görme, işitme, dokunma, koku veya tat gibi farklı duyusal alanlarda ortaya çıkabilir. Kişi gerçek bir sesi veya görüntüyü farklı yorumlayabilir ya da çevrede karşılığı olmayan bir duyusal deneyim yaşayabilir. Algının yoğunluğu, süresi ve kişinin deneyime ne kadar inandığı klinik değerlendirmede önem taşır."),
      section("İllüzyon ile Varsanı Arasındaki Fark Nedir?", "İllüzyonda dış dünyada gerçek bir uyaran vardır ancak bu uyaran yanlış algılanır veya farklı yorumlanır. Örneğin karanlıkta bir nesnenin başka bir şeye benzetilmesi illüzyona örnek olabilir. Varsanıda ise algılanan ses, görüntü veya başka duyusal deneyimin dış dünyada karşılığı yoktur. Bu iki kavram klinik olarak birbirinden ayrılır."),
      section("Algısal Değişiklikler Her Zaman Psikoz Anlamına mı Gelir?", "Hayır. Yoğun stres, uykusuzluk, bazı nörolojik durumlar, maddeler, ilaçlar veya duyusal yetersizlikler sırasında da algısal değişiklikler ortaya çıkabilir. Psikotik bir tablo değerlendirilirken algı belirtileri tek başına ele alınmaz; düşünce içeriği, gerçekliği değerlendirme, davranış değişiklikleri ve işlevsellik birlikte değerlendirilir."),
      section("Ne Zaman Değerlendirme Önemlidir?", "Yeni başlayan, tekrarlayan veya kişinin gerçekliği değerlendirmesini ve günlük yaşamını belirgin biçimde etkileyen algısal değişikliklerde ayrıntılı değerlendirme önemlidir. Özellikle ani başlayan belirtilerde tıbbi ve nörolojik nedenlerin yanı sıra madde veya ilaç etkileri de göz önünde bulundurulur. Tek bir algısal deneyim üzerinden belirli bir psikiyatrik tanıya varılmaz.")
    ],
    relatedTerms: [
      { term: "Algı", slug: "algi" },
      { term: "Varsanı", slug: "varsani" },
      { term: "İllüzyon", slug: "illuzyon" },
      { term: "Psikoz", slug: "psikoz" }
    ]
  }],
  ["algi", {
    shortDefinition: "Algı, duyu organlarından gelen bilgilerin beyin tarafından seçilmesi, düzenlenmesi ve anlamlandırılması sürecidir.",
    intro: "Algı yalnızca görmek veya duymak değildir. Beyin, çevreden gelen duyusal bilgileri geçmiş deneyimler, dikkat ve içinde bulunulan bağlamla birlikte yorumlayarak anlamlı bir bütün oluşturur.",
    sections: [
      section("Algı Nasıl Oluşur?", "Görme, işitme, dokunma, tat ve koku gibi duyusal sistemlerden gelen bilgiler sinir sistemi tarafından işlenir. Ancak beyin bu bilgileri pasif biçimde kaydetmez; önemli olanları seçer, önceki deneyimlerle karşılaştırır ve anlamlandırır. Bu nedenle aynı uyaran farklı kişiler tarafından veya aynı kişi tarafından farklı zamanlarda farklı biçimde algılanabilir."),
      section("Dikkat Algıyı Nasıl Etkiler?", "Çevrede aynı anda çok sayıda uyaran bulunur ancak bunların yalnızca bir bölümüne odaklanabiliriz. Dikkatin yöneldiği bilgi daha belirgin hale gelirken diğer uyaranlar geri planda kalabilir. Yoğun kaygı, yorgunluk veya uykusuzluk sırasında dikkat belirli uyaranlara daha fazla yönelebilir ve kişinin çevreyi yorumlama biçimi değişebilir."),
      section("Algı ile Duyum Aynı Şey midir?", "Duyum, fiziksel bir uyaranın duyu organları tarafından alınmasını ifade eder. Algı ise bu duyusal bilginin beyinde anlam kazanmasıdır. Örneğin kulağın bir sesi algılaması duyusal sürecin başlangıcıdır; sesin bir insan konuşması, müzik veya tehlike sinyali olarak tanınması ise algısal işlemenin parçasıdır."),
      section("Algısal Değişiklikler Ne Zaman Klinik Önem Taşır?", "Yanlış algılamalar yorgunluk, karanlık ortam, yoğun stres veya dikkatin dağılması gibi günlük koşullarda kısa süreli olarak görülebilir. Ancak dışarıda karşılığı olmayan duyusal deneyimlerin tekrarlaması, gerçekliği değerlendirmeyi etkilemesi veya belirgin işlev kaybı oluşturması durumunda ayrıntılı değerlendirme önemlidir. Bu tür yaşantılar tek başına belirli bir psikiyatrik tanı anlamına gelmez.")
    ],
    relatedTerms: [
      { term: "Algı bozukluğu", slug: "algi-bozuklugu" },
      { term: "Varsanı", slug: "varsani" },
      { term: "İllüzyon", slug: "illuzyon" }
    ]
  }],
  ["akran-zorbaligi", {
    shortDefinition: "Akran zorbalığı, benzer yaş veya sosyal konumdaki kişiler arasında güç dengesizliği içeren ve tekrarlayıcı biçimde zarar verme amacı taşıyan davranışları ifade eder.",
    intro: "Akranlar arasında yaşanan her tartışma veya anlaşmazlık zorbalık değildir. Zorbalıkta davranışın tekrarlanması, hedef alınan kişinin kendisini savunmakta zorlanması ve taraflar arasında belirgin bir güç eşitsizliği bulunması önemlidir.",
    sections: [
      section("Akran Zorbalığı Hangi Biçimlerde Görülebilir?", "Zorbalık yalnızca fiziksel saldırı şeklinde ortaya çıkmaz. Küçümseme, lakap takma, tehdit etme, sosyal gruptan dışlama, söylenti yayma veya çevrim içi ortamda hedef gösterme gibi sözel ve ilişkisel davranışlar da zorbalık kapsamında değerlendirilebilir. Bazı durumlarda birden fazla zorbalık biçimi aynı anda görülebilir."),
      section("Çatışma ile Zorbalık Arasındaki Fark Nedir?", "Sıradan akran çatışmalarında tarafların güçleri genellikle birbirine daha yakındır ve anlaşmazlık tek bir olayla sınırlı kalabilir. Zorbalıkta ise aynı kişi veya grup tekrar tekrar hedef alınır ve hedef olan kişi durumu durdurmakta güçlük yaşayabilir. Bu nedenle yalnızca olayın ne olduğuna değil, tekrar edip etmediğine ve güç dengesine de bakılır."),
      section("Akran Zorbalığı Çocuk ve Ergenleri Nasıl Etkileyebilir?", "Sürekli hedef alınmak okuldan kaçınma, ders başarısında düşme, sosyal geri çekilme, uyku sorunları, kaygı veya özgüvende azalma gibi sonuçlarla ilişkili olabilir. Bazı çocuklar yaşadıklarını doğrudan anlatmak yerine okula gitmek istememe, sık bedensel yakınmalar bildirme veya arkadaşlık ilişkilerinden uzaklaşma gibi davranış değişiklikleri gösterebilir."),
      section("Ne Zaman Yetişkin Desteği Gerekir?", "Zorbalığın tekrar etmesi, çocuğun kendisini güvende hissetmemesi veya okul ve sosyal yaşamının belirgin biçimde etkilenmesi durumunda yetişkinlerin müdahalesi önemlidir. Aile, okul ve gerektiğinde ilgili profesyoneller birlikte hareket etmelidir. Çocuğa yalnızca karşılık vermesini veya durumu görmezden gelmesini söylemek sorumluluğu hedef alınan kişiye yükleyebilir ve sorunun çözümünü zorlaştırabilir.")
    ],
    relatedTerms: [
      { term: "Sosyal anksiyete bozukluğu", slug: "sosyal-anksiyete-bozuklugu" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Okul reddi", slug: "okul-reddi" }
    ]
  }],
  ["akinezi", {
    shortDefinition: "Akinezi, istemli hareketlerin başlatılmasında belirgin azalma veya güçlük görülmesini ifade eden klinik bir bulgudur.",
    intro: "Akinezi yalnızca yavaş hareket etmek değildir. Kişinin yapmak istediği bir hareketi başlatması gecikebilir veya hareket miktarı genel olarak azalabilir.",
    sections: [
      section("Akinezi Günlük Yaşamda Nasıl Görülebilir?", "Kişi yürümeye başlarken, sandalyeden kalkarken veya elini uzatmak gibi istemli bir hareketi başlatırken belirgin gecikme yaşayabilir. Hareketler daha seyrek hale gelebilir ve kişi uzun süre aynı pozisyonda kalabilir. Yüz mimiklerinin azalması veya kendiliğinden yapılan küçük hareketlerin belirginleşmesi de tabloya eşlik edebilir."),
      section("Akinezi ile Psikomotor Retardasyon Aynı Şey midir?", "Hayır. Psikomotor retardasyonda düşünce, konuşma ve bedensel hareketlerin genel hızında yavaşlama ön plandadır. Akinezide ise özellikle hareketin başlatılması ve kendiliğinden hareket üretimi etkilenir. İki bulgu bazı kişilerde birlikte görülebilir ancak aynı klinik kavram değildir."),
      section("Akinezi Hangi Durumlarla İlişkili Olabilir?", "Akinezi özellikle Parkinson hastalığı ve bazı nörolojik durumlarla ilişkilidir. Bunun yanında bazı ilaçların etkileri veya ağır psikiyatrik tablolar sırasında hareket miktarında belirgin azalma görülebilir. Bu nedenle yeni başlayan akinezi yalnızca psikiyatrik bir belirti olarak yorumlanmamalıdır."),
      section("Değerlendirmede Neler Önemlidir?", "Belirtinin ne zaman başladığı, giderek artıp artmadığı, kas sertliği, titreme, denge sorunu veya başka nörolojik bulguların eşlik edip etmediği değerlendirmede önem taşır. Kişinin hareket etmek istememesi ile hareket başlatmakta fizyolojik olarak zorlanması birbirinden ayrılmalıdır. Yeni veya ilerleyici hareket değişikliklerinde tıbbi değerlendirme önemlidir.")
    ],
    relatedTerms: [
      { term: "Psikomotor retardasyon", slug: "psikomotor-retardasyon" },
      { term: "Katatoni", slug: "katatoni" },
      { term: "Akatizi", slug: "akatizi" }
    ]
  }],
  ["affekt", {
    shortDefinition: "Affekt, kişinin o anda gözlenebilen duygusal dışavurumunu; yüz ifadesi, ses tonu, jestler ve davranışlar üzerinden tanımlayan klinik bir terimdir.",
    intro: "Affekt kişinin iç dünyasındaki bütün duyguları doğrudan göstermez. Klinik değerlendirmede kişinin ne hissettiğini söylemesi ile bu duygunun dışarıdan nasıl göründüğü birlikte ele alınır.",
    sections: [
      section("Affekt Nasıl Değerlendirilir?", "Değerlendirmede yüz ifadesi, göz teması, ses tonundaki değişiklikler, jestler ve kişinin konuştuğu konuya verdiği duygusal tepki göz önünde bulundurulur. Affekt canlı, kısıtlı, künt veya değişken biçimde tanımlanabilir. Bununla birlikte tek bir görüşmedeki görünüm kişinin genel duygusal yapısını bütünüyle temsil etmeyebilir."),
      section("Duygudurum ile Affekt Aynı Şey midir?", "Hayır. Duygudurum, kişinin daha uzun süre devam eden genel duygusal yaşantısını ifade eder ve çoğunlukla kişinin kendi anlatımından anlaşılır. Affekt ise görüşme sırasında gözlenebilen anlık duygusal dışavurumdur. Örneğin kişi kendisini günlerdir üzgün hissettiğini söyleyebilir; bu duygudurum bilgisidir. Konuşurken yüz ifadesinin ve ses tonunun nasıl değiştiği ise affekt değerlendirmesinin parçasıdır."),
      section("Affektin İçerikle Uyumu Neden Önemlidir?", "Duygusal dışavurumun konuşulan konuyla uyumlu olup olmadığı klinik gözlemde dikkate alınabilir. Üzücü bir olay anlatılırken üzüntü ifadesinin görülmesi beklenebilir; ancak insanların duygularını gösterme biçimleri kültür, kişilik ve içinde bulunulan koşullara göre değişir. Bu nedenle tek başına alışılmadık görünen bir yüz ifadesi veya tepki psikiyatrik bir bozukluk anlamına gelmez."),
      section("Künt veya Kısıtlı Affekt Ne Anlama Gelir?", "Kısıtlı affektte kişinin duygusal dışavurumunun çeşitliliği ve yoğunluğu azalabilir. Künt affektte bu azalma daha belirgin olabilir. Bu özellikler bazı psikiyatrik veya nörolojik durumlarda görülebilse de yalnızca affekt gözlemine dayanarak tanı konulmaz. Kullanılan ilaçlar, kişinin o anki yorgunluğu, kaygısı ve sosyal ortam gibi etkenler de dışavurumu değiştirebilir.")
    ],
    relatedTerms: [
      { term: "Duygudurum", slug: "duygudurum" },
      { term: "Künt duygulanım", slug: "kunt-duygulanim" },
      { term: "Şizofreni", slug: "sizofreni" }
    ]
  }],
  ["psikoz", {
    shortDefinition: "Psikoz, kişinin gerçekliği değerlendirme süreçlerinde belirgin bozulmanın ortaya çıkabildiği ve sanrı, varsanı veya düşünce organizasyonunda değişikliklerin görülebildiği bir klinik durumdur.",
    intro: "Psikoz tek başına belirli bir hastalığın adı değildir. Farklı psikiyatrik, tıbbi veya maddeyle ilişkili durumlarda ortaya çıkabilen bir belirti kümesini ifade eder.",
    sections: [
      section("Psikozda Hangi Belirtiler Görülebilir?", "Sanrılar, kişinin gerçeklikle uyuşmayan bir düşünceye güçlü biçimde inanması şeklinde görülebilir. Varsanılarda ise dışarıda karşılığı olmayan ses, görüntü veya başka duyusal deneyimler yaşanabilir. Bazı kişilerde konuşma ve düşünce akışı da belirgin biçimde dağınık hale gelebilir. Belirtilerin biçimi ve yoğunluğu kişiden kişiye değişebilir."),
      section("Psikoz ile Şizofreni Aynı Şey midir?", "Hayır. Şizofreni, psikoz belirtilerinin görülebileceği bozukluklardan biridir ancak her psikoz şizofreni değildir. Bipolar bozukluk, ağır depresif dönemler, bazı maddeler, nörolojik hastalıklar veya başka tıbbi durumlar sırasında da psikotik belirtiler ortaya çıkabilir. Bu nedenle tek bir psikotik belirti üzerinden belirli bir tanıya ulaşılmaz."),
      section("Gerçekliği Değerlendirme Ne Anlama Gelir?", "Gerçekliği değerlendirme, kişinin iç yaşantılarıyla dış dünyadaki olayları birbirinden ayırabilme kapasitesini ifade eder. Psikoz sırasında kişi bazı düşünce veya algılarını dış dünyada gerçekten gerçekleşen olaylar olarak kabul edebilir. İçgörü düzeyi tamamen kaybolmak zorunda değildir ve belirtilerin yoğunluğu zaman içinde değişebilir."),
      section("İlk Kez Ortaya Çıkan Psikotik Belirtiler Neden Önemlidir?", "İlk kez ortaya çıkan belirgin sanrı, varsanı veya davranış değişikliklerinde yalnız psikiyatrik nedenler değil, tıbbi ve maddeyle ilişkili nedenler de değerlendirilir. Ani başlayan, hızla ağırlaşan veya kişinin güvenliği ve günlük işlevselliğini ciddi biçimde etkileyen belirtilerde gecikmeden profesyonel değerlendirme önemlidir. Değerlendirmede belirtilerin başlangıcı, süresi ve eşlik eden diğer bulgular birlikte ele alınır.")
    ],
    relatedTerms: [
      { term: "Şizofreni", slug: "sizofreni" },
      { term: "Sanrı", slug: "sanri" },
      { term: "Varsanı", slug: "varsani" },
      { term: "Bipolar I bozukluk", slug: "bipolar-1-bozukluk" }
    ]
  }],
  ["hipomani", {
    shortDefinition: "Hipomani, duygudurum ve enerjide kişinin olağan halinden belirgin bir yükselme veya irritabilite görülen ancak mani kadar ağır işlev kaybına yol açmayan klinik bir dönemdir.",
    intro: "Hipomani bazen yalnızca “çok iyi hissetme” şeklinde yanlış anlaşılır. Oysa kişinin uyku ihtiyacı, konuşması, düşünce hızı, etkinlik düzeyi ve davranışlarında çevresi tarafından fark edilebilir bir değişiklik söz konusudur.",
    sections: [
      section("Hipomani Nasıl Görülebilir?", "Kişi kendisini olağandan daha enerjik ve üretken hissedebilir, daha az uyuyabilir ve çok daha fazla konuşabilir. Yeni projelere başlama, sosyalliğin artması veya dikkatin kolayca farklı konulara kayması görülebilir. Bazı kişilerde yükselmiş duygudurum yerine belirgin irritabilite ön planda olabilir."),
      section("Kişi Hipomaniyi Her Zaman Sorun Olarak Görür mü?", "Hayır. Artmış enerji ve özgüven başlangıçta olumlu hissedilebilir. Bu nedenle kişi değişikliği sorun olarak değerlendirmeyebilir. Ancak yakın çevre, davranışların kişinin olağan halinden belirgin biçimde farklı olduğunu fark edebilir. Dürtüsel kararlar veya ilişki sorunları da ortaya çıkabilir."),
      section("Mani ile Arasındaki Temel Fark Nedir?", "Manide işlev kaybı daha ağırdır ve tablo kişinin güvenliğini veya günlük yaşamını ciddi biçimde etkileyebilir. Psikotik belirtilerin varlığı da tabloyu mani düzeyinde değerlendirmeyi gerektirir. Hipomanide değişiklik belirgin olmasına rağmen tanım gereği mani düzeyindeki ağır bozulma bulunmaz."),
      section("Bipolar II Bozuklukla İlişkisi Nedir?", "Bipolar II bozuklukta hipomanik dönemlerle birlikte majör depresif dönemler bulunur ve geçmişte tam manik dönem olmaması gerekir. Hipomani tek başına kişinin Bipolar II bozukluğu olduğu anlamına gelmez; dönemlerin süresi, belirtilerin niteliği ve kişinin yaşam öyküsü birlikte değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Mani", slug: "mani" },
      { term: "Bipolar I bozukluk", slug: "bipolar-1-bozukluk" },
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }
    ]
  }],
  ["mani", {
    shortDefinition: "Mani, duygudurum ve enerjide belirgin yükselme veya irritabiliteyle birlikte davranış ve işlevsellikte önemli değişikliklerin ortaya çıktığı klinik bir dönemdir.",
    intro: "Mani yalnızca kişinin çok neşeli, hareketli veya enerjik olması değildir. Uyku ihtiyacı, düşünce hızı, konuşma, kendine güven, etkinlik düzeyi ve karar verme biçiminde kişinin olağan halinden belirgin bir değişiklik ortaya çıkabilir.",
    sections: [
      section("Manik Dönemde Hangi Değişiklikler Görülebilir?", "Kişinin enerjisi belirgin biçimde artabilir, çok daha az uyumasına rağmen kendisini dinlenmiş hissedebilir ve konuşması olağandan hızlı veya baskılı hale gelebilir. Düşünceler çok hızlı ilerliyormuş gibi hissedilebilir ve dikkat kolayca farklı uyaranlara kayabilir. Aynı anda birçok işe başlama, sosyal etkinliğin artması veya olağandışı ölçüde yoğun çalışma görülebilir."),
      section("Karar Verme ve Risk Alma Nasıl Etkilenebilir?", "Manik dönemde kişinin kendine güveni belirgin biçimde artabilir ve kendi kapasitesiyle ilgili gerçekçi olmayan değerlendirmeler gelişebilir. Sonuçları yeterince düşünmeden maddi, sosyal veya mesleki kararlar alma görülebilir. Bu davranışların önemli özelliği kişinin olağan tutum ve davranışlarından belirgin biçimde farklılaşması ve günlük işlevselliği olumsuz etkileyebilmesidir."),
      section("Mani ile Hipomani Arasındaki Fark Nedir?", "Mani ve hipomanide duygudurum ve enerji düzeyinde kişinin olağan halinden farklı bir değişiklik vardır. Manide belirtiler daha ağırdır ve sosyal ya da mesleki işlevsellikte belirgin bozulmaya yol açabilir. Hastane düzeyinde bakım gereksinimi veya psikotik belirtilerin ortaya çıkması da tabloyu mani düzeyinde değerlendirmeyi gerektirebilir. Hipomani tanım gereği bu ağırlıkta bir işlev kaybı oluşturmaz."),
      section("Mani Bipolar Bozukluk Açısından Neden Önemlidir?", "En az bir manik dönemin bulunması Bipolar I bozukluğun tanımlanmasında temel öneme sahiptir. Bununla birlikte yalnızca enerji artışı, az uyuma veya hızlı konuşma görülmesi tek başına bipolar bozukluk anlamına gelmez. Bazı maddeler, ilaçlar ve tıbbi durumlar da mani benzeri belirtilerle ilişkili olabilir; bu nedenle belirtilerin başlangıcı, süresi ve kişinin olağan işlevselliğindeki değişiklik birlikte değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Bipolar I bozukluk", slug: "bipolar-1-bozukluk" },
      { term: "Hipomani", slug: "hipomani" },
      { term: "Psikoz", slug: "psikoz" }
    ]
  }],
  ["derealizasyon", {
    shortDefinition: "Derealizasyon, kişinin çevresini alışılmadık, uzak, sisli veya gerçek dışıymış gibi algıladığı dissosiyatif bir deneyimdir.",
    intro: "Derealizasyonda çevre gerçekten değişmez; kişinin çevreyi algılama biçimi değişir. Tanıdık bir ortam aniden yabancı, cansız veya sanki bir filmin içindeymiş gibi hissedilebilir.",
    sections: [
      section("Derealizasyon Nasıl Hissedilebilir?", "Kişi çevresindeki nesnelerin uzak, yapay veya iki boyutlu göründüğünü söyleyebilir. İnsanların veya mekanların tanıdık olduğunu bilmesine rağmen onları alışılmadık biçimde yabancı hissedebilir. Sesler, renkler veya mesafeler de farklı algılanabilir."),
      section("Gerçekliği Değerlendirme Korunur mu?", "Çoğu derealizasyon deneyiminde kişi çevrenin gerçekten değişmediğini bilir. “Dünya gerçek değil” hissi yaşasa bile bunun kendi algısındaki bir değişiklik olduğunun farkındadır. Bu durum, gerçekliği değerlendirme yetisinin belirgin biçimde bozulduğu psikotik yaşantılardan ayrımda önemlidir."),
      section("Depersonalizasyon ile Farkı Nedir?", "Depersonalizasyonda yabancılaşma kişinin kendisine, bedenine veya zihinsel süreçlerine yöneliktir. Derealizasyonda ise temel değişiklik çevrenin algılanmasındadır. İki belirti sıklıkla birlikte görülebilir ve dissosiyatif deneyimlerin farklı yüzlerini oluşturabilir."),
      section("Kaygı ve Travmayla İlişkisi Var mıdır?", "Yoğun kaygı, panik atak, travmatik yaşantılar ve bazı dissosiyatif durumlarda derealizasyon gelişebilir. Bununla birlikte bu belirti yalnızca tek bir psikiyatrik duruma özgü değildir. Tekrarlayıcı veya günlük yaşamı belirgin biçimde etkileyen deneyimlerde diğer belirtilerle birlikte değerlendirilmesi önemlidir. Özellikle deneyimin ne zaman başladığı, ne kadar sürdüğü ve panik ya da yoğun stresle birlikte ortaya çıkıp çıkmadığı ayırıcı değerlendirmede yardımcı olabilir.")
    ],
    relatedTerms: [
      { term: "Depersonalizasyon", slug: "depersonalizasyon" },
      { term: "Dissosiyasyon", slug: "dissosiyasyon" },
      { term: "Anksiyete", slug: "anksiyete" }
    ]
  }],
  ["depersonalizasyon", { shortDefinition: "Depersonalizasyon, kişinin kendisini, bedenini, duygularını veya zihinsel süreçlerini yabancılaşmış ya da dışarıdan izliyormuş gibi algılamasıdır.", intro: "Depersonalizasyon sırasında kişi “kendim gibi hissetmiyorum” veya “sanki kendimi dışarıdan izliyorum” şeklinde bir deneyim tarif edebilir. Bu yaşantı rahatsız edici olabilir ancak kişi çoğu zaman deneyimin öznel bir algı değişikliği olduğunun farkındadır.", sections: [section("Depersonalizasyon Nasıl Hissedilebilir?", "Kişi bedeninin kendisine ait değilmiş gibi olduğunu, hareketlerinin otomatikleştiğini veya duygularıyla arasında bir mesafe oluştuğunu hissedebilir. Bazı kişiler kendi sesini veya görüntüsünü yabancı bulabilir. Bu deneyimler kısa süreli olabileceği gibi bazı durumlarda daha uzun süre devam edebilir."), section("Gerçeklikle Bağ Kopar mı?", "Depersonalizasyonda gerçekliği değerlendirme genellikle korunur. Kişi yaşadığı yabancılaşma hissinin garip olduğunu bilir ve bunun gerçekten bedeninden ayrıldığı anlamına gelmediğini çoğunlukla fark eder. Bu özellik, bazı psikotik yaşantılardan ayrımda önemlidir."), section("Derealizasyondan Farkı Nedir?", "Depersonalizasyonda yabancılaşma kişinin kendisine yöneliktir. Derealizasyonda ise çevre, insanlar veya mekanlar alışılmadık, uzak veya gerçek dışı algılanabilir. İki deneyim aynı kişide birlikte ortaya çıkabilir."), section("Hangi Durumlarda Görülebilir?", "Yoğun stres, panik, travma sonrası durumlar veya bazı dissosiyatif tablolar sırasında depersonalizasyon yaşanabilir. Bununla birlikte tek başına kısa süreli bir depersonalizasyon deneyimi belirli bir bozukluk olduğu anlamına gelmez. Süreklilik, sıkıntı düzeyi ve günlük yaşama etkisi değerlendirmede önemlidir.")], relatedTerms: [{ term: "Dissosiyasyon", slug: "dissosiyasyon" }, { term: "Derealizasyon", slug: "derealizasyon" }, { term: "Travma sonrası stres bozukluğu", slug: "travma-sonrasi-stres-bozuklugu" }] }],
  ["intihar-dusuncesi", { shortDefinition: "İntihar düşüncesi, kişinin yaşamını sona erdirme veya yaşamaya devam etmeme yönünde düşünceler yaşamasını ifade eden ve klinik açıdan dikkatle değerlendirilmesi gereken bir belirtidir.", intro: "İntihar düşünceleri tek bir biçimde ortaya çıkmaz. Bazı kişiler yaşamın sona ermesini isteme veya “keşke uyanmasam” gibi daha pasif düşünceler yaşarken bazı kişilerde düşünceler daha yoğun ve ısrarlı hale gelebilir. Bu nedenle düşüncenin içeriğinin yanı sıra sıklığı, yoğunluğu ve kişinin kendisini güvende hissedip hissetmediği de önemlidir.", sections: [section("İntihar Düşüncesi Her Zaman Aynı Düzeyde midir?", "Hayır. Düşünceler geçici ve pasif bir yaşamdan vazgeçme isteğinden daha yoğun ve kontrol edilmesi güç düşüncelere kadar farklı düzeylerde olabilir. Klinik değerlendirmede düşüncenin ne kadar sık ortaya çıktığı, kişinin ne kadar zorlandığı, düşüncelerin zaman içinde artıp artmadığı ve kişinin kendisini güvende tutup tutamadığı dikkate alınır."), section("Hangi Durumlarla Birlikte Görülebilir?", "İntihar düşünceleri majör depresif bozukluk, bipolar bozukluk, psikoz, yoğun kaygı, travma sonrası durumlar veya ağır yaşam krizleri sırasında görülebilir. Bununla birlikte belirli bir psikiyatrik tanının bulunması şart değildir. Umutsuzluk, sosyal izolasyon, ciddi stres ve belirgin işlev kaybı kişinin yaşadığı sıkıntının şiddetini artırabilir."), section("Neden Açıkça Sorulması Önemlidir?", "İntihar düşüncelerini açık ve yargılamayan biçimde konuşmak, kişinin yaşadığı sıkıntının anlaşılmasına ve güvenliğinin değerlendirilmesine yardımcı olabilir. Bu düşüncelerin küçümsenmesi, geçiştirilmesi veya yalnızca “bunu düşünme” şeklinde karşılık verilmesi kişinin yaşadığı yükün anlaşılmasını zorlaştırabilir. Değerlendirmede düşüncelerin sıklığı, yoğunluğu ve kişinin destek kaynakları birlikte ele alınır."), section("Ne Zaman Acil Değerlendirme Gerekir?", "Kişinin kendisini güvende tutamayacağını düşünmesi, düşüncelerin hızla yoğunlaşması veya yakın zamanda kendisine zarar verme riski bulunduğunu ifade etmesi durumunda beklemeden acil profesyonel değerlendirme gerekir. Böyle bir durumda kişi yalnız bırakılmamalı ve mevcut sağlık hizmetlerine doğrudan başvurulmalıdır. Bu sayfa yalnızca bilgilendirme amaçlıdır ve bireysel risk değerlendirmesinin yerini tutmaz.")], relatedTerms: [{ term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }, { term: "Bipolar I bozukluk", slug: "bipolar-1-bozukluk" }, { term: "Şizofreni", slug: "sizofreni" }] }],
  ["psikomotor-retardasyon", { shortDefinition: "Psikomotor retardasyon, düşünce, konuşma ve bedensel hareketlerin olağan hızına göre belirgin biçimde yavaşlamasını ifade eden klinik bir bulgudur.", intro: "Psikomotor retardasyon yalnızca kişinin kendisini yorgun hissetmesi değildir. Hareketlerin, konuşmanın ve tepki verme hızının dışarıdan da fark edilebilecek ölçüde yavaşlaması söz konusu olabilir.", sections: [section("Günlük Yaşamda Nasıl Görülebilir?", "Kişi sorulara yanıt vermeden önce uzun süre bekleyebilir, daha yavaş konuşabilir veya günlük işleri tamamlaması olağandan çok daha uzun sürebilir. Yürüme, giyinme veya basit bir işi başlatma gibi hareketlerde yavaşlama görülebilir. Yüz ifadesi ve jestlerde azalma da tabloya eşlik edebilir."), section("Yorgunluktan Farkı Nedir?", "Yorgun kişi enerji eksikliği hissedebilir ancak hareket ve düşünce hızı her zaman belirgin biçimde azalmaz. Psikomotor retardasyonda ise yavaşlama gözlenebilir nitelikte olabilir. Kişinin konuşma temposu, hareketleri ve çevresel uyaranlara yanıt verme biçimi olağan durumundan farklılaşabilir."), section("Depresyonla İlişkisi Nedir?", "Belirgin psikomotor yavaşlama bazı majör depresif dönemlerde görülebilir. Bununla birlikte bu bulgu yalnız depresyona özgü değildir. Bazı nörolojik hastalıklar, ilaçların etkileri veya farklı klinik durumlar da hareket ve tepki hızında azalmaya yol açabilir."), section("Abuli veya Apati ile Aynı Şey midir?", "Hayır. Abulide temel sorun davranışı isteme ve başlatma kapasitesindeki azalmadır. Apatide motivasyon ve ilgi azalması daha ön plandadır. Psikomotor retardasyonda ise kişinin zihinsel ve bedensel süreçlerinin hızında belirgin yavaşlama dikkat çeker. Bu belirtiler bazı durumlarda birlikte bulunabilir.")], relatedTerms: [{ term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }, { term: "Abuli", slug: "abuli" }, { term: "Apati", slug: "apati" }] }],
  ["anhedoni", { shortDefinition: "Anhedoni, kişinin daha önce keyif aldığı etkinliklerden haz alma veya bu etkinliklere yönelik istek duyma kapasitesinin azalmasını ifade eden klinik bir belirtidir.", intro: "Anhedoni yalnızca keyifsizlik anlamına gelmez. Kişi geçmişte severek yaptığı bir etkinliği hâlâ sürdürebilir ancak eskisi kadar zevk alamadığını fark edebilir veya etkinliği başlatma isteği belirgin biçimde azalabilir.", sections: [section("Anhedoni Nasıl Fark Edilebilir?", "Müzik dinlemek, arkadaşlarla görüşmek, yemek yemek, hobilerle uğraşmak veya başarı hissi veren etkinlikler eskisi kadar ödüllendirici gelmeyebilir. Bazı kişiler “hiçbir şeyden zevk alamıyorum” şeklinde tarifte bulunurken bazıları yalnız belirli alanlarda haz azalması yaşayabilir. Sosyal ve fiziksel haz alanları kişiden kişiye farklı etkilenebilir."), section("İstek Kaybı ile Haz Kaybı Aynı Şey midir?", "Her zaman değildir. Bir etkinliği yapma isteğinin azalması ile etkinlik gerçekleştiğinde alınan haz birbirinden ayrılabilir. Kişi bir etkinliğe başlamak istemeyebilir ancak başladıktan sonra yine de keyif alabilir. Başka bir kişi ise etkinliği yapmak isteyip yaptığı halde beklediği hazzı hissedemeyebilir."), section("Depresyonla İlişkisi Nedir?", "Anhedoni majör depresif bozukluğun temel belirtilerinden biri olabilir. Ancak tek başına depresyon tanısı koydurmaz. Şizofrenide negatif belirtiler, bazı nörolojik durumlar veya başka psikiyatrik tablolar içinde de haz ve motivasyon değişiklikleri görülebilir."), section("Apati ile Arasındaki Fark Nedir?", "Apatide ilgi, motivasyon ve amaca yönelik davranışlarda azalma daha belirgindir. Anhedonide ise temel vurgu haz deneyimindeki azalmadır. İki belirti aynı kişide birlikte bulunabilir ve dışarıdan benzer görünebilir. Bu nedenle kişinin ne yapmak istemediği kadar, yaptığı etkinliklerden ne kadar haz alabildiği de önemlidir.")], relatedTerms: [{ term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }, { term: "Apati", slug: "apati" }, { term: "Şizofreni", slug: "sizofreni" }] }],
  ["dissosiyasyon", { shortDefinition: "Dissosiyasyon, bilinç, bellek, kimlik, duygu, beden algısı veya çevreyle ilgili normal bütünleşmenin geçici ya da kalıcı biçimde bozulmasını ifade eden geniş bir klinik kavramdır.", intro: "Dissosiyasyon tek bir belirti değildir. Kişinin kendisini bedeninden uzaklaşmış hissetmesinden çevreyi gerçek dışı algılamasına veya bazı yaşantıları hatırlamakta güçlük çekmesine kadar farklı biçimlerde ortaya çıkabilir.", sections: [section("Dissosiyasyon Nasıl Hissedilebilir?", "Kişi bazı anlarda sanki otomatik pilotta hareket ediyormuş gibi hissedebilir, duygularına ulaşmakta zorlanabilir veya yaşadığı olayın kendisine ait olmadığı hissine kapılabilir. Zamanın geçişini farklı algılama veya belirli yaşantıların bazı bölümlerini hatırlayamama da görülebilir. Bu deneyimlerin biçimi ve yoğunluğu kişiden kişiye değişir."), section("Depersonalizasyon ve Derealizasyon Nedir?", "Depersonalizasyonda kişi kendisini, bedenini veya zihinsel süreçlerini dışarıdan izliyormuş gibi hissedebilir. Derealizasyonda ise çevre alışılmadık, uzak, sisli veya gerçek dışı algılanabilir. Her iki durumda da kişi çoğu zaman yaşadığı deneyimin öznel bir algı değişikliği olduğunun farkındadır."), section("Travmayla İlişkisi Var mıdır?", "Dissosiyatif belirtiler bazı kişilerde yoğun stres veya travmatik yaşantılar sırasında ya da sonrasında ortaya çıkabilir. Bununla birlikte dissosiyasyon yalnızca travmaya özgü değildir. Panik, ağır stres, bazı psikiyatrik tablolar veya farklı tıbbi durumlarda benzer deneyimler görülebilir."), section("Her Dissosiyatif Deneyim Bir Bozukluk mudur?", "Kısa süreli dalgınlık veya bir yolculuğun bir kısmını otomatik biçimde tamamlamak gibi gündelik deneyimler dissosiyatif özellikler taşıyabilir. Klinik önem; deneyimlerin tekrarlayıcı olması, kişinin kontrolünü zorlaştırması, belirgin sıkıntı oluşturması veya günlük yaşamı etkilemesiyle artar. Değerlendirmede belirtilerin bağlamı ve eşlik eden diğer bulgular önemlidir.")], relatedTerms: [{ term: "Depersonalizasyon", slug: "depersonalizasyon" }, { term: "Derealizasyon", slug: "derealizasyon" }, { term: "Akut stres bozukluğu", slug: "akut-stres-bozuklugu" }, { term: "Travma sonrası stres bozukluğu", slug: "travma-sonrasi-stres-bozuklugu" }] }],
  ["akut-stres-bozuklugu", { shortDefinition: "Akut stres bozukluğu, travmatik bir olayın ardından erken dönemde ortaya çıkabilen ve yeniden yaşantılama, kaçınma, olumsuz duygudurum, uyarılmışlık veya dissosiyatif belirtilerle seyredebildiği bir bozukluktur.", intro: "Travmatik bir olaydan sonra korku, irkilme, uyku güçlüğü veya olayla zihinsel olarak meşgul olma görülebilir. Bu tepkilerin varlığı tek başına akut stres bozukluğu anlamına gelmez. Belirtilerin niteliği, yoğunluğu, süresi ve günlük yaşama etkisi birlikte değerlendirilir.", sections: [section("Travma Sonrasında Hangi Belirtiler Görülebilir?", "Kişide travmatik olayla ilgili istemsiz anılar, rahatsız edici rüyalar veya olay yeniden oluyormuş gibi yoğun deneyimler gelişebilir. Travmayı hatırlatan kişilerden, mekanlardan veya konuşmalardan uzak durma görülebilir. Uyku bozukluğu, kolay irkilme, dikkat güçlüğü ve çevreyi sürekli tehdit açısından izleme gibi uyarılmışlık belirtileri de tabloya eşlik edebilir."), section("Dissosiyatif Belirtiler Olabilir mi?", "Bazı kişiler travmanın ardından çevreyi gerçek dışı veya uzaklaşmış gibi algılayabilir ya da kendisini kendi bedeninden ve duygularından kopuk hissedebilir. Olayın bazı bölümlerini hatırlamakta güçlük de görülebilir. Bu deneyimler herkeste ortaya çıkmaz; akut stres bozukluğunda farklı belirti kümeleri bir arada bulunabilir."), section("TSSB ile Arasındaki Fark Nedir?", "Akut stres bozukluğu travma sonrasındaki erken dönemi tanımlar. Travma sonrası stres bozukluğunda ise belirtilerin daha uzun süre devam etmesi ve belirli bir örüntü oluşturması önemlidir. Bu nedenle travmanın hemen ardından yaşanan her yoğun stres tepkisini TSSB olarak adlandırmak doğru değildir."), section("Ne Zaman Önem Kazanır?", "Belirtiler uyku, çalışma, eğitim, ilişkiler veya günlük sorumlulukları belirgin biçimde etkiliyorsa değerlendirme anlamlı olabilir. Travma sonrasında kişinin güvenliği, genel sağlık durumu ve eşlik eden belirtiler de göz önünde bulundurulur. Amaç doğal stres tepkilerini hastalıklaştırmak değil, belirgin işlev kaybını ve klinik olarak önemli belirtileri ayırt etmektir.")], relatedTerms: [{ term: "Travma sonrası stres bozukluğu", slug: "travma-sonrasi-stres-bozuklugu" }, { term: "Dissosiyasyon", slug: "dissosiyasyon" }, { term: "Depersonalizasyon", slug: "depersonalizasyon" }, { term: "Derealizasyon", slug: "derealizasyon" }] }],
  ["abuli", defineTerm({
    term: "Abuli",
    slug: "abuli",
    shortDefinition: "Abuli, kişinin bir davranışı isteme, başlatma ve sürdürme kapasitesinde belirgin azalma yaşamasıyla tanımlanan bir klinik bulgudur.",
    intro: "Abuli, yalnızca “isteksizlik” ya da “tembellik” anlamına gelmez. Kişi ne yapması gerektiğini biliyor olabilir; ancak bir davranışı başlatmak, karar vermek veya harekete geçmek olağandışı ölçüde zorlaşabilir.",
    sections: [
      section("Abuli Ne Anlama Gelir?", "Abulide temel güçlük, isteme ve davranış başlatma süreçlerindedir. Kişi günlük bir işe başlamadan önce uzun süre bekleyebilir, seçim yapmakta zorlanabilir veya dışarıdan belirgin bir yönlendirme olmadığında harekete geçmeyebilir. Bu durum zihinsel kapasitenin tamamen kaybolduğu anlamına gelmez. Kişi yapılması gereken işi anlayabilir ve hatta neden önemli olduğunu açıklayabilir; buna rağmen davranışı başlatmakta belirgin güçlük yaşayabilir."),
      section("Günlük Yaşamda Nasıl Görülebilir?", "Abuli; yataktan kalkmayı sürekli erteleme, kişisel bakım gibi rutinleri başlatmakta zorlanma, sohbet sırasında kendiliğinden daha az konuşma veya basit bir karar için uzun süre bekleme şeklinde görülebilir. Bazen kişi dışarıdan bir hatırlatma ya da yönlendirme geldiğinde görevi yerine getirebilir, ancak kendiliğinden başlatma belirgin biçimde azalmıştır. Bu nedenle çevredeki kişiler durumu yanlışlıkla ilgisizlik veya isteksizlik olarak yorumlayabilir."),
      section("Apati ve Depresyondan Farkı Nedir?", "Abuli, apati ve depresyonla örtüşebilen yönlere sahip olsa da aynı kavram değildir. Apatide duygusal ve motivasyonel ilgide azalma ön plandayken, abulide davranışı başlatma ve iradi eyleme geçme güçlüğü daha belirgindir. Depresyonda ise çökkün duygudurum, suçluluk, umutsuzluk, uyku veya iştah değişiklikleri gibi ek belirtiler bulunabilir. Bu kavramlar bazı kişilerde birlikte de görülebilir."),
      section("Hangi Durumlarla İlişkili Olabilir?", "Abuli bazı nörolojik hastalıklarda, beyin hasarı sonrası durumlarda ve çeşitli psikiyatrik tablolarla birlikte görülebilir. Tek başına bir tanı değildir. Özellikle kişinin günlük yaşamını belirgin biçimde etkileyen yeni başlamış davranış başlatma güçlüğünde, bu değişikliğin diğer belirtiler ve kişinin genel sağlık durumu ile birlikte değerlendirilmesi önemlidir.")
    ],
    relatedTerms: [
      { term: "Apati", slug: "apati" },
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }
    ],
    seo: {
      title: "Abuli Nedir? | Psikiyatri Sözlüğü",
      description: "Abulide isteme, davranış başlatma ve sürdürme güçlüğünün günlük yaşamdaki görünümünü açıklar.",
      ogTitle: "Abuli Nedir?",
      ogDescription: "Abulinin apati ve depresyondan farkını sade biçimde açıklar."
    },
    schema: {
      definedTermDescription: "İsteme, davranış başlatma ve sürdürme kapasitesinde belirgin azalma ile tanımlanan klinik bulgu."
    }
  })],
  ["agorafobi", defineTerm({
    term: "Agorafobi",
    slug: "agorafobi",
    shortDefinition: "Agorafobi, kişinin kaçmanın güç olacağını veya sıkıntı yaşadığında yardım alamayacağını düşündüğü bazı durumlarda belirgin korku ve kaygı yaşamasıdır.",
    intro: "Agorafobi çoğu zaman yalnızca “açık alan korkusu” şeklinde anlatılır; ancak kavram bundan daha geniştir. Toplu taşıma kullanmak, kalabalıkta bulunmak veya evden tek başına uzaklaşmak gibi çok farklı durumlar kaygı yaratabilir.",
    sections: [
      section("Agorafobi Hangi Durumlarda Ortaya Çıkabilir?", "Kaygı; otobüs, metro veya uçak gibi toplu taşıma araçlarında, kalabalık alışveriş merkezlerinde, kuyrukta beklerken, sinema veya toplantı salonlarında ya da evden uzakta tek başına bulunurken ortaya çıkabilir. Ortak nokta çoğu zaman ortamın açık ya da kapalı olması değildir. Kişinin temel endişesi, yoğun kaygı veya başka bir sıkıntı yaşarsa ortamdan hızla çıkamayacağını ya da yardım almakta zorlanacağını düşünmesidir."),
      section("Kaçınma Günlük Yaşamı Nasıl Etkiler?", "Kişi kaygı duyduğu yerlere yalnız gitmekten kaçınabilir, sürekli yanında güvendiği birinin olmasını isteyebilir veya bazı ulaşım yollarını tamamen bırakabilir. Zamanla okul, iş, sosyal etkinlikler ve seyahat gibi yaşam alanları daralabilir. Bazı kişiler yalnızca belirli şartlarda dışarı çıkabilirken, daha belirgin durumlarda evden uzaklaşmak dahi ciddi güçlük yaratabilir."),
      section("Panik Bozuklukla Aynı Şey midir?", "Agorafobi ve panik bozukluk bir arada görülebilir ancak aynı kavram değildir. Panik bozuklukta beklenmedik panik ataklar ve yeni bir atak yaşama kaygısı ön plandadır. Agorafobide ise belirli durumlarda kaçmanın veya yardım almanın zor olacağı düşüncesi belirgindir. Panik atağı olmayan kişilerde de agorafobik korkular gelişebilir."),
      section("Ne Zaman Önem Kazanır?", "Bir kişinin kalabalığı sevmemesi veya zaman zaman toplu taşımada rahatsız olması tek başına agorafobi anlamına gelmez. Korku nedeniyle sürekli kaçınma gelişmesi ve kişinin iş, eğitim, sosyal yaşam veya bağımsız hareket etme kapasitesinin belirgin biçimde kısıtlanması durumunda profesyonel değerlendirme anlamlı olabilir.")
    ],
    relatedTerms: [
      { term: "Panik bozukluk", slug: "panik-bozukluk" },
      { term: "Anksiyete", slug: "anksiyete" }
    ],
    seo: {
      title: "Agorafobi Nedir? | Psikiyatri Sözlüğü",
      description: "Agorafobide kaçınma, yardım alamama kaygısı ve günlük yaşama etkisini açıklar.",
      ogTitle: "Agorafobi Nedir?",
      ogDescription: "Agorafobinin panik bozuklukla ilişkisini ve kaçınma döngüsünü açıklar."
    },
    schema: {
      definedTermDescription: "Kaçmanın güç veya yardım almanın zor olacağı düşünülen durumlarda belirgin korku ve kaygı yaşanması."
    }
  })],
  ["akatizi", defineTerm({
    term: "Akatizi",
    slug: "akatizi",
    shortDefinition: "Akatizi, belirgin bir iç huzursuzluk hissi ve sürekli hareket etme ihtiyacıyla karakterize klinik bir durumdur.",
    intro: "Akatizisi olan kişi çoğu zaman “yerimde duramıyorum” veya “içimde sürekli hareket etme zorunluluğu var” şeklinde tarifte bulunur. Görünüşteki hareketlilik nedeniyle ajitasyonla karıştırılabilir.",
    sections: [
      section("Akatizi Nasıl Hissedilir?", "Akatizide huzursuzluk yalnız dışarıdan görülen hareketlerden ibaret değildir. Kişi bacaklarında veya tüm bedeninde rahatsız edici bir hareket etme dürtüsü yaşayabilir. Otururken ayağını sürekli oynatma, ayağa kalkıp dolaşma, ağırlığı bir ayaktan diğerine verme veya uzun süre oturamama görülebilir. Hareket etmek kısa süreli bir rahatlama sağlayabilir fakat iç huzursuzluk yeniden ortaya çıkabilir."),
      section("Ajitasyondan Farkı Nedir?", "Ajitasyon daha geniş bir kavramdır ve yoğun kaygı, öfke, mani, psikoz veya başka pek çok durumda ortaya çıkabilen davranışsal ve duygusal hareketliliği ifade eder. Akatizide ise özellikle bedensel iç huzursuzluk ve hareket etme zorunluluğu belirgindir. Bu ayrım önemlidir çünkü dışarıdan benzer görünen iki durumun altında farklı süreçler bulunabilir."),
      section("Hangi Durumlarla İlişkili Olabilir?", "Akatizi bazı ilaç tedavileri sırasında ortaya çıkabilen bir yan etki olarak bilinir; ancak kişinin kullandığı ilacı kendi başına bırakması veya doz değiştirmesi uygun değildir. Benzer hareketlilik kaygı durumlarında, huzursuz bacak sendromunda veya başka klinik tablolarda da görülebileceğinden belirtilerin başlangıç zamanı ve diğer özellikleri birlikte değerlendirilir."),
      section("Neden Ciddiye Alınmalıdır?", "Şiddetli akatizi oldukça rahatsız edici olabilir ve kişinin oturmasını, dinlenmesini veya günlük faaliyetlerini sürdürmesini güçleştirebilir. Yeni başlayan veya belirgin biçimde artan iç huzursuzluğun özellikle kullanılan tedavilerle zaman açısından ilişkisi varsa bunu değerlendiren sağlık profesyoneliyle paylaşmak önemlidir.")
    ],
    relatedTerms: [
      { term: "Ajitasyon", slug: "ajitasyon" },
      { term: "Anksiyete", slug: "anksiyete" }
    ],
    seo: {
      title: "Akatizi Nedir? | Psikiyatri Sözlüğü",
      description: "Akatizide iç huzursuzluk, hareket etme zorunluluğu ve ajitasyondan farkı açıklar.",
      ogTitle: "Akatizi Nedir?",
      ogDescription: "Akatizinin iç huzursuzluk ve hareket etme ihtiyacıyla ilişkisini açıklar."
    },
    schema: {
      definedTermDescription: "Belirgin iç huzursuzluk hissi ve sürekli hareket etme ihtiyacıyla karakterize klinik durum."
    }
  })],
  ["anksiyete", {
    shortDefinition: "Anksiyete, tehdit veya belirsizlik karşısında ortaya çıkabilen zihinsel, bedensel ve davranışsal kaygı tepkilerini ifade eder.",
    intro: "Kaygı insan yaşamının doğal bir parçasıdır. Sınav, önemli bir görüşme veya belirsiz bir durum öncesinde kaygı yaşamak tek başına hastalık anlamına gelmez. Sorun, kaygının yoğunluğu ve kişinin yaşamı üzerindeki etkisi arttığında ortaya çıkar.",
    sections: [
      section("Normal Kaygı ile Klinik Düzeyde Anksiyete Arasındaki Fark", "Normal kaygı çoğunlukla belirli bir durumla ilişkilidir ve durum geçtikten sonra azalır. Klinik açıdan önem taşıyan anksiyetede ise kaygı beklenen düzeyin üzerinde olabilir, uzun sürebilir veya kişinin günlük yaşamını kısıtlayabilir. Kişi kaygı yaşamamak için bazı yerlerden, kişilerden veya faaliyetlerden kaçınmaya başlayabilir."),
      section("Anksiyete Bedende ve Zihinde Nasıl Hissedilebilir?", "Kalp atışını daha fazla hissetme, terleme, titreme, kas gerginliği, mide rahatsızlığı veya nefes alışverişinde değişiklikler görülebilir. Zihinsel olarak kötü bir şey olacakmış hissi, sürekli olasılık hesaplama, kontrol etme veya dikkati kaygı yaratan düşünceden uzaklaştıramama yaşanabilir. Bu belirtilerin tamamının aynı kişide bulunması gerekmez."),
      section("Anksiyete Bozuklukları Tek Bir Durum mudur?", "Anksiyete geniş bir üst kavramdır. Panik bozuklukta tekrarlayan panik ataklar ve bunlarla ilgili endişe; yaygın anksiyete bozukluğunda birçok yaşam alanına yayılan kontrol edilmesi güç kaygı; sosyal anksiyete bozukluğunda ise başkaları tarafından değerlendirilme korkusu daha belirgin olabilir. Agorafobi ve özgül fobiler de farklı korku örüntüleriyle ilişkilidir."),
      section("Ne Zaman Değerlendirme Düşünülebilir?", "Kaygı nedeniyle iş, eğitim, ilişkiler, uyku veya sosyal yaşam belirgin biçimde etkileniyorsa; kaçınmalar giderek artıyorsa veya kişinin yaşam alanı daralıyorsa değerlendirme yararlı olabilir. Tek bir bedensel belirtiye bakarak anksiyete sonucu çıkarmak doğru değildir; yeni veya açıklanamayan fiziksel yakınmaların tıbbi nedenleri de göz önünde bulundurulur.")
    ],
    relatedTerms: [{ term: "Panik bozukluk", slug: "panik-bozukluk" }, { term: "Yaygın anksiyete bozukluğu", slug: "yaygin-anksiyete-bozuklugu" }, { term: "Sosyal anksiyete bozukluğu", slug: "sosyal-anksiyete-bozuklugu" }, { term: "Agorafobi", slug: "agorafobi" }]
  }],
  ["panik-bozukluk", {
    shortDefinition: "Panik bozukluk, tekrarlayan beklenmedik panik atakların ardından yeni atak yaşama korkusu veya buna bağlı davranış değişikliklerinin gelişebildiği bir anksiyete bozukluğudur.",
    intro: "Bir kez panik atak yaşamak panik bozukluk olduğu anlamına gelmez. Panik bozuklukta asıl sorun çoğu zaman yalnızca atağın kendisi değil, sonrasında gelişen “yeniden olacak mı?” kaygısıdır.",
    sections: [
      section("Panik Atak ile Panik Bozukluk Arasındaki Fark", "Panik atak; yoğun korku veya rahatsızlığın kısa sürede yükseldiği, çarpıntı, terleme, titreme, nefes darlığı hissi, baş dönmesi veya kontrolü kaybetme korkusu gibi belirtilerin eşlik edebildiği bir durumdur. Panik atak farklı psikiyatrik veya tıbbi durumlarda da görülebilir. Panik bozuklukta ise beklenmedik atakların tekrarlaması ve kişinin sonraki ataklarla ilgili kalıcı kaygı veya davranış değişiklikleri geliştirmesi önemlidir."),
      section("Atak Beklentisi Günlük Yaşamı Nasıl Etkileyebilir?", "Kişi daha önce atak yaşadığı yerlerden kaçınabilir, yalnız kalmak istemeyebilir, kalp hızını veya nefesini sürekli kontrol edebilir ya da yanında belirli bir kişinin bulunmasını güvence olarak görebilir. Bu davranışlar kısa vadede rahatlatıcı görünse de zamanla günlük yaşamın giderek daha fazla kaygı etrafında düzenlenmesine yol açabilir."),
      section("Agorafobi ile İlişkisi Nedir?", "Bazı kişiler panik atağın ulaşım aracında, kalabalık bir yerde veya evden uzakta ortaya çıkmasından korkmaya başlayabilir. Kaçmanın ya da yardım almanın zor olacağını düşündükleri durumları giderek daha fazla sınırlandırmaları agorafobik bir örüntüye dönüşebilir. Bununla birlikte panik bozukluk ve agorafobi ayrı kavramlardır ve biri olmadan diğeri görülebilir."),
      section("Fiziksel Belirtiler Neden Önemlidir?", "Panik sırasında yaşanan bedensel belirtiler oldukça gerçek ve yoğun olabilir. Ancak çarpıntı, göğüs rahatsızlığı veya nefes darlığı gibi yakınmalar yalnızca panik atağa özgü değildir. Özellikle ilk kez ortaya çıkan, farklı özellik gösteren veya tıbbi açıdan endişe yaratan belirtilerde fiziksel nedenlerin değerlendirilmesi önem taşır.")
    ],
    relatedTerms: [{ term: "Anksiyete", slug: "anksiyete" }, { term: "Agorafobi", slug: "agorafobi" }]
  }],
  ["major-depresif-bozukluk", {
    shortDefinition: "Majör depresif bozukluk, çökkün duygudurum veya ilgi ve haz kaybının diğer belirtilerle birlikte kişinin günlük işlevlerini belirgin biçimde etkileyebildiği bir duygudurum bozukluğudur.",
    intro: "Depresyon yalnızca üzgün hissetmek değildir. Günlük yaşamdaki üzüntü genellikle belirli olaylarla bağlantılıdır ve zaman içinde değişir. Majör depresif bozuklukta ise duygu, düşünce, beden ve davranış alanlarında daha kapsamlı bir değişim görülebilir.",
    sections: [
      section("Depresyon Normal Üzüntüden Nasıl Ayrılır?", "Yaşam olayları karşısında üzüntü yaşamak doğal bir tepkidir. Majör depresif bozuklukta çökkünlük veya ilgi ve haz kaybı daha süreklidir ve kişinin çalışma, eğitim, ilişkiler veya kişisel bakım gibi günlük işlevlerini etkileyebilir. Kişi daha önce keyif aldığı etkinliklerden uzaklaşabilir veya bunları yaptığında eskisi kadar haz alamayabilir."),
      section("Hangi Değişiklikler Görülebilir?", "Enerji azalması, uyku veya iştahta değişiklik, dikkati toplamakta zorlanma, değersizlik ya da aşırı suçluluk düşünceleri ve hareketlerde belirgin yavaşlama veya huzursuzluk görülebilir. Psikomotor yavaşlama yalnız kişinin kendisini “yorgun” hissetmesi değildir; konuşma, hareket ve tepki hızında çevreden fark edilebilen değişiklikler ortaya çıkabilir."),
      section("Anhedoni Neden Önemlidir?", "Anhedoni, kişinin daha önce keyif aldığı etkinliklerden haz alma kapasitesinin azalmasıdır ve depresyonun önemli belirtilerinden biri olabilir. Bununla birlikte anhedoni tek başına depresyon tanısı koydurmaz. Apati, bazı psikiyatrik ve nörolojik durumlar veya başka süreçler de benzer bir ilgi azalması görüntüsü oluşturabilir."),
      section("Depresyon Tek Bir Kimyasal Nedene İndirgenebilir mi?", "Majör depresif bozukluk biyolojik, psikolojik ve çevresel birçok etkenin etkileşimiyle ilişkili karmaşık bir durumdur. Bu nedenle depresyonu yalnızca “serotonin eksikliği” gibi tek bir mekanizmayla açıklamak güncel bilimsel yaklaşımı yansıtmaz. Belirti örüntüsü ve kişinin yaşam koşulları birlikte değerlendirilir.")
    ],
    relatedTerms: [{ term: "Anhedoni", slug: "anhedoni" }, { term: "Psikomotor retardasyon", slug: "psikomotor-retardasyon" }, { term: "İntihar düşüncesi", slug: "intihar-dusuncesi" }]
  }],
  ["bipolar-1-bozukluk", {
    shortDefinition: "Bipolar I bozukluk, en az bir manik dönemin bulunduğu bir duygudurum bozukluğudur.",
    intro: "Bipolar I bozukluk yalnızca kişinin ruh halinin sık değişmesi anlamına gelmez. Tanımın merkezinde belirgin bir manik dönem bulunur.",
    sections: [
      section("Manik Dönem Nedir?", "Manide kişinin duygudurumu olağandışı biçimde yükselmiş, taşkın veya belirgin ölçüde irritabl olabilir. Enerji artabilir, uyku ihtiyacı azalabilir, konuşma hızlanabilir ve düşünceler çok hızlı ilerliyormuş gibi hissedilebilir. Kişi sonuçlarını yeterince değerlendirmeden riskli kararlar alabilir veya olağan işlevselliğinden belirgin biçimde farklı davranabilir."),
      section("Bipolar I için Depresif Dönem Şart mıdır?", "Bipolar I bozukluğun tanımlanmasında manik dönem belirleyicidir. Birçok kişi yaşamının farklı dönemlerinde majör depresif dönemler yaşayabilir; ancak Bipolar I olarak sınıflandırılmak için depresif dönem bulunması zorunlu değildir. Bu nokta hastalığın yalnız “depresyon ile coşku arasında gidip gelmek” şeklinde düşünülmesinin neden yetersiz olduğunu gösterir."),
      section("Bipolar II Bozukluktan Farkı Nedir?", "Bipolar II bozuklukta tam manik dönem yerine hipomanik dönemler ve majör depresif dönemler bulunur. Hipomani de olağan ruh halinden belirgin bir değişikliktir ancak mani kadar ağır işlev kaybı oluşturmaz ve tanım gereği tam manik dönem düzeyine ulaşmaz. Bir kişinin manik dönem geçirmiş olması Bipolar I ile Bipolar II ayrımında temel öneme sahiptir."),
      section("Günlük Duygudurum Değişimleri Bipolar Bozukluk mudur?", "Bir gün neşeli, başka bir gün üzgün olmak veya stres karşısında duygu durumunun değişmesi tek başına bipolar bozukluk anlamına gelmez. Manik ve depresif dönemler belirli süre, belirti ve işlev değişiklikleriyle değerlendirilir. Bu nedenle gündelik duygu değişkenliği ile klinik duygudurum dönemlerini birbirinden ayırmak önemlidir.")
    ],
    relatedTerms: [{ term: "Mani", slug: "mani" }, { term: "Hipomani", slug: "hipomani" }, { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }]
  }],
  ["sizofreni", {
    shortDefinition: "Şizofreni; düşünce, algı, davranış ve işlevselliğin farklı alanlarını etkileyebilen kronik seyirli bir psikiyatrik bozukluktur.",
    intro: "Şizofreni ile psikoz aynı şey değildir. Psikoz, gerçekliği değerlendirme süreçlerinin bozulduğu bir belirti kümesini tanımlarken şizofreni, psikoz belirtilerinin görülebileceği belirli bozukluklardan yalnızca biridir.",
    sections: [
      section("Hangi Belirtiler Görülebilir?", "Sanrılar, kişinin güçlü biçimde inandığı ancak gerçeklikle uyuşmayan düşünceler olabilir. Varsanılarda ise dışarıda gerçek bir uyaran olmaksızın ses, görüntü veya başka duyusal deneyimler yaşanabilir. Bazı kişilerde konuşmanın veya düşüncenin organizasyonu bozulabilir. Bununla birlikte şizofreni yalnızca bu “pozitif belirtilerden” oluşmaz."),
      section("Negatif Belirtiler Ne Anlama Gelir?", "Duygusal ifadenin azalması, konuşmanın fakirleşmesi, sosyal etkileşimden geri çekilme veya amaca yönelik davranışlarda azalma negatif belirtiler arasında yer alabilir. Bu belirtiler dışarıdan isteksizlik gibi görünebilir; ancak kişinin günlük işlevleri üzerinde önemli etkiler yaratabilir ve depresyon veya ilaç yan etkileri gibi başka durumlarla ayırt edilmesi gerekebilir."),
      section("Psikoz ile Şizofreni Arasındaki Fark", "Psikotik belirtiler bipolar bozukluk, ağır depresif dönemler, bazı maddeler, nörolojik veya tıbbi hastalıklar gibi farklı durumlarda ortaya çıkabilir. Dolayısıyla bir kişinin sanrı veya varsanı yaşaması otomatik olarak şizofreni olduğu anlamına gelmez. Tanısal değerlendirmede belirtilerin süresi, birlikteliği ve kişinin işlevselliğindeki değişiklikler dikkate alınır."),
      section("Damgalayıcı Yaklaşımlar Neden Yanlıştır?", "Şizofreni “çift kişilik” anlamına gelmez ve bu tanıya sahip kişilerin tehlikeli olduğu yönündeki genellemeler bilimsel değildir. Damgalama kişilerin sosyal yaşamdan uzaklaşmasına ve yardım aramaktan kaçınmasına neden olabilir. Bozukluğu belirtiler ve işlevsellik üzerinden anlamak, kişiyi tanısıyla özdeşleştirmemek önemlidir.")
    ],
    relatedTerms: [{ term: "Psikoz", slug: "psikoz" }, { term: "Sanrı", slug: "sanri" }, { term: "Varsanı", slug: "varsani" }, { term: "Katatoni", slug: "katatoni" }]
  }]
  , ["dehb", { shortDefinition: "Dikkat eksikliği ve hiperaktivite bozukluğu (DEHB), dikkat düzenleme, dürtü kontrolü ve hareketlilik alanlarını etkileyebilen nörogelişimsel bir bozukluktur.", intro: "DEHB yalnızca hareketli çocukları tanımlayan bir kavram değildir. Belirtiler çocukluk döneminde başlasa da ergenlik ve yetişkinlikte farklı biçimlerde devam edebilir.", sections: [section("Dikkat Güçlüğü Nasıl Görülebilir?", "Kişi uzun süre dikkat gerektiren görevlerde odağını korumakta zorlanabilir, sık sık ayrıntıları atlayabilir, işleri planlamakta güçlük yaşayabilir veya günlük eşyalarını kaybedebilir. Dikkatin hiç olmadığı düşüncesi doğru değildir. İlgi çekici bir etkinlikte uzun süre odaklanabilen bir kişi, rutin veya düşük uyarımlı görevlerde belirgin güçlük yaşayabilir."), section("Dürtüsellik ve Hareketlilik Ne Anlama Gelir?", "Dürtüsellik, sonucunu düşünmeden hızlı davranma, konuşmalarda karşı tarafın sözünü kesme veya sırayı beklemekte zorlanma gibi davranışlarla görülebilir. Çocuklarda fiziksel hareketlilik daha belirgin olabilirken yetişkinlerde bu durum içsel huzursuzluk, sürekli bir şeylerle meşgul olma ihtiyacı veya dinlenmekte güçlük şeklinde hissedilebilir."), section("DEHB Tembellik veya Zekâ Sorunu mudur?", "DEHB kişinin isteksiz, tembel veya düşük zekâlı olmasıyla açıklanamaz. Kişi ne yapması gerektiğini çok iyi bilmesine rağmen zaman yönetimi, görevi başlatma, organize olma veya dikkati sürdürme konusunda tekrar eden güçlükler yaşayabilir. Zekâ düzeyi ile DEHB varlığı arasında basit bir ilişki yoktur."), section("Yetişkinlerde DEHB Nasıl Farklılaşabilir?", "Yaş ilerledikçe açık motor hareketlilik azalabilir; ancak unutkanlık, erteleme, zaman yönetiminde zorluk, yoğun dağınıklık veya dürtüsel kararlar devam edebilir. DEHB belirtilerine benzeyen durumlar uyku sorunları, anksiyete veya duygudurum bozukluklarında da görülebileceğinden gelişimsel öykü ve belirtilerin sürekliliği önemlidir.")], relatedTerms: [{ term: "Dürtüsellik", slug: "durtusellik" }, { term: "Anksiyete", slug: "anksiyete" }] }]
  , ["travma-sonrasi-stres-bozuklugu", { shortDefinition: "Travma sonrası stres bozukluğu (TSSB), travmatik bir olayın ardından yeniden yaşantılama, kaçınma ve tehdit algısındaki değişiklikler gibi belirtilerle ortaya çıkabilen bir bozukluktur.", intro: "Travmatik bir olay yaşayan herkes TSSB geliştirmez. Olay sonrasında bir süre korku, üzüntü, uyku bozukluğu veya zihinsel meşguliyet yaşanması doğal stres tepkisinin parçası olabilir.", sections: [section("Yeniden Yaşantılama Ne Demektir?", "Travmatik olayla ilgili istemsiz anılar, rahatsız edici rüyalar veya kişinin olay yeniden yaşanıyormuş gibi hissettiği deneyimler görülebilir. Bazı sesler, kokular, mekanlar veya tarihler travmayı hatırlatarak yoğun duygusal ve bedensel tepkilere yol açabilir. Bu deneyimler sıradan biçimde bir olayı hatırlamaktan daha yoğun olabilir."), section("Kaçınma Nasıl Ortaya Çıkar?", "Kişi travmayı hatırlatan yerlerden, insanlardan, konuşmalardan veya etkinliklerden uzak durmaya çalışabilir. Bazen olay hakkında düşünmekten ya da hissetmekten kaçınmak için yoğun biçimde meşgul olma gibi stratejiler gelişebilir. Kaçınma kısa süreli rahatlık sağlayabilse de uzun vadede kişinin yaşam alanının daralmasına neden olabilir."), section("Sürekli Tehdit Hissi", "Travma sonrasında kişi çevresini eskisinden daha tehlikeli algılayabilir. Kolay irkilme, uykuya dalmakta güçlük, sürekli tetikte olma, dikkat sorunları veya öfke artışı görülebilir. Bazı kişilerde kendisi, diğer insanlar veya dünya hakkında daha olumsuz düşünceler gelişebilir."), section("Akut Stres Bozukluğundan Farkı", "Travmatik olayın erken döneminde ortaya çıkan belirti örüntüsü akut stres bozukluğu kapsamında değerlendirilebilir. TSSB ile ayrımda belirtilerin süresi ve seyri önemlidir. Travma sonrası her zorlanmayı doğrudan TSSB olarak adlandırmak doğru değildir; belirtilerin niteliği, süresi ve kişinin işlevselliğine etkisi birlikte değerlendirilir.")], relatedTerms: [{ term: "Akut stres bozukluğu", slug: "akut-stres-bozuklugu" }, { term: "Dissosiyasyon", slug: "dissosiyasyon" }, { term: "Depersonalizasyon", slug: "depersonalizasyon" }, { term: "Derealizasyon", slug: "derealizasyon" }] }]
  , ["yaygin-anksiyete-bozuklugu", { shortDefinition: "Yaygın anksiyete bozukluğu, birçok yaşam alanına yayılan, kontrol edilmesi güç ve süreklilik gösteren kaygı ile karakterize bir anksiyete bozukluğudur.", intro: "Herkes zaman zaman sağlık, iş, para veya yakınları hakkında endişelenebilir. Yaygın anksiyete bozukluğunda ise kaygı tek bir konuya bağlı kalmaz; farklı alanlara yayılır ve kişinin zihnini uzun süre meşgul edebilir.", sections: [section("Kaygı Neden “Yaygın” Olarak Adlandırılır?", "Kaygı yalnız belirli bir olay veya nesneyle sınırlı değildir. Kişi aynı dönemde işi, ailesi, sağlığı, maddi konular veya günlük küçük sorumluluklar hakkında yoğun biçimde endişelenebilir. Bir konu çözülse bile zihin kısa sürede başka bir olası probleme yönelebilir."), section("Kaygıyı Kontrol Etmek Neden Zorlaşabilir?", "Kişi endişesinin aşırı olduğunu fark etse bile düşünce zincirini durdurmakta zorlanabilir. Sürekli olası senaryoları değerlendirme, güvence arama veya “ya olursa?” düşünceleri zihinsel yorgunluğa yol açabilir. Bu süreç kişinin dikkatini günlük görevlerden uzaklaştırabilir."), section("Bedensel Belirtiler Görülebilir mi?", "Kas gerginliği, huzursuzluk, kolay yorulma, uykuya dalmakta güçlük veya dikkati toplamakta zorlanma eşlik edebilir. Bedensel belirtiler kişiden kişiye değişir ve yalnız bu belirtilere bakılarak tanı konulmaz. Yeni ortaya çıkan fiziksel yakınmaların başka nedenleri de değerlendirilmelidir."), section("Normal Endişeden Farkı Nedir?", "Normal endişe genellikle belirli bir sorunla ilişkilidir ve sorun çözüldükçe azalır. Yaygın anksiyete bozukluğunda ise kaygının yoğunluğu, süresi ve kişinin işlevselliğine etkisi daha belirgindir. İş, uyku, ilişkiler veya günlük kararlar sürekli kaygı tarafından yönetilmeye başladığında klinik değerlendirme anlam kazanabilir.")], relatedTerms: [{ term: "Anksiyete", slug: "anksiyete" }, { term: "Panik bozukluk", slug: "panik-bozukluk" }] }]
  , ["sosyal-anksiyete-bozuklugu", { shortDefinition: "Sosyal anksiyete bozukluğu, kişinin başkaları tarafından değerlendirilebileceği sosyal durumlarda belirgin korku ve kaygı yaşamasıyla karakterize bir anksiyete bozukluğudur.", intro: "Sosyal anksiyete yalnızca utangaç olmak değildir. Kişi başkalarının karşısında küçük düşeceği, hata yapacağı, yetersiz görüneceği veya kaygısının fark edileceği düşüncesiyle yoğun rahatsızlık yaşayabilir.", sections: [section("Hangi Sosyal Durumlar Kaygı Yaratabilir?", "Topluluk önünde konuşmak, yeni insanlarla tanışmak, sınıfta söz almak, toplantıda fikir belirtmek, telefon görüşmesi yapmak veya başkalarının yanında yemek yemek kaygı yaratabilir. Bazı kişiler yalnız performans gerektiren durumlarda zorlanırken bazıları birçok sosyal ortamda benzer korkular yaşayabilir."), section("Kişi Neden Kaçınmaya Başlayabilir?", "Kaygı yaratacağını düşündüğü sosyal durumları önceden iptal etmek veya mümkün olduğunca görünmez kalmaya çalışmak kısa süreli rahatlama sağlayabilir. Ancak kaçınma arttıkça kişinin okul, iş, arkadaşlık veya ilişki alanları daralabilir. Bazı kişiler sosyal ortama katılsa bile yoğun sıkıntıyla kalabilir."), section("Utangaçlıkla Aynı Şey midir?", "Utangaçlık kişilik özelliği olarak görülebilir ve tek başına bozukluk anlamına gelmez. Sosyal anksiyete bozukluğunda korku daha yoğun, kalıcı ve işlevselliği kısıtlayıcıdır. Kişi istediği halde sosyal veya mesleki fırsatlardan geri çekilmeye başlayabilir."), section("Bedensel Belirtiler Olabilir mi?", "Yüz kızarması, terleme, titreme, sesin değişmesi, kalp atışını daha fazla hissetme veya zihnin boşalmış gibi olması görülebilir. Kişi bazen asıl sosyal durumdan çok bu belirtilerin başkaları tarafından fark edilmesinden korkar. Bu da kaygının kendi kendini güçlendirmesine yol açabilir.")], relatedTerms: [{ term: "Anksiyete", slug: "anksiyete" }, { term: "Agorafobi", slug: "agorafobi" }] }]
  , ["apati", { shortDefinition: "Apati, kişinin ilgi, motivasyon ve amaca yönelik davranışlarında belirgin azalma yaşamasıyla tanımlanan klinik bir bulgudur.", intro: "Apati yalnızca “canı istememek” anlamına gelmez. Kişinin daha önce önem verdiği etkinliklere karşı ilgisinin azalması, girişimde bulunmaması ve duygusal tepkilerinin zayıflamasıyla görülebilir.", sections: [section("Apati Günlük Yaşamda Nasıl Görülebilir?", "Kişi hobilerine, sosyal ilişkilere veya günlük sorumluluklarına daha az ilgi gösterebilir. Bir etkinliğin yapılması gerektiğini bilmesine rağmen başlatmak için içsel istek hissetmeyebilir. Çevredeki kişiler kişinin daha az konuştuğunu, plan yapmadığını veya daha önce keyif aldığı faaliyetlere karşı kayıtsızlaştığını fark edebilir."), section("Apati ile Anhedoni Aynı Şey midir?", "Anhedoni, haz alma kapasitesindeki azalmayı ifade eder. Apatide ise motivasyon ve ilgi azalması daha ön plandadır. Bir kişi bir etkinlikten hâlâ haz alabilecek kapasitede olduğu halde onu başlatmak için yeterli istek hissetmeyebilir. İki durum bazı kişilerde birlikte bulunabilir."), section("Abuliden Farkı Nedir?", "Abulide davranış başlatma ve iradi eyleme geçme güçlüğü daha belirgindir. Apatide ise genel ilgi ve motivasyon azalması ön planda olabilir. Bu kavramların sınırları bazı klinik durumlarda birbirine yaklaşabilir ve kişinin genel belirti örüntüsü birlikte değerlendirilir."), section("Hangi Durumlarla İlişkili Olabilir?", "Apati depresif bozukluklarda, bazı nörolojik hastalıklarda veya bilişsel bozukluklarda görülebilir. Ancak apati tek başına belirli bir tanıyı göstermez. Yeni başlamış ve belirgin işlev kaybına yol açan motivasyon değişikliklerinde eşlik eden diğer belirtilerin değerlendirilmesi önemlidir.")], relatedTerms: [{ term: "Anhedoni", slug: "anhedoni" }, { term: "Abuli", slug: "abuli" }, { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }] }]
]);
const excludedThirdSlugs = new Set(["beden-algisi", "irritabilite", "ofke"]);
const dissociationBaseTerm = defineTerm({
  term: "Dissosiyasyon",
  slug: "dissosiyasyon",
  shortDefinition: "Dissosiyasyon, bilinç, bellek, kimlik, duygu, beden algısı veya çevreyle ilgili normal bütünleşmenin bozulmasını ifade eden klinik bir kavramdır.",
  intro: "Dissosiyasyon farklı biçimlerde görülebilir ve belirtilerin bağlamı değerlendirmede önemlidir.",
  sections: [
    section("Kısa Tanım", "Dissosiyatif deneyimler bilinç, bellek, kimlik, duygu veya algıyla ilgili bütünleşmede değişiklik içerebilir."),
    section("Değerlendirme", "Belirtilerin niteliği, sıklığı ve günlük yaşama etkisi birlikte ele alınır."),
    section("İlişkili Kavramlar", "Depersonalizasyon ve derealizasyon dissosiyatif deneyimlerle ilişkili olabilir.")
  ],
  relatedTerms: [],
  seo: {
    title: "Dissosiyasyon Nedir? | Psikiyatri Sözlüğü",
    description: "Dissosiyasyonun bilinç, bellek ve algı bütünlüğüyle ilişkisini açıklar.",
    ogTitle: "Dissosiyasyon Nedir?",
    ogDescription: "Dissosiyatif deneyimleri sade ve klinik bir çerçevede ele alır."
  },
  schema: { definedTermDescription: "Bilinç, bellek, kimlik, duygu, beden algısı veya çevreyle ilgili normal bütünleşmenin bozulması." }
});
const anhedoniaBaseTerm = defineTerm({ term: "Anhedoni", slug: "anhedoni", shortDefinition: "Anhedoni, haz alma veya etkinliklere yönelik istek duyma kapasitesinde azalmayı ifade eden klinik belirtidir.", intro: "Anhedoni kişinin günlük yaşamdaki keyif deneyimini etkileyebilir.", sections: [section("Kısa Tanım", "Haz deneyimi ve etkinliğe yönelik istek farklı biçimlerde etkilenebilir."), section("Değerlendirme", "Belirtilerin bağlamı ve günlük yaşama etkisi birlikte ele alınır."), section("İlişkili Kavramlar", "Apati ve depresyonla örtüşen yönleri olabilir.")], relatedTerms: [], seo: { title: "Anhedoni Nedir? | Psikiyatri Sözlüğü", description: "Anhedoninin haz alma ve istek duyma kapasitesiyle ilişkisini açıklar.", ogTitle: "Anhedoni Nedir?", ogDescription: "Anhedoniyi klinik bağlamda ele alır." }, schema: { definedTermDescription: "Haz alma veya etkinliklere yönelik istek duyma kapasitesinde azalma." } });
const depersonalizationBaseTerm = defineTerm({ term: "Depersonalizasyon", slug: "depersonalizasyon", shortDefinition: "Depersonalizasyon, kişinin kendisini veya bedenini yabancılaşmış gibi algılamasıdır.", intro: "Belirtilerin bağlamı ve günlük yaşama etkisi değerlendirmede önemlidir.", sections: [section("Kısa Tanım", "Kişinin kendisine yönelik algısında yabancılaşma hissi görülebilir."), section("Gerçeklik", "Gerçekliği değerlendirme çoğu zaman korunur."), section("Değerlendirme", "Süreklilik ve sıkıntı düzeyi dikkate alınır.")], relatedTerms: [], seo: { title: "Depersonalizasyon Nedir? | Psikiyatri Sözlüğü", description: "Depersonalizasyon deneyimini ve ilişkili kavramları açıklar.", ogTitle: "Depersonalizasyon Nedir?", ogDescription: "Depersonalizasyonu klinik bir çerçevede ele alır." }, schema: { definedTermDescription: "Kişinin kendisini, bedenini veya zihinsel süreçlerini yabancılaşmış gibi algılaması." } });
const derealizationBaseTerm = defineTerm({
  term: "Derealizasyon",
  slug: "derealizasyon",
  shortDefinition: "Derealizasyon, çevrenin alışılmadık veya gerçek dışı algılanabildiği dissosiyatif bir deneyimdir.",
  intro: "Çevrenin algılanma biçimindeki değişiklik kişinin kendisi için belirgin ve rahatsız edici olabilir.",
  sections: [
    section("Kısa Tanım", "Derealizasyonda çevre tanıdık olduğu halde yabancı veya gerçek dışı hissedilebilir."),
    section("Gerçekliği Değerlendirme", "Kişi çoğu zaman çevrenin gerçekten değişmediğinin farkındadır."),
    section("İlişkili Kavramlar", "Depersonalizasyon ve dissosiyasyonla birlikte görülebilir.")
  ],
  relatedTerms: [],
  seo: {
    title: "Derealizasyon Nedir? | Psikiyatri Sözlüğü",
    description: "Derealizasyonun nasıl hissedildiğini, depersonalizasyondan farkını ve kaygı ile ilişkisini açıklar.",
    ogTitle: "Derealizasyon Nedir?",
    ogDescription: "Derealizasyon deneyimini sade ve klinik bir çerçevede açıklar."
  },
  schema: {
    definedTermDescription: "Çevrenin alışılmadık, uzak veya gerçek dışıymış gibi algılandığı dissosiyatif deneyim."
  }
});

const maniBaseTerm = defineTerm({
  term: "Mani",
  slug: "mani",
  shortDefinition: "Mani, duygudurum ve enerji düzeyinde belirgin artışla ilişkili klinik bir dönemdir.",
  intro: "Manik dönem kişinin olağan duygudurum ve davranışlarından belirgin bir değişiklik içerir.",
  sections: [
    section("Kısa Tanım", "Enerji, duygudurum, uyku ve etkinlik düzeyinde belirgin değişiklik görülebilir."),
    section("İşlevsellik", "Belirtiler sosyal ve mesleki işlevselliği belirgin biçimde etkileyebilir."),
    section("İlişkili Kavramlar", "Mani, Bipolar I bozukluk açısından temel öneme sahiptir.")
  ],
  relatedTerms: [],
  seo: {
    title: "Mani Nedir? | Psikiyatri Sözlüğü",
    description: "Manik dönemin belirtilerini, hipomaniden farkını ve Bipolar I bozuklukla ilişkisini açıklar.",
    ogTitle: "Mani Nedir?",
    ogDescription: "Maniyi günlük duygudurum değişikliklerinden ve hipomaniden ayıran özellikleri açıklar."
  },
  schema: {
    definedTermDescription: "Duygudurum ve enerjide belirgin artışla birlikte işlevsellikte önemli değişikliklerin görülebildiği klinik dönem."
  }
});

const hypomaniaBaseTerm = defineTerm({
  term: "Hipomani",
  slug: "hipomani",
  shortDefinition: "Hipomani, duygudurum ve enerjide belirgin yükselme veya irritabilite ile seyreden klinik bir dönemdir.",
  intro: "Hipomanik dönemde kişinin olağan duygudurum, enerji ve davranış düzeyinde belirgin bir değişiklik görülür.",
  sections: [
    section("Kısa Tanım", "Enerji, uyku ihtiyacı, konuşma ve etkinlik düzeyinde belirgin değişiklik ortaya çıkabilir."),
    section("Maniden Farkı", "Hipomanide değişiklik belirgindir ancak mani düzeyinde ağır işlev kaybı bulunmaz."),
    section("İlişkili Kavramlar", "Hipomani bipolar bozuklukların değerlendirilmesinde önemli bir klinik dönemdir.")
  ],
  relatedTerms: [],
  seo: {
    title: "Hipomani Nedir? | Psikiyatri Sözlüğü",
    description: "Hipomaninin belirtilerini, maniden farkını ve bipolar bozukluklarla ilişkisini açıklar.",
    ogTitle: "Hipomani Nedir?",
    ogDescription: "Hipomaninin maniyle farkını ve günlük yaşamdaki görünümünü açıklar."
  },
  schema: {
    definedTermDescription: "Duygudurum ve enerjide belirgin değişiklik görülen ancak mani düzeyinde ağır işlev kaybı oluşturmayan klinik dönem."
  }
});

const psychosisBaseTerm = defineTerm({
  term: "Psikoz",
  slug: "psikoz",
  shortDefinition: "Psikoz, gerçekliği değerlendirme süreçlerinin belirgin biçimde etkilenebildiği klinik bir durumdur.",
  intro: "Psikoz farklı psikiyatrik, tıbbi veya maddeyle ilişkili durumlarda görülebilen bir belirti kümesini ifade eder.",
  sections: [
    section("Kısa Tanım", "Sanrı, varsanı veya düşünce organizasyonunda belirgin değişiklikler görülebilir."),
    section("Değerlendirme", "Belirtilerin başlangıcı, süresi ve işlevselliğe etkisi birlikte ele alınır."),
    section("İlişkili Kavramlar", "Psikoz şizofreni ile aynı kavram değildir ve farklı klinik durumlarda görülebilir.")
  ],
  relatedTerms: [],
  seo: {
    title: "Psikoz Nedir? | Psikiyatri Sözlüğü",
    description: "Psikozun belirtilerini, şizofreniden farkını ve gerçekliği değerlendirme kavramını açıklar.",
    ogTitle: "Psikoz Nedir?",
    ogDescription: "Psikozu şizofreni ile eşitlemeden sade ve klinik bir çerçevede açıklar."
  },
  schema: {
    definedTermDescription: "Gerçekliği değerlendirme süreçlerinde belirgin bozulma ve sanrı, varsanı veya düşünce organizasyonunda değişikliklerle ilişkili klinik durum."
  }
});

export const thirdBatchSlugs = [...pilotTerms.slice(20, 40), ...thirdAdditionalTerms.filter((term) => !excludedThirdSlugs.has(term.slug)), ...thirdReplacements].map((term) => term.slug);

const fourthBatchNewTerms = [
  defineTerm({
    term: "Açık uçlu soru",
    slug: "acik-uclu-soru",
    shortDefinition: "Açık uçlu soru, kişinin düşünce, duygu ve deneyimlerini yalnızca evet-hayır biçiminde yanıtlamak yerine kendi sözcükleriyle ayrıntılı olarak anlatmasına alan açan soru biçimidir.",
    intro: "Psikiyatrik görüşmede açık uçlu sorular kişinin yaşadıklarını kendi öncelik sırasıyla anlatmasını kolaylaştırabilir. Amaç yalnız daha fazla bilgi toplamak değil, deneyimin kişiye özgü anlamını da anlayabilmektir.",
    sections: [
      section("Açık Uçlu Soru Nasıl Sorulur?", "“Son günlerde sizi en çok zorlayan şey nedir?” veya “Bu durum başladığından beri hayatınızda neler değişti?” gibi sorular tek bir kısa cevabı zorunlu kılmaz. Kişi önemli gördüğü ayrıntıları seçebilir ve görüşmenin başlangıcında kendi anlatısını daha serbest biçimde kurabilir."),
      section("Kapalı Uçlu Sorudan Farkı Nedir?", "Kapalı uçlu sorular belirli bir bilgiyi netleştirmek için yararlıdır ve çoğu zaman kısa yanıt ister. Açık uçlu soru ise konuyu genişletir. Klinik görüşmede iki soru biçimi birbirinin alternatifi değil, farklı amaçlarla birlikte kullanılan araçlardır."),
      section("Psikiyatrik Görüşmede Neden Kullanılır?", "Belirtilerin kişi tarafından nasıl yaşandığını, hangi olayların önemli bulunduğunu ve günlük işlevselliğin nasıl etkilendiğini anlamaya yardımcı olabilir. Ayrıca görüşmecinin çok erken varsayım yapmasını azaltarak kişinin kendi sözcüklerine daha fazla yer verilmesini sağlar."),
      section("Her Konuda Açık Uçlu Soru Yeterli midir?", "Hayır. Süre, sıklık, ilaç kullanımı, güvenlik riski veya belirli tıbbi ayrıntılar gerektiğinde daha doğrudan sorularla netleştirilir. İyi bir klinik görüşme serbest anlatım ile hedefli değerlendirme arasında dengeli biçimde ilerler.")
    ],
    relatedTerms: [
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Mentalizasyon", slug: "mentalizasyon" },
      { term: "Psikososyal destek", slug: "psikososyal-destek" }
    ],
    seo: {
      title: "Açık Uçlu Soru Nedir? | Psikiyatri Sözlüğü",
      description: "Açık uçlu sorunun psikiyatrik görüşmedeki işlevini, kapalı uçlu sorulardan farkını ve kullanım amacını açıklar.",
      ogTitle: "Açık Uçlu Soru Nedir?",
      ogDescription: "Açık uçlu soruların klinik görüşmede neden kullanıldığını sade biçimde açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin deneyimlerini kendi sözcükleriyle ayrıntılı biçimde anlatmasına alan açan soru biçimi."
    }
  }),

  defineTerm({
    term: "Adaptasyon",
    slug: "adaptasyon",
    shortDefinition: "Adaptasyon, kişinin yeni, değişen veya zorlayıcı yaşam koşullarına düşünsel, duygusal ve davranışsal olarak uyum sağlayabilme sürecidir.",
    intro: "Adaptasyon tek seferlik bir tepki değil, koşullar değiştikçe yeniden şekillenebilen dinamik bir süreçtir. Yeni duruma uyum sağlamak her zaman rahatsızlık yaşamamak anlamına gelmez.",
    sections: [
      section("Adaptasyon Süreci Nasıl İşler?", "Kişi önce yeni koşulu anlamlandırmaya, ardından günlük düzenini ve beklentilerini buna göre değiştirmeye çalışabilir. Taşınma, iş değişikliği, hastalık, ilişki değişiklikleri veya yaşamın farklı dönemlerine geçiş adaptasyon gerektiren durumlara örnek olabilir."),
      section("Stres ile İlişkisi Nedir?", "Yeni koşullar belirsizlik ve kontrol kaybı hissi yaratarak stres yanıtını artırabilir. Zaman içinde kişi sorun çözme yolları geliştirdikçe ve çevresel kaynaklara eriştikçe stres azalabilir. Ancak aynı olayın uyum yükü kişiden kişiye farklı olabilir."),
      section("Adaptasyon ile Uyum Bozukluğu Aynı Şey midir?", "Hayır. Adaptasyon insan yaşamının doğal bir parçasıdır. Uyum bozukluğu ise belirli bir stres etkeni sonrasında ortaya çıkan, kişinin koşullarına göre belirgin sıkıntı veya işlev kaybıyla ilişkili klinik bir tablodur."),
      section("Uyumu Etkileyen Etkenler Nelerdir?", "Önceki deneyimler, sosyal destek, ekonomik koşullar, fiziksel sağlık, kişisel baş etme yolları ve değişimin niteliği uyum sürecini etkileyebilir. Adaptasyon kapasitesi sabit bir kişilik özelliği gibi değerlendirilmemelidir. Aynı kişi farklı yaşam dönemlerinde benzer değişikliklere farklı biçimlerde uyum sağlayabilir.")
    ],
    relatedTerms: [
      { term: "Uyum bozukluğu", slug: "uyum-bozuklugu" },
      { term: "Stres yanıtı", slug: "stres-yaniti" },
      { term: "Psikososyal destek", slug: "psikososyal-destek" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ],
    seo: {
      title: "Adaptasyon Nedir? | Psikiyatri Sözlüğü",
      description: "Adaptasyonun değişen yaşam koşullarına uyum sürecindeki anlamını ve uyum bozukluğundan farkını açıklar.",
      ogTitle: "Adaptasyon Nedir?",
      ogDescription: "Adaptasyon kavramını stres, değişim ve günlük işlevsellik bağlamında açıklar."
    },
    schema: {
      definedTermDescription: "Yeni veya değişen yaşam koşullarına düşünsel, duygusal ve davranışsal olarak uyum sağlama süreci."
    }
  }),

  defineTerm({
    term: "Afazi",
    slug: "afazi",
    shortDefinition: "Afazi, daha önce kazanılmış dil becerilerinin beyin hasarı veya beyin işlevlerindeki bozulma nedeniyle konuşma, anlama, okuma ya da yazma alanlarında etkilenmesidir.",
    intro: "Afazi bir zekâ kaybı anlamına gelmez ve psikiyatrik bir hastalık değildir. Bununla birlikte iletişim güçlüğü ruhsal durum değerlendirmesini önemli ölçüde etkileyebileceği için psikiyatride de tanınması gereken bir nörolojik belirtidir.",
    sections: [
      section("Afazi Nasıl Görülebilir?", "Bazı kişiler söylemek istedikleri sözcüğü bulmakta zorlanırken bazıları akıcı konuşmasına rağmen sözcükleri uygun anlamda kullanamayabilir. Söylenenleri anlama, isimlendirme, tekrar etme, okuma veya yazma becerileri farklı ölçülerde etkilenebilir."),
      section("Konuşamamak Her Zaman Afazi midir?", "Hayır. Konuşma güçlüğü motor konuşma bozuklukları, bilinç değişikliği, yoğun konfüzyon veya başka nörolojik ve tıbbi durumlarla ilişkili olabilir. Afazide temel sorun dil sisteminin işlenmesindedir ve hangi dil alanlarının etkilendiği nörolojik değerlendirmede incelenir."),
      section("Psikiyatrik Değerlendirmeyi Nasıl Etkiler?", "Dil bozukluğu olan kişi soruları anlamakta veya deneyimini ifade etmekte zorlanabilir. Bu durum yanlışlıkla düşünce bozukluğu, ilgisizlik veya iş birliği göstermeme şeklinde yorumlanmamalıdır. Görüşme yöntemi kişinin iletişim kapasitesine göre uyarlanmalıdır."),
      section("Ani Afazi Neden Acildir?", "Daha önce olmayan konuşma veya anlama bozukluğunun aniden başlaması inme gibi acil nörolojik durumların belirtisi olabilir. Özellikle yüz veya kol güçsüzlüğü, görme değişikliği, denge sorunu ya da ani bilinç değişikliği eşlik ediyorsa acil tıbbi değerlendirme gerekir.")
    ],
    relatedTerms: [
      { term: "Bilinç", slug: "bilinc" },
      { term: "Konfüzyon", slug: "konfuzyon" },
      { term: "Dikkat", slug: "dikkat" },
      { term: "Dezorganize konuşma", slug: "dezorganize-konusma" }
    ],
    seo: {
      title: "Afazi Nedir? | Psikiyatri Sözlüğü",
      description: "Afazinin dil becerileri üzerindeki etkisini, psikiyatrik belirtilerden farkını ve ani başlangıçta neden acil olduğunu açıklar.",
      ogTitle: "Afazi Nedir?",
      ogDescription: "Afaziyi konuşma güçlüğü ve nörolojik değerlendirme bağlamında açıklar."
    },
    schema: {
      definedTermDescription: "Beyin hasarı veya işlev bozukluğu nedeniyle kazanılmış dil becerilerinde ortaya çıkan bozulma."
    }
  }),

  defineTerm({
    term: "Akut stres tepkisi",
    slug: "akut-stres-tepkisi",
    shortDefinition: "Akut stres tepkisi, ani ve yoğun bir tehdit veya zorlayıcı olayın hemen ardından ortaya çıkabilen kısa süreli bedensel, duygusal, bilişsel ve davranışsal tepkileri anlatan genel bir terimdir.",
    intro: "Şaşkınlık, korku, bedensel uyarılma veya geçici dalgınlık gibi belirtiler ağır bir olayın erken döneminde görülebilir. Bu tepkilerin varlığı tek başına kalıcı bir psikiyatrik bozukluk gelişeceği anlamına gelmez.",
    sections: [
      section("Akut Stres Tepkisi Nasıl Görülebilir?", "Kişi olayın hemen ardından titreme, çarpıntı, yoğun korku, donakalma, çevresine yabancılaşma hissi, dikkatini toplamakta güçlük veya olayla ilgili görüntülerin zihnine tekrar gelmesini yaşayabilir. Tepkiler kişinin deneyimine ve olayın niteliğine göre değişir."),
      section("Normal Stres Yanıtından Farkı Nedir?", "Tehdit karşısında bedensel uyarılma doğal bir korunma sistemidir. Akut stres tepkisi ifadesi bu yanıtların ani ve zorlayıcı bir olay sonrasında belirginleşmesini anlatır. Yoğunluk tek başına tanı koymak için yeterli değildir."),
      section("Akut Stres Bozukluğu ile Aynı Şey midir?", "Hayır. Akut stres tepkisi daha genel ve erken dönem tepkilerini tanımlayan bir ifadedir. Akut stres bozukluğu ise travmatik olay sonrasında belirli belirti kümeleri, süre ve işlevsellik ölçütleriyle değerlendirilen klinik bir tanıdır."),
      section("Ne Zaman Değerlendirme Gerekir?", "Kişi temel gereksinimlerini karşılayamıyorsa, belirgin dissosiyasyon veya bilinç değişikliği varsa, güvenliğini sağlayamıyorsa ya da belirtiler giderek ağırlaşıyorsa profesyonel değerlendirme gerekir. Bedensel yaralanma olasılığı bulunan olaylarda tıbbi değerlendirme de ihmal edilmemelidir.")
    ],
    relatedTerms: [
      { term: "Akut stres bozukluğu", slug: "akut-stres-bozuklugu" },
      { term: "Travma sonrası stres bozukluğu", slug: "travma-sonrasi-stres-bozuklugu" },
      { term: "Stres yanıtı", slug: "stres-yaniti" },
      { term: "Dissosiyasyon", slug: "dissosiyasyon" }
    ],
    seo: {
      title: "Akut Stres Tepkisi Nedir? | Psikiyatri Sözlüğü",
      description: "Akut stres tepkisinin zorlayıcı olayların hemen ardından nasıl görülebileceğini ve akut stres bozukluğundan farkını açıklar.",
      ogTitle: "Akut Stres Tepkisi Nedir?",
      ogDescription: "Zorlayıcı olayların hemen ardından gelişebilen kısa süreli stres tepkilerini açıklar."
    },
    schema: {
      definedTermDescription: "Ani ve zorlayıcı bir olayın hemen ardından görülebilen kısa süreli stres tepkileri."
    }
  }),

  defineTerm({
    term: "Apraksi",
    slug: "apraksi",
    shortDefinition: "Apraksi, kas gücü ve temel hareket kapasitesi yeterli olmasına rağmen daha önce öğrenilmiş amaçlı bir hareketin planlanması veya doğru sırayla uygulanmasında ortaya çıkan nörolojik güçlüktür.",
    intro: "Apraksi isteksizlik, tembellik veya psikiyatrik bir davranış sorunu değildir. Beynin öğrenilmiş hareketleri düzenleyen ağlarının etkilenmesiyle ilişkilidir ve günlük yaşam becerilerini belirgin biçimde zorlaştırabilir.",
    sections: [
      section("Apraksi Nasıl Fark Edilebilir?", "Kişi kendisinden tanıdık bir hareketi göstermesi istendiğinde hareketin sırasını karıştırabilir veya elindeki nesneyi nasıl kullanacağını bildiği halde uygun motor planı oluşturmakta zorlanabilir. Görünüm etkilenen beyin bölgesine ve apraksinin türüne göre değişir."),
      section("Kas Güçsüzlüğünden Farkı Nedir?", "Kas güçsüzlüğünde hareket için gerekli fiziksel kuvvet azalmıştır. Aprakside ise temel güç korunabilir; sorun öğrenilmiş hareket programının planlanması veya uygulanmasıdır. Bu ayrım nörolojik muayene ile yapılır."),
      section("Psikiyatrik Belirtilerle Karışabilir mi?", "Belirgin hareket başlatma güçlüğü bazen akinezi, avolisyon veya ağır psikomotor yavaşlama ile yüzeysel olarak benzer görünebilir. Ancak mekanizmaları farklıdır. Kişinin komutu anlayıp anlamadığı, kas gücü ve nörolojik bulgular birlikte değerlendirilmelidir."),
      section("Yeni Başlayan Apraksi Neden Değerlendirilmelidir?", "Daha önce yapabildiği amaçlı hareketleri aniden gerçekleştiremeyen bir kişide inme veya başka akut nörolojik nedenler düşünülebilir. Yeni başlayan belirtiye konuşma bozukluğu, güç kaybı veya bilinç değişikliği eşlik ediyorsa acil tıbbi değerlendirme gerekir. Belirtinin başlangıç zamanı ve daha önce bulunup bulunmadığı ayırıcı değerlendirme açısından önemlidir.")
    ],
    relatedTerms: [
      { term: "Afazi", slug: "afazi" },
      { term: "Akinezi", slug: "akinezi" },
      { term: "Avolisyon", slug: "avolisyon" },
      { term: "Bilinç", slug: "bilinc" }
    ],
    seo: {
      title: "Apraksi Nedir? | Psikiyatri Sözlüğü",
      description: "Apraksinin öğrenilmiş hareketlerin planlanmasındaki nörolojik güçlük olduğunu ve psikiyatrik belirtilerden nasıl ayrıldığını açıklar.",
      ogTitle: "Apraksi Nedir?",
      ogDescription: "Apraksiyi kas güçsüzlüğü, akinezi ve davranışsal isteksizlikten ayırarak açıklar."
    },
    schema: {
      definedTermDescription: "Kas gücü korunmasına rağmen öğrenilmiş amaçlı hareketlerin planlanması veya uygulanmasında güçlük."
    }
  }),

  defineTerm({
    term: "Bilinç",
    slug: "bilinc",
    shortDefinition: "Bilinç, kişinin hem kendisinin hem de çevresinin farkında olmasını, uyanıklığını sürdürmesini ve çevreden gelen bilgileri anlamlı biçimde işleyebilmesini sağlayan temel zihinsel durumdur.",
    intro: "Klinik değerlendirmede bilinç yalnız kişinin gözlerinin açık olup olmamasıyla değerlendirilmez. Uyanıklık düzeyi, çevreyle ilişki kurabilme, dikkat ve değişen uyaranlara uygun tepki verebilme birlikte ele alınır.",
    sections: [
      section("Bilinç Değerlendirmesinde Neye Bakılır?", "Kişinin uyanıklığı, sorulara uygun yanıt verip vermediği, bulunduğu ortamla bağlantısı, dikkatini sürdürebilmesi ve çevresindeki değişiklikleri fark edebilmesi değerlendirilir. Bilinç düzeyi normal uyanıklıktan belirgin yanıtsızlığa kadar farklı derecelerde bozulabilir."),
      section("Bilinç ile Yönelim Aynı Şey midir?", "Hayır. Yönelim kişinin kim olduğunu, nerede bulunduğunu ve zamanı ne ölçüde bildiğini ifade eder. Bilinci açık bir kişide bazı yönelim güçlükleri bulunabileceği gibi bilinç bozulduğunda yönelim ve dikkat de sıklıkla etkilenir."),
      section("Psikiyatrik Görüşmede Neden Önemlidir?", "Bilinç ve dikkat belirgin biçimde bozulmuşsa kişinin verdiği bilgilerin güvenilirliği ve diğer ruhsal belirtilerin yorumu değişebilir. Ani gelişen zihinsel karışıklığın yalnız psikiyatrik bir durum olarak kabul edilmesi ciddi tıbbi nedenlerin gözden kaçmasına yol açabilir."),
      section("Bilinç Değişikliği Ne Zaman Acildir?", "Yeni başlayan uykuya eğilim, yanıtsızlık, belirgin dalgalanma, yönelim kaybı veya dikkat bozukluğu acil tıbbi değerlendirme gerektirebilir. Enfeksiyon, metabolik bozukluk, ilaç veya madde etkileri ve nörolojik hastalıklar olası nedenler arasındadır.")
    ],
    relatedTerms: [
      { term: "Bilinç bulanıklığı", slug: "bilinc-bulanikligi" },
      { term: "Konfüzyon", slug: "konfuzyon" },
      { term: "Dikkat", slug: "dikkat" },
      { term: "Algı bozukluğu", slug: "algi-bozuklugu" }
    ],
    seo: {
      title: "Bilinç Nedir? | Psikiyatri Sözlüğü",
      description: "Bilinç kavramını uyanıklık, farkındalık ve dikkat bağlamında açıklar; ani bilinç değişikliğinin neden tıbbi değerlendirme gerektirdiğini belirtir.",
      ogTitle: "Bilinç Nedir?",
      ogDescription: "Bilinç düzeyinin klinik değerlendirmedeki anlamını sade biçimde açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin kendisinin ve çevresinin farkında olmasını ve uyanıklığını sürdürmesini sağlayan zihinsel durum."
    }
  }),

  defineTerm({
    term: "Blokaj",
    slug: "blokaj",
    shortDefinition: "Blokaj, kişinin konuşurken veya düşüncesini sürdürürken zihinsel akışının aniden kesilmesi ve ne söylemekte olduğunu kısa süreli olarak sürdürememesi şeklinde gözlenen bir düşünce-akış belirtisidir.",
    intro: "Konuşma sırasında herkes zaman zaman ne söyleyeceğini unutabilir. Klinik anlamdaki blokaj ise özellikle belirgin, tekrarlayıcı olduğunda ve başka düşünce veya algı belirtileriyle birlikte bulunduğunda önem kazanır.",
    sections: [
      section("Blokaj Nasıl Görülür?", "Kişi bir cümlenin ortasında aniden durabilir, düşüncenin kaybolduğunu söyleyebilir veya kısa bir sessizlikten sonra tamamen başka bir konudan devam edebilir. Görüşmeci açısından konuşma akışında beklenmedik ve açıklanamayan bir kesinti şeklinde fark edilebilir."),
      section("Dalgınlıktan Farkı Nedir?", "Yorgunluk, kaygı veya dikkat dağılması sırasında kişi ne söyleyeceğini geçici olarak unutabilir. Blokaj değerlendirilirken kesintinin sıklığı, belirginliği, kişinin bunu nasıl deneyimlediği ve eşlik eden başka düşünce bozukluğu belirtileri dikkate alınır."),
      section("Hangi Klinik Durumlarla İlişkili Olabilir?", "Düşünce blokajı özellikle psikotik bozuklukların değerlendirilmesinde tanımlanabilir ancak tek başına belirli bir tanıyı göstermez. Yoğun kaygı, dikkat bozukluğu, ilaç veya madde etkileri ve bazı nörolojik durumlar da konuşma akışını etkileyebilir."),
      section("Değerlendirmede Neler İncelenir?", "Konuşmanın genel organizasyonu, çağrışımların izlenebilirliği, sanrı veya varsanı gibi psikotik belirtiler, duygudurum, dikkat ve bilişsel işlevler birlikte ele alınır. Tek bir konuşma kesintisinden tanısal sonuç çıkarılmaz. Kesintilerin görüşme boyunca tekrarlayıp tekrarlamadığı ve kişinin bunları nasıl açıkladığı da dikkate alınır.")
    ],
    relatedTerms: [
      { term: "Dezorganize konuşma", slug: "dezorganize-konusma" },
      { term: "Psikoz", slug: "psikoz" },
      { term: "Pozitif belirti", slug: "pozitif-belirti" },
      { term: "Dikkat", slug: "dikkat" }
    ],
    seo: {
      title: "Blokaj Nedir? | Psikiyatri Sözlüğü",
      description: "Düşünce blokajının konuşma akışındaki ani kesilme biçimindeki görünümünü ve sıradan dalgınlıktan farkını açıklar.",
      ogTitle: "Blokaj Nedir?",
      ogDescription: "Blokaj kavramını düşünce ve konuşma akışı bağlamında açıklar."
    },
    schema: {
      definedTermDescription: "Konuşma veya düşünce akışının aniden kesilmesiyle gözlenen klinik belirti."
    }
  }),

  defineTerm({
    term: "Dezorganize konuşma",
    slug: "dezorganize-konusma",
    shortDefinition: "Dezorganize konuşma, düşünceler arasındaki bağlantının belirgin biçimde bozulması nedeniyle konuşmanın amacını, mantıksal akışını veya anlaşılabilirliğini sürdürmekte güçlük ortaya çıkmasıdır.",
    intro: "Dezorganize konuşma yalnız hızlı konuşmak, konu değiştirmek veya heyecanlı olmak anlamına gelmez. Klinik değerlendirmede kişinin düşünce bağlantılarının ne ölçüde izlenebildiği ve iletişimin anlaşılabilirliği incelenir.",
    sections: [
      section("Dezorganize Konuşma Nasıl Görülebilir?", "Yanıtlar sorudan giderek uzaklaşabilir, düşünceler arasında anlaşılması güç geçişler olabilir veya konuşmanın hedefi kaybolabilir. Daha ağır durumlarda sözcükler ve cümleler arasındaki mantıksal bağlantı belirgin biçimde zayıflayabilir."),
      section("Hızlı Konuşmadan Farkı Nedir?", "Bir kişinin hızlı konuşmasına rağmen düşünce akışı anlaşılır ve hedefe yönelik olabilir. Dezorganizasyonda temel sorun konuşma hızından çok düşüncelerin birbirine bağlanma biçimidir. Mani sırasında görülen çağrışım hızlanması da ayrıca değerlendirilir."),
      section("Psikoz ile İlişkisi Nedir?", "Belirgin dezorganize konuşma psikotik tabloların pozitif belirtilerinden biri olarak görülebilir. Bununla birlikte bilinç değişikliği, nörolojik hastalık, madde etkileri ve başka klinik durumlar da konuşmanın organizasyonunu bozabilir."),
      section("Ani Başlangıç Neden Önemlidir?", "Daha önce düzenli konuşan bir kişide saatler veya günler içinde gelişen belirgin konuşma bozukluğuna bilinç veya dikkat değişikliği eşlik ediyorsa yalnız psikiyatrik neden düşünülmemelidir. Akut tıbbi ve nörolojik nedenlerin değerlendirilmesi gerekir. Konuşma değişikliğinin başlangıç hızı ve eşlik eden nörolojik belirtiler klinik ayrım açısından özellikle önemlidir.")
    ],
    relatedTerms: [
      { term: "Psikoz", slug: "psikoz" },
      { term: "Pozitif belirti", slug: "pozitif-belirti" },
      { term: "Dezorganize davranış", slug: "dezorganize-davranis" },
      { term: "Blokaj", slug: "blokaj" },
      { term: "Bilinç", slug: "bilinc" }
    ],
    seo: {
      title: "Dezorganize Konuşma Nedir? | Psikiyatri Sözlüğü",
      description: "Dezorganize konuşmanın düşünce akışındaki bozulmayla ilişkisini, hızlı konuşmadan farkını ve klinik önemini açıklar.",
      ogTitle: "Dezorganize Konuşma Nedir?",
      ogDescription: "Dezorganize konuşmayı düşünce organizasyonu ve psikoz bağlamında açıklar."
    },
    schema: {
      definedTermDescription: "Düşünceler arasındaki bağlantının bozulması nedeniyle konuşmanın anlaşılabilirliğinin ve hedefinin zayıflaması."
    }
  }),

  defineTerm({
    term: "Ekolali",
    slug: "ekolali",
    shortDefinition: "Ekolali, başka bir kişinin söylediği sözcük, ifade veya cümlenin hemen ardından ya da bir süre sonra tekrarlanması şeklinde görülen konuşma davranışıdır.",
    intro: "Ekolali tek başına belirli bir psikiyatrik veya nörogelişimsel tanıyı göstermez. Gelişim dönemine, kişinin iletişim kapasitesine ve eşlik eden diğer belirtilere göre farklı anlamlar taşıyabilir.",
    sections: [
      section("Ekolali Nasıl Görülebilir?", "Kişi kendisine yöneltilen soruyu yanıtlamak yerine sorunun tamamını veya bir bölümünü tekrar edebilir. Bazı tekrarlar hemen gerçekleşirken daha önce duyulmuş ifadelerin saatler veya günler sonra tekrarlanması da görülebilir."),
      section("Çocuklukta Her Tekrar Ekolali Sorunu mudur?", "Hayır. Dil gelişiminin bazı dönemlerinde çocuklar duydukları ifadeleri öğrenme amacıyla tekrar edebilir. Klinik değerlendirmede yaş, dil gelişim düzeyi, tekrarın iletişim amacı taşıyıp taşımadığı ve başka gelişimsel özelliklerin bulunup bulunmadığı önemlidir."),
      section("Hangi Durumlarda Görülebilir?", "Ekolali otizm spektrum bozukluğunda görülebilir ve bazı kişilerde iletişim işlevi taşıyabilir. Katatoni, bazı nörolojik tablolar ve başka iletişim bozukluklarında da ortaya çıkabileceği için tek başına tanısal değildir."),
      section("Değerlendirmede Neler Ele Alınır?", "Tekrarın biçimi, ne zaman ortaya çıktığı, kişinin dili anlama düzeyi, sosyal iletişim becerileri ve tekrarlanan ifadenin bir ihtiyacı anlatmak için kullanılıp kullanılmadığı incelenir. Davranış yalnız dış görünümüne göre yorumlanmamalıdır. Özellikle çocuklarda değerlendirme genel dil gelişimi ve iletişim örüntüsüyle birlikte yapılmalıdır.")
    ],
    relatedTerms: [
      { term: "Otizm spektrum bozukluğu", slug: "otizm-spektrum-bozuklugu" },
      { term: "Katatoni", slug: "katatoni" },
      { term: "Dezorganize konuşma", slug: "dezorganize-konusma" },
      { term: "Ekopraksi", slug: "ekopraksi" }
    ],
    seo: {
      title: "Ekolali Nedir? | Psikiyatri Sözlüğü",
      description: "Ekolalinin sözcük ve cümle tekrarlarıyla nasıl görüldüğünü, gelişimsel tekrarlardan ve tanısal yorumlardan nasıl ayrıldığını açıklar.",
      ogTitle: "Ekolali Nedir?",
      ogDescription: "Ekolaliyi iletişim, gelişim ve klinik değerlendirme bağlamında açıklar."
    },
    schema: {
      definedTermDescription: "Başka bir kişinin söylediği sözcük veya ifadelerin hemen ya da gecikmeli olarak tekrarlanması."
    }
  }),

  defineTerm({
    term: "Ekopraksi",
    slug: "ekopraksi",
    shortDefinition: "Ekopraksi, kişinin karşısındaki kişinin hareketlerini istemsiz veya belirgin biçimde otomatik olarak taklit etmesi şeklinde gözlenen motor davranıştır.",
    intro: "Bir hareketi bilinçli biçimde öğrenmek amacıyla taklit etmek ekopraksi değildir. Klinik ekopraksi kişinin isteğinden bağımsız veya kontrol etmesi güç bir taklit davranışı olarak değerlendirilir.",
    sections: [
      section("Ekopraksi Nasıl Görülebilir?", "Kişi karşısındaki kişinin elini kaldırması, yüzüne dokunması veya başka bir hareket yapmasının ardından aynı hareketi belirgin biçimde tekrar edebilir. Davranışın istemli olup olmadığı ve farklı ortamlarda nasıl ortaya çıktığı değerlendirilir."),
      section("Normal Taklitten Farkı Nedir?", "İnsanlar sosyal öğrenme sırasında veya iletişim kurarken birbirlerinin bazı hareketlerini doğal biçimde taklit edebilir. Ekopraksi terimi ise istemsiz, otomatik veya bağlama göre belirgin derecede uygunsuz motor taklit davranışını ifade eder."),
      section("Katatoni ile İlişkisi Nedir?", "Ekopraksi katatonide görülebilen motor belirtilerden biridir ancak tek başına katatoni tanısı koydurmaz. Katatonik tabloda hareketsizlik, aşırı motor etkinlik, negativizm, postür değişiklikleri veya ekolali gibi başka belirtiler de birlikte değerlendirilebilir."),
      section("Değerlendirmede Neler Araştırılır?", "Davranışın ne zaman başladığı, kişinin bunu kontrol edip edemediği, eşlik eden motor ve konuşma belirtileri, bilinç ve nörolojik durum incelenir. Yeni başlayan olağandışı motor davranışlarda psikiyatrik nedenlerin yanı sıra tıbbi ve nörolojik nedenler de düşünülür. Davranışın sürekli mi yoksa belirli durumlarda mı ortaya çıktığı da klinik değerlendirmeye katkı sağlar.")
    ],
    relatedTerms: [
      { term: "Katatoni", slug: "katatoni" },
      { term: "Ekolali", slug: "ekolali" },
      { term: "Dezorganize davranış", slug: "dezorganize-davranis" },
      { term: "Bilinç", slug: "bilinc" }
    ],
    seo: {
      title: "Ekopraksi Nedir? | Psikiyatri Sözlüğü",
      description: "Ekopraksinin istemsiz motor taklit davranışı olarak anlamını, normal taklitten farkını ve katatoniyle ilişkisini açıklar.",
      ogTitle: "Ekopraksi Nedir?",
      ogDescription: "Ekopraksiyi motor taklit davranışı ve katatoni bağlamında açıklar."
    },
    schema: {
      definedTermDescription: "Başka bir kişinin hareketlerinin istemsiz veya otomatik biçimde taklit edilmesi."
    }
  })
];


const fifthBatchNewTerms = [
  defineTerm({
    term: "Psikodinamik terapi",
    slug: "psikodinamik-terapi",
    shortDefinition: "Psikodinamik terapi, kişinin güncel duygusal ve kişilerarası güçlüklerini geçmiş deneyimler, ilişki örüntüleri, çatışmalar ve çoğu zaman doğrudan fark edilmeyen psikolojik süreçlerle birlikte ele alan psikoterapi yaklaşımıdır.",
    intro: "Psikodinamik yaklaşım yalnız geçmişi konuşmak anlamına gelmez. Geçmiş deneyimlerin bugünkü ilişkiler, beklentiler, duygular ve davranışlar üzerindeki olası etkileri güncel yaşamla bağlantılı biçimde değerlendirilir.",
    sections: [
      section("Psikodinamik Terapide Neler Ele Alınır?", "Kişinin tekrarlayan ilişki örüntüleri, zorlayıcı duyguları, kendisi ve başkaları hakkındaki beklentileri ile çatışma yaşadığı alanlar üzerinde durulabilir. Amaç kişinin yaşadıklarına ilişkin farkındalığını ve psikolojik esnekliğini geliştirmesine yardımcı olmaktır."),
      section("Geçmiş Deneyimler Neden Konuşulur?", "Çocukluk ve geçmiş ilişkiler bugünkü deneyimleri tek başına belirlemez. Bununla birlikte erken ilişkilerden öğrenilen bazı beklentiler ve baş etme yolları yetişkin yaşamında tekrar edebilir. Terapi bu bağlantıları kesin neden-sonuç ilişkileri kurmadan araştırır."),
      section("Terapötik İlişkinin Rolü Nedir?", "Kişinin görüşme sırasında terapistle kurduğu ilişki de bazı kişilerarası beklentilerin anlaşılması için bilgi sağlayabilir. Terapötik ilişki güvenli sınırlar içinde incelenir; amaç kişiyi yargılamak değil, tekrarlayan ilişki örüntülerini birlikte fark edebilmektir."),
      section("Her Psikoterapi Psikodinamik midir?", "Hayır. Psikodinamik terapi psikoterapi yöntemlerinden biridir. Bilişsel davranışçı, kişilerarası, davranışsal ve başka yaklaşımlar farklı kuramsal çerçeveler ve teknikler kullanabilir. Uygun yöntem kişinin başvuru nedeni, tercihleri ve klinik gereksinimleriyle birlikte değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Mentalizasyon", slug: "mentalizasyon" },
      { term: "Bağlanma", slug: "baglanma" }
    ],
    seo: {
      title: "Psikodinamik Terapi Nedir? | Psikiyatri Sözlüğü",
      description: "Psikodinamik terapinin ilişki örüntüleri, geçmiş deneyimler ve güncel duygusal güçlükler üzerinden nasıl çalıştığını açıklar.",
      ogTitle: "Psikodinamik Terapi Nedir?",
      ogDescription: "Psikodinamik terapi yaklaşımını sade ve bilimsel bir çerçevede açıklar."
    },
    schema: {
      definedTermDescription: "Güncel ruhsal ve kişilerarası güçlükleri geçmiş deneyimler ve psikolojik örüntülerle birlikte ele alan psikoterapi yaklaşımı."
    }
  }),

  defineTerm({
    term: "Destekleyici psikoterapi",
    slug: "destekleyici-psikoterapi",
    shortDefinition: "Destekleyici psikoterapi, kişinin mevcut baş etme becerilerini, günlük işlevselliğini, problem çözme kapasitesini ve psikolojik dayanıklılığını desteklemeyi amaçlayan psikoterapi yaklaşımıdır.",
    intro: "Destekleyici psikoterapide amaç her zaman kişiliğin derin yapısını değiştirmek değildir. Güncel güçlüklerin daha yönetilebilir hale gelmesi ve kişinin mevcut güçlü yönlerini kullanabilmesi ön planda olabilir.",
    sections: [
      section("Destekleyici Psikoterapide Neler Yapılır?", "Kişinin yaşadığı sorunları daha anlaşılır hale getirmek, güçlü yönlerini fark etmek, gerçekçi problem çözme seçenekleri geliştirmek ve stresli dönemlerde işlevselliği korumak üzerinde çalışılabilir. Görüşmeler kişinin ihtiyaçlarına göre farklı derecede yapılandırılmış olabilir."),
      section("Destek Vermek ile Aynı Şey midir?", "Günlük yaşamda yakınların sunduğu duygusal destek çok değerlidir ancak destekleyici psikoterapi profesyonel sınırlar ve klinik değerlendirme içinde yürütülür. Terapötik yaklaşım kişinin belirtilerini, işlevselliğini ve mevcut yaşam koşullarını sistematik biçimde ele alır."),
      section("Hangi Durumlarda Kullanılabilir?", "Yoğun stres dönemleri, kronik ruhsal veya fiziksel hastalıklarla yaşama, yaşam değişiklikleri ve işlevselliğin korunmasının önemli olduğu farklı klinik durumlarda destekleyici yöntemlerden yararlanılabilir. Uygulamanın biçimi kişiden kişiye değişir."),
      section("Diğer Psikoterapilerden Farkı Nedir?", "Bazı psikoterapi modelleri belirli düşünce, davranış veya ilişki örüntülerini değiştirmeye daha yoğun odaklanabilir. Destekleyici psikoterapi ise kişinin mevcut kapasitesini koruma ve güçlendirmeye daha fazla ağırlık verebilir. Yaklaşımlar gerektiğinde birbirini dışlamadan kullanılabilir. Görüşmenin odağı kişinin klinik gereksinimleri zaman içinde değiştikçe yeniden düzenlenebilir.")
    ],
    relatedTerms: [
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Psikososyal destek", slug: "psikososyal-destek" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ],
    seo: {
      title: "Destekleyici Psikoterapi Nedir? | Psikiyatri Sözlüğü",
      description: "Destekleyici psikoterapinin baş etme becerileri, dayanıklılık ve günlük işlevselliği desteklemedeki rolünü açıklar.",
      ogTitle: "Destekleyici Psikoterapi Nedir?",
      ogDescription: "Destekleyici psikoterapinin amaç ve sınırlarını sade biçimde açıklar."
    },
    schema: {
      definedTermDescription: "Baş etme kapasitesi ve günlük işlevselliğin desteklenmesini amaçlayan psikoterapi yaklaşımı."
    }
  }),

  defineTerm({
    term: "Maruz bırakma",
    slug: "maruz-birakma",
    shortDefinition: "Maruz bırakma, kişinin korktuğu ancak nesnel olarak güvenli olan durum, düşünce, duyum veya uyaranlarla planlı ve kontrollü biçimde karşılaşmasını içeren davranışsal psikoterapi tekniğidir.",
    intro: "Maruz bırakmanın amacı kişiyi hazırlıksız biçimde korkusuyla karşı karşıya bırakmak değildir. Uygulama güvenlik, kişinin katılımı ve ele alınan sorunun özellikleri dikkate alınarak yapılandırılır.",
    sections: [
      section("Maruz Bırakma Nasıl Çalışır?", "Kaçınma kısa vadede kaygıyı azaltabilir ancak korkulan durumun tehlikeli olduğu inancının sınanmasını engelleyebilir. Planlı karşılaşmalar kişinin kaygının zaman içindeki değişimini ve korktuğu sonuçların gerçekleşip gerçekleşmediğini gözlemlemesine olanak sağlayabilir."),
      section("Hangi Biçimlerde Uygulanabilir?", "Gerçek yaşam durumlarıyla karşılaşma, bazı bedensel duyumların güvenli biçimde oluşturulması veya zihinsel imgelerle çalışma farklı uygulama biçimleri arasında olabilir. Kullanılan yöntem sorunun türüne ve kişinin klinik durumuna göre belirlenir."),
      section("Maruz Bırakma Zorla Yapılır mı?", "Hayır. Psikoterapide maruz bırakma iş birliği ve bilgilendirilmiş katılım temelinde yürütülmelidir. Kişinin korkusunu küçümsemek veya onu hazırlıksız şekilde yoğun bir durumun içine sokmak yapılandırılmış maruz bırakma uygulaması değildir."),
      section("Hangi Sorunlarda Kullanılabilir?", "Özgül fobiler, sosyal anksiyete, panik bozukluk ve obsesif kompulsif bozukluk gibi bazı durumlarda maruz bırakma temelli yöntemler kullanılabilir. Uygulamanın biçimi ve uygunluğu kişisel değerlendirmeye göre değişir. Korkulan uyaranın gerçek bir tehlike içerip içermediğinin önceden değerlendirilmesi önemlidir.")
    ],
    relatedTerms: [
      { term: "Özgül fobi", slug: "ozgul-fobi" },
      { term: "Sosyal anksiyete bozukluğu", slug: "sosyal-anksiyete-bozuklugu" },
      { term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi" },
      { term: "Anksiyete", slug: "anksiyete" }
    ],
    seo: {
      title: "Maruz Bırakma Nedir? | Psikiyatri Sözlüğü",
      description: "Maruz bırakma tekniğinin korkulan ancak güvenli uyaranlarla planlı karşılaşma yoluyla nasıl uygulandığını açıklar.",
      ogTitle: "Maruz Bırakma Nedir?",
      ogDescription: "Maruz bırakmanın amacı, uygulama biçimi ve psikoterapideki yerini açıklar."
    },
    schema: {
      definedTermDescription: "Korkulan ancak güvenli uyaranlarla planlı ve kontrollü karşılaşmayı içeren davranışsal psikoterapi tekniği."
    }
  }),

  defineTerm({
    term: "Tepki önleme",
    slug: "tepki-onleme",
    shortDefinition: "Tepki önleme, özellikle obsesif kompulsif bozuklukta kaygı veya rahatsızlığı azaltmak amacıyla yapılan kompulsif davranışların gerçekleştirilmemesi üzerinde çalışılan davranışsal yöntemdir.",
    intro: "Tepki önleme çoğu zaman maruz bırakmayla birlikte ele alınır. Amaç kişinin kaygısını önemsememek değil, kaygı ile kompulsiyon arasındaki öğrenilmiş döngüyü güvenli ve yapılandırılmış biçimde incelemektir.",
    sections: [
      section("Kompulsiyon Döngüsünde Ne Olur?", "Takıntılı düşünce veya kuşku kaygıyı artırabilir ve kişi bu rahatsızlığı azaltmak için kontrol etme, tekrar etme veya güvence arama gibi davranışlara yönelebilir. Rahatlama kısa süreli olduğunda döngü yeniden güçlenebilir."),
      section("Tepki Önlemede Ne Yapılır?", "Kişi uygun biçimde planlanmış bir durumda kompulsiyonu hemen yerine getirmeden rahatsızlığın nasıl değiştiğini gözlemlemeyi öğrenebilir. Çalışmanın düzeyi kişinin toleransı, belirtilerin şiddeti ve tedavi hedefleri dikkate alınarak belirlenir."),
      section("Tepki Önleme İrade Testi midir?", "Hayır. Kompulsiyonlar basit alışkanlıklar veya irade zayıflığı olarak değerlendirilmez. Tepki önleme yapılandırılmış psikoterapötik çalışma içinde, kişinin belirtilerinin işlevini anlaması ve farklı yanıtlar geliştirmesi amacıyla uygulanır."),
      section("Her Tekrarlayıcı Davranışta Kullanılır mı?", "Hayır. Tekrarlayıcı davranışın obsesif kompulsif döngünün parçası olup olmadığı değerlendirilmelidir. Tikler, nörogelişimsel davranışlar, bağımlılık örüntüleri veya başka klinik durumlar farklı yaklaşım gerektirebilir. Davranışın hangi işlevi gördüğünün anlaşılması uygun psikoterapötik yöntemin seçilmesine yardımcı olur. Belirtinin hangi durumlarda arttığının gözlenmesi de bu ayrımı destekleyebilir.")
    ],
    relatedTerms: [
      { term: "Obsesif kompulsif bozukluk", slug: "obsesif-kompulsif-bozukluk" },
      { term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Güvence arama", slug: "guvence-arama" }
    ],
    seo: {
      title: "Tepki Önleme Nedir? | Psikiyatri Sözlüğü",
      description: "Tepki önlemenin obsesif kompulsif bozuklukta kompulsiyon döngüsüyle ilişkisini ve maruz bırakmayla birlikte kullanımını açıklar.",
      ogTitle: "Tepki Önleme Nedir?",
      ogDescription: "Tepki önleme yöntemini kompulsiyon ve kaygı döngüsü üzerinden açıklar."
    },
    schema: {
      definedTermDescription: "Kompulsif davranışın gerçekleştirilmemesi üzerinde çalışılan yapılandırılmış davranışsal psikoterapi yöntemi."
    }
  }),

  defineTerm({
    term: "Psikoeğitim",
    slug: "psikoegitim",
    shortDefinition: "Psikoeğitim, kişinin yaşadığı ruhsal durum, belirtiler, olası seyir, değerlendirme süreci ve baş etme seçenekleri hakkında anlaşılır ve bilimsel bilgi edinmesini amaçlayan yapılandırılmış bilgilendirme yaklaşımıdır.",
    intro: "Psikoeğitim yalnız bilgi vermek değildir. Kişinin kendi deneyimini daha iyi anlamasına, belirtileri izlemesine ve sağlık hizmetleriyle ilgili karar süreçlerine daha bilinçli katılmasına yardımcı olmayı hedefler.",
    sections: [
      section("Psikoeğitimde Hangi Konular Ele Alınabilir?", "Belirtilerin özellikleri, hastalığın seyri, stres etkenleri, uyku ve günlük yaşam düzeni, erken uyarı işaretleri ve mevcut destek seçenekleri konuşulabilir. İçeriğin kişinin tanısına, yaşına ve bilgi ihtiyacına uygun olması önemlidir."),
      section("Psikoeğitim Tanı Koymak mıdır?", "Hayır. Psikoeğitim klinik değerlendirme sonucunda elde edilen bilgilerin anlaşılır hale getirilmesine yardımcı olabilir ancak kendi başına tanı yöntemi değildir. Genel bilgilerin kişinin kişisel durumuna doğrudan uygulanması doğru olmayabilir."),
      section("Aileler Psikoeğitime Dahil Edilebilir mi?", "Kişinin onayı ve klinik gereksinimler doğrultusunda yakınların bazı süreçleri anlaması destekleyici olabilir. Aileyle paylaşılacak bilgilerin kapsamı mahremiyet ve kişinin tercihleri dikkate alınarak belirlenmelidir."),
      section("Neden Yararlı Olabilir?", "Belirtileri ve olası tetikleyicileri tanımak, yanlış inanışları azaltmak ve hangi durumda profesyonel yardım aranacağını bilmek kişinin sürece daha etkin katılmasını sağlayabilir. Psikoeğitim diğer tedavi ve destek yöntemlerinin yerine geçen tek başına bir uygulama değildir. Verilen bilgilerin anlaşılması ve kişinin sorularına göre yeniden ele alınması sürecin önemli bir parçasıdır.")
    ],
    relatedTerms: [
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Psikososyal destek", slug: "psikososyal-destek" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ],
    seo: {
      title: "Psikoeğitim Nedir? | Psikiyatri Sözlüğü",
      description: "Psikoeğitimin ruhsal belirtileri ve değerlendirme sürecini anlamaya yardımcı olan yapılandırılmış bilgilendirme yaklaşımı olduğunu açıklar.",
      ogTitle: "Psikoeğitim Nedir?",
      ogDescription: "Psikoeğitimin amacı, kapsamı ve klinik süreçteki yerini açıklar."
    },
    schema: {
      definedTermDescription: "Ruhsal durum ve belirtiler hakkında bilimsel ve anlaşılır bilgi sunan yapılandırılmış bilgilendirme yaklaşımı."
    }
  }),

  defineTerm({
    term: "Motivasyonel görüşme",
    slug: "motivasyonel-gorusme",
    shortDefinition: "Motivasyonel görüşme, kişinin bir davranışı değiştirme konusundaki kararsızlığını anlamasına ve kendi değişim nedenlerini ortaya koymasına yardımcı olmayı amaçlayan iş birliğine dayalı görüşme yaklaşımıdır.",
    intro: "Motivasyonel görüşmede kişiyi ikna etmek, suçlamak veya baskı altında karar vermeye zorlamak hedeflenmez. Değişimle ilgili avantajlar, kaygılar ve kişinin kendi değerleri birlikte araştırılır.",
    sections: [
      section("Kararsızlık Neden Önemlidir?", "Bir davranışın zararlarını bilmek o davranışı bırakmayı otomatik olarak kolaylaştırmaz. Kişi değişmek isterken aynı zamanda mevcut davranışın sağladığını düşündüğü bazı yararları kaybetmekten çekinebilir. Bu ikili durum ambivalans olarak ele alınır."),
      section("Motivasyonel Görüşmede Nasıl Konuşulur?", "Açık uçlu sorular, yansıtıcı dinleme, kişinin güçlü yanlarını fark etmesine yardımcı olan ifadeler ve söylediklerinin özetlenmesi kullanılabilir. Görüşmeci değişimin nedenlerini kişinin kendisinin ifade etmesine alan açar."),
      section("Bağımlılık Alanında Neden Kullanılır?", "Madde veya alkol kullanımında kişi davranışının zararlarını fark etse bile değişime hazır olmayabilir. Motivasyonel görüşme değişime yönelik kişisel nedenlerin araştırılmasını sağlayabilir ancak bağımlılık tedavisinin tümünü tek başına oluşturmaz."),
      section("Sadece Bağımlılıkta mı Kullanılır?", "Hayır. Sağlık davranışları, tedaviye katılım ve başka davranış değişikliği alanlarında da motivasyonel görüşme ilkelerinden yararlanılabilir. Uygulamanın kapsamı sorunun niteliğine ve kişinin hedeflerine göre değişir. Kişinin değişime hazır oluş düzeyi görüşmeler boyunca aynı kalmak zorunda değildir.")
    ],
    relatedTerms: [
      { term: "Bağımlılık", slug: "bagimlilik" },
      { term: "Madde kullanım bozukluğu", slug: "madde-kullanim-bozuklugu" },
      { term: "Alkol kullanım bozukluğu", slug: "alkol-kullanim-bozuklugu" },
      { term: "Psikoterapi", slug: "psikoterapi" }
    ],
    seo: {
      title: "Motivasyonel Görüşme Nedir? | Psikiyatri Sözlüğü",
      description: "Motivasyonel görüşmenin değişim konusundaki kararsızlığı ele alan iş birliğine dayalı yaklaşımını açıklar.",
      ogTitle: "Motivasyonel Görüşme Nedir?",
      ogDescription: "Motivasyonel görüşmeyi değişim, kararsızlık ve kişisel motivasyon üzerinden açıklar."
    },
    schema: {
      definedTermDescription: "Davranış değişikliği konusundaki kararsızlığı ele alan iş birliğine dayalı görüşme yaklaşımı."
    }
  }),

  defineTerm({
    term: "Şema terapi",
    slug: "sema-terapi",
    shortDefinition: "Şema terapi, kişinin kendisi, başkaları ve ilişkiler hakkında erken dönemlerden itibaren gelişebilen kalıcı düşünce-duygu örüntülerini ve bunlara eşlik eden baş etme biçimlerini ele alan bütünleştirici psikoterapi yaklaşımıdır.",
    intro: "Şema terapi bilişsel, davranışsal, bağlanma ve deneyimsel yaklaşımlardan yararlanır. Şema kavramı, tek bir düşünceden daha geniş ve tekrarlayıcı psikolojik örüntüleri ifade eder.",
    sections: [
      section("Şema Nedir?", "Şemalar kişinin kendisini ve ilişkilerini anlamlandırırken kullandığı geniş zihinsel ve duygusal örüntüler olarak ele alınabilir. Örneğin terk edilme, yetersizlik veya güvensizlik beklentileri farklı yaşam olaylarında tekrar tekrar etkinleşebilir."),
      section("Şemalar Nasıl Sürer?", "Kişi bazı durumlarda şemasını doğrulayan bilgileri daha kolay fark edebilir, şemayı tetikleyen durumlardan kaçınabilir veya aynı ilişki örüntülerini yeniden yaşayabilir. Bu süreçler çoğu zaman bilinçli seçimlerden daha karmaşıktır."),
      section("Şema Terapide Ne Üzerinde Çalışılır?", "Şemaların hangi durumlarda etkinleştiği, bu sırada ortaya çıkan duygular ve kişinin baş etme davranışları birlikte incelenebilir. Bilişsel çalışmaların yanında deneyimsel ve kişilerarası yöntemlerden de yararlanılabilir."),
      section("Bilişsel Davranışçı Terapiden Farkı Nedir?", "Şema terapi bilişsel davranışçı gelenekten etkilenmiştir ancak daha uzun süreli kişilik ve ilişki örüntülerine, erken deneyimlere ve karşılanmamış duygusal ihtiyaçlara daha fazla odaklanabilir. Hangi yaklaşımın uygun olduğu kişinin klinik özelliklerine göre değişir. Terapi hedefleri kişinin güncel sorunları ve tekrarlayan örüntülerine göre birlikte belirlenir.")
    ],
    relatedTerms: [
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi" },
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Borderline kişilik örüntüsü", slug: "borderline-kisilik-oruntusu" }
    ],
    seo: {
      title: "Şema Terapi Nedir? | Psikiyatri Sözlüğü",
      description: "Şema terapinin kalıcı düşünce-duygu ve ilişki örüntülerini nasıl ele aldığını ve BDT ile ilişkisini açıklar.",
      ogTitle: "Şema Terapi Nedir?",
      ogDescription: "Şema terapi yaklaşımının temel kavramlarını sade biçimde açıklar."
    },
    schema: {
      definedTermDescription: "Kalıcı düşünce, duygu ve ilişki örüntülerini ele alan bütünleştirici psikoterapi yaklaşımı."
    }
  }),

  defineTerm({
    term: "Kabul ve kararlılık terapisi",
    slug: "kabul-ve-kararlilik-terapisi",
    shortDefinition: "Kabul ve kararlılık terapisi, zorlayıcı düşünce ve duyguları bütünüyle ortadan kaldırmaya çalışmak yerine onlarla daha esnek ilişki kurmayı ve kişinin değerleri doğrultusunda davranabilmesini hedefleyen psikoterapi yaklaşımıdır.",
    intro: "Bu yaklaşımda kabul, yaşanan her durumu onaylamak veya değiştirmemek anlamına gelmez. Kontrol edilemeyen içsel deneyimlerle mücadeleyi azaltırken değiştirilebilir davranışlar üzerinde çalışmak amaçlanır.",
    sections: [
      section("Psikolojik Esneklik Ne Anlama Gelir?", "Psikolojik esneklik kişinin zorlayıcı bir düşünce veya duygu ortaya çıktığında yalnız bu deneyime göre hareket etmek yerine içinde bulunduğu durumu ve değerlerini dikkate alabilmesidir. Amaç rahatsızlığın hiçbir zaman ortaya çıkmaması değildir."),
      section("Kabul Kavramı Nasıl Kullanılır?", "Kabul, düşünce ve duyguların var olmasına yer açabilmeyi ifade eder. Bu yaklaşım kişinin gerçek bir tehlike, haksızlık veya değiştirilebilir sorun karşısında pasif kalmasını önermez; içsel deneyimle gereksiz mücadeleyi azaltmayı hedefler."),
      section("Değerler Neden Önemlidir?", "Kişinin nasıl bir yaşam sürmek istediği, ilişkilerde veya iş yaşamında hangi yönleri önemli bulduğu ele alınabilir. Değerler ulaşılacak tek bir sonuçtan çok davranışlara yön veren bir pusula gibi kullanılır."),
      section("Hangi Yöntemlerden Yararlanılır?", "Farkındalık çalışmaları, düşüncelere mesafe kazandırma, kabul ve değer odaklı davranış planlama gibi yöntemlerden yararlanılabilir. Uygulama kişinin yaşadığı güçlüğe ve terapötik hedeflere göre şekillenir.")
    ],
    relatedTerms: [
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi" }
    ],
    seo: {
      title: "Kabul ve Kararlılık Terapisi Nedir? | Psikiyatri Sözlüğü",
      description: "Kabul ve kararlılık terapisinin psikolojik esneklik, kabul ve değer odaklı davranış kavramlarını açıklar.",
      ogTitle: "Kabul ve Kararlılık Terapisi Nedir?",
      ogDescription: "Kabul ve kararlılık terapisi yaklaşımının temel ilkelerini açıklar."
    },
    schema: {
      definedTermDescription: "Psikolojik esneklik, kabul ve değer odaklı davranışı geliştirmeyi amaçlayan psikoterapi yaklaşımı."
    }
  }),

  defineTerm({
    term: "Diyalektik davranış terapisi",
    slug: "diyalektik-davranis-terapisi",
    shortDefinition: "Diyalektik davranış terapisi, kabul ve değişim stratejilerini birlikte kullanan; duygu düzenleme, sıkıntıya dayanma, farkındalık ve kişilerarası beceriler üzerinde çalışan yapılandırılmış psikoterapi yaklaşımıdır.",
    intro: "Diyalektik davranış terapisi başlangıçta kronik kendine zarar verme davranışları ve borderline kişilik bozukluğu alanında geliştirilmiş, daha sonra farklı klinik sorunlara uyarlanmış bir yaklaşımdır.",
    sections: [
      section("Diyalektik Ne Anlama Gelir?", "Diyalektik yaklaşım görünüşte karşıt iki gerçeğin aynı anda geçerli olabileceği düşüncesini kullanır. Kişinin yaşadığı duygusal acının kabul edilmesi ile bazı davranışların değişmesi gerektiği fikri birlikte ele alınabilir."),
      section("Hangi Beceriler Üzerinde Çalışılır?", "Farkındalık, yoğun duyguları düzenleme, kriz sırasında zararlı davranışlara yönelmeden sıkıntıyla kalabilme ve kişilerarası ilişkilerde ihtiyaçları daha etkili ifade edebilme temel beceri alanları arasındadır."),
      section("Kendine Zarar Verme Davranışı Nasıl Ele Alınır?", "Kendine zarar verme davranışının hangi duygusal ve kişilerarası koşullarda ortaya çıktığı incelenebilir ve daha güvenli alternatif baş etme yolları geliştirilmesi hedeflenir. Güncel güvenlik riski bulunduğunda risk değerlendirmesi ve uygun klinik müdahale önceliklidir."),
      section("Sadece Borderline Kişilik Örüntüsünde mi Kullanılır?", "Hayır. Diyalektik davranış terapisi farklı klinik alanlara uyarlanmıştır ancak her kişide aynı biçimde uygulanmaz. Yöntemin uygunluğu kişinin belirtileri, hedefleri, güvenlik durumu ve klinik değerlendirmesiyle birlikte belirlenir. Programın yoğunluğu ve kullanılan bileşenler uygulama bağlamına göre farklılaşabilir.")
    ],
    relatedTerms: [
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Borderline kişilik örüntüsü", slug: "borderline-kisilik-oruntusu" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Kendine zarar verme", slug: "kendine-zarar-verme" }
    ],
    seo: {
      title: "Diyalektik Davranış Terapisi Nedir? | Psikiyatri Sözlüğü",
      description: "Diyalektik davranış terapisinin kabul, değişim, duygu düzenleme ve sıkıntıya dayanma becerilerini nasıl ele aldığını açıklar.",
      ogTitle: "Diyalektik Davranış Terapisi Nedir?",
      ogDescription: "Diyalektik davranış terapisinin temel beceri alanlarını ve yaklaşımını açıklar."
    },
    schema: {
      definedTermDescription: "Kabul ve değişim stratejileriyle duygu düzenleme ve davranış becerileri üzerinde çalışan psikoterapi yaklaşımı."
    }
  }),

  defineTerm({
    term: "Aile terapisi",
    slug: "aile-terapisi",
    shortDefinition: "Aile terapisi, bireysel güçlükleri yalnız tek bir kişinin özelliği olarak değil, aile üyeleri arasındaki iletişim, ilişki örüntüleri, roller ve yaşam koşullarıyla birlikte ele alan psikoterapi yaklaşımıdır.",
    intro: "Aile terapisi bir kişiyi sorunun kaynağı veya suçlusu ilan etmeyi amaçlamaz. Aile sistemindeki etkileşimlerin nasıl sürdüğünü ve üyelerin birbirlerini nasıl etkilediğini anlamaya çalışır.",
    sections: [
      section("Aile Terapisinde Neler Ele Alınır?", "İletişim biçimleri, çatışmalar, sınırlar, ebeveynlik rolleri, yaşam geçişleri ve aile üyelerinin birbirlerinden beklentileri üzerinde çalışılabilir. Görüşmeler bütün aileyle veya klinik hedefe göre bazı aile üyeleriyle yürütülebilir."),
      section("Bireysel Psikoterapiden Farkı Nedir?", "Bireysel psikoterapi kişinin kendi deneyim ve örüntülerine daha doğrudan odaklanırken aile terapisi ilişkisel sistemi ön plana çıkarır. Bu yaklaşımlar birbirinin alternatifi olmak zorunda değildir ve bazı durumlarda birlikte kullanılabilir."),
      section("Aile Üyelerinden Birinin Tanısı Olması Gerekir mi?", "Hayır. İletişim sorunları, yaşam değişiklikleri, ebeveynlik güçlükleri veya aile içindeki tekrarlayıcı çatışmalar gibi konular da ele alınabilir. Bununla birlikte ruhsal hastalık bulunan ailelerde hastalıkla ilgili süreçlerin anlaşılması ayrıca önemli olabilir."),
      section("Güvenlik Sorunlarında Nasıl Yaklaşılır?", "Aile içinde şiddet, tehdit veya zorlayıcı kontrol varsa yalnız ortak iletişimi geliştirmeye odaklanmak yeterli olmayabilir. Güvenlik ve bireysel ihtiyaçlar öncelikli değerlendirilir; ortak görüşmenin uygun olup olmadığı klinik koşullara göre belirlenir.")
    ],
    relatedTerms: [
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Psikososyal destek", slug: "psikososyal-destek" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" }
    ],
    seo: {
      title: "Aile Terapisi Nedir? | Psikiyatri Sözlüğü",
      description: "Aile terapisinin iletişim, ilişki örüntüleri ve aile sistemi üzerinden nasıl çalıştığını ve bireysel terapiden farkını açıklar.",
      ogTitle: "Aile Terapisi Nedir?",
      ogDescription: "Aile terapisi yaklaşımının amaçlarını ve kapsamını sade biçimde açıklar."
    },
    schema: {
      definedTermDescription: "Aile üyeleri arasındaki iletişim ve ilişki örüntülerini sistemik biçimde ele alan psikoterapi yaklaşımı."
    }
  })
];


const sixthBatchNewTerms = [
  defineTerm({
    term: "Acil psikiyatri",
    slug: "acil-psikiyatri",
    shortDefinition: "Acil psikiyatri, kişinin ruhsal durumu veya davranışındaki hızlı değişikliklerin kendisi ya da çevresi açısından önemli güvenlik, işlevsellik veya tıbbi risk oluşturup oluşturmadığının gecikmeden değerlendirildiği psikiyatri alanıdır.",
    intro: "Acil psikiyatrik değerlendirme yalnız belirli bir tanının varlığına göre yapılmaz. Belirtilerin ne kadar hızlı geliştiği, kişinin güvenliği, bilinç ve dikkat düzeyi, madde veya ilaç etkileri ve eşlik eden tıbbi sorunlar birlikte ele alınır.",
    sections: [
      section("Hangi Durumlar Acil Değerlendirme Gerektirebilir?", "Kişinin kendisine veya başkasına zarar verme riskinin belirginleşmesi, ağır davranış değişikliği, hızla gelişen psikotik belirtiler, ciddi kontrol kaybı veya temel gereksinimlerini karşılayamayacak düzeyde ruhsal bozulma acil değerlendirme gerektirebilir. Her durum kendi klinik bağlamında ele alınır."),
      section("Bilinç Değişikliği Neden Özellikle Önemlidir?", "Yeni başlayan konfüzyon, yönelim kaybı, dikkat bozukluğu veya dalgalanan bilinç düzeyi yalnız psikiyatrik bir sorun olarak değerlendirilmemelidir. Enfeksiyon, metabolik sorunlar, nörolojik hastalıklar, ilaç veya madde etkileri gibi tıbbi nedenlerin dışlanması gerekebilir."),
      section("Acil Değerlendirmede Neler İncelenir?", "Mevcut belirtilerin başlangıç zamanı, kişinin düşünce ve davranışları, geçmiş krizler, kullanılan ilaçlar ve maddeler, tıbbi hastalıklar, sosyal destek ve güvenli bir ortamda bulunup bulunmadığı değerlendirilir. Gerektiğinde yakınlardan veya sağlık kayıtlarından ek bilgi alınabilir."),
      section("Acil Psikiyatri ile Rutin Muayene Arasındaki Fark Nedir?", "Rutin görüşmede ayrıntılı tanısal değerlendirme ve uzun vadeli planlama ön planda olabilir. Acil psikiyatride ilk amaç mevcut riskin ve tıbbi aciliyetin belirlenmesi, kişinin güvenliğinin sağlanması ve bir sonraki uygun sağlık hizmetinin planlanmasıdır.")
    ],
    relatedTerms: [
      { term: "Risk değerlendirmesi", slug: "risk-degerlendirmesi" },
      { term: "Psikoz", slug: "psikoz" },
      { term: "Konfüzyon", slug: "konfuzyon" },
      { term: "Bilinç", slug: "bilinc" }
    ],
    seo: {
      title: "Acil Psikiyatri Nedir? | Psikiyatri Sözlüğü",
      description: "Acil psikiyatrinin güvenlik, hızlı ruhsal değişim, bilinç bozukluğu ve tıbbi nedenlerin değerlendirilmesindeki rolünü açıklar.",
      ogTitle: "Acil Psikiyatri Nedir?",
      ogDescription: "Acil psikiyatrik değerlendirmenin hangi durumlarda ve neden gerekli olabileceğini açıklar."
    },
    schema: {
      definedTermDescription: "Hızlı gelişen ruhsal belirtilerin güvenlik ve tıbbi risk açısından gecikmeden değerlendirildiği psikiyatri alanı."
    }
  }),

  defineTerm({
    term: "Adli psikiyatri",
    slug: "adli-psikiyatri",
    shortDefinition: "Adli psikiyatri, psikiyatri bilgisinin hukukla kesiştiği durumlarda ruhsal durum, karar verme kapasitesi, ceza veya hukuk sorumluluğu ve çeşitli adli soruların tıbbi açıdan değerlendirilmesiyle ilgilenen alandır.",
    intro: "Adli psikiyatrik değerlendirme tedavi amacıyla yapılan rutin psikiyatri görüşmesinden farklı hedeflere sahip olabilir. Değerlendirmenin hangi hukuki soruya yanıt vermek için yapıldığı, kullanılan yöntem ve raporun kapsamını belirler.",
    sections: [
      section("Adli Psikiyatri Hangi Konularla İlgilenir?", "Ceza sorumluluğu, fiil ehliyeti, vesayet veya koruyucu hukuki düzenlemeler, kişinin belirli bir karar için ruhsal kapasitesi ve bazı durumlarda risk değerlendirmesi adli psikiyatrinin çalışma alanları arasında bulunabilir. Hukuki ölçütler ülkenin mevzuatına göre değişir."),
      section("Adli Muayene ile Klinik Muayene Aynı mıdır?", "Hayır. Klinik görüşmede temel amaç kişinin sağlık gereksinimlerini anlamak ve uygun sağlık hizmetini planlamaktır. Adli değerlendirmede ise belirli bir hukuki soruya nesnel ve gerekçeli tıbbi görüş sunulması amaçlanır. Bu nedenle görüşmenin amacı ve gizlilik sınırları kişiye açıklanmalıdır."),
      section("Tanı Tek Başına Hukuki Sonuç Belirler mi?", "Hayır. Bir psikiyatrik tanının bulunması kişinin otomatik olarak hukuki kapasitesini veya sorumluluğunu ortadan kaldırmaz. Belirli olay veya karar sırasında kişinin bilişsel ve ruhsal işlevlerinin nasıl etkilendiği ayrı olarak değerlendirilir."),
      section("Adli Raporlamada Neler Önemlidir?", "Klinik görüşme, ruhsal durum muayenesi, tıbbi belgeler ve gerektiğinde ek bilgi kaynakları birlikte ele alınabilir. Raporda gözlenen bulgular ile çıkarımlar birbirinden ayrılmalı ve değerlendirme mevcut hukuki sorunun sınırları içinde gerekçelendirilmelidir.")
    ],
    relatedTerms: [
      { term: "Risk değerlendirmesi", slug: "risk-degerlendirmesi" },
      { term: "İçgörü", slug: "icgoru" },
      { term: "Bilinç", slug: "bilinc" },
      { term: "Psikoz", slug: "psikoz" }
    ],
    seo: {
      title: "Adli Psikiyatri Nedir? | Psikiyatri Sözlüğü",
      description: "Adli psikiyatrinin hukuk ile psikiyatri arasındaki değerlendirme alanını ve klinik muayeneden farkını açıklar.",
      ogTitle: "Adli Psikiyatri Nedir?",
      ogDescription: "Adli psikiyatrinin amaçlarını, kapsamını ve tanı ile hukuki sonuç arasındaki farkı açıklar."
    },
    schema: {
      definedTermDescription: "Psikiyatri bilgisinin hukuki soruların tıbbi değerlendirilmesinde kullanıldığı uzmanlık alanı."
    }
  }),

  defineTerm({
    term: "Aile görüşmesi",
    slug: "aile-gorusmesi",
    shortDefinition: "Aile görüşmesi, kişinin ruhsal durumu ve günlük işlevselliği hakkında aile üyelerinden bilgi alınması, aileye gerekli bilgilerin aktarılması veya destek ve bakım sürecinin birlikte değerlendirilmesi amacıyla yapılan yapılandırılmış klinik görüşmedir.",
    intro: "Aile görüşmesi aile terapisi ile aynı şey değildir. Bazı durumlarda tek veya birkaç görüşmeyle bilgi toplamak, iletişimi düzenlemek veya bakım planını konuşmak amaçlanırken aile terapisi daha kapsamlı bir psikoterapi sürecidir.",
    sections: [
      section("Aile Görüşmesinde Neler Konuşulabilir?", "Belirtilerin ne zaman başladığı, kişinin günlük işlevlerindeki değişiklikler, ev içindeki gözlemler, ilaç veya sağlık hizmetlerine ilişkin güçlükler ve aile üyelerinin destek kapasitesi ele alınabilir. Görüşmenin içeriği kişinin klinik gereksinimine göre değişir."),
      section("Aileden Alınan Bilgi Neden Önemli Olabilir?", "Bazı ruhsal veya bilişsel durumlarda kişi kendi davranışındaki değişiklikleri tam olarak fark etmeyebilir ya da başlangıç zamanını hatırlamakta zorlanabilir. Yakınların gözlemleri klinik tabloyu anlamaya katkı sağlayabilir ancak tek başına kesin doğru kabul edilmez."),
      section("Mahremiyet Nasıl Korunur?", "Kişinin özel sağlık bilgilerinin paylaşılması genel olarak mahremiyet ilkeleri çerçevesinde ele alınır. Aile üyelerinden bilgi almak ile kişiye ait bilgileri aileyle paylaşmak aynı şey değildir. Paylaşımın kapsamı kişinin onayı, güvenlik gereksinimleri ve geçerli hukuki kurallarla birlikte değerlendirilir."),
      section("Aile Görüşmesi ile Aile Terapisi Arasındaki Fark Nedir?", "Aile görüşmesi belirli bir klinik soruyu açıklığa kavuşturmak veya bakım sürecini desteklemek amacıyla yapılabilir. Aile terapisi ise aile içindeki ilişki ve iletişim örüntülerini değiştirmeye yönelik yapılandırılmış psikoterapi yaklaşımıdır.")
    ],
    relatedTerms: [
      { term: "Aile terapisi", slug: "aile-terapisi" },
      { term: "Psikoeğitim", slug: "psikoegitim" },
      { term: "Psikososyal destek", slug: "psikososyal-destek" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ],
    seo: {
      title: "Aile Görüşmesi Nedir? | Psikiyatri Sözlüğü",
      description: "Aile görüşmesinin bilgi alma, bakım sürecini destekleme, mahremiyet ve aile terapisinden farkı açısından nasıl kullanıldığını açıklar.",
      ogTitle: "Aile Görüşmesi Nedir?",
      ogDescription: "Psikiyatride aile görüşmesinin amacı ve sınırlarını açıklar."
    },
    schema: {
      definedTermDescription: "Aile üyelerinin klinik bilgi ve destek sürecine yapılandırılmış biçimde dahil edildiği görüşme."
    }
  }),

  defineTerm({
    term: "Akran ilişkileri",
    slug: "akran-iliskileri",
    shortDefinition: "Akran ilişkileri, benzer yaş veya gelişim dönemindeki kişiler arasında kurulan arkadaşlık, iş birliği, çatışma, aidiyet ve sosyal öğrenme süreçlerini kapsayan kişilerarası ilişkileri ifade eder.",
    intro: "Akran ilişkileri özellikle çocukluk ve ergenlik döneminde sosyal beceriler, aidiyet duygusu ve kimlik gelişimi açısından önemli olabilir. Bununla birlikte akran çevresinin etkisi yalnız ergenlikle sınırlı değildir.",
    sections: [
      section("Akran İlişkilerinin Gelişimdeki Rolü Nedir?", "Çocuklar ve ergenler paylaşma, uzlaşma, sınır koyma, çatışma çözme ve farklı bakış açılarını anlama gibi birçok sosyal beceriyi akran ortamlarında deneyimleyebilir. Arkadaşlıkların niteliği yalnız arkadaş sayısından daha fazla bilgi sağlayabilir."),
      section("Akran Çatışması Her Zaman Sorun mudur?", "Hayır. Fikir ayrılıkları ve geçici çatışmalar sosyal ilişkilerin doğal bir parçasıdır. Önemli olan çatışmanın nasıl çözüldüğü, güç dengesizliği bulunup bulunmadığı ve kişinin sürekli dışlanma veya zarar görme yaşayıp yaşamadığıdır."),
      section("Akran Zorbalığından Farkı Nedir?", "Akran zorbalığında genellikle tekrar eden zarar verici davranış ve belirgin bir güç dengesizliği vardır. Eşit güçte iki arkadaş arasında zaman zaman yaşanan anlaşmazlık otomatik olarak zorbalık sayılmaz. Süreklilik ve güvenlik üzerindeki etki değerlendirilmelidir."),
      section("Ruhsal İyilik Haliyle Nasıl İlişkilidir?", "Destekleyici akran ilişkileri aidiyet ve sosyal destek sağlayabilir. Sürekli dışlanma, yalnızlık veya zorbalık ise kaygı, çökkünlük ve okul işlevselliğinde bozulmayla ilişkili olabilir. Nedensellik değerlendirilirken aile, okul ve bireysel etkenler birlikte ele alınır.")
    ],
    relatedTerms: [
      { term: "Akran zorbalığı", slug: "akran-zorbaligi" },
      { term: "Psikososyal destek", slug: "psikososyal-destek" },
      { term: "Bağlanma", slug: "baglanma" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ],
    seo: {
      title: "Akran İlişkileri Nedir? | Psikiyatri Sözlüğü",
      description: "Akran ilişkilerinin gelişim, sosyal beceriler, çatışma ve akran zorbalığıyla ilişkisini açıklar.",
      ogTitle: "Akran İlişkileri Nedir?",
      ogDescription: "Akran ilişkilerinin çocukluk ve ergenlik gelişimindeki yerini açıklar."
    },
    schema: {
      definedTermDescription: "Benzer yaş veya gelişim dönemindeki kişiler arasındaki sosyal ve kişilerarası ilişkiler."
    }
  }),

  defineTerm({
    term: "Aktarım",
    slug: "aktarim",
    shortDefinition: "Aktarım, kişinin geçmişteki önemli ilişkilerinde geliştirdiği duygu, beklenti ve ilişki örüntülerinin farkında olmadan güncel bir ilişkiye, özellikle de psikoterapide terapistle kurduğu ilişkiye taşınmasını açıklayan psikodinamik kavramdır.",
    intro: "Aktarım yalnız psikoterapi odasında ortaya çıkan sıra dışı bir durum değildir. İnsanlar geçmiş deneyimlerinden geliştirdikleri beklentileri yeni ilişkileri yorumlarken kullanabilir; psikoterapi bu süreci daha sistematik biçimde inceleyebilir.",
    sections: [
      section("Aktarım Nasıl Görülebilir?", "Geçmişte eleştirel veya mesafeli ilişkiler yaşayan bir kişi nötr bir davranışı reddedilme işareti gibi yorumlayabilir. Başka bir kişi ise karşısındaki kişiden olağan dışı derecede onay veya güvence bekleyebilir. Bu örnekler tek başına aktarımın kanıtı değildir, ilişki bağlamında değerlendirilir."),
      section("Aktarım Bilinçli Bir Davranış mıdır?", "Genellikle bilinçli bir rol yapma veya başka bir kişiyi yanıltma çabası olarak ele alınmaz. Kişinin önceki ilişkilerden geliştirdiği beklentiler yeni ilişkilerde otomatik olarak etkinleşebilir ve yaşanan duygular o anda tamamen gerçek hissedilebilir."),
      section("Psikoterapide Neden Önemlidir?", "Terapötik ilişkide tekrar eden beklentiler kişinin diğer ilişkilerinde yaşadığı örüntüler hakkında bilgi sağlayabilir. Bu süreç güvenli sınırlar içinde, aceleci yorumlardan kaçınılarak ve kişinin güncel deneyimiyle bağlantı kurularak ele alınabilir."),
      section("Karşıaktarım ile Farkı Nedir?", "Aktarım kişinin terapiste veya başka bir kişiye taşıdığı ilişki örüntülerini ifade eder. Karşıaktarım ise terapistin kişiye yönelik duygusal ve bilişsel tepkilerinin klinik bağlamda değerlendirilmesini anlatır. İki kavram aynı süreç değildir.")
    ],
    relatedTerms: [
      { term: "Psikodinamik terapi", slug: "psikodinamik-terapi" },
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Mentalizasyon", slug: "mentalizasyon" },
      { term: "Yansıtma", slug: "yansitma" }
    ],
    seo: {
      title: "Aktarım Nedir? | Psikiyatri Sözlüğü",
      description: "Aktarım kavramını geçmiş ilişki örüntülerinin güncel ilişkilere taşınması ve psikoterapideki anlamı açısından açıklar.",
      ogTitle: "Aktarım Nedir?",
      ogDescription: "Aktarımın psikodinamik psikoterapideki anlamını ve karşıaktarımdan farkını açıklar."
    },
    schema: {
      definedTermDescription: "Geçmiş ilişkilerden gelişen duygu ve beklentilerin güncel ilişkilere taşınmasını açıklayan psikodinamik kavram."
    }
  }),

  defineTerm({
    term: "Amigdala",
    slug: "amigdala",
    shortDefinition: "Amigdala, beynin temporal loblarının derininde yer alan ve özellikle duygusal önem taşıyan uyaranların değerlendirilmesi, tehdit öğrenmesi ve bazı bellek süreçlerinde rol alan birbiriyle bağlantılı çekirdekler grubudur.",
    intro: "Amigdalayı yalnızca beynin korku merkezi olarak tanımlamak aşırı basitleştiricidir. Bu yapı tehdit dışında ödül, sosyal uyaranlar, duygusal öğrenme ve çevredeki önemli bilgilerin seçilmesi gibi süreçlere de katılır.",
    sections: [
      section("Amigdala Ne Yapar?", "Çevredeki bir uyaranın kişinin güvenliği veya hedefleri açısından önemli olup olmadığının hızlı değerlendirilmesine katkı sağlar. Otonom sinir sistemi ve dikkat süreçleriyle bağlantıları sayesinde duygusal açıdan önemli uyaranlara bedensel ve bilişsel yanıtların düzenlenmesinde rol oynayabilir."),
      section("Korku ile İlişkisi Nedir?", "Tehdit oluşturan deneyimlerin öğrenilmesi ve daha sonra benzer işaretlere verilen yanıtların düzenlenmesinde amigdala önemli bir sinir ağı düğümüdür. Ancak korku tek bir beyin bölgesinde oluşmaz; prefrontal korteks, hipokampus ve başka ağlar da bu süreçlere katılır."),
      section("Psikiyatrik Bozukluklarda Amigdala Değişir mi?", "Anksiyete, travma sonrası stres ve bazı duygudurum bozukluklarında amigdala aktivitesi veya bağlantıları üzerine çok sayıda araştırma vardır. Grup düzeyindeki bu bulgular tek bir kişinin tanısını koymak veya hastalığın nedenini yalnız amigdalaya bağlamak için kullanılamaz."),
      section("Beyin Görüntülemesi Tanı Koydurur mu?", "Rutin psikiyatrik tanılar günümüzde tek bir amigdala ölçümü veya beyin görüntüsü üzerinden konulmaz. Görüntüleme daha çok belirli nörolojik veya tıbbi nedenlerin araştırılmasında ve bilimsel çalışmalarda kullanılır.")
    ],
    relatedTerms: [
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Stres yanıtı", slug: "stres-yaniti" },
      { term: "Dikkat", slug: "dikkat" },
      { term: "Travma sonrası stres bozukluğu", slug: "travma-sonrasi-stres-bozuklugu" }
    ],
    seo: {
      title: "Amigdala Nedir? | Psikiyatri Sözlüğü",
      description: "Amigdalanın duygusal önem, tehdit öğrenmesi ve bellek süreçlerindeki rolünü, korku merkezi basitleştirmesinden kaçınarak açıklar.",
      ogTitle: "Amigdala Nedir?",
      ogDescription: "Amigdalanın duygu ve tehdit işleme ağlarındaki rolünü açıklar."
    },
    schema: {
      definedTermDescription: "Duygusal önem, tehdit öğrenmesi ve bazı bellek süreçlerinde rol alan beyin çekirdekleri grubu."
    }
  }),

  defineTerm({
    term: "Anksiyolitik",
    slug: "anksiyolitik",
    shortDefinition: "Anksiyolitik, kaygı ve gerginlik belirtilerini azaltma amacıyla kullanılan ilaçları veya bazı ilaç gruplarının kaygı azaltıcı etkisini tanımlayan genel farmakolojik terimdir.",
    intro: "Anksiyolitik tek bir ilaç grubunun adı değildir. Farklı etki mekanizmalarına sahip ilaçlar belirli klinik durumlarda kaygı belirtileri için kullanılabilir ve seçim kişinin tanısı, diğer hastalıkları ve kullandığı ilaçlarla birlikte değerlendirilir.",
    sections: [
      section("Anksiyolitik İlaçlar Nasıl Sınıflandırılır?", "Bazı ilaçlar daha hızlı ortaya çıkan sakinleştirici etkilere sahipken bazı antidepresanlar belirli anksiyete bozukluklarında uzun dönem tedavi amacıyla kullanılabilir. Aynı ilacın farklı klinik durumlarda farklı amaçlarla kullanılması mümkündür."),
      section("Anksiyolitik ile Antidepresan Aynı Şey midir?", "Hayır. Antidepresan farmakolojik bir ilaç sınıfını ifade ederken anksiyolitik daha çok kaygı azaltıcı etkiyi tanımlar. Bazı antidepresanlar aynı zamanda güçlü anksiyolitik etki gösterebilir ve anksiyete bozukluklarında kullanılabilir."),
      section("Neden Hekim Değerlendirmesi Gerekir?", "Kaygının altında yatan durum, başka tıbbi hastalıklar, ilaç etkileşimleri, uyku hali veya bağımlılık potansiyeli gibi özellikler ilaç seçimini etkileyebilir. Bu nedenle kişinin kendi kendine ilaç başlatması, bırakması veya doz değiştirmesi uygun değildir."),
      section("İlaç Kaygının Tek Tedavisi midir?", "Hayır. Anksiyete bozukluklarında psikoterapi, yaşam düzenlemeleri ve gerektiğinde ilaç tedavisi farklı biçimlerde kullanılabilir. Uygun yaklaşım belirtilerin türü, şiddeti, süresi, kişinin tercihleri ve klinik değerlendirmeye göre belirlenir. Tedavi planı zaman içinde belirtilerdeki değişime ve kişinin gereksinimlerine göre yeniden değerlendirilebilir.")
    ],
    relatedTerms: [
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Antidepresan", slug: "antidepresan" },
      { term: "Bilişsel davranışçı terapi", slug: "bilissel-davranisci-terapi" },
      { term: "Panik bozukluk", slug: "panik-bozukluk" }
    ],
    seo: {
      title: "Anksiyolitik Nedir? | Psikiyatri Sözlüğü",
      description: "Anksiyolitik teriminin kaygı azaltıcı ilaç etkisini nasıl tanımladığını ve antidepresanlarla ilişkisini açıklar.",
      ogTitle: "Anksiyolitik Nedir?",
      ogDescription: "Anksiyolitik ilaç kavramını güvenli ve genel bir farmakolojik çerçevede açıklar."
    },
    schema: {
      definedTermDescription: "Kaygı ve gerginlik belirtilerini azaltmaya yönelik farmakolojik etki veya ilaçları tanımlayan genel terim."
    }
  }),

  defineTerm({
    term: "Anterior singulat korteks",
    slug: "anterior-singulat-korteks",
    shortDefinition: "Anterior singulat korteks, beynin medial frontal bölgelerinde yer alan ve dikkat, hata izleme, çatışma değerlendirmesi, motivasyon, ağrı ve duygu düzenleme gibi birçok işleve katılan kortikal bölgedir.",
    intro: "Anterior singulat korteks tek bir psikolojik işlevin merkezi değildir. Farklı alt bölgeleri bilişsel kontrol, bedensel durumların değerlendirilmesi ve duygusal anlamlandırma gibi işlevlere farklı ölçülerde katkıda bulunur.",
    sections: [
      section("Bilişsel Kontrolde Nasıl Rol Oynar?", "Kişinin birbiriyle yarışan yanıtlar arasından seçim yapması, hata yaptığını fark etmesi veya dikkat gerektiren bir durumda performansını yeniden düzenlemesi sırasında anterior singulat korteksin dahil olduğu beyin ağları etkinleşebilir."),
      section("Duygularla İlişkisi Nedir?", "Bu bölgenin limbik ve prefrontal yapılarla bağlantıları duygusal açıdan önemli bilgilerin değerlendirilmesine katkı sağlar. Duygu düzenleme tek bir bölgenin işi değildir; anterior singulat korteks daha geniş sinir ağlarının bir parçası olarak çalışır."),
      section("Psikiyatride Neden Araştırılır?", "Depresyon, anksiyete, obsesif kompulsif bozukluk ve başka ruhsal durumlarda bu bölgenin aktivitesi veya bağlantıları araştırılmıştır. Ancak araştırma grupları arasındaki ortalama farklılıklar tek bir kişinin tanısını belirleyen biyobelirteçler olarak kullanılamaz."),
      section("Beyin Bölgesi Bulguları Nasıl Yorumlanmalıdır?", "Bir psikiyatrik belirtiyi tek bir beyin bölgesindeki artış veya azalmayla açıklamak çoğu zaman yetersizdir. Beyin işlevleri birbirine bağlı ağlar üzerinden yürütülür ve görüntüleme sonuçları klinik öykü ile ruhsal durum değerlendirmesinin yerine geçmez.")
    ],
    relatedTerms: [
      { term: "Dikkat", slug: "dikkat" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Obsesif kompulsif bozukluk", slug: "obsesif-kompulsif-bozukluk" }
    ],
    seo: {
      title: "Anterior Singulat Korteks Nedir? | Psikiyatri Sözlüğü",
      description: "Anterior singulat korteksin dikkat, hata izleme, motivasyon ve duygu düzenleme ağlarındaki rolünü açıklar.",
      ogTitle: "Anterior Singulat Korteks Nedir?",
      ogDescription: "Anterior singulat korteksin bilişsel ve duygusal işlevlerdeki yerini açıklar."
    },
    schema: {
      definedTermDescription: "Dikkat, hata izleme, motivasyon ve duygu düzenleme gibi süreçlere katılan medial frontal korteks bölgesi."
    }
  }),

  defineTerm({
    term: "Antidepresan",
    slug: "antidepresan",
    shortDefinition: "Antidepresan, depresif bozuklukların yanı sıra bazı anksiyete bozuklukları, obsesif kompulsif bozukluk ve başka klinik durumlarda kullanılabilen farklı etki mekanizmalarına sahip psikiyatrik ilaç gruplarının genel adıdır.",
    intro: "Antidepresan sözcüğü yalnız depresyonda kullanılan ilaç anlamına gelmez. İlacın hangi durumda kullanılacağı, beklenen yararlar, olası yan etkiler ve kişinin diğer sağlık özellikleri klinik değerlendirmeyle birlikte ele alınır.",
    sections: [
      section("Antidepresanlar Tek Bir İlaç Grubu mudur?", "Hayır. Serotonin, noradrenalin veya başka nörokimyasal sistemleri farklı biçimlerde etkileyen çeşitli antidepresan sınıfları vardır. Aynı sınıftaki ilaçların bile yan etki, etkileşim ve kişisel tolerans profilleri farklılık gösterebilir."),
      section("Etkileri Hemen Başlar mı?", "Bazı yan etkiler veya bedensel değişiklikler erken dönemde hissedilebilirken hedeflenen ruhsal belirtilerdeki değişim daha farklı bir zaman seyri gösterebilir. Tedavi yanıtının değerlendirilmesi yalnız ilk birkaç dozdan sonra oluşan hislere göre yapılmaz."),
      section("Antidepresan Bağımlılık Yapar mı?", "Antidepresanlar klasik anlamda sarhoşluk veya ödül arayışı oluşturan bağımlılık yapıcı maddeler gibi değerlendirilmez. Bununla birlikte bazı ilaçların aniden kesilmesi bırakma belirtilerine yol açabilir; bu nedenle ilaç değişiklikleri hekim değerlendirmesiyle yapılmalıdır."),
      section("Her Depresyonda Aynı Antidepresan mı Kullanılır?", "Hayır. Belirtilerin özellikleri, eşlik eden hastalıklar, daha önceki tedavi yanıtları, kullanılan diğer ilaçlar ve kişinin tercihleri seçimde önemlidir. Bipolar bozukluk olasılığı gibi klinik durumlar da tedavi planı açısından ayrıca değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Anksiyolitik", slug: "anksiyolitik" },
      { term: "Remisyon", slug: "remisyon" }
    ],
    seo: {
      title: "Antidepresan Nedir? | Psikiyatri Sözlüğü",
      description: "Antidepresanların farklı ilaç sınıflarını kapsadığını, yalnız depresyonda kullanılmadığını ve klinik değerlendirme gerektirdiğini açıklar.",
      ogTitle: "Antidepresan Nedir?",
      ogDescription: "Antidepresan ilaç kavramını kullanım alanları ve güvenli değerlendirme çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Depresyon ve bazı başka ruhsal bozukluklarda kullanılan farklı etki mekanizmalarına sahip ilaçların genel adı."
    }
  }),

  defineTerm({
    term: "Antipsikotik",
    slug: "antipsikotik",
    shortDefinition: "Antipsikotik, şizofreni ve diğer psikotik tabloların yanı sıra bipolar bozukluk gibi bazı klinik durumlarda kullanılan, dopamin ve başka nörotransmiter sistemlerini farklı biçimlerde etkileyebilen psikiyatrik ilaçların genel adıdır.",
    intro: "Antipsikotik ilaçlar tek bir kimyasal yapı veya tek bir etki mekanizmasından oluşmaz. Kullanım amacı, beklenen yarar ve olası yan etkiler kişinin tanısı, tıbbi durumu ve diğer ilaçlarıyla birlikte değerlendirilir.",
    sections: [
      section("Antipsikotikler Hangi Belirtilerde Kullanılabilir?", "Sanrı, varsanı ve belirgin dezorganize düşünce gibi psikotik belirtilerin bulunduğu durumlarda antipsikotik tedavi kullanılabilir. Bazı ilaçların mani, bipolar depresyon veya başka klinik alanlarda da onaylanmış ya da klinik kullanım alanları bulunabilir."),
      section("Birinci ve İkinci Kuşak Ne Anlama Gelir?", "Antipsikotikler tarihsel ve farmakolojik özelliklerine göre farklı gruplara ayrılabilir. Bu sınıflandırma bir grubun her durumda diğerinden daha iyi veya daha güvenli olduğu anlamına gelmez; yan etki profilleri ilaçlar arasında önemli farklılık gösterebilir."),
      section("Yan Etkiler Neden Düzenli İzlenir?", "Hareket sistemi belirtileri, uyku hali, metabolik değişiklikler, hormonal etkiler veya başka bedensel yan etkiler kullanılan ilaca göre değişebilir. Bu nedenle tedavi sırasında klinik ve gerektiğinde laboratuvar izlemi kişiye göre planlanabilir."),
      section("İlaç Kendi Kendine Kesilmeli midir?", "Hayır. Belirtilerin düzelmesi hastalığın tamamen sona erdiği anlamına gelmeyebilir ve ani ilaç değişiklikleri farklı sorunlara yol açabilir. Kullanılan antipsikotiğin devamı, değiştirilmesi veya bırakılması hekimle birlikte klinik durum değerlendirilerek planlanmalıdır.")
    ],
    relatedTerms: [
      { term: "Psikoz", slug: "psikoz" },
      { term: "Şizofreni", slug: "sizofreni" },
      { term: "Mani", slug: "mani" },
      { term: "Akatizi", slug: "akatizi" }
    ],
    seo: {
      title: "Antipsikotik Nedir? | Psikiyatri Sözlüğü",
      description: "Antipsikotik ilaçların psikotik belirtiler ve bazı başka klinik durumlarda kullanımını, sınıflarını ve izlem gereksinimini açıklar.",
      ogTitle: "Antipsikotik Nedir?",
      ogDescription: "Antipsikotik ilaç kavramını kullanım alanları ve güvenli izlem çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Psikotik belirtiler ve bazı başka ruhsal durumlarda kullanılan psikiyatrik ilaçların genel adı."
    }
  })
];


const seventhBatchNewTerms = [
  defineTerm({
    term: "Antisosyal kişilik örüntüsü",
    slug: "antisosyal-kisilik-oruntusu",
    shortDefinition: "Antisosyal kişilik örüntüsü, başkalarının haklarını, toplumsal kuralları ve ilişkisel sınırları tekrar tekrar ihlal eden davranışların eşlik edebildiği kalıcı kişilik özellikleri bütününü ifade eder.",
    intro: "Bu kavram günlük dilde kullanılan 'asosyal' sözcüğüyle aynı değildir. Sosyal ortamlardan uzak durmayı değil; dürtüsellik, sorumsuzluk, aldatıcı davranışlar veya başkalarının haklarını önemsememeyle ilişkili daha geniş ve süreğen bir örüntüyü tanımlar.",
    sections: [
      section("Antisosyal Kişilik Örüntüsü Nasıl Tanımlanır?", "Değerlendirmede yalnız tek bir olay değil, farklı yaşam alanlarında tekrarlayan ve uzun süredir devam eden davranış örüntüleri önemlidir. Kuralları ihlal etme, sorumlulukları sürdürmede güçlük, dürtüsel kararlar veya kişilerarası ilişkilerde başkalarının sınırlarını gözetmeme gibi özellikler görülebilir. Bu davranışların bağlamı ve sürekliliği ayrıntılı biçimde değerlendirilir."),
      section("Antisosyal ile Asosyal Aynı Şey midir?", "Hayır. Asosyal sözcüğü günlük dilde sosyal ortamlardan uzak durma veya yalnızlığı tercih etme anlamında kullanılabilir. Antisosyal kişilik örüntüsü ise sosyal geri çekilmeden farklı olarak başkalarının haklarını ihlal eden, kurallarla çatışan veya sorumsuz davranışların kalıcı örüntüsünü ifade eder."),
      section("Tanı İçin Tek Bir Davranış Yeterli midir?", "Hayır. Bir kişinin zaman zaman öfkelenmesi, kural ihlali yapması veya hatalı karar vermesi tek başına kişilik bozukluğu anlamına gelmez. Kişilik değerlendirmesinde davranışların erken dönemlerden itibaren ne kadar süreğen olduğu, farklı ortamlarda görülüp görülmediği ve işlevselliği nasıl etkilediği incelenir."),
      section("Damgalayıcı Yorumlardan Neden Kaçınılmalıdır?", "Kişilik örüntülerini ahlaki etiketlere indirgemek klinik değerlendirmeyi bozabilir. Davranışların gelişimsel geçmiş, çevresel etkenler, madde kullanımı, eşlik eden ruhsal durumlar ve bireysel özelliklerle ilişkisi birlikte ele alınmalıdır. Klinik tanımlama kişinin değerini veya değişme kapasitesini belirleyen bir hüküm değildir.")
    ],
    relatedTerms: [
      { term: "Kişilik", slug: "kisilik" },
      { term: "Kişilik bozukluğu", slug: "kisilik-bozuklugu" },
      { term: "Dürtüsellik", slug: "durtusellik" },
      { term: "Risk değerlendirmesi", slug: "risk-degerlendirmesi" }
    ],
    seo: {
      title: "Antisosyal Kişilik Örüntüsü Nedir? | Psikiyatri Sözlüğü",
      description: "Antisosyal kişilik örüntüsünün asosyal olmakla farkını, süreğen davranış özelliklerini ve klinik değerlendirme çerçevesini açıklar.",
      ogTitle: "Antisosyal Kişilik Örüntüsü Nedir?",
      ogDescription: "Antisosyal kişilik örüntüsünü damgalayıcı olmayan klinik bir çerçevede açıklar."
    },
    schema: {
      definedTermDescription: "Başkalarının haklarını ve toplumsal sınırları tekrar tekrar ihlal eden kalıcı kişilik özellikleri örüntüsü."
    }
  }),

  defineTerm({
    term: "ASRS",
    slug: "asrs",
    shortDefinition: "ASRS, erişkinlerde dikkat eksikliği ve hiperaktivite bozukluğu ile ilişkili belirtileri taramak amacıyla kullanılan öz bildirim temelli bir değerlendirme ölçeğidir.",
    intro: "ASRS bir tanı testi değildir. Ölçek kişinin dikkat, dürtüsellik ve hiperaktiviteyle ilişkili bazı deneyimlerini sistematik biçimde sorgulamaya yardımcı olur ve elde edilen sonuç klinik görüşme ile birlikte değerlendirilir.",
    sections: [
      section("ASRS Ne Amaçla Kullanılır?", "ASRS erişkinlerde DEHB ile ilişkili olabilecek belirtilerin fark edilmesini ve klinik değerlendirmede hangi alanların daha ayrıntılı ele alınabileceğinin belirlenmesini kolaylaştırabilir. Tarama amacı taşır ve tek başına tanı koymak veya tanıyı dışlamak için yeterli değildir."),
      section("Öz Bildirim Ölçeği Ne Demektir?", "Sorular kişinin kendi deneyimlerine verdiği yanıtlara dayanır. Bu nedenle yanıtlar kişinin belirtileri nasıl algıladığı, hatırladığı ve yorumladığından etkilenebilir. Gerekli durumlarda çocukluk öyküsü, aileden alınan bilgiler, okul veya iş yaşamındaki işlevsellik gibi ek kaynaklar değerlendirilir."),
      section("Yüksek Puan DEHB Tanısı Anlamına Gelir mi?", "Hayır. Dikkat dağınıklığı ve dürtüsellik uyku bozuklukları, anksiyete, depresyon, madde kullanımı, yoğun stres veya başka tıbbi ve psikiyatrik durumlarda da görülebilir. Bu nedenle yüksek tarama puanı kapsamlı değerlendirme ihtiyacına işaret edebilir ancak tanıyı tek başına belirlemez."),
      section("ASRS Klinik Görüşmenin Yerine Geçer mi?", "Hayır. DEHB değerlendirmesinde belirtilerin çocukluk döneminden itibaren seyri, birden fazla yaşam alanındaki etkisi ve başka açıklamaların bulunup bulunmadığı incelenir. Ölçekler bu süreci destekleyen araçlardır; ayrıntılı klinik görüşmenin yerine geçmez.")
    ],
    relatedTerms: [
      { term: "DEHB", slug: "dehb" },
      { term: "Tarama testi", slug: "tarama-testi" },
      { term: "Ölçek", slug: "olcek" },
      { term: "Dikkat", slug: "dikkat" }
    ],
    seo: {
      title: "ASRS Nedir? | Psikiyatri Sözlüğü",
      description: "ASRS'nin erişkin DEHB belirtilerini taramada nasıl kullanıldığını ve neden tek başına tanı koydurmadığını açıklar.",
      ogTitle: "ASRS Nedir?",
      ogDescription: "ASRS erişkin DEHB tarama ölçeğinin amacı ve sınırlarını açıklar."
    },
    schema: {
      definedTermDescription: "Erişkin DEHB belirtilerini taramak amacıyla kullanılan öz bildirim ölçeği."
    }
  }),

  defineTerm({
    term: "Atak",
    slug: "atak",
    shortDefinition: "Atak, bir hastalık veya belirti grubunun belirgin biçimde başladığı, yoğunlaştığı veya önceki düzeye göre belirginleştiği sınırlı bir dönemi tanımlayan genel klinik terimdir.",
    intro: "Atak sözcüğü tek bir psikiyatrik bozukluğa özgü değildir. Panik atak, migren atağı veya başka klinik durumlarda farklı anlam ayrıntıları taşıyabilir; bu nedenle kavram her zaman kullanıldığı hastalık bağlamında değerlendirilir.",
    sections: [
      section("Atak Ne Anlama Gelir?", "Bir belirtinin veya belirti kümesinin alışılmış düzeyden daha belirgin hale geldiği dönem atak olarak adlandırılabilir. Başlangıç biçimi ani veya daha kademeli olabilir. Süre ve belirtilerin özellikleri söz konusu klinik duruma göre değişir."),
      section("Atak ile Epizod Aynı Şey midir?", "Bu iki terim bazı bağlamlarda birbirine yakın kullanılsa da tamamen eş anlamlı olmak zorunda değildir. Epizod genellikle belirli tanı ölçütleri ve süreyle tanımlanan hastalık dönemini ifade ederken atak daha geniş biçimde belirti yoğunlaşmasını anlatabilir."),
      section("Her Belirti Artışı Atak Sayılır mı?", "Hayır. Günlük dalgalanmalar, kısa süreli stres tepkileri veya küçük belirti değişiklikleri her zaman ayrı bir atak olarak değerlendirilmez. Belirtilerin şiddeti, süresi, kişinin önceki durumu ve işlevsellik üzerindeki etkisi birlikte incelenir."),
      section("Atakların İzlenmesi Neden Önemlidir?", "Atakların ne zaman başladığı, ne kadar sürdüğü, öncesinde hangi değişikliklerin olduğu ve sonrasında nasıl düzeldiği hastalığın seyrini anlamaya yardımcı olabilir. Bu bilgiler nüks, relaps veya dönemsel hastalık örüntülerini değerlendirirken kullanılabilir.")
    ],
    relatedTerms: [
      { term: "Epizod", slug: "epizod" },
      { term: "Nüks", slug: "nuks" },
      { term: "Relaps", slug: "relaps" },
      { term: "İzlem", slug: "izlem" }
    ],
    seo: {
      title: "Atak Nedir? | Psikiyatri Sözlüğü",
      description: "Atak kavramının belirti veya hastalık döneminin belirginleşmesini nasıl ifade ettiğini ve epizoddan farkını açıklar.",
      ogTitle: "Atak Nedir?",
      ogDescription: "Atak teriminin klinik kullanımını ve hastalık seyriyle ilişkisini açıklar."
    },
    schema: {
      definedTermDescription: "Belirti veya hastalık özelliklerinin belirgin biçimde başladığı ya da yoğunlaştığı klinik dönem."
    }
  }),

  defineTerm({
    term: "Atipik antipsikotik",
    slug: "atipik-antipsikotik",
    shortDefinition: "Atipik antipsikotik, çoğunlukla ikinci kuşak antipsikotikler olarak adlandırılan ve dopaminin yanı sıra başka nörotransmiter sistemleri üzerinde de farklı etkiler gösteren antipsikotik ilaç grubunu ifade eder.",
    intro: "Atipik sözcüğü bu ilaçların olağandışı veya deneysel olduğu anlamına gelmez. Tarihsel olarak daha eski antipsikotiklerden farklı farmakolojik ve yan etki özelliklerini tanımlamak için kullanılan bir sınıflandırmadır.",
    sections: [
      section("Atipik Antipsikotikler Nerelerde Kullanılır?", "Şizofreni ve başka psikotik bozuklukların yanı sıra bazı ilaçlar bipolar bozukluk veya başka klinik durumlarda kullanılabilir. Kullanım alanları ve ruhsatlandırılmış endikasyonlar ilaçtan ilaca farklılık gösterebilir."),
      section("Tipik Antipsikotiklerden Farkı Nedir?", "İkinci kuşak ilaçların dopamin reseptörleri dışında serotonin gibi başka sistemler üzerinde de belirgin etkileri olabilir. Bununla birlikte 'atipik' sınıfının bütün ilaçlarında aynı etkinlik veya yan etki profili bulunduğu anlamına gelmez."),
      section("Yan Etki Profilleri Aynı mıdır?", "Hayır. Metabolik değişiklikler, kilo artışı, uyku hali, hareket sistemi belirtileri, hormonal etkiler veya başka yan etkiler ilaçlar arasında değişebilir. Bu nedenle seçim ve izlem kişisel klinik özelliklere göre yapılır."),
      section("Hangi İlacın Kullanılacağı Nasıl Belirlenir?", "Tanı, belirtilerin özellikleri, önceki tedavi yanıtı, eşlik eden tıbbi hastalıklar, kullanılan diğer ilaçlar ve yan etki riski değerlendirilir. Antipsikotik ilaçların başlanması, değiştirilmesi veya bırakılması hekim değerlendirmesi gerektirir. Tedavi sırasında etkinlik ile yan etkiler birlikte izlenir ve klinik gereksinimler zaman içinde yeniden değerlendirilebilir.")
    ],
    relatedTerms: [
      { term: "Antipsikotik", slug: "antipsikotik" },
      { term: "Tipik antipsikotik", slug: "tipik-antipsikotik" },
      { term: "Psikoz", slug: "psikoz" },
      { term: "Şizofreni", slug: "sizofreni" }
    ],
    seo: {
      title: "Atipik Antipsikotik Nedir? | Psikiyatri Sözlüğü",
      description: "Atipik antipsikotiklerin ikinci kuşak antipsikotikleri ifade ettiğini, tipik antipsikotiklerden farkını ve izlem gereksinimini açıklar.",
      ogTitle: "Atipik Antipsikotik Nedir?",
      ogDescription: "Atipik antipsikotik kavramını kullanım alanları ve yan etki farklılıklarıyla açıklar."
    },
    schema: {
      definedTermDescription: "İkinci kuşak olarak sınıflandırılan ve farklı nörotransmiter sistemleri üzerinde etkili antipsikotik ilaçlar."
    }
  }),

  defineTerm({
    term: "Atomoksetin",
    slug: "atomoksetin",
    shortDefinition: "Atomoksetin, dikkat eksikliği ve hiperaktivite bozukluğunun tedavisinde kullanılabilen, stimülan sınıfında olmayan ve noradrenerjik sistem üzerinde etkili bir psikiyatrik ilaçtır.",
    intro: "Atomoksetin her DEHB tanısı alan kişi için otomatik olarak uygun bir seçenek değildir. İlaç seçimi belirtilerin özellikleri, eşlik eden hastalıklar, diğer ilaçlar ve kişinin klinik gereksinimleri dikkate alınarak yapılır.",
    sections: [
      section("Atomoksetin Nasıl Bir İlaçtır?", "Atomoksetin stimülan olmayan bir DEHB ilacı olarak sınıflandırılır ve noradrenalin geri alımını etkileyen farmakolojik özelliklere sahiptir. Stimülan olmaması etkisiz veya daha hafif olduğu anlamına gelmez; farklı bir etki mekanizmasını ifade eder."),
      section("Hangi Durumlarda Kullanılabilir?", "Temel kullanım alanı DEHB'dir. Hangi yaş grubunda, hangi klinik özelliklerle ve hangi koşullarda tercih edileceği ülkeye özgü ruhsat bilgileri ve hekim değerlendirmesine göre değişebilir."),
      section("Etkisi ve Yan Etkileri Nasıl Değerlendirilir?", "Tedavi sırasında dikkat, dürtüsellik, hiperaktivite ve günlük işlevsellikteki değişiklikler izlenebilir. İştah, uyku, kalp hızı, kan basıncı veya başka yan etkiler açısından takip gerekebilir. İzlem kişinin tıbbi özelliklerine göre planlanır."),
      section("Atomoksetin Kendi Kendine Başlanabilir mi?", "Hayır. DEHB belirtilerinin başka ruhsal veya tıbbi durumlarla karışabilmesi ve ilaçların kişiye özgü riskler taşıyabilmesi nedeniyle klinik değerlendirme gerekir. İlaç başlama, bırakma veya değişiklik kararları hekimle birlikte verilmelidir. Tedavinin yararı yalnız dikkat belirtileriyle değil, kişinin okul, iş, ilişki ve günlük yaşam işlevselliğindeki değişikliklerle birlikte değerlendirilir.")
    ],
    relatedTerms: [
      { term: "DEHB", slug: "dehb" },
      { term: "Stimülan", slug: "stimulan" },
      { term: "Noradrenalin", slug: "noradrenalin" },
      { term: "ASRS", slug: "asrs" }
    ],
    seo: {
      title: "Atomoksetin Nedir? | Psikiyatri Sözlüğü",
      description: "Atomoksetinin stimülan olmayan bir DEHB ilacı olduğunu, etki mekanizmasını ve klinik izlem gereksinimini açıklar.",
      ogTitle: "Atomoksetin Nedir?",
      ogDescription: "Atomoksetini DEHB tedavisindeki yeri ve güvenli kullanım çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "DEHB tedavisinde kullanılabilen, stimülan olmayan noradrenerjik etkili ilaç."
    }
  }),

  defineTerm({
    term: "Ayırıcı tanı",
    slug: "ayirici-tani",
    shortDefinition: "Ayırıcı tanı, benzer belirtilerle ortaya çıkabilen farklı psikiyatrik, nörolojik, tıbbi veya maddeyle ilişkili durumların sistematik biçimde değerlendirilerek birbirinden ayrılması sürecidir.",
    intro: "Psikiyatride aynı belirti farklı nedenlerle ortaya çıkabilir. Örneğin dikkat bozukluğu yalnız DEHB'de, uykusuzluk yalnız depresyonda veya ajitasyon yalnız psikozda görülmez; bu nedenle belirtilerin bağlamı ayrıntılı değerlendirilir.",
    sections: [
      section("Ayırıcı Tanı Neden Gereklidir?", "Benzer görünen belirtilerin nedenleri ve gerektirdiği yaklaşımlar farklı olabilir. Bir hastalığın belirtilerini başka bir durumun açıklayıp açıklamadığını değerlendirmek yanlış tanı ve uygunsuz tedavi riskini azaltmaya yardımcı olur."),
      section("Ayırıcı Tanıda Neler Değerlendirilir?", "Belirtilerin başlangıç zamanı, süresi, tetikleyiciler, hastalık öyküsü, ilaç ve madde kullanımı, fiziksel hastalıklar, aile öyküsü ve işlevsellik incelenebilir. Gerekli durumlarda fizik muayene, laboratuvar veya başka tıbbi değerlendirmelerden yararlanılır."),
      section("Birden Fazla Tanı Aynı Anda Olabilir mi?", "Evet. Ayırıcı tanı her zaman yalnız tek bir hastalığın seçilmesi anlamına gelmez. Bir kişide birden fazla ruhsal veya bedensel durum birlikte bulunabilir ve bu durum komorbidite olarak tanımlanabilir."),
      section("Ölçekler Ayırıcı Tanıyı Tek Başına Yapar mı?", "Hayır. Tarama testleri ve ölçekler belirli belirti alanlarını sistematik biçimde değerlendirmeye yardımcı olabilir ancak benzer tabloları tek başına güvenilir biçimde ayıramaz. Klinik görüşme, öykü ve gerektiğinde tıbbi inceleme temel önemdedir. Değerlendirme sırasında yeni bilgiler ortaya çıktıkça olası tanılar yeniden gözden geçirilebilir ve klinik formülasyon değişebilir.")
    ],
    relatedTerms: [
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "Tanı ölçütleri", slug: "tani-olcutleri" },
      { term: "Komorbidite", slug: "komorbidite" },
      { term: "Tarama testi", slug: "tarama-testi" }
    ],
    seo: {
      title: "Ayırıcı Tanı Nedir? | Psikiyatri Sözlüğü",
      description: "Ayırıcı tanının benzer belirtilere yol açan farklı psikiyatrik ve tıbbi durumları nasıl birbirinden ayırmaya çalıştığını açıklar.",
      ogTitle: "Ayırıcı Tanı Nedir?",
      ogDescription: "Ayırıcı tanının psikiyatrik değerlendirmedeki rolünü açıklar."
    },
    schema: {
      definedTermDescription: "Benzer belirtilere yol açan farklı klinik durumların sistematik biçimde birbirinden ayrılması süreci."
    }
  }),

  defineTerm({
    term: "Bakım veren yükü",
    slug: "bakim-veren-yuku",
    shortDefinition: "Bakım veren yükü, kronik hastalık, engellilik veya işlevsellik kaybı yaşayan bir yakına uzun süre destek sunan kişinin duygusal, fiziksel, sosyal ve ekonomik açıdan yaşadığı zorlanmaların bütününü ifade eder.",
    intro: "Bakım vermek yakınlık ve dayanışmanın önemli bir parçası olabilir ancak uzun süreli sorumluluklar kişinin kendi ihtiyaçlarını ertelemesine, yorgunluk yaşamasına veya sosyal yaşamının daralmasına yol açabilir.",
    sections: [
      section("Bakım Veren Yükü Hangi Alanlarda Görülebilir?", "Sürekli sorumluluk hissi, uyku bozukluğu, zaman yetersizliği, sosyal izolasyon, fiziksel yorgunluk ve ekonomik güçlükler bakım veren yükünün parçaları olabilir. Her bakım veren aynı düzeyde zorlanma yaşamaz ve yük zaman içinde değişebilir."),
      section("Duygusal Zorlanma Ne Şekilde Ortaya Çıkabilir?", "Kaygı, üzüntü, öfke, suçluluk veya çaresizlik gibi birbirinden farklı duygular görülebilir. Kişinin zaman zaman yorulması veya destek ihtiyacı hissetmesi bakım verdiği kişiyi önemsemediği anlamına gelmez."),
      section("Bakım Verenin İhtiyaçları Neden Değerlendirilmelidir?", "Bakım verenin fiziksel ve ruhsal sağlığı bozulduğunda hem kendi yaşam kalitesi hem de bakımın sürdürülebilirliği etkilenebilir. Sosyal destek, görev paylaşımı ve uygun sağlık veya sosyal hizmet kaynaklarına erişim bu nedenle önem taşır."),
      section("Bakım Veren Yükü Tek Başına Bir Hastalık mıdır?", "Hayır. Bu kavram bakım verme sürecinin kişide oluşturduğu çok boyutlu zorlanmayı tanımlar. Bununla birlikte uzun süren yük kişinin depresyon, anksiyete veya tükenmişlik benzeri belirtiler açısından değerlendirilmesini gerektirebilir.")
    ],
    relatedTerms: [
      { term: "Psikososyal destek", slug: "psikososyal-destek" },
      { term: "İşlevsellik", slug: "islevsellik" },
      { term: "Aile görüşmesi", slug: "aile-gorusmesi" },
      { term: "Psikoeğitim", slug: "psikoegitim" }
    ],
    seo: {
      title: "Bakım Veren Yükü Nedir? | Psikiyatri Sözlüğü",
      description: "Bakım veren yükünün duygusal, fiziksel, sosyal ve ekonomik boyutlarını ve destek gereksinimiyle ilişkisini açıklar.",
      ogTitle: "Bakım Veren Yükü Nedir?",
      ogDescription: "Uzun süreli bakım sorumluluğunun bakım veren üzerindeki etkilerini açıklar."
    },
    schema: {
      definedTermDescription: "Uzun süreli bakım sorumluluğunun bakım veren kişide oluşturduğu duygusal, fiziksel ve sosyal zorlanma."
    }
  }),

  defineTerm({
    term: "Bazal ganglionlar",
    slug: "bazal-ganglionlar",
    shortDefinition: "Bazal ganglionlar, beynin derin bölgelerinde bulunan ve hareketlerin seçimi, alışkanlık öğrenimi, ödül süreçleri ve bazı bilişsel işlevlerde rol alan birbiriyle bağlantılı çekirdekler grubudur.",
    intro: "Bazal ganglionlar yalnız hareket merkezleri değildir. Motor devrelerin yanında bilişsel, motivasyonel ve davranışsal süreçlerle ilişkili farklı sinir ağlarına katılırlar.",
    sections: [
      section("Bazal Ganglionların Hareketle İlişkisi Nedir?", "İstemli hareketlerin başlatılması ve gereksiz hareketlerin baskılanması için korteks, talamus ve bazal ganglionlar arasında döngüler bulunur. Parkinson hastalığı gibi nörolojik durumlarda bu devrelerin işleyişindeki değişiklikler belirgin motor belirtiler oluşturabilir."),
      section("Alışkanlık ve Öğrenmede Nasıl Rol Oynarlar?", "Tekrarlanan davranışların zamanla daha otomatik hale gelmesi ve ödül sonuçlarına göre davranışların pekişmesi bazal ganglion ağlarıyla ilişkilidir. Bu süreçlerde özellikle striatum ve dopaminerjik sistemlerin önemli rolleri vardır."),
      section("Psikiyatride Neden Önemlidir?", "Obsesif kompulsif bozukluk, tik bozuklukları, bağımlılık ve bazı dürtü kontrol sorunlarında kortiko-striatal devreler araştırılmaktadır. Ancak bu ilişkiler tek bir beyin yapısının tek başına bir psikiyatrik bozukluğa neden olduğu anlamına gelmez."),
      section("Bazal Ganglion Bulguları Tanı Koydurur mu?", "Rutin psikiyatrik tanılar bazal ganglionların görüntülenmesiyle konulmaz. Beyin görüntüleme belirli nörolojik veya tıbbi nedenlerin araştırılmasında yararlı olabilir ancak psikiyatrik tanı klinik öykü ve ruhsal durum değerlendirmesine dayanır. Araştırmalarda gözlenen grup düzeyindeki beyin farklılıkları tek bir kişinin hastalığını açıklayan kesin biyolojik işaretler olarak yorumlanmamalıdır.")
    ],
    relatedTerms: [
      { term: "Dopamin", slug: "dopamin" },
      { term: "Ödül sistemi", slug: "odul-sistemi" },
      { term: "Obsesif kompulsif bozukluk", slug: "obsesif-kompulsif-bozukluk" },
      { term: "Dürtüsellik", slug: "durtusellik" }
    ],
    seo: {
      title: "Bazal Ganglionlar Nedir? | Psikiyatri Sözlüğü",
      description: "Bazal ganglionların hareket, alışkanlık, ödül ve psikiyatrik araştırmalardaki rolünü açıklar.",
      ogTitle: "Bazal Ganglionlar Nedir?",
      ogDescription: "Bazal ganglionların motor ve davranışsal sinir ağlarındaki yerini açıklar."
    },
    schema: {
      definedTermDescription: "Hareket, alışkanlık öğrenimi ve ödül süreçlerine katılan derin beyin çekirdekleri grubu."
    }
  }),

  defineTerm({
    term: "Bağımlı kişilik örüntüsü",
    slug: "bagimli-kisilik-oruntusu",
    shortDefinition: "Bağımlı kişilik örüntüsü, günlük kararlar, sorumluluklar ve ilişkilerde başkalarının desteğine belirgin ölçüde ihtiyaç duyma, ayrılma veya yalnız kalma konusunda yoğun kaygı yaşama eğilimiyle tanımlanan kalıcı kişilik özellikleri bütünüdür.",
    intro: "Yakın ilişkilerde destek istemek veya başkalarına güvenmek tek başına sorun değildir. Klinik olarak önemli bağımlı örüntü, bu ihtiyacın kişinin özerkliğini ve günlük işlevselliğini belirgin biçimde sınırladığı durumları ifade eder.",
    sections: [
      section("Bağımlı Kişilik Örüntüsünde Neler Görülebilir?", "Kişi küçük günlük kararlar için bile yoğun güvence arayabilir, sorumluluğu başkasına bırakabilir veya destek kaybetmemek için kendi görüşlerini ifade etmekte zorlanabilir. Bu özelliklerin farklı ilişkilerde ne kadar süreğen olduğu değerlendirilir."),
      section("Yakınlık İhtiyacından Farkı Nedir?", "İnsanların destek, sevgi ve yakınlık istemesi doğal bir gereksinimdir. Bağımlı örüntüde ise başkalarının yardımına duyulan ihtiyaç kişinin kendi kararlarını vermesini, sınır koymasını veya bağımsız davranmasını belirgin biçimde güçleştirebilir."),
      section("Ayrılık Kaygısı Nasıl Görülebilir?", "Önemli bir ilişkinin sona ermesi kişinin tek başına baş edemeyeceğine ilişkin yoğun kaygı oluşturabilir. Bu durumda kişi hızla başka bir destek ilişkisi arayabilir veya sağlıksız bir ilişkiyi yalnız kalma korkusu nedeniyle sürdürmekte zorlanabilir."),
      section("Tanı Nasıl Değerlendirilir?", "Tek bir ilişki veya geçici stres dönemindeki davranışlar yeterli değildir. Kişilik değerlendirmesinde örüntünün uzun süredir var olup olmadığı, farklı yaşam alanlarında görülüp görülmediği ve kişinin işlevselliğini nasıl etkilediği incelenir.")
    ],
    relatedTerms: [
      { term: "Kişilik", slug: "kisilik" },
      { term: "Kişilik bozukluğu", slug: "kisilik-bozuklugu" },
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Güvence arama", slug: "guvence-arama" }
    ],
    seo: {
      title: "Bağımlı Kişilik Örüntüsü Nedir? | Psikiyatri Sözlüğü",
      description: "Bağımlı kişilik örüntüsünün destek ihtiyacı, özerklik, ayrılık kaygısı ve klinik değerlendirme açısından özelliklerini açıklar.",
      ogTitle: "Bağımlı Kişilik Örüntüsü Nedir?",
      ogDescription: "Bağımlı kişilik örüntüsünü yakınlık ihtiyacından ayırarak açıklar."
    },
    schema: {
      definedTermDescription: "Karar verme ve özerklik alanlarında başkalarının desteğine aşırı ihtiyaçla seyreden kalıcı kişilik örüntüsü."
    }
  }),

  defineTerm({
    term: "Benlik",
    slug: "benlik",
    shortDefinition: "Benlik, kişinin kendisini nasıl algıladığına, kim olduğunu düşündüğüne, özelliklerini nasıl değerlendirdiğine ve yaşam içindeki sürekliliğini nasıl deneyimlediğine ilişkin düşünce, duygu ve temsillerin bütününü ifade eder.",
    intro: "Benlik tek ve değişmez bir yapı değildir. Kişinin yaşam deneyimleri, ilişkileri, kültürel çevresi ve gelişim dönemi kendisi hakkındaki algısının zaman içinde değişmesine katkıda bulunabilir.",
    sections: [
      section("Benlik Algısı Neleri İçerir?", "Kişinin güçlü ve zayıf gördüğü yönleri, sosyal rolleri, bedeniyle ilişkisi, değerleri, hedefleri ve başkalarıyla ilişkilerde kendisini nasıl konumlandırdığı benlik algısının parçaları olabilir. Bu alanlar birbirleriyle tamamen uyumlu olmak zorunda değildir."),
      section("Benlik ile Özsaygı Aynı Şey midir?", "Hayır. Benlik daha geniş biçimde kişinin kendisiyle ilgili zihinsel ve duygusal temsilini ifade eder. Özsaygı ise kişinin kendisine verdiği değer ve kendisini ne ölçüde yeterli veya değerli gördüğüyle daha yakından ilişkilidir."),
      section("Benlik Zaman İçinde Değişebilir mi?", "Evet. Ergenlik, ebeveynlik, meslek değişikliği, hastalık, kayıp veya başka önemli yaşam olayları kişinin kendisini tanımlama biçimini etkileyebilir. Değişim her zaman bozulma anlamına gelmez; gelişimin doğal bir parçası olabilir."),
      section("Psikiyatride Benlik Neden Önemlidir?", "Bazı ruhsal durumlarda kişinin kendilik algısı, kimlik sürekliliği veya kendisine ilişkin değerlendirmeleri belirgin biçimde etkilenebilir. Klinik görüşmede bu değişikliklerin süresi, bağlamı ve günlük yaşam üzerindeki etkisi değerlendirilir. Kişinin kendisini nasıl tanımladığı ile davranışları, ilişkileri ve yaşam hedefleri arasındaki uyum da değerlendirmeye önemli bilgiler sağlayabilir.")
    ],
    relatedTerms: [
      { term: "Kimlik", slug: "kimlik" },
      { term: "Kişilik", slug: "kisilik" },
      { term: "Depersonalizasyon", slug: "depersonalizasyon" },
      { term: "Mentalizasyon", slug: "mentalizasyon" }
    ],
    seo: {
      title: "Benlik Nedir? | Psikiyatri Sözlüğü",
      description: "Benlik kavramının kişinin kendisiyle ilgili algı, duygu ve düşüncelerini nasıl kapsadığını ve özsaygıdan farkını açıklar.",
      ogTitle: "Benlik Nedir?",
      ogDescription: "Benlik kavramını kimlik, özsaygı ve gelişim bağlamında açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin kendisiyle ilgili algı, duygu, düşünce ve süreklilik deneyimlerinin bütünü."
    }
  })
];


const eighthBatchNewTerms = [
  defineTerm({
    term: "Benzodiazepin",
    slug: "benzodiazepin",
    shortDefinition: "Benzodiazepin, GABA sisteminin inhibitör etkisini güçlendiren ve bazı klinik durumlarda kaygı, uykusuzluk, ajitasyon, nöbet veya kas gerginliği gibi belirtilerde kullanılabilen ilaç grubudur.",
    intro: "Benzodiazepinler hızlı etki gösterebilen ilaçlardır ancak her kaygı veya uyku sorunu için uygun değildir. Uyku hali, bilişsel etkiler, tolerans, fiziksel bağımlılık ve başka maddelerle etkileşim gibi özellikler nedeniyle klinik değerlendirme ve izlem önemlidir.",
    sections: [
      section("Benzodiazepinler Nasıl Etki Gösterir?", "Bu ilaçlar beyindeki temel inhibitör nörotransmiterlerden GABA'nın etkisini güçlendirir. Bunun sonucunda sinir sistemi aktivitesinde azalma, gevşeme ve sedasyon görülebilir. Etkinin niteliği kullanılan ilaca, kişinin özelliklerine ve eşlik eden diğer maddelere göre değişebilir."),
      section("Hangi Durumlarda Kullanılabilir?", "Bazı akut kaygı tablolarında, kısa süreli ciddi uykusuzlukta, belirli nörolojik durumlarda veya yoğun ajitasyonun yönetiminde kullanılabilirler. Kullanım amacı ve süresi her klinik durumda aynı değildir; uzun dönem kaygı tedavisinin tek seçeneği olarak düşünülmezler."),
      section("Tolerans ve Bağımlılık Ne Anlama Gelir?", "Düzenli kullanım sırasında bazı etkilerin zamanla azalması tolerans olarak tanımlanabilir. Fiziksel bağımlılık ise ilacın kesilmesi veya hızlı azaltılması sonrasında yoksunluk belirtileri ortaya çıkabilmesi anlamına gelir. Bu durum madde kullanım bozukluğuyla tamamen aynı kavram değildir."),
      section("Neden Hekim Kontrolü Önemlidir?", "Uyku hali, düşme riski, dikkat ve bellek etkileri ile alkol veya başka merkezi sinir sistemi baskılayıcılarıyla etkileşim güvenlik açısından önem taşıyabilir. Uzun süre kullanılan benzodiazepinlerin aniden bırakılması bazı kişilerde ciddi sorun oluşturabileceğinden değişiklikler hekim değerlendirmesiyle planlanmalıdır.")
    ],
    relatedTerms: [
      { term: "Anksiyolitik", slug: "anksiyolitik" },
      { term: "GABA", slug: "gaba" },
      { term: "Tolerans", slug: "tolerans" },
      { term: "Yoksunluk", slug: "yoksunluk" }
    ],
    seo: {
      title: "Benzodiazepin Nedir? | Psikiyatri Sözlüğü",
      description: "Benzodiazepinlerin GABA sistemi, klinik kullanım, tolerans, bağımlılık ve güvenli izlem açısından temel özelliklerini açıklar.",
      ogTitle: "Benzodiazepin Nedir?",
      ogDescription: "Benzodiazepin ilaç grubunu kullanım alanları ve güvenlik çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "GABA sistemini etkileyerek sedatif ve kaygı azaltıcı özellik gösterebilen ilaç grubu."
    }
  }),

  defineTerm({
    term: "Bilgilendirilmiş onam",
    slug: "bilgilendirilmis-onam",
    shortDefinition: "Bilgilendirilmiş onam, kişinin önerilen değerlendirme veya sağlık hizmetinin amacı, olası yararları, önemli riskleri ve alternatifleri hakkında anlaşılır bilgi aldıktan sonra özgür iradesiyle karar vermesi sürecidir.",
    intro: "Bilgilendirilmiş onam yalnız bir formun imzalanmasından ibaret değildir. Kişinin kendisine sunulan bilgiyi anlayabilmesi, soru sorabilmesi ve kararını baskı altında kalmadan verebilmesi sürecin temel parçalarıdır.",
    sections: [
      section("Bilgilendirilmiş Onam Neleri İçerir?", "Kişiye yapılacak değerlendirmenin veya uygulamanın amacı, nasıl yürütüleceği, önemli olası yarar ve riskler ile mevcut alternatifler anlaşılır biçimde açıklanır. Kişinin bilgi düzeyi ve gereksinimleri dikkate alınarak açıklamanın anlaşılır olması sağlanmaya çalışılır."),
      section("Form İmzalamak Tek Başına Yeterli midir?", "Hayır. İmza sürecin belgelendirilmesine yardımcı olabilir ancak kişinin neye onay verdiğini anlamadığı bir durumda yalnız imzanın bulunması gerçek anlamda bilgilendirilmiş karar verildiğini göstermez. Onam iletişime dayalı devam eden bir süreçtir."),
      section("Kişi Fikrini Değiştirebilir mi?", "Birçok sağlık hizmetinde kişi daha önce verdiği onamı yeniden değerlendirebilir ve kararını değiştirebilir. Bunun sınırları acil durumlar, kişinin karar verme kapasitesi ve geçerli yasal düzenlemeler gibi özel koşullara göre farklılaşabilir."),
      section("Karar Verme Kapasitesi Neden Önemlidir?", "Kişinin verilen bilgiyi anlaması, seçeneklerin sonuçlarını değerlendirebilmesi ve kararını ifade edebilmesi önemlidir. Karar verme kapasitesi belirli bir karara özgü olarak değerlendirilebilir ve yalnız bir psikiyatrik tanının bulunması kapasitenin otomatik olarak olmadığı anlamına gelmez.")
    ],
    relatedTerms: [
      { term: "Mahremiyet", slug: "mahremiyet" },
      { term: "Gizlilik", slug: "gizlilik" },
      { term: "Hasta hakları", slug: "hasta-haklari" },
      { term: "Adli psikiyatri", slug: "adli-psikiyatri" }
    ],
    seo: {
      title: "Bilgilendirilmiş Onam Nedir? | Psikiyatri Sözlüğü",
      description: "Bilgilendirilmiş onamın bilgi verme, anlama, gönüllülük ve karar verme kapasitesi bileşenlerini açıklar.",
      ogTitle: "Bilgilendirilmiş Onam Nedir?",
      ogDescription: "Bilgilendirilmiş onamın yalnızca imza olmadığını ve temel unsurlarını açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin yeterli bilgi aldıktan ve seçenekleri anladıktan sonra gönüllü biçimde karar vermesi süreci."
    }
  }),

  defineTerm({
    term: "Bölme",
    slug: "bolme",
    shortDefinition: "Bölme, kişinin kendisini, başka insanları veya ilişkileri aynı anda hem olumlu hem olumsuz özellikleriyle değerlendirmekte zorlanıp tamamen iyi ya da tamamen kötü biçiminde algılayabildiği psikolojik savunma örüntüsüdür.",
    intro: "Bölme özellikle yoğun duygusal durumlarda karmaşık ve çelişkili duyguları bir arada tutmanın zorlaştığı zamanlarda görülebilir. Tek başına belirli bir psikiyatrik tanıyı göstermez.",
    sections: [
      section("Bölme Nasıl Görülebilir?", "Bir kişi bir ilişkiyi belirli bir anda tamamen güvenli ve kusursuz olarak değerlendirirken hayal kırıklığı sonrasında aynı kişiyi bütünüyle kötü veya değersiz görebilir. Bu hızlı değişim ilişkinin bütün özelliklerini dengeli biçimde değerlendirmeyi güçleştirebilir."),
      section("Neden Bir Savunma Mekanizması Olarak Ele Alınır?", "Çelişkili duyguları aynı anda yaşamak psikolojik olarak zorlayıcı olabilir. Bölme, olumlu ve olumsuz deneyimleri geçici olarak birbirinden ayırarak yoğun kaygıyı azaltabilir; ancak kalıcı hale geldiğinde ilişkilerin daha değişken ve çatışmalı yaşanmasına katkıda bulunabilir."),
      section("Bölme Sadece Borderline Kişilikte mi Görülür?", "Hayır. Bölme borderline kişilik örüntüsüyle ilişkilendirilen kavramlardan biridir ancak farklı kişilerde, gelişim dönemlerinde ve yoğun stres koşullarında da görülebilir. Tek bir savunma mekanizması üzerinden kişilik tanısı konulmaz."),
      section("Psikoterapide Nasıl Ele Alınabilir?", "Kişinin bir insan veya olay hakkında aynı anda birden fazla duygu taşıyabilmesini fark etmesi ve olumlu-olumsuz özellikleri daha bütüncül değerlendirebilmesi üzerinde çalışılabilir. Amaç duyguları geçersiz kılmak değil, karmaşık deneyimlere daha esnek biçimde yaklaşabilmektir.")
    ],
    relatedTerms: [
      { term: "Savunma mekanizması", slug: "savunma-mekanizmasi" },
      { term: "Borderline kişilik örüntüsü", slug: "borderline-kisilik-oruntusu" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" },
      { term: "Mentalizasyon", slug: "mentalizasyon" }
    ],
    seo: {
      title: "Bölme Nedir? | Psikiyatri Sözlüğü",
      description: "Bölme savunmasının kişileri tamamen iyi veya kötü değerlendirme eğilimiyle ilişkisini ve klinik anlamını açıklar.",
      ogTitle: "Bölme Nedir?",
      ogDescription: "Bölme savunma mekanizmasını damgalayıcı olmayan klinik bir çerçevede açıklar."
    },
    schema: {
      definedTermDescription: "Olumlu ve olumsuz özellikleri bütünleştirmekte zorlanarak deneyimleri kutuplaştırma eğilimi."
    }
  }),

  defineTerm({
    term: "Damgalanma",
    slug: "damgalanma",
    shortDefinition: "Damgalanma, ruhsal hastalık veya başka bir özellikle ilişkilendirilen olumsuz kalıp yargılar nedeniyle kişinin küçümsenmesi, dışlanması, ayrımcılığa uğraması veya toplumdaki değerinin azaltılması sürecidir.",
    intro: "Ruhsal hastalıklara ilişkin damgalanma kişilerin sağlık hizmetine başvurmasını geciktirebilir, sosyal ilişkilerini etkileyebilir ve hastalığın kendisinden bağımsız ek bir yük oluşturabilir.",
    sections: [
      section("Damgalanma Nasıl Ortaya Çıkar?", "Ruhsal hastalıkların kişisel zayıflık, tehlikelilik veya değişmezlik gibi yanlış genellemelerle ilişkilendirilmesi damgalanmaya katkıda bulunabilir. Bu kalıp yargılar günlük konuşmalardan iş, eğitim ve sağlık hizmetlerine kadar farklı alanlarda görülebilir."),
      section("Ayrımcılıktan Farkı Nedir?", "Damgalanma olumsuz etiket ve kalıp yargıları içeren daha geniş bir süreçtir. Ayrımcılık ise bu önyargıların kişinin iş, eğitim, barınma, sağlık hizmeti veya sosyal ilişkilerinde somut dezavantaja dönüşmesini ifade edebilir."),
      section("İçselleştirilmiş Damgalanma Nedir?", "Kişi toplumdaki olumsuz yargıları kendi benliğine uygulamaya başladığında kendisini yetersiz, değersiz veya umutsuz görebilir. Bu süreç özsaygıyı ve yardım arama davranışını olumsuz etkileyebilir."),
      section("Damgalanmayı Azaltmak Neden Önemlidir?", "Ruhsal hastalıkların bilimsel ve insan odaklı biçimde konuşulması, kişiyi tanısından ibaret görmeyen dil kullanılması ve ayrımcı uygulamaların azaltılması önemlidir. Bilgilendirme tek başına her önyargıyı ortadan kaldırmasa da yanlış inanışların sorgulanmasına katkı sağlayabilir. Ruhsal hastalık yaşayan kişilerin çalışma, eğitim, sağlık hizmeti ve sosyal yaşama eşit katılımının desteklenmesi de damgalanmanın etkilerini azaltmada önemlidir. Kişinin yalnızca tanısıyla değil, yaşamının bütünlüğü içinde görülmesi bu yaklaşımın temel parçalarından biridir.")
    ],
    relatedTerms: [
      { term: "Stigma", slug: "stigma" },
      { term: "İçselleştirilmiş stigma", slug: "icsellestirilmis-stigma" },
      { term: "Psikososyal destek", slug: "psikososyal-destek" },
      { term: "Özsaygı", slug: "ozsaygi" }
    ],
    seo: {
      title: "Damgalanma Nedir? | Psikiyatri Sözlüğü",
      description: "Ruhsal hastalıklarda damgalanmanın kalıp yargı, ayrımcılık ve içselleştirilmiş stigma ile ilişkisini açıklar.",
      ogTitle: "Damgalanma Nedir?",
      ogDescription: "Ruhsal hastalıklarda damgalanmanın kişi ve toplum üzerindeki etkilerini açıklar."
    },
    schema: {
      definedTermDescription: "Olumsuz kalıp yargılar nedeniyle kişinin etiketlenmesi, dışlanması veya değersizleştirilmesi süreci."
    }
  }),

  defineTerm({
    term: "Davranım bozukluğu",
    slug: "davranim-bozuklugu",
    shortDefinition: "Davranım bozukluğu, çocuk veya ergenin başkalarının temel haklarını ya da yaşına uygun önemli toplumsal kuralları tekrarlayan ve süreğen biçimde ihlal ettiği davranış örüntüsüyle tanımlanan psikiyatrik bozukluktur.",
    intro: "Tek bir kural ihlali, öfke nöbeti veya ergenlik dönemindeki çatışma davranım bozukluğu anlamına gelmez. Değerlendirmede davranışların niteliği, sürekliliği, gelişimsel bağlamı ve farklı yaşam alanlarındaki etkileri birlikte ele alınır.",
    sections: [
      section("Davranım Bozukluğunda Hangi Davranışlar Görülebilir?", "İnsanlara veya hayvanlara yönelik saldırgan davranışlar, başkasının malına zarar verme, ciddi aldatıcı davranışlar, hırsızlık veya önemli kuralların tekrar tekrar ihlali gibi farklı örüntüler görülebilir. Her çocukta aynı belirtilerin bulunması gerekmez."),
      section("Normal Ergenlik Davranışlarından Nasıl Ayrılır?", "Ergenlikte sınırları deneme ve otoriteyle zaman zaman çatışma görülebilir. Davranım bozukluğunda ise ihlaller daha ciddi, tekrar eden ve başkalarının güvenliği ya da hakları üzerinde belirgin etki oluşturan bir örüntü halindedir."),
      section("Neden Damgalayıcı Dilden Kaçınılmalıdır?", "Bu tanı çocuğun veya ergenin 'kötü' olduğu anlamına gelmez. Travma, aile ve çevre koşulları, öğrenme güçlükleri, DEHB, madde kullanımı ve başka ruhsal sorunlar davranışların ortaya çıkışı veya sürmesinde rol oynayabilir."),
      section("Değerlendirmede Neler Ele Alınır?", "Çocuğun gelişim öyküsü, okul ve aile ortamı, akran ilişkileri, belirtilerin başladığı dönem ve eşlik eden ruhsal sorunlar değerlendirilir. Güvenlik riski varsa bu ayrıca ele alınır ve destek planı çocuğun, ailenin ve çevrenin ihtiyaçlarına göre şekillendirilir.")
    ],
    relatedTerms: [
      { term: "Dürtü kontrolü", slug: "durtu-kontrolu" },
      { term: "DEHB", slug: "dehb" },
      { term: "Akran ilişkileri", slug: "akran-iliskileri" },
      { term: "Risk değerlendirmesi", slug: "risk-degerlendirmesi" }
    ],
    seo: {
      title: "Davranım Bozukluğu Nedir? | Psikiyatri Sözlüğü",
      description: "Davranım bozukluğunun tekrar eden hak ve kural ihlalleriyle ilişkisini ve normal ergenlik davranışlarından farkını açıklar.",
      ogTitle: "Davranım Bozukluğu Nedir?",
      ogDescription: "Davranım bozukluğunu gelişimsel ve damgalayıcı olmayan bir klinik çerçevede açıklar."
    },
    schema: {
      definedTermDescription: "Çocuk ve ergenlerde başkalarının haklarını veya önemli kuralları süreğen biçimde ihlal eden davranış örüntüsü."
    }
  }),

  defineTerm({
    term: "Doz titrasyonu",
    slug: "doz-titrasyonu",
    shortDefinition: "Doz titrasyonu, bir ilacın dozunun klinik yanıt, yan etkiler, kişinin tıbbi özellikleri ve tedavi hedefleri dikkate alınarak sağlık profesyoneli tarafından aşamalı biçimde ayarlanması sürecidir.",
    intro: "Titrasyon her ilaçta aynı hız veya yöntemle yapılmaz. İlacın farmakolojik özellikleri, kişinin yaşı, eşlik eden hastalıkları, kullanılan diğer ilaçlar ve tedaviye verdiği yanıt süreci etkileyebilir.",
    sections: [
      section("Doz Titrasyonu Neden Yapılır?", "Amaç yalnızca daha yüksek bir doza ulaşmak değildir. En düşük etkili doz ile kabul edilebilir yan etki düzeyi arasında kişiye uygun bir denge kurulmaya çalışılır. Bazı ilaçlarda doz artırımı, bazılarında ise azaltım süreci titrasyon gerektirebilir."),
      section("Her İlaç Aynı Şekilde Titre Edilir mi?", "Hayır. İlaçların yarı ömürleri, metabolizmaları, terapötik aralıkları ve ciddi yan etki riskleri farklıdır. Bu nedenle bir ilaç için kullanılan doz değişim yaklaşımı başka bir ilaç için geçerli olmayabilir."),
      section("Yan Etkiler Titrasyonu Nasıl Etkiler?", "Yeni bir yan etki ortaya çıktığında bunun şiddeti, süresi ve ilaçla ilişkisi değerlendirilir. Klinik gereksinime göre mevcut dozun sürdürülmesi, planın değiştirilmesi veya farklı bir tedavi seçeneğinin değerlendirilmesi gerekebilir."),
      section("Kişi Dozunu Kendi Kendine Değiştirmeli midir?", "Hayır. İlacın beklenen etkisi, kesilme belirtileri, etkileşimler veya başka güvenlik sorunları doz değişikliklerini kişiye özgü hale getirir. Bu nedenle doz artırma, azaltma veya bırakma kararları tedaviyi düzenleyen sağlık profesyoneliyle birlikte planlanmalıdır.")
    ],
    relatedTerms: [
      { term: "Yan etki", slug: "yan-etki" },
      { term: "Etkileşim", slug: "etkilesim" },
      { term: "Farmakokinetik", slug: "farmakokinetik" },
      { term: "İlaç uyumu", slug: "ilac-uyumu" }
    ],
    seo: {
      title: "Doz Titrasyonu Nedir? | Psikiyatri Sözlüğü",
      description: "Doz titrasyonunun ilaç dozunun klinik yanıt ve yan etkilere göre profesyonel olarak ayarlanması süreci olduğunu açıklar.",
      ogTitle: "Doz Titrasyonu Nedir?",
      ogDescription: "Doz titrasyonu kavramını güvenli ilaç kullanımı çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "İlaç dozunun etkinlik ve güvenlik göz önüne alınarak aşamalı biçimde ayarlanması süreci."
    }
  }),

  defineTerm({
    term: "Duygusal yoksunluk",
    slug: "duygusal-yoksunluk",
    shortDefinition: "Duygusal yoksunluk, kişinin sevgi, ilgi, anlayış, korunma veya duygusal destek gibi temel ilişkisel ihtiyaçlarının başkaları tarafından yeterince karşılanmayacağı yönündeki kalıcı beklentisini ifade eden şema kavramıdır.",
    intro: "Duygusal yoksunluk şeması kişinin gerçekten hiçbir zaman destek görmediği anlamına gelmez. Kişinin ilişkilerde ihtiyaçlarının karşılanmasını nasıl beklediği ve gelen desteği nasıl algıladığı da önemlidir.",
    sections: [
      section("Duygusal Yoksunluk Nasıl Deneyimlenebilir?", "Kişi yakın ilişkileri olsa bile yeterince anlaşılmadığını, önemsenmediğini veya duygusal olarak desteklenmediğini hissedebilir. Bu beklenti bazen ihtiyaçları açıkça ifade etmekte zorlanma veya karşı taraftan kendiliğinden anlaşılmayı bekleme ile birlikte görülebilir."),
      section("Erken Deneyimlerle İlişkisi Nedir?", "Çocukluk döneminde duygusal ihtiyaçların sürekli olarak fark edilmemesi veya karşılanmaması böyle bir şemanın gelişimine katkıda bulunabilir. Bununla birlikte tek bir çocukluk deneyiminden doğrudan ve kesin neden-sonuç ilişkisi kurulmaz."),
      section("İlişkilerde Nasıl Sürdürülebilir?", "Kişi duygusal olarak mesafeli insanlara yönelebilir, kendi ihtiyaçlarını ifade etmekten kaçınabilir veya aldığı desteği yetersiz olarak değerlendirebilir. Bu örüntüler şemanın doğrulandığı hissini güçlendirebilir."),
      section("Duygusal İhmal ile Aynı Şey midir?", "Tam olarak değil. Duygusal ihmal kişinin gelişim döneminde ihtiyaçlarının yeterince karşılanmamasını ifade eden deneyimsel bir kavramdır. Duygusal yoksunluk ise kişinin ilişkilerinde taşıdığı daha kalıcı beklenti ve şema örüntüsünü tanımlar. Kişinin bugün destekleyici ilişkiler içinde bulunması bu eski beklentinin otomatik olarak ortadan kalkacağı anlamına gelmez; yeni ilişki deneyimlerinin nasıl yorumlandığı da önem taşır.")
    ],
    relatedTerms: [
      { term: "Duygusal ihmal", slug: "duygusal-ihmal" },
      { term: "Şema terapi", slug: "sema-terapi" },
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Benlik", slug: "benlik" }
    ],
    seo: {
      title: "Duygusal Yoksunluk Nedir? | Psikiyatri Sözlüğü",
      description: "Duygusal yoksunluk şemasının destek ve yakınlık beklentileriyle ilişkisini ve duygusal ihmalden farkını açıklar.",
      ogTitle: "Duygusal Yoksunluk Nedir?",
      ogDescription: "Duygusal yoksunluk şemasını ilişkisel ihtiyaçlar bağlamında açıklar."
    },
    schema: {
      definedTermDescription: "Duygusal ihtiyaçların başkaları tarafından yeterince karşılanmayacağı yönündeki kalıcı beklenti."
    }
  }),

  defineTerm({
    term: "Ebeveyn tutumu",
    slug: "ebeveyn-tutumu",
    shortDefinition: "Ebeveyn tutumu, anne, baba veya bakım veren kişinin çocuğa yakınlık gösterme, sınır koyma, beklenti oluşturma, destek verme ve davranışlara yanıt verme biçimlerinin genel örüntüsünü ifade eder.",
    intro: "Ebeveynlik tek bir doğru davranış listesine indirgenemez. Çocuğun yaşı, mizacı, gelişim düzeyi, aile koşulları ve kültürel bağlam ebeveyn-çocuk etkileşimini etkiler.",
    sections: [
      section("Ebeveyn Tutumunda Hangi Boyutlar Önemlidir?", "Duygusal sıcaklık, tutarlılık, sınırların açıklığı, çocuğun yaşına uygun özerklik tanınması ve davranışlara verilen tepkiler önemli boyutlardır. Aynı ailede farklı çocukların farklı düzeyde desteğe ve yapıya ihtiyacı olabilir."),
      section("Sınır Koymak Olumsuz Bir Tutum mudur?", "Hayır. Yaşa uygun, anlaşılır ve tutarlı sınırlar çocuğun güvenliğini ve özdenetim gelişimini destekleyebilir. Sorun sınır bulunması değil, sınırların aşırı katı, öngörülemez, korkutucu veya çocuğun gelişim düzeyiyle uyumsuz olması olabilir."),
      section("Ebeveyn Tutumu Çocuğun Ruh Sağlığını Tek Başına Belirler mi?", "Hayır. Çocuğun ruhsal gelişimi genetik özellikler, mizaç, okul ortamı, akran ilişkileri, yaşam olayları ve başka birçok etkenin etkileşimiyle şekillenir. Ebeveynleri tek başına sorumlu tutan açıklamalar bilimsel olarak aşırı basitleştiricidir."),
      section("Tutarlılık Neden Önemlidir?", "Çocuğun benzer durumlarda ne bekleyeceğini bilmesi güven duygusuna katkıda bulunabilir. Bununla birlikte tutarlılık değişmez veya mekanik davranmak değildir; çocuğun yaşı ve koşullar değiştikçe ebeveynlik yaklaşımının da esnek biçimde uyarlanması gerekebilir.")
    ],
    relatedTerms: [
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Aile görüşmesi", slug: "aile-gorusmesi" },
      { term: "Akran ilişkileri", slug: "akran-iliskileri" },
      { term: "Duygusal ihmal", slug: "duygusal-ihmal" }
    ],
    seo: {
      title: "Ebeveyn Tutumu Nedir? | Psikiyatri Sözlüğü",
      description: "Ebeveyn tutumunun sıcaklık, sınır, tutarlılık ve özerklik boyutlarını gelişimsel bir çerçevede açıklar.",
      ogTitle: "Ebeveyn Tutumu Nedir?",
      ogDescription: "Ebeveyn tutumunu suçlayıcı olmayan gelişimsel bir yaklaşım içinde açıklar."
    },
    schema: {
      definedTermDescription: "Bakım verenin çocuğa yakınlık, sınır, destek ve beklenti sunma biçimlerinin genel örüntüsü."
    }
  }),

  defineTerm({
    term: "Ehliyet değerlendirmesi",
    slug: "ehliyet-degerlendirmesi",
    shortDefinition: "Ehliyet değerlendirmesi, kişinin sürücülük için gerekli dikkat, bilişsel işlevler, davranış kontrolü, tıbbi durum ve gerektiğinde ruhsal özelliklerinin trafik güvenliği açısından değerlendirilmesi sürecidir.",
    intro: "Bir psikiyatrik tanının bulunması kişinin otomatik olarak araç kullanamayacağı anlamına gelmez. Değerlendirme tanı etiketinden çok mevcut işlevsellik, belirtiler, kullanılan ilaçların etkileri ve güvenli sürüş için gereken beceriler üzerine odaklanır.",
    sections: [
      section("Ehliyet Değerlendirmesinde Neler İncelenir?", "Dikkat, tepki verme, dürtü kontrolü, bilinç düzeyi, bilişsel işlevler ve kişinin hastalığının sürüş güvenliğini etkileyip etkilemediği değerlendirilebilir. Gerekli durumlarda tıbbi belgeler, ilaç kullanımı ve geçmiş sürüş öyküsü de dikkate alınır."),
      section("Psikiyatrik Tanı Ehliyeti Otomatik Olarak Engeller mi?", "Hayır. Aynı tanıya sahip kişilerin belirtileri ve işlevsellikleri çok farklı olabilir. Değerlendirme kişinin güncel klinik durumu ve geçerli mevzuat çerçevesinde yapılır; yalnız tanı adına dayanarak sonuç çıkarılmaz."),
      section("İlaç Kullanımı Neden Önemlidir?", "Bazı ilaçlar özellikle başlangıç veya değişiklik dönemlerinde uyku hali, dikkat azalması veya tepki süresinde değişiklik oluşturabilir. Ancak kullanılan her psikiyatrik ilaç sürüşün yasak olduğu anlamına gelmez; bireysel etkiler klinik olarak değerlendirilir."),
      section("Adli Psikiyatriyle İlişkisi Nedir?", "Sürücülük yeterliliği bazı durumlarda tıbbi ve hukuki ölçütlerin birlikte ele alınmasını gerektirir. Hangi uzmanların değerlendirme yapacağı, hangi raporların gerektiği ve karar ölçütleri yürürlükteki mevzuata göre değişebilir.")
    ],
    relatedTerms: [
      { term: "Adli psikiyatri", slug: "adli-psikiyatri" },
      { term: "Dikkat", slug: "dikkat" },
      { term: "Dürtü kontrolü", slug: "durtu-kontrolu" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ],
    seo: {
      title: "Ehliyet Değerlendirmesi Nedir? | Psikiyatri Sözlüğü",
      description: "Ehliyet değerlendirmesinin tanıdan çok sürüş güvenliği, dikkat, işlevsellik ve klinik durum üzerinden nasıl ele alındığını açıklar.",
      ogTitle: "Ehliyet Değerlendirmesi Nedir?",
      ogDescription: "Psikiyatride sürücülük yeterliliği değerlendirmesinin temel ilkelerini açıklar."
    },
    schema: {
      definedTermDescription: "Sürücülük için gerekli tıbbi, bilişsel ve ruhsal işlevlerin trafik güvenliği açısından değerlendirilmesi."
    }
  }),

  defineTerm({
    term: "Enkoprezis",
    slug: "enkoprezis",
    shortDefinition: "Enkoprezis, gelişimsel olarak bağırsak kontrolünün beklendiği yaşa ulaşmış bir çocukta dışkının tekrarlayan biçimde uygun olmayan yerlere yapılması veya kaçırılması durumunu tanımlayan klinik terimdir.",
    intro: "Enkoprezis kasıtlı yaramazlık olarak değerlendirilmemelidir. Kabızlık ve dışkı tutma davranışı sık görülen nedenler arasında olabilir; bunun yanında gelişimsel, davranışsal ve psikososyal etkenlerin de değerlendirilmesi gerekebilir.",
    sections: [
      section("Enkoprezis Nasıl Ortaya Çıkabilir?", "Uzun süren kabızlıkta bağırsakta biriken dışkı rektumu genişletebilir ve çocuğun dışkılama hissini fark etmesi zorlaşabilir. Daha yumuşak dışkının birikimin çevresinden sızması çocuğun farkında olmadan iç çamaşırına kaçırmasına neden olabilir."),
      section("Her Enkoprezis Kabızlığa mı Bağlıdır?", "Hayır. Kabızlık sık görülmekle birlikte her olgu aynı mekanizmayla açıklanmaz. Tıbbi öykü, dışkılama alışkanlıkları, beslenme, tuvalet eğitimi, gelişimsel özellikler ve gerektiğinde fiziksel değerlendirme birlikte ele alınır."),
      section("Çocuğu Suçlamak Neden Uygun Değildir?", "Utandırma, cezalandırma veya çocuğun bunu bilerek yaptığı varsayımı sorunu ağırlaştırabilir ve çocuğun yardım istemesini güçleştirebilir. Yaklaşımın sakin, destekleyici ve mahremiyete saygılı olması önemlidir."),
      section("Ne Zaman Değerlendirme Gerekir?", "Tekrarlayan dışkı kaçırma, belirgin kabızlık, ağrılı dışkılama veya günlük yaşamı etkileyen sorunlarda çocuk sağlığı değerlendirmesi önemlidir. Ruhsal ve davranışsal etkenler varsa bunlar tıbbi değerlendirmeyi dışlamadan birlikte ele alınabilir. Sorunun ne zamandır sürdüğü, tuvalet alışkanlıkları, dışkı tutma davranışı ve okul ya da sosyal yaşam üzerindeki etkisi değerlendirmeye önemli bilgiler sağlar.")
    ],
    relatedTerms: [
      { term: "Enürezis", slug: "enurezis" },
      { term: "Gelişimsel değerlendirme", slug: "gelisimsel-degerlendirme" },
      { term: "Ebeveyn tutumu", slug: "ebeveyn-tutumu" },
      { term: "Çocuk psikiyatrisi", slug: "cocuk-psikiyatrisi" }
    ],
    seo: {
      title: "Enkoprezis Nedir? | Psikiyatri Sözlüğü",
      description: "Enkoprezisin çocuklarda tekrarlayan dışkı kaçırma durumunu, kabızlıkla ilişkisini ve suçlayıcı olmayan değerlendirme yaklaşımını açıklar.",
      ogTitle: "Enkoprezis Nedir?",
      ogDescription: "Enkoprezisi gelişimsel, tıbbi ve psikososyal yönleriyle açıklar."
    },
    schema: {
      definedTermDescription: "Gelişimsel olarak bağırsak kontrolü beklenen çocukta tekrarlayan dışkı kaçırma veya uygunsuz yere dışkılama durumu."
    }
  })
];


const ninthBatchNewTerms = [
  defineTerm({
    term: "Dezorganize bağlanma",
    slug: "dezorganize-baglanma",
    shortDefinition: "Dezorganize bağlanma, yakınlık ve güven arayışının aynı zamanda korku, kaçınma veya çelişkili tepkilerle birlikte görülebildiği bağlanma örüntüsünü ifade eden gelişimsel bir kavramdır.",
    intro: "Kavram başlangıçta çocuk ve bakım veren arasındaki bağlanma davranışlarını açıklamak için geliştirilmiştir. Günlük dilde veya sosyal medyada kullanılan bağlanma etiketleri klinik değerlendirmeyle aynı anlama gelmez ve tek başına psikiyatrik tanı oluşturmaz.",
    sections: [
      section("Dezorganize Bağlanma Ne Anlama Gelir?", "Çocuk yakınlık ve korunma için bakım verene yönelirken aynı kişiyle ilişkili korku veya belirsizlik de yaşayabilir. Bu durumda yaklaşma, uzaklaşma, donakalma veya çelişkili davranışlar bir arada gözlenebilir. Örüntü tek bir davranıştan değil, ilişkinin bağlamı içinde değerlendirilen tekrarlayan tepkilerden anlaşılır."),
      section("Neden Ortaya Çıkabilir?", "Bakım verenin çocuğa zaman zaman güven veren, zaman zaman korkutucu veya öngörülemez biçimde yanıt vermesi gelişimsel açıdan önemli olabilir. Travma, aile stresi ve bakım koşulları da araştırılmıştır. Bununla birlikte belirli bir bağlanma örüntüsünden tek başına kesin neden-sonuç ilişkisi çıkarılmaz."),
      section("Yetişkin İlişkilerini Doğrudan Açıklar mı?", "Çocukluk bağlanma deneyimleri sonraki ilişkiler üzerinde etkili olabilir ancak yetişkin davranışları yalnız erken bağlanmayla belirlenmez. Kişilik özellikleri, yeni ilişkisel deneyimler, sosyal çevre ve yaşam olayları gelişim boyunca etkisini sürdürür."),
      section("Dezorganize Bağlanma Bir Psikiyatrik Tanı mıdır?", "Hayır. Dezorganize bağlanma bir bağlanma örüntüsünü tanımlayan gelişimsel kavramdır. Kişiye yalnız bu etiket üzerinden kişilik bozukluğu, travma bozukluğu veya başka bir psikiyatrik tanı atfetmek uygun değildir. Klinik değerlendirme belirtiler, işlevsellik ve yaşam öyküsünü birlikte ele alır.")
    ],
    relatedTerms: [
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Kaygılı bağlanma", slug: "kaygili-baglanma" },
      { term: "Kaçıngan bağlanma", slug: "kacingan-baglanma" },
      { term: "Travmatik bağlanma", slug: "travmatik-baglanma" }
    ],
    seo: {
      title: "Dezorganize Bağlanma Nedir? | Psikiyatri Sözlüğü",
      description: "Dezorganize bağlanmanın yakınlık ve korkunun birlikte görülebildiği gelişimsel örüntüyü nasıl tanımladığını açıklar.",
      ogTitle: "Dezorganize Bağlanma Nedir?",
      ogDescription: "Dezorganize bağlanmayı gelişimsel ve klinik sınırlarıyla açıklar."
    },
    schema: {
      definedTermDescription: "Yakınlık arayışı ile korku veya çelişkili tepkilerin birlikte görülebildiği gelişimsel bağlanma örüntüsü."
    }
  }),

  defineTerm({
    term: "Direnç",
    slug: "direnc",
    shortDefinition: "Direnç, psikoterapi veya değişim sürecinde kişinin zorlayıcı duygu, düşünce ya da deneyimlerle karşılaşmaktan kaçınmasına, bazı konuları ele almakta zorlanmasına veya değişime karşı ikircikli kalmasına verilen klinik addır.",
    intro: "Direnç kişinin isteksiz, sorunlu veya iş birliğine kapalı olduğu anlamına gelmez. Çoğu zaman değişimin oluşturduğu belirsizlik, kaygı, korunma ihtiyacı veya mevcut baş etme yollarının işleviyle ilişkili anlaşılması gereken bir süreçtir.",
    sections: [
      section("Direnç Psikoterapide Nasıl Görülebilir?", "Kişi belirli konuları sürekli değiştirebilir, önemli görüşmeleri erteleyebilir, yeni davranışları denemekte zorlanabilir veya bir yandan değişmek isterken diğer yandan mevcut örüntülerini koruyabilir. Bu davranışların anlamı kişinin yaşam öyküsü ve terapötik ilişki içinde değerlendirilir."),
      section("Direnç Bilinçli Bir Davranış mıdır?", "Her zaman değil. Bazı kaçınmalar kişi tarafından açıkça fark edilirken bazıları daha otomatik olabilir. Psikodinamik yaklaşımlar direnç kavramını bilinçdışı çatışmalar ve savunmalarla da ilişkilendirir. Başka terapi yaklaşımları ise kaçınma, motivasyon veya değişime hazır oluş üzerinden farklı biçimde açıklayabilir."),
      section("Direnç Terapinin Başarısız Olduğu Anlamına Gelir mi?", "Hayır. Zorlanma ve kararsızlık değişim süreçlerinin doğal parçaları olabilir. Direncin fark edilmesi hangi konuların daha güvenli, yavaş veya farklı bir yöntemle ele alınması gerektiğini anlamaya yardımcı olabilir."),
      section("Terapistin Rolü Nedir?", "Direnci suçlayıcı biçimde yorumlamak yerine kişinin neyi korumaya çalıştığını, hangi korku veya beklentilerin devreye girdiğini ve terapötik ilişkinin nasıl yaşandığını anlamak önemlidir. Hedef kişiyi zorlamak değil, değişimin önündeki engelleri iş birliği içinde keşfetmektir.")
    ],
    relatedTerms: [
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Psikodinamik terapi", slug: "psikodinamik-terapi" },
      { term: "Motivasyonel görüşme", slug: "motivasyonel-gorusme" },
      { term: "Tetikleyici", slug: "tetikleyici" }
    ],
    seo: {
      title: "Direnç Nedir? | Psikiyatri Sözlüğü",
      description: "Psikoterapide direnç kavramının değişime yönelik zorlanma, kaçınma ve ikirciklilikle ilişkisini açıklar.",
      ogTitle: "Direnç Nedir?",
      ogDescription: "Psikoterapide direnci suçlayıcı olmayan klinik bir yaklaşımla açıklar."
    },
    schema: {
      definedTermDescription: "Değişim veya farkındalık sürecinde ortaya çıkan bilinçli ya da otomatik psikolojik zorlanma."
    }
  }),

  defineTerm({
    term: "DSM",
    slug: "dsm",
    shortDefinition: "DSM, Amerikan Psikiyatri Birliği tarafından yayımlanan ve ruhsal bozuklukların tanımlanması ile sınıflandırılmasında ortak bir dil sağlamayı amaçlayan tanısal sınıflandırma sistemidir.",
    intro: "DSM bir kişinin bilgisayardaki kontrol listesine göre otomatik biçimde tanı almasını sağlayan sistem değildir. Tanı ölçütleri klinik görüşme, belirtilerin süresi, işlevsellik, gelişimsel bağlam ve ayırıcı tanıyla birlikte değerlendirilir.",
    sections: [
      section("DSM Ne Amaçla Kullanılır?", "Ruhsal bozuklukların tanımlanmasında klinisyenler ve araştırmacılar arasında ortak terminoloji oluşturmayı amaçlar. Belirti kümeleri, süre ölçütleri ve bazı dışlama koşulları tanımlar. Böylece araştırma sonuçlarının ve klinik iletişimin daha karşılaştırılabilir hale gelmesine katkıda bulunur."),
      section("DSM Bir Tanı Testi midir?", "Hayır. DSM'de yer alan ölçütlerin bazılarını kişinin kendisinde görmesi tek başına tanı anlamına gelmez. Belirtilerin şiddeti, süresi, işlevsellik üzerindeki etkisi, başka psikiyatrik veya tıbbi açıklamalar ve kişinin gelişimsel özellikleri klinik değerlendirmede birlikte ele alınır."),
      section("DSM ile ICD Arasında Ne Fark Vardır?", "DSM Amerikan Psikiyatri Birliği tarafından yayımlanır. ICD ise Dünya Sağlık Örgütü tarafından geliştirilen ve psikiyatrik bozuklukların yanında bütün hastalıkları kapsayan uluslararası sınıflandırmadır. İki sistem arasında önemli benzerlikler olduğu gibi terminoloji ve ölçütlerde farklılıklar bulunabilir."),
      section("Tanılar Değişebilir mi?", "Psikiyatrik sınıflandırmalar bilimsel bilgi geliştikçe gözden geçirilir. Tanı kategorileri hastalıkların bütün biyolojik ve psikolojik gerçekliğini eksiksiz temsil eden değişmez yapılar değildir. DSM klinik düşünmeyi destekleyen bir sınıflandırmadır; kişinin bireysel öyküsünün ve klinik formülasyonun yerine geçmez.")
    ],
    relatedTerms: [
      { term: "Ayırıcı tanı", slug: "ayirici-tani" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "Komorbidite", slug: "komorbidite" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ],
    seo: {
      title: "DSM Nedir? | Psikiyatri Sözlüğü",
      description: "DSM'nin ruhsal bozuklukların sınıflandırılmasındaki rolünü, tanı testi olmadığını ve klinik değerlendirmeyle ilişkisini açıklar.",
      ogTitle: "DSM Nedir?",
      ogDescription: "DSM tanı sınıflandırmasının amacı ve sınırlarını açıklar."
    },
    schema: {
      definedTermDescription: "Amerikan Psikiyatri Birliği tarafından yayımlanan ruhsal bozuklukların tanısal sınıflandırma sistemi."
    }
  }),

  defineTerm({
    term: "Duygudurum düzenleyici",
    slug: "duygudurum-duzenleyici",
    shortDefinition: "Duygudurum düzenleyici, özellikle bipolar bozuklukta mani, hipomani veya depresif dönemlerin tedavisi ya da tekrarının önlenmesi amacıyla kullanılabilen farklı farmakolojik özelliklere sahip ilaçları tanımlayan genel klinik terimdir.",
    intro: "Duygudurum düzenleyiciler tek bir ilaç sınıfı değildir. Lityum, bazı antiepileptik ilaçlar ve belirli antipsikotikler klinik bağlama göre duygudurum düzenleyici özellikleri nedeniyle kullanılabilir.",
    sections: [
      section("Duygudurum Düzenleyici Ne Amaçla Kullanılır?", "Bipolar bozuklukta duygudurum dönemlerinin şiddetini azaltmak, yeni dönemlerin ortaya çıkma riskini düşürmek veya belirli akut dönemleri tedavi etmek amacıyla kullanılabilir. Hangi ilacın mani, depresyon veya koruyucu tedavide daha uygun olduğu birbirinden farklı olabilir."),
      section("Her Duygudurum Düzenleyici Aynı mıdır?", "Hayır. İlaçların etki mekanizmaları, hangi duygudurum dönemlerinde daha güçlü kanıta sahip oldukları ve yan etki profilleri farklıdır. Bu nedenle genel sınıf adı kullanılsa da ilaç seçimi kişiye özgü klinik özelliklere dayanır."),
      section("İzlem Neden Önemlidir?", "Bazı ilaçlarda metabolik etkiler, organ işlevleri, gebelikle ilişkili riskler, ilaç etkileşimleri veya kan düzeyi izlemi gibi konular önemli olabilir. Gereken kontroller kullanılan ilaca ve kişinin tıbbi özelliklerine göre değişir."),
      section("İlaç Kendi Kendine Değiştirilebilir mi?", "Hayır. Bipolar bozuklukta tedavinin hızlı değiştirilmesi veya ilacın kontrolsüz bırakılması belirtilerin yeniden ortaya çıkmasıyla ilişkili olabilir. Başlama, değiştirme veya bırakma kararları tanı, önceki dönemler, yan etkiler ve tedavi yanıtı birlikte değerlendirilerek hekim tarafından planlanmalıdır.")
    ],
    relatedTerms: [
      { term: "Bipolar I bozukluk", slug: "bipolar-1-bozukluk" },
      { term: "Bipolar II bozukluk", slug: "bipolar-2-bozukluk" },
      { term: "Mani", slug: "mani" },
      { term: "Hipomani", slug: "hipomani" }
    ],
    seo: {
      title: "Duygudurum Düzenleyici Nedir? | Psikiyatri Sözlüğü",
      description: "Duygudurum düzenleyici ilaçların bipolar bozukluktaki yerini, farklılıklarını ve klinik izlem gereksinimini açıklar.",
      ogTitle: "Duygudurum Düzenleyici Nedir?",
      ogDescription: "Duygudurum düzenleyici kavramını güvenli ilaç bilgisi çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Bipolar bozuklukta duygudurum dönemlerini tedavi etmek veya tekrarını azaltmak amacıyla kullanılan ilaçlar için genel terim."
    }
  }),

  defineTerm({
    term: "Entelektüalizasyon",
    slug: "entelektualizasyon",
    shortDefinition: "Entelektüalizasyon, duygusal açıdan zorlayıcı bir deneyimin hissettirdiği duygular yerine konuyu soyut, teknik, mantıksal veya aşırı analitik biçimde ele alarak psikolojik mesafe oluşturmayı sağlayan savunma mekanizmasıdır.",
    intro: "Bir konuyu düşünerek anlamaya çalışmak tek başına entelektüalizasyon değildir. Kavram, düşünmenin duygusal deneyimle teması azaltan bir korunma yolu haline geldiği durumları anlatır.",
    sections: [
      section("Entelektüalizasyon Nasıl Görülebilir?", "Kişi kayıp, hastalık, ilişki çatışması veya başka zorlayıcı bir olay hakkında ayrıntılı bilgiler verebilir ancak olayın kendisinde oluşturduğu üzüntü, korku veya öfkeyle temas etmekte zorlanabilir. Konuyu sürekli açıklamak duyguyu yaşamaktan daha güvenli hissedilebilir."),
      section("Bilgi Sahibi Olmakla Aynı Şey midir?", "Hayır. Bilgi edinmek ve sorunları mantıksal biçimde değerlendirmek çoğu zaman yararlıdır. Entelektüalizasyon terimi, bilişsel açıklamanın kişinin duygusal deneyimini sürekli olarak uzak tutmak için kullanıldığı örüntüyü tanımlar."),
      section("Neden Savunma Mekanizması Denir?", "Savunma mekanizmaları yoğun kaygı veya çatışma karşısında psikolojik dengeyi korumaya yardımcı olabilir. Entelektüalizasyon da kişinin zor bir deneyime dayanabilmesini sağlayabilir. Bu nedenle her durumda olumsuz veya patolojik kabul edilmez."),
      section("Ne Zaman Sorun Oluşturabilir?", "Kişi sürekli düşünsel açıklamalara yönelip duygularını fark etmekte, paylaşmakta veya ilişkiler içinde işlemekte zorlandığında psikolojik esneklik sınırlanabilir. Psikoterapide amaç mantıksal düşünmeyi bırakmak değil, düşüncelerle duygusal deneyim arasında daha bütüncül bir bağlantı kurabilmektir. Kişinin hem ne düşündüğünü hem de bunun kendisinde hangi duyguları uyandırdığını fark edebilmesi bu bütünleşmeyi destekleyebilir.")
    ],
    relatedTerms: [
      { term: "Bastırma", slug: "bastirma" },
      { term: "İnkar", slug: "inkar" },
      { term: "Mentalizasyon", slug: "mentalizasyon" },
      { term: "Duygu düzenleme", slug: "duygu-duzenleme" }
    ],
    seo: {
      title: "Entelektüalizasyon Nedir? | Psikiyatri Sözlüğü",
      description: "Entelektüalizasyon savunmasının zorlayıcı duyguları aşırı analitik ve düşünsel biçimde ele alma yoluyla nasıl mesafe oluşturduğunu açıklar.",
      ogTitle: "Entelektüalizasyon Nedir?",
      ogDescription: "Entelektüalizasyon savunma mekanizmasını örnekleri ve sınırlarıyla açıklar."
    },
    schema: {
      definedTermDescription: "Zorlayıcı duygularla temas yerine konuyu aşırı analitik ve düşünsel biçimde ele almaya dayalı savunma mekanizması."
    }
  }),

  defineTerm({
    term: "Enürezis",
    slug: "enurezis",
    shortDefinition: "Enürezis, gelişimsel olarak mesane kontrolünün beklendiği yaşa ulaşmış bir çocukta idrar kaçırmanın tekrarlayan biçimde ortaya çıkmasını tanımlayan klinik terimdir.",
    intro: "Enürezis özellikle gece uykusunda görülebilir ve çocuğun isteyerek yaptığı bir davranış değildir. Mesane gelişimi, uyku, ailesel yatkınlık, idrar üretiminin gece düzenlenmesi ve bazı tıbbi veya psikososyal etkenler rol oynayabilir.",
    sections: [
      section("Enürezis Hangi Şekillerde Görülebilir?", "En sık gece uykusunda yatağın ıslanması biçiminde görülür. Bazı çocuklarda gündüz idrar kaçırma veya sıkışma yakınmaları da bulunabilir. Daha önce uzun süre kuru kaldıktan sonra yeniden başlayan durumlarla çocukluğun erken döneminden beri süren durumlar farklı değerlendirme gerektirebilir."),
      section("Çocuk Bunu Bilerek mi Yapar?", "Genellikle hayır. İdrar kaçırmayı tembellik, dikkatsizlik veya itaatsizlik olarak yorumlamak çocuğun utanmasına ve özgüveninin etkilenmesine neden olabilir. Suçlama veya cezalandırma yerine destekleyici ve mahremiyete saygılı yaklaşım önemlidir."),
      section("Tıbbi Değerlendirme Neden Gerekebilir?", "İdrar yolu yakınmaları, aşırı susama, kabızlık, horlama, gündüz kaçırma veya daha önce düzelmişken yeniden başlayan idrar kaçırma gibi durumlarda tıbbi nedenlerin değerlendirilmesi gerekebilir. Öykü ve fiziksel değerlendirme hangi incelemelerin gerekli olduğunu belirler."),
      section("Ruhsal Etkenlerle İlişkisi Var mıdır?", "Stres veya önemli yaşam değişiklikleri bazı çocuklarda belirtilerin başlaması veya artmasıyla ilişkili olabilir ancak enürezis yalnız psikolojik nedenlere bağlanmamalıdır. Çocuğun gelişimsel, tıbbi ve psikososyal özellikleri birlikte değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Enkoprezis", slug: "enkoprezis" },
      { term: "Ebeveyn tutumu", slug: "ebeveyn-tutumu" },
      { term: "Akran ilişkileri", slug: "akran-iliskileri" },
      { term: "Sosyal destek", slug: "sosyal-destek" }
    ],
    seo: {
      title: "Enürezis Nedir? | Psikiyatri Sözlüğü",
      description: "Enürezisin çocuklarda tekrarlayan idrar kaçırma durumunu, olası etkenleri ve suçlayıcı olmayan değerlendirme yaklaşımını açıklar.",
      ogTitle: "Enürezis Nedir?",
      ogDescription: "Enürezisi gelişimsel, tıbbi ve psikososyal yönleriyle açıklar."
    },
    schema: {
      definedTermDescription: "Mesane kontrolünün beklendiği gelişim dönemindeki çocukta tekrarlayan idrar kaçırma durumu."
    }
  }),

  defineTerm({
    term: "Epizod",
    slug: "epizod",
    shortDefinition: "Epizod, belirli bir hastalığa ait belirtilerin tanımlanabilir bir zaman aralığında birlikte ortaya çıktığı ve başlangıç, seyir ve sonlanma özellikleri bulunan klinik dönemi ifade eder.",
    intro: "Psikiyatride depresif epizod, manik epizod veya başka dönemsel tablolar gibi kullanımlar vardır. Epizod kavramı tek bir belirtiyi değil, belirli süre ve klinik özelliklerle birlikte ortaya çıkan belirti örüntüsünü anlatır.",
    sections: [
      section("Epizod Ne Anlama Gelir?", "Bir hastalıkta belirtilerin belirli bir dönemde tanısal açıdan anlamlı biçimde ortaya çıkması epizod olarak tanımlanabilir. Epizodun süresi ve hangi belirtileri içermesi gerektiği söz konusu bozukluğun tanı ölçütlerine göre değişebilir."),
      section("Epizod ile Atak Aynı Şey midir?", "Terimler bazı günlük kullanımlarda birbirinin yerine geçebilir ancak klinik olarak tamamen aynı olmak zorunda değildir. Atak daha genel biçimde belirtilerin başlaması veya belirginleşmesini anlatabilirken epizod çoğu zaman tanımlanmış bir hastalık dönemini ifade eder."),
      section("Bir Kişide Birden Fazla Epizod Olabilir mi?", "Evet. Dönemsel seyreden bozukluklarda kişi yaşamı boyunca birden fazla epizod yaşayabilir. İki dönem arasındaki belirtilerin düzeyi, remisyon süresi ve işlevsellik hastalığın uzun dönemli seyrini değerlendirmede önemlidir."),
      section("Epizodların Kaydı Neden Önemlidir?", "Başlangıç zamanı, süresi, belirtilerin şiddeti, işlevsellik etkisi ve dönemler arasındaki iyilik hali klinik değerlendirmeye önemli bilgiler sağlar. Bu bilgiler prognoz, nüks riski ve uzun dönem tedavi planının şekillendirilmesinde kullanılabilir.")
    ],
    relatedTerms: [
      { term: "Atak", slug: "atak" },
      { term: "Remisyon", slug: "remisyon" },
      { term: "Nüks", slug: "nuks" },
      { term: "Bipolar I bozukluk", slug: "bipolar-1-bozukluk" }
    ],
    seo: {
      title: "Epizod Nedir? | Psikiyatri Sözlüğü",
      description: "Epizod kavramının psikiyatride belirli süre ve belirtilerle tanımlanan hastalık dönemini nasıl ifade ettiğini açıklar.",
      ogTitle: "Epizod Nedir?",
      ogDescription: "Epizod teriminin atak, remisyon ve hastalık seyriyle ilişkisini açıklar."
    },
    schema: {
      definedTermDescription: "Belirli bir hastalığa ait belirtilerin tanımlanabilir zaman aralığında birlikte görüldüğü klinik dönem."
    }
  }),

  defineTerm({
    term: "Ergen depresyonu",
    slug: "ergen-depresyonu",
    shortDefinition: "Ergen depresyonu, ergenlik döneminde çökkün duygudurum veya belirgin irritabilite, ilgi kaybı, enerji azalması, uyku ya da iştah değişiklikleri ve günlük işlevsellikte bozulmayla ortaya çıkabilen depresif tablodur.",
    intro: "Ergenlerde depresyon her zaman yalnız üzüntü biçiminde görülmez. Öfke, tahammülsüzlük, okul başarısında düşme, sosyal geri çekilme veya daha önce önem verilen etkinliklere ilgide azalma da dikkat çekebilir.",
    sections: [
      section("Ergenlerde Depresyon Nasıl Görülebilir?", "Süreğen çökkünlük veya irritabiliteye enerji kaybı, motivasyon azalması, uyku düzeninde değişiklik, konsantrasyon güçlüğü ve değersizlik düşünceleri eşlik edebilir. Belirtiler okul, arkadaşlıklar, aile ilişkileri ve öz bakım üzerinde etkili olabilir."),
      section("Normal Ergenlik Dalgalanmalarından Nasıl Ayrılır?", "Ergenlikte duygu değişimleri görülebilir. Depresyonda ise belirtiler daha kalıcıdır, kişinin farklı yaşam alanlarını etkiler ve günlük işlevsellikte belirgin değişiklik yaratabilir. Tek bir kötü gün veya dönemsel moral bozukluğu depresyon tanısı anlamına gelmez."),
      section("Risk İşaretleri Neden Önemlidir?", "Umutsuzluk, yaşamın anlamsız olduğuna ilişkin düşünceler, kendine zarar verme davranışı veya yaşamına son verme düşüncelerinin ortaya çıkması ciddiye alınmalıdır. Böyle bir durumda ergenin güvenliği değerlendirilir ve gecikmeden profesyonel yardım alınması gerekir."),
      section("Değerlendirmede Aile ve Çevrenin Rolü Nedir?", "Ergenin kendi anlatımı temel olmakla birlikte aile, okul veya yakın çevreden alınan bilgiler işlevsellikteki değişimleri anlamaya yardımcı olabilir. Gizlilik ve ergenin mahremiyeti korunurken güvenlikle ilgili önemli bilgiler ayrıca ele alınır.")
    ],
    relatedTerms: [
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" },
      { term: "Çökkün duygudurum", slug: "cokkun-duygudurum" },
      { term: "Kendine zarar verme", slug: "kendine-zarar-verme" },
      { term: "Sosyal destek", slug: "sosyal-destek" }
    ],
    seo: {
      title: "Ergen Depresyonu Nedir? | Psikiyatri Sözlüğü",
      description: "Ergen depresyonunun irritabilite, ilgi kaybı ve işlevsellik değişiklikleriyle nasıl görülebileceğini ve risk işaretlerini açıklar.",
      ogTitle: "Ergen Depresyonu Nedir?",
      ogDescription: "Ergenlerde depresyon belirtilerini ve değerlendirmede dikkat edilen noktaları açıklar."
    },
    schema: {
      definedTermDescription: "Ergenlik döneminde çökkünlük veya irritabilite, ilgi kaybı ve işlevsellik azalmasıyla ortaya çıkabilen depresif tablo."
    }
  }),

  defineTerm({
    term: "Ergenlik",
    slug: "ergenlik",
    shortDefinition: "Ergenlik, çocukluktan yetişkinliğe geçişte bedensel olgunlaşmanın yanı sıra kimlik, özerklik, ilişkiler, duygusal düzenleme ve sosyal roller açısından hızlı değişimlerin yaşandığı gelişim dönemidir.",
    intro: "Ergenlik yalnız hormonal değişikliklerden ibaret değildir. Beyin gelişimi, aile ilişkileri, akran çevresi, okul yaşamı, kültürel beklentiler ve bireysel deneyimler bu dönemin nasıl yaşandığını birlikte etkiler.",
    sections: [
      section("Ergenlikte Hangi Değişimler Yaşanır?", "Bedensel büyüme ve cinsel olgunlaşmaya bilişsel, duygusal ve sosyal değişimler eşlik eder. Soyut düşünme gelişir, gelecek planları önem kazanır ve kişi kendisini ailesinden daha bağımsız tanımlamaya başlayabilir."),
      section("Duygu Dalgalanmaları Normal midir?", "Bu dönemde duyguların yoğun yaşanması ve zaman zaman hızlı değişmesi görülebilir. Ancak uzun süren çökkünlük, belirgin kaygı, ciddi davranış değişiklikleri veya okul ve sosyal işlevsellikte bozulma yalnız ergenliğe bağlanmamalıdır."),
      section("Akran İlişkileri Neden Önem Kazanır?", "Akranlar aidiyet, kimlik gelişimi ve sosyal öğrenme açısından daha belirgin rol üstlenebilir. Arkadaşlıkların güçlenmesi aile bağlarının önemini kaybettiği anlamına gelmez; ergen hem özerklik hem de güvenilir yetişkin desteğine ihtiyaç duyabilir."),
      section("Aileler Ergene Nasıl Yaklaşabilir?", "Yaşa uygun özerklik tanımak, sınırları açık biçimde konuşmak ve mahremiyete saygı göstermek önemlidir. Ergenin davranışlarını yalnız disiplin açısından değil, gelişimsel gereksinimleri, duyguları ve içinde bulunduğu sosyal bağlamla birlikte anlamaya çalışmak iletişimi destekleyebilir. Açık iletişim ile güvenli sınırlar arasında denge kurulması, ergenin hem bağımsızlaşmasını hem de gerektiğinde destek isteyebilmesini kolaylaştırabilir.")
    ],
    relatedTerms: [
      { term: "Akran ilişkileri", slug: "akran-iliskileri" },
      { term: "Ebeveyn tutumu", slug: "ebeveyn-tutumu" },
      { term: "Dürtüsellik", slug: "durtusellik" },
      { term: "Ergen anksiyetesi", slug: "ergen-anksiyetesi" }
    ],
    seo: {
      title: "Ergenlik Nedir? | Psikiyatri Sözlüğü",
      description: "Ergenliği bedensel, bilişsel, duygusal ve sosyal değişimlerin birlikte yaşandığı gelişim dönemi olarak açıklar.",
      ogTitle: "Ergenlik Nedir?",
      ogDescription: "Ergenlik dönemindeki temel gelişimsel değişimleri ve aile ilişkilerini açıklar."
    },
    schema: {
      definedTermDescription: "Çocukluktan yetişkinliğe geçişte bedensel, bilişsel, duygusal ve sosyal değişimlerin yoğunlaştığı gelişim dönemi."
    }
  }),

  defineTerm({
    term: "Etkileşim",
    slug: "etkilesim",
    shortDefinition: "Etkileşim, bir ilacın etkisinin başka bir ilaç, madde, bitkisel ürün, besin veya kişinin kullandığı diğer tedaviler nedeniyle güçlenmesi, azalması ya da yan etki riskinin değişmesi durumunu ifade eder.",
    intro: "İlaç etkileşimi her zaman ciddi bir sorun oluşacağı anlamına gelmez. Bazı kombinasyonlar güvenle kullanılabilirken bazıları yakın izlem, doz ayarlaması veya farklı bir seçeneğin değerlendirilmesini gerektirebilir.",
    sections: [
      section("İlaç Etkileşimi Nasıl Oluşabilir?", "Bir ilaç başka bir ilacın emilimini, metabolizmasını veya vücuttan atılımını değiştirebilir. Başka durumlarda iki ilacın benzer etkileri birleşerek sedasyon, kanama, ritim değişikliği veya başka yan etkilerin olasılığını artırabilir."),
      section("Sadece Reçeteli İlaçlar mı Etkileşir?", "Hayır. Reçetesiz kullanılan ilaçlar, bazı bitkisel ürünler, takviyeler, alkol ve belirli besinler de ilaçlarla etkileşebilir. Bu nedenle klinik değerlendirmede kişinin kullandığı bütün ürünleri belirtmesi önemlidir."),
      section("Etkileşim Varsa İlaç Kesilmeli midir?", "Her zaman değil. Etkileşimin klinik önemi kullanılan ilaçlara, dozlara, kişinin sağlık durumuna ve başka risk faktörlerine göre değişir. Bir etkileşim uyarısı tedavinin otomatik olarak bırakılması gerektiği anlamına gelmez."),
      section("Güvenli Kullanım İçin Ne Yapılır?", "Hekim ve eczacının kullanılan tüm ilaç ve ürünlerden haberdar olması değerlendirmeyi kolaylaştırır. Yeni bir ilaç eklendiğinde veya beklenmeyen bir belirti ortaya çıktığında olası etkileşimler gözden geçirilebilir. Reçeteli ilaçlarda değişiklikler profesyonel değerlendirme olmadan yapılmamalıdır.")
    ],
    relatedTerms: [
      { term: "Doz titrasyonu", slug: "doz-titrasyonu" },
      { term: "Benzodiazepin", slug: "benzodiazepin" },
      { term: "Antidepresan", slug: "antidepresan" },
      { term: "Antipsikotik", slug: "antipsikotik" }
    ],
    seo: {
      title: "İlaç Etkileşimi Nedir? | Psikiyatri Sözlüğü",
      description: "İlaç etkileşiminin başka ilaç, madde, bitkisel ürün veya besinlerle ilaç etkisini nasıl değiştirebildiğini açıklar.",
      ogTitle: "İlaç Etkileşimi Nedir?",
      ogDescription: "İlaç etkileşimi kavramını güvenli ilaç kullanımı çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Bir ilaç veya maddenin başka bir tedavinin etkisini ya da yan etki olasılığını değiştirmesi."
    }
  })
];


const tenthBatchNewTerms = [
  defineTerm({
    term: "Farmakodinamik",
    slug: "farmakodinamik",
    shortDefinition: "Farmakodinamik, bir ilacın vücutta hangi hedeflere bağlandığını, bu hedefler üzerinde nasıl etkiler oluşturduğunu ve doz ile biyolojik yanıt arasındaki ilişkiyi inceleyen farmakoloji alanıdır.",
    intro: "Psikiyatride farmakodinamik bilgi, bir ilacın nörotransmitter sistemleri veya reseptörler üzerindeki etkilerini anlamaya yardımcı olur. Ancak bir etki mekanizmasını bilmek, belirli bir kişide tedavi yanıtının veya yan etkinin kesin olarak öngörülebileceği anlamına gelmez.",
    sections: [
      section("Farmakodinamik Ne İnceler?", "Bir ilacın reseptör, taşıyıcı protein, enzim veya iyon kanalı gibi biyolojik hedeflerle nasıl etkileştiğini inceler. Bu etkileşimlerin hücresel sinyaller, nörotransmisyon ve sonuçta gözlenen klinik etkilerle ilişkisi araştırılır. Aynı ilaç birden fazla biyolojik hedef üzerinde etkili olabilir."),
      section("Reseptör Etkisi Neden Önemlidir?", "Bir ilacın belirli reseptörleri uyarması, engellemesi veya başka biçimde düzenlemesi hem hedeflenen etkilerle hem de bazı yan etkilerle ilişkili olabilir. Bununla birlikte reseptör profili tek başına ilacın bütün klinik özelliklerini açıklamaz; beyin ağları ve bireysel biyolojik farklılıklar da önemlidir."),
      section("Doz ile Etki Arasında Nasıl Bir İlişki Vardır?", "İlacın dozu arttıkça biyolojik etkinin her zaman aynı oranda artması beklenmez. Bazı etkiler belirli bir düzeyden sonra plato gösterebilir veya farklı hedeflerin devreye girmesiyle yan etki olasılığı değişebilir. Klinik doz kararları yalnız farmakodinamik bilgiye göre verilmez."),
      section("Farmakokinetikten Farkı Nedir?", "Farmakodinamik ilacın vücuda ne yaptığını açıklarken farmakokinetik vücudun ilaca ne yaptığını inceler. Emilim, dağılım, metabolizma ve atılım farmakokinetiğin; reseptör etkileri ve biyolojik yanıt ise farmakodinamiğin temel alanlarıdır. Klinik uygulamada iki süreç birlikte değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Farmakokinetik", slug: "farmakokinetik" },
      { term: "Antidepresan", slug: "antidepresan" },
      { term: "Antipsikotik", slug: "antipsikotik" },
      { term: "Etkileşim", slug: "etkilesim" }
    ],
    seo: {
      title: "Farmakodinamik Nedir? | Psikiyatri Sözlüğü",
      description: "Farmakodinamiğin ilaçların biyolojik hedefler üzerindeki etkilerini, doz-yanıt ilişkisini ve farmakokinetikten farkını açıklar.",
      ogTitle: "Farmakodinamik Nedir?",
      ogDescription: "İlaçların vücutta nasıl etki oluşturduğunu açıklayan farmakodinamik kavramını ele alır."
    },
    schema: {
      definedTermDescription: "İlaçların biyolojik hedefler üzerindeki etkilerini ve doz ile yanıt arasındaki ilişkiyi inceleyen farmakoloji alanı."
    }
  }),

  defineTerm({
    term: "Farmakokinetik",
    slug: "farmakokinetik",
    shortDefinition: "Farmakokinetik, bir ilacın vücuda alındıktan sonra emilimini, dokulara dağılımını, metabolizmasını ve vücuttan atılmasını inceleyen farmakoloji alanıdır.",
    intro: "Bir ilacın etkili olabilmesi yalnız hedef reseptöre bağlanmasına değil, yeterli miktarda uygun bölgeye ulaşmasına ve vücuttaki düzeyinin zaman içinde nasıl değiştiğine de bağlıdır. Bu süreç kişiden kişiye farklılık gösterebilir.",
    sections: [
      section("Farmakokinetiğin Temel Aşamaları Nelerdir?", "Farmakokinetik sıklıkla emilim, dağılım, metabolizma ve atılım başlıklarıyla açıklanır. İlaç önce uygulandığı bölgeden dolaşıma geçer, farklı dokulara dağılır, çeşitli enzimler aracılığıyla değişime uğrayabilir ve sonunda vücuttan uzaklaştırılır."),
      section("Yarı Ömür Ne Anlama Gelir?", "Yarı ömür, bir ilacın kandaki veya vücuttaki miktarının belirli koşullarda yaklaşık yarıya düşmesi için geçen süreyi ifade eder. Bu özellik ilacın vücutta ne kadar süre kaldığını anlamaya yardımcı olabilir ancak tedavi aralığı yalnız yarı ömür üzerinden belirlenmez."),
      section("Kişiler Arasında Neden Farklılık Olabilir?", "Yaş, karaciğer ve böbrek işlevleri, genetik özellikler, başka ilaçların kullanımı ve bazı hastalıklar ilacın metabolizma veya atılım hızını etkileyebilir. Bu nedenle aynı ilacın aynı miktarı farklı kişilerde aynı kan düzeyi veya aynı klinik etkiyi oluşturmayabilir."),
      section("Farmakodinamikten Farkı Nedir?", "Farmakokinetik vücudun ilacı nasıl işlediğini; farmakodinamik ise ilacın biyolojik hedefler üzerinde nasıl etki oluşturduğunu inceler. Bir ilacın klinik etkisini değerlendirirken bu iki alan birbirinden tamamen ayrı düşünülemez ve birlikte ele alınır.")
    ],
    relatedTerms: [
      { term: "Farmakodinamik", slug: "farmakodinamik" },
      { term: "Etkileşim", slug: "etkilesim" },
      { term: "Doz titrasyonu", slug: "doz-titrasyonu" },
      { term: "Antidepresan", slug: "antidepresan" }
    ],
    seo: {
      title: "Farmakokinetik Nedir? | Psikiyatri Sözlüğü",
      description: "Farmakokinetiğin emilim, dağılım, metabolizma ve atılım süreçlerini ve farmakodinamikten farkını açıklar.",
      ogTitle: "Farmakokinetik Nedir?",
      ogDescription: "Bir ilacın vücutta nasıl işlendiğini açıklayan farmakokinetik kavramını ele alır."
    },
    schema: {
      definedTermDescription: "İlacın emilim, dağılım, metabolizma ve vücuttan atılım süreçlerini inceleyen farmakoloji alanı."
    }
  }),

  defineTerm({
    term: "Formülasyon",
    slug: "formulasyon",
    shortDefinition: "Formülasyon, kişinin belirtilerini yaşam öyküsü, yatkınlıkları, tetikleyici olaylar, ilişkiler, baş etme biçimleri ve mevcut yaşam koşullarıyla birlikte anlamlandırmaya yönelik bireyselleştirilmiş klinik açıklamadır.",
    intro: "Psikiyatride formülasyon yalnız tanı adını tekrar etmek değildir. Aynı tanıya sahip iki kişinin belirtilerinin neden ortaya çıktığını, neden sürdüğünü ve hangi koruyucu kaynaklara sahip olduğunu farklı biçimlerde açıklamak gerekebilir.",
    sections: [
      section("Klinik Formülasyon Ne Amaçla Yapılır?", "Belirtilerin kişinin yaşamının bütünü içinde nasıl geliştiğini anlamaya yardımcı olur. Biyolojik yatkınlıklar, erken yaşam deneyimleri, mevcut stresler, ilişkiler ve kişinin güçlü yönleri birlikte ele alınabilir. Böylece yalnız belirtilerin ne olduğu değil, hangi bağlam içinde anlam kazandığı da değerlendirilir."),
      section("Tanı ile Formülasyon Aynı Şey midir?", "Hayır. Tanı belirli ölçütlere dayalı ortak bir klinik sınıflandırma sağlar. Formülasyon ise kişinin bireysel öyküsünü ve belirtiler arasındaki olası bağlantıları açıklamaya çalışır. Tanı benzer olsa bile iki kişinin formülasyonu önemli ölçüde farklı olabilir."),
      section("Hangi Etkenler Ele Alınabilir?", "Yatkınlık oluşturan özellikler, yakın zamanda ortaya çıkan tetikleyiciler, belirtileri sürdüren davranış veya düşünce örüntüleri ve iyileşmeyi destekleyen koruyucu faktörler değerlendirilebilir. Bu çerçeve kesin bir neden-sonuç şeması olarak değil, eldeki bilgilerle oluşturulan çalışma modeli olarak kullanılır."),
      section("Formülasyon Zamanla Değişebilir mi?", "Evet. Yeni bilgiler ortaya çıktığında, kişinin yaşam koşulları değiştiğinde veya klinik süreç farklılaştığında formülasyon yeniden gözden geçirilebilir. İyi bir formülasyon değişmez bir etiket değil, klinik görüşmeyi ve tedavi hedeflerinin anlaşılmasını destekleyen dinamik bir açıklamadır.")
    ],
    relatedTerms: [
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "Ayırıcı tanı", slug: "ayirici-tani" },
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Psikososyal destek", slug: "psikososyal-destek" }
    ],
    seo: {
      title: "Formülasyon Nedir? | Psikiyatri Sözlüğü",
      description: "Klinik formülasyonun belirtileri yaşam öyküsü, tetikleyiciler, sürdürücü ve koruyucu etkenlerle birlikte nasıl anlamlandırdığını açıklar.",
      ogTitle: "Klinik Formülasyon Nedir?",
      ogDescription: "Psikiyatride formülasyon kavramını tanıdan farkı ve bireysel değerlendirmedeki yeriyle açıklar."
    },
    schema: {
      definedTermDescription: "Belirtilerin kişinin yaşam öyküsü ve biyopsikososyal bağlamıyla birlikte anlamlandırılmasına yönelik klinik açıklama."
    }
  }),

  defineTerm({
    term: "GABA",
    slug: "gaba",
    shortDefinition: "GABA, merkezi sinir sistemindeki temel inhibitör nörotransmitterlerden biridir ve sinir hücrelerinin aşırı uyarılmasını sınırlayan düzenleyici mekanizmalarda önemli rol oynar.",
    intro: "GABA sistemi uyku, kaygı, kas tonusu ve çeşitli beyin devrelerinin düzenlenmesiyle ilişkilidir. Ancak psikiyatrik belirtileri yalnız tek bir nörotransmitter düzeyine indirgemek güncel nörobiyolojik yaklaşımı aşırı basitleştirir.",
    sections: [
      section("GABA Beyinde Ne Yapar?", "Sinir hücreleri arasındaki iletişimde bazı sinyaller uyarıcı, bazıları ise baskılayıcı yönde çalışır. GABA birçok beyin bölgesinde hücrenin uyarılabilirliğini azaltarak sinir ağlarının dengeli çalışmasına katkıda bulunur. Bu işlev beynin yalnız sakinleşmesi şeklinde düşünülmemelidir."),
      section("GABA Hangi Süreçlerle İlişkilidir?", "Uyku-uyanıklık düzeni, kaygı devreleri, motor kontrol ve nöbet eşiği gibi birçok süreçte GABA aracılı sinyalleşmenin rolü vardır. GABA etkileri farklı beyin bölgelerinde ve sinir ağlarında aynı biçimde ortaya çıkmaz. Bu ilişkiler tek bir GABA düzeyi ölçümünün kişinin ruhsal durumunu açıklayabileceği anlamına gelmez."),
      section("İlaçlarla İlişkisi Nedir?", "Bazı ilaçlar GABA sisteminin belirli reseptörleri üzerindeki etkileri güçlendirerek merkezi sinir sistemi aktivitesini azaltabilir. Bu mekanizmalar sedasyon ve kaygının azalması gibi etkilerle ilişkili olabileceği gibi dikkat, koordinasyon veya bağımlılık riski açısından da klinik önem taşıyabilir."),
      section("GABA Eksikliği Bir Tanı Koydurur mu?", "Hayır. Depresyon, anksiyete veya başka psikiyatrik tablolar tek bir nörotransmitterin eksikliğiyle açıklanamaz. Beyin işlevleri çok sayıda nörotransmitter sistemi, sinir ağı, genetik özellik ve çevresel deneyimin etkileşimiyle ortaya çıkar.")
    ],
    relatedTerms: [
      { term: "Glutamat", slug: "glutamat" },
      { term: "Benzodiazepin", slug: "benzodiazepin" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Farmakodinamik", slug: "farmakodinamik" }
    ],
    seo: {
      title: "GABA Nedir? | Psikiyatri Sözlüğü",
      description: "GABA'nın beyindeki inhibitör nörotransmisyon, kaygı, uyku ve ilaç mekanizmalarıyla ilişkisini sade biçimde açıklar.",
      ogTitle: "GABA Nedir?",
      ogDescription: "GABA'nın merkezi sinir sistemindeki düzenleyici rolünü açıklar."
    },
    schema: {
      definedTermDescription: "Merkezi sinir sisteminde sinir hücrelerinin uyarılabilirliğini azaltan temel inhibitör nörotransmitter."
    }
  }),

  defineTerm({
    term: "GAD-7",
    slug: "gad-7",
    shortDefinition: "GAD-7, son iki haftadaki yaygın kaygı belirtilerinin sıklığını değerlendirmek amacıyla kullanılan yedi maddelik kısa bir öz bildirim ölçeğidir.",
    intro: "GAD-7 klinik görüşmeyi destekleyen bir tarama ve belirti şiddeti aracıdır. Puanın yüksek olması tek başına yaygın anksiyete bozukluğu veya başka bir psikiyatrik tanı koydurmaz.",
    sections: [
      section("GAD-7 Neyi Değerlendirir?", "Ölçekte aşırı endişe, endişeyi kontrol etmekte zorlanma, huzursuzluk, gevşemekte güçlük ve gerginlik gibi kaygıyla ilişkili belirtiler sorgulanır. Yanıtlar kişinin bu belirtileri yakın dönemde ne sıklıkta yaşadığına göre verilir."),
      section("GAD-7 Bir Tanı Testi midir?", "Hayır. Ölçek belirtilerin düzeyini sistematik biçimde değerlendirmeye yardımcı olabilir ancak tanı için klinik görüşme gerekir. Benzer belirtiler farklı anksiyete tablolarında, depresyonda, bedensel hastalıklarda veya yaşam stresleri sırasında da görülebilir."),
      section("Puanlar Nasıl Kullanılır?", "Toplam puan kaygı belirtilerinin şiddetini kabaca sınıflandırmak ve zaman içinde değişimi izlemek için kullanılabilir. Kesme puanları araştırmalarda yararlı olabilir ancak tek bir puanın kişinin klinik durumunu bütün yönleriyle temsil ettiği varsayılmamalıdır."),
      section("Klinik Değerlendirmede Neden Tek Başına Yeterli Değildir?", "Kaygının süresi, hangi durumlarda ortaya çıktığı, kişinin günlük yaşamını ne ölçüde etkilediği, eşlik eden belirtiler ve olası tıbbi nedenler ayrıca değerlendirilir. Kişinin önceki ruhsal öyküsü ve başka belirtilerin varlığı da klinik yorum açısından önem taşıyabilir. Ölçek sonucu bu daha geniş klinik değerlendirme içinde anlam kazanır.")
    ],
    relatedTerms: [
      { term: "Yaygın anksiyete bozukluğu", slug: "yaygin-anksiyete-bozuklugu" },
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "İşlevsellik", slug: "islevsellik" }
    ],
    seo: {
      title: "GAD-7 Nedir? | Psikiyatri Sözlüğü",
      description: "GAD-7'nin kaygı belirtilerini değerlendirmede nasıl kullanıldığını ve neden tek başına psikiyatrik tanı koydurmadığını açıklar.",
      ogTitle: "GAD-7 Nedir?",
      ogDescription: "Yedi maddelik GAD-7 kaygı ölçeğinin kullanımını ve sınırlarını açıklar."
    },
    schema: {
      definedTermDescription: "Son iki haftadaki yaygın kaygı belirtilerinin sıklığını değerlendiren yedi maddelik öz bildirim ölçeği."
    }
  }),

  defineTerm({
    term: "Gelişimsel değerlendirme",
    slug: "gelisimsel-degerlendirme",
    shortDefinition: "Gelişimsel değerlendirme, çocuğun bilişsel, dil, motor, sosyal, duygusal ve günlük yaşam becerilerinin yaşına ve gelişimsel bağlamına göre sistematik biçimde incelenmesidir.",
    intro: "Amaç yalnız çocuğun yaşıtlarından geri olup olmadığını belirlemek değildir. Güçlü olduğu alanlar, desteğe ihtiyaç duyduğu beceriler, aile ve çevre koşulları ile gelişimin zaman içindeki seyri birlikte değerlendirilir.",
    sections: [
      section("Hangi Gelişim Alanları Değerlendirilir?", "Dil ve iletişim, ince ve kaba motor beceriler, problem çözme, öğrenme, sosyal etkileşim, oyun ve günlük yaşam becerileri değerlendirmenin parçası olabilir. Çocuğun yaşı ve başvuru nedeni hangi alanların daha ayrıntılı inceleneceğini belirler."),
      section("Değerlendirme Nasıl Yapılır?", "Aileden gelişim öyküsü alınabilir, çocuk farklı ortamlarda gözlenebilir ve yaşına uygun standartlaştırılmış araçlar kullanılabilir. Tek bir test sonucu yerine farklı bilgi kaynaklarının bir arada değerlendirilmesi çocuğun gelişimsel profilini daha iyi anlamaya yardımcı olur."),
      section("Her Çocuk Aynı Hızda mı Gelişir?", "Hayır. Normal gelişim içinde becerilerin kazanılma zamanında bireysel farklılıklar bulunabilir. Bununla birlikte belirgin gecikme, daha önce kazanılmış becerilerin kaybı veya birden fazla gelişim alanında güçlük bulunması daha ayrıntılı inceleme gerektirebilir."),
      section("Erken Değerlendirme Neden Önemlidir?", "Gelişimsel güçlüklerin erken fark edilmesi uygun eğitimsel, tıbbi veya psikososyal desteklerin zamanında planlanmasını kolaylaştırabilir. Değerlendirme çocuğu etiketlemek amacıyla değil, ihtiyaçlarının ve güçlü yönlerinin daha doğru anlaşılması için yapılır.")
    ],
    relatedTerms: [
      { term: "Gelişimsel gecikme", slug: "gelisimsel-gecikme" },
      { term: "Otizm spektrum bozukluğu", slug: "otizm-spektrum-bozuklugu" },
      { term: "DEHB", slug: "dehb" },
      { term: "Aile görüşmesi", slug: "aile-gorusmesi" }
    ],
    seo: {
      title: "Gelişimsel Değerlendirme Nedir? | Psikiyatri Sözlüğü",
      description: "Gelişimsel değerlendirmenin çocuğun bilişsel, dil, motor ve sosyal gelişimini nasıl ele aldığını ve erken değerlendirmenin önemini açıklar.",
      ogTitle: "Gelişimsel Değerlendirme Nedir?",
      ogDescription: "Çocuklarda gelişimsel değerlendirmenin kapsamını ve amacını açıklar."
    },
    schema: {
      definedTermDescription: "Çocuğun farklı gelişim alanlarındaki becerilerinin yaşı ve gelişimsel bağlamı içinde sistematik olarak değerlendirilmesi."
    }
  }),

  defineTerm({
    term: "Gelişimsel gecikme",
    slug: "gelisimsel-gecikme",
    shortDefinition: "Gelişimsel gecikme, bir çocuğun bilişsel, dil, motor, sosyal veya günlük yaşam becerilerinden birinde ya da birkaçında yaşından beklenen kazanımları belirgin biçimde daha geç edinmesini ifade eder.",
    intro: "Gelişimsel gecikme tek başına belirli bir hastalığın adı değildir. Çocuğun hangi gelişim alanlarının etkilendiği, gecikmenin derecesi, zaman içindeki seyri ve olası nedenler ayrı ayrı değerlendirilir.",
    sections: [
      section("Gelişimsel Gecikme Hangi Alanlarda Görülebilir?", "Konuşma ve dili anlama, yürüme ve el becerileri, problem çözme, oyun, sosyal iletişim veya öz bakım gibi alanlarda gecikme görülebilir. Bazı çocuklarda yalnız bir alan etkilenirken bazılarında birden fazla gelişim alanında belirgin güçlük olabilir."),
      section("Her Geç Kazanım Gelişimsel Gecikme midir?", "Hayır. Çocuklar gelişim basamaklarını tam olarak aynı zamanda kazanmaz. Tek bir becerinin kısa süre gecikmesi her zaman klinik sorun anlamına gelmez. Değerlendirmede çocuğun genel gelişim örüntüsü ve becerilerin zaman içindeki ilerleyişi dikkate alınır."),
      section("Nedenleri Neler Olabilir?", "Genetik özellikler, gebelik veya doğum dönemine ilişkin durumlar, işitme ya da görme sorunları, nörolojik ve metabolik hastalıklar veya çevresel etkenler gelişimi etkileyebilir. Bazı çocuklarda ise ayrıntılı değerlendirmeye rağmen tek bir neden belirlenmeyebilir."),
      section("Ne Zaman Daha Ayrıntılı Değerlendirme Gerekir?", "Birden fazla alanda belirgin gecikme, gelişimin duraklaması veya daha önce kazanılmış becerilerin kaybedilmesi önemlidir. Böyle durumlarda çocuğun gelişimsel ve tıbbi açıdan değerlendirilmesi gerekir. Erken destek, ihtiyaç duyulan alanlara yönelik müdahalelerin daha zamanında planlanmasını sağlayabilir.")
    ],
    relatedTerms: [
      { term: "Gelişimsel değerlendirme", slug: "gelisimsel-degerlendirme" },
      { term: "Otizm spektrum bozukluğu", slug: "otizm-spektrum-bozuklugu" },
      { term: "DEHB", slug: "dehb" },
      { term: "Aile görüşmesi", slug: "aile-gorusmesi" }
    ],
    seo: {
      title: "Gelişimsel Gecikme Nedir? | Psikiyatri Sözlüğü",
      description: "Gelişimsel gecikmenin çocuklarda hangi alanlarda görülebileceğini, bireysel farklılıklardan farkını ve değerlendirme gerektiren durumları açıklar.",
      ogTitle: "Gelişimsel Gecikme Nedir?",
      ogDescription: "Çocuklarda gelişimsel gecikme kavramını nedenleri ve değerlendirme yaklaşımıyla açıklar."
    },
    schema: {
      definedTermDescription: "Çocuğun bir veya daha fazla gelişim alanında yaşından beklenen becerileri belirgin biçimde daha geç kazanması."
    }
  }),

  defineTerm({
    term: "Gizlilik",
    slug: "gizlilik",
    shortDefinition: "Gizlilik, psikiyatrik değerlendirme ve tedavi sırasında paylaşılan kişisel bilgilerin etik ve yasal çerçevede korunması ve yalnız gerekli durumlarda yetkili kişilerle paylaşılması ilkesidir.",
    intro: "Gizlilik güvenli bir klinik ilişkinin temel unsurlarındandır ancak mutlak ve sınırsız değildir. Bilgi paylaşımının hangi durumlarda gerekli olabileceği hukuki düzenlemelere, kişinin güvenliğine ve klinik bağlama göre değerlendirilir.",
    sections: [
      section("Gizlilik Neden Önemlidir?", "Kişinin düşüncelerini, duygularını ve yaşamındaki hassas bilgileri güvenle paylaşabilmesi değerlendirmeyi kolaylaştırır. Mahremiyetin korunacağına ilişkin güven, kişinin yardım arama ve klinik süreçte açık iletişim kurma isteğini destekleyebilir."),
      section("Bilgiler Kimlerle Paylaşılabilir?", "Genel yaklaşım, sağlık bilgilerinin kişinin bilgisi ve gerekli izinler çerçevesinde paylaşılmasıdır. Tedavi ekibi içinde bilgi aktarımı da bakım için gerekli olanla sınırlandırılmalıdır. Gereksiz kişisel bilgilerin üçüncü kişilerle paylaşılması gizlilik ilkesiyle bağdaşmaz."),
      section("Gizliliğin İstisnaları Olabilir mi?", "Evet. Kişinin veya başka birinin güvenliğiyle ilgili ciddi ve yakın riskler, bazı yasal bildirim yükümlülükleri veya hukuki süreçler gibi durumlarda gizliliğin sınırları gündeme gelebilir. Bu istisnalar genel bir paylaşım izni anlamına gelmez."),
      section("Çocuk ve Ergenlerde Gizlilik Nasıl Ele Alınır?", "Çocuk ve ergenlerin yaşına ve gelişim düzeyine uygun mahremiyet alanı önemlidir. Bununla birlikte güvenlikle ilgili ciddi risklerde ebeveyn veya bakım verenlerin sürece dahil edilmesi gerekebilir. Klinik yaklaşım hem gencin güvenini hem de güvenlik sorumluluğunu gözetir.")
    ],
    relatedTerms: [
      { term: "Bilgilendirilmiş onam", slug: "bilgilendirilmis-onam" },
      { term: "Aile görüşmesi", slug: "aile-gorusmesi" },
      { term: "Risk değerlendirmesi", slug: "risk-degerlendirmesi" },
      { term: "Adli psikiyatri", slug: "adli-psikiyatri" }
    ],
    seo: {
      title: "Gizlilik Nedir? | Psikiyatri Sözlüğü",
      description: "Psikiyatride gizlilik ilkesinin kişisel bilgilerin korunmasındaki yerini, sınırlarını ve çocuk-ergen değerlendirmesindeki önemini açıklar.",
      ogTitle: "Gizlilik Nedir?",
      ogDescription: "Psikiyatrik değerlendirmede gizlilik ve mahremiyetin temel ilkelerini açıklar."
    },
    schema: {
      definedTermDescription: "Klinik süreçte paylaşılan kişisel bilgilerin etik ve yasal sınırlar içinde korunması ilkesi."
    }
  }),

  defineTerm({
    term: "Glutamat",
    slug: "glutamat",
    shortDefinition: "Glutamat, merkezi sinir sistemindeki temel uyarıcı nörotransmitterlerden biridir ve öğrenme, bellek ve sinir ağları arasındaki iletişimde önemli rol oynar.",
    intro: "Glutamat sistemi psikiyatri ve nörobilim araştırmalarında geniş biçimde incelenmektedir. Bununla birlikte bir psikiyatrik bozukluğu yalnız glutamatın fazla veya az olmasıyla açıklamak doğru değildir; etkiler farklı beyin bölgeleri ve reseptör sistemlerine göre değişebilir.",
    sections: [
      section("Glutamat Beyinde Ne Yapar?", "Glutamat birçok sinir hücresi arasında uyarıcı sinyal iletimine katkıda bulunur. Sinaptik plastisite olarak adlandırılan, sinir bağlantılarının deneyime göre güçlenmesi veya zayıflaması süreçlerinde rol oynar. Bu özellik öğrenme ve bellek mekanizmaları açısından önemlidir."),
      section("Glutamat Reseptörleri Neden Önemlidir?", "NMDA, AMPA ve başka glutamat reseptörleri farklı sinirsel işlevlere katkıda bulunur. Aynı nörotransmitterin farklı reseptörlerde oluşturduğu etkiler birbirinden farklı olabilir. Bu nedenle glutamat sistemi tek bir açık-kapalı mekanizma şeklinde düşünülmemelidir."),
      section("Psikiyatriyle İlişkisi Nedir?", "Depresyon, şizofreni ve başka psikiyatrik tabloların nörobiyolojisinde glutamaterjik sistemler araştırılmaktadır. Bazı tedavilerin glutamat ile ilişkili mekanizmaları bilimsel açıdan önem taşır ancak grup düzeyindeki araştırma bulguları tek bir kişide tanı koyan biyobelirteç olarak kullanılamaz."),
      section("GABA ile Nasıl Bir İlişkisi Vardır?", "Glutamat genel olarak uyarıcı, GABA ise inhibitör sinyal iletimiyle ilişkilendirilir. Beynin sağlıklı çalışması bu sistemlerden birinin yalnızca yüksek veya düşük olmasına değil, farklı sinir ağlarındaki dengeli ve zamanlaması uygun etkileşime bağlıdır.")
    ],
    relatedTerms: [
      { term: "GABA", slug: "gaba" },
      { term: "Şizofreni", slug: "sizofreni" },
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" },
      { term: "Farmakodinamik", slug: "farmakodinamik" }
    ],
    seo: {
      title: "Glutamat Nedir? | Psikiyatri Sözlüğü",
      description: "Glutamatın beyindeki uyarıcı nörotransmisyon, öğrenme ve bellek süreçlerindeki rolünü ve psikiyatriyle ilişkisini açıklar.",
      ogTitle: "Glutamat Nedir?",
      ogDescription: "Glutamat nörotransmitterinin beyin işlevleri ve psikiyatri araştırmalarındaki yerini açıklar."
    },
    schema: {
      definedTermDescription: "Merkezi sinir sisteminde öğrenme, bellek ve uyarıcı sinyal iletiminde rol alan temel nörotransmitter."
    }
  }),

  defineTerm({
    term: "Grandiyözite",
    slug: "grandiyozite",
    shortDefinition: "Grandiyözite, kişinin kendi önemini, gücünü, yeteneklerini, bilgisini veya statüsünü gerçekçi sınırların belirgin biçimde üzerinde değerlendirmesiyle karakterize düşünce ve kendilik algısıdır.",
    intro: "Grandiyöz düşünceler farklı klinik bağlamlarda görülebilir ve tek başına belirli bir psikiyatrik tanı anlamına gelmez. Değerlendirmede düşüncenin yoğunluğu, gerçeklikle ilişkisi, sürekliliği ve kişinin davranışları üzerindeki etkisi dikkate alınır.",
    sections: [
      section("Grandiyözite Nasıl Görülebilir?", "Kişi olağanüstü yeteneklere, özel bir statüye veya başkalarında bulunmayan güçlere sahip olduğuna inanabilir. Daha hafif düzeylerde başarı ve kapasitesini belirgin biçimde abartma görülürken bazı durumlarda inanış gerçeklikle belirgin biçimde uyuşmayabilir."),
      section("Özgüven ile Aynı Şey midir?", "Hayır. Sağlıklı özgüven kişinin güçlü yanlarını ve sınırlılıklarını gerçekçi biçimde değerlendirebilmesini içerir. Grandiyözitede kişinin kendisine ilişkin değerlendirmesi mevcut kanıtlarla orantısız olabilir ve geri bildirimlere rağmen kolayca değişmeyebilir."),
      section("Hangi Klinik Durumlarda Görülebilir?", "Grandiyöz düşünceler özellikle manik dönemlerde ortaya çıkabilir. Bazı psikotik tablolarda grandiyöz sanrılar görülebilir; bazı kişilik örüntülerinde ise kişinin üstünlük veya özel olma algısı daha kalıcı biçimde bulunabilir. Bu durumlar birbirinden ayrı değerlendirilir."),
      section("Grandiyöz Sanrı ile Aynı Şey midir?", "Her grandiyöz düşünce sanrı değildir. Sanrı, karşıt kanıtlara rağmen sürdürülen ve kişinin kültürel bağlamıyla açıklanamayan sabit bir inanışı ifade eder. Grandiyözitenin sanrısal düzeye ulaşıp ulaşmadığı ancak düşüncenin içeriği, kesinliği ve gerçeklikle ilişkisi değerlendirilerek anlaşılabilir.")
    ],
    relatedTerms: [
      { term: "Mani", slug: "mani" },
      { term: "Sanrı", slug: "sanri" },
      { term: "Psikoz", slug: "psikoz" },
      { term: "Narsisistik kişilik örüntüsü", slug: "narsisistik-kisilik-oruntusu" }
    ],
    seo: {
      title: "Grandiyözite Nedir? | Psikiyatri Sözlüğü",
      description: "Grandiyözitenin abartılı kendilik değerlendirmesiyle ilişkisini, özgüvenden ve grandiyöz sanrıdan farkını açıklar.",
      ogTitle: "Grandiyözite Nedir?",
      ogDescription: "Grandiyözite kavramını mani, psikoz ve sağlıklı özgüvenden farklarıyla açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin önemini, gücünü veya yeteneklerini gerçekçi sınırların belirgin üzerinde değerlendirmesi."
    }
  })
];


const eleventhBatchNewTerms = [
  defineTerm({
    term: "Grup terapisi",
    slug: "grup-terapisi",
    shortDefinition: "Grup terapisi, benzer ya da farklı ruhsal güçlükleri bulunan birden fazla kişinin eğitimli bir terapist veya terapistler eşliğinde düzenli oturumlarda birlikte çalıştığı psikoterapi biçimidir.",
    intro: "Grup terapisi yalnız kişilerin sırayla sorunlarını anlattığı bir toplantı değildir. Grup üyeleri kendi deneyimlerini ele alırken diğer üyelerin geri bildirimleri, kişilerarası etkileşimler ve grup içinde ortaya çıkan örüntüler de terapötik çalışmanın parçası olabilir.",
    sections: [
      section("Grup Terapisi Nasıl İşler?", "Grubun amacı ve yöntemi kullanılan terapi yaklaşımına göre değişebilir. Bazı gruplar belirli bir sorun veya beceri alanına odaklanırken bazıları kişilerarası ilişkileri ve duygusal örüntüleri daha geniş biçimde ele alır. Oturumların yapısı, üye sayısı ve süresi programa göre farklılık gösterebilir."),
      section("Grubun Sağladığı Farklı Deneyim Nedir?", "Kişi benzer güçlükleri yaşayan başkalarının deneyimlerini duyarak yalnız olmadığını fark edebilir. Başkalarının bakış açılarını görmek, kendi davranışlarının ilişkiler üzerindeki etkisini anlamak ve güvenli bir ortamda yeni iletişim biçimlerini denemek önemli öğrenme fırsatları sağlayabilir."),
      section("Gizlilik Grup İçinde Nasıl Ele Alınır?", "Terapist mesleki gizlilik ilkelerine bağlıdır ve grup üyelerinden de diğer katılımcıların paylaşımlarını grup dışında aktarmamaları beklenir. Bununla birlikte grup ortamında birden fazla katılımcı bulunduğundan gizliliğin sınırları başlangıçta açık biçimde konuşulmalıdır."),
      section("Grup Terapisi Herkes İçin Uygun mudur?", "Her kişinin ihtiyacı, güvenliği, belirtileri ve grup ortamına katılım kapasitesi farklıdır. Bazı durumlarda bireysel terapi, başka bir grup türü veya farklı bir destek biçimi daha uygun olabilir. Grup terapisine uygunluk yalnız tanı adına göre değil, kişinin mevcut klinik özellikleri ve hedefleriyle birlikte değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Aile terapisi", slug: "aile-terapisi" },
      { term: "Psikoeğitim", slug: "psikoegitim" },
      { term: "Sosyal destek", slug: "sosyal-destek" }
    ],
    seo: {
      title: "Grup Terapisi Nedir? | Psikiyatri Sözlüğü",
      description: "Grup terapisinin kişilerarası etkileşim, geri bildirim ve ortak deneyimler üzerinden nasıl çalıştığını ve kimler için değerlendirilebileceğini açıklar.",
      ogTitle: "Grup Terapisi Nedir?",
      ogDescription: "Grup terapisinin temel özelliklerini, gizlilik çerçevesini ve bireysel terapiden farklı yönlerini açıklar."
    },
    schema: {
      definedTermDescription: "Birden fazla kişinin terapist eşliğinde grup etkileşimlerinden de yararlanarak birlikte çalıştığı psikoterapi biçimi."
    }
  }),

  defineTerm({
    term: "Güvenli bağlanma",
    slug: "guvenli-baglanma",
    shortDefinition: "Güvenli bağlanma, yakın ilişkilerde destek ve yakınlık arayabilme ile gerektiğinde bağımsız hareket edebilme kapasitesinin görece dengeli biçimde birlikte bulunabildiği bağlanma örüntüsüdür.",
    intro: "Güvenli bağlanma kusursuz ilişkiler yaşamak, hiç kaygılanmamak veya sürekli yakınlık istemek anlamına gelmez. Bağlanma kavramları psikiyatrik tanı değildir ve kişinin bütün ilişkilerini tek bir etiketle açıklamak için kullanılmamalıdır.",
    sections: [
      section("Güvenli Bağlanma Nasıl Görülebilir?", "Kişi ihtiyaç duyduğunda yakınından destek isteyebilir, karşısındaki kişinin ihtiyaçlarına yanıt verebilir ve geçici ayrılık veya anlaşmazlıkları ilişkinin tamamen sona ereceği biçiminde yorumlamadan yönetebilir. Yakınlık ile bireysel alanın birlikte korunabilmesi önemli özelliklerden biridir."),
      section("Çocuklukta Nasıl Gelişebilir?", "Bağlanma kuramında bakım verenin genel olarak ulaşılabilir, öngörülebilir ve çocuğun ihtiyaçlarına yeterince duyarlı olması güven duygusunun gelişmesine katkıda bulunan etkenlerden biri olarak ele alınır. Bununla birlikte bağlanma biçimini tek bir ebeveyn davranışı veya tek bir çocukluk olayıyla açıklamak doğru değildir."),
      section("Yetişkinlikte Değişebilir mi?", "Evet. Bağlanma örüntüleri erken deneyimlerden etkilenebilse de değişmez değildir. Güvenilir ilişkiler, kişinin kendi ihtiyaçlarını daha iyi tanıması, iletişim becerilerinin gelişmesi ve yeni ilişkisel deneyimler zaman içinde daha dengeli örüntülerin oluşmasına katkıda bulunabilir."),
      section("Güvenli Bağlanma Bir Tanı mıdır?", "Hayır. Güvenli, kaygılı, kaçıngan veya dezorganize bağlanma gibi terimler ilişkisel örüntüleri anlamaya yardımcı olan kavramlardır. Bir kişinin bağlanma biçiminden doğrudan kişilik bozukluğu, travma bozukluğu veya başka bir psikiyatrik tanı çıkarılamaz.")
    ],
    relatedTerms: [
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Kaygılı bağlanma", slug: "kaygili-baglanma" },
      { term: "Kaçıngan bağlanma", slug: "kacingan-baglanma" },
      { term: "Dezorganize bağlanma", slug: "dezorganize-baglanma" }
    ],
    seo: {
      title: "Güvenli Bağlanma Nedir? | Psikiyatri Sözlüğü",
      description: "Güvenli bağlanmanın yakınlık, destek arama ve bağımsızlık arasındaki dengeyi nasıl tanımladığını ve bağlanma örüntülerinin değişebilirliğini açıklar.",
      ogTitle: "Güvenli Bağlanma Nedir?",
      ogDescription: "Güvenli bağlanmayı gelişimsel ve ilişkisel sınırlarıyla açıklar."
    },
    schema: {
      definedTermDescription: "Yakınlık ve destek arama ile bağımsızlığın görece dengeli biçimde sürdürülebildiği bağlanma örüntüsü."
    }
  }),

  defineTerm({
    term: "Güvenlik planı",
    slug: "guvenlik-plani",
    shortDefinition: "Güvenlik planı, kişinin yoğun bir ruhsal kriz sırasında kendisini daha güvende tutabilmesine yardımcı olmak amacıyla önceden ve iş birliği içinde oluşturulan kişiselleştirilmiş destek planıdır.",
    intro: "Güvenlik planı yalnızca acil telefon numaralarının yazıldığı bir liste değildir. Amaç yaklaşan krizin erken işaretlerini fark etmek, kişinin kullanabileceği baş etme yollarını ve destek kaynaklarını önceden belirlemek ve gerektiğinde profesyonel yardıma ulaşmayı kolaylaştırmaktır.",
    sections: [
      section("Güvenlik Planının Amacı Nedir?", "Yoğun sıkıntı dönemlerinde düşünmek, seçenekleri değerlendirmek ve yardım istemek zorlaşabilir. Önceden hazırlanmış bir plan, kişinin krizin erken belirtilerini fark etmesine ve daha önce üzerinde uzlaşılan güvenli adımları hatırlamasına yardımcı olabilir. Plan kişinin ihtiyaçlarına göre bireyselleştirilir."),
      section("Plan Hangi Unsurları İçerebilir?", "Kişinin kendisinde fark ettiği uyarı işaretleri, sakinleşmesine veya dikkatini güvenli biçimde başka yöne yöneltmesine yardımcı olan yöntemler, ulaşabileceği güvenilir kişiler ve profesyonel destek kaynakları planın parçaları olabilir. İçerik klinik görüşme sırasında kişiyle birlikte belirlenir."),
      section("Güvenlik Planı Risk Değerlendirmesinin Yerine Geçer mi?", "Hayır. Güvenlik planı risk değerlendirmesini veya gerekli klinik müdahaleyi değiştiren bir araç değildir. Riskin düzeyi, kişinin mevcut düşünceleri, kendisini güvende tutabilme kapasitesi, destek kaynakları ve eşlik eden ruhsal belirtiler ayrıca değerlendirilmelidir."),
      section("Plan Ne Zaman Yeniden Gözden Geçirilir?", "Yaşam koşulları, destek ağı veya kriz örüntüsü değiştiğinde planın güncellenmesi gerekebilir. Kişi kendisini güvende tutamayacağını düşünüyor, yaşamına son verme düşünceleri yoğunlaşıyor veya kriz hızla ağırlaşıyorsa yalnız plana dayanmak yerine gecikmeden acil profesyonel değerlendirme gerekir.")
    ],
    relatedTerms: [
      { term: "İntihar riski", slug: "intihar-riski" },
      { term: "Kendine zarar verme", slug: "kendine-zarar-verme" },
      { term: "Acil psikiyatri", slug: "acil-psikiyatri" },
      { term: "Sosyal destek", slug: "sosyal-destek" }
    ],
    seo: {
      title: "Güvenlik Planı Nedir? | Psikiyatri Sözlüğü",
      description: "Güvenlik planının kriz işaretlerini, destek kaynaklarını ve profesyonel yardım yollarını önceden belirlemedeki rolünü güvenli biçimde açıklar.",
      ogTitle: "Güvenlik Planı Nedir?",
      ogDescription: "Ruhsal krizlerde kullanılan güvenlik planının amacı, sınırları ve klinik değerlendirmeyle ilişkisini açıklar."
    },
    schema: {
      definedTermDescription: "Ruhsal kriz sırasında güvenliği desteklemek için önceden ve iş birliği içinde oluşturulan kişiselleştirilmiş destek planı."
    }
  }),

  defineTerm({
    term: "Halüsinasyon",
    slug: "halusinasyon",
    shortDefinition: "Halüsinasyon, dış ortamda karşılık gelen bir uyaran bulunmadığı halde kişinin gerçek bir algı gibi deneyimlediği görme, işitme, dokunma, koku veya tat yaşantısını ifade eden klinik terimdir.",
    intro: "Türkçede varsanı terimiyle aynı anlamda kullanılabilir. Halüsinasyon tek başına belirli bir psikiyatrik tanıyı göstermez; psikiyatrik, nörolojik, tıbbi ve maddeyle ilişkili farklı durumlarda ortaya çıkabilir.",
    sections: [
      section("Halüsinasyon Hangi Duyularda Görülebilir?", "En sık sözü edilen biçim işitsel halüsinasyonlardır ancak görsel, dokunsal, kokusal veya tatsal algı yaşantıları da görülebilir. Algının niteliği, ne zaman ortaya çıktığı, kişinin deneyime ne ölçüde inandığı ve eşlik eden belirtiler klinik açıdan önem taşır."),
      section("Halüsinasyon ile Yanılsama Aynı Şey midir?", "Hayır. Halüsinasyonda algıya karşılık gelen dış uyaran bulunmaz. Yanılsamada ise gerçek bir dış uyaran vardır fakat kişi onu farklı veya hatalı biçimde algılar. Örneğin belirsiz bir görüntünün başka bir nesne sanılması yanılsama niteliğinde olabilir."),
      section("Yalnız Psikozda mı Görülür?", "Hayır. Psikotik bozuklukların yanında ağır duygudurum dönemleri, bazı nörolojik hastalıklar, bilinç değişiklikleri, madde veya ilaç etkileri ve uykuya geçiş gibi özel durumlarda da algısal yaşantılar görülebilir. Bu nedenle bağlam ve eşlik eden bulgular değerlendirilir."),
      section("Yeni Başlayan Halüsinasyon Neden Değerlendirilmelidir?", "Özellikle ilk kez ortaya çıkan, hızla değişen veya bilinç ve dikkat bozukluğuyla birlikte görülen algısal yaşantılarda yalnız psikiyatrik neden varsayılmamalıdır. Tıbbi ve nörolojik nedenler ile kullanılan maddeler veya ilaçlar da göz önünde bulundurulmalıdır.")
    ],
    relatedTerms: [
      { term: "Varsanı", slug: "varsani" },
      { term: "Psikoz", slug: "psikoz" },
      { term: "Algı bozukluğu", slug: "algi-bozuklugu" },
      { term: "Şizofreni", slug: "sizofreni" }
    ],
    seo: {
      title: "Halüsinasyon Nedir? | Psikiyatri Sözlüğü",
      description: "Halüsinasyonun dış uyaran olmadan yaşanan algısal deneyimi nasıl tanımladığını, yanılsamadan farkını ve farklı klinik nedenlerini açıklar.",
      ogTitle: "Halüsinasyon Nedir?",
      ogDescription: "Halüsinasyon veya varsanı kavramını duyusal türleri ve klinik değerlendirme çerçevesiyle açıklar."
    },
    schema: {
      definedTermDescription: "Dış ortamda karşılık gelen bir uyaran olmadan gerçek bir algı gibi yaşanan duyusal deneyim."
    }
  }),

  defineTerm({
    term: "Hasta hakları",
    slug: "hasta-haklari",
    shortDefinition: "Hasta hakları, sağlık hizmeti alan kişinin bilgi edinme, mahremiyet, saygı görme, karar süreçlerine katılma ve güvenli sağlık hizmetine erişme gibi temel haklarını ifade eden etik ve hukuki çerçevedir.",
    intro: "Hasta haklarının ayrıntıları ülkenin mevzuatına ve sağlık hizmetinin niteliğine göre farklılaşabilir. Psikiyatride bu haklar özellikle bilgilendirilmiş onam, gizlilik, kişinin karar verme kapasitesi ve güvenlikle ilgili durumların dengeli biçimde ele alınması açısından önemlidir.",
    sections: [
      section("Bilgi Edinme ve Kararlara Katılma Ne Anlama Gelir?", "Kişinin değerlendirme, önerilen yaklaşım, olası yarar ve riskler ile alternatifler hakkında anlayabileceği biçimde bilgi alması önemlidir. Uygun durumlarda kişi kendi sağlık hizmetiyle ilgili kararlara aktif biçimde katılır ve sorularını ifade edebilir."),
      section("Mahremiyet ve Gizlilik Nasıl Korunur?", "Sağlık bilgilerinin korunması ve görüşmelerin mahremiyet içinde yürütülmesi temel ilkeler arasındadır. Bilgilerin hangi koşullarda ve kimlerle paylaşılabileceği etik ve yasal kurallarla belirlenir. Güvenlikle ilgili bazı özel durumlarda gizliliğin sınırları ayrıca değerlendirilir."),
      section("Psikiyatrik Hastalık Hakları Ortadan Kaldırır mı?", "Hayır. Bir psikiyatrik tanının bulunması kişinin temel haklarını otomatik olarak ortadan kaldırmaz. Karar verme kapasitesi ve belirli bir müdahale için onam verebilme durumu gerektiğinde somut klinik koşullar içinde değerlendirilir; yalnız tanı adına dayanarak varsayım yapılmamalıdır."),
      section("Hak İhlali Düşünülürse Ne Yapılabilir?", "Başvuru yolları sağlık kurumunun yapısına ve yürürlükteki mevzuata göre değişebilir. Kişi kurumun hasta hakları birimlerinden, ilgili idari kanallardan veya gerektiğinde hukuki danışmanlıktan bilgi alabilir. Web sayfasındaki genel bilgiler belirli bir hukuki uyuşmazlık için kişisel hukuk danışmanlığı yerine geçmez.")
    ],
    relatedTerms: [
      { term: "Bilgilendirilmiş onam", slug: "bilgilendirilmis-onam" },
      { term: "Gizlilik", slug: "gizlilik" },
      { term: "Adli psikiyatri", slug: "adli-psikiyatri" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" }
    ],
    seo: {
      title: "Hasta Hakları Nedir? | Psikiyatri Sözlüğü",
      description: "Hasta haklarını bilgi edinme, onam, mahremiyet ve sağlık kararlarına katılım çerçevesinde açıklar ve psikiyatrideki önemini ele alır.",
      ogTitle: "Hasta Hakları Nedir?",
      ogDescription: "Hasta haklarının psikiyatrik değerlendirme ve sağlık hizmetlerindeki temel ilkelerini açıklar."
    },
    schema: {
      definedTermDescription: "Sağlık hizmeti alan kişinin bilgi, mahremiyet, saygı, katılım ve güvenlikle ilgili temel haklarını kapsayan etik ve hukuki çerçeve."
    }
  }),

  defineTerm({
    term: "Hipnotik",
    slug: "hipnotik",
    shortDefinition: "Hipnotik, uykuya dalmayı veya uykuyu sürdürmeyi kolaylaştırmak amacıyla kullanılan ve farklı farmakolojik mekanizmalara sahip olabilen ilaçlar için kullanılan genel klinik terimdir.",
    intro: "Hipnotikler tek bir ilaç sınıfı değildir ve her uyku güçlüğünde aynı yaklaşım kullanılmaz. Uykusuzluğun süresi, nedeni, eşlik eden hastalıklar, kullanılan diğer ilaçlar ve bağımlılık ya da yan etki riskleri klinik değerlendirmede önem taşır.",
    sections: [
      section("Hipnotik İlaçlar Nasıl Etki Gösterebilir?", "Farklı hipnotik ilaçlar beyindeki farklı reseptör ve nörotransmitter sistemleri üzerinden etki gösterebilir. Bazıları merkezi sinir sistemi aktivitesini azaltırken bazıları uyku-uyanıklık döngüsünü düzenleyen başka mekanizmaları etkiler. Bu nedenle bütün hipnotikler aynı etki ve risk profiline sahip değildir."),
      section("Neden Kısa ve Uzun Dönem Kullanım Ayrılır?", "Bazı hipnotiklerde uzun süreli kullanım tolerans, bağımlılık, gündüz sedasyonu veya bırakma sırasında güçlüklerle ilişkili olabilir. Ancak bu risklerin düzeyi kullanılan ilaca ve kişisel özelliklere göre değişir. Kullanım süresine ilişkin kararlar kişisel klinik değerlendirmeye dayanmalıdır."),
      section("Diğer İlaç ve Maddeler Neden Önemlidir?", "Sedatif etkisi bulunan başka ilaçlar veya maddeler bazı hipnotiklerin merkezi sinir sistemi üzerindeki etkisini artırabilir. Farmakokinetik etkileşimler de kandaki ilaç düzeyini değiştirebilir. Bu nedenle kişinin kullandığı reçeteli, reçetesiz ve diğer ürünlerin bilinmesi önemlidir."),
      section("Hipnotik İlaç Kendi Kendine Başlanıp Bırakılabilir mi?", "Reçeteli bir hipnotiğin başlatılması, dozu veya bırakılması kişisel öneri olmadan değiştirilmemelidir. Özellikle uzun süre kullanılan bazı ilaçların aniden kesilmesi sorun oluşturabilir. Uyku yakınmasının altında yatan neden ve ilaç dışı yaklaşımlar da tedavi planında değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Benzodiazepin", slug: "benzodiazepin" },
      { term: "Etkileşim", slug: "etkilesim" },
      { term: "Farmakokinetik", slug: "farmakokinetik" },
      { term: "Farmakodinamik", slug: "farmakodinamik" }
    ],
    seo: {
      title: "Hipnotik Nedir? | Psikiyatri Sözlüğü",
      description: "Hipnotik ilaçların uyku üzerindeki genel kullanımını, farklı mekanizmalarını, etkileşim ve güvenli kullanım konularını açıklar.",
      ogTitle: "Hipnotik Nedir?",
      ogDescription: "Hipnotik ilaç kavramını güvenli ilaç bilgisi çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Uykuya dalmayı veya uykuyu sürdürmeyi kolaylaştırmak amacıyla kullanılan ilaçlar için genel klinik terim."
    }
  }),

  defineTerm({
    term: "Hipokampus",
    slug: "hipokampus",
    shortDefinition: "Hipokampus, beynin medial temporal bölgesinde yer alan ve özellikle yeni anıların oluşumu, öğrenme, mekânsal ve bağlamsal bilginin işlenmesiyle ilişkili önemli bir beyin yapısıdır.",
    intro: "Hipokampus psikiyatri ve nörobilim araştırmalarında sık incelenir ancak tek bir beyin bölgesinin büyüklüğü veya etkinliği kişinin psikiyatrik tanısını tek başına belirlemez. Beyin işlevleri birbirine bağlı geniş sinir ağlarının ortak çalışmasıyla ortaya çıkar.",
    sections: [
      section("Hipokampus Bellekte Nasıl Rol Oynar?", "Yeni deneyimlerin uzun süreli belleğe aktarılmasında ve olayların zaman, yer ve bağlamla ilişkilendirilmesinde hipokampal sistemler önemli rol oynar. Hipokampus bütün bellek türlerinin tek merkezi değildir; farklı bellek süreçleri farklı beyin ağlarının katkısını içerir."),
      section("Stresle İlişkisi Nedir?", "Hipokampus stres hormonlarının etkilerine duyarlı beyin bölgelerinden biridir ve stres yanıtını düzenleyen sistemlerle karşılıklı bağlantıları bulunur. Uzun süreli veya yoğun stresin hipokampal işlevlerle ilişkisi araştırılmıştır ancak bireysel düzeyde basit bir neden-sonuç ilişkisi kurulamaz."),
      section("Psikiyatrik Bozukluklarda Neden Araştırılır?", "Depresyon, travmayla ilişkili bozukluklar ve bazı psikotik tablolar dahil çeşitli durumlarda hipokampal yapı ve işlev üzerine grup düzeyinde farklılıklar bildirilmiştir. Bu bulgular araştırma açısından değerlidir fakat tek bir kişinin görüntüleme sonucundan psikiyatrik tanı çıkarmaya uygun değildir."),
      section("Hipokampus Diğer Beyin Bölgelerinden Bağımsız mı Çalışır?", "Hayır. Amigdala, prefrontal bölgeler ve başka limbik yapılarla yoğun bağlantıları vardır. Duygusal önem, bağlam, öğrenme ve bellek gibi süreçler bu ağların birlikte çalışmasıyla oluşur. Bu nedenle hipokampusu tek başına bir duygu veya hastalık merkezi gibi tanımlamak aşırı basitleştirici olur.")
    ],
    relatedTerms: [
      { term: "Amigdala", slug: "amigdala" },
      { term: "Anterior singulat korteks", slug: "anterior-singulat-korteks" },
      { term: "Glutamat", slug: "glutamat" },
      { term: "Travma sonrası stres bozukluğu", slug: "travma-sonrasi-stres-bozuklugu" }
    ],
    seo: {
      title: "Hipokampus Nedir? | Psikiyatri Sözlüğü",
      description: "Hipokampusun bellek, öğrenme ve stres sistemleriyle ilişkisini ve psikiyatri araştırmalarındaki bulguların bireysel tanı anlamına gelmediğini açıklar.",
      ogTitle: "Hipokampus Nedir?",
      ogDescription: "Hipokampusun bellek ve bağlamsal öğrenmedeki rolünü nörobiyolojik sınırlarıyla açıklar."
    },
    schema: {
      definedTermDescription: "Yeni anıların oluşumu, öğrenme ve bağlamsal bilginin işlenmesinde rol alan medial temporal beyin yapısı."
    }
  }),

  defineTerm({
    term: "Histrionik kişilik örüntüsü",
    slug: "histrionik-kisilik-oruntusu",
    shortDefinition: "Histrionik kişilik örüntüsü, dikkat ve onay ihtiyacının belirginleşebildiği, duyguların yoğun ve dışa dönük ifade edilebildiği ve kişilerarası ilişkilerde tekrarlayan bazı örüntülerin görülebildiği kişilik yapılanmasını ifade eder.",
    intro: "Dışa dönük olmak, duygularını güçlü biçimde ifade etmek veya ilgi görmekten hoşlanmak tek başına kişilik bozukluğu anlamına gelmez. Klinik önem, örüntünün uzun süreli, farklı durumlarda tekrarlayan ve kişinin ilişkileri ya da işlevselliği üzerinde belirgin güçlük oluşturmasıyla değerlendirilir.",
    sections: [
      section("Histrionik Örüntü Nasıl Görülebilir?", "Kişi çevresinden ilgi veya onay görmediğinde belirgin rahatsızlık yaşayabilir, duygularını oldukça görünür biçimde ifade edebilir veya ilişkilerde kabul görmeye güçlü önem verebilir. Bu özelliklerin biçimi kültür, kişilik ve içinde bulunulan sosyal ortama göre değişebilir."),
      section("Dramatik Davranış Tek Başına Tanı mıdır?", "Hayır. Bir kişinin zaman zaman dramatik tepki vermesi, dikkat çekici giyinmesi veya sosyal ortamlarda canlı davranması klinik tanı için yeterli değildir. Kişilik değerlendirmesi tek davranış yerine uzun dönemli ilişki, benlik algısı, duygu düzenleme ve işlevsellik örüntülerine dayanır."),
      section("Başka Kişilik Örüntüleriyle Karışabilir mi?", "Yoğun duygusal ifadeler, onay ihtiyacı veya ilişkilerdeki güçlükler farklı kişilik örüntülerinde de görülebilir. Borderline, narsisistik veya bağımlı özelliklerle bazı ortak görünümler bulunabilir. Ayırıcı değerlendirme belirtilerin arkasındaki temel ilişki ve benlik örüntüsünü birlikte ele alır."),
      section("Kişilik Örüntüsü Değişebilir mi?", "Evet. Kişilik özellikleri görece süreklilik gösterebilse de değişmez değildir. Kişinin ilişkisel örüntülerini fark etmesi, duygu düzenleme ve iletişim becerilerini geliştirmesi ve yeni ilişkisel deneyimler yaşaması daha esnek davranış biçimlerinin gelişmesine katkıda bulunabilir. Tanı kişiyi bütünüyle tanımlayan bir etiket değildir.")
    ],
    relatedTerms: [
      { term: "Kişilik bozukluğu", slug: "kisilik-bozuklugu" },
      { term: "Borderline kişilik örüntüsü", slug: "borderline-kisilik-oruntusu" },
      { term: "Narsisistik kişilik örüntüsü", slug: "narsisistik-kisilik-oruntusu" },
      { term: "Bağlanma", slug: "baglanma" }
    ],
    seo: {
      title: "Histrionik Kişilik Örüntüsü Nedir? | Psikiyatri Sözlüğü",
      description: "Histrionik kişilik örüntüsünü dikkat ve onay ihtiyacı, duygusal ifade ve kişilerarası ilişkiler çerçevesinde damgalamadan açıklar.",
      ogTitle: "Histrionik Kişilik Örüntüsü Nedir?",
      ogDescription: "Histrionik kişilik özelliklerini tek davranıştan tanı çıkarmadan klinik bağlamıyla açıklar."
    },
    schema: {
      definedTermDescription: "Dikkat ve onay ihtiyacı ile yoğun duygusal ifade ve kişilerarası örüntülerin belirginleşebildiği kişilik yapılanması."
    }
  }),

  defineTerm({
    term: "HPA aksı",
    slug: "hpa-aksi",
    shortDefinition: "HPA aksı, hipotalamus, hipofiz bezi ve adrenal bezler arasındaki hormonal iletişim üzerinden organizmanın stres yanıtının düzenlenmesine katkıda bulunan nöroendokrin sistemdir.",
    intro: "HPA aksı günlük ritimler, fiziksel ve psikolojik stresler ve çok sayıda biyolojik geri bildirim mekanizmasıyla ilişkilidir. Psikiyatrik bozuklukları yalnız HPA aksının fazla veya az çalışmasıyla açıklamak doğru değildir.",
    sections: [
      section("HPA Aksı Nasıl Çalışır?", "Stresle ilişkili sinyaller hipotalamusta başlayan hormonal iletişimi harekete geçirebilir. Hipofiz üzerinden adrenal bezlere iletilen bu sinyaller kortizol dahil stres yanıtıyla ilişkili hormonların düzenlenmesine katkıda bulunur. Sistem aynı zamanda geri bildirim mekanizmalarıyla kendi etkinliğini sınırlar."),
      section("Kortizol ile İlişkisi Nedir?", "Kortizol enerji kullanımının düzenlenmesi, bağışıklık yanıtı ve günlük uyku-uyanıklık ritmi dahil birçok fizyolojik süreçte rol oynar. Kortizol yalnız bir stres hormonu olarak değerlendirilmemelidir ve tek bir ölçüm kişinin psikolojik stres düzeyini güvenilir biçimde açıklamaz."),
      section("Psikiyatride Neden Araştırılır?", "Depresyon, travmayla ilişkili bozukluklar ve kronik stres gibi alanlarda HPA aksındaki grup düzeyindeki farklılıklar araştırılmıştır. Ancak araştırma sonuçları kişiler arasında değişkendir ve günümüzde sıradan bir HPA aksı veya kortizol ölçümü tek başına psikiyatrik tanı koyan test olarak kullanılmaz."),
      section("Beyinle Nasıl Etkileşir?", "Hipokampus, amigdala ve prefrontal bölgeler stres yanıtının algılanması ve düzenlenmesiyle ilişkili ağların parçalarıdır. HPA aksı ile bu beyin bölgeleri arasında çift yönlü ilişkiler bulunur. Psikolojik deneyim, sinir sistemi ve hormonal yanıt birbirinden tamamen bağımsız süreçler değildir.")
    ],
    relatedTerms: [
      { term: "Hipokampus", slug: "hipokampus" },
      { term: "Amigdala", slug: "amigdala" },
      { term: "Travma sonrası stres bozukluğu", slug: "travma-sonrasi-stres-bozuklugu" },
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" }
    ],
    seo: {
      title: "HPA Aksı Nedir? | Psikiyatri Sözlüğü",
      description: "HPA aksının hipotalamus, hipofiz ve adrenal bezler üzerinden stres ve kortizol yanıtını nasıl düzenlediğini ve psikiyatrideki araştırma rolünü açıklar.",
      ogTitle: "HPA Aksı Nedir?",
      ogDescription: "HPA aksını stres yanıtı, kortizol ve beyin ağlarıyla ilişkisi üzerinden açıklar."
    },
    schema: {
      definedTermDescription: "Hipotalamus, hipofiz ve adrenal bezler arasındaki hormonal iletişimle stres yanıtını düzenleyen nöroendokrin sistem."
    }
  }),

  defineTerm({
    term: "ICD",
    slug: "icd",
    shortDefinition: "ICD, Dünya Sağlık Örgütü tarafından geliştirilen ve hastalıklar ile sağlıkla ilişkili durumların uluslararası düzeyde tanımlanması, kodlanması ve sınıflandırılması için kullanılan sistemdir.",
    intro: "ICD yalnız psikiyatrik bozuklukları kapsamaz; bütün tıp alanlarını içeren geniş bir sınıflandırmadır. Ruhsal, davranışsal ve nörogelişimsel bozukluklar da sistem içinde ayrı bölümlerde tanımlanır.",
    sections: [
      section("ICD Ne Amaçla Kullanılır?", "Sağlık sorunlarının ortak bir dil ve kodlama sistemiyle kaydedilmesine yardımcı olur. Klinik iletişim, sağlık istatistikleri, epidemiyolojik araştırmalar ve sağlık sistemlerinin planlanması gibi birçok alanda kullanılabilir. Sınıflandırma farklı ülkeler arasında verilerin karşılaştırılmasını da kolaylaştırır."),
      section("ICD Bir Psikiyatrik Tanı Testi midir?", "Hayır. ICD tanısal sınıflandırma ve kodlama çerçevesi sağlar ancak kişinin bir ölçüt listesini kendi başına işaretlemesi otomatik olarak tanı aldığı anlamına gelmez. Belirtilerin niteliği, süresi, işlevsellik, gelişimsel ve kültürel bağlam ile ayırıcı tanı klinik değerlendirmede birlikte ele alınır."),
      section("ICD ile DSM Arasında Ne Fark Vardır?", "ICD Dünya Sağlık Örgütü tarafından hazırlanır ve bütün hastalıkları kapsar. DSM ise Amerikan Psikiyatri Birliği tarafından yayımlanır ve ruhsal bozukluklara odaklanır. İki sistem birçok alanda benzer kavramlar kullanırken terminoloji, kodlama veya tanısal çerçevede bazı farklılıklar bulunabilir."),
      section("Sınıflandırmalar Neden Zamanla Değişir?", "Tıbbi ve bilimsel bilgi geliştikçe sınıflandırmalar da gözden geçirilir. Bazı tanımlar değişebilir, yeni kategoriler eklenebilir veya eski kavramlar yeniden düzenlenebilir. ICD klinik iletişimi kolaylaştıran önemli bir araçtır ancak kişinin bireysel yaşam öyküsünün ve klinik formülasyonun yerine geçmez.")
    ],
    relatedTerms: [
      { term: "DSM", slug: "dsm" },
      { term: "Ayırıcı tanı", slug: "ayirici-tani" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "Komorbidite", slug: "komorbidite" }
    ],
    seo: {
      title: "ICD Nedir? | Psikiyatri Sözlüğü",
      description: "ICD'nin Dünya Sağlık Örgütü tarafından kullanılan uluslararası hastalık sınıflandırması olduğunu, psikiyatrideki rolünü ve DSM'den farkını açıklar.",
      ogTitle: "ICD Nedir?",
      ogDescription: "ICD hastalık sınıflandırmasının amacı, psikiyatride kullanımı ve DSM ile ilişkisini açıklar."
    },
    schema: {
      definedTermDescription: "Dünya Sağlık Örgütü tarafından geliştirilen hastalıklar ve sağlıkla ilişkili durumların uluslararası sınıflandırma sistemi."
    }
  })
];


const twelfthBatchNewTerms = [
  defineTerm({
    term: "İlaç kan düzeyi",
    slug: "ilac-kan-duzeyi",
    shortDefinition: "İlaç kan düzeyi, bazı ilaçların kandaki miktarının etkinlik, güvenlik ve kişisel değişkenlik açısından değerlendirilmesine yardımcı olmak amacıyla laboratuvar yöntemiyle ölçülmesidir.",
    intro: "Her psikiyatrik ilaç için rutin kan düzeyi ölçümü yapılmaz. Ölçümün gerekli olup olmadığı kullanılan ilaca, klinik duruma, eşlik eden hastalıklara ve izlem hedeflerine göre değişir.",
    sections: [
      section("İlaç Kan Düzeyi Neden Ölçülür?", "Bazı ilaçlarda kandaki düzey ile beklenen etki veya yan etki riski arasında klinik olarak yararlı bir ilişki bulunabilir. Ölçüm, tedavi yanıtının değerlendirilmesine, beklenmeyen yan etkilerin araştırılmasına veya belirli durumlarda güvenli kullanımın izlenmesine katkıda bulunabilir."),
      section("Tek Bir Sonuç Yeterli midir?", "Hayır. Kan düzeyi ölçümü kişinin belirtileri, yan etkileri, kullandığı doz, son dozun zamanı ve diğer klinik bilgilerle birlikte yorumlanır. Laboratuvar değerinin hedef aralıkta olması tek başına tedavinin etkili veya tamamen güvenli olduğunu göstermez."),
      section("Sonucu Hangi Etkenler Değiştirebilir?", "İlacın alınma zamanı, metabolizma hızı, böbrek ve karaciğer işlevleri, başka ilaçlarla etkileşimler ve bazı kişisel biyolojik özellikler kandaki düzeyi etkileyebilir. Bu nedenle ölçümün hangi zamanda yapıldığı da yorum açısından önem taşıyabilir."),
      section("Kan Düzeyine Göre Doz Değiştirilebilir mi?", "Laboratuvar sonucuna bakarak kişinin kendi başına doz değiştirmesi uygun değildir. Doz kararında yalnız sayı değil klinik yanıt, yan etkiler, eşlik eden hastalıklar ve kullanılan diğer ilaçlar birlikte değerlendirilir.")
    ],
    relatedTerms: [
      { term: "İzlem", slug: "izlem" },
      { term: "Farmakokinetik", slug: "farmakokinetik" },
      { term: "Etkileşim", slug: "etkilesim" },
      { term: "Doz titrasyonu", slug: "doz-titrasyonu" }
    ],
    seo: {
      title: "İlaç Kan Düzeyi Nedir? | Psikiyatri Sözlüğü",
      description: "İlaç kan düzeyi ölçümünün neden yapıldığını, hangi etkenlerden etkilendiğini ve neden tek başına doz kararı vermediğini açıklar.",
      ogTitle: "İlaç Kan Düzeyi Nedir?",
      ogDescription: "Psikiyatride terapötik ilaç izleminin temel mantığını açıklar."
    },
    schema: {
      definedTermDescription: "Bazı ilaçların kandaki miktarının etkinlik ve güvenlik açısından değerlendirilmesine yardımcı olan laboratuvar ölçümü."
    }
  }),

  defineTerm({
    term: "İlaç uyumu",
    slug: "ilac-uyumu",
    shortDefinition: "İlaç uyumu, kişinin reçete edilen ilacı önerilen kullanım planına ne ölçüde uygun biçimde kullandığını ifade eden klinik bir kavramdır.",
    intro: "Güncel yaklaşımda ilaç kullanımındaki güçlükleri yalnız kişinin isteksizliği veya sorumsuzluğu olarak değerlendirmek yerine nedenlerini anlamak önemlidir. Yan etkiler, unutkanlık, maliyet, hastalıkla ilgili inançlar ve tedaviye dair kaygılar kullanım düzenini etkileyebilir.",
    sections: [
      section("İlaç Uyumu Neden Önemlidir?", "İlacın düzensiz veya planlanandan farklı kullanılması beklenen etkinin azalmasına, belirtilerin yeniden ortaya çıkmasına veya bazı ilaçlarda güvenlik sorunlarına yol açabilir. Bununla birlikte sorun yalnız kişinin davranışı olarak görülmemeli, kullanım güçlüğünün nedeni araştırılmalıdır."),
      section("İlaç Kullanımını Neler Zorlaştırabilir?", "Yan etkiler, karmaşık kullanım planları, günlük rutinin değişmesi, unutkanlık, ilaç hakkındaki endişeler, damgalanma korkusu veya tedavinin gerekliliğine ilişkin farklı düşünceler etkili olabilir. Kişinin yaşadığı güçlüğün açıkça konuşulması çözüm geliştirmeyi kolaylaştırır."),
      section("Uyum ile İş Birliği Aynı Şey midir?", "Tam olarak değildir. Uyum terimi verilen öneriye ne ölçüde uyulduğunu anlatırken ortak karar verme yaklaşımı kişinin tedavi seçenekleri hakkında bilgilendirilmesini ve karar sürecine aktif katılımını vurgular. Güncel klinik yaklaşımda bu iş birliği önemlidir."),
      section("İlaç Düzensiz Kullanılıyorsa Ne Yapılır?", "Öncelikle nedenin anlaşılması gerekir. Yan etki, kullanım güçlüğü veya tedaviye ilişkin kaygılar varsa bunlar klinik görüşmede ele alınabilir. Reçeteli ilacın dozu veya kullanım biçimi kişisel karar ile değiştirilmemelidir.")
    ],
    relatedTerms: [
      { term: "Bilgilendirilmiş onam", slug: "bilgilendirilmis-onam" },
      { term: "İzlem", slug: "izlem" },
      { term: "Psikoeğitim", slug: "psikoegitim" },
      { term: "Etkileşim", slug: "etkilesim" }
    ],
    seo: {
      title: "İlaç Uyumu Nedir? | Psikiyatri Sözlüğü",
      description: "İlaç uyumunu etkileyen yan etki, unutkanlık ve tedaviye ilişkin inançları damgalamadan açıklar ve ortak karar vermenin önemini ele alır.",
      ogTitle: "İlaç Uyumu Nedir?",
      ogDescription: "İlaç kullanım düzenini etkileyen etkenleri ve tedavi iş birliğini açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin reçete edilen ilacı önerilen kullanım planına ne ölçüde uygun kullandığını ifade eden klinik kavram."
    }
  }),

  defineTerm({
    term: "İntihar riski",
    slug: "intihar-riski",
    shortDefinition: "İntihar riski, kişinin yaşamına son verme düşünceleri veya davranışları açısından mevcut güvenlik durumunun klinik olarak değerlendirilmesini ifade eder.",
    intro: "İntihar riski tek bir soru, test puanı veya tanıyla kesin olarak belirlenemez. Değerlendirme mevcut düşünceler, ruhsal belirtiler, yakın dönem değişiklikleri, önceki öykü, destek kaynakları ve kişinin kendisini güvende tutabilme kapasitesi gibi birçok etkeni birlikte ele alır.",
    sections: [
      section("İntihar Riski Değerlendirmesinde Neler Ele Alınır?", "Kişinin yaşamına son verme düşüncelerinin bulunup bulunmadığı, bu düşüncelerin yoğunluğu ve yakın dönemde değişip değişmediği değerlendirilir. Eşlik eden umutsuzluk, ağır ruhsal belirtiler, madde kullanımı, yakın dönem kayıplar ve destek sistemindeki değişiklikler de klinik bağlam içinde ele alınabilir."),
      section("Koruyucu Etkenler Neden Önemlidir?", "Güvenilir kişilerle bağlantı, yardım isteme kapasitesi, tedaviye erişim, yaşamla bağ kurmayı sağlayan sorumluluklar ve geleceğe yönelik nedenler koruyucu bağlamın parçaları olabilir. Koruyucu etkenlerin bulunması riskin hiç olmadığı anlamına gelmez; risk ve koruyucu etkenler birlikte değerlendirilir."),
      section("Risk Düzeyi Zamanla Değişebilir mi?", "Evet. Ruhsal belirtiler, yaşam olayları, madde kullanımı, kişilerarası krizler veya tedavi sürecindeki değişiklikler güvenlik durumunu kısa sürede değiştirebilir. Bu nedenle risk değerlendirmesi yalnız bir kez yapılan sabit bir sınıflandırma değildir."),
      section("Acil Değerlendirme Ne Zaman Gerekir?", "Kişi kendisini güvende tutamayacağını düşünüyor, yaşamına son verme düşünceleri yoğunlaşıyor veya yakın güvenlik konusunda ciddi kaygı oluşuyorsa gecikmeden acil profesyonel değerlendirme gerekir. Güvenlik planı klinik değerlendirmenin veya acil yardımın yerine geçmez.")
    ],
    relatedTerms: [
      { term: "Güvenlik planı", slug: "guvenlik-plani" },
      { term: "Acil psikiyatri", slug: "acil-psikiyatri" },
      { term: "Kendine zarar verme", slug: "kendine-zarar-verme" },
      { term: "Risk değerlendirmesi", slug: "risk-degerlendirmesi" }
    ],
    seo: {
      title: "İntihar Riski Nedir? | Psikiyatri Sözlüğü",
      description: "İntihar riskinin tek bir testle belirlenemediğini; düşünceler, güvenlik, koruyucu etkenler ve acil değerlendirme gereksinimiyle birlikte ele alındığını açıklar.",
      ogTitle: "İntihar Riski Nedir?",
      ogDescription: "İntihar riskinin güvenli ve klinik değerlendirme çerçevesini açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin yaşamına son verme düşünceleri ve davranışları açısından mevcut güvenlik durumunun klinik değerlendirmesi."
    }
  }),

  defineTerm({
    term: "İzlem",
    slug: "izlem",
    shortDefinition: "İzlem, tedavi veya değerlendirme sürecinde belirtilerin, işlevselliğin, yan etkilerin, güvenliğin ve klinik değişimin zaman içinde düzenli biçimde takip edilmesidir.",
    intro: "Psikiyatrik değerlendirme yalnız ilk görüşmeden ibaret değildir. Belirtilerin zaman içindeki seyri, uygulanan yaklaşımın etkisi ve kişinin yaşam koşullarındaki değişiklikler izlem görüşmelerinde yeniden değerlendirilir. Düzenli izlem, klinik tablodaki küçük ancak anlamlı değişikliklerin erken fark edilmesini de kolaylaştırabilir.",
    sections: [
      section("İzlemde Neler Değerlendirilir?", "Belirtilerin şiddeti ve sıklığı, günlük yaşam işlevselliği, uyku, iş veya okul yaşamı, kişilerarası ilişkiler ve kullanılan tedavilerin etkileri değerlendirilebilir. İlaç kullanılıyorsa yan etkiler ve kullanım düzeni de izlemin parçası olabilir."),
      section("İzlem Sıklığı Nasıl Belirlenir?", "Her kişi için aynı takip aralığı uygun değildir. Belirtilerin şiddeti, yeni başlanmış bir tedavi, güvenlik kaygıları, yan etki riski ve klinik durumun ne kadar hızlı değiştiği izlem sıklığını etkileyebilir."),
      section("Belirti Ölçekleri İzlemde Kullanılabilir mi?", "Evet. Bazı standart ölçekler belirtilerin zaman içindeki değişimini daha sistematik görmek için kullanılabilir. Ancak ölçek puanları klinik görüşmenin, işlevsellik değerlendirmesinin ve kişinin kendi deneyiminin yerine geçmez."),
      section("İyi Hissetmek İzlemi Gereksiz Hale Getirir mi?", "Belirtilerin düzelmesi önemli olmakla birlikte tedavinin sürdürülmesi, olası nüks belirtilerinin tanınması veya ilaç güvenliğinin değerlendirilmesi açısından izlem bir süre daha gerekli olabilir. Takip planı kişisel klinik duruma göre belirlenir.")
    ],
    relatedTerms: [
      { term: "İlaç kan düzeyi", slug: "ilac-kan-duzeyi" },
      { term: "İşlevsellik", slug: "islevsellik" },
      { term: "Remisyon", slug: "remisyon" },
      { term: "Nüks", slug: "nuks" }
    ],
    seo: {
      title: "İzlem Nedir? | Psikiyatri Sözlüğü",
      description: "Psikiyatride izlemin belirtiler, işlevsellik, yan etkiler ve klinik değişimi zaman içinde değerlendirmedeki rolünü açıklar.",
      ogTitle: "İzlem Nedir?",
      ogDescription: "Psikiyatrik takip sürecinin temel amaçlarını açıklar."
    },
    schema: {
      definedTermDescription: "Belirtilerin, işlevselliğin ve tedavi etkilerinin zaman içinde düzenli olarak değerlendirilmesi."
    }
  }),

  defineTerm({
    term: "İçselleştirilmiş stigma",
    slug: "icsellestirilmis-stigma",
    shortDefinition: "İçselleştirilmiş stigma, kişinin ruhsal hastalıklarla ilgili toplumsal önyargıları kendisine yönelterek değersizlik, utanç veya yetersizlik düşünceleri geliştirmesidir.",
    intro: "Toplumsal damgalanma yalnız dışarıdan gelen ayrımcılıkla sınırlı değildir. Kişi zamanla çevresinde duyduğu olumsuz kalıp yargıları kendi kimliğinin parçası gibi kabul etmeye başlayabilir. Bu durum kişinin yardım arama davranışını, sosyal katılımını ve geleceğe ilişkin beklentilerini de etkileyebilir.",
    sections: [
      section("İçselleştirilmiş Stigma Nasıl Gelişebilir?", "Ruhsal hastalıkların zayıflık, tehlikelilik veya kişisel başarısızlıkla eş tutulduğu mesajlara uzun süre maruz kalmak kişinin kendisini benzer biçimde değerlendirmesine yol açabilir. Bu süreç sosyal çevre, medya ve geçmiş ayrımcılık deneyimlerinden etkilenebilir."),
      section("Kişiyi Nasıl Etkileyebilir?", "Utanç, düşük özsaygı, yardım aramaktan kaçınma, sosyal geri çekilme veya gelecek hakkında umutsuzluk gelişebilir. Kişi yalnız başkalarının kendisini reddedeceğini düşünmekle kalmayıp kendi değerini de tanı üzerinden sorgulayabilir."),
      section("Tanı Kişinin Kimliğinin Tamamı mıdır?", "Hayır. Psikiyatrik tanı belirli belirtileri ve klinik örüntüyü tanımlayan bir çerçevedir; kişinin değerlerini, becerilerini, ilişkilerini ve yaşam öyküsünü bütünüyle açıklamaz. Kişiyi yalnız tanısı üzerinden değerlendirmek damgalamayı güçlendirebilir."),
      section("İçselleştirilmiş Stigma Azalabilir mi?", "Evet. Doğru bilgiye erişim, destekleyici ilişkiler, akran desteği, kişinin güçlü yönlerine odaklanılması ve ayrımcı inanışların sorgulanması bu süreci değiştirmeye yardımcı olabilir. Damgalanmanın azaltılması yalnız bireyin değil toplumun da sorumluluğudur.")
    ],
    relatedTerms: [
      { term: "Damgalanma", slug: "damgalanma" },
      { term: "Psikoeğitim", slug: "psikoegitim" },
      { term: "Sosyal destek", slug: "sosyal-destek" },
      { term: "Benlik", slug: "benlik" }
    ],
    seo: {
      title: "İçselleştirilmiş Stigma Nedir? | Psikiyatri Sözlüğü",
      description: "İçselleştirilmiş stigmanın toplumsal önyargıların kişinin benlik algısına dönüşmesiyle nasıl oluştuğunu ve yardım aramayı nasıl etkileyebildiğini açıklar.",
      ogTitle: "İçselleştirilmiş Stigma Nedir?",
      ogDescription: "Ruhsal hastalıklarla ilişkili önyargıların benlik algısına etkisini açıklar."
    },
    schema: {
      definedTermDescription: "Toplumsal ruh sağlığı önyargılarının kişinin kendi benlik değerlendirmesine dönüşmesi."
    }
  }),

  defineTerm({
    term: "İşlev kaybı",
    slug: "islev-kaybi",
    shortDefinition: "İşlev kaybı, ruhsal veya bedensel bir durum nedeniyle kişinin günlük yaşam, iş, okul, öz bakım veya sosyal ilişkilerindeki kapasitesinin önceki düzeyine göre azalmasıdır.",
    intro: "Psikiyatride yalnız belirtilerin varlığı değil, bu belirtilerin kişinin yaşamını ne ölçüde etkilediği de önemlidir. Aynı belirti iki kişide farklı düzeyde işlev kaybına yol açabilir. Değerlendirme bu nedenle kişinin kendi önceki işlev düzeyiyle karşılaştırılarak yapılır.",
    sections: [
      section("İşlevsellik Hangi Alanlarda Değerlendirilir?", "İş veya okul görevlerini sürdürebilme, günlük sorumlulukları yerine getirme, öz bakım, sosyal ilişkiler, aile yaşamı ve boş zaman etkinlikleri değerlendirilebilir. Hangi alanın daha çok etkilendiği kişinin yaşam koşullarına göre değişir."),
      section("Belirti Şiddeti ile İşlev Kaybı Aynı Şey midir?", "Hayır. Belirtiler hafif görünse bile kişinin mesleki veya sosyal yaşamı belirgin biçimde etkilenebilir. Bunun tersine bazı kişiler yoğun belirtilere rağmen belirli alanlarda işlevlerini sürdürebilir. Bu nedenle iki kavram ayrı ayrı değerlendirilir."),
      section("İşlev Kaybı Geçici Olabilir mi?", "Evet. Akut ruhsal dönemler, yoğun stres veya bedensel hastalık sırasında işlevsellik geçici olarak azalabilir. Belirtilerin düzelmesi, çevresel destekler ve uygun tedaviyle işlevsellik yeniden artabilir."),
      section("İşlevsellik Neden Tanıda Önemlidir?", "Birçok psikiyatrik değerlendirmede belirtilerin klinik önemini anlamak için günlük yaşam üzerindeki etkisine bakılır. Ancak işlev kaybının nedeni yalnız ruhsal hastalık olmayabilir; tıbbi, sosyal ve çevresel etkenler de değerlendirilmelidir.")
    ],
    relatedTerms: [
      { term: "İşlevsellik", slug: "islevsellik" },
      { term: "Remisyon", slug: "remisyon" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" }
    ],
    seo: {
      title: "İşlev Kaybı Nedir? | Psikiyatri Sözlüğü",
      description: "İşlev kaybının iş, okul, öz bakım ve ilişkiler üzerindeki etkisini ve belirti şiddetinden neden ayrı değerlendirilmesi gerektiğini açıklar.",
      ogTitle: "İşlev Kaybı Nedir?",
      ogDescription: "Psikiyatride günlük yaşam işlevlerindeki azalmanın nasıl değerlendirildiğini açıklar."
    },
    schema: {
      definedTermDescription: "Ruhsal veya bedensel durum nedeniyle günlük yaşam kapasitesinin önceki düzeye göre azalması."
    }
  }),

  defineTerm({
    term: "Karakter",
    slug: "karakter",
    shortDefinition: "Karakter, kişinin değerleri, seçimleri, sorumluluk anlayışı ve yaşam deneyimleriyle şekillenen davranışsal ve ahlaki eğilimlerini ifade etmek için kullanılan geniş bir kavramdır.",
    intro: "Karakter psikiyatrik tanı değildir ve kişiliğin tamamıyla eş anlamlı kullanılmamalıdır. Günlük dilde karakter sözcüğü olumlu veya olumsuz yargılar içerebilirken klinik değerlendirmede kişiyi ahlaki olarak sınıflandırmaktan kaçınılır. Aynı davranış farklı yaşam koşullarında ve farklı değer sistemleri içinde farklı anlamlar taşıyabilir.",
    sections: [
      section("Karakter ile Kişilik Arasında Ne Fark Vardır?", "Kişilik düşünme, hissetme, ilişki kurma ve davranış örüntülerini kapsayan daha geniş psikolojik yapıyı ifade eder. Karakter ise sıklıkla değerler, seçimler ve öğrenilmiş davranış eğilimleriyle ilişkilendirilir. İki kavramın sınırları kuramsal yaklaşımlara göre değişebilir."),
      section("Karakter Doğuştan mı Gelir?", "Kişinin mizacı biyolojik yatkınlıklarla ilişkili olabilirken karakter özellikleri gelişim, aile, kültür, eğitim ve yaşam deneyimleriyle önemli ölçüde şekillenebilir. Bu ayrım kesin bir biyoloji-çevre ayrılığı anlamına gelmez."),
      section("Karakter Zamanla Değişebilir mi?", "Evet. Değerler, davranış alışkanlıkları ve ilişki kurma biçimleri yeni deneyimler, sorumluluklar ve öğrenme süreçleriyle değişebilir. İnsan davranışını değişmez bir karakter etiketiyle açıklamak aşırı basitleştirici olabilir."),
      section("Kötü Karakter Psikiyatrik Tanı mıdır?", "Hayır. Ahlaki değerlendirmeler ile psikiyatrik tanılar aynı şey değildir. Psikiyatrik değerlendirme kişinin davranışlarını belirti, gelişimsel öykü, işlevsellik ve klinik örüntü içinde ele alır; kişiyi iyi veya kötü olarak sınıflandırmaz.")
    ],
    relatedTerms: [
      { term: "Kişilik", slug: "kisilik" },
      { term: "Mizaç", slug: "mizac" },
      { term: "Benlik", slug: "benlik" },
      { term: "Kimlik", slug: "kimlik" }
    ],
    seo: {
      title: "Karakter Nedir? | Psikiyatri Sözlüğü",
      description: "Karakter kavramını kişilik ve mizaçtan farklarıyla, değerler ve yaşam deneyimleri çerçevesinde açıklar.",
      ogTitle: "Karakter Nedir?",
      ogDescription: "Karakteri psikiyatrik tanı ve ahlaki etiketlerden ayırarak açıklar."
    },
    schema: {
      definedTermDescription: "Değerler, seçimler ve yaşam deneyimleriyle şekillenen davranışsal eğilimleri tanımlayan psikolojik kavram."
    }
  }),

  defineTerm({
    term: "Karbamazepin",
    slug: "karbamazepin",
    shortDefinition: "Karbamazepin, nörolojide bazı nöbet bozukluklarında ve psikiyatride belirli bipolar bozukluk durumlarında kullanılabilen reçeteli bir ilaçtır.",
    intro: "Karbamazepinin kullanım alanı, uygunluğu ve izlem gereksinimleri kişiye göre değişir. Etkileşim potansiyeli ve bazı laboratuvar izlemleri nedeniyle reçeteli kullanımda düzenli klinik değerlendirme önemlidir. İlacın yarar ve risk dengesi kişinin yaşı, eşlik eden hastalıkları, diğer ilaçları ve önceki tedavi yanıtlarıyla birlikte değerlendirilir. Bu değerlendirme zaman içinde yeniden yapılabilir.",
    sections: [
      section("Karbamazepin Psikiyatride Nerede Kullanılır?", "Bazı bipolar bozukluk tablolarında özellikle manik dönemlerin tedavisi veya duygudurum düzenlenmesi amacıyla değerlendirilebilir. Her bipolar bozukluk hastası için ilk veya tek seçenek değildir ve tedavi seçimi klinik özelliklere göre yapılır."),
      section("İlaç Etkileşimleri Neden Önemlidir?", "Karbamazepin bazı karaciğer enzimlerini etkileyerek başka ilaçların kandaki düzeylerini değiştirebilir; başka ilaçlar da karbamazepinin düzeyini etkileyebilir. Bu nedenle kullanılan bütün reçeteli, reçetesiz ve bitkisel ürünlerin klinisyene bildirilmesi önemlidir."),
      section("Neden Laboratuvar İzlemi Gerekebilir?", "Klinik duruma göre kan hücreleri, karaciğer işlevleri, elektrolitler veya ilaç kan düzeyi gibi değerlendirmeler istenebilir. Hangi testlerin ve hangi aralıklarla yapılacağı kişisel tıbbi duruma göre belirlenir."),
      section("Karbamazepin Kendi Kendine Değiştirilebilir mi?", "Hayır. Reçeteli kullanımda dozun artırılması, azaltılması veya ilacın bırakılması kişisel karar ile yapılmamalıdır. Ani değişiklikler bazı kişilerde klinik sorunlara yol açabilir ve tedavi planı ilgili hekimle değerlendirilmelidir.")
    ],
    relatedTerms: [
      { term: "Duygudurum düzenleyici", slug: "duygudurum-duzenleyici" },
      { term: "İlaç kan düzeyi", slug: "ilac-kan-duzeyi" },
      { term: "Etkileşim", slug: "etkilesim" }
    ],
    seo: {
      title: "Karbamazepin Nedir? | Psikiyatri Sözlüğü",
      description: "Karbamazepinin psikiyatrideki genel kullanımını, ilaç etkileşimlerini ve neden klinik ve laboratuvar izlem gerektirebildiğini açıklar.",
      ogTitle: "Karbamazepin Nedir?",
      ogDescription: "Karbamazepini güvenli ilaç bilgisi çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Nörolojik hastalıklarda ve bazı bipolar bozukluk durumlarında kullanılabilen reçeteli ilaç."
    }
  }),

  defineTerm({
    term: "Karma özellik",
    slug: "karma-ozellik",
    shortDefinition: "Karma özellik, bir duygudurum döneminde kişinin baskın depresif veya manik tablosuna karşıt yöndeki bazı belirtilerin de aynı dönemde bulunmasını tanımlayan klinik belirleyicidir.",
    intro: "Karma özellik terimi yalnız kişinin aynı gün içinde mutlu ve üzgün hissetmesi anlamına gelmez. Duygudurum döneminin niteliği, belirtilerin süresi ve eşlik eden aktivasyon belirtileri klinik olarak birlikte değerlendirilir. Özellikle enerji, uyku, düşünce hızı ve davranışlardaki değişimin kişinin olağan durumundan farklı olup olmadığı önemlidir.",
    sections: [
      section("Karma Özellik Nasıl Görülebilir?", "Depresif bir dönemde artmış enerji, konuşkanlık veya düşünce hızında artış gibi manik yöndeki bazı belirtiler bulunabilir. Manik veya hipomanik dönemde ise belirgin çökkünlük gibi depresif belirtiler eşlik edebilir. Görünüm kişiden kişiye değişebilir."),
      section("Karma Özellik Bipolar Bozukluk Demek midir?", "Tek başına otomatik olarak bipolar bozukluk tanısı koydurmaz. Kişinin yaşam boyu duygudurum öyküsü, önceki mani veya hipomani dönemleri, kullanılan ilaçlar ve diğer klinik bilgiler birlikte değerlendirilmelidir."),
      section("Neden Klinik Olarak Önemlidir?", "Karma belirtilerin bulunması duygudurum döneminin deneyimini, ajitasyonu, uyku düzenini ve güvenlik değerlendirmesini etkileyebilir. Tedavi yaklaşımı belirlenirken bu belirtilerin tanınması önem taşıyabilir."),
      section("Karma Özellik Nasıl Değerlendirilir?", "Belirti listesi tek başına yeterli değildir. Süre, şiddet, kişinin olağan durumundan değişiklik, işlevsellik ve belirtilerin başka nedenlerle açıklanıp açıklanamayacağı klinik görüşmede ele alınır.")
    ],
    relatedTerms: [
      { term: "Mani", slug: "mani" },
      { term: "Hipomani", slug: "hipomani" },
      { term: "Majör depresif bozukluk", slug: "major-depresif-bozukluk" },],
    seo: {
      title: "Karma Özellik Nedir? | Psikiyatri Sözlüğü",
      description: "Karma özelliğin depresif ve manik belirtilerin aynı duygudurum döneminde birlikte bulunmasını nasıl tanımladığını açıklar.",
      ogTitle: "Karma Özellik Nedir?",
      ogDescription: "Duygudurum dönemlerinde karma özellik kavramını açıklar."
    },
    schema: {
      definedTermDescription: "Bir duygudurum döneminde karşıt kutba ait bazı belirtilerin eş zamanlı bulunmasını tanımlayan klinik belirleyici."
    }
  }),

  defineTerm({
    term: "Karşı aktarım",
    slug: "karsi-aktarim",
    shortDefinition: "Karşı aktarım, terapistin danışan veya hastayla ilişkisinde ortaya çıkan kendi duygusal, düşünsel ve davranışsal tepkilerini fark edip klinik süreç içinde değerlendirmesini ifade eden kavramdır.",
    intro: "Karşı aktarım yalnız terapistin kişisel sorunu veya hatası anlamına gelmez. Terapötik ilişkide ortaya çıkan tepkiler uygun biçimde fark edildiğinde ilişkiyi ve kişinin kişilerarası örüntülerini anlamaya yardımcı olabilecek klinik bilgi sağlayabilir.",
    sections: [
      section("Karşı Aktarım Nasıl Ortaya Çıkabilir?", "Terapist bazı görüşmelerde alışılmadık ölçüde koruyucu, kızgın, yetersiz, uzak veya baskı altında hissedebilir. Bu tepkiler terapistin kendi yaşam öyküsünden kaynaklanabileceği gibi terapötik ilişkide oluşan karşılıklı etkileşimin de bir parçası olabilir."),
      section("Aktarımdan Farkı Nedir?", "Aktarım kişinin geçmiş ilişkilerindeki beklenti ve duygularının terapötik ilişkiye taşınmasını anlatır. Karşı aktarım ise terapistin kişiye verdiği tepkilerle ilgilidir. Güncel yaklaşımlarda iki süreç karşılıklı ilişkinin parçaları olarak ele alınabilir."),
      section("Karşı Aktarım Neden Fark Edilmelidir?", "Fark edilmeyen yoğun duygusal tepkiler klinik kararları, sınırları veya terapötik ilişkiyi etkileyebilir. Terapistin kendi tepkisini gözlemlemesi, kişinin davranışlarını daha dengeli değerlendirmesine ve kişisel varsayımlarını klinik gerçeklerden ayırmasına yardımcı olur."),
      section("Karşı Aktarım Nasıl Yönetilir?", "Öz farkındalık, süpervizyon, ekip görüşmesi ve mesleki sınırların korunması önemli araçlardır. Amaç duyguların tamamen ortadan kaldırılması değil, bu tepkilerin düşünülmeden klinik kararlara yön vermesini önlemektir.")
    ],
    relatedTerms: [
      { term: "Aktarım", slug: "aktarim" },
      { term: "Psikodinamik terapi", slug: "psikodinamik-terapi" },
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Sınır", slug: "sinir" }
    ],
    seo: {
      title: "Karşı Aktarım Nedir? | Psikiyatri Sözlüğü",
      description: "Karşı aktarımın terapistin terapötik ilişkideki kendi duygusal tepkilerini fark etmesiyle ilgili klinik kavram olduğunu açıklar.",
      ogTitle: "Karşı Aktarım Nedir?",
      ogDescription: "Karşı aktarımı aktarım ve terapötik ilişki çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Terapistin terapötik ilişkide ortaya çıkan kendi duygusal ve düşünsel tepkilerini değerlendirmesiyle ilgili kavram."
    }
  }),

  defineTerm({
    term: "Karşıt olma karşı gelme bozukluğu",
    slug: "karsit-olma-karsi-gelme-bozuklugu",
    shortDefinition: "Karşıt olma karşı gelme bozukluğu, çocuk veya ergende gelişim düzeyine göre belirgin, süreklilik gösteren öfkeli veya huzursuz duygu durumu, tartışmacılık ve karşı gelme örüntüsüyle tanımlanan bozukluktur.",
    intro: "Çocukların zaman zaman kurallara itiraz etmesi, öfkelenmesi veya yetişkinlerle tartışması tek başına psikiyatrik bozukluk anlamına gelmez. Klinik değerlendirme davranışın süresini, sıklığını, yaşa göre beklenen düzeyi ve farklı ortamlardaki işlevsel etkisini dikkate alır.",
    sections: [
      section("Hangi Davranışlar Görülebilir?", "Sık öfkelenme, kolay kızma, yetişkinlerle veya otorite figürleriyle tartışma, kurallara etkin biçimde karşı çıkma veya başkalarını rahatsız etmeye yönelik davranışlar görülebilir. Ancak tek bir davranış veya kısa süreli dönem tanı için yeterli değildir."),
      section("Normal Gelişimsel Karşı Gelmeden Nasıl Ayrılır?", "Özellikle küçük çocuklarda bağımsızlık arayışı ve sınırları test etme gelişimin doğal parçalarıdır. Klinik önem davranışların yaşıtlarına göre belirgin olması, uzun süre devam etmesi ve aile, okul veya sosyal yaşamda ciddi güçlük oluşturmasıyla artar."),
      section("Başka Durumlarla Birlikte Görülebilir mi?", "DEHB, öğrenme güçlükleri, duygudurum veya kaygı sorunları ve aile içi stres gibi durumlar eşlik edebilir. Davranışın nedenini yalnız çocuğun kişiliğine bağlamak yerine gelişimsel, ailesel, okul ve ruhsal etkenler birlikte değerlendirilir."),
      section("Değerlendirmede Aile ve Okul Neden Önemlidir?", "Davranışın farklı ortamlarda nasıl ortaya çıktığını anlamak için ebeveynlerden ve uygun olduğunda okuldan bilgi alınabilir. Amaç çocuğu sorunlu olarak etiketlemek değil, davranışı sürdüren koşulları ve ihtiyaç duyulan desteği belirlemektir.")
    ],
    relatedTerms: [
      { term: "Davranım bozukluğu", slug: "davranim-bozuklugu" },
      { term: "DEHB", slug: "dehb" },
      { term: "Aile görüşmesi", slug: "aile-gorusmesi" },
      { term: "Ebeveyn tutumu", slug: "ebeveyn-tutumu" }
    ],
    seo: {
      title: "Karşıt Olma Karşı Gelme Bozukluğu Nedir? | Psikiyatri Sözlüğü",
      description: "Karşıt olma karşı gelme bozukluğunu normal gelişimsel karşı gelmeden ayıran süreklilik, işlevsellik ve değerlendirme özellikleriyle açıklar.",
      ogTitle: "Karşıt Olma Karşı Gelme Bozukluğu Nedir?",
      ogDescription: "Çocuk ve ergenlerde karşı gelme örüntüsünü damgalamadan açıklar."
    },
    schema: {
      definedTermDescription: "Çocuk veya ergende süreklilik gösteren öfkeli duygu durumu, tartışmacılık ve karşı gelme örüntüsüyle tanımlanan bozukluk."
    }
  }),

  defineTerm({
    term: "Kesilme belirtileri",
    slug: "kesilme-belirtileri",
    shortDefinition: "Kesilme belirtileri, bazı ilaçların özellikle uzun süreli kullanımdan sonra hızlı azaltılması veya bırakılması sırasında ortaya çıkabilen geçici fiziksel veya ruhsal belirtilerdir.",
    intro: "Kesilme belirtileri her ilaçta görülmez ve bağımlılık ile tamamen aynı kavram değildir. Hangi belirtilerin ortaya çıkabileceği kullanılan ilaca, kullanım süresine, kişisel özelliklere ve azaltma biçimine göre değişir. Belirtilerin başlangıç zamanı ve ilaç değişikliğiyle ilişkisi klinik ayrımda yardımcı olabilir.",
    sections: [
      section("Kesilme Belirtileri Neden Ortaya Çıkabilir?", "Sinir sistemi bazı ilaçların uzun süreli etkisine uyum sağlayabilir. İlacın etkisi kısa sürede ortadan kalktığında bu uyumun yeniden dengelenmesi sırasında çeşitli belirtiler ortaya çıkabilir. Mekanizma kullanılan ilaç grubuna göre farklılık gösterir."),
      section("Kesilme ile Hastalığın Tekrarı Aynı Şey midir?", "Hayır. Kesilme belirtileri bazen asıl hastalığın geri dönmesine benzeyebilir ancak zamanlama, belirti örüntüsü ve kullanılan ilaçla ilişkisi ayrımda yardımcı olabilir. Bu ayrım klinik değerlendirme gerektirir."),
      section("Her İlaç Aniden Bırakılabilir mi?", "Hayır. Bazı reçeteli ilaçlarda ani bırakma belirgin kesilme belirtilerine veya başka klinik sorunlara yol açabilir. İlacın azaltılması veya bırakılması gerekiyorsa plan ilgili hekimle birlikte oluşturulmalıdır."),
      section("Kesilme Belirtileri Ortaya Çıkarsa Ne Yapılır?", "Belirtilerin nedeni, şiddeti ve kullanılan ilaç birlikte değerlendirilmelidir. Kişinin kendi başına tekrar doz başlatması, artırması veya farklı bir azaltma planı uygulaması yerine klinik değerlendirme alması daha güvenlidir.")
    ],
    relatedTerms: [
      { term: "Benzodiazepin", slug: "benzodiazepin" },
      { term: "Antidepresan", slug: "antidepresan" },
      { term: "Doz titrasyonu", slug: "doz-titrasyonu" },
      { term: "İzlem", slug: "izlem" }
    ],
    seo: {
      title: "Kesilme Belirtileri Nedir? | Psikiyatri Sözlüğü",
      description: "Bazı psikiyatrik ilaçların hızlı azaltılması veya bırakılması sırasında görülebilen kesilme belirtilerini ve nüksten farkını açıklar.",
      ogTitle: "Kesilme Belirtileri Nedir?",
      ogDescription: "İlaç kesilme belirtilerini güvenli ilaç bilgisi çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Bazı ilaçların hızlı azaltılması veya bırakılması sırasında ortaya çıkabilen geçici fiziksel veya ruhsal belirtiler."
    }
  }),

  defineTerm({
    term: "Kimlik",
    slug: "kimlik",
    shortDefinition: "Kimlik, kişinin kendisini kim olarak gördüğünü, değerlerini, aidiyetlerini, yaşam hedeflerini ve farklı rollerini zaman içinde bir bütünlük içinde deneyimlemesini ifade eden psikolojik kavramdır.",
    intro: "Kimlik tek bir özellikten oluşmaz. Meslek, aile, kültür, ilişkiler, değerler ve kişisel hedefler kişinin kendisini anlamlandırma biçimine farklı ölçülerde katkıda bulunabilir. Bu alanların önemi yaşamın farklı dönemlerinde değişebilir ve yeniden düzenlenebilir.",
    sections: [
      section("Kimlik Nasıl Gelişir?", "Kimlik gelişimi çocuklukta başlayan ancak özellikle ergenlik ve genç yetişkinlikte yoğunlaşan bir süreçtir. Kişi farklı roller, değerler ve yaşam seçenekleri arasında deneyim kazanarak kendisine ilişkin daha bütünlüklü bir anlatı oluşturabilir."),
      section("Kimlik Değişebilir mi?", "Evet. Yeni ilişkiler, yaşam olayları, mesleki roller, kültürel deneyimler ve kişisel gelişim kişinin kendisini tanımlama biçimini değiştirebilir. Kimliğin değişmesi her zaman psikolojik sorun anlamına gelmez."),
      section("Kimlik ile Benlik Aynı Şey midir?", "Yakın kavramlar olmakla birlikte tamamen aynı değildir. Benlik kişinin kendisiyle ilgili düşünce ve deneyimlerinin daha geniş bütününü ifade edebilir; kimlik ise kişinin kim olduğu ve yaşamda nerede durduğuna ilişkin daha örgütlü süreklilik duygusunu vurgular."),
      section("Kimlik Güçlüğü Ne Zaman Klinik Önem Taşır?", "Kimliğe ilişkin belirsizlik gelişimsel dönemlerde olağan olabilir. Ancak kişinin kendilik algısında yoğun ve süreğen kararsızlık, ilişkilerde ciddi dengesizlik veya belirgin işlev kaybı varsa daha kapsamlı değerlendirme gerekebilir.")
    ],
    relatedTerms: [
      { term: "Benlik", slug: "benlik" },
      { term: "Kişilik", slug: "kisilik" },
      { term: "Karakter", slug: "karakter" },
      { term: "Ergenlik", slug: "ergenlik" }
    ],
    seo: {
      title: "Kimlik Nedir? | Psikiyatri Sözlüğü",
      description: "Kimlik kavramını değerler, roller, aidiyetler ve benlik sürekliliği üzerinden açıklar ve gelişim boyunca değişebileceğini ele alır.",
      ogTitle: "Kimlik Nedir?",
      ogDescription: "Kimliğin psikolojik ve gelişimsel anlamını açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin kendisini kim olarak gördüğüne, değerlerine, aidiyetlerine ve yaşam rollerine ilişkin bütünlük duygusu."
    }
  }),

  defineTerm({
    term: "Kişilik",
    slug: "kisilik",
    shortDefinition: "Kişilik, kişinin düşünme, hissetme, ilişki kurma, çevresini yorumlama ve davranma biçimlerinde zaman içinde görece süreklilik gösteren bireysel örüntülerin bütünüdür.",
    intro: "Kişilik yalnız birkaç sıfatla veya tek bir test sonucuyla açıklanamaz. Biyolojik yatkınlıklar, gelişimsel deneyimler, kültür ve yaşam boyunca edinilen öğrenmeler kişilik özelliklerinin oluşumuna katkıda bulunur. Kişilik özellikleri kişinin çevreyle etkileşim biçimini etkilerken içinde bulunulan koşullar da davranışın nasıl ortaya çıkacağını belirleyebilir.",
    sections: [
      section("Kişilik Hangi Özellikleri Kapsar?", "Duygusal tepkiler, sosyal ilişki biçimleri, dürtü kontrolü, yeniliğe açıklık, sorumluluk anlayışı, stresle baş etme ve kendini algılama gibi birçok alan kişiliğin parçaları olabilir. Bu özellikler herkeste farklı düzeylerde bulunur."),
      section("Kişilik Değişmez midir?", "Hayır. Kişilik özelliklerinde belli bir süreklilik bulunabilse de insanlar yaşam deneyimleri, ilişkiler, yaş ve psikolojik çalışmalarla değişebilir. Özellikle davranış biçimleri ve ilişki örüntülerinde zaman içinde esneklik gelişebilir."),
      section("Kişilik ile Kişilik Bozukluğu Aynı Şey midir?", "Hayır. Her insanın kişilik özellikleri vardır. Kişilik bozukluğu ise belirli örüntülerin uzun süreli, katı ve farklı yaşam alanlarında belirgin işlev kaybı veya sıkıntıyla ilişkili olduğu klinik durumları ifade eder."),
      section("Kişilik Nasıl Değerlendirilir?", "Klinik görüşme, yaşam öyküsü, ilişkilerdeki süreklilik gösteren örüntüler ve gerektiğinde yapılandırılmış değerlendirme araçları kullanılabilir. Tek bir davranış veya çevrimiçi kişilik testi klinik tanı için yeterli değildir.")
    ],
    relatedTerms: [
      { term: "Kişilik bozukluğu", slug: "kisilik-bozuklugu" },
      { term: "Karakter", slug: "karakter" },
      { term: "Mizaç", slug: "mizac" },
      { term: "Kimlik", slug: "kimlik" }
    ],
    seo: {
      title: "Kişilik Nedir? | Psikiyatri Sözlüğü",
      description: "Kişiliği düşünme, hissetme ve ilişki kurma örüntülerinin bütünü olarak açıklar ve kişilik bozukluğundan farkını ele alır.",
      ogTitle: "Kişilik Nedir?",
      ogDescription: "Kişilik kavramını gelişimsel ve klinik çerçevesiyle açıklar."
    },
    schema: {
      definedTermDescription: "Düşünme, hissetme, ilişki kurma ve davranma biçimlerinde görece süreklilik gösteren bireysel örüntülerin bütünü."
    }
  }),

  defineTerm({
    term: "Klinik görüşme",
    slug: "klinik-gorusme",
    shortDefinition: "Klinik görüşme, kişinin belirtilerinin, yaşam ve sağlık öyküsünün, işlevselliğinin, ihtiyaçlarının ve güvenlik durumunun uzman tarafından sistematik biçimde değerlendirildiği temel klinik süreçtir.",
    intro: "Psikiyatrik değerlendirme yalnız test veya ölçeklerden oluşmaz. Klinik görüşme kişinin yaşadığı güçlüğü kendi yaşam bağlamı içinde anlamaya ve farklı açıklamaları birlikte değerlendirmeye yardımcı olur. Görüşmenin içeriği başvuru nedeni ve klinik gereksinime göre şekillenir.",
    sections: [
      section("Klinik Görüşmede Neler Sorulabilir?", "Başvuru nedeni, belirtilerin ne zaman başladığı, nasıl değiştiği, uyku, iştah, enerji, düşünce ve duygu durumu, günlük işlevsellik, tıbbi öykü ve kullanılan ilaçlar ele alınabilir. Sorular kişinin başvuru nedenine göre değişir."),
      section("Geçmiş Öykü Neden Önemlidir?", "Önceki ruhsal dönemler, tedaviler, aile öyküsü, gelişimsel deneyimler ve önemli yaşam olayları mevcut belirtilerin daha doğru anlaşılmasına yardımcı olabilir. Amaç yalnız geçmişi toplamak değil, belirtilerin zaman içindeki örüntüsünü anlamaktır."),
      section("Klinik Görüşme Bir Test midir?", "Hayır. Yapılandırılmış sorular kullanılabilse de klinik görüşme mekanik bir test değildir. Uzman kişinin verdiği bilgileri gözlem, tıbbi bağlam, işlevsellik ve gerektiğinde ek değerlendirmelerle birlikte yorumlar."),
      section("Tek Görüşmede Her Şey Anlaşılır mı?", "Her zaman değil. Bazı belirtilerin seyri zaman içinde daha iyi anlaşılır veya ek bilgi gerekebilir. Bu nedenle tanısal değerlendirme ve klinik formülasyon gerektiğinde birden fazla görüşme ve izlem sonucunda netleşebilir.")
    ],
    relatedTerms: [
      { term: "Ayırıcı tanı", slug: "ayirici-tani" },
      { term: "Formülasyon", slug: "formulasyon" },
      { term: "İzlem", slug: "izlem" },
      { term: "Aile görüşmesi", slug: "aile-gorusmesi" }
    ],
    seo: {
      title: "Klinik Görüşme Nedir? | Psikiyatri Sözlüğü",
      description: "Klinik görüşmenin belirtileri, öyküyü, işlevselliği ve güvenliği değerlendirmedeki rolünü ve neden tek bir testten farklı olduğunu açıklar.",
      ogTitle: "Klinik Görüşme Nedir?",
      ogDescription: "Psikiyatrik klinik görüşmenin temel bileşenlerini açıklar."
    },
    schema: {
      definedTermDescription: "Belirtilerin, öykünün, işlevselliğin ve ihtiyaçların uzman tarafından sistematik biçimde değerlendirildiği klinik süreç."
    }
  }),

  defineTerm({
    term: "Konsültasyon",
    slug: "konsultasyon",
    shortDefinition: "Konsültasyon, bir sağlık uzmanının kişinin değerlendirme veya tedavi sürecinde başka bir uzmanlık alanından görüş ve katkı istemesi sürecidir.",
    intro: "Psikiyatrik belirtiler bazen bedensel hastalıklar, kullanılan ilaçlar veya başka uzmanlık alanlarının değerlendirmesini gerektiren durumlarla ilişkili olabilir. Konsültasyon farklı uzmanlıkların aynı klinik soruya birlikte katkı sağlamasına yardımcı olur. Böylece karmaşık durumlarda değerlendirme tek bir uzmanlık alanının bakış açısıyla sınırlı kalmaz.",
    sections: [
      section("Konsültasyon Neden İstenir?", "Belirtilerin olası tıbbi nedenlerinin değerlendirilmesi, ilaç etkileşimlerinin incelenmesi veya başka bir uzmanlık alanına özgü klinik sorunun yanıtlanması amacıyla konsültasyon istenebilir. Amaç sorumluluğu başka bir uzmana devretmek değil, değerlendirmeyi tamamlamaktır."),
      section("Psikiyatri Konsültasyonu Nerelerde Yapılır?", "Genel hastanelerde yatan hastalar, acil servisler, cerrahi veya dahiliye klinikleri gibi farklı ortamlarda psikiyatrik değerlendirme gerekebilir. Bedensel hastalığa eşlik eden ruhsal belirtiler veya tedaviye uyum güçlükleri bu değerlendirmelerin konusu olabilir."),
      section("Konsültasyon Sevk ile Aynı Şey midir?", "Tam olarak değildir. Sevkte kişinin bakımının başka bir birime aktarılması söz konusu olabilir. Konsültasyonda ise ana tedavi ekibi devam ederken başka bir uzman belirli bir konuda görüş bildirir ve ekipler birlikte çalışabilir."),
      section("Bilgi Paylaşımı Nasıl Olur?", "Konsültasyon için gerekli tıbbi bilgiler sağlık hizmetinin gizlilik ve mahremiyet ilkeleri çerçevesinde paylaşılır. Hangi bilgilerin gerekli olduğu ve paylaşımın kapsamı klinik gereksinime göre belirlenir.")
    ],
    relatedTerms: [
      { term: "Liyezon psikiyatrisi", slug: "liyezon-psikiyatrisi" },
      { term: "Gizlilik", slug: "gizlilik" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "Ayırıcı tanı", slug: "ayirici-tani" }
    ],
    seo: {
      title: "Konsültasyon Nedir? | Psikiyatri Sözlüğü",
      description: "Konsültasyonun farklı uzmanlık alanlarının değerlendirme ve tedavi sürecine birlikte katkı sağlamasını nasıl ifade ettiğini açıklar.",
      ogTitle: "Konsültasyon Nedir?",
      ogDescription: "Sağlık hizmetlerinde konsültasyon sürecini açıklar."
    },
    schema: {
      definedTermDescription: "Bir sağlık uzmanının değerlendirme veya tedavi sürecinde başka bir uzmanlık alanından görüş istemesi."
    }
  }),

  defineTerm({
    term: "Kortizol",
    slug: "kortizol",
    shortDefinition: "Kortizol, adrenal bezlerden salgılanan ve enerji metabolizması, bağışıklık sistemi, günlük ritim ve stres yanıtının düzenlenmesinde rol alan steroid hormondur.",
    intro: "Kortizol sıklıkla stres hormonu olarak adlandırılsa da yalnız psikolojik stres sırasında salgılanmaz. Gün boyunca doğal bir ritim gösterir ve vücudun birçok normal fizyolojik işlevinde görev alır. Bu nedenle tek bir kortizol değerini kişinin ruhsal durumunun doğrudan göstergesi olarak yorumlamak uygun değildir.",
    sections: [
      section("Kortizol Vücutta Ne Yapar?", "Kan şekeri ve enerji kullanımının düzenlenmesi, bağışıklık yanıtının ayarlanması ve dolaşım sisteminin stres koşullarına uyum sağlaması gibi süreçlerde rol oynar. Bu etkiler normal fizyolojinin parçasıdır."),
      section("Kortizol Gün Boyunca Aynı mıdır?", "Hayır. Kortizol düzeyi günlük biyolojik ritme göre değişir ve genellikle günün farklı saatlerinde farklı değerler gösterir. Uyku düzeni, fiziksel hastalık, ilaçlar ve ölçüm zamanı sonucu etkileyebilir."),
      section("Psikiyatride Neden Araştırılır?", "Depresyon, travma ve kronik stres gibi alanlarda HPA aksı ve kortizol düzenlenmesine ilişkin grup düzeyinde araştırmalar yapılmıştır. Bulgular önemli olsa da tek bir kortizol değeri psikiyatrik tanı koyan biyobelirteç değildir."),
      section("Yüksek Kortizol Stresli Olduğumu Gösterir mi?", "Tek başına hayır. Kortizol değerinin yorumu örneğin alındığı zaman, kullanılan yöntem, tıbbi hastalıklar ve ilaçlar gibi birçok etkene bağlıdır. Psikolojik stres düzeyini yalnız tek bir laboratuvar sonucuyla belirlemek uygun değildir.")
    ],
    relatedTerms: [
      { term: "HPA aksı", slug: "hpa-aksi" },
      { term: "Hipokampus", slug: "hipokampus" },
      { term: "Amigdala", slug: "amigdala" },],
    seo: {
      title: "Kortizol Nedir? | Psikiyatri Sözlüğü",
      description: "Kortizolün stres yanıtı, günlük ritim ve metabolizmadaki rolünü ve tek bir kortizol ölçümünün psikiyatrik tanı koydurmadığını açıklar.",
      ogTitle: "Kortizol Nedir?",
      ogDescription: "Kortizolü HPA aksı ve stres yanıtıyla ilişkisi üzerinden açıklar."
    },
    schema: {
      definedTermDescription: "Adrenal bezlerden salgılanan, metabolizma ve stres yanıtının düzenlenmesinde rol alan steroid hormon."
    }
  }),

  defineTerm({
    term: "Koruyucu ruh sağlığı",
    slug: "koruyucu-ruh-sagligi",
    shortDefinition: "Koruyucu ruh sağlığı, ruhsal sorunların ortaya çıkma olasılığını azaltmayı, erken belirtileri fark etmeyi ve bireysel ve toplumsal dayanıklılığı güçlendirmeyi amaçlayan yaklaşım ve uygulamaların bütünüdür.",
    intro: "Ruh sağlığını korumak yalnız hastalık ortaya çıktıktan sonra tedavi sunmak anlamına gelmez. Risk etkenlerini azaltmak, destekleyici çevreler oluşturmak ve erken yardım yollarını erişilebilir kılmak da ruh sağlığı hizmetlerinin önemli parçalarıdır.",
    sections: [
      section("Koruyucu Ruh Sağlığı Hangi Düzeylerde Ele Alınır?", "Toplumun tamamına yönelik ruh sağlığı okuryazarlığı çalışmaları, risk grubundaki kişilere yönelik erken destekler ve mevcut hastalığı olan kişilerde nüks veya işlev kaybını azaltmaya yönelik uygulamalar farklı koruma düzeyleri olarak ele alınabilir."),
      section("Risk Etkenlerini Azaltmak Ne Anlama Gelir?", "Şiddet, sosyal izolasyon, kronik stres, madde kullanımı ve sağlık hizmetine erişim güçlüğü gibi etkenlerin azaltılması ruh sağlığını destekleyebilir. Risk etkenleri kişinin iradesinden bağımsız toplumsal ve ekonomik koşullarla da ilişkili olabilir."),
      section("Koruyucu Etkenler Nelerdir?", "Güvenli ilişkiler, sosyal destek, düzenli yaşam, anlamlı etkinlikler, okul veya iş ortamında destek, sorun çözme becerileri ve gerektiğinde profesyonel yardıma erişim koruyucu bağlamın parçaları olabilir."),
      section("Koruyucu Ruh Sağlığı Hastalığı Tamamen Önler mi?", "Hayır. Biyolojik yatkınlıklar ve öngörülemeyen yaşam olayları nedeniyle tüm ruhsal sorunların önlenmesi mümkün değildir. Amaç riski azaltmak, erken tanımayı kolaylaştırmak ve sorun ortaya çıktığında daha hızlı destek sağlamaktır.")
    ],
    relatedTerms: [
      { term: "Psikoeğitim", slug: "psikoegitim" },
      { term: "Sosyal destek", slug: "sosyal-destek" },],
    seo: {
      title: "Koruyucu Ruh Sağlığı Nedir? | Psikiyatri Sözlüğü",
      description: "Koruyucu ruh sağlığının riskleri azaltma, dayanıklılığı güçlendirme ve erken desteği kolaylaştırmadaki rolünü açıklar.",
      ogTitle: "Koruyucu Ruh Sağlığı Nedir?",
      ogDescription: "Ruh sağlığında koruma ve erken müdahale yaklaşımını açıklar."
    },
    schema: {
      definedTermDescription: "Ruhsal sorun riskini azaltmayı ve bireysel ve toplumsal dayanıklılığı güçlendirmeyi amaçlayan yaklaşım."
    }
  }),

  defineTerm({
    term: "Kriz müdahalesi",
    slug: "kriz-mudahalesi",
    shortDefinition: "Kriz müdahalesi, kişinin olağan baş etme yollarının yetersiz kaldığı ani ve yoğun ruhsal zorlanma döneminde güvenliği, temel ihtiyaçları ve kısa vadeli dengeyi desteklemeye yönelik hızlı klinik yaklaşımdır.",
    intro: "Kriz müdahalesinin amacı kişinin bütün yaşam sorunlarını tek görüşmede çözmek değildir. Öncelik mevcut güvenliği değerlendirmek, krizi ağırlaştıran etkenleri anlamak ve kişinin ulaşabileceği destekleri harekete geçirmektir.",
    sections: [
      section("Kriz Olarak Ne Değerlendirilebilir?", "Yakın bir kayıp, ciddi kişilerarası çatışma, travmatik olay, ağırlaşan ruhsal belirtiler veya kişinin olağan baş etme kapasitesini aşan başka bir durum kriz oluşturabilir. Aynı olay farklı kişilerde farklı düzeyde kriz yaratabilir."),
      section("İlk Öncelik Nedir?", "Kişinin ve çevresinin güvenliği, mevcut tıbbi veya psikiyatrik aciller ve kişinin kendisini güvende tutabilme kapasitesi değerlendirilir. Gerektiğinde daha yoğun veya acil sağlık hizmetine yönlendirme yapılabilir."),
      section("Kriz Müdahalesinde Ne Yapılır?", "Sorun kısa ve somut biçimde tanımlanır, mevcut destek kaynakları belirlenir ve kişinin önündeki en yakın güvenli adımlar planlanır. Karmaşık uzun dönem sorunlardan önce krizi sürdüren acil ihtiyaçlara odaklanılır."),
      section("Kriz Geçince Destek Biter mi?", "Her zaman değil. Kriz yatıştıktan sonra altta yatan ruhsal sorunlar, sosyal güçlükler veya tekrar riskini artıran etkenler için izlem gerekebilir. Güvenlik planı ve sonraki destek basamakları klinik duruma göre gözden geçirilir.")
    ],
    relatedTerms: [
      { term: "Güvenlik planı", slug: "guvenlik-plani" },
      { term: "Acil psikiyatri", slug: "acil-psikiyatri" },
      { term: "İntihar riski", slug: "intihar-riski" },
      { term: "Sosyal destek", slug: "sosyal-destek" }
    ],
    seo: {
      title: "Kriz Müdahalesi Nedir? | Psikiyatri Sözlüğü",
      description: "Kriz müdahalesinin ani ruhsal zorlanmada güvenlik, kısa vadeli denge ve destek kaynaklarını harekete geçirmeye nasıl odaklandığını açıklar.",
      ogTitle: "Kriz Müdahalesi Nedir?",
      ogDescription: "Ruhsal krizlerde güvenli ve kısa vadeli müdahale yaklaşımını açıklar."
    },
    schema: {
      definedTermDescription: "Ani yoğun ruhsal zorlanmada güvenliği ve kısa vadeli dengeyi desteklemeye yönelik hızlı klinik yaklaşım."
    }
  }),

  defineTerm({
    term: "Kusurluluk şeması",
    slug: "kusurluluk-semasi",
    shortDefinition: "Kusurluluk şeması, kişinin kendisini temel olarak eksik, hatalı, değersiz veya sevgiye layık olmayan biri olarak görmeye yatkın olduğu kalıcı bilişsel ve duygusal örüntüyü ifade eder.",
    intro: "Şema terapi yaklaşımında bu kavram kişinin yaşam boyunca tekrar eden bazı benlik ve ilişki örüntülerini anlamak için kullanılır. Kusurluluk şeması psikiyatrik tanı değildir ve kişinin gerçekten kusurlu olduğu anlamına gelmez. Bu örüntü farklı ilişkilerde ve farklı yaşam dönemlerinde farklı yoğunluklarda ortaya çıkabilir.",
    sections: [
      section("Kusurluluk Şeması Nasıl Hissedilebilir?", "Kişi eleştirilme, reddedilme veya gerçek benliğinin görülmesi durumunda başkalarının kendisini değersiz bulacağına inanabilir. Utanç, yoğun öz eleştiri veya olumlu geri bildirimleri kabul etmekte zorlanma görülebilir."),
      section("İlişkileri Nasıl Etkileyebilir?", "Kişi reddedilmekten kaçınmak için aşırı uyum gösterebilir, yakın ilişkilerden uzak durabilir veya kendisini sürekli başkalarıyla karşılaştırabilir. Bazı kişiler ise kusurluluk duygusunu telafi etmek için dışarıdan kusursuz görünmeye yoğun çaba gösterebilir."),
      section("Şema Nereden Gelişebilir?", "Eleştirel veya aşağılayıcı ilişkiler, reddedilme deneyimleri ve kişinin kabul edilme koşullarına ilişkin erken öğrenmeleri katkıda bulunabilir. Bununla birlikte tek bir çocukluk olayı veya ebeveyn davranışı şemayı otomatik olarak açıklamaz."),
      section("Kusurluluk Şeması Değişebilir mi?", "Evet. Kişinin otomatik öz değerlendirmelerini fark etmesi, bunları daha gerçekçi biçimde sorgulaması ve güvenli ilişkilerde yeni deneyimler yaşaması şemanın etkisini azaltabilir. Şema kişinin değişmez kimliği değildir.")
    ],
    relatedTerms: [
      { term: "Şema terapi", slug: "sema-terapi" },
      { term: "Benlik", slug: "benlik" },
      { term: "Duygusal yoksunluk", slug: "duygusal-yoksunluk" },
      { term: "İçselleştirilmiş stigma", slug: "icsellestirilmis-stigma" }
    ],
    seo: {
      title: "Kusurluluk Şeması Nedir? | Psikiyatri Sözlüğü",
      description: "Kusurluluk şemasının değersizlik ve utanç duyguları, öz eleştiri ve ilişkiler üzerindeki etkisini şema terapi çerçevesinde açıklar.",
      ogTitle: "Kusurluluk Şeması Nedir?",
      ogDescription: "Kusurluluk şemasını damgalamadan ve değişebilir bir örüntü olarak açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin kendisini temel olarak eksik veya değersiz görmeye yatkın olduğu kalıcı bilişsel ve duygusal şema."
    }
  })
];


const thirteenthBatchNewTerms = [
  defineTerm({
    term: "Lamotrijin",
    slug: "lamotrijin",
    shortDefinition: "Lamotrijin, epilepside ve psikiyatride özellikle bipolar bozukluğun bazı dönemlerinde kullanılan reçeteli bir ilaçtır.",
    intro: "Lamotrijin psikiyatride daha çok bipolar bozuklukta duygudurum dönemlerinin önlenmesi bağlamında değerlendirilir. Kullanım amacı, doz planı ve izlem gereksinimi kişisel klinik özelliklere göre belirlenir; her bipolar tablo için aynı şekilde kullanılmaz.",
    sections: [
      section("Lamotrijin Psikiyatride Nerede Kullanılır?", "Lamotrijin özellikle bipolar bozuklukta depresif dönemlerin tekrarını azaltmaya yönelik uzun dönem tedavi planlarında değerlendirilebilir. Akut mani tedavisindeki rolü farklıdır ve tedavi seçimi kişinin geçmiş dönemleri, eşlik eden belirtileri ve önceki tedavi yanıtlarıyla birlikte yapılır."),
      section("Doz Neden Yavaş Artırılır?", "Lamotrijin kullanımında doz çoğunlukla basamaklı biçimde artırılır. Bunun önemli nedenlerinden biri bazı cilt reaksiyonlarının riskini azaltmaktır. Doz artırma hızı kullanılan diğer ilaçlara ve kişisel tıbbi özelliklere göre değişebileceğinden standart bir kişisel doz önerisi verilemez."),
      section("Cilt Bulguları Neden Önemlidir?", "Yeni başlayan döküntü veya başka belirgin cilt bulguları klinik değerlendirme gerektirebilir. Her döküntü ciddi bir reaksiyon anlamına gelmez ancak lamotrijin kullanımı sırasında yeni bir cilt bulgusunun kendi kendine yorumlanması yerine sağlık profesyoneli tarafından değerlendirilmesi önemlidir."),
      section("Lamotrijin Kendi Kendine Değiştirilebilir mi?", "Hayır. Reçeteli bir ilacın dozunun artırılması, azaltılması, kesilmesi veya ara verildikten sonra yeniden başlanması kişisel kararla yapılmamalıdır. Özellikle kullanım kesintilerinden sonra yeniden başlama planı klinik değerlendirmeye göre değişebilir.")
    ],
    relatedTerms: [
      { term: "Duygudurum düzenleyici", slug: "duygudurum-duzenleyici" },
      { term: "İzlem", slug: "izlem" },
      { term: "Farmakokinetik", slug: "farmakokinetik" },
      { term: "Kesilme belirtileri", slug: "kesilme-belirtileri" }
    ],
    seo: {
      title: "Lamotrijin Nedir? | Psikiyatri Sözlüğü",
      description: "Lamotrijinin bipolar bozukluktaki genel kullanımını, yavaş doz artırma gereksinimini ve cilt bulgularının neden önemli olduğunu açıklar.",
      ogTitle: "Lamotrijin Nedir?",
      ogDescription: "Lamotrijini güvenli ilaç bilgisi çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Epilepside ve bazı bipolar bozukluk durumlarında kullanılan reçeteli ilaç."
    }
  }),

  defineTerm({
    term: "Limbik sistem",
    slug: "limbik-sistem",
    shortDefinition: "Limbik sistem, duygu, motivasyon, bellek ve stres yanıtı gibi süreçlere katkıda bulunan birbiriyle bağlantılı beyin bölgelerini tanımlamak için kullanılan nörobiyolojik kavramdır.",
    intro: "Limbik sistem tek bir anatomik yapı değildir. Amigdala, hipokampus ve bunlarla bağlantılı kortikal ve subkortikal bölgelerden oluşan işlevsel ağları anlatmak için kullanılan tarihsel ve klinik bir terimdir.",
    sections: [
      section("Limbik Sistem Hangi Süreçlerde Rol Alır?", "Duygusal uyaranların değerlendirilmesi, öğrenme, bellek, motivasyon ve stres yanıtının düzenlenmesi gibi süreçlerde limbik ağların katkısı vardır. Bu işlevler tek bir bölge tarafından değil, birçok beyin bölgesinin karşılıklı etkileşimiyle ortaya çıkar."),
      section("Amigdala ve Hipokampus Aynı Görevi mi Yapar?", "Hayır. Amigdala özellikle duygusal önem ve tehdit gibi uyaranların değerlendirilmesiyle ilişkilendirilirken hipokampus yeni anıların oluşumu ve bağlamsal öğrenmede önemli rol oynar. Bununla birlikte iki yapı birçok durumda birlikte çalışan ağların parçalarıdır."),
      section("Psikiyatrik Bozukluklarda Neden Araştırılır?", "Depresyon, anksiyete, travma sonrası stres ve başka ruhsal durumlarda limbik ağların işlevleri araştırılmıştır. Ancak grup düzeyindeki beyin görüntüleme bulguları tek bir kişide tanı koyan veya hastalığı kesin gösteren biyobelirteçler değildir."),
      section("Limbik Sistem Beynin Geri Kalanından Bağımsız mıdır?", "Hayır. Prefrontal korteks, beyin sapı ve başka birçok bölgeyle yoğun bağlantılar bulunur. Duygu ve davranış bu ağların birlikte çalışmasıyla şekillenir; karmaşık insan davranışını yalnız limbik sistem üzerinden açıklamak aşırı basitleştirici olur.")
    ],
    relatedTerms: [
      { term: "Amigdala", slug: "amigdala" },
      { term: "Hipokampus", slug: "hipokampus" },
      { term: "Anterior singulat korteks", slug: "anterior-singulat-korteks" },
      { term: "HPA aksı", slug: "hpa-aksi" }
    ],
    seo: {
      title: "Limbik Sistem Nedir? | Psikiyatri Sözlüğü",
      description: "Limbik sistemin duygu, bellek, motivasyon ve stres yanıtındaki rolünü ve tek bir beyin yapısı olmadığını açıklar.",
      ogTitle: "Limbik Sistem Nedir?",
      ogDescription: "Limbik sistemi beyin ağları bağlamında açıklar."
    },
    schema: {
      definedTermDescription: "Duygu, motivasyon, bellek ve stres süreçlerine katkıda bulunan bağlantılı beyin bölgeleri ağı."
    }
  }),

  defineTerm({
    term: "Lityum",
    slug: "lityum",
    shortDefinition: "Lityum, bipolar bozukluğun tedavi ve uzun dönem izleminde kullanılan, kan düzeyi ve klinik güvenlik izlemi gerektiren klasik duygudurum düzenleyici ilaçtır.",
    intro: "Lityum psikiyatride uzun yıllardır kullanılan önemli ilaçlardan biridir. Tedavi aralığının kişisel ve klinik olarak dikkatle izlenmesi gerektiğinden yalnız reçete edilen doz değil, kan düzeyi, eşlik eden hastalıklar ve diğer ilaçlar da değerlendirilir.",
    sections: [
      section("Lityum Hangi Durumlarda Kullanılır?", "Bipolar bozuklukta manik dönemlerin tedavisinde ve yeni duygudurum dönemlerinin önlenmesinde değerlendirilebilir. Kullanım kararı kişinin önceki dönemleri, tedavi yanıtı, tıbbi hastalıkları ve başka ilaçlarıyla birlikte ele alınır."),
      section("Kan Düzeyi Neden Ölçülür?", "Lityumun kandaki düzeyinin klinik olarak yararlı ve güvenli aralıkta tutulması önemlidir. Kan düzeyi tek başına tedavi kararını belirlemez ancak belirtiler, yan etkiler, böbrek işlevleri ve diğer klinik bilgilerle birlikte yorumlanır."),
      section("Sıvı Dengesi ve Etkileşimler Neden Önemlidir?", "Vücudun sıvı ve tuz dengesindeki belirgin değişiklikler ile bazı ilaç etkileşimleri lityum düzeyini etkileyebilir. Bu nedenle yeni ilaç başlanması, önemli tıbbi hastalık veya belirgin sıvı kaybı gibi durumlar klinik açıdan önem taşıyabilir."),
      section("Lityum Dozu Kendi Kendine Değiştirilebilir mi?", "Hayır. Doz değişikliği veya ilacın kesilmesi kişisel kararla yapılmamalıdır. Lityum kullanımı sırasında kan düzeyi ve gerekli laboratuvar izlemleri kişinin tıbbi durumuna göre planlanır ve sonuçlar klinik değerlendirmeyle birlikte ele alınır.")
    ],
    relatedTerms: [
      { term: "Duygudurum düzenleyici", slug: "duygudurum-duzenleyici" },
      { term: "İlaç kan düzeyi", slug: "ilac-kan-duzeyi" },
      { term: "İzlem", slug: "izlem" },
      { term: "Etkileşim", slug: "etkilesim" }
    ],
    seo: {
      title: "Lityum Nedir? | Psikiyatri Sözlüğü",
      description: "Lityumun bipolar bozukluktaki genel kullanımını, kan düzeyi izlemini ve ilaç etkileşimlerinin neden önemli olduğunu açıklar.",
      ogTitle: "Lityum Nedir?",
      ogDescription: "Lityumu güvenli ilaç bilgisi ve klinik izlem çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Bipolar bozuklukta kullanılan ve düzenli klinik ve laboratuvar izlem gerektiren duygudurum düzenleyici."
    }
  }),

  defineTerm({
    term: "Liyezon psikiyatrisi",
    slug: "liyezon-psikiyatrisi",
    shortDefinition: "Liyezon psikiyatrisi, bedensel hastalıklar ile ruhsal belirtiler arasındaki ilişkiyi hastane ve diğer tıbbi bakım ortamlarında değerlendiren psikiyatri alanıdır.",
    intro: "Bedensel ve ruhsal sağlık birbirinden tamamen ayrı değildir. Tıbbi hastalıklar ruhsal belirtileri etkileyebilir; ruhsal durumlar da kişinin hastalıkla baş etmesini, tedaviye katılımını ve hastane sürecini değiştirebilir. Bu nedenle değerlendirme biyolojik, psikolojik ve sosyal etkenleri birlikte ele almayı gerektirebilir.",
    sections: [
      section("Liyezon Psikiyatrisi Hangi Durumlarla İlgilenir?", "Genel hastanede yatan veya başka tıbbi branşlar tarafından izlenen kişilerde depresyon, anksiyete, deliryum, uyum güçlüğü, ilaç yan etkileri ve karar verme kapasitesi gibi birçok konu değerlendirilebilir."),
      section("Konsültasyondan Farkı Nedir?", "Konsültasyon belirli bir klinik soruyla başka bir uzmandan görüş istemeyi anlatır. Liyezon yaklaşımı ise psikiyatri ile diğer tıbbi ekipler arasında daha sürekli iletişim, ortak bakım planlama ve eğitim işlevlerini de kapsayabilir."),
      section("Bedensel Belirti Psikolojik Kabul Edilir mi?", "Hayır. Liyezon psikiyatrisinin amacı açıklanamayan her bedensel yakınmayı psikolojik olarak etiketlemek değildir. Tıbbi nedenlerin değerlendirilmesi sürerken ruhsal, davranışsal ve sosyal etkenlerin hastalık deneyimine nasıl katkıda bulunduğu incelenir."),
      section("Neden Multidisipliner Çalışma Gerektirir?", "Karmaşık tıbbi durumlarda psikiyatrist, ilgili tıbbi branşlar, hemşirelik, psikoloji ve başka sağlık çalışanlarının bilgileri birbirini tamamlayabilir. Amaç kişiyi yalnız tek bir hastalık veya belirti üzerinden değerlendirmemektir.")
    ],
    relatedTerms: [
      { term: "Konsültasyon", slug: "konsultasyon" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "Ayırıcı tanı", slug: "ayirici-tani" },
      { term: "İzlem", slug: "izlem" }
    ],
    seo: {
      title: "Liyezon Psikiyatrisi Nedir? | Psikiyatri Sözlüğü",
      description: "Liyezon psikiyatrisinin bedensel hastalıklar ile ruhsal durumlar arasındaki ilişkiyi hastane ortamında nasıl değerlendirdiğini açıklar.",
      ogTitle: "Liyezon Psikiyatrisi Nedir?",
      ogDescription: "Tıp ile psikiyatri arasındaki ortak bakım alanını açıklar."
    },
    schema: {
      definedTermDescription: "Bedensel hastalıklar ile ruhsal durumların etkileşimini tıbbi bakım ortamlarında ele alan psikiyatri alanı."
    }
  }),

  defineTerm({
    term: "Mahremiyet",
    slug: "mahremiyet",
    shortDefinition: "Mahremiyet, kişinin bedeni, özel yaşamı, kişisel bilgileri ve görüşme içeriği üzerindeki sınırlarının sağlık hizmeti sırasında korunması ilkesidir.",
    intro: "Psikiyatrik görüşmeler çok kişisel bilgiler içerebilir. Bu nedenle kişinin hangi bilgileri, kiminle ve hangi koşullarda paylaşacağına ilişkin sınırlar sağlık hizmetinin temel etik konularındandır. Mahremiyetin korunması güvene dayalı klinik ilişkinin sürdürülebilmesine de katkı sağlar.",
    sections: [
      section("Mahremiyet ile Gizlilik Aynı Şey midir?", "Yakın kavramlar olmakla birlikte mahremiyet kişinin özel alanına ve sınırlarına saygıyı, gizlilik ise elde edilen bilgilerin yetkisiz kişilerle paylaşılmamasını daha çok vurgular. Klinik uygulamada iki ilke genellikle birlikte korunur."),
      section("Psikiyatrik Görüşmede Mahremiyet Nasıl Korunur?", "Görüşmenin uygun fiziksel ortamda yapılması, yalnız gerekli kişilerin bulunması ve özel bilgilerin bakım gereksinimi dışında gereksiz biçimde paylaşılmaması temel uygulamalardır. Kişinin görüşmeye kimin katılacağı konusunda mümkün olduğunca bilgilendirilmesi önemlidir."),
      section("Mahremiyetin Sınırları Var mıdır?", "Bazı güvenlik, yasal yükümlülük veya sağlık hizmetinin sürdürülebilmesiyle ilgili durumlarda bilgi paylaşımı gerekebilir. Bu sınırlar ülkeye, mevzuata ve klinik duruma göre değişebileceğinden genel ilkeler kişisel hukuki danışmanlık yerine geçmez."),
      section("Psikiyatrik Tanı Mahremiyet Hakkını Azaltır mı?", "Hayır. Ruhsal hastalık tanısı kişinin mahremiyet ve saygı haklarını ortadan kaldırmaz. Sağlık hizmetinde kişinin yalnız klinik olarak gerekli bilgilerinin uygun kişiler tarafından ve gerekli ölçüde kullanılması esastır.")
    ],
    relatedTerms: [
      { term: "Gizlilik", slug: "gizlilik" },
      { term: "Hasta hakları", slug: "hasta-haklari" },
      { term: "Bilgilendirilmiş onam", slug: "bilgilendirilmis-onam" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" }
    ],
    seo: {
      title: "Mahremiyet Nedir? | Psikiyatri Sözlüğü",
      description: "Mahremiyetin psikiyatrik görüşmelerde kişinin özel alanı ve bilgilerinin korunması açısından ne anlama geldiğini açıklar.",
      ogTitle: "Mahremiyet Nedir?",
      ogDescription: "Psikiyatride mahremiyet ve gizlilik sınırlarını açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin özel yaşamı, bedeni ve kişisel bilgilerinin sağlık hizmetinde korunması ilkesi."
    }
  }),

  defineTerm({
    term: "Maluliyet",
    slug: "maluliyet",
    shortDefinition: "Maluliyet, hastalık veya yaralanma nedeniyle kişinin çalışma gücünde ya da mesleki işlevlerinde belirli ölçütlere göre azalma bulunmasını ifade eden tıbbi ve hukuki değerlendirme kavramıdır.",
    intro: "Maluliyet yalnız bir psikiyatrik veya tıbbi tanının adına bakılarak belirlenmez. Hastalığın süresi, tedaviye rağmen devam eden etkileri, işlev kaybı ve ilgili mevzuattaki ölçütler birlikte değerlendirilir.",
    sections: [
      section("Tanı Tek Başına Maluliyet Anlamına Gelir mi?", "Hayır. Aynı tanıya sahip iki kişinin çalışma ve günlük yaşam işlevleri çok farklı olabilir. Değerlendirmede belirtilerin sürekliliği, tedavi yanıtı ve kişinin mesleki görevlerini ne ölçüde yerine getirebildiği önem taşır."),
      section("Psikiyatrik Değerlendirmede Neler İncelenir?", "Klinik öykü, ruhsal durum, tedavi süreci, işlev kaybı ve gerektiğinde geçmiş sağlık kayıtları incelenebilir. Değerlendirmenin amacı yalnız belirti saymak değil, hastalığın çalışma kapasitesi üzerindeki gerçek etkisini ortaya koymaktır."),
      section("Maluliyet ile İşlev Kaybı Aynı Şey midir?", "Hayır. İşlev kaybı klinik bir kavramdır ve günlük yaşamın birçok alanını kapsayabilir. Maluliyet ise belirli hukuki ve idari ölçütlerle ilişkilidir. Her işlev kaybı otomatik olarak hukuki anlamda maluliyet oluşturmaz."),
      section("Kurallar Her Yerde Aynı mıdır?", "Hayır. Maluliyet değerlendirmelerinde kullanılan ölçütler ülkeye, kuruma, sigorta sistemine ve yürürlükteki mevzuata göre değişebilir. Bu nedenle genel psikiyatrik açıklamalar kişisel hukuki veya resmi kurul değerlendirmesinin yerine geçmez.")
    ],
    relatedTerms: [
      { term: "İşlev kaybı", slug: "islev-kaybi" },
      { term: "Ehliyet değerlendirmesi", slug: "ehliyet-degerlendirmesi" },
      { term: "Adli psikiyatri", slug: "adli-psikiyatri" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" }
    ],
    seo: {
      title: "Maluliyet Nedir? | Psikiyatri Sözlüğü",
      description: "Maluliyetin yalnız tanıya değil işlev kaybı ve hukuki ölçütlere göre değerlendirilen tıbbi-hukuki bir kavram olduğunu açıklar.",
      ogTitle: "Maluliyet Nedir?",
      ogDescription: "Maluliyet değerlendirmesini klinik ve hukuki sınırlarıyla açıklar."
    },
    schema: {
      definedTermDescription: "Hastalık veya yaralanma nedeniyle çalışma gücündeki azalmanın tıbbi ve hukuki ölçütlerle değerlendirilmesi."
    }
  }),

  defineTerm({
    term: "MAOI",
    slug: "maoi",
    shortDefinition: "MAOI, monoamin oksidaz enzimini inhibe eden ve bazı depresif bozukluklarda kullanılabilen, etkileşimler açısından özel dikkat gerektiren antidepresan ilaç grubudur.",
    intro: "Monoamin oksidaz inhibitörleri günümüzde birçok durumda ilk seçenek değildir ancak belirli klinik tablolarda değerlendirilebilir. Başka ilaçlar ve bazı besinlerle önemli etkileşim potansiyelleri nedeniyle kullanımları yakın klinik izlem gerektirir. Tedavi planı oluşturulurken kişinin kullandığı diğer ilaçların ayrıntılı biçimde gözden geçirilmesi özellikle önemlidir.",
    sections: [
      section("MAOI İlaçlar Nasıl Etki Gösterir?", "Monoamin oksidaz enziminin aktivitesini azaltarak serotonin, noradrenalin ve dopamin gibi monoaminlerin sinir sistemi içindeki kullanılabilirliğini etkilerler. Bu mekanizma antidepresan etkiye katkıda bulunabilir ancak klinik yanıt yalnız tek bir nörotransmitter düzeyiyle açıklanamaz."),
      section("Etkileşimler Neden Özellikle Önemlidir?", "Bazı ilaçlarla birlikte kullanım ciddi etkileşimlere yol açabileceğinden kişinin kullandığı reçeteli, reçetesiz ve bitkisel ürünlerin değerlendirilmesi gerekir. İlaç geçişleri sırasında gerekli bekleme süreleri de kullanılan ajanlara göre değişebilir."),
      section("Beslenmeyle İlgili Neden Özel Kurallar Olabilir?", "Bazı MAOI türlerinde tiramin içeriği yüksek belirli gıdalarla etkileşim klinik açıdan önemli olabilir. Hangi besin kısıtlamalarının gerekli olduğu kullanılan ilaca göre değiştiğinden genel listeler yerine reçeteleyen sağlık ekibinin önerileri esas alınmalıdır."),
      section("MAOI Kendi Kendine Başlanıp Bırakılabilir mi?", "Hayır. MAOI kullanımı, başka antidepresanlara geçiş veya tedavinin bırakılması kişisel kararla planlanmamalıdır. Etkileşim ve kesilme riskleri nedeniyle ilaç değişiklikleri reçeteleyen hekim tarafından değerlendirilmelidir.")
    ],
    relatedTerms: [
      { term: "Antidepresan", slug: "antidepresan" },
      { term: "Etkileşim", slug: "etkilesim" },
      { term: "Farmakodinamik", slug: "farmakodinamik" },
      { term: "Farmakokinetik", slug: "farmakokinetik" }
    ],
    seo: {
      title: "MAOI Nedir? | Psikiyatri Sözlüğü",
      description: "MAOI antidepresanların etki mekanizmasını, ilaç ve besin etkileşimlerini ve neden özel klinik dikkat gerektirdiğini açıklar.",
      ogTitle: "MAOI Nedir?",
      ogDescription: "Monoamin oksidaz inhibitörlerini güvenli ilaç bilgisi çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Monoamin oksidaz enzimini inhibe eden ve özel etkileşim önlemleri gerektirebilen antidepresan grubu."
    }
  }),

  defineTerm({
    term: "MDQ",
    slug: "mdq",
    shortDefinition: "MDQ, bipolar spektrum belirtilerine ilişkin geçmiş yaşam deneyimlerini taramak amacıyla kullanılan kısa öz bildirim ölçeğidir.",
    intro: "Mood Disorder Questionnaire olarak bilinen MDQ bir tanı testi değildir. Pozitif bir tarama sonucu kişinin bipolar bozukluğu olduğunu kanıtlamaz; yalnız daha ayrıntılı klinik değerlendirme gereksinimine işaret edebilir. Ölçek özellikle geçmişte fark edilmemiş olası mani veya hipomani belirtilerinin sistematik biçimde sorgulanmasına yardımcı olabilir. Sonuç klinik bağlamla birlikte yorumlanmalıdır.",
    sections: [
      section("MDQ Ne Tür Sorular İçerir?", "Ölçek kişinin geçmişte olağandışı yükselmiş veya değişmiş duygudurum, enerji, uyku gereksinimi, konuşkanlık ve davranış değişiklikleri yaşayıp yaşamadığını sorgular. Belirtilerin aynı dönemde ortaya çıkıp çıkmadığı ve yaşam üzerindeki etkisi de önem taşıyabilir."),
      section("Yüksek Puan Bipolar Bozukluk Demek midir?", "Hayır. Benzer belirtiler başka ruhsal durumlarda, madde kullanımında, uyku bozukluğunda veya kişinin yaşam koşullarında da görülebilir. Bu nedenle tarama sonucu klinik görüşme ve ayrıntılı yaşam boyu duygudurum öyküsüyle birlikte değerlendirilir."),
      section("Düşük Puan Bipolar Bozukluğu Kesin Dışlar mı?", "Hayır. Tarama araçlarının duyarlılık ve özgüllük sınırlılıkları vardır. Kişinin geçmiş dönemlerini hatırlama biçimi, belirtilerin niteliği ve uygulandığı klinik ortam sonucu etkileyebilir."),
      section("MDQ Ne Amaçla Yararlıdır?", "Özellikle depresif belirtilerle başvuran kişilerde geçmişte mani veya hipomani olasılığının daha sistematik sorgulanmasına yardımcı olabilir. Ancak nihai tanısal değerlendirme klinik görüşmeye dayanır.")
    ],
    relatedTerms: [
      { term: "Mani", slug: "mani" },
      { term: "Hipomani", slug: "hipomani" },
      { term: "Ayırıcı tanı", slug: "ayirici-tani" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" }
    ],
    seo: {
      title: "MDQ Nedir? | Psikiyatri Sözlüğü",
      description: "MDQ'nun bipolar spektrum belirtilerini taramaya yardımcı olduğunu ancak tek başına bipolar bozukluk tanısı koymadığını açıklar.",
      ogTitle: "MDQ Nedir?",
      ogDescription: "Bipolar bozukluk taramasında MDQ ölçeğinin sınırlarını açıklar."
    },
    schema: {
      definedTermDescription: "Bipolar spektrum belirtilerini taramaya yardımcı olan kısa öz bildirim ölçeği."
    }
  }),

  defineTerm({
    term: "Mental durum muayenesi",
    slug: "mental-durum-muayenesi",
    shortDefinition: "Mental durum muayenesi, kişinin görüşme sırasındaki görünüm, davranış, konuşma, duygu durumu, düşünce, algı, biliş ve içgörü gibi alanlarının sistematik biçimde değerlendirilmesidir.",
    intro: "Mental durum muayenesi psikiyatrik değerlendirmenin görüşme anındaki kesitini sunar. Kişinin tüm yaşam öyküsünü veya tanısını tek başına belirlemez; klinik öykü ve diğer bilgilerle birlikte yorumlanır. Bulguların zaman içindeki değişimi de klinik seyri anlamada önemli olabilir.",
    sections: [
      section("Hangi Alanlar Değerlendirilir?", "Görünüm ve davranış, konuşmanın hızı ve niteliği, duygudurum ve duygulanım, düşünce akışı ve içeriği, algısal deneyimler, dikkat, bellek, yönelim, içgörü ve yargılama gibi alanlar sistematik biçimde gözden geçirilebilir."),
      section("Mental Durum Muayenesi Bir Test midir?", "Hayır. Bazı bilişsel alanlarda yapılandırılmış sorular kullanılabilse de muayene klinik görüşme ve gözleme dayanır. Bulgular kişinin kültürel bağlamı, eğitim düzeyi, tıbbi durumu ve görüşme koşulları dikkate alınarak yorumlanır."),
      section("Tek Görüşmedeki Bulgular Yeterli midir?", "Her zaman değil. Ruhsal belirtiler günler veya haftalar içinde değişebilir. Bir kişinin görüşme sırasında sakin görünmesi daha önce ciddi belirtiler yaşamadığı anlamına gelmeyebilir; bu nedenle zaman içindeki öykü önemlidir."),
      section("Neden Düzenli Kaydedilir?", "Mental durumdaki değişikliklerin izlenmesi klinik seyri, tedavi yanıtını veya yeni gelişen sorunları fark etmeye yardımcı olabilir. Özellikle bilinç, dikkat veya davranışta hızlı değişim bulunması tıbbi değerlendirme gereksinimini artırabilir.")
    ],
    relatedTerms: [
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "Bilinç", slug: "bilinc" },
      { term: "Ajitasyon", slug: "ajitasyon" },
      { term: "Psikoz", slug: "psikoz" }
    ],
    seo: {
      title: "Mental Durum Muayenesi Nedir? | Psikiyatri Sözlüğü",
      description: "Mental durum muayenesinde görünüm, konuşma, duygu, düşünce, algı ve bilişin nasıl sistematik değerlendirildiğini açıklar.",
      ogTitle: "Mental Durum Muayenesi Nedir?",
      ogDescription: "Psikiyatrik değerlendirmenin temel kesitsel muayenesini açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin görüşme anındaki psikolojik ve bilişsel durumunun sistematik klinik değerlendirmesi."
    }
  }),

  defineTerm({
    term: "Mizaç",
    slug: "mizac",
    shortDefinition: "Mizaç, duygusal tepki verme, hareketlilik, dikkat ve çevresel uyaranlara yaklaşım gibi alanlarda erken dönemden itibaren gözlenebilen görece biyolojik temelli bireysel eğilimleri ifade eder.",
    intro: "Mizaç kişinin değişmez kaderi veya psikiyatrik tanısı değildir. Biyolojik yatkınlıklar erken davranış eğilimlerine katkıda bulunurken çevre, öğrenme, ilişkiler ve yaşam deneyimleri bu özelliklerin nasıl ifade edildiğini etkiler. Aynı mizaç özelliği farklı çevresel koşullarda farklı davranış biçimleriyle ortaya çıkabilir.",
    sections: [
      section("Mizaç Hangi Özellikleri Kapsayabilir?", "Yeni durumlara yaklaşım, duygusal yoğunluk, sakinleşme hızı, hareketlilik düzeyi ve dikkat gibi özelliklerde kişiler arasında erken dönemden itibaren farklılıklar görülebilir. Bu farklılıklar tek başına iyi veya kötü özellikler olarak değerlendirilmez."),
      section("Mizaç ile Karakter Aynı Şey midir?", "Hayır. Mizaç daha çok erken ortaya çıkan ve biyolojik yatkınlıklarla ilişkili eğilimleri vurgular. Karakter ise değerler, seçimler, öğrenilmiş davranışlar ve yaşam deneyimleriyle daha yakından ilişkilendirilen bir kavramdır."),
      section("Mizaç ile Kişilik Arasında Nasıl Bir İlişki Vardır?", "Mizaç kişiliğin gelişimine katkıda bulunan öğelerden biri olabilir ancak kişilik bundan daha geniştir. Gelişimsel deneyimler, kültür, ilişkiler ve kişinin seçimleri zaman içinde kişilik örüntülerinin oluşumuna katkıda bulunur."),
      section("Belirli Bir Mizaç Psikiyatrik Hastalık Demek midir?", "Hayır. Bazı mizaç özellikleri belirli ruhsal durumlarla istatistiksel olarak ilişkilendirilebilir ancak tek bir özellik kişisel düzeyde tanı koydurmaz. Klinik değerlendirme belirti, süre ve işlevselliğe dayanır.")
    ],
    relatedTerms: [
      { term: "Karakter", slug: "karakter" },
      { term: "Kişilik", slug: "kisilik" },
      { term: "Benlik", slug: "benlik" },
      { term: "Ergenlik", slug: "ergenlik" }
    ],
    seo: {
      title: "Mizaç Nedir? | Psikiyatri Sözlüğü",
      description: "Mizacı erken dönemden itibaren gözlenen duygusal ve davranışsal eğilimler olarak açıklar; karakter ve kişilikten farkını ele alır.",
      ogTitle: "Mizaç Nedir?",
      ogDescription: "Mizaç kavramını gelişimsel ve klinik sınırlarıyla açıklar."
    },
    schema: {
      definedTermDescription: "Erken dönemden itibaren gözlenebilen görece biyolojik temelli duygusal ve davranışsal eğilimler."
    }
  }),

  defineTerm({
    term: "Multidisipliner yaklaşım",
    slug: "multidisipliner-yaklasim",
    shortDefinition: "Multidisipliner yaklaşım, kişinin gereksinimlerine birden fazla uzmanlık alanının kendi bilgi ve becerileriyle katkıda bulunduğu ortak değerlendirme ve bakım modelidir.",
    intro: "Ruhsal sorunlar yalnız belirtilerden oluşmaz; bedensel sağlık, aile, sosyal yaşam, işlevsellik ve kullanılan tedaviler birbirini etkileyebilir. Bu nedenle karmaşık durumlarda farklı disiplinlerin katkısı değerlendirmeyi genişletebilir. Ekip üyelerinin birbirini tamamlayan bilgileri bakımın daha tutarlı biçimde planlanmasına yardımcı olabilir.",
    sections: [
      section("Hangi Uzmanlıklar Birlikte Çalışabilir?", "Klinik duruma göre psikiyatri, diğer tıbbi branşlar, psikoloji, hemşirelik, sosyal hizmet, ergoterapi ve başka sağlık disiplinleri bakım sürecine katkıda bulunabilir. Her kişinin aynı ekip yapısına ihtiyacı yoktur."),
      section("Herkes Aynı İşi mi Yapar?", "Hayır. Her disiplin kendi mesleki yetkinliği ve sorumluluğu içinde değerlendirme yapar. Ortak hedef kişinin ihtiyaçlarının bütüncül biçimde anlaşılması ve birbirinden kopuk öneriler yerine uyumlu bir bakım planının oluşturulmasıdır."),
      section("İletişim Neden Önemlidir?", "Farklı uzmanların birbirinden habersiz karar vermesi tedavi planında çelişkilere veya gereksiz tekrarlarla karşılaşılmasına yol açabilir. Gerekli klinik bilgilerin gizlilik ve mahremiyet ilkeleri içinde paylaşılması koordinasyonu kolaylaştırır."),
      section("Multidisipliner Yaklaşım Her Durumda Gerekli midir?", "Hayır. Basit ve tek uzmanlık alanında yönetilebilen durumlarda geniş ekip çalışması gerekmeyebilir. Yaklaşım özellikle birden fazla tıbbi, psikolojik veya sosyal gereksinimin aynı anda bulunduğu karmaşık durumlarda önem kazanır.")
    ],
    relatedTerms: [
      { term: "Konsültasyon", slug: "konsultasyon" },
      { term: "Liyezon psikiyatrisi", slug: "liyezon-psikiyatrisi" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "İzlem", slug: "izlem" }
    ],
    seo: {
      title: "Multidisipliner Yaklaşım Nedir? | Psikiyatri Sözlüğü",
      description: "Multidisipliner yaklaşımın farklı sağlık disiplinlerinin ortak değerlendirme ve bakım planlamasına nasıl katkı sağladığını açıklar.",
      ogTitle: "Multidisipliner Yaklaşım Nedir?",
      ogDescription: "Ruh sağlığında ekip temelli değerlendirme yaklaşımını açıklar."
    },
    schema: {
      definedTermDescription: "Birden fazla uzmanlık alanının ortak değerlendirme ve bakım sürecine katkıda bulunduğu model."
    }
  }),

  defineTerm({
    term: "Mükemmeliyetçilik",
    slug: "mukemmeliyetcilik",
    shortDefinition: "Mükemmeliyetçilik, kişinin kendisi veya başkaları için çok yüksek standartlar belirlemesi ve hata yapmayı aşırı olumsuz değerlendirmesiyle ilişkili düşünce ve davranış eğilimidir.",
    intro: "Yüksek standartlara sahip olmak tek başına psikolojik sorun değildir. Mükemmeliyetçilik, kişinin değerini yalnız kusursuz performansa bağlaması, hatalara karşı yoğun öz eleştiri geliştirmesi veya günlük işlevselliğinin bu beklentiler nedeniyle bozulması durumunda klinik açıdan önem kazanabilir.",
    sections: [
      section("Sağlıklı Çaba ile Mükemmeliyetçilik Nasıl Ayrılır?", "Esnek yüksek standartlarda kişi hata yapabilmeyi kabul eder ve hedeflerini koşullara göre değiştirebilir. İşlev bozucu mükemmeliyetçilikte ise küçük hatalar başarısızlık olarak değerlendirilebilir ve kişinin öz değeri performansa aşırı bağlanabilir."),
      section("Erteleme ile İlişkili Olabilir mi?", "Evet. Bir görevi kusursuz yapma beklentisi başlamakta zorlanmaya, aşırı kontrol etmeye veya işi teslim edememeye yol açabilir. Dışarıdan motivasyon eksikliği gibi görünen davranışın altında hata yapma korkusu bulunabilir."),
      section("Anksiyete ve Öz Eleştiriyle Nasıl İlişkilidir?", "Sürekli değerlendirilme kaygısı, hata arama ve başarıları küçümseme kişinin stresini artırabilir. Bununla birlikte mükemmeliyetçilik farklı kişilerde farklı biçimde ortaya çıkar ve tek başına belirli bir psikiyatrik tanı anlamına gelmez."),
      section("Değişebilir mi?", "Evet. Gerçekçi standartların geliştirilmesi, hata hakkının kabul edilmesi, ya hep ya hiç düşüncelerinin fark edilmesi ve kişinin değerini yalnız performansla ölçmemesi bu örüntünün etkisini azaltabilir.")
    ],
    relatedTerms: [
      { term: "Kusurluluk şeması", slug: "kusurluluk-semasi" },
      { term: "Şema terapi", slug: "sema-terapi" },
      { term: "Kişilik", slug: "kisilik" },
      { term: "Anksiyete", slug: "anksiyete" }
    ],
    seo: {
      title: "Mükemmeliyetçilik Nedir? | Psikiyatri Sözlüğü",
      description: "Mükemmeliyetçiliği sağlıklı yüksek standartlardan ayıran hata korkusu, öz eleştiri ve işlevsellik özellikleriyle açıklar.",
      ogTitle: "Mükemmeliyetçilik Nedir?",
      ogDescription: "Mükemmeliyetçiliğin işlevsel ve işlev bozucu yönlerini açıklar."
    },
    schema: {
      definedTermDescription: "Aşırı yüksek standartlar ve hatalara karşı katı değerlendirmelerle ilişkili düşünce ve davranış eğilimi."
    }
  }),

  defineTerm({
    term: "Non-REM uykusu",
    slug: "non-rem-uykusu",
    shortDefinition: "Non-REM uykusu, hızlı göz hareketlerinin belirgin olmadığı ve hafif uykudan derin yavaş dalga uykusuna uzanan farklı evreleri içeren temel uyku dönemidir.",
    intro: "Normal gece uykusu tek tip değildir. Non-REM ve REM dönemleri gece boyunca döngüler halinde birbirini izler; farklı evrelerde beyin etkinliği, kas tonusu ve fizyolojik işlevlerde değişiklikler görülür. Uyku kalitesi yalnız toplam süreyle değil bu evrelerin düzeni ve sürekliliğiyle de ilişkilidir.",
    sections: [
      section("Non-REM Uykusunun Evreleri Nelerdir?", "Non-REM uyku yüzeysel uykudan daha derin uykuya doğru ilerleyen evrelerden oluşur. Özellikle derin yavaş dalga uykusunda kişinin dış uyaranlarla uyandırılması daha zor olabilir ve belirli fizyolojik yenilenme süreçleri belirginleşir."),
      section("Derin Uyku Neden Önemlidir?", "Bedensel toparlanma, bağışıklık işlevleri, enerji dengesi ve bazı öğrenme ve bellek süreçleri uyku mimarisiyle ilişkilidir. Ancak sağlıklı uyku yalnız derin uyku miktarına değil tüm uyku evrelerinin düzenli döngüsüne bağlıdır."),
      section("Non-REM ve REM Arasındaki Fark Nedir?", "REM döneminde hızlı göz hareketleri, belirgin beyin aktivitesi ve canlı rüyalar daha sık görülürken Non-REM döneminde farklı derinliklerde uyku evreleri bulunur. Her iki dönem de normal uyku mimarisinin parçalarıdır."),
      section("Uyku Evreleri Nasıl Ölçülür?", "Uyku laboratuvarında beyin dalgaları, göz hareketleri, kas aktivitesi ve başka fizyolojik sinyallerin kaydedildiği polisomnografi kullanılabilir. Tüketici cihazlarının verdiği uyku evresi tahminleri klinik ölçümle aynı değildir.")
    ],
    relatedTerms: [
      { term: "Bilinç", slug: "bilinc" },
      { term: "GABA", slug: "gaba" },
      { term: "Hipnotik", slug: "hipnotik" }
    ],
    seo: {
      title: "Non-REM Uykusu Nedir? | Psikiyatri Sözlüğü",
      description: "Non-REM uykusunun hafif ve derin evrelerini, REM uykusundan farkını ve uyku mimarisindeki yerini açıklar.",
      ogTitle: "Non-REM Uykusu Nedir?",
      ogDescription: "Non-REM uyku evrelerini ve temel işlevlerini açıklar."
    },
    schema: {
      definedTermDescription: "Hızlı göz hareketlerinin belirgin olmadığı, hafif ve derin uyku evrelerini içeren uyku dönemi."
    }
  }),

  defineTerm({
    term: "Noradrenalin",
    slug: "noradrenalin",
    shortDefinition: "Noradrenalin, merkezi sinir sistemi ve otonom sinir sisteminde uyanıklık, dikkat, motivasyon ve stres yanıtının düzenlenmesine katkıda bulunan kimyasal habercidir.",
    intro: "Noradrenalin hem nörotransmitter hem de bazı bağlamlarda hormon olarak işlev görebilir. Psikiyatride dikkat, uyanıklık ve duygudurum süreçleriyle ilişkisi araştırılmış olsa da ruhsal durumlar tek bir nörotransmitterin azlığı veya fazlalığıyla açıklanamaz. Noradrenerjik sistemler farklı beyin ağlarıyla birlikte çalışarak davranış ve biliş üzerinde etkili olur. Bu etkiler bağlama ve beyin bölgesine göre değişebilir.",
    sections: [
      section("Noradrenalin Beyinde Ne Yapar?", "Dikkatin yönlendirilmesi, çevresel değişikliklere uyanıklık, motivasyon ve stres sırasında davranışsal hazırlık gibi süreçlere katkıda bulunur. Etkileri bulunduğu beyin bölgesine ve hangi reseptörlerin aktive olduğuna göre değişebilir."),
      section("Stres Yanıtıyla Nasıl İlişkilidir?", "Tehdit veya yoğun talep sırasında noradrenerjik sistemlerin etkinliği artabilir ve kişinin çevresine daha hızlı yanıt vermesine katkıda bulunabilir. Bu fizyolojik mekanizma tek başına anksiyete bozukluğu anlamına gelmez."),
      section("Psikiyatrik İlaçlarla İlişkisi Nedir?", "Bazı antidepresanlar ve DEHB tedavisinde kullanılan bazı ilaçlar noradrenerjik sinyallemeyi etkiler. Ancak ilacın klinik etkisi yalnız noradrenalin düzeyindeki basit bir değişimle açıklanamayacak kadar karmaşıktır."),
      section("Noradrenalin Ölçümü Tanı Koydurur mu?", "Hayır. Beyindeki nörotransmitter işlevini sıradan bir kan testiyle doğrudan ölçmek mümkün değildir ve periferik ölçümler psikiyatrik tanı için kullanılmaz. Tanı klinik belirti, süre ve işlevsellik üzerinden değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Antidepresan", slug: "antidepresan" },
      { term: "DEHB", slug: "dehb" },
      { term: "Atomoksetin", slug: "atomoksetin" },
      { term: "Nörotransmitter", slug: "norotransmitter" }
    ],
    seo: {
      title: "Noradrenalin Nedir? | Psikiyatri Sözlüğü",
      description: "Noradrenalinin dikkat, uyanıklık ve stres yanıtındaki rolünü ve tek başına psikiyatrik tanı belirlemediğini açıklar.",
      ogTitle: "Noradrenalin Nedir?",
      ogDescription: "Noradrenalinin sinir sistemi ve psikiyatrideki temel rolünü açıklar."
    },
    schema: {
      definedTermDescription: "Uyanıklık, dikkat ve stres yanıtının düzenlenmesine katkıda bulunan nörotransmitter."
    }
  }),

  defineTerm({
    term: "Nöroplastisite",
    slug: "noroplastisite",
    shortDefinition: "Nöroplastisite, beynin deneyim, öğrenme, çevresel değişiklik ve bazı hastalık süreçlerine yanıt olarak bağlantılarını ve işlevsel örgütlenmesini değiştirebilme kapasitesidir.",
    intro: "Beyin yetişkinlikte tamamen sabit bir yapı değildir. Sinir ağları yeni deneyimlerle güçlenebilir, zayıflayabilir veya yeniden örgütlenebilir; ancak nöroplastisite sınırsız ve her değişimin olumlu olduğu anlamına gelen bir kavram değildir. Değişimin kapsamı yaş, deneyimin süresi ve ilgili beyin sistemine göre farklılık gösterebilir.",
    sections: [
      section("Nöroplastisite Nasıl Gerçekleşir?", "Sinapsların gücündeki değişiklikler, yeni bağlantıların oluşması, bazı bağlantıların azalması ve belirli bölgelerde yapısal değişiklikler nöroplastik süreçlerin parçaları olabilir. Mekanizmalar yaşa, beyin bölgesine ve deneyimin niteliğine göre değişir."),
      section("Öğrenme ile İlişkisi Nedir?", "Yeni becerilerin kazanılması ve bilgilerin bellekte daha kalıcı hale gelmesi sinir ağlarında tekrar ve deneyime bağlı değişikliklerle ilişkilidir. Bu nedenle öğrenme, nöroplastisitenin günlük yaşamdaki en temel örneklerinden biridir."),
      section("Psikoterapi veya İlaçlar Beyni Değiştirir mi?", "Psikoterapi, öğrenme ve bazı ilaç tedavileriyle ilişkili nörobiyolojik değişiklikler araştırılmaktadır. Ancak belirli bir beyin değişikliğini tek kişide tedavinin işe yaradığını gösteren basit bir biyobelirteç olarak kullanmak mümkün değildir."),
      section("Nöroplastisite Her Zaman Faydalı mıdır?", "Hayır. Beyin tekrar eden deneyimlere uyum sağlarken bazı işlev bozucu alışkanlıklar veya korku öğrenmeleri de güçlenebilir. Nöroplastisite beynin değişebilme kapasitesini anlatır; değişimin yönünün mutlaka olumlu olduğunu söylemez.")
    ],
    relatedTerms: [
      { term: "Hipokampus", slug: "hipokampus" },
      { term: "Glutamat", slug: "glutamat" },
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Antidepresan", slug: "antidepresan" }
    ],
    seo: {
      title: "Nöroplastisite Nedir? | Psikiyatri Sözlüğü",
      description: "Nöroplastisiteyi beynin öğrenme ve deneyime bağlı değişebilme kapasitesi olarak açıklar ve kavramın sınırlarını ele alır.",
      ogTitle: "Nöroplastisite Nedir?",
      ogDescription: "Beynin deneyimle değişebilme kapasitesini açıklar."
    },
    schema: {
      definedTermDescription: "Beynin deneyim ve öğrenmeye bağlı olarak bağlantılarını ve işlevsel örgütlenmesini değiştirebilme kapasitesi."
    }
  }),

  defineTerm({
    term: "Nörotransmitter",
    slug: "norotransmitter",
    shortDefinition: "Nörotransmitter, sinir hücrelerinin birbirleriyle veya hedef hücrelerle iletişim kurmasına yardımcı olan kimyasal haberci maddelerin genel adıdır.",
    intro: "Serotonin, dopamin, noradrenalin, glutamat ve GABA gibi birçok farklı nörotransmitter bulunur. Her biri tek bir duygu veya hastalıktan sorumlu değildir; beyin işlevleri çok sayıda kimyasal ve elektriksel sistemin birlikte çalışmasıyla ortaya çıkar. Aynı nörotransmitter farklı beyin bölgelerinde farklı işlevlere katkıda bulunabilir.",
    sections: [
      section("Nörotransmitterler Nasıl Çalışır?", "Bir sinir hücresinden salınan kimyasal haberci hücreler arasındaki küçük boşluğu geçerek hedef hücredeki belirli reseptörlere bağlanabilir. Sonuç hedef reseptörün türüne göre hücre aktivitesini artırabilir, azaltabilir veya daha karmaşık biçimde düzenleyebilir."),
      section("Her Nörotransmitterin Tek Bir Görevi mi Vardır?", "Hayır. Aynı nörotransmitter farklı beyin bölgelerinde farklı işlevlere katkıda bulunabilir. Örneğin dikkat, hareket, öğrenme ve duygudurum gibi süreçler birbirinden ayrı tek kimyasal sistemler tarafından yönetilmez."),
      section("Psikiyatrik Hastalıklar Kimyasal Dengesizlik midir?", "Ruhsal hastalıkları yalnız bir nörotransmitterin eksikliği veya fazlalığı olarak açıklamak güncel bilimsel bilgiyi aşırı basitleştirir. Genetik, gelişimsel, psikolojik, çevresel ve çok sayıda nörobiyolojik etken birlikte rol oynayabilir."),
      section("İlaçlar Nörotransmitterleri Nasıl Etkiler?", "Psikiyatrik ilaçlar nörotransmitterlerin salınması, geri alımı, yıkımı veya reseptörleri üzerinde etkili olabilir. Ancak klinik etkinin ortaya çıkması çoğu zaman daha geniş sinir ağı değişikliklerini ve zaman içinde gelişen uyarlanmaları içerir.")
    ],
    relatedTerms: [
      { term: "GABA", slug: "gaba" },
      { term: "Glutamat", slug: "glutamat" },
      { term: "Noradrenalin", slug: "noradrenalin" },
      { term: "Farmakodinamik", slug: "farmakodinamik" }
    ],
    seo: {
      title: "Nörotransmitter Nedir? | Psikiyatri Sözlüğü",
      description: "Nörotransmitterlerin sinir hücreleri arasındaki iletişimde nasıl çalıştığını ve psikiyatrik hastalıkların neden basit kimyasal dengesizliklerle açıklanamayacağını anlatır.",
      ogTitle: "Nörotransmitter Nedir?",
      ogDescription: "Beyindeki kimyasal habercilerin temel işlevlerini açıklar."
    },
    schema: {
      definedTermDescription: "Sinir hücreleri arasında iletişime aracılık eden kimyasal haberci madde."
    }
  }),

  defineTerm({
    term: "Nüks önleme",
    slug: "nuks-onleme",
    shortDefinition: "Nüks önleme, daha önce azalmış veya düzelmiş ruhsal belirtilerin yeniden belirginleşme olasılığını azaltmaya yönelik kişiselleştirilmiş izlem ve baş etme planıdır.",
    intro: "Ruhsal belirtilerin düzelmesi tedavi sürecinin önemli bir aşamasıdır ancak bazı durumlarda belirtiler tekrar ortaya çıkabilir. Nüks önleme yaklaşımı erken uyarı işaretlerini tanımayı ve sorun büyümeden uygun destek basamaklarını devreye sokmayı amaçlar.",
    sections: [
      section("Erken Uyarı İşaretleri Nelerdir?", "Uyku düzenindeki değişiklik, sosyal geri çekilme, günlük rutinin bozulması veya kişiye özgü daha önceki dönemlerin başlangıcında görülen belirtiler erken işaretler olabilir. Her kişi için aynı belirtiler geçerli değildir."),
      section("Nüks Önleme Planında Neler Bulunabilir?", "Kişinin kendi erken belirtileri, hangi durumda kiminle iletişim kuracağı, rutinlerini nasıl koruyacağı ve planlanmış klinik izlemi ne zaman öne çekeceği belirlenebilir. Plan kişiye özgü ve uygulanabilir olmalıdır."),
      section("İlaç veya Psikoterapi Tek Başına Yeterli midir?", "Nüks riskini azaltan yaklaşım tanıya ve kişisel duruma göre değişir. İlaç tedavisi, psikoterapi, psikoeğitim, uyku ve günlük düzen, sosyal destek ve düzenli izlem farklı kişilerde farklı ağırlıkta rol oynayabilir."),
      section("Nüks Olması Tedavinin Başarısız Olduğu Anlamına mı Gelir?", "Hayır. Bazı ruhsal bozuklukların doğal seyri dönemsel olabilir. Nüksün erken fark edilmesi ve yeni döneme hızlı müdahale edilmesi belirtilerin süresini veya işlev kaybını azaltmaya yardımcı olabilir.")
    ],
    relatedTerms: [
      { term: "İzlem", slug: "izlem" },
      { term: "Remisyon", slug: "remisyon" },
      { term: "Psikoeğitim", slug: "psikoegitim" },
      { term: "Güvenlik planı", slug: "guvenlik-plani" }
    ],
    seo: {
      title: "Nüks Önleme Nedir? | Psikiyatri Sözlüğü",
      description: "Nüks önlemenin erken uyarı işaretleri, kişisel plan, düzenli izlem ve baş etme stratejileriyle nasıl oluşturulduğunu açıklar.",
      ogTitle: "Nüks Önleme Nedir?",
      ogDescription: "Ruhsal belirtilerin tekrarını azaltmaya yönelik planlamayı açıklar."
    },
    schema: {
      definedTermDescription: "Ruhsal belirtilerin tekrarını azaltmaya yönelik erken uyarı, izlem ve baş etme planı."
    }
  }),

  defineTerm({
    term: "Obsesif kompulsif kişilik",
    slug: "obsesif-kompulsif-kisilik",
    shortDefinition: "Obsesif kompulsif kişilik, düzen, kontrol, kurallar ve mükemmeliyetçiliğe yönelik katı eğilimlerin kişinin esnekliğini ve ilişkilerini belirgin biçimde etkileyebildiği kişilik örüntüsünü ifade eder.",
    intro: "Obsesif kompulsif kişilik ile obsesif kompulsif bozukluk aynı şey değildir. Kişilik örüntüsünde uzun süreli düzen, kontrol ve mükemmeliyetçilik eğilimleri ön plandayken OKB'de obsesyonlar ve kompulsiyonlar farklı bir klinik çerçevede değerlendirilir.",
    sections: [
      section("Bu Kişilik Örüntüsü Nasıl Görülebilir?", "Kişi ayrıntılara, kurallara, listelere veya düzene yoğun biçimde odaklanabilir ve bu nedenle asıl amacı gözden kaçırabilir. Görevleri başkalarına devretmekte zorlanma veya işin yalnız kendi yöntemine göre yapılmasını isteme görülebilir."),
      section("Mükemmeliyetçilik Neden Sorun Oluşturabilir?", "Yüksek standartlar işi kaliteli yapmaya yardımcı olabilir ancak katı mükemmeliyetçilik görevin tamamlanmasını geciktirebilir, esnekliği azaltabilir ve ilişkilerde çatışmalara yol açabilir. Klinik önem işlevsellikteki etkiyle değerlendirilir."),
      section("OKB ile Aynı Şey midir?", "Hayır. OKB'de kişiyi zorlayan tekrarlayıcı düşünceler ve bunlarla ilişkili davranışlar ön plandadır. Obsesif kompulsif kişilik örüntüsünde ise uzun süreli kontrol, düzen ve katılık özellikleri kişinin karakteristik ilişki ve davranış biçiminin parçası olabilir."),
      section("Düzenli Olmak Tanı İçin Yeterli midir?", "Hayır. Düzenli, titiz veya sorumluluk sahibi olmak tek başına kişilik bozukluğu anlamına gelmez. Örüntünün uzun süreli, farklı ortamlarda belirgin ve kişinin ya da çevresinin işlevselliğini önemli ölçüde etkileyen nitelikte olması gerekir.")
    ],
    relatedTerms: [
      { term: "Kişilik", slug: "kisilik" },
      { term: "Mükemmeliyetçilik", slug: "mukemmeliyetcilik" },
      { term: "Kişilik bozukluğu", slug: "kisilik-bozuklugu" },
      { term: "Histrionik kişilik örüntüsü", slug: "histrionik-kisilik-oruntusu" }
    ],
    seo: {
      title: "Obsesif Kompulsif Kişilik Nedir? | Psikiyatri Sözlüğü",
      description: "Obsesif kompulsif kişilik örüntüsünü düzen, kontrol ve mükemmeliyetçilik özellikleriyle açıklar ve OKB'den farkını ele alır.",
      ogTitle: "Obsesif Kompulsif Kişilik Nedir?",
      ogDescription: "Obsesif kompulsif kişilik örüntüsünü OKB'den ayırarak açıklar."
    },
    schema: {
      definedTermDescription: "Düzen, kontrol ve mükemmeliyetçilik eğilimlerinin baskın olduğu uzun süreli kişilik örüntüsü."
    }
  }),

  defineTerm({
    term: "Onay arayıcılık",
    slug: "onay-arayicilik",
    shortDefinition: "Onay arayıcılık, kişinin kendi değerini ve kararlarının doğruluğunu büyük ölçüde başkalarının kabulü, övgüsü veya değerlendirmesine bağlama eğilimidir.",
    intro: "Başkalarının görüşünü önemsemek normal sosyal yaşamın parçasıdır. Onay arayıcılık, kişinin kendi ihtiyaç ve değerlerini geri plana atacak ölçüde dış değerlendirmeye bağımlı hale geldiğinde psikolojik açıdan sorun oluşturabilir. Bu örüntü özellikle eleştiri, reddedilme veya belirsizlik karşısında daha belirgin hale gelebilir. Kişi kendi tercihinden emin olsa bile başkalarının tepkisini sürekli kontrol etme ihtiyacı hissedebilir ve bu durum karar verme sürecini zorlaştırabilir.",
    sections: [
      section("Onay Arayıcılık Nasıl Görülebilir?", "Kişi eleştirilmekten yoğun biçimde kaçınabilir, karar vermeden önce sürekli başkalarının fikrini sorabilir veya kabul görmek için kendi sınırlarını aşabilir. Sosyal ilişkilerde hayır demekte zorlanma da görülebilir."),
      section("Öz Değer ile Nasıl İlişkilidir?", "Kişinin kendisine ilişkin olumlu değerlendirmesi yalnız başarıya veya başkalarının övgüsüne dayanıyorsa dış geri bildirimlerdeki küçük değişiklikler bile özsaygıyı güçlü biçimde etkileyebilir."),
      section("İlişkileri Nasıl Etkileyebilir?", "Reddedilme korkusuyla aşırı uyum gösterme, çatışmadan sürekli kaçınma veya kendi ihtiyaçlarını ifade edememe ilişkilerde dengesizlik yaratabilir. Başkalarını memnun etme çabası zaman içinde yorgunluk ve kırgınlığa dönüşebilir."),
      section("Onay İhtiyacı Azalabilir mi?", "Evet. Kişinin kendi değerlerini netleştirmesi, kararlarının sorumluluğunu üstlenmesi, sınır koyma becerilerini geliştirmesi ve eleştiriyi kişisel değerin bütünü olarak görmemesi dış onaya bağımlılığı azaltabilir.")
    ],
    relatedTerms: [
      { term: "Şema terapi", slug: "sema-terapi" },
      { term: "Kusurluluk şeması", slug: "kusurluluk-semasi" },
      { term: "Benlik", slug: "benlik" },
      { term: "Kişilik", slug: "kisilik" }
    ],
    seo: {
      title: "Onay Arayıcılık Nedir? | Psikiyatri Sözlüğü",
      description: "Onay arayıcılığın öz değer, karar verme ve ilişkiler üzerindeki etkisini ve normal sosyal onay ihtiyacından farkını açıklar.",
      ogTitle: "Onay Arayıcılık Nedir?",
      ogDescription: "Dış onaya aşırı bağımlılığın psikolojik etkilerini açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin değerini ve kararlarını büyük ölçüde başkalarının onayına bağlama eğilimi."
    }
  }),

  defineTerm({
    term: "PANSS",
    slug: "panss",
    shortDefinition: "PANSS, şizofrenide pozitif belirtiler, negatif belirtiler ve genel psikopatoloji alanlarını yapılandırılmış biçimde değerlendirmek amacıyla kullanılan klinisyen ölçeğidir.",
    intro: "Positive and Negative Syndrome Scale olarak bilinen PANSS özellikle araştırma ve klinik izlemde belirti şiddetini standart biçimde değerlendirmeye yardımcı olur. Tek başına şizofreni tanısı koyan bir test değildir. Ölçeğin sağlıklı yorumlanması eğitimli değerlendirici ve klinik bağlam gerektirir. Puanların anlamı yalnız toplam skor üzerinden değil farklı belirti alanlarının dağılımı ve kişinin genel işlevselliğiyle birlikte değerlendirilmelidir.",
    sections: [
      section("Pozitif Belirtiler Ne Anlama Gelir?", "Varsanı, sanrı ve düşünce organizasyonundaki bazı bozulmalar gibi kişinin olağan deneyimine eklenen belirtiler pozitif belirti alanında değerlendirilir. Pozitif sözcüğü burada iyi veya olumlu anlamına gelmez."),
      section("Negatif Belirtiler Nelerdir?", "Duygusal ifade azalması, sosyal geri çekilme, konuşma üretiminde azalma veya motivasyon kaybı gibi işlevlerde azalmayı ifade eden belirtiler negatif belirti alanında ele alınabilir."),
      section("PANSS Puanı Tanı Koyar mı?", "Hayır. Ölçek mevcut belirtilerin şiddetini yapılandırılmış biçimde ölçmeye yardımcı olur. Şizofreni tanısı klinik öykü, belirtilerin süresi, işlevsellik, ayırıcı tanı ve başka nedenlerin değerlendirilmesiyle konur."),
      section("PANSS Neden Tekrarlanabilir?", "Tedavi veya klinik seyir sırasında belirti alanlarındaki değişimi daha sistematik izlemek için aynı ölçek farklı zamanlarda uygulanabilir. Puan değişimi yine kişinin işlevselliği ve genel klinik durumu ile birlikte yorumlanmalıdır.")
    ],
    relatedTerms: [
      { term: "Şizofreni", slug: "sizofreni" },
      { term: "Psikoz", slug: "psikoz" },
      { term: "Varsanı", slug: "varsani" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" }
    ],
    seo: {
      title: "PANSS Nedir? | Psikiyatri Sözlüğü",
      description: "PANSS ölçeğinin şizofrenide pozitif, negatif ve genel belirtileri değerlendirdiğini ancak tek başına tanı koymadığını açıklar.",
      ogTitle: "PANSS Nedir?",
      ogDescription: "PANSS ölçeğinin kullanım alanını ve sınırlarını açıklar."
    },
    schema: {
      definedTermDescription: "Şizofrenide pozitif, negatif ve genel belirtilerin şiddetini değerlendiren klinisyen ölçeği."
    }
  })
];


const fourteenthBatchNewTerms = [
  defineTerm({
    term: "Paranoid kişilik örüntüsü",
    slug: "paranoid-kisilik-oruntusu",
    shortDefinition: "Paranoid kişilik örüntüsü, başkalarının niyetlerini sürekli kuşkuyla değerlendirme, kolay güvenememe ve nötr davranışları tehdit edici yorumlama eğiliminin baskın olduğu kişilik örüntüsüdür.",
    intro: "Kuşku duymak zaman zaman herkes için normal olabilir. Paranoid kişilik örüntüsünde ise güvensizlik ve kuşkuculuk uzun süreli, farklı ilişkilere yayılan ve kişinin sosyal ya da mesleki işlevselliğini etkileyebilen bir özellik haline gelir.",
    sections: [
      section("Paranoid Kişilik Örüntüsü Nasıl Görülebilir?", "Kişi başkalarının kendisini kullanacağına, zarar vereceğine veya aldatacağına ilişkin güçlü kuşkular taşıyabilir. Zararsız sözlerde gizli anlam arama, eleştiriye aşırı duyarlılık veya kırgınlıkları uzun süre sürdürme görülebilir. Bu özelliklerin yoğunluğu kişiden kişiye değişir."),
      section("Kuşkucu Olmak Tanı Anlamına Gelir mi?", "Hayır. Geçmiş deneyimler, bulunduğu çevre, gerçek güvenlik sorunları ve kültürel bağlam kişinin temkinli davranmasını açıklayabilir. Klinik değerlendirmede örüntünün ne kadar uzun süredir bulunduğu, farklı ortamlarda görülüp görülmediği ve işlevselliği nasıl etkilediği incelenir."),
      section("Psikoz ile Aynı Şey midir?", "Hayır. Paranoid kişilik özelliklerinde yoğun güvensizlik bulunabilir ancak bu durum tek başına sanrı veya psikoz anlamına gelmez. Gerçeklikle değerlendirme belirgin biçimde bozulmuşsa psikoz ve diğer olası nedenler ayrıca değerlendirilir."),
      section("Kişiyi Yalnız Bu Özellikle Tanımlamak Doğru mudur?", "Hayır. Kişilik örüntüleri kişinin bütün kimliğini açıklamaz. Değerlendirmede güçlü yönler, ilişkiler, yaşam öyküsü, travmatik deneyimler ve mevcut çevresel koşullar da dikkate alınmalıdır.")
    ],
    relatedTerms: [
      { term: "Kişilik", slug: "kisilik" },
      { term: "Kişilik bozukluğu", slug: "kisilik-bozuklugu" },
      { term: "Referans fikirleri", slug: "referans-fikirleri" },
      { term: "Psikoz", slug: "psikoz" }
    ],
    seo: {
      title: "Paranoid Kişilik Örüntüsü Nedir? | Psikiyatri Sözlüğü",
      description: "Paranoid kişilik örüntüsündeki kuşku ve güvensizliği, normal temkinlilikten ve psikozdan farklarıyla açıklar.",
      ogTitle: "Paranoid Kişilik Örüntüsü Nedir?",
      ogDescription: "Uzun süreli kuşku ve güvensizlik örüntüsünü klinik sınırlarıyla açıklar."
    },
    schema: {
      definedTermDescription: "Başkalarının niyetlerine karşı yaygın ve uzun süreli kuşku ve güvensizlikle seyreden kişilik örüntüsü."
    }
  }),

  defineTerm({
    term: "PHQ-9",
    slug: "phq-9",
    shortDefinition: "PHQ-9, son iki haftadaki depresif belirti sıklığını dokuz madde üzerinden değerlendirmeye yardımcı olan kısa öz bildirim ölçeğidir.",
    intro: "PHQ-9 depresif belirtileri sistematik biçimde sorgulamaya ve zaman içindeki değişimi izlemeye yardımcı olabilir. Bununla birlikte puan tek başına depresyon tanısı koymaz; klinik görüşme, işlevsellik ve olası diğer nedenlerle birlikte değerlendirilir. Ölçeğin amacı kişinin yaşadığı güçlükleri daha görünür hale getirmek ve klinik görüşmeye yapılandırılmış ek bilgi sağlamaktır.",
    sections: [
      section("PHQ-9 Neyi Değerlendirir?", "Ölçek ilgi ve keyif azalması, çökkün duygudurum, uyku, enerji, iştah, öz değerlendirme, dikkat, hareketlilik ve kendine zarar verme düşünceleri gibi depresyonla ilişkili alanların son iki haftadaki sıklığını sorgular."),
      section("Yüksek Puan Depresyon Tanısı mıdır?", "Hayır. Yüksek puan daha ayrıntılı değerlendirme gereksinimini gösterebilir ancak belirtiler tıbbi hastalıklar, yas, uyku sorunları veya başka ruhsal durumlarla ilişkili olabilir. Tanı yalnız ölçek toplamına dayanılarak konulmaz."),
      section("Düşük Puan Depresyonu Kesin Dışlar mı?", "Hayır. Öz bildirim ölçekleri kişinin soruları nasıl anladığından, belirtileri hatırlama biçiminden ve uygulama koşullarından etkilenebilir. Klinik açıdan önemli yakınmalar varsa düşük skor tek başına değerlendirmeyi sonlandırmaz."),
      section("PHQ-9 İzlemde Kullanılabilir mi?", "Evet. Aynı ölçeğin farklı zamanlarda uygulanması belirtilerdeki değişimi daha sistematik izlemeye yardımcı olabilir. Puan değişimi yine kişinin günlük işlevselliği ve genel klinik durumu ile birlikte yorumlanmalıdır.")
    ],
    relatedTerms: [
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "İzlem", slug: "izlem" },
      { term: "Anhedoni", slug: "anhedoni" },
      { term: "İntihar riski", slug: "intihar-riski" }
    ],
    seo: {
      title: "PHQ-9 Nedir? | Psikiyatri Sözlüğü",
      description: "PHQ-9'un depresif belirti şiddetini değerlendirmeye yardımcı olduğunu ancak tek başına depresyon tanısı koymadığını açıklar.",
      ogTitle: "PHQ-9 Nedir?",
      ogDescription: "PHQ-9 depresyon ölçeğinin kullanımını ve sınırlarını açıklar."
    },
    schema: {
      definedTermDescription: "Son iki haftadaki depresif belirtilerin sıklığını değerlendiren dokuz maddelik öz bildirim ölçeği."
    }
  }),

  defineTerm({
    term: "Plasebo",
    slug: "plasebo",
    shortDefinition: "Plasebo, araştırmalarda karşılaştırma amacıyla kullanılan ve incelenen özgül etkin maddeyi içermeyen uygulama veya tedavi benzeri müdahaledir.",
    intro: "Plasebo etkisi, yalnız kişinin bir şey hayal etmesi anlamına gelmez. Beklenti, öğrenme, bakım ortamı ve sağlık profesyoneliyle etkileşim gibi etkenler kişinin belirti deneyimini ve bazı ölçülebilir yanıtlarını etkileyebilir. Bu nedenle plasebo araştırmaları hem biyolojik tedavi etkisini hem de tedavi bağlamının katkısını daha iyi anlamaya yardımcı olur.",
    sections: [
      section("Plasebo Etkisi Nasıl Ortaya Çıkabilir?", "Kişinin tedaviden beklentisi, daha önceki deneyimleri ve uygulamanın sunulduğu bağlam ağrı, kaygı veya başka öznel belirtilerin algılanmasını değiştirebilir. Bu değişim gerçek bir deneyimdir ancak incelenen tedavinin özgül biyolojik etkisiyle aynı şey değildir."),
      section("Klinik Araştırmalarda Neden Kullanılır?", "Yeni bir tedavinin gözlenen yararının ne kadarının tedaviye özgü olduğunu anlamak için uygun araştırmalarda plasebo kontrolü kullanılabilir. Böylece doğal iyileşme, beklenti ve değerlendirme yanlılığı gibi etkilerden bir bölümü ayrıştırılmaya çalışılır."),
      section("Plasebo Her Araştırmada Kullanılabilir mi?", "Hayır. Etik uygunluk araştırılan hastalığa, mevcut etkili tedavilere ve katılımcının karşılaşabileceği riske bağlıdır. Etkili tedaviden mahrum bırakmanın ciddi zarar oluşturabileceği durumlarda plasebo kullanımı özel etik değerlendirme gerektirir."),
      section("Plasebo Etkisi Tedavinin Gereksiz Olduğunu mu Gösterir?", "Hayır. Bir çalışmada plasebo grubunda iyileşme görülmesi etkin tedavilerin gereksiz olduğu anlamına gelmez. Asıl soru, incelenen tedavinin uygun karşılaştırma grubuna göre ek ve klinik açıdan anlamlı yarar sağlayıp sağlamadığıdır.")
    ],
    relatedTerms: [
      { term: "Farmakodinamik", slug: "farmakodinamik" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "İzlem", slug: "izlem" }
    ],
    seo: {
      title: "Plasebo Nedir? | Psikiyatri Sözlüğü",
      description: "Plasebo ve plasebo etkisinin ne olduğunu, klinik araştırmalarda neden kullanıldığını ve etik sınırlarını açıklar.",
      ogTitle: "Plasebo Nedir?",
      ogDescription: "Plasebo etkisini ve araştırmalardaki rolünü açıklar."
    },
    schema: {
      definedTermDescription: "İncelenen özgül etkin maddeyi içermeyen ve araştırmalarda karşılaştırma amacıyla kullanılabilen uygulama."
    }
  }),

  defineTerm({
    term: "Prefrontal korteks",
    slug: "prefrontal-korteks",
    shortDefinition: "Prefrontal korteks, planlama, karar verme, çalışma belleği, davranışın düzenlenmesi ve dürtü kontrolü gibi üst düzey bilişsel süreçlere katkıda bulunan frontal beyin bölgesidir.",
    intro: "Prefrontal korteks tek başına beynin karar merkezi değildir. Duygusal ve bilişsel bilgiyi başka kortikal ve subkortikal ağlarla birlikte işler ve davranışın mevcut hedeflere göre düzenlenmesine katkıda bulunur.",
    sections: [
      section("Prefrontal Korteks Hangi İşlevlerde Rol Alır?", "Plan yapma, seçenekleri karşılaştırma, dikkati sürdürme, çalışma belleğini kullanma ve uygun olmayan davranışları baskılama gibi yürütücü işlevlerle ilişkilidir. Bu beceriler tek bir bölgenin değil geniş beyin ağlarının ortak ürünüdür."),
      section("Duygularla İlişkisi Nedir?", "Prefrontal bölgeler amigdala ve diğer limbik yapılarla karşılıklı bağlantılar kurar. Bu ağlar duygusal uyaranların değerlendirilmesi, davranışın bağlama göre ayarlanması ve stres altında karar verme süreçlerine katkıda bulunabilir."),
      section("Psikiyatrik Bozukluklarda Neden Araştırılır?", "DEHB, depresyon, bağımlılık ve başka birçok ruhsal durumda prefrontal ağların işlevleri araştırılmıştır. Ancak grup düzeyindeki görüntüleme farklılıkları tek bir kişide tanı koyan güvenilir bir beyin testi değildir."),
      section("Prefrontal Korteks Gelişimi Ne Zaman Tamamlanır?", "Prefrontal ağlar çocukluk ve ergenlik boyunca gelişmeye devam eder ve genç yetişkinlikte de olgunlaşma süreçleri sürer. Bununla birlikte gelişim kişiden kişiye değişir ve tek bir yaş sınırı davranışsal olgunluğu otomatik olarak belirlemez.")
    ],
    relatedTerms: [
      { term: "Limbik sistem", slug: "limbik-sistem" },
      { term: "Nöroplastisite", slug: "noroplastisite" },
      { term: "DEHB", slug: "dehb" },
      { term: "Dürtüsellik", slug: "durtusellik" }
    ],
    seo: {
      title: "Prefrontal Korteks Nedir? | Psikiyatri Sözlüğü",
      description: "Prefrontal korteksin planlama, karar verme, dikkat ve dürtü kontrolündeki rolünü beyin ağları bağlamında açıklar.",
      ogTitle: "Prefrontal Korteks Nedir?",
      ogDescription: "Prefrontal korteksin yürütücü işlevlerdeki rolünü açıklar."
    },
    schema: {
      definedTermDescription: "Planlama, karar verme ve davranış düzenleme gibi yürütücü işlevlere katkıda bulunan frontal korteks bölgesi."
    }
  }),

  defineTerm({
    term: "Premorbid",
    slug: "premorbid",
    shortDefinition: "Premorbid, bir hastalık veya belirgin klinik tablo başlamadan önceki kişilik, bilişsel kapasite, sosyal işlevsellik ve yaşam özelliklerini tanımlayan klinik terimdir.",
    intro: "Bir kişinin hastalık öncesinde nasıl işlev gördüğünü bilmek, hastalık sonrasında ortaya çıkan değişiklikleri anlamaya yardımcı olabilir. Premorbid sözcüğü tek başına belirli bir hastalığı veya kötü gidişatı ifade etmez. Özellikle zaman içinde belirgin işlev değişikliği bulunan durumlarda önceki yaşam düzeyi önemli bir karşılaştırma noktası sağlar.",
    sections: [
      section("Premorbid İşlevsellik Neleri Kapsayabilir?", "Okul veya iş performansı, sosyal ilişkiler, bağımsız yaşam becerileri, ilgi alanları ve günlük sorumlulukları yerine getirme düzeyi değerlendirilebilir. Amaç kişinin hastalık öncesindeki genel işlev düzeyini olabildiğince gerçekçi biçimde anlamaktır."),
      section("Premorbid Kişilik Ne Demektir?", "Belirgin hastalık belirtileri başlamadan önce kişinin uzun süredir gösterdiği kişilik ve davranış özelliklerini ifade eder. Bu bilgiler mevcut davranışların yeni ortaya çıkıp çıkmadığını değerlendirmede yardımcı olabilir."),
      section("Bilgi Nasıl Elde Edilir?", "Kişinin kendi öyküsü temel kaynaktır; gerekli ve uygun durumlarda önceki kayıtlar veya kişinin izni ve klinik gereklilik çerçevesinde yakınlardan alınan bilgiler de kullanılabilir. Geçmişe ilişkin anlatıların her zaman kusursuz olmadığı göz önünde bulundurulur."),
      section("Premorbid Özellikler Prognozu Kesin Belirler mi?", "Hayır. Hastalık öncesi işlevsellik klinik değerlendirmede önemli bilgilerden biri olabilir ancak gelecekteki seyri tek başına belirlemez. Tedaviye erişim, sosyal destek, hastalığın özellikleri ve birçok başka etken de gidişatı etkileyebilir.")
    ],
    relatedTerms: [
      { term: "Prognoz", slug: "prognoz" },
      { term: "İşlev kaybı", slug: "islev-kaybi" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "Kişilik", slug: "kisilik" }
    ],
    seo: {
      title: "Premorbid Nedir? | Psikiyatri Sözlüğü",
      description: "Premorbid kavramını hastalık öncesi kişilik, işlevsellik ve yaşam özellikleri bağlamında açıklar.",
      ogTitle: "Premorbid Nedir?",
      ogDescription: "Hastalık öncesindeki işlev ve kişilik özelliklerini ifade eden kavramı açıklar."
    },
    schema: {
      definedTermDescription: "Bir hastalık başlamadan önceki kişilik, işlevsellik ve yaşam özelliklerini ifade eden klinik terim."
    }
  }),

  defineTerm({
    term: "Prodrom",
    slug: "prodrom",
    shortDefinition: "Prodrom, bir hastalık veya belirgin klinik dönem tam olarak ortaya çıkmadan önce görülebilen erken ve çoğu zaman özgül olmayan belirti ve değişiklikler dönemidir.",
    intro: "Uyku, enerji, dikkat, sosyal davranış veya duygu durumundaki bazı değişiklikler belirli hastalıklardan önce görülebilir. Ancak prodromal belirtiler genellikle özgül değildir ve tek başına gelecekte hangi hastalığın gelişeceğini kesin olarak göstermez. Bu nedenle erken değişiklikler kesin tanı işareti olarak değil, zaman içindeki örüntünün bir parçası olarak ele alınır.",
    sections: [
      section("Prodromal Belirtiler Nasıl Olabilir?", "Kişiye ve hastalığa göre uyku düzeninde bozulma, içe çekilme, performans azalması, huzursuzluk veya düşünce ve davranışlarda değişiklikler görülebilir. Aynı belirtiler stres veya başka klinik durumlarda da ortaya çıkabilir."),
      section("Prodrom Tanı Anlamına Gelir mi?", "Hayır. Erken belirtilerin varlığı belirli bir bozukluğun mutlaka gelişeceği anlamına gelmez. Klinik değerlendirme belirtilerin süresini, şiddetini, değişimini ve kişinin işlevselliği üzerindeki etkisini izler."),
      section("Erken Fark Etmek Neden Önemlidir?", "Daha önce benzer hastalık dönemleri yaşayan kişilerde kendilerine özgü erken uyarı işaretlerinin bilinmesi hızlı değerlendirmeye yardımcı olabilir. Böylece belirtiler ağırlaşmadan klinik izlem veya mevcut bakım planı gözden geçirilebilir."),
      section("Prodrom ile Relaps Aynı Şey midir?", "Hayır. Prodrom yeni bir hastalık döneminin öncesindeki erken değişiklikleri anlatabilir. Relaps ise daha önce yatışmış belirtilerin yeniden belirginleşmesini ifade eder. İki kavram bazı klinik süreçlerde birbirine yakın kullanılabilse de aynı değildir.")
    ],
    relatedTerms: [
      { term: "Relaps", slug: "relaps" },
      { term: "Nüks önleme", slug: "nuks-onleme" },
      { term: "İzlem", slug: "izlem" },
      { term: "Prognoz", slug: "prognoz" }
    ],
    seo: {
      title: "Prodrom Nedir? | Psikiyatri Sözlüğü",
      description: "Prodromal dönemi, hastalık belirginleşmeden önce görülebilen ancak tek başına tanı koydurmayan erken belirtiler olarak açıklar.",
      ogTitle: "Prodrom Nedir?",
      ogDescription: "Hastalığın öncesindeki erken uyarı belirtileri kavramını açıklar."
    },
    schema: {
      definedTermDescription: "Bir hastalık belirginleşmeden önce görülebilen erken ve çoğu zaman özgül olmayan belirtiler dönemi."
    }
  }),

  defineTerm({
    term: "Prognoz",
    slug: "prognoz",
    shortDefinition: "Prognoz, bir hastalığın veya klinik durumun zaman içindeki olası seyri, düzelme olasılığı, tekrarlama riski ve işlevsellik üzerindeki beklenen etkilerine ilişkin değerlendirmedir.",
    intro: "Prognoz kesin bir gelecek tahmini değildir. Benzer tanıya sahip kişiler arasında bile hastalığın seyri önemli ölçüde değişebilir ve değerlendirme zaman içinde yeni klinik bilgiler ortaya çıktıkça güncellenebilir. Bu nedenle prognoz kişiye değişmez bir sonuç atfetmek yerine olası gidişatları anlamaya yardımcı olan dinamik bir klinik çerçevedir.",
    sections: [
      section("Prognozu Hangi Etkenler Belirler?", "Belirtilerin şiddeti ve süresi, daha önceki dönemler, tedaviye yanıt, eşlik eden hastalıklar, madde kullanımı, sosyal destek ve kişinin yaşam koşulları gibi birçok etken birlikte rol oynayabilir."),
      section("İyi veya Kötü Prognoz Ne Demektir?", "Bu ifadeler hastalığın beklenen seyri hakkında genel klinik değerlendirmeyi anlatır; kişinin değerini veya çabasını tanımlamaz. Prognoz olasılıksal bir kavramdır ve bireysel sonuçları kesin biçimde öngörmez."),
      section("Tanı Tek Başına Prognozu Gösterir mi?", "Hayır. Aynı tanının farklı alt görünümleri ve farklı seyir biçimleri olabilir. Kişinin işlevselliği, erken müdahale, tedaviye erişim ve çevresel koşullar tanının adından bağımsız olarak önemli olabilir."),
      section("Prognoz Zaman İçinde Değişebilir mi?", "Evet. Tedavi yanıtı, yeni hastalık dönemleri, yaşam olayları veya koruyucu etkenlerdeki değişiklikler prognoz değerlendirmesini değiştirebilir. Bu nedenle prognoz tek seferlik ve değişmez bir etiket değildir.")
    ],
    relatedTerms: [
      { term: "İzlem", slug: "izlem" },
      { term: "Relaps", slug: "relaps" },
      { term: "Remisyon", slug: "remisyon" },
      { term: "Premorbid", slug: "premorbid" }
    ],
    seo: {
      title: "Prognoz Nedir? | Psikiyatri Sözlüğü",
      description: "Prognozun hastalığın olası seyrine ilişkin değişebilir ve olasılıksal bir klinik değerlendirme olduğunu açıklar.",
      ogTitle: "Prognoz Nedir?",
      ogDescription: "Hastalığın beklenen seyrini ifade eden prognoz kavramını açıklar."
    },
    schema: {
      definedTermDescription: "Bir hastalığın zaman içindeki olası seyri ve sonuçlarına ilişkin klinik değerlendirme."
    }
  }),

  defineTerm({
    term: "Psikiyatrik rapor",
    slug: "psikiyatrik-rapor",
    shortDefinition: "Psikiyatrik rapor, belirli bir klinik veya idari soruya yönelik psikiyatrik değerlendirme bulgularını ve gerektiğinde uzman görüşünü belgeleyen tıbbi rapordur.",
    intro: "Psikiyatrik raporların amacı ve kapsamı aynı değildir. İşe uygunluk, adli değerlendirme, engellilik, kurul işlemleri veya başka resmi süreçlerde istenen bilgiler ve kullanılan ölçütler ilgili mevzuata ve kuruma göre değişebilir.",
    sections: [
      section("Psikiyatrik Raporda Neler Bulunabilir?", "Raporun amacına göre başvuru nedeni, klinik öykü, mental durum muayenesi, mevcut kayıtlar, işlevsellik ve değerlendirme sonucuna ilişkin bilgiler yer alabilir. Gereksiz kişisel ayrıntıların rapora eklenmemesi mahremiyet açısından önemlidir."),
      section("Tanı Tek Başına Rapor Sonucunu Belirler mi?", "Hayır. Birçok resmi değerlendirmede yalnız tanı değil belirtilerin sürekliliği, işlev kaybı, tedavi süreci ve ilgili görev veya hukuki soruyla ilişkisi değerlendirilir. Aynı tanıya sahip iki kişide sonuç farklı olabilir."),
      section("Her Psikiyatrik Rapor Aynı Hukuki Değeri Taşır mı?", "Hayır. Raporu düzenleyen kurum, uzmanlık ve kurul gereklilikleri başvurunun türüne göre değişebilir. Belirli bir belgenin resmi olarak yeterli olup olmadığı güncel mevzuat ve ilgili kurumun kurallarıyla belirlenir."),
      section("Mahremiyet Nasıl Korunur?", "Raporlama sırasında klinik olarak ve hukuken gerekli bilgilerle sınırlı kalınması temel ilkedir. Bununla birlikte yasal bildirim veya resmi değerlendirme süreçlerindeki gereklilikler ülkeye ve mevzuata göre değişebileceğinden kişisel durum ayrıca değerlendirilmelidir.")
    ],
    relatedTerms: [
      { term: "Mental durum muayenesi", slug: "mental-durum-muayenesi" },
      { term: "Mahremiyet", slug: "mahremiyet" },
      { term: "Hasta hakları", slug: "hasta-haklari" },
      { term: "Maluliyet", slug: "maluliyet" }
    ],
    seo: {
      title: "Psikiyatrik Rapor Nedir? | Psikiyatri Sözlüğü",
      description: "Psikiyatrik raporların klinik ve resmi amaçlarını, kapsamını, işlevsellik değerlendirmesini ve mahremiyet sınırlarını açıklar.",
      ogTitle: "Psikiyatrik Rapor Nedir?",
      ogDescription: "Psikiyatrik raporların klinik ve hukuki çerçevesini açıklar."
    },
    schema: {
      definedTermDescription: "Belirli klinik veya resmi amaçlar için psikiyatrik değerlendirme bulgularını belgeleyen tıbbi rapor."
    }
  }),

  defineTerm({
    term: "Psikiyatrik yatış",
    slug: "psikiyatrik-yatis",
    shortDefinition: "Psikiyatrik yatış, kişinin ruhsal durumunun hastane ortamında daha yoğun değerlendirme, güvenlik izlemi veya tedavi düzenlemesi gerektirdiği durumlarda uygulanan bakım sürecidir.",
    intro: "Her psikiyatrik belirti hastane yatışı gerektirmez. Yatış kararı belirtilerin şiddeti, kişinin güvenliği, günlük işlevselliği, ayaktan bakımın yeterliliği ve mevcut tıbbi koşullar birlikte değerlendirilerek verilir. Amaç yalnız belirtileri azaltmak değil, kişinin güvenliğini sağlamak ve daha sürdürülebilir bir bakım planı oluşturmaktır.",
    sections: [
      section("Psikiyatrik Yatış Neden Gerekebilir?", "Yoğun intihar riski, ağır psikoz, ciddi davranışsal düzensizlik, kişinin temel bakımını sürdürememesi veya hızlı tedavi düzenlemesi gerektiren başka klinik durumlarda hastane ortamı değerlendirilebilir. Her durum bireysel olarak ele alınır."),
      section("Yatış Sırasında Neler Yapılır?", "Klinik değerlendirme, mental durum izlemi, gerekli tıbbi incelemeler, ilaç ve diğer tedavilerin düzenlenmesi, güvenlik önlemleri ve taburculuk sonrası bakım planı oluşturulabilir. Süre kişinin klinik gereksinimlerine göre değişir."),
      section("Gönüllü ve Zorunlu Yatış Aynı mıdır?", "Hayır. Kişinin kendi isteğiyle yatışı ile rızası dışında uygulanabilen yatış süreçlerinin hukuki dayanakları farklıdır. Zorunlu değerlendirme ve yatış kuralları ülkeye ve yürürlükteki mevzuata göre değişir."),
      section("Taburculuk Ne Zaman Planlanır?", "Hastane düzeyinde bakım gereksinimi azaldığında ve ayaktan izlem için yeterli plan oluşturulduğunda taburculuk değerlendirilebilir. Kontrol, ilaç, sosyal destek ve kriz durumunda başvurulacak yolların belirlenmesi süreklilik açısından önemlidir.")
    ],
    relatedTerms: [
      { term: "İntihar riski", slug: "intihar-riski" },
      { term: "Güvenlik planı", slug: "guvenlik-plani" },
      { term: "Kriz müdahalesi", slug: "kriz-mudahalesi" },
      { term: "İzlem", slug: "izlem" }
    ],
    seo: {
      title: "Psikiyatrik Yatış Nedir? | Psikiyatri Sözlüğü",
      description: "Psikiyatrik yatışın hangi klinik durumlarda değerlendirilebildiğini, hastane sürecini ve hukuki sınırlarını açıklar.",
      ogTitle: "Psikiyatrik Yatış Nedir?",
      ogDescription: "Psikiyatrik hastane yatışının amaçlarını ve genel sürecini açıklar."
    },
    schema: {
      definedTermDescription: "Yoğun değerlendirme, güvenlik veya tedavi düzenlemesi amacıyla psikiyatri hastane bakımına alınma süreci."
    }
  }),

  defineTerm({
    term: "Rasyonalizasyon",
    slug: "rasyonalizasyon",
    shortDefinition: "Rasyonalizasyon, kişinin davranış, karar veya duygularının gerçek nedenleriyle yüzleşmek yerine bunlara sonradan daha kabul edilebilir ve mantıklı görünen açıklamalar getirmesiyle tanımlanan savunma biçimidir.",
    intro: "İnsanlar davranışlarının bütün nedenlerini her zaman tam olarak fark etmez. Rasyonalizasyon, benlik saygısını veya kişinin kendisi hakkındaki tutarlı anlatısını korumaya yardımcı olabilen otomatik bir psikolojik süreç olarak ele alınır. Bu süreç kişinin zorlayıcı duygularla karşılaşmasını geçici olarak azaltabilir ancak davranışın altında yatan etkenleri görmesini de zorlaştırabilir.",
    sections: [
      section("Rasyonalizasyon Nasıl Görülebilir?", "Kişi başarısız olduğu bir hedefin zaten önemli olmadığını söyleyebilir veya duygusal nedenlerle aldığı bir kararı yalnız mantıksal gerekçelerle açıklayabilir. Burada açıklama tamamen yanlış olmak zorunda değildir ancak asıl motivasyonun yalnız bir bölümünü yansıtabilir."),
      section("Yalan Söylemekle Aynı Şey midir?", "Hayır. Savunma mekanizmaları çoğu zaman bilinçli planlanmaz. Rasyonalizasyonda kişi sunduğu açıklamaya kendisi de inanabilir; bu nedenle bilinçli olarak başkasını yanıltmaya yönelik davranıştan farklıdır."),
      section("Her Rasyonalizasyon Zararlı mıdır?", "Hayır. Savunma mekanizmaları psikolojik dengeyi kısa süreli koruyabilir. Ancak kişinin davranışındaki tekrar eden sorunları fark etmesini engellediğinde veya sorumluluk almaktan sürekli kaçınmasına hizmet ettiğinde işlev bozucu hale gelebilir."),
      section("Klinik Görüşmede Neden Önemlidir?", "Kişinin kendi davranışlarını nasıl anlamlandırdığı, duygularıyla düşünceleri arasındaki ilişkiyi değerlendirmeye yardımcı olabilir. Amaç kişiyi suçlamak değil, davranışın farklı olası nedenlerini daha esnek biçimde görebilmesini sağlamaktır.")
    ],
    relatedTerms: [
      { term: "Savunma mekanizması", slug: "savunma-mekanizmasi" },
      { term: "İçgörü", slug: "icgoru" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" }
    ],
    seo: {
      title: "Rasyonalizasyon Nedir? | Psikiyatri Sözlüğü",
      description: "Rasyonalizasyonu davranışlara sonradan kabul edilebilir açıklamalar getiren savunma mekanizması olarak açıklar.",
      ogTitle: "Rasyonalizasyon Nedir?",
      ogDescription: "Rasyonalizasyon savunma mekanizmasını günlük örüntüleriyle açıklar."
    },
    schema: {
      definedTermDescription: "Davranış veya duygulara gerçek nedenleri yerine daha kabul edilebilir açıklamalar getiren savunma mekanizması."
    }
  }),

  defineTerm({
    term: "Referans fikirleri",
    slug: "referans-fikirleri",
    shortDefinition: "Referans fikirleri, çevredeki nötr olayların, konuşmaların veya davranışların kişinin kendisiyle özel biçimde ilişkili olduğuna yönelik düşüncelerdir.",
    intro: "Birinin kendisine baktığını veya bir konuşmanın kendisiyle ilgili olabileceğini zaman zaman düşünmek tek başına psikiyatrik belirti değildir. Referans fikirlerinde bu yorumlama örüntüsü daha belirgin hale gelebilir ve klinik bağlama göre farklı anlamlar taşıyabilir. Değerlendirmede kişinin bu düşünceyi ne kadar kesin kabul ettiği ve alternatif açıklamalara ne ölçüde açık olduğu önemlidir.",
    sections: [
      section("Referans Fikirlerine Örnek Ne Olabilir?", "Kişi televizyondaki bir sözün özellikle kendisine gönderilmiş olduğunu, çevredeki insanların gülmesinin kendisiyle ilgili bulunduğunu veya rastlantısal olayların kişisel mesaj taşıdığını düşünebilir. Düşüncenin kesinliği ve esnekliği değerlendirmede önemlidir."),
      section("Referans Fikri ile Sanrı Aynı Şey midir?", "Her zaman değil. Referans fikrinde kişi düşüncesinden bir ölçüde kuşku duyabilir veya alternatif açıklamaları değerlendirebilir. İnanç kesin, değiştirilemez ve gerçeklikle belirgin biçimde uyumsuz hale geldiğinde sanrısal düzey ayrıca değerlendirilir."),
      section("Hangi Durumlarda Görülebilir?", "Yoğun kaygı, sosyal değerlendirilme korkusu, bazı kişilik örüntüleri, psikoz ve başka klinik durumlarda referans benzeri yorumlamalar görülebilir. Bu nedenle tek bir belirti doğrudan belirli bir tanıya bağlanmaz."),
      section("Değerlendirmede Neler Önemlidir?", "Düşüncenin ne kadar sık olduğu, kişinin buna ne ölçüde inandığı, davranışlarını nasıl etkilediği ve başka belirtilerin eşlik edip etmediği incelenir. Kültürel ve gerçek yaşam bağlamı da mutlaka dikkate alınmalıdır.")
    ],
    relatedTerms: [
      { term: "Psikoz", slug: "psikoz" },
      { term: "Paranoid kişilik örüntüsü", slug: "paranoid-kisilik-oruntusu" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" }
    ],
    seo: {
      title: "Referans Fikirleri Nedir? | Psikiyatri Sözlüğü",
      description: "Referans fikirlerini nötr olayları kendisiyle ilişkili yorumlama eğilimi olarak açıklar ve sanrıdan farkını ele alır.",
      ogTitle: "Referans Fikirleri Nedir?",
      ogDescription: "Referans fikirlerinin klinik anlamını ve sanrıdan farkını açıklar."
    },
    schema: {
      definedTermDescription: "Nötr olayların kişinin kendisiyle özel olarak ilişkili olduğu yönündeki düşünceler."
    }
  }),

  defineTerm({
    term: "Regresyon",
    slug: "regresyon",
    shortDefinition: "Regresyon, yoğun stres veya çatışma karşısında kişinin daha önceki gelişim dönemlerine özgü daha ilkel davranış veya baş etme biçimlerine geçici olarak dönmesini anlatan psikodinamik kavramdır.",
    intro: "Regresyon çoğu zaman bilinçli olarak seçilen bir davranış değildir. Psikolojik zorlanma arttığında kişinin daha önce kullandığı ve kendisini daha güvende hissettiren baş etme biçimlerine yönelmesini açıklamak için kullanılan kavramsal bir çerçevedir. Bu kavram davranışı küçümsemek için değil, stres karşısındaki psikolojik uyum biçimini anlamak amacıyla kullanılır.",
    sections: [
      section("Regresyon Nasıl Görülebilir?", "Yoğun stres yaşayan bir kişinin normalde bağımsız yapabildiği işlerde aşırı destek istemesi, daha çocuksu tepkiler göstermesi veya duygularını daha ilkel biçimde ifade etmesi regresyon kavramıyla açıklanabilir."),
      section("Regresyon Çocukça Davranmakla Aynı mıdır?", "Kavram kişinin küçümsenmesi için kullanılmamalıdır. Psikodinamik açıdan önemli olan davranışın stres veya içsel çatışma sırasında daha erken baş etme örüntülerine benzemesidir. Her çocuksu görünen davranış regresyon olarak değerlendirilmez."),
      section("Her Zaman Patolojik midir?", "Hayır. Geçici stres dönemlerinde kısa süreli regresif tepkiler görülebilir. Klinik önem davranışın yoğunluğu, süresi, bağlama uygunluğu ve kişinin günlük yaşamını ne ölçüde etkilediğine göre değerlendirilir."),
      section("Savunma Mekanizmalarıyla İlişkisi Nedir?", "Regresyon klasik psikodinamik kuramlarda savunma mekanizmalarından biri olarak ele alınabilir. Güncel klinik değerlendirmede ise davranışın anlamı kişinin gelişimsel öyküsü ve mevcut stres kaynaklarıyla birlikte değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Savunma mekanizması", slug: "savunma-mekanizmasi" },
      { term: "Rasyonalizasyon", slug: "rasyonalizasyon" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" }
    ],
    seo: {
      title: "Regresyon Nedir? | Psikiyatri Sözlüğü",
      description: "Regresyonu stres altında daha erken gelişim dönemlerine özgü baş etme biçimlerine dönme kavramı olarak açıklar.",
      ogTitle: "Regresyon Nedir?",
      ogDescription: "Regresyon kavramını psikodinamik bağlamıyla açıklar."
    },
    schema: {
      definedTermDescription: "Stres altında daha erken gelişim dönemlerine ait davranış ve baş etme biçimlerine dönmeyi anlatan kavram."
    }
  }),

  defineTerm({
    term: "Relaps",
    slug: "relaps",
    shortDefinition: "Relaps, tedaviyle azalmış veya yatışmış hastalık belirtilerinin yeniden belirginleşmesi ya da önceki klinik döneme benzer bir alevlenmenin ortaya çıkmasıdır.",
    intro: "Relaps ruhsal bozuklukların bazılarında hastalığın doğal seyri içinde görülebilir. Yeni belirtilerin ortaya çıkması tedavinin bütünüyle başarısız olduğu anlamına gelmez; önemli olan değişikliği erken fark ederek yeniden değerlendirmektir. Önceki dönemlerin başlangıç biçimini bilmek, kişinin kendisine özgü erken değişiklikleri daha kolay tanımasına yardımcı olabilir.",
    sections: [
      section("Relaps Nasıl Fark Edilebilir?", "Kişinin önceki hastalık dönemlerinde görülen uyku değişikliği, sosyal geri çekilme, düşünce veya davranış değişiklikleri yeniden ortaya çıkabilir. Erken işaretler kişiden kişiye farklılık gösterdiğinden bireysel örüntünün bilinmesi önemlidir."),
      section("Relaps ile Nüks Aynı mıdır?", "Terimler günlük klinik kullanımda zaman zaman birbirinin yerine geçebilir. Bazı tanımlarda relaps tam iyileşme gerçekleşmeden aynı dönemin yeniden alevlenmesini, nüks ise daha uzun iyilik döneminden sonra yeni bir dönem gelişmesini anlatmak için ayrıştırılır."),
      section("Relaps Riskini Neler Etkileyebilir?", "Hastalığın doğal seyri, tedavinin sürekliliği, uyku düzeni, madde kullanımı, yoğun stres ve sosyal destek gibi birçok etken rol oynayabilir. Tek bir neden üzerinden açıklama yapmak çoğu zaman mümkün değildir."),
      section("Relaps Önleme Neden Önemlidir?", "Kişiye özgü erken belirtilerin tanınması, düzenli izlem ve önceden hazırlanmış baş etme planları klinik değişikliklerin daha erken değerlendirilmesini sağlayabilir. Bu yaklaşım hastalığın yönetiminde sürekliliği destekler.")
    ],
    relatedTerms: [
      { term: "Nüks önleme", slug: "nuks-onleme" },
      { term: "Remisyon", slug: "remisyon" },
      { term: "Prodrom", slug: "prodrom" },
      { term: "İzlem", slug: "izlem" }
    ],
    seo: {
      title: "Relaps Nedir? | Psikiyatri Sözlüğü",
      description: "Relapsı yatışmış belirtilerin yeniden alevlenmesi olarak açıklar; erken uyarı işaretleri ve nüks önlemeyle ilişkisini ele alır.",
      ogTitle: "Relaps Nedir?",
      ogDescription: "Ruhsal belirtilerin yeniden alevlenmesi kavramını açıklar."
    },
    schema: {
      definedTermDescription: "Tedaviyle yatışmış hastalık belirtilerinin yeniden belirginleşmesi veya alevlenmesi."
    }
  }),

  defineTerm({
    term: "REM uykusu",
    slug: "rem-uykusu",
    shortDefinition: "REM uykusu, hızlı göz hareketlerinin görüldüğü, beyin etkinliğinin arttığı, kas tonusunun belirgin azaldığı ve canlı rüyaların sık yaşandığı temel uyku dönemidir.",
    intro: "Normal gece uykusunda REM ve Non-REM dönemleri döngüler halinde birbirini izler. REM süresinin oranı gece boyunca değişir ve sabaha yaklaştıkça REM dönemleri genellikle daha uzun hale gelir.",
    sections: [
      section("REM Uykusunda Beyinde Ne Olur?", "Beynin bazı bölgelerinde etkinlik uyanıklığa benzer düzeylere yaklaşırken iskelet kaslarının tonusu büyük ölçüde azalır. Gözlerde hızlı hareketler görülür ve canlı, anlatısal rüyalar bu dönemde daha sık bildirilir."),
      section("REM Uykusu Bellekle İlişkili midir?", "REM uykusunun bazı bellek türleri, duygusal öğrenme ve yeni bilgilerin işlenmesiyle ilişkisi araştırılmıştır. Bununla birlikte bellek yalnız REM uykusuna bağlı değildir; Non-REM dönemleri de öğrenme ve bellek süreçlerine katkıda bulunur."),
      section("REM ve Non-REM Arasındaki Temel Fark Nedir?", "Non-REM uykusu hafif ve derin uyku evrelerini içerirken REM döneminde hızlı göz hareketleri ve farklı beyin aktivitesi örüntüsü görülür. Sağlıklı uyku her iki dönemin düzenli biçimde birbirini izlemesini gerektirir."),
      section("Uyku Evreleri Evde Kesin Ölçülebilir mi?", "Tüketici saatleri ve benzeri cihazlar uyku evrelerini hareket ve kalp hızı gibi dolaylı sinyallerden tahmin eder. Klinik uyku evrelemesinde ise beyin dalgaları, göz hareketleri ve kas aktivitesini kaydeden polisomnografi kullanılır.")
    ],
    relatedTerms: [
      { term: "Non-REM uykusu", slug: "non-rem-uykusu" },
      { term: "Bilinç", slug: "bilinc" },
      { term: "Hipnotik", slug: "hipnotik" }
    ],
    seo: {
      title: "REM Uykusu Nedir? | Psikiyatri Sözlüğü",
      description: "REM uykusunun hızlı göz hareketleri, rüyalar, kas tonusu ve bellek süreçleriyle ilişkisini Non-REM uykusuyla karşılaştırarak açıklar.",
      ogTitle: "REM Uykusu Nedir?",
      ogDescription: "REM uykusunun temel özelliklerini ve uyku döngüsündeki yerini açıklar."
    },
    schema: {
      definedTermDescription: "Hızlı göz hareketleri, düşük kas tonusu ve canlı rüyalarla karakterize temel uyku dönemi."
    }
  }),

  defineTerm({
    term: "Savunma mekanizması",
    slug: "savunma-mekanizmasi",
    shortDefinition: "Savunma mekanizması, kişinin kaygı, çatışma veya zorlayıcı duygularla baş ederken çoğu zaman bilinçdışı biçimde kullandığı psikolojik düzenleme yollarının genel adıdır.",
    intro: "Savunma mekanizmaları yalnız psikiyatrik hastalığı olan kişilerde görülmez. Günlük yaşamda herkes zorlayıcı duygular karşısında çeşitli savunma biçimleri kullanabilir; klinik önem bunların ne kadar katı ve işlev bozucu hale geldiğine bağlıdır. Aynı kişi farklı yaşam koşullarında farklı savunmaları kullanabilir ve bu örüntüler zaman içinde değişebilir.",
    sections: [
      section("Savunma Mekanizmaları Ne İşe Yarar?", "Kaygıyı azaltmak, kişinin kendisi hakkındaki tutarlı algısını korumak veya yoğun duyguların kısa sürede yönetilmesini kolaylaştırmak gibi işlevler görebilir. Bazı savunmalar kısa vadede yararlı olsa da uzun vadede sorunları görmeyi engelleyebilir."),
      section("Savunma Mekanizmaları Bilinçli midir?", "Çoğu klasik tanımda savunma mekanizmalarının büyük ölçüde otomatik ve bilinçdışı işlediği kabul edilir. Bu nedenle kişinin savunma kullandığını söylemek bilinçli biçimde gerçekleri çarpıttığı anlamına gelmez."),
      section("Olgun ve Olgun Olmayan Savunma Ne Demektir?", "Psikodinamik kuramlar bazı savunmaları gerçekliği daha az bozan ve uyumu daha çok destekleyen, bazılarını ise daha katı veya işlev bozucu biçimler olarak sınıflandırır. Bu ayrım tek başına tanısal bir ölçüt değildir."),
      section("Savunmalar Değişebilir mi?", "Kişinin duygularını tanıması, davranışlarının sonuçlarını fark etmesi ve farklı baş etme yöntemleri geliştirmesiyle savunma örüntülerinin kullanım biçimi değişebilir. Psikoterapi bu farkındalığın gelişebileceği alanlardan biridir.")
    ],
    relatedTerms: [
      { term: "Rasyonalizasyon", slug: "rasyonalizasyon" },
      { term: "Regresyon", slug: "regresyon" },
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "İçgörü", slug: "icgoru" }
    ],
    seo: {
      title: "Savunma Mekanizması Nedir? | Psikiyatri Sözlüğü",
      description: "Savunma mekanizmalarını kaygı ve içsel çatışmalarla baş etmeye yardımcı olan çoğunlukla otomatik psikolojik süreçler olarak açıklar.",
      ogTitle: "Savunma Mekanizması Nedir?",
      ogDescription: "Savunma mekanizmalarının işlevini ve klinik anlamını açıklar."
    },
    schema: {
      definedTermDescription: "Kaygı ve psikolojik çatışmayla baş etmede kullanılan çoğu zaman bilinçdışı psikolojik süreç."
    }
  }),

  defineTerm({
    term: "Selektif mutizm",
    slug: "selektif-mutizm",
    shortDefinition: "Selektif mutizm, çocuğun konuşabildiği halde konuşmasının beklendiği belirli sosyal ortamlarda sürekli konuşamaması ve başka ortamlarda konuşabilmesiyle karakterize klinik durumdur.",
    intro: "Selektif mutizm çocuğun bilinçli biçimde konuşmayı reddetmesi veya inat etmesi olarak değerlendirilmemelidir. Konuşma güçlüğü çoğunlukla belirli sosyal durumlarla ilişkilidir ve kaygı önemli bir rol oynayabilir. Çocuğun konuşabildiği ortamlardaki becerilerinin görülmesi, sorunun bir dil yetersizliğinden çok bağlama bağlı niteliğini anlamaya yardımcı olur. Bu ayrım değerlendirme açısından özellikle önemlidir.",
    sections: [
      section("Selektif Mutizm Nasıl Görülür?", "Çocuk evde yakınlarıyla rahat konuşurken okulda öğretmen veya arkadaşlarının yanında konuşamayabilir. Bazı çocuklar jest, mimik veya yazıyla iletişim kurabilir. Konuşma düzeyi ortamın güven vericiliğine göre belirgin biçimde değişebilir."),
      section("Çocuk Konuşmak İstemediği İçin mi Susar?", "Genellikle hayır. Konuşması için baskı yapmak, cezalandırmak veya herkesin önünde zorlamak kaygıyı artırabilir. Çocuğun konuşamadığı durumlarda davranışı isteksizlik veya karşı gelme olarak yorumlamamak önemlidir."),
      section("Değerlendirmede Neler Dikkate Alınır?", "Konuşmanın hangi ortamlarda mümkün olduğu, sorunun süresi, dil gelişimi, işitme, gelişimsel özellikler ve eşlik eden kaygı belirtileri değerlendirilir. Çocuğun bulunduğu dil ve kültür ortamı da göz önünde bulundurulmalıdır."),
      section("Destek Nasıl Planlanır?", "Yaklaşım çocuğun kaygısını azaltan, güvenli ve aşamalı iletişim fırsatları oluşturan bir plan içerebilir. Aile, okul ve ilgili profesyonellerin aynı baskısız yaklaşımı sürdürmesi çocuğun iletişim becerilerini destekleyebilir.")
    ],
    relatedTerms: [
      { term: "Anksiyete", slug: "anksiyete" },
      { term: "Gelişimsel değerlendirme", slug: "gelisimsel-degerlendirme" },
      { term: "Sosyal iletişim", slug: "sosyal-iletisim" }
    ],
    seo: {
      title: "Selektif Mutizm Nedir? | Psikiyatri Sözlüğü",
      description: "Selektif mutizmi çocuğun bazı sosyal ortamlarda konuşamaması olarak açıklar ve bunun bilinçli inat olmadığını vurgular.",
      ogTitle: "Selektif Mutizm Nedir?",
      ogDescription: "Selektif mutizmin belirtilerini ve değerlendirme yaklaşımını açıklar."
    },
    schema: {
      definedTermDescription: "Çocuğun konuşabildiği halde belirli sosyal ortamlarda sürekli konuşamamasıyla karakterize durum."
    }
  }),

  defineTerm({
    term: "SNRI",
    slug: "snri",
    shortDefinition: "SNRI, serotonin ve noradrenalin geri alımını etkileyen ve depresyon ile bazı anksiyete bozukluklarında kullanılabilen reçeteli antidepresan ilaç grubudur.",
    intro: "Serotonin-noradrenalin geri alım inhibitörleri aynı ilaç grubunda yer alsa da birbirinin tamamen aynısı değildir. Hangi ilacın uygun olduğu klinik tablo, eşlik eden hastalıklar, olası yan etkiler ve daha önceki tedavi deneyimleriyle birlikte değerlendirilir. Tedavi sırasında yarar ve istenmeyen etkiler birlikte izlenerek klinik plan gerektiğinde yeniden değerlendirilir.",
    sections: [
      section("SNRI İlaçlar Nasıl Etki Gösterir?", "Serotonin ve noradrenalinin sinir hücreleri arasındaki geri alım süreçlerini etkileyerek bu sistemlerdeki sinyallemeyi değiştirirler. Klinik etkinin ortaya çıkması yalnız nörotransmitter miktarındaki anlık değişiklikle açıklanmaz ve zaman içinde gelişen uyarlanmalar da rol oynar."),
      section("Hangi Durumlarda Kullanılabilir?", "Depresif bozukluklar ve bazı anksiyete bozukluklarında değerlendirilebilir; bazı ajanların başka tıbbi kullanım alanları da bulunabilir. İlacın seçimi yalnız tanı adına bakılarak yapılmaz ve kişisel tıbbi özellikler dikkate alınır."),
      section("Yan Etkiler Herkeste Aynı mıdır?", "Hayır. Bulantı, uyku değişiklikleri, terleme veya başka etkiler görülebilir ancak her kişide aynı yan etkiler oluşmaz. Bazı SNRI ilaçlarında kan basıncı gibi klinik parametrelerin izlenmesi kişinin özelliklerine göre önem taşıyabilir."),
      section("SNRI Kendi Kendine Kesilebilir mi?", "Reçeteli antidepresanların dozunun değiştirilmesi veya aniden bırakılması kişisel kararla yapılmamalıdır. Bazı kişilerde hızlı doz değişiklikleri kesilme belirtilerine yol açabileceğinden tedavi değişiklikleri reçeteleyen hekimle planlanmalıdır.")
    ],
    relatedTerms: [
      { term: "Antidepresan", slug: "antidepresan" },
      { term: "Noradrenalin", slug: "noradrenalin" },
      { term: "Kesilme belirtileri", slug: "kesilme-belirtileri" },
      { term: "SSRI", slug: "ssri" }
    ],
    seo: {
      title: "SNRI Nedir? | Psikiyatri Sözlüğü",
      description: "SNRI antidepresanların serotonin ve noradrenalin üzerindeki etkisini, kullanım alanlarını ve güvenli ilaç değişikliği ilkelerini açıklar.",
      ogTitle: "SNRI Nedir?",
      ogDescription: "SNRI antidepresan grubunu güvenli ilaç bilgisi çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Serotonin ve noradrenalin geri alımını etkileyen reçeteli antidepresan ilaç grubu."
    }
  }),

  defineTerm({
    term: "Sosyal iletişim",
    slug: "sosyal-iletisim",
    shortDefinition: "Sosyal iletişim, kişinin sözel dil, jest, mimik, göz teması, ses tonu ve bağlama uygun karşılıklı etkileşim yollarıyla başkalarıyla anlam paylaşma becerilerinin bütünüdür.",
    intro: "Sosyal iletişim yalnız konuşabilmekten ibaret değildir. Bir konuşmayı başlatma ve sürdürme, karşıdakinin verdiği ipuçlarını yorumlama ve iletişim biçimini sosyal bağlama göre değiştirme gibi birçok beceri birlikte çalışır. Bu becerilerin gelişimi yaş, dil deneyimi, sosyal çevre ve bireysel gelişim özelliklerinden etkilenebilir.",
    sections: [
      section("Sosyal İletişimin Hangi Bileşenleri Vardır?", "Sözel anlatımın yanı sıra jestler, yüz ifadesi, ses tonu, sıra alma, konu değiştirme ve karşıdakinin ilgisini takip etme gibi beceriler sosyal iletişime katkıda bulunur. Kültürel normlar bu davranışların biçimini etkileyebilir."),
      section("Sosyal İletişim Güçlüğü Nasıl Fark Edilebilir?", "Kişi karşılıklı sohbeti sürdürmekte, mecaz veya dolaylı ifadeleri anlamakta, sosyal ipuçlarını yorumlamakta veya iletişim biçimini ortama göre değiştirmekte zorlanabilir. Tek bir davranış üzerinden gelişimsel bir tanı konulmaz."),
      section("Utangaçlık ile Aynı Şey midir?", "Hayır. Utangaç kişi sosyal kuralları anlayabildiği halde kaygı veya çekingenlik nedeniyle iletişime girmekte zorlanabilir. Sosyal iletişim becerisindeki güçlük ise iletişimin yapısını anlama veya kullanma alanında farklı özellikler gösterebilir."),
      section("Değerlendirmede Neler Önemlidir?", "Yaş, dil gelişimi, bilişsel özellikler, işitme, kültürel ortam ve sosyal deneyimler birlikte ele alınır. Çocuklarda aile ve okul gibi farklı ortamlardaki gözlemler gelişimsel değerlendirmeyi daha kapsamlı hale getirebilir.")
    ],
    relatedTerms: [
      { term: "Gelişimsel değerlendirme", slug: "gelisimsel-degerlendirme" },
      { term: "Selektif mutizm", slug: "selektif-mutizm" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" }
    ],
    seo: {
      title: "Sosyal İletişim Nedir? | Psikiyatri Sözlüğü",
      description: "Sosyal iletişimi sözel ve sözel olmayan karşılıklı iletişim becerileri olarak açıklar ve utangaçlıktan farkını ele alır.",
      ogTitle: "Sosyal İletişim Nedir?",
      ogDescription: "Sosyal iletişimin temel bileşenlerini ve değerlendirilmesini açıklar."
    },
    schema: {
      definedTermDescription: "Sözel ve sözel olmayan yollarla karşılıklı ilişki kurma ve anlam paylaşma becerilerinin bütünü."
    }
  }),

  defineTerm({
    term: "SSRI",
    slug: "ssri",
    shortDefinition: "SSRI, serotonin geri alımını seçici biçimde etkileyen ve depresyon ile birçok anksiyete bozukluğunda yaygın olarak kullanılan reçeteli antidepresan ilaç grubudur.",
    intro: "Seçici serotonin geri alım inhibitörleri psikiyatride sık kullanılan ilaçlardır ancak aynı gruptaki ilaçların özellikleri tamamen aynı değildir. Tedavi seçimi belirtiler, eşlik eden hastalıklar, diğer ilaçlar ve daha önceki tedavi deneyimleriyle birlikte yapılır. Tedavi yanıtı yalnız belirtilerdeki değişimle değil günlük yaşam ve işlevsellik üzerindeki etkilerle birlikte değerlendirilir.",
    sections: [
      section("SSRI İlaçlar Nasıl Etki Gösterir?", "Serotoninin sinir hücreleri arasındaki geri alımını etkileyerek serotonerjik sinyallemeyi değiştirirler. Bununla birlikte antidepresan etkinin yalnız basit bir serotonin artışıyla açıklanması güncel nörobiyolojik bilgiyi aşırı basitleştirir."),
      section("Hangi Durumlarda Kullanılabilir?", "Depresif bozukluklar, obsesif kompulsif bozukluk ve bazı anksiyete bozuklukları gibi çeşitli klinik durumlarda değerlendirilebilir. Hangi ilacın kullanılacağı ve tedavi süresi kişisel klinik değerlendirmeye göre belirlenir."),
      section("Etkileri Hemen Başlar mı?", "Bazı yan etkiler veya bedensel değişiklikler erken dönemde hissedilebilirken hedeflenen klinik etkinin değerlendirilmesi daha uzun süre gerektirebilir. Tedavi yanıtı belirtiler ve günlük işlevsellik üzerinden zaman içinde izlenir."),
      section("SSRI Aniden Bırakılabilir mi?", "Kendi kendine doz azaltmak veya tedaviyi aniden bırakmak uygun değildir. Bazı kişilerde hızlı doz değişikliği kesilme belirtilerine yol açabilir ve kullanılan ilaca göre plan farklılaşabileceğinden değişiklikler reçeteleyen hekimle değerlendirilmelidir.")
    ],
    relatedTerms: [
      { term: "Antidepresan", slug: "antidepresan" },
      { term: "Kesilme belirtileri", slug: "kesilme-belirtileri" },
      { term: "SNRI", slug: "snri" },
      { term: "Farmakodinamik", slug: "farmakodinamik" }
    ],
    seo: {
      title: "SSRI Nedir? | Psikiyatri Sözlüğü",
      description: "SSRI antidepresanların genel etki mekanizmasını, kullanım alanlarını ve tedavi değişikliklerinin neden klinik olarak planlanması gerektiğini açıklar.",
      ogTitle: "SSRI Nedir?",
      ogDescription: "SSRI antidepresan grubunu güvenli ilaç bilgisi çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Serotonin geri alımını seçici biçimde etkileyen yaygın reçeteli antidepresan ilaç grubu."
    }
  }),

  defineTerm({
    term: "Stigma",
    slug: "stigma",
    shortDefinition: "Stigma, bir kişinin ruhsal hastalık veya başka bir özelliği nedeniyle olumsuz kalıp yargılarla etiketlenmesi, değersizleştirilmesi veya sosyal olarak dışlanması sürecidir.",
    intro: "Ruh sağlığı alanındaki stigma yalnız incitici sözlerden ibaret değildir. Eğitim, iş, ilişkiler ve sağlık hizmetlerine erişimde ayrımcılığa yol açabilir; ayrıca kişinin toplumdaki önyargıları kendi benlik algısına dahil etmesini de etkileyebilir.",
    sections: [
      section("Stigma Nasıl Ortaya Çıkar?", "Ruhsal hastalıkların zayıflık, tehlikelilik veya kişisel başarısızlıkla eş tutulduğu yanlış inanışlar stigmayı besleyebilir. Medya dili, sosyal çevre ve kurumsal uygulamalar bu kalıp yargıları azaltabilir veya güçlendirebilir."),
      section("Stigma Yardım Aramayı Etkiler mi?", "Evet. Etiketlenme, işini kaybetme veya çevresinden dışlanma korkusu kişinin belirtilerini saklamasına ve profesyonel destek aramayı geciktirmesine yol açabilir. Bu nedenle stigma aynı zamanda önemli bir halk sağlığı sorunudur."),
      section("Stigma ile İçselleştirilmiş Stigma Aynı mıdır?", "Hayır. Stigma toplumdan veya çevreden yönelen önyargı ve ayrımcılığı kapsayan daha geniş kavramdır. İçselleştirilmiş stigma ise kişinin bu olumsuz inanışları kendi kimliği ve değeri hakkında doğru kabul etmeye başlamasını ifade eder."),
      section("Stigma Nasıl Azaltılabilir?", "Doğru bilgi, ayrımcı olmayan dil, ruhsal hastalık deneyimi yaşayan kişilerin insan olarak çok boyutlu biçimde temsil edilmesi ve eşit hakların korunması stigmanın azalmasına katkıda bulunabilir. Sorumluluk yalnız bireye yüklenmemelidir.")
    ],
    relatedTerms: [
      { term: "İçselleştirilmiş stigma", slug: "icsellestirilmis-stigma" },
      { term: "Hasta hakları", slug: "hasta-haklari" },
      { term: "Koruyucu ruh sağlığı", slug: "koruyucu-ruh-sagligi" },
      { term: "Psikoeğitim", slug: "psikoegitim" }
    ],
    seo: {
      title: "Stigma Nedir? | Psikiyatri Sözlüğü",
      description: "Ruh sağlığında stigma kavramını toplumsal önyargı, etiketleme, ayrımcılık ve içselleştirilmiş stigma ile ilişkisi üzerinden açıklar.",
      ogTitle: "Stigma Nedir?",
      ogDescription: "Ruh sağlığında damgalanma ve ayrımcılık süreçlerini açıklar."
    },
    schema: {
      definedTermDescription: "Bir kişinin ruhsal hastalık veya başka bir özelliği nedeniyle olumsuz biçimde etiketlenmesi ve dışlanması süreci."
    }
  })
];

const fifteenthBatchNewTerms = [
  defineTerm({
    term: "Çift terapisi",
    slug: "cift-terapisi",
    shortDefinition: "Çift terapisi, partnerlerin ilişki içindeki iletişim, çatışma, yakınlık ve tekrar eden etkileşim örüntülerini birlikte ele alan yapılandırılmış bir psikoterapi yaklaşımıdır.",
    intro: "Çift terapisi yalnız ilişkisi sona ermek üzere olan çiftlere yönelik değildir. İletişim güçlükleri, güven sorunları, yaşam geçişleri, ebeveynlik rolleri veya yakınlıkla ilgili zorlanmalar da çalışma konusu olabilir. Amaç hangi partnerin haklı olduğunu belirlemekten çok ilişkinin nasıl işlediğini anlamak ve daha işlevsel etkileşim yolları geliştirmektir.",
    sections: [
      section("Çift Terapisinde Neler Ele Alınır?", "Görüşmelerde çatışmaların nasıl başladığı, tarafların birbirinin davranışlarını nasıl yorumladığı, ihtiyaçların nasıl ifade edildiği ve gerilim sonrasında ilişkinin nasıl onarıldığı incelenebilir. İletişim biçimleri, duygusal yakınlık, sınırlar, güven ve ortak karar verme gibi alanlar çiftin gereksinimine göre ele alınır. Her çift için aynı yöntem veya hedef kullanılmaz."),
      section("Amaç Kimin Haklı Olduğunu Bulmak mıdır?", "Hayır. Terapötik çalışmada taraflardan birini suçlu veya haklı ilan etmek temel amaç değildir. Tekrarlayan ilişki döngüsünün iki kişiyi nasıl etkilediğini anlamak daha önemlidir. Örneğin bir partner geri çekildikçe diğerinin daha yoğun biçimde yakınlık araması ve bunun geri çekilmeyi artırması karşılıklı sürdürülen bir örüntü oluşturabilir."),
      section("Bireysel Psikoterapiden Farkı Nedir?", "Bireysel psikoterapide kişinin düşünceleri, duyguları ve yaşam öyküsü temel çalışma alanı olabilir. Çift terapisinde ise bunlara ek olarak partnerler arasındaki karşılıklı etkileşim doğrudan değerlendirilir. Gerektiğinde bireysel ruhsal sorunların ilişkiye etkisi de ele alınabilir ancak çift görüşmesi bireysel değerlendirmenin otomatik yerine geçmez."),
      section("Her İlişki Sorununda Uygun mudur?", "Çift terapisi birçok ilişki güçlüğünde yararlı bir çalışma alanı sağlayabilir ancak güvenlik önceliklidir. Şiddet, tehdit, ağır kontrol davranışları veya kişinin görüşmeye özgürce katılımını engelleyen koşullar varsa standart çift görüşmesi her zaman uygun olmayabilir. Böyle durumlarda güvenlik, bireysel değerlendirme ve gerekli destek seçenekleri öncelikle ele alınır.")
    ],
    relatedTerms: [
      { term: "Aile terapisi", slug: "aile-terapisi" },
      { term: "Terapötik ittifak", slug: "terapotik-ittifak" },
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Sosyal iletişim", slug: "sosyal-iletisim" }
    ],
    seo: {
      title: "Çift Terapisi Nedir? | Psikiyatri Sözlüğü",
      description: "Çift terapisinin ilişki örüntülerini, iletişimi ve çatışmaları nasıl ele aldığını ve bireysel psikoterapiden farkını açıklar.",
      ogTitle: "Çift Terapisi Nedir?",
      ogDescription: "Çift terapisinin amaçlarını, kapsamını ve güvenlik sınırlarını açıklar."
    },
    schema: {
      definedTermDescription: "Partnerlerin ilişki içindeki iletişim ve etkileşim örüntülerini birlikte ele alan psikoterapi yaklaşımı."
    }
  }),

  defineTerm({
    term: "Terapötik ittifak",
    slug: "terapotik-ittifak",
    shortDefinition: "Terapötik ittifak, danışan ile ruh sağlığı uzmanı arasında hedefler, çalışma yöntemi ve güvene dayalı iş birliği konusunda oluşan profesyonel çalışma ilişkisidir.",
    intro: "Psikoterapinin yalnız kullanılan tekniklerden oluşmadığını gösteren temel kavramlardan biridir. Kişinin kendisini anlaşılmış ve saygı görmüş hissetmesi, hedeflerin açık biçimde konuşulabilmesi ve terapötik sürece ilişkin görüş ayrılıklarının ele alınabilmesi ittifakın önemli parçalarıdır. Güçlü ittifak her konuda aynı düşünmek anlamına gelmez.",
    sections: [
      section("Terapötik İttifakın Temel Bileşenleri Nelerdir?", "Genellikle ortak hedefler, bu hedeflere ulaşmak için yapılacak çalışmalar konusunda anlaşma ve güvene dayalı profesyonel bağ üç temel unsur olarak ele alınır. Danışanın terapiye ilişkin beklentilerinin dinlenmesi ve kullanılan yöntemin anlaşılır biçimde açıklanması iş birliğini güçlendirebilir. İttifak tek taraflı değil karşılıklı gelişen dinamik bir süreçtir."),
      section("İyi İlişki ile Aynı Şey midir?", "Hayır. Terapistin sıcak, anlayışlı veya destekleyici olması değerli olsa da terapötik ittifak yalnız iyi geçinmekten ibaret değildir. Zor konuların konuşulabilmesi, gerektiğinde farklı bakış açılarının ele alınması ve terapinin amaçları konusunda ortak bir çalışma zemininin kurulması gerekir. Profesyonel sınırlar da bu ilişkinin temel parçalarındandır."),
      section("İttifakta Bozulma Olabilir mi?", "Evet. Danışanın anlaşılmadığını hissetmesi, hedeflerin uyuşmaması, bir yorumun incitici algılanması veya görüşme biçimiyle ilgili rahatsızlıklar geçici kopmalara yol açabilir. Bu tür durumların açıkça konuşulabilmesi terapötik sürecin önemli bir parçasıdır. Her uyuşmazlık terapinin başarısız olduğu anlamına gelmez."),
      section("Tedavi Sonucuyla İlişkisi Nedir?", "Araştırmalar farklı psikoterapi yaklaşımlarında terapötik ittifak ile olumlu sonuçlar arasında ilişki bulunduğunu göstermektedir. Ancak bu ilişki tek başına neden-sonuç biçiminde yorumlanmamalıdır. Belirtilerin niteliği, kişinin yaşam koşulları, kullanılan yöntem, süreklilik ve başka birçok etken tedavi sonucunu birlikte etkiler.")
    ],
    relatedTerms: [
      { term: "Psikoterapi", slug: "psikoterapi" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "Formülasyon", slug: "formulasyon" },
      { term: "Aktarım", slug: "aktarim" }
    ],
    seo: {
      title: "Terapötik İttifak Nedir? | Psikiyatri Sözlüğü",
      description: "Terapötik ittifakı psikoterapide ortak hedef, yöntem ve güvene dayalı çalışma ilişkisi üzerinden açıklar.",
      ogTitle: "Terapötik İttifak Nedir?",
      ogDescription: "Psikoterapide terapötik çalışma ilişkisinin temel bileşenlerini açıklar."
    },
    schema: {
      definedTermDescription: "Danışan ve ruh sağlığı uzmanı arasında hedef, yöntem ve güven temelinde kurulan profesyonel çalışma ilişkisi."
    }
  }),

  defineTerm({
    term: "Sublimasyon",
    slug: "sublimasyon",
    shortDefinition: "Sublimasyon, kabul edilmesi veya doğrudan ifade edilmesi güç dürtü ve duyguların daha yapıcı, üretken veya toplumsal olarak kabul gören etkinliklere yönlendirilmesini anlatan savunma mekanizmasıdır.",
    intro: "Psikodinamik kuramda sublimasyon genellikle daha olgun savunma biçimlerinden biri olarak değerlendirilir. Temel düşünce, dürtünün bütünüyle yok edilmesi yerine enerjisinin farklı bir alanda ifade bulmasıdır. Kavram günlük yaşam davranışlarını tek bir psikolojik nedene indirgemek amacıyla kullanılmamalıdır.",
    sections: [
      section("Sublimasyon Nasıl Açıklanır?", "Kişinin yoğun rekabet, öfke, cinsellik veya başka güçlü dürtülerle ilişkili enerjisini sanat, spor, bilimsel üretim, çalışma veya toplumsal katkı gibi alanlara yönlendirmesi örnek olarak verilebilir. Ancak dışarıdan görülen bir etkinliğin gerçekten sublimasyon olup olmadığı yalnız davranışa bakılarak kesin biçimde belirlenemez."),
      section("Bastırmadan Farkı Nedir?", "Bastırmada rahatsız edici düşünce, dürtü veya anının bilinç dışında tutulması vurgulanır. Sublimasyonda ise dürtünün enerjisinin başka ve daha kabul edilebilir bir hedefe yönelmesi söz konusudur. Psikodinamik kavramlar birbirinden teorik olarak ayrılabilse de gerçek yaşamda kişinin ruhsal süreçleri daha karmaşık olabilir."),
      section("Her Üretken Davranış Sublimasyon mudur?", "Hayır. Bir kişinin spor yapması, sanatla ilgilenmesi veya çalışmaya yoğunlaşması tek başına sublimasyon kanıtı değildir. Davranışın anlamı kişinin yaşam öyküsü, duyguları, çatışmaları ve içinde bulunduğu bağlamla birlikte değerlendirilir. Savunma mekanizmaları gözlenebilir davranışlardan otomatik biçimde teşhis edilecek kategoriler değildir."),
      section("Savunma Mekanizmaları Neden Kullanılır?", "Savunmalar kişinin kaygı, çatışma ve zorlayıcı duygularla baş etmesine katkıda bulunan çoğu zaman otomatik ruhsal süreçlerdir. Her savunma mutlaka hastalık belirtisi değildir. Esneklik önemlidir; aynı kişi farklı dönemlerde farklı savunmaları kullanabilir. Klinik değerlendirmede tek bir savunma üzerinden kişilik veya tanı sonucu çıkarılmaz.")
    ],
    relatedTerms: [
      { term: "Savunma mekanizması", slug: "savunma-mekanizmasi" },
      { term: "Bastırma", slug: "bastirma" },
      { term: "Rasyonalizasyon", slug: "rasyonalizasyon" },
      { term: "Entelektüalizasyon", slug: "entelektualizasyon" }
    ],
    seo: {
      title: "Sublimasyon Nedir? | Psikiyatri Sözlüğü",
      description: "Sublimasyonu dürtü ve duyguların üretken alanlara yönlendirilmesiyle ilişkili bir savunma mekanizması olarak açıklar.",
      ogTitle: "Sublimasyon Nedir?",
      ogDescription: "Sublimasyonun bastırmadan farkını ve psikodinamik anlamını açıklar."
    },
    schema: {
      definedTermDescription: "Dürtü ve duygusal enerjinin yapıcı veya toplumsal olarak kabul edilen etkinliklere yönlendirilmesini anlatan savunma mekanizması."
    }
  }),

  defineTerm({
    term: "Öykü alma",
    slug: "oyku-alma",
    shortDefinition: "Öykü alma, kişinin güncel yakınmalarını, geçmiş sağlık bilgilerini, yaşam koşullarını ve belirtilerin zaman içindeki seyrini sistematik biçimde öğrenmeye yönelik klinik bilgi toplama sürecidir.",
    intro: "Psikiyatrik değerlendirmede yalnız kişinin o anda nasıl göründüğü değil, belirtilerin ne zaman başladığı ve yaşam boyunca nasıl değiştiği de önem taşır. Öykü alma bu zaman çizgisini anlamaya yardımcı olur. Süreç bir sorgulama değil, klinik kararları destekleyen karşılıklı ve yapılandırılmış bir görüşmedir.",
    sections: [
      section("Psikiyatrik Öyküde Hangi Bilgiler Sorulur?", "Başvuru nedeni, belirtilerin başlangıcı ve seyri, önceki ruhsal ve bedensel hastalıklar, kullanılan ilaçlar, madde kullanımı, uyku, aile öyküsü, gelişimsel bilgiler, eğitim ve çalışma yaşamı gibi alanlar ele alınabilir. Her kişide aynı ayrıntı düzeyi gerekli değildir; sorular başvuru nedenine göre şekillenir."),
      section("Öykü Alma ile Mental Durum Muayenesi Aynı mıdır?", "Hayır. Öykü alma kişinin geçmişi ve belirtilerin zaman içindeki gelişimi hakkında bilgi edinmeyi amaçlar. Mental durum muayenesi ise görüşme sırasında gözlenen görünüm, konuşma, duygu, düşünce, algı, dikkat ve içgörü gibi mevcut zihinsel işlevleri sistematik biçimde değerlendirir. İki bilgi kaynağı birlikte yorumlanır."),
      section("Yakınlardan Bilgi Alınabilir mi?", "Bazı durumlarda kişinin onayıyla aile üyeleri veya yakınlarından ek bilgi alınması yararlı olabilir. Özellikle belirti farkındalığının azaldığı veya zaman çizgisinin netleştirilmesi gereken durumlarda bu bilgiler katkı sağlayabilir. Bununla birlikte mahremiyet, kişinin hakları ve bilginin hangi amaçla kullanılacağı gözetilmelidir."),
      section("Tek Bir Görüşmede Tamamlanmak Zorunda mıdır?", "Hayır. Karmaşık klinik durumlarda öykü zaman içinde ayrıntılanabilir. İlk görüşmede güvenlik, acil gereksinimler ve temel klinik bilgiler öncelikli olabilir. Sonraki görüşmelerde gelişimsel öykü, önceki dönemler veya ilişki örüntüleri daha ayrıntılı ele alınabilir. Yeni bilgiler ortaya çıktıkça klinik formülasyon da güncellenebilir.")
    ],
    relatedTerms: [
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "Mental durum muayenesi", slug: "mental-durum-muayenesi" },
      { term: "Formülasyon", slug: "formulasyon" },
      { term: "Mahremiyet", slug: "mahremiyet" }
    ],
    seo: {
      title: "Öykü Alma Nedir? | Psikiyatri Sözlüğü",
      description: "Psikiyatrik öykü almanın kapsamını, mental durum muayenesinden farkını ve klinik değerlendirmedeki yerini açıklar.",
      ogTitle: "Öykü Alma Nedir?",
      ogDescription: "Psikiyatrik değerlendirmede öykü alma sürecini açıklar."
    },
    schema: {
      definedTermDescription: "Belirtilerin başlangıcı, seyri ve kişinin sağlık ve yaşam öyküsü hakkında sistematik klinik bilgi toplama süreci."
    }
  }),

  defineTerm({
    term: "Tanı ölçütleri",
    slug: "tani-olcutleri",
    shortDefinition: "Tanı ölçütleri, belirli bir ruhsal bozukluğun değerlendirilmesinde hangi belirtilerin, sürelerin ve klinik özelliklerin dikkate alınacağını standartlaştırmaya yardımcı olan tanımlayıcı ölçütlerdir.",
    intro: "DSM veya ICD gibi sınıflandırma sistemlerindeki ölçütler klinisyenler arasında ortak bir dil kurulmasını destekler. Ancak bir ölçüt listesindeki maddeleri saymak tek başına psikiyatrik tanı koymak anlamına gelmez. Belirtilerin bağlamı, işlevsellik, ayırıcı tanılar ve kişinin yaşam öyküsü birlikte değerlendirilmelidir.",
    sections: [
      section("Tanı Ölçütlerinin Amacı Nedir?", "Ölçütler araştırma ve klinik uygulamada benzer tabloların daha tutarlı biçimde tanımlanmasına yardımcı olur. Belirtilerin sayısı yanında süre, şiddet, başlangıç zamanı ve işlev kaybı gibi özellikler de tanımlanabilir. Bu yaklaşım farklı uzmanların aynı kavramları daha benzer anlamlarda kullanabilmesini sağlar."),
      section("Ölçütleri Karşılamak Kesin Tanı Demek midir?", "Hayır. Bazı belirtiler bedensel hastalıklar, ilaç veya madde etkileri, uyku sorunları ya da başka ruhsal durumlarla açıklanabilir. Ayrıca kültürel ve gelişimsel bağlam önemlidir. Klinik değerlendirme yalnız belirtilerin bulunup bulunmadığını değil, bu belirtilerin neden ortaya çıktığını ve nasıl bir örüntü oluşturduğunu araştırır."),
      section("DSM ve ICD Otomatik Tanı Sistemi midir?", "Hayır. Bu sistemler sınıflandırma ve iletişim araçlarıdır. Tanı koyan şey kitap veya kontrol listesi değil, uygun eğitim ve klinik değerlendirme sürecidir. Sınıflandırmalar zaman içinde bilimsel bilgiye göre güncellenebilir ve bazı kavramların tanımları yeni baskılarda değişebilir."),
      section("Kişinin Kendini Test Etmesi Yeterli midir?", "İnternette yer alan ölçüt listeleri kişinin yaşadıklarını anlamlandırmasına yardımcı olabilir ancak kendi kendine kesin tanı koymak için yeterli değildir. Belirtilerin başka nedenlerle açıklanıp açıklanmadığı, işlevsellikteki değişim ve zaman içindeki seyir profesyonel değerlendirmede birlikte incelenir.")
    ],
    relatedTerms: [
      { term: "DSM", slug: "dsm" },
      { term: "ICD", slug: "icd" },
      { term: "Ayırıcı tanı", slug: "ayirici-tani" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" }
    ],
    seo: {
      title: "Tanı Ölçütleri Nedir? | Psikiyatri Sözlüğü",
      description: "Psikiyatride tanı ölçütlerinin amacını ve neden bir belirti listesinin tek başına tanı koymak için yeterli olmadığını açıklar.",
      ogTitle: "Tanı Ölçütleri Nedir?",
      ogDescription: "DSM ve ICD ölçütlerinin klinik değerlendirmedeki sınırlarını açıklar."
    },
    schema: {
      definedTermDescription: "Ruhsal bozuklukların belirtilerini, sürelerini ve klinik özelliklerini standart biçimde tanımlamaya yardımcı olan ölçütler."
    }
  }),

  defineTerm({
    term: "Ölçek",
    slug: "olcek",
    shortDefinition: "Ölçek, belirti, işlev, davranış veya başka bir klinik özelliği yapılandırılmış sorular ve puanlama yöntemiyle ölçmeye yardımcı olan değerlendirme aracıdır.",
    intro: "Psikiyatride ölçekler belirtilerin şiddetini değerlendirmek, zaman içindeki değişimi izlemek veya belirli bir alanda tarama yapmak amacıyla kullanılabilir. Ölçeğin kimin tarafından doldurulduğu, hangi toplumda doğrulandığı ve hangi amaçla geliştirildiği sonucu yorumlarken önem taşır. Tek bir puan klinik değerlendirmenin yerine geçmez.",
    sections: [
      section("Psikiyatrik Ölçekler Ne Ölçebilir?", "Depresif belirtiler, anksiyete, dikkat sorunları, uyku, yaşam kalitesi veya işlevsellik gibi çok farklı alanlar değerlendirilebilir. Bazı ölçekler kişinin kendisi tarafından doldurulur, bazıları klinisyen tarafından puanlanır, bazıları ise ebeveyn veya öğretmen gibi başka kişilerden bilgi toplar."),
      section("Yüksek Puan Tanı Anlamına Gelir mi?", "Genellikle hayır. Puanın anlamı kullanılan ölçeğin yapısına ve amacına bağlıdır. Bir tarama ölçeğinde eşik üzerinde sonuç ayrıntılı değerlendirme gereksinimini gösterebilir ancak tanıyı kanıtlamaz. Klinik ölçekte yüksek puan ise belirtilerin daha yoğun olduğunu düşündürebilir fakat bağlam yine önemlidir."),
      section("Geçerlik ve Güvenirlik Neden Önemlidir?", "Bir ölçme aracının hedeflediği özelliği gerçekten ölçebilmesi ve benzer koşullarda tutarlı sonuçlar verebilmesi gerekir. Ayrıca farklı dil ve kültürlere uyarlanan ölçeklerin yalnız çevrilmesi yeterli değildir; psikometrik özelliklerinin ilgili toplumda değerlendirilmesi gerekir."),
      section("Ölçekler İzlemde Nasıl Kullanılır?", "Aynı aracın uygun aralıklarla tekrar uygulanması belirtilerin zaman içindeki değişimi hakkında ek bilgi sağlayabilir. Ancak puandaki değişiklik kişinin yaşamındaki değişiklikler, klinik görüşme ve işlevsellikle birlikte yorumlanmalıdır. Ölçüm sonucu tek başına ilaç başlama, bırakma veya doz değiştirme kararı verdirmez.")
    ],
    relatedTerms: [
      { term: "Tarama testi", slug: "tarama-testi" },
      { term: "Şiddet derecesi", slug: "siddet-derecesi" },
      { term: "İzlem", slug: "izlem" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" }
    ],
    seo: {
      title: "Psikiyatrik Ölçek Nedir? | Psikiyatri Sözlüğü",
      description: "Psikiyatrik ölçeklerin neyi ölçtüğünü, puanların nasıl yorumlandığını ve klinik değerlendirmenin neden yerine geçmediğini açıklar.",
      ogTitle: "Ölçek Nedir?",
      ogDescription: "Psikiyatride ölçek kullanımının amaçlarını ve sınırlarını açıklar."
    },
    schema: {
      definedTermDescription: "Belirti veya işlev gibi klinik özellikleri yapılandırılmış sorular ve puanlama ile değerlendiren araç."
    }
  }),

  defineTerm({
    term: "Tarama testi",
    slug: "tarama-testi",
    shortDefinition: "Tarama testi, belirli bir ruhsal durum veya belirti kümesi açısından daha ayrıntılı değerlendirme gereksinimi olabilecek kişileri belirlemeye yardımcı olan değerlendirme aracıdır.",
    intro: "Tarama araçları özellikle geniş gruplarda veya ilk değerlendirme sırasında olası sorunları fark etmeye yardımcı olabilir. Temel işlevleri tanı koymak değil, belirli bir durumun olasılığı konusunda dikkat çekmektir. Pozitif sonuç kesin hastalık, negatif sonuç ise her koşulda kesin dışlama anlamına gelmez.",
    sections: [
      section("Tarama Testi ile Tanı Testi Aynı mıdır?", "Hayır. Tarama aracı olası vakaları yakalamaya çalışır ve genellikle duyarlılık ile özgüllük arasında belirli bir denge kurar. Klinik tanı ise öykü, mental durum muayenesi, işlevsellik, ayırıcı tanılar ve gerektiğinde başka değerlendirmelerin birlikte yorumlanmasını gerektirir."),
      section("Pozitif Sonuç Ne Anlama Gelir?", "Eşik üzerinde puan kişinin ilgili belirtileri belirli düzeyde bildirdiğini gösterebilir. Bu sonuç daha ayrıntılı klinik değerlendirme yapılmasının yararlı olabileceğine işaret eder. Belirtilerin başka bir ruhsal veya bedensel durumla açıklanıp açıklanmadığı ayrıca incelenmelidir."),
      section("Negatif Sonuç Her Şeyi Dışlar mı?", "Hayır. Hiçbir tarama aracı kusursuz değildir. Belirtilerin yeni başlaması, kişinin soruları farklı yorumlaması, ölçeğin hedeflediği gruptan farklı bir popülasyonda kullanılması veya aracın duyarlılık özellikleri sonucu etkileyebilir. Klinik şüphe varsa düşük puan tek başına değerlendirmeyi sonlandırmaz."),
      section("İnternetteki Testler Nasıl Yorumlanmalı?", "Geçerli bir ölçeğin çevrim içi uygulanması bile profesyonel değerlendirmeyle aynı şey değildir. Kaynağı belirsiz testlerin bilimsel geçerliliği ayrıca sorun olabilir. Sonuçlar kişinin kendisini anlaması için başlangıç noktası olabilir ancak kişisel ilaç veya tedavi kararları yalnız bu puanlara dayanarak verilmemelidir.")
    ],
    relatedTerms: [
      { term: "Ölçek", slug: "olcek" },
      { term: "Tanı ölçütleri", slug: "tani-olcutleri" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "Ayırıcı tanı", slug: "ayirici-tani" }
    ],
    seo: {
      title: "Tarama Testi Nedir? | Psikiyatri Sözlüğü",
      description: "Tarama testlerinin tanı koymadığını, pozitif ve negatif sonuçların nasıl yorumlanması gerektiğini açıklar.",
      ogTitle: "Tarama Testi Nedir?",
      ogDescription: "Ruh sağlığında tarama testlerinin amaçlarını ve sınırlarını açıklar."
    },
    schema: {
      definedTermDescription: "Daha ayrıntılı değerlendirme gereksinimi olabilecek kişileri belirlemeye yardımcı olan tarama aracı."
    }
  }),

  defineTerm({
    term: "Y-BOCS",
    slug: "y-bocs",
    shortDefinition: "Y-BOCS, obsesif kompulsif belirtilerin şiddetini ve günlük yaşam üzerindeki etkisini yapılandırılmış biçimde değerlendirmeye yardımcı olan klinik ölçektir.",
    intro: "Yale-Brown Obsessive Compulsive Scale adıyla bilinen Y-BOCS özellikle obsesyon ve kompulsiyonların zaman kullanımı, yarattığı sıkıntı, oluşturduğu engellenme ve kontrol güçlüğü gibi boyutlarını değerlendirmek için kullanılır. Ölçek obsesif kompulsif bozukluk tanısını tek başına koymaz; klinik görüşmeye ek bilgi sağlar.",
    sections: [
      section("Y-BOCS Neyi Değerlendirir?", "Ölçek obsesyon ve kompulsiyonların ne kadar zaman aldığı, kişinin günlük yaşamına ne ölçüde müdahale ettiği, ne kadar sıkıntı oluşturduğu, belirtilere karşı ne kadar direnç gösterildiği ve kişinin bunlar üzerindeki kontrol hissi gibi boyutları değerlendirir. Belirtinin içeriğinden çok şiddeti ön plandadır."),
      section("Yüksek Puan OKB Tanısı Demek midir?", "Hayır. Yüksek puan belirgin obsesif kompulsif belirti yüküne işaret edebilir ancak tanı için belirtilerin niteliği, süresi, işlevsellik üzerindeki etkisi ve başka durumlarla açıklanıp açıklanmadığı değerlendirilmelidir. Benzer tekrarlayıcı davranışlar farklı klinik durumlarda da görülebilir."),
      section("Tedavi İzleminde Kullanılabilir mi?", "Evet. Uygun biçimde tekrarlandığında belirti şiddetindeki değişimin izlenmesine yardımcı olabilir. Ancak yalnız toplam puanın azalması veya artması üzerinden tedavi kararı verilmez. Kişinin günlük işlevi, rahatsızlık düzeyi, yan etkiler ve klinik görüşmedeki değişiklikler de birlikte değerlendirilir."),
      section("Kendi Kendine Uygulamak Yeterli midir?", "Y-BOCS'un farklı uygulama biçimleri bulunmakla birlikte ölçeğin yorumlanması klinik bağlam gerektirir. İnternetten bulunan bir puan kesin tanı veya kişisel tedavi önerisi anlamına gelmez. Obsesyon veya kompulsiyonlar günlük yaşamı belirgin etkiliyorsa ayrıntılı profesyonel değerlendirme daha anlamlıdır.")
    ],
    relatedTerms: [
      { term: "Obsesyon", slug: "obsesyon" },
      { term: "Kompulsiyon", slug: "kompulsiyon" },
      { term: "Obsesif kompulsif bozukluk", slug: "obsesif-kompulsif-bozukluk" },
      { term: "Şiddet derecesi", slug: "siddet-derecesi" }
    ],
    seo: {
      title: "Y-BOCS Nedir? | Psikiyatri Sözlüğü",
      description: "Y-BOCS ölçeğinin obsesyon ve kompulsiyon şiddetini nasıl değerlendirdiğini ve neden tek başına OKB tanısı koymadığını açıklar.",
      ogTitle: "Y-BOCS Nedir?",
      ogDescription: "Y-BOCS ölçeğinin kullanım alanlarını ve klinik sınırlarını açıklar."
    },
    schema: {
      definedTermDescription: "Obsesyon ve kompulsiyonların şiddetini yapılandırılmış biçimde değerlendirmeye yardımcı olan klinik ölçek."
    }
  }),

  defineTerm({
    term: "Şiddet derecesi",
    slug: "siddet-derecesi",
    shortDefinition: "Şiddet derecesi, bir belirti veya bozukluğun yoğunluğunu, sıklığını, oluşturduğu sıkıntıyı ve kişinin günlük işlevselliği üzerindeki etkisini tanımlamak için kullanılan klinik kavramdır.",
    intro: "Aynı tanıya sahip kişilerin yaşadığı güçlüklerin düzeyi birbirinden oldukça farklı olabilir. Bu nedenle yalnız tanının varlığı değil, belirtilerin ne kadar yoğun olduğu ve yaşamı ne ölçüde etkilediği de değerlendirilir. Hafif, orta veya ağır gibi sınıflamalar kullanılan ölçütlere göre değişebilir.",
    sections: [
      section("Belirti Sayısı ile Aynı Şey midir?", "Hayır. Çok sayıda belirti her zaman daha ağır tablo anlamına gelmeyebilir. Bir veya birkaç belirti bile kişinin güvenliğini, çalışma yaşamını veya temel günlük işlevlerini ciddi biçimde etkileyebilir. Şiddet değerlendirmesi belirtilerin niteliğini, yoğunluğunu, süresini ve sonuçlarını birlikte ele alır."),
      section("İşlevsellik Neden Önemlidir?", "Kişinin öz bakımını, eğitimini, işini, ilişkilerini ve günlük sorumluluklarını ne ölçüde sürdürebildiği klinik şiddetin anlaşılmasına katkı sağlar. Bununla birlikte dışarıdan işlevsel görünmek kişinin hiç sıkıntı yaşamadığı anlamına gelmez; kişinin öznel yaşantısı da değerlendirilmelidir."),
      section("Ölçeklerle Belirlenebilir mi?", "Bazı ölçekler belirti şiddetini sayısal olarak değerlendirmeye yardımcı olur. Bu puanlar izlemde yararlı olabilir ancak kullanılan ölçeğin neyi ölçtüğü ve eşiklerin hangi gruplarda doğrulandığı bilinmelidir. Klinik şiddet yalnız bir sayıdan ibaret değildir."),
      section("Şiddet Zaman İçinde Değişebilir mi?", "Evet. Ruhsal belirtiler yaşam olayları, tedavi, uyku, bedensel sağlık ve başka birçok etkenle zaman içinde artabilir veya azalabilir. Bu nedenle tek bir görüşmede belirlenen şiddet derecesi değişmez bir özellik değildir. İzlem sırasında belirtiler ve işlevsellik yeniden değerlendirilir.")
    ],
    relatedTerms: [
      { term: "İşlevsellik", slug: "islevsellik" },
      { term: "Ölçek", slug: "olcek" },
      { term: "İzlem", slug: "izlem" },
      { term: "Tedavi yanıtı", slug: "tedavi-yaniti" }
    ],
    seo: {
      title: "Şiddet Derecesi Nedir? | Psikiyatri Sözlüğü",
      description: "Psikiyatride belirti şiddetinin yalnız belirti sayısıyla değil yoğunluk, sıkıntı ve işlevsellikle birlikte nasıl değerlendirildiğini açıklar.",
      ogTitle: "Şiddet Derecesi Nedir?",
      ogDescription: "Ruhsal belirtilerde şiddet değerlendirmesinin temel bileşenlerini açıklar."
    },
    schema: {
      definedTermDescription: "Belirti yoğunluğu, sıklığı, yarattığı sıkıntı ve işlev kaybını birlikte ifade eden klinik değerlendirme kavramı."
    }
  }),

  defineTerm({
    term: "Tedavi yanıtı",
    slug: "tedavi-yaniti",
    shortDefinition: "Tedavi yanıtı, uygulanan tedavi sürecinde hedeflenen belirtilerde, işlevsellikte veya kişinin genel klinik durumunda anlamlı iyileşme görülmesini ifade eden klinik kavramdır.",
    intro: "Psikiyatride tedavi başarısı yalnız kişinin kendisini biraz daha iyi hissetmesi veya bir ölçek puanının azalmasıyla değerlendirilmez. Başlangıçtaki hedefler, belirtilerin değişimi, günlük işlevler, yan etkiler ve kişinin tedaviye ilişkin deneyimi birlikte ele alınır. Yanıt ile tam iyileşme aynı kavram değildir.",
    sections: [
      section("Tedavi Yanıtı Nasıl Değerlendirilir?", "Klinik görüşme, kişinin öznel değerlendirmesi, yakınlarından alınan bilgiler ve gerektiğinde standart ölçekler birlikte kullanılabilir. Hangi belirtilerin başlangıçta hedeflendiği önemlidir. Örneğin uyku düzelirken kaygı veya işlev kaybı devam ediyorsa genel tedavi sonucu bütüncül biçimde değerlendirilmelidir."),
      section("Yanıt ile Remisyon Aynı mıdır?", "Hayır. Tedavi yanıtı genellikle belirtilerde belirgin bir azalma olduğunu ifade ederken remisyon belirtilerin çok düşük düzeye inmesi veya tanımlanmış bir klinik eşik altına düşmesi anlamında kullanılabilir. Kullanılan tanımlar hastalığa ve araştırma yöntemine göre değişebilir."),
      section("Yanıt Ne Kadar Sürede Ortaya Çıkar?", "Bu süre kullanılan tedaviye, hedeflenen belirtiye ve kişinin klinik özelliklerine göre değişir. Bazı belirtiler erken değişirken diğer alanlarda iyileşme daha uzun sürebilir. Bu nedenle kişinin kendi kendine kısa sürede sonuç alamadığı düşüncesiyle ilaç veya tedaviyi değiştirmesi uygun değildir."),
      section("Yanıt Yoksa Ne Anlama Gelir?", "Beklenen iyileşmenin görülmemesi tanının, tedavi uyumunun, doz ve sürenin, eşlik eden hastalıkların, madde kullanımının veya psikososyal etkenlerin yeniden değerlendirilmesini gerektirebilir. Tek bir başarısız deneme kişinin hiçbir tedaviden yarar görmeyeceği anlamına gelmez.")
    ],
    relatedTerms: [
      { term: "Remisyon", slug: "remisyon" },
      { term: "Relaps", slug: "relaps" },
      { term: "İzlem", slug: "izlem" },
      { term: "Tedaviye direnç", slug: "tedaviye-direnc" }
    ],
    seo: {
      title: "Tedavi Yanıtı Nedir? | Psikiyatri Sözlüğü",
      description: "Psikiyatride tedavi yanıtının belirtiler, işlevsellik ve klinik hedeflerle nasıl değerlendirildiğini ve remisyondan farkını açıklar.",
      ogTitle: "Tedavi Yanıtı Nedir?",
      ogDescription: "Tedavi yanıtı ve remisyon arasındaki farkı açıklar."
    },
    schema: {
      definedTermDescription: "Tedavi sürecinde hedef belirtiler veya işlevsellikte anlamlı klinik iyileşme görülmesi."
    }
  }),

  defineTerm({
    term: "Trisiklik antidepresan",
    slug: "trisiklik-antidepresan",
    shortDefinition: "Trisiklik antidepresanlar, başta serotonin ve noradrenalin sistemleri olmak üzere birden fazla nörotransmitter ve reseptör sistemini etkileyebilen eski kuşak reçeteli antidepresan ilaç grubudur.",
    intro: "Trisiklik antidepresanlar depresyon ve bazı başka klinik durumlarda uzun yıllardır kullanılmaktadır. Günümüzde birçok durumda daha iyi tolere edilen seçenekler bulunduğu için her zaman ilk tercih olmayabilirler. Etkileşim, yan etki ve yüksek dozda toksisite özellikleri nedeniyle tedavinin hekim tarafından planlanması özellikle önemlidir.",
    sections: [
      section("Trisiklik Antidepresanlar Nasıl Etki Gösterir?", "Serotonin ve noradrenalinin sinir hücreleri tarafından geri alımını azaltmanın yanında farklı reseptör sistemlerini de etkileyebilirler. Bu geniş farmakolojik etki hem klinik yararlara hem de ağız kuruluğu, kabızlık, uyku hali, tansiyon değişikliği gibi çeşitli yan etkilere katkıda bulunabilir."),
      section("Neden Günümüzde Daha Seçici Kullanılır?", "Bazı yeni antidepresan grupları birçok kişide daha kolay tolere edilebilir ve yüksek doz güvenliği açısından avantajlı olabilir. Bununla birlikte trisiklikler belirli depresif tablolar, bazı ağrı durumları veya başka özel klinik gereksinimlerde hâlâ değerlendirilebilir. Seçim kişisel risk ve yarar değerlendirmesine dayanır."),
      section("Kalp ve Diğer Hastalıklar Neden Önemlidir?", "Bu ilaçlar kalp iletim sistemi, tansiyon ve başka bedensel işlevler üzerinde etkiler oluşturabileceğinden eşlik eden hastalıklar ve kullanılan diğer ilaçlar dikkate alınır. Bazı kişilerde tedavi öncesi veya sırasında ek tıbbi değerlendirme gerekebilir. Gereksinim kullanılan ilaç ve kişinin özelliklerine göre değişir."),
      section("Kendi Kendine Doz Değiştirilebilir mi?", "Hayır. Trisiklik antidepresanlarda doz değişikliği, başka ilaçlarla birlikte kullanım ve tedavinin bırakılması klinik olarak planlanmalıdır. Fazla miktarda alınmaları ciddi zehirlenmeye yol açabileceğinden reçete ve saklama güvenliği önemlidir. Kişisel doz veya ilaç değişikliği önerisi yalnız reçeteleyen hekim tarafından yapılmalıdır.")
    ],
    relatedTerms: [
      { term: "Antidepresan", slug: "antidepresan" },
      { term: "SSRI", slug: "ssri" },
      { term: "SNRI", slug: "snri" },
      { term: "Yan etki", slug: "yan-etki" }
    ],
    seo: {
      title: "Trisiklik Antidepresan Nedir? | Psikiyatri Sözlüğü",
      description: "Trisiklik antidepresanların genel etki mekanizmasını, kullanım alanlarını, yan etkilerini ve güvenlik özelliklerini açıklar.",
      ogTitle: "Trisiklik Antidepresan Nedir?",
      ogDescription: "Trisiklik antidepresanları güvenli ilaç bilgisi çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Serotonin ve noradrenalin başta olmak üzere birden fazla sinir sistemi hedefini etkileyen reçeteli antidepresan grubu."
    }
  }),

  defineTerm({
    term: "Valproat",
    slug: "valproat",
    shortDefinition: "Valproat, epilepsi tedavisinin yanı sıra psikiyatride özellikle bazı bipolar bozukluk tablolarında duygudurum düzenleyici olarak kullanılabilen reçeteli ilaçtır.",
    intro: "Valproatın kullanım kararı tanı, belirtilerin niteliği, eşlik eden hastalıklar, diğer ilaçlar ve kişisel riskler dikkate alınarak verilir. Gebelikte doğumsal anomali ve nörogelişimsel risklerle güçlü ilişkisi nedeniyle doğurganlık potansiyeli bulunan kişilerde özel güvenlik değerlendirmeleri gerektirir. Kişisel ilaç kararı hekimle planlanmalıdır.",
    sections: [
      section("Psikiyatride Hangi Amaçla Kullanılabilir?", "Valproat özellikle mani ve bazı bipolar bozukluk tablolarında değerlendirilebilen duygudurum düzenleyici seçeneklerden biridir. Her bipolar bozukluğu olan kişide gerekli veya uygun değildir. Akut dönem ve uzun dönem tedavi hedefleri farklı olabilir ve seçim önceki yanıt, eşlik eden durumlar ve risklerle birlikte yapılır."),
      section("İzlem Neden Gereklidir?", "Karaciğer işlevleri, kan hücreleri ve gerektiğinde serum ilaç düzeyi gibi laboratuvar değerlendirmeleri klinik duruma göre izlenebilir. Kilo değişimi, tremor, mide bağırsak yakınmaları ve başka yan etkiler de takip edilir. İzlem sıklığı kişinin özelliklerine ve tedavi sürecine göre değişir."),
      section("Gebelik Açısından Neden Özel Önemi Vardır?", "Valproat gebelik sırasında fetüs açısından ciddi risklerle ilişkilidir. Bu nedenle gebelik olasılığı bulunan kişilerde riskler, alternatifler ve etkili gebelikten korunma gereksinimleri ilgili hekimler tarafından ayrıntılı biçimde değerlendirilmelidir. İlaç kullanan kişi gebelik planladığında kendi kendine ilacı bırakmamalı, hızlı biçimde tıbbi görüş almalıdır."),
      section("Valproat Aniden Bırakılabilir mi?", "Tedavinin kendi kendine kesilmesi uygun değildir. Ani değişiklik bipolar belirtilerin yeniden ortaya çıkmasına veya epilepsi için kullanan kişilerde nöbet riskine katkıda bulunabilir. Doz azaltma, bırakma veya başka ilaca geçiş kararı kullanılan endikasyon ve kişisel klinik özelliklere göre reçeteleyen hekim tarafından planlanır.")
    ],
    relatedTerms: [
      { term: "Duygudurum düzenleyici", slug: "duygudurum-duzenleyici" },
      { term: "Mani", slug: "mani" },
      { term: "Bipolar I bozukluk", slug: "bipolar-1-bozukluk" },
      { term: "İzlem", slug: "izlem" }
    ],
    seo: {
      title: "Valproat Nedir? | Psikiyatri Sözlüğü",
      description: "Valproatın psikiyatrideki kullanımını, klinik izlemini ve gebelik açısından taşıdığı önemli güvenlik konularını açıklar.",
      ogTitle: "Valproat Nedir?",
      ogDescription: "Valproatı duygudurum düzenleyici kullanım ve güvenlik çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Psikiyatride bazı bipolar bozukluk tablolarında duygudurum düzenleyici olarak kullanılabilen reçeteli ilaç."
    }
  }),

  defineTerm({
    term: "Tipik antipsikotik",
    slug: "tipik-antipsikotik",
    shortDefinition: "Tipik antipsikotikler, dopamin D2 reseptörleri üzerindeki etkileri belirgin olan ve özellikle psikotik belirtilerin tedavisinde kullanılan birinci kuşak reçeteli antipsikotik ilaç grubudur.",
    intro: "Birinci kuşak veya klasik antipsikotikler uzun yıllardır psikiyatride kullanılmaktadır. Aynı gruptaki ilaçların etki ve yan etki özellikleri birbirinden farklı olabilir. Özellikle hareket sistemiyle ilişkili yan etkiler klinik izlemin önemli parçalarındandır. İlaç seçimi kişinin klinik gereksinimine göre yapılır.",
    sections: [
      section("Tipik Antipsikotikler Nasıl Etki Gösterir?", "Temel farmakolojik özelliklerinden biri dopamin D2 reseptörlerini bloke etmeleridir. Bu etki sanrı ve varsanı gibi bazı psikotik belirtilerin azalmasına katkı sağlayabilir. Bununla birlikte klinik etkinlik ve yan etkiler yalnız tek bir nörotransmitter üzerinden açıklanamaz ve kullanılan ilaca göre farklılık gösterebilir."),
      section("Atipik Antipsikotiklerden Farkı Nedir?", "Birinci ve ikinci kuşak ayrımı genel farmakolojik ve yan etki örüntülerini tanımlamak için kullanılır. Tipik antipsikotiklerde ekstrapiramidal hareket yan etkileri bazı ilaçlarda daha belirgin olabilirken ikinci kuşakta metabolik yan etkiler bazı ajanlarda daha fazla öne çıkabilir. Ancak grup içindeki farklılıklar büyüktür."),
      section("Hangi Yan Etkiler İzlenir?", "Akatizi, parkinsonizm, distoni ve uzun süreli kullanımda tardiv diskinezi gibi hareket bozuklukları değerlendirilebilir. Prolaktin değişiklikleri, sedasyon, tansiyon etkileri ve kullanılan ilaca özgü başka sorunlar da ortaya çıkabilir. Yeni gelişen istemsiz hareketler klinik değerlendirme gerektirir."),
      section("İlaç Değişikliği Nasıl Yapılır?", "Antipsikotik başlama, bırakma veya başka bir ilaca geçme kararı kişisel olarak yapılmamalıdır. Ani değişiklik bazı kişilerde belirtilerin yeniden alevlenmesine veya kesilme ile ilişkili sorunlara katkıda bulunabilir. Tedavi planı etkinlik, yan etkiler, önceki deneyimler ve kişinin tercihleriyle birlikte hekim tarafından değerlendirilir.")
    ],
    relatedTerms: [
      { term: "Antipsikotik", slug: "antipsikotik" },
      { term: "Atipik antipsikotik", slug: "atipik-antipsikotik" },
      { term: "Akatizi", slug: "akatizi" },
      { term: "Dopamin", slug: "dopamin" }
    ],
    seo: {
      title: "Tipik Antipsikotik Nedir? | Psikiyatri Sözlüğü",
      description: "Tipik antipsikotiklerin genel etki mekanizmasını, atipik antipsikotiklerden farkını ve hareket yan etkilerini açıklar.",
      ogTitle: "Tipik Antipsikotik Nedir?",
      ogDescription: "Birinci kuşak antipsikotikleri güvenli ilaç bilgisi çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Dopamin D2 reseptör etkisi belirgin olan birinci kuşak reçeteli antipsikotik ilaç grubu."
    }
  }),

  defineTerm({
    term: "Stimülan",
    slug: "stimulan",
    shortDefinition: "Stimülan, merkezi sinir sistemi etkinliğini artıran ve psikiyatride özellikle DEHB tedavisinde belirli ilaçların dahil olduğu reçeteli ilaç grubunu tanımlayan genel terimdir.",
    intro: "Stimülan ilaçlar dikkat, dürtü kontrolü ve görev sürdürme gibi alanlarda klinik yarar sağlayabilir ancak herkes için uygun değildir. Kullanılan ilaç, yaş, eşlik eden hastalıklar, kalp damar riskleri, madde kullanım öyküsü ve diğer ilaçlar değerlendirilerek karar verilir. Tedavi tıbbi izlem gerektirir.",
    sections: [
      section("Stimülanlar DEHB'de Nasıl Kullanılır?", "DEHB tedavisinde kullanılan bazı stimülanlar dopamin ve noradrenalin sinyallemesini etkileyerek dikkat ve davranış düzenleme süreçlerine katkıda bulunabilir. Tedavi yanıtı yalnız kişinin daha uzun süre oturabilmesiyle değerlendirilmez; dikkat, dürtüsellik, okul veya iş performansı ve günlük işlevler birlikte ele alınır."),
      section("Yan Etkileri Neler Olabilir?", "İştah azalması, uykuya dalmada güçlük, baş ağrısı, mide yakınmaları, kalp hızı veya tansiyonda değişiklik gibi etkiler görülebilir. Yan etki örüntüsü ilaca ve kişiye göre değişir. Çocuk ve ergenlerde büyüme ve kilo seyri de klinik izlem kapsamında değerlendirilebilir."),
      section("Bağımlılık Riski Var mıdır?", "Bazı stimülanlar kötüye kullanım potansiyeli taşıdığı için kontrollü reçeteleme ve uygun izlem gerektirir. Tıbbi amaçla reçete edilen ilacın hekim önerisine uygun kullanımı ile tıbbi olmayan kullanım aynı durum değildir. İlacın başkasıyla paylaşılması veya reçete dışı kullanılması güvenli değildir."),
      section("Kendi Kendine Kullanılabilir mi?", "Hayır. Konsantrasyonu artırmak, sınava hazırlanmak veya daha uzun süre çalışmak amacıyla reçetesiz stimülan kullanımı tıbbi risk taşır. Kalp damar etkileri, uyku bozulması, kaygı ve kötüye kullanım gibi sorunlar ortaya çıkabilir. Kişisel ilaç seçimi ve doz düzenlemesi yalnız hekim değerlendirmesiyle yapılmalıdır.")
    ],
    relatedTerms: [
      { term: "DEHB", slug: "dehb" },
      { term: "Atomoksetin", slug: "atomoksetin" },
      { term: "Dopamin", slug: "dopamin" },
      { term: "Noradrenalin", slug: "noradrenalin" }
    ],
    seo: {
      title: "Stimülan Nedir? | Psikiyatri Sözlüğü",
      description: "Stimülan ilaçların DEHB tedavisindeki yerini, yan etkilerini ve neden tıbbi izlem gerektirdiğini açıklar.",
      ogTitle: "Stimülan Nedir?",
      ogDescription: "Stimülan ilaçları kullanım ve güvenlik çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Merkezi sinir sistemi etkinliğini artıran ve bazıları DEHB tedavisinde kullanılan reçeteli ilaç grubu."
    }
  }),

  defineTerm({
    term: "Yan etki",
    slug: "yan-etki",
    shortDefinition: "Yan etki, bir ilaç veya başka bir tıbbi müdahale kullanılırken hedeflenen temel etkinin dışında ortaya çıkabilen istenmeyen veya beklenmeyen etkidir.",
    intro: "Her yan etki aynı derecede önemli değildir. Bazıları hafif ve geçici olabilirken bazıları tedavi planının yeniden değerlendirilmesini gerektirebilir. Bir belirtinin ilaç kullanımı sırasında ortaya çıkması onun mutlaka ilaçtan kaynaklandığını kanıtlamaz; zamanlama, doz, diğer ilaçlar ve bedensel durum birlikte değerlendirilir.",
    sections: [
      section("Yan Etki Nasıl Değerlendirilir?", "Belirtinin ne zaman başladığı, ilaç başlama veya doz değişikliğiyle ilişkisi, şiddeti, sürekliliği ve başka olası nedenler incelenir. Aynı ilacı kullanan herkes aynı yan etkileri yaşamaz. Kişinin yaşı, metabolizması, eşlik eden hastalıkları ve diğer ilaçları risk profilini değiştirebilir."),
      section("Sık Görülen Etki Tehlikeli Demek midir?", "Hayır. Bir yan etkinin sık görülmesi onun mutlaka ciddi olduğu anlamına gelmez. Benzer biçimde nadir görülen bazı yan etkiler klinik açıdan çok önemli olabilir. İlaç bilgilerinde sıklık ile ciddiyet birbirinden ayrı kavramlardır ve ikisinin birlikte değerlendirilmesi gerekir."),
      section("Yan Etki Olunca İlaç Bırakılmalı mıdır?", "Her durumda hayır. Bazı yan etkiler zamanla azalabilir, bazıları başka bir düzenleme gerektirebilir ve bazı ciddi belirtilerde hızlı tıbbi değerlendirme gerekebilir. Kendi kendine doz azaltmak veya ilacı aniden kesmek özellikle bazı psikiyatrik ilaçlarda kesilme belirtileri veya hastalığın alevlenmesine yol açabilir."),
      section("Yan Etki ile Hastalık Belirtisi Karışabilir mi?", "Evet. Uyku bozukluğu, huzursuzluk, yorgunluk veya dikkat güçlüğü hem hastalığın kendisine hem tedaviye hem de başka tıbbi nedenlere bağlı olabilir. Bu nedenle yeni bir belirtinin kaynağı yalnız zamanlamaya bakılarak kesinleştirilmez; klinik değerlendirme ve gerektiğinde ek incelemeler yapılır.")
    ],
    relatedTerms: [
      { term: "Farmakodinamik", slug: "farmakodinamik" },
      { term: "Farmakokinetik", slug: "farmakokinetik" },
      { term: "Etkileşim", slug: "etkilesim" },
      { term: "İzlem", slug: "izlem" }
    ],
    seo: {
      title: "Yan Etki Nedir? | Psikiyatri Sözlüğü",
      description: "İlaç yan etkilerinin nasıl değerlendirildiğini, sıklık ile ciddiyet arasındaki farkı ve neden kendi kendine ilaç kesilmemesi gerektiğini açıklar.",
      ogTitle: "Yan Etki Nedir?",
      ogDescription: "İlaç yan etkilerini güvenli ve klinik bağlamda açıklar."
    },
    schema: {
      definedTermDescription: "Bir tıbbi tedavinin hedeflenen temel etkisi dışında ortaya çıkabilen istenmeyen veya beklenmeyen etki."
    }
  }),

  defineTerm({
    term: "Tolerans",
    slug: "tolerans",
    shortDefinition: "Tolerans, bir madde veya ilacın aynı miktarının zaman içinde daha az etki oluşturması ya da aynı etki için daha yüksek miktar gereksinimi gelişmesi durumudur.",
    intro: "Tolerans özellikle bağımlılık ve ilaç kullanımı bağlamında kullanılan farmakolojik bir kavramdır ancak tek başına madde kullanım bozukluğu tanısı anlamına gelmez. Bazı tedavilerde belirli etkilere tolerans gelişebilirken başka etkiler devam edebilir. Klinik anlamı kullanılan maddeye ve kullanım biçimine göre değişir.",
    sections: [
      section("Tolerans Nasıl Gelişebilir?", "Sinir sistemi ve diğer organ sistemleri tekrarlayan madde etkisine uyum sağlayabilir. Reseptör düzeyindeki değişiklikler, metabolik süreçler ve öğrenilmiş davranışsal uyumlar farklı tolerans biçimlerine katkıda bulunabilir. Her maddede aynı hızda veya aynı mekanizmayla tolerans gelişmez."),
      section("Tolerans Bağımlılık Demek midir?", "Hayır. Tolerans bazı maddelerin düzenli tıbbi kullanımında da gelişebilir ve tek başına bağımlılık tanısı koydurmaz. Madde kullanım bozukluğunda kontrol kaybı, zararlarına rağmen sürdürme, yoğun istek ve işlevsellikte bozulma gibi başka özellikler de birlikte değerlendirilir."),
      section("Tolerans Neden Riskli Olabilir?", "Kişinin önceki etkiyi elde etmek için miktarı kendi kendine artırması zehirlenme ve başka ciddi yan etkiler açısından risk yaratabilir. Ayrıca bazı etkiler için tolerans gelişirken toksik etkiler aynı ölçüde değişmeyebilir. Bu nedenle doz artışı güvenli bir çözüm olarak görülmemelidir."),
      section("İlaç Dozu Kendi Kendine Artırılabilir mi?", "Hayır. Reçeteli bir ilacın etkisinin azaldığı düşünülüyorsa nedenin tolerans olup olmadığı klinik olarak değerlendirilmelidir. Hastalığın değişmesi, uyku, etkileşimler veya tedavi uyumu gibi başka nedenler de rol oynayabilir. Doz değişiklikleri yalnız reçeteleyen sağlık profesyoneliyle planlanmalıdır.")
    ],
    relatedTerms: [
      { term: "Bağımlılık", slug: "bagimlilik" },
      { term: "Yoksunluk", slug: "yoksunluk" },
      { term: "Madde kullanım bozukluğu", slug: "madde-kullanim-bozuklugu" },
      { term: "Doz titrasyonu", slug: "doz-titrasyonu" }
    ],
    seo: {
      title: "Tolerans Nedir? | Psikiyatri Sözlüğü",
      description: "Toleransın aynı miktarda daha az etki oluşması anlamına geldiğini, bağımlılıktan farkını ve doz artırmanın risklerini açıklar.",
      ogTitle: "Tolerans Nedir?",
      ogDescription: "Tolerans kavramını bağımlılık ve ilaç kullanımı bağlamında açıklar."
    },
    schema: {
      definedTermDescription: "Bir madde veya ilacın aynı miktarının zaman içinde daha az etki oluşturması durumu."
    }
  }),

  defineTerm({
    term: "Yoksunluk",
    slug: "yoksunluk",
    shortDefinition: "Yoksunluk, düzenli kullanılan bir madde veya bazı ilaçların azaltılması ya da bırakılması sonrasında ortaya çıkabilen bedensel, ruhsal ve davranışsal belirtiler bütünüdür.",
    intro: "Yoksunluk belirtilerinin türü ve şiddeti kullanılan maddeye, kullanım süresine, miktara ve kişinin özelliklerine göre değişir. Yoksunluk her zaman bağımlılıkla aynı şey değildir ancak bazı maddelerde fiziksel uyumun göstergesi olabilir. Bazı yoksunluk tabloları tıbbi açıdan ciddi olabilir.",
    sections: [
      section("Yoksunluk Belirtileri Neler Olabilir?", "Kaygı, huzursuzluk, uyku bozukluğu, terleme, titreme, bulantı veya duygu durum değişiklikleri gibi belirtiler görülebilir. Ancak her madde ve ilaç için yoksunluk örüntüsü farklıdır. Belirtilerin başlama zamanı da maddenin vücutta kalma süresine göre değişebilir."),
      section("Yoksunluk ile Bağımlılık Aynı mıdır?", "Hayır. Bazı ilaçlar uzun süre düzenli kullanıldığında fiziksel uyum gelişebilir ve kesilme sonrasında belirtiler ortaya çıkabilir; bu durum tek başına madde kullanım bozukluğu anlamına gelmez. Bağımlılık değerlendirmesinde kontrol kaybı, yoğun istek ve zararlarına rağmen kullanım gibi özellikler de önemlidir."),
      section("Hangi Yoksunluklar Tıbbi Açıdan Önemlidir?", "Alkol ve bazı sedatif ilaçların ağır yoksunluk tabloları nöbet, bilinç değişikliği ve başka ciddi komplikasyonlara yol açabilir. Bu nedenle uzun süreli veya yoğun kullanım sonrasında aniden bırakma kararı kişisel olarak verilmemelidir. Risk kullanılan madde ve kişinin tıbbi durumuna göre değişir."),
      section("İlaçlar Nasıl Bırakılmalıdır?", "Kesme planı kullanılan ilaca, doza, kullanım süresine ve kişinin klinik durumuna göre değişebilir. Bazı ilaçlarda kademeli azaltma gerekebilir ancak burada tek bir genel şema yoktur. Kişisel doz azaltma veya bırakma planı reçeteleyen hekim tarafından oluşturulmalıdır.")
    ],
    relatedTerms: [
      { term: "Tolerans", slug: "tolerans" },
      { term: "Bağımlılık", slug: "bagimlilik" },
      { term: "Kesilme belirtileri", slug: "kesilme-belirtileri" },
      { term: "Madde kullanım bozukluğu", slug: "madde-kullanim-bozuklugu" }
    ],
    seo: {
      title: "Yoksunluk Nedir? | Psikiyatri Sözlüğü",
      description: "Yoksunluk belirtilerinin neden ortaya çıktığını, bağımlılıktan farkını ve bazı maddelerde neden tıbbi risk taşıdığını açıklar.",
      ogTitle: "Yoksunluk Nedir?",
      ogDescription: "Yoksunluk kavramını güvenli ilaç ve madde bilgisi çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Düzenli kullanılan madde veya bazı ilaçların azaltılması ya da bırakılması sonrasında gelişebilen belirtiler bütünü."
    }
  }),

  defineTerm({
    term: "Tedaviye direnç",
    slug: "tedaviye-direnc",
    shortDefinition: "Tedaviye direnç, uygun olduğu düşünülen tedavi girişimlerine rağmen beklenen klinik iyileşmenin yeterli düzeyde gerçekleşmemesini tanımlamak için kullanılan genel klinik kavramdır.",
    intro: "Tedaviye direnç farklı ruhsal bozukluklarda farklı ölçütlerle tanımlanabilir. Bu ifade kişinin iyileşemeyeceği anlamına gelmez. Bir durum dirençli kabul edilmeden önce tanı, tedavinin yeterli süre ve düzeyde uygulanıp uygulanmadığı, tedavi uyumu, eşlik eden hastalıklar ve psikososyal etkenler yeniden değerlendirilir.",
    sections: [
      section("Tedaviye Direnç Nasıl Tanımlanır?", "Tek bir evrensel tanım yoktur. Örneğin depresyonda belirli sayıda uygun antidepresan denemesine yeterli yanıt alınamaması araştırmalarda kullanılan ölçütlerden biri olabilir. Diğer bozukluklarda farklı kriterler kullanılır. Bu nedenle terim mutlaka ilgili klinik durum bağlamında yorumlanmalıdır."),
      section("Yanıt Alınmaması Her Zaman Gerçek Direnç midir?", "Hayır. İlacın yeterli süre kullanılmaması, düzensiz kullanım, yanlış veya eksik tanı, madde kullanımı, uyku bozukluğu, bedensel hastalıklar veya devam eden ağır yaşam stresleri beklenen iyileşmeyi engelleyebilir. Bu durumlar bazen görünürde tedavi direnci oluşturabilir."),
      section("Direnç Varsa Seçenek Kalmadığı Anlamına mı Gelir?", "Hayır. Tanının ve önceki tedavilerin yeniden değerlendirilmesi sonrasında farklı ilaç stratejileri, psikoterapi yaklaşımları veya belirli durumlarda nöromodülasyon yöntemleri gibi seçenekler gündeme gelebilir. Hangi yaklaşımın uygun olduğu tanıya, önceki yanıtlara ve kişisel risklere göre belirlenir."),
      section("Tedavi Planı Neden Bireyselleştirilir?", "Aynı tanıya sahip iki kişi önceki tedavilere farklı yanıt verebilir. Yan etkiler, eşlik eden hastalıklar, kişinin tercihleri, gebelik olasılığı, diğer ilaçlar ve erişilebilir tedavi seçenekleri kararları etkiler. Bu nedenle tedaviye direnç kişisel ilaç değişikliği veya kendi kendine kombinasyon yapma gerekçesi değildir.")
    ],
    relatedTerms: [
      { term: "Tedavi yanıtı", slug: "tedavi-yaniti" },
      { term: "Remisyon", slug: "remisyon" },
      { term: "Ayırıcı tanı", slug: "ayirici-tani" },
      { term: "İzlem", slug: "izlem" }
    ],
    seo: {
      title: "Tedaviye Direnç Nedir? | Psikiyatri Sözlüğü",
      description: "Tedaviye direncin ne anlama geldiğini, görünürde direnç nedenlerini ve neden tedavi seçeneği kalmadığı anlamına gelmediğini açıklar.",
      ogTitle: "Tedaviye Direnç Nedir?",
      ogDescription: "Psikiyatride tedaviye direnç kavramını klinik sınırlarıyla açıklar."
    },
    schema: {
      definedTermDescription: "Uygun tedavi girişimlerine rağmen beklenen klinik iyileşmenin yeterli düzeyde gerçekleşmemesi."
    }
  }),

  defineTerm({
    term: "Ödül sistemi",
    slug: "odul-sistemi",
    shortDefinition: "Ödül sistemi, beynin motivasyon, öğrenme, beklenti ve davranışların sonuçlarından değer çıkarma süreçlerine katılan birbiriyle bağlantılı sinir ağlarını tanımlayan genel nörobiyolojik kavramdır.",
    intro: "Günlük dilde ödül sistemi bazen yalnız dopamin salgılanmasıyla eş tutulur ancak bu aşırı basitleştirmedir. Dopamin önemli bir rol oynasa da motivasyon ve ödül öğrenmesi farklı beyin bölgeleri, nörotransmitterler ve çevresel deneyimlerin etkileşimiyle ortaya çıkar. Tek bir beyin bölgesi veya kimyasal tüm davranışı açıklamaz.",
    sections: [
      section("Ödül Sistemi Hangi Süreçlerde Rol Oynar?", "Bir davranışın sonucunu öğrenme, gelecekteki ödülleri tahmin etme, hedeflere yönelme ve bazı davranışları tekrar etme eğilimi bu ağlarla ilişkilidir. Ödül yalnız haz anlamına gelmez; bir sonucun ne kadar önemli olduğu ve kişinin onun için ne kadar çaba göstereceği de bu süreçlerle bağlantılıdır."),
      section("Dopamin Mutluluk Kimyasalı mıdır?", "Bu ifade bilimsel olarak fazla basittir. Dopamin ödül beklentisi, öğrenme, motivasyon ve hareket gibi birçok süreçte rol oynar. Dopamin düzeyindeki tek bir değişiklikten kişinin ne kadar mutlu olduğu veya belirli bir davranışın nedeni doğrudan çıkarılamaz."),
      section("Bağımlılıkla İlişkisi Nedir?", "Bağımlılık yapan maddeler ve bazı davranışlar ödül öğrenmesi ve motivasyon ağlarını etkileyebilir. Zaman içinde çevresel ipuçları güçlü istek ve davranış tekrarını tetikleyebilir. Ancak bağımlılık yalnız ödül sistemindeki bir bozukluk değildir; genetik, psikolojik, sosyal ve çevresel etkenler birlikte rol oynar."),
      section("Depresyonla İlişkili Olabilir mi?", "Depresyonda ödül beklentisi, motivasyon ve haz alma süreçlerinde değişiklikler araştırılmaktadır. Anhedoni bu alanlarla ilişkili klinik belirtilerden biridir. Bununla birlikte grup düzeyindeki beyin görüntüleme veya nörobiyolojik bulgular bireysel kişide tanı koymak için kullanılan kesin biyobelirteçler değildir.")
    ],
    relatedTerms: [
      { term: "Dopamin", slug: "dopamin" },
      { term: "Anhedoni", slug: "anhedoni" },
      { term: "Nörotransmitter", slug: "norotransmitter" },
      { term: "Bağımlılık", slug: "bagimlilik" }
    ],
    seo: {
      title: "Ödül Sistemi Nedir? | Psikiyatri Sözlüğü",
      description: "Beynin ödül sistemini motivasyon, öğrenme, dopamin, bağımlılık ve anhedoni bağlamında aşırı basitleştirmeden açıklar.",
      ogTitle: "Ödül Sistemi Nedir?",
      ogDescription: "Ödül sisteminin dopaminden daha geniş bir sinir ağı olduğunu açıklar."
    },
    schema: {
      definedTermDescription: "Motivasyon, ödül beklentisi ve davranış sonuçlarından öğrenmeye katılan bağlantılı beyin ağları."
    }
  }),

  defineTerm({
    term: "Özsaygı",
    slug: "ozsaygi",
    shortDefinition: "Özsaygı, kişinin kendi değerine, yeterliliğine ve kendisiyle kurduğu ilişkiye yönelik genel değerlendirme ve duygusal tutumlarını ifade eden psikolojik kavramdır.",
    intro: "Özsaygı kişinin her zaman kendinden emin olması veya kendisini başkalarından üstün görmesi anlamına gelmez. Sağlıklı özsaygı güçlü ve sınırlı yönleri birlikte kabul edebilme, başarısızlıkların kişinin tüm değerini belirlemediğini görebilme ve kendine daha dengeli yaklaşabilme ile ilişkilidir. Tek başına psikiyatrik tanı değildir.",
    sections: [
      section("Özsaygı Nasıl Şekillenir?", "Çocukluk deneyimleri, ilişkiler, sosyal çevre, başarı ve başarısızlıkların yorumlanma biçimi, kültürel beklentiler ve kişinin kendisi hakkında geliştirdiği inançlar özsaygıyı etkileyebilir. Bununla birlikte erken dönem deneyimleri kişinin yaşam boyu değişmez bir özsaygı düzeyine mahkûm etmez."),
      section("Düşük Özsaygı Bir Hastalık mıdır?", "Hayır. Düşük özsaygı tek başına psikiyatrik tanı değildir ancak depresyon, sosyal anksiyete, travmatik deneyimler veya bazı kişilik örüntüleriyle birlikte görülebilir. Klinik değerlendirmede kişinin kendisi hakkındaki olumsuz inanışlarının ne kadar katı olduğu ve günlük yaşamı nasıl etkilediği incelenir."),
      section("Özsaygı ile Özgüven Aynı mıdır?", "Kavramlar günlük dilde birbirinin yerine kullanılabilse de özgüven çoğu zaman belirli bir işi yapabilme kapasitesine duyulan güveni, özsaygı ise kişinin kendi değerine ilişkin daha genel tutumunu anlatır. Kişi bir alanda kendine çok güvenirken genel özsaygısı düşük olabilir."),
      section("Özsaygı Değişebilir mi?", "Evet. Yeni ilişkiler, öğrenme deneyimleri, psikoterapi ve kişinin kendi düşünce örüntülerini fark etmesi özsaygıda zaman içinde değişime katkıda bulunabilir. Amaç sürekli olumlu düşünmek değil, kişinin kendisini başarıları ve hatalarıyla daha gerçekçi ve esnek biçimde değerlendirebilmesidir.")
    ],
    relatedTerms: [
      { term: "Benlik", slug: "benlik" },
      { term: "Mükemmeliyetçilik", slug: "mukemmeliyetcilik" },
      { term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" },
      { term: "Stigma", slug: "stigma" }
    ],
    seo: {
      title: "Özsaygı Nedir? | Psikiyatri Sözlüğü",
      description: "Özsaygının ne anlama geldiğini, özgüvenden farkını ve düşük özsaygının neden tek başına psikiyatrik tanı olmadığını açıklar.",
      ogTitle: "Özsaygı Nedir?",
      ogDescription: "Özsaygıyı kişinin kendisiyle kurduğu genel değerlendirme ilişkisi üzerinden açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin kendi değerine ve kendisiyle kurduğu ilişkiye yönelik genel değerlendirme ve duygusal tutumu."
    }
  })
];

const sixteenthBatchNewTerms = [
  defineTerm({
    term: "Sınır",
    slug: "sinir",
    shortDefinition: "Sınır, kişinin kendi duygusal, fiziksel ve kişilerarası alanını tanımlamasına ve başkalarıyla ilişkilerinde neyi kabul edip etmeyeceğini belirlemesine yardımcı olan psikolojik kavramdır.",
    intro: "Sağlıklı sınırlar duvar örmek veya herkesten uzaklaşmak anlamına gelmez. Kişinin ihtiyaçlarını, sorumluluklarını ve kişisel alanını fark ederek ilişkiler içinde esnek ancak anlaşılır bir çerçeve kurabilmesini ifade eder. Sınırların biçimi ilişkiye, kültüre ve yaşam dönemine göre değişebilir.",
    sections: [
      section("Kişilerarası Sınırlar Nasıl Görülür?", "Kişi hangi konuları paylaşmak istediğini, ne kadar yakınlığa hazır olduğunu, hangi davranışları kabul etmediğini ve kendi sorumluluğuyla başkasının sorumluluğunu nasıl ayırdığını sınırlar aracılığıyla ifade edebilir. Bunlar sözlü biçimde belirtilebileceği gibi davranışlar ve ilişki düzeni üzerinden de ortaya çıkabilir."),
      section("Katı ve Geçirgen Sınır Ne Demektir?", "Katı sınırlar kişinin yakınlık kurmasını ve yardım kabul etmesini zorlaştırabilir. Aşırı geçirgen sınırlar ise kişinin istemediği sorumlulukları üstlenmesine veya kendi ihtiyaçlarını sürekli geri plana atmasına yol açabilir. Sağlıklı sınır çoğu zaman duruma göre esneyebilen ancak kişinin temel haklarını koruyan bir dengeyi ifade eder."),
      section("Sınır Koymak Bencillik midir?", "Hayır. Kendi zamanını, bedenini, özel bilgilerini veya duygusal kapasitesini korumak başkalarını değersizleştirmek anlamına gelmez. Bununla birlikte sınır koyma biçimi önemlidir; tehdit, cezalandırma veya kontrol yerine açık, saygılı ve mümkün olduğunca tutarlı iletişim daha işlevsel olabilir."),
      section("Klinik Değerlendirmede Neden Önemlidir?", "Kişilerarası sınırlar bağlanma deneyimleri, aile örüntüleri, travma, özsaygı ve iletişim becerileriyle ilişkili olabilir. Tek bir sınır davranışından kişilik tanısı çıkarılmaz. Klinik değerlendirme kişinin farklı ilişkilerdeki örüntülerini, yaşadığı sıkıntıyı ve işlevsellik üzerindeki etkileri birlikte ele alır.")
    ],
    relatedTerms: [
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Sosyal iletişim", slug: "sosyal-iletisim" },
      { term: "Aile terapisi", slug: "aile-terapisi" },
      { term: "Çift terapisi", slug: "cift-terapisi" }
    ],
    seo: {
      title: "Sınır Nedir? | Psikiyatri Sözlüğü",
      description: "Psikolojide sınır kavramını kişilerarası alan, yakınlık, sorumluluk ve sağlıklı ilişki örüntüleri üzerinden açıklar.",
      ogTitle: "Sınır Nedir?",
      ogDescription: "Kişilerarası sınırların anlamını ve sağlıklı sınır koymayı açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin duygusal, fiziksel ve kişilerarası alanını ve ilişkilerde kabul edilebilir davranışları tanımlamasına yardımcı olan kavram."
    }
  }),

  defineTerm({
    term: "Şema",
    slug: "sema",
    shortDefinition: "Şema, kişinin kendisi, diğer insanlar ve dünya hakkında geliştirdiği, yeni deneyimleri yorumlama biçimini etkileyebilen köklü bilişsel ve duygusal örüntüdür.",
    intro: "Şemalar yaşam boyunca edinilen deneyimlerden etkilenebilir ve bilgiyi hızlı biçimde anlamlandırmaya yardımcı olabilir. Her şema sorunlu değildir. Klinik açıdan önem, katı ve tekrar eden şemaların kişinin ilişkilerini, duygularını veya davranışlarını belirgin biçimde zorlaştırdığı durumlarda artar.",
    sections: [
      section("Şemalar Nasıl Oluşabilir?", "Erken ilişkiler, aile ortamı, sosyal deneyimler, kültür ve kişinin mizacı şemaların gelişimine katkıda bulunabilir. Örneğin kişi tekrar tekrar eleştirildiği ortamlarda kendisini yetersiz görmeye daha yatkın bir örüntü geliştirebilir. Ancak erken yaşantılar kişinin geleceğini tek başına ve değişmez biçimde belirlemez."),
      section("Şema ile Otomatik Düşünce Aynı mıdır?", "Hayır. Otomatik düşünceler belirli bir durumda hızla ortaya çıkan daha yüzeysel bilişlerdir. Şemalar ise bu düşünceleri etkileyebilen daha genel ve köklü anlamlandırma örüntüleridir. Aynı şema farklı durumlarda farklı otomatik düşüncelerin ortaya çıkmasına katkıda bulunabilir."),
      section("Şema Her Zaman Doğru mudur?", "Şemalar kişiye son derece gerçekçi gelebilir ancak geçmiş deneyimlerden türeyen seçici yorumları sürdürebilir. Kişi şemayla uyumlu bilgileri daha kolay fark edip aksi örnekleri gözden kaçırabilir. Bu nedenle klinik çalışmada şemanın ne kadar esnek olduğu ve mevcut kanıtlarla ne ölçüde uyuştuğu incelenebilir."),
      section("Şemalar Değişebilir mi?", "Evet. Yeni ilişkiler, farklı yaşam deneyimleri, farkındalık ve psikoterapi süreçleri şemaların daha esnek hale gelmesine katkıda bulunabilir. Amaç geçmiş deneyimleri yok saymak değil, kişinin eski örüntülerin bugünkü yaşamını otomatik biçimde yönetip yönetmediğini fark edebilmesidir.")
    ],
    relatedTerms: [
      { term: "Şema terapi", slug: "sema-terapi" },
      { term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" },
      { term: "Bilişsel çarpıtma", slug: "bilissel-carpitma" },
      { term: "Benlik", slug: "benlik" }
    ],
    seo: {
      title: "Şema Nedir? | Psikiyatri Sözlüğü",
      description: "Şema kavramını kişinin kendisi ve dünya hakkındaki köklü bilişsel-duygusal örüntüler ve otomatik düşüncelerle ilişkisi üzerinden açıklar.",
      ogTitle: "Şema Nedir?",
      ogDescription: "Psikolojide şemaların nasıl geliştiğini ve değişebildiğini açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin kendisi, başkaları ve dünya hakkındaki köklü bilişsel ve duygusal anlamlandırma örüntüsü."
    }
  }),

  defineTerm({
    term: "Terk edilme şeması",
    slug: "terk-edilme-semasi",
    shortDefinition: "Terk edilme şeması, yakın ilişkilerin sürdürülemeyeceği, önemli kişilerin uzaklaşacağı veya ihtiyaç duyulduğunda erişilebilir olmayacağı beklentisinin tekrar eden biçimde yaşanmasıdır.",
    intro: "Şema terapi yaklaşımında tanımlanan bu örüntü psikiyatrik tanı değildir. Kişinin geçmiş ilişkilerinden, kayıp deneyimlerinden veya bakım verenlerle yaşadığı tutarsızlıklardan etkilenebilir. Bununla birlikte benzer kaygılar farklı nedenlerle de ortaya çıkabilir ve tek bir davranış üzerinden şema sonucu çıkarılmaz.",
    sections: [
      section("Terk Edilme Şeması Nasıl Görülebilir?", "Kişi yakın ilişkilerde küçük uzaklaşmaları bile ilişkinin sona ereceğinin işareti gibi yorumlayabilir, sık güvence arayabilir veya karşı tarafın ilgisindeki değişimlere yoğun duyarlılık gösterebilir. Bazı kişiler ise terk edilmekten korunmak için yakınlıktan kaçınabilir. Aynı şema farklı kişilerde farklı davranışlarla görülebilir."),
      section("Bağlanma Kaygısıyla Aynı mıdır?", "Kavramlar ilişkili olsa da aynı teorik yapıyı ifade etmez. Bağlanma kuramı yakın ilişkilerde güvenlik ve erişilebilirlik beklentilerine odaklanırken şema terapi daha geniş bilişsel ve duygusal örüntüler tanımlar. Klinik değerlendirmede bu kavramlar otomatik olarak birbirinin yerine kullanılmaz."),
      section("Her Ayrılık Korkusu Şema mıdır?", "Hayır. Önem verilen bir ilişkiyi kaybetme kaygısı birçok kişide ve bazı yaşam dönemlerinde anlaşılır bir tepki olabilir. Şema kavramı daha çok farklı ilişkilerde tekrar eden, yoğun ve kişinin yorumlarını belirgin biçimde yönlendiren bir örüntüyü anlatır."),
      section("Bu Örüntü Değişebilir mi?", "Kişinin tetikleyicilerini fark etmesi, geçmiş ve bugünkü ilişkileri birbirinden ayırabilmesi ve daha güvenli ilişki deneyimleri geliştirmesi zaman içinde değişime katkıda bulunabilir. Psikoterapide amaç kişinin tüm yakınlık ihtiyacını ortadan kaldırmak değil, beklentilerini daha esnek ve gerçekçi biçimde değerlendirebilmesini desteklemektir.")
    ],
    relatedTerms: [
      { term: "Şema", slug: "sema" },
      { term: "Şema terapi", slug: "sema-terapi" },
      { term: "Bağlanma", slug: "baglanma" },
      { term: "Güvence arama", slug: "guvence-arama" }
    ],
    seo: {
      title: "Terk Edilme Şeması Nedir? | Psikiyatri Sözlüğü",
      description: "Terk edilme şemasını yakın ilişkilerin kaybedileceği beklentisi, bağlanma ve güvence arama örüntüleriyle birlikte açıklar.",
      ogTitle: "Terk Edilme Şeması Nedir?",
      ogDescription: "Terk edilme şemasının ilişkilerde nasıl görülebileceğini açıklar."
    },
    schema: {
      definedTermDescription: "Yakın ilişkilerin sürdürülemeyeceği veya önemli kişilerin erişilebilir olmayacağı yönündeki tekrar eden beklenti örüntüsü."
    }
  }),

  defineTerm({
    term: "Yetersiz özdenetim",
    slug: "yetersiz-ozdenetim",
    shortDefinition: "Yetersiz özdenetim, dürtüleri erteleme, rahatsızlığa dayanma veya uzun vadeli hedefler doğrultusunda davranışı düzenleme alanlarında tekrar eden güçlükleri tanımlayan şema kavramıdır.",
    intro: "Şema terapi yaklaşımındaki yetersiz özdenetim kavramı tek başına psikiyatrik tanı değildir. Kişi bazı alanlarda oldukça disiplinli iken başka alanlarda dürtülerini düzenlemekte zorlanabilir. Davranışın anlamı yaş, gelişim dönemi, DEHB gibi klinik durumlar, çevresel koşullar ve kişinin yaşam öyküsüyle birlikte değerlendirilmelidir.",
    sections: [
      section("Yetersiz Özdenetim Nasıl Görülebilir?", "Kişi sıkıcı veya zor görevleri sürdürmekte, anlık isteği ertelemekte, öfke veya hayal kırıklığına tolerans göstermekte güçlük yaşayabilir. Kısa vadeli rahatlama sağlayan davranışlar uzun vadeli hedeflerin önüne geçebilir. Bu örüntünün sıklığı ve sonuçları kişiden kişiye değişir."),
      section("Dürtüsellik ile Aynı Şey midir?", "Tam olarak değil. Dürtüsellik sonuçları yeterince değerlendirmeden hızlı davranma eğilimini anlatır. Yetersiz özdenetim ise daha geniş biçimde rahatsızlığa tolerans, görev sürdürme ve istekleri erteleme gibi alanları da kapsayabilir. İki kavram birbiriyle ilişkili olsa da otomatik olarak eş anlamlı değildir."),
      section("İrade Zayıflığı Olarak Görülmeli midir?", "Hayır. Özdenetim biyolojik özellikler, dikkat süreçleri, duygular, öğrenilmiş alışkanlıklar, uyku, stres ve çevresel koşullardan etkilenebilir. Davranışları yalnız ahlaki veya karakter temelli bir açıklamayla değerlendirmek sorunun gerçek nedenlerini gözden kaçırabilir."),
      section("Değerlendirmede Nelere Bakılır?", "Güçlüğün hangi durumlarda ortaya çıktığı, ne kadar süredir devam ettiği, kişinin okul, iş, ilişkiler veya sağlık davranışlarını nasıl etkilediği incelenir. Çocuklukta başlayan yaygın dürtüsellik veya dikkat sorunlarında gelişimsel ve nörogelişimsel etkenlerin ayrıca değerlendirilmesi önemlidir.")
    ],
    relatedTerms: [
      { term: "Şema", slug: "sema" },
      { term: "Dürtüsellik", slug: "durtusellik" },
      { term: "Dürtü kontrolü", slug: "durtu-kontrolu" },
      { term: "DEHB", slug: "dehb" }
    ],
    seo: {
      title: "Yetersiz Özdenetim Nedir? | Psikiyatri Sözlüğü",
      description: "Yetersiz özdenetim şemasını dürtüsellik, görev sürdürme ve rahatsızlığa tolerans güçlükleri üzerinden açıklar.",
      ogTitle: "Yetersiz Özdenetim Nedir?",
      ogDescription: "Yetersiz özdenetim kavramını klinik ve gelişimsel bağlamda açıklar."
    },
    schema: {
      definedTermDescription: "Dürtüleri erteleme, rahatsızlığa dayanma ve uzun vadeli hedeflere göre davranışı düzenlemede tekrar eden güçlük örüntüsü."
    }
  }),

  defineTerm({
    term: "Çocuk psikiyatrisi",
    slug: "cocuk-psikiyatrisi",
    shortDefinition: "Çocuk psikiyatrisi, çocuk ve ergenlerin duygusal, davranışsal, gelişimsel ve psikiyatrik sorunlarının değerlendirilmesi ve tedavisiyle ilgilenen tıp uzmanlık alanıdır.",
    intro: "Çocukluk ve ergenlik döneminde ruhsal belirtiler yetişkinlerden farklı biçimlerde ortaya çıkabilir. Değerlendirme yalnız çocuğun belirtilerine değil gelişim düzeyine, aile ve okul ortamına, akran ilişkilerine ve bedensel sağlığa da odaklanır. Çocuk psikiyatrisi bu çoklu bağlamı birlikte ele alır.",
    sections: [
      section("Çocuk Psikiyatrisi Hangi Durumlarla İlgilenir?", "DEHB, otizm spektrum bozukluğu, anksiyete, depresyon, davranış sorunları, tik bozuklukları, yeme ve uyku sorunları gibi çok farklı alanlar değerlendirilebilir. Her davranış veya gelişimsel farklılık psikiyatrik bozukluk anlamına gelmez. Yaş, gelişim basamağı ve işlevsellik birlikte değerlendirilir."),
      section("Değerlendirme Yalnız Çocukla mı Yapılır?", "Genellikle hayır. Çocuğun yaşına ve başvuru nedenine göre ebeveynlerden, öğretmenlerden veya başka bakım verenlerden bilgi alınabilir. Çocuğun kendi anlatımı da gelişim düzeyine uygun biçimde önemlidir. Farklı kaynaklardan gelen bilgilerin birbirinden farklı olması sık görülebilir ve klinik değerlendirmede birlikte ele alınır."),
      section("Gelişimsel Dönem Neden Önemlidir?", "Aynı davranış farklı yaşlarda farklı anlam taşıyabilir. Küçük çocuklarda gelişimin doğal parçası olabilen bazı korkular daha ileri yaşta belirgin işlev kaybına yol açıyorsa farklı değerlendirilebilir. Dil, bilişsel gelişim, okul becerileri ve sosyal gelişim klinik yorumun temel parçalarıdır."),
      section("Tedavi Nasıl Planlanır?", "Tedavi planı çocuğun gereksinimine göre psikoeğitim, aile çalışmaları, okul düzenlemeleri, psikoterapi yaklaşımları veya gerekli durumlarda ilaç tedavisini içerebilir. İlaç başlama veya doz düzenleme kararları çocuk ve ergen psikiyatrisi uzmanı tarafından bireysel değerlendirmeyle yapılır.")
    ],
    relatedTerms: [
      { term: "Ergenlik", slug: "ergenlik" },
      { term: "DEHB", slug: "dehb" },
      { term: "Otizm spektrum bozukluğu", slug: "otizm-spektrum-bozuklugu" },
      { term: "Akran ilişkileri", slug: "akran-iliskileri" }
    ],
    seo: {
      title: "Çocuk Psikiyatrisi Nedir? | Psikiyatri Sözlüğü",
      description: "Çocuk psikiyatrisinin gelişimsel, duygusal ve davranışsal sorunları aile, okul ve gelişim bağlamında nasıl değerlendirdiğini açıklar.",
      ogTitle: "Çocuk Psikiyatrisi Nedir?",
      ogDescription: "Çocuk ve ergen ruh sağlığının değerlendirme çerçevesini açıklar."
    },
    schema: {
      definedTermDescription: "Çocuk ve ergenlerin psikiyatrik, duygusal, davranışsal ve gelişimsel sorunlarıyla ilgilenen tıp uzmanlık alanı."
    }
  }),

  defineTerm({
    term: "Tik bozukluğu",
    slug: "tik-bozuklugu",
    shortDefinition: "Tik bozukluğu, ani, hızlı, tekrarlayıcı motor hareketler veya seslerin belirli süre ve örüntülerle ortaya çıktığı nörogelişimsel bozukluklar grubunu ifade eder.",
    intro: "Tikler göz kırpma, yüz hareketleri, baş veya omuz hareketleri gibi motor biçimde ya da boğaz temizleme ve çeşitli sesler çıkarma şeklinde görülebilir. Tiklerin türü ve yoğunluğu zaman içinde değişebilir. Her geçici tik mutlaka kalıcı bir tik bozukluğu anlamına gelmez.",
    sections: [
      section("Tikler Nasıl Görülebilir?", "Motor tikler göz kırpma, yüz buruşturma, omuz silkme veya ani baş hareketleri biçiminde olabilir. Vokal tikler boğaz temizleme, öksürür gibi ses çıkarma veya başka kısa sesleri içerebilir. Karmaşık tikler daha uzun hareket veya ses dizilerinden oluşabilir."),
      section("Tikler İstemli midir?", "Tikler tamamen istemli davranışlar değildir. Bazı kişiler tik öncesinde artan bir içsel gerilim veya dürtü hissedebilir ve tiki kısa süre baskılayabilir. Ancak uzun süre baskılama zorlayıcı olabilir ve sonrasında tiklerde artış yaşanabilir. Çocuğu tiki nedeniyle azarlamak veya cezalandırmak uygun değildir."),
      section("Stres Tikleri Etkiler mi?", "Stres, yorgunluk, heyecan ve dikkat odağının tiklere yönelmesi bazı kişilerde tik sıklığını artırabilir. Bununla birlikte tiklerin nedeni yalnız psikolojik stres değildir. Nörogelişimsel ve biyolojik etkenler önemlidir ve belirtiler doğal olarak dönemsel dalgalanmalar gösterebilir."),
      section("Ne Zaman Değerlendirme Gerekir?", "Tikler çocuğun okul yaşamını, sosyal ilişkilerini veya günlük işlevlerini etkiliyorsa ya da eşlik eden dikkat, obsesif kompulsif belirtiler veya başka davranış sorunları bulunuyorsa değerlendirme yararlı olabilir. Tedavi gereksinimi yalnız tiklerin varlığına değil yarattığı sıkıntı ve işlev kaybına göre belirlenir.")
    ],
    relatedTerms: [
      { term: "Tourette sendromu", slug: "tourette-sendromu" },
      { term: "DEHB", slug: "dehb" },
      { term: "Çocuk psikiyatrisi", slug: "cocuk-psikiyatrisi" },
      { term: "Obsesif kompulsif bozukluk", slug: "obsesif-kompulsif-bozukluk" }
    ],
    seo: {
      title: "Tik Bozukluğu Nedir? | Psikiyatri Sözlüğü",
      description: "Tik bozukluklarında motor ve vokal tiklerin nasıl görüldüğünü, istemlilikten farkını ve değerlendirme gerektiren durumları açıklar.",
      ogTitle: "Tik Bozukluğu Nedir?",
      ogDescription: "Motor ve vokal tikleri gelişimsel bağlamda açıklar."
    },
    schema: {
      definedTermDescription: "Ani ve tekrarlayıcı motor hareketler veya seslerle seyreden nörogelişimsel bozukluklar grubu."
    }
  }),

  defineTerm({
    term: "Tourette sendromu",
    slug: "tourette-sendromu",
    shortDefinition: "Tourette sendromu, çocukluk döneminde başlayan, birden fazla motor tik ve en az bir vokal tik öyküsüyle seyreden nörogelişimsel bir tik bozukluğudur.",
    intro: "Tourette sendromunda tiklerin türü, yeri ve yoğunluğu zaman içinde değişebilir. Toplumdaki yaygın inanışın aksine uygunsuz sözcükler söyleme şeklindeki koprolali her kişide görülmez. Tanı ve tedavi değerlendirmesi tiklerin süresi, başlangıç yaşı ve kişinin işlevselliği dikkate alınarak yapılır.",
    sections: [
      section("Tourette Sendromunda Hangi Tikler Görülür?", "Göz kırpma, yüz hareketleri, omuz silkme veya baş hareketleri gibi motor tikler ile boğaz temizleme, kısa sesler veya sözcükler gibi vokal tikler görülebilir. Tiklerin hepsinin aynı anda bulunması gerekmez; belirtiler zaman içinde değişebilir ve dönem dönem azalabilir."),
      section("Koprolali Herkeste Olur mu?", "Hayır. İstem dışı uygunsuz veya küfürlü sözcükler söyleme anlamındaki koprolali Tourette sendromunun zorunlu belirtisi değildir ve vakaların yalnız bir bölümünde görülür. Medyada bu özelliğin aşırı vurgulanması hastalıkla ilgili yanlış algı ve stigmayı artırabilir."),
      section("Başka Durumlar Eşlik Edebilir mi?", "DEHB ve obsesif kompulsif belirtiler Tourette sendromuyla birlikte görülebilir. Bazı kişilerde anksiyete, öğrenme sorunları veya sosyal güçlükler de eşlik edebilir. Bu nedenle değerlendirme yalnız görünen tiklerin sayılmasına değil kişinin genel gelişimi ve günlük işlevlerine odaklanır."),
      section("Tedavi Her Zaman Gerekir mi?", "Hayır. Hafif ve kişiyi rahatsız etmeyen tiklerde bilgilendirme ve izlem yeterli olabilir. Belirgin sıkıntı veya işlev kaybı varsa davranışsal yaklaşımlar ve bazı durumlarda ilaç tedavileri değerlendirilebilir. Tedavi hedefi tikleri mutlaka tamamen ortadan kaldırmak değil yaşam üzerindeki yükü azaltmaktır.")
    ],
    relatedTerms: [
      { term: "Tik bozukluğu", slug: "tik-bozuklugu" },
      { term: "DEHB", slug: "dehb" },
      { term: "Obsesif kompulsif bozukluk", slug: "obsesif-kompulsif-bozukluk" },
      { term: "Stigma", slug: "stigma" }
    ],
    seo: {
      title: "Tourette Sendromu Nedir? | Psikiyatri Sözlüğü",
      description: "Tourette sendromunda motor ve vokal tikleri, koprolali hakkındaki yanlış inanışları ve eşlik eden durumları açıklar.",
      ogTitle: "Tourette Sendromu Nedir?",
      ogDescription: "Tourette sendromunu tikler ve eşlik eden nörogelişimsel özelliklerle açıklar."
    },
    schema: {
      definedTermDescription: "Çocuklukta başlayan, çoklu motor tikler ve vokal tik öyküsüyle seyreden nörogelişimsel tik bozukluğu."
    }
  }),

  defineTerm({
    term: "Öğrenme güçlüğü",
    slug: "ogrenme-guclugu",
    shortDefinition: "Öğrenme güçlüğü, kişinin okuma, yazma, matematik veya başka akademik becerileri öğrenirken yaşadığı zorlukları tanımlayan geniş ve tanısal olmayan bir ifadedir.",
    intro: "Öğrenme güçlüğü tek başına özgül öğrenme bozukluğu tanısı anlamına gelmez. Eğitim fırsatları, öğretim yöntemi, dikkat sorunları, dil gelişimi, görme veya işitme sorunları, duygusal durum ve başka etkenler akademik performansı etkileyebilir. Bu nedenle nedenin ayrıntılı değerlendirilmesi gerekir.",
    sections: [
      section("Öğrenme Güçlüğü Hangi Alanlarda Görülebilir?", "Çocuk okuma hızında, okuduğunu anlamada, yazımda, yazılı anlatımda, sayı kavramlarında veya matematik işlemlerinde zorlanabilir. Bazı çocuklarda güçlük tek bir alanda belirginken bazılarında birden fazla akademik beceri etkilenebilir. Sorunun ders başarısındaki genel düşüklükten nasıl ayrıldığı önemlidir."),
      section("Düşük Zekâ Anlamına Gelir mi?", "Hayır. Akademik bir alanda güçlük yaşamak kişinin genel zekâ düzeyinin düşük olduğunu göstermez. Özgül öğrenme sorunları normal veya yüksek bilişsel kapasiteye sahip kişilerde de görülebilir. Değerlendirmede güçlü ve zorlanılan alanların birlikte belirlenmesi daha yararlıdır."),
      section("DEHB ile Karışabilir mi?", "Evet. Dikkati sürdürmekte güçlük, ödevleri tamamlayamama veya sınıfta yönergeleri kaçırma akademik performansı etkileyebilir. DEHB ile özgül öğrenme bozukluğu birlikte de görülebilir. Bu nedenle yalnız okul notlarına bakılarak hangi durumun bulunduğu kesinleştirilemez."),
      section("Değerlendirme Nasıl Yapılır?", "Gelişimsel ve eğitim öyküsü, öğretmen gözlemleri, akademik performans ve gerektiğinde standart testler birlikte ele alınabilir. Görme, işitme veya dil sorunları gibi başka nedenlerin dışlanması da önemlidir. Destek planı çocuğun güçlü yönlerine ve zorlandığı akademik alanlara göre bireyselleştirilir.")
    ],
    relatedTerms: [
      { term: "Özgül öğrenme bozukluğu", slug: "ozgul-ogrenme-bozuklugu" },
      { term: "DEHB", slug: "dehb" },
      { term: "Dikkat", slug: "dikkat" },
      { term: "Çocuk psikiyatrisi", slug: "cocuk-psikiyatrisi" }
    ],
    seo: {
      title: "Öğrenme Güçlüğü Nedir? | Psikiyatri Sözlüğü",
      description: "Öğrenme güçlüğünü tanısal olmayan geniş bir kavram olarak açıklar ve özgül öğrenme bozukluğu ile DEHB'den farkını ele alır.",
      ogTitle: "Öğrenme Güçlüğü Nedir?",
      ogDescription: "Akademik öğrenme güçlüklerinin değerlendirme çerçevesini açıklar."
    },
    schema: {
      definedTermDescription: "Okuma, yazma, matematik veya başka akademik becerileri öğrenirken yaşanan zorlukları tanımlayan geniş ifade."
    }
  }),

  defineTerm({
    term: "Özgül öğrenme bozukluğu",
    slug: "ozgul-ogrenme-bozuklugu",
    shortDefinition: "Özgül öğrenme bozukluğu, uygun eğitim fırsatlarına rağmen okuma, yazılı anlatım veya matematik becerilerinde yaşa ve gelişim düzeyine göre kalıcı güçlüklerle seyreden nörogelişimsel bozukluktur.",
    intro: "Bu tanı yalnız düşük okul notlarına veya tek bir test sonucuna dayanmaz. Akademik güçlüğün sürekliliği, eğitim öyküsü, kişinin bilişsel ve gelişimsel özellikleri ve başka olası nedenler birlikte değerlendirilir. Güçlük kişinin zekâsının düşük olduğu anlamına gelmez.",
    sections: [
      section("Hangi Akademik Alanlar Etkilenebilir?", "Okuma doğruluğu ve akıcılığı, okuduğunu anlama, yazım, yazılı anlatım, sayı kavramı, matematik işlemleri veya matematiksel akıl yürütme etkilenebilir. Günlük dilde disleksi özellikle okuma alanındaki güçlükler için kullanılabilir ancak klinik sınıflandırma daha geniş bir değerlendirme yapar."),
      section("Tanı Nasıl Değerlendirilir?", "Sorunun okul çağında başlaması, uygun destek ve öğretime rağmen sürmesi ve akademik işlev üzerinde anlamlı etkisinin bulunması önemlidir. Standart akademik testler katkı sağlayabilir ancak sonuçlar gelişimsel öykü ve eğitim koşullarıyla birlikte değerlendirilir."),
      section("DEHB ile Birlikte Görülebilir mi?", "Evet. DEHB ve özgül öğrenme bozukluğu aynı kişide birlikte bulunabilir. Dikkat güçlüğü akademik performansı kötüleştirebilirken öğrenme bozukluğu da derslerden kaçınmaya veya motivasyon kaybına yol açabilir. Bu nedenle iki durumun belirtileri ayrıntılı biçimde ayrıştırılmalıdır."),
      section("Destek Neleri İçerebilir?", "Eğitimsel düzenlemeler, bireyselleştirilmiş öğretim yöntemleri, beceriye özgü destek ve gerektiğinde okul ile aile arasında iş birliği yararlı olabilir. Tedavi veya destek planı çocuğun zorlandığı alanlar kadar güçlü olduğu alanları da dikkate almalıdır. Tek bir yöntem herkes için uygun değildir.")
    ],
    relatedTerms: [
      { term: "Öğrenme güçlüğü", slug: "ogrenme-guclugu" },
      { term: "DEHB", slug: "dehb" },
      { term: "Çocuk psikiyatrisi", slug: "cocuk-psikiyatrisi" },
      { term: "Dikkat eksikliği", slug: "dikkat-eksikligi" }
    ],
    seo: {
      title: "Özgül Öğrenme Bozukluğu Nedir? | Psikiyatri Sözlüğü",
      description: "Özgül öğrenme bozukluğunu okuma, yazma ve matematik alanlarındaki kalıcı güçlükler ve DEHB ile ilişkisi üzerinden açıklar.",
      ogTitle: "Özgül Öğrenme Bozukluğu Nedir?",
      ogDescription: "Özgül öğrenme bozukluğunun değerlendirme ve destek çerçevesini açıklar."
    },
    schema: {
      definedTermDescription: "Okuma, yazılı anlatım veya matematik becerilerinde kalıcı akademik güçlüklerle seyreden nörogelişimsel bozukluk."
    }
  }),

  defineTerm({
    term: "Toplum ruh sağlığı",
    slug: "toplum-ruh-sagligi",
    shortDefinition: "Toplum ruh sağlığı, ruhsal sorunların yalnız bireysel tedavisine değil önleme, erken tanı, rehabilitasyon, sosyal katılım ve hizmetlere erişim gibi toplum düzeyindeki yaklaşımlara odaklanan alandır.",
    intro: "Ruh sağlığını etkileyen koşullar yalnız kişinin biyolojisi veya bireysel davranışlarıyla sınırlı değildir. Yoksulluk, barınma, eğitim, işsizlik, ayrımcılık, sosyal destek ve sağlık hizmetlerine erişim gibi toplumsal etkenler de önemlidir. Toplum ruh sağlığı bu geniş çerçevede koruyucu ve destekleyici sistemler geliştirmeyi hedefler.",
    sections: [
      section("Toplum Ruh Sağlığının Amaçları Nelerdir?", "Ruhsal hastalıkların ortaya çıkmasını azaltmak, sorunları erken fark etmek, tedaviye erişimi kolaylaştırmak ve ruhsal hastalık yaşayan kişilerin toplum içinde işlevselliğini desteklemek temel hedefler arasındadır. Hizmetlerin yalnız hastane merkezli değil kişinin yaşadığı çevreye yakın biçimde sunulması da önemli bir ilkedir."),
      section("Koruyucu Ruh Sağlığı ile İlişkisi Nedir?", "Koruyucu ruh sağlığı risk etkenlerini azaltma ve dayanıklılığı güçlendirme çalışmalarını içerir. Okullarda zorbalığı önleme, intihar riskini azaltmaya yönelik halk sağlığı programları, ebeveyn destekleri ve stigma karşıtı çalışmalar toplum ruh sağlığı yaklaşımının parçaları olabilir."),
      section("Rehabilitasyon Neden Önemlidir?", "Belirtilerin azalması her zaman kişinin eğitim, iş, sosyal ilişkiler ve bağımsız yaşam alanlarında eski işlevine döndüğü anlamına gelmez. Psikososyal rehabilitasyon kişinin günlük yaşam becerilerini, sosyal katılımını ve yaşam kalitesini desteklemeye çalışır."),
      section("Stigma Hizmete Erişimi Etkiler mi?", "Evet. Ruhsal hastalıkların zayıflık veya tehlikelilikle eş tutulması kişilerin yardım aramasını geciktirebilir ve toplumsal dışlanmaya katkıda bulunabilir. Doğru bilgilendirme, ayrımcı olmayan dil ve hak temelli hizmetler toplum ruh sağlığının önemli bileşenleridir.")
    ],
    relatedTerms: [
      { term: "Koruyucu ruh sağlığı", slug: "koruyucu-ruh-sagligi" },
      { term: "Psikososyal destek", slug: "psikososyal-destek" },
      { term: "Rehabilitasyon", slug: "rehabilitasyon" },
      { term: "Stigma", slug: "stigma" }
    ],
    seo: {
      title: "Toplum Ruh Sağlığı Nedir? | Psikiyatri Sözlüğü",
      description: "Toplum ruh sağlığını koruyucu hizmetler, rehabilitasyon, sosyal etkenler ve ruh sağlığı hizmetlerine erişim üzerinden açıklar.",
      ogTitle: "Toplum Ruh Sağlığı Nedir?",
      ogDescription: "Toplum temelli ruh sağlığı yaklaşımının temel hedeflerini açıklar."
    },
    schema: {
      definedTermDescription: "Ruh sağlığını önleme, erken müdahale, rehabilitasyon ve hizmetlere erişim açısından toplum düzeyinde ele alan alan."
    }
  }),

  defineTerm({
    term: "Zorunlu yatış",
    slug: "zorunlu-yatis",
    shortDefinition: "Zorunlu yatış, kişinin rızası olmaksızın psikiyatrik bir kuruma yatırılmasının belirli klinik, güvenlik ve hukuki koşullar altında değerlendirildiği uygulamayı ifade eder.",
    intro: "Zorunlu yatış yalnız bir psikiyatrik tanının varlığına dayanmaz. Kişinin karar verme kapasitesi, kendisi veya başkaları açısından ciddi risk, tedavi gereksinimi, daha az kısıtlayıcı seçeneklerin yeterliliği ve yürürlükteki mevzuat birlikte değerlendirilir. Hukuki ölçütler ülkeye göre değişebilir.",
    sections: [
      section("Zorunlu Yatış Ne Zaman Gündeme Gelebilir?", "Ağır ruhsal belirtiler nedeniyle kişinin güvenliğinin ciddi biçimde tehlikeye girdiği veya gerekli değerlendirme ve tedavinin başka şekilde sürdürülemediği bazı durumlarda gündeme gelebilir. Ancak risk değerlendirmesi kişiye özel yapılır ve yalnız tanı adına bakılarak karar verilmez."),
      section("Kişinin Hakları Devam Eder mi?", "Evet. Zorunlu yatış kişinin insan haklarını, saygınlığını, mahremiyetini ve bilgilendirilme hakkını ortadan kaldırmaz. Kullanılan kısıtlamaların gerekli ve orantılı olması, düzenli olarak yeniden değerlendirilmesi ve mümkün olduğunda kişinin kararlara katılımının desteklenmesi önemlidir."),
      section("Hukuki Kurallar Her Yerde Aynı mıdır?", "Hayır. Yetkili makamlar, değerlendirme süreçleri, süreler, itiraz yolları ve resmi prosedürler ülkeye ve mevzuata göre değişebilir. Bu nedenle genel psikiyatrik bilgi kişisel hukuki danışmanlık veya belirli bir ülkenin güncel mevzuatının yerine geçmez."),
      section("Amaç Ceza Vermek midir?", "Hayır. Zorunlu yatış cezalandırma yöntemi değildir. Temel amaç ciddi risk altında olan kişiye güvenli değerlendirme ve gerekli tedavinin sağlanmasıdır. Klinik durum iyileştikçe ve güvenlik koşulları değiştikçe yatış gereksiniminin yeniden değerlendirilmesi gerekir.")
    ],
    relatedTerms: [
      { term: "Psikiyatrik yatış", slug: "psikiyatrik-yatis" },
      { term: "Acil psikiyatri", slug: "acil-psikiyatri" },
      { term: "Risk değerlendirmesi", slug: "risk-degerlendirmesi" },
      { term: "Hasta hakları", slug: "hasta-haklari" }
    ],
    seo: {
      title: "Zorunlu Yatış Nedir? | Psikiyatri Sözlüğü",
      description: "Psikiyatride zorunlu yatışın klinik, güvenlik ve hukuki çerçevesini ve kişinin haklarının devam ettiğini açıklar.",
      ogTitle: "Zorunlu Yatış Nedir?",
      ogDescription: "Zorunlu yatışı haklar ve güvenlik çerçevesinde açıklar."
    },
    schema: {
      definedTermDescription: "Kişinin rızası olmadan psikiyatrik kuruma yatışının belirli klinik ve hukuki koşullarda değerlendirilmesi."
    }
  }),

  defineTerm({
    term: "Taburculuk planı",
    slug: "taburculuk-plani",
    shortDefinition: "Taburculuk planı, psikiyatrik yatış sonrasında kişinin tedavisinin, güvenliğinin ve toplum içindeki bakımının kesintisiz sürdürülebilmesi için oluşturulan yapılandırılmış geçiş planıdır.",
    intro: "Taburculuk yalnız hastaneden çıkış tarihinin belirlenmesi değildir. İlaçların nasıl sürdürüleceği, kontrol randevuları, psikososyal gereksinimler, aile veya sosyal destek, erken uyarı belirtileri ve gerektiğinde kriz durumunda hangi hizmetlere başvurulacağı önceden planlanabilir. Plan kişinin gereksinimlerine göre bireyselleştirilir.",
    sections: [
      section("Taburculuk Planında Neler Yer Alabilir?", "Kontrol randevuları, mevcut tedavilerin nasıl sürdürüleceği, reçeteler, laboratuvar veya başka izlem gereksinimleri, psikoterapi veya rehabilitasyon hizmetleri ve sosyal destek kaynakları planlanabilir. Kişinin barınma, ulaşım veya bakım desteği gibi pratik ihtiyaçları da klinik devamlılığı etkileyebilir."),
      section("Nüks Önleme Neden Önemlidir?", "Bazı ruhsal bozukluklarda belirtilerin yeniden ortaya çıkması mümkündür. Kişinin erken uyarı işaretlerini tanıması, uyku veya madde kullanımı gibi risk alanlarını fark etmesi ve kiminle iletişime geçeceğini bilmesi tedavi sürekliliğine katkıda bulunabilir."),
      section("Aile veya Yakınlar Sürece Katılabilir mi?", "Kişinin onayı ve mahremiyet sınırları gözetilerek yakınların desteği yararlı olabilir. Özellikle ilaç takibi, randevular, günlük yaşam düzeni veya erken belirti değişikliklerini fark etme açısından destek sağlayabilirler. Ancak taburculuk planı kişinin özerkliğini gereksiz biçimde sınırlamamalıdır."),
      section("Taburculuk Sonrası İzlem Neden Gereklidir?", "Hastane ortamından günlük yaşama geçiş bazı kişiler için hassas bir dönem olabilir. Belirtiler, yan etkiler, işlevsellik ve güvenlik ihtiyaçları yeniden değerlendirilebilir. Yeni sorunlar ortaya çıkarsa plan güncellenebilir; taburculuk tedavinin sona erdiği anlamına gelmez.")
    ],
    relatedTerms: [
      { term: "Psikiyatrik yatış", slug: "psikiyatrik-yatis" },
      { term: "İzlem", slug: "izlem" },
      { term: "Nüks önleme", slug: "nuks-onleme" },
      { term: "Sosyal destek", slug: "sosyal-destek" }
    ],
    seo: {
      title: "Taburculuk Planı Nedir? | Psikiyatri Sözlüğü",
      description: "Psikiyatrik taburculuk planını tedavi sürekliliği, izlem, nüks önleme ve sosyal destek açısından açıklar.",
      ogTitle: "Taburculuk Planı Nedir?",
      ogDescription: "Psikiyatrik yatış sonrası güvenli geçiş planını açıklar."
    },
    schema: {
      definedTermDescription: "Psikiyatrik yatış sonrasında tedavi, güvenlik ve toplum içindeki bakımın sürekliliğini sağlayan geçiş planı."
    }
  }),

  defineTerm({
    term: "Tedavi planı",
    slug: "tedavi-plani",
    shortDefinition: "Tedavi planı, kişinin klinik gereksinimleri, hedefleri, tercihleri ve riskleri doğrultusunda uygulanacak müdahaleleri ve izlem sürecini yapılandıran bireyselleştirilmiş klinik yol haritasıdır.",
    intro: "Psikiyatrik tedavi planı yalnız ilaç listesinden oluşmaz. Psikoterapi, psikoeğitim, yaşam düzenlemeleri, sosyal destek, rehabilitasyon, gerekli tıbbi incelemeler ve izlem hedefleri de planın parçası olabilir. Plan tanıya göre otomatik hazırlanmaz; kişinin yaşam koşulları ve öncelikleriyle birlikte şekillendirilir.",
    sections: [
      section("Tedavi Planı Nasıl Oluşturulur?", "Klinik görüşme, öykü, mental durum muayenesi, işlevsellik, güvenlik değerlendirmesi ve kişinin beklentileri birlikte ele alınır. Hangi sorunların öncelikli olduğu belirlenir ve kısa ile uzun vadeli hedefler oluşturulabilir. Gerektiğinde farklı uzmanlık alanları sürece dahil olabilir."),
      section("Her Aynı Tanıda Plan Aynı mıdır?", "Hayır. Aynı tanıya sahip iki kişinin belirti şiddeti, eşlik eden hastalıkları, önceki tedavi yanıtları, yan etki deneyimleri, yaşam koşulları ve tercihleri farklı olabilir. Bu nedenle klinik kılavuzlar genel çerçeve sağlasa da bireysel plan bunlara mekanik biçimde indirgenmez."),
      section("Tedavi Planı Değişebilir mi?", "Evet. Tedavi yanıtı, yan etkiler, yeni belirtiler, yaşam koşullarındaki değişiklikler veya kişinin hedeflerinin farklılaşması nedeniyle plan zaman içinde güncellenebilir. İzlem görüşmeleri bu nedenle yalnız reçete yenilemek için değil tedavinin bütününü yeniden değerlendirmek için önemlidir."),
      section("Kişinin Kararlara Katılımı Neden Önemlidir?", "Tedavinin amacı yalnız klinik belirtileri azaltmak değil kişinin yaşam hedeflerini ve işlevselliğini desteklemektir. Olası yararlar, riskler ve alternatiflerin anlaşılır biçimde konuşulması ortak karar vermeyi güçlendirebilir. İlaç başlama, bırakma veya doz değişikliği kişisel olarak değil ilgili hekimle planlanmalıdır.")
    ],
    relatedTerms: [
      { term: "Formülasyon", slug: "formulasyon" },
      { term: "Klinik görüşme", slug: "klinik-gorusme" },
      { term: "İzlem", slug: "izlem" },
      { term: "Tedavi yanıtı", slug: "tedavi-yaniti" }
    ],
    seo: {
      title: "Tedavi Planı Nedir? | Psikiyatri Sözlüğü",
      description: "Psikiyatrik tedavi planının hedefler, müdahaleler, ortak karar verme ve izlem doğrultusunda nasıl yapılandırıldığını açıklar.",
      ogTitle: "Tedavi Planı Nedir?",
      ogDescription: "Bireyselleştirilmiş psikiyatrik tedavi planının temel bileşenlerini açıklar."
    },
    schema: {
      definedTermDescription: "Klinik gereksinimler, hedefler ve tercihler doğrultusunda müdahaleleri ve izlemi yapılandıran bireyselleştirilmiş plan."
    }
  })
];

export const allGlossaryPilotTerms = [
  ...sixteenthBatchNewTerms,
  ...fifteenthBatchNewTerms,
  ...fourteenthBatchNewTerms,
  ...thirteenthBatchNewTerms,
  ...twelfthBatchNewTerms,
  ...eleventhBatchNewTerms,
  ...tenthBatchNewTerms,
  ...ninthBatchNewTerms,
  ...eighthBatchNewTerms,
  ...seventhBatchNewTerms,
  ...sixthBatchNewTerms,
  ...fifthBatchNewTerms,
  ...fourthBatchNewTerms,...pilotTerms, ...thirdAdditionalTerms, ...thirdReplacements, dissociationBaseTerm, anhedoniaBaseTerm, depersonalizationBaseTerm, derealizationBaseTerm, maniBaseTerm, hypomaniaBaseTerm, psychosisBaseTerm]
  .map((term) => ({ ...term, ...qualityOverrides.get(term.slug) }));
