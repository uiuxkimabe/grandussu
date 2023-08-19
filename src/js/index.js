// scroll nav
const nav = document.getElementsByTagName("nav")[0];
const btnBooking = document.querySelector(".booking");
window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    nav.style.background = "#1d1d1d";
  } else {
    nav.style.background = "none";
  }
  // scroll btn booking show
  if (window.scrollY > 485) {
    btnBooking.classList.add("show");
  } else {
    btnBooking.classList.remove("show");
  }
});

// click menu hamBtn
const hamBtn = document.querySelector(".hamBtn span");
const navigation = document.querySelector(".navigation");
hamBtn.addEventListener("click", () => {
  hamBtn.classList.toggle("show");
  navigation.classList.toggle("show");
});

// Navigasi Modals Rooms
const cardRooms = document.querySelectorAll(".card-room");
const modal = document.querySelector(".modals");
const cancelCheck = document.querySelector(".btn .cancel");
cardRooms.forEach((element) => {
  element.addEventListener("click", () => {
    modal.classList.add("popup");
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("popup");
  console.info("oke");
});

cancelCheck.addEventListener("click", () => {
  modal.classList.remove("popup");
  console.info("oke");
});
