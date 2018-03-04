//business logic
var player1 = "";
var player2 = "";

var throwdice = function () {
  return Math.ceil(6 * Math.random());
};

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

//checking if user rolls a value of one
Player.prototype.rollone = function () {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert("Unfortunately" + this.playername + "you rolled a 1! your turn is over")
  } else {
    this.tempscore += this.roll;
  }
}

// holding functionality
Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.name + "your turn is over,the next player should play now")
}
Player.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.playerName + " You are the winner!");
  }
}

Player.prototype.newGame = function () {
  //debugger;
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName = "";
}
var clearValues = function () {
  $(".player1name").val("");
  $(".player2name").val("");
}

// user i
$()