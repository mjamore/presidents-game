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

var getOrdinalIndicator = function(number) {	
	var string = '';

	if(number == 11 || number == 12 || number == 13) {
		string = 'th';
	} else {
		var str = number.toString(),
			digit = str.substr(str.length -1);

		if( digit == '1' ) {
			string = 'st';
		} else if( digit == '2' ) {
			string = 'nd';
		} else if( digit == '3' ) {
			string = 'rd';
		} else {
			string = 'th';
		}
	}

	return string;
}