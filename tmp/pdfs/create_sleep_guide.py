from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from pathlib import Path
import textwrap
import math

OUT = Path('output/pdf/uyku-hijyeni-rehberi.pdf')
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
GREY = colors.HexColor('#f2f5f7')
INK = colors.HexColor('#22333b')
MUTED = colors.HexColor('#5d6e78')
LINE = colors.HexColor('#c9dce8')
WHITE = colors.white

c = canvas.Canvas(str(OUT), pagesize=A4)
c.setTitle('Uyku Hijyeni Rehberi')
c.setAuthor('Dr. Özgür Özbebit')
c.setSubject('Psikoeğitim Serisi No: 2 - Uyku hijyeni rehberi')
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


def box(x, y, w, h, fill=PALE, stroke=LINE, radius=10):
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(0.8)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=1)


def title(text, y, size=26):
    c.setFillColor(NAVY)
    c.setFont('Georgia-Bold', size)
    lines = []
    line = ''
    for word in text.split():
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
    return y - 18


def para(text, x, y, width=500, size=10.7, leading=15.0, font='Arial', color=MUTED):
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


def bullet_list(items, x, y, width=500, size=10.2, leading=13.8):
    for item in items:
        c.setFillColor(BLUE)
        c.circle(x + 4, y + 4, 2.2, fill=1, stroke=0)
        y = para(item, x + 16, y, width - 16, size=size, leading=leading, color=INK)
        y -= 4
    return y


def note_box(label, text, x, y, w, h):
    box(x, y, w, h, fill=LIGHT, stroke=LINE)
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 11)
    c.drawString(x + 14, y + h - 22, label)
    para(text, x + 14, y + h - 43, w - 28, size=8.6, leading=10.8, color=INK)


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


def icon_moon(x, y, r=18):
    c.setFillColor(BLUE)
    c.circle(x, y, r, fill=1, stroke=0)
    c.setFillColor(PALE)
    c.circle(x + r * 0.34, y + r * 0.2, r * 0.86, fill=1, stroke=0)


def icon_sun(x, y, r=14):
    c.setFillColor(BLUE)
    c.circle(x, y, r, fill=1, stroke=0)
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.5)
    for i in range(8):
        a = math.pi * 2 * i / 8
        c.line(x + math.cos(a) * (r + 5), y + math.sin(a) * (r + 5),
               x + math.cos(a) * (r + 13), y + math.sin(a) * (r + 13))


def page1():
    c.setFillColor(WHITE)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(colors.HexColor('#0f2a45'))
    c.circle(W * 0.82, H * 0.2, 190, fill=1, stroke=0)
    c.setFillColor(colors.HexColor('#214966'))
    c.circle(W * 0.17, H * 0.88, 120, fill=1, stroke=0)
    draw_round_logo(W / 2 - 54, H - 182, 108)
    c.setFillColor(BLUE)
    c.setFont('Arial-Bold', 12)
    c.drawCentredString(W / 2, H - 226, 'Psikoeğitim Serisi No: 2')
    c.setFillColor(WHITE)
    c.setFont('Georgia-Bold', 34)
    c.drawCentredString(W / 2, H - 284, 'Uyku Hijyeni')
    c.drawCentredString(W / 2, H - 324, 'Rehberi')
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(W / 2 - 94, H - 348, W / 2 + 94, H - 348)
    c.setFont('Arial', 13)
    c.setFillColor(colors.HexColor('#dbeaf4'))
    c.drawCentredString(W / 2, H - 384, 'Daha kaliteli bir uyku için günlük alışkanlıklar')
    c.drawCentredString(W / 2, H - 404, 've uygulanabilir öneriler')
    c.setFont('Arial-Bold', 14)
    c.setFillColor(WHITE)
    c.drawCentredString(W / 2, 158, 'Dr. Özgür Özbebit')
    c.setFont('Arial', 12)
    c.drawCentredString(W / 2, 136, 'Psikiyatrist')
    c.setFont('Arial', 10)
    c.drawCentredString(W / 2, 104, 'www.ozgurozbebit.com.tr')
    c.showPage()


