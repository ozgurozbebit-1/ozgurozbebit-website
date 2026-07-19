from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


OUT = Path("output/pdf/vajinismusu-anlamak.pdf")
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
INK = colors.HexColor("#22333b")
MUTED = colors.HexColor("#5d6e78")
LINE = colors.HexColor("#c9dce8")
WHITE = colors.white

c = canvas.Canvas(str(OUT), pagesize=A4)
c.setTitle("Vajinismusu Anlamak")
c.setAuthor("Dr. Özgür Özbebit")
c.setSubject("Psikoeğitim Serisi No: 6 - Çiftler için psikoeğitim rehberi")
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


def checkbox(x, y, size=9):
    c.setStrokeColor(BLUE)
    c.setLineWidth(1)
    c.rect(x, y, size, size, fill=0, stroke=1)


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
    c.drawCentredString(W / 2, H - 226, "Psikoeğitim Serisi No: 6")
    c.setFillColor(WHITE)
    c.setFont("Georgia-Bold", 32)
    c.drawCentredString(W / 2, H - 292, "Vajinismusu")
    c.drawCentredString(W / 2, H - 332, "Anlamak")
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(W / 2 - 96, H - 356, W / 2 + 96, H - 356)
    c.setFont("Arial", 13)
    c.setFillColor(colors.HexColor("#dbeaf4"))
    c.drawCentredString(W / 2, H - 390, "Çiftler İçin Psikoeğitim Rehberi")
    c.setFont("Arial-Bold", 14)
    c.setFillColor(WHITE)
    c.drawCentredString(W / 2, 156, "Dr. Özgür Özbebit")
    c.setFont("Arial", 12)
    c.drawCentredString(W / 2, 134, "Psikiyatrist")
    c.setFont("Arial", 10)
    c.drawCentredString(W / 2, 102, "www.ozgurozbebit.com.tr")
    c.showPage()


def page2():
    y = title("Bu rehber neden hazırlandı?", CONTENT_TOP)
    text = [
        "Vajinismus, birçok çiftin düşündüğünden daha sık karşılaşabildiği; fakat çoğu zaman konuşulması zor olduğu için yalnız yaşanıyormuş gibi hissedilen bir durumdur. Çiftler bazen uzun süre kimseye anlatamaz, ne olduğunu tam anlayamaz ve bu sessizlik içinde suçluluk, utanç ya da çaresizlik yaşayabilir.",
        "Bu durum irade eksikliği, isteksizlik ya da partneri reddetme anlamına gelmez. Vajinismus yaşayan kişi çoğu zaman yakınlık kurmak, ilişkisinde güven hissetmek ve sürecin düzelmesini ister. Ancak bedenin verdiği istemsiz alarm tepkisi, kişinin isteğinden bağımsız şekilde süreci zorlaştırabilir.",
        "Vajinismus yalnızca bir kişinin sorunu gibi görülmemelidir. Çift ilişkisinin içinde yaşanır; bu nedenle duygusal etkileri de iki kişiyi ilgilendirebilir. Bir taraf kendini yetersiz, reddedilmiş ya da dışlanmış hissedebilir. Diğer taraf ise suçlu, mahcup, anlaşılmamış ya da baskı altında kalmış hissedebilir. Bu duyguların hiçbiri çiftin kötü niyetli olduğu anlamına gelmez.",
        "Doğru bilgi, suçluluk duygusunu azaltabilir. Çünkü kişi yaşadığı şeyin seçilmiş bir davranış olmadığını, bedensel ve duygusal sistemlerin birlikte çalıştığı bir süreç olduğunu anladığında kendisine daha az yüklenebilir. Partner de durumu kişisel bir reddedilme gibi yorumlamak yerine daha destekleyici bir yerde durabilir.",
        "Bu rehber, tedavi uygulaması öğretmek ya da evde yapılacak teknikler sunmak için hazırlanmadı. Böyle bir konuda bireysel değerlendirme, güvenli bir çerçeve ve profesyonel takip önemlidir. Buradaki amaç, vajinismusu daha anlaşılır kılmak, yanlış inanışları azaltmak ve çiftlere sürecin konuşulabilir olduğunu hatırlatmaktır.",
        "Her çiftin öyküsü farklıdır. Bu nedenle tek bir açıklama ya da tek bir çözüm herkese uymaz. Ancak yargılamadan anlamaya çalışmak, baskıyı azaltmak, iletişimi korumak ve gerektiğinde yardım aramak çoğu zaman sürecin daha sağlıklı ilerlemesine katkı sağlar."
    ]
    for p in text:
        y = para(p, M, y, size=10.25, leading=14.45)
        y -= 7
    note_box("Kısa hatırlatma", "Vajinismus, kişinin seçtiği bir durum değildir. Bu nedenle suçlanacak bir taraf değil, anlaşılması gereken bir süreç vardır.", M, 82, 500, 72)
    footer(2)
    c.showPage()


