window.onload = function () {



  // 메뉴 오픈 기능
  $('.l-t-icon').click(function (e) {
    e.preventDefault();
    $('.left-menu-wrap').toggleClass('left-menu-wrap-open');
    $('.left-menu-dim').toggleClass('left-menu-dim-open');
  });

  // 메뉴 닫기 기능
  $('.close-btn').click(function (e) {
    e.preventDefault();
    $('.left-menu-wrap').removeClass('left-menu-wrap-open');
    $('.left-menu-dim').removeClass('left-menu-dim-open');
  });











  // 비주얼 슬라이드
  let sw_visual = new Swiper('.sw-visual', {
    loop: true,
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    }
  });


  // 베스트 아트 슬라이드
  let sw_best_art = new Swiper('.sw-best_art', {
    slidesPerView: 4,
    spaceBetween: 10,

    // nav
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    //pg
    pagination: {
      el: ".swiper-pagination",
    },
  });





  // 뉴 아트 슬라이드
  let sw_new_art = new Swiper('.sw-new_art', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,

    // nav
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });


  // 리뷰 슬라이드
  let sw_rev = new Swiper('.sw-rev', {
    slidesPerView: 3,
    spaceBetween: 30,

    // nav
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    //pg
    pagination: {
      el: ".swiper-pagination",
    },

  });



  // gotop
  let gotop_icon = $('.gotop-icon');
  gotop_icon.click(function () {
    $('html').animate({
      scrollTop: 0
    }, 1000);

  });



}