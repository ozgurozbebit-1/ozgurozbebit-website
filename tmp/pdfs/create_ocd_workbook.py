from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from pathlib import Path
import math

OUT = Path('output/pdf/okb-takip-defteri.pdf')
LOGO = Path('assets/logo2.png')
W, H = A4

FONT_DIR = Path('/System/Library/Fonts/Supplemental')
pdfmetrics.registerFont(TTFont('Arial', str(FONT_DIR / 'Arial.ttf')))
pdfmetrics.registerFont(TTFont('Arial-Bold', str(FONT_DIR / 'Arial Bold.ttf')))
pdfmetrics.registerFont(TTFont('Arial-Italic', str(FONT_DIR / 'Arial Italic.ttf')))
pdfmetrics.registerFont(TTFont('Georgia', str(FONT_DIR / 'Georgia.ttf')))
pdfmetrics.registerFont(TTFont('Georgia-Bold', str(FONT_DIR / 'Georgia Bold.ttf')))

NAVY = colors.HexColor('#16324f')
NAVY2 = colors.HexColor('#1f4569')
BLUE = colors.HexColor('#75add1')
LIGHT = colors.HexColor('#eaf4fb')
PALE = colors.HexColor('#f6fbfe')
INK = colors.HexColor('#22333b')
MUTED = colors.HexColor('#5d6e78')
LINE = colors.HexColor('#c9dce8')
WHITE = colors.white

c = canvas.Canvas(str(OUT), pagesize=A4)
c.setTitle('OKB Takip Defteri')
c.setAuthor('Dr. Özgür Özbebit')
c.setSubject('Psikoeğitim Serisi No: 3 - OKB takip ve çalışma defteri')
c.setCreator('Dr. Özgür Özbebit')

M = 48
CONTENT_TOP = H - 78


def footer(page):
    c.setStrokeColor(LINE)
    c.setLineWidth(0.5)
    c.line(M, 42, W - M, 42)
    c.setFont('Arial', 8)
    c.setFillColor(MUTED)
    c.drawString(M, 28, 'www.ozgurozbebit.com.tr')
    c.drawCentredString(W / 2, 28, 'Psikoeğitim Serisi')
    c.drawRightString(W - M, 28, str(page))


def box(x, y, w, h, fill=PALE, stroke=LINE, radius=10, lw=0.8):
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(lw)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=1)


def title(text, y, size=25):
    c.setFillColor(NAVY)
    c.setFont('Georgia-Bold', size)
    words = text.split()
    line = ''
    lines = []
    for word in words:
        test = (line + ' ' + word).strip()
        if c.stringWidth(test, 'Georgia-Bold', size) <= 500:
            line = test
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    for line in lines:
        c.drawString(M, y, line)
        y -= size + 6
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(M, y + 8, M + 70, y + 8)
    return y - 20


def para(text, x, y, width=500, size=10.4, leading=14.5, font='Arial', color=MUTED):
    c.setFont(font, size)
    c.setFillColor(color)
    words = text.split()
    line = ''
    for word in words:
        test = (line + ' ' + word).strip()
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
    c.setFont('Arial-Bold', 11)
    c.drawString(x + 14, y + h - 22, label)
    para(text, x + 14, y + h - 42, w - 28, size=8.5, leading=10.8, color=INK)


def draw_round_logo(x, y, size):
    if not LOGO.exists():
        return
    c.saveState()
    c.setFillColor(WHITE)
    c.circle(x + size / 2, y + size / 2, size / 2, fill=1, stroke=0)
    path = c.beginPath()
    path.circle(x + size / 2, y + size / 2, size / 2)
    c.clipPath(path, stroke=0, fill=0)
    c.drawImage(ImageReader(str(LOGO)), x, y, size, size, mask='auto')
    c.restoreState()


def checkbox(x, y, size=9):
    c.setStrokeColor(BLUE)
    c.setLineWidth(1)
    c.rect(x, y, size, size, fill=0, stroke=1)