def page3():
    y = title("Vajinismus nedir?", CONTENT_TOP)
    text = [
        "Vajinismus, cinsel birleşme girişimi sırasında ya da bu girişim düşüncesiyle birlikte ortaya çıkabilen yoğun kaygı, kaçınma ve pelvik taban kaslarında istemsiz kasılma ile ilişkili bir durum olarak ele alınabilir. Güncel klinik yaklaşımda bu tablo yalnızca fiziksel bir engel gibi değerlendirilmez; beden, duygu, düşünce, ilişki dinamikleri ve geçmiş öğrenmeler birlikte ele alınır.",
        "Pelvik taban kasları, bedenin alt bölgesinde destek ve kontrol sağlayan önemli bir kas grubudur. Kaygı yükseldiğinde bedenin birçok bölgesi gibi bu kaslarda da gerginlik oluşabilir. Kişi bunu bilerek yapmaz. Tıpkı korktuğumuzda omuzlarımızın kasılması ya da nefesimizin değişmesi gibi, beden bazen kendini korumaya çalışır.",
        "Vajinismusta beklenti de önemlidir. Kişi acı duyacağından, kontrolü kaybedeceğinden, başaramayacağından ya da partnerini hayal kırıklığına uğratacağından korkabilir. Bu beklentiler kaygıyı artırdığında bedenin alarm sistemi daha kolay devreye girebilir. Böylece kişi istemesine rağmen yaklaşmakta zorlanabilir.",
        "Bu nedenle vajinismusu yalnızca 'fiziksel bir sorun' ya da yalnızca 'psikolojik bir sorun' diye ayırmak çoğu zaman yetersizdir. Daha doğru olan, kişinin bedensel tepkisini, duygusal deneyimini ve çift ilişkisindeki etkileri birlikte anlamaktır. Değerlendirme süreci de bu bütüncül bakışla planlanmalıdır."
    ]
    for p in text:
        y = para(p, M, y, size=10.35, leading=14.75)
        y -= 8
    # Simple, non-explicit body schema
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.4)
    c.ellipse(248, 155, 348, 255, fill=0, stroke=1)
    c.line(298, 155, 298, 92)
    c.line(268, 210, 226, 176)
    c.line(328, 210, 370, 176)
    c.setFillColor(LIGHT)
    c.circle(298, 186, 6, fill=1, stroke=0)
    note_box("Bedenin alarmı", "Kasılma çoğu zaman bilinçli bir tercih değil, kaygıyla birlikte ortaya çıkan istemsiz bir koruma tepkisidir.", 80, 86, 435, 64)
    footer(3)
    c.showPage()


