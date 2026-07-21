from pathlib import Path
import math

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


OUT = Path("output/pdf/fobik-bozukluklari-anlamak.pdf")
LOGO = Path("assets/logo2.png")
W, H = A4
FONT_DIR = Path("/System/Library/Fonts/Supplemental")

pdfmetrics.registerFont(TTFont("Arial", str(FONT_DIR / "Arial.ttf")))
pdfmetrics.registerFont(TTFont("Arial-Bold", str(FONT_DIR / "Arial Bold.ttf")))
pdfmetrics.registerFont(TTFont("Arial-Italic", str(FONT_DIR / "Arial Italic.ttf")))
pdfmetrics.registerFont(TTFont("Georgia", str(FONT_DIR / "Georgia.ttf")))
pdfmetrics.registerFont(TTFont("Georgia-Bold", str(FONT_DIR / "Georgia Bold.ttf")))

OUT.parent.mkdir(parents=True, exist_ok=True)

NAVY = colors.HexColor("#16324f")
NAVY2 = colors.HexColor("#1f4569")
BLUE = colors.HexColor("#75add1")
TEAL = colors.HexColor("#2f7d87")
SOFT = colors.HexColor("#eaf4fb")
PALE = colors.HexColor("#f6fbfe")
WARN = colors.HexColor("#f4efe8")
INK = colors.HexColor("#22333b")
MUTED = colors.HexColor("#5d6e78")
LINE = colors.HexColor("#c9dce8")
WHITE = colors.white

c = canvas.Canvas(str(OUT), pagesize=A4)
c.setTitle("Fobik Bozuklukları Anlamak")
c.setAuthor("Dr. Özgür Özbebit")
c.setSubject("Psikoeğitim Serisi - Kaçınma döngüsünü anlamak ve yönetmek")
c.setCreator("Dr. Özgür Özbebit")

M = 48
TOP = H - 78


def box(x, y, w, h, fill=PALE, stroke=LINE, radius=10, lw=0.8):
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(lw)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=1)


def wrap_lines(text, width, font="Arial", size=10):
    words = text.split()
    lines, line = [], ""
    for word in words:
        test = (line + " " + word).strip()
        if c.stringWidth(test, font, size) <= width:
            line = test
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def para(text, x, y, width=500, size=9.45, leading=13.2, font="Arial", color=MUTED):
    c.setFont(font, size)
    c.setFillColor(color)
    for line in wrap_lines(text, width, font, size):
        c.drawString(x, y, line)
        y -= leading
    return y


def footer(page):
    c.setStrokeColor(LINE)
    c.setLineWidth(0.5)
    c.line(M, 42, W - M, 42)
    c.setFont("Arial", 8)
    c.setFillColor(MUTED)
    c.drawString(M, 28, "www.ozgurozbebit.com.tr")
    c.drawCentredString(W / 2, 28, "Özgür Özbebit Psikoeğitim Serisi")
    c.drawRightString(W - M, 28, str(page))


def title(text, y=TOP, size=25):
    c.setFillColor(NAVY)
    c.setFont("Georgia-Bold", size)
    for line in wrap_lines(text, 500, "Georgia-Bold", size):
        c.drawString(M, y, line)
        y -= size + 5
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(M, y + 9, M + 74, y + 9)
    return y - 18


def draw_logo(x, y, size):
    if not LOGO.exists():
        return
    c.saveState()
    c.setFillColor(WHITE)
    c.circle(x + size / 2, y + size / 2, size / 2, fill=1, stroke=0)
    p = c.beginPath()
    p.circle(x + size / 2, y + size / 2, size / 2)
    c.clipPath(p, stroke=0, fill=0)
    c.drawImage(ImageReader(str(LOGO)), x, y, size, size, mask="auto")
    c.restoreState()


def note_box(label, text, x, y, w, h, fill=SOFT):
    box(x, y, w, h, fill=fill, stroke=LINE, radius=10)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 10.2)
    c.drawString(x + 14, y + h - 22, label)
    para(text, x + 14, y + h - 42, w - 28, size=8.3, leading=10.8, color=INK)


def bullet(items, x, y, width=500, size=8.55, leading=11.2):
    for item in items:
        c.setFillColor(BLUE)
        c.circle(x + 4, y + 4, 2.0, fill=1, stroke=0)
        y = para(item, x + 16, y, width - 16, size=size, leading=leading, color=INK)
        y -= 2
    return y


def arrow(x1, y1, x2, y2, color=NAVY2):
    c.setStrokeColor(color)
    c.setLineWidth(1.2)
    c.line(x1, y1, x2, y2)
    ang = math.atan2(y2 - y1, x2 - x1)
    for d in (math.pi * 0.82, -math.pi * 0.82):
        c.line(x2, y2, x2 + math.cos(ang + d) * 7, y2 + math.sin(ang + d) * 7)


def line_field(x, y, w, label, h=36):
    box(x, y - h, w, h, fill=WHITE, stroke=LINE, radius=8)
    c.setFont("Arial-Bold", 8.1)
    c.setFillColor(NAVY)
    c.drawString(x + 12, y - 17, label)
    c.setStrokeColor(colors.HexColor("#d9e7ef"))
    c.line(x + 12, y - h + 12, x + w - 12, y - h + 12)


