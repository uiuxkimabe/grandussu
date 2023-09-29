const facilitiesPreview = document.querySelectorAll(".img-preview");
const dialog = document.getElementsByTagName("dialog")[0];
const dialogContent = document.querySelectorAll(".dialog-content");

function showContent(params) {
  facilitiesPreview[params].addEventListener("click", () => {
    dialog.classList.toggle("popUp");
    dialog.style.transition = ".3s ease-in-out";
    setTimeout(() => {
      dialogContent[params].style.opacity = "1";
    }, 1000);
  });
}

dialog.addEventListener("click", () => {
  dialog.classList.toggle("popUp");
  location.reload();
});

showContent(0);
showContent(1);
showContent(2);
showContent(3);
showContent(4);