def page1():
    c.setFillColor(WHITE)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(colors.HexColor('#0f2a45'))
    c.circle(W * 0.82, H * 0.18, 180, fill=1, stroke=0)
    c.setFillColor(colors.HexColor('#214966'))
    c.circle(W * 0.16, H * 0.88, 120, fill=1, stroke=0)
    draw_round_logo(W / 2 - 54, H - 184, 108)
    c.setFillColor(BLUE)
    c.setFont('Arial-Bold', 12)
    c.drawCentredString(W / 2, H - 228, 'Psikoeğitim Serisi No: 3')
    c.setFillColor(WHITE)
    c.setFont('Georgia-Bold', 36)
    c.drawCentredString(W / 2, H - 300, 'OKB Takip')
    c.drawCentredString(W / 2, H - 342, 'Defteri')
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(W / 2 - 92, H - 366, W / 2 + 92, H - 366)
    c.setFont('Arial-Bold', 14)
    c.drawCentredString(W / 2, 156, 'Dr. Özgür Özbebit')
    c.setFont('Arial', 12)
    c.drawCentredString(W / 2, 134, 'Psikiyatrist')
    c.setFont('Arial', 10)
    c.drawCentredString(W / 2, 102, 'www.ozgurozbebit.com.tr')
    c.showPage()


def page2():
    y = title('Bu defter neden hazırlandı?', CONTENT_TOP)
    text = [
        "OKB çoğu zaman yalnızca temizlik ya da düzen takıntısı gibi düşünülür. Oysa obsesif kompulsif belirtiler çok daha geniş bir alanda görülebilir. Kimi kişi bulaşma korkusuyla zorlanırken, kimi kişi zarar verme düşüncelerinden, dini ya da ahlaki içerikli rahatsız edici düşüncelerden, sürekli şüpheden, ilişkiyle ilgili emin olamama halinden veya sağlıkla ilgili yoğun kontrol ihtiyacından etkilenebilir.",
        "OKB'de zorluğu yaratan yalnızca zihne gelen düşünce değildir. Düşünceye verilen anlam, bu düşüncenin yarattığı kaygı ve kaygıyı azaltmak için yapılan davranışlar döngüyü sürdürür. Bu davranışlar her zaman dışarıdan görülebilen eylemler olmayabilir. Kapıyı tekrar tekrar kontrol etmek, el yıkamak ya da düzenlemek kompulsiyon olabileceği gibi; içinden dua etmek, bir cümleyi zihinde tekrar etmek, anıyı yeniden gözden geçirmek ya da kendini ikna etmeye çalışmak da kompulsiyon döngüsünün parçası olabilir.",
        "Güvence isteme davranışları da çoğu zaman fark edilmeden döngüye eklenir. Kişi yakınlarına tekrar tekrar aynı soruyu sorabilir, internette uzun süre araştırma yapabilir, kendi hafızasını kontrol edebilir ya da kısa süreli rahatlamak için uzman görüşünü tekrar tekrar teyit etmek isteyebilir. Bu davranışlar ilk anda rahatlatıcıdır; fakat zamanla zihne şu mesajı verebilir: 'Rahatlamak için bu kontrolü yapmam gerekiyor.'",
        "Belirtileri yazmak, onları onaylamak anlamına gelmez. Tam tersine, kişinin zihninde olup bitenleri daha dışarıdan görebilmesine yardımcı olabilir. Bir tetikleyicinin ardından hangi obsesyonun geldiğini, kaygının kaç puana çıktığını, hangi kompulsiyonun yapıldığını ve rahatlamanın ne kadar sürdüğünü görmek değişimin ilk basamağı olabilir.",
        "Bu defter, kişinin kendisini yargılamadan gözlemlemesi için hazırlandı. Buradaki formlar tedavinin yerine geçmez; ancak terapi sürecinde, psikiyatrik takipte veya kişisel farkındalık çalışmalarında düzenli kayıt oluşturmak için kullanılabilir. Amaç kusursuz doldurmak değil, tekrar eden örüntüleri sakin biçimde fark edebilmektir."
    ]
    for p in text:
        y = para(p, M, y, size=10.5, leading=14.9)
        y -= 8
    note_box('Hatırlatma', 'Belirtileri fark etmek, onları onaylamak anlamına gelmez. Çoğu zaman değişimin ilk adımı yalnızca gözlem yapabilmektir.', M, 82, 500, 72)
    footer(2)
    c.showPage()


