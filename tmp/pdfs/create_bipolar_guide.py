from pathlib import Path
import math

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


OUT = Path("output/pdf/bipolar-bozukluk-ile-yasamak.pdf")
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
c.setTitle("Bipolar Bozukluk ile Yaşamak")
c.setAuthor("Dr. Özgür Özbebit")
c.setSubject("Psikoeğitim Serisi - Duygu durum döngülerini ve erken uyarı işaretlerini tanıma rehberi")
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
    para(text, x + 14, y + h - 42, w - 28, size=8.2, leading=10.6, color=INK)


def bullet(items, x, y, width=500, size=8.55, leading=11.2):
    for item in items:
        c.setFillColor(BLUE)
        c.circle(x + 4, y + 4, 2.0, fill=1, stroke=0)
        y = para(item, x + 16, y, width - 16, size=size, leading=leading, color=INK)
        y -= 2
    return y


def arrow(x1, y1, x2, y2, color=NAVY2):
    c.setStrokeColor(color)
    c.setLineWidth(1.25)
    c.line(x1, y1, x2, y2)
    ang = math.atan2(y2 - y1, x2 - x1)
    for d in (math.pi * 0.82, -math.pi * 0.82):
        c.line(x2, y2, x2 + math.cos(ang + d) * 7, y2 + math.sin(ang + d) * 7)


def small_card(head, text, x, y, w, h=84, head_size=10, text_size=8.0, leading=10.4):
    box(x, y, w, h, fill=PALE, stroke=LINE, radius=10)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", head_size)
    c.drawString(x + 12, y + h - 22, head)
    para(text, x + 12, y + h - 44, w - 24, size=text_size, leading=leading, color=MUTED)


def line_field(x, y, w, label, h=38):
    box(x, y - h, w, h, fill=WHITE, stroke=LINE, radius=8)
    c.setFont("Arial-Bold", 8.2)
    c.setFillColor(NAVY)
    c.drawString(x + 12, y - 17, label)
    c.setStrokeColor(colors.HexColor("#d9e7ef"))
    c.line(x + 12, y - h + 12, x + w - 12, y - h + 12)


def table(headers, rows, x, y, widths, row_h=42, font_size=7.6):
    h = row_h * (len(rows) + 1)
    box(x, y - h, sum(widths), h, fill=WHITE, stroke=LINE, radius=8)
    c.setFillColor(SOFT)
    c.roundRect(x, y - row_h, sum(widths), row_h, 8, fill=1, stroke=0)
    cx = x
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 8)
    for i, head in enumerate(headers):
        c.drawString(cx + 7, y - 25, head)
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
            para(cell, cx + 7, yy, widths[i] - 14, size=font_size, leading=9.4, color=INK)
            cx += widths[i]
        yy -= row_h


