// Shrink Header on scroll
const header = document.getElementById('header');

window.onscroll = function() {shrinkHeader();}

function shrinkHeader() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
}

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

// Modal - Facebook login
const modalLoginFb = document.getElementById('modal-login-fb');
const btnCloseFb = document.getElementById('modal-close-fb');
const btnOpenFb = document.getElementById('modal-open-fb');

// When the user clicks on the button, open the modal
btnOpenFb.onclick = function() {
  modalLoginFb.style.display = "flex";
}

// When the user clicks on (x), close the modal
btnCloseFb.onclick = function() {
  modalLoginFb.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalLoginFb) {
    modalLoginFb.style.display = "none";
  }
}

let body = document.body,
    html = document.documentElement;

let height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

var starsFromTop = document.createElement("style");
starsFromTop.innerHTML =
 `#stars:after {
    top: ${height};
  }
  #stars2:after {
    top: ${height};
  }
  #stars3:after {
    top: ${height};
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(${height * -1}px);
    }
}`;

document.head.appendChild(starsFromTop);

// Slider - Seasons
$(document).ready(function() {
  var firstSlider = $('.slider');
  firstSlider.owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    navElement: "div",
  })
});

// Slider - Books
$(document).ready(function() {
  var owl = $('.books');
  owl.owlCarousel({
    margin: 50,
    nav: true,
    loop: true,
    dots: false,
    navElement: "div",
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

// Slider - Winners
$(document).ready(function() {
  var winners = $('.winners');
  winners.owlCarousel({
    margin: 120,
    nav: true,
    navElement: "div",
    loop: true,
    dots: false,
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