from pathlib import Path
import math

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


OUT = Path("output/pdf/ergenlikten-eriskinlige-zorlu-gecis.pdf")
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
c.setTitle("Ergenlikten Erişkinliğe Zorlu Geçiş")
c.setAuthor("Dr. Özgür Özbebit")
c.setSubject("Psikoeğitim Serisi No: 12 - Ebeveynler için sınav süreci rehberi")
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


def line_field(x, y, w, label, h=34):
    box(x, y - h, w, h, fill=WHITE, stroke=LINE, radius=8)
    c.setFont("Arial-Bold", 8.2)
    c.setFillColor(NAVY)
    c.drawString(x + 12, y - 16, label)
    c.setStrokeColor(colors.HexColor("#d9e7ef"))
    c.line(x + 12, y - h + 11, x + w - 12, y - h + 11)


def small_card(x, y, w, h, head, body, fill=PALE):
    box(x, y, w, h, fill=fill, stroke=LINE, radius=10)
    c.setFont("Arial-Bold", 9.3)
    c.setFillColor(NAVY)
    c.drawString(x + 12, y + h - 20, head)
    para(body, x + 12, y + h - 39, w - 24, size=7.6, leading=9.4, color=MUTED)


def large_card(x, y, w, h, head, body, fill=PALE):
    box(x, y, w, h, fill=fill, stroke=LINE, radius=10)
    c.setFont("Arial-Bold", 10.8)
    c.setFillColor(NAVY)
    c.drawString(x + 14, y + h - 24, head)
    para(body, x + 14, y + h - 48, w - 28, size=8.45, leading=10.5, color=MUTED)


def page1():
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#0f2a45"))
    c.circle(W * 0.84, H * 0.17, 178, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#244e68"))
    c.circle(W * 0.14, H * 0.88, 118, fill=1, stroke=0)

    # Transitional bridge motif for adolescence to adulthood.
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.2)
    for i in range(4):
        c.roundRect(160 + i * 54, 356 - i * 10, 110, 56, 24, fill=0, stroke=1)
    c.setStrokeColor(colors.HexColor("#dbeaf4"))
    c.bezier(142, 372, 220, 458, 360, 298, 455, 392)
    c.line(192, 324, 408, 324)
    c.line(230, 300, 374, 300)

    draw_logo(W / 2 - 54, H - 182, 108)
    c.setFillColor(BLUE)
    c.setFont("Arial-Bold", 12)
    c.drawCentredString(W / 2, H - 226, "Psikoeğitim Serisi No: 12")
    c.setFillColor(WHITE)
    c.setFont("Georgia-Bold", 28)
    c.drawCentredString(W / 2, H - 282, "Ergenlikten Erişkinliğe")
    c.drawCentredString(W / 2, H - 318, "Zorlu Geçiş")
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(W / 2 - 92, H - 344, W / 2 + 92, H - 344)
    c.setFont("Arial", 11.2)
    c.setFillColor(colors.HexColor("#dbeaf4"))
    c.drawCentredString(W / 2, H - 382, "Sınav sürecinde gençleri ve aileleri zorlayan akademik,")
    c.drawCentredString(W / 2, H - 400, "duygusal ve yaşamsal sorunlara yönelik ebeveyn rehberi")
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
        "Sınava hazırlanan bir ergenin yaşadığı güçlük çoğu zaman yalnızca ders programıyla açıklanamaz. Aynı dönemde bedensel değişimler, bağımsızlaşma isteği, gelecek kaygısı, arkadaş ilişkileri, aile beklentileri, uyku düzensizliği ve “kim olacağım?” sorusu da gündemdedir.",
        "Bu yükler üst üste geldiğinde genç, ders çalışmayı istemediği için değil; nereden başlayacağını, duygularını nasıl yöneteceğini veya ailesiyle nasıl konuşacağını bilemediği için de geri çekilebilir.",
        "Anne babalar ise zamanın hızla geçtiğini, sınavın yaklaştığını ve çocuklarının potansiyelini kullanamadığını gördüklerinde kaygılanabilir. Kaygı arttıkça hatırlatma, takip, eleştiri ve kontrol de artabilir. Böylece iyi niyetli destek, fark edilmeden çatışmayı büyüten bir baskıya dönüşebilir.",
        "Bu rehber; “Nasıl daha çok ders çalıştırırız?” sorusundan önce “Bu gencin işlevini ne bozuyor ve evde hangi koşullar toparlanmayı kolaylaştırır?” sorusunu ele alır. Amaç sınavı önemsizleştirmek değil, sınav sürecini ergenin gelişiminden ve ruhsal durumundan koparmadan değerlendirmektir.",
        "Rehberdeki öneriler her aileye aynı biçimde uygulanmak zorunda değildir. Belirgin işlev kaybı, yoğun ruhsal belirtiler veya güvenlik riski varsa yalnızca ev düzeniyle yetinilmemeli; profesyonel değerlendirme düşünülmelidir."
    ]
    for p in text:
        y = para(p, M, y, size=9.9, leading=13.8)
        y -= 8
    note_box("Temel yaklaşım", "Çocuğu kusursuz biçimde yönetmek değil; uyku, iletişim, sorumluluk ve duygusal güvenliği birlikte düzenleyerek sorunların büyümesini önlemektir.", M, 88, 500, 76)
    footer(2)
    c.showPage()


