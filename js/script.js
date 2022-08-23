$(document).ready(function () {


  // gotop
  let gotop_icon = $('.gotop-icon');
  gotop_icon.click(function () {
    $('html').animate({
      scrollTop: 0
    }, 1000);
  });

  // gotop  일정위치에서 on/off 기능
  let bestArt = $('.best-art');

  new Waypoint({
    element: bestArt,
    handler: function (direction) {
      if (direction == 'down') {
        gotop_icon.addClass('gotop-icon-open');
      } else if (direction == 'up') {
        gotop_icon.removeClass('gotop-icon-open');
      }
    },
    offset: '10%'
  });


});




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

  // 스크롤에 따른 헤더 on/off 기능
  let header = $('.header');

  $(window).on('mousewheel', function (e) {
    let wheel = e.originalEvent.wheelDelta;
    console.log(wheel);

    if (wheel < 0) {
      header.addClass('header-close');
    } else {
      header.removeClass('header-close');
    }
  });




  // Visual 슬라이드
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

        // `<div>
        //   <p>${visualArr[index + 1]}</p>
        //   <strong>${visualArr2[index + 1]}</strong>
        // </div>`
      },
    },
    navigation: {
      nextEl: ".sw-visual .swiper-button-next",
      prevEl: ".sw-visual .swiper-button-prev",
    }


  });


  // 베스트 아트 슬라이드
  let sw_best_art = new Swiper('.sw-best_art', {
    slidesPerView: 4,
    spaceBetween: 10,

    // nav
    navigation: {
      nextEl: ".sw-b_art-next",
      prevEl: ".sw-b_art-prev",
    },

    //pg
    pagination: {
      el: ".b-art-pg",
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
  let sw_mdPick1 = new Swiper('.sw-mdpick-1', {
    observer: true,
    observeParents: true,

    // nav
    navigation: {
      nextEl: ".sw-mdpick-next-1",
      prevEl: ".sw-mdpick-prev-1",
    },
  });
  let sw_mdPick2 = new Swiper('.sw-mdpick-2', {
    observer: true,
    observeParents: true,

    // nav
    navigation: {
      nextEl: ".sw-mdpick-next-2",
      prevEl: ".sw-mdpick-prev-2",
    },
  });




  // 뉴 아트 슬라이드
  let sw_new_art = new Swiper('.sw-new_art', {
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
  let sw_rev = new Swiper('.sw-rev', {
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





  //gotop 보이기

  // 현재위치 함수
  // $(window).scroll(() => {
  //   let nowY = $(window).scrollTop(); // 현재 스크롤바 위치
  //   console.log(nowY);

  //   // if (nowY >= bestArtY) {
  //   //   gotop_icon.addClass('gotop-icon-open');
  //   // } else {
  //   //   gotop_icon.removeClass('gotop-icon-open');
  //   // }
  // });

  // let bestArt = $('.best-art');
  // let bestArtY = bestArt.offset().top;
  // console.log(bestArtY);

  // if (nowY >= bestArtY) {
  //   gotop_icon.addClass('gotop-icon-open');
  // } else {
  //   gotop_icon.removeClass('gotop-icon-open');
  // }






}