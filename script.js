// Display text on button click
const button = document.getElementById("btn");
const acctInfo = document.querySelector(".accountInfo");

button.addEventListener("click", function () {
  acctInfo.classList.toggle("show");
});

// Slide show
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

// Typewriter
const sentences = [
  "May the LORD perfect ALL that concerns you.",
  "May your day be filled with Joy, Love and Peace.",
  "May the favors of God surround you like a protective shield.",
  "May He make his face to shine upon you and be gracious to you.",
  "May He lift up his countenance upon you and give you peace.",
];

const textElement = document.getElementById("text");
const cursorElement = document.getElementById("cursor");

let sentenceIndex = 0;
let charIndex = 0;

function type() {
  if (sentenceIndex < sentences.length) {
    const sentence = sentences[sentenceIndex];
    if (charIndex < sentence.length) {
      textElement.textContent += sentence.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Adjust typing speed here
    } else {
      cursorElement.style.display = "none";
      setTimeout(clearText, 1000); // Delay before clearing
    }
  } else {
    sentenceIndex = 0; // Restart from the first sentence
    setTimeout(type, 1000); // Delay before starting again
  }
}

function clearText() {
  const currentSentence = sentences[sentenceIndex];
  if (charIndex >= currentSentence.length) {
    charIndex = 0;
    sentenceIndex++;
    textElement.textContent = "";
    cursorElement.style.display = "inline-block";
    setTimeout(type, 500); // Delay before typing next sentence
  } else {
    textElement.textContent = currentSentence.substring(0, charIndex);
    charIndex++;
    setTimeout(clearText, 100); // Adjust clearing speed here
  }
}

type();