def page3():
    y = title('OKB döngüsü nasıl çalışır?', CONTENT_TOP)
    labels = ['Tetikleyici', 'Obsesyon', 'Kaygı', 'Kompulsiyon', 'Kısa süreli rahatlama', 'Obsesyonun güçlenmesi', 'Yeni döngü']
    cx = W / 2
    start_y = 620
    for i, lab in enumerate(labels):
        yy = start_y - i * 46
        box(cx - 112, yy - 18, 224, 36, fill=LIGHT if i in (0, 6) else PALE, stroke=BLUE, radius=10)
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 10)
        c.drawCentredString(cx, yy - 4, lab)
        if i < len(labels) - 1:
            c.setStrokeColor(NAVY2)
            c.line(cx, yy - 21, cx, yy - 34)
            c.setFillColor(NAVY2)
            c.circle(cx, yy - 34, 2, fill=1, stroke=0)
    text = ("OKB döngüsü genellikle bir tetikleyiciyle başlar. Bu tetikleyici bazen görülen bir nesne, bazen bir söz, bazen bedensel bir his, bazen de zihne kendiliğinden gelen bir düşünce olabilir. Ardından kişi bu düşünceyi sıradan bir zihinsel olay gibi değil, tehlikeli veya mutlaka yanıtlanması gereken bir işaret gibi yorumlayabilir. Bu yorum kaygıyı yükseltir. Kaygı yükseldikçe kişi rahatlamak için bir davranışa yönelir: kontrol eder, sorar, araştırır, temizler, tekrarlar ya da zihinsel olarak kendini ikna etmeye çalışır. Kompulsiyon kısa süreli rahatlama sağlar; fakat uzun vadede obsesyonun önemini artırabilir. Beyin, rahatlamanın kompulsiyon sayesinde geldiğini öğrenir. Böylece benzer bir düşünce tekrar geldiğinde aynı davranışı yapma isteği güçlenir. Döngüyü tanımak, kişinin kendisine kızmadan neyin neyi beslediğini görmesine yardımcı olur.")
    para(text, M, 212, width=500, size=10.4, leading=14.8)
    footer(3)
    c.showPage()


def page4():
    y = title('Obsesyon mu, normal düşünce mi?', CONTENT_TOP)
    para('Herkesin zihninden zaman zaman rahatsız edici, gereksiz ya da tuhaf düşünceler geçebilir. OKB açısından belirleyici olan çoğu zaman düşüncenin gelmesi değil, düşünceye verilen anlam ve ardından gelen davranış döngüsüdür.', M, y, size=10.6, leading=15)
    x1, x2 = M, W / 2 + 10
    y0 = 590
    box(x1, 150, 236, 430, fill=PALE)
    box(x2, 150, 236, 430, fill=LIGHT)
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 13)
    c.drawString(x1 + 16, y0, 'Normal düşünceler')
    c.drawString(x2 + 16, y0, 'OKB düşünceleri')
    left = [
        'Kısa süre zihne gelir ve uzaklaşabilir.',
        'Kişi düşünceyi fazla önemsemeyebilir.',
        'Kesinlik arayışı genellikle belirgin değildir.',
        'Davranışları uzun süre yönetmez.',
        'Kişi düşünceyle mücadele etmek zorunda hissetmeyebilir.'
    ]
    right = [
        'Tekrar tekrar geri gelebilir.',
        'Tehlikeli, ahlaki ya da çok anlamlı yorumlanabilir.',
        'Kişi yüzde yüz emin olmaya çalışabilir.',
        'Kontrol, kaçınma veya güvence isteme davranışları doğurabilir.',
        'Düşünceyi uzaklaştırma çabası düşünceyi daha da güçlendirebilir.'
    ]
    yy = y0 - 34
    for item in left:
        checkbox(x1 + 16, yy - 3, 8)
        yy = para(item, x1 + 32, yy, 190, size=9.2, leading=12.3, color=INK)
        yy -= 11
    yy = y0 - 34
    for item in right:
        checkbox(x2 + 16, yy - 3, 8)
        yy = para(item, x2 + 32, yy, 190, size=9.2, leading=12.3, color=INK)
        yy -= 11
    note_box('Kısa ölçüt', 'Düşünce günlük yaşamı belirgin etkiliyor, tekrar eden davranışlara yol açıyor ve kişi düşünceyle yoğun mücadele ediyorsa değerlendirme yararlı olabilir.', M, 74, 500, 62)
    footer(4)
    c.showPage()