def page4():
    y = title("Korku - Kasılma Döngüsü", CONTENT_TOP)
    flow = ["Beklenti", "Kaygı", "Kasılma", "Acı beklentisi", "Kaçınma", "Korkunun güçlenmesi"]
    x, w, h = W / 2 - 118, 236, 38
    yy = 642
    for i, item in enumerate(flow):
        box(x, yy, w, h, fill=LIGHT, stroke=BLUE, radius=12)
        c.setFont("Arial-Bold", 11.5)
        c.setFillColor(NAVY)
        c.drawCentredString(W / 2, yy + 14, item)
        if i < len(flow) - 1:
            c.setStrokeColor(NAVY2)
            c.setLineWidth(1.1)
            c.line(W / 2, yy - 6, W / 2, yy - 20)
            c.setFillColor(NAVY2)
            c.circle(W / 2, yy - 22, 2, fill=1, stroke=0)
        yy -= 62
    text = ("Bu döngüde kişi önce bir beklentiyle karşılaşır. Bu beklenti bazen yaklaşan bir birliktelik, bazen önceki olumsuz deneyimin hatırlanması, bazen de 'yine olmayacak' düşüncesidir. Beklenti kaygıyı artırdığında beden alarm durumuna geçebilir. Kasılma ya da gerginlik arttıkça acı beklentisi güçlenebilir. Acı beklentisi de kaçınmayı anlaşılır hale getirir. Kaçınma kısa vadede rahatlatır; fakat uzun vadede korkunun aynı yerde kalmasına neden olabilir. Bu döngüyü anlamak, kişiyi suçlamadan süreci konuşabilmek için önemlidir.")
    para(text, M, 184, width=500, size=10.15, leading=14.3)
    footer(4)
    c.showPage()


def page5():
    y = title("Doğru Bilinen Yanlışlar", CONTENT_TOP, size=24)
    c.setFont("Arial-Bold", 11)
    c.setFillColor(NAVY)
    c.drawString(M, 640, "Mit")
    c.drawString(W / 2 + 18, 640, "Gerçek")
    rows = [
        ("İstemediği için oluyor.", "İstemesine rağmen yaşayabilir."),
        ("Mutlaka fiziksel bir engel vardır.", "Her zaman fiziksel bir neden olmayabilir."),
        ("Zamanla kendiliğinden geçer.", "Bazı çiftlerde destek gerekebilir."),
        ("Bu yalnızca kadının sorunudur.", "Çift ilişkisini birlikte etkiler."),
        ("Zorlamak çözüm olabilir.", "Baskı çoğu zaman kaygıyı artırır."),
        ("Sevgi varsa sorun olmaz.", "Sevgi önemli ama tek başına yeterli olmayabilir."),
        ("Utanılacak bir durumdur.", "Anlaşılabilir ve desteklenebilir bir süreçtir."),
        ("Konuşmamak daha iyidir.", "Güvenli iletişim yükü azaltabilir."),
        ("Tek tip tedavi vardır.", "Süreç kişiye ve çifte göre planlanır."),
        ("Yardım istemek başarısızlıktır.", "Yardım istemek çözüm arayışıdır."),
    ]
    yy = 610
    for left, right in rows:
        box(M, yy - 38, 500, 34, fill=PALE, stroke=LINE)
        c.setFont("Arial-Bold", 8.7)
        c.setFillColor(NAVY)
        c.drawString(M + 12, yy - 24, left)
        c.setFillColor(BLUE)
        c.drawCentredString(W / 2, yy - 24, "→")
        c.setFillColor(MUTED)
        c.drawString(W / 2 + 18, yy - 24, right)
        yy -= 47
    footer(5)
    c.showPage()


def page6():
    y = title("Çiftler bu süreçte neler yaşayabilir?", CONTENT_TOP, size=24)
    text = [
        "Vajinismus yalnızca bedensel bir zorlanma olarak yaşanmaz. Zamanla çiftin iletişimini, yakınlık duygusunu ve birbirini anlama biçimini de etkileyebilir. Birçok çift bu süreçte ne konuşacağını bilemez. Konu açıldığında gerilim artabilir; konu hiç açılmadığında ise araya sessizlik girebilir.",
        "Hayal kırıklığı bu süreçte sık görülebilir. Çiftler evlilik, ilişki ya da yakınlıkla ilgili beklentilerinin karşılanmadığını düşünebilir. Bu duygu bazen öfke gibi, bazen kırgınlık gibi, bazen de içe çekilme olarak ortaya çıkabilir. Önemli olan bu duyguları birbirine karşı silah gibi kullanmamaktır.",
        "Suçluluk ve utanç da sık görülen duygulardır. Vajinismus yaşayan kişi 'neden yapamıyorum' diye kendini suçlayabilir. Partner ise 'beni istemiyor mu' ya da 'ben mi yanlış yapıyorum' diye düşünebilir. Bu yorumlar anlaşılır olsa da çoğu zaman durumu daha ağır hale getirir.",
        "Performans baskısı arttıkça beden daha fazla alarm verebilir. Bu nedenle yakınlığı yalnızca bir sonuç üzerinden değerlendirmek, çiftin üzerindeki yükü artırabilir. Bazen iyileştirici olan şey, önce güvenli ve yargısız bir konuşma alanı kurabilmektir."
    ]
    for p in text:
        y = para(p, M, y, size=10.7, leading=15.1)
        y -= 10
    note_box("İlişkiyi koruyan cümle", "Bu süreci birbirimize karşı değil, birlikte anlamaya çalışabiliriz.", M, 96, 500, 66)
    footer(6)
    c.showPage()


