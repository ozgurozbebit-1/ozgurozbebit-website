from pathlib import Path
import math

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


OUT = Path("output/pdf/sinav-kaygisini-anlamak.pdf")
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
c.setTitle("Sınav Kaygısını Anlamak")
c.setAuthor("Dr. Özgür Özbebit")
c.setSubject("Psikoeğitim Serisi No: 9 - Öğrenciler ve aileler için psikoeğitim ve çalışma rehberi")
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


def para(text, x, y, width=500, size=9.6, leading=13.4, font="Arial", color=MUTED):
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
    para(text, x + 14, y + h - 42, w - 28, size=8.35, leading=10.8, color=INK)


def bullet(items, x, y, width=500, size=8.8, leading=11.5):
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
    c.setFont("Arial-Bold", 8.3)
    c.setFillColor(NAVY)
    c.drawString(x + 12, y - 17, label)
    c.setStrokeColor(colors.HexColor("#d9e7ef"))
    c.line(x + 12, y - h + 12, x + w - 12, y - h + 12)


def mini_label(text, x, y, w=220):
    box(x, y, w, 28, fill=SOFT, stroke=LINE, radius=8)
    c.setFont("Arial-Bold", 8.4)
    c.setFillColor(NAVY)
    c.drawCentredString(x + w / 2, y + 10, text)


def page1():
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#0f2a45"))
    c.circle(W * 0.84, H * 0.17, 178, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#244e68"))
    c.circle(W * 0.14, H * 0.88, 118, fill=1, stroke=0)
    # Calm abstract study map, no pressure imagery.
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.1)
    for i in range(5):
        c.roundRect(172 + i * 36, 390 - i * 13, 200, 86, 34, fill=0, stroke=1)
    c.setStrokeColor(colors.HexColor("#dbeaf4"))
    c.bezier(150, 420, 220, 500, 330, 330, 445, 424)
    c.line(220, 360, 395, 360)
    c.line(250, 335, 365, 335)
    draw_logo(W / 2 - 54, H - 182, 108)
    c.setFillColor(BLUE)
    c.setFont("Arial-Bold", 12)
    c.drawCentredString(W / 2, H - 226, "Psikoeğitim Serisi No: 9")
    c.setFillColor(WHITE)
    c.setFont("Georgia-Bold", 30)
    c.drawCentredString(W / 2, H - 286, "Sınav Kaygısını")
    c.drawCentredString(W / 2, H - 322, "Anlamak")
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(W / 2 - 92, H - 346, W / 2 + 92, H - 346)
    c.setFont("Arial", 12)
    c.setFillColor(colors.HexColor("#dbeaf4"))
    c.drawCentredString(W / 2, H - 382, "Öğrenciler ve Aileler İçin")
    c.drawCentredString(W / 2, H - 400, "Psikoeğitim ve Çalışma Rehberi")
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
    text = [
        "Sınav kaygısı yalnızca sınavdan önce hissedilen geçici bir heyecan değildir. Bazı öğrencilerde düşünmeyi, hatırlamayı, dikkatini sürdürmeyi ve bildiği bilgiyi kullanabilmeyi belirgin biçimde zorlaştırabilir. Öğrenci yeterince çalışmış olsa bile sınav anında zihninin boşaldığını, soruları tekrar tekrar okuduğunu veya bedensel belirtilere takılı kaldığını hissedebilir.",
        "Kaygı yaşamak, öğrencinin hazırlıksız, isteksiz ya da tembel olduğu anlamına gelmez. Hatta çok çalışan, sorumluluk sahibi ve yüksek beklentili öğrencilerde de sınav kaygısı yoğun olabilir. Bazen sorun çalışmamak değil, çalışılan bilgiyi sınav koşullarında düzenli şekilde kullanamamaktır. Bu ayrım doğru anlaşılmadığında öğrenci kendisini daha fazla suçlayabilir.",
        "Öğrenciler yaşadıkları güçlüğü ailelerinden ve öğretmenlerinden gizleyebilir. Çünkü anlaşılmayacaklarını, eleştirileceklerini ya da beklentileri karşılayamadıkları için hayal kırıklığı yaratacaklarını düşünebilirler. 'Yapabilirdim ama sınavda olmadı' deneyimi birkaç kez tekrarlandığında öğrencinin kendine güveni azalabilir ve çaresizlik hissi artabilir.",
        "Doğru bilgi kaygıyı tamamen ortadan kaldırmak zorunda değildir; fakat kaygıyı daha anlaşılır hale getirebilir. Kaygının beden, düşünce ve davranış üzerinde nasıl çalıştığını görmek, öğrencinin kendisini suçlamadan kendi döngüsünü tanımasına yardımcı olur. Bu rehberin amacı da yüzeysel öneriler vermek değil, sınav kaygısını sakin ve uygulanabilir bir çerçevede ele almaktır.",
        "Bu çalışma, öğrencinin kendi kaygı haritasını çıkarması, erteleme veya aşırı çalışma gibi davranışları fark etmesi, sınav öncesi ve sınav anı için gerçekçi küçük adımlar belirlemesi için hazırlandı. Aileler için de amaç suçlamak değil, iyi niyetli baskının öğrencide nasıl bir yük oluşturabileceğini görebilmektir."
    ]
    for p in text:
        y = para(p, M, y, size=9.85, leading=13.8)
        y -= 7
    note_box("Unutmayın", "Sınav kaygısı zekâ eksikliği, tembellik veya isteksizlik değildir. Kaygı yükseldiğinde kişi bildiği bilgiye ulaşmakta ve dikkatini sürdürmekte zorlanabilir.", M, 88, 500, 76)
    footer(2)
    c.showPage()


