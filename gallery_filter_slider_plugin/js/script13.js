$(document).ready(function(){
	
	
	
	$('.btn').click(function(){
		
		$('nav').slideToggle();
	})
	
	$(window).resize(function(){
			var x=$(window).width();
			if(x>768)
			{
				$('nav').removeAttr('style');
			}
		
	})//menu
	
	
	
	$('.navlinks ul li a').click(function(){
		
		$('.navlinks ul li a').removeClass('current');
		$(this).addClass('current');
		
		var y=$(this).text();
		//alert(y);
		$('.imagesgallery h2').text(y);
		
		
		
	})//
	
	$('.logo').click(function(){
		var x=$('#services').offset().top-20;
		//alert(x);
		$('html,body').animate({scrollTop:x},1000)
	})//
	
	/*$('.products').click(function(){
		
		$('html').animate({scrollTop:$('#products').offset().top-20},1000);
		
	})
	$('.contact').click(function(){
		
		$('html').animate({scrollTop:$('#contact').offset().top-20},1000);
		
	})
	$('.services').click(function(){
		
		$('html').animate({scrollTop:$('#services').offset().top-20},1000);
		
	})
	$('.home').click(function(){
		
		$('html').animate({scrollTop:$('#portfolio').offset().top-20},1000);
		
	})*/
	
	$('nav ul li a').click(function(){
		
		var x=$(this).attr('data-slide');
		//alert(x);
		//$('html').animate({scrollTop:$('.slide[data-slide="'+x+'"]').offset().top-20},1000)
		
		$('html').animate({scrollTop:$('.slide[data-slide="'+x+'"]').offset().top-30},1000)
	})
	
})//ready



//http://jquery.malsup.com/cycle2/