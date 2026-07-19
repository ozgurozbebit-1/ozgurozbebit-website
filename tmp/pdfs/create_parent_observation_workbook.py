from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from pathlib import Path

OUT = Path('output/pdf/cocugumu-daha-iyi-anliyorum.pdf')
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
SOFT = colors.HexColor('#f2f7fa')
INK = colors.HexColor('#22333b')
MUTED = colors.HexColor('#5d6e78')
LINE = colors.HexColor('#c9dce8')
WHITE = colors.white

c = canvas.Canvas(str(OUT), pagesize=A4)
c.setTitle('Çocuğumu Daha İyi Anlıyorum')
c.setAuthor('Dr. Özgür Özbebit')
c.setSubject('Psikoeğitim Serisi No: 4 - Ebeveyn gözlem ve fark etme defteri')
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
    words, lines, line = text.split(), [], ''
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


def para(text, x, y, width=500, size=10.5, leading=14.9, font='Arial', color=MUTED):
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
    c.drawImage(ImageReader(str(LOGO)), x, y, size, size, mask='auto')
    c.restoreState()


def lined_area(x, y, w, h, gap=18):
    box(x, y, w, h, fill=WHITE, stroke=LINE, radius=8)
    c.setStrokeColor(colors.HexColor('#d9e7ef'))
    yy = y + h - 24
    while yy > y + 14:
        c.line(x + 14, yy, x + w - 14, yy)
        yy -= gap


def page1():
    c.setFillColor(WHITE)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(colors.HexColor('#0f2a45'))
    c.circle(W * 0.83, H * 0.18, 182, fill=1, stroke=0)
    c.setFillColor(colors.HexColor('#214966'))
    c.circle(W * 0.16, H * 0.88, 120, fill=1, stroke=0)
    draw_round_logo(W / 2 - 54, H - 184, 108)
    c.setFillColor(BLUE)
    c.setFont('Arial-Bold', 12)
    c.drawCentredString(W / 2, H - 226, 'Psikoeğitim Serisi No: 4')
    c.setFillColor(WHITE)
    c.setFont('Georgia-Bold', 31)
    c.drawCentredString(W / 2, H - 286, 'Çocuğumu Daha')
    c.drawCentredString(W / 2, H - 324, 'İyi Anlıyorum')
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(W / 2 - 96, H - 348, W / 2 + 96, H - 348)
    c.setFont('Arial', 13)
    c.setFillColor(colors.HexColor('#dbeaf4'))
    c.drawCentredString(W / 2, H - 382, 'Ebeveyn Gözlem ve Fark Etme Defteri')
    c.setFont('Arial-Bold', 14)
    c.setFillColor(WHITE)
    c.drawCentredString(W / 2, 156, 'Dr. Özgür Özbebit')
    c.setFont('Arial', 12)
    c.drawCentredString(W / 2, 134, 'Psikiyatrist')
    c.setFont('Arial', 10)
    c.drawCentredString(W / 2, 102, 'www.ozgurozbebit.com.tr')
    c.showPage()


