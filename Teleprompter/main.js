let button = document.getElementsByTagName("button")[0];
let text = document.getElementsByTagName("textarea")[0];

var value = text.value;

let getMessage = () => {
  console.log(window);
};

button.addEventListener("click", getMessage);