def small_card(head, text, x, y, w, h=84):
    box(x, y, w, h, fill=PALE, stroke=LINE, radius=10)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 10)
    c.drawString(x + 12, y + h - 22, head)
    para(text, x + 12, y + h - 42, w - 24, size=8.0, leading=10.4, color=MUTED)


def table(headers, rows, x, y, widths, row_h=43, font_size=7.7):
    h = row_h * (len(rows) + 1)
    box(x, y - h, sum(widths), h, fill=WHITE, stroke=LINE, radius=8)
    c.setFillColor(SOFT)
    c.roundRect(x, y - row_h, sum(widths), row_h, 8, fill=1, stroke=0)
    cx = x
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 8.1)
    for i, head in enumerate(headers):
        c.drawString(cx + 8, y - 25, head)
        cx += widths[i]
    c.setStrokeColor(LINE)
    yy = y - row_h
    for _ in rows:
        c.line(x, yy, x + sum(widths), yy)
        yy -= row_h
    cx = x
    for w in widths[:-1]:
        cx += w
        c.line(cx, y, cx, y - h)
    yy = y - row_h - 16
    for row in rows:
        cx = x
        for i, cell in enumerate(row):
            para(cell, cx + 8, yy, widths[i] - 16, size=font_size, leading=9.8, color=INK)
            cx += widths[i]
        yy -= row_h


def page1():
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#0f2a45"))
    c.circle(W * 0.83, H * 0.18, 178, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#244e68"))
    c.circle(W * 0.14, H * 0.88, 118, fill=1, stroke=0)
    # Cover illustration: small steps toward an open threshold.
    cx = W / 2
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.6)
    c.roundRect(cx - 58, 306, 116, 132, 40, fill=0, stroke=1)
    c.line(cx, 306, cx, 438)
    c.line(cx, 438, cx + 46, 392)
    c.setStrokeColor(colors.HexColor("#dbeaf4"))
    c.setLineWidth(1.4)
    c.bezier(cx - 172, 370, cx - 92, 430, cx + 88, 260, cx + 172, 370)
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.5)
    for i, step_w in enumerate([236, 198, 160, 122]):
        yy = 286 - i * 21
        c.line(cx - step_w / 2, yy, cx + step_w / 2, yy)
    c.setFillColor(colors.HexColor("#dbeaf4"))
    c.circle(cx + 22, 372, 3.2, fill=1, stroke=0)
    draw_logo(W / 2 - 54, H - 182, 108)
    c.setFillColor(BLUE)
    c.setFont("Arial-Bold", 12)
    c.drawCentredString(W / 2, H - 226, "Psikoeğitim Serisi No: 10")
    c.setFillColor(WHITE)
    c.setFont("Georgia-Bold", 28)
    c.drawCentredString(W / 2, H - 284, "Fobik Bozuklukları")
    c.drawCentredString(W / 2, H - 318, "Anlamak")
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(W / 2 - 92, H - 344, W / 2 + 92, H - 344)
    c.setFillColor(colors.HexColor("#dbeaf4"))
    c.setFont("Arial", 12)
    c.drawCentredString(W / 2, H - 380, "Kaçınma Döngüsünü Anlamak ve Yönetmek")
    c.drawCentredString(W / 2, H - 400, "Psikoeğitim ve Kendini Anlama Rehberi")
    c.setFillColor(WHITE)
    c.setFont("Arial-Bold", 14)
    c.drawCentredString(W / 2, 156, "Dr. Özgür Özbebit")
    c.setFont("Arial", 12)
    c.drawCentredString(W / 2, 134, "Psikiyatrist")
    c.setFont("Arial", 10)
    c.drawCentredString(W / 2, 102, "www.ozgurozbebit.com.tr")
    c.showPage()


def page2():
    y = title("Bu rehber neden hazırlandı?")
    texts = [
        "Fobiler çoğu zaman dışarıdan bakıldığında basit bir korku gibi görünebilir. Oysa fobik bir yaşantı, kişinin yalnızca bir nesneden ya da durumdan hoşlanmaması değildir. Bedenin alarma geçmesi, zihnin tehlikeyi büyütmesi ve kişinin yaşam alanını daraltan kaçınmaların giderek artması söz konusu olabilir.",
        "Birçok kişi yaşadığı korkuyu mantıksız bulduğu için kendisini suçlar. 'Bunun bu kadar büyütülecek neyi var?' ya da 'Herkes yapabiliyor, ben neden yapamıyorum?' gibi cümleler sık duyulur. Ancak fobik döngü irade eksikliğiyle açıklanamaz. Beynin tehdit sistemi bir durumu tehlikeli olarak işaretlediğinde, kişi bunun gerçekçi olmadığını bilse bile bedensel alarm çok güçlü hissedilebilir.",
        "Bu rehber, fobik bozuklukları korkutucu bir dille anlatmak için değil; kişinin kendi döngüsünü daha sakin bir yerden fark edebilmesi için hazırlandı. Amaç tanı koymak ya da evde tedavi uygulamak değildir. Amaç, kaçınmanın kısa vadede nasıl rahatlatabildiğini, fakat uzun vadede korkunun sürmesine nasıl katkı sağlayabildiğini görünür hale getirmektir.",
        "Fark etmek çoğu zaman iyi bir başlangıçtır. Kişi hangi durumlarda kaçındığını, hangi güvenlik davranışlarına başvurduğunu ve hangi düşüncelerin kaygıyı artırdığını görebildiğinde, süreç daha anlaşılır hale gelir. Bu rehberdeki çalışma sayfaları da tam olarak bunun için tasarlandı: okuyan kişinin kendi yaşamındaki örüntüyü yazabilmesi, görebilmesi ve gerektiğinde profesyonel destek sürecine daha hazırlıklı girebilmesi."
    ]
    for p in texts:
        y = para(p, M, y, size=9.75, leading=13.9)
        y -= 8
    note_box("Unutmayın", "Fobi yaşamak zayıflık değildir. Korkunun çok güçlü hissedilmesi, her zaman gerçek bir tehlike olduğu anlamına gelmez.", M, 86, 500, 76)
    footer(2)
    c.showPage()


