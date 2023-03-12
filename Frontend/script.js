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

    const popup = document.getElementById("popup");
    const close = document.getElementById("close");
    const dateTime = document.getElementById("date-time");
    
    const currentDateTime = new Date();
    dateTime.innerHTML = `${currentDateTime.toDateString()} ,${currentDateTime.toLocaleTimeString()}`;
    
    popup.style.display = "block";
    
    close.onclick = function() {
      popup.style.display = "none";
    };
    
    
function Logout(){
  alert("Are you sure you want to logout?");
}


// Get the toggle switch and body element
const toggleSwitch = document.querySelector('.toggle-checkbox');

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


