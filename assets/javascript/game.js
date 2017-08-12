

var myDict = ["respect","kindness","love","hope","faith","unity","communism"];
var myWord = myDict[Math.floor(Math.random()*myDict.length)].split("");
console.log(myWord);
var myBlank = [];
for (var i = 0; i < myWord.length; i++) {
	myBlank[i] = "_";
}
console.log(myWord,myBlank);
var guessCount = 10;
var guessList = "";
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


document.onkeyup = function(e) {
	myGuess = e.key;
	if (myWord.indexOf(myGuess) !== -1 && guessList.indexOf(myGuess) == -1 && alphabet.indexOf(myGuess) !== -1){
		while (myWord.indexOf(myGuess) !== -1) {
			myBlank[myWord.indexOf(myGuess)] = myGuess;
			guessList += (" " + myGuess);
			myWord[myWord.indexOf(myGuess)] = 0;

			console.log("in");
		}
	} 
	else if (myWord.indexOf(myGuess) == -1 && guessList.indexOf(myGuess) == -1 && alphabet.indexOf(myGuess) !== -1) {
		guessCount --;
		guessList += (" " + myGuess);
		console.log("out");

	}
	console.log(myBlank);

	var infoPanel = 
		"<p>You guessed: " + myGuess + "</p>" +
		"<p>Guesses remaining: " + guessCount + "</p>" +
		"<p>Current word: " + myBlank + "</p>";

    document.getElementById("infoPanel").innerHTML = infoPanel;

}