from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from pathlib import Path
import textwrap

OUT = Path('output/pdf/panik-atak-acil-durum-rehberi.pdf')
LOGO = Path('assets/logo2.png')
W, H = A4

FONT_DIR = Path('/System/Library/Fonts/Supplemental')
pdfmetrics.registerFont(TTFont('Arial', str(FONT_DIR/'Arial.ttf')))
pdfmetrics.registerFont(TTFont('Arial-Bold', str(FONT_DIR/'Arial Bold.ttf')))
pdfmetrics.registerFont(TTFont('Arial-Italic', str(FONT_DIR/'Arial Italic.ttf')))
pdfmetrics.registerFont(TTFont('Georgia', str(FONT_DIR/'Georgia.ttf')))
pdfmetrics.registerFont(TTFont('Georgia-Bold', str(FONT_DIR/'Georgia Bold.ttf')))

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
c.setTitle('Panik Atak Acil Durum Rehberi')
c.setAuthor('Dr. Özgür Özbebit')
c.setSubject('Panik atak sırasında kullanılabilecek bilgilendirici rehber')
c.setCreator('Dr. Özgür Özbebit')

M = 48
CONTENT_TOP = H - 78
CONTENT_BOTTOM = 62

sections = [
    'Bu rehber neden hazırlandı?', 'Panik atakta neler olur?', 'Panik atağın döngüsü',
    'Kriz sırasında ne yapabilirim?', 'Kendine söyleyebileceğin cümleler',
    'Yapmaman gereken hatalar', 'Panik ataktan sonra', 'Acil durumda küçük kart',
    'Ne zaman doktora başvurulmalıdır?', 'Sık sorulan sorular', 'Son söz'
]

def footer(page):
    c.setStrokeColor(LINE)
    c.setLineWidth(0.5)
    c.line(M, 42, W-M, 42)
    c.setFont('Arial', 8)
    c.setFillColor(MUTED)
    c.drawString(M, 28, 'www.ozgurozbebit.com.tr')
    c.drawCentredString(W/2, 28, 'Psikoeğitim Serisi')
    c.drawRightString(W-M, 28, f'{page}')

def title(text, y, size=26):
    c.setFillColor(NAVY)
    c.setFont('Georgia-Bold', size)
    c.drawString(M, y, text)
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(M, y-10, M+70, y-10)
    return y-34

def para(text, x, y, width=500, size=10.8, leading=15.2, font='Arial', color=MUTED):
    c.setFont(font, size)
    c.setFillColor(color)
    words = text.split()
    line = ''
    for word in words:
        test = (line + ' ' + word).strip()
        if c.stringWidth(test, font, size) <= width:
            line = test
        else:
            c.drawString(x, y, line)
            y -= leading
            line = word
    if line:
        c.drawString(x, y, line)
        y -= leading
    return y

def bullet_list(items, x, y, width=500, size=10.8, leading=15):
    c.setFont('Arial', size)
    for item in items:
        c.setFillColor(BLUE)
        c.circle(x+4, y+4, 2.2, fill=1, stroke=0)
        y = para(item, x+16, y, width-16, size=size, leading=leading, color=INK)
        y -= 3
    return y

def box(x, y, w, h, fill=PALE, stroke=LINE, radius=10):
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(0.8)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=1)

def note_box(label, text, x, y, w, h):
    box(x, y, w, h, fill=LIGHT, stroke=LINE)
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 11)
    c.drawString(x+14, y+h-22, label)
    para(text, x+14, y+h-42, w-28, size=8.4, leading=10.4, color=INK)

def wrapped_line(text, x, y, width, font='Arial', size=8.4, leading=12):
    c.setFont(font, size)
    for line in textwrap.wrap(text, width=48):
        words = line.split()
        current = ''
        for word in words:
            trial = (current + ' ' + word).strip()
            if c.stringWidth(trial, font, size) <= width:
                current = trial
            else:
                if current:
                    c.drawString(x, y, current)
                    y -= leading
                current = word
        if current:
            c.drawString(x, y, current)
            y -= leading
    return y

def heading_small(text, x, y):
    c.setFillColor(NAVY)
    c.setFont('Arial-Bold', 12)
    c.drawString(x, y, text)
    return y-18

