const showcaseImgs = document.querySelectorAll(".showcase-img");
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
let current = 0;

showcaseImgs[current].classList.add("active");

leftArrow.addEventListener("click", function() {
  showcaseImgs[current].classList.remove("active");
  current--;
  if (current < 0) {
    current = showcaseImgs.length - 1;
  }
  showcaseImgs[current].classList.add("active");
});

rightArrow.addEventListener("click", function() {
  showcaseImgs[current].classList.remove("active");
  current++;
  if (current >= showcaseImgs.length) {
    current = 0;
  }
  showcaseImgs[current].classList.add("active");
});
//add auto slide//
let autoSlide = setInterval(function() {
    showcaseImgs[current].classList.remove("active");
    current++;
    if (current >= showcaseImgs.length) {
        current = 0;
    }
    showcaseImgs[current].classList.add("active");
    }, 5000);