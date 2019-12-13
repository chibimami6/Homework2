// $(function () {})

$(".footer-right").on("click", function () {
    // console.log(123);
    $("html, body").animate({ scrollTop: 0 }, 1500);
})

let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    // centeredSlides: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  })

$('h1').on('click', function () {
    // idがscrollの位置まで移動する
    // スクロールしたい要素の位置を取得
    let target = $('#scroll').offset().top;
    console.log(target);
    // 取得した要素の場所に移動
    $('html, body').animate({ scrollTop: target }, 1500);
  })
  
  