def page3():
    y = title("Sınav kaygısı nedir?")
    para("Sınav öncesinde bir miktar uyarılmışlık yaşamak doğaldır. Bu durum öğrencinin hazırlanmasını, dikkatini toplamasını ve sınava önem vermesini destekleyebilir. Ancak kaygı çok yükseldiğinde kişi sınav sorularından çok kendi bedenine, gelecekle ilgili düşüncelere veya başarısızlık ihtimaline odaklanabilir.", M, y, size=9.55, leading=13.2)
    headers = [("Bedende", ["Kalp çarpıntısı", "Terleme", "Titreme", "Nefesin hızlanması", "Mide rahatsızlığı", "Baş ağrısı", "Kas gerginliği", "Sık tuvalet ihtiyacı"]),
               ("Zihinde", ["Hiçbir şey hatırlamıyorum", "Kesin kötü olacak düşüncesi", "Herkes benden daha iyi", "Dikkatin dağılması", "Boşluk hissi", "Soruyu tekrar okuma"]),
               ("Davranışta", ["Erteleme", "Sınavdan kaçınma", "Aşırı çalışma", "Sürekli tekrar", "Uyku düzenini bozma", "Son anda çalışma", "Denemelerden kaçınma"])]
    for i, (head, items) in enumerate(headers):
        x = M + i * 170
        box(x, 182, 154, 324, fill=PALE, stroke=LINE, radius=10)
        c.setFillColor(NAVY)
        c.setFont("Arial-Bold", 12)
        c.drawCentredString(x + 77, 478, head)
        bullet(items, x + 12, 450, width=130, size=7.8, leading=10.2)
    footer(3)
    c.showPage()


def page4():
    y = title("Kaygı performansı nasıl etkiler?")
    # Inverted U graph.
    gx, gy, gw, gh = 90, 430, 415, 190
    c.setStrokeColor(LINE)
    c.setLineWidth(1)
    c.line(gx, gy, gx, gy + gh)
    c.line(gx, gy, gx + gw, gy)
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    path = c.beginPath()
    path.moveTo(gx + 8, gy + 18)
    path.curveTo(gx + 120, gy + 160, gx + 245, gy + 160, gx + gw - 8, gy + 24)
    c.drawPath(path, stroke=1, fill=0)
    labels = [("Çok düşük\nuyarılma", gx + 52), ("Yararlı düzey", gx + 205), ("Aşırı kaygı", gx + 350)]
    c.setFont("Arial-Bold", 8.4)
    c.setFillColor(NAVY)
    for lab, xx in labels:
        for j, line in enumerate(lab.split("\n")):
            c.drawCentredString(xx, gy - 20 - j * 10, line)
    c.drawString(gx - 30, gy + gh + 4, "Performans")
    c.drawRightString(gx + gw, gy - 42, "Uyarılma / kaygı")
    text = [
        "Bir miktar kaygı dikkati ve hazırlığı destekleyebilir. Öğrenci sınava önem verdiğini fark eder, plan yapar ve sorumluluğuna yönelir. Sorun kaygının varlığı değil, kaygının kişinin düşünmesini ve davranışını yönetmeye başlamasıdır.",
        "Kaygı yükseldikçe dikkat sınav sorusundan uzaklaşıp 'ne olacak?' düşüncesine kayabilir. Zihinsel enerji soruya değil, hata yapma ihtimaline, başkalarının beklentilerine veya bedensel belirtilere harcanabilir. Bu nedenle amaç kaygıyı sıfırlamak değil, yönetilebilir düzeye indirmektir.",
        "Öğrenci kaygı varken de düşünmeye, soruya dönmeye ve bir sonraki küçük adımı atmaya çalışabilir. Bu beceri tekrarlarla gelişir; tek bir deneme sonucuyla değerlendirilmemelidir."
    ]
    yy = 330
    for p in text:
        yy = para(p, M, yy, size=9.55, leading=13.2)
        yy -= 7
    note_box("Bilgi", "Hedef sıfır kaygı değildir. Hedef, kaygı varken de düşünmeye ve soruya dönebilmeyi öğrenmektir.", M, 82, 500, 62)
    footer(4)
    c.showPage()


