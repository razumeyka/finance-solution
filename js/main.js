$(document).ready(function(){
	
// menu
	
	$(function() {
		$('.smooth').on('click', function(event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top
				}, 1000);
			}
		});
	});
	
	$('.nav-item').click(function(){
        $(".navbar-nav").find(".nav-item").removeClass("active");
		$(this).addClass("active");
    });
	
    
// question-answer
	
    $('.accordion__answer').hide();
    $('.accordion__question').click(function(){
        $(this).next().slideToggle(500);
		$(this).toggleClass('accordion__question_active');
    });
    
// mask
	
    $('input[type="tel"]').mask("8-999-999-99-99");
	
// carousel 
	
	$('.carousel_team .carousel-item').each(function(){
		var next = $(this).next();
		if (!next.length) {
		next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		for (var i=0;i<3;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}

			next.children(':first-child').clone().appendTo($(this));
		  }
	});
	
	
// swipe
	$(".carousel").swipe( {
		swipeLeft: function() {
			$(this).carousel("next");
		},
		swipeRight: function() {
			$(this).carousel("prev");
		},
		allowPageScroll: "vertical"
	});


}); 