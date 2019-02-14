let container = document.getElementsByClassName("container")[0];

let randomRGB = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};

container.addEventListener(
  "mouseover",
  e => (e.target.style.background = randomRGB())
);

container.addEventListener(
  "touchmove",
  e => (e.target.style.background = randomRGB())
);
