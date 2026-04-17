/* =====================================================================
   MAIN.JS — Core site functionality
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ── Footer year ── */
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ══════════════════════════════════════════════════════════════
     MOBILE NAV
     ══════════════════════════════════════════════════════════════ */
  const toggle = document.getElementById("navToggle");
  const links  = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.classList.toggle("active");
      toggle.setAttribute("aria-expanded", open);
    });
    // Close on link click
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ══════════════════════════════════════════════════════════════
     STICKY HEADER
     ══════════════════════════════════════════════════════════════ */
  const header = document.getElementById("site-header");
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    lastScroll = y;
  }, { passive: true });

  /* ══════════════════════════════════════════════════════════════
     SCROLL ANIMATIONS  (Intersection Observer)
     ══════════════════════════════════════════════════════════════ */
  const animEls = document.querySelectorAll(
    ".anim-fade-up, .anim-fade-down, .anim-slide-left, .anim-slide-right, .anim-fade-in"
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  animEls.forEach(el => observer.observe(el));

  /* ══════════════════════════════════════════════════════════════
     COUNTER ANIMATION
     ══════════════════════════════════════════════════════════════ */
  const counters = document.querySelectorAll(".stat-number[data-count]");
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const duration = 2000;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(ease * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  /* ══════════════════════════════════════════════════════════════
     RENDER DRIVERS
     ══════════════════════════════════════════════════════════════ */
  const driversGrid = document.getElementById("drivers-grid");
  if (driversGrid && SITE_DATA.drivers) {
    driversGrid.innerHTML = SITE_DATA.drivers.map((d, i) => `
      <article class="driver-card anim-fade-up delay-${Math.min(i % 3, 2)}" aria-label="${d.name}">
        <div class="driver-img-wrap">
          ${d.image
            ? `<img src="${d.image}" alt="Photo of ${d.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
               <div class="driver-placeholder" style="display:none;"><span>${d.number}</span></div>`
            : `<div class="driver-placeholder"><span>${d.number}</span></div>`
          }
          <div class="driver-number">#${d.number}</div>
        </div>
        <div class="driver-info">
          <h3 class="driver-name">${d.flag} ${d.name}</h3>
          <p class="driver-role">${d.role}</p>
          <p class="driver-series">${d.series}</p>
        </div>
      </article>
    `).join("");

    // Re-observe new animated elements
    driversGrid.querySelectorAll(".anim-fade-up").forEach(el => observer.observe(el));
  }

  /* ══════════════════════════════════════════════════════════════
     RENDER LEAGUES
     ══════════════════════════════════════════════════════════════ */
  const leaguesGrid = document.getElementById("leagues-grid");
  if (leaguesGrid && SITE_DATA.leagues) {
    leaguesGrid.innerHTML = SITE_DATA.leagues.map((l, i) => `
      <a href="${l.url}" target="_blank" rel="noopener noreferrer"
         class="league-card anim-fade-up delay-${Math.min(i % 3, 2)}" aria-label="${l.name}">
        <div class="league-logo-wrap">
          ${l.logo
            ? `<img src="${l.logo}" alt="${l.name} logo" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
               <div class="league-placeholder" style="display:none;"><span>${l.name.charAt(0)}</span></div>`
            : `<div class="league-placeholder"><span>${l.name.charAt(0)}</span></div>`
          }
        </div>
        <div class="league-info">
          <h3>${l.name}</h3>
          <span class="league-platform">${l.platform}</span>
          <p>${l.description}</p>
        </div>
      </a>
    `).join("");

    leaguesGrid.querySelectorAll(".anim-fade-up").forEach(el => observer.observe(el));
  }

  /* ══════════════════════════════════════════════════════════════
     RENDER GALLERY
     ══════════════════════════════════════════════════════════════ */
  const galleryGrid = document.getElementById("gallery-grid");
  if (galleryGrid && SITE_DATA.gallery) {
    galleryGrid.innerHTML = SITE_DATA.gallery.map((g, i) => `
      <div class="gallery-item anim-fade-in delay-${i % 3}" data-index="${i}">
        ${g.image
          ? `<img src="${g.image}" alt="${g.caption}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
             <div class="gallery-placeholder" style="display:none;"><span>${g.caption.substring(0,2).toUpperCase()}</span></div>`
          : `<div class="gallery-placeholder"><span>${g.caption.substring(0,2).toUpperCase()}</span></div>`
        }
        <div class="gallery-overlay">
          <span class="gallery-caption">${g.caption}</span>
          <span class="gallery-category">${g.category || ""}</span>
        </div>
      </div>
    `).join("");

    galleryGrid.querySelectorAll(".anim-fade-in").forEach(el => observer.observe(el));
  }

  /* ══════════════════════════════════════════════════════════════
     RENDER SPONSORS
     ══════════════════════════════════════════════════════════════ */
  const sponsorsGrid = document.getElementById("sponsors-grid");
  if (sponsorsGrid && SITE_DATA.sponsors) {
    // Sort: gold first, then silver, then bronze
    const tierOrder = { gold: 0, silver: 1, bronze: 2 };
    const sorted = [...SITE_DATA.sponsors].sort((a, b) => (tierOrder[a.tier] || 3) - (tierOrder[b.tier] || 3));

    sponsorsGrid.innerHTML = sorted.map((s, i) => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer"
         class="sponsor-card sponsor-${s.tier} anim-fade-up delay-${Math.min(i % 3, 2)}" aria-label="${s.name}">
        <div class="sponsor-tier-badge">${s.tier}</div>
        <div class="sponsor-logo-wrap">
          ${s.logo
            ? `<img src="${s.logo}" alt="${s.name} logo" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
               <div class="sponsor-placeholder" style="display:none;"><span>${s.name}</span></div>`
            : `<div class="sponsor-placeholder"><span>${s.name}</span></div>`
          }
        </div>
        <span class="sponsor-name">${s.name}</span>
      </a>
    `).join("");

    sponsorsGrid.querySelectorAll(".anim-fade-up").forEach(el => observer.observe(el));
  }

  /* ══════════════════════════════════════════════════════════════
     CONTACT FORM (with Formspree + mailto fallback)
     ══════════════════════════════════════════════════════════════ */
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      const action = form.getAttribute("action");
      const status = document.getElementById("form-status");
      const btnText = document.querySelector(".btn-text");
      const btnLoad = document.querySelector(".btn-loading");

      // If Formspree not configured, use mailto fallback
      if (!action || action.includes("YOUR_FORMSPREE_ID")) {
        e.preventDefault();
        const name    = form.name.value.trim();
        const email   = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !subject || !message) {
          status.textContent = "Please fill in all fields.";
          status.className = "form-status error";
          return;
        }

        const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
        const mailto = `mailto:racingprojectmotorsport@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        window.location.href = mailto;
        status.textContent = "Opening your email client... If nothing happens, email us directly at racingprojectmotorsport@gmail.com";
        status.className = "form-status success";
        return;
      }

      // Formspree submit (AJAX)
      e.preventDefault();
      if (btnText) btnText.hidden = true;
      if (btnLoad) btnLoad.hidden = false;

      try {
        const res = await fetch(action, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });
        if (res.ok) {
          status.textContent = "Message sent successfully! We'll get back to you soon.";
          status.className = "form-status success";
          form.reset();
        } else {
          throw new Error("Server error");
        }
      } catch (err) {
        status.textContent = "Something went wrong. Please try again or email us directly.";
        status.className = "form-status error";
      } finally {
        if (btnText) btnText.hidden = false;
        if (btnLoad) btnLoad.hidden = true;
      }
    });
  }

  /* ══════════════════════════════════════════════════════════════
     SMOOTH SCROLL for same-page anchors
     ══════════════════════════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

});
