const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");
const navDropdowns = document.querySelectorAll("[data-nav-dropdown]");
const year = document.querySelector("[data-year]");
const chatbox = document.querySelector("[data-chatbox]");
const chatToggle = document.querySelector("[data-chat-toggle]");
const chatClose = document.querySelector("[data-chat-close]");
const phqRoot = document.querySelector("[data-phq]");
const mdqRoot = document.querySelector("[data-mdq]");
const gadRoot = document.querySelector("[data-gad]");
const ocdRoot = document.querySelector("[data-ocd]");
const asrsRoot = document.querySelector("[data-asrs]");
const contactDataElement = document.querySelector("#site-contact-data");

const contactOverrides = {
  email: "info@ozgurozbebit.com.tr",
  emailHref: "mailto:info@ozgurozbebit.com.tr",
  emailAppointmentHref: "mailto:info@ozgurozbebit.com.tr?subject=Randevu%20Talebi",
  instagram: "https://www.instagram.com/drozgurozbebit",
  linkedin: "https://www.linkedin.com/in/drozgurozbebit",
  facebook: "https://www.facebook.com/drozgurozbebit/",
};

const resourceHubContent = {
  tests: {
    depresyon: {
      title: "Depresyon Testi",
      text: "Ruh halinizi değerlendirmek için kısa bir tarama testi.",
      href: "/depresyon-testi/",
      action: "Teste Başla →",
      icon: "🧠",
    },
    anksiyete: {
      title: "Anksiyete Testi",
      text: "Kaygı belirtilerini değerlendirmek için kullanılabilir.",
      href: "/anksiyete-testi/",
      action: "Teste Başla →",
      icon: "😟",
    },
    sosyalFobi: {
      title: "Sosyal Fobi Taraması",
      text: "Sosyal ortamlardaki kaygı ve kaçınmayı ön değerlendirme amacıyla ele alır.",
      href: "/sosyal-fobi-testi/",
      action: "Teste Başla →",
      icon: "👥",
    },
    okb: {
      title: "OKB Belirti Taraması",
      text: "Takıntı ve tekrar eden davranışları ön değerlendirme amacıyla inceler.",
      href: "/okb-testi/",
      action: "Teste Başla →",
      icon: "🔄",
    },
    dehb: {
      title: "Dikkat Eksikliği Testi",
      text: "Dikkat, organizasyon ve hareketlilik belirtileri için kısa ön değerlendirme.",
      href: "/dikkat-eksikligi-testi/#dehb-testi",
      action: "Teste Başla →",
      icon: "🎯",
    },
    bipolar: {
      title: "Bipolar Tarama Testi",
      text: "Duygudurum dalgalanmalarını MDQ ile ön değerlendirme amacıyla ele alır.",
      href: "/bipolar-tarama-testi/",
      action: "Teste Başla →",
      icon: "⚡",
    },
    uykuStres: {
      title: "Uyku ve Stres",
      text: "Stres ve uyku döngüsünü anlamaya yardımcı bir içerik.",
      href: "/uyku-ve-stres/",
      action: "İçeriğe Git →",
      icon: "☁️",
    },
  },
  books: {
    ruhHalininKisaTarihi: {
      title: "Ruh Halinin Kısa Tarihi",
      author: "David D. Burns",
      text: "Depresif düşünce kalıplarını anlaşılır bir dille ele alan klasik bir kaynak.",
      href: "https://www.google.com/search?q=Ruh+Halinin+K%C4%B1sa+Tarihi+David+D.+Burns",
    },
    insaninAnlamArayisi: {
      title: "İnsanın Anlam Arayışı",
      author: "Viktor E. Frankl",
      text: "Zor koşullarda yaşamın anlamını arama üzerine güçlü ve sade bir metin.",
      href: "https://www.google.com/search?q=%C4%B0nsan%C4%B1n+Anlam+Aray%C4%B1%C5%9F%C4%B1+Viktor+E.+Frankl",
    },
    anksiyeteFobi: {
      title: "Anksiyete ve Fobi Çalışma Kitabı",
      author: "Edmund J. Bourne",
      text: "Kaygı belirtileri ve baş etme becerileri için yapılandırılmış bir kaynak.",
      href: "https://www.google.com/search?q=Anksiyete+ve+Fobi+%C3%87al%C4%B1%C5%9Fma+Kitab%C4%B1+Edmund+Bourne",
    },
    iyiHissetmek: {
      title: "İyi Hissetmek",
      author: "David D. Burns",
      text: "Düşünce, duygu ve davranış ilişkisini sade örneklerle anlatır.",
      href: "https://www.google.com/search?q=%C4%B0yi+Hissetmek+David+D.+Burns",
    },
    dusunceVeDuygu: {
      title: "Düşünce ve Duygu",
      author: "Matthew McKay, Martha Davis, Patrick Fanning",
      text: "Duygu düzenleme ve düşünce kalıplarını anlamaya yardımcı pratik bir kaynak.",
      href: "https://www.google.com/search?q=D%C3%BC%C5%9F%C3%BCnce+ve+Duygu+Matthew+McKay",
    },
    takintilarlaBasaCikma: {
      title: "Takıntılarla Başa Çıkma",
      author: "Lee Baer",
      text: "OKB belirtilerini ve takıntı döngüsünü anlamaya yardımcı bir kaynak.",
      href: "https://www.google.com/search?q=Tak%C4%B1nt%C4%B1larla+Ba%C5%9Fa+%C3%87%C4%B1kma+Lee+Baer",
    },
    beyinKilitlenince: {
      title: "Beyin Kilitlenince",
      author: "Jeffrey M. Schwartz",
      text: "OKB döngüsü ve davranışsal değişim üzerine bilgilendirici bir metin.",
      href: "https://www.google.com/search?q=Beyin+Kilitlenince+Jeffrey+Schwartz",
    },
    daginikZihinler: {
      title: "Dağınık Zihinler",
      author: "Gabor Maté",
      text: "Dikkat sorunlarını gelişimsel ve duygusal yönleriyle ele alır.",
      href: "https://www.google.com/search?q=Da%C4%9F%C4%B1n%C4%B1k+Zihinler+Gabor+Mate",
    },
    dikkatDaginikligiIleYasamak: {
      title: "Dikkat Dağınıklığı ile Yaşamak",
      author: "Edward M. Hallowell, John J. Ratey",
      text: "Erişkin DEHB belirtilerini klinik örneklerle anlatan temel kaynaklardan biri.",
      href: "https://www.google.com/search?q=Dikkat+Da%C4%9F%C4%B1n%C4%B1kl%C4%B1%C4%9F%C4%B1+ile+Ya%C5%9Famak+Hallowell+Ratey",
    },
    bipolarGuide: {
      title: "Bipolar Bozukluk İçin Rehber",
      author: "David J. Miklowitz",
      text: "Duygudurum atakları, takip ve aile desteği üzerine pratik bir kaynak.",
      href: "https://www.google.com/search?q=Bipolar+Bozukluk+%C4%B0%C3%A7in+Rehber+David+Miklowitz",
    },
    bipolarElKitabi: {
      title: "Bipolar Bozukluğu Anlamak",
      author: "Francis Mark Mondimore",
      text: "Bipolar bozukluğun dönemleri, tedavisi ve izlemi üzerine anlaşılır bir kaynak.",
      href: "https://www.google.com/search?q=Bipolar+Bozuklu%C4%9Fu+Anlamak+Francis+Mark+Mondimore",
    },
    nedenUyuruz: {
      title: "Niçin Uyuruz?",
      author: "Matthew Walker",
      text: "Uykunun beyin, duygu durumu ve gündelik işlevsellik üzerindeki rolünü anlatır.",
      href: "https://www.google.com/search?q=Ni%C3%A7in+Uyuruz+Matthew+Walker",
    },
    bedenKayitTutar: {
      title: "Beden Kayıt Tutar",
      author: "Bessel van der Kolk",
      text: "Travmanın beden, zihin ve ilişkiler üzerindeki etkisini ele alır.",
      href: "https://www.google.com/search?q=Beden+Kay%C4%B1t+Tutar+Bessel+van+der+Kolk",
    },
    travmaVeIyilesme: {
      title: "Travma ve İyileşme",
      author: "Judith Herman",
      text: "Travmatik yaşantıların ruhsal etkileri ve iyileşme süreci üzerine temel bir kaynak.",
      href: "https://www.google.com/search?q=Travma+ve+%C4%B0yile%C5%9Fme+Judith+Herman",
    },
    bagimlilikKitabi: {
      title: "Bağımlılık Psikolojisi",
      author: "Gabor Maté",
      text: "Bağımlılığın acı, bağlanma ve baş etme yollarıyla ilişkisini anlatır.",
      href: "https://www.google.com/search?q=Ba%C4%9F%C4%B1ml%C4%B1l%C4%B1k+Psikolojisi+Gabor+Mate",
    },
    bagimlilikBeyni: {
      title: "Bağımlı Beyin",
      author: "Marc Lewis",
      text: "Bağımlılık döngüsünü öğrenme, ödül sistemi ve beyin plastisitesi üzerinden ele alır.",
      href: "https://www.google.com/search?q=Ba%C4%9F%C4%B1ml%C4%B1+Beyin+Marc+Lewis",
    },
    iliskiKitabi: {
      title: "Bağlanma",
      author: "Amir Levine, Rachel Heller",
      text: "Yakın ilişkilerde bağlanma örüntülerini anlaşılır biçimde açıklar.",
      href: "https://www.google.com/search?q=Ba%C4%9Flanma+Amir+Levine+Rachel+Heller",
    },
    aileKitabi: {
      title: "Çocuğunuza Kulak Verin",
      author: "Aletha Solter",
      text: "Ebeveynlikte duygusal ihtiyaçları ve iletişimi anlamaya yardımcı olur.",
      href: "https://www.google.com/search?q=%C3%87ocu%C4%9Funuza+Kulak+Verin+Aletha+Solter",
    },
  },
  articles: {
    tukenmislik: {
      title: "Tükenmek: Her Şeye Yetişmeye Çalışırken",
      text: "Tükenmişlik, sürekli güçlü görünme zorunluluğu ve kendine alan açabilmek üzerine.",
      href: "/blog/tukenmek-her-seye-yetismeye-calisirken/",
      image: "/assets/tukenmislik.jpg",
      action: "Yazıyı Oku →",
    },
    travmaSessiz: {
      title: "Görünmez Bir Yükle Yürümek",
      text: "Travmanın gündelik yaşama sessizce sızan etkileri ve kendine şefkat üzerine.",
      href: "/blog/gorunmez-bir-yukle-yurumek/",
      image: "/assets/travmanin-sessiz-dili.jpg",
      action: "Yazıyı Oku →",
    },
    anksiyetePage: {
      title: "Anksiyete Bozuklukları",
      text: "Kaygı belirtileri, bedensel etkiler, takip ve tedavi yaklaşımı hakkında bilgi alın.",
      href: "/anksiyete/",
      image: "/assets/anxiety-hero.webp",
      action: "Sayfaya Git →",
    },
    titusAnksiyete: {
      title: "Titus'tan Tinnitus'a",
      text: "Bir tünelde yükselen kaygı, beden duyumları ve anlam arayışı üzerine bir yazı.",
      href: "/blog/titustan-tinnitusa-bir-tunelde-yok-olan-anksiyete/",
      image: "/assets/titus-tinnitus-anksiyete.jpg",
      action: "Yazıyı Oku →",
    },
    okbPage: {
      title: "Obsesif Kompulsif Bozukluk",
      text: "Zihni meşgul eden düşünceler ve tekrar eden davranışlar hakkında bilgi alın.",
      href: "/okb/",
      image: "/assets/ocd-hero.webp",
      action: "Sayfaya Git →",
    },
    bilisselModel: {
      title: "OKB'de Bilişsel Model",
      text: "Düşüncenin kendisi değil, düşünceye verilen anlamın rolü üzerine.",
      href: "/okb-bilissel-model/",
      image: "/assets/mini-ocd-checking.jpg",
      action: "Yazıyı Oku →",
    },
    psikodinamikModel: {
      title: "OKB'de Psikodinamik Model",
      text: "Belirtinin arkasındaki içsel anlam ve kontrol ihtiyacı üzerine.",
      href: "/okb-psikodinamik-model/",
      image: "/assets/ocd-hero.webp",
      action: "Yazıyı Oku →",
    },
    bipolarPage: {
      title: "Bipolar Bozukluk",
      text: "Duygudurum dalgalanmaları, takip ve tedavi süreci hakkında bilgi alın.",
      href: "/bipolar-bozukluk/",
      image: "/assets/bipolar-hero.webp",
      action: "Sayfaya Git →",
    },
    dehbPage: {
      title: "DEHB ve Dikkat Sorunları",
      text: "Dikkat, organizasyon ve işlevsellik sorunlarını klinik açıdan ele alır.",
      href: "/dehb/",
      image: "/assets/attention-functionality-hero.webp",
      action: "Sayfaya Git →",
    },
    uykuStresPage: {
      title: "Uyku ve Stres",
      text: "Stres ile uyku kalitesi arasındaki çift yönlü ilişkiyi açıklar.",
      href: "/uyku-ve-stres/",
      image: "/assets/sleep-stress-hero.webp",
      action: "Sayfaya Git →",
    },
    panikPage: {
      title: "Panik Bozukluk",
      text: "Panik atak, bedensel kaygı belirtileri ve değerlendirme süreci hakkında bilgi alın.",
      href: "/panik-bozukluk/",
      image: "/assets/panic-disorder-hero.png",
      action: "Sayfaya Git →",
    },
    bagimlilikBlog: {
      title: "Patolojik Kumar Bağımlılığı",
      text: "Kayıpları geri alma yanılgısı ve bağımlılık döngüsü üzerine bilgilendirici yazı.",
      href: "/blog/patolojik-kumar-bagimliligi-bir-sonraki-el-yanilgisi/",
      image: "/assets/patolojik-kumar-bagimliligi.jpg",
      action: "Yazıyı Oku →",
    },
    psikofarmakoloji: {
      title: "Psikofarmakolojide Uyum",
      text: "Tedaviye uyum, ilaç reddi ve tedavi direnci üzerine bir yazı.",
      href: "/blog/psikofarmakolojide-uyum-ve-tedavi-direnci/",
      image: "/assets/psikofarmakoloji-uyum-direnc.jpg",
      action: "Yazıyı Oku →",
    },
    cinselBlog: {
      title: "Cinsel İşlev Bozuklukları",
      text: "Cinsel işlev sorunlarına eşlik eden psikolojik zorlanmalar hakkında.",
      href: "/blog/cinsel-islev-bozukluklari-psikolojik-eslikciler/",
      image: "/assets/cinsel-islev-bozukluklari.jpg",
      action: "Yazıyı Oku →",
    },
    ihtiyaclar: {
      title: "Hepimizin Bir Şeylere İhtiyacı Var",
      text: "Duygusal ihtiyaçları fark etmek, dile getirmek ve önemsemek üzerine.",
      href: "/blog/hepimizin-bir-seylere-ihtiyaci-var/",
      image: "/assets/hepimizin-bir-seylere-ihtiyaci-var.jpg",
      action: "Yazıyı Oku →",
    },
  },
  categories: {
    depresyon: {
      tests: ["depresyon", "anksiyete", "uykuStres"],
      books: ["ruhHalininKisaTarihi", "insaninAnlamArayisi", "iyiHissetmek"],
      articles: ["tukenmislik", "travmaSessiz", "anksiyetePage"],
    },
    anksiyete: {
      tests: ["anksiyete", "sosyalFobi", "depresyon"],
      books: ["anksiyeteFobi", "iyiHissetmek", "dusunceVeDuygu"],
      articles: ["titusAnksiyete", "panikPage", "uykuStresPage"],
    },
    okb: {
      tests: ["okb", "anksiyete", "depresyon"],
      books: ["takintilarlaBasaCikma", "beyinKilitlenince", "anksiyeteFobi"],
      articles: ["bilisselModel", "psikodinamikModel", "anksiyetePage"],
    },
    dehb: {
      tests: ["dehb", "anksiyete", "depresyon"],
      books: ["daginikZihinler", "dikkatDaginikligiIleYasamak", "dusunceVeDuygu"],
      articles: ["uykuStresPage", "tukenmislik", "anksiyetePage"],
    },
    bipolar: {
      tests: ["bipolar", "depresyon", "anksiyete"],
      books: ["bipolarGuide", "bipolarElKitabi", "insaninAnlamArayisi"],
      articles: ["psikofarmakoloji", "uykuStresPage", "dehbPage"],
    },
    uyku: {
      tests: ["anksiyete", "depresyon", "uykuStres"],
      books: ["nedenUyuruz", "insaninAnlamArayisi", "iyiHissetmek"],
      articles: ["tukenmislik", "anksiyetePage", "depresyon"],
    },
    panik: {
      tests: ["anksiyete", "sosyalFobi", "depresyon"],
      books: ["anksiyeteFobi", "iyiHissetmek", "dusunceVeDuygu"],
      articles: ["titusAnksiyete", "anksiyetePage", "uykuStresPage"],
    },
    travma: {
      tests: ["anksiyete", "depresyon", "uykuStres"],
      books: ["bedenKayitTutar", "travmaVeIyilesme", "insaninAnlamArayisi"],
      articles: ["travmaSessiz", "ihtiyaclar", "uykuStresPage"],
    },
    bagimlilik: {
      tests: ["depresyon", "anksiyete", "uykuStres"],
      books: ["bagimlilikKitabi", "bagimlilikBeyni", "insaninAnlamArayisi"],
      articles: ["bagimlilikBlog", "psikofarmakoloji", "ihtiyaclar"],
    },
    cinsel: {
      tests: ["depresyon", "anksiyete", "sosyalFobi"],
      books: ["iliskiKitabi", "dusunceVeDuygu", "insaninAnlamArayisi"],
      articles: ["cinselBlog", "ihtiyaclar", "sadakat"],
    },
    fobi: {
      tests: ["sosyalFobi", "anksiyete", "depresyon"],
      books: ["anksiyeteFobi", "iyiHissetmek", "dusunceVeDuygu"],
      articles: ["anksiyetePage", "titusAnksiyete", "panikPage"],
    },
    yeme: {
      tests: ["depresyon", "anksiyete", "uykuStres"],
      books: ["insaninAnlamArayisi", "iyiHissetmek", "dusunceVeDuygu"],
      articles: ["ihtiyaclar", "tukenmislik", "anksiyetePage"],
    },
    psikotik: {
      tests: ["bipolar", "depresyon", "anksiyete"],
      books: ["insaninAnlamArayisi", "psikofarmakoloji", "dusunceVeDuygu"],
      articles: ["bipolarPage", "psikofarmakoloji", "ihtiyaclar"],
    },
    ilac: {
      tests: ["depresyon", "anksiyete", "bipolar"],
      books: ["psikofarmakoloji", "iyiHissetmek", "dusunceVeDuygu"],
      articles: ["psikofarmakoloji", "bipolarPage", "dehbPage"],
    },
    aile: {
      tests: ["depresyon", "anksiyete", "uykuStres"],
      books: ["aileKitabi", "iliskiKitabi", "insaninAnlamArayisi"],
      articles: ["ihtiyaclar", "sadakat", "tukenmislik"],
    },
    surec: {
      tests: ["depresyon", "anksiyete", "dehb"],
      books: ["insaninAnlamArayisi", "iyiHissetmek", "dusunceVeDuygu"],
      articles: ["psikofarmakoloji", "ihtiyaclar", "uykuStresPage"],
    },
  },
};

