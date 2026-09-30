const DEFAULT_UPSTREAM = "https://ozgur-server.tailb351f6.ts.net";
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const MAX_RANGE_DAYS = 90;

function sendJson(response, status, payload) {
  response.setHeader("Cache-Control", "no-store");
  response.status(status).json(payload);
}

function dayDistance(from, to) {
  const fromDate = new Date(`${from}T00:00:00Z`);
  const toDate = new Date(`${to}T00:00:00Z`);
  return Math.round((toDate - fromDate) / 86400000);
}

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return sendJson(response, 405, { detail: "Yalnızca GET istekleri desteklenir." });
  }

  const { from, to } = request.query || {};
  if (
    typeof from !== "string" ||
    typeof to !== "string" ||
    !DATE_PATTERN.test(from) ||
    !DATE_PATTERN.test(to) ||
    dayDistance(from, to) < 0 ||
    dayDistance(from, to) >= MAX_RANGE_DAYS
  ) {
    return sendJson(response, 400, { detail: "Geçerli, en fazla 90 günlük bir tarih aralığı gönderin." });
  }

  try {
    const baseUrl = process.env.UBUNTU_PUBLIC_API_BASE || DEFAULT_UPSTREAM;
    const upstream = await fetch(`${baseUrl}/public/availability?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`, {
      headers: { Accept: "application/json" }
    });
    const payload = await upstream.json().catch(() => ({ detail: "Uygunluk yanıtı okunamadı." }));
    return sendJson(response, upstream.status, payload);
  } catch {
    return sendJson(response, 502, { detail: "Uygunluk bilgisi şu anda alınamıyor. Lütfen daha sonra tekrar deneyin." });
  }
}
