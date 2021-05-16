// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1500
});

// prevent vertical mobile browser resize
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	window.resizeTo(window.innerWidth, vh * 100);
});

// project management
$(".fa-times").click(function(){
	$(".project-display").css('display', 'none');});

$(".project-one").click(function(){
  $(".project-one-display").css('display', 'block');
});

$(".project-two").click(function(){
  $(".project-two-display").css('display', 'block');
});

$(".project-three").click(function(){
  $(".project-three-display").css('display', 'block');
});

$(".project-four").click(function(){
  $(".project-four-display").css('display', 'block');
});

$(".project-five").click(function(){
  $(".project-five-display").css('display', 'block');
});
