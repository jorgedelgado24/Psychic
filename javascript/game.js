
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var letterGuesses = [];
var guessesLeft = 9;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//console.log(computerGuess)

document.onkeyup = function(letter) {

    var userGuess = letter.key.toLowerCase();

if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

    if (userGuess === computerGuess) {
        wins ++;
        guessesLeft = 9;
        letterGuesses = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    else if (guessesLeft == 1) {
        losses ++;
        guessesLeft = 9;
        letterGuesses = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    else {
        guessesLeft --;
        letterGuesses.push(userGuess)
    }
//console.log(computerGuess);
    
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    document.querySelector("#letterGuesses").innerHTML = letterGuesses;

}
else{
    alert("Please enter letters only =)");
}
};