def page5():
    y = title('En sık görülen obsesyon alanları', CONTENT_TOP)
    areas = [
        ('Bulaş', 'Mikrop, kir, hastalık veya temasla ilgili yoğun şüphe.'),
        ('Kontrol', 'Kapı, ocak, priz, mesaj veya hata yapma ihtimali.'),
        ('Simetri', 'Eşyaların aynı hizada, tam veya dengeli olması ihtiyacı.'),
        ('Dini içerikler', 'Kişinin değerleriyle çelişen rahatsız edici düşünceler.'),
        ('Cinsel içerikler', 'İstenmeyen, suçluluk ve kaygı yaratan zihinsel içerikler.'),
        ('Zarar verme korkusu', 'Kendine ya da başkasına istemeden zarar verme kaygısı.'),
        ("İlişki OKB'si", 'İlişkinin doğruluğu veya duyguların gerçekliğiyle ilgili şüphe.'),
        ('Sağlık obsesyonları', 'Bedensel belirtileri tehlikeli hastalık işareti gibi yorumlama.'),
        ('Mükemmeliyetçilik', 'Eksik, yanlış veya yeterince iyi olmama düşüncesi.')
    ]
    x_positions = [M, M + 172, M + 344]
    y0 = 640
    for i, (h, t) in enumerate(areas):
        x = x_positions[i % 3]
        yy = y0 - (i // 3) * 150
        box(x, yy - 118, 150, 118, fill=PALE if i % 2 else LIGHT, stroke=LINE)
        c.setFillColor(BLUE)
        c.circle(x + 20, yy - 24, 12, fill=1, stroke=0)
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 10.5)
        c.drawString(x + 38, yy - 29, h)
        para(t, x + 16, yy - 52, 118, size=8.4, leading=10.8, color=INK)
    footer(5)
    c.showPage()


def page6():
    y = title('En sık görülen kompulsiyonlar', CONTENT_TOP)
    items = [
        ('Kontrol etme', 'Kapı, ocak, priz, mesaj, dosya veya bedensel belirtiyi tekrar tekrar kontrol etmek.'),
        ('Tekrar okuma', 'Bir cümleyi veya mesajı hata yapmadığından emin olmak için defalarca okumak.'),
        ('Tekrar sorma', 'Yakınlardan ya da uzmanlardan aynı konuda güvence istemek.'),
        ('Google araştırması', 'Kısa süreli rahatlamak için belirtileri veya düşünceleri internette aramak.'),
        ('İçinden tekrar etme', 'Rahatsız edici düşünceyi nötrlemek için zihinsel cümleler kurmak.'),
        ('Dua etme / sayma', 'Kaygıyı azaltmak için belli sayıda dua, sayı ya da zihinsel işlem yapmak.'),
        ('Temizlik', 'Kirlenme hissini azaltmak için yıkama, silme veya değiştirme davranışları.'),
        ('Kaçınma', 'Tetikleyici olabilecek kişi, yer, nesne veya konulardan uzak durmak.'),
        ('Güvence isteme', 'Kendi kararına dayanmak yerine rahatlamayı dış onayla sağlamaya çalışmak.')
    ]
    for i, (h, t) in enumerate(items):
        x = M if i % 2 == 0 else W / 2 + 10
        yy = 650 - (i // 2) * 112
        box(x, yy - 84, 236, 76, fill=PALE if i % 2 else LIGHT, stroke=LINE)
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 10.5)
        c.drawString(x + 14, yy - 28, h)
        para(t, x + 14, yy - 45, 206, size=8.2, leading=10.2, color=MUTED)
    footer(6)
    c.showPage()


def page7():
    y = title('Günlük OKB kayıt sayfası', CONTENT_TOP)
    para('Bu sayfa çoğaltılarak kullanılabilir. Amaç kusursuz kayıt tutmak değil, döngünün hangi noktalarda güçlendiğini fark etmektir.', M, y, size=10.2, leading=14)
    cols = [('Tarih', 44), ('Tetikleyici', 78), ('Obsesyon', 78), ('Kaygı', 44), ('Kompulsiyon', 86), ('Süre', 48), ('Erteledim mi?', 72), ('Sonuç', 74)]
    x0, y0, row_h = 36, 606, 58
    total = sum(w for _, w in cols)
    c.setFillColor(LIGHT)
    c.rect(x0, y0, total, 42, fill=1, stroke=1)
    xx = x0
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 6.9)
    for name, w in cols:
        c.drawCentredString(xx + w / 2, y0 + 24, name)
        c.line(xx, y0 + 42, xx, y0 - row_h * 7)
        xx += w
    c.line(xx, y0 + 42, xx, y0 - row_h * 7)
    for r in range(7):
        yy = y0 - row_h * (r + 1)
        c.setFillColor(WHITE if r % 2 == 0 else PALE)
        c.rect(x0, yy, total, row_h, fill=1, stroke=1)
    footer(7)
    c.showPage()


