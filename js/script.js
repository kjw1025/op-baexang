$(document).ready(function () {
  // gotop
  let gotop_icon = $(".gotop-icon");
  gotop_icon.click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // gotop  일정위치에서 on/off 기능
  let bestArt = $(".best-art");

  new Waypoint({
    element: bestArt,
    handler: function (direction) {
      if (direction == "down") {
        gotop_icon.addClass("gotop-icon-open");
      } else if (direction == "up") {
        gotop_icon.removeClass("gotop-icon-open");
      }
    },
    offset: "10%",
  });
});

window.onload = function () {
  AOS.init();

  // 메뉴 오픈 기능
  $(".l-t-icon").click(function (e) {
    e.preventDefault();
    $(".left-menu-wrap").toggleClass("left-menu-wrap-open");
    $(".left-menu-dim").toggleClass("left-menu-dim-open");
  });

  // 메뉴 닫기 기능
  $(".close-btn").click(function (e) {
    e.preventDefault();
    $(".left-menu-wrap").removeClass("left-menu-wrap-open");
    $(".left-menu-dim").removeClass("left-menu-dim-open");
  });

  // all-search
  let allSearch = $(".all-search-wrap");
  let r_t_icon = $(".r-t-icon");
  let allSearchClose = $(".all-search-close-bt");

  r_t_icon.click(function (e) {
    e.preventDefault();
    allSearch.addClass("all-search-wrap-open");
  });
  allSearchClose.click(function (e) {
    e.preventDefault();
    allSearch.removeClass("all-search-wrap-open");
  });

  // 스크롤에 따른 헤더 on/off 기능
  let header = $(".header");

  $(window).on("mousewheel", function (e) {
    let wheel = e.originalEvent.wheelDelta;
    console.log(wheel);

    if (wheel < 0) {
      header.addClass("header-close");
    } else {
      header.removeClass("header-close");
    }
  });

  // Visual 슬라이드
  let visualArr = ["1", "01", "02", "03"];
  let visualArr2 = [
    "1",
    "BAEXANG GALLERY SHOP GRAND OPEN",
    "GRAND OPEN",
    "BAEXANG",
  ];

  let sw_visual = new Swiper(".sw-visual", {
    loop: true,
    speed: 700,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".visual-pg",
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <div class="${className}">
            <strong>${visualArr[index + 1]}</strong>
            <p>${visualArr2[index + 1]}</p>
          </div>
        `;
        // '<div class="' + className + '">' + "<p>" + visualArr[index + 1] + "</p>" + "<strong>" + visualArr2[index + 1] + "</strong>" + '</div>';
      },
    },
    navigation: {
      nextEl: ".sw-visual .swiper-button-next",
      prevEl: ".sw-visual .swiper-button-prev",
    },
  });

  // 베스트 아트 슬라이드
  let sw_best_art = new Swiper(".sw-best_art", {
    slidesPerView: 2,
    spaceBetween: 20,

    // nav
    navigation: {
      nextEl: ".sw-b_art-next",
      prevEl: ".sw-b_art-prev",
    },

    //pg
    pagination: {
      el: ".b-art-pg",
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4, //브라우저가 1024보다 클 때
        spaceBetween: 30,
      },
    },
  });

  // md pick 탭 메뉴
  let mdSelect_A = $(".art-select > a");

  let paintingWrap = $(".painting-wrap");
  let photoWrap = $(".photo-wrap");

  // 슬라이드 변수
  let sw_mdPick1;
  let sw_mdPick1_Desc;

  let sw_mdPick2;
  let sw_mdPick2_Desc;

  paintingWrap.show();
  photoWrap.hide();

  mdSelect_A.eq(0).addClass("art-select-a-focus");

  $.each(mdSelect_A, function (index) {
    $(this).click(function () {
      paintingWrap.hide();
      photoWrap.hide();

      sw_mdPick1.slideTo(0);
      sw_mdPick2.slideTo(0);

      if (index == 0) {
        paintingWrap.show();
      } else {
        photoWrap.show();
      }

      // 포커스 효과 표현
      mdSelect_A.removeClass("art-select-a-focus");
      $(this).addClass("art-select-a-focus");
    });
  });

  let descOption = {
    loop: false,
    speed: 1000,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    allowTouchMove: false,
  };

  // md pick 슬라이드
  swMDMake();

  function swMDMake() {
    // 그림작품 슬라이드
    sw_mdPick1 = new Swiper(".sw-mdpick-1", {
      loop: false,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 0,
      observer: true,
      observeParents: true,

      on: {
        progress: function () {
          for (var i = 0; i < this.slides.length; i++) {
            var slideProgress = this.slides[i].progress;
            var innerOffset = this.width * 0.5;
            var innerTranslate = slideProgress * innerOffset;
            this.slides[i].querySelector(".md-main-img").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
        },
        touchStart: function () {
          for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].style.transition = "";
          }
        },
        setTransition: function (speed) {
          for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].style.transition = speed + "ms";
            this.slides[i].querySelector(".md-main-img").style.transition =
              speed + "ms";
          }
        },
      },

      // nav
      navigation: {
        nextEl: ".sw-mdpick-next-1",
        prevEl: ".sw-mdpick-prev-1",
      },
    });
    sw_mdPick1_Desc = new Swiper(".md-box-1", descOption);
    sw_mdPick1.controller.control = sw_mdPick1_Desc;
    sw_mdPick1_Desc.controller.control = sw_mdPick1;

    // 사진작품 슬라이드
    sw_mdPick2 = new Swiper(".sw-mdpick-2", {
      loop: false,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 0,
      observer: true,
      observeParents: true,

      on: {
        progress: function () {
          for (var i = 0; i < this.slides.length; i++) {
            var slideProgress = this.slides[i].progress;
            var innerOffset = this.width * 0.5;
            var innerTranslate = slideProgress * innerOffset;
            this.slides[i].querySelector(".md-main-img").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
        },
        touchStart: function () {
          for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].style.transition = "";
          }
        },
        setTransition: function (speed) {
          for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].style.transition = speed + "ms";
            this.slides[i].querySelector(".md-main-img").style.transition =
              speed + "ms";
          }
        },
      },

      // nav
      navigation: {
        nextEl: ".sw-mdpick-next-2",
        prevEl: ".sw-mdpick-prev-2",
      },
    });
    sw_mdPick2_Desc = new Swiper(".md-box-2", descOption);
    sw_mdPick2.controller.control = sw_mdPick2_Desc;
    sw_mdPick2_Desc.controller.control = sw_mdPick2;
  }

  // 뉴 아트 슬라이드
  let sw_new_art = new Swiper(".sw-new_art", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,

    // nav
    navigation: {
      nextEl: ".sw-n_art-next",
      prevEl: ".sw-n_art-prev",
    },
  });

  // 리뷰 슬라이드
  let sw_rev = new Swiper(".sw-rev", {
    slidesPerView: 3,
    spaceBetween: 30,

    // nav
    navigation: {
      nextEl: ".sw-r_art-next",
      prevEl: ".sw-r_art-prev",
    },

    //pg
    pagination: {
      el: ".r-pg",
    },
  });
};

// 커서
$(function () {
  cursorFunc();
});

/*===== CURSOR FUNCTION ===== */
function cursorFunc() {
  var cursorBall = $(".cursor-ball");
  var cursorBallCon = $(".cursor-ball .ball");
  var cursorAble = $(".cursor-able");

  var pos = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
  var mouse = {
    x: pos.x,
    y: pos.y,
  };
  var speed = 0.35;

  gsap.set(cursorBall, {
    xPercent: -50,
    yPercent: -50,
  });

  var xSet = gsap.quickSetter(cursorBall, "x", "px");
  var ySet = gsap.quickSetter(cursorBall, "y", "px");

  window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function myfunc() {
    var dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  }

  cursorAble.each(function () {
    var cursorTxt = $(this).attr("data-cursor");
    $(this).on("mouseenter", function (e) {
      cursorBall.css({
        display: "flex",
      });
      gsap.ticker.add(myfunc);
      if (cursorTxt !== undefined) {
        cursorBall.append('<div class="text">' + cursorTxt + "</div>");
        gsap.to(cursorBallCon, 0.3, {
          scale: 3.5,
        });
      } else {
        cursorBallCon.css({
          "border-color": "#c9ab81",
        });
        gsap.to(cursorBallCon, 0.3, {
          scale: 2.5,
        });
      }
    });
    $(this).on("mouseleave", function (e) {
      cursorBall.css({
        display: "none",
      });
      gsap.ticker.remove(myfunc);
      if (cursorTxt !== undefined) {
        cursorBall.find(".text").remove();
        gsap.to(cursorBallCon, 0.3, {
          scale: 0,
        });
      } else {
        cursorBallCon.css({
          "border-color": "#fff",
        });
        gsap.to(cursorBallCon, 0.3, {
          scale: 0,
        });
      }
    });
  });
}
