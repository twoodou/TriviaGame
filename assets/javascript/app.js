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
	"In what month is the Earth closest to the sun?"
];


var answersQuestion1 = ["Mount Everest", "K2", "Makalu", "Mount Kilimanjaro"];
var answersQuestion2 = ["The Pacific Ocean", "The Antlantic Ocean", "The Indian Ocean", "The Antarctic Ocean"];
var answersQuestion3 = ["The Sahara Desert in Africa", "Patagonia Desert", "Kalahari Desert", "Gobi Desert"];
var answersQuestion4 = ["Iron and Oxygen", "Argon and Boron", "Sodium and Aluminum", "Calcium and Helium"];
var answersQuestion5 = ["Diamond", "Gold", "Calcium", "Silicon"];
var answersQuestion6 = ["Oxygen", "Helium", "Carbon Dioxide", "Hydrogen"];
var answersQuestion7 = ["Mariana Trench", "Devil's Canyon", "The Whale's Vagina", "San Fransisco"];
var answersQuestion8 = ["Iron and Nickel", "Nickel and Titanium", "Uranium and Iron", "Platinum and Titanium"];
var answersQuestion9 = ["The center of the earth", "The surface of the sun", "They are the same", "Those places are both cold"];
var answersQuestion10 = ["January", "March", "July", "October"];

// Sets global current question variable, starting at "Question #1"
var currentQuestion = 0;

