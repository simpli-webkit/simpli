document.writeln("<script type='text/javascript' src='https://simpli-webkit.github.io/simpli/simpli_0-0-5_Beta/core/scripts/structure.js'></script>");
document.writeln("<script type='text/javascript' src='https://simpli-webkit.github.io/simpli/simpli_0-0-5_Beta/core/scripts/viewport.js'></script>");
document.writeln("<script type='text/javascript' src='https://simpli-webkit.github.io/simpli/simpli_0-0-5_Beta/core/scripts/navbar.js'></script>");
document.writeln("<script type='text/javascript' src='https://simpli-webkit.github.io/simpli/simpli_0-0-5_Beta/core/scripts/pageloader.js'></script>");


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
