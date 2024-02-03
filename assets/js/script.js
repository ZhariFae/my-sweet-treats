const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Making the navbar sticky on scroll. The code selects the element with the class "navbar" and adds the class "sticky" to it when the window is scrolled down by more than 30 pixels. This makes the navbar sticky at the top of the page.

const navLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
const menuToggle = document.querySelector("#navbarNav");
function navLinksClose() {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("show");
    });
  });
}

navLinksClose();

// Closing the navbar links on click. The code selects all the elements with the class "navbar-nav", "nav-item", and "nav-link" and adds an event listener to each of them. When any of these elements are clicked, the class "show" is removed from the element with the id "navbarNav".

const scroll = ScrollReveal({
  distance: "60px",
  delay: 300,
  duration: 2000,
});

scroll.reveal(`.home__info h1, .home__info p, .home__info .main-btn`, {
  origin: "top",
  interval: 100,
});
scroll.reveal(`.home__image img , .home .category-box , content__image`, {
  origin: "left",
  interval: 100,
});

scroll.reveal(`.main-heading , .services .serv , .menu .title`, {
  origin: "top",
  interval: 100,
});
scroll.reveal(`.about , .image`, {
  origin: "left",
});
scroll.reveal(`.about , .content`, {
  origin: "right",
});

scroll.reveal(`.menu`, {
  origin: "bottom",
});
scroll.reveal(`.menu .menu-content .nav .nav-link`, {
  origin: "left",
  interval: 100,
});
scroll.reveal(`.menu , .tab-content`, {
  origin: "right",
  interval: 100,
});
scroll.reveal(`.menu .btn , .careers , .box `, {
  origin: "bottom",
  interval: 100,
});

scroll.reveal(`.contact .left`, {
  origin: "left",
});
scroll.reveal(`.contact .right`, {
  origin: "right",
});

// The code uses the ScrollReveal library to add animations to various elements on the page as they come into view while scrolling. The elements are revealed from different directions (top, bottom, left, right) with a delay and duration specified.

const scrollTopButton = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
});

// The code selects the element with the class "scroll-top" and adds the class "show" to it when the window is scrolled down by more than 50 pixels. This makes the scroll top button appear when the user scrolls down.

const year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();

// The code selects the element with the class "year" and updates its innerHTML with the current year.