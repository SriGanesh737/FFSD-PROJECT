let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

let slideContents=["1-Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolorum?","2- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, eligendi dicta?","3- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, molestias?","4- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, culpa consequatur.","5- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae necessitatibus dolorum libero."]

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
//   slides.forEach(slide => slide.classList.remove('active'));
//   slides[currentSlide].classList.add('active');
    displaySlide(currentSlide);
}, 4000);

const displaySlide = (currentSlide) => {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    console.log(slides[currentSlide].children[1].textContent = slideContents[currentSlide]);
}

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    displaySlide(currentSlide);
}
const prevSlide = () => {
    if (currentSlide == 0) currentSlide = slides.length - 1;
    else currentSlide = (currentSlide - 1) % slides.length;
    displaySlide(currentSlide);
}

$('.left-btn').click(prevSlide);
$('.right-btn').click(nextSlide);