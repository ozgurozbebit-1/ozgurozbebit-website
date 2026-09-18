# Haftanın Analizi yayın akışı

Bu klasör, Spor & Zihin içindeki haftalık maç analizlerinin kalıcı sayfalarını barındırır. Her analiz ayrı bir temiz URL ile yayımlanır; arşiv ve Futbol & Zihin bölümü en yeni yazıyı öne çıkarır.

## URL ve başlangıç şablonu

- Yeni her analiz için URL: `/spor-zihin/haftanin-analizi/<slug>/`
- Yeni klasörün içinde `index.html` oluşturulur.
- HTML, `fenerbahce-48-saatlik-kriz/index.html` sayfasının yapı, erişilebilirlik ve SEO düzenini temel alır. Bu; ortak header/footer, breadcrumb, içerik kolonu, editoryal not, ilgili yazılar, canonical, Open Graph/Twitter etiketleri ve JSON-LD şemasını kapsar.
- Sayfa başlığı, açıklama, görsel alt metinleri, tarih ve tüm URL değerleri yeni analize özgü olmalıdır.

## Yeni analiz yayımlama kontrol listesi

1. Yeni slug ile kalıcı makale sayfasını oluşturun: `/spor-zihin/haftanin-analizi/<slug>/`.
2. Makalenin canonical URL’sini, `og:url` değerini, Article JSON-LD içindeki `@id` ve `url` değerini yeni slug’a göre güncelleyin.
3. Breadcrumb yapısında `Ana Sayfa → Spor & Zihin → Haftanın Analizleri → yeni analiz` sırasını kullanın.
4. `/spor-zihin/futbol/` içindeki büyük **90 Dakikanın Psikolojisi** kartını yeni analize, başlığa, kısa maç bilgisine, görsele ve CTA bağlantısına güncelleyin.
5. `/spor-zihin/90-dakikanin-psikolojisi/` arşivinde **Bu haftanın analizi** alanını yeni makaleye taşıyın.
6. Bir önceki güncel analizi aynı arşivdeki **Önceki analizler** bölümüne, en yeni içerik üstte kalacak biçimde ekleyin.
7. Yeni yazının kendi **İlgili Yazılar** bölümünde yalnız en yeni iki önceki Haftanın Psikoanalizi yazısını gösterin. Güncel yazıyı listeye eklemeyin; toplam iki analiz varsa yalnız bir önceki kartı gösterin, toplam tek analiz varsa bölümü göstermeyin.
8. `sitemap-spor-zihin.xml` içine yeni kalıcı URL’yi ekleyin.
9. Yeni sayfanın tek H1, doğru canonical, `index, follow`, geçerli Article JSON-LD ve çalışan internal linklere sahip olduğunu yerelde doğrulayın.

## Arşiv sıralaması

`/spor-zihin/90-dakikanin-psikolojisi/` her zaman aşağıdaki düzeni korur:

1. En yeni analiz: üstte, büyük **Bu haftanın analizi** kartı.
2. Önceki analizler: aşağıda, en yeniden eskiye doğru kronolojik kartlar.

Yeni bir analiz eklendiğinde önceki haftanın yazısı silinmez; arşiv listesine taşınır ve kalıcı URL’sini korur.

## Editoryal güvenlik

- Yorumlar kamuya açık maç görüntüleri, basın açıklamaları ve doğrulanabilir maç bağlamı üzerinden yapılır.
- Sporcu, teknik ekip veya kulüp çalışanlarına kişilik etiketi koyulmaz; uzaktan psikiyatrik tanı ya da bireysel klinik değerlendirme yapılmaz.
- Psikolojik kavramlar kesin hüküm yerine olasılık diliyle anlatılır: örneğin “etkileyebilir”, “ilişkili olabilir”, “bu açıdan düşünülebilir”.
- Taktik, saha koşulları, rakip performansı ve bireysel oyun kalitesi gibi psikoloji dışı açıklamalar da uygun olduğunda açıkça belirtilir.

## Yayın öncesi kısa QA

- Yeni URL ve sitemap kaydı eşleşiyor mu?
- Futbol sayfası ve arşivdeki güncel kart aynı yeni URL’ye mi gidiyor?
- Önceki güncel yazı arşivde kaldı mı?
- Canonical, OG URL, Article JSON-LD ve breadcrumb yeni slug’ı gösteriyor mu?
- Görsel, alt metin ve editoryal not yeni yazıyla uyumlu mu?
