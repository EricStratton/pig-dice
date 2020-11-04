// Business Logic //

function randomNum() {
  let roll = Math.floor(Math.random() * 7);
  return roll;
}


function randomNumEvaluator(roll) {
  if (roll === 1) {
    return false
  }
  else {
    player1Total += roll
  }
}








// User Interface //

let roll;
let player1total = 0;

randomNumEvaluator()
