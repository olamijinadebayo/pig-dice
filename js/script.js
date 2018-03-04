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