def page2():
    y = title('Bu defter neden hazırlandı?', CONTENT_TOP)
    text = [
        'Çocukların davranışları çoğu zaman yalnızca dışarıdan görünen hareketlerden ibaret değildir. Ağlamak, bağırmak, içe kapanmak, ödevden kaçınmak, kardeşiyle tartışmak ya da sürekli ilgi istemek ilk bakışta sorun davranış gibi görünebilir. Oysa birçok davranış, çocuğun henüz kelimelere dökemediği bir ihtiyacın, duygunun ya da zorlanmanın işareti olabilir.',
        'Aynı davranış farklı çocuklarda farklı anlamlar taşıyabilir. Bir çocuk oyuncağı elinden alındığında öfkelendiği için ağlayabilir; başka bir çocuk aynı durumda yorgun olduğu, aç olduğu, görülmek istediği ya da geçiş yapmakta zorlandığı için benzer tepki verebilir. Bu nedenle davranışı tek başına değerlendirmek çoğu zaman eksik kalır. Davranışın öncesinde ne olduğu, nerede yaşandığı, kimin yanında ortaya çıktığı ve sonrasında ne olduğu birlikte düşünülmelidir.',
        'Bu defterin amacı çocuğa etiket koymak değildir. “İnatçı”, “şımarık”, “saygısız” ya da “tembel” gibi kelimeler bazen ebeveynin çaresizliğini anlatır; fakat çocuğun iç dünyasını anlamaya her zaman yardım etmez. Daha yararlı soru çoğu zaman şudur: “Bu davranış bana ne anlatıyor olabilir?” Bu soru, ebeveyni suçlamadan ve çocuğu damgalamadan daha dikkatli bir gözlem alanı açar.',
        'Ebeveynlikte en zor anlardan biri, davranışın tam ortasında sakin kalabilmektir. Çocuk ağlarken, bağırırken ya da karşı geldiğinde yetişkinin kendi duyguları da hızla yükselebilir. Bu çok insani bir durumdur. Bu defter yalnızca çocuğu değil, ebeveynin kendi tepkisini de fark etmesine yardımcı olmak için hazırlanmıştır.',
        'Düzenli gözlem, zamanla örüntüleri görünür hale getirir. Belki bazı davranışlar hep akşam saatlerinde artıyordur. Belki geçiş anları daha zordur. Belki çocuk okuldan geldiğinde daha hassastır. Belki ebeveyn yorgunken tepki daha hızlı yükseliyordur. Bunları görmek, değişim için küçük ama güçlü bir başlangıçtır.',
        'Bu çalışma aile danışmanlığı sürecinde, ebeveyn-çocuk görüşmelerinde ya da kişisel farkındalık amacıyla kullanılabilir. Amaç kusursuz kayıt tutmak değil, davranışın arkasındaki çocuğu görebilmeyi biraz daha kolaylaştırmaktır.'
    ]
    for p in text:
        y = para(p, M, y, size=10.25, leading=14.5)
        y -= 7
    note_box('Kısa hatırlatma', 'Bazen çocuklar anlatamaz; davranışları anlatır.', M, 82, 500, 66)
    footer(2)
    c.showPage()


def page3():
    y = title('Davranışın görünmeyen kısmı', CONTENT_TOP)
    # Iceberg
    c.setFillColor(LIGHT)
    c.setStrokeColor(BLUE)
    c.setLineWidth(1)
    c.roundRect(208, 590, 180, 52, 12, fill=1, stroke=1)
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 14)
    c.drawCentredString(W / 2, 610, 'Davranış')
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.4)
    c.line(138, 570, 458, 570)
    c.setFillColor(MUTED)
    c.setFont('Arial-Italic', 8)
    c.drawCentredString(W / 2, 556, 'Görünen alan')
    c.setFillColor(PALE)
    c.setStrokeColor(LINE)
    path = c.beginPath()
    path.moveTo(W / 2, 520)
    path.lineTo(174, 270)
    path.lineTo(422, 270)
    path.close()
    c.drawPath(path, fill=1, stroke=1)
    inner = ['Duygu', 'İhtiyaç', 'Kaygı', 'Hayal kırıklığı', 'Yorgunluk', 'Kıskançlık', 'Bağ kurma ihtiyacı', 'Güvende hissetme isteği']
    yy = 488
    for item in inner:
        c.setFillColor(NAVY if yy > 390 else MUTED)
        c.setFont('Arial-Bold' if yy > 390 else 'Arial', 9.2)
        c.drawCentredString(W / 2, yy, item)
        yy -= 27
    text = ('Buzdağı benzetmesi, çocuk davranışlarını anlamada çok işe yarar. Su üstünde görünen kısım davranıştır: ağlama, bağırma, vurma, içine kapanma, karşı gelme ya da sürekli ilgi isteme. Fakat suyun altında çoğu zaman duygular, ihtiyaçlar, kaygılar ve yorgunluk bulunur. Ebeveyn yalnızca görünen davranışa odaklandığında tepki çoğu zaman davranışı durdurmaya yönelir. Oysa davranışın altında ne olabileceğini merak etmek, çocuğun kendisini daha anlaşılmış hissetmesine yardım edebilir. Bu, davranışı onaylamak anlamına gelmez. Sınırlar yine gerekli olabilir. Ancak sınır koyarken çocuğun duygusunu da görebilmek ilişkinin tonunu değiştirir.')
    para(text, M, 210, width=500, size=10.2, leading=14.5)
    footer(3)
    c.showPage()


