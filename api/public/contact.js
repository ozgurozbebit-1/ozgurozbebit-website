import nodemailer from "nodemailer";

function sendJson(response, status, payload) {
  response.setHeader("Cache-Control", "no-store");
  response.status(status).json(payload);
}

function cleanText(value, limit) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { detail: "Yalnızca POST istekleri desteklenir." });
  }

  const name = cleanText(request.body?.name, 120);
  const email = cleanText(request.body?.email, 160);
  const message = cleanText(request.body?.message, 4000);
  const website = cleanText(request.body?.website, 200);

  if (website) return sendJson(response, 200, { ok: true });
  if (!name || !EMAIL_PATTERN.test(email) || !message) {
    return sendJson(response, 400, { detail: "Lütfen ad soyad, geçerli e-posta adresi ve sorunuzu eksiksiz yazın." });
  }

  const gmailUser = process.env.CONTACT_GMAIL_USER;
  const gmailAppPassword = process.env.CONTACT_GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailAppPassword) {
    return sendJson(response, 503, { detail: "İletişim formu e-posta ayarı henüz tamamlanmadı." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword }
  });

  try {
    await transporter.sendMail({
      from: `Ozgur Ozbebit Web Sitesi <${gmailUser}>`,
      to: "drozgurozbebit@gmail.com",
      replyTo: email,
      subject: `Web sitesi iletişim formu — ${name}`,
      text: `Ad Soyad: ${name}\nE-posta: ${email}\n\nSoru / Mesaj:\n${message}`
    });
    return sendJson(response, 200, { ok: true });
  } catch {
    return sendJson(response, 502, { detail: "Mesaj şu anda gönderilemedi. Lütfen daha sonra tekrar deneyin." });
  }
}
