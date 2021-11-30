$(function(){
        //최상단 일회용 창-클릭시 사라짐
        $(".btn-pop").click(function(e){
            e.preventDefault();
            $(".h-pop").slideUp();
        });
    
        //헤더메뉴 스와이퍼
        const swiper = new Swiper('.header-gnb.gnb-main', {
            direction: 'horizontal',
            slidesPerView:3,
            freeMode: true,
            breakpoints:{
                320:{
                    slidesPerView:4,
                    spaceBetween: 9
                },
                480:{
                    slidesPerView:5,
                    spaceBetween: 9
                },
                768:{
                    slidesPerView:6,
                    spaceBetween: 9
                },
                900:{
                    slidesPerView:7,
                    spaceBetween: 9
                },
                1200:{
                    slidesPerView:7.9,
                    spaceBetween: 9
                }
                
            }
          });

        //헤더 gnb 클릭시 이벤트
        //메뉴 아이콘 변경
        //하단메뉴 슬라이드 다운

        $(".gnbBtn").click(function(e){
            e.preventDefault();
            var img = $(".gnbBtn img").attr("src");

            if( img == "img/header/ico-gnb-open.png" ){

                $(".gnbBtn img").attr("src","img/header/ico-gnb-close.png");
                $(".gnb-1d, .gnb-2d-box").stop().slideDown(600);
            }
            else{
                $(".gnbBtn img").attr("src","img/header/ico-gnb-open.png");
                $(".gnb-1d, .gnb-2d-box").stop().slideUp(600);
            }

        });
        

        //gnb-1d 클릭시 하단 ul 메뉴 변경
        // var menuIndex = 0
        $(".gnb-1d h2").click(function(e){

            menuIndex = $(this).attr("data-num");

            // var test = $("gnb-2d-box > ul").eq(menuIndex);
            // console.log(test);

            e.preventDefault();
            $(".gnb-1d h2").removeClass("on");
            $(this).addClass("on");
            if(menuIndex == 4){
                $(".gnb-2d-box").hide();
            }
            else{
                $(".gnb-2d-box").show();
                $(".gnb-2d-box > ul").hide();
                $(".gnb-2d-box > ul").eq(menuIndex).show();
            }



        });


        //768px
        //메뉴클릭시 오른쪽 슬라이드
        $('.m-gnbBtn').click(function(e){
            e.preventDefault();
            $('.m-gnb-wrap').stop().animate({"left":0},1000);
        });
        

        //닫기클릭시 왼쪽 슬라이드
        $('.m-close').click(function(e){

            e.preventDefault();
            $('.m-gnb-wrap').stop().animate({"left":"-100%"},1000);
        });

        //1d메뉴 클릭시 2d메뉴 변경
        $(".m-gnb-1d h2").click(function(e){

            menuIndex = $(this).attr("data-num");

            // var test = $("gnb-2d-box > ul").eq(menuIndex);
            // console.log(test);

            e.preventDefault();
            $(".m-gnb-1d h2").removeClass("on");
            $(this).addClass("on");
            if(menuIndex == 4){
                $(".m-gnb-2d-box").hide();
            }
            else{
                $(".m-gnb-2d-box").show();
                $(".m-gnb-2d-box > ul").hide();
                $(".m-gnb-2d-box > ul").eq(menuIndex).show();
            }



        });

});
