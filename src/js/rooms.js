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

// Booking Room Form

const pax = document.querySelector(".pax");
const roomQty = document.querySelector(".room_qty");
const night = document.querySelector(".night");
const rooms = document.querySelector(".rooms-qty");

function qtyChange(n, r) {
  pax.addEventListener("change", () => {
    n.innerHTML = pax.value;
  });
  roomQty.addEventListener("change", () => {
    r.innerHTML = roomQty.value;
  });
}

function resetNR() {
  night.innerHTML = "0";
  rooms.innerHTML = "0";
}

qtyChange(night, rooms);

// Send Message to Google Sheets Form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzf4pKrOU82VVdm070DisYKyMMfltTScEBKBX7PhHu58h_MdQYNkRdQNCXxdJ0IJAao9w/exec";
const form = document.forms["booking-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
  form.reset();
  resetNR();
  bookingNotif.classList.toggle("showUp");
  setTimeout(() => {
    bookingNotifDetail.classList.toggle("showUp");
  }, 500);
});

// Booking Alert
const bookingNotif = document.getElementById("booknotif");
const bookingNotifDetail = document.querySelector(".book-notif-detail");
const directWa = document.querySelector(".direct-wa");

directWa.addEventListener("click", () => {
  bookingNotifDetail.classList.toggle("showUp");
  setTimeout(() => {
    bookingNotif.classList.toggle("showUp");
  }, 1000);
});