def page8():
    y = title('Güvence arama davranışları', CONTENT_TOP)
    text = [
        'Güvence arama, OKB döngüsünde çoğu zaman fark edilmeden yerleşen davranışlardan biridir. Kişi yoğun kaygı yaşadığında birinden “bir şey olmaz”, “böyle biri değilsin”, “hata yapmadın” ya da “bu tehlikeli değil” cevabını duymak isteyebilir. Bu cevap ilk anda rahatlatıcıdır. Fakat rahatlama çoğu zaman kısa sürer ve zihin bir süre sonra aynı soruyu yeniden üretir.',
        'Güvence arama yalnızca yakınlara soru sormak değildir. İnternette tekrar tekrar araştırma yapmak, doktora benzer sorularla yeniden gitmek, geçmişte ne yaptığını hatırlamaya çalışmak, mesajları tekrar kontrol etmek veya kendi hafızasını sorgulamak da güvence arama davranışına dönüşebilir. Kişi bunları kesinliğe ulaşmak için yapar; ancak OKB çoğu zaman kesinliği kabul etmekte zorlanır.',
        'Bu davranışlar kısa süreli rahatlama sağladığı için beyin tarafından güçlü biçimde öğrenilir. Zihin şunu kaydedebilir: “Rahatlamam için sormalıyım, araştırmalıyım, kontrol etmeliyim.” Böylece bir sonraki obsesyon geldiğinde kişi yeniden aynı yola yönelir. Uzun vadede kişinin kendi belirsizliğe dayanma kapasitesi zayıflayabilir.',
        'Güvence aramayı fark etmek, kişinin kendisini suçlaması için değil, döngüyü anlaması içindir. Amaç bir anda bütün soruları kesmek olmayabilir. Bazen ilk adım, “Şu anda gerçekten bilgi mi arıyorum, yoksa kaygımı kısa süreli azaltmaya mı çalışıyorum?” sorusunu sormaktır. Bu ayrım terapi sürecinde oldukça değerlidir.',
        'Küçük geciktirmeler yardımcı olabilir. Sormadan önce beş dakika beklemek, internet aramasını ertelemek veya önce kaygı puanını yazmak döngüye küçük bir mesafe koyabilir. Bu mesafe büyüdükçe kişi her düşünceye hemen cevap vermek zorunda olmadığını deneyimlemeye başlayabilir.'
    ]
    for p in text:
        y = para(p, M, y, size=10.8, leading=15.4)
        y -= 10
    footer(8)
    c.showPage()


def page9():
    y = title('Kaçınmalar', CONTENT_TOP)
    text = [
        'Kaçınma, kaygı veren durumla karşılaşmamak için yapılan uzak durma davranışıdır. OKB’de kaçınma bazen çok görünürdür: kirli olduğu düşünülen bir yere gitmemek, kapıya dokunmamak, belirli kelimeleri söylememek, bıçak gibi nesnelere yaklaşmamak veya sağlıkla ilgili haberleri okumamak gibi. Bazen de daha sessizdir; kişi yalnız kalmaktan, karar vermekten, mesaj yazmaktan ya da sevdiği insanlarla bazı konuları konuşmaktan kaçınabilir.',
        'Kaçınma kısa vadede rahatlatır. Tetikleyiciyle karşılaşılmadığında kaygı yükselmez gibi görünür. Fakat uzun vadede zihin o durumu daha tehlikeli olarak kaydedebilir. Kişi kaçındıkça yaşam alanı daralabilir ve daha fazla durum riskli görünmeye başlayabilir.',
        'Kaçınma her zaman “korkaklık” ya da “istememek” değildir. Çoğu zaman kişinin yoğun kaygıyla baş etmeye çalışırken bulduğu anlaşılabilir bir yoldur. Bu nedenle kaçınmayı fark ederken yargılayıcı olmamak önemlidir. Amaç kendini zorla tehlikeye atmak değil, güvenli ve planlı biçimde yaşam alanını yeniden genişletmektir.',
        'Örneğin kişi bir nesneye dokunmaktan kaçınıyorsa, ilk hedef doğrudan en zor duruma atlamak olmayabilir. Daha küçük, ölçülebilir ve takip edilebilir adımlar belirlenebilir. Bu adımlar uzman desteğiyle planlandığında daha güvenli ilerler. Defterdeki kayıtlar, hangi kaçınmaların sıklaştığını ve hangi küçük adımların denenebileceğini görmeye yardımcı olur.'
    ]
    for p in text:
        y = para(p, M, y, size=11, leading=15.8)
        y -= 12
    examples = [('Gitmemek', 'Tetikleyici ortamdan uzak kalmak'), ('Dokunmamak', 'Kirlenme veya zarar korkusuyla temas etmemek'), ('Söylememek', 'Yanlış anlaşılma veya kötü düşünce korkusuyla konuşmamak'), ('Bakmamak', 'Görüntü veya haberlerden kaçınmak'), ('Yapmamak', 'Hata ihtimali nedeniyle günlük işleri ertelemek')]
    x = M
    yy = 206
    for h, t in examples:
        box(x, yy - 72, 92, 66, fill=LIGHT, stroke=LINE)
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 8.8)
        c.drawCentredString(x + 46, yy - 24, h)
        para(t, x + 10, yy - 42, 72, size=6.6, leading=8, color=MUTED)
        x += 100
    footer(9)
    c.showPage()


