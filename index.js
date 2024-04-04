window.addEventListener('load', (event) => {
  countdown();
});

function countdown() {
  cd = document.getElementById("countdown");
  cd.innerHTML = " In 5...";
  setTimeout(function() {
    cd.innerHTML = " In 4...";
  }, 1000);
  setTimeout(function() {
    cd.innerHTML = " In 3...";
  }, 2000);
  setTimeout(function() {
    cd.innerHTML = " In 2...";
  }, 3000);
  setTimeout(function() {
    cd.innerHTML = " In 1...";
  }, 4000);
  setTimeout(function() {
    cd.innerHTML = " Now...";
  }, 5000);
  setTimeout(function() {
    window.location.href = 'https://oaaoinfo.org/';
  }, 5250);
}