def page1():
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#0f2a45"))
    c.circle(W * 0.83, H * 0.18, 178, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#244e68"))
    c.circle(W * 0.14, H * 0.88, 118, fill=1, stroke=0)
    cx = W / 2
    # Cover illustration: a calm mood rhythm, rising and settling without alarm.
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.6)
    c.line(cx - 180, 326, cx + 180, 326)
    c.setStrokeColor(colors.HexColor("#dbeaf4"))
    path = c.beginPath()
    path.moveTo(cx - 180, 326)
    path.curveTo(cx - 120, 412, cx - 58, 232, cx, 326)
    path.curveTo(cx + 58, 420, cx + 120, 238, cx + 180, 326)
    c.drawPath(path, stroke=1, fill=0)
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.1)
    for i, (xx, lab) in enumerate([(cx - 120, "düşüş"), (cx, "denge"), (cx + 120, "yükselme")]):
        c.circle(xx, 326 + (24 if i == 1 else 0), 26, fill=0, stroke=1)
        c.setFillColor(colors.HexColor("#dbeaf4"))
        c.circle(xx, 326 + (24 if i == 1 else 0), 3.2, fill=1, stroke=0)
        c.setFillColor(colors.HexColor("#dbeaf4"))
        c.setFont("Arial-Bold", 8.3)
        c.drawCentredString(xx, 286, lab)
    draw_logo(W / 2 - 54, H - 182, 108)
    c.setFillColor(BLUE)
    c.setFont("Arial-Bold", 12)
    c.drawCentredString(W / 2, H - 226, "Psikoeğitim Serisi")
    c.setFont("Arial-Bold", 10.8)
    c.drawCentredString(W / 2, H - 246, "No: 11")
    c.setFillColor(WHITE)
    c.setFont("Georgia-Bold", 28)
    c.drawCentredString(W / 2, H - 292, "Bipolar Bozukluk")
    c.drawCentredString(W / 2, H - 326, "ile Yaşamak")
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(W / 2 - 92, H - 350, W / 2 + 92, H - 350)
    c.setFont("Arial", 11.3)
    c.setFillColor(colors.HexColor("#dbeaf4"))
    c.drawCentredString(W / 2, H - 384, "Kendinizi, duygu durum döngülerinizi")
    c.drawCentredString(W / 2, H - 402, "ve erken uyarı işaretlerini tanımaya yönelik rehber")
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
        "Bipolar bozukluk çoğu zaman yalnızca taşkınlık, aşırı enerji ya da mani dönemleriyle hatırlanır. Oysa bu durum yalnızca yükselme dönemlerinden ibaret değildir. Birçok kişi zaman zaman çökkünlük, enerji kaybı, uyku düzeninde bozulma, hızlanma, yavaşlama veya daha sakin ara dönemler arasında değişen bir duygu durum akışı yaşayabilir.",
        "Bu rehber, bipolar bozukluk tanısı alan kişilerin ve yakınlarının süreci daha anlaşılır bir çerçevede görmesine yardımcı olmak için hazırlandı. Amaç korkutmak ya da kişiyi hastalığıyla tanımlamak değildir. Amaç, duygu durum döngülerini tanımak, erken uyarı işaretlerini fark etmek ve düzenli takibin neden önemli olduğunu sade bir dille anlatmaktır.",
        "Uygun tedavi, düzenli takip, uyku düzenine dikkat etmek, ilaçların hekim önerisiyle sürdürülmesi ve kişinin kendi değişimlerini erken fark etmesi birçok kişi için oldukça koruyucu olabilir. Bipolar bozuklukla yaşayan pek çok kişi üretken, doyumlu ve anlamlı bir yaşam sürdürebilir. Bu süreç bazen emek ister; fakat yalnızca kısıtlılık değil, farkındalık ve düzen kurma becerisi de içerir.",
        "Yakınlar için de bilgi önemlidir. Çünkü bazen iyi niyetli uyarılar eleştiri gibi duyulabilir; bazen de belirtiler fark edilse bile nasıl konuşulacağı bilinmeyebilir. Bu rehber, kişiyi suçlamadan destek olmayı, değişimleri sakin şekilde izlemeyi ve yardım istemenin ne zaman gerekli olabileceğini anlamaya katkı sağlamayı amaçlar."
    ]
    for p in text:
        y = para(p, M, y, size=9.9, leading=13.8)
        y -= 8
    note_box("Unutmayın", "Bipolar bozukluk kişinin karakteri ya da iradesi değildir. Düzenli takip, erken fark etme ve uygun destekle süreç daha yönetilebilir hale gelebilir.", M, 92, 500, 78)
    footer(2)
    c.showPage()


