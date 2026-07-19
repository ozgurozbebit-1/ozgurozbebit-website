from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


OUT = Path("output/pdf/kaygimi-taniyorum.pdf")
LOGO = Path("assets/logo2.png")
W, H = A4

FONT_DIR = Path("/System/Library/Fonts/Supplemental")
pdfmetrics.registerFont(TTFont("Arial", str(FONT_DIR / "Arial.ttf")))
pdfmetrics.registerFont(TTFont("Arial-Bold", str(FONT_DIR / "Arial Bold.ttf")))
pdfmetrics.registerFont(TTFont("Arial-Italic", str(FONT_DIR / "Arial Italic.ttf")))
pdfmetrics.registerFont(TTFont("Georgia", str(FONT_DIR / "Georgia.ttf")))
pdfmetrics.registerFont(TTFont("Georgia-Bold", str(FONT_DIR / "Georgia Bold.ttf")))

NAVY = colors.HexColor("#16324f")
NAVY2 = colors.HexColor("#1f4569")
BLUE = colors.HexColor("#75add1")
LIGHT = colors.HexColor("#eaf4fb")
PALE = colors.HexColor("#f6fbfe")
SOFT = colors.HexColor("#f2f7fa")
INK = colors.HexColor("#22333b")
MUTED = colors.HexColor("#5d6e78")
LINE = colors.HexColor("#c9dce8")
TEAL = colors.HexColor("#0d8f87")
WHITE = colors.white

c = canvas.Canvas(str(OUT), pagesize=A4)
c.setTitle("Kaygımı Tanıyorum")
c.setAuthor("Dr. Özgür Özbebit")
c.setSubject("Psikoeğitim Serisi No: 5 - Kaygı farkındalık ve günlük çalışma defteri")
c.setCreator("Dr. Özgür Özbebit")

M = 48
CONTENT_TOP = H - 78


def footer(page):
    c.setStrokeColor(LINE)
    c.setLineWidth(0.5)
    c.line(M, 42, W - M, 42)
    c.setFont("Arial", 8)
    c.setFillColor(MUTED)
    c.drawString(M, 28, "www.ozgurozbebit.com.tr")
    c.drawCentredString(W / 2, 28, "Psikoeğitim Serisi")
    c.drawRightString(W - M, 28, str(page))


def box(x, y, w, h, fill=PALE, stroke=LINE, radius=10, lw=0.8):
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(lw)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=1)


def title(text, y, size=25):
    c.setFillColor(NAVY)
    c.setFont("Georgia-Bold", size)
    words, lines, line = text.split(), [], ""
    for word in words:
        test = (line + " " + word).strip()
        if c.stringWidth(test, "Georgia-Bold", size) <= 500:
            line = test
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    for item in lines:
        c.drawString(M, y, item)
        y -= size + 6
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(M, y + 8, M + 70, y + 8)
    return y - 20


def para(text, x, y, width=500, size=10.5, leading=14.8, font="Arial", color=MUTED):
    c.setFont(font, size)
    c.setFillColor(color)
    words = text.split()
    line = ""
    for word in words:
        test = (line + " " + word).strip()
        if c.stringWidth(test, font, size) <= width:
            line = test
        else:
            if line:
                c.drawString(x, y, line)
                y -= leading
            line = word
    if line:
        c.drawString(x, y, line)
        y -= leading
    return y


def note_box(label, text, x, y, w, h):
    box(x, y, w, h, fill=LIGHT, stroke=LINE)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 11)
    c.drawString(x + 14, y + h - 22, label)
    para(text, x + 14, y + h - 42, w - 28, size=8.7, leading=11, color=INK)


def checkbox(x, y, size=9):
    c.setStrokeColor(BLUE)
    c.setLineWidth(1)
    c.rect(x, y, size, size, fill=0, stroke=1)


def draw_round_logo(x, y, size):
    if not LOGO.exists():
        return
    c.saveState()
    c.setFillColor(WHITE)
    c.circle(x + size / 2, y + size / 2, size / 2, fill=1, stroke=0)
    path = c.beginPath()
    path.circle(x + size / 2, y + size / 2, size / 2)
    c.clipPath(path, stroke=0, fill=0)
    c.drawImage(ImageReader(str(LOGO)), x, y, size, size, mask="auto")
    c.restoreState()


def lined_area(x, y, w, h, gap=18):
    box(x, y, w, h, fill=WHITE, stroke=LINE, radius=8)
    c.setStrokeColor(colors.HexColor("#d9e7ef"))
    yy = y + h - 24
    while yy > y + 14:
        c.line(x + 14, yy, x + w - 14, yy)
        yy -= gap