def page7():
    y = title("Partner nasıl destek olabilir?", CONTENT_TOP, size=24)
    para("Destek olmak, sorunu tek başına çözmek anlamına gelmez. Partnerin güven veren, sabırlı ve baskı kurmayan tutumu sürecin daha sağlıklı konuşulmasına yardım edebilir.", M, y, size=10.3, leading=14.2)
    items = [
        ("Empati", "Yaşanan durumun kişinin seçimi olmadığını hatırlamak."),
        ("Sabır", "Sürecin aceleyle çözülmesi gereken bir sınav olmadığını bilmek."),
        ("Suçlamamak", "Kırıcı yorumlardan ve genelleyici ifadelerden kaçınmak."),
        ("Baskı kurmamak", "Yakınlığı zorunluluk ya da performans alanı haline getirmemek."),
        ("İletişimi sürdürmek", "Sessiz kalmak yerine güvenli ve kısa konuşmalar kurmak."),
        ("Birlikte yardım aramak", "Gerektiğinde profesyonel değerlendirmeyi ortak bir adım olarak görmek."),
    ]
    yy = 596
    for i, (label, text) in enumerate(items):
        x = M if i % 2 == 0 else W / 2 + 8
        if i % 2 == 0 and i > 0:
            yy -= 104
        section_card(x, yy - 82, 238, 76, label, text)
    footer(7)
    c.showPage()


def page8():
    y = title("Kaçınılması gereken yaklaşımlar", CONTENT_TOP, size=23)
    c.setFont("Arial-Bold", 10.5)
    c.setFillColor(NAVY)
    c.drawString(M, 628, "Söylenmemesi önerilen ifade")
    c.drawString(W / 2 + 18, 628, "Destekleyici alternatif")
    rows = [
        ("Biraz rahatlasan olacak.", "Beraber sakin bir şekilde anlamaya çalışalım."),
        ("Bunu büyütüyorsun.", "Bu senin için zor görünüyor."),
        ("Beni istemiyorsun.", "Bunu kişisel almadan konuşmak istiyorum."),
        ("Herkes yapıyor.", "Bizim sürecimiz bize özgü olabilir."),
        ("Artık denemeliyiz.", "Hazır hissetmediğinde durabiliriz."),
        ("Sorun sende.", "Bu bizim birlikte ele alacağımız bir süreç."),
    ]
    yy = 590
    for left, right in rows:
        box(M, yy - 52, 500, 46, fill=PALE, stroke=LINE)
        c.setFont("Arial-Bold", 8.4)
        c.setFillColor(NAVY)
        para(left, M + 12, yy - 22, width=205, size=8.4, leading=10.5, font="Arial-Bold", color=NAVY)
        c.setFillColor(BLUE)
        c.drawCentredString(W / 2, yy - 30, "→")
        para(right, W / 2 + 18, yy - 22, width=220, size=8.4, leading=10.5, font="Arial-Bold", color=MUTED)
        yy -= 62
    footer(8)
    c.showPage()


