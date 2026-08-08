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

export const allGlossaryPilotTerms = [
  ...sixthBatchNewTerms,
  ...fifthBatchNewTerms,
  ...fourthBatchNewTerms,...pilotTerms, ...thirdAdditionalTerms, ...thirdReplacements, dissociationBaseTerm, anhedoniaBaseTerm, depersonalizationBaseTerm, derealizationBaseTerm, maniBaseTerm, hypomaniaBaseTerm, psychosisBaseTerm]
  .map((term) => ({ ...term, ...qualityOverrides.get(term.slug) }));