def draw_round_logo(x, y, size):
    if not LOGO.exists():
        return
    c.saveState()
    c.setFillColor(WHITE)
    c.circle(x + size / 2, y + size / 2, size / 2, fill=1, stroke=0)
    path = c.beginPath()
    path.circle(x + size / 2, y + size / 2, size / 2)
    c.clipPath(path, stroke=0, fill=0)
    img = ImageReader(str(LOGO))
    c.drawImage(img, x, y, size, size, mask='auto')
    c.restoreState()

def page1():
    c.setFillColor(WHITE)
    c.rect(0,0,W,H,fill=1,stroke=0)
    c.setFillColor(NAVY)
    c.rect(0,0,W,H,fill=1,stroke=0)
    c.setFillColor(colors.HexColor('#0f2a45'))
    c.circle(W*0.84, H*0.18, 190, fill=1, stroke=0)
    c.setFillColor(colors.HexColor('#214966'))
    c.circle(W*0.16, H*0.86, 130, fill=1, stroke=0)
    draw_round_logo(W/2-58, H-190, 116)
    c.setFillColor(WHITE)
    c.setFont('Georgia-Bold', 33)
    c.drawCentredString(W/2, H-260, 'Panik Atak')
    c.drawCentredString(W/2, H-300, 'Acil Durum Rehberi')
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(W/2-92, H-324, W/2+92, H-324)
    c.setFont('Arial', 13)
    c.setFillColor(colors.HexColor('#dbeaf4'))
    for i, line in enumerate(['Panik atağı anlamak, belirtileri doğru yorumlamak', 've kriz anında uygulanabilecek pratik adımlar.']):
        c.drawCentredString(W/2, H-358-i*19, line)
    c.setFont('Arial-Bold', 14)
    c.setFillColor(WHITE)
    c.drawCentredString(W/2, 154, 'Dr. Özgür Özbebit')
    c.setFont('Arial', 12)
    c.drawCentredString(W/2, 132, 'Psikiyatrist')
    c.setFont('Arial', 10)
    c.drawCentredString(W/2, 100, 'www.ozgurozbebit.com.tr')
    c.showPage()

def page2():
    y = title('Bu rehber neden hazırlandı?', CONTENT_TOP)
    text = [
        'Panik atak, yaşayan kişi için çoğu zaman yalnızca yoğun bir kaygı hali değildir. Bedenin çok güçlü biçimde alarm verdiği, kalbin hızlandığı, nefesin değiştiği, göğüste sıkışma ya da baş dönmesi gibi belirtilerin eşlik edebildiği sarsıcı bir deneyimdir. Kişi o sırada kendisine ne olduğunu anlamakta zorlanabilir. Belirtiler hızlı başladığında ve beklenmedik şekilde yükseldiğinde, zihin çoğu zaman en tehlikeli ihtimale yönelir.',
        'Birçok kişi ilk panik atağını kalp krizi, felç, bayılma ya da kontrolü tamamen kaybetme belirtisi gibi yorumlayabilir. Bu yorum anlaşılabilir bir tepkidir; çünkü panik sırasında yaşanan bedensel belirtiler hayal ürünü değildir. Kalp gerçekten hızlı atabilir, nefes ritmi gerçekten değişebilir, ellerde uyuşma veya titreme gerçekten hissedilebilir. Sorun çoğu zaman belirtilerin varlığından çok, bu belirtilerin ne anlama geldiği konusunda zihnin yaptığı felaket yorumudur.',
        'Panik atak yaşamak kişinin zayıf, dayanıksız ya da iradesiz olduğu anlamına gelmez. Panik, bedenin tehdit algısıyla çalışan doğal alarm sisteminin gereğinden fazla ve yanlış zamanda devreye girmesiyle ilişkili olabilir. Bu nedenle kişi kendisini suçlamak yerine, bedeninde ve zihninde neler olduğunu anlamaya çalıştığında korkuyla kurduğu ilişki değişebilir.',
        'Bilgi tek başına her şeyi çözmez; ancak belirsizliği azaltır. Belirsizlik azaldığında korku çoğu zaman daha yönetilebilir hale gelir. Bu rehber, panik atağın ne olduğunu, bedende neden bu kadar güçlü belirtiler oluşturabildiğini ve kriz anında hangi küçük adımların hatırlanabileceğini sade bir dille anlatmak için hazırlandı.',
        'Rehberin amacı panik atağı bir anda ortadan kaldırma vaadi sunmak değildir. Amaç, kriz anında tekrar tekrar okunabilecek, yazdırılıp elde tutulabilecek ve kişiye “şu anda ne yaşıyorum?” sorusuna daha sakin bir cevap verebilecek bir kaynak oluşturmaktır.'
    ]
    for p in text:
        y = para(p, M, y, width=330, size=10.5, leading=14.7)
        y -= 8
    note_box('Unutmayın', 'Panik atak sırasında yaşanan belirtiler gerçek olabilir; ancak bu belirtilerin hissediliyor olması her zaman tehlikeli oldukları anlamına gelmez.', M, 76, 330, 82)
    box(392, 426, 155, 296, fill=PALE)
    c.setFillColor(NAVY); c.setFont('Arial-Bold', 12); c.drawString(408, 694, 'İçindekiler')
    c.setFillColor(MUTED)
    yy=674
    for i,s in enumerate(sections, start=2):
        yy = wrapped_line(f'{i}. {s}', 408, yy, 124, size=8.1, leading=10.5)
        yy -= 8
    footer(2); c.showPage()