def page4():
    y = title('Gözlem yaparken nelere dikkat edilmeli?', CONTENT_TOP, size=23)
    para('Gözlem, yorumdan farklıdır. Yorum çoğu zaman davranışa anlam yükler; gözlem ise mümkün olduğunca görüleni ve duyulanı tarif eder. Bu ayrım ebeveynin daha sakin ve gerçekçi değerlendirme yapmasına yardım eder.', M, y, size=10.4, leading=14.5)
    y = 604
    c.setFont('Arial-Bold', 12)
    c.setFillColor(NAVY)
    c.drawString(M, y, 'Yorum')
    c.drawString(W / 2 + 16, y, 'Gözlem')
    rows = [
        ('İnat etti.', 'Oyuncağı bırakınca ağladı.', 'İlk cümle çocuğu etiketler; ikinci cümle ne olduğunu tarif eder.'),
        ('Şımardı.', 'İstediği olmayınca yere oturdu.', 'Davranışı tanımlamak, ihtiyacı anlamaya daha fazla alan açar.'),
        ('Saygısız.', 'Göz temasını kesip odasına gitti.', 'Gözlem, yetişkinin daha az savunmaya geçmesine yardımcı olabilir.'),
        ('Tembel.', 'Ödeve başlamadan önce uzun süre masada bekledi.', 'Bu ifade dikkat, kaygı veya zorlanmayı değerlendirmeye imkan verir.'),
        ('Kardeşini kıskanıyor.', 'Ben kardeşiyle ilgilenirken sesini yükseltti.', 'Yorum doğru olabilir; ama önce görünen örüntüyü kaydetmek önemlidir.')
    ]
    y -= 18
    for a, b, n in rows:
        box(M, y - 64, 500, 58, fill=PALE, stroke=LINE)
        row_label_y = y - 31
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 9.8)
        c.drawString(M + 12, row_label_y, a)
        c.setFillColor(BLUE)
        c.drawCentredString(W / 2, row_label_y, '→')
        c.setFillColor(NAVY)
        c.drawString(W / 2 + 16, row_label_y, b)
        para(n, M + 12, y - 48, width=476, size=8.2, leading=10.2, color=MUTED)
        y -= 72
    footer(4)
    c.showPage()


def page5():
    y = title('Davranış kayıt sayfası', CONTENT_TOP)
    para('Bu sayfa çoğaltılarak kullanılabilir. Kayıt tutarken amacınız kanıt toplamak değil, örüntüleri fark etmektir.', M, y, size=10.2, leading=14)
    cols = [('Tarih', 52), ('Saat', 44), ('Nerede?', 70), ('Öncesi', 104), ('Davranış', 92), ('Sonrası', 78), ('Benim tepkim', 104)]
    x0, y0, row_h = 36, 610, 62
    total = sum(w for _, w in cols)
    c.setFillColor(LIGHT)
    c.rect(x0, y0, total, 42, fill=1, stroke=1)
    xx = x0
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 7.2)
    for name, w in cols:
        c.drawCentredString(xx + w / 2, y0 + 24, name)
        c.line(xx, y0 + 42, xx, y0 - row_h * 7)
        xx += w
    c.line(xx, y0 + 42, xx, y0 - row_h * 7)
    for r in range(7):
        yy = y0 - row_h * (r + 1)
        c.setFillColor(WHITE if r % 2 == 0 else PALE)
        c.rect(x0, yy, total, row_h, fill=1, stroke=1)
    footer(5)
    c.showPage()


