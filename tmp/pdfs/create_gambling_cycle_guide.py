from pathlib import Path
import math

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


OUT = Path("output/pdf/kumar-dongusunu-anlamak.pdf")
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
c.setTitle("Kumar Döngüsünü Anlamak")
c.setAuthor("Dr. Özgür Özbebit")
c.setSubject("Psikoeğitim Serisi No: 8 - Kumarla ilişkisini sorgulayanlar ve yakınları için psikoeğitim rehberi")
c.setCreator("Dr. Özgür Özbebit")

M = 48
TOP = H - 78


def footer(page):
    c.setStrokeColor(LINE)
    c.setLineWidth(0.5)
    c.line(M, 42, W - M, 42)
    c.setFont("Arial", 8)
    c.setFillColor(MUTED)
    c.drawString(M, 28, "www.ozgurozbebit.com.tr")
    c.drawCentredString(W / 2, 28, "Özgür Özbebit Psikoeğitim Serisi")
    c.drawRightString(W - M, 28, str(page))


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


def para(text, x, y, width=500, size=9.8, leading=13.7, font="Arial", color=MUTED):
    c.setFont(font, size)
    c.setFillColor(color)
    for line in wrap_lines(text, width, font, size):
        c.drawString(x, y, line)
        y -= leading
    return y


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


def note_box(label, text, x, y, w, h, fill=SOFT):
    box(x, y, w, h, fill=fill, stroke=LINE, radius=10)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 10.3)
    c.drawString(x + 14, y + h - 22, label)
    para(text, x + 14, y + h - 42, w - 28, size=8.5, leading=10.8, color=INK)


def bullet(items, x, y, width=500, size=9.4, leading=12.6):
    for item in items:
        c.setFillColor(BLUE)
        c.circle(x + 4, y + 4, 2.1, fill=1, stroke=0)
        y = para(item, x + 16, y, width - 16, size=size, leading=leading, color=INK)
        y -= 3
    return y


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


def arrow(x1, y1, x2, y2, color=NAVY2):
    c.setStrokeColor(color)
    c.setLineWidth(1.25)
    c.line(x1, y1, x2, y2)
    ang = math.atan2(y2 - y1, x2 - x1)
    for d in (math.pi * 0.82, -math.pi * 0.82):
        c.line(x2, y2, x2 + math.cos(ang + d) * 7, y2 + math.sin(ang + d) * 7)


def line_field(x, y, w, label, h=38):
    box(x, y - h, w, h, fill=WHITE, stroke=LINE, radius=8)
    c.setFont("Arial-Bold", 8.5)
    c.setFillColor(NAVY)
    c.drawString(x + 12, y - 18, label)
    c.setStrokeColor(colors.HexColor("#d9e7ef"))
    c.line(x + 12, y - h + 12, x + w - 12, y - h + 12)


def page1():
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#0f2a45"))
    c.circle(W * 0.82, H * 0.18, 185, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#244e68"))
    c.circle(W * 0.16, H * 0.88, 118, fill=1, stroke=0)
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.0)
    # Abstract loop and loosening knot - intentionally no gambling imagery.
    for i in range(6):
        c.circle(W / 2, H / 2 - 34, 52 + i * 24, fill=0, stroke=1)
    c.setStrokeColor(colors.HexColor("#dbeaf4"))
    c.bezier(184, 420, 250, 530, 360, 310, 430, 426)
    c.bezier(184, 426, 250, 310, 360, 530, 430, 420)
    draw_logo(W / 2 - 54, H - 182, 108)
    c.setFillColor(BLUE)
    c.setFont("Arial-Bold", 12)
    c.drawCentredString(W / 2, H - 226, "Psikoeğitim Serisi No: 8")
    c.setFillColor(WHITE)
    c.setFont("Georgia-Bold", 31)
    c.drawCentredString(W / 2, H - 286, "Kumar Döngüsünü")
    c.drawCentredString(W / 2, H - 324, "Anlamak")
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(W / 2 - 92, H - 348, W / 2 + 92, H - 348)
    c.setFont("Arial", 12.6)
    c.setFillColor(colors.HexColor("#dbeaf4"))
    c.drawCentredString(W / 2, H - 384, "Kumarla İlişkisini Sorgulayanlar ve Yakınları İçin")
    c.drawCentredString(W / 2, H - 402, "Psikoeğitim Rehberi")
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
        "Kumar davranışı çoğu zaman merak, eğlence, arkadaş ortamı, küçük bir kazanç beklentisi ya da sıkıntıdan uzaklaşma isteğiyle başlayabilir. Her kumar oynayan kişi aynı düzeyde zarar yaşamaz. Bazı kişiler için bu davranış sınırlı ve seyrek kalabilir. Ancak bazı kişilerde zamanla kontrol edilmesi güçleşen, tekrar eden ve yaşamın farklı alanlarına yayılan bir döngüye dönüşebilir.",
        "Kumarla ilişkili zarar yalnızca kaybedilen para değildir. Para kaybı görünür olan kısımdır; fakat çoğu zaman bunun arkasında gizleme, borçlanma, uyku bozulması, işlevsellikte azalma, aile içinde güven kaybı, yoğun kaygı ve kişinin kendisini çaresiz hissetmesi gibi daha geniş etkiler vardır. Bu nedenle değerlendirme yalnızca 'ne kadar kaybettim?' sorusuna sıkışmamalıdır.",
        "Kişi bazen uzun süre kendi içinde sözler verir. Bir daha oynamayacağını söyler, belirli bir miktarı aşmayacağına karar verir ya da kaybını geri alınca bırakacağını düşünür. Fakat güçlü istek, umut, telafi düşüncesi ve utanç bir araya geldiğinde bu kararları sürdürmek zorlaşabilir. Bu durum karakter eksikliği ya da basit bir irade sorunu olarak görülmemelidir.",
        "Utanç ve gizleme, yardım aramayı geciktiren en önemli etkenlerden biridir. Kişi yakınlarını üzmemek, tepki almamak ya da yaşadığı kaybı kabullenmek istemediği için durumu saklayabilir. Sakladıkça yalnızlaşır; yalnızlaştıkça davranışı durdurmak daha zor hale gelebilir. Bu rehber, kişiyi suçlamadan ama yaşanan zararı da küçümsemeden düşünmeye yardımcı olmak için hazırlandı.",
        "Buradaki bilgiler tanı koymak için değildir. Amaç, kumar davranışının nasıl bir döngüye dönüşebildiğini göstermek, kişinin kendi deneyimine daha dürüst bakabilmesine yardımcı olmak ve gerektiğinde profesyonel destek aramayı kolaylaştırmaktır. Değişim bazen tek bir kararla başlamaz; küçük ama güvenli adımların tekrar tekrar kurulmasıyla gelişir."
    ]
    for p in text:
        y = para(p, M, y, size=9.85, leading=13.8)
        y -= 7
    note_box("Kumarla ilgili zarar yalnızca kaybedilen para değildir.", "Gizleme, borçlanma, ilişkilerde güven kaybı, işlevsellikte bozulma, yoğun kaygı ve kendini çaresiz hissetme de kumarla bağlantılı zararların parçaları olabilir.", M, 90, 500, 78)
    footer(2)
    c.showPage()


