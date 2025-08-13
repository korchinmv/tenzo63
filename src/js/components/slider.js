// Подключение свайпера
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
Swiper.use([Navigation, Pagination, Thumbs, Autoplay]);

const factorySwiper = new Swiper(".factory__slider", {
  enabled: true,
  slidesPerView: 1.2,
  spaceBetween: 16,
  breakpoints: {
    480: {
      enabled: true,
      slidesPerView: 2.2,
      spaceBetween: 16,
    },
    768: {
      enabled: true,
      slidesPerView: 3.2,
      spaceBetween: 16,
    },
    990: {
      enabled: false,
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