def page6():
    y = title('Duyguyu tahmin etmeye çalışmak', CONTENT_TOP)
    emotions = [
        ('Mutluluk', 'Paylaşma, yaklaşma ve oyun isteğiyle görülebilir.'),
        ('Üzüntü', 'Sessizleşme, ağlama veya ilgisizlik şeklinde çıkabilir.'),
        ('Kaygı', 'Sorular, erteleme, huzursuzluk veya bedensel yakınmalarla görülebilir.'),
        ('Utanç', 'Göz temasından kaçınma, saklanma veya konuyu değiştirme olabilir.'),
        ('Korku', 'Yakına gelme, donakalma, ağlama veya kaçınma davranışı doğurabilir.'),
        ('Hayal kırıklığı', 'İstediği olmayınca çökme, öfke veya vazgeçme görülebilir.'),
        ('Öfke', 'Sınır, engellenme veya anlaşılmama hissiyle yükselebilir.'),
        ('Heyecan', 'Hareketlilik, hızlı konuşma veya sabırsızlık olarak görünebilir.')
    ]
    for i, (h, t) in enumerate(emotions):
        x = M if i % 2 == 0 else W / 2 + 10
        yy = 650 - (i // 2) * 128
        box(x, yy - 96, 236, 82, fill=LIGHT if i % 2 == 0 else PALE, stroke=LINE)
        c.setFillColor(BLUE)
        c.circle(x + 22, yy - 35, 13, fill=1, stroke=0)
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 10.8)
        c.drawString(x + 44, yy - 32, h)
        para(t, x + 18, yy - 56, 200, size=8.3, leading=10.6, color=MUTED)
    footer(6)
    c.showPage()


def page7():
    y = title('Çocuğum bugün bana ne anlatmaya çalışıyordu?', CONTENT_TOP, size=22)
    para('Bu sayfayı serbest gözlem alanı olarak kullanabilirsiniz. Cevabı hemen bulmak zorunda değilsiniz; bazen yalnızca merak etmek bile ilişkiye yeni bir kapı açar.', M, y, size=10.4, leading=14.5)
    fields = ['Bugün dikkatimi çeken davranış', 'Bu davranışın öncesinde ne vardı?', 'Çocuğum hangi duyguyu yaşıyor olabilir?', 'Hangi ihtiyacı anlatıyor olabilir?', 'Bir sonraki sefer nasıl yaklaşmayı deneyebilirim?']
    yy = 600
    for field in fields:
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 10.5)
        c.drawString(M, yy, field)
        lined_area(M, yy - 78, 500, 58, gap=18)
        yy -= 102
    footer(7)
    c.showPage()


def page8():
    y = title('Ben nasıl hissettim?', CONTENT_TOP)
    text = [
        'Çocukların davranışlarını anlamaya çalışırken ebeveynin kendi duygusunu fark etmesi de önemlidir. Çünkü yetişkinin tepkisi çoğu zaman yalnızca çocuğun davranışından değil; o günkü yorgunluğundan, stresinden, geçmiş deneyimlerinden ve o anki beklentilerinden de etkilenir.',
        'Bir çocuk ağladığında ebeveyn çaresizlik hissedebilir. Bir çocuk karşı geldiğinde öfke yükselebilir. Çocuk içine kapandığında kaygı artabilir. Bu duyguların varlığı ebeveynin kötü olduğu anlamına gelmez. Önemli olan, duygunun davranışı nasıl etkilediğini fark edebilmektir.',
        'Kendi duygusunu fark eden ebeveyn, tepki vermeden önce küçük bir duraklama alanı kazanabilir. Bu duraklama, çocuğu daha iyi duymaya ve daha sakin sınır koymaya yardımcı olabilir.'
    ]
    for p in text:
        y = para(p, M, y, size=10.7, leading=15.2)
        y -= 8
    fields = ['O anda hissettiğim duygu', 'Bedenimde fark ettiğim şey', 'Aklımdan geçen düşünce', 'Bir sonraki sefer kendime hatırlatmak istediğim şey']
    yy = 330
    for field in fields:
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 10)
        c.drawString(M, yy, field)
        lined_area(M, yy - 58, 500, 42, gap=16)
        yy -= 78
    footer(8)
    c.showPage()


