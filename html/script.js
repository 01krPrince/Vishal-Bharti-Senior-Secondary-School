const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0; // Start at the first slide
let autoSlideInterval; // To store the auto-slide interval

// Function to update slide positions
function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove("current");

    if (index === currentIndex) {
      slide.classList.add("current");
    }
  });

  // Move the slides container to show the current slide
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Loop to the first slide
  updateSlides();
}

// Function to move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop to the last slide
  updateSlides();
}

// Auto-slide functionality
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Stop auto-slide on manual navigation
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide(); // Restart auto-slide after manual interaction
}

// Event listeners for navigation buttons
nextBtn.addEventListener("click", () => {
  stopAutoSlide(); // Stop and restart auto-slide
  nextSlide();
});

prevBtn.addEventListener("click", () => {
  stopAutoSlide(); // Stop and restart auto-slide
  prevSlide();
});

// Start auto-slide on page load
startAutoSlide();

// Initialize the slides
updateSlides();