def page2():
    y = title('Bu rehber neden hazırlandı?', CONTENT_TOP)
    text = [
        'Uyuyamamak çoğu insan için yalnızca gece yaşanan bir sorun gibi görünür. Oysa uykusuzluk bazen günün tamamına yayılan bir yorgunluk, gerginlik ve dikkat dağınıklığı haline gelebilir. Kişi yatağa çok yorgun girdiği halde uykuya dalamayabilir; tam dinlenmeye ihtiyaç duyduğu anda zihni daha fazla çalışmaya başlayabilir. Bu durum kişinin başarısız, iradesiz ya da kendini yeterince kontrol edemeyen biri olduğu anlamına gelmez.',
        'Birçok insan uyku sorununu “uyumaya çalışarak” çözmeye çalışır. Daha erken yatağa girer, gözlerini kapatıp kendisini zorlar, saati kontrol eder, kaç saat uyuyabileceğini hesaplar. Fakat uyku çoğu zaman zorlanarak gelen bir şey değildir. İnsan uyumaya çalıştıkça, bazen uyuyamadığını daha fazla fark eder. Bu fark ediş kaygıyı artırır; kaygı arttıkça bedenin sakinleşmesi zorlaşır. Böylece iyi niyetli bir çaba, uykuyu daha uzak hissettirebilir.',
        'Uyku sorunlarının önemli bir bölümü günlük alışkanlıklarla, ışıkla, ekran kullanımıyla, kafeinle, düzensiz saatlerle ve yatağın nasıl kullanıldığıyla ilişkilidir. Elbette her uyku sorunu yalnızca alışkanlıklarla açıklanamaz. Depresyon, anksiyete, ağrı, solunum sorunları, bazı ilaçlar veya farklı tıbbi durumlar da uykuyu etkileyebilir. Ancak uyku hijyeni, birçok kişi için güvenli ve uygulanabilir bir başlangıç noktasıdır.',
        'Bu rehber, mükemmel bir uyku reçetesi sunmak için hazırlanmadı. Herkesin yaşam düzeni, bedensel ritmi, çalışma koşulları ve psikolojik yükü farklıdır. Bu nedenle amaç katı kurallar koymak değil, uykunun doğal akışını destekleyen küçük değişiklikleri anlaşılır hale getirmektir.',
        'Bazen en etkili değişiklikler büyük kararlar değil, tekrarlanan küçük düzenlemelerdir. Sabah gün ışığı almak, yatağı yalnızca uyku ile ilişkilendirmek, yatakta uzun süre dönüp durduğunda farklı bir sakin aktiviteye geçmek veya saati sürekli kontrol etmemek zamanla bedenin ritmine yardım edebilir. Bu rehberi birkaç kez okumak, yazdırmak ve özellikle zor gecelerde kısa bölümlerine geri dönmek faydalı olabilir.'
    ]
    for p in text:
        y = para(p, M, y, width=500, size=10.7, leading=15.1)
        y -= 8
    note_box('Unutmayın', 'Amaç mükemmel uyumak değil, uykunun doğal akışına yeniden izin vermektir.', M, 82, 500, 70)
    footer(2)
    c.showPage()


def page3():
    y = title('Uyku nasıl oluşur?', CONTENT_TOP)
    left = M
    text = [
        'Uyku, yalnızca gözleri kapatıp beklemekle oluşan pasif bir süreç değildir. Beyin ve beden gün boyunca topladığı işaretleri değerlendirir; ışık, hareket, yemek saatleri, stres düzeyi ve gün içindeki uyanıklık süresi uykunun zamanlamasını etkiler. Bu nedenle uyku, tek bir düğmeye basılarak başlatılan bir durumdan çok, gün boyunca hazırlanan doğal bir geçiştir.',
        'Bu geçişte biyolojik saat önemli bir rol oynar. Biyolojik saat, bedenin yaklaşık 24 saatlik ritmini düzenleyen iç zamanlama sistemidir. Sirkadiyen ritim dediğimiz bu düzen, sabah uyanıklığı, akşam gevşemeyi, hormonların salınımını ve beden sıcaklığındaki değişimleri etkiler. Sabah gün ışığı almak bu saat için güçlü bir ayarlayıcıdır.',
        'Bir diğer önemli kavram uyku basıncıdır. Gün boyunca uyanık kaldıkça beyinde uyku ihtiyacını artıran kimyasal süreçler birikir. Bu birikim akşam saatlerinde uykuya geçişi kolaylaştırır. Gündüz uzun uyumak veya yatakta çok uzun süre kalmak bazı kişilerde bu basıncı azaltabilir.',
        'Melatonin ise karanlıkla ilişkili bir hormondur. Akşam ışığın azalması melatonin salınımını desteklerken, parlak ekranlar ve güçlü ışıklar bu sistemi geciktirebilir. Bu nedenle uyku hijyeninde ışık düzeni, çoğu zaman düşünüldüğünden daha önemlidir.'
    ]
    for p in text:
        y = para(p, left, y, width=345, size=10.4, leading=14.6)
        y -= 6
    info = [
        ('Biyolojik saat', 'Bedenin gün içindeki uyanıklık ve dinlenme zamanlarını ayarlayan iç ritim.'),
        ('Uyku basıncı', 'Gün boyunca biriken uyku ihtiyacıdır. Uyanık kalma süresi arttıkça güçlenir.'),
        ('Melatonin', 'Karanlıkla artan, uykuya hazırlığı destekleyen doğal bir hormondur.'),
        ('Sabah güneşi', 'Biyolojik saate “gün başladı” mesajı verir ve gece uykusunu düzenlemeye yardım eder.')
    ]
    yy = 612
    for i, (h, t) in enumerate(info):
        note_box(h, t, 414, yy, 132, 92)
        yy -= 104
    icon_sun(480, 182, 16)
    c.setFillColor(MUTED)
    c.setFont('Arial-Italic', 8.8)
    c.drawCentredString(480, 148, 'Işık, biyolojik saatin en güçlü işaretlerinden biridir.')
    footer(3)
    c.showPage()


