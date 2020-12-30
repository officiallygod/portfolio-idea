document.addEventListener('mousemove', (e) => {	
	const sqrs = document.querySelectorAll('.item');
	
	const mouseX = e.pageX;
	const mouseY = e.pageY;
	
	sqrs.forEach(sqr => {
		const sqrX = sqr.offsetLeft + 20;
		const sqrY = sqr.offsetTop + 20;
		
		const diffX = mouseX - sqrX;
		const diffY = mouseY - sqrY;
		
		const radians = Math.atan2(diffY, diffX);
		
		const angle = radians * 180 / Math.PI;
		
		sqr.style.transform = `rotate(${angle}deg)`;
	})
	
})


$(document).ready(function() { 
	var id = '#dialog';
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();
	$('#mask').css({'width':maskWidth,'height':maskHeight}); 
	$('#mask').fadeIn(500); 
	$('#mask').fadeTo("slow",0.9); 
	var winH = $(window).height();
	var winW = $(window).width();
	$(id).css('top',  winH/2-$(id).height()/2);
	$(id).css('left', winW/2-$(id).width()/2);
	$(id).fadeIn(2000);  
	$('.window .close').click(function (e) {
		e.preventDefault();
		$('#mask').hide();
		$('.window').hide();
	});  
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});  
	
});
