// -_-_-_-_-_-_-_-_-_-_-_-_-_//
wins = 0;
losses = 0;

var questions = [
// 1 [0]
"Which mountain has the highest elevation of all mountains on Earth?",
// 2 [1]
"What is the name of the largest ocean on earth?",
// 3 [2]
"Outside of Antarctica, what is the largest desert in the world?",
// 4 [3]
"The mass of the earth is made up mostly of which two elements?",
// 5 [4]
"Over a long period of time while under extreme heat and pressure, graphite turns into which mineral?",
// 6 [5]
"What is the second most common gas found in the air we breathe?",
// 7 [6]
"What is the name of the deepest location in the world’s oceans?",
// 8 [7]
"What are the two main metals in the earth’s core?",
// 9 [8]
"Which is hotter, the center of the earth or surface of the sun?",
// 10 [9]
"In what month is the Earth closest to the sun?"];


var answersQuestion1 = ["Mount Everest", "K2", "Makalu", "Mount Kilimanjaro"];
var answersQuestion2 = ["The Pacific Ocean", "The Antlantic Ocean", "The Indian Ocean", "The Antarctic Ocean"];
var answersQuestion3 = ["The Sahara Desert in Africa", "Patagonia Desert", "Kalahari Desert", "Gobi Desert"];
var answersQuestion4 = ["Iron (32%) and Oxygen (30%)", "Argon and Boron", "Sodium and Aluminum", "Calcium and Helium"];
var answersQuestion5 = ["Diamond", "Gold", "Calcium", "Silicon"];
var answersQuestion6 = ["Oxygen (21%)", "Helium", "Carbon Dioxide", "Hydrogen"];
var answersQuestion7 = ["Mariana Trench", "", "", ""];
var answersQuestion8 = ["Iron and Nickel", "Nickel and Titanium", "Uranium and Iron", "Platinum and Titanium"];
var answersQuestion9 = ["The center of the earth", "The surface of the sun", "They are the same", "Those places are both cold"];
var answersQuestion10 = ["January", "March", "July", "October"];

// Sets global current question variable, starting at "Question #1"
var currentQuestion = 0;

// Function to shuffle items in the array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  

		// for (var i = 1; i < 11; i++) {
		// 	console.log(array + "[" + (String(currentQuestion)) + "]");
		// }
	array = array;
	// console.log(array);
  }

};

// QUESTION #1 //
$(".startButton").on("click", function() {
	// shuffle(answersQuestion1);
	$(".timerContainer").empty();
	$(".questionContainer").text(questions[currentQuestion]);
	for (var i = 0; i < 4; i++) {
		var addButton = $("<br>" + "<button>" + answersQuestion1[i] + "</button>");
		addButton.addClass("questionButton");
		addButton.attr("value", answersQuestion1[i]);
		$(".answerList").append(addButton);
	}
	$(".questionButton").on("click", function() {
		if (this.value === "Mount Everest") {
			console.log("WIN");
			wins++
			$(".answerList").empty();
			$(".questionContainer").html("<button class='next'>" + "Click for Next Question" + "</button>");
		}
		else {
			console.log("NOPE");
			losses++
			$(".answerList").empty();
			$(".questionContainer").html("<button class='next'>" + "Click for Next Question" + "</button>");
		}
 
	});

	$(".next").on("click", function() {
		for (var i = 0; i < 4; i++) {
			var addButton = $("<br>" + "<button>" + answersQuestion1[i] + "</button>");
			addButton.addClass("questionButton");
			addButton.attr("value", answersQuestion1[i]);
			$(".answerList").append(addButton);
	}

});

// value=answersQuestion1 + '[' + i + ']'>

// for (var i = 0; i < 4; i++) {
// 	var addButton = $("<br>" + "<button>" + answersQuestion1[i] + "</button>");
// 	addButton.attr("id", answersQuestion1[i]);
// 	$(".answerList").append(addButton);
// 		// var shuffled = ("<br>" + "<button>" + answersQuestion1[i] + "</button>");
// 		// $('button').addClass(answersQuestion1[i]);
// 		// shuffled.attr("id", buttonContent);
// 		// shuffled.attr("value", answersQuestion1[i]);
// 		// $(".answerList").append(shuffled);
//  		// "<br>" + "<button id='answersQuestion[i]'>" + answersQuestion1[1] + "</button>" + 
//  		// "<br>" + "<button>" + answersQuestion1[2] + "</button>" + 
//  		// "<br>" + "<button>" + answersQuestion1[3] + "</button>");
// };

// $(".answerButton").on("click", function() {
// 	console.log(this.val);
// });

// var questionOneAnswers = [questions[0], correctAnswers[1], wrongAnswersQuestion1[0], wrongAnswersQuestion1[1], wrongAnswersQuestion1[2]];
// var randomQuestion = questionOne;

//questionSeq();

// Setting variable for questionNumber
// var questionNumber = 1;
// var 
// Function to load for each new question //
// function questionSeqence () {

// 	for (questionNumber = 1; questionNumber < questions.length; questionNumber++) {
// 		$(".questionContainer").text(questions[questionNumber]);
// 		$(".answerList").append("<button>" + correctAnswers[questionNumber] + "</button>");
// 		$(".answerList").append("<br>" + "<button>" + wrongAnswersQuestion1[0] + "</button>" + 
// 		"<br>" + "<button>" + wrongAnswersQuestion1[1] + "</button>" + 
// 		"<br>" + "<button>" + wrongAnswersQuestion1[2] + "</button>");
// 	}
// };

// questionSequence();


// -_-_-_-_-_-_-_-_-_-_-_-_-_//

// QUESTION #1 //
// var questionOne = questions[0]
// console.log(questionOne);
// console.log(questioNumber);

