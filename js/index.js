let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');

let current = 0;

// Clear all images
function reset() {
  for(let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].classList.remove('shown');
  }
}

// Initialize Slider
function startSlide() {
  reset();
  sliderImages[0].classList.add('shown');
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].classList.add('shown');
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].classList.add('shown');
  current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function(e) {
  if(current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener('click', function(e) {
  if(current === sliderImages.length - 1) {
    current = - 1;
  }
  slideRight();
});

startSlide();




// Owl One
$(document).ready(function() {
  var owl = $('.owl-one');
  owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })
});

// Owl Two
$(document).ready(function() {
  var owl2 = $('.owl-two');
  owl2.owlCarousel({
    margin: 20,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  })
});


// Display search form
const displaySearch = document.getElementById('displaySearch');
const searchForm = document.getElementById('searchForm');
const siteTitle = document.getElementById('siteTitle');
const mainNav = document.getElementById('mainNav');
const closeBtn = document.getElementById('closeBtn');

displaySearch.addEventListener('click', function(e) {
  e.preventDefault();
  searchForm.style.display = "flex";
  siteTitle.style.display = "none";
  mainNav.style.display = "none";
});

closeBtn.addEventListener('click', function() {
  searchForm.style.display = "none";
  siteTitle.style.display = "flex";
  mainNav.style.display = "flex";
});

// Fixed Navigation Menu
let scrollTop = window.pageYOffset;
let h = window.innerHeight;