def page3():
    y = title('Panik atakta neler olur?', CONTENT_TOP)
    text = [
        'Panik atağı anlamanın en iyi yollarından biri bedenin alarm sistemini tanımaktır. İnsan bedeni gerçek bir tehlike algıladığında “savaş-kaç” sistemi devreye girer. Bu sistem, bizi tehlikeye karşı hazırlamak için kalp, solunum, kaslar ve dikkat üzerinde hızlı değişiklikler oluşturur. Eski zamanlarda bu sistem bir tehdide karşı koşmak, saklanmak ya da mücadele etmek için hayati öneme sahipti. Günümüzde ise aynı sistem bazen ortada gerçek bir fiziksel tehlike yokken de çalışabilir.',
        'Bu sırada adrenalin ve benzeri stres hormonları artar. Kalp daha hızlı atmaya başlar; çünkü beden kaslara daha fazla kan göndermek ister. Kişi bunu çarpıntı, göğüste baskı veya kalbin yerinden çıkacakmış gibi atması şeklinde hissedebilir. Panik yaşayan birçok kişi tam da bu noktada “kalbimde ciddi bir şey oluyor” diye düşünür. Oysa çarpıntı tek başına her zaman tehlikeli bir anlam taşımaz; bedenin alarm halinin bir parçası olabilir.',
        'Solunum da değişir. Kişi daha sık, daha yüzeysel ya da daha hızlı nefes almaya başlayabilir. Bazen nefes yetmiyormuş gibi hissedilir. Nefesi kontrol etmeye çalışmak ise bazı kişilerde gerginliği artırabilir. Hızlı soluma baş dönmesi, sersemlik, ellerde veya yüzde uyuşma gibi belirtileri güçlendirebilir.',
        'Panik sırasında gerçek dışılık hissi de yaşanabilir. Kişi bulunduğu ortamı yabancı, bulanık ya da rüya gibi algılayabilir. Bazen “kontrolümü kaybedeceğim”, “delireceğim” ya da “kendime bir şey yapacağım” korkusu ortaya çıkar. Bu düşünceler çok korkutucu olabilir; fakat panik sırasında zihnin alarm halindeyken ürettiği felaket yorumları olarak ele alınmalıdır.',
        'Özetle panik atak, bedenin alarm sisteminin yoğun biçimde çalıştığı bir durumdur. Belirtiler gerçek hissedilir; fakat bu belirtileri doğru yorumlamak, korkunun büyümesini azaltmada önemli bir adımdır.'
    ]
    for p in text:
        y = para(p, M, y, width=348, size=10.5, leading=14.7)
        y -= 7
    note_box('Kalp çarpıntısı', 'Alarm halinde kalp daha hızlı çalışabilir. Çarpıntı korkutucu olsa da tek başına her zaman kalp krizi anlamına gelmez.', 414, 592, 132, 120)
    note_box('Nefes değişikliği', 'Nefesi zorla kontrol etmeye çalışmak bazen gerginliği artırabilir. Önce fark etmek çoğu zaman daha uygundur.', 414, 456, 132, 120)
    note_box('Gerçek dışılık', 'Ortamın tuhaf ya da uzak gelmesi panik sırasında görülebilir. Bu his korkutucu olsa da çoğu zaman geçicidir.', 414, 320, 132, 120)
    footer(3); c.showPage()