resourceHubContent.articles.sadakat = {
  title: "Sadakat ve Güven",
  text: "İlişkilerde güven, sınır ve emek üzerine bir blog yazısı.",
  href: "/blog/sadakat-birbirine-guvenle-kalabilmek/",
  image: "/assets/sadakat-guvenle-kalabilmek.jpg",
  action: "Yazıyı Oku →",
};

resourceHubContent.articles.depresyon = {
  title: "Depresyon ve Duygudurum",
  text: "Depresyon belirtileri, değerlendirme ve tedavi süreci hakkında bilgi alın.",
  href: "/depresyon/",
  image: "/assets/depression-mood-hero.webp",
  action: "Sayfaya Git →",
};

resourceHubContent.books.psikofarmakoloji = {
  title: "Psikofarmakoloji Notları",
  author: "Tedaviye uyum ve takip",
  text: "İlaç tedavisi, takip ve tedaviye uyum konusunda destekleyici okuma.",
  href: "/blog/psikofarmakolojide-uyum-ve-tedavi-direnci/",
};

const createResourceCard = (item, type) => {
  const card = document.createElement("a");
  card.className = type === "book" ? "resource-card resource-book-card" : "resource-card";
  card.href = item.href;

  if (/^https?:\/\//.test(item.href)) {
    card.target = "_blank";
    card.rel = "noopener";
  }

  if (item.image) {
    const image = document.createElement("img");
    image.className = type === "book" ? "resource-card-media resource-book-cover-image" : "resource-card-media";
    image.src = item.image;
    image.loading = "lazy";
    image.decoding = "async";
    image.alt = `${item.title} görseli`;
    if (type === "book") {
      image.addEventListener("error", () => {
        const fallback = document.createElement("span");
        fallback.className = "resource-card-media resource-book-cover resource-book-cover-green";
        fallback.setAttribute("aria-hidden", "true");
        fallback.textContent = item.coverLabel || item.title;
        image.replaceWith(fallback);
      }, { once: true });
    }
    card.appendChild(image);
  } else {
    const media = document.createElement("span");
    media.className = type === "book" ? "resource-card-media resource-book-cover resource-book-cover-green" : "resource-card-media resource-card-icon";
    media.setAttribute("aria-hidden", "true");
    media.textContent = type === "book" ? item.coverLabel || item.title : item.icon || "•";
    card.appendChild(media);
  }

  const body = document.createElement("span");
  body.className = "resource-card-body";

  const title = document.createElement("strong");
  title.textContent = item.title;
  body.appendChild(title);

  if (item.author) {
    const author = document.createElement("span");
    author.className = "resource-book-author";
    author.textContent = item.author;
    body.appendChild(author);
  }

  const text = document.createElement("small");
  text.textContent = item.text;
  body.appendChild(text);

  const link = document.createElement("span");
  link.className = "resource-link";
  link.textContent = item.action || (type === "book" ? "Kitap Hakkında Bilgi →" : "Detaya Git →");
  body.appendChild(link);

  card.appendChild(body);
  return card;
};

