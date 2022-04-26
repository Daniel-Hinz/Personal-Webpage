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

// for skills table
$(".languages-tab").click(function () {
  $(".languages").css("display", "block");
  $(".software").css("display", "none");
  $(".version-control").css("display", "none");
});

$(".software-tab").click(function () {
  $(".languages").css("display", "none");
  $(".software").css("display", "block");
  $(".version-control").css("display", "none");
});

$(".version-tab").click(function () {
  $(".languages").css("display", "none");
  $(".software").css("display", "none");
  $(".version-control").css("display", "block");
});

// project headers
$("#all-projects").click(function () {
  $(".project-headers-header").removeClass("current");
  $(this).addClass("current");
  $(".project").css("display", "block");
});

$("#front-end").click(function () {
  $(".project-headers-header").removeClass("current");
  $(this).addClass("current");
  $(".project").css("display", "none");
  $(".front-end").css("display", "block");
});

$("#full-stack").click(function () {
  $(".project-headers-header").removeClass("current");
  $(this).addClass("current");
  $(".project").css("display", "none");
  $(".full-stack").css("display", "block");
});

// exit button on projects display
let element = 0;
$(".fa-times").click(function () {
  switch (element) {
    case 0:
      const modal = document.querySelector(".project-zero-display");
      modal.setAttribute("closing", "");
      modal.addEventListener(
        "animationend",
        () => {
          modal.removeAttribute("closing");
          modal.close();
        },
        { once: true }
      );
      break;
    case 1:
      const modalOne = document.querySelector(".project-one-display");
      modalOne.setAttribute("closing", "");
      modalOne.addEventListener(
        "animationend",
        () => {
          modalOne.removeAttribute("closing");
          modalOne.close();
        },
        { once: true }
      );
      break;
    case 2:
      const modalTwo = document.querySelector(".project-two-display");
      modalTwo.setAttribute("closing", "");
      modalTwo.addEventListener(
        "animationend",
        () => {
          modalTwo.removeAttribute("closing");
          modalTwo.close();
        },
        { once: true }
      );
      break;
    case 3:
      const modalThree = document.querySelector(".project-three-display");
      modalThree.setAttribute("closing", "");
      modalThree.addEventListener(
        "animationend",
        () => {
          modalThree.removeAttribute("closing");
          modalThree.close();
        },
        { once: true }
      );
      break;
    case 4:
      const modalFour = document.querySelector(".project-four-display");
      modalFour.setAttribute("closing", "");
      modalFour.addEventListener(
        "animationend",
        () => {
          modalFour.removeAttribute("closing");
          modalFour.close();
        },
        { once: true }
      );
      break;
    case 5:
      const modalFive = document.querySelector(".project-five-display");
      modalFive.setAttribute("closing", "");
      modalFive.addEventListener(
        "animationend",
        () => {
          modalFive.removeAttribute("closing");
          modalFive.close();
        },
        { once: true }
      );
      break;
    case 6:
      const modalSix = document.querySelector(".project-six-display");
      modalSix.setAttribute("closing", "");
      modalSix.addEventListener(
        "animationend",
        () => {
          modalSix.removeAttribute("closing");
          modalSix.close();
        },
        { once: true }
      );
      break;
  }
});

// open and close projects management
$(".zero").click(function () {
  document.querySelector(".project-zero-display").showModal();
  element = 0;
});

$(".one").click(function () {
  document.querySelector(".project-one-display").showModal();
  element = 1;
});

$(".two").click(function () {
  document.querySelector(".project-two-display").showModal();
  element = 2;
});

$(".three").click(function () {
  document.querySelector(".project-three-display").showModal();
  element = 3;
});

$(".four").click(function () {
  document.querySelector(".project-four-display").showModal();
  element = 4;
});

$(".five").click(function () {
  document.querySelector(".project-five-display").showModal();
  element = 5;
});

$(".six").click(function () {
  document.querySelector(".project-six-display").showModal();
  element = 6;
});
