$(document).ready(function(){
	$("#btn-baixo").click(function() {
		$('body,html').animate({
			scrollTop: $(".time-line").offset().top}, "slow");
	});

		$('.btn-anterior').mouseenter(function() {
			$(this).animate({
				left:0
			}, 400)
		});

		$('.btn-anterior').mouseleave(function() {
			$(this).animate({
				left:-150
			}, 400)
		});


});
