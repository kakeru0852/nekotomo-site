"use strict";
export class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }
  _initSwiper() {
    return new Swiper(this.el, {
      loop: true,
      grabCursor: true,
      effect: "fade",
      centeredSlides: true,
      slidesPerView: 1,
      speed: 2000,
    });
  }
  // startメソッドを呼ぶ時にそれぞれにoptionを追加できるように
  start(options = {}) {
    options = Object.assign(
      {
        delay: 4000,
        disableOnInteraction: false,
      },
      options
    );
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
}
export class Slider2 extends HeroSlider {
  constructor(el) {
    super(el);
  }
  _initSwiper() {
    return new Swiper(this.el, {
      loop: true,
      grabCursor: true,
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: 1,
      speed: 2000,
      breakpoints: {
        960: {
          slidesPerView: 2,
        },
      },
    });
  }
}
