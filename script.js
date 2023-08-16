const button = document.getElementById("btn");
const acctInfo = document.querySelector(".accountInfo");
console.log(acctInfo);

button.addEventListener("click", function () {
  // Change the content of the display element
  acctInfo.classList.toggle("show");
});

let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();