def page3():
    y = title("Kumar ne zaman eğlence olmaktan uzaklaşır?")
    text = [
        "Kumar davranışının sorunlu hale geldiğini anlamak her zaman kolay değildir. Çünkü başlangıçta kişi bunu yalnızca bir eğlence, küçük bir heyecan veya geçici bir kaçış gibi görebilir. Ancak zamanla davranışın kapladığı alan genişliyorsa, belirlenen sınırlar sık sık aşılıyorsa ve kişi bunu gizlemeye başlıyorsa daha dikkatli bakmak gerekir.",
        "Harcanan zamanın artması, başlangıçta belirlenen para sınırının aşılması, kaybedilen parayı geri almak için yeniden oynama, gün içinde kumarla ilgili düşüncelerin sıklaşması ve kayıpları ya da oynanan miktarı gizleme önemli işaretler olabilir. Borç alarak oynamak, temel ihtiyaçlara ayrılan parayı kullanmak ya da bırakma girişimlerinin kısa sürmesi de davranışın kontrol edilmesinin güçleştiğini gösterebilir.",
        "Kumar oynanmadığında huzursuzluk, yoğun istek, öfke veya boşluk hissi yaşanması; iş, okul, aile ve günlük sorumlulukların etkilenmesi; yakınların kaygılarının küçümsenmesi ve kumarın sıkıntıdan kaçış yolu haline gelmesi de değerlendirilmesi gereken alanlardır.",
        "Bu işaretlerden birinin bulunması tek başına tanı anlamına gelmez. Ancak birden fazla alanda zarar oluşması, davranışın daha yakından değerlendirilmesi gerektiğini gösterebilir. En sağlıklı yaklaşım, kişinin kendisini etiketlemeden ama yaşanan sonuçları da yok saymadan tabloya bakabilmesidir."
    ]
    for p in text:
        y = para(p, M, y, size=10.05, leading=14.1)
        y -= 8
    signs = ["Zaman artışı", "Sınır aşımı", "Kayıpları kovalama", "Gizleme", "Borçlanma", "Sorumlulukların etkilenmesi", "Yoğun istek", "Kaçış amacıyla oynama"]
    for i, s in enumerate(signs):
        xx = M + (i % 2) * 258
        yy = 170 - (i // 2) * 42
        box(xx, yy, 238, 30, fill=SOFT, stroke=LINE, radius=9)
        c.setFont("Arial-Bold", 8.6)
        c.setFillColor(NAVY)
        c.drawCentredString(xx + 119, yy + 10, s)
    footer(3)
    c.showPage()


def page4():
    y = title("Kumar döngüsü nasıl oluşabilir?")
    steps = [
        "Sıkıntı, boşluk, stres veya kazanma düşüncesi",
        "Kumar oynama isteği",
        "Para yatırma veya bahis yapma",
        "Heyecan ve beklenti",
        "Kazanç ya da kayıp",
        "Kısa rahatlama veya daha fazla oynama isteği",
        "Pişmanlık, kaygı ve maddi baskı",
        "\"Kaybımı geri almalıyım\" düşüncesi",
        "Yeniden kumar oynama",
    ]
    cx, cy, r = W / 2, 466, 158
    for i, label in enumerate(steps):
        ang = math.pi / 2 - i * 2 * math.pi / len(steps)
        x = cx + math.cos(ang) * r
        yy = cy + math.sin(ang) * r
        box(x - 64, yy - 22, 128, 44, fill=SOFT, stroke=BLUE, radius=12)
        c.setFont("Arial-Bold", 6.9)
        c.setFillColor(NAVY)
        for j, line in enumerate(wrap_lines(label, 112, "Arial-Bold", 6.9)):
            c.drawCentredString(x, yy + 9 - j * 8, line)
    c.setStrokeColor(NAVY2)
    c.setLineWidth(1.5)
    c.circle(cx, cy, r - 52, fill=0, stroke=1)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 11)
    c.drawCentredString(cx, cy + 5, "Döngü")
    c.drawCentredString(cx, cy - 10, "kendini besleyebilir")
    y = 230
    text = [
        "Kumar döngüsü yalnızca para kazanma arzusuyla sürmeyebilir. Kazanmak da kaybetmek de yeniden oynamayı tetikleyebilir. Kazanç olduğunda kişi 'devam edersem daha fazlası gelir' diye düşünebilir. Kayıp olduğunda ise 'bir kez daha oynarsam geri alırım' düşüncesi güçlenebilir.",
        "Bu döngüde heyecan, beklenti, sıkıntıdan kaçış ve kısa süreli rahatlama önemli rol oynar. Kişi oyundan sonra pişmanlık, kaygı ve maddi baskı yaşayabilir. Bu baskı arttıkça davranışı durdurmak yerine kaybı telafi etme isteği öne çıkabilir.",
        "Döngüyü anlamak, kişinin kendisini suçlaması için değil, hangi noktada müdahale edebileceğini görebilmesi içindir. Bazen en önemli adım, yeniden para yatırmadan önce döngünün hangi basamağında olduğunu fark etmektir."
    ]
    for p in text:
        y = para(p, M, y, size=9.25, leading=12.8)
        y -= 4
    footer(4)
    c.showPage()


