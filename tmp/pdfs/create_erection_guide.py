from pathlib import Path
import math

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


OUT = Path("output/pdf/ereksiyon-sorununu-anlamak.pdf")
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
SOFT_BLUE = colors.HexColor("#eaf4fb")
PALE = colors.HexColor("#f6fbfe")
GREY = colors.HexColor("#edf3f6")
INK = colors.HexColor("#22333b")
MUTED = colors.HexColor("#5d6e78")
LINE = colors.HexColor("#c9dce8")
WARN = colors.HexColor("#f4efe8")
WHITE = colors.white

c = canvas.Canvas(str(OUT), pagesize=A4)
c.setTitle("Ereksiyon Sorununu Anlamak")
c.setAuthor("Dr. Özgür Özbebit")
c.setSubject("Psikoeğitim Serisi No: 7 - Erkekler ve çiftler için psikoeğitim rehberi")
c.setCreator("Dr. Özgür Özbebit")

M = 48
TOP = H - 78
BOTTOM = 58


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


def para(text, x, y, width=500, size=10.0, leading=14.0, font="Arial", color=MUTED):
    c.setFont(font, size)
    c.setFillColor(color)
    for line in wrap_lines(text, width, font, size):
        c.drawString(x, y, line)
        y -= leading
    return y


def title(text, y=TOP, size=25):
    c.setFillColor(NAVY)
    c.setFont("Georgia-Bold", size)
    lines = wrap_lines(text, 500, "Georgia-Bold", size)
    for line in lines:
        c.drawString(M, y, line)
        y -= size + 5
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(M, y + 9, M + 74, y + 9)
    return y - 18


def note_box(label, text, x, y, w, h, fill=SOFT_BLUE):
    box(x, y, w, h, fill=fill, stroke=LINE, radius=10)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 10.5)
    c.drawString(x + 14, y + h - 22, label)
    para(text, x + 14, y + h - 42, w - 28, size=8.8, leading=11.1, color=INK)


def draw_logo(x, y, size):
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


def arrow(x1, y1, x2, y2):
    c.setStrokeColor(NAVY2)
    c.setLineWidth(1.3)
    c.line(x1, y1, x2, y2)
    ang = math.atan2(y2 - y1, x2 - x1)
    for d in (math.pi * 0.82, -math.pi * 0.82):
        c.line(x2, y2, x2 + math.cos(ang + d) * 7, y2 + math.sin(ang + d) * 7)


def bullet(items, x, y, width=500, size=9.4, leading=12.7):
    for item in items:
        c.setFillColor(BLUE)
        c.circle(x + 4, y + 4, 2.2, fill=1, stroke=0)
        y = para(item, x + 16, y, width - 16, size=size, leading=leading, color=INK)
        y -= 3
    return y


def page1():
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#0f2a45"))
    c.circle(W * 0.84, H * 0.18, 185, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#214966"))
    c.circle(W * 0.15, H * 0.88, 118, fill=1, stroke=0)
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.1)
    for i in range(7):
        c.circle(W / 2, H / 2 - 36, 70 + i * 22, fill=0, stroke=1)
    draw_logo(W / 2 - 54, H - 182, 108)
    c.setFillColor(BLUE)
    c.setFont("Arial-Bold", 12)
    c.drawCentredString(W / 2, H - 226, "Psikoeğitim Serisi No: 7")
    c.setFillColor(WHITE)
    c.setFont("Georgia-Bold", 31)
    c.drawCentredString(W / 2, H - 286, "Ereksiyon Sorununu")
    c.drawCentredString(W / 2, H - 324, "Anlamak")
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(W / 2 - 92, H - 348, W / 2 + 92, H - 348)
    c.setFont("Arial", 13)
    c.setFillColor(colors.HexColor("#dbeaf4"))
    c.drawCentredString(W / 2, H - 384, "Erkekler ve Çiftler İçin Psikoeğitim Rehberi")
    c.setFont("Arial-Bold", 14)
    c.setFillColor(WHITE)
    c.drawCentredString(W / 2, 156, "Dr. Özgür Özbebit")
    c.setFont("Arial", 12)
    c.drawCentredString(W / 2, 134, "Psikiyatrist")
    c.setFont("Arial", 10)
    c.drawCentredString(W / 2, 102, "www.ozgurozbebit.com.tr")
    c.showPage()


