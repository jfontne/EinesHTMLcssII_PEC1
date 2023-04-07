
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper';

import 'swiper/swiper-bundle.css';
import 'swiper/swiper-element-bundle.css';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    centeredSlides: true,
    //centeredSlidesBounds: true,
    loop: true,
    autoHeight: false,
    //slidesPerGroup: 1,
    slidesPerView: 1,
    centerInsufficientSlides: true,
    autoplay: {
        delay:1000,
        
    },
    //centeredSlidesBounds: true,
    modules: [ Navigation, Pagination ],
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });