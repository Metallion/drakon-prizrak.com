'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let konamiIndex = 0;

  function codeChecker(event) {
    if (event.keyCode === konamiSequence[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiSequence.length) {
        unlockMoncader();
        document.removeEventListener("keydown", codeChecker, false);
      }
    }
    else {
      konamiIndex = 0;
    }
  }

  function unlockMoncader() {
    document.getElementById("moncader-unlock-sound").play();
    document.getElementById("member-moncader").style.display = "flex";
  }

  document.addEventListener("keydown", codeChecker);
});