const renderResourceHubs = () => {
  document.querySelectorAll("[data-resource-hub]").forEach((mount) => {
    const categoryKey = mount.dataset.resourceHub;
    const category = resourceHubContent.categories[categoryKey];

    if (!category) {
      return;
    }

    const section = document.createElement("section");
    section.className = "depression-resource-hub";
    section.setAttribute("aria-label", "İlgili kaynaklar ve değerlendirmeler");

    const intro = document.createElement("div");
    intro.className = "resource-hub-intro";
    intro.innerHTML = '<p class="eyebrow">İlgili kaynaklar</p><h2>İlgili Kaynaklar ve Değerlendirmeler</h2><p>Bu başlıkla ilişkili testlere, destekleyici okuma önerilerine ve site içindeki benzer içeriklere buradan ulaşabilirsiniz.</p>';
    section.appendChild(intro);

    const columns = document.createElement("div");
    columns.className = "resource-columns";

    const columnDefinitions = [
      { key: "tests", title: "İLGİLİ TESTLER", icon: "✓", type: "test", source: resourceHubContent.tests },
      { key: "books", title: "ÖNERİLEN KİTAPLAR", icon: "▣", type: "book", source: resourceHubContent.books },
      { key: "articles", title: "İLGİLİ YAZILAR", icon: "□", type: "article", source: resourceHubContent.articles },
    ];

    columnDefinitions.forEach((definition) => {
      const column = document.createElement("section");
      column.className = "resource-column";
      column.setAttribute("aria-label", definition.title);

      const heading = document.createElement("div");
      heading.className = "resource-column-heading";

      const icon = document.createElement("span");
      icon.className = "resource-column-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = definition.icon;

      const title = document.createElement("h3");
      title.textContent = definition.title;

      heading.append(icon, title);
      column.appendChild(heading);

      (category[definition.key] || []).forEach((itemKey) => {
        const item = definition.source[itemKey];
        if (item) {
          column.appendChild(createResourceCard(item, definition.type));
        }
      });

      columns.appendChild(column);
    });

    const disclaimer = document.createElement("p");
    disclaimer.className = "resource-disclaimer";
    disclaimer.textContent = "Bu içerikler yalnızca bilgilendirme ve ön değerlendirme amacı taşır. Kişisel değerlendirme ve tedavi planlaması için psikiyatri uzmanı görüşü alınması önemlidir.";

    section.append(columns, disclaimer);
    mount.replaceWith(section);
  });
};

