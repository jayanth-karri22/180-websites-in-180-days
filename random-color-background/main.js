let clickedButton = document.getElementById("mainButton");
let homePage = document.getElementsByTagName("body")[0];

let changeBackgroundcolor = () =>
  (homePage.style.backgroundColor = generateRandomColor());

let generateRandomColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

clickedButton.addEventListener("click", () => changeBackgroundcolor());
