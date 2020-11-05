// Business Logic //
let player1;
let player2;

function Player (name, turnTotal, overAll, active) {
  this.name = name
  this.turnTotal = 0;
  this.overAll = 0;
  this.active = active;
}

Player.prototype.addScore = function (turnTotal, overAll) {
  this.overAll += this.turnTotal;
  if (this.overAll >= 100) {
    alert("Winner!");
  } else {
    return this.overAll
  }
}

function randomNum() {
  let roll = Math.floor(Math.random() * 7);
  return roll;
}

function playerGoesFirst(roll); {
  if (roll === 0 - .5)  {
    return True // ("#player1Area").show();
  } else {
    ("#player2Area").show();
  } 
}

function rollEvaluator (roll) {
  if (roll === 1) {
    if (this.activate === player1.active) {
      player1.active = false;
      player2.active = true;
    } else {
      player2.active = false;
      player1.active = true;
    }
  if (playerTotal >= 100) {
    player wins game;
  }
  } else {
    this.turnTotal += roll;
  }  
}



// User Interface //



randomNumEvaluator()
