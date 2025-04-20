import ScrollReveal from "scrollreveal";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

// import swiper styles bundle
import "swiper/css";
import "swiper/css/bundle";

// toggle button

const navMenu = document.getElementById("nav-menu");
const navlink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
const closeicon = document.getElementById("closeicon");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
});

closeicon.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
});

navlink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
  });
});

// swiper

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  speed: 400,
  spaceBetween: 30,
  autoplay: { delay: 3000, disableOnInteraction: false },
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    1024: { slidesPerView: 4, spaceBetween: 40 },
  },
});

// show scroll up
const scrollUp = function () {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollUp);

// active link
const activeLink = function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("active");
    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeLink);

// change background header - add / remove shadow

const scrollHeader = function () {
  const navbar = document.getElementById("navbar");

  if (this.scrollY >= 200) {
    navbar.classList.add("myboxshadow");
  } else {
    navbar.classList.remove("myboxshadow");
  }
};
window.addEventListener("scroll", scrollHeader);

// animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 300,
  reset: true,
});

sr.reveal(`.hero_top, .ingredients_top, .blog_top, .blog_btn, .newsletter`);
sr.reveal(`.hero_image, .promo_image`, { scale: 0.5 });
sr.reveal(`.hero_outline_1, .hero_outline_2`, {
  scale: 0.5,
  distance: "0px",
  delay: 1000,
});

sr.reveal(`.hero_leaf_1, .hero_leaf_2`, {
  origin: "right",
  delay: 1500,
});
sr.reveal(`.hero_leaf_3`, {
  origin: "left",
  delay: 1500,
});
sr.reveal(`.hero_leaf_4`, {
  origin: "bottom",
  delay: 1500,
});

sr.reveal(`.feature_left, .promo_content`, {
  origin: "left",
});
sr.reveal(`.feature_right`, {
  origin: "right",
});

sr.reveal(`.ingredients_item_right`, {
  origin: "right",
  interval: 100,
});
sr.reveal(`.ingredients_item_left`, {
  origin: "left",
  interval: 100,
});

sr.reveal(`.flavor__item, .blog_item`, {
  interval: 100,
});