def page2():
    y = title("Bu rehber neden hazırlandı?")
    text = [
        "Ereksiyon güçlüğü, konuşulması kolay olmayan konulardan biridir. Birçok erkek bu durumu yaşadığında önce bunu kendi içinde çözmeye çalışır; bazen utanç duyar, bazen de partnerinin ne düşüneceğinden çekinir. Oysa cinsel işlevle ilgili zorlanmalar insan bedeninin ve ruhsal yaşamın karmaşık işleyişi içinde ortaya çıkabilir. Bu durum kişinin değerini, ilişkisindeki yerini ya da partnerine duyduğu yakınlığı tek başına açıklamaz.",
        "Bu rehber, ereksiyon sorunu yaşayan erkekleri veya çiftleri korkutmak için değil; konuyu daha sakin, daha anlaşılır ve daha gerçekçi biçimde ele almak için hazırlandı. İnternette bu konuda çok fazla bilgi vardır, fakat bu bilgilerin önemli bir kısmı ya abartılı vaatler içerir ya da kişiyi daha fazla kaygılandıran bir dille yazılmıştır. Oysa mahrem bir konuda en çok ihtiyaç duyulan şey, önce güvenli ve yargılamayan bir açıklamadır.",
        "Ereksiyonun oluşması yalnızca isteğe bağlı değildir. Beyin, sinir sistemi, damar sağlığı, hormonlar, uyku, stres düzeyi, kullanılan ilaçlar, alkol ve madde kullanımı, ilişki koşulları ve kişinin o anki duygusal durumu birlikte rol oynayabilir. Bu nedenle yaşanan güçlüğü tek bir nedene bağlamak çoğu zaman doğru olmaz.",
        "Kişi bazen bir kez yaşadığı zorlanmadan sonra kendini izlemeye başlar. Yakınlık anında uyarılmaya değil, bedeninin nasıl çalıştığını kontrol etmeye odaklanır. Bu kontrol çabası kaygıyı artırabilir; kaygı arttıkça bedenin doğal yanıtı daha da zorlaşabilir. Böylece başlangıçta geçici olabilecek bir durum zamanla daha sık yaşanır hale gelebilir.",
        "Bilgi, her sorunu tek başına çözmez; ancak korkunun büyümesini azaltabilir. Kişi ne yaşadığını daha iyi anladığında kendisini daha az suçlayabilir. Partner de bu durumu kişisel bir reddedilme gibi görmek yerine, birlikte ele alınabilecek bir süreç olarak değerlendirebilir. Bu rehberin amacı tam olarak budur: sakin bir başlangıç zemini oluşturmak.",
        "Buradaki bilgiler tanı koymak ya da tedavi seçmek için kullanılmamalıdır. Süreklilik gösteren, kişiyi kaygılandıran veya ilişkiyi etkileyen ereksiyon güçlüklerinde hekim değerlendirmesi önemlidir. Değerlendirme almak, zayıflık değil; kişinin sağlığıyla ilgilenme sorumluluğudur."
    ]
    for p in text:
        y = para(p, M, y, size=9.7, leading=13.4)
        y -= 5
    note_box("Unutmayın", "Ereksiyon güçlüğü kişinin isteksiz, yetersiz veya partnerine karşı ilgisiz olduğu anlamına gelmez. Tek bir belirti üzerinden kişinin kendisi veya ilişkisi hakkında kesin sonuçlara varmak doğru değildir.", M, 82, 500, 74)
    footer(2)
    c.showPage()


def page3():
    y = title("Ereksiyon nasıl oluşur?")
    x0, w, h = 74, 150, 44
    steps = [
        ("Uyarılma", 216),
        ("Beyin ve sinir sistemi", 296),
        ("Damarların gevşemesi", 376),
        ("Kan akımının artması", 456),
        ("Ereksiyonun oluşması ve sürdürülmesi", 536),
    ]
    for label, yy in steps:
        box(x0, yy, w, h, fill=SOFT_BLUE, stroke=BLUE, radius=14)
        c.setFont("Arial-Bold", 9.2)
        c.setFillColor(NAVY)
        for i, line in enumerate(wrap_lines(label, w - 24, "Arial-Bold", 9.2)):
            c.drawCentredString(x0 + w / 2, yy + 26 - i * 11, line)
    for i in range(len(steps) - 1):
        arrow(x0 + w / 2, steps[i][1] + h, x0 + w / 2, steps[i + 1][1])
    paragraphs = [
        "Ereksiyon, bedenin tek bir bölgesinin çalışmasıyla açıklanabilecek basit bir refleks değildir. Cinsel uyarılma, beyin ve sinir sistemi tarafından algılanır; bu bilgi bedene iletilir ve damarların gevşemesini sağlayan süreçler devreye girer. Damarlar gevşediğinde ilgili bölgeye kan akımı artar. Bu artışın sürmesi, ereksiyonun oluşması ve devam edebilmesi için önemlidir.",
        "Bu süreçte kişinin bedensel sağlığı kadar ruhsal durumu da etkilidir. Yoğun stres, yorgunluk, uykusuzluk, performans baskısı, ilişki içindeki gerilim ya da kişinin kendini sürekli gözlemlemesi uyarılmayı zorlaştırabilir. Aynı şekilde damar sağlığı, sinir sistemi, hormon düzeyi, kullanılan ilaçlar ve genel sağlık durumu da süreci etkileyebilir.",
        "Bu nedenle ereksiyon güçlüğü yaşandığında beden ve zihin birbirinden ayrı iki alan gibi düşünülmemelidir. Bazen bedensel bir etken kaygıyı artırır; bazen kaygı bedensel yanıtı zorlaştırır. Çoğu durumda bu iki alan iç içe geçer.",
        "Bir zincirin herhangi bir halkasında zorlanma olduğunda tüm süreç etkilenebilir. Bu, kişinin kendisini suçlaması gereken bir durum değildir. Aksine, hangi halkaların zorlandığını anlamak için sakin ve bütüncül bir değerlendirme gerekir."
    ]
    yy = y
    for p in paragraphs:
        yy = para(p, 255, yy, width=292, size=9.5, leading=13.2)
        yy -= 5
    note_box("Kısa bilgi", "Ereksiyonun oluşması için istek tek başına yeterli değildir. Bedenin sinir, damar, hormon ve duygu sistemlerinin birlikte çalışması gerekir.", 255, 86, 292, 72)
    footer(3)
    c.showPage()


