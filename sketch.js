var ball = {
  x:200,
  y:200,
  r:40,
  xSpeed:0,
  ySpeed:0,
  colour:["blue","green","yellow"],
}









function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(220);
  fill(ball.colour[1])
  circle (ball.x,ball.y,ball.r)
  ball.xSpeed = 1
  ball.x = ball.x+ball.xSpeed



}