let boxes = document.getElementsByClassName("box");

window.onload = function() {
  [...boxes].map(
    box => (box.style.height = `${(window.innerWidth / 15) * (2 / 3)}px`)
  );
};

document.addEventListener("DOMContentLoaded", function() {
  let getRandomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
  };

  [...boxes].map(box => (box.style.background = getRandomColor()));

  let animations = ["crawl", "dangle", "jump", "stretch", "flip"];

  let randomAnimation = box => {
    return function() {
      box.classList.add(animations[Math.floor(Math.random() * Math.floor(5))]);
      setTimeout(
        () =>
          box.classList.remove(
            animations[Math.floor(Math.random() * Math.floor(5))]
          ),
        4000
      );
    };
  };

  [...boxes].map(box => box.addEventListener("click", randomAnimation(box)));
});