def section_card(x, y, w, h, label, text):
    box(x, y, w, h, fill=PALE, stroke=LINE)
    c.setFont("Arial-Bold", 10.5)
    c.setFillColor(NAVY)
    c.drawString(x + 14, y + h - 22, label)
    para(text, x + 14, y + h - 42, w - 28, size=8.7, leading=11.2, color=MUTED)


def page1():
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#0f2a45"))
    c.circle(W * 0.83, H * 0.18, 182, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#214966"))
    c.circle(W * 0.16, H * 0.88, 120, fill=1, stroke=0)
    draw_round_logo(W / 2 - 54, H - 184, 108)
    c.setFillColor(BLUE)
    c.setFont("Arial-Bold", 12)
    c.drawCentredString(W / 2, H - 226, "Psikoeğitim Serisi No: 5")
    c.setFillColor(WHITE)
    c.setFont("Georgia-Bold", 34)
    c.drawCentredString(W / 2, H - 292, "Kaygımı")
    c.drawCentredString(W / 2, H - 334, "Tanıyorum")
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(W / 2 - 96, H - 358, W / 2 + 96, H - 358)
    c.setFont("Arial", 13)
    c.setFillColor(colors.HexColor("#dbeaf4"))
    c.drawCentredString(W / 2, H - 392, "Kaygı Farkındalık ve Günlük Çalışma Defteri")
    c.setFont("Arial-Bold", 14)
    c.setFillColor(WHITE)
    c.drawCentredString(W / 2, 156, "Dr. Özgür Özbebit")
    c.setFont("Arial", 12)
    c.drawCentredString(W / 2, 134, "Psikiyatrist")
    c.setFont("Arial", 10)
    c.drawCentredString(W / 2, 102, "www.ozgurozbebit.com.tr")
    c.showPage()


def page2():
    y = title("Bu defter neden hazırlandı?", CONTENT_TOP)
    text = [
        "Kaygı insan yaşamının doğal bir parçasıdır. Yeni bir işe başlarken, sınava girerken, sevdiğimiz biri için endişelenirken ya da belirsiz bir durumla karşılaştığımızda kaygı hissetmek beklenebilir. Bu duygu tek başına bir hastalık anlamına gelmez. Kaygı, insanın tehlikeye hazırlanmasını sağlayan eski ve önemli bir alarm sistemidir.",
        "Bu alarm sistemi bazen bizi korur. Dikkatimizi artırır, hazırlık yapmamıza yardım eder ve riskleri fark etmemizi sağlar. Ancak alarm sistemi gereğinden fazla çalışmaya başladığında günlük yaşam zorlaşabilir. Kişi ortada gerçek ve yakın bir tehlike olmadığı halde sürekli tetikte kalabilir. Bedensel belirtiler artabilir, düşünceler hızlanabilir ve kişi kendi iç dünyasını yönetmekte zorlanabilir.",
        "Kaygıyı azaltmanın ilk adımı çoğu zaman onu tanımaktır. Çünkü insan neyle karşı karşıya olduğunu anlamadığında kaygı daha belirsiz ve daha korkutucu hale gelir. Kalp çarpıntısı, nefes değişikliği, mide sıkışması ya da baş dönmesi yaşandığında kişi bunları tehlikeli bir işaret gibi yorumlayabilir. Oysa bazen beden yalnızca alarm sisteminin çalıştığını göstermektedir.",
        "Bu defter, kaygıyı yok etmeye zorlayan bir çalışma değildir. Amaç, kaygının hangi durumlarda arttığını, hangi düşüncelerle beslendiğini, bedende nasıl hissedildiğini ve hangi davranışlarla sürdüğünü daha görünür hale getirmektir. Görünür hale gelen bir süreç daha anlaşılabilir olur. Anlaşılabilir olan bir süreçle çalışmak da daha mümkündür.",
        "Bazı insanlar kaygıyla savaşmaya çalıştıkça daha çok yorulur. Kaygıyı bastırmak, hiç düşünmemeye çalışmak ya da sürekli güvence aramak kısa süreli rahatlama sağlayabilir; fakat uzun vadede kaygı döngüsünü güçlendirebilir. Bu defterdeki sayfalar, kişinin kendisini yargılamadan gözlem yapmasına ve küçük adımlarla ilerlemesine yardımcı olmak için hazırlanmıştır.",
        "Her sayfanın kusursuz doldurulması gerekmez. Bazen yalnızca bir düşünceyi fark etmek, bazen bir bedensel belirtiyi isimlendirmek, bazen de küçük bir davranış değişikliğini denemek yeterli olabilir. Kaygıyla çalışmak aceleyle değil, düzenli ve şefkatli bir merakla ilerleyen bir süreçtir."
    ]
    for p in text:
        y = para(p, M, y, size=10.25, leading=14.45)
        y -= 7
    note_box("Kısa hatırlatma", "Kaygını anlamaya çalışmak, onunla savaşmaktan çoğu zaman daha iyi bir başlangıçtır.", M, 82, 500, 66)
    footer(2)
    c.showPage()


def page3():
    y = title("Kaygı nasıl oluşur?", CONTENT_TOP)
    flow = ["Olay", "Düşünce", "Duygu", "Bedensel belirtiler", "Davranış", "Sonuç"]
    x, w, h = W / 2 - 110, 220, 40
    yy = 635
    for i, item in enumerate(flow):
        box(x, yy, w, h, fill=LIGHT, stroke=BLUE, radius=12)
        c.setFont("Arial-Bold", 12)
        c.setFillColor(NAVY)
        c.drawCentredString(W / 2, yy + 15, item)
        if i < len(flow) - 1:
            c.setStrokeColor(NAVY2)
            c.setLineWidth(1.2)
            c.line(W / 2, yy - 6, W / 2, yy - 22)
            c.setFillColor(NAVY2)
            c.circle(W / 2, yy - 24, 2, fill=1, stroke=0)
        yy -= 66
    text = ("Kaygı çoğu zaman tek bir noktadan başlamaz. Bir olay olur; kişi o olayı kendi deneyimleri, beklentileri ve o anki ruh hali üzerinden yorumlar. Bu yorum bir düşünceye dönüşür. Düşünce tehlike içeriyorsa duygu olarak kaygı yükselir. Kaygı yükseldiğinde beden alarma geçer: kalp hızlanabilir, nefes değişebilir, kaslar gerilebilir, mide sıkışabilir. Bedenin bu tepkileri tekrar tehlike gibi yorumlandığında davranışlar devreye girer. Kişi kaçınabilir, erteleyebilir, kontrol edebilir ya da sürekli güvence arayabilir. Bu davranışlar kısa vadede rahatlatıcı olsa da uzun vadede beynin o durumu gerçekten tehlikeli sanmasına neden olabilir. Bu nedenle kaygıyı anlamak, olaydan sonuca uzanan zinciri fark etmekle başlar.")
    para(text, M, 185, width=500, size=10.05, leading=14.2)
    footer(3)
    c.showPage()


def page4():
    y = title("Kaygı bedenimde nasıl hissediliyor?", CONTENT_TOP, size=24)
    para("Kaygı yalnızca zihinde yaşanmaz. Beden de alarm sisteminin bir parçasıdır. Aşağıdaki alanı kendi belirtilerinizi işaretlemek için kullanabilirsiniz.", M, y, size=10.2, leading=14.2)
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.6)
    c.ellipse(240, 535, 355, 650, fill=0, stroke=1)
    c.line(298, 535, 298, 390)
    c.line(260, 505, 208, 450)
    c.line(336, 505, 388, 450)
    c.line(298, 390, 258, 300)
    c.line(298, 390, 338, 300)
    c.setFillColor(LIGHT)
    c.circle(298, 595, 5, fill=1, stroke=0)
    c.circle(298, 510, 5, fill=1, stroke=0)
    c.circle(298, 455, 5, fill=1, stroke=0)
    c.circle(298, 405, 5, fill=1, stroke=0)
    labels = [
        ("Kalp çarpıntısı", 62, 610), ("Terleme", 64, 560), ("Titreme", 65, 510),
        ("Kas gerginliği", 60, 460), ("Mide sıkışması", 395, 595), ("Nefes değişikliği", 395, 545),
        ("Baş dönmesi", 397, 495), ("Uyuşma", 397, 445)
    ]
    for label, lx, ly in labels:
        checkbox(lx, ly - 2, 10)
        c.setFont("Arial-Bold", 10)
        c.setFillColor(NAVY)
        c.drawString(lx + 18, ly, label)
    note_box("Not", "Belirti hissetmek, her zaman tehlike olduğu anlamına gelmez. Yine de yeni, alışılmışın dışında veya şiddetli bedensel yakınmalarda tıbbi değerlendirme önemlidir.", M, 120, 500, 82)
    footer(4)
    c.showPage()


