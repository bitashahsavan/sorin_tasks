 //set the canvas width and hight 
 const canvas = document.querySelector('canvas');
 const width = window.innerWidth;
 const height = window.innerHeight;
 canvas.width = width;
 canvas.height = height;
 const ctx = canvas.getContext('2d');
 const balls = [];
 let hole;

// create Ball class
class Ball {
 constructor(x, y, velx, vely, size, color) {
  this.x = x; 
  this.y = y; 
  this.velx = velx; 
  this.vely = vely; 
  this.size = size; 
  this.color = color; 
 }
 drawBall() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fillStyle = this.color; 
  ctx.fill(); 
  ctx.closePath();
 }
 updateBall() {
  if (this.x + this.size >= width || this.x - this.size <= 0) {
    this.velx = -this.velx;
  }

  if (this.y + this.size >= height || this.y - this.size <= 0) {
    this.vely = -this.vely;
  }

  this.x += this.velx;
  this.y += this.vely; 
 }
}

//create class line 
class Line {
  constructor( x1 , y1 , x2 , y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
   }
   draw_line() {
     var ctx_line = canvas.getContext("2d");
     ctx.beginPath();
     ctx_line.moveTo(this.x1, this.y1);
     ctx_line.lineTo(this.x2, this.y2);
     ctx_line.stroke();
   }
}
//create hole class
class Hole {
  constructor(x,y,size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  draw_hole() {
    const ctx_hole = canvas.getContext("2d");
    ctx_hole.beginPath();
    ctx_hole.arc(this.x , this.y , this.size , 0 , 2 * Math.PI);
    ctx_hole.fillStyle = '#000000'
    ctx_hole.fill();
  }
}
 //create random number generator func
const random = (min, max) =>{
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
} 

//is ball inside hole or not?
const isInsideCircle = (ball) => {
  let distance = Math.sqrt(((ball.x + ball.velx) - hole.x ) ** 2 + ((ball.y + ball.vely) - hole.y ) ** 2);
  return distance <=  ball.size + hole.size;
}

//detect collision ball and line
const checkCollision = (ball, line) => {

  const lineLength = Math.sqrt(
    (line.x2 - line.x1) ** 2 + (line.y2 - line.y1) ** 2
  );

  //dot is point that when ball collision the line we predict that
  const dot =
    ((ball.x - line.x1) * (line.x2 - line.x1) +
     (ball.y - line.y1) * (line.y2 - line.y1)) /
    lineLength ** 2;

  // the closet point to ball on line 
  const closestX = line.x1 + dot * (line.x2 - line.x1);
  const closestY = line.y1 + dot * (line.y2 - line.y1);

  const distance = Math.sqrt(
    (ball.x - closestX) ** 2 + (ball.y - closestY) ** 2
  );

  return (
    distance <= ball.size &&
    closestX >= Math.min(line.x1, line.x2) &&
    closestX <= Math.max(line.x1, line.x2) &&
    closestY >= Math.min(line.y1, line.y2) &&
    closestY <= Math.max(line.y1, line.y2)
  );
}


//detect collision ball to ball
const detectballtoball = (x1,y1,x2,y2) => {
  let a = x2 - x1;
  let b = y2 - y1;
  let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
  return c;
}

//detect collision ball i_th to ball j_th
function detectCollisionBalls() {
  for(var i=0;i<balls.length;i++) {
    for(var j=i+1;j<balls.length;j++) {
      if (i !== j) {  
        if (detectballtoball(balls[i].x,balls[i].y,balls[j].x,balls[j].y) < balls[i].size + balls[j].size) {   

          balls[i].velx *= -1;
          balls[i].vely *= -1;

          balls[j].velx *= -1;
          balls[j].vely *= -1; 
        }
      }
    }
  }
}

//create first ball
const ball = new Ball(
  500,
  200,
  5,
  -5,
  10,
  'rgba(250, 4, 152, 0.25)'
);

balls.push(ball); 

//main func for draw our objects
function loop() {
  ctx.fillStyle = 'rgba(255, 209, 237, 0.25)';
  ctx.fillRect(0, 0, width, height);
  
  //draw line
  const line = new Line(300,300,700,800);
  line.draw_line();

  //draw hole
  hole = new Hole(1400,500,100);
  hole.draw_hole(); 

  for (let i = balls.length-1; i >= 0 ; i--) {
    balls[i].drawBall();
    balls[i].updateBall();
   
    // Check collision with link
    if (checkCollision(balls[i],line)) {
      balls[i].velx *= -1;
      balls[i].vely *= -1;

      balls.push(new Ball(
        Math.random() * (canvas.width - 10 * 2) + 10
        ,200,3,-3,10 ,`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`));
      }

    //delete ball after collision with hole
    for (let i = balls.length - 1; i >= 0; i--) {
      if (isInsideCircle(balls[i])) {
        let del = balls.splice(i , 1);
      } 
    }
  }
  requestAnimationFrame(loop);
  detectCollisionBalls() ;
}

loop();
