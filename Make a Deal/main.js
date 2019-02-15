let bluedoor = document.getElementById("blue-door");
let orangedoor = document.getElementById("orange-door");
let greendoor = document.getElementById("green-door");
let header = document.getElementsByTagName("h1");
let doors = document.getElementsByClassName("doors")[0];
let isDoorOpen = false;

let openedDoor = (firstDoor, secondDoor) =>
  (document.getElementsByClassName("Rules")[0].innerHTML = `
        <p>I opened the ${secondDoor} door for you which held a BAD THING</p>
        <p>Now if you want to switch you can choose the ${
          firstDoor !== "GreenDoor" ? "GreenDoor" : "BlueDoor"
        }</p>
        <p>or you can keep your first choice and open the ${firstDoor}</p>
    `);

bluedoor.addEventListener("click", () =>
  isDoorOpen == false
    ? [
        (header[0].innerText = "You Picked the Blue Door!"),
        openedDoor("BlueDoor", "OrangeDoor"),
        (orangedoor.src = "assets/orange_door_fire.png"),
        (isDoorOpen = true),
        (orangedoor.disabled = true)
      ]
    : [
        (document.getElementsByClassName(
          "container"
        )[0].innerHTML = `<h1>You Lose</h1>`) && (doors.style.display = "none")
      ]
);
orangedoor.addEventListener("click", () =>
  isDoorOpen == false
    ? [
        (header[0].textContent = "You Picked the Orange door"),
        openedDoor("OrangeDoor", "BlueDoor"),
        (bluedoor.src = "assets/blue_door_fire.png"),
        (isDoorOpen = true),
        (bluedoor.disabled = true)
      ]
    : [
        (document.getElementsByClassName(
          "container"
        )[0].innerHTML = `<h1>You Lose</h1>`) && (doors.style.display = "none")
      ]
);
greendoor.addEventListener("click", () =>
  isDoorOpen == false
    ? [
        (header[0].textContent = "You Picked the Green door"),
        openedDoor("GreenDoor", "OrangeDoor"),
        (orangedoor.src = "assets/orange_door_fire.png"),
        (isDoorOpen = true),
        (orangedoor.disabled = true)
      ]
    : [
        (document.getElementsByClassName(
          "container"
        )[0].innerHTML = `<h1>You Win</h1>`)
      ]
);