const showUnderConstruction = (event) => {
  event.preventDefault();
  window.alert("Yapım aşamasında.");
};

const temporaryAppointmentCtasVisible = false;

const hideTemporaryAppointmentButtons = () => {
  if (temporaryAppointmentCtasVisible) {
    return;
  }

  document.querySelectorAll("a.button, a.topic-card").forEach((button) => {
    const label = button.textContent.replace(/\s+/g, " ").trim();
    const href = button.getAttribute("href") || "";
    const isAppointmentButton = label.includes("Randevu Al") || label.includes("Randevu Talebi");
    const isAppointmentCard = button.classList.contains("topic-card") && href.includes("/randevu/");

    if (isAppointmentButton || isAppointmentCard) {
      button.classList.add("appointment-cta-temporarily-hidden");
      button.setAttribute("aria-hidden", "true");
      button.setAttribute("tabindex", "-1");
    }
  });
};

renderResourceHubs();
hideTemporaryAppointmentButtons();

const applyChatContactOverrides = () => {
  document.querySelectorAll('.chat-actions [data-contact-href="phone"]').forEach((element) => {
    element.setAttribute("href", "#");
    element.addEventListener("click", showUnderConstruction);
  });

  document.querySelectorAll('.chat-actions [data-contact-href="whatsapp"]').forEach((element) => {
    element.hidden = false;
    element.setAttribute("href", "#");
    element.addEventListener("click", showUnderConstruction);
  });

  document.querySelectorAll('[data-contact-href="email"], [data-contact-href="emailAppointment"]').forEach((element) => {
    const isAppointment = element.dataset.contactHref === "emailAppointment";
    element.setAttribute("href", isAppointment ? contactOverrides.emailAppointmentHref : contactOverrides.emailHref);
  });

  document.querySelectorAll('[data-contact-text="email"]').forEach((element) => {
    element.textContent = contactOverrides.email;
  });

  document.querySelectorAll('.chat-actions [data-contact-href="instagram"]').forEach((element) => {
    element.hidden = false;
    element.setAttribute("href", contactOverrides.instagram);
  });

  document.querySelectorAll('.chat-actions [data-contact-href="linkedin"]').forEach((element) => {
    element.hidden = false;
    element.setAttribute("href", contactOverrides.linkedin);
  });

  document.querySelectorAll(".chat-actions").forEach((actions) => {
    if (!actions.querySelector('[data-contact-href="facebook"]')) {
      const facebook = document.createElement("a");
      facebook.dataset.contactHref = "facebook";
      facebook.href = contactOverrides.facebook;
      facebook.target = "_blank";
      facebook.rel = "noreferrer";
      facebook.textContent = "Facebook";
      const contactLink = [...actions.querySelectorAll("a")].find((link) => link.textContent.trim() === "İletişim Bilgileri");
      actions.insertBefore(facebook, contactLink || null);
    }
  });

  document.querySelectorAll('.chat-actions a[href="/iletisim/"]').forEach((element) => {
    element.setAttribute("href", "#");
    element.addEventListener("click", showUnderConstruction);
  });
};

