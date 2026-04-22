/* =====================================================================
   GALLERY.JS — Lightbox for the gallery section
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const lightbox    = document.getElementById("lightbox");
  const lbImg       = document.getElementById("lightbox-img");
  const lbCaption   = document.getElementById("lightbox-caption");
  const lbClose     = document.querySelector(".lightbox-close");
  const lbPrev      = document.querySelector(".lightbox-prev");
  const lbNext      = document.querySelector(".lightbox-next");

  if (!lightbox || !SITE_DATA || !SITE_DATA.gallery) return;

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.setAttribute("aria-hidden", "false");
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    const item = SITE_DATA.gallery[currentIndex];
    if (!item) return;
    lbImg.classList.add("lb-fade");
    setTimeout(() => {
      lbImg.src = item.image || "";
      lbImg.alt = item.caption || "";
      lbCaption.textContent = item.caption || "";
      lbImg.classList.remove("lb-fade");
    }, 150);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + SITE_DATA.gallery.length) % SITE_DATA.gallery.length;
    updateLightbox();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % SITE_DATA.gallery.length;
    updateLightbox();
  }

  // Event delegation for gallery clicks
  const galleryGrid = document.getElementById("gallery-grid");
  if (galleryGrid) {
    galleryGrid.addEventListener("click", (e) => {
      const item = e.target.closest(".gallery-item");
      if (item) {
        const idx = parseInt(item.getAttribute("data-index"), 10);
        if (!isNaN(idx)) openLightbox(idx);
      }
    });
  }

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbPrev)  lbPrev.addEventListener("click", prevImage);
  if (lbNext)  lbNext.addEventListener("click", nextImage);

  // Keyboard support
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape")     closeLightbox();
    if (e.key === "ArrowLeft")  prevImage();
    if (e.key === "ArrowRight") nextImage();
  });

  // Close on backdrop click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
});
