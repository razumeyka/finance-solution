$(document).ready(function(){
    
// question-answer
	
    $('.accordion__answer').hide();
    $('.accordion__question').click(function(){
        $(this).next().slideToggle(500);
		$(this).toggleClass('accordion__question_active');
    });
    
// mask
	
    $('input[type="tel"]').mask("8-999-999-99-99");
	
}); 