def page9():
    y = title('Sık görülen davranış örüntüleri', CONTENT_TOP)
    para('Davranışlar bazen tek tek olaylar gibi görünür; fakat zamanla tekrar eden örüntüler oluşturabilir. Bu döngüyü fark etmek değişim için önemli bir başlangıçtır.', M, y, size=10.4, leading=14.5)
    labels = ['Davranış', 'Tetikleyici', 'Yetişkin tepkisi', 'Sonuç', 'Tekrar']
    cx = W / 2
    start = 600
    for i, lab in enumerate(labels):
        yy = start - i * 75
        box(cx - 120, yy - 24, 240, 48, fill=LIGHT if i in (0, 4) else PALE, stroke=BLUE, radius=12)
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 11)
        c.drawCentredString(cx, yy - 4, lab)
        if i < len(labels) - 1:
            c.setStrokeColor(NAVY2)
            c.line(cx, yy - 30, cx, yy - 47)
            c.setFillColor(NAVY2)
            c.circle(cx, yy - 47, 2, fill=1, stroke=0)
    note_box('Örüntü sorusu', 'Bu davranış en çok hangi saatlerde, hangi geçişlerde veya hangi duygusal anlardan sonra ortaya çıkıyor?', M, 102, 500, 70)
    footer(9)
    c.showPage()


def page10():
    y = title('Haftalık gözlem özeti', CONTENT_TOP)
    fields = ['Bu hafta en sık gördüğüm davranış', 'En zorlandığımız zaman dilimi', 'Daha iyi geçen bir an', 'Çocuğumda fark ettiğim ihtiyaç', 'Benim değiştirmek istediğim küçük tepki', 'Gelecek hafta için notum']
    yy = 650
    for field in fields:
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 10.5)
        c.drawString(M, yy, field)
        lined_area(M, yy - 72, 500, 52, gap=16)
        yy -= 94
    footer(10)
    c.showPage()


def page11():
    y = title('Güçlü yönler', CONTENT_TOP)
    para('Zorlandığımız davranışları görmek kadar çocuğun güçlü yönlerini fark etmek de önemlidir. Bu sayfa, yalnızca sorunları değil gelişen becerileri de görünür kılmak için hazırlanmıştır.', M, y, size=10.5, leading=14.8)
    fields = ['Çocuğumun bu hafta başardıkları', 'Fark ettiğim küçük çaba', 'Gurur duyduğum bir davranış', 'Desteklemek istediğim güçlü yön', 'Ona söylemek istediğim olumlu cümle']
    yy = 585
    for field in fields:
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 10.5)
        c.drawString(M, yy, field)
        lined_area(M, yy - 78, 500, 58, gap=18)
        yy -= 104
    footer(11)
    c.showPage()


def page12():
    y = title('Birlikte keyif aldığımız anlar', CONTENT_TOP)
    para('Bu sayfa ilişkiyi güçlendiren anları görünür kılmak için ayrıldı. İsterseniz fotoğraf yapıştırabilir, isterseniz yalnızca kısa bir not yazabilirsiniz.', M, y, size=10.5, leading=14.8)
    box(M, 352, 500, 250, fill=WHITE, stroke=LINE, radius=10)
    c.setStrokeColor(BLUE)
    c.setDash(5, 3)
    c.roundRect(M + 24, 382, 452, 190, 12, fill=0, stroke=1)
    c.setDash()
    c.setFillColor(MUTED)
    c.setFont('Arial-Italic', 11)
    c.drawCentredString(W / 2, 472, 'Fotoğraf yapıştırma alanı')
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 11)
    c.drawString(M, 310, 'Bu an bana ne hissettirdi?')
    lined_area(M, 142, 500, 150, gap=20)
    footer(12)
    c.showPage()


