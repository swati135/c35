/*
Game Object: Game object
should be able to hold the state
of the game. 
It should be able
to display form when game
state is 0(WAIT) or the game
when the game state is
1(PLAY) or leaderboard when
the game state is 2(END).

*/


/* 
get = it is reading from database
update = it is writing into the database

*/


/* projectID= nameof the project multiplayer-game-d7e76
    |__ gameState : 0
    |
    |__ ball:
            |__ position:
                |__ x
                |__ y

*/

class Game{
  constructor(){

  }

  getState(){ // to get the value of the gamestate from the database
      var gameStateRef = database.ref('gameState');/**refers to the gameState field of the firebase database*/
      gameStateRef.on("value", function(data){ //turning on the listener and getting value from the database and writing a function to get the meaningful data from firebase into the code
              gameState = data.val(); /* var gameState of visual code studio*/
      })
  }

  update(state){ // to write the value(state) into the gameState feild into the database
      database.ref('/').update({ /// we have given '/' over here because we want the field 'gameState' from the firebase to be referred to. gameState is just the exact or immediate child under the project id
          gameState:state, // assigns the 'state' value from the parenthesis to the gameState field of the database
      })
  }

  start(){// so that we can display the form and also create the form objects and the player objects
      if(gameState ==0){ //when gameState is 0 the form should be displayed and the player should be able to register hence creating a new player in the database as well as for the game
          player = new Player(); // creating a new player object with the help of the player class
          form = new Form();  // creating a new form object with the help of the form class
          form.display(); //displaying the form object
          player.getCount(); // trying to get the count of the player from the database
      }
  }
}