def page3():
    y = title("Fobi nedir?")
    y = para("Korku insan yaşamının doğal bir parçasıdır. Tehlikeyi fark etmemize, dikkatli davranmamıza ve kendimizi korumamıza yardımcı olur. Fobi ise korkunun belirli bir nesne, durum ya da ortam karşısında yoğunlaşması ve kişinin yaşamını kısıtlamaya başlamasıdır.", M, y, size=9.8, leading=13.8)
    y -= 14
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 13)
    c.drawString(M, y, "Normal korku ile fobi arasındaki fark")
    y -= 18
    table(
        ["Normal korku", "Fobik korku"],
        [
            ("Tehlike ortadan kalkınca azalır.", "Tehlike çok düşük olsa bile yoğun kalabilir."),
            ("Kişi günlük yaşamını sürdürebilir.", "Kaçınma nedeniyle yaşam alanı daralabilir."),
            ("Bedensel alarm kısa sürede yatışır.", "Çarpıntı, nefes değişikliği ve panik hissi yoğun olabilir."),
            ("Duruma uygun bir uyarı görevi görebilir.", "Kişinin yapmak istediği şeylerin önüne geçebilir."),
        ],
        M, y, [245, 245], row_h=56, font_size=8.2
    )
    para("Bir korkunun fobi düzeyinde ele alınması için yalnızca korkunun varlığına değil; süresine, şiddetine, kaçınma davranışına ve günlük yaşam üzerindeki etkisine birlikte bakılır.", M, 172, size=9.5, leading=13.2)
    note_box("Kısa not", "Kişi korkusunun abartılı olduğunu düşünebilir; yine de bedensel tepkisini durdurmakta zorlanabilir. Bu durum fobik döngünün anlaşılması açısından önemlidir.", M, 84, 500, 68)
    footer(3)
    c.showPage()


def page4():
    y = title("Fobik bozukluklar nelerdir?")
    y = para("Fobik bozukluklar farklı biçimlerde görülebilir. Her kişinin korku konusu, kaçınma biçimi ve yaşamına etkisi farklıdır. Bu nedenle değerlendirme kişiye özgü yapılmalıdır.", M, y, size=9.7, leading=13.6)
    small_card("Özgül Fobi", "Belirli bir nesne ya da durumdan yoğun korku duyulabilir. Uçak, yükseklik, kapalı alan, hayvanlar, kan veya iğne gibi örnekler görülebilir.", M, 440, 500, 86)
    small_card("Sosyal Anksiyete Bozukluğu", "Kişi sosyal ortamlarda değerlendirilmekten, küçük düşmekten, eleştirilmekten veya yanlış anlaşılmaktan yoğun biçimde kaygı duyabilir.", M, 332, 500, 86)
    small_card("Agorafobi", "Kalabalık yerlerde, açık alanlarda, toplu taşımada veya kaçmanın zor olacağı düşünülen ortamlarda yoğun kaygı yaşanabilir.", M, 224, 500, 86)
    note_box("Ortak nokta", "Fobilerin ortak özelliği çoğu zaman kaçınmadır. Kaçınma kısa vadede rahatlatabilir; fakat uzun vadede korkunun daha güçlü kalmasına neden olabilir.", M, 102, 500, 76)
    footer(4)
    c.showPage()


def page5():
    y = title("Beyinde korku sistemi")
    y = para("Korku yalnızca düşünceyle ilgili değildir. Beden, zihin ve davranış aynı anda etkilenir. Beynin tehdit sistemi bir durumu riskli olarak yorumladığında kalp hızlanabilir, nefes değişebilir, kaslar gerilebilir ve kişi ortamdan uzaklaşma isteği duyabilir.", M, y, size=9.55, leading=13.4)
    # Simple, centered fear-system diagram.
    diagram_y = 452
    boxes = [
        ("Amigdala", 48, diagram_y, 168, 74),
        ("Prefrontal\nkorteks", 214, diagram_y + 88, 168, 74),
        ("Beden\nalarmı", 380, diagram_y, 168, 74),
    ]
    for label, x, yy, w, h in boxes:
        box(x, yy, w, h, fill=SOFT, stroke=BLUE, radius=16, lw=1.4)
        c.setFont("Arial-Bold", 14.5)
        c.setFillColor(NAVY)
        for j, line in enumerate(label.split("\n")):
            c.drawCentredString(x + w / 2, yy + 43 - j * 17, line)
    arrow(216, diagram_y + 48, 226, diagram_y + 88, BLUE)
    arrow(370, diagram_y + 88, 380, diagram_y + 48, BLUE)
    arrow(380, diagram_y + 22, 216, diagram_y + 22, BLUE)
    c.setFont("Arial-Bold", 10.2)
    c.setFillColor(TEAL)
    c.drawCentredString(W / 2, diagram_y - 18, "Tehdit algısı, değerlendirme ve beden alarmı birlikte çalışır.")
    cards = [
        ("Amigdala", "Tehdit algısıyla ilişkilidir. Bazı durumları hızla alarm olarak işaretleyebilir."),
        ("Prefrontal korteks", "Düşünme, değerlendirme ve durumu yeniden yorumlama süreçlerinde rol oynar."),
        ("Kaçınma", "Kısa rahatlama sağlar. Beyin bunu 'kaçınca güvende kaldım' diye öğrenebilir."),
    ]
    yy = 250
    for head, text in cards:
        small_card(head, text, M, yy, 500, 58)
        yy -= 72
    footer(5)
    c.showPage()


