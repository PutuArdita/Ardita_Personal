// toggle class active
const navIsi = document.querySelector(".nav-isi");
//ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navIsi.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navIsi.contains(e.target)) {
    navIsi.classList.remove("active");
  }
});
