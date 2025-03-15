(function($) {
    "use strict";

    // Hide Loading Box (Preloader) tanpa mengganggu Swiper
    function handlePreloader() {
        if ($('.preloader').length) {
            $('body').addClass('page-loaded');
            $('.preloader').delay(1000).fadeOut(300, function() {
                // Pastikan Swiper diinisialisasi setelah preloader hilang
                initSwiper();
            });
        } else {
            initSwiper(); // Jika tidak ada preloader, langsung inisialisasi Swiper
        }
    }

    // CARD HIMTIKA
    // Inisialisasi Swiper
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

    // Update Header Style dan Scroll to Top tanpa mengganggu Swiper
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var headerUpper = $('.header-upper');
            var headerTop = $('.header-top');
            var scrollLink = $('.scroll-to-top');

            if (windowpos > 136) {
                headerUpper.addClass('sticky');
                headerTop.fadeOut(300);
                scrollLink.fadeIn(1000);
            } else {
                headerUpper.removeClass('sticky');
                headerTop.fadeIn(300);
                scrollLink.fadeOut(300);
            }
        }
    }

    // Cegah sticky header merusak Swiper
    $(window).on('scroll', function() {
        if (!$('.swiper-container:hover').length) { // Pastikan tidak mengganggu Swiper saat di-hover
            headerStyle();
        }
    });

    // Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
    }

    // Mobile Nav Hide Show
    if ($('.mobile-menu').length) {
        var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
        $('.sticky-header .main-menu').append(mobileMenuContent);

        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(500);
        });

        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });
    }

    // Scroll to a Specific Div tanpa mengganggu Swiper
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function(e) {
            var target = $(this).attr('data-target');

            if (!$(e.target).closest('.swiper-container').length) {
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1500);
            }
        });
    }

    // Load Event
    $(window).on('load', function() {
        handlePreloader();
    });

})(window.jQuery);



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