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
$(document).ready(function () {
  $("button#start").click(function () {
    player1 = new Player(true);
    player1 = new Player(true);
    $(".player-console").show();
    $(".start-menu").hide();

    var player1Name = $(".player1Name").val();
    $(".player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName = player1Name;
    player2.playerName = player2Name;

  });
  $("button#new-game").click(function (event) {
    $(".player-console").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();

    $(".start-menu").show();
  });
});