def page4():
    y = title("Ereksiyon sorunu ne anlama gelir?")
    cards = [
        ("Hiç oluşmama", "Bazı durumlarda ereksiyon hiç başlamayabilir. Bu tek başına kesin bir tanı anlamına gelmez."),
        ("Sürdürememe", "Başlayan ereksiyon yakınlık sırasında azalabilir. Kaygı, dikkat, yorgunluk ve bedensel etkenler rol oynayabilir."),
        ("Duruma göre değişme", "Kişi bazı koşullarda zorlanırken başka koşullarda daha rahat olabilir."),
        ("Sabah ve gece değişiklikleri", "Uyku sırasında veya sabah görülen değişiklikler değerlendirmede yardımcı bilgilerden biridir."),
        ("Yeni partner veya stres", "Yeni ilişki, baskı, yoğun stres ya da uzun süreli uzaklık bedensel yanıtı etkileyebilir."),
        ("Tekrarlayan güçlük", "Sorun sıklaştığında, kaygı oluşturduğunda veya ilişkiyi etkilediğinde değerlendirme önem kazanır."),
    ]
    x, ycard = M, y - 4
    for i, (head, body) in enumerate(cards):
        col = i % 2
        row = i // 2
        xx = x + col * 258
        yy = ycard - row * 94
        box(xx, yy - 70, 240, 74, fill=PALE, stroke=LINE)
        c.setFillColor(NAVY)
        c.setFont("Arial-Bold", 10.5)
        c.drawString(xx + 13, yy - 18, head)
        para(body, xx + 13, yy - 37, 214, size=8.5, leading=10.6, color=MUTED)
    y = 294
    text = [
        "Ereksiyon sorunu tek bir biçimde ortaya çıkmaz. Kimi zaman hiç oluşmama, kimi zaman başladıktan sonra sürdürememe, kimi zaman da yalnızca belirli durumlarda yaşanma şeklinde görülebilir. Bu farklılıklar önemlidir; çünkü değerlendirme, yalnızca 'var' ya da 'yok' gibi basit bir ayrım üzerinden yapılmaz.",
        "Bir kişinin yalnızca bir kez zorlanması, kalıcı bir sorun olduğu anlamına gelmez. Yorgunluk, alkol kullanımı, yoğun stres, ilişki içindeki gerilim ya da o günkü zihinsel yük bedensel yanıtı geçici olarak etkileyebilir. Ancak durum tekrarlıyor, kişide belirgin kaygı oluşturuyor veya yakınlıktan kaçınmaya neden oluyorsa profesyonel değerlendirme yararlı olabilir.",
        "Sürecin nasıl başladığı, hangi koşullarda yaşandığı, sabah veya gece ereksiyonlarının durumu, cinsel istek, genel sağlık ve kullanılan ilaçlar birlikte ele alınmalıdır. Bu bütüncül bakış, gereksiz korkuyu azaltırken gerçekçi bir yol haritası oluşturmaya yardım eder."
    ]
    for p in text:
        y = para(p, M, y, size=9.6, leading=13.3)
        y -= 5
    note_box("Klinik not", "Bir kez yaşanan güçlük ile tekrarlayan bir sorun aynı şey değildir. Değerlendirmede sıklık, süreklilik, ortaya çıktığı koşullar ve eşlik eden diğer belirtiler birlikte ele alınır.", M, 82, 500, 72)
    footer(4)
    c.showPage()


def page5():
    y = title("Nedenleri tek bir başlık altında toplamak doğru değildir?")
    cx, cy = W / 2, 455
    box(cx - 82, cy - 28, 164, 56, fill=NAVY, stroke=NAVY, radius=18)
    c.setFillColor(WHITE)
    c.setFont("Arial-Bold", 10.5)
    c.drawCentredString(cx, cy + 4, "Ereksiyon")
    c.drawCentredString(cx, cy - 10, "güçlüğü")
    factors = [
        ("Damar sağlığı", 90, 575), ("Sinir sistemi", 230, 630), ("Hormonlar", 365, 630),
        ("Kullanılan ilaçlar", 480, 575), ("Uyku", 72, 455), ("Stres", 500, 455),
        ("Depresif belirtiler", 90, 330), ("Kaygı", 230, 275), ("İlişki dinamikleri", 365, 275),
        ("Performans baskısı", 480, 330), ("Geçmiş deneyimler", 160, 382), ("Alkol ve diğer maddeler", 395, 382),
    ]
    for label, x, yy in factors:
        box(x - 54, yy - 18, 108, 36, fill=SOFT_BLUE, stroke=BLUE, radius=12)
        c.setFillColor(NAVY)
        c.setFont("Arial-Bold", 7.5)
        for i, line in enumerate(wrap_lines(label, 92, "Arial-Bold", 7.5)):
            c.drawCentredString(x, yy + 4 - i * 9, line)
        c.setStrokeColor(LINE)
        c.setLineWidth(0.7)
        c.line(cx, cy, x, yy)
    y = 226
    text = [
        "Ereksiyon güçlüğü çoğu zaman tek bir nedene indirgenemez. Damar sağlığı, sinir sistemi, hormonlar, uyku, stres, kullanılan ilaçlar, alkol ve diğer maddeler, ilişki koşulları ve kişinin ruhsal durumu birlikte etkili olabilir. Bu etkenlerden biri baskın olabilir; bazen de birkaç küçük etken birleşerek belirgin bir zorlanma oluşturabilir.",
        "Fiziksel ve psikolojik açıklamalar birbirinin rakibi değildir. Örneğin genel sağlıkla ilgili bir sorun bedensel yanıtı zorlaştırırken, bu deneyim kişide performans kaygısı oluşturabilir. Kaygı arttığında beden daha fazla alarm durumuna geçer ve sorun yeniden yaşanabilir. Bu nedenle yalnızca bedene ya da yalnızca zihne bakmak eksik kalabilir.",
        "Değerlendirme sürecinde amaç suçlu bir neden bulmak değil, kişinin yaşam koşulları içinde hangi alanların etkili olabileceğini anlamaktır. Bu bakış, hem gereksiz korkuyu azaltır hem de daha sağlıklı bir plan yapılmasına yardımcı olur."
    ]
    for p in text:
        y = para(p, M, y, size=9.4, leading=13.0)
        y -= 4
    footer(5)
    c.showPage()


