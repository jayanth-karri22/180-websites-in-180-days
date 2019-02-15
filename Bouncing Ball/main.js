let ball = document.getElementById("ball");
let ballContainer = document.getElementById("ball-container");
let displayMessage = document.getElementById("displayMessage");
let message = document.getElementById("message");
let levelNum = document.getElementById("levelNum");
let pos = 1;
let flag = 0;
let level = 1;
let bounceTime = 1.2;
let messageNum = 0;
let timer;
let messages = [
  "Nice job!",
  "Excellent clickin'!",
  "That was Awesome!",
  "Man are you good!",
  "Boom!",
  "You're a pro!",
  "Unbelievable!",
  "Insanity!",
  "You're on fire!",
  "That was crazy!",
  "You are blowin' my mind!",
  "You're a monster!",
  "God Like"
];

let newLevel = () => [
  ((ball.style.display = "none"),
  (displayMessage.style.display = "flex"),
  (message.textContent = `${messages[messageNum]}`),
  (levelNum.textContent = `Level ${messageNum}`)),
  setTimeout(function() {
    ball.style.display = "block";
    ball.style.animation = `bounce ${bounceTime}s cubic-bezier(0.5, 0.05, 1, 0.5)`;
    ball.style.animationDirection = "alternate";
    ball.style.animationIterationCount = "infinite";
    displayMessage.style.display = "none";
  }, 3000)
];

let ballClicked = () => {
  if (messageNum <= 12) {
    newLevel();
    return (bounceTime = bounceTime - 0.1) && messageNum++;
  } else {
    ball.style.display = "none";
    displayMessage.style.display = "flex";
    displayMessage.innerHTML = `<h3>No more levels for you, please comeback later</h3>`;
    clearInterval(myFun);
  }
};

ball.addEventListener("click", () => ballClicked());
