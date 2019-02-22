let button = document.getElementsByTagName("button")[0];
let input = document.getElementsByTagName("input")[0];
let message = document.getElementsByTagName("h1");

let showMessage = (e, value) => {
  e.preventDefault();
  value !== ""
    ? (message[0].textContent = `You ${value}?`)
    : (message[0].textContent = "You don't fill in forms?");
  message[1].textContent =
    badHabits[Math.floor(Math.random() * badHabits.length)];
};

button.addEventListener("click", e => showMessage(e, input.value));

let badHabits = [
  "That's terrible! You should knock that off!",
  "Seriously? Why don't you grow the hell up?!",
  "Aren't you a little old for that crap?",
  "You are bad and you should feel bad!",
  "Gross. You are gross.",
  "Are you going to suck all your life?",
  "What? Who does that?!",
  "I thought you were better than that.",
  "My disapproval is overwhelming.",
  " à² __à²  ",
  "Are you freaking kidding me?",
  "NO! Bad!",
  "And when do you plan on becoming an adult?",
  "That is totally unacceptable.",
  "You should be utterly ashamed.",
  "Ugh! That's horrible!",
  "A kitten dies everytime you do that.",
  "I can't believe you are that disgusting."
];