def page6():
    y = title("Performans kaygısı döngüsü")
    steps = [
        "Daha önce yaşanan güçlük",
        "\"Ya yine olmazsa?\" düşüncesi",
        "Kendini ve ereksiyonu izleme",
        "Kaygının yükselmesi",
        "Cinsel uyarılmadan uzaklaşma",
        "Ereksiyonun zorlaşması",
        "Olumsuz düşüncenin güçlenmesi",
        "Yeni karşılaşmada daha fazla kaygı",
    ]
    x, y0 = 72, 590
    for i, s in enumerate(steps):
        row, col = divmod(i, 2)
        xx = x + col * 246
        yy = y0 - row * 74
        box(xx, yy, 205, 42, fill=SOFT_BLUE, stroke=BLUE, radius=12)
        c.setFillColor(NAVY)
        c.setFont("Arial-Bold", 8.2)
        for j, line in enumerate(wrap_lines(s, 180, "Arial-Bold", 8.2)):
            c.drawCentredString(xx + 102, yy + 25 - j * 9.5, line)
        if i < len(steps) - 1:
            if col == 0:
                arrow(xx + 205, yy + 21, xx + 246, yy + 21)
            else:
                arrow(xx + 102, yy, xx + 102, yy - 31)
    y = 266
    text = [
        "Performans kaygısı, cinsel yakınlık sırasında kişinin uyarılmaya değil, bedeninin nasıl çalıştığını kontrol etmeye başlamasıyla güçlenebilir. Kişi daha önce yaşadığı bir zorlanmayı hatırlar ve 'Ya yine olursa?' düşüncesi belirir. Bu düşünce bedenin alarm sistemini harekete geçirir.",
        "Kaygı yükseldiğinde dikkat daralır. Kişi partneriyle temasın doğal akışı yerine, ereksiyonun sürüp sürmediğini izlemeye başlar. Bu iç gözlem uyarılmayı azaltabilir. Bedensel yanıt zorlaştıkça kişi bunu yeni bir kanıt gibi yorumlar ve olumsuz beklenti güçlenir.",
        "Bu döngünün önemli yanı şudur: Kişi çoğu zaman sorunu çözmeye çalışırken farkında olmadan onu sürdüren bir kontrol çabasına girer. Bu nedenle değerlendirme ve destek sürecinde yalnızca belirtiye değil, belirtinin etrafında oluşan düşünce ve davranışlara da bakılır."
    ]
    for p in text:
        y = para(p, M, y, size=9.7, leading=13.4)
        y -= 5
    footer(6)
    c.showPage()


def page7():
    y = title("Doğru bilinen yanlışlar")
    myths = [
        ("Partnerini istemediği anlamına gelir.", "İstek, yakınlık ve ereksiyon aynı şey değildir."),
        ("Genç erkeklerde görülmez.", "Farklı yaşlarda ve farklı nedenlerle görülebilir."),
        ("Tamamen psikolojiktir.", "Damar, sinir, hormon, ilaçlar ve ruhsal etkenler birlikte rol oynayabilir."),
        ("Bir kez olduysa artık hep olacaktır.", "Tek bir deneyim kalıcı bir sorun anlamına gelmez."),
        ("Her yakınlıkta aynı biçimde oluşmalıdır.", "Bedenin yanıtı stres, yorgunluk ve koşullara göre değişebilir."),
        ("İnternetten alınan ürün çözer.", "Kaynağı belirsiz ürünler etkisiz veya zararlı olabilir."),
        ("Konuşmamak daha iyidir.", "Sakin ve suçlamayan konuşma baskıyı azaltabilir."),
        ("Değerlendirme almak utanç vericidir.", "Sağlıkla ilgili yardım istemek olağan bir adımdır."),
        ("Sadece ilişki sorunudur.", "İlişki etkilenebilir ama bedensel etkenler de araştırılabilir."),
        ("Sadece bedensel bir sorundur.", "Kaygı ve beklenti bedensel yanıtı etkileyebilir."),
        ("Partner mutlaka suçludur.", "Suçlamak yerine birlikte anlamaya çalışmak daha yararlıdır."),
        ("Yaş ilerledikçe değerlendirme gereksizdir.", "Yaşa bağlı değişim olabilir; yine de tekrarlayan sorunlar ele alınmalıdır."),
    ]
    box(M, y - 28, 500, 28, fill=NAVY, stroke=NAVY, radius=8)
    c.setFont("Arial-Bold", 9.2)
    c.setFillColor(WHITE)
    c.drawString(M + 16, y - 18, "Mit")
    c.drawString(M + 258, y - 18, "Gerçek")
    yy = y - 48
    for mit, gercek in myths:
        box(M, yy - 33, 500, 38, fill=PALE, stroke=LINE, radius=8)
        para(mit, M + 14, yy - 7, 218, size=7.65, leading=9.2, color=INK)
        arrow(M + 237, yy - 14, M + 252, yy - 14)
        para(gercek, M + 270, yy - 7, 206, size=7.65, leading=9.2, color=MUTED)
        yy -= 43
    footer(7)
    c.showPage()


