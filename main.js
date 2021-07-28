/* moved down this object initializers to the variable section
const player = {
     currentChoice: null
   };
  const computer = {
    currentChoice: null
  };
*/

  //this function start the ball rolling and is activated with the
  //get element by id, and the event listener
  //the event listener knows where to listen 
  //on html because of the getelementbyid
  function buttonClick(e) {

    // veriables/objects, in this section
    
    const player = {
        currentChoice: null
    };
    const computer = {
        currentChoice: null
    };
    
    const choices = ["rock", "paper", "scissors"];
    
    // i seem to not need double declarations of these variables
    
    //const randomIndex = Math.floor(Math.random() * choices.length);
    //computer.currentChoice = choices[randomIndex];
    
  // this function does not run untill it gets to line 38
  function computerChooses() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
    console.log(currentChoice = choices[randomIndex])
  }

  // this conditionals set the value of my choice as a string inside
  // the object player.currentChoice
    if (e.target.id === "rock") {
      player.currentChoice = choices[0];
    } else if (e.target.id === "paper") {
      player.currentChoice = choices[1];
    } else {
      player.currentChoice = choices[2];
    }
   
    computerChooses();
    if (computer.currentChoice === player.currentChoice) {
      displayResult(
        "It's a tie! The computer and player both chose " + computer.currentChoice
      );
    } else if (computer.currentChoice === choices[0]) {
      if (player.currentChoice === choices[1]) {
        displayResult(
          "The player wins! The computer chose " +
            computer.currentChoice +
            " and the player chose " +
            player.currentChoice
        );
      } else {
        displayResult(
          "The computer wins! The computer chose " +
            computer.currentChoice +
            " and the player chose " +
            player.currentChoice
        );
      }
    } else if (computer.currentChoice === choices[1]) {
      if (player.currentChoice === choices[2]) {
        displayResult(
          "The player wins! The computer chose " +
            computer.currentChoice +
            " and the player chose " +
            player.currentChoice
        );
      } else {
        displayResult(
          "The computer wins! The computer chose " +
            computer.currentChoice +
            " and the player chose " +
            player.currentChoice
        );
      }
    } else if (computer.currentChoice === choices[2]) {
      if (player.currentChoice === choices[0]) {
        displayResult(
          "The player wins! The computer chose " +
            computer.currentChoice +
            " and the player chose " +
            player.currentChoice
        );
      } else {
        displayResult(
          "The computer wins! The computer chose " +
            computer.currentChoice +
            " and the player chose " +
            player.currentChoice
        );
      }
    }
  }
  
  function displayResult(result) {
    const resultText = document.createElement("p");
    resultText.innerText = result;
    document.body.appendChild(resultText);
  }
  document.getElementById("rock").addEventListener("click", buttonClick);
  document.getElementById("paper").addEventListener("click", buttonClick);
  document.getElementById("scissors").addEventListener("click", buttonClick);
  
  