def page10():
    y = title('Maruz bırakma ilerleme sayfası', CONTENT_TOP)
    para('Bu sayfa profesyonel destekle planlanan maruz bırakma çalışmalarında ilerlemeyi görmek için kullanılabilir. Hedefler küçük, ölçülebilir ve güvenli biçimde belirlenmelidir.', M, y, size=10.4, leading=14.5)
    cols = [('Hedef davranış', 112), ('Kaygı puanı', 70), ('İlk deneme', 78), ('İkinci deneme', 82), ('Üçüncü deneme', 86), ('Notlar', 96)]
    x0, y0, row_h = 36, 604, 66
    total = sum(w for _, w in cols)
    c.setFillColor(LIGHT)
    c.rect(x0, y0, total, 42, fill=1, stroke=1)
    xx = x0
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 7.2)
    for name, w in cols:
        c.drawCentredString(xx + w / 2, y0 + 24, name)
        c.line(xx, y0 + 42, xx, y0 - row_h * 6)
        xx += w
    c.line(xx, y0 + 42, xx, y0 - row_h * 6)
    for r in range(6):
        yy = y0 - row_h * (r + 1)
        c.setFillColor(WHITE if r % 2 == 0 else PALE)
        c.rect(x0, yy, total, row_h, fill=1, stroke=1)
    footer(10)
    c.showPage()


def page11():
    y = title('Haftalık değerlendirme', CONTENT_TOP)
    fields = [
        'Bu hafta en sık gelen obsesyon',
        'En zorlandığım davranış',
        'En başarılı olduğum nokta',
        'Kendimle ilgili fark ettiğim şey',
        'Önümüzdeki haftanın hedefi'
    ]
    yy = 650
    for field in fields:
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 11)
        c.drawString(M, yy, field)
        box(M, yy - 96, 500, 76, fill=WHITE, stroke=LINE, radius=8)
        yy -= 116
    footer(11)
    c.showPage()


def page12():
    y = title('Yapmamaya çalışacağım davranışlar', CONTENT_TOP)
    para('Aşağıdaki liste kişisel takip için hazırlanmıştır. Her maddeyi tamamen bırakmak zorunda değilsiniz; bazen yalnızca geciktirmek bile önemli bir adımdır.', M, y, size=10.4, leading=14.5)
    items = ['Aynı soruyu tekrar tekrar sormak', 'Nabız, beden veya hafızayı sürekli kontrol etmek', 'Google’da belirti veya düşünce araştırmak', 'Kapı, ocak, priz veya mesajı tekrar tekrar kontrol etmek', 'Rahatlamak için zihinsel cümleler kurmak', 'Belirsizlik oluştuğunda hemen karar değiştirmek', 'Kaygı veren nesne veya kişilerden sürekli kaçınmak', 'Her düşünceye cevap bulmaya çalışmak', 'Sosyal ortamlarda kendimi aşırı izlemek', 'Hata ihtimali nedeniyle işi ertelemek', 'Düşünce geldi diye kendimi yargılamak', 'Kompulsiyonu yaptıktan sonra yeni kontrol başlatmak']
    yy = 610
    for i, item in enumerate(items):
        x = M if i < 6 else W / 2 + 12
        if i == 6:
            yy = 610
        box(x, yy - 28, 232, 36, fill=PALE if i % 2 else WHITE, stroke=LINE, radius=6)
        checkbox(x + 12, yy - 15, 10)
        para(item, x + 30, yy - 8, 188, size=8.5, leading=10, color=INK)
        yy -= 54
    footer(12)
    c.showPage()