def page6():
    y = title("Kaçınma döngüsü")
    nodes = [
        ("Tetikleyici", 220, 616),
        ("Kaygı", 390, 506),
        ("Kaçınma", 390, 366),
        ("Kısa rahatlama", 220, 286),
        ("Korkunun güçlenmesi", 50, 366),
        ("Daha fazla kaçınma", 50, 506),
    ]
    for text, x, yy in nodes:
        box(x, yy, 155, 58, fill=SOFT, stroke=BLUE, radius=16, lw=1.3)
        c.setFillColor(NAVY)
        c.setFont("Arial-Bold", 11)
        c.drawCentredString(x + 77.5, yy + 24, text)
    pts = [
        ((375, 645), (390, 535)),
        ((468, 506), (468, 424)),
        ((390, 390), (375, 315)),
        ((220, 315), (205, 390)),
        ((128, 424), (128, 506)),
        ((205, 535), (220, 645)),
    ]
    for (x1, y1), (x2, y2) in pts:
        arrow(x1, y1, x2, y2, NAVY2)
    text = [
        "Fobik döngü çoğu zaman bir tetikleyiciyle başlar. Bu tetikleyici bir ortam, nesne, düşünce, beden belirtisi veya sosyal bir durum olabilir. Zihin bunu tehlike olarak yorumladığında kaygı yükselir.",
        "Kişi kaygıdan kurtulmak için ortamdan uzaklaşabilir, erteleyebilir, yanında biri olmadan hareket edemeyebilir ya da kendini sürekli kontrol edebilir. Bu davranışlar kısa vadede rahatlatır; fakat beyin, rahatlamayı kaçınmaya bağladığı için aynı durum bir sonraki sefer daha korkutucu hale gelebilir.",
        "Bu döngüyü fark etmek, değişimin ilk adımıdır. Amaç bir anda tüm korkuların üzerine gitmek değil, kaçınmanın nasıl çalıştığını anlayarak daha küçük ve yönetilebilir adımlar planlayabilmektir."
    ]
    yy = 250
    for p in text:
        yy = para(p, M, yy, size=9.35, leading=13.0)
        yy -= 7
    footer(6)
    c.showPage()


def page7():
    y = title("Fobiler nasıl sürer?")
    y = para("Fobilerin sürmesinde yalnızca korkulan durum değil, korkuya verilen tepkiler de önemlidir. Bazı davranışlar kişiyi o anda rahatlatır; ancak korkulan şeyle ilgili yeni ve daha gerçekçi bir öğrenmenin oluşmasını engelleyebilir.", M, y, size=9.55, leading=13.4)
    items = [
        ("Güvenlik davranışları", "Yanında sürekli su taşımak, kapıya yakın oturmak, telefonu hazır tutmak veya yalnız çıkmamak kişiye kısa süreli güven verebilir."),
        ("Kaçınmalar", "Korkulan ortama girmemek, davetleri reddetmek, yol değiştirmek ya da randevuları iptal etmek yaşam alanını daraltabilir."),
        ("Sürekli kontrol", "Nabız, nefes, yüz kızarması veya baş dönmesi gibi belirtileri sık sık kontrol etmek belirtileri daha fazla fark edilir hale getirebilir."),
        ("Güvence arama", "Yakınlardan sürekli 'bir şey olmaz değil mi?' yanıtını almak kısa süreli rahatlatır; fakat kişinin kendi gözlemine güvenmesini zorlaştırabilir."),
        ("Zihinsel hazırlık", "Her ihtimali önceden planlamaya çalışmak kontrol hissi verse de belirsizliğe tahammülü azaltabilir."),
    ]
    yy = 504
    for head, text in items:
        small_card(head, text, M, yy, 500, 62)
        yy -= 76
    footer(7)
    c.showPage()