def page4():
    y = title('Sağlıklı uykunun döngüsü', CONTENT_TOP)
    c.setFillColor(MUTED)
    para('Uyku gece boyunca tek parça ilerlemez. Beyin farklı uyku evreleri arasında döngüler halinde geçiş yapar. Bu döngüler kişiden kişiye değişse de genel olarak NREM evreleri ve REM uykusu birbirini izler.', M, y, width=500, size=10.8, leading=15.2)
    cx = W / 2
    top = 600
    labels = ['REM', 'NREM 1', 'NREM 2', 'Derin uyku', 'REM']
    ys = [top, top - 72, top - 144, top - 216, top - 288]
    for i, (lab, yy) in enumerate(zip(labels, ys)):
        box(cx - 95, yy - 24, 190, 48, fill=LIGHT if i in (0, 4) else PALE, stroke=BLUE, radius=14)
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 12)
        c.drawCentredString(cx, yy - 4, lab)
        if i < len(labels) - 1:
            c.setStrokeColor(NAVY2)
            c.setLineWidth(1.2)
            c.line(cx, yy - 30, cx, ys[i + 1] + 30)
            c.setFillColor(NAVY2)
            c.circle(cx, ys[i + 1] + 30, 2, fill=1, stroke=0)
    box(M, 118, 500, 118, fill=PALE, stroke=LINE)
    text = ('Gece ilerledikçe bu döngüler birkaç kez tekrarlanır. İlk bölümde derin uyku daha belirgin olabilir; sabaha doğru REM dönemleri uzayabilir. Bu nedenle gece kısa uyanmalar yaşamak her zaman anormal değildir. Önemli olan, bu uyanmaları hemen felaketleştirmemek ve uykunun yeniden akmasına izin verebilmektir.')
    para(text, M + 18, 206, width=464, size=10.4, leading=14.4, color=INK)
    footer(4)
    c.showPage()


def page5():
    y = title('En sık yapılan uyku hataları', CONTENT_TOP)
    c.setFont('Arial-Bold', 12)
    c.setFillColor(NAVY)
    c.drawString(M, y, 'Yapılan davranış')
    c.drawString(W / 2 + 16, y, 'Yerine ne yapılabilir?')
    y -= 18
    rows = [
        ('Yatakta telefon kullanmak', 'Telefonu yataktan uzak bırakmak', 'Yatak ekranla eşleştiğinde beyin yatağı dinlenme yerine uyarılma alanı gibi algılayabilir.'),
        ('Saati sürekli kontrol etmek', 'Saati çevirmek', 'Saat hesabı kaygıyı artırabilir. Kaç saat kaldığını bilmemek bazen daha koruyucudur.'),
        ('Hafta sonu öğlene kadar uyumak', 'Benzer kalkış saati korumak', 'Kalkış saatinin çok değişmesi biyolojik saati geciktirebilir.'),
        ('Yatakta uzun süre dönmek', 'Kısa süreliğine yataktan çıkmak', 'Yatakla uykusuzluk arasındaki bağın güçlenmesini önlemek amaçlanır.'),
        ('Akşam geç kafein almak', 'Kafeini erken saatlere çekmek', 'Kafeinin etkisi kişiden kişiye değişse de uykuya geçişi zorlaştırabilir.'),
        ('Uyku için kendini zorlamak', 'Dinlenmeye izin vermek', 'Uyku bir performans işi değildir. Zorlama çoğu zaman bedeni daha uyanık hale getirir.')
    ]
    for a, b, n in rows:
        box(M, y - 64, 500, 58, fill=PALE, stroke=LINE)
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 9.7)
        c.drawString(M + 12, y - 23, a)
        c.setFillColor(BLUE)
        c.setFont('Arial-Bold', 12)
        c.drawCentredString(W / 2, y - 27, '→')
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 9.7)
        c.drawString(W / 2 + 16, y - 23, b)
        para(n, M + 12, y - 42, width=476, size=8.2, leading=10.4, color=MUTED)
        y -= 72
    footer(5)
    c.showPage()


