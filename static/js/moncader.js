'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const konami_sequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let konami_index = 0;

  function code_checker(event) {
    if (event.keyCode === konami_sequence[konami_index]) {
      konami_index++;
      if (konami_index === konami_sequence.length) {
        unlock_moncader();
        document.removeEventListener("keydown", code_checker, false);
      }
    }
    else {
      konami_index = 0;
    }
  }

  function unlock_moncader() {
    document.getElementById("moncader-unlock-sound").play();
    document.getElementById("member-moncader").style.display = "flex";
  }

  document.addEventListener("keydown", code_checker);
});
