/* =====================================================================
   GALLERY.JS — Lightbox functionality
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const lightbox     = document.getElementById("lightbox");
  const lightboxImg  = document.getElementById("lightbox-img");
  const lightboxCap  = document.getElementById("lightbox-caption");
  const closeBtn     = document.querySelector(".lightbox-close");
  const prevBtn      = document.querySelector(".lightbox-prev");
  const nextBtn      = document.querySelector(".lightbox-next");
  const galleryGrid  = document.getElementById("gallery-grid");

  if (!lightbox || !galleryGrid) return;

  let currentIndex = 0;
  const items = () => SITE_DATA.gallery || [];

  function openLightbox(index) {
    currentIndex = index;
    const item = items()[currentIndex];
    if (!item) return;
    lightboxImg.src = item.image || "";
    lightboxImg.alt = item.caption || "";
    lightboxCap.textContent = item.caption || "";
    lightbox.hidden = false;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
    // Focus trap
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => {
      lightbox.hidden = true;
      lightboxImg.src = "";
    }, 300);
  }

  function navigate(dir) {
    const total = items().length;
    if (total === 0) return;
    currentIndex = (currentIndex + dir + total) % total;
    const item = items()[currentIndex];
    lightboxImg.classList.add("lb-fade");
    setTimeout(() => {
      lightboxImg.src = item.image || "";
      lightboxImg.alt = item.caption || "";
      lightboxCap.textContent = item.caption || "";
      lightboxImg.classList.remove("lb-fade");
    }, 200);
  }

  // Delegate click on gallery grid
  galleryGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".gallery-item");
    if (card) {
      const idx = parseInt(card.getAttribute("data-index"), 10);
      openLightbox(idx);
    }
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => navigate(-1));
  nextBtn.addEventListener("click", () => navigate(1));

  // Close on backdrop click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard nav
  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
  });

});
