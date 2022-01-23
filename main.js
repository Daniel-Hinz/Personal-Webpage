// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500
});

// fix mobile navbar
window.onscroll = () => {
	let links  = document.getElementById('links');

	if (document.body.scrollTop <= 812 && !links.classList.contains('move')) {
		distance = ($('#navbar').offset().top - $(window).scrollTop()) + 52;
		links.style.top = distance + 'px';
		links.style.transition = '0s';
	} else if (document.body.scrollTop > 812 && !links.classList.contains('move')) {
		links.style.top = '52px';
		links.style.transition = '.2s';
	} 
};


// navbar
$(".icon").click(function(){
	$("#links").toggleClass("move");
  });

// about headers magic line
$(document).ready(function() {
	$(window).on('load resize',function() {

  		var $thisnav = $('.languages-tab').offset().left;
		var newLeft = 0;

  		$('.tab-header').hover(function() {
    		var $left = $(this).offset().left - $thisnav;
			newLeft = $left;
    		$('.wee').css({ 'left': $left });
  		}, function() {
    	$('.wee').css({ 'left': newLeft });
	});
  });
});

// for skills table
$(".languages-tab").click(function(){
	$(".languages").css('display', 'block');
	$(".software").css('display', 'none');
	$(".version-control").css('display', 'none');
});

$(".software-tab").click(function(){
	$(".languages").css('display', 'none');
	$(".software").css('display', 'block');
	$(".version-control").css('display', 'none');
});

$(".version-tab").click(function(){
	$(".languages").css('display', 'none');
	$(".software").css('display', 'none');
	$(".version-control").css('display', 'block');
});

// project headers
$("#all-projects").click(function(){
	$(".project-headers-header").removeClass('current');
	$(this).addClass('current');
	$(".project").css('display', 'block');
});

$("#front-end").click(function(){
	$(".project-headers-header").removeClass('current');
	$(this).addClass('current');
	$(".project").css('display', 'none');
	$(".front-end").css('display', 'block');
});

$("#full-stack").click(function(){
	$(".project-headers-header").removeClass('current');
	$(this).addClass('current');
	$(".project").css('display', 'none');
	$(".full-stack").css('display', 'block');
});

// exit button on projects display
$(".fa-times").click(function(){
	$(".project-display").css('display', 'none');
});

// open and close projects management
$(".zero").click(function(){
	$(".project-display").css('display', 'none');
	$(".project-zero-display").css('display', 'block');
  });

$(".one").click(function(){
	$(".project-display").css('display', 'none');
 	$(".project-one-display").css('display', 'block');
});

$(".two").click(function(){
	$(".project-display").css('display', 'none');
  	$(".project-two-display").css('display', 'block');
});

$(".three").click(function(){
	$(".project-display").css('display', 'none');
  	$(".project-three-display").css('display', 'block');
});

$(".four").click(function(){
	$(".project-display").css('display', 'none');
 	$(".project-four-display").css('display', 'block');
});

$(".five").click(function(){
	$(".project-display").css('display', 'none');
  	$(".project-five-display").css('display', 'block');
});

$(".six").click(function(){
	$(".project-display").css('display', 'none');
  	$(".project-six-display").css('display', 'block');
});
