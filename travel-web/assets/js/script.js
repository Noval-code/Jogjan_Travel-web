const navbarContainer = document.querySelector(".navbar-container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbarContainer.style.backgroundColor = "rgba( 255, 255, 255, 0.3 );";
    navbarContainer.style.backdropFilter = "blur( 9px )";
  } else {
    navbarContainer.style.backgroundColor = "transparent";
    navbarContainer.style.backdropFilter = "blur( 0px )";
  }
});
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarList = document.querySelector(".navbar-list");
hamburgerMenu.addEventListener("click", () => {
  navbarList.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbarList.contains(e.target)) {
    navbarList.classList.remove("active");
  }
});
const filterBtn = document.querySelectorAll(".category-btn button");
const destinationList = document.querySelectorAll(".destination-item");
function category(category) {
  destinationList.forEach((item) => {
    const itemId = item.id;
    if (category == "semua" || category == itemId) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
filterBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    let event = e.target.id;
    category(event);
  });
});
category("semua");
