Level 7


function rightTwo() {
  right();
  right();
}
function red() {
  if (getColor() == "red") {
  rightTwo();
	} 
}  
function repeatdown() {
	while (getColor() != "red") {
  down();
	}
}
function repeatup() {
  while (getColor() != "red") {
  up();
  }
}
repeatdown();
red();
repeatup();
red();
repeatdown();
red();
repeatup();
red();
repeatdown();
right();
