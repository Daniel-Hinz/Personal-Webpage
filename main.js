// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1500
});

// prevent vertical mobile browser resize
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	window.resizeTo(window.innerHeight, vh * 100);
});

// for skills table
$(document).ready(function() {
  var $thisnav = $('.active').offset().left;

  $('.tab-header').hover(function() {
    var $left = $(this).offset().left - $thisnav;
    var $width = $(this).outerWidth();
    $('.wee').css({ 'left': $left, 'width': $width * 0.5});
  }, function() {
    var $initwidth = $('.active').width();
    $('.wee').css({ 'left': $left, 'width': $initwidth });
  });
});

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

// exit button on projects display
$(".fa-times").click(function(){
	$(".project-display").css('display', 'none');});

// project management
$(".one").click(function(){
  $(".project-one-display").css('display', 'block');
});

$(".two").click(function(){
  $(".project-two-display").css('display', 'block');
});

$(".three").click(function(){
  $(".project-three-display").css('display', 'block');
});

$(".four").click(function(){
  $(".project-four-display").css('display', 'block');
});

$(".five").click(function(){
  $(".project-five-display").css('display', 'block');
});