def page4():
    y = title('Panik atağın döngüsü', CONTENT_TOP)
    cx, cy = W/2, 430
    labels = ['Bedensel belirti', 'Tehlike yorumu', 'Korku', 'Adrenalin artışı', 'Belirtilerin artması', 'Daha fazla korku']
    pts = [(cx, cy+160), (cx+150, cy+82), (cx+150, cy-82), (cx, cy-160), (cx-150, cy-82), (cx-150, cy+82)]
    for i,(x,y2) in enumerate(pts):
        box(x-63, y2-24, 126, 48, fill=LIGHT, stroke=BLUE, radius=12)
        c.setFillColor(NAVY); c.setFont('Arial-Bold', 9.5)
        for j,line in enumerate(textwrap.wrap(labels[i], width=18)):
            c.drawCentredString(x, y2+5-j*12, line)
    c.setStrokeColor(NAVY2); c.setLineWidth(1.2); c.setFillColor(NAVY2)
    for (x1,y1),(x2,y2) in zip(pts, pts[1:]+pts[:1]):
        c.line(x1, y1-30 if y1>y2 else y1+30, x2, y2+30 if y1>y2 else y2-30)
    y = 204
    text = ('Panik atağın döngüsünde ilk kıvılcım çoğu zaman bedensel bir belirtidir. Kalbin hızlı atması, göğüste sıkışma, nefesin yetmediği hissi ya da baş dönmesi zihin tarafından “tehlike” işareti olarak yorumlanabilir. Bu yorum korkuyu artırır. Korku arttıkça adrenalin yükselir ve beden daha fazla alarm belirtisi üretir. Böylece kişi başlangıçtaki belirtiden daha güçlü belirtiler yaşamaya başlar. Döngüyü anlamak önemlidir; çünkü amaç belirtilerle kavga etmek değil, belirtilerin korkuyla nasıl büyüdüğünü fark etmektir.')
    y = para(text, M, y, width=500, size=11, leading=15.8, color=MUTED)
    footer(4); c.showPage()

def page5():
    y = title('Kriz sırasında ne yapabilirim?', CONTENT_TOP)
    items = [
        ('1', 'Durduğun yerde kal.', 'Mümkünse güvenli bir yerde pozisyonunu koru. Hemen kaçmak kısa süreli rahatlatabilir; ancak beynin o ortamı tehlikeli olarak kaydetmesine katkı sağlayabilir.'),
        ('2', 'Belirtilerle savaşma.', 'Çarpıntı, titreme veya sıcak basmasıyla kavga etmeye çalışmak dikkati tamamen bedene kilitleyebilir. Önce olanı fark etmek yeterlidir.'),
        ('3', 'Nefesini zorla değiştirmeye çalışma.', 'Derin nefes almaya çalışırken daha çok zorlanabilirsin. Nefesin kendiliğinden ritim bulmasına izin vermek bazen daha sakinleştiricidir.'),
        ('4', 'Çevrendeki beş nesneyi say.', 'Dikkati yalnızca bedensel belirtilerden çevreye taşımak alarm döngüsünün şiddetini azaltmaya yardımcı olabilir.'),
        ('5', 'Ayağını yere hisset.', 'Ayak tabanlarının zemine temasını fark et. Bu küçük temas, bulunduğun ana dönmek için sade bir hatırlatıcı olabilir.'),
        ('6', 'Dalganın geçmesini bekle.', 'Panik atak bir dalga gibi yükselir ve azalır. Görevin dalgayı yenmek değil, dalga geçene kadar kendine eşlik etmektir.')
    ]
    for n,h,t in items:
        box(M, y-72, 500, 58, fill=PALE, stroke=LINE)
        c.setFillColor(BLUE); c.setFont('Georgia-Bold', 24); c.drawString(M+14, y-49, n)
        c.setFillColor(NAVY); c.setFont('Arial-Bold', 12); c.drawString(M+54, y-36, h)
        para(t, M+54, y-52, width=418, size=8.6, leading=10.8, color=MUTED)
        y -= 78
    footer(5); c.showPage()

