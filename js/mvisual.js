$(function(){

    //슬라이드 자동
    var slideNum = 0;

    
    let autoSlide = setInterval(nextslide, 2000);
    function nextslide(){
        var view = $('.bg');
        view.hide();      
        if(slideNum == view.length-1){
            slideNum=0;
        }
        else{
            slideNum++;
        }
        view.eq(slideNum).fadeIn();
        $('.viewCount > .current').text(slideNum+1+" ");  //숫자카운트
    }


    //슬라이드 멈춤
    $('.view').mouseenter(function(){
        clearInterval(autoSlide);
    });
    $('.view').mouseleave(function(){
        autoSlide = setInterval(nextslide, 2000);
    });


    //버튼 클릭시 이동
    //오른쪽
    $('.nextBtn').click(function(e){
        e.preventDefault();
        nextslide();
    });
    
    //왼쪽
    $('.prevBtn').click(function(e){
        e.preventDefault();
        var view = $('.view > .slide div')
        view.hide();
        if(slideNum == 0){
            slideNum=view.length-1;
        }
        else{
            slideNum--;
        }
        view.eq(slideNum).fadeIn();
        $('.viewCount > .current').text(slideNum+1+" ");  //숫자카운트
    });

    //마우스 오버시
    const btnTab = $(".btnTab-base");
    for(var i=0; i < btnTab.length; i++){

        btnTab.mouseenter(function(){
            $(this).children(".tabUp").show();
            $(this).children(".tabOver").show();
        });
        btnTab.mouseleave(function(){
            $(this).children(".tabUp").hide();
            $(this).children(".tabOver").hide();

        });

        
        //tabUp의 div에 마우스 올렸을 때
        btnTab.eq(i).children(".tabUp").children().mouseenter(function(){
            let idx1 = $(this).index();

            // //슬라이드 이동
            let divNum = $(this).attr('data-view');            
            
            $('.view > .slide div').hide();
            $('.view > .slide div').eq(divNum).show();

            // //슬라이드에 숫자 표시
            $('.viewCount > .current').text(Number(divNum)+1+" ");

            //div 클래스
            $(".tabUp > div").removeClass("on");
            $(this).addClass("on");

            //span 클래스
            $(".tabOver > span").removeClass("on");
            $(this).parent().siblings(".tabOver").children().eq(idx1).addClass("on");

        });

        //tabOver의 div에 마우스 올렸을 때
        btnTab.eq(i).children(".tabOver").children().mouseenter(function(){

            let idx2 = $(this).index();
            //슬라이드 이동
           
            var divNum1 = $(this).parent().siblings(".tabUp").children("div").eq(idx2).attr("data-view");
           
            $('.view > .slide div').hide();
            $('.view > .slide div').eq(divNum1).show();

            // //슬라이드에 숫자 표시
            $('.viewCount > .current').text(Number(divNum1)+1+" ");

            //span 클래스
            $(".tabOver > span").removeClass("on");
            $(this).addClass("on");

            //div 클래스
            $(".tabUp > div").removeClass("on");
            $(this).parent().siblings(".tabUp").children().eq(idx2).addClass("on");

        });
    }


});