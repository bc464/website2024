// MODAL
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// CAROUSEL
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});
prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%`;
  });
}

prevBtn.style.display = "none";

// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//   let myDropdown = document.getElementById("myDropdown");
//     if (myDropdown.classList.contains('show')) {
//       myDropdown.classList.remove('show');
//     }
//   }
// }
// MOBILE NAVIGATION
// const hamburgerIcon = document.querySelector(".hamburger-icon");
// const closeIcon = document.querySelector(".close-icon");
// const mobileContent = document.querySelector(".mobile-content");

// hamburgerIcon.addEventListener("click", function () {
//   mobileContent.style.display = "flex";
//   closeIcon.style.display = "block";
//   hamburgerIcon.style.display = "none";
// });

// closeIcon.addEventListener("click", function () {
//   mobileContent.style.display = "none";
//   closeIcon.style.display = "none";
//   hamburgerIcon.style.display = "flex";
// });
