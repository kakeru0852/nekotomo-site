"use strict";
import { TextAnimation } from "./libs/animate.js";
import { MobileMenu } from "./libs/mobile.js";
import { HeroSlider } from "./libs/slider.js";
import { Slider2 } from "./libs/slider.js";
import { ScrollObserver } from "./libs/scroll.js";
import { ScrollIntoView } from "./libs/intoview.js";

document.addEventListener("DOMContentLoaded", () => {
  new Main();
});
class Main {
  constructor() {
    this.header = document.querySelector(".header");
    this._observers = [];
    this._Init();
  }
  _Init() {
    new MobileMenu();
    this.hero = new HeroSlider(".slider1");
    this.hero.start();
    this.slider = new Slider2(".slider2");
    this.slider.start();
    this._scrollInit();
    new ScrollIntoView(".about", ".section2__title");
    new ScrollIntoView(".breeder", ".section3__title");
    new ScrollIntoView(".baby", ".section4__title");
    new ScrollIntoView(".movie", ".section5__title");
  }
  _textAnimation(el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  }
  _toggleInview(el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  }
  _nav(el, isIntersecting) {
    if (isIntersecting) {
      this.header.classList.remove("triggered");
    } else {
      this.header.classList.add("triggered");
    }
  }

  _scrollInit() {
    this._observers.push(
      new ScrollObserver(".nav-trigger", this._nav.bind(this), { once: false })
    );
    this._observers.push(
      new ScrollObserver(".cover-slide", this._toggleInview)
    );

    this._observers.push(
      new ScrollObserver(".animate-title", this._textAnimation)
    );
  }
}
