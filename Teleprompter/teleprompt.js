let content = document.getElementsByTagName("h1")[0];

let value = window.location.search.split("=")[1];

value = value.toLowerCase();

let newValue = value.replace(/[+,.-_%@!#$%]/g, " ");

value = ""
  ? (newValue = "You should probably enter some text next time")
  : newValue;

content.textContent = newValue;

function myMove() {
  var pos = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == -1000) {
      clearInterval(id);
    } else {
      pos = pos - 0.02;
      content.style.top = pos + "%";
    }
  }
}
myMove();
