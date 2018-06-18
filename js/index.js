let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');

let current = 0;

// Clear all images
function reset() {
  for(let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// Initialize Slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
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


