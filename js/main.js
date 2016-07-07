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

!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                document,'script','https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '1522098621437998');
        fbq('track', "PageView");

    (function() {
          var _fbq = window._fbq || (window._fbq = []);
          if (!_fbq.loaded) {
              var fbds = document.createElement('script');
              fbds.async = true;
              fbds.src = '//connect.facebook.net/en_US/fbds.js';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(fbds, s);
              _fbq.loaded = true;
          }
      })();
    window._fbq = window._fbq || [];
    window._fbq.push(['track', '6026441886246', {'value':'0.00','currency':'USD'}]);

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-71601968-1', 'auto');
        ga('send', 'pageview');

        //validation
            $('#btn_submit').click(function(){
                // собираем данные с формы
                var user_name    = $('#user_name').val();
                var user_email   = $('#user_email').val();
                var user_phone = $('#user_phone').val();
                var user_birthday = $('#user_birthday').val();
                //var loginWindow = window.open('', 'thankyou');
                // отправляем данные
                $.ajax({
                    url: "send.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "user_name":    user_name,
                        "user_email":   user_email,
                        "user_phone": user_phone,
                        "user_birthday": user_birthday
                    },
                    success: function(data){
                        $('#user_name').val('');
                        $('#user_phone').val('');
                        $('#user_email').val('');
                        $('#user_birthday').val('');

                        window.location.href = 'http://lies.in.ua/pay.php';
                    }
                });
            });


            $('#sub_m').click(function(){
                // собираем данные с формы
                var t_name    = $('#t_name').val();
                var t_email    = $('#t_email').val();
                var t_mess    = $('#t_mess').val();
                // отправляем данные
                $.ajax({
                    url: "sent.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "t_name":   t_name,
                        "t_email":    t_email,
                        "t_mess":    t_mess
                    },
                    success: function(data){
                        $('.lightbox').hide(1);
                        $('.messages2').html(data.result); // выводим ответ сервера
                        setTimeout ( function(){
                            $('.messages2 span').hide(1)
                        }, 3500);
                        $('#t_name').val('');
                        $('#t_email').val('');
                        $('#t_mess').val('');
                    }
                });
            });
        });
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter34325425 = new Ya.Metrika({
                    id:34325425,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");

<noscript>
    <div><img src="https://mc.yandex.ru/watch/34325425" style="position:absolute; left:-9999px;" alt="" /></div>
</noscript>
<!-- /Yandex.Metrika counter -->


    var google_conversion_id = 933330568;

    var google_custom_params = window.google_tag_params;

    var google_remarketing_only = true;

    /* ]]> */

<noscript>
    <div style="display:inline;">
        <img height="1" width="1" style="border-style:none;" alt=""
             src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/933330568/?value=0&amp;guid=ON&amp;script=0"/>
    </div>
</noscript>

    function checkParams() {
        var pm1 = $('#user_name').val();
        var pm2 = $('#user_email').val();
        var pm3 = $('#user_phone').val();
        var pm4 = $('#user_birthday').val();

        if(pm1.length != 0 && pm2.length != 0 && pm3.length != 0 && pm4.length != 0) {
            $('#btn_submit').removeAttr('disabled');
        } else {
            $('#btn_submit').attr('disabled', 'disabled');}}




});