def page6():
    y = title('Uyumaya çalışmak neden bazen uykuyu kaçırır?', CONTENT_TOP, size=23)
    text = [
        'Uyku, günlük hayattaki birçok işten farklıdır. Ders çalışmak, ev toplamak ya da bir dosyayı tamamlamak için çaba göstermek işe yarayabilir. Fakat uyku doğrudan çabayla ortaya çıkan bir performans değildir. Kişi “hemen uyumalıyım” diye kendisini zorladığında, beyin bunu çoğu zaman çözülmesi gereken bir problem gibi ele almaya başlar.',
        'Problem çözme hali uykunun ihtiyaç duyduğu gevşeme halinden farklıdır. Zihin hesap yapmaya başlar: “Şimdi uyursam kaç saat uyurum?”, “Yarın kötü geçerse ne olacak?”, “Neden hala uyuyamıyorum?” Bu sorular masum görünür; ancak bedene “uyanık kal ve kontrol et” mesajı verebilir. Böylece uykuya yaklaşmak yerine kişi kendi uyanıklığını daha yakından izlemeye başlar.',
        'Uyuyamadıkça beden belirtileri daha fazla fark edilir. Kalp atışı, yataktaki sıcaklık, yastığın duruşu, odadaki sesler ve zihinden geçen düşünceler büyüyebilir. Kişi uyuyup uyumadığını kontrol ettikçe uyku uzaklaşır. Bu duruma bazen performans kaygısına benzer bir döngü eşlik eder. Uyku artık doğal bir süreç olmaktan çıkar, başarılması gereken bir sınav gibi hissedilir.',
        'Bu nedenle uyku hijyeninde amaç, uykuya zorla komut vermek değil, uykunun gelebileceği koşulları hazırlamaktır. Oda karanlık olabilir, ekran azalabilir, yatak yalnızca uyku ile ilişkilendirilebilir, gündüz ritmi düzenlenebilir. Bunlar uykuyu garanti etmez; fakat bedenin uykuya geçmesini kolaylaştıran güvenli bir zemin oluşturur.',
        'Kişi uyuyamadığında kendisini suçlamamaya çalışmalıdır. “Yine başaramadım” düşüncesi çoğu zaman kaygıyı artırır. Bunun yerine “Şu anda bedenim uyanık; ben de onu zorlamadan dinlenmeye alan açacağım” cümlesi daha yumuşak bir yaklaşım sunabilir. Bazen yataktan kısa süreliğine kalkmak, loş ışıkta sakin bir şey okumak ve uyku hali yeniden geldiğinde yatağa dönmek, yatak ile uykusuzluk arasındaki bağı zayıflatabilir.',
        'Uykuya yaklaşımda sabır önemlidir. Bir gecede bütün ritmi değiştirmeye çalışmak yerine, birkaç küçük düzenlemeyi bir hafta boyunca denemek daha gerçekçidir. Uyku çoğu zaman baskıyla değil, düzenli tekrarlarla ve güvenli koşullarla yeniden doğal akışını bulur.'
    ]
    for p in text:
        y = para(p, M, y, width=500, size=10.2, leading=14.4)
        y -= 7
    footer(6)
    c.showPage()


