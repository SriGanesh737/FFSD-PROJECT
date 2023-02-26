let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
}, 2000);