// Function to shuffle items in the array
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;

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
	shuffle(answersQuestion1);
	$(".timerContainer").empty();
	$(".questionContainer").text(questions[currentQuestion]);
	for (var i = 0; i < 4; i++) {
		var addButton = $("<br>" + "<button>" + answersQuestion1[i] + "</button>");
		addButton.addClass("questionButton btn btn-primary");
		addButton.attr("value", answersQuestion1[i]);
		$(".answerList").append(addButton);
	}

	if (currentQuestion === 0) {
		$(".questionButton").on("click", function() {
			if (this.value === "Mount Everest") {
				$(".resultContainer").html("<h3>" + "Correct!" + "</h3>");
				wins++;
				currentQuestion++;
				$(".answerList").empty();
				$(".questionContainer").html("<button class='next btn btn-success'>" + "Click for Next Question" + "</button>");
			} else {
				$(".resultContainer").html("<h3>" + "Nope!  The correct answer is Mount Everest" + "</h3>");
				losses++;
				currentQuestion++;
				$(".answerList").empty();
				$(".questionContainer").html("<button class='next btn btn-danger'>" + "Click for Next Question" + "</button>");
			}


			if (currentQuestion === 1) {
				shuffle(answersQuestion2);
				$(".winsLosses").text("Correct Answers: " + wins + "     " + "Incorrect Answers: " + losses);
				$("button").on("click", function() {
					$(".resultContainer").empty();
					$(".questionContainer").empty();
					$(".questionContainer").text(questions[currentQuestion]);
					$(".answerList").empty();
					for (var i = 0; i < 4; i++) {
						var addButton = $("<br>" + "<button>" + answersQuestion2[i] + "</button>");
						addButton.addClass("questionButton btn btn-primary");
						addButton.attr("value", answersQuestion2[i]);
						$(".answerList").append(addButton);
					}
					$(".questionButton").on("click", function() {
						if (this.value === "The Pacific Ocean") {
							$(".resultContainer").html("<h3>" + "Correct!" + "</h3>");
							wins++;
							currentQuestion++;
							$(".answerList").empty();
							$(".questionContainer").html("<button class='next btn btn-success'>" + "Click for Next Question" + "</button>");
						} else {
							$(".resultContainer").html("<h3>" + "Nope!  The correct answer is The Pacific Ocean" + "</h3>");
							losses++;
							currentQuestion++;
							$(".answerList").empty();
							$(".questionContainer").html("<button class='next btn btn-danger'>" + "Click for Next Question" + "</button>");
						}
						if (currentQuestion === 2) {
							shuffle(answersQuestion3);
							$(".winsLosses").text("Correct Answers: " + wins + "     " + "Incorrect Answers: " + losses);
							$("button").on("click", function() {
								$(".resultContainer").empty();
								$(".questionContainer").empty();
								$(".questionContainer").text(questions[currentQuestion]);
								$(".answerList").empty();
								for (var i = 0; i < 4; i++) {
									var addButton = $("<br>" + "<button>" + answersQuestion3[i] + "</button>");
									addButton.addClass("questionButton btn btn-primary");
									addButton.attr("value", answersQuestion3[i]);
									$(".answerList").append(addButton);
								}
								$(".questionButton").on("click", function() {
									if (this.value === "The Sahara Desert in Africa") {
										$(".resultContainer").html("<h3>" + "Correct!" + "</h3>");
										wins++;
										currentQuestion++;
										$(".answerList").empty();
										$(".questionContainer").html("<button class='next btn btn-success'>" + "Click for Next Question" + "</button>");
									} else {
										$(".resultContainer").html("<h3>" + "Nope!  The correct answer is The Sahara Desert in Africa!" + "</h3>");
										losses++;
										currentQuestion++;
										$(".answerList").empty();
										$(".questionContainer").html("<button class='next btn btn-danger'>" + "Click for Next Question" + "</button>");
									}

									if (currentQuestion === 3) {
										shuffle(answersQuestion4);
										$(".winsLosses").text("Correct Answers: " + wins + "     " + "Incorrect Answers: " + losses);
										$("button").on("click", function() {
											$(".resultContainer").empty();
											$(".questionContainer").empty();
											$(".questionContainer").text(questions[currentQuestion]);
											$(".answerList").empty();
											for (var i = 0; i < 4; i++) {
												var addButton = $("<br>" + "<button>" + answersQuestion4[i] + "</button>");
												addButton.addClass("questionButton btn btn-primary");
												addButton.attr("value", answersQuestion4[i]);
												$(".answerList").append(addButton);
											}
											$(".questionButton").on("click", function() {
												if (this.value === "Iron and Oxygen") {
													$(".resultContainer").html("<h3>" + "Correct!" + "</h3>");
													wins++;
													currentQuestion++;
													$(".answerList").empty();
													$(".questionContainer").html("<button class='next btn btn-success'>" + "Click for Next Question" + "</button>");
												} else {
													$(".resultContainer").html("<h3>" + "Nope!  The correct answer is Iron and Oxygen!" + "</h3>");
													losses++;
													currentQuestion++;
													$(".answerList").empty();
													$(".questionContainer").html("<button class='next btn btn-danger'>" + "Click for Next Question" + "</button>");
												}
												if (currentQuestion === 4) {
													shuffle(answersQuestion5);
													$(".winsLosses").text("Correct Answers: " + wins + "     " + "Incorrect Answers: " + losses);
													$("button").on("click", function() {
														$(".resultContainer").empty();
														$(".questionContainer").empty();
														$(".questionContainer").text(questions[currentQuestion]);
														$(".answerList").empty();
														for (var i = 0; i < 4; i++) {
															var addButton = $("<br>" + "<button>" + answersQuestion5[i] + "</button>");
															addButton.addClass("questionButton btn btn-primary");
															addButton.attr("value", answersQuestion5[i]);
															$(".answerList").append(addButton);
														}
														$(".questionButton").on("click", function() {
															if (this.value === "Diamond") {
																$(".resultContainer").html("<h3>" + "Correct!" + "</h3>");
																wins++;
																currentQuestion++;
																$(".answerList").empty();
																$(".questionContainer").html("<button class='next btn btn-success'>" + "Click for Next Question" + "</button>");
															} else {
																$(".resultContainer").html("<h3>" + "Nope!  The correct answer is Diamond!" + "</h3>");
																losses++;
																currentQuestion++;
																$(".answerList").empty();
																$(".questionContainer").html("<button class='next btn btn-danger'>" + "Click for Next Question" + "</button>");
															}

															if (currentQuestion === 5) {
																shuffle(answersQuestion6);
																$(".winsLosses").text("Correct Answers: " + wins + "     " + "Incorrect Answers: " + losses);
																$("button").on("click", function() {
																	$(".resultContainer").empty();
																	$(".questionContainer").empty();
																	$(".questionContainer").text(questions[currentQuestion]);
																	$(".answerList").empty();
																	for (var i = 0; i < 4; i++) {
																		var addButton = $("<br>" + "<button>" + answersQuestion6[i] + "</button>");
																		addButton.addClass("questionButton btn btn-primary");
																		addButton.attr("value", answersQuestion6[i]);
																		$(".answerList").append(addButton);
																	}
																	$(".questionButton").on("click", function() {
																		if (this.value === "Oxygen") {
																			$(".resultContainer").html("<h3>" + "Correct!" + "</h3>");
																			wins++;
																			currentQuestion++;
																			$(".answerList").empty();
																			$(".questionContainer").html("<button class='next btn btn-success'>" + "Click for Next Question" + "</button>");
																		} else {
																			$(".resultContainer").html("<h3>" + "Nope!  The correct answer is Oxygen!" + "</h3>");
																			losses++;
																			currentQuestion++;
																			$(".answerList").empty();
																			$(".questionContainer").html("<button class='next btn btn-danger'>" + "Click for Next Question" + "</button>");
																		}
																		if (currentQuestion === 6) {
																			shuffle(answersQuestion7);
																			$(".winsLosses").text("Correct Answers: " + wins + "     " + "Incorrect Answers: " + losses);
																			$("button").on("click", function() {
																				$(".resultContainer").empty();
																				$(".questionContainer").empty();
																				$(".questionContainer").text(questions[currentQuestion]);
																				$(".answerList").empty();
																				for (var i = 0; i < 4; i++) {
																					var addButton = $("<br>" + "<button>" + answersQuestion7[i] + "</button>");
																					addButton.addClass("questionButton btn btn-primary");
																					addButton.attr("value", answersQuestion7[i]);
																					$(".answerList").append(addButton);
																				}
																				$(".questionButton").on("click", function() {
																					if (this.value === "Mariana Trench") {
																						$(".resultContainer").html("<h3>" + "Correct!" + "</h3>");
																						wins++;
																						currentQuestion++;
																						$(".answerList").empty();
																						$(".questionContainer").html("<button class='next btn btn-success'>" + "Click for Next Question" + "</button>");
																					} else {
																						$(".resultContainer").html("<h3>" + "Nope!  The correct answer is Mariana Trench!" + "</h3>");
																						losses++;
																						currentQuestion++;
																						$(".answerList").empty();
																						$(".questionContainer").html("<button class='next btn btn-danger'>" + "Click for Next Question" + "</button>");
																					}
																					if (currentQuestion === 7) {
																						shuffle(answersQuestion8);
																						$(".winsLosses").text("Correct Answers: " + wins + "     " + "Incorrect Answers: " + losses);
																						$("button").on("click", function() {
																						$(".resultContainer").empty();
																							$(".questionContainer").empty();
																							$(".questionContainer").text(questions[currentQuestion]);
																							$(".answerList").empty();
																							for (var i = 0; i < 4; i++) {
																								var addButton = $("<br>" + "<button>" + answersQuestion8[i] + "</button>");
																								addButton.addClass("questionButton btn btn-primary");
																								addButton.attr("value", answersQuestion8[i]);
																								$(".answerList").append(addButton);
																							}
																							$(".questionButton").on("click", function() {
																								if (this.value === "Iron and Nickel") {
																									$(".resultContainer").html("<h3>" + "Correct!" + "</h3>");
																									wins++;
																									currentQuestion++;
																									$(".answerList").empty();
																									$(".questionContainer").html("<button class='next btn btn-success'>" + "Click for Next Question" + "</button>");
																								} else {
																									$(".resultContainer").html("<h3>" + "Nope!  The correct answer is Iron and Nickel!" + "</h3>");
																									losses++;
																									currentQuestion++;
																									$(".answerList").empty();
																									$(".questionContainer").html("<button class='next btn btn-danger'>" + "Click for Next Question" + "</button>");
																								}
																								if (currentQuestion === 8) {
																									shuffle(answersQuestion9);
																									$(".winsLosses").text("Correct Answers: " + wins + "     " + "Incorrect Answers: " + losses);
																									$("button").on("click", function() {
																									$(".resultContainer").empty();
																										$(".questionContainer").empty();
																										$(".questionContainer").text(questions[currentQuestion]);
																										$(".answerList").empty();
																										for (var i = 0; i < 4; i++) {
																											var addButton = $("<br>" + "<button>" + answersQuestion9[i] + "</button>");
																											addButton.addClass("questionButton btn btn-primary");
																											addButton.attr("value", answersQuestion9[i]);
																											$(".answerList").append(addButton);
																										}
																										$(".questionButton").on("click", function() {
																											if (this.value === "The center of the earth") {
																												$(".resultContainer").html("<h3>" + "Correct!" + "</h3>");
																												wins++;
																												currentQuestion++;
																												$(".answerList").empty();
																												$(".questionContainer").html("<button class='next btn btn-success'>" + "Click for Next Question" + "</button>");
																											} else {
																												$(".resultContainer").html("<h3>" + "Nope!  The correct answer is The center of the earth!" + "</h3>");
																												losses++;
																												currentQuestion++;
																												$(".answerList").empty();
																												$(".questionContainer").html("<button class='next btn btn-danger'>" + "Click for Next Question" + "</button>");
																											}
																											if (currentQuestion === 9) {
																												shuffle(answersQuestion10);
																												$(".winsLosses").text("Correct Answers: " + wins + "     " + "Incorrect Answers: " + losses);
																												$("button").on("click", function() {
																												$(".resultContainer").empty();
																													$(".questionContainer").empty();
																													$(".questionContainer").text(questions[currentQuestion]);
																													$(".answerList").empty();
																													for (var i = 0; i < 4; i++) {
																														var addButton = $("<br>" + "<button>" + answersQuestion10[i] + "</button>");
																														addButton.addClass("questionButton btn btn-primary");
																														addButton.attr("value", answersQuestion10[i]);
																														$(".answerList").append(addButton);
																													}
																													$(".questionButton").on("click", function() {
																														if (this.value === "January") {
																															$(".resultContainer").html("<h3>" + "Correct!" + "</h3>");
																															wins++;
																															currentQuestion++;
																															$(".answerList").empty();
																															$(".questionContainer").html("<button class='next btn btn-success'>" + "Click for Next Question" + "</button>");
																														} else {
																															$(".resultContainer").html("<h3>" + "Nope!  The correct answer is January!" + "</h3>");
																															losses++;
																															currentQuestion++;
																															$(".answerList").empty();
																															$(".questionContainer").html("<button class='next btn btn-danger'>" + "Click for Next Question" + "</button>");
																														}
																														if (currentQuestion === 10) {
																															$(".winsLosses").empty();
																															var percentage = wins/losses*100
																															$("button").on("click", function() {
																															$(".pageHeader").html("<h1>" + "Game Over" + "</h1>");
																															$(".resultContainer").html("<h3>" + "Correct Answers: " + wins + "</h3>");
																															$(".questionContainer").html("<h3>" + "Incorrect Answers: " + losses + "</h3>");
																															$(".answerContainer").html("<h3>" + "Percentage: " + percentage + "%" + "</h3>");
																														})}
																													});
																												})

																											};
																										});
																									})

																								};
																							});
																						})

																					};
																				});
																			})

																		};
																	});
																})

															};
														});
													})

												};
											});
										})

									};
								});
							})

						};
					})


				})

			};



		})
	};
});