def flow_page(page_no, heading, steps, side_text=None, note=None):
    y = title(heading)
    x0, y0 = 86, 620
    for i, step in enumerate(steps):
        yy = y0 - i * 48
        box(x0, yy, 226, 32, fill=SOFT, stroke=BLUE, radius=10)
        c.setFont("Arial-Bold", 7.6)
        c.setFillColor(NAVY)
        for j, line in enumerate(wrap_lines(step, 202, "Arial-Bold", 7.6)):
            c.drawCentredString(x0 + 113, yy + 19 - j * 8, line)
        if i < len(steps) - 1:
            arrow(x0 + 113, yy, x0 + 113, yy - 15)
    yy = y
    if side_text:
        for p in side_text:
            yy = para(p, 346, yy, 190, size=8.65, leading=11.6)
            yy -= 4
    if note:
        note_box(note[0], note[1], 346, 92, 190, 84, fill=WARN)
    footer(page_no)
    c.showPage()


def page5():
    flow_page(5, "Sınav kaygısı döngüsü", [
        "Sınav veya deneme yaklaşır",
        "\"Başaramazsam her şey biter\"",
        "Kaygı ve bedensel belirtiler",
        "Kaçınma, erteleme veya aşırı çalışma",
        "Kısa süreli rahatlama",
        "Hazırlığın düzensizleşmesi",
        "Denemede zorlanma",
        "\"Ben yapamıyorum\" düşüncesi güçlenir",
    ], [
        "Kaçınma kısa süreli rahatlama sağlayabilir. Öğrenci masadan kalktığında, denemeyi ertelediğinde veya zor konudan uzaklaştığında kaygı bir süre azalır. Fakat bu rahatlama uzun vadede sınav ortamını daha tehdit edici hale getirebilir.",
        "Aşırı çalışma da her zaman verimli çalışma anlamına gelmez. Öğrenci sürekli kontrol ederek, aynı konuyu tekrar tekrar dönerek veya dinlenmeyi tamamen bırakarak kaygısını azaltmaya çalışabilir. Ancak bu durum dikkat ve motivasyonu yorabilir.",
        "Döngüyü fark etmek, öğrencinin kendisini suçlaması için değil, hangi noktada küçük bir değişiklik yapabileceğini görmesi içindir. Bazen ilk adım, görevden kaçmadan ama görevi küçülterek başlamaktır."
    ])


def page6():
    y = title("Sınav kaygısını artıran düşünceler", size=23)
    thoughts = [
        ("Bu sınav hayatımın tamamını belirleyecek.", "Önemli olabilir; fakat kişisel değerimi tek başına belirlemez."),
        ("Bir hata yaparsam her şey biter.", "Bir hata bütün sınavın sonucunu belirlemek zorunda değildir."),
        ("Ailemi hayal kırıklığına uğratacağım.", "Ailemle ilişkim yalnızca sınav sonucuma bağlı olmamalı."),
        ("Herkes benden daha hazır.", "Başkalarının hazırlığını tam olarak bilemem."),
        ("Kaygılanıyorsam kötü geçecek.", "Kaygı zorlayıcıdır; ama tek başına sonucu göstermez."),
        ("Bütün konuları yüzde yüz bilmeliyim.", "Eksikler olabilir; hedefim bildiklerimi kullanmak."),
        ("Sınavda beynim duracak.", "Zorlanırsam küçük adımlarla soruya dönebilirim."),
        ("Kazanamazsam değersizim.", "Bir sonuç insanın değerini ölçmez."),
        ("Hızlı çözemezsem yapamıyorum.", "Bazı sorular daha yavaş ve dikkatli ilerlemeyi gerektirir."),
        ("Denemede düşük aldım; yine öyle olacak.", "Deneme bilgi verir; geleceği kesinleştirmez."),
        ("Dinlenirsem geri kalırım.", "Dinlenme öğrenmenin sürdürülebilir parçasıdır."),
        ("Herkes benden çok çalışıyor.", "Kendi planım ve ihtiyaçlarım üzerinden ilerlemem gerekir."),
    ]
    box(M, y - 20, 500, 28, fill=NAVY, stroke=NAVY, radius=8)
    c.setFillColor(WHITE)
    c.setFont("Arial-Bold", 8.6)
    c.drawString(M + 12, y - 2, "Otomatik düşünce")
    c.drawString(M + 266, y - 2, "Daha dengeli karşılık")
    yy = y - 64
    for t, a in thoughts:
        box(M, yy, 500, 38, fill=PALE, stroke=LINE, radius=8)
        para(t, M + 12, yy + 21, 214, size=7.3, leading=8.5, color=INK)
        c.setFillColor(NAVY)
        c.setFont("Arial-Bold", 15)
        c.drawCentredString(M + 250, yy + 12, "->")
        para(a, M + 278, yy + 21, 206, size=7.1, leading=8.3, color=MUTED)
        yy -= 44
    footer(6)
    c.showPage()


