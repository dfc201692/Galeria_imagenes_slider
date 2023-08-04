document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector('.gallery');
  const prevButton = document.getElementById('prevBtn');
  const nextButton = document.getElementById('nextBtn');
  const galleryItems = gallery.querySelectorAll('.gallery-item');
  let currentSlide = 0;

  function showSlide(slideNumber) {
    if (slideNumber < 0) {
      slideNumber = galleryItems.length - 1;
    } else if (slideNumber >= galleryItems.length) {
      slideNumber = 0;
    }

    galleryItems.forEach((item, index) => {
      item.style.display = index === slideNumber ? 'block' : 'none';
    });

    currentSlide = slideNumber;
  }

  prevButton.addEventListener('click', () => {
    showSlide(currentSlide - 1);
  });

  nextButton.addEventListener('click', () => {
    showSlide(currentSlide + 1);
  });

  // Mostrar la primera imagen al cargar
  showSlide(currentSlide);
});
