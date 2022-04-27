let projectHeaders = document.querySelectorAll(".project-headers-header");
let projectDisplays = document.querySelectorAll(".project-display");
let exitButtons = document.querySelectorAll(".fa-times");
let allProjects = document.querySelectorAll(".project");
let headers = document.querySelectorAll(".tab-header");
let tabs = document.querySelectorAll(".tab");
let element = 0;

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
});

// fix mobile navbar
window.onscroll = () => {
  let links = document.getElementById("links");

  if (document.body.scrollTop <= 812 && !links.classList.contains("move")) {
    distance = $("#navbar").offset().top - $(window).scrollTop() + 52;
    links.style.top = distance + "px";
  } else if (
    document.body.scrollTop > 812 &&
    !links.classList.contains("move")
  ) {
    links.style.top = "52px";
  }
};

// navbar
$(".icon").click(function () {
  $("#links").toggleClass("move");
});

// about headers magic line
$(document).ready(function () {
  $(window).on("load resize", function () {
    var $thisnav = $(".languages-tab").offset().left;
    var newLeft = 0;

    $(".tab-header").hover(
      function () {
        var $left = $(this).offset().left - $thisnav;
        newLeft = $left;
        $(".wee").css({ left: $left });
      },
      function () {
        $(".wee").css({ left: newLeft });
      }
    );
  });
});

// change headers on skill table
headers.forEach((header, index) => {
  header.addEventListener("click", () => {
    tabs.forEach((tab, i) => {
      if (i === index) tab.style.display = "block";
      else tab.style.display = "none";
    });
  });
});

// change project headers
projectHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    projectHeaders.forEach((item) => item.classList.remove("current"));
    header.classList.add("current");

    allProjects.forEach((project) => {
      if ([...project.classList].includes(header.id))
        project.style.display = "block";
      else project.style.display = "none";
    });
  });
});

// open project display
allProjects.forEach((project, index) => {
  project.addEventListener("click", () => {
    projectDisplays[index].setAttribute("open", "");
    projectDisplays[index].style.display = "block";
    element = index;
  });
});

// close project display
exitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    projectDisplays[element].removeAttribute("open");
    projectDisplays[element].setAttribute("closing", "");
    projectDisplays[element].addEventListener(
      "animationend",
      () => {
        projectDisplays[element].removeAttribute("closing");
        projectDisplays[element].style.display = "none";
      },
      { once: true }
    );
  });
});
