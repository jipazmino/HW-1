Level 2

function rightTwo() {
  right();
  right();
}
right();
var steps = 0;
while (steps < 6) {
  down();
  steps = steps + 1;
}
rightTwo();
var steps = -2;
while (steps < 0) {
  up();
  steps = steps + 1;
}
rightTwo();
var steps = 0;
while (steps < 3) {
  down();
  steps = steps + 1;
}
