////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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
        return getInput();
    }
    else {
        return move;

        }
    }
// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
function getComputerMove(move) {
    if (move !== undefined) {
        return randomPlay();
    }
    else {
        return move;
    }
}

function getWinner(playerMove,computerMove) {
    if (playerMove === computerMove) {
        return "The result is a tie!";
    }
    else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            playerWins++;
            return "rock wins";
        }
        else {
            computerWins++;
            return "paper wins";
        }
    }
    else if (playerMove === "paper") {
            if (computerMove === "rock") {
                playerWins++;
                return "paper wins";
        }
        else {
            computerWins++;
            return "scissors wins";
        }
    }
    else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            playerWins++;
            return "scissors wins";
        }
        else {
            computerWins++;
            return "rock wins";
        }
    }
}
// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
function playToFive() {
    var playerMove   = getPlayerMove();
    var computerMove = getComputerMove();
    var playerWins   = 0;
    var computerWins = 0;
    console.log("Let's play Rock, Paper, Scissors")
        while (playerWins < 5 || computerWins < 5) {
            getWinner(playerMove, computerMove); 
    
    return [playerWins, computerWins];
        }
}
getInput();
randomPlay();
playToFive();