def page13():
    y = title('Kendime hatırlatmalar', CONTENT_TOP)
    para('Bu kartı kesip çalışma masanızda, cüzdanınızda veya defterinizin arasında taşıyabilirsiniz.', M, y, size=10.7, leading=15)
    card_w, card_h = 380, 260
    x, yy = W / 2 - card_w / 2, 250
    c.setDash(5, 3)
    c.setStrokeColor(BLUE)
    c.roundRect(x - 10, yy - 10, card_w + 20, card_h + 20, 14, fill=0, stroke=1)
    c.setDash()
    box(x, yy, card_w, card_h, fill=WHITE, stroke=NAVY, radius=16)
    c.setFillColor(NAVY)
    c.setFont('Georgia-Bold', 16)
    c.drawCentredString(W / 2, yy + card_h - 42, 'Kendime Hatırlatmalar')
    lines = ['Her düşünce gerçek değildir.', 'Her düşünceye cevap vermem gerekmiyor.', 'Kaygı zamanla azalabilir.', 'Belirsizlik hayatın bir parçasıdır.', 'Bugün küçük bir adım atmam yeterli.']
    ty = yy + card_h - 82
    c.setFont('Arial-Bold', 11.5)
    c.setFillColor(INK)
    for line in lines:
        c.drawCentredString(W / 2, ty, line)
        ty -= 30
    c.setFillColor(MUTED)
    c.setFont('Arial', 8)
    c.drawCentredString(W / 2, yy + 18, 'www.ozgurozbebit.com.tr')
    footer(13)
    c.showPage()


def page14():
    y = title('Sık Sorulan Sorular', CONTENT_TOP)
    faqs = [
        ('OKB tamamen geçer mi?', 'Belirtiler birçok kişide belirgin azalabilir ve yönetilebilir hale gelebilir. Süreç kişiye göre değişir.'),
        ('Düşünmek istemedikçe neden daha çok düşünüyorum?', 'Bir düşünceyi zorla bastırmaya çalışmak zihnin onu daha sık kontrol etmesine neden olabilir.'),
        ('Kompulsiyonu yapmazsam ne olur?', 'Kaygı önce artabilir; fakat zamanla azalabildiğini deneyimlemek tedavide önemli olabilir.'),
        ('Belirsizliğe alışmak mümkün mü?', 'Evet, küçük ve planlı adımlarla belirsizliğe dayanma kapasitesi güçlenebilir.'),
        ('İlaç herkes için gerekli midir?', 'Hayır. Tedavi planı belirtilere, şiddete, eşlik eden durumlara ve kişisel ihtiyaca göre belirlenir.'),
        ('Zihinsel ritüeller kompulsiyon sayılır mı?', 'Evet. İçinden tekrar etme, nötrleme veya kendini ikna etme davranışları kompulsiyon olabilir.'),
        ('Güvence istemek neden sorun olur?', 'Kısa süre rahatlatır; ancak uzun vadede kaygıya dayanma becerisini zayıflatabilir.'),
        ('OKB düşünceleri beni tanımlar mı?', 'Hayır. Zihne gelen düşünceler kişinin kimliğini veya niyetini tek başına belirlemez.'),
        ('Kayıt tutmak kaygıyı artırır mı?', 'Bazı kişilerde ilk anda zorlayabilir; amaç ayrıntıya saplanmak değil örüntüyü fark etmektir.'),
        ('Kaçınmayı bir anda bırakmalı mıyım?', 'Genellikle küçük, planlı ve güvenli adımlar daha uygundur. Uzman desteği önemlidir.'),
        ('Ailem nasıl destek olabilir?', 'Sürekli güvence vermek yerine süreci anlamaya ve tedavi planına uygun destek vermeye çalışabilir.'),
        ('Ne zaman yardım almalıyım?', 'Belirtiler zaman alıyor, ilişkileri veya işlevselliği etkiliyorsa profesyonel değerlendirme yararlıdır.')
    ]
    col_x = [M, W / 2 + 12]
    col_y = [y, y]
    for idx, (q, a) in enumerate(faqs):
        col = 0 if idx < 6 else 1
        x = col_x[col]
        yy = col_y[col]
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 8.9)
        c.drawString(x, yy, q)
        yy = para(a, x, yy - 13, width=232, size=7.75, leading=10.3, color=MUTED)
        yy -= 9
        col_y[col] = yy
    footer(14)
    c.showPage()


