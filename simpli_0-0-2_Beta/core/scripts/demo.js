function demo_navbar_change(colorInput) {
    var navbarElement = document.getElementById("demo-navbar");
    if (navbarElement.classList.contains('navbar-color-purple')) {
        navbarElement.classList.remove('navbar-color-purple');
        navbarElement.classList.add(colorInput);
    } else if (navbarElement.classList.contains('navbar-color-purpPink')) {
        navbarElement.classList.remove('navbar-color-purpPink');
        navbarElement.classList.add(colorInput);
    } else if (navbarElement.classList.contains('navbar-color-blue')) {
        navbarElement.classList.remove('navbar-color-blue');
        navbarElement.classList.add(colorInput);
    } else if (navbarElement.classList.contains('navbar-color-yellow')) {
        navbarElement.classList.remove('navbar-color-yellow');
        navbarElement.classList.add(colorInput);
    } else if (navbarElement.classList.contains('navbar-color-green')) {
        navbarElement.classList.remove('navbar-font-light-demo');
        navbarElement.classList.remove('navbar-color-green');
        navbarElement.classList.add('navbar-font-dark-demo');
        navbarElement.classList.add(colorInput);
    } else if (navbarElement.classList.contains('navbar-color-red')) {
        navbarElement.classList.remove('navbar-color-red');
        navbarElement.classList.add(colorInput);
    }
}