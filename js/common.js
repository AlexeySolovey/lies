;(function($){
	$(document).ready(function() {
		//slider for whom section
		$('.whomSlider').bxSlider({
			auto: true,
			autoHover: true,
			controls: false,
			pager: false,
			slideWidth: 300,
			minSlides: 1,
			maxSlides: 4,
			moveSlides: 1,
			slideMargin: 10
		});
		$('.reviews_slider').bxSlider({
			auto: true,
			pager: false,
			infiniteLoop: false,
			hideControlOnEnd: true
		});



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