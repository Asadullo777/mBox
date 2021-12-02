document.addEventListener("DOMContentLoaded", () => {
  // DOM готов к взаимодейтсвию

  const onScrollHeader = () => {
    // объявляем основную функцию onScrollHeader

    const header = document.querySelector(".header"); // находим header и записываем в константу

    let prevScroll = window.pageYOffset; // узнаем на сколько была прокручена страница ранее
    let currentScroll; // на сколько прокручена страница сейчас (пока нет значения)

    window.addEventListener("scroll", () => {
      // при прокрутке страницы

      currentScroll = window.pageYOffset; // узнаем на сколько прокрутили страницу

      const headerHidden = () => header.classList.contains("header_hidden"); // узнаем скрыт header или нет

      if (currentScroll > prevScroll && !headerHidden()) {
        // если прокручиваем страницу вниз и header не скрыт
        header.classList.add("header_hidden"); // то скрываем header
      }
      if (currentScroll < prevScroll && headerHidden()) {
        // если прокручиваем страницу вверх и header скрыт
        header.classList.remove("header_hidden"); // то отображаем header
      }

      prevScroll = currentScroll; // записываем на сколько прокручена страница на данный момент
    });
  };

  onScrollHeader(); // вызываем основную функцию onScrollHeader
  // ..../

  function slides() {
    document.ready(() => {
      const slider = document.querySelector(".trending__tv");
      // slidesblock = document.querySelector(".trending__block"),
      // slidesWrapper = document.querySelector(".trending__wrapper");

      // slidesblock.style.width = 100 * slides.length + "%";
      // slidesblock.style.display = "flex";
      // slidesblock.style.transition = "0.5s all";

      // slidesWrapper.style.overflow = "auto";

      slider.style.position = "relative";
    });
  }
  slides();
  // ....///
  // up////
  function up() {
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        goTopBtn.classList.add("top-show");
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove("top-show");
      }
    }

    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }

    var goTopBtn = document.querySelector(".top");

    window.addEventListener("scroll", trackScroll);
    goTopBtn.addEventListener("click", backToTop);
  }
  up();
});
