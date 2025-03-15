// PARALAX HERO
let text = document.querySelector('.text-hero');
let image = document.querySelector('.image-hero');

let scrollY = 0;
let targetScrollY = 0;
let easing = 0.5; 

function smoothScroll() {
    targetScrollY = window.scrollY;
    scrollY += (targetScrollY - scrollY) * easing;

    text.style.transform = `translateX(${-scrollY * 2.5}px)`;
    image.style.transform = `translateY(${scrollY * 2.5}px)`;

    requestAnimationFrame(smoothScroll);
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(smoothScroll);
});


// CARD HIMTIKA
var swiper = new Swiper('.swiper-container', {
    loop: true,
    grapCursor: true,
    spaceBetween: 65,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});


// ACCORDION
document.querySelectorAll('.accordion-toggle').forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        document.querySelectorAll('.accordion-toggle').forEach((other) => {
          if (other !== this) {
            other.checked = false;
          }
        });
      }
    });
  });