def page9():
    y = title("Tedavi süreci genel olarak nasıl ilerler?", CONTENT_TOP, size=23)
    text = [
        "Vajinismusta tedavi süreci kişiye ve çifte göre planlanır. Bu nedenle burada belirli bir teknik, egzersiz ya da ev uygulaması tarif etmek doğru değildir. Güvenli bir değerlendirme yapılmadan verilen standart öneriler bazen kişinin kaygısını artırabilir.",
        "İlk adım çoğu zaman ayrıntılı değerlendirmedir. Kişinin öyküsü, kaygı düzeyi, bedensel tepkileri, ilişki dinamikleri, önceki deneyimleri ve varsa tıbbi süreçleri birlikte ele alınır. Gerekli durumlarda kadın doğum değerlendirmesiyle fiziksel etkenlerin dışlanması ya da ele alınması gerekebilir.",
        "Psikoeğitim tedavinin önemli bir parçasıdır. Kişinin yaşadığı durumun irade eksikliği olmadığını, bedenin alarm sistemiyle ilişkili olabileceğini ve kaygının bedensel tepkileri artırabileceğini anlaması suçluluğu azaltabilir.",
        "Süreçte çift iletişimi de önemlidir. Partnerin suçlayıcı olmayan, baskı kurmayan ve güven veren tutumu tedavi çerçevesini destekleyebilir. Bazı durumlarda çift görüşmeleri, bazı durumlarda bireysel görüşmeler daha uygun olabilir.",
        "Tedavinin amacı yalnızca bir sonucu elde etmek değildir. Amaç kişinin bedeniyle, kaygısıyla ve ilişkisiyle daha güvenli bir temas kurabilmesidir. Bu süreçte hızdan çok güven, açıklık ve düzenli takip önemlidir."
    ]
    for p in text:
        y = para(p, M, y, size=10.45, leading=14.8)
        y -= 9
    footer(9)
    c.showPage()


def page10():
    y = title("Sık Sorulan Sorular", CONTENT_TOP)
    faqs = [
        ("Vajinismus tamamen düzelebilir mi?", "Birçok kişide uygun değerlendirme ve destekle belirgin iyileşme sağlanabilir."),
        ("İlk geceyle ilgisi var mı?", "Bazı kişilerde ilk deneyimle fark edilir; fakat süreç yalnızca ilk geceyle açıklanmaz."),
        ("Sadece psikolojik midir?", "Bedensel, duygusal, bilişsel ve ilişkisel etkenler birlikte ele alınmalıdır."),
        ("Her çift aynı süreci mi yaşar?", "Hayır. Her çiftin öyküsü, kaygısı ve ihtiyaçları farklıdır."),
        ("Tedavi ne kadar sürer?", "Süre kişiye, eşlik eden etkenlere ve takip düzenine göre değişebilir."),
        ("Partner görüşmeye katılmalı mı?", "Bazı durumlarda partner katılımı süreci destekleyebilir."),
        ("Bu benim suçum mu?", "Hayır. Vajinismus suçlanacak bir durum değil, anlaşılması gereken bir süreçtir."),
        ("Zorlamak işe yarar mı?", "Genellikle baskı ve zorlama kaygıyı artırabilir."),
        ("Tıbbi kontrol gerekir mi?", "Gerekli durumlarda fiziksel etkenlerin değerlendirilmesi önemlidir."),
        ("Utanç duymam normal mi?", "Evet, sık görülebilir; ancak utanmak yardım almayı engellememelidir."),
        ("İlişki zarar görür mü?", "Konuşulmadığında zorlanma artabilir; destekleyici iletişim koruyucu olabilir."),
        ("Bu rehber tedavi yerine geçer mi?", "Hayır. Bu rehber yalnızca genel bilgilendirme sağlar."),
    ]
    col_w = 238
    yy = y
    for i, (q, a) in enumerate(faqs):
        x = M if i % 2 == 0 else W / 2 + 8
        if i % 2 == 0 and i > 0:
            yy -= 88
        section_card(x, yy - 70, col_w, 64, q, a)
    footer(10)
    c.showPage()