def page7():
    flow_page(7, "Mükemmeliyetçilik ve sınav", [
        "Kusursuz olmalıyım",
        "Başlamak zorlaşıyor",
        "Erteleme veya aşırı kontrol",
        "Zaman kaybı",
        "Kaygının artması",
        "Daha fazla kusursuzluk baskısı",
    ], [
        "Mükemmeliyetçilik öğrenciyi bazen daha disiplinli gösterebilir; fakat yüzde yüz hazırlık beklentisi sürdürülemez hale geldiğinde çalışma başlamadan yorucu bir baskıya dönüşür. Öğrenci hata yapmaya tahammül edemediğinde küçük eksikler tüm emeği değersizmiş gibi hissedilebilir.",
        "Tek bir düşük puanı genel başarısızlık gibi yorumlamak, sürekli başkalarıyla karşılaştırmak ve kusursuz plan ihtiyacı nedeniyle çalışmaya başlayamamak kaygıyı artırabilir. Bazen planın kusursuz olması değil, başlamayı mümkün kılması daha önemlidir.",
        "Başarıyı kişisel değerle eşitlemek öğrencinin üzerinde ağır bir yük oluşturur. Daha sağlıklı hedef, eksikleri yok saymadan ama her eksik karşısında çökmeyen bir çalışma düzeni kurmaktır."
    ], ("Hatırlatma", "Yeterince iyi ve sürdürülebilir çalışma, kusursuz fakat sürdürülemeyen bir plandan daha işlevsel olabilir."))


def page8():
    y = title("Erteleme gerçekten tembellik midir?", size=24)
    steps = ["Görev", "Kaygı", "Erteleme", "Kısa rahatlama", "Suçluluk ve zaman baskısı", "Daha yoğun kaygı"]
    x0, y0 = 80, 608
    for i, step in enumerate(steps):
        yy = y0 - i * 42
        box(x0, yy, 212, 28, fill=SOFT, stroke=BLUE, radius=9)
        c.setFont("Arial-Bold", 7.6)
        c.setFillColor(NAVY)
        c.drawCentredString(x0 + 106, yy + 10, step)
        if i < len(steps) - 1:
            arrow(x0 + 106, yy, x0 + 106, yy - 13)
    text = [
        "Erteleme her zaman isteksizlik anlamına gelmez. Bazen çalışma masasına oturmak, öğrenciyi hata yapma, yetişememe veya yetersiz kalma ihtimaliyle karşı karşıya getirir. Bu yüzden telefon, temizlik, uyku ya da başka işler geçici rahatlama sağlayabilir.",
        "Fakat erteleme sonrası suçluluk ve zaman baskısı artar. Öğrenci daha geç başladığı için görev daha büyük görünür; bu da kaygıyı tekrar yükseltebilir. Döngü böylece kendini besler.",
        "Büyük ve belirsiz görevleri küçültmek başlamayı kolaylaştırabilir. Amaç tüm konuyu bitirmek değil, ilk küçük adımı belirleyip sürdürülebilir bir başlangıç yapmaktır."
    ]
    yy = y
    for p in text:
        yy = para(p, 342, yy, 196, size=8.5, leading=11.4)
        yy -= 5
    line_field(M, 188, 500, "En çok ertelediğim ders veya konu:", h=34)
    line_field(M, 146, 500, "Başlamadan önce zihnimden geçen düşünce:", h=34)
    line_field(M, 104, 500, "Görevi küçültmek için atabileceğim ilk adım:", h=34)
    footer(8)
    c.showPage()


def page9():
    y = title("Aşırı çalışma da bir kaygı davranışı olabilir mi?")
    text = [
        "Sürekli çalışmak her zaman verimli çalışmak değildir. Bazı öğrenciler dinlenmeyi suçlulukla yaşar, uyku saatlerinden vazgeçer veya aynı konuyu tekrar tekrar kontrol eder. Bu davranışlar kısa vadede güven verir gibi görünse de uzun vadede dikkat kaybı, tükenmişlik ve öğrenilen bilginin dağınık kalmasına yol açabilir.",
        "Kaygı odaklı çalışmada öğrenci çoğu zaman 'daha fazlasını yapmalıyım' hissiyle hareket eder. Oysa verimli çalışma yalnızca süreyle değil; öncelik sırası, deneme ve geri bildirim, yapılabilir hedefler ve uykuya yer vermekle ilişkilidir.",
        "Eksiklerle karşılaşmak başarısızlık değildir. Deneme sınavları, yanlışlar ve zorlanılan konular öğrencinin nereden ilerleyebileceğini gösteren geri bildirimlerdir."
    ]
    for p in text:
        y = para(p, M, y, size=9.4, leading=13.0)
        y -= 6
    cols = [("Verimli çalışma", ["Planlı mola", "Öncelik sırası", "Deneme ve geri bildirim", "Uykuya yer verme", "Yapılabilir hedefler", "Eksikleri kabul etme"]),
            ("Kaygı odaklı çalışma", ["Sürekli kontrol", "Dinlenememe", "Gece boyu çalışma", "Konu değiştirememe", "Kendini cezalandırma", "Bitmeyen tekrar"])]
    for i, (head, items) in enumerate(cols):
        x = M + i * 258
        box(x, 126, 238, 252, fill=PALE, stroke=LINE, radius=12)
        c.setFont("Arial-Bold", 12)
        c.setFillColor(NAVY)
        c.drawString(x + 16, 346, head)
        bullet(items, x + 18, 314, width=204, size=8.7, leading=12.0)
    footer(9)
    c.showPage()


