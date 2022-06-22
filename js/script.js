window.onload = function(){
  



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
  });


    // 뉴 아트 슬라이드
  let sw_new_art = new Swiper('.sw-new_art', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
  });


  // 리뷰 슬라이드
  let sw_rev = new Swiper('.sw-rev', {
    slidesPerView: 3,
    spaceBetween: 30,
  })


}
