document.addEventListener("DOMContentLoaded", function() {
  let container = document.getElementById("container");

  let randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  let randomColor = () =>
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8);

  let makeSpots = num => {
    for (let i = 0; i < num; i++) {
      let size = randomInt(3, 65);
      let color = randomColor();

      let e = container.appendChild(document.createElement("div"));
      e.id = `spot${i}`;
      e.className = "spot";
      let c = document.getElementById(`spot${i}`).style;
      c.backgroundColor = color;
      c.height = `${size}px`;
      c.width = `${size}px`;
    }
  };

  makeSpots(20);

  let moveDiv = (e, elem, speed) => {
    let xp = 0,
      yp = 0;
    setInterval(() => {
      xp += (e.pageX - xp) / speed;
      yp += (e.pageY - yp) / speed;
    }, 300);
    elem.style.top = `${xp}px`;
    elem.style.left = `${yp}px`;
    console.log(xp);
  };

  window.addEventListener("mousemove", e => {
    e.preventDefault();
    for (let i = 0; i < 20; i++) {
      moveDiv(e, document.getElementById(`spot${i}`), randomInt(8, 50));
    }
  });
});
