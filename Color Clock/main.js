let time = document.getElementById("time");
let color = document.getElementById("color");
let container = document.getElementsByClassName("container")[0];
let body = document.getElementsByTagName("body")[0];

let getTimeandColor = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  let red = Math.floor(255 * (hours / 24)).toString(16);
  let green = Math.floor(255 * (minutes / 60)).toString(16);
  let blue = Math.floor(255 * (seconds / 60)).toString(16);

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  let time = `${hours}:${minutes}:${seconds}`;
  let color = "#" + red + green + blue;
  return [time, color];
};

let setTimeandColor = () => {
  time.textContent = getTimeandColor()[0];
  color.textContent = getTimeandColor()[1];

  body.style.background = getTimeandColor()[1];
};

getTimeandColor();
setTimeandColor();

let currentTime = setInterval(
  () => getTimeandColor() && setTimeandColor(),
  1000
);
