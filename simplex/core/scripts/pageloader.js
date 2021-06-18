/*
AUTHOR: ALEX COLLYER (alex.collyer@getsimpli.co.uk)
*/

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

$(document).ready(function () {
    sleep(300);
    var loader = document.getElementById("pageloader");
    loader.classList.add('pageloaderB');
    loader.classList.add('disp-none');
});
