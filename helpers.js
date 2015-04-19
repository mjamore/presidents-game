// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// -> Fisher–Yates shuffle algorithm
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}


var getDigit = function(curNum) {
	var string = curNum.toString();
	var digit = string.substr(string.length - 1);
	return digit;
}

var getProperGrammer = function(curNum, curDigit) {
	var string = '';

	if( curNum == 11 || curNum == 12 || curNum == 13 )
	{
		string = 'th';
	}
	else if( curDigit == 1 )
	{
		string = 'st';
	}
	else if( curDigit == 2 )
	{
		string = 'nd';
	}
	else if( curDigit == 3 )
	{
		string = 'rd';
	}
	else if( curDigit == 4 || curDigit == 5 || curDigit == 6 || curDigit == 7 || curDigit == 8 || curDigit == 9 || curDigit == 0 )
	{
		string = 'th';
	}

	return string;
}