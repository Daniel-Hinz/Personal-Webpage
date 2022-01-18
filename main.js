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
  var $thisnav = $('.active').offset().left;

  $('.tab-header').hover(function() {
    var $left = $(this).offset().left - $thisnav;
    var $width = $(this).outerWidth() * 0.5;
    $('.wee').css({ 'left': $left, 'width': $width});
  }, function() {
    var $initwidth = $('.active').width();
    $('.wee').css({ 'left': $left, 'width': $initwidth});
  });
});

// for skills table
$(".languages-tab").click(function(){
	$(".languages").css('display', 'block');
	$(".software").css('display', 'none');
	$(".version-control").css('display', 'none');

	$(".languages-tab").addClass('active');
	$(".software-tab").removeClass('active');
	$(".version-tab").removeClass('active');
});

$(".software-tab").click(function(){
	$(".languages").css('display', 'none');
	$(".software").css('display', 'block');
	$(".version-control").css('display', 'none');

	$(".languages-tab").removeClass('active');
	$(".software-tab").addClass('active');
	$(".version-tab").removeClass('active');
});

$(".version-tab").click(function(){
	$(".languages").css('display', 'none');
	$(".software").css('display', 'none');
	$(".version-control").css('display', 'block');
	$(".languages-tab").removeClass('active');
	$(".software-tab").removeClass('active');
	$(".version-tab").addClass('active');
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
