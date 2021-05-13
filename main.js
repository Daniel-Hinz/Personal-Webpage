var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 2000
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


window.addEventListener('resize', () => {
	window.resizeTo(window.innerWidth, vh * 100);
});