def page5():
    y = title("Kaygı günlüğü", CONTENT_TOP)
    para("Bu sayfa çoğaltılarak kullanılabilir. Kayıt tutarken amacınız kendinizi denetlemek değil, kaygı döngünüzü daha iyi tanımaktır.", M, y, size=10.1, leading=14)
    cols = [("Tarih", 50), ("Olay", 76), ("Düşünce", 112), ("Puan", 48), ("Bedensel belirtiler", 112), ("Ne yaptım?", 78), ("Sonuç", 68)]
    x0, y0, row_h = 26, 602, 64
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.2)
    x = x0
    c.setFillColor(LIGHT)
    c.rect(x0, y0, sum(w for _, w in cols), 42, fill=1, stroke=1)
    table_bottom = y0 - row_h * 6
    for label, ww in cols:
        c.line(x, table_bottom, x, y0 + 42)
        c.setFont("Arial-Bold", 6.5)
        c.setFillColor(NAVY)
        c.drawCentredString(x + ww / 2, y0 + 24, label)
        x += ww
    c.line(x, table_bottom, x, y0 + 42)
    for r in range(7):
        yy = y0 - row_h * r
        if r % 2 == 1:
            c.setFillColor(PALE)
            c.rect(x0, yy - row_h, sum(w for _, w in cols), row_h, fill=1, stroke=0)
        c.setStrokeColor(BLUE)
        c.line(x0, yy, x0 + sum(w for _, w in cols), yy)
    footer(5)
    c.showPage()


