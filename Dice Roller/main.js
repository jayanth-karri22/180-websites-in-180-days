let button = document.getElementsByTagName("button")[0];
let header = document.getElementsByTagName("h1")[0];
let topLeft = document.getElementsByClassName("top-left");
let topRight = document.getElementsByClassName("top-right");
let left = document.getElementsByClassName("left");
let right = document.getElementsByClassName("right");
let bottomLeft = document.getElementsByClassName("bottom-left");
let bottomRight = document.getElementsByClassName("bottom-right");
let centre = document.getElementsByClassName("centre");
let die1 = document.getElementsByClassName("die-1");

let allRolls = [
  topLeft,
  topRight,
  left,
  centre,
  right,
  bottomLeft,
  bottomRight
];

let changeHeader = () => [
  (header.textContent = "Shake shake shake...."),
  header.classList.add("shakeHeader"),
  setTimeout(() => generateRandom(), 500)
];

let generateRandom = () => {
  let dice1 = Math.floor(Math.random() * 6 + 1);
  let dice2 = Math.floor(Math.random() * 6 + 1);
  let totalSum = dice1 + dice2;
  header.textContent = `${totalSum}`;
  header.classList.remove("shakeHeader");
  console.log([dice1, dice2]);
  return [generateDice(0, dice1), generateDice(1, dice2)];
};

let generateDice = (index, num) => {
  num == 6
    ? allRolls.map(item => (item[index].style.display = "block"))
    : num == 5
    ? [
        allRolls.map(item => (item[index].style.display = "block")),
        (left[index].style.display = "none"),
        (right[index].style.display = "none")
      ]
    : num == 4
    ? [
        allRolls.map(item => (item[index].style.display = "block")),
        (left[index].style.display = "none"),
        (right[index].style.display = "none"),
        (centre[index].style.display = "none")
      ]
    : num == 3
    ? [
        allRolls.map(item => (item[index].style.display = "none")),
        (topLeft[index].style.display = "block"),
        (centre[index].style.display = "block"),
        (bottomRight[index].style.display = "block")
      ]
    : num == 2
    ? [
        allRolls.map(item => (item[index].style.display = "none")),
        (topLeft[index].style.display = "block"),
        (bottomRight[index].style.display = "block")
      ]
    : num == 1
    ? [
        allRolls.map(item => (item[index].style.display = "none")),
        (centre[index].style.display = "block")
      ]
    : num;
};

button.addEventListener("click", changeHeader);
