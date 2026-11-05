let mouthHeight= 3
let speed =0.5;

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);


  //face, yellow colour
  fill(242, 226, 5); //(r, g, b)
  circle(180, 200, 220); 
  
  //eye, white colour
  fill(255, 255, 255); //(r, g, b)
  ellipse(105, 195, 55, 60); 

  //pupil, black colour 
  fill (0, 0, 0); //(r, g, b)
  circle (115, 195, 25);

  //Mouth
  fill(0, 0, 0);
  ellipse(119, 265, 33, mouthHeight); 

  //open and close the mouth 
  mouthHeight = mouthHeight + speed;
  if (mouthHeight> 30) {
    speed = -0.2;
  }
  if (mouthHeight <2) {
    speed =0.5;
  }

}
