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

// Class Popup
class Popup {
  constructor(bg, content) {
    this.background = bg;
    this.content = content;
  }
  showup(param) {
    this.background.classList.add("popup");
    setTimeout(() => {
      this.content[param].classList.add("popup");
    }, 300);
  }
  exit(param) {
    this.background.classList.remove("popup");
    setTimeout(() => {
      this.content[param].classList.remove("popup");
    }, 300);
  }
}

const modals = document.querySelector(".modals");
const cardRoom = document.querySelectorAll(".card-room");
const content = document.querySelectorAll(".content");
// btn exit popup
const btnExit = document.querySelectorAll(".exit");
const modRoom = new Popup(modals, content);

cardRoom[0].addEventListener("click", () => {
  modRoom.background;
  modRoom.content;
  modRoom.showup(0);
});

cardRoom[1].addEventListener("click", () => {
  modRoom.background;
  modRoom.content;
  modRoom.showup(1);
});

cardRoom[2].addEventListener("click", () => {
  modRoom.background;
  modRoom.content;
  modRoom.showup(2);
});

btnExit[0].addEventListener("click", () => {
  modRoom.exit(0);
});

btnExit[1].addEventListener("click", () => {
  modRoom.exit(1);
});

btnExit[2].addEventListener("click", () => {
  modRoom.exit(2);
});