def page10():
    y = title("Kendi sınav kaygısı haritam")
    fields = ["En çok kaygılandığım sınav veya ders:", "Kaygının yükseldiği zaman:", "Zihnimden geçen ilk düşünce:", "Bedenimde fark ettiğim belirtiler:", "Kaygım 0-10:", "O anda yaptığım davranış:", "Bu davranış kısa vadede ne sağladı?", "Uzun vadede neye mal oldu?", "Daha işlevsel bir alternatif ne olabilir?"]
    yy = y
    for f in fields:
        line_field(M, yy, 500, f, h=30)
        yy -= 36
    c.setFont("Arial-Bold", 11)
    c.setFillColor(NAVY)
    c.drawString(M, 282, "Bir haftalık kısa kayıt")
    headers = ["Tarih", "Tetikleyici", "Düşünce", "Kaygı", "Davranış", "Sonuç"]
    x0, y0 = M, 244
    col_w = [58, 90, 110, 48, 92, 102]
    box(x0, y0, 500, 22, fill=NAVY, stroke=NAVY, radius=7)
    c.setFont("Arial-Bold", 6.8)
    c.setFillColor(WHITE)
    xx = x0
    for h, cw in zip(headers, col_w):
        c.drawString(xx + 5, y0 + 8, h)
        xx += cw
    for r in range(4):
        yy = y0 - 32 - r * 34
        box(x0, yy, 500, 30, fill=WHITE, stroke=LINE, radius=4)
        xx = x0
        for cw in col_w[:-1]:
            xx += cw
            c.line(xx, yy, xx, yy + 30)
    footer(10)
    c.showPage()


def page11():
    y = title("Çalışmayı daha başlanabilir hâle getirmek")
    items = [
        ("Görevi küçültmek", "Belirsiz bir hedef yerine küçük ve görülebilir bir başlangıç seçilebilir."),
        ("Başlangıç hedefini düşük tutmak", "İlk hedef tüm günü kurtarmak değil, masaya oturmayı mümkün kılmaktır."),
        ("Süre yerine görev tanımlamak", "Ne kadar oturacağım yerine hangi küçük işi bitireceğim sorusu daha somut olabilir."),
        ("Zor konuyu parçalara ayırmak", "Tek büyük konu birkaç küçük başlığa bölünebilir."),
        ("Dikkat dağıtıcıları azaltmak", "Telefon ve bildirimler çalışma başlangıcında ayrı bir yere bırakılabilir."),
        ("Başlangıç ritüeli", "Aynı masa, kısa hazırlık ve net ilk adım beynin geçişini kolaylaştırabilir."),
        ("Biteni işaretlemek", "Görünen ilerleme motivasyonu destekleyebilir."),
        ("Eksiklerle karşılaşmak", "Eksik görmek başarısızlık değil, yön gösteren bilgidir."),
        ("Denemeyi araç görmek", "Deneme yalnızca puan değil, geri bildirim sağlar."),
    ]
    for i, (head, body) in enumerate(items):
        x = M + (i % 3) * 170
        row = i // 3
        top = y - row * 118
        box(x, top - 92, 154, 98, fill=PALE, stroke=LINE, radius=10)
        c.setFont("Arial-Bold", 8.0)
        c.setFillColor(NAVY)
        c.drawString(x + 10, top - 18, head)
        para(body, x + 10, top - 34, 132, size=7.1, leading=9.0)
    note_box("Örnek", "\"Bugün matematik çalışacağım\" yerine: \"İlk 20 dakikada 10 soru çözeceğim ve yanlışları işaretleyeceğim.\"", M, 160, 500, 62)
    line_field(M, 112, 500, "Yarın başlayabileceğim en küçük görev:", h=30)
    line_field(M, 76, 500, "Bu görevin ilk beş dakikasında yapacağım şey:", h=30)
    footer(11)
    c.showPage()


def page12():
    y = title("Deneme sınavlarından kaçınmak")
    text = [
        "Deneme sınavı yalnızca puan ölçümü değildir. Öğrencinin süre yönetimini, dikkatini ve sınav ortamında kaygıyla temas etme becerisini gözlemlemesine yardımcı olabilir. Düşük bir deneme sonucu gerçek sınavın kesin tahmini olarak görülmemelidir.",
        "Denemeden kaçınmak kısa vadede rahatlatıcı olabilir; çünkü öğrenci olası düşük sonuçla karşılaşmaz. Ancak sınav ortamına yabancılık sürdükçe kaygı daha büyük görünebilir. Bu nedenle denemeler bazen küçük basamaklarla yeniden ele alınabilir.",
        "Aşağıdaki plan yalnızca örnektir. Her öğrenci için aynı sıra uygun olmayabilir; yoğun kaygı veya işlevsellik kaybı varsa profesyonel değerlendirme yararlı olabilir."
    ]
    for p in text:
        y = para(p, M, y, size=9.5, leading=13.2)
        y -= 6
    steps = ["Süresiz 10 soru", "Kısa süreli mini deneme", "Sessiz ortamda yarım deneme", "Tam süreli deneme", "Gerçek sınava benzer ortam", "Sonuç sonrası değerlendirme"]
    x0, yy = 112, 360
    for i, s in enumerate(steps):
        box(x0, yy - i * 48, 370, 32, fill=SOFT, stroke=BLUE, radius=10)
        c.setFont("Arial-Bold", 8.6)
        c.setFillColor(NAVY)
        c.drawCentredString(x0 + 185, yy + 10 - i * 48, f"{i+1}. {s}")
        if i < len(steps) - 1:
            arrow(x0 + 185, yy - i * 48, x0 + 185, yy - 14 - i * 48)
    footer(12)
    c.showPage()


