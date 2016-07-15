;(function($){
	$(document).ready(function() {
		//nav bar
		$(".nav li a").click(function(){
			$(".nav li a").removeClass("active");
			$(this).addClass("active");
		});
		// navigation (scroll)
		$(".nav li:first-child").click(function(){
			$('body,html').animate({
					scrollTop:0}, 503);
			return false;
		});
		$(document).on('click', 'a[href^=#]', function () {
				$('html, body').animate({ scrollTop: $('a[name="'+this.hash.slice(1)+'"]').offset().top }, 1000 ); 
		return false;
		});
		// navigation (close with scroll)
		$(document).scroll(function(){
			var responsive = $("#responsive-menu");
			var headerMenuState = responsive.attr("aria-expanded");

			if (headerMenuState) {
				responsive.collapse('hide');
			}
		});
		//slider for whom section
		$('.whomSlider').bxSlider({
			auto: true,
			autoHover: true,
			controls: true,
			pager: false,
			slideWidth: 300,
			minSlides: 1,
			maxSlides: 4,
			moveSlides: 1,
			slideMargin: 10
		});
		$('.reviews_slider').bxSlider({
			auto: false,
			pager: false,
			controls: true,
			infiniteLoop: false,
			hideControlOnEnd: true
		});

		//maskedinput
		$("#user_phone").mask("(999) 999-99-99");
		//validation
		var formValidateOptions = {
	  rules: {
		  name: {
			required: true,
			minlength: 3,
			maxlength: 20
		  },
		  email: {
			required: true,
			email: true,
			minlength: 3,
			maxlength: 50
		  },
		  phone: "required",
		  birthday: "required"
	  },
	   messages: {
		  name: {
			required: "Введите имя",
			minlength: "Короткое имя",
			maxlength: "Длинное имя"
		  },
		  email:  {
			required: "Введите E-Mail",
			email: "Введите корректный E-Mail",
			minlength: "Короткий E-Mail",
			maxlength: "Длинный E-Mail"
		  },
		  phone: "Введите телефон",
		  birthday: "Введите дату рождения"
	  },
	  onkeyup: true,
	  errorClass: "error",
	  highlight: function(element, errorClass, validClass) {
		  $(element).addClass(errorClass).removeClass(validClass);
	  },
	  unhighlight: function(element, errorClass, validClass) {
		  $(element).removeClass(errorClass).addClass(validClass);
	  }
  };

  $('form.form').validate(formValidateOptions);

  var form2ValidateOptions = {
	  rules: {
		  t_name:  {
			required: true,
			minlength: 3,
			maxlength: 20
		  },
		  t_email: {
			required: true,
			email: true,
			minlength: 3,
			maxlength: 50
		  },
		  t_mess: {
			required: true,
			minlength: 3
		  },
	  },
	   messages: {
		  t_name: {
			required: "Введите имя",
			minlength: "Короткое имя",
			maxlength: "Длинное имя"
		  },
		  t_email:  {
			required: "Введите E-Mail",
			email: "Введите корректный E-Mail",
			minlength: "Короткий E-Mail",
			maxlength: "Длинный E-Mail"
		  },
		  t_mess: {
			required: "Введите сообщение",
			minlength: "Короткое сообщение"
		  }
	  },
	  onkeyup: true,
	  errorClass: "error",
	  highlight: function(element, errorClass, validClass) {
		  $(element).addClass(errorClass).removeClass(validClass);
	  },
	  unhighlight: function(element, errorClass, validClass) {
		  $(element).removeClass(errorClass).addClass(validClass);
	  }
  };
  $('form.form2').validate(form2ValidateOptions);

		
	});
})(jQuery)