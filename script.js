    // Get random selection from rock, paper, scissor
    function getComputerChoice() {
        let selection = ['rock', 'paper', 'scissor'];
        return selection[Math.floor(Math.random() * selection.length)];
    }

    // Possibilities of which player wins
    function playRound (playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'scissor') {
            console.log('Player wins, rock beats scissor')
            return playerScore++ 
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            console.log('Player wins, paper beats rock')
            return playerScore++
        } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
            console.log('Player wins, scissor beats paper')
            return playerScore++
        } else if (computerSelection === 'rock' && playerSelection === 'scissor') {
            console.log('Computer, rock beats scissor')
            return computerScore++
        } else if (computerSelection === 'paper' && playerSelection === 'rock') {
            console.log('Computer wins, paper beats rock')
            return computerScore++
        } else if (computerSelection === 'scissor' && playerSelection === 'paper') {
            console.log('Computer wins, scissor beats paper')
            return computerScore++
        } else if (computerSelection === playerSelection) {
            return 'it\'s a draw'
        } else {
            return 'that is not a valid selection'
        }
    }

    //Score
    let computerScore = 0;
    let playerScore = 0;
    

    // 5 round game
    function game() {
        gameFinished = false
        while (gameFinish) {
            const playerSelection = prompt('rock, paper, scissor?').toLowerCase();
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection))
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
            if (computerScore === 5) {
                console.log('Computer is the almighty champion')
                gameFinished = true
            } else if (playerScore === 5) {
                console.log('Player is the almighty champion')
                gameFinished = true
            }
        }
    }

    game()
    