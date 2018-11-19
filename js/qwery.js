$(window).scroll(function(){
	    if ($(window).scrollTop() >= 100) {
	       $('.header').addClass('fixed_header');
	    }
	    else {
	       $('.header').removeClass('fixed-header');
	    }
	});

$('.sd').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});