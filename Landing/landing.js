// JavaScript for continuous image slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const transformValue = -100 * index + '%';
    document.querySelector('.slider-wrapper').style.transform = 'translateX(' + transformValue + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000); // Auto slide every 5 seconds
