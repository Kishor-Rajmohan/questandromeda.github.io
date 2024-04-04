// https://coolors.co/073c82-314093-5a44a3-834db4-ac55c4
// https://coolors.co/073c82-314093-5a44a3-834db4-ac55c4
var text = document.getElementsByClassName("text");
window.addEventListener('load', (event) => {
  //   window.scroll(0, 0);
  //   glow();
  //   setTimeout(function() {
  //     reveal();
  //   }, 2100);
  //   addListeners();
  // start();
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

// var navlock = false;

// function glow() {
//   var logo = document.getElementById("QALOGO");
//   logo.style.animation = "flicker 1s linear forwards";
// }

// function reveal() {
//   console.log("reveal start");
//   var navbar = document.getElementById("navbar");
//   var goals = document.getElementById("goals").getElementsByClassName("container");
//   var footer = document.getElementById("footer");

//   navbar.style.filter = "blur(0)";
//   navbar.style.opacity = "1";
//   navbar.style.position = "fixed";
//   var reveal = document.getElementById("banner");
//   reveal.style.filter = "blur(5px)";
//   reveal.style.opacity = "0";

//   setTimeout(function() {
//     goals[0].style.filter = "blur(0)";
//     goals[0].style.opacity = "1";
//   }, 1250);
//   setTimeout(function() {
//     goals[1].style.filter = "blur(0)";
//     goals[1].style.opacity = "1";
//   }, 1750);
//   setTimeout(function() {
//     goals[2].style.filter = "blur(0)";
//     goals[2].style.opacity = "1";
//   }, 2250);
//   setTimeout(function() {
//     goals[3].style.filter = "blur(0)";
//     goals[3].style.opacity = "1";
//   }, 2750);
//   setTimeout(function() {
//     goals[4].style.filter = "blur(0)";
//     goals[4].style.opacity = "1";
//   }, 3250);
//   setTimeout(function() {
//     goals[5].style.filter = "blur(0)";
//     goals[5].style.opacity = "1";
//   }, 3750);
//   setTimeout(function() {
//     footer.style.filter = "blur(0)";
//     footer.style.opacity = "1";
//     console.log("reveal end");
//   }, 4250);
// }


// var cards = document.getElementById("goals").getElementsByClassName("card");

// function addListeners() {
//   for (var i = 0; i < cards.length; i++) {
//     cards[i].addEventListener("mouseover", function() {
//       cards[i].getElementsByClassName("front")[0].style.display = "none";
//       cards[i].getElementsByClassName("back")[0].style.display = "block";
//     });
//   }
// }

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }

// Stars
// const canvas = document.getElementById("stars");
// const ctx = canvas.getContext("2d");
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;
// var speed = 10;

// class Star {
//   constructor() {
//     this.x = 0;
//     this.y = 0;
//     this.velX = 3;
//     this.velY = 3;
//     this.theta = getRandomInt(Math.PI, Math.PI*2);
//   }

//   update() {
//     // var tx = this.x + Math.cos(this.theta)*speed,
//     //     ty = this.y + Math.sin(this.theta)*speed,
//     //     dist = Math.sqrt(tx*tx+ty*ty),
//     //     rad = Math.atan2(ty,tx),
//     //     angle = rad/Math.PI * 180;

//     // var velX = (tx/dist)*speed;
//     // var velY = (ty/dist)*speed;

//     // var deltaX = this.x - centerX;
//     // var deltaY = this.y - centerY;
//     // this.x += velX;
//     // this.y += velY;

//     ctx.strokeStyle = "#FFFFFF";
//     ctx.fillStyle = "#FFFFFF";
//     // ctx.clearRect(0,0,500,500);
//     ctx.beginPath();
//     ctx.arc(this.x,this.y,5,0,Math.PI*2);
//     ctx.fill();
//   }
// }

// var stars = [];

// function start() {
//   for(var i = 0; i < 10; i++) {
//     stars.push(new Star());
//   }
//   updateAll();
// }

// function updateAll() {
//   clearCanvas();
//   for (let i = 0; i < stars.length; i++) {
//     stars[i].update();
//   }
//   setTimeout(updateAll, 100);
// }

// function clearCanvas(){
//   ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
// }

// var d  = {
// "Label" : "Value"
// };

// var byTheNumber = document.getElementById("questbythenumber");
// var c = byTheNumber.getContext('2d');
// c.beginPath();
// c.fillRect(0, 0, 50, 10);

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function User(x, y, vX, vY, dir) {
//   this.x = x;
//   this.y = y;
//   this.velX = vX;
//   this.velY = vY;
//   this.dir = dir;
//   this.drawSelf = function() {
//     c.beginPath();
//     c.arc(x, y, 10, 0, Math.PI * 2, false);
//     c.fillStyle = '#8ED6FF';
//     c.fill();
//     c.strokeStyle = "blue";
//     c.stroke();
//     this.x += this.velX;
//     this.y += this.velY;

//   }
// }

// var userList = [];

// for (var i = 0; i < 100; i++) {
//   var x = c.width * Math.random();
//   var y = c.height * Math.random();
//   userList.push(new User(x, y, Math.random() * 0.2 - 0.1, Math.random() * 0.2 - 0.1, Math.atan2(x - c.width / 2, y - c.height / 2)));
// }

// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, window.innerWidth, window.innerHeight);
//   for (var i = 0; i < userList.length; i++) {
//     userList[i].drawSelf();
//   }
// }

// animate();