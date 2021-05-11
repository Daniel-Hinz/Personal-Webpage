var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 2000
});

function appHeight() {
    const doc = document.documentElement
    doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
  }

  window.addEventListener('resize', appHeight);
  appHeight();
