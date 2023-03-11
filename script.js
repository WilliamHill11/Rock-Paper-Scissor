    // Get random selection from rock, paper, scissor
    function getComputerChoice() {
        let selection = ['rock', 'paper', 'scissor'];
        return selection[Math.floor(Math.random() * selection.length)];
    }

    // Rock beats scissors, scissors beat paper, and paper beats rock.
    // Ask player for there choice and store in varible
    // compare player choice with computer choice and figure out the 
    // winner
    // const player = prompt('rock, paper, or scissor?: ')
    // Round of rock, paper, scissor
    function playRound (playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'scissor') {
            return 'Player wins, rock beats scissor'
        } else if (playerSelection === 'paper' && computerSelection=== 'rock') {
            return 'Player wins, paper beats rock'
        } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
            return 'Player wins, scissor beats paper'
        } else if (playerSelection === 'rock' && playerSelection === 'scissor') {
            return 'Computer, rock beats scissor'
        } else if (playerSelection === 'paper' && playerSelection === 'rock') {
            return 'Computer wins, paper beats rock'
        } else if (playerSelection === 'scissor' && playerSelection === 'paper') {
            return 'Computer wins, scissor beats paper'
        }
    }


    const playerSelection = prompt('rock, paper, scissor?');
    const computerSelection = getComputerChoice();
    





    // function playRound(playerSelection, robot) {
    //     if (player === 'rock' && getComputerChoice === 'scissor') {
    //         console.log('Player wins, rock beats scissor');
    //     } else if (player === 'paper' && getComputerChoice === 'rock') {
    //         console.log('Player wins, paper beats rock')
    //     } else if (player === 'scissor' && getComputerChoice === 'paper') {
    //         console.log('Player wins, scissor beats paper')
    //     } else if (getComputerChoice === 'rock' && player === 'scissor') {
    //         console.log('Computer, rock beats scissor');
    //     } else if (getComputerChoice === 'paper' && player=== 'rock') {
    //         console.log('Computer wins, paper beats rock')
    //     } else if (getComputerChoice === 'scissor' && player === 'paper') {
    //         console.log('Computer wins, scissor beats paper')
    //     }
    // }

    // console.log(player)
    // console.log(getComputerChoice)
    // console.log(playRound(player, getComputerChoice));
    // Write a function that plays a single round of Rock Paper
    //  Scissors. The function should take two parameters - the 
    //  playerSelection and computerSelection - and then return a 
    //  string that declares the winner of the round like so:
    //   "You Lose! Paper beats Rock"
    // Make your function’s playerSelection parameter case-insensitive
    //  (so users can input rock, ROCK, RocK or any other variation).