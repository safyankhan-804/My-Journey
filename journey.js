const menuBar = document.getElementById("menuBar");
const menuMobile = document.querySelector(".menu-mobile");

const onClose = () => {
  menuMobile.classList.toggle("show-menu");
};

menuBar.addEventListener("click", () => {
  onClose();
});
