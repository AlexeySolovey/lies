$(window).load(function(){

  $('.mail').click(function(e){
    e.preventDefault();
    $('.lightbox').fadeIn(500);
  })

  $('.shadow, .close').click(function(){
      $('.lightbox').fadeOut(500);
    })

  $('.adr a').click(function(e){
    e.preventDefault();
    $('.lightbox2').fadeIn(500);
  })

  $('.shadow, .close').click(function(){
      $('.lightbox2').fadeOut(500);
    })

  $("#menu1").click(function(e){
    $('.menu li').removeClass('current');
    elementClick = $('#page');
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
    $(this).addClass('current');
  });

  $("#menu2").click(function () {
    $('.menu li').removeClass('current');
    elementClick = $('.block_teacher');
    destination = $(elementClick).offset().top - 20;
    $("body,html").animate({scrollTop: destination }, 800);
    $(this).addClass('current');
  });

  $("#menu3").click(function () {
    $('.menu li').removeClass('current');
    elementClick = $('.schedule');
    destination = $(elementClick).offset().top - 100;
    $("body,html").animate({scrollTop: destination }, 800);
    $(this).addClass('current');
  });

  $("#menu4").click(function () {
    $('.menu li').removeClass('current');
    elementClick = $('.block_review');
    destination = $(elementClick).offset().top - 20;
    $("body,html").animate({scrollTop: destination }, 800);
    $(this).addClass('current');
  });

  $("#menu5").click(function () {
    $('.menu li').removeClass('current');
    elementClick = $('.block_course');
    destination = $(elementClick).offset().top - 20;
    $("body,html").animate({scrollTop: destination }, 800);
    $(this).addClass('current');
  });

  $(".btn_rec, .btn_price").click(function () {
    elementClick = $('.block_reg');
    destination = $(elementClick).offset().top - 20;
    $("body,html").animate({scrollTop: destination }, 800);
  });


var windowWidth = $(window).width();


  $('.doc1').click(function(){
    $('.doc1full').fadeIn(500);
  })

  $('.close, .shadow').click(function(){
    $('.doc1full').fadeOut(500);
  })

  $('.doc2').click(function(){
    $('.doc2full').fadeIn(500);
  })

  $('.close, .shadow').click(function(){
    $('.doc2full').fadeOut(500);
  })

  $('.doc3').click(function(){
    $('.doc3full').fadeIn(500);
  })

  $('.close, .shadow').click(function(){
    $('.doc3full').fadeOut(500);
  })

  $(".btn_menu").click(function(){
    $('.menu').fadeToggle('fast');
  })

  initSliderCarusel();
  initSliderCarusel2();
  initSliderCarusel3();
  initSliderCarusel4();
  bannerCycle();
  mobCycle();


  function initSliderCarusel(){
    if (windowWidth < 321) {
      $('.carousel ul').bxSlider({
        slideWidth: 170,
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 10,
        pager: false
      });
    } else if (windowWidth < 610) {
      $('.carousel ul').bxSlider({
        slideWidth: 240,
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 10,
        pager: false
      });
    } else if (windowWidth < 850) {
      $('.carousel ul').bxSlider({
        slideWidth: 240,
        minSlides: 1,
        maxSlides: 2,
        moveSlides: 1,
        slideMargin: 10,
        pager: false
      });
    } else if (windowWidth < 1110) {
      $('.carousel ul').bxSlider({
        slideWidth: 240,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 10,
        pager: false
      });
    } else {
      $('.carousel ul').bxSlider({
        slideWidth: 240,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 10,
        pager: false
      });
    }
  }

  function initSliderCarusel2(){
    $(".car_book ul").bxSlider({
        slideWidth: 550,
        maxSlides: 1,
        moveSlides: 1,
        pager: false
    });
  }

  function initSliderCarusel3(){
    $(".revbox ul").bxSlider({
        slideWidth: 947,
        maxSlides: 1,
        moveSlides: 1,
        pager: false
    });
  }

  function initSliderCarusel4(){
    if (windowWidth < 390){
      $(".doclist ul").bxSlider({
        slideWidth: 250,
        maxSlides: 1,
        moveSlides: 1,
        pager: false
    });
    } else if (windowWidth < 741){
      $(".doclist ul").bxSlider({
        slideWidth: 295,
        maxSlides: 1,
        moveSlides: 1,
        pager: false
    });
    }
      return
  }

  function bannerCycle(){
    $('.cycle ul').cycle({
      fx:     'fade',
      timeout: 5000,
      pager: '.pager',
      pause: true,
      cleartypeNoBg: true
    });
  }

  function mobCycle(){
    $('.mobcycle').cycle({
      fx:     'fade',
      timeout: 5000,
      pager: '.pagermob',
      pause: true,
      cleartypeNoBg: true
    });
  }






});