def page8():
    y = title("Bilişsel çarpıtmalar")
    y = para("Fobik kaygıda zihin çoğu zaman hızlı ve otomatik yorumlar üretir. Bu yorumlar gerçek gibi hissedilebilir; fakat her zaman dengeli bir değerlendirme olmayabilir.", M, y, size=9.45, leading=13.2)
    table(
        ["Düşünce biçimi", "Nasıl görünebilir?", "Daha dengeli soru"],
        [
            ("Felaketleştirme", "Asansöre binersem kesin kötü bir şey olacak.", "En olası sonuç ne? Daha önce ne oldu?"),
            ("Aşırı olasılık tahmini", "Herkes yüzümün kızardığını fark edecek.", "Bunu kesin biliyor muyum?"),
            ("Belirsizliğe tahammülsüzlük", "Tam emin değilsem yapamam.", "Yüzde yüz kesinlik günlük yaşamda mümkün mü?"),
            ("Seçici dikkat", "Sadece kalp atışıma odaklanıyorum.", "Etrafta başka ne oluyor?"),
            ("Duyguya göre karar", "Çok korkuyorsam tehlikedeyim.", "Korku her zaman tehlike kanıtı mı?"),
            ("Zihin okuma", "Beni tuhaf bulacaklar.", "Bunu destekleyen gerçek veri var mı?"),
        ],
        M, 560, [118, 202, 170], row_h=58, font_size=7.4
    )
    note_box("Fark etmek", "Amaç düşünceleri zorla susturmak değildir. Amaç, düşüncenin yalnızca bir zihinsel olay olduğunu ve farklı yorumların da mümkün olabileceğini görebilmektir.", M, 88, 500, 70)
    footer(8)
    c.showPage()


def page9():
    y = title("Maruz kalma neden işe yarar?")
    y = para("Maruz kalma, kişinin korktuğu durumla kontrolsüz biçimde yüzleşmesi anlamına gelmez. Klinik çalışmalarda amaç, güvenli ve kademeli biçimde kaçınmanın azalması ve beynin yeni bir öğrenme geliştirmesidir.", M, y, size=9.55, leading=13.4)
    gx, gy, gw, gh = 92, 395, 410, 170
    c.setStrokeColor(LINE)
    c.line(gx, gy, gx, gy + gh)
    c.line(gx, gy, gx + gw, gy)
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    path = c.beginPath()
    path.moveTo(gx + 8, gy + 132)
    path.curveTo(gx + 95, gy + 112, gx + 135, gy + 80, gx + 190, gy + 74)
    path.curveTo(gx + 260, gy + 68, gx + 290, gy + 48, gx + gw - 10, gy + 42)
    c.drawPath(path, stroke=1, fill=0)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 8.5)
    c.drawString(gx - 20, gy + gh + 4, "Kaygı")
    c.drawRightString(gx + gw, gy - 20, "Tekrar ve öğrenme")
    small_card("Beynin yeniden öğrenmesi", "Kişi kaçınmadan kalabildiğinde beyin, korkulan durumun her zaman beklenen felaketle sonuçlanmadığını öğrenebilir.", M, 280, 500, 68)
    small_card("Kaçınmanın kırılması", "Küçük adımlar tekrarlandıkça kaçınmanın zorunlu olmadığı fark edilebilir. Bu süreç kişiye göre planlanmalıdır.", M, 196, 500, 68)
    note_box("Önemli", "Maruz kalma çalışmaları kişiye, duruma ve eşlik eden belirtilere göre düzenlenmelidir. Zorlayıcı deneyimler profesyonel destekle ele alınmalıdır.", M, 90, 500, 70)
    footer(9)
    c.showPage()


def page10():
    y = title("Kendi kaçınma haritam")
    para("Aşağıdaki alanı son dönemde kaçındığınız bir durum için doldurabilirsiniz. Amaç kendinizi yargılamak değil, döngüyü daha görünür hale getirmektir.", M, y, size=9.35, leading=13.0)
    labels = ["Tetikleyici", "Kaygı puanı (0-100)", "Kaçınma", "Kısa vadede sonuç", "Uzun vadede sonuç", "Alternatif davranış"]
    yy = 620
    for lab in labels:
        line_field(M, yy, 500, lab, h=52)
        yy -= 64
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 13)
    c.drawString(M, 188, "Kaçınma Döngüm")
    for i, lab in enumerate(["Tetikleyici", "Kaygı", "Kaçınma", "Rahatlama", "Korkunun sürmesi"]):
        x = M + i * 96
        box(x, 118, 82, 44, fill=SOFT, stroke=BLUE, radius=12)
        c.setFont("Arial-Bold", 7.2)
        c.setFillColor(NAVY)
        c.drawCentredString(x + 41, 136, lab)
        if i < 4:
            arrow(x + 82, 140, x + 96, 140, BLUE)
    footer(10)
    c.showPage()


def page11():
    y = title("Güvenlik davranışlarım")
    para("Güvenlik davranışları çoğu zaman iyi niyetle yapılır. Kişi kendini korumaya çalışır. Ancak bu davranışlar zamanla 'bunlar olmadan baş edemem' inancını güçlendirebilir.", M, y, size=9.4, leading=13.0)
    table(
        ["Davranış", "Kısa vadede ne sağlıyor?", "Uzun vadede neye yol açıyor?", "Küçük değişiklik"],
        [
            ("", "", "", ""),
            ("", "", "", ""),
            ("", "", "", ""),
            ("", "", "", ""),
            ("", "", "", ""),
            ("", "", "", ""),
        ],
        M, 610, [95, 140, 140, 115], row_h=58, font_size=7.6
    )
    note_box("Örnek", "Kapıya yakın oturmak kısa vadede güven hissi verebilir. Küçük değişiklik, bir sonraki denemede kapıdan bir sıra daha uzağa oturmak olabilir.", M, 92, 500, 70)
    footer(11)
    c.showPage()


