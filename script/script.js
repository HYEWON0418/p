$(document).ready(function(){

      //모달창 띄우기
      let modal = '<div class="modal"><p class="box"><span class="notice">notice<br></span> 2022 Ver. | 본 사이트는 1920*1080 해상도에 최적화되어있습니다.<br> 본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 만들어졌습니다.<br>일부 내용 및 이미지 등은 출처가 따로 있음을 밝힙니다.</p><p><input type="checkbox" id="ch"><label for="ch">오늘 하루 창 열지 않기</label><input type="button" value="닫기" id="c_btn"></a></p></div>';

      //body태그의 안쪽으로 맨 뒤쪽에 모달내용 출력하기
      $('body').append(modal);

      /*
      제이쿼리 쿠키 사용법
      $.cookie('쿠키이름', '쿠키값', {expires:만료일, path:'저장경로'});
      */
      //1. 사용자의 브라우저에 쿠키값이 none일때
      if($.cookie('popup')=='none'){
        $('.modal').hide();
      }

      let $ex = $('.modal #ch'); //체크박스 변수선언하기

      //사용자가 체크박스에 체크를 했는지 안했는지 확인하는 함수
      function closeModal(){
        if($ex.is(':checked')){ //체크박스에 체크가 된 경우
          $.cookie('popup', 'none', {expires:1, path:'/'}); //쿠키파일 생성하고
        }
        $('.modal').hide(); //팝업 숨김
      }

      //체크하지 않고 그냥 닫기를 누르는 경우
      $('#c_btn').click(function(){
        closeModal();
      });

      //메인내비게이션 마우스 오버시 가로길이 늘리기
      let m_nav = $('#m_nav > ul > li');

      m_nav.hover(function(){
        $(this).addClass('act');
      },function(){
        $(this).removeClass('act');
      });

      $(window).scroll(function(){

        let sPos = $(this).scrollTop();
        console.log(sPos);

        if(sPos >=900){
          $('header').addClass('h_on');
          $('header').find('.gnb a').addClass('on');
          $('header').find('i.fas').addClass('on');
          $('header').find('h1 img').attr('src','./images/로고수정.png');
          $('header > hr').hide();

        }else{
          $('header').removeClass('h_on');
          $('.gnb a').removeClass('on');
          $('header i.fas').removeClass('on');
          $('h1 img').attr('src','./images/로고수정.png');
          $('header > hr').show();
        }
      });

      /*퍼블리싱 효과*/

      $(".hover").mouseleave(
        function () {
          $(this).removeClass("hover");
        });



        (function( $ ) {
            "use strict";
            $(function() {
              $(window).scroll(function(){
                let sPos = $(this).scrollTop();
                console.log(sPos);
                function animated_contents() {
                  $(".zt-skill-bar > div ").each(function (i) {
                    var $this  = $(this),
                    skills = $this.data('width');
                    $this.css({'width' : skills + '%'});
    
                });
            }
           // if(jQuery().appear) {
            if(sPos>=800){
               // $('.zt-skill-bar').appear().on('appear', function() {
                    animated_contents();
               // });
            //} else {
             //   animated_contents();
            }
        });
      });
    }(jQuery));




    /*슬라이드*/
    
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});