const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Testimonial slider
let slider = document.querySelector('.slider-track');
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function updateSlider() {
  slider.style.transform = 'translateX(' + (-currentIndex * 320) + 'px)';
}

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateSlider();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateSlider();
}, 4000);
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