def page12():
    y = title("Korku merdivenim")
    para("Korku merdiveni, kaçınılan durumları en kolaydan en zora doğru sıralamaya yardımcı olur. Amaç en zor basamağa atlamak değil, küçük ve sürdürülebilir basamaklarla ilerlemektir.", M, y, size=9.4, leading=13.0)
    x0, y0, w0 = 102, 240, 390
    for i in range(10):
        yy = y0 + i * 45
        fill = colors.HexColor("#f7fbfd") if i % 2 == 0 else SOFT
        box(x0 + i * 9, yy, w0 - i * 18, 32, fill=fill, stroke=LINE, radius=6)
        c.setFont("Arial-Bold", 7.6)
        c.setFillColor(NAVY)
        c.drawString(x0 + i * 9 + 10, yy + 11, f"{i * 10}-{i * 10 + 10}")
        c.setStrokeColor(colors.HexColor("#d9e7ef"))
        c.line(x0 + i * 9 + 60, yy + 11, x0 + w0 - i * 9 - 12, yy + 11)
    note_box("Kural", "Basamaklar kişiye göre değişir. Bir başkası için kolay olan bir adım sizin için zor olabilir. Merdiven karşılaştırmak için değil, kendi yolunuzu görmek için kullanılır.", M, 68, 500, 52)
    footer(12)
    c.showPage()


def page13():
    y = title("Küçük maruz kalma planım")
    para("Bu sayfa, güvenli ve yönetilebilir bir küçük adımı planlamak için hazırlanmıştır. Planın gerçekçi olması, çok büyük olmasından daha önemlidir.", M, y, size=9.4, leading=13.0)
    labels = [
        "Denemek istediğim küçük adım",
        "Beklediğim kaygı puanı (0-100)",
        "Kullanmak istediğim daha dengeli cümle",
        "Kaçınmak yerine yapacağım davranış",
        "Denemeden sonra fark ettiğim şey",
    ]
    yy = 600
    for lab in labels:
        line_field(M, yy, 500, lab, h=64)
        yy -= 78
    note_box("Hatırlatma", "Amaç kaygının hiç gelmemesi değildir. Amaç kaygı varken de küçük bir adımı sürdürebilmeyi denemektir.", M, 84, 500, 64)
    footer(13)
    c.showPage()


def page14():
    y = title("Bir haftalık kaçınma günlüğü")
    para("Bir hafta boyunca kaçınma anlarını kısa notlarla izlemek, tekrar eden örüntüleri fark etmeyi kolaylaştırabilir.", M, y, size=9.2, leading=12.8)
    headers = ["Gün", "Durum", "Kaygı", "Kaçınma", "Alternatif küçük adım", "Not"]
    rows = [["Pzt", "", "", "", "", ""], ["Sal", "", "", "", "", ""], ["Çar", "", "", "", "", ""], ["Per", "", "", "", "", ""], ["Cum", "", "", "", "", ""], ["Cmt", "", "", "", "", ""], ["Paz", "", "", "", "", ""]]
    table(headers, rows, M, 604, [46, 112, 54, 96, 144, 38], row_h=58, font_size=7.0)
    note_box("Haftanın sonunda", "En sık kaçındığım durum neydi? En küçük ilerleme nerede oldu? Bir sonraki hafta hangi basamağı denemek isterim?", M, 82, 500, 72)
    footer(14)
    c.showPage()


def page15():
    y = title("Kaçınmadan yaklaşmaya")
    y = para("Yaklaşmak, korkunun üzerine kontrolsüzce gitmek demek değildir. Yaklaşmak bazen bir telefonu açmak, kısa bir yola çıkmak, sosyal ortamda birkaç dakika kalmak ya da korkulan duruma dair küçük bir hazırlık yapmak olabilir.", M, y, size=9.6, leading=13.4)
    examples = [
        ("Kaçınma", "Davetleri tamamen reddetmek", "Küçük yaklaşma", "Kısa süreliğine uğramayı planlamak"),
        ("Kaçınma", "Asansörün yanından bile geçmemek", "Küçük yaklaşma", "Asansör kapısının yanında birkaç dakika durmak"),
        ("Kaçınma", "Tek başına dışarı çıkmamak", "Küçük yaklaşma", "Yakın bir mesafeye kısa yürüyüş yapmak"),
        ("Kaçınma", "Sunumdan kaçmak", "Küçük yaklaşma", "Bir kişiye iki dakikalık anlatım yapmak"),
    ]
    yy = 474
    for a, b, d, e in examples:
        box(M, yy, 230, 72, fill=PALE, stroke=LINE, radius=10)
        box(M + 270, yy, 230, 72, fill=SOFT, stroke=LINE, radius=10)
        c.setFont("Arial-Bold", 8.4)
        c.setFillColor(TEAL)
        c.drawString(M + 12, yy + 48, a)
        c.drawString(M + 282, yy + 48, d)
        para(b, M + 12, yy + 30, 206, size=8.2, leading=10.5, color=INK)
        para(e, M + 282, yy + 30, 206, size=8.2, leading=10.5, color=INK)
        arrow(M + 236, yy + 36, M + 264, yy + 36, BLUE)
        yy -= 88
    footer(15)
    c.showPage()


