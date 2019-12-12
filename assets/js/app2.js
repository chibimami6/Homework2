// // let swiper = new swiper(".swiper-container", {

// // })

// let target = $("#scroll").offset()top;
// console.log(123);

// // サンプルがクリックされたら
// $("h1").on("click", function () {
//     console.log(123);
// })

// // oがscrollの位置まで移動する



// スクロールしたら
$(window).on("scroll", function () {
    // console.log(123);
    // サンプルを消す
    // $("h1").animate({ opacity: 0 }, 1500);
    // クラス名をはずす
    $("#scroll").removeClass("hide");
    //　ターゲットになる要素の位置
    let　now = $(window).scrollTop()
    let target = $("#scroll").offset().top;
    // 画面の高さを取得
    let hight = window.innerHeight;
    console.log(neight)
    console.log(now);

    if(now > target - 200) {
        console.log("超えました");
        $("#scroll").removeClass("hide");
    }
})