def page6():
    y = title("Otomatik düşünceler", CONTENT_TOP)
    intro = ("Otomatik düşünceler, çoğu zaman fark etmeden zihinden geçen kısa yorumlardır. Kaygı yükseldiğinde zihin hızlı çalışır ve olası tehlikeleri abartabilir. Bu düşünceler bazen gerçek gibi hissedilir; fakat her düşünce doğru, yararlı ya da tamamlanmış bir bilgi değildir.")
    y = para(intro, M, y, size=10.3, leading=14.4)
    items = [
        ("Felaketleştirme", "Küçük bir olasılığı en kötü sonuca bağlamak. Örneğin: 'Ya kötü bir şey olursa?'"),
        ("Zihin okuma", "Karşı tarafın ne düşündüğünü kanıt olmadan bildiğini varsaymak."),
        ("Ya hep ya hiç", "Durumu yalnızca başarılı ya da başarısız, iyi ya da kötü gibi iki uçta değerlendirmek."),
        ("Aşırı genelleme", "Tek bir olumsuz deneyimden geniş ve kalıcı sonuçlar çıkarmak."),
        ("Geleceği tahmin etme", "Olumsuz sonucun kesinleşmiş gibi kabul edilmesi.")
    ]
    yy = y - 20
    for i, (label, text) in enumerate(items):
        x = M if i % 2 == 0 else W / 2 + 8
        if i % 2 == 0 and i > 0:
            yy -= 92
        section_card(x, yy - 72, 238, 70, label, text)
    note_box("Çalışma sorusu", "Bugün kaygımı artıran düşünce hangisiydi? Bu düşünce bir gerçek miydi, yoksa zihnimin yaptığı hızlı bir yorum muydu?", M, 100, 500, 78)
    footer(6)
    c.showPage()


def page7():
    y = title("Kaygıyı artıran davranışlar", CONTENT_TOP, size=24)
    para("Bazı davranışlar kısa vadede rahatlatır; fakat uzun vadede kaygının daha güçlü kalmasına neden olabilir.", M, y, size=10.3, leading=14)
    c.setFont("Arial-Bold", 10.5)
    c.setFillColor(NAVY)
    c.drawString(M, 628, "Davranış")
    c.drawString(214, 628, "Kısa vadede ne sağlar?")
    c.drawString(390, 628, "Uzun vadede neye yol açabilir?")
    rows = [
        ("Kaçınma", "Rahatlama", "Alan daralabilir"),
        ("Erteleme", "Zorlanmayı geciktirme", "Kaygı büyüyebilir"),
        ("Sürekli araştırma", "Kesinlik hissi", "Zihin daha çok takılabilir"),
        ("Güvence isteme", "Anlık sakinleşme", "Kendi güveni azalabilir"),
        ("Kontrol etme", "Kısa süreli eminlik", "Şüphe tekrar dönebilir"),
    ]
    yy = 588
    for a, b, d in rows:
        box(M, yy - 48, 500, 44, fill=PALE, stroke=LINE)
        c.setFont("Arial-Bold", 9.4)
        c.setFillColor(NAVY)
        c.drawString(M + 14, yy - 24, a)
        c.setFillColor(BLUE)
        c.drawCentredString(198, yy - 24, "→")
        c.setFillColor(MUTED)
        c.drawString(214, yy - 24, b)
        c.setFillColor(BLUE)
        c.drawCentredString(374, yy - 24, "→")
        c.setFillColor(MUTED)
        c.drawString(390, yy - 24, d)
        yy -= 62
    note_box("Küçük not", "Amaç bu davranışları bir anda bırakmak değildir. Önce hangi davranışın kaygı döngüsünü sürdürdüğünü fark etmek gerekir.", M, 112, 500, 70)
    footer(7)
    c.showPage()


