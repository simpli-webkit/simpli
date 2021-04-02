/*
AUTHOR: ALEX COLLYER (alex.collyer@getsimpli.co.uk)
*/

function mobileNavbar() {
    var x = document.getElementById("navbarMobile");
    if (x.style.transform === "scale(1, 1)") {
      if ($(this).scrollTop() > triggerH) {
        if (x.style.transform === "scale(1, 1)") {
          x.style.transform = "scale(1, 0)";
          $('.sitecontent').css("padding-top", 0);
        }
      } else {
        if (x.style.transform === "scale(1, 1)") {
          x.style.transform = "scale(1, 0)";
          $('.sitecontent').css("padding-top", 0);
            if($("nav").hasClass("navbar-transparent")) {
              $('.navbar-color-transparent-white').removeClass('navbar-color-transparent-white-fill');
              $('.navbar-color-transparent-red').removeClass('navbar-color-transparent-red-fill');
              $('.navbar-color-transparent-blue').removeClass('navbar-color-transparent-blue-fill');
              $('.navbar-color-transparent-purple').removeClass('navbar-color-transparent-purple-fill');
              $('.navbar-color-transparent-green').removeClass('navbar-color-transparent-green-fill');
            }
        }
      }
    } else {
      x.style.transform = "scale(1, 1)";
      var clientHeight = document.getElementById('navbarMobile').clientHeight;
      $('.sitecontent').css("padding-top", clientHeight);
      if($("nav").hasClass("navbar-transparent")) {
        $('.navbar-color-transparent-white').addClass('navbar-color-transparent-white-fill');
        $('.navbar-color-transparent-red').addClass('navbar-color-transparent-red-fill');
        $('.navbar-color-transparent-blue').addClass('navbar-color-transparent-blue-fill');
        $('.navbar-color-transparent-purple').addClass('navbar-color-transparent-purple-fill');
        $('.navbar-color-transparent-green').addClass('navbar-color-transparent-green-fill');
      }
    }
  }

function mobileNavbarCancel() {
  var x = document.getElementById("navbarMobile");
  var windH = $(window).height(); 
  triggerH = windH - 220;

  if ($(this).scrollTop() > triggerH) {
    if (x.style.transform === "scale(1, 1)") {
      x.style.transform = "scale(1, 0)";
      $('.sitecontent').css("padding-top", 0);
    }
  } else {
    if (x.style.transform === "scale(1, 1)") {
      x.style.transform = "scale(1, 0)";
      $('.sitecontent').css("padding-top", 0);
        if($("nav").hasClass("navbar-transparent")) {
          $('.navbar-color-transparent-white').removeClass('navbar-color-transparent-white-fill');
          $('.navbar-color-transparent-red').removeClass('navbar-color-transparent-red-fill');
          $('.navbar-color-transparent-blue').removeClass('navbar-color-transparent-blue-fill');
          $('.navbar-color-transparent-purple').removeClass('navbar-color-transparent-purple-fill');
          $('.navbar-color-transparent-green').removeClass('navbar-color-transparent-green-fill');
        }
    }
  }
}

function sidebarDropdownTrigger(selector) {
  if (selector.classList.contains('open')) {
    selector.classList.remove('open');
  } else {
    selector.classList.add('open');
  }
}

$(document).ready(function() {
  var windH = $(window).height(); 
  triggerH = windH - 220;
  $(window).scroll(function() {

    if($(this).scrollTop() > triggerH) { 
        $('.navbar-color-transparent-white').addClass('navbar-color-transparent-white-fill');
        $('.navbar-color-transparent-red').addClass('navbar-color-transparent-red-fill');
        $('.navbar-color-transparent-blue').addClass('navbar-color-transparent-blue-fill');
        $('.navbar-color-transparent-purple').addClass('navbar-color-transparent-purple-fill');
        $('.navbar-color-transparent-green').addClass('navbar-color-transparent-green-fill');
    } else {
        $('.navbar-color-transparent-white').removeClass('navbar-color-transparent-white-fill');
        $('.navbar-color-transparent-red').removeClass('navbar-color-transparent-red-fill');
        $('.navbar-color-transparent-blue').removeClass('navbar-color-transparent-blue-fill');
        $('.navbar-color-transparent-purple').removeClass('navbar-color-transparent-purple-fill');
        $('.navbar-color-transparent-green').removeClass('navbar-color-transparent-green-fill');
    }
  });
});