def page3():
    y = title("Aynı gençte iki ihtiyaç")
    para("Ergenlik, çocuğun erişkinliğe hazırlanırken ailesinden psikolojik olarak ayrışmaya başladığı dönemdir. Kendi kararını vermek, özel alanını korumak, fikirlerinin ciddiye alınmasını istemek ve otoriteyi sorgulamak bu sürecin parçaları olabilir.", M, y, size=9.45, leading=13.0)
    para("Buna karşılık planlama, dürtüleri yönetme, uzun vadeli sonucu hesaba katma ve yoğun duygular sırasında sağlıklı karar verme becerileri gelişmeye devam eder.", M, y - 56, size=9.45, leading=13.0)
    cards = [
        ("Özerklik", "“Ben karar vereyim” ihtiyacı güçlenir. Her ayrıntının belirlenmesi direnç doğurabilir."),
        ("Bağlılık", "Uzaklaşıyor gibi görünse de sakin ve ulaşılabilir bir yetişkine hâlâ ihtiyaç duyar."),
        ("Yoğun duygular", "Sevinç, öfke, utanç ve hayal kırıklığı daha hızlı yükselip davranışa dönüşebilir."),
        ("Gelişen sorumluluk", "Sorumluluk küçük kararlar, doğal sonuçlar ve tekrarlarla öğrenilir."),
        ("Akran etkisi", "Arkadaş görüşü daha belirleyici görünebilir; bu aile bağının bittiği anlamına gelmez."),
        ("Kimlik arayışı", "Meslek, görünüş, değerler, ilişkiler ve gelecek hakkında değişken fikirler görülebilir."),
    ]
    for i, (h, b) in enumerate(cards):
        x = M + (i % 2) * 258
        yy = 470 - (i // 2) * 118
        small_card(x, yy, 238, 92, h, b)
    note_box("Denge", "Ne her şeyi serbest bırakmak ne de her ayrıntıyı kontrol etmek. Az sayıda, açık ve tutarlı sınır; sınırların içinde gerçek seçim alanı sunmak.", M, 92, 500, 70, fill=WARN)
    footer(3)
    c.showPage()


def page4():
    y = title("Ders çalışmama neyin işareti olabilir?", size=23)
    para("Ders çalışmama dışarıdan tek bir davranış gibi görünür; ancak altında çok farklı nedenler olabilir. Aynı davranışa aynı tepkiyi vermeden önce başlamayı, sürdürmeyi veya yardım istemeyi neyin zorlaştırdığını anlamak gerekir.", M, y, size=9.4, leading=12.8)
    rows = [
        ("Masaya hiç oturmuyor", "Görev gözünde çok büyük olabilir; nereden başlayacağını bilemiyor olabilir."),
        ("Son ana bırakıyor", "Kaygı, başarısızlık korkusu veya mükemmel başlama beklentisi ertelemeyi besleyebilir."),
        ("Saatlerce oturuyor ama ilerlemiyor", "Dikkat güçlüğü, yöntem sorunu, uykusuzluk veya sürekli kontrol etme davranışı olabilir."),
        ("Denemeden kaçıyor", "Düşük sonuçla yüzleşmekten, ailesinin tepkisinden veya kendi hayal kırıklığından korkabilir."),
        ("“Umurumda değil” diyor", "Umursamamak, utanç ve yetersizlik duygusuna karşı koruyucu bir kabuk olabilir."),
        ("Sürekli telefonla ilgileniyor", "Telefon kısa süreli rahatlama, kaçış, sosyal bağ veya duyguyu uyuşturma aracı olabilir."),
        ("Sık sık ders değiştiriyor", "Öncelik belirleme, planlama, dikkat sürdürme veya eksikle karşılaşma güçlüğü olabilir."),
        ("Tamamen bırakmış görünüyor", "Tükenme, umutsuzluk, depresif belirtiler, yoğun kaygı ya da öğrenme güçlüğü değerlendirilmelidir."),
    ]
    box(M, 112, 500, 424, fill=PALE, stroke=LINE, radius=12)
    c.setFont("Arial-Bold", 9.6)
    c.setFillColor(NAVY)
    c.drawString(M + 16, 506, "Görünen davranış")
    c.drawString(M + 214, 506, "Altta bulunabilecek güçlük")
    yy = 476
    for a, b in rows:
        para(a, M + 16, yy, 168, size=8.15, leading=9.8, color=INK)
        c.setFont("Arial-Bold", 14)
        c.setFillColor(NAVY)
        c.drawCentredString(M + 196, yy - 1, "->")
        para(b, M + 214, yy, 268, size=8.05, leading=9.7, color=MUTED)
        yy -= 48
    note_box("İlk soru", "“Neden yapmıyor?” yerine “Başlamayı veya sürdürmeyi ne zorlaştırıyor?” sorusu daha fazla bilgi verir.", M, 50, 500, 48)
    footer(4)
    c.showPage()


def page5():
    y = title("Çatışma ve erteleme döngüsü")
    steps = ["Sınav ve beklenti hatırlatılır", "Genç eleştirildiğini hisseder", "Kaçınır veya tartışır", "Ebeveyn kontrolü artırır", "Utanç ve öfke büyür", "Ders daha da zorlaşır"]
    x0, y0 = 62, 572
    for i, s in enumerate(steps):
        yy = y0 - i * 58
        box(x0, yy, 278, 42, fill=SOFT, stroke=BLUE, radius=11)
        c.setFont("Arial-Bold", 9.2)
        c.setFillColor(NAVY)
        for j, line in enumerate(wrap_lines(s, 246, "Arial-Bold", 9.2)):
            c.drawCentredString(x0 + 139, yy + 25 - j * 10, line)
        if i < len(steps) - 1:
            arrow(x0 + 139, yy, x0 + 139, yy - 15)
    text = [
        "Bu döngüde anne baba “takip etmezsem tamamen bırakacak” diye düşünür. Genç ise “ne yaparsam yapayım yetmeyecek” veya “hayatım benim değil” hissine kapılabilir.",
        "Tartışma bittikten sonra iki taraf da kısa süreli rahatlar; fakat ders, ilişki ve güven sorunu çözülmeden kalır.",
        "Döngüyü kırmak genellikle daha güçlü bir baskı değil, daha sakin bir ilişki ve daha küçük bir başlangıç gerektirir."
    ]
    yy = y
    for p in text:
        yy = para(p, 362, yy, 174, size=8.85, leading=12.0)
        yy -= 6
    suggestions = ["Döngüyü adlandırın", "Konuyu küçültün", "Zaman seçin", "Kontrolü sınırlayın", "Sonuç yerine süreç sorun", "Doğal sonucu koruyun"]
    bullet(suggestions, 362, 310, width=170, size=8.8, leading=12.0)
    note_box("Döngüyü kırmak", "Bütün yılı değil, bugün atılabilecek tek adımı konuşmak çoğu zaman daha güvenli bir başlangıçtır.", 362, 92, 174, 76, fill=WARN)
    footer(5)
    c.showPage()


def page6():
    y = title("Aile içi çatışmayı azaltan dil")
    para("Destekleyici iletişim, her davranışı onaylamak değildir. Sınır koyarken kişiliğe saldırmamak, niyet okumamak ve görüşmeyi tek bir konu üzerinde tutmak çatışmanın büyümesini önleyebilir.", M, y, size=9.2, leading=12.6)
    rows = [
        ("Sen zaten hiçbir şeyi ciddiye almıyorsun.", "Son üç gündür plana başlayamadığını görüyorum. Sence en büyük engel ne?"),
        ("Telefon yüzünden hayatın bitecek.", "Telefon uykunu ve başlangıcını etkiliyor. Akşam için uygulanabilir bir sınır belirleyelim."),
        ("Biz senin yaşındayken...", "Senin koşullarını anlamak istiyorum; benim deneyimim birebir aynı olmayabilir."),
        ("Bu kadar çalışmayla hiçbir yer olmaz.", "Mevcut plan işlemiyor gibi. Daha küçük ve gerçekçi bir plan deneyelim."),
        ("Bizi rezil etme.", "Sonuçtan bağımsız olarak seninle ilişkimizi korumak istiyoruz."),
        ("Kaygılanacak ne var?", "Kaygının seni zorladığını görüyorum. Şu an dinlememi mi, çözüm aramamı mı istersin?"),
    ]
    box(M, 116, 500, 420, fill=PALE, stroke=LINE, radius=12)
    c.setFont("Arial-Bold", 9.5)
    c.setFillColor(NAVY)
    c.drawString(M + 16, 508, "Çatışmayı büyütebilen ifade")
    c.drawString(M + 260, 508, "Daha işlevsel alternatif")
    yy = 476
    for a, b in rows:
        para(a, M + 16, yy, 190, size=8.15, leading=9.8, color=INK)
        c.setFont("Arial-Bold", 14)
        c.setFillColor(NAVY)
        c.drawCentredString(M + 238, yy - 2, "->")
        para(b, M + 260, yy, 220, size=7.9, leading=9.5, color=MUTED)
        yy -= 62
    note_box("Üç basamaklı cümle", "Gözlem: “Son iki gecedir çok geç yatıyorsun.” + Etki: “Sabah kalkmak zorlaşıyor.” + İş birliği: “Bu gece için neyi değiştirebiliriz?”", M, 50, 500, 52)
    footer(6)
    c.showPage()


def page7():
    y = title("Uyku: görünmeyen ana düzenleyici")
    text = [
        "Uyku bozulduğunda dikkat, öğrenme, dürtü kontrolü, duygu düzenleme ve sabah başlama kapasitesi de zorlanabilir. Ergenlikte biyolojik saat daha geçe kayabildiği için gencin erken saatte uykuya dalması gerçekten zor olabilir; bu durum her zaman isteksizlik değildir.",
        "Amaç uykuyu kavga başlığına dönüştürmek değil, ritmi destekleyen küçük ve uygulanabilir düzenlemeler yapmaktır."
    ]
    for p in text:
        y = para(p, M, y, size=9.5, leading=13.0)
        y -= 6
    cards = [
        ("Sabit kalkış saati", "Hafta içi ve hafta sonu arasında çok büyük fark bırakmamak ritmi destekleyebilir."),
        ("Kademeli değişim", "Uyku saatini bir gecede iki saat erkene çekmek yerine küçük adımlar deneyin."),
        ("Yatağı ayırmak", "Mümkünse ders, oyun ve uzun telefon kullanımını yataktan ayırın."),
        ("Akşam uyarıcıları", "Geç saat kafein, enerji içeceği ve sürekli bildirim uykuyu geciktirebilir."),
        ("Sabah ışığı", "Sabah gün ışığına çıkmak ve kısa hareket, uyanıklık ritmini destekleyebilir."),
        ("Tartışmayı azaltmak", "Her gece tartışmak yerine önceden belirlenmiş bir rutin kullanın."),
    ]
    for i, (h, b) in enumerate(cards):
        x = M + (i % 2) * 258
        yy = 438 - (i // 2) * 104
        small_card(x, yy, 238, 78, h, b)
    note_box("Değerlendirme gerektiren durumlar", "İki haftadan uzun süren belirgin uykusuzluk, gündüz sürekli uyuklama, çok yüksek sesle horlama, nefeste duraklama veya uyku düzeninin tamamen tersine dönmesi değerlendirme gerektirebilir.", M, 92, 500, 70, fill=WARN)
    footer(7)
    c.showPage()


def page8():
    y = title("Beden düzeni bozulunca ders de zorlaşır", size=23)
    para("Yeme, içme, hareket ve enerji düzeyi sınav performansından ayrı değildir. Amaç “mükemmel beslenme” oluşturmak değil, beynin ve bedenin gün içinde öngörülebilir enerjiye ulaşmasını sağlamaktır.", M, y, size=9.3, leading=12.8)
    items = [
        ("Düzenli öğün fırsatı", "Evde ulaşılabilir ve pratik seçenekler bulundurun; açlığı disiplin sorunu gibi yorumlamayın."),
        ("Suya erişim", "Çalışma alanında su bulunması basit ama yararlı bir çevre düzenlemesidir."),
        ("Kafeini çözüm yapmamak", "Uykusuzluğu kafeinle kapatmak gece uykusunu daha da bozabilir."),
        ("Beden yorumlarından kaçınmak", "Kilo, görünüş ve porsiyon üzerine alay veya baskı yeme davranışını zorlayabilir."),
        ("Kısa hareket araları", "Kısa yürüyüş, esneme veya sevilen bir fiziksel etkinlik sıkışmayı azaltabilir."),
        ("Sofrayı sorguya çevirmemek", "Yemek zamanı puan, eksik konu ve telefon tartışmasının tek alanı olmasın."),
    ]
    for i, (h, b) in enumerate(items):
        x = M + (i % 2) * 258
        yy = 500 - (i // 2) * 106
        large_card(x, yy, 238, 84, h, b)
    c.setFont("Arial-Bold", 11)
    c.setFillColor(NAVY)
    c.drawString(M, 188, "Bir haftalık basit takip")
    headers = ["Gün", "Uyku", "Öğün", "Hareket", "Enerji 0-10"]
    col_w = [62, 104, 104, 116, 114]
    x0, y0 = M, 154
    box(x0, y0, 500, 24, fill=NAVY, stroke=NAVY, radius=7)
    c.setFont("Arial-Bold", 7.8)
    c.setFillColor(WHITE)
    xx = x0
    for h, cw in zip(headers, col_w):
        c.drawString(xx + 5, y0 + 9, h)
        xx += cw
    for r in range(3):
        yy = y0 - 30 - r * 31
        box(x0, yy, 500, 27, fill=WHITE, stroke=LINE, radius=4)
        xx = x0
        for cw in col_w[:-1]:
            xx += cw
            c.line(xx, yy, xx, yy + 27)
    footer(8)
    c.showPage()


def page9():
    y = title("Telefon, oyun ve sosyal medya")
    text = [
        "Ekran; eğlence, arkadaşlarla bağlantı, merak, başarı hissi ve yoğun duygulardan uzaklaşma sağlayabilir. Bu nedenle yalnızca telefonu elinden almak, altta yatan kaygıyı veya kaçınmayı çözmeyebilir.",
        "Öte yandan ekran kullanımı uykuya, derse, aile ilişkisine ve temel sorumluluklara zarar veriyorsa net sınırlar gerekir. Sınırların sakin zamanda, kısa ve uygulanabilir biçimde konuşulması daha koruyucudur."
    ]
    for p in text:
        y = para(p, M, y, size=9.7, leading=13.4)
        y -= 7
    cards = [
        ("Süre değil işlev", "Uyku, ders, yemek ve ilişki etkileniyor mu?"),
        ("Ortak kurallar", "Kurallar mümkün olduğunca aile için de geçerli olsun."),
        ("Önceden belirleme", "Telefon tartışmasını kullanım anında değil, sakin zamanda yapın."),
        ("Teknolojik destek", "Bildirim kapatma ve telefonu odanın dışında şarj etme gibi araçlardan yararlanın."),
        ("Tam yasak yerine basamak", "Sınırsız kullanım ile tamamen yasak arasında uygulanabilir orta yol kurun."),
        ("İhlalin sonucu", "Ceza öfkeyle değil, önceden bilinen ve süreli bir sonuçla uygulanmalı."),
    ]
    for i, (h, b) in enumerate(cards):
        x = M + (i % 2) * 258
        yy = 476 - (i // 2) * 100
        large_card(x, yy, 238, 78, h, b)
    note_box("Örnek aile anlaşması", "Yemek sırasında telefon yok. Çalışma bloğunda bildirimler kapalı. Gece belirlenen saatte telefon ortak alanda şarj edilir. Acil iletişim ve okul işleri için istisnalar önceden konuşulur.", M, 112, 500, 76)
    line_field(M, 76, 500, "Bu hafta deneyeceğimiz tek ekran değişikliği:", h=30)
    footer(9)
    c.showPage()


def page10():
    y = title("Duygusal dalgalanma: ne kadarı beklenebilir?", size=22)
    para("Ergenlikte kısa süreli öfke, hassasiyet, yalnız kalma isteği, fikirlerin hızla değişmesi ve aileden uzaklaşıp arkadaşlara yönelme görülebilir. Ancak “ergenliktir geçer” düşüncesi, uzun süren ve işlevi bozan belirtilerin gözden kaçmasına yol açmamalıdır.", M, y, size=9.25, leading=12.6)
    left = ["Tartışma sonrası kısa süreli öfke", "Zaman zaman yalnız kalma isteği", "Deneme sonrası geçici moral bozukluğu", "Uyku saatinde ara sıra kayma", "Kısa süreli iştah değişikliği", "Bir sınav öncesi yoğun kaygı", "Zaman zaman kuralları zorlamak", "“Çok bunaldım” demek"]
    right = ["İki haftadan uzun süren çökkünlük veya sürekli öfke", "Arkadaşlardan, aileden ve sevdiği etkinliklerden belirgin çekilme", "Umutsuzluk, değersizlik, “hiçbir şey düzelmeyecek” ifadeleri", "Uyku düzeninin tamamen tersine dönmesi", "Belirgin kilo değişimi, yeme reddi veya kusma davranışları", "Sık panik, okula/denemeye gidememe", "Tehlikeli davranışlar, madde kullanımı veya ağır saldırganlık", "Kendine zarar verme, ölmek isteme veya vedalaşma"]
    box(M, 120, 238, 410, fill=PALE, stroke=LINE, radius=12)
    box(M + 262, 120, 238, 410, fill=WARN, stroke=LINE, radius=12)
    c.setFont("Arial-Bold", 11.6)
    c.setFillColor(NAVY)
    c.drawString(M + 14, 502, "Geçici ve bağlama bağlı olabilir")
    c.drawString(M + 276, 502, "Değerlendirme gerektirebilir")
    bullet(left, M + 16, 466, width=205, size=8.0, leading=11.0)
    bullet(right, M + 278, 466, width=205, size=7.35, leading=10.0)
    note_box("Hatırlatma", "Ergenlik bazı davranışları açıklayabilir; fakat her şeyi normalleştirmez. Süre, şiddet, tekrar ve işlev kaybı birlikte değerlendirilmelidir.", M, 54, 500, 50)
    footer(10)
    c.showPage()


def page11():
    y = title("Ebeveyn kaygısı çocuğa nasıl geçer?", size=23)
    para("Anne babanın kaygısı anlaşılırdır. Ancak kaygı yönetilmediğinde sürekli puan sorma, planı dakika dakika takip etme, başkalarıyla kıyaslama ve geleceği felaketleştirme biçiminde çocuğa aktarılabilir. Genç bazen kendi sınav kaygısına ek olarak ailesini sakinleştirme yükü de taşır.", M, y, size=9.25, leading=12.7)
    rows = [
        ("Genç masaya oturmadı", "Böyle giderse geleceği mahvolacak.", "Art arda hatırlatma", "Bugünkü sorunu konuşabilirim; bütün geleceği bugün çözmek zorunda değilim."),
        ("Deneme düşük geldi", "Emeklerimiz boşa gitti.", "Kıyaslama, hesap sorma", "Bu sonuç bilgi verir; ilişkimizi ve çocuğumun değerini belirlemez."),
        ("Telefon kullanıyor", "Bizi hiç umursamıyor.", "Telefonu öfkeyle alma", "Sınırı sakin zamanda belirlemeliyim."),
        ("Odadan çıkmıyor", "Benden uzaklaşıyor.", "Zorla konuşturma", "Alan tanıyıp ulaşılabilir kalabilirim."),
    ]
    headers = ["Tetikleyici", "Otomatik düşünce", "Olası davranış", "Daha dengeli karşılık"]
    x0, y0 = M, 456
    widths = [102, 128, 100, 170]
    box(x0, y0, 500, 30, fill=NAVY, stroke=NAVY, radius=7)
    c.setFont("Arial-Bold", 7.6)
    c.setFillColor(WHITE)
    xx = x0
    for h, w in zip(headers, widths):
        c.drawString(xx + 6, y0 + 12, h)
        xx += w
    yy = y0 - 62
    for row in rows:
        box(x0, yy, 500, 54, fill=PALE, stroke=LINE, radius=5)
        xx = x0
        for txt, w in zip(row, widths):
            para(txt, xx + 6, yy + 36, w - 12, size=7.15, leading=8.7, color=INK if w < 170 else MUTED)
            xx += w
            if xx < x0 + 500:
                c.line(xx, yy, xx, yy + 54)
        yy -= 64
    line_field(M, 156, 500, "Beni en çok kaygılandıran durum:", h=30)
    line_field(M, 120, 500, "Bu durumda yaptığım ve çatışmayı artıran davranış:", h=30)
    line_field(M, 84, 500, "Bir sonraki sefer deneyeceğim daha sakin tepki:", h=30)
    footer(11)
    c.showPage()


def page12():
    y = title("Yedi günlük toparlanma planı")
    para("Amaç bir haftada bütün sorunları çözmek değil, sistemi yeniden çalışır hâle getirmektir. Aşağıdaki akış örnektir; her aile kendi koşullarına göre küçük ve uygulanabilir adımlar seçmelidir.", M, y, size=9.3, leading=12.7)
    steps = [
        ("1. gün", "Ateşkesi kurun. Puan, sıralama ve eksik konu tartışmasını 24 saat durdurun."),
        ("2. gün", "Uyku çıpası. Önce kalkış saatini belirleyin; gece rutininde tek davranış seçin."),
        ("3. gün", "En küçük ders adımı. 15-25 dakikalık tek görev tanımlayın."),
        ("4. gün", "Çevreyi düzenleyin. Masa, ışık, su, telefon ve materyalleri hazırlayın."),
        ("5. gün", "Aile konuşması. En fazla 20 dakika: ne işe yaradı, ne çatışma yarattı?"),
        ("6. gün", "Beden günü. Kısa hareket, düzenli öğün ve ekran dışı dinlenme ekleyin."),
        ("7. gün", "Süreci değerlendirin. Sonuç değil düzeni konuşun; yeni haftanın tek hedefini seçin."),
    ]
    yy = 500
    for day, body in steps:
        box(M, yy - 34, 500, 38, fill=PALE, stroke=LINE, radius=9)
        c.setFont("Arial-Bold", 8.5)
        c.setFillColor(NAVY)
        c.drawString(M + 12, yy - 12, day)
        para(body, M + 68, yy - 12, 410, size=7.45, leading=8.7, color=MUTED)
        yy -= 50
    note_box("Plan işlemezse", "Bu durum “daha sert olmak gerekir” anlamına gelmeyebilir. Altta dikkat, kaygı, depresif belirtiler, öğrenme güçlüğü, aile çatışması veya başka bir sorun bulunabilir.", M, 84, 500, 72, fill=WARN)
    footer(12)
    c.showPage()


def page13():
    y = title("Ev içi sınav dönemi sözleşmesi", size=23)
    para("Sözleşme tek taraflı bir ceza listesi değil, iki tarafın da sorumluluğunu görünür kılan kısa bir anlaşmadır. Maddeler az, ölçülebilir ve gözden geçirilebilir olmalıdır.", M, y, size=9.25, leading=12.6)
    left = ["Başkalarıyla kıyaslamamak", "Günde belirlenen sayının üzerinde hatırlatma yapmamak", "Dinlenme ve özel alan ihtiyacına saygı göstermek", "Hakaret, tehdit ve geçmiş hataları kullanmamak", "Profesyonel desteği ceza gibi sunmamak"]
    right = ["Kendi haftalık planını dürüstçe paylaşmak", "Başlamakta zorlandığında yardım istemek", "Ortak ekran sınırına uymak", "Hakaret etmeden mola istemek ve konuşmaya geri dönmek", "Güvenlik veya sağlıkla ilgili önemli değişimleri paylaşmak"]
    box(M, 294, 238, 220, fill=PALE, stroke=LINE, radius=12)
    box(M + 262, 294, 238, 220, fill=PALE, stroke=LINE, radius=12)
    c.setFont("Arial-Bold", 11)
    c.setFillColor(NAVY)
    c.drawString(M + 16, 490, "Ebeveynlerin sorumluluğu")
    c.drawString(M + 278, 490, "Gencin sorumluluğu")
    bullet(left, M + 18, 462, width=200, size=7.5, leading=10.4)
    bullet(right, M + 280, 462, width=200, size=7.5, leading=10.4)
    note_box("Ortak maddeler", "Haftada bir kez, en fazla 20 dakikalık değerlendirme yapılır. Tartışma yükselirse ara verilir ve konuşmaya geri dönülür. Kural değişiklikleri öfke anında yapılmaz.", M, 198, 500, 64)
    line_field(M, 154, 500, "Bu hafta gencin seçtiği çalışma hedefi:", h=30)
    line_field(M, 118, 500, "Ebeveynin azaltacağı tek davranış:", h=30)
    line_field(M, 82, 500, "Haftalık görüşme günü ve saati:", h=30)
    footer(13)
    c.showPage()


def page14():
    y = title("Ne zaman profesyonel destek düşünülmeli?", size=22)
    cards = [
        ("İşlev kaybı", "Okula gidememe, denemelerden sürekli kaçınma, günlük öz bakımın bozulması veya odadan çıkmama."),
        ("Süreğen duygu değişimi", "İki haftadan uzun süren çökkünlük, yoğun öfke, kaygı, umutsuzluk veya isteksizlik."),
        ("Uyku ve yeme", "Uyku düzeninin ciddi biçimde bozulması, hızlı kilo değişimi, yeme reddi veya kusma."),
        ("Panik ve bedensel yakınma", "Tekrarlayan panik, sık acil başvurusu veya okula girmeyi engelleyen belirtiler."),
        ("Riskli davranış", "Madde kullanımı, ağır saldırganlık, evden kaçma, tehlikeli sürüş veya kontrolsüz risk alma."),
        ("Kendine zarar", "Kendini kesme, yakma, ölümden söz etme, vedalaşma, plan yapma veya araç biriktirme."),
    ]
    for i, (h, b) in enumerate(cards):
        x = M + (i % 2) * 258
        yy = 522 - (i // 2) * 96
        small_card(x, yy, 238, 72, h, b, fill=PALE if i < 5 else WARN)
    note_box("Acil güvenlik adımı", "Genç ölmek istediğini, kendine zarar vereceğini veya bir planı olduğunu söylüyorsa bunu yalnızca “sınav stresi” saymayın. Yalnız bırakmayın; küçümsemeyin. 112’yi arayın ya da en yakın acil servise başvurun.", M, 152, 500, 88, fill=WARN)
    para("Genç yardım almak istemese bile ebeveyn önce kendisi danışmanlık veya psikiyatrik değerlendirme konusunda yol haritası isteyebilir. Profesyonel destek, genci “sorunlu” ilan etmek değil; aileyi ve genci daha güvenli bir çerçeveye taşımaktır.", M, 108, size=9.0, leading=12.3)
    footer(14)
    c.showPage()


def page15():
    y = title("Son söz: sınavdan daha büyük bir geçiş", size=22)
    text = [
        "Ergenlikten erişkinliğe geçiş, yalnızca bir sınava hazırlanmak değildir. Genç bir yandan geleceğini kurmaya çalışırken bir yandan duygularını, bedenini, ilişkilerini, özgürlüğünü ve sorumluluğunu yönetmeyi öğrenir.",
        "Sınav bu dönemin önemli bir parçası olabilir; fakat bütün kimliğin ve aile ilişkisinin merkezi hâline geldiğinde yük ağırlaşır. Ebeveynin görevi her sorunu çözmek, her dakikayı denetlemek veya gencin yerine motivasyon üretmek değildir.",
        "Daha işlevsel hedef; güvenli ilişkiyi korumak, az ve net sınırlar koymak, yaşam düzenini desteklemek, küçük adımları görünür kılmak ve gerektiğinde yardım aramaktır.",
    ]
    for p in text:
        y = para(p, M, y, size=9.7, leading=13.4)
        y -= 8
    reminders = ["Ders çalışmama bir sonuçtur; nedeni araştırılmalıdır.", "İyi niyetli baskı da baskıdır.", "Uyku ve beden düzeni çalışma planının parçasıdır.", "Telefon çoğu zaman yalnızca sorun değil, bir başa çıkma aracıdır.", "Ergenlik her belirtiyi açıklamaz.", "Amaç kusursuzluk değil, sürdürülebilir işlevdir.", "İlişkiyi korumak başarıyı küçümsemek değildir.", "Yardım istemek koruyucu bir adımdır."]
    box(M, 236, 500, 166, fill=PALE, stroke=LINE, radius=12)
    c.setFont("Arial-Bold", 11)
    c.setFillColor(NAVY)
    c.drawString(M + 16, 378, "Kısa hatırlatmalar")
    bullet(reminders, M + 18, 350, width=454, size=7.7, leading=9.8)
    note_box("Bilgilendirme", "Bu rehber genel bilgilendirme ve farkındalık amacıyla hazırlanmıştır. Psikiyatrik değerlendirme, psikoterapi, eğitim danışmanlığı veya kişiye özel çalışma ve beslenme planının yerine geçmez.", M, 150, 500, 68, fill=WARN)
    c.setFont("Arial-Bold", 8.5)
    c.setFillColor(NAVY)
    c.drawString(M, 116, "Başlıca kaynaklar")
    sources = "CDC, WHO, WHO Europe / HBSC, UNICEF ve NIMH tarafından yayımlanan ergen sağlığı, uyku ve ruh sağlığı bilgilendirmeleri temel alınmıştır."
    para(sources, M, 100, size=7.6, leading=9.5, color=MUTED)
    c.setFont("Arial-Bold", 8)
    c.setFillColor(NAVY)
    c.drawCentredString(W / 2, 66, "Dr. Özgür Özbebit  |  Psikiyatrist  |  www.ozgurozbebit.com.tr")
    footer(15)
    c.showPage()


for fn in [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15]:
    fn()

c.save()
print(OUT)