def page8():
    y = title("Güvende hissetme davranışları", CONTENT_TOP, size=24)
    text = [
        "Kaygı yükseldiğinde insan kendini rahatlatmak için bazı davranışlara yönelir. Bunlar çok anlaşılır davranışlardır. Nabzı kontrol etmek, tekrar tekrar araştırma yapmak, yanında mutlaka su taşımak, yalnız kalmaktan kaçınmak, sürekli birinden onay almak ya da aynı konuyu defalarca düşünmek kısa vadede güven hissi verebilir.",
        "Sorun bu davranışların varlığı değil, zamanla tek güven kaynağı haline gelmesidir. Kişi yalnızca bu davranışı yaptığında rahatlayabildiğini düşünmeye başlarsa, beyin şu mesajı öğrenebilir: 'Demek ki bu davranış olmazsa tehlikedeyim.' Böylece güven davranışı kaygıyı azaltmak yerine onu sürdüren bir parçaya dönüşebilir.",
        "Bu farkındalık suçluluk yaratmak için değildir. Herkes zorlandığında kendini korumaya çalışır. Önemli olan, hangi davranışların gerçekten yardımcı olduğunu, hangilerinin ise kaygıyı kısa süreli susturup uzun vadede güçlendirdiğini ayırt edebilmektir.",
        "Küçük değişimler bu noktada işe yarar. Örneğin güvence istemeden önce birkaç dakika beklemek, belirtileri araştırmak yerine kısa bir yürüyüşe çıkmak, kaçındığınız bir durumun çok küçük bir parçasına yaklaşmak ya da bir kontrol davranışını bir kez azaltmak başlangıç olabilir.",
        "Kaygıyla çalışmak çoğu zaman kas geliştirmeye benzer. Birden her şeyi değiştirmek gerekmez. Düzenli ve küçük denemeler, kişinin kendi dayanıklılığını yeniden fark etmesine yardımcı olur."
    ]
    for p in text:
        y = para(p, M, y, size=10.4, leading=14.8)
        y -= 10
    footer(8)
    c.showPage()


def page9():
    y = title("Bugünkü küçük adımım", CONTENT_TOP)
    para("Bugün kaygıyla savaşmadan, yalnızca küçük bir adım denemeyi seçebilirsiniz. Küçük adımlar sürdürülebilir olduğunda daha değerlidir.", M, y, size=10.2, leading=14.2)
    labels = [
        "Bugün kaygımı artıran durum",
        "Bu durumda aklımdan geçen düşünce",
        "Bugün denemek istediğim küçük adım",
        "Bu adımı attığımda ne fark ettim?",
        "Kendime söylemek istediğim destekleyici cümle",
    ]
    yy = 610
    for label in labels:
        c.setFont("Arial-Bold", 10)
        c.setFillColor(NAVY)
        c.drawString(M, yy, label)
        lined_area(M, yy - 78, 500, 58, gap=18)
        yy -= 96
    footer(9)
    c.showPage()


def page10():
    y = title("Bir haftalık kaygı takibi", CONTENT_TOP)
    para("Bu tablo kaygının zaman içindeki değişimini görmek için hazırlanmıştır. Puanlar tanı koymaz; yalnızca farkındalık sağlar.", M, y, size=10.1, leading=14)
    cols = [("Gün", 58), ("En belirgin olay", 132), ("Kaygı 0-10", 70), ("Bedensel belirti", 116), ("Ne yardımcı oldu?", 132)]
    x0, y0, row_h = M, 608, 50
    total = sum(w for _, w in cols)
    c.setFillColor(LIGHT)
    c.setStrokeColor(BLUE)
    c.rect(x0, y0, total, 40, fill=1, stroke=1)
    table_bottom = y0 - row_h * 7
    x = x0
    for label, ww in cols:
        c.line(x, table_bottom, x, y0 + 40)
        c.setFont("Arial-Bold", 7.2)
        c.setFillColor(NAVY)
        c.drawCentredString(x + ww / 2, y0 + 23, label)
        x += ww
    c.line(x, table_bottom, x, y0 + 40)
    days = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"]
    for i in range(8):
        yy = y0 - row_h * i
        if i < 7:
            c.setFillColor(PALE if i % 2 else WHITE)
            c.rect(x0, yy - row_h, total, row_h, fill=1, stroke=0)
            c.setFont("Arial-Bold", 8.5)
            c.setFillColor(MUTED)
            c.drawCentredString(x0 + cols[0][1] / 2, yy - 30, days[i])
        c.setStrokeColor(BLUE)
        c.line(x0, yy, x0 + total, yy)
    footer(10)
    c.showPage()