def page16():
    y = title("Yakınlar nasıl destek olabilir?")
    para("Fobik kaygı yaşayan kişiye destek olmak, onu zorlamak ya da her korkudan korumak anlamına gelmez. Destek, kişinin hızına saygı duyarak cesaretlendirici ve yargılamayan bir tutum geliştirmektir.", M, y, size=9.35, leading=13.0)
    table(
        ["Kaçınılması gereken cümle", "Yerine kullanılabilecek ifade"],
        [
            ("Bunda korkacak ne var?", "Bunun senin için zor olduğunu görüyorum."),
            ("Hadi artık yap, abartma.", "İstersen küçük bir adım planlayabiliriz."),
            ("Ben olmasam hiçbir şey yapamazsın.", "Kendi başına deneyebileceğin güvenli bir basamak seçelim."),
            ("Yine mi aynı korku?", "Bu döngüyü birlikte fark etmeye çalışabiliriz."),
            ("Kaçarsan hiç düzelmez.", "Hazır olduğunda yaklaşmak için küçük bir yol bulabiliriz."),
            ("Sana hiçbir şey olmayacak.", "Kaygı gelse de yanında kalmayı deneyebilirsin."),
        ],
        M, 568, [245, 245], row_h=56, font_size=7.8
    )
    note_box("Denge", "Yakınların görevi terapist olmak değildir. En faydalı destek çoğu zaman yargılamadan dinlemek, acele ettirmemek ve gerektiğinde profesyonel yardım aramayı kolaylaştırmaktır.", M, 88, 500, 70)
    footer(16)
    c.showPage()


def page17():
    y = title("Ne zaman profesyonel destek düşünülmeli?")
    y = para("Bazı korkular günlük yaşamı çok az etkiler ve kişi kendi yöntemleriyle baş edebilir. Ancak bazı durumlarda fobik kaygı yaşam alanını belirgin biçimde daraltır. Bu noktada profesyonel değerlendirme sürecin daha sağlıklı ilerlemesine yardımcı olabilir.", M, y, size=9.55, leading=13.4)
    items = [
        "Korku nedeniyle okul, iş, sosyal yaşam veya aile ilişkileri belirgin etkileniyorsa",
        "Kaçınmalar giderek artıyor ve kişinin yaşam alanı daralıyorsa",
        "Panik atak benzeri yoğun bedensel belirtiler sık yaşanıyorsa",
        "Kişi yalnız çıkmakta, yolculuk yapmakta veya sosyal ortamlara girmekte belirgin zorlanıyorsa",
        "Fobiye depresif belirtiler, yoğun umutsuzluk veya belirgin işlev kaybı eşlik ediyorsa",
        "Korku nedeniyle alkol, madde veya kontrolsüz ilaç kullanımı gibi riskli baş etme yolları gelişiyorsa",
        "Kişi korkusunu anlamaya çalışsa da tek başına ilerlemekte zorlanıyorsa",
    ]
    bullet(items, M, y - 10, width=490, size=9.0, leading=12.0)
    note_box("Acil durumlar", "Kendinize zarar verme düşünceniz varsa, gerçeklik değerlendirmesinde bozulma hissediyorsanız ya da ani ve alışılmadık bedensel belirtiler yaşıyorsanız gecikmeden acil sağlık hizmetlerine başvurun.", M, 92, 500, 78, fill=WARN)
    footer(17)
    c.showPage()


def page18():
    y = title("Sık Sorulan Sorular")
    faqs = [
        ("Fobiler geçer mi?", "Birçok kişide doğru değerlendirme ve uygun destekle fobik kaçınmalar azalabilir."),
        ("İlaç gerekir mi?", "Her durumda gerekmez. Eşlik eden belirtiler ve kişinin ihtiyacı birlikte değerlendirilir."),
        ("Maruz kalmak zorunda mıyım?", "Amaç zorla yüzleşmek değildir; güvenli, kademeli ve kişiye uygun adımlar planlanabilir."),
        ("Korkum mantıksızsa neden geçmiyor?", "Bedenin alarm sistemi yalnızca mantıkla kapanmayabilir. Yeni öğrenme zaman ister."),
        ("Kaçınmak neden kötü?", "Kısa vadede rahatlatabilir; uzun vadede korkunun sürmesine katkı sağlayabilir."),
        ("Fobi çocuklarda da olur mu?", "Evet. Çocuklarda korkular gelişimsel olarak değişebilir; süre ve işlevsellik önemlidir."),
        ("Panik atak fobi midir?", "Panik atak ayrı bir yaşantıdır; bazı fobik durumlarda panik belirtileri eşlik edebilir."),
        ("Yakınlarım beni zorlamalı mı?", "Zorlamak çoğu zaman direnci artırabilir. Destekleyici ve kademeli yaklaşım daha uygundur."),
        ("Her korku hastalık mıdır?", "Hayır. Korkunun yaşamı ne kadar etkilediği değerlendirilmelidir."),
        ("Kendi kendime çalışabilir miyim?", "Farkındalık çalışmaları yardımcı olabilir; belirgin zorlanmada uzman desteği önemlidir."),
    ]
    x_positions = [M, M + 255]
    y_positions = [650, 650]
    for i, (q, a) in enumerate(faqs):
        col = i % 2
        x = x_positions[col]
        yy = y_positions[col]
        box(x, yy - 58, 235, 58, fill=PALE, stroke=LINE, radius=8)
        c.setFillColor(NAVY)
        c.setFont("Arial-Bold", 8.4)
        c.drawString(x + 10, yy - 17, q)
        para(a, x + 10, yy - 31, 215, size=7.0, leading=8.7, color=MUTED)
        y_positions[col] -= 70
    footer(18)
    c.showPage()