def page6():
    c.setFillColor(NAVY)
    c.setFont('Georgia-Bold', 25)
    c.drawString(M, CONTENT_TOP, 'Panik atağın ortasında')
    c.drawString(M, CONTENT_TOP - 32, 'kendine söyleyebileceğin cümleler')
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(M, CONTENT_TOP - 44, M + 70, CONTENT_TOP - 44)
    y = CONTENT_TOP - 86
    phrases = [
        'Bunun adı panik atak.',
        'Bu his daha önce de geçti.',
        'Şu anda rahatsızım ama tehlikede değilim.',
        'Kalbimin hızlı atması tek başına kalp krizi anlamına gelmez.',
        'Bu dalga birazdan azalacak.',
        'Bedenim alarm veriyor; alarm her zaman gerçek tehlike demek değildir.',
        'Şu anda yapmam gereken şey kendimi gözlemlemek ve beklemek.'
    ]
    for i,p in enumerate(phrases):
        h = 55 if len(p)<55 else 66
        box(M, y-h, 500, h-10, fill=LIGHT if i%2==0 else PALE, stroke=LINE)
        c.setFillColor(NAVY); c.setFont('Georgia-Bold', 15 if len(p)<62 else 13)
        lines = textwrap.wrap(p, width=54)
        yy = y-30
        for line in lines:
            c.drawCentredString(W/2, yy, f'“{line}”' if line==lines[0] and len(lines)==1 else line)
            yy -= 18
        y -= h+10
    footer(6); c.showPage()

def page7():
    y = title('Yapmaman gereken hatalar', CONTENT_TOP)
    c.setFont('Arial-Bold', 12); c.setFillColor(NAVY)
    c.drawString(M, y, 'Sık yapılanlar')
    c.drawString(W/2+16, y, 'Yerine ne yapılabilir?')
    y -= 18
    rows = [
        ('Sürekli nabız ölçmek', 'Belirtileri gözlemleyip geçmesini beklemek', 'Nabız kontrolü kısa süreli rahatlatabilir; fakat dikkati bedene kilitleyebilir.'),
        ('Google’da belirti aramak', 'Dikkati çevreye yönlendirmek', 'Kriz anında internet araması çoğu zaman felaket yorumlarını artırır.'),
        ('Yakınlardan sürekli güvence istemek', 'Kendi gözlemlerini kullanmak', 'Güvence istemek alışkanlık haline geldiğinde kişinin kendi dayanma becerisi zayıflayabilir.'),
        ('Atağı hemen durdurmaya çalışmak', 'Dalganın yükselip azalmasını beklemek', 'Panikle mücadele etmek bazen paniği büyütür. Beklemek aktif bir beceridir.'),
        ('Her belirtiden kaçınmak', 'Güvenli sınırlar içinde gözlemlemek', 'Kaçınma alanı genişledikçe yaşam daralabilir. Bu süreç kişiye göre planlanmalıdır.'),
        ('Nefesi zorla düzeltmeye çalışmak', 'Nefesi fark etmek ve yumuşakça izlemek', 'Zorlayıcı nefes egzersizleri bazı kişilerde baş dönmesini artırabilir.')
    ]
    colw=236
    for a,b,note in rows:
        box(M, y-64, 500, 58, fill=PALE, stroke=LINE)
        c.setFillColor(NAVY); c.setFont('Arial-Bold', 10.5); c.drawString(M+12, y-23, a)
        c.setFillColor(BLUE); c.setFont('Arial-Bold', 13); c.drawCentredString(W/2, y-27, '→')
        c.setFillColor(NAVY); c.setFont('Arial-Bold', 10.5); c.drawString(W/2+16, y-23, b)
        para(note, M+12, y-42, 476, size=8.5, leading=10.8, color=MUTED)
        y -= 72
    footer(7); c.showPage()