def flow_page(page_no, heading, steps, text, note=None):
    y = title(heading)
    x0, y0 = 94, 620
    for i, step in enumerate(steps):
        yy = y0 - i * 56
        box(x0, yy, 210, 35, fill=SOFT, stroke=BLUE, radius=11)
        c.setFont("Arial-Bold", 8.0)
        c.setFillColor(NAVY)
        for j, line in enumerate(wrap_lines(step, 186, "Arial-Bold", 8.0)):
            c.drawCentredString(x0 + 105, yy + 21 - j * 9, line)
        if i < len(steps) - 1:
            arrow(x0 + 105, yy, x0 + 105, yy - 21)
    yy = y
    for p in text:
        yy = para(p, 345, yy, 188, size=8.85, leading=12.2)
        yy -= 5
    if note:
        note_box(note[0], note[1], 345, 84, 188, 88, fill=WARN)
    footer(page_no)
    c.showPage()


def page5():
    flow_page(5, "Kayıpları kovalama davranışı", [
        "Kayıp", "Rahatsızlık ve panik", "\"Bu parayı geri almalıyım\"",
        "Daha yüksek miktarla yeniden oynama", "Yeni kayıp",
        "Daha güçlü geri kazanma baskısı", "Riskin büyümesi"
    ], [
        "Kayıp sonrası kişi bazen artık kazanmak için değil, eski durumuna dönmek için oynar. Kaybedilen para zihinde 'geri alınması gereken para' haline gelebilir. Bu düşünce çok güçlü olduğunda yeni kararlar mevcut bütçeye göre değil, geçmiş kayıplara göre verilmeye başlanır.",
        "Oysa yeni bir oyun, önceki kayıpları geri getirme garantisi taşımaz. Kaybı telafi etmeye çalışmak, kişiyi daha yüksek miktarla yeniden oynamaya ve daha büyük risk almaya itebilir. Bu durum borçlanmayı, gizlemeyi ve panik hissini artırabilir.",
        "Kayıpları kovalamayı fark etmek önemlidir. Çünkü döngünün en tehlikeli noktalarından biri, kişinin para kazanmak yerine zararı silmeye çalışmasıdır. Bu noktada durmak, yeni zararı önlemek açısından güçlü bir adımdır."
    ], ("Bilgi", "Geçmişte kaybedilen para, yeni bir bahsin kazanma ihtimalini artırmaz."))


def page6():
    y = title("Kumar oyunları neden kontrol hissi oluşturabilir?")
    items = [
        ("Kontrol yanılsaması", "Kişi sonucu etkileyebileceğini düşünebilir; oysa çoğu durumda sonuç kişinin kontrolünde değildir."),
        ("Bu kez sıra bende", "Uzun süre kaybetmek, kazanma olasılığının yaklaştığı hissini doğurabilir."),
        ("Yakın sonuç", "Kazanamamış olsa da sonuca yaklaşmış gibi hissetmek isteği artırabilir."),
        ("Geçmiş sonucu geleceğe bağlama", "Önceki sonuçların bir sonraki sonucu belirlediği sanılabilir."),
        ("Şans serisi", "Birkaç olumlu sonuç, özel bir dönem yaşıyorum düşüncesini güçlendirebilir."),
        ("Kişisel yöntem", "Kişi kendine ait bir sistem geliştirdiğini düşünebilir."),
        ("Seçimin sonucu etkilediğine inanma", "Seçilen sayı, takım veya zamanlama kontrol hissi verebilir."),
        ("Kazancı hatırlama", "Kazançlar akılda kalırken kayıplar küçümsenebilir."),
        ("Yetenek kanıtı", "Birkaç başarılı sonuç özel beceri gibi yorumlanabilir."),
    ]
    yy = y
    for i, (head, body) in enumerate(items):
        xx = M + (i % 3) * 170
        row = i // 3
        top = yy - row * 135
        box(xx, top - 104, 154, 108, fill=PALE, stroke=LINE, radius=10)
        c.setFont("Arial-Bold", 8.2)
        c.setFillColor(NAVY)
        c.drawString(xx + 10, top - 18, head)
        para(body, xx + 10, top - 34, 134, size=7.4, leading=9.5, color=MUTED)
    footer(6)
    c.showPage()


