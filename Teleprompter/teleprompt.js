let content = document.getElementsByTagName("h1")[0];

let value = window.location.search.split("=")[1];

let newValue = value.replace(/[+]/g, " ");

newValue == ""
  ? (newValue = "You should probably enter some text next time")
  : newValue;

content.textContent = encodeURI(newValue);

function myMove() {
  var pos = 20;
  var id = setInterval(frame, 1);
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