def page13():
    y = title('Davranış yerine ilişkiye odaklanmak', CONTENT_TOP, size=23)
    text = [
        'Ebeveynlikte davranışlar çok görünürdür. Çocuk ağlar, bağırır, karşı gelir, odasına kapanır ya da sürekli ilgi ister. Bu davranışlar yorucu olabilir ve doğal olarak yetişkinin dikkatini hemen çeker. Fakat yalnızca davranışı durdurmaya odaklanmak bazen ilişkinin verdiği mesajı kaçırmamıza neden olabilir.',
        'İlişkiye odaklanmak, sınır koymamak anlamına gelmez. Çocuklara sınır gerekir; fakat sınırın yanında anlaşılma duygusu da gerekir. “Bunu yapmana izin veremem ama şu anda çok zorlandığını görüyorum” cümlesi, hem sınırı hem de bağı aynı anda taşıyabilir. Çocuk her istediğini alamayabilir; ama duygusunun görüldüğünü hissettiğinde sakinleşmesi kolaylaşabilir.',
        'Davranışın arkasındaki çocuğu görmek, ebeveynin daha meraklı bir pozisyonda kalmasına yardım eder. “Beni sinirlendirmek için yapıyor” yerine “Şu anda neye ihtiyacı olabilir?” sorusu ilişkinin yönünü değiştirir. Bu soru çocuğu haklı çıkarmak için değil, yetişkinin daha bilinçli tepki verebilmesi için sorulur.',
        'Bazı davranışlar gerçekten sınır gerektirir. Vurma, zarar verme, güvenliği riske atma ya da sürekli kuralları ihlal etme durumlarında ebeveynin net olması önemlidir. Fakat netlik ile sertlik aynı şey değildir. Sakin, tutarlı ve anlaşılır sınırlar çocuğun güvende hissetmesine yardımcı olur.',
        'Küçük ilişki anları büyük fark oluşturabilir. Gün içinde beş dakikalık gerçek bir dinleme, kısa bir oyun, göz temasıyla verilen bir cevap ya da yatmadan önce sakin bir konuşma çocuğun bağ kurma ihtiyacını destekleyebilir. Bazen davranışın şiddeti, çocuğun daha fazla bağ ve düzen ihtiyacı duyduğunu gösterebilir.',
        'Bu nedenle bu defterde yalnızca zor davranışlara değil, keyifli anlara, güçlü yönlere ve ebeveynin kendi duygularına da yer verildi. Çünkü değişim yalnızca çocuğu düzeltmekle değil, ilişkiyi anlamakla başlar.'
    ]
    for p in text:
        y = para(p, M, y, size=10.45, leading=14.8)
        y -= 7
    footer(13)
    c.showPage()


