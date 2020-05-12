$(document).ready(function(){
	$('.btn').click(function(){
		$('nav').slideToggle();
	})
	$(window).resize(function() {
		var x=$(window).width(); //To megethos tou parathurou einai panw apo 768px
		if (x>768) {$('nav').removeAttr('style');} //Remove to attribute style="diplay:block"
	}) //menu

	$('.navlinks ul li a').click(function(){
		$('.navlinks ul li a').removeClass('active');
		$(this).addClass('active');

		var y=$(this).text(); //Gia na parw th timh. Me tou tha kanoume click tha paroume thn timh. (GET)
		//alert(y);
		$('.imagesgallery h2').text(y); // (SET)
	})
	/*$('.logo').click(function () {
		var x=$('#services').offset().top-20; //H apostash tou #services apo to panw meros ths selidas -20px
		//alert(x);
		$('html,body').animate({scrollTop:x},1000); //Pigaine olh tin html selida scrollTop stis diastaseis tou offset
	}) //To body de xreiazetai polles fores. Einai to idio.
	$('.home').click(function () {
		$('html').animate({scrollTop:$('#portfolio').offset().top-20},1000);
	})
	$('.products').click(function () {
		$('html').animate({scrollTop:$('#products').offset().top-20},1000);
	})
	$('.services').click(function () {
		$('html').animate({scrollTop:$('#services').offset().top-20},1000);
	})
	$('.contact').click(function () {
		$('html').animate({scrollTop:$('#contact').offset().top-20},1000);
	})*/

	$('nav ul li a').click(function(){
		var x=$(this).attr('data-slide'); //Na parei kai na valei sto x to attribute data-slide. Ton arithmo dld.
		$('html').animate({scrollTop:$('.slide[data-slide="'+x+'"]').offset().top-30},1000);
	})

}) //ready



//Plugins for filtering
//https://www.kunkalabs.com/mixitup/
//https://isotope.metafizzy.co/filtering.html
//https://wowjs.uk/ //Event analoga me to scroll ths html selidas