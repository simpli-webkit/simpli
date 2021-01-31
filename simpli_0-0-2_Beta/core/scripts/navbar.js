/*
AUTHOR: ALEX COLLYER (alex.collyer@getsimpli.co.uk)
*/

function mobileNavbar() {
    var x = document.getElementById("navbarMobile");
    if (x.style.transform === "scale(1, 1)") {
      x.style.transform = "scale(1, 0)";
        $('.navbar-side-fixed').css("padding-top", 0);
        $('.section-fixed').css("padding-top", 0);
        $('.cover').css("padding-top", 0);
        $('.fixed-sidebar').css("padding-top", 0);
        $('.section').css("padding-top", 0);
        $('.coverpg-section').css("margin-top", 0);
    } else {
      x.style.transform = "scale(1, 1)";
      var clientHeight = document.getElementById('navbarMobile').clientHeight;
      $('.navbar-side-fixed').css("padding-top", clientHeight );
      $('.section-fixed').css("padding-top", clientHeight);
      $('.cover').css("padding-top", clientHeight);
      $('.fixed-sidebar').css("padding-top", clientHeight);
      $('.section').css("padding-top", clientHeight);
      $('.coverpg-section').css("margin-top", clientHeight);
    }
  }

function mobileNavbarCancel() {
  var x = document.getElementById("navbarMobile");
  if (x.style.transform === "scale(1, 1)") {
    x.style.transform = "scale(1, 0)";
      $('.navbar-side-fixed').css("padding-top", 0);
      $('.section-fixed').css("padding-top", 0);
      $('.cover').css("padding-top", 0);
      $('.fixed-sidebar').css("padding-top", 0);
      $('.section').css("padding-top", 0);
      $('.coverpg-section').css("margin-top", 0);
  }
}

function sidebarDropdownTrigger(selector) {
  if (selector.classList.contains('open')) {
    selector.classList.remove('open');
  } else {
    selector.classList.add('open');
  }
}