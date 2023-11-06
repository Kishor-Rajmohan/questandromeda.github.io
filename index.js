// https://coolors.co/073c82-314093-5a44a3-834db4-ac55c4
var text = document.getElementsByClassName("text");
var spacer = document.getElementById("spacer");
window.addEventListener('load', (event) => {
  window.scroll(0, 0);
  setTimeout(function() {
    window.scroll(0, 0);
    window.addEventListener("scroll", reveal);
  }, 50);
  addListeners();
});

var navlock = false;

function reveal() {
  var reveal = document.getElementById("banner");
  var windowHeight = parseInt(window.innerHeight);
  var scroll = Math.round(parseInt(window.scrollY));
  var navbar = document.getElementById("navbar");
  var goals = document.getElementById("goals").getElementsByClassName("container");
  var footer = document.getElementById("footer");
  
  if (scroll >= Math.round(windowHeight)) {
    spacer.style.display = "none";
    document.body.style.backgroundImage = "url(./images/QABackground2.png)";
  }

  console.log(scroll + " " + windowHeight)
  
  var reveal = document.getElementById("banner");

  if (spacer.style.display == "none") {
    reveal.style.filter = "blur(5px)";
    reveal.style.opacity = "0";
    navbar.style.filter = "blur(0)";
    navbar.style.opacity = "1";
    navbar.style.position = "fixed";
    if (navlock == false) {
      setTimeout(function() {
        goals[0].style.filter = "blur(0)";
        goals[0].style.opacity = "1";
      }, 250);
      setTimeout(function() {
        goals[1].style.filter = "blur(0)";
        goals[1].style.opacity = "1";
      }, 750);
      setTimeout(function() {
        goals[2].style.filter = "blur(0)";
        goals[2].style.opacity = "1";
      }, 1250);
      setTimeout(function() {
        goals[3].style.filter = "blur(0)";
        goals[3].style.opacity = "1";
      }, 1750);
      setTimeout(function() {
        footer.style.filter = "blur(0)";
        footer.style.opacity = "1";
      }, 2250);
      navlock = true;
    }
  } else {
    if (scroll/windowHeight > .55) {
      navbar.style.opacity = ((scroll/windowHeight-.55)*3.6).toString();
      navbar.style.filter = "blur("+(1-(scroll/windowHeight-.55)*12).toString()+"px)";
    } if (Math.round((scroll/windowHeight)*14) == 0) {
      reveal.style.filter = "blur(0px)";
      reveal.style.opacity = "1";
      navbar.style.filter = "blur(5px)";
      goals[0].style.filter = "blur(5px)";
      footer.style.filter = "blur(5px)";
      navbar.style.opacity = "0";
      goals[1].style.opacity = "0";
      footer.style.opacity = "0";
    } else {
      reveal.style.opacity = (1-(scroll/windowHeight)*1.2).toString();
      reveal.style.filter = "blur("+((scroll/windowHeight)*4 + 1).toString()+"px)";
    }
  }
}


var cards = document.getElementById("goals").getElementsByClassName("card");

function addListeners() {
  for(var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", function() {
      cards[i].getElementsByClassName("front")[0].style.display = "none";
      cards[i].getElementsByClassName("back")[0].style.display = "block";
    });
  }
}