def page7():
    y = title('Akşam rutini oluşturmak', CONTENT_TOP)
    para('Aşağıdaki akış yalnızca örnektir. Herkesin iş, aile ve yaşam düzeni farklıdır. Amaç saatlere kusursuz uymak değil, bedene akşamın yavaş yavaş başladığını hatırlatan tekrarlanabilir bir geçiş oluşturmaktır.', M, y, width=500, size=10.7, leading=15.2)
    steps = [
        ('20.30', 'Işıkları azalt.', 'Evin ışığını biraz yumuşatmak bedenin geceye hazırlanmasına yardım edebilir.'),
        ('21.00', 'Telefon kullanımını azalt.', 'Bildirimleri kısmak ve telefonu yataktan uzaklaştırmak zihinsel uyarılmayı azaltabilir.'),
        ('21.30', 'Sakin aktivite.', 'Hafif okuma, ılık duş, kısa not alma veya dingin bir sohbet uygun olabilir.'),
        ('22.00', 'Yarın için kısa hazırlık.', 'Sabahı kolaylaştıracak küçük hazırlıklar zihindeki “unuturum” kaygısını azaltabilir.'),
        ('22.30', 'Yatağa geç.', 'Uyku gelmişse yatağa geçilebilir. Gelmemişse yatağı bekleme alanına çevirmemek daha yararlıdır.')
    ]
    y = 600
    for time, head, desc in steps:
        c.setFillColor(BLUE)
        c.circle(M + 18, y - 9, 15, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont('Arial-Bold', 7.8)
        c.drawCentredString(M + 18, y - 12, time)
        box(M + 48, y - 48, 448, 58, fill=PALE, stroke=LINE)
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 11.2)
        c.drawString(M + 64, y - 14, head)
        para(desc, M + 64, y - 31, 410, size=8.7, leading=10.8, color=MUTED)
        y -= 82
    note_box('Küçük not', 'Rutin, katı bir program değil; bedene tekrar eden güvenli işaretler sunan sade bir geçiştir.', M, 86, 500, 66)
    footer(7)
    c.showPage()


def page8():
    y = title('Uyuyamazsam ne yapmalıyım?', CONTENT_TOP)
    intro = 'Uyuyamadığınızda yatakta uzun süre dönüp durmak, yatağı zamanla uykusuzluk ve mücadele alanı haline getirebilir. Bu nedenle amaç, yatağı yeniden uyku ve dinlenmeyle eşleştirmektir.'
    y = para(intro, M, y, width=500, size=10.8, leading=15.2)
    y -= 12
    items = [
        ('1', 'Yatakta ne kadar süredir olduğunuzu sürekli hesaplamayın.', 'Saati kontrol etmek uyanıklığı artırabilir. Saat görünür durumdaysa çevirmek işe yarayabilir.'),
        ('2', 'Uzun süre uyku gelmiyorsa yataktan kısa süreliğine kalkın.', 'Loş ışıkta, sakin ve sıkıcı sayılabilecek bir aktivite seçin. Telefon, parlak ekran ve yoğun içerikten uzak durun.'),
        ('3', 'Uyku hali yeniden geldiğinde yatağa dönün.', 'Amaç kendinizi cezalandırmak değil, yatağı uyanıklıkla değil uyku haliyle yeniden ilişkilendirmektir.'),
        ('4', 'Ertesi günü felaketleştirmemeye çalışın.', 'Kötü bir gece zorlayıcıdır; ancak çoğu insan ertesi günü tamamen çökmüş halde geçirmez. Beden telafi yolları bulabilir.'),
        ('5', 'Sakin ama uyarıcı olmayan bir seçenek belirleyin.', 'Basit bir kitap, hafif gevşeme, kısa not alma veya sessizce oturma kullanılabilir. Amaç eğlenmek değil, uyarılmayı azaltmaktır.')
    ]
    for n, h, t in items:
        box(M, y - 74, 500, 62, fill=PALE, stroke=LINE)
        c.setFillColor(BLUE)
        c.setFont('Georgia-Bold', 22)
        c.drawString(M + 16, y - 49, n)
        c.setFillColor(NAVY)
        c.setFont('Arial-Bold', 11)
        c.drawString(M + 54, y - 28, h)
        para(t, M + 54, y - 45, 420, size=8.5, leading=10.6, color=MUTED)
        y -= 82
    footer(8)
    c.showPage()


def page9():
    y = title('Bir haftalık uyku günlüğü', CONTENT_TOP)
    para('Bu tabloyu yazdırıp bir hafta boyunca doldurabilirsiniz. Amaç kendinizi yargılamak değil, uykuyu etkileyen örüntüleri daha görünür hale getirmektir.', M, y, width=500, size=10.5, leading=14.6)
    cols = [('Gün', 42), ('Yatma', 58), ('Dalma', 58), ('Uyanma', 65), ('Kalkış', 58), ('Dinlenme', 70), ('Kafein', 56), ('Telefon', 56), ('Not', 70)]
    x0 = 36
    y0 = 620
    row_h = 54
    total_w = sum(w for _, w in cols)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.8)
    c.setFillColor(LIGHT)
    c.rect(x0, y0, total_w, row_h, fill=1, stroke=1)
    xx = x0
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 7.7)
    for name, w in cols:
        c.drawCentredString(xx + w / 2, y0 + 31, name)
        c.line(xx, y0, xx, y0 - row_h * 7)
        xx += w
    c.line(xx, y0, xx, y0 - row_h * 7)
    days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']
    for r in range(7):
        yrow = y0 - row_h * (r + 1)
        c.setFillColor(WHITE if r % 2 == 0 else PALE)
        c.rect(x0, yrow, total_w, row_h, fill=1, stroke=1)
        c.setFillColor(MUTED)
        c.setFont('Arial-Bold', 8)
        c.drawCentredString(x0 + cols[0][1] / 2, yrow + 24, days[r])
    c.line(x0, y0, x0 + total_w, y0)
    footer(9)
    c.showPage()