if (window.location.protocol === "file:") {
  const siteScript = Array.from(document.scripts).find((script) => /(?:^|\/)script\.js$/.test(script.src));
  if (siteScript) {
    const localBlogUrl = new URL("blog/index.html", siteScript.src).href;
    document.querySelectorAll("[data-nav] a").forEach((link) => {
      if (link.textContent.trim() === "Blog") link.href = localBlogUrl;
    });
  }
}

const getSitePath = (path) => {
  if (window.location.protocol !== "file:") return path;
  const siteScript = Array.from(document.scripts).find((script) => /(?:^|\/)script\.js$/.test(script.src));
  return siteScript ? new URL(path.replace(/^\//, ""), siteScript.src).href : path;
};

const ensureGlossaryNavLink = () => {
  document.querySelectorAll("[data-nav]").forEach((menu) => {
    const existingGlossary = Array.from(menu.querySelectorAll("a")).find((link) => link.getAttribute("href")?.includes("psikiyatri-sozlugu"));
    if (existingGlossary) {
      existingGlossary.href = getSitePath("/psikiyatri-sozlugu/");
      return;
    }

    const link = document.createElement("a");
    link.href = getSitePath("/psikiyatri-sozlugu/");
    link.textContent = "Sözlük";

    const blogLink = Array.from(menu.querySelectorAll("a")).find((item) => item.textContent.trim() === "Blog");
    if (blogLink) {
      blogLink.insertAdjacentElement("afterend", link);
    } else {
      menu.appendChild(link);
    }
  });
};

ensureGlossaryNavLink();

if (contactDataElement) {
  try {
    const contact = JSON.parse(contactDataElement.textContent);
    const hrefs = {
      phone: contact.phoneHref,
      whatsapp: contact.whatsappHref,
      email: contact.emailHref,
      emailAppointment: contact.emailAppointmentHref,
      instagram: contact.instagram,
      linkedin: contact.linkedin,
    };
    const texts = {
      phone: contact.phone,
      whatsapp: contact.whatsapp,
      email: contact.email,
      address: contact.address,
    };

    Object.entries(hrefs).forEach(([key, href]) => {
      document.querySelectorAll(`[data-contact-href="${key}"]`).forEach((element) => {
        if (href) element.setAttribute("href", href);
      });
    });

    Object.entries(texts).forEach(([key, text]) => {
      document.querySelectorAll(`[data-contact-text="${key}"]`).forEach((element) => {
        element.textContent = text;
      });
    });

    ["whatsapp", "instagram", "linkedin"].forEach((key) => {
      document.querySelectorAll(`[data-contact-visible="${key}"]`).forEach((element) => {
        element.hidden = !hrefs[key];
      });
    });
  } catch (error) {
    console.error("İletişim bilgileri okunamadı.", error);
  }
}

applyChatContactOverrides();

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

year.textContent = new Date().getFullYear();
syncHeader();

window.addEventListener("scroll", syncHeader, { passive: true });

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Menüyü kapat" : "Menüyü aç");
  if (!isOpen) {
    navDropdowns.forEach((dropdown) => {
      dropdown.classList.remove("is-open");
      dropdown.querySelector("[data-nav-dropdown-toggle]")?.setAttribute("aria-expanded", "false");
    });
  }
});

