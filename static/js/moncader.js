'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const konami_sequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let konami_index = 0;

  function code_checker(event) {
    if (event.keyCode == konami_sequence[konami_index]) {
      konami_index++;
      console.log("yay")
      if (konami_index == konami_sequence.length) {
        document.removeEventListener("keydown", code_checker);
      }
    }
    else {
      konami_index = 0;
      console.log("boo")
    }
  }

  function unlock_moncader() {
    console.log("a winner is you")
  }

  document.addEventListener("keydown", code_checker);
});
