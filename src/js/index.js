// scroll nav
const nav = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    nav.style.background = "#1d1d1d";
  } else {
    nav.style.background = "none";
  }
});

// click menu hamBtn
const hamBtn = document.querySelector(".hamBtn span");
const navigation = document.querySelector(".navigation");
hamBtn.addEventListener("click", () => {
  hamBtn.classList.toggle("show");
  navigation.classList.toggle("show");
});

// slider profile
const slideProfile = document.querySelectorAll(".nav-profile ul li a");
const profile = document.querySelectorAll(".profile");
slideProfile.forEach((element) => {
  element.addEventListener("click", () => {
    element.preventDefault;
  });
});