navDropdowns.forEach((dropdown) => {
  const dropdownToggle = dropdown.querySelector("[data-nav-dropdown-toggle]");
  dropdownToggle?.addEventListener("click", () => {
    const isOpen = dropdown.classList.toggle("is-open");
    dropdownToggle.setAttribute("aria-expanded", String(isOpen));
  });
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") return;
  nav.classList.remove("is-open");
  header.classList.remove("is-open");
  navDropdowns.forEach((dropdown) => {
    dropdown.classList.remove("is-open");
    dropdown.querySelector("[data-nav-dropdown-toggle]")?.setAttribute("aria-expanded", "false");
  });
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Menüyü aç");
});

if (chatbox && chatToggle && chatClose) {
  const setChatOpen = (isOpen) => {
    chatbox.classList.toggle("is-open", isOpen);
    chatToggle.setAttribute("aria-expanded", String(isOpen));
    chatToggle.setAttribute("aria-label", isOpen ? "İletişim kutusunu kapat" : "İletişim kutusunu aç");
  };

  chatToggle.addEventListener("click", () => {
    setChatOpen(!chatbox.classList.contains("is-open"));
  });

  chatClose.addEventListener("click", () => setChatOpen(false));
}

if (phqRoot) {
  const questions = [
    "Bir şeylere karşı ilgi veya zevk kaybı",
    "Kendini çökkün, depresif veya umutsuz hissetme",
    "Uykuya dalmakta güçlük, uykuyu sürdürmede zorlanma veya çok fazla uyuma",
    "Yorgun hissetme veya enerjinin az olması",
    "İştahsızlık veya aşırı yeme",
    "Kendini kötü hissetme, başarısız ya da kendini/aileni hayal kırıklığına uğratmış gibi hissetme",
    "Gazete okumak veya televizyon izlemek gibi işlere odaklanmakta güçlük",
    "Başkalarının fark edebileceği kadar yavaş hareket etme/konuşma ya da huzursuz/kıpır kıpır olma",
    "Ölüm düşünceleri veya kendine zarar verme düşünceleri",
  ];
  const options = [
    { value: 0, label: "Hiç" },
    { value: 1, label: "Birkaç gün" },
    { value: 2, label: "Günlerin yarısından fazlasında" },
    { value: 3, label: "Hemen hemen her gün" },
  ];
  const questionsWrap = phqRoot.querySelector("[data-phq-questions]");
  const form = phqRoot.querySelector("[data-phq-form]");
  const scoreEl = phqRoot.querySelector("[data-phq-score]");
  const levelEl = phqRoot.querySelector("[data-phq-level]");
  const progressEl = phqRoot.querySelector("[data-phq-progress]");
  const alertEl = phqRoot.querySelector("[data-phq-alert]");

  const getLevel = (score) => {
    if (score <= 4) return "Minimal düzey";
    if (score <= 9) return "Hafif düzey";
    if (score <= 14) return "Orta düzey";
    if (score <= 19) return "Orta-ağır düzey";
    return "Ağır düzey";
  };

  questions.forEach((question, index) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "phq-question";

    const legend = document.createElement("legend");
    legend.textContent = `${index + 1}. ${question}`;
    fieldset.appendChild(legend);

    const optionWrap = document.createElement("div");
    optionWrap.className = "phq-options";

    options.forEach((option) => {
      const label = document.createElement("label");
      label.className = "phq-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `phq-${index}`;
      input.value = String(option.value);

      const text = document.createElement("span");
      text.textContent = `${option.value} = ${option.label}`;

      label.append(input, text);
      optionWrap.appendChild(label);
    });

    fieldset.appendChild(optionWrap);
    questionsWrap.appendChild(fieldset);
  });

  form.addEventListener("change", () => {
    const selected = [...form.querySelectorAll("input:checked")];
    const total = selected.reduce((sum, input) => sum + Number(input.value), 0);
    const ninthAnswer = form.querySelector('input[name="phq-8"]:checked');

    scoreEl.textContent = String(total);
    levelEl.textContent = getLevel(total);
    progressEl.textContent = `9 sorudan ${selected.length} tanesi yanıtlandı.`;
    alertEl.hidden = !(ninthAnswer && Number(ninthAnswer.value) > 0);
  });
}

if (mdqRoot) {
  const mdqQuestions = [
    "Kendinizi normalden çok daha iyi, enerjik veya taşkın hissettiğiniz dönemler oldu mu?",
    "Normalden daha az uyuduğunuz halde kendinizi dinlenmiş hissettiğiniz dönemler oldu mu?",
    "Her zamankinden daha konuşkan olduğunuz dönemler oldu mu?",
    "Düşüncelerinizin çok hızlı aktığını hissettiğiniz dönemler oldu mu?",
    "Dikkatinizin kolayca dağıldığı dönemler oldu mu?",
    "Aynı anda birden fazla işe başladığınız dönemler oldu mu?",
    "Normalde yapmayacağınız kadar riskli davranışlar yaptığınız dönemler oldu mu?",
    "Kendinize olan güveninizin belirgin şekilde arttığı dönemler oldu mu?",
    "Sosyal olarak daha aktif, daha girişken olduğunuz dönemler oldu mu?",
    "Daha fazla sinirli veya tahammülsüz olduğunuz dönemler oldu mu?",
    "Daha üretken, daha hızlı çalıştığınız dönemler oldu mu?",
    "Normalden daha fazla hareketli olduğunuz dönemler oldu mu?",
    "Cinsel isteğinizin belirgin arttığı dönemler oldu mu?",
  ];
  const questionsWrap = mdqRoot.querySelector("[data-mdq-questions]");
  const form = mdqRoot.querySelector("[data-mdq-form]");
  const yesCountEl = mdqRoot.querySelector("[data-mdq-yes-count]");
  const summaryEl = mdqRoot.querySelector("[data-mdq-summary]");
  const progressEl = mdqRoot.querySelector("[data-mdq-progress]");

  mdqQuestions.forEach((question, index) => {
    const row = document.createElement("div");
    row.className = "mdq-question";

    const text = document.createElement("p");
    text.textContent = `${index + 1}. ${question}`;

    const optionsWrap = document.createElement("div");
    optionsWrap.className = "mdq-options";

    ["Evet", "Hayır"].forEach((labelText) => {
      const label = document.createElement("label");
      label.className = "phq-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `mdq-${index}`;
      input.value = labelText === "Evet" ? "yes" : "no";

      const labelSpan = document.createElement("span");
      labelSpan.textContent = labelText;

      label.append(input, labelSpan);
      optionsWrap.appendChild(label);
    });

    row.append(text, optionsWrap);
    questionsWrap.appendChild(row);
  });

  form.addEventListener("change", () => {
    const symptomAnswers = [...form.querySelectorAll('input[name^="mdq-"]:checked')]
      .filter((input) => input.name !== "mdq-same-period" && input.name !== "mdq-impact");
    const yesCount = symptomAnswers.filter((input) => input.value === "yes").length;
    const samePeriod = form.querySelector('input[name="mdq-same-period"]:checked');
    const impact = form.querySelector('input[name="mdq-impact"]:checked');
    const criteriaMet = yesCount >= 7 && samePeriod?.value === "yes" && Number(impact?.value ?? 0) >= 2;

    yesCountEl.textContent = String(yesCount);
    progressEl.textContent = `13 belirtiden ${symptomAnswers.length} tanesi yanıtlandı.`;
    summaryEl.textContent = criteriaMet
      ? "Bipolar spektrum açısından klinik değerlendirme önerilir."
      : "Yanıtlar klinik görüşme ile birlikte değerlendirilmelidir.";
  });
}

