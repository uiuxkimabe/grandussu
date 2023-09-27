const facilitiesPreview = document.querySelectorAll(".img-preview");
const dialog = document.getElementsByTagName("dialog")[0];
const dialogContent = document.querySelectorAll(".dialog-content");
console.info(facilitiesPreview, dialog, dialogContent);
facilitiesPreview.forEach((imgPreview) => {
  imgPreview.addEventListener("click", () => {
    dialog.classList.toggle("popUp");
    dialog.style.transition = ".3s ease-in-out";
  });
});

dialog.addEventListener("click", () => {
  dialog.classList.toggle("popUp");
  dialog.style.transition = ".3s ease-in-out";
});