def page8():
    y = title("Bedensel nedenler neden değerlendirilmelidir?")
    text = [
        "Ereksiyon güçlüğü yaşayan bir kişide bedensel nedenlerin değerlendirilmesi, korkutucu bir olasılık aramak anlamına gelmez. Tam tersine, bütüncül ve güvenli bir yaklaşımın parçasıdır. Çünkü ereksiyon damar, sinir, hormon ve genel sağlık sistemleriyle ilişkili bir süreçtir. Bu sistemlerden birinde ortaya çıkan değişiklikler cinsel işlevi etkileyebilir.",
        "Bazı kişilerde ereksiyon güçlüğü genel damar sağlığıyla ilişkili olabilir. Bu nedenle özellikle yeni başlayan, tekrarlayan veya başka belirtilerle birlikte görülen durumlarda tıbbi değerlendirme önemlidir. Bu ifade, her ereksiyon sorununun kalp hastalığı anlamına geldiği şeklinde yorumlanmamalıdır. Ama bazen bedenin verdiği bu işaret, genel sağlığa daha yakından bakmak için bir fırsat olabilir.",
        "Diyabet, yüksek tansiyon, kolesterol sorunları, sigara kullanımı, yoğun alkol tüketimi, hareketsizlik, uyku bozuklukları ve bazı sinir sistemi hastalıkları ereksiyon sürecini etkileyebilir. Hormonal değişiklikler, bazı ameliyatlar veya farklı tıbbi tedaviler de kişiden kişiye değişen etkiler oluşturabilir.",
        "Bu alanların değerlendirilmesi kişinin kendisini suçlaması için değil, tabloyu daha doğru anlamak içindir. Bazen küçük yaşam düzenlemeleri, bazen var olan bir sağlık durumunun daha iyi izlenmesi, bazen de ruhsal ve bedensel desteğin birlikte planlanması gerekebilir.",
        "Kişinin yaşı, genel sağlık durumu, sorunun başlangıç şekli ve eşlik eden belirtiler birlikte ele alınmalıdır. En sağlıklı yaklaşım, kesin yargılarla hareket etmek yerine durumu sakin biçimde paylaşmak ve uygun değerlendirmeyi almaktır."
    ]
    for p in text:
        y = para(p, M, y, size=10.05, leading=14.0)
        y -= 8
    items = ["Kalp ve damar sağlığı", "Diyabet ve tansiyon", "Uyku ve enerji", "Sigara ve alkol", "Hormonlar", "Genel sağlık"]
    x = M
    for i, item in enumerate(items):
        xx = x + (i % 3) * 168
        yy = 118 - (i // 3) * 48
        box(xx, yy, 150, 34, fill=SOFT_BLUE, stroke=LINE, radius=10)
        c.setFillColor(NAVY)
        c.setFont("Arial-Bold", 8.5)
        c.drawCentredString(xx + 75, yy + 12, item)
    footer(8)
    c.showPage()


def page9():
    y = title("Kullanılan ilaçlar etkili olabilir mi?")
    text = [
        "Bazı ilaçlar cinsel işlev üzerinde etki oluşturabilir. Bu etki herkeste aynı şekilde görülmez; aynı ilacı kullanan iki kişi farklı deneyimler yaşayabilir. Bu nedenle bir yakınmanın ilaçla ilişkili olup olmadığını anlamak için ilacın ne zaman başlandığı, doz değişikliği olup olmadığı, başka belirtilerin eşlik edip etmediği ve kişinin genel sağlık durumu birlikte değerlendirilmelidir.",
        "Bazı tansiyon tedavileri, bazı antidepresanlar, bazı hormonal tedaviler ve sinir sistemi üzerinde etkili bazı ilaçlar cinsel işlev üzerinde değişikliklere yol açabilir. Ancak bu grupların tamamı her kişide sorun oluşturur gibi bir sonuç çıkarılmamalıdır. Kimi zaman ilacın kendisi değil, ilacın kullanıldığı hastalık ya da eşlik eden stres de süreci etkileyebilir.",
        "Cinsel yan etki şüphesi olduğunda en önemli nokta ilacı aniden bırakmamaktır. Kişi kendi kendine ilacı azaltır, keser ya da değiştirirse asıl tedavi edilen durum kötüleşebilir. Bazı ilaçların ani kesilmesi bedensel veya ruhsal açıdan zorlayıcı sonuçlar doğurabilir.",
        "Daha güvenli yol, bu konuyu tedaviyi düzenleyen hekimle açıkça konuşmaktır. Mahrem bir konu olduğu için dile getirmek zor olabilir; fakat hekim açısından bu bilgi tedavinin bir parçasıdır. Bazen tedavi planı yeniden gözden geçirilebilir, bazen farklı bir açıklama bulunabilir, bazen de ek değerlendirme gerekebilir."
    ]
    for p in text:
        y = para(p, M, y, size=10.1, leading=14.2)
        y -= 9
    note_box("İlacınızı kendi başınıza kesmeyin", "Cinsel yan etki şüphesi varsa tedaviyi bırakarak değil, ilacı düzenleyen hekimle konuşarak ilerlemek daha güvenlidir.", M, 90, 500, 82, fill=WARN)
    footer(9)
    c.showPage()


def page10():
    y = title("Partner bu süreçte neler yaşayabilir?")
    text = [
        "Ereksiyon güçlüğü yalnızca bunu yaşayan kişinin iç dünyasında kalmayabilir; çift ilişkisinin duygusal alanını da etkileyebilir. Partner bazen 'Beni istemiyor mu?' diye düşünebilir. Reddedilmiş, dışlanmış ya da artık çekici bulunmuyormuş gibi hissedebilir. Bu duygular çoğu zaman gerçeği tam olarak yansıtmasa da kişi için oldukça gerçek ve incitici olabilir.",
        "Diğer tarafta erkek de kendisini baskı altında, mahcup, suçlu ya da yetersiz hissedebilir. Yakınlık anı giderek doğal bir paylaşım olmaktan çıkıp bir sınav gibi algılanabilir. İki taraf da konuşmaktan kaçındıkça sessizlik büyür. Sessizlik büyüdükçe herkes kendi zihninde açıklamalar üretmeye başlar.",
        "Bu süreçte en zorlayıcı noktalardan biri, yakınlığın yalnızca ereksiyon üzerinden değerlendirilmesidir. Çiftin dokunma, şefkat, güven, duygusal temas ve birlikte zaman geçirme gibi diğer yakınlık biçimleri arka plana düşebilir. Her karşılaşma 'olacak mı, olmayacak mı?' sorusuna sıkıştığında baskı daha da artar.",
        "Ereksiyon güçlüğü çiftin karşı karşıya geldiği bir savaş değil, birlikte anlamaya çalışabileceği bir durumdur. Bu bakış, suçlamayı azaltır. Sorunu bir kişinin karakterine, sevgisine ya da ilişkiye verdiği değere bağlamadan konuşabilmek çoğu zaman ilk rahatlatıcı adımdır.",
        "Partnerin duygularını yok saymak da, tüm sorumluluğu partnere yüklemek de sağlıklı değildir. Her iki tarafın da yaşadığı kırılganlık görülmeye ihtiyaç duyar. Amaç haklı çıkmak değil, birlikte daha güvenli bir konuşma alanı kurmaktır."
    ]
    for p in text:
        y = para(p, M, y, size=10.15, leading=14.25)
        y -= 8
    footer(10)
    c.showPage()


def page11():
    y = title("Partner nasıl destek olabilir?")
    left_x, right_x = M, M + 258
    box(left_x, 112, 238, 575, fill=PALE, stroke=LINE, radius=12)
    box(right_x, 112, 238, 575, fill=PALE, stroke=LINE, radius=12)
    c.setFillColor(NAVY)
    c.setFont("Arial-Bold", 12)
    c.drawString(left_x + 14, 660, "Zorlaştırabilecek yaklaşımlar")
    c.drawString(right_x + 14, 660, "Daha destekleyici alternatifler")
    hard = [
        ("Hesap sormak", "Konuyu sorguya dönüştürmek kaygıyı artırabilir."),
        ("Alay etmek", "Şaka gibi görünse bile utancı derinleştirebilir."),
        ("Karşılaştırmak", "Başka kişilerle kıyaslamak güveni zedeler."),
        ("Her yakınlığı test yapmak", "Yakınlık sınav gibi yaşanmaya başlar."),
        ("Israr etmek", "Baskı, bedenin alarmını artırabilir."),
        ("Sessizce cezalandırmak", "Kırgınlığı büyütür ve konuşmayı zorlaştırır."),
        ("Kendine bağlamak", "Durumu yalnızca reddedilme gibi yorumlamak eksik kalabilir."),
    ]
    soft = [
        ("Sakin zamanda konuşmak", "Konuşma kriz anında değil, daha güvenli bir zamanda yapılabilir."),
        ("Suçlamayan dil", "\"Sen\" dili yerine \"ben böyle hissediyorum\" demek işe yarar."),
        ("Yakınlığı geniş görmek", "Yakınlık yalnızca tek bir bedensel yanıtla sınırlı değildir."),
        ("Değerlendirmeyi desteklemek", "Yardım arayışını ortak bir adım gibi görmek rahatlatır."),
        ("Mahremiyete saygı", "Kişinin utanma ve çekinme duygusu önemsenmelidir."),
        ("Baskıyı azaltmak", "Hemen çözme zorunluluğu yerine güvenli alan kurulabilir."),
        ("Çözümü ortaklaştırmak", "Sorunu kişilerin değil ilişkinin birlikte ele aldığı bir konu yapmak."),
    ]
    yy = 632
    for head, text in hard:
        c.setFillColor(NAVY)
        c.setFont("Arial-Bold", 8.9)
        c.drawString(left_x + 14, yy, head)
        yy = para(text, left_x + 14, yy - 13, 205, size=7.8, leading=9.7)
        yy -= 9
    yy = 632
    for head, text in soft:
        c.setFillColor(NAVY)
        c.setFont("Arial-Bold", 8.9)
        c.drawString(right_x + 14, yy, head)
        yy = para(text, right_x + 14, yy - 13, 205, size=7.8, leading=9.7)
        yy -= 9
    footer(11)
    c.showPage()


def page12():
    y = title("Konuşmayı nasıl başlatabiliriz?")
    fields = [
        "Bu konuyu konuşurken en çok zorlandığım nokta...",
        "Sana yanlış anlatmış olabileceğim şey...",
        "Bu süreçte senden beklediğim destek...",
        "Sana vermek istediğim destek...",
        "Yakınlık konusunda üzerimde hissettiğim baskı...",
        "Birlikte atabileceğimiz küçük adım...",
    ]
    yy = y
    for f in fields:
        box(M, yy - 50, 500, 42, fill=WHITE, stroke=LINE, radius=8)
        c.setFont("Arial-Bold", 8.8)
        c.setFillColor(NAVY)
        c.drawString(M + 14, yy - 22, f)
        c.setStrokeColor(colors.HexColor("#d9e7ef"))
        c.line(M + 14, yy - 36, W - M - 14, yy - 36)
        yy -= 57
    note_box("Suçlamayan cümle örnekleri", "\"Bu durumu seni istememekle ilgili görmeni istemiyorum.\"  \"Bunu konuşmak benim için zor ama birlikte anlamaya çalışmak istiyorum.\"  \"Seni suçlamıyorum; ikimizin de rahat hissedebileceği bir yol bulmak istiyorum.\"  \"Hemen çözmek zorunda değiliz, önce konuşabiliriz.\"", M, 92, 500, 92)
    footer(12)
    c.showPage()


def page13():
    y = title("Değerlendirme sürecinde neler konuşulabilir?")
    text = [
        "Bir sağlık uzmanıyla yapılan değerlendirme, yalnızca belirtinin var olup olmadığını sormaktan ibaret değildir. Sorunun ne zaman başladığı, ani mi yoksa yavaş mı geliştiği, her durumda mı yoksa bazı durumlarda mı yaşandığı ve kişinin bunu nasıl yorumladığı birlikte ele alınır.",
        "Sabah veya gece ereksiyonlarının durumu, cinsel istek, yakınlık sırasında kaygı düzeyi, kullanılan ilaçlar, genel sağlık durumu ve eşlik eden bedensel belirtiler değerlendirmenin parçası olabilir. Kalp ve damar riskleri, diyabet, hormonal belirtiler, uyku düzeni, alkol veya sigara kullanımı gibi alanlar da uygun şekilde sorulabilir.",
        "Ruhsal durum da önemlidir. Depresif belirtiler, kaygı, yoğun stres, performans baskısı, ilişki içindeki gerilimler ve kişinin geçmiş deneyimleri cinsel işlevi etkileyebilir. Bu alanların sorulması kişinin suçlanması için değil, sürecin daha doğru anlaşılması içindir.",
        "Gerekli görülürse fizik muayene veya bazı tetkikler planlanabilir. Ancak hangi değerlendirmenin gerekli olduğu kişiye göre değişir. Bu nedenle 'herkes mutlaka şu testi yaptırmalıdır' gibi kesin öneriler doğru değildir. Uygun yol, kişinin öyküsüne göre şekillenen bir değerlendirmedir.",
        "Mahrem konuları anlatmak kolay olmayabilir. Yine de bu bilgiler hekim için klinik değerlendirmenin olağan bir parçasıdır. Kişi ne kadar açık ve sakin biçimde paylaşabilirse, gereksiz tahminler o kadar azalır."
    ]
    for p in text:
        y = para(p, M, y, size=10.05, leading=14.1)
        y -= 8
    footer(13)
    c.showPage()


def page14():
    y = title("Tedavi seçenekleri genel olarak nelerdir?")
    text = [
        "Ereksiyon güçlüğünde tedavi seçenekleri kişiye göre değişir. Her seçenek herkes için uygun değildir. Özellikle kalp-damar hastalığı bulunan, düzenli ilaç kullanan veya başka sağlık sorunları olan kişilerde tedavinin hekim değerlendirmesiyle planlanması gerekir.",
        "Bazı durumlarda altta yatan sağlık durumunun ele alınması önceliklidir. Diyabet, tansiyon, uyku bozuklukları, sigara kullanımı, yoğun alkol tüketimi, hareketsizlik ya da genel sağlıkla ilgili başka alanlar süreci etkileyebilir. Bu alanlarda yapılacak düzenlemeler yalnızca cinsel işlev için değil, genel sağlık için de önemlidir.",
        "Psikolojik destek veya cinsel terapi, özellikle performans kaygısı, kaçınma, ilişki içinde konuşamama, suçluluk veya kendini izleme döngüsü belirgin olduğunda yararlı olabilir. Bazı çiftlerde birlikte yürütülen görüşmeler, suçlama yerine ortak anlayış geliştirmeye yardım eder.",
        "Hekim tarafından uygun görülen ilaç tedavileri bazı kişilerde gündeme gelebilir. Bazı durumlarda tıbbi cihazlar veya daha ileri seçenekler değerlendirilebilir. Ancak bunlar kişisel sağlık durumuna göre planlanmalıdır. İsim, doz ya da kullanım önerisi gibi bilgiler bu rehberin amacı değildir.",
        "İnternetten satılan, kaynağı belirsiz ürünlere karşı dikkatli olmak gerekir. İçeriği bilinmeyen ürünler etkisiz olabileceği gibi, özellikle kalp-damar hastalığı olan veya düzenli ilaç kullanan kişilerde risk oluşturabilir. Güvenli yaklaşım, çözüm arayışını sağlık değerlendirmesiyle birlikte yürütmektir."
    ]
    for p in text:
        y = para(p, M, y, size=10.0, leading=14.0)
        y -= 7
    note_box("Önemli", "Bu rehber belirli bir tedavi önermez. Kişiye uygun seçenekler ancak sağlık değerlendirmesiyle belirlenebilir.", M, 90, 500, 70, fill=WARN)
    footer(14)
    c.showPage()


def page15():
    y = title("Ne zaman değerlendirme almak önemlidir?")
    items = [
        "Sorun tekrar ediyorsa veya birkaç farklı yakınlıkta sürüyorsa.",
        "Kişide belirgin kaygı, kaçınma veya özgüven kırılması oluşturuyorsa.",
        "İlişkiyi olumsuz etkiliyor ve konuşmayı zorlaştırıyorsa.",
        "Cinsel istekte belirgin değişiklik eşlik ediyorsa.",
        "Ağrı, anatomik değişiklik veya alışılmışın dışında bir belirti fark ediliyorsa.",
        "Diyabet, hipertansiyon veya kalp-damar hastalığı bulunuyorsa.",
        "Yeni bir ilaç başladıktan sonra ortaya çıktıysa.",
        "Genel sağlıkta başka değişiklikler de varsa.",
        "Kişi internetten ürün kullanmayı düşünüyorsa.",
    ]
    y = bullet(items, M, y, width=500, size=10.0, leading=13.7)
    y -= 6
    para("Değerlendirme almak, kişinin kendisine olumsuz bir etiket koyması anlamına gelmez. Aksine, gereksiz tahminler yerine daha güvenli bilgiyle ilerlemeyi sağlar. Bazen yalnızca durumun ne zaman ve hangi koşullarda ortaya çıktığını konuşmak bile yükü azaltabilir.", M, y, size=10.0, leading=14.0)
    note_box("Acil durum", "Cinsel etkinlik sırasında göğüs ağrısı, belirgin nefes darlığı, bayılma hissi veya ciddi fiziksel rahatsızlık ortaya çıkarsa etkinliğe devam edilmemeli ve uygun tıbbi yardım alınmalıdır.", M, 92, 500, 82, fill=WARN)
    footer(15)
    c.showPage()


def page16():
    y = title("Sık Sorulan Sorular", size=24)
    faqs = [
        ("Her yaşta görülebilir mi?", "Evet. Nedenleri yaşa ve sağlık durumuna göre değişebilir."),
        ("Bir kez yaşanması bozukluk mudur?", "Hayır. Tek bir deneyim kalıcı sorun anlamına gelmez."),
        ("Sabah ereksiyonu ne anlatır?", "Değerlendirmede yardımcı olabilir; tek başına kesin sonuç vermez."),
        ("Partnerimi istememe rağmen olabilir mi?", "Evet. İstek ve bedensel yanıt aynı şey değildir."),
        ("Performans kaygısı etkiler mi?", "Evet. Kendini izleme ve kaygı uyarılmayı zorlaştırabilir."),
        ("Stres ve uykusuzluk etkili mi?", "Bazı kişilerde belirgin şekilde etkileyebilir."),
        ("Tek başına sorun yokken partnerle olur mu?", "Evet. Durumsal kaygı ve ilişki koşulları rol oynayabilir."),
        ("Kalp hastalığı anlamına gelir mi?", "Mutlaka değil; ancak bazı kişilerde damar sağlığıyla ilişkili olabilir."),
        ("Kullanılan ilaçlar etkileyebilir mi?", "Bazı ilaçlar etkileyebilir; karar hekimle verilmelidir."),
        ("İlacı bırakınca düzelir mi?", "Kendi kendine bırakmak doğru değildir; hekimle konuşulmalıdır."),
        ("İnternet ürünleri güvenli mi?", "Kaynağı belirsiz ürünler riskli olabilir."),
        ("İlaç şart mıdır?", "Her kişi için aynı yol gerekmez; seçenekler değerlendirmeye göre belirlenir."),
        ("Psikolojik destek ne zaman yararlı?", "Kaygı, kaçınma, ilişki gerilimi veya suçluluk belirginse yararlı olabilir."),
        ("Partner görüşmeye katılmalı mı?", "Her zaman şart değildir; bazı çiftlerde destekleyici olabilir."),
        ("Yaşla değişiklik normal mi?", "Bazı değişiklikler olabilir; tekrarlayan sorunlar yine de ele alınmalıdır."),
        ("Beklemek doğru mu?", "Kısa süreli durumlar geçebilir; sürüyorsa değerlendirme almak daha güvenlidir."),
    ]
    col_w = 238
    for idx, (q, a) in enumerate(faqs):
        col = idx % 2
        row = idx // 2
        xx = M + col * 260
        yy = y - row * 67
        box(xx, yy - 48, col_w, 54, fill=PALE, stroke=LINE, radius=8)
        c.setFillColor(NAVY)
        c.setFont("Arial-Bold", 8.4)
        c.drawString(xx + 10, yy - 13, q)
        para(a, xx + 10, yy - 27, col_w - 20, size=7.4, leading=8.7, color=MUTED)
    footer(16)
    c.showPage()


def page17():
    y = title("Kendime ve ilişkime küçük hatırlatmalar")
    box(82, 150, 430, 470, fill=WHITE, stroke=BLUE, radius=18, lw=1.4)
    c.setFillColor(SOFT_BLUE)
    c.circle(297, 585, 38, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.setFont("Georgia-Bold", 22)
    c.drawCentredString(W / 2, 546, "Hatırlatma Kartı")
    c.setStrokeColor(LINE)
    c.setDash(3, 3)
    c.rect(96, 164, 402, 442, fill=0, stroke=1)
    c.setDash()
    reminders = [
        "Bu durum erkekliğimi veya değerimi belirlemez.",
        "Tek bir deneyim geleceğin kanıtı değildir.",
        "Yakınlık yalnızca ereksiyondan oluşmaz.",
        "Kendimi sürekli kontrol etmek kaygımı artırabilir.",
        "Partnerimle aynı tarafta olabilirim.",
        "Yardım istemek yetersizlik değildir.",
        "Sorunun nedenini tahmin etmek yerine değerlendirme alabilirim.",
    ]
    yy = 490
    for r in reminders:
        c.setFillColor(BLUE)
        c.circle(122, yy + 4, 3, fill=1, stroke=0)
        yy = para(r, 140, yy, 330, size=10.8, leading=16.5, color=INK)
        yy -= 13
    c.setFont("Arial-Italic", 8.7)
    c.setFillColor(MUTED)
    c.drawCentredString(W / 2, 184, "Bu kartı yalnızca kendinize sakin bir hatırlatma olarak kullanabilirsiniz.")
    footer(17)
    c.showPage()


def page18():
    y = title("Son söz")
    text = [
        "Ereksiyon sorunu, kişinin karakterini, değerini ya da ilişkisindeki samimiyeti tanımlayan bir ölçü değildir. İnsan bedeni her zaman aynı biçimde çalışmaz. Yorgunluk, stres, hastalık, ilaçlar, kaygı, ilişki içindeki sessizlikler ve kişinin kendini izlemeye başlaması cinsel yanıtı etkileyebilir. Bu nedenle yaşanan güçlüğü tek bir nedene bağlamak çoğu zaman hem eksik hem de yorucu olur.",
        "Bu konuda en zorlayıcı duygulardan biri utançtır. Utanç, kişiyi konuşmaktan alıkoyabilir. Konuşma geciktikçe kişi kendi zihninde daha ağır açıklamalar üretir. Partner de aynı sessizlik içinde kendisini reddedilmiş ya da yetersiz hissedebilir. Oysa çoğu zaman iki taraf da incinmiştir ve ikisi de ne yapacağını bilemediği için susmaktadır.",
        "Yakınlık, yalnızca bir bedensel performans meselesi değildir. Güven, temas, konuşabilmek, kırılganlığı paylaşabilmek ve acele etmeden birbirini anlamaya çalışmak da yakınlığın parçasıdır. Ereksiyon güçlüğü yaşandığında çiftin birbirine karşı konumlanması yerine aynı tarafta kalabilmesi, sürecin daha az yıpratıcı geçmesine yardımcı olabilir.",
        "Fiziksel ve psikolojik değerlendirme birbirinin alternatifi değildir. Bedenle ilgili etkenler araştırılırken duygusal yükler de konuşulabilir. Kaygı ele alınırken genel sağlık da gözden geçirilebilir. Bu bütüncül yaklaşım, gereksiz suçlamaları azaltır ve daha gerçekçi bir yol haritası oluşturur.",
        "Çoğu durumda farklı değerlendirme ve destek seçenekleri vardır. Ancak hangi seçeneğin kime uygun olduğu kişisel öyküye, sağlık durumuna ve ihtiyaçlara göre belirlenmelidir. Bu nedenle internetten alınan hızlı çözümler ya da kulaktan dolma öneriler yerine güvenilir bir değerlendirme daha sağlıklı bir başlangıçtır.",
        "Yardım istemek zayıflık değildir. Kişinin kendi sağlığını, ilişkisini ve yaşam kalitesini ciddiye almasıdır. Bazen en önemli adım, sorunu tek başına taşımayı bırakıp sakin bir dille paylaşabilmektir. Bu paylaşım hem kişiye hem de ilişkiye nefes alacak bir alan açabilir.",
        "Bu rehber genel bilgilendirme amacıyla hazırlanmıştır. Kişinin kendi kendine tanı koyması veya tedavi seçmesi için kullanılmamalıdır. Süreklilik gösteren ereksiyon güçlüklerinde hekim değerlendirmesi alınması önemlidir."
    ]
    for p in text:
        y = para(p, M, y, size=9.8, leading=13.7)
        y -= 6
    footer(18)
    c.showPage()


for fn in [
    page1, page2, page3, page4, page5, page6, page7, page8, page9,
    page10, page11, page12, page13, page14, page15, page16, page17, page18,
]:
    fn()

c.save()
print(OUT)
