// nav bar open and close
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

//-- banner slider --//

const allImages = [
  "/asset/banner/b-1.jpg",
  "/asset/banner/b-2.jpg",
  "/asset/banner/b-3.jpg",
];
const getImages = document.getElementById("main-slider");
const setImages = document
  .getElementById("main-slider")
  .setAttribute("src", "/asset/banner/b-1.jpg");
let ImagesIndex = 0;
setInterval(() => {
  if (ImagesIndex >= allImages.length) {
    ImagesIndex = 0;
  }
  const imagesNumber = allImages[ImagesIndex];
  getImages.setAttribute("src", imagesNumber);
  ImagesIndex++;
}, 4000);

// --Trending Offers slider-//

const slides = document.querySelectorAll(".offerSlide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const nextSlide = document.querySelector(".btn-next");

let curSlide = 0;

let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// --Customer slider-//

const customerSlides = document.querySelectorAll(".customerSlide");
customerSlides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
const customerPrevSlide = document.querySelector(".customer-prev");
customerPrevSlide.addEventListener("click", function () {
  if (customerCurSlide === 0) {
    customerCurSlide = customerMaxSlide;
  } else {
    customerCurSlide--;
  }
  customerSlides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - customerCurSlide)}%)`;
  });
});

const customerNextSlide = document.querySelector(".customer-next");
let customerCurSlide = 0;
let customerMaxSlide = customerSlides.length - 1;
customerNextSlide.addEventListener("click", function () {
  if (customerCurSlide === customerMaxSlide) {
    customerCurSlide = 0;
  } else {
    customerCurSlide++;
  }
  customerSlides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - customerCurSlide)}%)`;
  });
});

// *********************** --
