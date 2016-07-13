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
			maxSlides: 3,
			moveSlides: 1,
			slideMargin: 10
		});
		$('.reviews_slider').bxSlider({
			infiniteLoop: false,
			hideControlOnEnd: true
		});
	});
})(jQuery)