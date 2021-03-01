document.writeln("<script type='text/javascript' src='https://simpli-webkit.github.io/simpli/simplex/core/scripts/structure.js'></script>");
document.writeln("<script type='text/javascript' src='https://simpli-webkit.github.io/simpli/simplex/core/scripts/viewport.js'></script>");
document.writeln("<script type='text/javascript' src='https://simpli-webkit.github.io/simpli/simplex/core/scripts/navbar.js'></script>");
document.writeln("<script type='text/javascript' src='https://simpli-webkit.github.io/simpli/simplex/core/scripts/pageloader.js'></script>");


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