def page3():
    y = title("Bipolar Bozukluk Nedir?")
    para("Bipolar bozukluk, duygu durumun dönemsel olarak belirgin biçimde değişebildiği bir ruhsal durumdur. Bu değişimler her kişide aynı şiddette ya da aynı hızda görülmez. Bazı kişilerde depresif dönemler ön plandayken, bazı kişilerde enerji artışı ve hızlanma daha belirgin olabilir.", M, y, size=9.6, leading=13.2)
    cards = [
        ("Depresyon", "Enerji azalması, ilgi kaybı, çökkünlük, yavaşlama ve umutsuzluk belirginleşebilir."),
        ("Hipomani", "Enerji ve konuşma artabilir; kişi kendini çok iyi hissedebilir ama işlevsellik tamamen bozulmayabilir."),
        ("Mani", "Uyku ihtiyacı azalabilir, riskli davranışlar ve taşkınlık belirginleşebilir; hızlı destek gerekebilir."),
        ("Normal duygu durum", "Kişi daha dengeli hissedebilir. Bu dönemler tedaviyi bırakmak için değil, korumak için değerlidir.")
    ]
    xs = [M, M + 258, M, M + 258]
    ys = [460, 460, 320, 320]
    for (head, text), x, yy in zip(cards, xs, ys):
        small_card(head, text, x, yy, 236, h=104)
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(M + 88, 230, W - M - 88, 230)
    for xx, lab in [(M + 88, "çökkün"), (W / 2, "denge"), (W - M - 88, "yükselme")]:
        c.setFillColor(SOFT)
        c.setStrokeColor(BLUE)
        c.circle(xx, 230, 20, fill=1, stroke=1)
        c.setFont("Arial-Bold", 8.2)
        c.setFillColor(NAVY)
        c.drawCentredString(xx, 196, lab)
    note_box("Kısa not", "Tanı yalnızca belirtilere bakılarak konulmaz. Belirtilerin süresi, şiddeti, dönemsel seyri, aile öyküsü ve günlük yaşama etkisi birlikte değerlendirilir.", M, 88, 500, 72)
    footer(3)
    c.showPage()


def page4():
    y = title("Duygu Durum Döngüsü")
    nodes = [
        ("Normal dönem", W / 2, 624),
        ("Uyku bozulması", W / 2, 554),
        ("Enerji artışı", W / 2, 484),
        ("Mani", W / 2, 414),
        ("Çöküş", W / 2, 344),
        ("Depresyon", W / 2, 274),
        ("İyileşme", W / 2, 204),
    ]
    for text, x, yy in nodes:
        box(x - 116, yy - 23, 232, 46, fill=SOFT, stroke=BLUE, radius=13, lw=1)
        c.setFillColor(NAVY)
        c.setFont("Arial-Bold", 11)
        c.drawCentredString(x, yy - 4, text)
    for idx in range(len(nodes) - 1):
        x1, y1 = nodes[idx][1], nodes[idx][2]
        x2, y2 = nodes[idx + 1][1], nodes[idx + 1][2]
        arrow(x1, y1 - 23, x2, y2 + 23)
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.4)
    c.setDash(4, 4)
    c.line(W / 2 + 116, 204, W / 2 + 174, 204)
    c.line(W / 2 + 174, 204, W / 2 + 174, 624)
    c.line(W / 2 + 174, 624, W / 2 + 116, 624)
    c.setDash()
    para("Bu döngü herkes için aynı sırayla ilerlemek zorunda değildir. Bazı kişilerde uyku bozulması ilk işaret olabilir; bazılarında sinirlilik, hızlanma ya da harcama davranışları daha erken fark edilir. Amaç döngüyü korkuyla izlemek değil, kişiye özgü erken işaretleri tanımaktır.", M, 112, size=9.2, leading=12.7)
    footer(4)
    c.showPage()


