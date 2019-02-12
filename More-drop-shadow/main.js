let catDiv = document.getElementsByTagName("img")[0];
let content = document.getElementsByTagName("h1")[0];
let p = document.getElementsByTagName("p")[0];

let offsetX = 0;
let offsetY = 0;
let blurRadius = 0;
let spreadRadius = 0;
let color = "grey";

let boxShadow = () => {
  blurRadius = blurRadius + 1;
  spreadRadius = spreadRadius + 3;
  catDiv.style.boxShadow = `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`;
};

let contentShadow = () => {
  offsetY = offsetY + 1;
  blurRadius = blurRadius + 1;
  content.style.textShadow = ` ${offsetX}px ${offsetY}px ${blurRadius}px ${color}`;
};

let pShadow = () => {
  offsetY = offsetY + 1;
  blurRadius = blurRadius + 1;
  p.style.textShadow = ` ${offsetX}px ${offsetY}px ${blurRadius}px ${color}`;
};

catDiv.addEventListener("click", () => boxShadow());
content.addEventListener("click", () => contentShadow());
p.addEventListener("click", () => pShadow());
