const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
//-- banner slider --//
const allClass = ["banner-2", "banner-3", "banner-1"];
const getClass = document.getElementById("main-slider");
const setClass = document
  .getElementById("main-slider")
  .setAttribute("class", "banner-1");
let classIndex = 0;
setInterval(() => {
  if (classIndex >= allClass.length) {
    classIndex = 0;
  }
  const classNumber = allClass[classIndex];
  getClass.setAttribute("class", classNumber);
  classIndex++;
}, 4000);

// --Trending Offers slider-//

// Select all slides
const slides = document.querySelectorAll(".offerSlide");

// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
// select prev slide button
const prevSlide = document.querySelector(".btn-prev");
// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
// select next slide button
const nextSlide = document.querySelector(".btn-next");
// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;
// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
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
// Select all customerSlides
// Select all customerSlides
const customerSlides = document.querySelectorAll(".customerSlide");

// loop through customerSlides and set each customerSlides translateX property to index * 100%
customerSlides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
// select prev slide button
const customerPrevSlide = document.querySelector(".customer-prev");
// add event listener and navigation functionality
customerPrevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (customerCurSlide === 0) {
    customerCurSlide = customerMaxSlide;
  } else {
    customerCurSlide--;
  }
  //   move slide by 100%
  customerSlides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - customerCurSlide)}%)`;
  });
});
// select next slide button
const customerNextSlide = document.querySelector(".customer-next");
// current slide counter
let customerCurSlide = 0;
// maximum number of customerSlides
let customerMaxSlide = customerSlides.length - 1;

// add event listener and navigation functionality
customerNextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
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
