const button = document.getElementById("btn");
const acctInfo = document.querySelector(".accountInfo");

button.addEventListener("click", function () {
  acctInfo.classList.toggle("show");
});

let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Move to the next slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";

  // Call the showSlides function again after 3 seconds
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();
