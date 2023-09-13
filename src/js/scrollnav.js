// === scroll navbar home page
// scroll nav
const navHome = document.querySelector("#nav-home");
const btnBooking = document.querySelector(".booking");
window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        navHome.style.background = "#1d1d1d";
    } else {
        navHome.style.background = "none";
    }
    // scroll btn booking show
    if (window.scrollY > 485) {
        btnBooking.classList.add("show");
    } else {
        btnBooking.classList.remove("show");
    }
});