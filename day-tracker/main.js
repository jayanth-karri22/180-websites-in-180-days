let selectedDiv = document.getElementById(`day${new Date().getDay() + 1}`);
let messageList = [
  "Sunday Funday!",
  "Monday Madness",
  "Have a great Tuesday",
  "Wednesday",
  "Thrilling Thursday",
  "Finally Friday",
  "Sleepy saturday"
];

let divHeight = 230;

selectedDiv.style.height = `${divHeight}px`;
selectedDiv.style.zIndex = "2";
selectedDiv.classList.add("message-style");

document.getElementsByClassName("message")[0].innerText =
  messageList[new Date().getDay()];

window.addEventListener(
  "resize",
  () =>
    (selectedDiv.style.height = `${(divHeight * window.innerHeight) / 900}px`)
);
