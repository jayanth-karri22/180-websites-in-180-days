let clickedRed = document.getElementsByClassName("red")[0];
let clickedBlue = document.getElementsByClassName("blue")[0];
let clickedYellow = document.getElementsByClassName("yellow")[0];
let clickedWhite = document.getElementsByClassName("white")[0];
let targets = [];

for (let i = 0; i < 16; i++) {
  targets[i] = document.getElementById(`target-${i + 1}`);
  targets[i].addEventListener(
    "click",
    () => (targets[i].style.backgroundColor = activeColor)
  );
}

let activeColor;

let applyColor = color => (activeColor = color);

clickedRed.addEventListener("click", () => applyColor("red"));
clickedBlue.addEventListener("click", () => applyColor("blue"));
clickedYellow.addEventListener("click", () => applyColor("yellow"));
clickedWhite.addEventListener("click", () => applyColor("white"));