def page19():
    y = title("Hatırlatma kartı")
    para("Bu kartı kesip çantanızda, cüzdanınızda veya çalışma alanınızda bulundurabilirsiniz. Amaç kaygıyı zorla bastırmak değil, zor bir anda yönünüzü hatırlamaktır.", M, y, size=9.4, leading=13.0)
    x, yy, w, h = 92, 210, 410, 300
    box(x, yy, w, h, fill=SOFT, stroke=BLUE, radius=18, lw=1.3)
    c.setStrokeColor(colors.HexColor("#9fc9e1"))
    c.setDash(4, 4)
    c.roundRect(x + 14, yy + 14, w - 28, h - 28, 12, fill=0, stroke=1)
    c.setDash()
    c.setFillColor(NAVY)
    c.setFont("Georgia-Bold", 22)
    c.drawCentredString(x + w / 2, yy + h - 70, "Hatırlatma")
    lines = [
        "Korkunun geçmesi için değil,",
        "hayatın genişlemesi için adım atıyorum.",
        "Kaygı hissetmem tehlikede olduğum anlamına gelmez.",
        "Küçük bir adım da ilerlemedir.",
        "Kaçınma kısa rahatlatır; yaklaşmak yeni öğrenme sağlar.",
    ]
    cy = yy + h - 116
    c.setFont("Arial-Bold", 11.2)
    for line in lines[:2]:
        c.drawCentredString(x + w / 2, cy, line)
        cy -= 18
    c.setFont("Arial", 9.5)
    cy -= 8
    for line in lines[2:]:
        c.drawCentredString(x + w / 2, cy, line)
        cy -= 22
    c.setFont("Arial-Italic", 8.6)
    c.setFillColor(MUTED)
    c.drawCentredString(x + w / 2, yy + 42, "Bu kart bilgilendirme amaçlıdır; tedavinin yerine geçmez.")
    footer(19)
    c.showPage()


def page20():
    y = title("Son söz")
    texts = [
        "Fobik kaygı yaşayan birçok kişi, korkusunun mantıklı olmadığını bilmesine rağmen o anda bedeninin verdiği tepkiyi durduramaz. Bu nedenle fobiyi yalnızca 'düşünme biçimi' ya da 'cesaret meselesi' gibi görmek eksik kalır. Zihin, beden ve davranış birlikte çalışır. Kişi bunu fark ettiğinde kendisine daha az yüklenmeye başlayabilir.",
        "Kaçınma çoğu zaman anlaşılır bir tepkidir. İnsan zorlandığı bir durumdan uzaklaştığında rahatlamak ister. Sorun, bu rahatlamanın zamanla yaşamı daraltmasıdır. Bir süre sonra kişi yalnızca korktuğu durumdan değil, korkunun gelebileceği ihtimalinden de kaçınmaya başlayabilir. Bu rehberdeki çalışmalar, tam da bu daralmayı görünür kılmak için hazırlandı.",
        "Değişim çoğu zaman büyük kararlarla değil, küçük ve tekrarlanabilir adımlarla başlar. Bugün yalnızca kaçındığınız bir durumu yazmak bile bir adımdır. Yarın o durumun hangi düşünceyle güçlendiğini fark etmek başka bir adımdır. Sonra belki çok küçük bir yaklaşma denemesi gelir. Bu süreç düz bir çizgi gibi ilerlemek zorunda değildir.",
        "Kendinize karşı sabırlı olmak önemlidir. Bazı günler daha kolay, bazı günler daha zor olabilir. Zor bir gün yaşamak başa dönmek anlamına gelmez. Fark ettiğiniz her döngü, yazdığınız her gözlem ve attığınız her küçük adım, yaşam alanınızı yeniden genişletme sürecinin bir parçası olabilir.",
        "Bu rehber genel bilgilendirme ve kendini anlama amacıyla hazırlanmıştır. Tanı, değerlendirme ve tedavinin yerine geçmez. Belirtiler günlük yaşamınızı belirgin şekilde etkiliyorsa, bir psikiyatri uzmanından veya ruh sağlığı profesyonelinden destek almak en sağlıklı yol olacaktır."
    ]
    for p in texts:
        y = para(p, M, y, size=9.75, leading=13.8)
        y -= 9
    note_box("Kapanış", "Fobi kişinin kimliği değildir. Korku alanı daraltabilir; ancak uygun destek ve küçük adımlarla hayat yeniden genişleyebilir.", M, 88, 500, 72)
    footer(20)
    c.showPage()


for fn in [
    page1, page2, page3, page4, page5, page6, page7, page8, page9, page10,
    page11, page12, page13, page14, page15, page16, page17, page18, page19, page20
]:
    fn()

c.save()
print(OUT)
