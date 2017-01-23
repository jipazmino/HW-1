function upThreeTimes() {
  up();
  up();
  up();
}
function downThreeTimes() {
	down();
	down();
  down();
}
right();
if (getColor() == "blue") {
  downThreeTimes();
} else {
  upThreeTimes();
}
if (getColor() == "blue") {
  right();
} else {
  left();
}
var steps = 0;
if (steps >= 1) {
  up();
} else {
  down();
}
var steps = 0;
if (steps >= 1) {
  up();
} else {
  up();
}
