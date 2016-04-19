

$(document).ready(function(){

	var numberOfGuesses = 0;

	newNumber();
	console.log("The secret number is " + number);
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


	$('#newGame').click(function(){
		window.location.reload();
	});

	function newNumber() {
		number = Math.floor((Math.random() * 100) + 1);
	};

	$("#guessButton").click(function(event){
  		event.preventDefault();
  		var guess = $("#userGuess").val();
  		console.log(guess);
  	
  		$('#userGuess').val('');
  		
  		if (isNaN(guess) || guess < 1 || guess > 100){
			$("#feedback").text("Pick a Number Between 1 and 100");
		} else {

	  		var list = '<li>' + guess + '</li>';
	  		$('#guessList').append(list);
  	
			checkGuess(guess);
			guessCount();
		}
	});


	function checkGuess(guess){
		var difference = Math.abs(number - guess);
		console.log("The difference is " + difference);

		if (guess == number){
			$("#feedback").text("Correct!");
		} else if (difference >= 1 && difference <= 10) {
			$("#feedback").text("Very Hot");
		} else if (difference < 10 && difference <= 20){
			$("#feedback").text("Hot");
		} else if (difference < 20 && difference <= 30){
			$("#feedback").text("Warm");
		} else if (difference < 30 && difference <= 50){
			$("#feedback").text("Cold");
		} else if ( difference > 50){
			$("#feedback").text("Ice Cold");
		}
	};

	function guessCount(){
		numberOfGuesses +=1;
  		$('#count').text(numberOfGuesses);
	};
});


