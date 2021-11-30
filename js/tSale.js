$(function(){

    //슬라이드 함수 정의
    //버튼 클릭시 슬라이드 움직임
    $('.tSalePager > a').click(function(e){
        
        e.preventDefault();
        
        var pagerBtn = $(this).index();
        console.log(pagerBtn);
        
        $('.tSalePager > a').removeClass("on");
        $(this).addClass("on");

        $('.tSaleWrap').animate({"margin-left":-pagerBtn *100+"%"},700);
        if (pagerBtn == 1){
            $('.arrow-right').fadeOut();
            $('.arrow-left').fadeIn(700);
        }
        else{
            $('.arrow-right').fadeIn(700);
            $('.arrow-left').fadeOut();
        }

    });

    //오른버튼 클릭
    $('.arrow-right').click(function(e){
        e.preventDefault();
        $('.tSaleWrap').animate({"margin-left":-100+"%"},700);
        
        $('.tSalePager > a').removeClass("on");
        $('.tSalePager > a').eq(1).addClass("on");


        $(this).fadeOut();
        $('.arrow-left').fadeIn(700);

    });

    //왼버튼 클릭
    $('.arrow-left').click(function(e){
        
        e.preventDefault();
        $('.tSaleWrap').animate({"margin-left":0 *100+"%"},700);

        $('.tSalePager > a').removeClass("on");
        $('.tSalePager > a').eq(0).addClass("on");

        $(this).fadeOut();
        $('.arrow-right').fadeIn(700);

    });


    //24시간 타이머
    setInterval(function time(){
        var d = new Date();
        var hours = 24 - d.getHours();
        var min = 60 - d.getMinutes();
        var sec = 60 - d.getSeconds();

        //분이 있으면 시 반올림
        if(min =='00'){
         hours = 24 - d.getHours();
        }
        else{
            hours = 23 - d.getHours();
        }

        //초가 있으면 분 반올림
        if(sec == '00'){
            min = 60 - d.getMinutes(); 
        }
        else{
            min = 59 - d.getMinutes();
        }
        //1자리 수면 0붙이기
        if((hours + '').length == 1){
            hours = '0' + hours;
        }
        if((min + '').length == 1){
            min = '0' + min;
        }
        if((sec + '').length == 1){
              sec = '0' + sec;
        }
        $('.deal-timer').html(hours+':'+min+':'+sec)
      }, 1000);


});