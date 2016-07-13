/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.


var playersGuess
var winningNumber = generateWinningNumber();
var guesslog = [];
var maxNumGuess = 8;

$("input").on("keypress",function() {
	if(e.which===13){
		// Enter pressed... do anything here...
		playersGuessSubmission();
	}
});

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
	document.getElementById('guess').value ="";

	checkGuess();
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
	var hintGeneral = ""; 
	if(playersGuess > winningNumber) hintGeneral += "higher ";
	if(playersGuess < winningNumber) hintGeneral += "lower ";	
	return hintGeneral;
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	var duplicate = false;
	if(guesslog.indexOf(playersGuess)===-1) guesslog.push(playersGuess);
	else duplicate = true;

	var numTry = guesslog.length;
	if(playersGuess===winningNumber){
		$("#output").text("Congratulations!! You won, hit \"play again\" if you want to play again");
		$("#feedBack").text("");
		$("#moreHint").text("");
		$("#end-image").remove("");
		$("#winImage").css("display","inline");
		$(".header").css("color","white")

	}else{
		if(duplicate===true) $("#output").text("Submitted a duplicate guess");
		else if(numTry===maxNumGuess){
			$("#output").text("You lose");
			$("img,p,h1").addClass("loser");
			$("#end-image").remove("");
			$("#loseImage").css("display","inline");
		}
		else $("#output").text("Try again!!...."+"Guess History: "+guesslog);
		var message = guessMessage();
		$("#feedBack").text(message);
	}

	//then create an element on html that display the result
}

function guessMessage(){
	var message = "your guess is "+lowerOrHigher()+"than the winning number and ";
	var diff = Math.abs(playersGuess - winningNumber);
	if(diff > 20)  message+= "your guess is more than 20 digits away!";
	if(diff <=20 && diff >10) message += "your guess is with in 20 digits!";
	if(diff <=10 && diff !==0) message += "your guess is with in 10 digits away!";
	var remaining = maxNumGuess-guesslog.length;
	message += ("(remaining guess "+remaining+")");
	return message;
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
	var hintArray = [];
	var numGuessHint = 8 - guesslog.length;
	for (var i = 0; i < numGuessHint; i++) {
		hintArray.push(generateWinningNumber());
	}
	hintArray.push(winningNumber);
	hintArray.sort();
	$("#moreHint").text("One of thest number is winning number:"+hintArray);
	//window.location.reload();
	//then create an element on html that display the hint
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
	window.location.reload();

}


/* **** Event Listeners/Handlers ****  */