def page10():
    y = title('Uyku puanı', CONTENT_TOP)
    para('Aşağıdaki mini değerlendirme tanı koymaz. Yalnızca uyku düzeninizle ilgili bazı alanları fark etmenize yardımcı olabilir. Her madde için son iki haftayı düşünerek 0, 1 veya 2 puan verebilirsiniz.', M, y, width=500, size=10.4, leading=14.6)
    y = 642
    questions = [
        'Uykuya dalmakta zorlanıyorum.',
        'Gece sık uyanıyorum.',
        'Sabah dinlenmemiş kalkıyorum.',
        'Yatakta telefon veya ekran kullanıyorum.',
        'Saati kontrol edip uykumu hesaplıyorum.',
        'Kafeini akşam saatlerine bırakıyorum.',
        'Hafta sonu kalkış saatim çok değişiyor.',
        'Yatakta uzun süre dönüp duruyorum.',
        'Uyuyamazsam ertesi günü felaket gibi düşünüyorum.',
        'Gün içinde uykusuzluk nedeniyle zorlanıyorum.',
        'Yatma saatim belirgin şekilde düzensiz.',
        'Uykum için kendimi sık sık suçluyorum.'
    ]
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 8.2)
    c.drawRightString(515, y + 18, '0  1  2')
    for i, q in enumerate(questions, 1):
        box(M, y - 23, 500, 29, fill=PALE if i % 2 else WHITE, stroke=LINE, radius=6)
        c.setFillColor(INK)
        c.setFont('Arial', 8.4)
        c.drawString(M + 10, y - 5, f'{i}. {q}')
        for j in range(3):
            c.setStrokeColor(BLUE)
            c.circle(470 + j * 24, y - 3, 6, fill=0, stroke=1)
        y -= 34
    box(M, 86, 500, 92, fill=LIGHT, stroke=LINE)
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 10)
    c.drawString(M + 14, 154, 'Puan aralıkları')
    ranges = '0-7: Uyku alışkanlıkları genel olarak destekleyici olabilir.  8-15: Düzenlenebilecek alanlar var.  16-24: Uyku düzeni günlük yaşamı etkiliyor olabilir; profesyonel değerlendirme yararlı olabilir.'
    para(ranges, M + 14, 136, 468, size=8.4, leading=11, color=INK)
    c.setFont('Arial-Italic', 8)
    c.setFillColor(MUTED)
    c.drawString(M + 14, 100, 'Bu değerlendirme tanı koymaz; yalnızca farkındalık amacı taşır.')
    footer(10)
    c.showPage()


def page11():
    y = title('Küçük alışkanlıklar büyük fark oluşturabilir', CONTENT_TOP, size=24)
    text = [
        'Uyku düzenini değiştirmek çoğu zaman büyük ve sert kararlarla değil, küçük davranışların düzenli tekrarıyla mümkün olur. İnsan bazen uykusunu düzeltmek için tek bir güçlü yöntem arar: özel bir bitki çayı, mükemmel bir yastık, kesin bir saat ya da herkes için geçerli bir kural. Oysa uyku, birçok küçük işaretin bir araya gelmesiyle oluşur.',
        'Sabah gün ışığı almak, akşam ışığı azaltmak, yatağı ekran alanı olmaktan çıkarmak, hafta sonu kalkış saatini çok fazla kaydırmamak ve kafeini daha erken saatlere almak tek başına mucize yaratmayabilir. Fakat birlikte ve düzenli uygulandıklarında bedenin ritmini desteklerler. Bu nedenle uyku hijyeninde süreklilik, kusursuzluktan daha önemlidir.',
        'Davranış değişikliği yaparken kendinize gerçekçi davranmak gerekir. Bir gecede bütün alışkanlıkları değiştirmeye çalışmak çoğu zaman sürdürülebilir değildir. Bunun yerine bir hafta boyunca yalnızca iki küçük hedef seçmek daha yararlı olabilir. Örneğin “telefonu yatağa götürmeyeceğim” ve “sabah 15 dakika gün ışığı alacağım” gibi sade hedefler, zamanla daha kalıcı bir düzenin temelini oluşturabilir.',
        'Uyku sorunları yaşayan kişiler kendilerini kolayca suçlayabilir. “Herkes uyuyor, ben uyuyamıyorum” düşüncesi yalnızlık hissini artırır. Oysa uyku güçlükleri oldukça yaygındır ve çoğu zaman anlaşılabilir nedenleri vardır. Kişinin kendisine daha sakin yaklaşması, uyku ile ilişkisini yumuşatabilir.',
        'Küçük alışkanlıkların amacı uykuyu zorla getirmek değildir. Amaç, bedene “artık güvenli biçimde yavaşlayabilirsin” mesajını daha tutarlı vermektir. Bu mesaj tekrarlandıkça, uyku da çoğu zaman daha doğal bir zeminde kendine yer bulur.'
    ]
    for p in text:
        y = para(p, M, y, width=500, size=11, leading=15.8)
        y -= 11
    note_box('Bugün için küçük hedef', 'Bu akşam yalnızca bir davranışı seçin. Küçük ama uygulanabilir bir hedef, büyük ama sürdürülemeyen kararlardan daha değerlidir.', M, 86, 500, 72)
    footer(11)
    c.showPage()


