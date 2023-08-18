const projectImages = document.querySelectorAll('.project-images img');

projectImages.forEach(image => {
  image.addEventListener('click', () => {
    image.height < 350 ?
    image.classList.toggle('zoomed') : null;
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const hintContainer = document.getElementById("hint-container");

  // Show the hint
  hintContainer.style.display = "block";

  // Hide the hint after 5 seconds
  setTimeout(function () {
    hintContainer.style.display = "none";
  }, 5000); // 5000 milliseconds = 5 seconds
});
