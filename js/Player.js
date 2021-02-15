/* Player: A new player object
should be created every time a
new user logs in. It should
contain all the information
about the player - name,
position in the game etc.
For now it can just have the
name property.
It should also be able to read
and write player information to
the database - for example
player count or player name.
*/


/* 
get = it is reading from database
update = it is writing into the database

*/


/* Database Structure of the game

projectID= nameof the project multiplayer-game-d7e76
    |__ gameState : 0
    |
    |__ playerCount: 0 -4 => values would change depending on the registeration of players
    |
    |__ player1: // this is the playerIndex from line 62
           |__ name:
    |
    |__ player2:
            |__ name:            
    |
    |__ player3:
            |__ name:
    |
    |__ player4:
            |__ name:
                

*/

class Player{
  constructor(){}

  getCount(){ // to get the value of the playerCount from the database
      var playerCountRef = database.ref('playerCount');/*refers to the PlayerCount field of the firebase database*/
      playerCountRef.on("value", function(data){ //turning on the listener and getting value from the database and writing a function to get the meaningful data from firebase into the code
              playerCount = data.val(); /*var playerCount of visual code studio*/
      })
  }

  updateCount(count){ // to write the value(count) into the playerCount feild of the database
      database.ref('/').update({ /// we have given '/' over here because we want the field 'playerCount' from the firebase to be referred to. playerCount is just the exact or immediate child under the project id
      playerCount:count, // assigns the 'count' value from the parenthesis to the playerCount field of the database
  })
  }  

  update(name){// to write the value(name) into the playerN feild of the database => N refers to numbers
      var playerIndex = "player" + playerCount // to refer to the database.. Please look up for the database structure given above
      database.ref(playerIndex).set({ // we are referring to the database and setting the value inside the firebase with the help of .set() function
          name:name // assigns the 'name' value from the parenthesis to the name field of the player1, player2..playerN field of the database
      })
  }


}