def page11():
    y = title("Kendime söyleyebileceğim cümleler", CONTENT_TOP, size=24)
    para("Kaygı yükseldiğinde zihnin dili sertleşebilir. Aşağıdaki cümleler kendinizi kandırmak için değil, daha dengeli bir iç ses kurmak için kullanılabilir.", M, y, size=10.2, leading=14.2)
    quotes = [
        "Kaygı hissetmem tehlikede olduğum anlamına gelmez.",
        "Her düşünce doğru değildir.",
        "Belirsizlik yaşamın bir parçasıdır.",
        "Şu anda zorlanıyorum ama bu geçebilir.",
        "Bedenim alarmda; bu alarmın azalmasına izin verebilirim.",
        "Bir adım atmak, her şeyi çözmek zorunda olduğum anlamına gelmez.",
    ]
    yy = 602
    for i, q in enumerate(quotes):
        x = M if i % 2 == 0 else W / 2 + 8
        if i % 2 == 0 and i > 0:
            yy -= 112
        box(x, yy - 88, 238, 82, fill=LIGHT if i % 3 == 0 else PALE, stroke=LINE)
        c.setFont("Georgia-Bold", 18)
        c.setFillColor(BLUE)
        c.drawString(x + 14, yy - 32, "“")
        para(q, x + 34, yy - 30, width=180, size=9.5, leading=12.5, font="Arial-Bold", color=NAVY)
    footer(11)
    c.showPage()


