# PROJECT_STATUS.md

Son guncelleme: 2026-07-22

Bu dosya proje gunlugu degil, yeni bir Codex oturumu icin guncel devir teslim ozetidir.

## Tamamlanmis Bolumler

- Ana site yapisi, ortak tasarim sistemi ve temiz URL sayfalari calisir durumda.
- Hastalik/konu sayfalari, blog, test merkezi, psikiyatri sozlugu, video merkezi ve PDF rehber merkezi mevcut.
- Testler: depresyon, anksiyete, bipolar, dikkat eksikligi, OKB ve sosyal fobi on degerlendirmeleri hazir.
- "Psikiyatride En Tuhaf Vakalar" YouTube linklerinden embed ureten veri tabanli yapiyla calisiyor.
- Psikiyatri sozlugunde ana kart yapisi ve secili terimler icin detay sayfalari var.
- PDF rehber serisi uretilmis ve buyuk bolumu kaynak merkezine eklenmis durumda.
- SEO tarafinda www domain standardi, canonical, OG URL, schema, breadcrumb, sitemap ve robots yapisi kurulmus durumda.

## Devam Eden Isler

- Yeni PDF rehberler uretilmeye ve `pdf-rehberler/` merkezine eklenmeye devam ediyor.
- Yeni blog yazilari ve "Tuhaf Vakalar" videolari duzenli ekleniyor.
- Sozluk terim detaylari zamanla artirilabilir.
- Randevu akisi ve randevu butonlari tam isleyis netlesince tekrar aktiflestirilecek.

## Son Yapilan Onemli Degisiklikler

- Kaynak/PDF rehber merkezi genisletildi.
- Sosyal fobi testi diger testlerle uyumlu gorsel yapida duzenlendi ve dogrudan test anchor'i kontrol edildi.
- "Tuhaf Vakalar" bolumune yeni video sayfalari eklenmeye devam edildi.
- PDF rehberlerde seri numarasi, kapak ve sayfa ici tasarim duzenlemeleri yapildi.
- Proje icin bu devir teslim dosyalari hazirlaniyor: `AGENTS.md` ve `PROJECT_STATUS.md`.

## Bilinen Hatalar ve Dikkat Edilecekler

- `file://` ile acilan sayfalarda temiz URL'ler ve kok linkler yaniltici davranabilir; lokal test icin localhost kullan.
- Iletisim/randevu sayfalarinda gercek klinik bilgileri canliya alinmadan once kullanici tarafindan teyit edilmeli.
- PDF rehber eklendiginde hem PDF dosyasi hem rehber detay/kart linkleri birlikte kontrol edilmeli.
- Admin, API ve sosyal medya yayinlama altyapisi public siteden ayridir; gerekmedikce dokunma.

## Siradaki Mantikli Gorevler

- Son uretilen PDF rehberlerin kaynak merkezindeki kart ve indirme linklerini tek tek kontrol etmek.
- Yeni eklenen video detay sayfalarinda YouTube embed, onceki/sonraki link ve sitemap kayitlarini kontrol etmek.
- Test merkezi ve test sonuc ekranlarinda kirik link taramasi yapmak.
- Sozlukte ikinci dalga terim detay sayfalari icin planli ilerlemek.
- Canli sitede Vercel deployment sonrasi ana sayfa, test merkezi, kaynak merkezi, video merkezi ve iletisim sayfasini kontrol etmek.

## Deployment ve Git Durumu

- Repo: `https://github.com/ozgurozbebit-1/ozgurozbebit-website`
- Ana domain standardi: `https://www.ozgurozbebit.com.tr`
- Deployment Vercel uzerinden GitHub push sonrasi yapilir.
- Kullanici acikca istemeden commit veya push yapilmaz.
- Bu teslim icin hedeflenen degisiklik yalnizca iki kok dokumandir: `AGENTS.md` ve `PROJECT_STATUS.md`.

## En Son Basarili Test Sonucu

- Bu devir teslim hazirlanirken proje yapisi ve kritik dosyalar incelendi.
- `git diff --check -- AGENTS.md PROJECT_STATUS.md` calistirildi: temiz.