def page14():
    y = title('Sık Sorulan Sorular', CONTENT_TOP)
    faqs = [
        ('Her davranışın altında bir ihtiyaç mı vardır?', 'Her davranışı tek bir ihtiyaçla açıklamak doğru değildir; ancak birçok davranışın arkasında anlaşılmayı bekleyen bir duygu olabilir.'),
        ('Çocuğumu anlamaya çalışmak şımartır mı?', 'Hayır. Anlamak sınır koymamak değildir. Sınır ve empati birlikte var olabilir.'),
        ('Davranışı görmezden mi gelmeliyim?', 'Hayır. Ama davranışı durdurmadan önce neyin tetiklediğini anlamak daha etkili olabilir.'),
        ('Çocuğum bilerek mi yapıyor?', 'Bazen çocuk davranışının etkisini bilir; bazen de duygusunu düzenlemekte zorlandığı için yapar.'),
        ('Ben öfkelenince kötü ebeveyn mi olurum?', 'Öfke insani bir duygudur. Önemli olan öfkeyi fark edip davranışı düzenleyebilmektir.'),
        ('Kayıt tutmak ne işe yarar?', 'Tekrarlayan saatleri, tetikleyicileri ve yetişkin tepkilerini daha görünür hale getirir.'),
        ('Çocuğuma sınır koyarken neye dikkat etmeliyim?', 'Sınır kısa, net, sakin ve yaşına uygun olmalıdır. Uzun açıklamalar kriz anında işe yaramayabilir.'),
        ('Her ağladığında yanında olmalı mıyım?', 'Yanında olmak her istediğini yapmak değildir. Duyguyu görmek ve sınırı korumak birlikte mümkündür.'),
        ('Kardeş kıskançlığı normal mi?', 'Bir ölçüde normal olabilir. Şiddeti, süresi ve aile işlevini etkileme düzeyi değerlendirilmelidir.'),
        ('Davranış okulda farklıysa ne yapmalıyım?', 'Ev ve okul gözlemleri birlikte düşünülmelidir. Ortamlar farklı ihtiyaçları ortaya çıkarabilir.'),
        ('Ne zaman destek almalıyız?', 'Davranışlar uzun sürüyor, ilişkileri veya okul işlevini belirgin etkiliyorsa uzman görüşü yararlı olabilir.'),
        ('Bu defteri çocuğumla paylaşmalı mıyım?', 'Yaşına ve içeriğe göre bazı bölümler paylaşılabilir; amaç çocuğu sorgulamak değil anlamaktır.')
    ]
    col_x, col_y = [M, W / 2 + 12], [y, y]
    for idx, (q, a) in enumerate(faqs):
        col = 0 if idx < 6 else 1
        x, yy = col_x[col], col_y[col]
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 8.6)
        c.drawString(x, yy, q)
        yy = para(a, x, yy - 13, width=232, size=7.7, leading=10.2, color=MUTED)
        yy -= 9
        col_y[col] = yy
    footer(14)
    c.showPage()


def page15():
    y = title('Ebeveyn kendini değerlendirme', CONTENT_TOP, size=24)
    para('Bu kontrol listesi kendinizi suçlamak için değil, farkındalığınızı artırmak için hazırlanmıştır.', M, y, size=10.3, leading=14.3)
    items = ['Çocuğumun davranışını etiketlemeden tarif etmeye çalıştım.', 'Tepki vermeden önce kısa da olsa durabildim.', 'Kendi duygumu fark etmeye çalıştım.', 'Sınır koyarken ses tonuma dikkat ettim.', 'Çocuğumun güçlü bir yönünü fark ettim.', 'Bugün kısa da olsa bağlantı kuran bir an yarattım.', 'Davranışın öncesinde ne olduğunu düşündüm.', 'Yorgun olduğumda tepkimin değiştiğini fark ettim.', 'Mükemmel ebeveyn olmaya çalışmak yerine küçük bir adım seçtim.', 'Çocuğuma olumlu bir cümle söyledim.', 'Gerektiğinde özür dilemenin ilişkiyi güçlendirebileceğini hatırladım.', 'Destek istemenin zayıflık olmadığını kendime hatırlattım.']
    yy = 610
    for i, item in enumerate(items):
        x = M if i < 6 else W / 2 + 12
        if i == 6:
            yy = 610
        box(x, yy - 28, 232, 36, fill=PALE if i % 2 else WHITE, stroke=LINE, radius=6)
        checkbox(x + 12, yy - 15, 10)
        para(item, x + 30, yy - 8, 188, size=8.2, leading=9.8, color=INK)
        yy -= 54
    footer(15)
    c.showPage()