def page13():
    y = title("Sınavdan önceki hafta")
    checklist = ["Sınav yeri", "Saat", "Kimlik/belge", "Ulaşım", "Uyku planı", "Hafif öğün", "Su", "Kalem ve gerekli malzemeler", "Telefon ve bildirim planı"]
    tips = ["Yeni konu yükünü sınırlamak", "Uyku saatini sabitlemeye çalışmak", "Yoğun kafein kullanımından kaçınmak", "Deneme sonuçlarını felaketleştirmemek", "Son gün aşırı çalışmamak", "Gerekli eşyaları önceden hazırlamak", "Ulaşım planı yapmak", "Sosyal medya karşılaştırmalarını azaltmak", "Bedensel belirtileri tehlike gibi yorumlamamak"]
    box(M, y - 260, 238, 278, fill=PALE, stroke=LINE, radius=12)
    box(M + 262, y - 260, 238, 278, fill=PALE, stroke=LINE, radius=12)
    c.setFont("Arial-Bold", 12)
    c.setFillColor(NAVY)
    c.drawString(M + 16, y - 18, "Genel öneriler")
    c.drawString(M + 278, y - 18, "Kontrol listesi")
    bullet(tips, M + 18, y - 48, width=204, size=7.9, leading=10.6)
    yy = y - 48
    for item in checklist:
        c.setStrokeColor(BLUE)
        c.rect(M + 280, yy - 3, 9, 9, fill=0, stroke=1)
        para(item, M + 296, yy, 190, size=8.1, leading=10, color=INK)
        yy -= 22
    note_box("Not", "Bu liste kişiye özel çalışma planı değildir; sınav haftasında zihinsel yükü azaltmak için düzenleyici bir hatırlatmadır.", M, 130, 500, 62)
    footer(13)
    c.showPage()


def page14():
    y = title("Sınav sabahı")
    text = [
        "Sınav sabahı kaygının var olması başarısızlık anlamına gelmez. Beden uyarılmış olabilir; kalp daha hızlı atabilir, mide hassaslaşabilir veya zihin bir süre dağınık hissedebilir. Bu belirtiler öğrencinin sınava önem verdiğini ve bedeninin hazırlanma moduna geçtiğini gösterebilir.",
        "Son dakika yoğun tekrar bazı öğrencilerde kaygıyı artırabilir. Bu nedenle sabahın amacı bütün konuları yeniden bitirmek değil, sınava gidiş adımlarını sadeleştirmektir. Gerekli eşyaları kontrol etmek, ulaşım planına uymak ve bedensel ihtiyaçları ihmal etmemek önemlidir.",
        "Amaç tamamen sakin olmak değil, kaygı varken de sınav adımlarını sürdürebilmektir. Öğrenci sınavın tamamını aynı anda düşünmek yerine bir sonraki küçük adıma dönebilir."
    ]
    for p in text:
        y = para(p, M, y, size=9.75, leading=13.5)
        y -= 8
    steps = ["Bedeni fark et", "Nefesi zorlamadan al", "Verişi biraz uzat", "Çevreye dikkat ver", "İlk soruya dön"]
    for i, s in enumerate(steps):
        x = M + (i % 5) * 100
        box(x, 252, 84, 66, fill=SOFT, stroke=LINE, radius=14)
        c.setFont("Arial-Bold", 8.0)
        c.setFillColor(NAVY)
        c.drawCentredString(x + 42, 288, str(i + 1))
        for j, line in enumerate(wrap_lines(s, 70, "Arial-Bold", 8.0)):
            c.drawCentredString(x + 42, 272 - j * 9, line)
    note_box("Nefes düzenleme", "Nefesi zorlamadan alıp verişi biraz uzatmak bazı öğrencilerde destekleyici olabilir. Baş dönmesi olursa normal nefese dönülmelidir.", M, 126, 500, 76)
    footer(14)
    c.showPage()


