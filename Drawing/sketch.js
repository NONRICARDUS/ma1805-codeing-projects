function setup() {
  createCanvas(640, 480);
  background(230);
  // noStroke();
}

function draw() {
  background(220);

  fill(242, 226, 5); //(r, g, b)
  circle(180, 200, 220); 
  
  fill(255, 255, 255); //(r, g, b)
  ellipse(105, 195, 55, 60); 

  fill (0, 0, 0); //(r, g, b)
  circle(115, 195, 25);

  stroke(0, 0, 0);
  line(97, 270, 130, 270); 

}
