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
  showup() {
    this.background.classList.add("popup");
    setTimeout(() => {
      this.content.classList.add("popup");
    }, 300);
  }
  exit() {
    this.content.classList.remove("popup");
    setTimeout(() => {
      this.background.classList.remove("popup");
    }, 300);
  }
}

const modals = document.querySelector(".modals");
const cardRoom = document.querySelectorAll(".card-room");
const content = document.querySelectorAll(".content");
const [deluxe, superior, vip] = content;
// btn exit popup
const btnExit = document.querySelectorAll(".exit");

// Deluxe
const roomDeluxe = new Popup(modals, deluxe);
roomDeluxe.background = modals;
roomDeluxe.content = deluxe;
cardRoom[0].addEventListener("click", () => {
  roomDeluxe.showup();
});
btnExit[0].addEventListener("click", () => {
  roomDeluxe.exit();
});

// Superior
const roomSuperior = new Popup(modals, superior);
roomSuperior.background = modals;
roomSuperior.content = superior;
cardRoom[1].addEventListener("click", () => {
  roomSuperior.showup();
});
btnExit[1].addEventListener("click", () => {
  roomSuperior.exit();
});

// VIP
const roomVip = new Popup(modals, vip);
roomVip.background = modals;
roomVip.content = vip;
cardRoom[2].addEventListener("click", () => {
  roomVip.showup();
});
btnExit[2].addEventListener("click", () => {
  roomVip.exit();
});

const scrollFacilities = document.querySelector("#our-facilities .row");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
function autoScrollN() {
  return scrollFacilities.scrollBy(266, 0);
}
function autoScrollP() {
  return scrollFacilities.scrollBy(-266, 0);
}

btnNext.addEventListener("click", () => {
  autoScrollN();
});
btnPrev.addEventListener("click", () => {
  autoScrollP();
});
