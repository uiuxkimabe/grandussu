// === HALAMAN PROMOTION ====
// ==== SLIDE PROMOTION ===

const slidePreview = document.querySelectorAll(".slide-preview");
const pageSlide = document.querySelectorAll(".pagination a");
console.info(pageSlide, slidePreview);

pageSlide.forEach((element) => {
  element.addEventListener("click", () => {
    console.info("oke");
    element.preventDefault();
  });
});