def page7():
    y = title("Beyin neden tekrar oynamak ister?")
    steps = ["Tetikleyici", "İstek", "Davranış", "Kısa rahatlama", "Uzun vadeli zarar"]
    x = 70
    for i, s in enumerate(steps):
        xx = x + i * 96
        box(xx, 524, 82, 44, fill=SOFT, stroke=BLUE, radius=12)
        c.setFont("Arial-Bold", 7.7)
        c.setFillColor(NAVY)
        for j, line in enumerate(wrap_lines(s, 68, "Arial-Bold", 7.7)):
            c.drawCentredString(xx + 41, 550 - j * 9, line)
        if i < len(steps) - 1:
            arrow(xx + 82, 546, xx + 96, 546)
    text = [
        "Kumar davranışı, ödül beklentisiyle güçlü biçimde öğrenilebilir. Belirsiz ödüller insan zihni için çekici olabilir; çünkü sonuç her zaman aynı değildir. Bazen kazanma, bazen kaybetme, bazen de sonuca yaklaşmış gibi hissetme, isteği yeniden tetikleyebilir.",
        "Kazanma anındaki yoğun uyarılma, kaybetmenin yarattığı telafi isteği ve zamanla aynı heyecan için daha fazla risk alma eğilimi döngüyü besleyebilir. Bildirimler, reklamlar, maçlar, para gelmesi, yalnızlık, can sıkıntısı veya borç hatırlatmaları isteği artıran ipuçları olabilir.",
        "Beyni 'bozuk' ya da kişiyi çaresiz görmek doğru değildir. Bir davranışın güçlü biçimde öğrenilmiş olması değişemeyeceği anlamına gelmez. Ancak değişim yalnızca 'bir daha yapmayacağım' demekten daha kapsamlı bir plan gerektirebilir. Tetikleyicileri tanımak, erişimi zorlaştırmak, destek almak ve kriz anına yönelik küçük adımlar belirlemek bu planın parçaları olabilir."
    ]
    yy = 470
    for p in text:
        yy = para(p, M, yy, size=10.1, leading=14.1)
        yy -= 8
    footer(7)
    c.showPage()


def page8():
    y = title("Kumar davranışını tetikleyen durumlar")
    headers = ["Tarih/saat", "Nerede?", "Ne hissettim?", "Düşünce", "İstek 0-10", "Ne yaptım?", "Sonuç"]
    x0, y0, table_w = M, 626, 500
    col_w = [58, 62, 75, 74, 58, 72, 101]
    box(x0, y0, table_w, 24, fill=NAVY, stroke=NAVY, radius=8)
    c.setFont("Arial-Bold", 6.2)
    c.setFillColor(WHITE)
    xx = x0
    for h, cw in zip(headers, col_w):
        c.drawString(xx + 4, y0 + 9, h)
        xx += cw
    for r in range(6):
        yy = y0 - 34 - r * 45
        box(x0, yy, table_w, 38, fill=WHITE, stroke=LINE, radius=4)
        xx = x0
        c.setStrokeColor(LINE)
        for cw in col_w[:-1]:
            xx += cw
            c.line(xx, yy, xx, yy + 38)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 11)
    c.drawString(M, 315, "Olası tetikleyiciler")
    triggers = ["Maaş veya para gelmesi", "Borç hatırlatması", "Tartışma", "Yalnızlık", "Can sıkıntısı", "Stres", "Alkol kullanımı", "Maç veya spor karşılaşması", "Kumar reklamı veya bildirimi", "Arkadaş çevresi", "Geçmiş kazancı hatırlama", "Kayıpları geri alma düşüncesi"]
    yy = 288
    for i, t in enumerate(triggers):
        xx = M + (i % 3) * 168
        if i % 3 == 0 and i:
            yy -= 28
        box(xx, yy, 150, 20, fill=SOFT, stroke=LINE, radius=6)
        c.setFont("Arial", 6.9)
        c.setFillColor(INK)
        c.drawCentredString(xx + 75, yy + 7, t)
    note_box("Amaç", "Bu sayfa tanı koymak için değil, davranışın hangi duygu ve koşullarda güçlendiğini fark etmek için kullanılabilir.", M, 94, 500, 58)
    footer(8)
    c.showPage()