def page8():
    y = title('Panik ataktan sonra', CONTENT_TOP)
    text = [
        'Panik atak geçtikten sonra birçok kişi kendisini bitkin, hassas veya zihinsel olarak yorulmuş hisseder. Bu şaşırtıcı değildir. Atak sırasında beden yoğun bir alarm hali yaşamıştır. Kalp, solunum, kaslar ve dikkat sistemi bir süre yüksek uyarılma düzeyinde çalışır. Bu nedenle atak bittikten sonra sanki uzun süre koşmuş ya da çok yoğun bir stres yaşamış gibi yorgunluk hissedilebilir.',
        'Bazı kişilerde atağın ardından baş ağrısı, kaslarda gerginlik, mide rahatsızlığı, sersemlik, uyku isteği veya duygusal hassasiyet birkaç saat sürebilir. Bu belirtiler tek başına panik atağın devam ettiği anlamına gelmez. Bedenin yüksek alarmdan daha sakin bir düzeye dönmesi zaman alabilir.',
        'Panik ataktan sonra en sık görülen durumlardan biri “tekrar olacak mı?” korkusudur. Kişi aynı belirtileri yeniden yaşamaktan çekindiği için kalabalık yerlerden, araç kullanmaktan, yalnız kalmaktan veya daha önce atak yaşadığı ortamlardan uzak durmaya başlayabilir. Bu kaçınma davranışları ilk anda güvenli hissettirse de uzun vadede yaşam alanını daraltabilir.',
        'Ertesi gün biraz tedirginlik, bedeni daha fazla dinleme, uyku düzeninde değişiklik veya hafif huzursuzluk görülebilir. Burada önemli olan, atağı tek başına büyük bir felaket gibi ele almak yerine, onu anlaşılabilir bir beden-zihin alarmı olarak değerlendirmektir.',
        'Atak sonrasında kısa bir not almak yararlı olabilir: Nerede başladı? O sırada aklımdan ne geçti? Bedende ne hissettim? Ne yaptığımda biraz daha dayanılabilir oldu? Bu sorular, sonraki görüşmelerde veya kişisel gözlemde panik döngüsünü daha anlaşılır hale getirebilir.'
    ]
    for p in text:
        y=para(p, M, y, width=500, size=11.1, leading=16)
        y-=11
    footer(8); c.showPage()

def page9():
    y = title('Acil durumda küçük kart', CONTENT_TOP)
    para('Bu sayfadaki kartı yazdırdıktan sonra kesip cüzdanınızda veya çantanızda taşıyabilirsiniz. Kart, kriz anında uzun metin okumak zor geldiğinde kısa bir hatırlatıcı olarak kullanılabilir.', M, y, width=500, size=11, leading=16)
    card_w, card_h = 360, 250
    x, yy = W/2-card_w/2, 250
    c.setDash(5,3); c.setStrokeColor(BLUE); c.setLineWidth(1.2)
    c.roundRect(x-10, yy-10, card_w+20, card_h+20, 14, fill=0, stroke=1)
    c.setDash()
    box(x, yy, card_w, card_h, fill=WHITE, stroke=NAVY, radius=16)
    c.setFillColor(NAVY); c.setFont('Georgia-Bold', 16); c.drawCentredString(W/2, yy+card_h-38, 'Acil Durum Kartı')
    c.setStrokeColor(LINE); c.line(x+34, yy+card_h-54, x+card_w-34, yy+card_h-54)
    lines = ['Şu anda panik atak geçiriyor olabilirim.', 'Bu his daha önce de geçti.', 'Yavaşlamaya çalışmama gerek yok.', 'Bekle.', 'Nefes al.', 'Etrafına bak.', 'Bu dalga geçecek.']
    c.setFont('Arial-Bold', 11.6); c.setFillColor(INK)
    ty = yy+card_h-82
    for line in lines:
        c.drawCentredString(W/2, ty, line)
        ty -= 20
    c.setFillColor(MUTED); c.setFont('Arial', 8)
    c.drawCentredString(W/2, yy+16, 'www.ozgurozbebit.com.tr')
    footer(9); c.showPage()