def page5():
    y = title("Mani Döneminde Neler Yaşanabilir?")
    para("Mani döneminde kişi kendini olağandan çok daha enerjik, hızlı, güçlü veya durdurulamaz hissedebilir. Bazen bu değişim başlangıçta keyifli görünür. Ancak uyku ihtiyacının azalması, düşüncelerin hızlanması ve dürtüsel kararlar yaşamı zorlaştırabilir.", M, y, size=9.6, leading=13.2)
    items = [
        ("Uyku ihtiyacında azalma", "Az uyuduğu halde dinlenmiş hissetme görülebilir."),
        ("Hızlı konuşma", "Konuşma temposu artabilir, araya girmek güçleşebilir."),
        ("Düşüncelerin hızlanması", "Zihin çok hızlı çalışıyor gibi hissedilebilir."),
        ("Riskli harcamalar", "Kişinin normalde yapmayacağı finansal kararlar ortaya çıkabilir."),
        ("Aşırı özgüven", "Kapasite ve sonuçlar olduğundan farklı değerlendirilebilir."),
        ("Dürtüsellik", "Ani kararlar, risk alma ve sınırların zorlanması görülebilir.")
    ]
    for i, (head, text) in enumerate(items):
        x = M + (i % 2) * 258
        yy = 452 - (i // 2) * 112
        small_card(head, text, x, yy, 236, h=88)
    note_box("Yaklaşım", "Bu belirtiler fark edildiğinde tartışmayı büyütmek yerine sakin kalmak, uyku ve güvenliği öncelemek, tedavi ekibiyle iletişime geçmek daha koruyucu olabilir.", M, 90, 500, 78)
    footer(5)
    c.showPage()


def page6():
    y = title("Depresif Dönemde Neler Yaşanabilir?")
    para("Bipolar bozuklukta depresif dönemler de sürecin önemli bir parçasıdır. Kişi yalnızca üzgün hissetmez; enerjisi azalabilir, düşünmesi yavaşlayabilir, kendine güveni düşebilir ve günlük işleri sürdürmek zorlaşabilir.", M, y, size=9.6, leading=13.2)
    left = ["Enerji kaybı", "İlgi ve istek azalması", "Suçluluk düşünceleri", "Yavaşlama", "Karamsarlık", "İçe çekilme"]
    box(M, 280, 236, 302, fill=PALE, stroke=LINE, radius=12)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 15)
    c.drawString(M + 18, 548, "Sık görülebilen alanlar")
    bullet(left, M + 20, 510, width=204, size=11.0, leading=17.0)
    box(M + 264, 280, 236, 302, fill=WARN, stroke=colors.HexColor("#e2c8b9"), radius=12)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 15)
    c.drawString(M + 284, 548, "Hassas uyarı")
    para("Bazı depresif dönemlerde yaşama isteğinde azalma, kendine zarar verme ya da intihar düşünceleri görülebilir. Bu düşünceler varsa yalnız kalmamak, gecikmeden profesyonel destek almak ve acil durumda 112 Acil ya da en yakın acil servise başvurmak önemlidir.", M + 284, 508, 198, size=10.6, leading=14.6, color=INK)
    para("Depresif dönem kişinin zayıf olduğu anlamına gelmez. Bu dönemlerde küçük adımlar, düzenli takip ve yakın destek koruyucu olabilir.", M, 230, size=10.6, leading=14.6)
    footer(6)
    c.showPage()


def page7():
    y = title("Erken Uyarı İşaretleri")
    para("Aşağıdaki alanları kendinize göre doldurabilirsiniz. Amaç belirtileri büyütmek değil, döngü hızlanmadan önce kişisel işaretleri fark etmektir.", M, y, size=9.3, leading=12.8)
    labels = ["Uyku", "Enerji", "Konuşma", "Harcama", "Sinirlilik", "Düşünceler"]
    y0 = 616
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 12)
    c.drawString(M, y0, "Benim erken belirtilerim")
    yy = y0 - 24
    for lab in labels:
        line_field(M, yy, 500, lab, h=42)
        yy -= 52
    c.setFont("Arial-Bold", 12)
    c.setFillColor(NAVY)
    c.drawString(M, yy - 2, "Yakınlarımın fark ettiği belirtiler")
    for i in range(3):
        line_field(M, yy - 28 - i * 52, 500, f"Not {i + 1}", h=42)
    footer(7)
    c.showPage()


def page8():
    y = title("Kendi Duygu Durumu Takibim")
    para("Bu tablo günlük kısa kayıt için hazırlanmıştır. Her satırın mükemmel doldurulması gerekmez; birkaç temel bilginin düzenli izlenmesi bile değişimleri fark etmeyi kolaylaştırabilir.", M, y, size=9.3, leading=12.8)
    headers = ["Tarih", "Uyku", "Enerji", "Duygu durumu", "İlaç", "Önemli olay"]
    rows = [["", "", "", "", "", ""] for _ in range(9)]
    table(headers, rows, M, 610, [64, 66, 66, 110, 64, 130], row_h=48, font_size=7.2)
    note_box("Kullanım önerisi", "Uyku süresi, enerji düzeyi ve ilaç düzenindeki değişimler bazı kişilerde erken uyarı işareti olabilir. Kayıtlarınızı takip görüşmelerinde hekiminizle paylaşabilirsiniz.", M, 76, 500, 72)
    footer(8)
    c.showPage()


