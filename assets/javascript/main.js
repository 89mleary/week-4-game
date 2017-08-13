var shapesArray = ["1D306","1D307", "1D308", "1D309", "1D30A", "1D30B", "1D30C", "1D310", "1D311", "1D312","1D313","1D314","1D315","1D316", "1D317", "1D318", "1D319", "1D31A", "1D31B", "1D31C", "1D320", "1D321", "1D322","1D323","1D324","1D325","1D326", "1D327", "1D328", "1D329", "1D32A", "1D32B", "1D32C", "1D330", "1D331", "1D332","1D333","1D334","1D335","1D336", "1D337", "1D338", "1D339", "1D33A", "1D33B", "1D33C", "1D340", "1D341", "1D342","1D343","1D344","1D345","1D346", "1D347", "1D348", "1D349", "1D34A", "1D34B", "1D34C", "1D350", "1D351", "1D352","1D353","1D354","1D355","1D356"]

var shapeOneVal = 0;
var shapeTwoVal = 0;
var shapeThreeVal = 0;
var shapeFourVal = 0;

var goal = 0;
var added = 0;

var wins = 0;
var losses = 0;

function generateShapes() {
	var fourShapesArray = [];
	
	for (var i = 0; i < 4; i++) {
		var randomNum = Math.floor(Math.random() * shapesArray.length); 
		fourShapesArray[i] = shapesArray[randomNum];

		var newDiv = $("<div>");
		newDiv.html("&#x" + shapesArray[randomNum]+ ";");
		newDiv.addClass("shapes");
		$("#shape-" + i).append(newDiv);
	};

};


function setShapeValues() {
	var shapeValuesArray = [];

	for (var i = 0; i < 4; i++) {
		function getRandom() {
			min = Math.ceil(1);
  			max = Math.floor(12);
  			var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  			if (randomNum === shapeOneVal || randomNum === shapeTwoVal || randomNum === shapeThreeVal || randomNum === shapeFourVal) {
				getRandom();
			} else {
				return randomNum;
			};
		};

		function x() {

			var randomNum = getRandom();
			if (randomNum in shapeValuesArray) {
				x();
			} else {
				shapeValuesArray[i] = randomNum;
			};

		};

		x();

	};

	shapeOneVal = shapeValuesArray[0];
	shapeTwoVal = shapeValuesArray[1];
	shapeThreeVal = shapeValuesArray[2];
	shapeFourVal = shapeValuesArray[3];

};


function setGoalValue() {
	function getRandom() {
		min = Math.ceil(19);
		max = Math.floor(120);
		var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		
		return randomNum;
	};

	goal = getRandom();
	$("#guessing").text(goal);

};


function addUp(num) {
	added = added + num;
	$("#added-up").text(added);
};


function countCheck() {

	if (goal === added) {
		wins += 1;

		$("#wins").css("color", "#F7CE3E");
		$("#wins-num").text(wins);
		setTimeout(function(){
			$("#wins").css("color", "inherit");
		}, 2000);
		
		makeBoard();
	};

	if (goal < added) {
		losses += 1;

		$("#losses").css("color", "#F7CE3E");
		$("#losses-num").text(losses);
		setTimeout(function(){
			$("#losses").css("color", "inherit");
		}, 2000);

		makeBoard();
	};

};

function makeBoard() {
	$("#shape-0").empty();
	$("#shape-1").empty();
	$("#shape-2").empty();
	$("#shape-3").empty();

	shapeOneVal = 0;
	shapeTwoVal = 0;
	shapeThreeVal = 0;
	shapeFourVal = 0;
	goal = 0;
	added = 0;

	$("#added-up").text(added);

	generateShapes();
	setShapeValues();
	setGoalValue();
};


makeBoard();


$("#shape-0").click(function() {
	addUp(shapeOneVal);
	countCheck();
});

$("#shape-1").click(function() {
	addUp(shapeTwoVal);
	countCheck();
});

$("#shape-2").click(function() {
	addUp(shapeThreeVal);
	countCheck();
});

$("#shape-3").click(function() {
	addUp(shapeFourVal);
	countCheck();
});