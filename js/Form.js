/*
Form: Form should contain the
input box and a button to log
in.
When the button is pressed,
the player's name should be
registered in the database and
a new player should be
created.

HTML is used to create any content
like a form on a page
*/

class Form{
  constructor(){}
  //DOM = document object model => we would be using DOM to create the form

  display(){ // displays the objects or elements in that particular class
     /*
      We create a title for our game "Car Racing Game":
     - we create an h2 element.
     */
      var title = createElement("h2") // creating an Element for displaying things inside the Form object
      title.html("Car Racing Game") //for giving the content of the element that is created.
      title.position(130,0) // for giving position of the element that is created

      var input = createInput("Name")// creating an Input for using to add in details inside the Form object
      var button = createButton("Play")// creating a Button for the Form. the name od the button is "Play"
      var greeting = createElement("h3")// creating an Element called greeting to greet the players once the "Play" button is pressed
      
      input.position(130,160) // for giving the position to display the input object
      button.position(250,200)// gives position to display the button object
     /*  
      // mousePressed function is to greet the player when the player writes his/her name and clicks on PLay button
      //once the player is greeted then the player count  and player details(name and the distance convered)in the database should also be updated
      //button.mousePressed:
          -button.mousePressed() can be used to trigger an action when a mouse button is pressed.
          -It expects a function as an argument
     */

      button.mousePressed( function(){ // defining what button.mousePressed should do within the function call itself
          input.hide()// the input should hide
          button.hide()// button should hide

          var name = input.value()// taking the value from the input section and passing it into the variable
          playerCount +=1 ;// playerCount variable of the visual code studio increases by one
          player.update(name)// passing the var name as an argument into the function call of player.update, which updates the name of the player in the database
          player.updateCount(playerCount)// passing the var playerCount as an argument into the function call of player.updateCount, which updates the count of the player in the database

          greeting.html("Hello "+name);// a new text is seen on the form with hello plus the value inside the var name
          greeting.position(130,160) // giving position to the greeting element
      }) 
  }

}