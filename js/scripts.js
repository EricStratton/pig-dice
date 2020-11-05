// Business Logic //

function Player() {
  this.turnScore = 0;
  this.globalScore = 0;
};

// Player Objects
let player1 = new Player();
let player2 = new Player();

// playerx function to roll dice
Player.prototype.rollDice = function()  {
  this.dice = Math.floor(Math.random() * 6) + 1; // generates random num 1-6
  if (this.dice === 1) {  // if roll is "1"
    return false; // return to playerX.rollDice result === false in UI
  } else (this.dice !== 1) {
    this.turnScore += this.dice;
    return this.turnScore;  // return to playerX.rollDice 'else' in UI
  }
};

// User Interface Logic //

$(document).ready(function() {
  $("#player1").text(player1.turnScore = 0);
  $("#player2").text(player2.turnScore = 0);
  $("#player1").text(player1.globalScore = 0);
  $("#player2").text(player2.globalScore = 0);

//********************************************************************************************//
      // PLAYER ROLL 1 - BUTTON //
//********************************************************************************************//
  $("form#player1Roll").submit(function(event) {
    event.preventDefault();

    let result = player1.rollDice();
      if (result === false) { // If dice === 1
        $("#player1Roll").hide();
        $("#player1Hold").hide();
        $("#player2Roll").show();
        $("#player2Hold").show();
      } else {
        $("#turnScorePlayer1").text(player1.turnScore); // Holding tempScore while player continues to roll
      }
//********************************************************************************************//
      // PLAYER ROLL 2 - BUTTON //
//********************************************************************************************//
  $("form#player2Roll").submit(function(event)  {
    event.preventDefault();

    let result = player2.rollDice()
      if (result === false) {
        $("player2Roll").hide();
        $("player2Hold").hide();
        $("player1Roll").show();
        $("player1Hold").show();
      }


      

      

    $("#player1").text(player1.globalScore += player1.turnScore); // add turn score to total score
    $("#player2").text(player2.globalScore += player2.turnScore);

  })

})




// old code ------------

function Player (name, turnTotal, overAll, active) {
  this.name = name;
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

