const carouselSlide = document.querySelector(".carousel");
const carouselImage = document.querySelectorAll(".slide-img");
const sliderPreview = document.querySelector(".slider");
const photoPreview = document.querySelector(".photo-preview");

// button
const prevBtn = document.getElementById("prevBtn");
prevBtn.disabled = true;
prevBtn.style.color = "#717171";
const nextBtn = document.getElementById("nextBtn");

// counter
let counter = 0;
const size = carouselImage[0].clientWidth;

function slider() {
  carouselImage.forEach((element) => {
    element.style.transform = "translateX(" + -size * counter + "px)";
    element.style.transition = ".3s ease-in-out";
  });
}

// btn listener
nextBtn.addEventListener("click", () => {
  counter++;
  console.info(counter);
  slider();
  if (counter == 1) {
    prevBtn.disabled = false;
    prevBtn.style.color = "#fff";
  } else if (counter == 4) {
    nextBtn.disabled = true;
    nextBtn.style.color = "#717171";
  }
});

prevBtn.addEventListener("click", () => {
  counter--;
  console.info(counter);
  slider();
  if (counter == 0) {
    prevBtn.disabled = true;
    prevBtn.style.color = "#717171";
  } else if (counter == 3) {
    nextBtn.disabled = false;
    nextBtn.style.color = "#fff";
  }
});

photoPreview.addEventListener("click", () => {
  sliderPreview.style.transform = "scale(1)";
});

document.getElementById("closePreview").addEventListener("click", () => {
  sliderPreview.style.transform = "scale(0)";
  setTimeout(() => {
    location.reload();
  }, 300);
});