def page11():
    y = title("Kendimizi suçlamadan konuşabilmek", CONTENT_TOP, size=22)
    para("Bu sayfa, çiftlerin birbirini suçlamadan konuşmasına yardımcı olmak için ayrıldı. Cümleleri tamamlamak zorunda değilsiniz; yalnızca konuşmaya küçük bir kapı açması yeterlidir.", M, y, size=10.2, leading=14)
    prompts = [
        "Bu süreçte en çok zorlandığım duygu",
        "Senden duymaya ihtiyaç duyduğum cümle",
        "Sana daha iyi anlatmak istediğim şey",
        "Birbirimize baskı kurmadan atabileceğimiz küçük adım",
    ]
    yy = 604
    for p in prompts:
        c.setFont("Arial-Bold", 10)
        c.setFillColor(NAVY)
        c.drawString(M, yy, p)
        lined_area(M, yy - 82, 500, 62, gap=18)
        yy -= 104
    footer(11)
    c.showPage()


def page12():
    y = title("Birlikte güçlü kaldığımız anlar", CONTENT_TOP, size=24)
    para("Zorlandığınız bir süreçte yalnızca problemi değil, ilişkinin güçlü kaldığı anları da görmek önemlidir.", M, y, size=10.2, leading=14.2)
    labels = [
        "Bu hafta birbirimize iyi gelen bir an",
        "Birbirimizi daha iyi anladığımız bir konuşma",
        "Bana güven veren davranış",
        "Birlikte hatırlamak istediğimiz güçlü yanımız",
    ]
    yy = 610
    for label in labels:
        c.setFont("Arial-Bold", 10)
        c.setFillColor(NAVY)
        c.drawString(M, yy, label)
        lined_area(M, yy - 82, 500, 62, gap=18)
        yy -= 104
    footer(12)
    c.showPage()


def page13():
    y = title("Ne zaman profesyonel destek düşünülmeli?", CONTENT_TOP, size=22)
    text = [
        "Vajinismusla ilgili zorlanma devam ediyorsa, çift bu konuyu konuşmaktan kaçınmaya başladıysa, yakınlık alanı sürekli gerginlik yaratıyorsa ya da suçluluk ve utanç belirgin hale geldiyse profesyonel destek düşünmek yararlı olabilir.",
        "İlk değerlendirme, kesin ve tek bir açıklama bulmaktan çok süreci anlamaya yöneliktir. Bedensel bir etken olup olmadığı, kaygının düzeyi, önceki deneyimler, ilişki içindeki iletişim biçimi ve kişinin beklentileri birlikte ele alınabilir.",
        "Profesyonel destek almak, ilişkinin başarısız olduğu ya da kişinin eksik olduğu anlamına gelmez. Aksine, zorlanılan bir konuda güvenli ve bilimsel bir çerçeve aramak sağlıklı bir adımdır.",
        "Eğer süreç çift içinde sürekli tartışmaya, baskıya ya da kaçınmaya dönüşüyorsa beklemek yerine değerlendirme almak daha koruyucu olabilir. Her çiftin ihtiyacı farklıdır; bu nedenle süreç kişiye özel planlanmalıdır."
    ]
    for p in text:
        y = para(p, M, y, size=10.75, leading=15.2)
        y -= 12
    note_box("Önemli", "Bu rehber tanı koymaz. Kişisel değerlendirme ve tedavi planı için uzman görüşü gerekir.", M, 104, 500, 70)
    footer(13)
    c.showPage()


def page14():
    y = title("Kendimize küçük hatırlatmalar", CONTENT_TOP, size=24)
    notes = [
        "Birbirimizin rakibi değiliz.",
        "Aynı takımdayız.",
        "Sabır iyileşme sürecinin parçasıdır.",
        "Baskı azalınca güven artabilir.",
        "Konuşmak zor olabilir; ama sessizlik yükü büyütebilir.",
        "Yardım istemek güçsüzlük değildir.",
    ]
    yy = 608
    for i, text in enumerate(notes):
        x = M if i % 2 == 0 else W / 2 + 8
        if i % 2 == 0 and i > 0:
            yy -= 112
        box(x, yy - 88, 238, 82, fill=LIGHT if i % 3 == 0 else PALE, stroke=LINE)
        c.setFont("Georgia-Bold", 18)
        c.setFillColor(BLUE)
        c.drawString(x + 14, yy - 32, "“")
        para(text, x + 34, yy - 30, width=180, size=9.6, leading=12.7, font="Arial-Bold", color=NAVY)
    footer(14)
    c.showPage()


