(function () {
  const videos = window.WEIRD_CASES_VIDEOS || [];

  function extractYouTubeId(url) {
    if (!url || typeof url !== "string") return "";

    try {
      const parsed = new URL(url);
      const host = parsed.hostname.replace(/^www\./, "");

      if (host === "youtu.be") {
        return parsed.pathname.split("/").filter(Boolean)[0] || "";
      }

      if (host === "youtube.com" || host === "m.youtube.com") {
        if (parsed.pathname === "/watch") {
          return parsed.searchParams.get("v") || "";
        }

        const parts = parsed.pathname.split("/").filter(Boolean);
        if (parts[0] === "shorts" || parts[0] === "embed") {
          return parts[1] || "";
        }
      }
    } catch (error) {
      return "";
    }

    return "";
  }

  function createCard(video) {
    const article = document.createElement("article");
    article.className = video.image ? "weird-case-card has-image" : "weird-case-card";
    const imageMarkup = video.image
      ? `<img class="weird-case-cover" src="${video.image}" alt="${video.imageAlt || `${video.title} kısa video kapak görseli`}" loading="lazy">`
      : "";

    article.innerHTML = `
      ${imageMarkup}
      <span class="weird-case-badge">Kısa video</span>
      <h2>${video.title}</h2>
      <p>${video.description}</p>
      <a class="text-link" href="/psikiyatride-en-tuhaf-vakalar/${video.slug}/">Detay sayfasını aç</a>
    `;
    return article;
  }

  function renderList() {
    const lists = document.querySelectorAll("[data-weird-case-list]");
    if (!lists.length) return;

    lists.forEach((list) => {
      list.innerHTML = "";

      if (!videos.length) {
        list.innerHTML = '<p class="empty-state">Video listesi yakında eklenecek.</p>';
        return;
      }

      videos.forEach((video) => list.appendChild(createCard(video)));
    });
  }

  function renderDetail() {
    const detail = document.querySelector("[data-weird-case-detail]");
    if (!detail) return;

    const slug = detail.getAttribute("data-video-slug");
    const index = videos.findIndex((video) => video.slug === slug);
    const video = videos[index];
    const player = detail.querySelector("[data-youtube-player]");
    const title = detail.querySelector("[data-video-title]");
    const description = detail.querySelector("[data-video-description]");
    const previous = detail.querySelector("[data-previous-video]");
    const next = detail.querySelector("[data-next-video]");

    if (!video) {
      if (player) player.innerHTML = '<div class="video-placeholder">Video bilgisi bulunamadı.</div>';
      return;
    }

    if (title) title.textContent = video.pageTitle || video.title;

    if (description) {
      if (video.detailHtml) {
        description.innerHTML = video.detailHtml;
      } else {
        description.textContent = video.description;
      }
    }

    const youtubeId = extractYouTubeId(video.youtubeUrl);
    if (player) {
      if (youtubeId) {
        player.innerHTML = `
          <iframe
            src="https://www.youtube.com/embed/${youtubeId}"
            title="${video.title}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        `;
      } else {
        player.innerHTML = '<div class="video-placeholder">YouTube bağlantısı eklendiğinde video burada görünecek.</div>';
      }
    }

    const previousVideo = index > 0 ? videos[index - 1] : null;
    const nextVideo = index < videos.length - 1 ? videos[index + 1] : null;

    if (previous) {
      previous.hidden = !previousVideo;
      if (previousVideo) {
        previous.href = `/psikiyatride-en-tuhaf-vakalar/${previousVideo.slug}/`;
        previous.textContent = `Önceki video: ${previousVideo.title}`;
      }
    }

    if (next) {
      next.hidden = !nextVideo;
      if (nextVideo) {
        next.href = `/psikiyatride-en-tuhaf-vakalar/${nextVideo.slug}/`;
        next.textContent = `Sonraki video: ${nextVideo.title}`;
      }
    }
  }

  renderList();
  renderDetail();
})();
