(() => {
  const root = document.querySelector("[data-appointment-booking]");
  if (!root) return;

  const calendar = root.querySelector("[data-appointment-calendar]");
  const calendarStatus = root.querySelector("[data-appointment-calendar-status]");
  const previousButton = root.querySelector("[data-appointment-previous]");
  const nextButton = root.querySelector("[data-appointment-next]");
  const formSection = root.querySelector("[data-appointment-form-section]");
  const form = root.querySelector("[data-appointment-form]");
  const selectedSummary = root.querySelector("[data-appointment-selected]");
  const formMessage = root.querySelector("[data-appointment-form-message]");
  const submitButton = form?.querySelector('button[type="submit"]');
  const slots = Array.from({ length: 10 }, (_, index) => `${String(index + 10).padStart(2, "0")}:00`);
  const formatter = new Intl.DateTimeFormat("tr-TR", { weekday: "short", day: "numeric", month: "short" });
  const fullFormatter = new Intl.DateTimeFormat("tr-TR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  const today = startOfDay(new Date());
  const lastDate = addDays(today, 89);
  const state = { windowStart: today, days: {}, selected: null };

  function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function addDays(date, amount) {
    const result = new Date(date);
    result.setDate(result.getDate() + amount);
    return result;
  }

  function toIso(date) {
    const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return offsetDate.toISOString().slice(0, 10);
  }

  function visibleDates() {
    return Array.from({ length: 4 }, (_, index) => addDays(state.windowStart, index)).filter((date) => date <= lastDate);
  }

  function setStatus(message, type = "") {
    calendarStatus.textContent = message;
    calendarStatus.className = `appointment-calendar-status${type ? ` is-${type}` : ""}`;
  }

  function makeSlotButton(date, time, status) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `appointment-slot appointment-slot--${status === "available" ? "available" : "busy"}`;
    button.textContent = time;
    button.disabled = status !== "available";
    if (status !== "available") {
      button.setAttribute("aria-label", `${time} dolu`);
    } else {
      button.setAttribute("aria-label", `${fullFormatter.format(date)} ${time} seç`);
      button.addEventListener("click", () => selectSlot(date, time));
    }
    return button;
  }

  function render() {
    const dates = visibleDates();
    calendar.replaceChildren();
    const days = document.createElement("div");
    days.className = "appointment-calendar-days";

    for (const date of dates) {
      const iso = toIso(date);
      const dayData = state.days[iso];
      const card = document.createElement("section");
      card.className = "appointment-day";
      const heading = document.createElement("h3");
      heading.textContent = formatter.format(date);
      card.append(heading);

      const slotList = document.createElement("div");
      slotList.className = "appointment-slot-list";
      if (dayData?.closed || date.getDay() === 0) {
        const closed = document.createElement("p");
        closed.className = "appointment-closed";
        closed.textContent = "-";
        slotList.append(closed);
      } else if (!dayData) {
        const loading = document.createElement("p");
        loading.className = "appointment-loading";
        loading.textContent = "Yükleniyor…";
        slotList.append(loading);
      } else {
        for (const time of slots) {
          slotList.append(makeSlotButton(date, time, dayData.slots?.[time] || "busy"));
        }
      }
      card.append(slotList);
      days.append(card);
    }
    calendar.append(days);
    previousButton.disabled = state.windowStart <= today;
    nextButton.disabled = addDays(state.windowStart, 4) > lastDate;
  }

  async function loadAvailability() {
    const dates = visibleDates();
    if (!dates.length) return;
    const from = toIso(dates[0]);
    const to = toIso(dates[dates.length - 1]);
    setStatus("Uygun saatler yükleniyor…");
    render();
    try {
      const response = await fetch(`/api/public/availability?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`, {
        headers: { Accept: "application/json" }
      });
      const payload = await response.json();
      if (!response.ok || !payload.days) throw new Error(payload.detail || "Uygunluk bilgisi alınamadı.");
      Object.assign(state.days, payload.days);
      setStatus("Uygun saatlerden birini seçin.");
    } catch (error) {
      setStatus(error.message || "Uygunluk bilgisi şu anda alınamıyor.", "error");
    }
    render();
  }

  function selectSlot(date, time) {
    state.selected = { date: toIso(date), time };
    form.elements.appointment_date.value = state.selected.date;
    form.elements.appointment_time.value = time;
    selectedSummary.textContent = `Seçilen randevu: ${fullFormatter.format(date)} · ${time}`;
    formMessage.textContent = "";
    formSection.hidden = false;
    form.elements.patient_name.focus({ preventScroll: true });
  }

  previousButton.addEventListener("click", () => {
    state.windowStart = addDays(state.windowStart, -4);
    loadAvailability();
  });

  nextButton.addEventListener("click", () => {
    state.windowStart = addDays(state.windowStart, 4);
    loadAvailability();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!state.selected) return;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    submitButton.disabled = true;
    formMessage.textContent = "Talebiniz gönderiliyor…";
    try {
      const response = await fetch("/api/public/appointment-request", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));
      if (response.status === 409) {
        state.selected = null;
        formSection.hidden = true;
        await loadAvailability();
        setStatus("Bu saat az önce doldu. Lütfen başka bir saat seçin.", "error");
        return;
      }
      if (!response.ok) throw new Error(result.detail || "Randevu talebi gönderilemedi.");
      form.reset();
      state.selected = null;
      formMessage.textContent = "Randevu talebiniz alınmıştır. Onay sonrası sizinle iletişime geçilecektir.";
      formMessage.className = "appointment-form-message is-success";
    } catch (error) {
      formMessage.textContent = error.message || "Randevu talebi gönderilemedi. Lütfen daha sonra tekrar deneyin.";
      formMessage.className = "appointment-form-message is-error";
    } finally {
      submitButton.disabled = false;
    }
  });

  loadAvailability();
})();
