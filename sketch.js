var ball,img,paddle,paddleimg;
function preload() {
  /* preload your images here of the ball and the paddle */
  paddleimg = loadImage ("paddle.png");
 img =loadImage ("ball.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  paddle = createSprite(370,200,1,1);
  paddle.addImage(paddleimg);
  
  ball = createSprite(30,200,1,1);
  ball.addImage(img);
  ball.velocityX = 6;

  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  for (var i = 0; i < 400; i+=20) {
     line(200,i,200,i+10);
  }
  edges = createEdgeSprites();
  //console.log(mouseY);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  if (ball.isTouching (paddle)) {
  ball.bounceOff (paddle);
    randomVelocity();
  }
  if (ball.isTouching(edges[2]) || ball.isTouching(edges[3]) || ball.isTouching(edges[0])) {
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
    ball.bounceOff(edges[0]);
  }
  
  if (paddle.isTouching(edges[2]) || paddle.isTouching(edges[3])) {
    paddle.bounceOff(edges[2]);
    paddle.bounceOff(edges[3]);
  }
if (ball.x >= 400) {
ball.x = 30;
ball.y = 200;
}
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyWentDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = -6;
  }
  
  if(keyWentUp(UP_ARROW))
  {
     
    paddle.velocityY = 0;
  }
  
  if(keyWentDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
  paddle.velocityY = 6;  
  }
  
  if(keyWentUp(DOWN_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = 0;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
var  rand = random (7,9);
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY = (rand);
}

