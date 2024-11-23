window.addEventListener("load", function() {
  // Set a 3-second delay after the page is fully loaded
  setTimeout(function() {
      // Add the class to the right-cont to trigger the animation
      document.querySelector('.right-cont').classList.add('animate');
  }, 100);
});