def page15():
    y = title('Kendi gelişimimi görmek', CONTENT_TOP)
    para('Aşağıdaki grafikler tanı veya puanlama aracı değildir. Amaç aylar içinde değişimi görsel olarak takip edebilmektir.', M, y, size=10.5, leading=14.5)
    charts = [('Kaygı puanı', 570), ('Kompulsiyon sıklığı', 380), ('Kaçınma davranışları', 190)]
    months = ['1', '2', '3', '4', '5', '6']
    for label, yy in charts:
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 11)
        c.drawString(M, yy + 74, label)
        c.setStrokeColor(LINE)
        c.setLineWidth(0.8)
        c.rect(M, yy, 500, 58, fill=0, stroke=1)
        for i in range(1, 6):
            c.line(M, yy + i * 9.6, M + 500, yy + i * 9.6)
        for i, m in enumerate(months):
            x = M + 45 + i * 78
            c.line(x, yy, x, yy + 58)
            c.setFillColor(MUTED)
            c.setFont('Arial', 8)
            c.drawCentredString(x, yy - 14, f'Ay {m}')
        c.setFillColor(MUTED)
        c.setFont('Arial', 7)
        c.drawRightString(M - 6, yy + 54, '10')
        c.drawRightString(M - 6, yy + 2, '0')
    footer(15)
    c.showPage()


def page16():
    y = title('Son söz', CONTENT_TOP)
    text = [
        "OKB kişinin karakteri değildir. Zihne gelen düşünceler, kişinin kim olduğunu, ne istediğini ya da nasıl biri olduğunu tek başına belirlemez. OKB çoğu zaman kişinin değer verdiği alanlara yapışır; önem verilen şeyler üzerinden şüphe ve kaygı üretir. Bu nedenle kişinin kendisini düşüncelerinden ibaret görmemesi çok önemlidir.",
        "Değişim çoğu zaman büyük kararlarla değil, küçük ve tekrarlanabilir adımlarla başlar. Bir kompulsiyonu tamamen bırakmak ilk aşamada mümkün olmayabilir; ama onu birkaç dakika ertelemek, kaygı puanını yazmak veya güvence istemeden önce durup gözlem yapmak bile anlamlı bir adımdır. Her küçük adım, kişinin döngüyle arasına mesafe koymasına yardımcı olabilir.",
        "Her gün aynı performans beklenmemelidir. Bazı günler daha kolay, bazı günler daha zor olabilir. Stres, yorgunluk, uykusuzluk veya yaşam olayları belirtileri artırabilir. Bu dalgalanmalar başarısızlık anlamına gelmez. Sürecin parçası olarak ele alındığında kişi kendisine daha adil davranabilir.",
        "Kendine karşı sabırlı olmak, OKB ile çalışmanın önemli bir parçasıdır. Yargılayıcı bir iç ses çoğu zaman kaygıyı artırır. Daha sakin bir yaklaşım ise kişinin belirtilerini saklamadan, büyütmeden ve küçümsemeden ele almasına yardımcı olur. Bu defterin amacı da tam olarak budur: olup biteni görünür kılmak, örüntüleri fark etmek ve gerekirse profesyonel destekle daha düzenli bir çalışma zemini oluşturmaktır.",
        "Unutulmamalıdır ki yardım istemek zayıflık değildir. Kişinin kendi zihinsel yükünü anlamaya çalışması, ruhsal sağlığına sahip çıkması anlamına gelir. OKB anlaşılabilir, takip edilebilir ve uygun destekle yönetilebilir bir süreçtir."
    ]
    for p in text:
        y = para(p, M, y, size=10.8, leading=15.3)
        y -= 9
    box(M, 78, 500, 62, fill=LIGHT, stroke=LINE)
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 10.2)
    c.drawString(M + 16, 116, 'Bu çalışma genel bilgilendirme amacıyla hazırlanmıştır.')
    c.drawString(M + 16, 96, 'Tanı ve tedavinin yerine geçmez.')
    footer(16)
    c.showPage()


for func in [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16]:
    func()

c.save()
print(OUT)
