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
const myslide = document.querySelectorAll(".trending-offer-details"),
  dot = document.querySelectorAll(".dot");
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}

// --Customer slider-//
const customerSlide = document.querySelectorAll(".customer-Slider"),
  customerDot = document.querySelectorAll(".customerDot ");
let customerCounter = 1;
CounterSlideFun(customerCounter);

let customerTimer = setInterval(autoSlide, 8000);
function CustomerAutoSlide() {
  customerCounter += 1;
  CounterSlideFun(customerCounter);
}
function customerPlusSlides(n) {
  customerCounter += n;
  CounterSlideFun(customerCounter);
  resetTimer();
}
function customerCurrentSlide(n) {
  customerCounter = n;
  CounterSlideFun(customerCounter);
  resetTimer();
}
function resetTimer() {
  clearInterval(customerTimer);
  customerTimer = setInterval(CustomerAutoSlide, 8000);
}

function CounterSlideFun(n) {
  let i;
  for (i = 0; i < customerSlide.length; i++) {
    customerSlide[i].style.display = "none";
  }
  for (i = 0; i < customerDot.length; i++) {
    customerDot[i].className = customerDot[i].className.replace(" active", "");
  }
  if (n > customerSlide.length) {
    customerCounter = 1;
  }
  if (n < 1) {
    customerCounter = customerSlide.length;
  }
  customerSlide[customerCounter - 1].style.display = "block";
  customerDot[customerCounter - 1].className += " active";
}

// *********************** --