if (gadRoot) {
  const gadQuestions = [
    "Kendinizi sinirli, kaygılı veya gergin hissetme",
    "Endişeyi durduramama veya kontrol edememe",
    "Farklı konular hakkında çok fazla endişelenme",
    "Gevşemekte zorlanma",
    "Yerinizde duramayacak kadar huzursuz olma",
    "Kolayca sinirlenme veya tahammülsüzleşme",
    "Sanki kötü bir şey olacakmış gibi korku hissetme",
  ];
  const options = [
    { value: 0, label: "Hiç" },
    { value: 1, label: "Birkaç gün" },
    { value: 2, label: "Günlerin yarısından fazlasında" },
    { value: 3, label: "Hemen hemen her gün" },
  ];
  const questionsWrap = gadRoot.querySelector("[data-gad-questions]");
  const form = gadRoot.querySelector("[data-gad-form]");
  const scoreEl = gadRoot.querySelector("[data-gad-score]");
  const levelEl = gadRoot.querySelector("[data-gad-level]");
  const progressEl = gadRoot.querySelector("[data-gad-progress]");
  const noteEl = gadRoot.querySelector("[data-gad-note]");

  const getGadLevel = (score) => {
    if (score <= 4) return "Minimal düzey";
    if (score <= 9) return "Hafif düzey";
    if (score <= 14) return "Orta düzey";
    return "Ağır düzey";
  };

  gadQuestions.forEach((question, index) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "phq-question";

    const legend = document.createElement("legend");
    legend.textContent = `${index + 1}. ${question}`;
    fieldset.appendChild(legend);

    const optionWrap = document.createElement("div");
    optionWrap.className = "phq-options";

    options.forEach((option) => {
      const label = document.createElement("label");
      label.className = "phq-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `gad-${index}`;
      input.value = String(option.value);

      const text = document.createElement("span");
      text.textContent = `${option.value} = ${option.label}`;

      label.append(input, text);
      optionWrap.appendChild(label);
    });

    fieldset.appendChild(optionWrap);
    questionsWrap.appendChild(fieldset);
  });

  form.addEventListener("change", () => {
    const selected = [...form.querySelectorAll('input[name^="gad-"]:checked')]
      .filter((input) => input.name !== "gad-difficulty");
    const total = selected.reduce((sum, input) => sum + Number(input.value), 0);

    scoreEl.textContent = String(total);
    levelEl.textContent = getGadLevel(total);
    progressEl.textContent = `7 sorudan ${selected.length} tanesi yanıtlandı.`;
    noteEl.textContent = total >= 8
      ? "8 ve üzeri puanlarda daha ayrıntılı klinik değerlendirme önerilir."
      : "Sonuçlar klinik görüşme ve günlük yaşam etkisiyle birlikte değerlendirilmelidir.";
  });
}

if (ocdRoot) {
  const ocdQuestions = [
    "Kirlenme, mikrop veya bulaşma ihtimali zihninizi belirgin şekilde meşgul ediyor mu?",
    "Temizlik, yıkama veya silme davranışlarını rahatlamak için tekrarlıyor musunuz?",
    "Kapı, ocak, priz, kilit ya da benzeri şeyleri tekrar tekrar kontrol etme ihtiyacı duyuyor musunuz?",
    "Bir işi tamamladığınız halde 'emin olamama' hissi nedeniyle yeniden bakıyor musunuz?",
    "Aynı cümleyi, hareketi, duayı, saymayı veya zihinsel kontrolü tekrar etme ihtiyacı oluyor mu?",
    "Eşyaların belirli bir düzende, simetrik ya da 'tam doğru' durması gerektiğini hissediyor musunuz?",
    "Düzen bozulduğunda belirgin huzursuzluk veya gerginlik yaşıyor musunuz?",
    "İstemediğiniz halde aklınıza gelen rahatsız edici düşünceler sizi korkutuyor veya suçlu hissettiriyor mu?",
    "Bu düşünceleri bastırmak, etkisizleştirmek veya kontrol etmek için zihinsel uğraşlara giriyor musunuz?",
    "Yakınlarınıza zarar verme, hata yapma veya uygunsuz bir şey söyleme ihtimali zihninize takılıyor mu?",
    "Rahatlamak için güvence isteme, tekrar sorma veya onay alma ihtiyacı duyuyor musunuz?",
    "Takıntılar veya tekrar eden davranışlar gün içinde belirgin zamanınızı alıyor mu?",
    "Bu belirtiler iş, okul, aile, sosyal yaşam veya günlük sorumluluklarınızı zorlaştırıyor mu?",
    "Belirtileri azaltmaya çalışsanız da kısa süre sonra aynı döngüye geri döndüğünüz oluyor mu?",
  ];
  const options = [
    { value: 0, label: "Hiç" },
    { value: 1, label: "Nadiren" },
    { value: 2, label: "Bazen" },
    { value: 3, label: "Sık" },
    { value: 4, label: "Çok sık" },
  ];
  const questionsWrap = ocdRoot.querySelector("[data-ocd-questions]");
  const form = ocdRoot.querySelector("[data-ocd-form]");
  const scoreEl = ocdRoot.querySelector("[data-ocd-score]");
  const levelEl = ocdRoot.querySelector("[data-ocd-level]");
  const progressEl = ocdRoot.querySelector("[data-ocd-progress]");
  const noteEl = ocdRoot.querySelector("[data-ocd-note]");

  const getOcdLevel = (score) => {
    if (score <= 18) return "Düşük düzey";
    if (score <= 37) return "Orta düzey";
    return "Yüksek düzey";
  };

  const getOcdNote = (score) => {
    if (score <= 18) return "Yanıtlarınız düşük belirti düzeyine işaret ediyor; yine de rahatsızlık sürüyorsa klinik görüşme yararlı olabilir.";
    if (score <= 37) return "Yanıtlarınız orta belirti düzeyine işaret ediyor; belirtilerin günlük yaşama etkisi bir uzmanla değerlendirilebilir.";
    return "Yanıtlarınız yüksek belirti düzeyine işaret ediyor; psikiyatri uzmanı ile ayrıntılı değerlendirme almanız önerilir.";
  };

  ocdQuestions.forEach((question, index) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "phq-question";

    const legend = document.createElement("legend");
    legend.textContent = `${index + 1}. ${question}`;
    fieldset.appendChild(legend);

    const optionWrap = document.createElement("div");
    optionWrap.className = "phq-options";

    options.forEach((option) => {
      const label = document.createElement("label");
      label.className = "phq-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `ocd-${index}`;
      input.value = String(option.value);

      const text = document.createElement("span");
      text.textContent = `${option.value} = ${option.label}`;

      label.append(input, text);
      optionWrap.appendChild(label);
    });

    fieldset.appendChild(optionWrap);
    questionsWrap.appendChild(fieldset);
  });

  form.addEventListener("change", () => {
    const selected = [...form.querySelectorAll('input[name^="ocd-"]:checked')];
    const total = selected.reduce((sum, input) => sum + Number(input.value), 0);

    scoreEl.textContent = String(total);
    levelEl.textContent = getOcdLevel(total);
    progressEl.textContent = `14 sorudan ${selected.length} tanesi yanıtlandı.`;
    noteEl.textContent = getOcdNote(total);
  });
}


