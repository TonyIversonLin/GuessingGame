/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.


var playersGuess,
    winningNumber = generateWinningNumber();



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	// add code here
	var max = 100;
	var min = 0;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fetch the Players Guess

function playersGuessSubmission(){
	// add code here

  	var temp = +document.getElementById("guess").value;
	playersGuess = parseInt(temp);
	document.getElementById('guess').value = "";


	checkGuess();

}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here
	if(playersGuess===winningNumber) //return hint saying "you win"
	if(playersGuess!==winningNumber) lowerOrHigher();
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */

