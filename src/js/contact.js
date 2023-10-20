// click menu hamBtn
const hamBtn = document.querySelector(".hamBtn span");
const navigation = document.querySelector(".navigation");
hamBtn.addEventListener("click", () => {
  hamBtn.classList.toggle("show");
  navigation.classList.toggle("show");
});

const custName = document.getElementById("name");
const checkIn = document.getElementById("ci");
const checkOut = document.getElementById("co");
const pax = document.getElementById("pax");
const phone = document.getElementById("phone");
const mail = document.getElementById("mail");
const available = document.getElementById("checkavail");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzSW45YO1XKRgprIPytZyR6i6MFvtH6tyyobXF7MhjdB12bFDx5Xn0ZvJltlzNyLZME0A/exec";
const form = document.forms["grand-ussu-contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // ketika submit btn di klik
  available.innerHTML = "Pesan Anda Sedang di Proses";
  setTimeout(() => {
    available.innerHTML = "Done";
  }, 2000);
  setTimeout(() => {
    alert(
      `Terima kasih ${custName.value} telah melakukan booking di Grand Ussu Hotel & Convention. \n pesanan anda sedang kami cek, kami akan menghubungi anda segera. Mohon di tunggu.`
    );
    form.reset();
    available.innerHTML = "Check Available";
  }, 2100);

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
