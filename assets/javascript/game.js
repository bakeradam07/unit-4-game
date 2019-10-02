$(document).ready(function() {

	//counter for game wins
	  var winCount = 0;
	//Displays win count
	  $(".wins").text("Wins: " + winCount);
	// counter for game losses
	  var lossCount = 0;
	//Displays losses 
	  $(".losses").text("Losses: " + lossCount);
	// counter for user score
	  var userScore = 0;
	 
	//generates random number
	  var randPick = Math.floor(Math.random() * 102) + 19; 
		console.log(randPick); 
		$(".ranNum").html(randPick);

	// creates values for each crystal, a random number between 1-12 
	  var crystal1 = Math.floor(Math.random() * 12) + 1;
	  var crystal2 = Math.floor(Math.random() * 12) + 1;
	  var crystal3 = Math.floor(Math.random() * 12) + 1;
	  var crystal4 = Math.floor(Math.random() * 12) + 1;
	  
	
	//Displays the user's score  
	$(".totalScoreNumber").text(userScore);
	
	// //console.log(randPick);
	//   console.log(crystal1);
	//   console.log(crystal2);
	//   console.log(crystal3);
	//   console.log(crystal4);
  
	// resets the values of the game
	function resetGame() {
	  userScore = 0;
	  var randPick = Math.floor(Math.random() * 102) + 19; 
		console.log(randPick); 
		$(".ranNum").html(randPick);
		var crystal1 = Math.floor(Math.random() * 12) + 1;
		var crystal2 = Math.floor(Math.random() * 12) + 1;
		var crystal3 = Math.floor(Math.random() * 12) + 1;
		var crystal4 = Math.floor(Math.random() * 12) + 1;
	 
	//Displays the user's score
	  $(".totalScoreNumber").text(userScore);
	//   console.log(randPick);
	//   console.log(crystal1);
	//   console.log(crystal2);
	//   console.log(crystal3);
	//   console.log(crystal4);
	}
  
	// creates function for a game win
	function winGame() {
	  alert("You win! Play again!");
	  winCount = winCount + 1;
	  $(".wins").text("Wins: " + winCount);
	  resetGame();
	}
  
	// creates function for a game loss
	function loseGame() {
	  alert("You lose! Try again!");
	  lossCount = lossCount + 1;
	  $(".losses").text("Losses: " + lossCount);
	  resetGame();
	}
  
	// creates on click function for crystal 1
	$("#crystal1").click(function() {
	  userScore = userScore + crystal1;
	  console.log(userScore);
	  $(".totalScoreNumber").html(userScore);
		if (userScore === randPick) {
		  winGame();
		} else if (userScore > randPick) {
		  loseGame();
		}
	});
  
	// creates on click function for crystal 2
	$("#crystal2").click(function() {
	  userScore = userScore + crystal2;
	  console.log(userScore);
	  $(".totalScoreNumber").text(userScore);
	  if (userScore === randPick) {
		winGame();
	  } else if (userScore > randPick) {
		loseGame();
	  }
	});
  
	// creates on click function for crystal 3
	$("#crystal3").click(function() {
	  userScore = userScore + crystal3;
	  console.log(userScore);
	  $(".totalScoreNumber").text(userScore);
	  if (userScore === randPick) {
		winGame();
	  } else if (userScore > randPick) {
		loseGame();
	  }
	});
  
	// creates on click function for crystal 4
	$("#crystal4").click(function() {
	  userScore = userScore + crystal4;
	  console.log(userScore);
	  $(".totalScoreNumber").text(userScore);
		if (userScore === randPick) {
		  winGame();
		} else if (userScore > randPick) {
		  loseGame();
		}
	});
  
  });