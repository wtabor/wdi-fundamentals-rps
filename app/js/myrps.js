////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `getInput()`.
function getPlayerMove(move) {
    if (move !== undefined) {
        console.log(move);
        return move;
    }
    else {
        return getInput();
        }
}
// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
function getComputerMove(move) {
    if (move !== undefined) {
        console.log(move);
        return move;
    }
    else {
        return randomPlay();
    }
}
function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        return "The result is a tie!";
    }
    else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            console.log("player: rock \t computer: scissors");
            winner = "player wins";
        }
        else {
            console.log("player: rock \t computer: paper");
            winner = "computer wins";
        }
    }
    else if (playerMove === "paper") {
            if (computerMove === "rock") {
                console.log("player: paper \t computer: rock");
            winner = "player wins";
            }
        else {
            console.log("player: paper \t computer: scissors");
            winner = "computer wins";
        }
    }
    else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            console.log("player: scissors \t computer: paper");
            winner = "player wins";
        }
        else {
            console.log("player: scissors \t computer:rock");
            winner = "computer wins";
        }
    }
    else {
        console.log("something else is wrong");
    }
    console.log(winner);
    return winner;
}
// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    console.log("Let's play Rock, Paper, Scissors");
        while (playerWins < 5 || computerWins < 5) {
            var winner = getWinner(getPlayerMove(), getComputerMove()); 
            if (winner == "player wins") {
                playerWins++;
            }
            else if (winner == "computer wins") {
                computerWins++;
            }
            else {
                console.log("Something is wrong with your syntax");
            }
        
        }
        return ["Player: " + playerWins, "Computer: " + computerWins];
}
playToFive();