def page9():
    y = title("Yakınlar Nasıl Destek Olabilir?")
    para("Yakınların desteği çok değerlidir; ancak destek ile baskı arasındaki çizgi bazen fark edilmeden geçilebilir. Amaç kişiyi kontrol etmek değil, güvenli ve sakin bir iletişim kurmaktır.", M, y, size=9.3, leading=12.8)
    headers = ["Kaçınılması gereken ifadeler", "Yerine kullanılabilecek destekleyici ifadeler"]
    rows = [
        ["Yine mi başladı?", "Son günlerde sende bazı değişiklikler fark ettim; birlikte bakalım mı?"],
        ["İlaçlarını bırakmışsındır.", "İlaç düzenin nasıl gidiyor, takipte konuşmak ister misin?"],
        ["Abartıyorsun.", "Bu senin için zorlayıcı görünüyor, seni ciddiye alıyorum."],
        ["Kendine gel artık.", "Şu an yanında olmak ve güvenli kalmana yardım etmek istiyorum."],
        ["Bizi de yoruyorsun.", "Bu süreç hepimizi etkiliyor; birlikte destek arayabiliriz."]
    ]
    table(headers, rows, M, 580, [240, 260], row_h=72, font_size=7.85)
    note_box("Küçük ilke", "Sakin, kısa, açık ve suçlamayan cümleler çoğu zaman uzun tartışmalardan daha etkilidir.", M, 86, 500, 62)
    footer(9)
    c.showPage()