def page10():
    y = title('Ne zaman mutlaka doktora başvurulmalıdır?', CONTENT_TOP, size=23)
    intro = 'Panik atak belirtileri bazı bedensel hastalıklarla karışabilir. Bu nedenle özellikle ilk kez yaşanan veya alışılmıştan farklı seyreden durumlarda tıbbi değerlendirme önemlidir. Aşağıdaki maddeler kesin tanı anlamına gelmez; ancak değerlendirme gerektirebilecek durumları hatırlatır.'
    y=para(intro, M, y, width=500, size=11.2, leading=16)
    y-=16
    items = [
        'Belirtiler ilk kez yaşanıyorsa',
        'Beklenmedik ve daha önce olmayan farklı belirtiler varsa',
        'Göğüs ağrısı alışılmışın dışında, şiddetli veya uzun sürüyorsa',
        'Bayılma, bilinç kaybı ya da belirgin güçsüzlük oluyorsa',
        'Ciddi fiziksel hastalık şüphesi varsa',
        'Nefes darlığı, çarpıntı veya ağrı mevcut hastalıklarla birlikte görülüyorsa',
        'Kişi kendisine zarar verme düşünceleri yaşıyorsa',
        'Ataklar günlük yaşamı belirgin biçimde kısıtlamaya başladıysa'
    ]
    for item in items:
        box(M, y-42, 500, 34, fill=PALE, stroke=LINE)
        c.setFillColor(BLUE); c.circle(M+16, y-24, 4, fill=1, stroke=0)
        c.setFillColor(INK); c.setFont('Arial-Bold', 10.5); c.drawString(M+31, y-28, item)
        y-=48
    note_box('Önemli', 'Acil ya da alışılmışın dışında bir bedensel belirti varsa, bunu yalnızca panik olarak değerlendirmek doğru olmayabilir. Tıbbi değerlendirme güvenli bir adımdır.', M, 82, 500, 78)
    footer(10); c.showPage()

def page11():
    y = title('Sık Sorulan Sorular', CONTENT_TOP)
    faqs = [
        ('Panik ataktan ölünür mü?', 'Panik atak çok korkutucu hissedilebilir; ancak tek başına panik atağın ölümcül olduğu söylenemez. Yine de ilk kez yaşanan veya farklı seyreden belirtilerde tıbbi değerlendirme gerekir.'),
        ('Panik atak kaç dakika sürer?', 'Çoğu atak birkaç dakika içinde yükselir ve zamanla azalır. Bazı kişilerde sonrasındaki yorgunluk ve hassasiyet daha uzun sürebilir.'),
        ('Her çarpıntı panik atak mıdır?', 'Hayır. Çarpıntının birçok nedeni olabilir. Özellikle yeni başlayan, şiddetli veya farklı belirtilerle birlikte olan çarpıntı değerlendirilmelidir.'),
        ('Panik atak delilik belirtisi midir?', 'Panik atak kişinin aklını kaybettiği anlamına gelmez. Alarm sistemi çok güçlü çalıştığında zihin kontrolü kaybetme korkusu üretebilir.'),
        ('İlaç şart mıdır?', 'Her kişi için aynı cevap geçerli değildir. Tedavi planı belirtilerin sıklığına, şiddetine, eşlik eden durumlara ve kişinin ihtiyaçlarına göre değerlendirilir.'),
        ('Nefes egzersizi herkes için uygun mu?', 'Bazı kişilerde nefesi zorla kontrol etmek rahatsızlığı artırabilir. Nefes çalışmaları kişiye uygun ve yumuşak biçimde planlanmalıdır.'),
        ('Panik atak tekrarlar mı?', 'Bazı kişilerde tekrarlayabilir, bazılarında tek bir dönemle sınırlı kalabilir. Tekrar korkusu yaşam alanını daraltıyorsa destek almak yararlı olabilir.'),
        ('Spor yapmak panik atağı artırır mı?', 'Kalp atışını artıran aktiviteler bazı kişilerde panik belirtilerini hatırlatabilir. Ancak uygun planlandığında hareket etmek çoğu kişi için yararlıdır.'),
        ('Panik atağı saklamak gerekir mi?', 'Hayır. Güvendiğiniz kişilerle yaşadığınız durumu sade biçimde paylaşmak, yalnızlık hissini azaltabilir.'),
        ('Ne zaman uzman desteği almalıyım?', 'Ataklar tekrarlıyor, kaçınma artıyor veya günlük yaşam belirgin etkileniyorsa bir ruh sağlığı uzmanından değerlendirme almak önemlidir.')
    ]
    col_x = [M, W/2+12]
    col_y = [y, y]
    for idx,(q,a) in enumerate(faqs):
        col = 0 if idx < 5 else 1
        x=col_x[col]; yy=col_y[col]
        c.setFillColor(NAVY); c.setFont('Arial-Bold', 9.8); c.drawString(x, yy, q)
        yy = para(a, x, yy-14, width=232, size=8.5, leading=11.5, color=MUTED)
        yy -= 11
        col_y[col] = yy
    footer(11); c.showPage()

