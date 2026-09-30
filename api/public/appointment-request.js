const DEFAULT_UPSTREAM = "https://ozgur-server.tailb351f6.ts.net";
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const TIME_PATTERN = /^(1[0-9]):00$/;

function sendJson(response, status, payload) {
  response.setHeader("Cache-Control", "no-store");
  response.status(status).json(payload);
}

function cleanText(value, limit) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { detail: "Yalnızca POST istekleri desteklenir." });
  }

  const patientName = cleanText(request.body?.patient_name, 120);
  const phone = cleanText(request.body?.phone, 40);
  const appointmentDate = cleanText(request.body?.appointment_date, 10);
  const appointmentTime = cleanText(request.body?.appointment_time, 5);
  const appointmentType = cleanText(request.body?.appointment_type, 80) || "Online görüşme";

  if (!patientName || !phone || !DATE_PATTERN.test(appointmentDate) || !TIME_PATTERN.test(appointmentTime)) {
    return sendJson(response, 400, { detail: "Lütfen ad soyad, telefon, geçerli tarih ve saat bilgilerini kontrol edin." });
  }

  const payload = {
    patient_name: patientName,
    phone,
    appointment_date: appointmentDate,
    appointment_time: appointmentTime,
    appointment_type: appointmentType,
    status: "Bekliyor"
  };

  try {
    const baseUrl = process.env.UBUNTU_PUBLIC_API_BASE || DEFAULT_UPSTREAM;
    const upstream = await fetch(`${baseUrl}/public/appointment-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    });
    const text = await upstream.text();
    let responsePayload;
    try {
      responsePayload = text ? JSON.parse(text) : {};
    } catch {
      responsePayload = { detail: "Randevu isteği yanıtı okunamadı." };
    }
    return sendJson(response, upstream.status, responsePayload);
  } catch {
    return sendJson(response, 502, { detail: "Randevu talebi şu anda gönderilemiyor. Lütfen daha sonra tekrar deneyin." });
  }
}