def page16():
    y = title('Bu hafta denemek istediğim küçük değişiklik', CONTENT_TOP, size=22)
    para('Küçük değişiklikler daha sürdürülebilirdir. Bu hafta yalnızca bir davranışınızı seçip onu biraz farklı yapmayı deneyebilirsiniz.', M, y, size=10.5, leading=14.8)
    fields = ['Denemek istediğim küçük değişiklik', 'Bunu hangi durumda deneyeceğim?', 'Bana zor gelebilecek şey', 'Kendime hatırlatacağım cümle', 'Hafta sonunda fark ettiğim sonuç']
    yy = 600
    for field in fields:
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 10.5)
        c.drawString(M, yy, field)
        lined_area(M, yy - 78, 500, 58, gap=18)
        yy -= 104
    footer(16)
    c.showPage()


def page17():
    y = title('Çocuğuma mektup', CONTENT_TOP)
    c.setFillColor(NAVY)
    c.setFont('Georgia-Bold', 17)
    c.drawString(M, y, 'Bugün sana söylemek istediklerim...')
    lined_area(M, 108, 500, 520, gap=22)
    footer(17)
    c.showPage()


def page18():
    y = title('Son söz', CONTENT_TOP)
    text = [
        'Çocukların davranışlarını anlamaya çalışmak, her davranışı açıklamak ya da her davranışa izin vermek anlamına gelmez. Bazen bir davranış gerçekten sınır gerektirir. Bazen çocuk sadece yorgundur. Bazen açtır, kaygılıdır, kıskanmıştır, hayal kırıklığı yaşamıştır ya da yalnızca görülmeye ihtiyaç duyuyordur. Önemli olan, davranışın arkasında ne olabileceğini merak edebilmektir.',
        'Her davranış bir ihtiyaç değildir; fakat birçok davranışın arkasında anlaşılmayı bekleyen bir duygu olabilir. Çocuğu değiştirmeye çalışmadan önce onu anlamaya çalışmak ilişkinin yönünü değiştirebilir. Çocuk kendisini anlaşılmış hissettiğinde her sorun bir anda çözülmez; ama iletişim daha güvenli bir zemine oturabilir.',
        'Hiçbir ebeveyn kusursuz değildir. Ebeveynlik bazen sabır, bazen yorgunluk, bazen suçluluk, bazen de çaresizlik duygularıyla birlikte ilerler. Bir anda her şeyi doğru yapmak mümkün değildir. Önemli olan, tekrar tekrar ilişkiye dönebilmek, gerektiğinde özür dileyebilmek ve küçük değişiklikleri sürdürebilmektir.',
        'Küçük değişiklikler zaman içinde büyük farklar oluşturabilir. Bir cümleyi değiştirmek, çocuğa bakarken biraz daha yavaşlamak, davranışı etiketlemek yerine gözlemlemek, sınırı daha sakin koymak ya da gün içinde kısa bir bağ kurma anı yaratmak ilişkinin atmosferini değiştirebilir.',
        'Bu defter, ebeveynin kendisini yargılaması için değil, gözlem becerisini geliştirmesi için hazırlandı. Kayıt tutmak bazen zor gelebilir; her sayfanın kusursuz doldurulması gerekmez. Bazen tek bir farkındalık bile yeni bir başlangıç olabilir.',
        'Çocuğunuzu anlamaya çalışmanız, onunla kurduğunuz ilişkiye verdiğiniz değerin bir göstergesidir. Bu çaba tek başına kıymetlidir.'
    ]
    for p in text:
        y = para(p, M, y, size=10.55, leading=15)
        y -= 8
    box(M, 78, 500, 62, fill=LIGHT, stroke=LINE)
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 10.2)
    c.drawString(M + 16, 116, 'Bu çalışma genel bilgilendirme amacıyla hazırlanmıştır.')
    c.drawString(M + 16, 96, 'Tanı ve tedavinin yerine geçmez.')
    footer(18)
    c.showPage()


for func in [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18]:
    func()

c.save()
print(OUT)
