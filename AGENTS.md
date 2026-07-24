# AGENTS.md

Bu dosya, yeni bir Codex oturumunun projeyi hızlı ve doğru anlaması için hazırlanmış kalıcı çalışma rehberidir.

## Proje Amacı ve Kullanıcılar

`ozgurozbebit.com.tr`, Uzm. Dr. Özgür Özbebit'in psikiyatri uzmanlığı için hazırlanan bilgilendirme sitesidir. Hedef kitle danışanlar, aileler, psikiyatri hakkında sade bilgi arayan okuyucular ve ön değerlendirme testlerinden yararlanmak isteyen kişilerdir. Site tanı veya tedavi yerine geçmez; güven veren, bilimsel ve anlaşılır bilgi sunar.

## Teknoloji ve Calisma Ortami

- Site buyuk olcude statik HTML, CSS ve vanilla JavaScript ile calisir.
- Temiz URL yapisi klasor + `index.html` seklindedir.
- Ana domain standardi: `https://www.ozgurozbebit.com.tr`.
- Hosting/deployment Vercel uzerinden yapilir; kurallar `vercel.json` icindedir.
- Node gereksinimi `>=20`; test komutu `npm test`.
- PDF rehberler Python tabanli uretim/render akislariyla hazirlanir; ciktilar `output/pdf/` altindadir.
- Yerel onizleme icin dosya yolu yerine HTTP sunucu kullan: `python3 -m http.server 8124`.

## Ana Klasorler ve Onemli Dosyalar

- `index.html`: ana sayfa.
- `styles.css`: ortak tasarim sistemi ve responsive kurallar.
- `script.js`: ortak sayfa davranislari.
- `assets/`: gorseller, veri dosyalari, PDF/rehber yardimci varliklari.
- `assets/weird-cases-data.js`: "Psikiyatride En Tuhaf Vakalar" video verisi.
- `assets/psychiatry-glossary.js`: psikiyatri sozlugu verisi.
- `blog/`: blog liste ve yazi sayfalari.
- `psikiyatride-en-tuhaf-vakalar/`: YouTube tabanli kisa video merkezi ve detay sayfalari.
- `psikiyatri-sozlugu/`: sozluk ana sayfasi ve secili terim detaylari.
- `test-merkezi/` ve `*-testi/`: on degerlendirme testleri.
- `pdf-rehberler/`: indirilebilir PDF rehber merkezi ve rehber detay sayfalari.
- `output/pdf/`: uretilmis PDF dosyalari.
- `tmp/pdfs/`: PDF uretim betikleri, ara renderlar ve taslak ciktilar.
- `sitemap.xml`, `robots.txt`: teknik SEO dosyalari.
- `vercel.json`: redirect, rewrite, header ve domain kurallari.
- `admin/`, `admin_panel/`, `api_disabled/`: yonetim ve sosyal medya yayinlama altyapisi. Bu alanlara ozel izin olmadan dokunma.

## Veritabani Yapisi

Genel public site statik calisir ve veritabani gerektirmez. Veritabani kullanimi admin/yayinlama tarafindadir. Kritik tablolar:

- `users`
- `social_accounts`
- `content_projects`
- `content_planner`
- `content_memory`
- `publish_jobs`
- `visual_memory`
- `metaphor_usage`
- `video_posts`
- `threads_accounts`

Bu tablolar Meta, Instagram, Facebook, LinkedIn, Threads ve icerik yayinlama akislariyla iliskilidir. Bu sistemleri degistirme.

## Calisan Mevcut Ozellikler

- Ana sayfa, hakkimda, randevu, iletisim ve klinik surec sayfalari.
- Hastalik/konu sayfalari: depresyon, anksiyete, OKB, bipolar bozukluk, DEHB, panik bozukluk, fobiler, bagimliliklar, cinsel islev bozukluklari, travma, uyku ve stres vb.
- Test merkezi ve on degerlendirme testleri: PHQ-9, GAD-7, MDQ, ASRS, OKB, sosyal fobi.
- Blog listeleme ve blog detay sayfalari.
- Psikiyatride En Tuhaf Vakalar: veri dosyasindan okunan YouTube embedli video merkezi.
- Psikiyatri sozlugu: kartli ana sozluk ve secili terim detay sayfalari.
- PDF rehberler/kaynak merkezi: profesyonel PDF rehberler ve indirme linkleri.
- Sayfalarda kategoriye gore "Ilgili Testler / Onerilen Kitaplar / Ilgili Yazilar" bloklari.
- SEO: temiz URL, canonical, OG URL, breadcrumb, schema, sitemap ve eski URL redirectleri.

## Tasarim Dili ve Arayuz Kurallari

