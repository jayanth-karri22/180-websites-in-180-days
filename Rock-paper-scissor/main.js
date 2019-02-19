let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissors");
let image = document.getElementsByTagName("img");
let text = document.getElementsByClassName("text")[0];

let winObject = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
};

let isWinner = (weapon1, weapon2) => {
  winObject[weapon2] == weapon1
    ? (text.textContent = "You Win")
    : weapon1 == weapon2
    ? (text.textContent = "It's a draw")
    : (text.textContent = "You Lose");

  setTimeout(() => {
    image[0].setAttribute("src", "assets/left_fist.png");
    image[1].setAttribute("src", "assets/right_fist.png");
    text.textContent = "Choose your weapon";
  }, 1500);
};

let botResponse = weapon => {
  image[0].setAttribute("src", "assets/left_fist.png");
  image[0].classList.add("moveUpDown");
  let weapons = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * Math.floor(3));
  setTimeout(() => {
    image[0].setAttribute("src", `assets/${weapons[randomNum]}.png`);
    image[0].classList.remove("moveUpDown");
    isWinner(weapons[randomNum], weapon);
  }, 2000);
};

let weaponSelected = weapon => {
  return () => {
    let num = 3;
    setInterval(() => {
      if (num > 0) {
        text.textContent = `${num}`;
        num--;
      }
    }, 400);
    text.textContent = "Choose your weapon";
    image[1].setAttribute("src", "assets/right_fist.png");
    image[1].classList.add("moveUpDown");
    botResponse(weapon);
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    setTimeout(() => {
      rock.disabled = false;
      paper.disabled = false;
      scissor.disabled = false;
      image[1].setAttribute("src", `assets/${weapon}.png`);
      image[1].classList.remove("moveUpDown");
    }, 2000);
  };
};

rock.addEventListener("click", weaponSelected("rock"));
paper.addEventListener("click", weaponSelected("paper"));
scissor.addEventListener("click", weaponSelected("scissors"));