def page15():
    y = title("Kaynaklar ve güvenilir bilgi", CONTENT_TOP, size=24)
    text = [
        "Vajinismus hakkında internette çok fazla bilgi bulunabilir; ancak her bilgi güvenilir, bilimsel ya da kişiye uygun değildir. Bazı içerikler korkutucu, suçlayıcı veya tek tip çözüm öneren bir dille yazılmış olabilir. Bu tür bilgiler kişinin kaygısını artırabilir.",
        "Güvenilir bilgi, kişiyi yargılamaz. Kesin ve herkese aynı şekilde uygulanacak vaatler sunmaz. Bedensel, duygusal ve ilişkisel etkenlerin birlikte değerlendirilmesi gerektiğini kabul eder. Kişinin mahremiyetine saygı duyar ve profesyonel değerlendirmenin önemini vurgular.",
        "Bilimsel yaklaşım, aceleci sonuçlardan kaçınır. Her çiftin sürecinin farklı olabileceğini, fiziksel değerlendirme gerekebileceğini ve psikolojik etkenlerin kişiye özel ele alınması gerektiğini söyler. Bu nedenle okunan bilgiler bir başlangıç olabilir; fakat kişisel değerlendirme yerine geçmez.",
        "Bilgi ararken kendinize şu soruları sorabilirsiniz: Bu içerik beni suçlu hissettiriyor mu? Tek bir çözümü herkes için geçerli gibi mi anlatıyor? Mahremiyete saygılı mı? Profesyonel değerlendirmeyi önemsiyor mu? Bu sorular daha güvenli bilgiye yaklaşmanıza yardım edebilir."
    ]
    for p in text:
        y = para(p, M, y, size=10.6, leading=15)
        y -= 10
    footer(15)
    c.showPage()


def page16():
    y = title("Son söz", CONTENT_TOP)
    text = [
        "Vajinismus utanılacak bir durum değildir. Zor, hassas ve çoğu zaman konuşması güç bir süreç olabilir; fakat kişinin değeriyle, kadınlığıyla, sevgisiyle ya da ilişkisinin gücüyle ölçülemez. Bu süreçte yaşanan zorlanma, suçlanacak bir taraf olduğu anlamına gelmez.",
        "Yalnız değilsiniz. Birçok çift benzer duyguları yaşar: ne yapacağını bilememe, hayal kırıklığı, sessizlik, suçluluk, utanma ya da yanlış anlaşılma korkusu. Bu duyguların varlığı ilişkinin bittiği ya da çözümsüz olduğu anlamına gelmez. Bazen ilk iyileştirici adım, bu duyguları güvenli bir dille konuşabilmektir.",
        "Birlikte hareket etmek çoğu zaman süreci kolaylaştırır. Partnerlerin birbirini rakip gibi değil, aynı takımın iki üyesi gibi görmesi önemlidir. Baskının azalması, güvenin artması ve iletişimin korunması tedavi sürecine daha sağlıklı bir zemin hazırlayabilir.",
        "Yardım istemek güçsüzlük değildir. Tam tersine, zorlanılan bir konuda çözüm aramak, kişinin kendisine ve ilişkisine verdiği değeri gösterir. Bu rehber yalnızca güvenilir bir başlangıç sunmak için hazırlandı. Kişisel değerlendirme ve tedavi planı için uzman desteği gerekir.",
        "Bu sürecin aceleyle, baskıyla ya da suçlulukla ilerlemesi gerekmez. Daha sakin, daha anlaşılır ve daha güvenli bir yol mümkündür."
    ]
    for p in text:
        y = para(p, M, y, size=10.65, leading=15.1)
        y -= 10
    note_box("Bilgilendirme", "Bu rehber genel bilgilendirme amacıyla hazırlanmıştır.\nTanı, değerlendirme ve tedavinin yerine geçmez.", M, 72, 500, 72)
    footer(16)
    c.showPage()


for fn in [
    page1, page2, page3, page4, page5, page6, page7, page8,
    page9, page10, page11, page12, page13, page14, page15, page16
]:
    fn()

c.save()
print(OUT)
