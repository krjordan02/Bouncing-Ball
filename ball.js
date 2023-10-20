//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById('ball');
var velocity = 10;
var positionX = 0;
var positionY = 0;
var reverse = false;
var reverseY = false;

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 1080;
  var Ymin = 0;
  var Ymax = 500;
  
  if(reverse === false){
    positionX = positionX + velocity;
  }
  if (reverseY === false){
    positionY = positionY + velocity;
  }
  if(reverse === true){
    positionX = positionX - velocity;
  }
  if(reverseY === true){
    positionY = positionY - velocity;
  }
  if(positionX > Xmax || positionX == Xmin){
    reverse = !reverse;
  }
  if(positionY > Ymax || positionY == Ymin){
    reverseY = !reverseY;
  }
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";
}

// This call the moveBall function every 100ms
setInterval(moveBall, 20);
