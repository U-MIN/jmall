$(function(){
    //더보기 클릭시 화면 보이도록
    $('.list-more').click(function(e){

        e.preventDefault();
        $('.catep-pdt1').slideToggle();
        $('.catep-pdt1').css("display","flex");
        $(this).hide();

    });

    //메뉴 움직이기
    const swiper = new Swiper('.cateP-menu-swiper', {
        direction: 'horizontal',
        slidesPerView:3,
        freeMode: true,
        breakpoints:{

            480:{
                slidesPerView:4,
                spaceBetween: 9
            },

            1200:{
                slidesPerView:4.9,
                spaceBetween: 20
            }
            
        }
      });

      
    //메뉴 탭 상위 하위 바뀌기
    $('.cateP-btn').click(function(e){
        e.preventDefault();
        var btnIdx = $(this).index();
        // console.log(btnIdx);
        
        $('.cateP-title > p').hide();
        $('.cateP-title > p').eq(btnIdx).show();

        $('.catep-pdtWrap').hide();
        $('.catep-pdtWrap').eq(btnIdx).show();

        $('.cateP-btn').removeClass("on");
        $(this).addClass("on");

    });
 


});