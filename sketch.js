let arm = 375;
let speed = 4;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(65, 10, 120);
  
  stroke(37, 135, 7);
  strokeWeight(2);
  
  //head
  fill(63, 219, 15, 175);
  ellipse(200,170, 374, 300);
  
  //third eye
  fill(2, 250, 15, 150);
  triangle(150, 150, 200, 50, 250, 150);
  fill(13, 1, 0);
  ellipse(199, 115, 25, 25); 
  
  //right eye
  fill(13, 1, 0);
  ellipse(300, 200, 75, 50);
  
  //left eye
  ellipse(100, 200, 75, 50);
  
  //nose
  fill(143, 19, 10);
  rect(175, 225, 45, 20);

  //body
  fill(63, 219, 15, 175);
  rect(190, 325, 20, 75);
  
  //arm
  strokeWeight(5)
  push();
  translate(200, 325);
  rotate(radians(-50));
  rect(0, 0, 10, arm, 50);
  rect(-25, -15, 10, arm, 50)
  arm = arm - speed;
  
  if (arm >=375)
  {
    speed = -speed;
  }
  console.log(arm);
  
  if (arm <=-200)
    {
      speed = -speed;
    }

  pop();
  
  //stars
  fill(236, 237, 173);
  strokeWeight (2);
  ellipse(25, 25, 15,15);
  ellipse(25, 250, 15, 15);
  ellipse(375, 20, 15, 15);
  ellipse(350, 275, 15, 15);
  ellipse(350, 375, 15, 15);
  ellipse(250, 10, 15, 15);
  ellipse(175, 14, 15, 15);
  ellipse(275, 345, 15, 15);
  ellipse(110, 325, 15, 15);
  
  //third eye line
  stroke(235, 16, 27);
  line(189, 115, 210, 115);
  line(199, 103, 199, 125);
  
  
}