def page12():
    y = title("Nefes ve dikkat egzersizleri", CONTENT_TOP, size=24)
    para("Bu egzersizler mucize değildir; fakat kaygı dalgası yükseldiğinde bedene ve dikkate nazik bir yön verebilir.", M, y, size=10.2, leading=14.2)
    items = [
        ("4-6 nefes ritmi", "Burnunuzdan dört saniye nefes alın, altı saniyede yavaşça verin. Amaç nefesi zorlamak değil, bedene güvenli bir ritim hatırlatmaktır."),
        ("5-4-3-2-1 duyusal farkındalık", "Gördüğünüz beş şeyi, dokunduğunuz dört şeyi, duyduğunuz üç sesi, kokladığınız iki şeyi ve tadını aldığınız bir şeyi fark edin."),
        ("Kas gevşetme", "Omuz, çene, el ve bacak kaslarınızı kısa süre sıkıp sonra bırakın. Gevşeme hissini özellikle fark etmeye çalışın."),
    ]
    yy = 596
    for label, text in items:
        box(M, yy - 98, 500, 86, fill=PALE, stroke=LINE)
        c.setFillColor(BLUE)
        c.circle(M + 26, yy - 40, 14, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont("Arial-Bold", 12)
        c.drawCentredString(M + 26, yy - 45, "✓")
        c.setFillColor(NAVY)
        c.setFont("Arial-Bold", 13)
        c.drawString(M + 54, yy - 34, label)
        para(text, M + 54, yy - 55, 410, size=9.4, leading=12.5, color=MUTED)
        yy -= 120
    note_box("Hatırlatma", "Egzersiz işe yaramadıysa bu başarısızlık değildir. Bazen destekleyici araçlar tek başına yeterli olmaz; düzenli değerlendirme gerekebilir.", M, 112, 500, 70)
    footer(12)
    c.showPage()


def page13():
    y = title("Kendime karşı nasıl konuşuyorum?", CONTENT_TOP, size=24)
    para("Kaygı anında iç ses çoğu zaman eleştirel olabilir. Bu sayfada aynı duruma daha şefkatli ve gerçekçi bir alternatif üretmeyi deneyebilirsiniz.", M, y, size=10.2, leading=14.2)
    pairs = [
        ("Eleştiren ses", "Daha şefkatli alternatif"),
        ("Kendime söylediğim sert cümle", "Aynı duruma daha dengeli bakış"),
        ("Beni en çok korkutan düşünce", "Bugün tutunabileceğim küçük gerçek"),
    ]
    yy = 610
    for left, right in pairs:
        c.setFont("Arial-Bold", 10)
        c.setFillColor(NAVY)
        c.drawString(M, yy, left)
        c.drawString(W / 2 + 8, yy, right)
        lined_area(M, yy - 88, 238, 68, gap=18)
        c.setFillColor(BLUE)
        c.setFont("Arial-Bold", 13)
        c.drawCentredString(W / 2, yy - 55, "→")
        lined_area(W / 2 + 8, yy - 88, 238, 68, gap=18)
        yy -= 126
    footer(13)
    c.showPage()


def page14():
    y = title("Haftalık değerlendirme", CONTENT_TOP)
    para("Bu sayfa haftanın sonunda kısa bir değerlendirme yapmak için ayrıldı. Amaç kendinizi notlandırmak değil, değişimi görünür kılmaktır.", M, y, size=10.2, leading=14)
    labels = [
        "Bu hafta en zorlandığım an",
        "Bu hafta en iyi baş ettiğim an",
        "Fark ettiğim düşünce kalıpları",
        "Bana iyi gelen küçük davranış",
        "Bir sonraki hafta hedefim",
    ]
    yy = 610
    for label in labels:
        c.setFont("Arial-Bold", 10)
        c.setFillColor(NAVY)
        c.drawString(M, yy, label)
        lined_area(M, yy - 78, 500, 58, gap=18)
        yy -= 96
    footer(14)
    c.showPage()


def page15():
    y = title("Sık Sorulan Sorular", CONTENT_TOP)
    faqs = [
        ("Kaygı tamamen geçer mi?", "Amaç her zaman kaygıyı sıfırlamak değildir. Kaygının yönetilebilir hale gelmesi daha gerçekçi bir hedeftir."),
        ("Kaygılı olmak zayıflık mıdır?", "Hayır. Kaygı insan olmanın doğal bir parçasıdır. Yoğunlaştığında destek almak gerekebilir."),
        ("Her kaygı ilaç gerektirir mi?", "Hayır. Tedavi ihtiyacı kişinin belirtilerine, işlevselliğine ve klinik değerlendirmeye göre belirlenir."),
        ("Çocuklarda da olur mu?", "Evet. Çocuklar kaygıyı bazen sözle değil, bedensel yakınma ya da kaçınma davranışıyla gösterebilir."),
        ("Kaygı bedensel belirti yapar mı?", "Evet. Çarpıntı, mide sıkışması, terleme ve kas gerginliği görülebilir."),
        ("Panik atakla aynı şey midir?", "Panik atak kaygının ani ve yoğun bir formudur; her kaygı panik atak değildir."),
        ("Kaçınmak neden sorunu artırabilir?", "Kaçınma kısa süre rahatlatır; fakat beynin o durumu tehlikeli öğrenmesine neden olabilir."),
        ("Nefes egzersizi herkes için yeterli mi?", "Hayır. Yardımcı olabilir ama tek başına tedavi yerine geçmez."),
        ("Kaygı düşüncelerimi etkiler mi?", "Evet. Zihin tehlike odaklı çalışabilir ve olumsuz ihtimalleri büyütebilir."),
        ("Ne zaman destek almalıyım?", "Kaygı iş, okul, ilişki ya da günlük yaşamı belirgin etkiliyorsa değerlendirme yararlı olur."),
        ("Kaygı tekrar ederse ne yapmalıyım?", "Tekrar etmesi başarısızlık değildir. Döngüyü izlemek ve destekleyici adımlara dönmek önemlidir."),
        ("Bu defter tanı koyar mı?", "Hayır. Bu çalışma farkındalık sağlar; tanı klinik görüşme ile konur."),
    ]
    col_w = 238
    yy = y
    for i, (q, a) in enumerate(faqs):
        x = M if i % 2 == 0 else W / 2 + 8
        if i % 2 == 0 and i > 0:
            yy -= 88
        section_card(x, yy - 70, col_w, 64, q, a)
    footer(15)
    c.showPage()


def page16():
    y = title("Kaygı haritam", CONTENT_TOP)
    para("Aşağıdaki şema, kaygı deneyiminizi bütün olarak görmeniz için hazırlandı. Boş alanlara kendi örneklerinizi yazabilirsiniz.", M, y, size=10.2, leading=14.2)
    center_x, center_y = W / 2, 425
    c.setFillColor(LIGHT)
    c.setStrokeColor(BLUE)
    c.circle(center_x, center_y, 54, fill=1, stroke=1)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 13)
    c.drawCentredString(center_x, center_y + 5, "Kaygı")
    c.setFont("Arial", 8.5)
    c.drawCentredString(center_x, center_y - 12, "bugün nasıl görünüyor?")
    nodes = [
        ("Tetikleyiciler", 86, 584), ("Düşünceler", 390, 584), ("Bedensel belirtiler", 78, 398),
        ("Davranışlar", 405, 398), ("Yardımcı olanlar", 86, 216), ("Küçük hedef", 390, 216)
    ]
    c.setStrokeColor(BLUE)
    c.setLineWidth(0.8)
    for _, x, yy in nodes:
        c.line(center_x, center_y, x + 66, yy + 35)
    for label, x, yy in nodes:
        box(x, yy, 132, 70, fill=PALE, stroke=LINE)
        c.setFont("Arial-Bold", 9.4)
        c.setFillColor(NAVY)
        c.drawCentredString(x + 66, yy + 43, label)
        c.setStrokeColor(colors.HexColor("#d9e7ef"))
        c.line(x + 14, yy + 24, x + 118, yy + 24)
        c.line(x + 14, yy + 13, x + 118, yy + 13)
    c.setFillColor(LIGHT)
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.6)
    c.circle(center_x, center_y, 54, fill=1, stroke=1)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 13)
    c.drawCentredString(center_x, center_y + 5, "Kaygı")
    c.setFont("Arial", 8.5)
    c.drawCentredString(center_x, center_y - 12, "bugün nasıl görünüyor?")
    footer(16)
    c.showPage()


