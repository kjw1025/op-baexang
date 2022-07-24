window.onload = function () {

  AOS.init();

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


  // all-search 
  let allSearch = $('.all-search-wrap');
  let r_t_icon = $('.r-t-icon');
  let allSearchClose = $('.all-search-close-bt');


  r_t_icon.click(function (e) {
    e.preventDefault();
    allSearch.addClass('all-search-wrap-open');
  });
  allSearchClose.click(function (e) {
    e.preventDefault();
    allSearch.removeClass('all-search-wrap-open');
  });



  // 비주얼 슬라이드
  let visualArr = ["1", "01", "02", "03"];
  let visualArr2 = [
    "1",
    "BAEXANG GALLERY SHOP GRAND OPEN",
    "GRAND OPEN",
    "BAEXANG"
  ]


  let sw_visual = new Swiper('.sw-visual', {
    loop: true,
    speed: 700,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.visual-pg',
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '">' + "<p>" + visualArr[index + 1] + "</p>" + "<strong>" + visualArr2[index + 1] + "</strong>" + '</div>';
      },
    },
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


  // md pick 탭 메뉴
  let mdSelect_A = $('.art-select > a');
  let mdMainBox = $('.md-mainbox');

  mdMainBox.eq(0).show();
  mdSelect_A.eq(0).addClass('art-select-a-focus');

  $.each(mdSelect_A, function (index) {

    $(this).click(function () {
      mdMainBox.hide();
      mdMainBox.eq(index).show();
      // 포커스 효과 표현
      mdSelect_A.removeClass('art-select-a-focus');
      $(this).addClass('art-select-a-focus');
    });

  });

  // md pick 슬라이드
  let sw_mdPick = new Swiper('.sw-mdpick', {
    observer: true,
    observeParents: true,

    // nav
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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

  //gotop 보이기

  // 현재위치 함수
  let nowY = $(window).scrollTop();
  console.log(nowY);

  let bestArt = $('.best-art');
  let bestArtY = bestArt.offset().top
  console.log(bestArtY);


  bestArt.on('mousewheel', function (e) {
    let wheel = e.originalEvent.wheelDelta;
    console.log(wheel);

    if (wheel > 0) {

      gotop_icon.removeClass('gotop-icon-open');

    } else {

      gotop_icon.addClass('gotop-icon-open');
    }
  });




}