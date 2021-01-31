document.writeln("<script type='text/javascript' src='simpli/core/scripts/structure.js'></script>");
document.writeln("<script type='text/javascript' src='simpli/core/scripts/viewport.js'></script>");
document.writeln("<script type='text/javascript' src='simpli/core/scripts/navbar.js'></script>");
document.writeln("<script type='text/javascript' src='simpli/core/scripts/demo.js'></script>");
document.writeln("<script type='text/javascript' src='simpli/core/scripts/pageloader.js'></script>");


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}