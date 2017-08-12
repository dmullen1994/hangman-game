

var myDict = ["respect","kindness","love","hope","faith","unity","communism","hell","butt","whip","cheese","vegan","getrektm8","ineversaidtheywerereal"];
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
var myGuess = "";


document.onkeyup = function(e) {
	myGuess = e.key;
	if (myWord.indexOf(myGuess) !== -1 && guessList.indexOf(myGuess) == -1 && alphabet.indexOf(myGuess) !== -1) {
		while (myWord.indexOf(myGuess) !== -1) {
			myBlank[myWord.indexOf(myGuess)] = myGuess;
			guessList += (" " + myGuess);
			myWord[myWord.indexOf(myGuess)] = 0;
			console.log("in");
		}
		if (myBlank.indexOf("_") == -1) {
			document.getElementById("infoPanel").innerHTML = "<p>Yo you def dont suk m8, the word was:</p>" + myBlank + "<p>now take first guess for next word</p>";
			myWord = myDict[Math.floor(Math.random()*myDict.length)].split("");
			console.log(myWord);
			myBlank = [];
			for (var i = 0; i < myWord.length; i++) {
				myBlank[i] = "_";
			}
			console.log(myWord,myBlank);
			guessCount = 10;
			guessList = "";
		}
		else {
			var infoPanel = 
				"<p>You guessed: " + myGuess + "</p>" +
				"<p>Guesses remaining: " + guessCount + "</p>" +
				"<p>Current word: " + myBlank + "</p>" +
				"<p>Letters guessed:" + guessList + "</p>";
			document.getElementById("infoPanel").innerHTML = infoPanel;
		}
	} 
	else if (myWord.indexOf(myGuess) == -1 && guessList.indexOf(myGuess) == -1 && alphabet.indexOf(myGuess) !== -1) {
		guessCount -= 1;
		guessList += (" " + myGuess);
		console.log("out");
		if (guessCount == 0) {
			document.getElementById("infoPanel").innerHTML = "<p>Yo you def suk m8, now take first guess for next word</p>";
			myWord = myDict[Math.floor(Math.random()*myDict.length)].split("");
			console.log(myWord);
			myBlank = [];
			for (var i = 0; i < myWord.length; i++) {
				myBlank[i] = "_";
			}
			console.log(myWord,myBlank);
			guessCount = 10;
			guessList = "";
		}
		else {
			var infoPanel = 
				"<p>You guessed: " + myGuess + "</p>" +
				"<p>Guesses remaining: " + guessCount + "</p>" +
				"<p>Current word: " + myBlank + "</p>" +
				"<p>Letters guessed:" + guessList + "</p>";
			document.getElementById("infoPanel").innerHTML = infoPanel;
		}
	}



}