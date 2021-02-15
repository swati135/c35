var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game(); // creating the new game Object of the Game class
  game.getState(); // getState function is called to get the value of gameState from the database
  game.start(); //start = registeration wherein the forms would be generated adn players would be created
}


function draw(){

}