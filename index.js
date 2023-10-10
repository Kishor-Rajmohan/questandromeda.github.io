display = "Quest Andromeda Is On It's Way!";
var i = 0;

function typeWriter() {
  if (i < display.length) {
    document.getElementById("text").innerHTML += display.charAt(i);
    if (display.charAt(i) == ' ') {
      setTimeout(typeWriter, 1);
    } else {
      setTimeout(typeWriter, 90);
    }
    i++;
  }
}

window.addEventListener('load', (event) => {
    typeWriter();
});