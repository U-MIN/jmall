$(function(){

    //탭메뉴 클릭시 전체 이미지 리셋되면서 선택 이미지로 대체


    const bestTab = $('.best-tab > li')
    bestTab.click(function(e){

        let bestTab_idx = $(this).index();

        e.preventDefault();
        bestTab.removeClass("on");
        $(this).addClass("on");
        $('.best-cont-wrap').removeClass("on");
        $('.best-cont-wrap').eq(bestTab_idx).addClass("on");




    });

    //탭메뉴 클릭시 해당 상품 div 보여주기



});