def page12():
    y = title('Sık Sorulan Sorular', CONTENT_TOP)
    faqs = [
        ('Hafta sonu geç kalkabilir miyim?', 'Ara sıra olabilir; ancak çok geç kalkmak biyolojik saati kaydırabilir. Benzer kalkış saati genellikle daha destekleyicidir.'),
        ('Televizyon açık uyumak zararlı mı?', 'Bazı kişiler alışkanlık haline getirir; fakat ışık ve ses beynin dinlenmesini bölebilir. Daha loş ve sessiz ortam tercih edilir.'),
        ('Melatonin herkese uygun mudur?', 'Hayır. Kullanım kişiye, yaşa, tıbbi duruma ve ilaçlara göre değerlendirilmelidir. Doktor önerisi olmadan düzenli kullanmak doğru olmayabilir.'),
        ('Gündüz uykusu iyi midir?', 'Kısa ve erken saatlerde olduğunda bazı kişiler için yararlı olabilir. Uzun veya geç saatlerdeki uykular gece uykusunu bozabilir.'),
        ('Yatağa erken girmek işe yarar mı?', 'Uyku hali yokken çok erken yatmak yatakta uyanık kalma süresini artırabilir. Yatak, uyku haliyle eşleşmelidir.'),
        ('Telefon neden etkiliyor?', 'Işık, içerik ve bildirimler zihni uyarır. Ayrıca yatak ile ekran arasında güçlü bir alışkanlık bağı kurabilir.'),
        ('Kafeini tamamen bırakmalı mıyım?', 'Herkes için şart değildir. Ancak hassas kişilerde kafeini öğleden sonra azaltmak uykuya geçişi kolaylaştırabilir.'),
        ('Spor uykuyu düzeltir mi?', 'Düzenli fiziksel aktivite yardımcı olabilir. Çok geç ve yoğun egzersiz bazı kişilerde uyarıcı etki yapabilir.'),
        ('Alkol uykuya yardımcı olur mu?', 'Uykuya dalmayı kolaylaştırıyor gibi görünse de gece uykusunun kalitesini bozabilir.'),
        ('Uyku ilacı kullanmalı mıyım?', 'Bu karar kişisel değerlendirme gerektirir. Kendi kendine ilaç başlamak veya uzun süre kontrolsüz kullanmak uygun değildir.'),
        ('Her gece 8 saat uyumak zorunda mıyım?', 'İhtiyaç kişiden kişiye değişebilir. Süre kadar uykunun kalitesi ve gündüz işlevselliği de önemlidir.'),
        ('Uyuyamazsam yatakta kalmalı mıyım?', 'Uzun süre dönüp durmak yatağı uykusuzlukla eşleştirebilir. Kısa süreli sakin bir ara vermek daha yararlı olabilir.')
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
    footer(12)
    c.showPage()


def page13():
    y = title('Bu gece için küçük hatırlatma kartı', CONTENT_TOP, size=24)
    para('Bu kartı yazdırıp kesebilir, komodininizde veya çantanızda tutabilirsiniz. Amaç uykuya komut vermek değil, kendinize daha sakin bir hatırlatma sunmaktır.', M, y, width=500, size=10.8, leading=15.2)
    card_w, card_h = 370, 250
    x, yy = W / 2 - card_w / 2, 252
    c.setDash(5, 3)
    c.setStrokeColor(BLUE)
    c.roundRect(x - 10, yy - 10, card_w + 20, card_h + 20, 14, fill=0, stroke=1)
    c.setDash()
    box(x, yy, card_w, card_h, fill=WHITE, stroke=NAVY, radius=16)
    icon_moon(W / 2, yy + card_h - 36, 18)
    c.setFillColor(NAVY)
    c.setFont('Georgia-Bold', 15)
    c.drawCentredString(W / 2, yy + card_h - 72, 'Bu Gece İçin Hatırlatma')
    lines = [
        'Bugün mükemmel uyumaya çalışmayacağım.',
        'Dinlenmeye izin vereceğim.',
        'Saati kontrol etmeyeceğim.',
        'Telefonu elime almayacağım.',
        'Uyku geldiğinde bedenim zaten uyuyacak.'
    ]
    ty = yy + card_h - 106
    c.setFillColor(INK)
    c.setFont('Arial-Bold', 11)
    for line in lines:
        c.drawCentredString(W / 2, ty, line)
        ty -= 25
    c.setFillColor(MUTED)
    c.setFont('Arial', 8)
    c.drawCentredString(W / 2, yy + 18, 'www.ozgurozbebit.com.tr')
    footer(13)
    c.showPage()


def page14():
    y = title('Son söz', CONTENT_TOP)
    text = [
        'Uyku sorunu yaşayan birçok insan zamanla kendisine sert davranmaya başlar. “Neden herkes gibi uyuyamıyorum?”, “Yarın yine kötü geçecek”, “Bunu da başaramıyorum” gibi düşünceler geceyi daha yalnız ve daha ağır hale getirebilir. Oysa uyuyamamak bir karakter kusuru değildir. Uykunun bozulması çoğu zaman bedenin, zihnin ve günlük yaşamın birlikte verdiği bir işarettir.',
        'İyi uyku bazen kendiliğinden düzelir; bazen de düzenli ve sabırlı bir yaklaşım ister. Bu süreçte amaç kendinizi zorlamak değil, uykunun oluşabileceği zemini yeniden kurmaktır. Her gece mükemmel geçmeyebilir. Bazı geceler daha kolay, bazı geceler daha zor olabilir. Önemli olan tek bir gece üzerinden kendinizi yargılamamak ve genel ritme odaklanmaktır.',
        'Uyku hijyeni, basit göründüğü için hafife alınmamalıdır. Sabah ışığı, düzenli kalkış saati, akşam ekran sınırı, yatağın kullanım biçimi ve kafein düzeni gibi küçük başlıklar bir araya geldiğinde güçlü bir etki oluşturabilir. Bu değişikliklerin etkisini görmek için birkaç gün değil, çoğu zaman birkaç hafta gerekir.',
        'Bazı durumlarda uyku sorunu daha kapsamlı değerlendirme gerektirir. Uzun süren uykusuzluk, yoğun kaygı, depresif belirtiler, horlama, nefes durması, gündüz aşırı uyuklama, ağrı ya da ilaçlarla ilişkili sorunlar varsa profesyonel destek almak önemlidir. Yardım istemek, kişinin zayıf olduğu anlamına gelmez; kendi sağlığını ciddiye aldığı anlamına gelir.',
        'Bu rehberi kullanırken kendinize küçük ve uygulanabilir hedefler seçin. Bir anda her şeyi değiştirmeye çalışmayın. Uykunun doğasında yavaşlama vardır; uykuya yaklaşırken de bu yavaşlığı kendinize tanımak gerekir. Bazen iyileşme, tam da kişinin kendisini suçlamayı bırakıp daha düzenli, daha nazik ve daha gerçekçi adımlar atmasıyla başlar.',
        'Uyku çözümsüz değildir. Fakat çoğu zaman zorlanarak değil, anlaşarak düzelir. Bedeninizle savaşmadan, ritminizi dinleyerek ve gerektiğinde destek alarak daha sağlıklı bir uyku düzeni kurmak mümkündür.'
    ]
    for p in text:
        y = para(p, M, y, width=500, size=10.8, leading=15.2)
        y -= 8
    box(M, 78, 500, 62, fill=LIGHT, stroke=LINE)
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 10.2)
    c.drawString(M + 16, 116, 'Bu rehber yalnızca genel bilgilendirme amacıyla hazırlanmıştır.')
    c.drawString(M + 16, 96, 'Tanı ve tedavinin yerine geçmez.')
    footer(14)
    c.showPage()


for func in [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14]:
    func()

c.save()
print(OUT)