def page12():
    y = title('Son söz', CONTENT_TOP)
    text = [
        'Panik atak yaşayan bir kişiye dışarıdan bakıldığında her şey kısa süren bir kaygı hali gibi görünebilir. Oysa atağın içinden geçen kişi için zaman yavaşlar, bedenin her belirtisi büyür ve zihin en kötü ihtimalleri çok hızlı üretmeye başlar. Bu nedenle panik atağı küçümsemek doğru değildir. Kişinin yaşadığı korku gerçektir; yalnızca korkunun işaret ettiği tehlike her zaman gerçek olmayabilir.',
        'Panikle çalışmanın ilk adımı çoğu zaman onu yenmeye çalışmak değil, onu tanımaktır. Kalbin neden hızlandığını, nefesin neden değiştiğini, baş dönmesi ya da uyuşmanın nasıl ortaya çıkabildiğini anlamak kişiye küçük ama önemli bir mesafe kazandırır. Bu mesafe, “bana ne oluyor?” sorusunun yerini yavaş yavaş “bedenim alarm veriyor ve ben bunu gözlemleyebilirim” düşüncesine bırakabilir.',
        'İyileşme her zaman düz bir çizgi halinde ilerlemez. Bazı günler kişi kendini daha güvende hisseder, bazı günler küçük bir belirti bile eski korkuyu uyandırabilir. Bu geri dönüşler başarısızlık anlamına gelmez. Panik döngüsünü anlamak, tekrar eden deneyimlerde kendine daha sakin eşlik edebilmek ve gerektiğinde profesyonel destek almak sürecin doğal parçalarıdır.',
        'Bu rehberi bir kez okuyup kenara koymak yerine, sakin zamanlarda birkaç kez gözden geçirmek daha yararlı olabilir. Kriz anında uzun açıklamalar okumak zor olabilir; bu nedenle küçük kart, kısa cümleler ve adım adım kutular özellikle hatırlatıcı olarak tasarlanmıştır.',
        'Korku ne kadar güçlü olursa olsun, onu anlamaya çalışmak kişinin kendisine gösterdiği önemli bir özen biçimidir. Panik atağın varlığı, kişinin güçsüz olduğu anlamına gelmez. Tam tersine, yaşadığı zorluğu ciddiye alıp destek araması, kendi ruhsal sağlığına sahip çıkması anlamına gelir.'
    ]
    for p in text:
        y=para(p, M, y, width=500, size=11.2, leading=16.2)
        y-=10
    box(M, 78, 500, 62, fill=LIGHT, stroke=LINE)
    c.setFillColor(NAVY); c.setFont('Arial-Bold', 10.2)
    c.drawString(M+16, 116, 'Bu rehber yalnızca genel bilgilendirme amacıyla hazırlanmıştır.')
    c.drawString(M+16, 96, 'Tanı ve tedavinin yerine geçmez.')
    footer(12); c.showPage()

for func in [page1,page2,page3,page4,page5,page6,page7,page8,page9,page10,page11,page12]:
    func()
c.save()
print(OUT)