def page9():
    y = title("Kumarın gerçek maliyeti")
    sections = [
        ("Maddi etkiler", ["Kaybedilen para", "Borçlar", "Geciken faturalar", "Kredi veya ek hesap", "Satılan eşyalar", "Başkalarından alınan para"]),
        ("Zaman", ["Oynama süresi", "Sonuç takip etme", "Para bulma çabası", "Kayıpları düşünme", "Gizleme için harcanan zaman"]),
        ("Ruhsal etkiler", ["Kaygı", "Utanç", "Öfke", "Uyku sorunları", "Umutsuzluk", "Kendine güven kaybı"]),
        ("İlişkisel etkiler", ["Yalan söyleme", "Güven kaybı", "Tartışmalar", "Duygusal uzaklaşma", "Aile bütçesinin etkilenmesi"]),
        ("İş ve günlük yaşam", ["Dikkat dağınıklığı", "İşe geç kalma", "Verim kaybı", "Sorumlulukları erteleme"]),
    ]
    for i, (head, items) in enumerate(sections):
        xx = M + (i % 2) * 258
        yy = y - (i // 2) * 152
        box(xx, yy - 122, 238, 128, fill=PALE, stroke=LINE, radius=10)
        c.setFont("Arial-Bold", 10)
        c.setFillColor(NAVY)
        c.drawString(xx + 13, yy - 18, head)
        bullet(items, xx + 13, yy - 38, width=210, size=7.55, leading=9.7)
    line_field(M, 145, 500, "Son bir ay içinde kumarın bana gerçek maliyeti...", h=70)
    footer(9)
    c.showPage()


def page10():
    flow_page(10, "Gizleme ve utanç döngüsü", [
        "Kumar ve kayıp", "Utanç veya korku", "Gerçeği gizleme",
        "Yalnızlaşma", "Borç ve baskının büyümesi", "Daha fazla kaçış ihtiyacı", "Yeniden kumar"
    ], [
        "Gizlemek bazen kısa süreli çatışmadan koruyor gibi görünebilir. Kişi yakınlarının üzülmesini istemediği, tepki almaktan korktuğu ya da kaybı kabullenmekte zorlandığı için gerçeği saklayabilir. Bu durum yakınlarını önemsemediği anlamına gelmeyebilir.",
        "Ancak uzun vadede gizleme güven sorunlarını büyütür. Borç ve baskı arttıkça kişi daha yalnız hissedebilir. Yalnızlık ve utanç arttığında kumar yeniden kaçış yolu gibi görünebilir. Böylece döngü daha da güçlenir.",
        "Açıklık tek bir konuşmayla tamamen kurulmaz. Güvenin yeniden oluşması zaman içinde tutarlı davranışlar, sınırlar, destek ve gerçekçi planlarla mümkün olabilir. Gizlemeyi mazur göstermek doğru değildir; ama kişiyi aşağılamak da değişimi kolaylaştırmaz."
    ])


def page11():
    y = title("\"Bir kez daha oynarsam...\" düşünceleri")
    rows = [
        ("Bu kez kazanacağım.", "Bu düşünce isteği artırabilir; sonuç yine belirsizdir."),
        ("Kaybımı çıkarınca bırakacağım.", "Yeni bir bahis geçmiş kaybı ortadan kaldırmaz; yeni kayıp olasılığı oluşturur."),
        ("Son bir kez oynuyorum.", "Daha önce de 'son kez' dediysem bu düşünce döngünün parçası olabilir."),
        ("Bu maçı iyi biliyorum.", "Bilgi sahibi olmak sonucu kontrol ettiğim anlamına gelmez."),
        ("Borcu ancak böyle kapatabilirim.", "Borcu yeni riskle kapatmaya çalışmak baskıyı büyütebilir."),
        ("Küçük miktardan bir şey olmaz.", "Küçük başlangıçlar daha büyük risklere kapı açabilir."),
        ("Zaten çok kaybettim.", "Bırakmanın anlamı yok düşüncesi zararı artırabilir."),
        ("Kimseye söylemeden düzeltirim.", "Gizlice düzeltmeye çalışmak yalnızlığı artırabilir."),
        ("Bugün şansım dönecek.", "Şans hissi güvenilir bir plan değildir."),
        ("Kontrol bende.", "Sınırlar sık aşılıyorsa kontrolü yeniden değerlendirmek gerekir."),
    ]
    box(M, y - 30, 500, 28, fill=NAVY, stroke=NAVY, radius=8)
    c.setFillColor(WHITE)
    c.setFont("Arial-Bold", 8.8)
    c.drawString(M + 12, y - 19, "Zihnimden geçen düşünce")
    c.drawString(M + 258, y - 19, "Daha dengeli karşılık")
    yy = y - 50
    for a, b in rows:
        box(M, yy - 38, 500, 42, fill=PALE, stroke=LINE, radius=7)
        para(a, M + 12, yy - 10, 220, size=7.7, leading=9.3, color=INK)
        arrow(M + 238, yy - 18, M + 253, yy - 18)
        para(b, M + 270, yy - 10, 212, size=7.55, leading=9.2, color=MUTED)
        yy -= 46
    footer(11)
    c.showPage()


def page12():
    y = title("Değişime hazır mıyım?")
    left = ["Heyecan", "Kaçış", "Umut", "Sosyallik", "Para kazanma ihtimali", "Can sıkıntısından uzaklaşma"]
    right = ["Para", "Zaman", "Güven", "Uyku", "Huzur", "İlişkiler", "Kendime saygı", "Gelecek planları"]
    box(M, 430, 238, 190, fill=SOFT, stroke=LINE, radius=12)
    box(M + 260, 430, 238, 190, fill=PALE, stroke=LINE, radius=12)
    c.setFont("Arial-Bold", 10.5)
    c.setFillColor(NAVY)
    c.drawString(M + 14, 596, "Kumarın verdiğini düşündüğüm şeyler")
    c.drawString(M + 274, 596, "Kumarın benden götürdüğü şeyler")
    bullet(left, M + 18, 570, width=200, size=8.0, leading=10.8)
    bullet(right, M + 278, 570, width=200, size=8.0, leading=10.4)
    fields = [
        "Aynı biçimde sürerse altı ay sonra hayatım nasıl olabilir?",
        "Değişiklik yaparsam altı ay sonra nelerin farklı olmasını isterim?",
        "Değişmek istememin benim için en önemli üç nedeni nedir?",
        "Şu anda değişime ne kadar hazırım? 0-10",
        "Puanımı bir basamak yükseltecek küçük şey ne olabilir?",
    ]
    yy = 382
    for f in fields:
        line_field(M, yy, 500, f, h=46)
        yy -= 58
    footer(12)
    c.showPage()


def page13():
    y = title("Kumar isteği yükseldiğinde ilk güvenlik adımları")
    intro = "Bu öneriler tıbbi tedavi yerine geçmez; amaç, isteğin en yoğun olduğu anda davranışı geciktirmek ve yeni zararı önlemek için güvenli bir ara oluşturmaktır."
    y = para(intro, M, y, size=9.8, leading=13.6, color=INK)
    y -= 8
    steps = [
        "O an yeni para yatırmamak.",
        "Kumar uygulamasından veya sitesinden uzaklaşmak.",
        "Banka veya ödeme erişimini geçici olarak zorlaştırmak.",
        "Güvenilen bir kişiye haber vermek.",
        "Kumarın oynandığı ortamdan çıkmak.",
        "Kararı en az 30 dakika ertelemek.",
        "İstek düzeyini 0-10 arasında not etmek.",
        "Kısa yürüyüş veya ortam değişikliği yapmak.",
        "Kumarla bağlantılı bildirimleri kapatmak.",
        "Alkol veya madde etkisi altındayken mali karar vermemek.",
        "Yalnız kalmamak.",
        "Profesyonel destek bağlantısına yönelmek.",
    ]
    y = bullet(steps, M, y, size=9.0, leading=12.2)
    note_box("İstek bir emir değildir.", "Güçlü hissedilebilir ancak hemen davranmak zorunda değilsiniz.", M, 88, 500, 62, fill=WARN)
    footer(13)
    c.showPage()


def page14():
    y = title("Paraya erişimi güvenli hâle getirmek")
    items = [
        "Yeni borç oluşturmamak ve borçla kumar davranışını sürdürmemek.",
        "Kumar hesabına para aktarmayı zorlaştırmak.",
        "Kredi kartı ve dijital ödeme erişimini gözden geçirmek.",
        "Bankaların sunduğu işlem engelleme seçeneklerini araştırmak.",
        "Kişinin onayıyla güvendiği biriyle geçici bütçe desteği planlamak.",
        "Temel ihtiyaçlara ayrılan parayı ayrı tutmak.",
        "Borçların tam listesini çıkarmak.",
        "Yeni bahisle borç kapatmaya çalışmamak.",
        "Mali durum ağırlaştıysa yetkin bir mali danışman veya ilgili resmi kurumdan destek almak.",
    ]
    y = bullet(items, M, y, size=9.7, leading=13.2)
    y -= 8
    text = "Bir yakının kişinin tüm parasını zorla kontrol etmesi, tek başına kalıcı çözüm oluşturmaz. Mali güvenlik önlemleri, kişinin katılımı ve profesyonel destekle birlikte ele alınmalıdır. Bu sayfa hukuki veya mali danışmanlık yerine geçmez; amacı zarar riskini azaltacak genel ilkeleri hatırlatmaktır."
    para(text, M, y, size=10.0, leading=14.0)
    footer(14)
    c.showPage()


def page15():
    y = title("Yakınları ne yapabilir?")
    intro = "Yakınlar çoğu zaman hem öfkeli hem kaygılı hem de çaresiz hissedebilir. Kişinin borçlarını sürekli kapatmak iyi niyetli görünse de bazen döngünün sürmesine istemeden katkıda bulunabilir. Hakaret, aşağılama veya boş tehditler ise utancı artırabilir ve konuşmayı daha da zorlaştırabilir."
    y = para(intro, M, y, size=9.35, leading=12.8)
    y -= 10
    left = [("Hakaret etmek", "Utancı ve savunmayı artırabilir."), ("Sürekli hesap sormak", "Konuşmayı sorguya çevirebilir."), ("Gizlice takip etmek", "Güven sorunlarını büyütebilir."), ("Her borcu hemen kapatmak", "Davranışın sonucunu görünmez kılabilir."), ("Çocukları aracı yapmak", "Çocukları çatışmanın içine sokar."), ("Boş tehditler", "Sınırların ciddiyetini azaltabilir."), ("Kendi güvenliğini ihmal etmek", "Yakının da zararını artırabilir.")]
    right = [("Net ve sakin sınırlar", "Ne yapılabileceği ve yapılamayacağı açık konuşulabilir."), ("Gerçekleri konuşmak", "Borç ve riskler görünür hale getirilebilir."), ("Destek önermek", "Profesyonel yardım arayışı teşvik edilebilir."), ("Mali riskleri azaltmak", "Ortak hesaplar ve borçlar gözden geçirilebilir."), ("Kendi desteğini aramak", "Yakınlar da psikolojik destek alabilir."), ("Kriz belirtilerini ciddiye almak", "Güvenlik riski varsa hızlı yardım aranmalıdır.")]
    for col, rows in enumerate((left, right)):
        xx = M + col * 258
        box(xx, 104, 238, 445, fill=PALE, stroke=LINE, radius=12)
        c.setFont("Arial-Bold", 10)
        c.setFillColor(NAVY)
        c.drawString(xx + 13, 524, "Döngüyü zorlaştırabilir" if col == 0 else "Daha koruyucu olabilir")
        yy = 498
        for head, body in rows:
            c.setFont("Arial-Bold", 8.2)
            c.setFillColor(NAVY)
            c.drawString(xx + 13, yy, head)
            yy = para(body, xx + 13, yy - 12, 210, size=7.4, leading=9.2)
            yy -= 9
    footer(15)
    c.showPage()


def page16():
    y = title("Profesyonel değerlendirmede neler ele alınabilir?")
    text = [
        "Profesyonel değerlendirme yalnızca 'ne kadar para kaybettiniz?' sorusundan oluşmaz. Kumar davranışının türü ve sıklığı, harcanan zaman, kayıpları kovalama davranışı, borçlar, gizleme, iş ve aile yaşamına etkiler, daha önceki bırakma girişimleri ve isteği tetikleyen durumlar birlikte ele alınabilir.",
        "Ruhsal durum da önemlidir. Depresyon ve kaygı belirtileri, alkol veya madde kullanımı, dikkat sorunları, dürtüsellik, uyku, travmatik yaşantılar ve kendine zarar verme düşünceleri değerlendirmede yer alabilir. Yakınların yaşadığı zararlar da ayrıca görülmelidir.",
        "Profesyonel destek, kişiye göre farklı bileşenler içerebilir: psikiyatrik değerlendirme, psikoterapi, bağımlılık alanında çalışan uzmanlarla görüşme, sosyal ve mali destek hizmetleri, gerektiğinde aile veya çift görüşmeleri. Bu rehber belirli bir ilaç ya da tedavi protokolü önermez.",
        "Amaç kişiyi utandırmak değil, döngünün hangi noktalarda güçlendiğini ve hangi güvenli adımların atılabileceğini anlamaktır. Değerlendirme kişinin öyküsüne göre şekillenir."
    ]
    for p in text:
        y = para(p, M, y, size=10.15, leading=14.3)
        y -= 9
    footer(16)
    c.showPage()


def page17():
    y = title("Kriz ve güvenlik planı")
    intro = "Kumar sonrasında yoğun çaresizlik, utanç veya çıkışsızlık hissi ortaya çıkabilir. Bu duygular özellikle büyük bir kayıp, borcun ortaya çıkması veya aileyle yaşanan çatışma sonrasında artabilir. Böyle bir anda kişi yalnız kalmamalı ve yardım aramayı ertelememelidir."
    y = para(intro, M, y, size=9.5, leading=13.2, color=INK)
    y -= 8
    urgent = ["Yaşamak istemiyorum düşüncesi", "Kendine zarar verme düşüncesi", "Bir plan yapma", "Vedalaşma veya eşyaları dağıtma", "Büyük kayıp sonrası kontrolsüz davranma", "Başkasına zarar verme düşüncesi", "Yoğun alkol veya madde kullanımı", "Güvenliğini sağlayamayacağını hissetme"]
    box(M, 430, 500, 138, fill=WARN, stroke=LINE, radius=12)
    c.setFont("Arial-Bold", 10)
    c.setFillColor(NAVY)
    c.drawString(M + 14, 544, "Acil ele alınması gereken durumlar")
    bullet(urgent, M + 16, 520, width=460, size=7.0, leading=8.8)
    fields = ["Bende krizin yükseldiğini gösteren işaretler:", "O anda uzaklaşmam gereken şeyler:", "Arayabileceğim üç kişi:", "Yalnız kalmamak için gidebileceğim güvenli yer:", "Kendime zarar vermek için kullanabileceğim araçları nasıl uzaklaştıracağım?", "Başvurabileceğim sağlık kuruluşu:", "Acil durumda aranacak numara:"]
    yy = 400
    for f in fields:
        line_field(M, yy, 500, f, h=30)
        yy -= 38
    note_box("Kendinize veya başka birine zarar verme riskiniz varsa", "Yalnız kalmayın; 112'yi arayın veya en yakın acil servise başvurun.", M, 76, 500, 56, fill=WARN)
    footer(17)
    c.showPage()


def page18():
    y = title("Sık Sorulan Sorular", size=24)
    faqs = [
        ("Her oynayan zarar yaşar mı?", "Hayır. Ancak zarar birden fazla alana yayılıyorsa değerlendirme önemlidir."),
        ("Ne kadar kayıp sorun gösterir?", "Tek ölçüt miktar değildir; gizleme, borç ve işlevsellik de önemlidir."),
        ("Spor bahsi de sorun olabilir mi?", "Evet. Yöntemden çok davranışın kontrolü ve zararı değerlendirilir."),
        ("Sadece para için mi sürer?", "Hayır. Heyecan, kaçış ve rahatlama isteği de etkili olabilir."),
        ("Kayıpları geri kazanmak mümkün değil mi?", "Yeni oynama geçmiş kaybı geri getirme garantisi taşımaz."),
        ("Büyük kazanç sorunu çözer mi?", "Çoğu zaman döngüyü güçlendirebilir."),
        ("Bu irade eksikliği mi?", "Tek başına irade meselesi gibi görmek eksik kalır."),
        ("Kendi başıma bırakabilir miyim?", "Bazı kişiler azaltabilir; zarar sürüyorsa destek almak daha güvenlidir."),
        ("Uygulamayı silmek yeterli mi?", "Yararlı olabilir ama çoğu zaman tek başına yeterli değildir."),
        ("Aile borcu kapatırsa çözülür mü?", "Borç azalabilir; davranış döngüsü ayrıca ele alınmalıdır."),
        ("Sürekli düşünmem önemli mi?", "Evet, zihinsel meşguliyet değerlendirilmesi gereken bir işarettir."),
        ("Alkol etkiler mi?", "Bazı kişilerde kontrolü azaltıp riski artırabilir."),
        ("Kaygı ve depresyon ilişkili mi?", "Eşlik edebilir; profesyonel değerlendirmede ele alınabilir."),
        ("Yakınım gerçeği söylemiyor.", "Sakin sınırlar, mali güvenlik ve destek arayışı önemlidir."),
        ("Aile görüşmesi yararlı mı?", "Bazı durumlarda iletişim ve sınırları netleştirebilir."),
        ("Tekrar oynadıysam bitti mi?", "Hayır. Planın gözden geçirilmesi gereken bir işaret olabilir."),
        ("Engelleme uygulamaları işe yarar mı?", "Bazı kişilerde destekleyici olabilir; tek çözüm gibi görülmemelidir."),
        ("Ne zaman yardım almalıyım?", "Zarar tekrarlıyor, borç/gizleme artıyor veya kriz düşünceleri varsa gecikmemek gerekir."),
    ]
    for idx, (q, a) in enumerate(faqs):
        col = idx % 2
        row = idx // 2
        xx = M + col * 258
        yy = y - row * 58
        box(xx, yy - 40, 238, 46, fill=PALE, stroke=LINE, radius=8)
        c.setFont("Arial-Bold", 7.65)
        c.setFillColor(NAVY)
        c.drawString(xx + 9, yy - 11, q)
        para(a, xx + 9, yy - 24, 218, size=6.8, leading=8.2)
    footer(18)
    c.showPage()


def page19():
    y = title("Kendime küçük hatırlatmalar")
    box(80, 176, 436, 454, fill=WHITE, stroke=BLUE, radius=18, lw=1.4)
    c.setStrokeColor(LINE)
    c.setDash(3, 3)
    c.rect(96, 192, 404, 422, fill=0, stroke=1)
    c.setDash()
    c.setFillColor(SOFT)
    c.circle(W / 2, 586, 34, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.setFont("Georgia-Bold", 20)
    c.drawCentredString(W / 2, 550, "Hatırlatma Kartı")
    reminders = [
        "Geçmiş kaybı yeni bir bahis geri getirmek zorunda değildir.",
        "Kumar isteği güçlü olabilir ama ona hemen uymak zorunda değilim.",
        "\"Son kez\" düşüncesi döngünün bir parçası olabilir.",
        "Borcu kumarla kapatmaya çalışmak yeni risk oluşturur.",
        "Gizlemek baskıyı azaltmaz; çoğu zaman büyütür.",
        "Yardım istemek iradesizlik değildir.",
        "Tekrar oynamış olmam değişimin imkansız olduğu anlamına gelmez.",
        "Bugün atacağım küçük bir güvenlik adımı önemlidir.",
        "Kriz anında yalnız kalmayacağım.",
    ]
    yy = 510
    for r in reminders:
        c.setFillColor(BLUE)
        c.circle(120, yy + 4, 2.8, fill=1, stroke=0)
        yy = para(r, 138, yy, 330, size=8.8, leading=12.1, color=INK)
        yy -= 6
    line_field(108, 254, 380, "Bugün kumar oynamamak için en önemli nedenim...", h=42)
    line_field(108, 202, 380, "İstek yükselirse arayacağım kişi...", h=42)
    footer(19)
    c.showPage()


def page20():
    y = title("Son söz")
    text = [
        "Kumarla ilgili güçlük yalnızca para ya da irade meselesi değildir. Davranış zamanla öğrenilmiş güçlü bir döngüye dönüşebilir. Heyecan, umut, kaybı telafi etme düşüncesi, sıkıntıdan uzaklaşma isteği ve utanç bir araya geldiğinde kişi kendisini aynı noktaya tekrar tekrar dönerken bulabilir.",
        "Utanç ve gizleme yalnızlığı artırabilir. Kişi yakınlarını korumaya çalışırken ya da tepki almaktan korkarken durumu saklayabilir. Fakat gizleme çoğu zaman baskıyı azaltmaz; borçları, güven sorunlarını ve çaresizlik duygusunu büyütebilir. Gerçek değişim, geçmiş kaybı telafi etmekten önce yeni zararları durdurmaya çalışmakla başlar.",
        "Yakınlar da bu süreçten etkilenir. Öfke, kaygı, güvensizlik ve yorgunluk yaşayabilirler. Kişinin ve ailesinin ayrı ayrı destek alma hakkı vardır. Değişim sorumluluğu yalnızca yakınların üzerine bırakılamaz; ancak yakınların kendilerini koruyan sınırlar kurması da önemlidir.",
        "Tekrar oynamak değişim ihtimalini ortadan kaldırmaz. Ancak tekrarların ciddiye alınması, planın nerede eksik kaldığını anlamak ve destek arayışını güçlendirmek gerekir. Profesyonel yardım istemek başarısızlık değil, sorumluluk davranışıdır. İyileşme çoğu zaman düzenli, çok yönlü ve sabırlı destekle mümkün olur.",
        "Bu rehber genel bilgilendirme amacıyla hazırlanmıştır. Tanı, psikiyatrik değerlendirme, psikoterapi, mali danışmanlık veya acil sağlık hizmetinin yerine geçmez."
    ]
    for p in text:
        y = para(p, M, y, size=9.6, leading=13.4)
        y -= 7
    note_box("Acil uyarı", "Yoğun çaresizlik, kendine zarar verme veya intihar düşüncesi varsa yalnız kalmayın. 112'yi arayın veya en yakın acil servise başvurun.", M, 180, 500, 74, fill=WARN)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 10)
    c.drawString(M, 132, "Yararlanılan kaynaklar")
    sources = "WHO ICD-11 Gambling Disorder; NICE Guideline NG248: Gambling-related harms; NHS: Gambling addiction and getting help; güncel psikiyatri ve bağımlılık psikoeğitimi kaynakları."
    para(sources, M, 114, width=500, size=8.3, leading=10.8, color=MUTED)
    footer(20)
    c.showPage()


for fn in [
    page1, page2, page3, page4, page5, page6, page7, page8, page9, page10,
    page11, page12, page13, page14, page15, page16, page17, page18, page19, page20,
]:
    fn()

c.save()
print(OUT)