def page10():
    y = title("Yaşam Düzeni Neden Önemlidir?")
    para("Bipolar bozuklukta yaşam düzeni tedavinin yerine geçmez; ancak tedaviyi destekleyen güçlü bir zemindir. Özellikle uyku düzeni ve günlük ritim, duygu durum dalgalanmalarını erken fark etmeye yardımcı olabilir.", M, y, size=9.45, leading=13.0)
    items = [
        ("Uyku", "Benzer saatlerde yatıp kalkmak duygu durum ritmini korumaya yardımcı olabilir."),
        ("İlaç düzeni", "İlaçlar yalnızca kötü dönemlerde değil, iyi kalma dönemlerinde de önem taşıyabilir."),
        ("Alkol ve madde", "Alkol ve maddeler uyku, dürtüsellik ve duygu durum üzerinde olumsuz etki gösterebilir."),
        ("Stres", "Yoğun stres dönemlerinde erken işaretleri daha dikkatli izlemek gerekebilir."),
        ("Günlük rutin", "Yemek, uyku, iş ve dinlenme saatlerinde düzen koruyucu olabilir."),
        ("Takip", "Düzenli görüşmeler değişimleri büyümeden ele alma imkanı sağlar.")
    ]
    for i, (head, text) in enumerate(items):
        x = M + (i % 2) * 258
        yy = 448 - (i // 2) * 122
        small_card(head, text, x, yy, 236, h=104, head_size=12.6, text_size=9.4, leading=12.8)
    footer(10)
    c.showPage()


def page11():
    y = title("Ne Zaman Yardım İstenmeli?")
    para("Bazı değişimler beklemeden destek almayı gerektirebilir. Aşağıdaki durumlar tek başına tanı koydurmaz; ancak profesyonel değerlendirme için güçlü işaretler olabilir.", M, y, size=9.45, leading=13.0)
    urgent = [
        "Uyku tamamen bozuluyorsa ya da birkaç gün belirgin biçimde azaldıysa",
        "Taşkınlık, hızlanma veya sinirlilik belirgin artıyorsa",
        "Riskli harcamalar, ani kararlar veya tehlikeli davranışlar başladıysa",
        "Yoğun çökkünlük, içe çekilme ve umutsuzluk belirginleşiyorsa",
        "Kendine zarar verme veya intihar düşünceleri varsa"
    ]
    bullet(urgent, M + 24, 552, width=452, size=11.2, leading=17.0)
    note_box("Acil uyarı", "Kendinize zarar verme ya da yaşamınıza son verme düşünceniz varsa yalnız kalmayın. Gecikmeden 112 Acil'i arayın veya en yakın acil servise başvurun.", M, 288, 500, 98, fill=WARN)
    para("Yardım istemek sürecin kötüye gittiğini kabul etmek değil; güvenliği, düzeni ve iyileşmeyi korumak için atılan sorumlu bir adımdır.", M, 226, size=11.0, leading=15.0)
    footer(11)
    c.showPage()


def page12():
    y = title("Hatırlatma Kartı")
    para("Bu sayfadaki cümleleri kesip saklayabilir, telefonunuza not olarak kaydedebilir ya da yakınlarınızla paylaşabilirsiniz.", M, y, size=9.3, leading=12.8)
    cards = [
        "Kendimi iyi hissettiğim dönemlerde de tedavimi sürdürmek, iyi kalabilmenin önemli bir parçasıdır.",
        "Duygu durumumdaki değişiklikleri erken fark etmek güçsüzlük değil, öz farkındalıktır.",
        "Yardım istemek başarısızlık değil, iyileşme sürecinin bir parçasıdır."
    ]
    yy = 500
    for text in cards:
        box(M + 28, yy, 444, 86, fill=SOFT, stroke=LINE, radius=12)
        c.setFont("Georgia-Bold", 15)
        c.setFillColor(NAVY)
        for line in wrap_lines(text, 390, "Georgia-Bold", 15):
            c.drawCentredString(W / 2, yy + 54, line)
            yy -= 18
        yy -= 62
    footer(12)
    c.showPage()


def page13():
    y = title("Son Söz")
    text = [
        "Bu rehberin amacı bipolar bozukluğu korkutucu bir etiket haline getirmek değildir. Amaç, kişinin yaşadığı değişimleri daha anlaşılır bir çerçevede görebilmesine, erken belirtileri fark edebilmesine ve tedavi sürecine daha aktif katılabilmesine destek olmaktır.",
        "Bipolar bozuklukla yaşamak bazen kişinin kendi ritmini daha dikkatli tanımasını gerektirir. Uyku değişimleri, enerji artışı, konuşma hızlanması, harcama davranışları ya da içe çekilme gibi işaretler her kişide aynı biçimde ortaya çıkmayabilir. Bu nedenle en değerli bilgilerden biri, kişinin kendi örüntüsünü zaman içinde fark etmesidir.",
        "İyi hissettiğiniz dönemler çok kıymetlidir. Bu dönemler tedaviden uzaklaşmak için değil, iyi kalmayı destekleyen alışkanlıkları güçlendirmek için kullanılabilir. Düzenli takip, ilaçların hekim önerisiyle sürdürülmesi, yakınlarla açık iletişim ve erken uyarı planı birçok kişi için koruyucu olabilir.",
        "Yakınlar için de süreç öğrenmeyi gerektirir. Bazen ne söyleyeceğini bilememek, susmak ya da yanlış cümleler kurmak mümkündür. Önemli olan kusursuz olmak değil; suçlamadan, sakin kalarak ve gerektiğinde profesyonel destek arayarak kişinin yanında durabilmektir.",
        "Bipolar bozukluk kişinin bütün kimliği değildir. Kişinin değerleri, ilişkileri, üretkenliği, hayalleri ve güçlü yönleri bu tanıdan daha geniştir. Bilgi, düzen ve destekle yaşam alanı daralmak zorunda değildir; aksine daha farkında ve güvenli bir yaşam düzeni kurulabilir."
    ]
    for p in text:
        y = para(p, M, y, size=9.75, leading=13.7)
        y -= 8
    note_box("Bilgilendirme", "Bu rehber genel bilgilendirme amacıyla hazırlanmıştır. Tanı, değerlendirme ve tedavinin yerine geçmez.", M, 74, 500, 66)
    footer(13)
    c.showPage()


for fn in [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13]:
    fn()

c.save()
print(OUT)
