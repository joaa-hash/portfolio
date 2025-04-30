import SwiperCore, {
  A11y,
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
  Parallax,
  FreeMode,
} from 'swiper';

SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
  HashNavigation,
  History,
  Thumbs,
  Scrollbar,
  Keyboard,
  A11y,
  Parallax,
  FreeMode,
]);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const SliderProps = {
  milImagesFullSlider: {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.ja-project-slider-navigation .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.ja-works-swiper-next',
      prevEl: '.ja-works-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  },
  milReviewsSlider: {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.ja-testimonial-slider-navigation .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.ja-testi-swiper-next',
      prevEl: '.ja-testi-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  milBlogSlider: {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.ja-blog-slider-navigation .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.ja-blog-swiper-next',
      prevEl: '.ja-blog-swiper-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
};