def page15():
    y = title("Sınav sırasında zihnim boşalırsa")
    box(M + 66, 214, 368, 392, fill=PALE, stroke=BLUE, radius=18, lw=1.2)
    c.setFont("Georgia-Bold", 24)
    c.setFillColor(NAVY)
    c.drawCentredString(W / 2, 552, "DUR - FARK ET - DÖN")
    steps = [
        ("Dur", "Kalemi birkaç saniye bırak."),
        ("Fark et", "\"Şu anda kaygım yükseldi\" diye adlandır."),
        ("Bedene dön", "Ayaklarının yere temasını hisset."),
        ("Nefesi düzenle", "Nefesi zorlamadan verişi uzat."),
        ("Soruyu küçült", "Yalnızca ilk cümleyi oku."),
        ("İşaretle ve geç", "Takıldığın soruya sonra dön."),
        ("Hatırlat", "Şu anki boşluk bütün sınavı belirlemez."),
    ]
    yy = 508
    for head, body in steps:
        c.setFillColor(BLUE)
        c.circle(M + 104, yy + 4, 2.3, fill=1, stroke=0)
        c.setFont("Arial-Bold", 9.1)
        c.setFillColor(NAVY)
        c.drawString(M + 122, yy, head + ":")
        para(body, M + 214, yy, 198, size=8.25, leading=10.0, color=INK)
        yy -= 38
    note_box("Kısa açıklama", "Kaygı yükseldiğinde zihin bütün sınavı aynı anda çözmeye çalışabilir. Dikkati bir sonraki küçük adıma döndürmek daha işlevsel olabilir.", M, 92, 500, 70)
    footer(15)
    c.showPage()


def page16():
    y = title("Aileler sınav kaygısını nasıl artırabilir?", size=23)
    text = [
        "Aile baskısı çoğu zaman kötü niyetten değil, kaygıdan doğar. Anne baba çocuğunun geleceği için endişelenebilir, fedakarlıklarının boşa gitmesini istemeyebilir veya sınav sonucunu ailece verilen emeğin karşılığı gibi görebilir. Ancak iyi niyetli baskı da öğrencinin üzerinde ek yük oluşturabilir.",
        "Sürekli puan sormak, başkalarıyla karşılaştırmak, yapılan fedakarlıkları hatırlatmak, çocuğun bütün kimliğini sınava indirgemek ve dinlenmeyi tembellik gibi görmek öğrencinin kaygısını artırabilir. Öğrenci bazen ders çalışmadığı için değil, çalışırken bile takip ediliyor hissi yaşadığı için gerilebilir.",
        "Ailenin kendi kaygısını çocuğa aktarması da sık görülür. 'Biz sana güveniyoruz, bizi mahcup etme' gibi cümleler destek niyetiyle söylense bile öğrenci tarafından ağır bir sorumluluk gibi algılanabilir. Sınavın aile itibarı gibi değerlendirilmesi, öğrencinin sınavı yalnızca kendi geleceğiyle değil, ailenin duygusal yüküyle de ilişkilendirmesine neden olabilir.",
        "Daha destekleyici tutum, kontrol etmekten çok düzenli ve güvenli bir ilişki sunmaktır. Öğrencinin ihtiyacını sormak, çabasını görmek, dinlenmeye alan tanımak ve sonucu kişisel değerden ayırmak aile içindeki duygusal yükü azaltabilir."
    ]
    for p in text:
        y = para(p, M, y, size=10.0, leading=14.0)
        y -= 8
    note_box("Aileler için", "İyi niyetli baskı da yük oluşturabilir. Destek çoğu zaman daha fazla kontrol değil, daha güvenli iletişim anlamına gelir.", M, 96, 500, 66)
    footer(16)
    c.showPage()


def page17():
    y = title("Aileler nasıl destek olabilir?", size=24)
    left = [("Bu kadar çalışmayla olmaz.", "Planınla ilgili desteğe ihtiyacın var mı?"),
            ("Kuzenin senden iyi gidiyor.", "Seni başkalarıyla karşılaştırmak istemiyorum."),
            ("Biz senin için her şeyi yaptık.", "Sonuçtan bağımsız yanında olacağız."),
            ("Kaygılanacak ne var?", "Kaygının zorlayıcı olduğunu görüyorum."),
            ("Telefonu tamamen bırak.", "Dikkatini dağıtan şeyleri birlikte düzenleyebiliriz."),
            ("Bu sınavı kazanmak zorundasın.", "Bu sınav önemli ama tek değer ölçün değil."),
            ("Sonuç kötü olursa üzülürüz.", "Sana nasıl destek olmamızın iyi geleceğini söyleyebilirsin.")]
    box(M, y - 306, 500, 318, fill=PALE, stroke=LINE, radius=12)
    c.setFont("Arial-Bold", 9.2)
    c.setFillColor(NAVY)
    c.drawString(M + 16, y - 18, "Baskı oluşturan ifade")
    c.drawString(M + 268, y - 18, "Daha destekleyici alternatif")
    yy = y - 46
    for a, b in left:
        para(a, M + 16, yy, 210, size=7.3, leading=8.4, color=INK)
        c.setFont("Arial-Bold", 12)
        c.setFillColor(NAVY)
        c.drawCentredString(M + 250, yy - 2, "->")
        para(b, M + 278, yy, 204, size=7.2, leading=8.4, color=MUTED)
        yy -= 36
    line_field(M, 210, 500, "Çocuğuma en sık söylediğim cümle:", h=30)
    line_field(M, 174, 500, "Bu cümlenin onda oluşturabileceği duygu:", h=30)
    line_field(M, 138, 500, "Daha destekleyici alternatif:", h=30)
    line_field(M, 102, 500, "Bu hafta değiştireceğim bir davranış:", h=30)
    footer(17)
    c.showPage()


