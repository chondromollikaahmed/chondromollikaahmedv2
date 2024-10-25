// Import Swiper and required modules
import { Pagination, Navigation } from 'swiper/modules';


// Updated servicesSliderProps with modules
export const servicesSliderProps = {
  modules: [Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 40,
  watchSlidesProgress: true,
  noSwipingSelector: 'a',
  loop: false,
  speed: 1000,
  pagination: { clickable: true },
  navigation: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
};

// Updated testimonialsSliderProps with modules
export const testimonialsSliderProps = {
  modules: [Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 40,
  watchSlidesProgress: true,
  noSwipingSelector: 'a',
  loop: false,
  speed: 1000,
  pagination: { clickable: true, type: 'bullets' },
  navigation: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
};