- Genel his: sakin, kurumsal, bilimsel, sicak ve mahremiyete saygili.
- Renkler: kirik beyaz/krem zemin, koyu yesil, teal, bakir/terracotta vurgu, PDF rehberlerde lacivert ve acik mavi.
- Basliklar genellikle serif karakterli, govde metinleri okunakli sans-serif yapidadir.
- Kartlar sade, hafif cizgili/golgeli, genellikle 8px civari radius ile kullanilir.
- UI yogunlugu konunun niteligine gore dengelenir; pazarlama dili ve asiri dekoratif gorunumden kacin.
- Mobil uyum zorunludur. Metinler tasmamali, butonlar ve kartlar dar ekranda kirilmamalidir.
- Stok gibi duran karmasik gorseller yerine siteyle uyumlu, sade ve tutarli gorseller kullan.

## Kesinlikle Bozulmamasi Gerekenler

- `admin/`, `admin_panel/`, `api_disabled/` ve sosyal medya/yayinlama akislari.
- Meta, Instagram, Facebook, LinkedIn, Threads ve publish API davranislari.
- `vercel.json` domain/redirect kurallari; mevcut ana standart `www.ozgurozbebit.com.tr`.
- Eski `.html` sayfalar ve bunlarin yeni temiz URL'lere 301 yonlendirmeleri.
- Test anchorlari: ornegin `#dehb-testi`, `#sosyal-fobi-testi`.
- Mevcut PDF dosya yollari ve rehber indirme linkleri.
- Canonical, sitemap, robots ve schema yapilari.

## Yeni Gelistirme Kurallari

- Once dosya yapisini analiz et, sonra kucuk ve guvenli degisiklik yap.
- Ilgili olmayan refactor yapma.
- Veri tekrarini azaltmak icin mumkunse merkezi veri dosyalarini kullan.
- Yeni public sayfa eklenirse canonical, OG URL, breadcrumb, schema ve sitemap kontrol edilmeli.
- Blog ve video eklerken mevcut kart/detay tasarimini koru.
- Randevu butonlari ve randevuya yonlendiren kisimlar, kullanici tekrar aktiflestir demeden agresif sekilde one cikarilmaz.
- Dosya yolu ile test yerine localhost kullan; `file://` temiz URL ve kok linklerde yaniltici sonuc verebilir.

## Test ve Dogrulama Komutlari

- Genel test: `npm test`
- JS sentaks kontrolu: `node --check script.js`
- Bosluk/format kontrolu: `git diff --check`
- Yerel onizleme: `python3 -m http.server 8124`
- Temel URL kontrolu: `curl -I http://127.0.0.1:8124/test-merkezi/`
- PDF uretimlerinden sonra ilgili PDF sayfalarini render edip gorsel olarak kontrol et.

## Git, Commit ve Deployment

- GitHub repo: `https://github.com/ozgurozbebit-1/ozgurozbebit-website`
- Ana calisma dali genellikle `main`.
- Kullanici istemedikce commit veya push yapma.
- Commit istenirse kucuk, anlamli ve tek amaca odakli commit olustur.
- Push sonrasi Vercel deployment tetiklenir; canli domain kontrolu gerekir.

## Bilinen Sorunlar ve Tamamlanmayan Isler

- `file://` ile acilan temiz URL'lerde dizin listesi, kirik link veya stilsiz gorunum olusabilir; bu lokal test yanilticisidir.
- Iletisim/randevu bilgileri tamamen netlesmeden bazi randevu alanlari pasif veya geri planda tutulmalidir.
- PDF rehberler uretildikce `pdf-rehberler/` merkezine elle ekleme gerekebilir.
- Siklikla yeni blog, video, test ve PDF icerigi ekleniyor; sitemap ve ic link kontrolleri unutulmamali.
- `tmp/pdfs/` ve render ciktilari buyuk olabilir; kullanici istemeden temizleme yapma.

## Guvenlik ve Kisisel Veri Kurallari

- Danisan/hasta verisi, ozel saglik bilgisi veya kimlik bilgisi repoya eklenmez.
- API anahtari, token, sifre ve Vercel environment secret bilgileri dosyalara yazilmaz.
- Test sonuclari tarayici icinde hesaplanir; sunucuya gonderilmemelidir.
- Acil durum metinleri net olmali; 112 ve en yakin acil servis yonlendirmesi korunmalidir.
- Tibbi icerikler bilgilendirme amaclidir; kesin tani/tedavi vaadi kullanma.

## Kullanici Calisma Tercihleri

- Kisa, net, uygulamaya donuk cevaplar ister.
- Onizlemeyi localhost uzerinden gormeyi tercih eder.
- Gorsel duzenlemelerde ekran goruntusu uzerinden hizli iterasyon yapar.
- Commit/push icin acik onay bekler; bazen ozellikle "commit-push yap" der.
- Mevcut tasarimi bozmadan, kucuk guvenli adimlarla ilerlemeyi tercih eder.
- Admin ve sosyal medya yayinlama sistemlerine dokunulmamasi onun icin kritik onemdedir.
