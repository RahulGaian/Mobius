// App Slider

new Swiper("#app-swiper", {
  centeredSlides: true,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    280: {
      slidesPerView: 1,
      spaceBetween: 64,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: "2.5",
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: "3.75",
      spaceBetween: 24,
    },
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    prevEl: "#nav-left",
    nextEl: "#nav-right",
  },
});
// Customer Slider
new Swiper("#strip-slider", {
  slidesPerView: "6",
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 700,
  },
  // breakpoints: {
  //   // when window width is >= 320px
  //   280: {
  //     slidesPerView: 1,
  //     spaceBetween: 64,
  //   },

  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 24,
  //   },
  //   1024: {
  //     slidesPerView: "2.5",
  //     spaceBetween: 24,
  //   },
  //   1280: {
  //     slidesPerView: "3.75",
  //     spaceBetween: 24,
  //   },
  // },
});

// App Supported SLider
new Swiper("#strip-slider-2", {
  slidesPerView: "8",
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 700,
  },
});
