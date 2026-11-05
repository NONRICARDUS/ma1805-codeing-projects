let colours = ["gold", "orange", "pink", "lightblue"];
let select = 0; // the column that does the side eye

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //loop through rows
  for (let i = 0; i < 4; i++) {
  
  //loop through columns
  for (let ii = 0; ii < 4; ii++) {
  let x = 50 + ii * 100;
  let y = 50 + i* 100; 

  //face, colour from the array 
  fill (colours[i]);
  circle (x, y, 80);

  //eye
  fill (255);
  ellipse (x - 27, y - 8, 22, 24);

  //side eye in the selected column
  fill (0);
  if (ii == select) {
    circle (x - 22, y - 8, 10);
  }
  
  else {
    circle (x - 27, y - 8, 10);
  }

  //mouth
  line (x - 30, y + 18, x - 18, y + 18);
  }
  }
  }

  function mouseClicked() {
  select ++; 
  if (select >=4) {
    select = 0;
  }
  return false;
}