def page18():
    y = title("Ne zaman profesyonel destek düşünülmeli?", size=23)
    items = ["Kaygı nedeniyle sınava girememe", "Denemelerden sürekli kaçınma", "Yoğun panik belirtileri", "Uyku ve iştahın belirgin bozulması", "Sürekli ağlama veya umutsuzluk", "Okul işlevselliğinde düşüş", "Bedensel yakınmaların sıklaşması", "Aile içi çatışmanın artması", "Yoğun mükemmeliyetçilik", "Kendine zarar verme düşünceleri", "\"Başaramazsam yaşamak istemiyorum\" gibi ifadeler", "Kaygının yalnızca sınavla sınırlı olmaması"]
    box(M, y - 248, 500, 262, fill=PALE, stroke=LINE, radius=12)
    bullet(items, M + 18, y - 24, width=454, size=8.8, leading=11.6)
    note_box("Acil uyarı", "Öğrenci kendine zarar verme veya yaşamına son verme düşüncesinden söz ediyorsa bu durum yalnızca sınav stresi olarak değerlendirilmemelidir. Yalnız bırakılmamalı, 112 aranmalı veya en yakın acil servise başvurulmalıdır.", M, 110, 500, 88, fill=WARN)
    footer(18)
    c.showPage()


def page19():
    y = title("Kendime küçük hatırlatmalar")
    box(M + 58, 188, 384, 444, fill=PALE, stroke=BLUE, radius=18, lw=1.2)
    c.setStrokeColor(LINE)
    c.setDash(3, 3)
    c.rect(M + 74, 204, 352, 396, fill=0, stroke=1)
    c.setDash()
    c.setFont("Georgia-Bold", 22)
    c.setFillColor(NAVY)
    c.drawCentredString(W / 2, 560, "Hatırlatma Kartı")
    reminders = ["Kaygı duymam kötü geçeceği anlamına gelmez.", "Sınav önemli olabilir ama kişisel değerimi belirlemez.", "Bir soruda zorlanmam bütün sınavın kötü geçeceği anlamına gelmez.", "Mükemmel olmak zorunda değilim.", "Bildiklerime adım adım ulaşabilirim.", "Dikkatim dağıldığında yeniden soruya dönebilirim.", "Deneme sonucu kesin gelecek değildir.", "Dinlenmek tembellik değildir.", "Yardım istemek zayıflık değildir.", "Bugün yapabileceğim küçük adıma odaklanabilirim."]
    bullet(reminders, M + 96, 520, width=326, size=8.1, leading=10.5)
    line_field(M + 90, 244, 320, "Kaygım yükseldiğinde kendime söylemek istediğim cümle...", h=46)
    footer(19)
    c.showPage()


def page20():
    y = title("Son söz")
    text = [
        "Sınav kaygısı anlaşılabilir ve üzerinde çalışılabilir bir süreçtir. Öğrencinin değeri bir sınav sonucuna, tek bir puana ya da tek bir güne indirgenemez. Sınavlar önemli olabilir; fakat insanın bütün hayatını ve kimliğini tek başına açıklamaz.",
        "Kaygının tamamen yok edilmesi gerekmez. Asıl hedef, kaygı varken de işlevsel davranabilmeyi, soruya dönebilmeyi ve küçük adımları sürdürebilmeyi öğrenmektir. Kaçınma ve erteleme kısa vadede rahatlatabilir; ancak uzun vadede sınavı daha büyük ve daha tehdit edici hale getirebilir. Düzenli, küçük ve sürdürülebilir adımlar çoğu zaman daha gerçekçi bir başlangıçtır.",
        "Ailenin desteği kontrol etmekten çok güvenli bir ilişki sunmak anlamına gelir. Öğrencinin yalnızca sonucu değil, çabası, zorlanması ve ihtiyaçları da görülmelidir. Profesyonel yardım istemek başarısızlık değil, daha sağlıklı bir yol arama davranışıdır.",
        "Bu rehber genel bilgilendirme ve farkındalık amacıyla hazırlanmıştır. Psikiyatrik değerlendirme, psikoterapi, eğitim danışmanlığı veya kişiye özel çalışma planının yerine geçmez."
    ]
    for p in text:
        y = para(p, M, y, size=10.1, leading=14.2)
        y -= 10
    note_box("Hatırlatma", "Sınav önemli olabilir; fakat hayatın tamamı değildir. Zorlandığınızda destek istemek, süreci daha güvenli ve anlaşılır hale getirebilir.", M, 100, 500, 72, fill=WARN)
    footer(20)
    c.showPage()


for fn in [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20]:
    fn()

c.save()
print(OUT)
