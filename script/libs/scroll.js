"use strict";
export class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      once: true,
    };
    this.cb = cb;
    // 呼び出しごとにoptionを追加できるようにする
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this._init();
  }
  _init() {
    const callback = function (entrise, observer) {
      entrise.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          // onceの値によって監視を一度きりにするか決める
          if (this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };
    const io = new IntersectionObserver(callback.bind(this), this.options);
    this.els.forEach((el) => io.observe(el));
  }
}