if (asrsRoot) {
  const asrsQuestions = [
    "Bir işi tamamlamanız gereken durumlarda, son ayrıntıları düzenlemekte veya bitirici işleri tamamlamakta ne sıklıkla zorlanırsınız?",
    "Organizasyon gerektiren bir işe başlamanız gerektiğinde, işe koyulmakta ne sıklıkla güçlük yaşarsınız?",
    "Randevu, toplantı veya önemli yükümlülüklerinizi unutmanız ne sıklıkla olur?",
    "Uzun süre dikkat gerektiren bir iş yapmanız gerektiğinde erteleme eğiliminiz ne sıklıkla olur?",
    "Uzun süre oturmanız gereken durumlarda yerinizde durmakta veya kıpırdanmadan beklemekte ne sıklıkla zorlanırsınız?",
    "Kendinizi sürekli hareket halinde veya sanki bir motor tarafından çalıştırılıyormuş gibi hissetmeniz ne sıklıkla olur?",
  ];
  const asrsOptions = [
    { value: 0, label: "Hiçbir zaman" },
    { value: 1, label: "Nadiren" },
    { value: 2, label: "Bazen" },
    { value: 3, label: "Sık sık" },
    { value: 4, label: "Çok sık" },
  ];
  const questionsWrap = asrsRoot.querySelector("[data-asrs-questions]");
  const form = asrsRoot.querySelector("[data-asrs-form]");
  const scoreEl = asrsRoot.querySelector("[data-asrs-score]");
  const levelEl = asrsRoot.querySelector("[data-asrs-level]");
  const progressEl = asrsRoot.querySelector("[data-asrs-progress]");
  const noteEl = asrsRoot.querySelector("[data-asrs-note]");
  const resultEl = asrsRoot.querySelector("[data-asrs-result-level]");
  const whatsappButton = asrsRoot.querySelector("[data-asrs-whatsapp]");

  const getAsrsResult = (score) => {
    if (score <= 5) {
      return { key: "low", level: "Düşük Risk", note: "Yanıtlarınız erişkin DEHB açısından belirgin bir risk göstermemektedir." };
    }
    if (score <= 11) {
      return { key: "mild", level: "Hafif Risk", note: "Bazı dikkat ve organizasyon güçlükleri yaşadığınızı düşündüren belirtiler bulunmaktadır." };
    }
    if (score <= 17) {
      return { key: "moderate", level: "Orta Risk", note: "Yanıtlarınız erişkin DEHB ile ilişkili olabilecek belirtiler göstermektedir." };
    }
    return { key: "high", level: "Yüksek Risk", note: "Yanıtlarınız dikkat eksikliği ve hiperaktivite bozukluğu ile ilişkili olabilecek belirgin belirtiler göstermektedir. Ayrıntılı değerlendirme için psikiyatri uzmanına başvurmanız önerilir." };
  };

  asrsQuestions.forEach((question, index) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "phq-question";

    const legend = document.createElement("legend");
    legend.textContent = `${index + 1}. ${question}`;
    fieldset.appendChild(legend);

    const optionWrap = document.createElement("div");
    optionWrap.className = "phq-options";

    asrsOptions.forEach((option) => {
      const label = document.createElement("label");
      label.className = "phq-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `asrs-${index}`;
      input.value = String(option.value);

      const text = document.createElement("span");
      text.textContent = `${option.value} = ${option.label}`;

      label.append(input, text);
      optionWrap.appendChild(label);
    });

    fieldset.appendChild(optionWrap);
    questionsWrap.appendChild(fieldset);
  });

  form.addEventListener("change", () => {
    const selected = [...form.querySelectorAll('input[name^="asrs-"]:checked')];
    const total = selected.reduce((sum, input) => sum + Number(input.value), 0);
    const result = getAsrsResult(total);

    scoreEl.textContent = String(total);
    levelEl.textContent = result.level;
    noteEl.textContent = result.note;
    progressEl.textContent = `6 sorudan ${selected.length} tanesi yanıtlandı.`;
    resultEl.dataset.asrsResultLevel = result.key;
  });

  whatsappButton?.addEventListener("click", showUnderConstruction);
}
