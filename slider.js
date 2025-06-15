const left = document.querySelector(".arrow-left");
const right = document.querySelector(".arrow-right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let currentIndex = 0;


images.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("button");
  if (i === 0) dot.classList.add("active");
  bottom.appendChild(dot);
});

const dots = document.querySelectorAll(".button");


function updateDots(index) {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}


function updateSlider() {
  const width = document.querySelector(".frame").clientWidth;
  slider.style.transform = `translateX(-${currentIndex * width}px)`;
  updateDots(currentIndex);
}


right.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});


left.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});


dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});






