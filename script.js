/* toggle Menu */

let navbar = document.querySelector('.header .navbar');
let toggleMenu = document.querySelector('.icons #menu-btn');
let closeMenu = document.querySelector('.navbar #nav-close');

toggleMenu.addEventListener('click', () => {
    navbar.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navbar.classList.remove('active');
});

window.onscroll = () => {
    navbar.classList.remove('active');

    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () => {
    navbar.classList.remove('active');

    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

/* search form */

let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('.header #search-btn');
let closeSearch = document.querySelector('#close-search');

searchBtn.addEventListener('click', () => {
    searchForm.classList.add('active');
});

closeSearch.addEventListener('click', () => {
    searchForm.classList.remove('active');
});

/* swiper */

let swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* shop swiper */

  let shopSwiper = new Swiper(".product-slider", {
    loop: true,
    grabCursor:true,
    spaceBetween: 5,
    navigation: {
      nextEl: ".shop .swiper-button-next",
      prevEl: ".shop .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
          },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
  });

    /* reviews swiper */
    let reviewSwiper = new Swiper(".review-slider", {
        loop: true,
        grabCursor:true,
        spaceBetween: 5,
        navigation: {
          nextEl: ".shop .swiper-button-next",
          prevEl: ".shop .swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
              },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
        },
      });

/* Blogs swiper */

let blogsSwiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor:true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
          },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
  });