def page17():
    y = title("Kendime mektup", CONTENT_TOP)
    c.setFont("Georgia-Bold", 17)
    c.setFillColor(NAVY)
    c.drawString(M, y + 4, "Bugün kendime söylemek istediklerim...")
    lined_area(M, 110, 500, 520, gap=22)
    footer(17)
    c.showPage()


def page18():
    y = title("Son söz", CONTENT_TOP)
    text = [
        "Kaygı kişinin kimliği değildir. Kaygı yaşamak, hassas, güçsüz ya da eksik olduğunuz anlamına gelmez. Kaygı bazen bedenin ve zihnin sizi korumaya çalışırken gereğinden fazla alarm vermesidir. Bu alarm yorucu olabilir; fakat anlaşılabilir bir süreçtir.",
        "Kaygıyla yaşamak öğrenilebilir. Bu, kaygıyı hiç hissetmemek demek değildir. Daha çok, kaygı geldiğinde onunla ne yapacağınızı yavaş yavaş öğrenmek anlamına gelir. Hangi düşüncelerin sizi zorladığını, bedeninizin nasıl tepki verdiğini, hangi davranışların kısa süreli rahatlatıp uzun vadede döngüyü sürdürdüğünü fark ettikçe seçenekleriniz artar.",
        "Küçük ilerlemeler büyük değişimlerin başlangıcı olabilir. Bugün yalnızca bir kaydı doldurmak, bir düşünceyi yakalamak, bir güvence davranışını biraz ertelemek ya da kendinize daha yumuşak bir cümle kurmak bile önemlidir. Değişim çoğu zaman büyük kararlarla değil, tekrar edilen küçük adımlarla oluşur.",
        "Kendinize karşı sabırlı olmak bu sürecin önemli bir parçasıdır. Bazı günler daha iyi baş edebilirsiniz, bazı günler kaygı yeniden güçlenebilir. Bu dalgalanma başarısızlık değildir. İnsan zihni ve bedeni her gün aynı kapasitede çalışmaz. Önemli olan, zorlandığınız anlarda kendinizi yargılamak yerine yeniden anlamaya dönmektir.",
        "Bu defter, kaygıyı tanımak ve onunla daha sağlıklı bir ilişki kurmak için hazırlanmıştır. Gerekli durumlarda profesyonel destek almak süreci daha güvenli ve etkili hale getirebilir. Yardım istemek zayıflık değil, kişinin kendi yaşamına önem verdiğini gösteren değerli bir adımdır."
    ]
    for p in text:
        y = para(p, M, y, size=10.6, leading=15.1)
        y -= 11
    note_box("Bilgilendirme", "Bu çalışma genel bilgilendirme amacıyla hazırlanmıştır.\nTanı ve tedavinin yerine geçmez.", M, 72, 500, 72)
    footer(18)
    c.showPage()


for fn in [
    page1, page2, page3, page4, page5, page6, page7, page8, page9,
    page10, page11, page12, page13, page14, page15, page16, page17, page18
]:
    fn()

c.save()
print(OUT)
