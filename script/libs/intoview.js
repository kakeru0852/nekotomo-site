export class ScrollIntoView {
  constructor(trigger, el) {
    this.DOM = {};
    this.DOM.trigger = document.querySelectorAll(trigger);
    this.DOM.el = document.querySelector(el);
    this.DOM.container = document.querySelector("#grobal-container");
    this.eventType = this._getEventType();
    this._init();
  }
  // スマホとPCでイベントを変える
  _getEventType() {
    return window.ontouchstart ? "touchstart" : "click";
  }
  _init() {
    this.DOM.trigger.forEach((a) => {
      a.addEventListener(this.eventType, (e) => {
        // aタグの本来の機能を止める
        e.preventDefault();
        // モバイルメニューを閉じる
        this.DOM.container.classList.remove("menu-open");
        this.DOM.el.scrollIntoView({
          block: "center",
        });
      });
    });
  }
}
