console.log("its working");

const slideS = document.querySelectorAll('.cards');
let currentIndexs = 0;

function showSlides() {
    for (const slide of slideS) {
        slide.style.display = 'none';
    }

    for (let i = 0; i < 3; i++) {
        const index = (currentIndexs + i) % slideS.length;
        slideS[index].style.display = 'block';
    }

    currentIndexs = (currentIndexs + 1) % slideS.length;

    setTimeout(showSlides, 1000); // Change slides every 2 seconds
}

showSlides();

const slideContainerS = document.querySelector('.slide-container');
const sliderBar = document.querySelector('.slider-bar');

function slide() {
    const offset = -sliderBar.value * slideContainerS.offsetWidth;
    slideContainerS.style.transform = `translateX(${offset}px)`;
}

sliderBar.addEventListener('input', slide);



//-------------------------------


const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function showSlide(index) {
     // Calculate the translation value
     const offset = -index * (100 / slides.length);
     // Set the translation on the slide container
     slideContainer.style.transform = `translateX(${offset}%)`;
 }

function slidePrev() {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
}

function slideNext() {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Event listeners for the buttons
prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);
