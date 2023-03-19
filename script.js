// Get random selection from rock, paper, scissor
function getComputerChoice() {
    let selection = ['rock', 'paper', 'scissor'];
    return selection[Math.floor(Math.random() * selection.length)];
}

// Getting all the elements from html
const rock = document.querySelector('#option1');
const paper = document.querySelector('#option2');
const scissor = document.querySelector('#option3');
const container = document.querySelector('#container');
const content = document.createElement('div');
const para = document.createElement('p');
const restartGame = document.querySelector('#restart');

//Appending div into html container
container.appendChild(content);

//Restart button
restartGame.addEventListener('click', (e) => {
    location.reload();
});


//Score
let computerScore = 0;
let playerScore = 0;
        

// Possibilities of which player wins
function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        para.textContent = "Rock beats scissor, player wins";
        content.append(para);
        return playerScore++ 
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        para.textContent = 'Paper beats rock, player wins';
        content.append(para);
        return playerScore++
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        para.textContent = 'Scissor beats paper, player wins';
        content.append(para);
        return playerScore++
    } else if (computerSelection === 'rock' && playerSelection === 'scissor') {
        para.textContent = 'Rock beat scissor, computer wins';
        content.append(para);
        return computerScore++
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        para.textContent = 'Paper beats rock, computer wins';
        content.append(para);
        return computerScore++
    } else if (computerSelection === 'scissor' && playerSelection === 'paper') {
        para.textContent = 'Scissor beats paper, computer wins';
        content.append(para);
        return computerScore++
    } else if (computerSelection === playerSelection) {
        para.textContent = "It's a tie!";
        content.append(para);
        return 'it\'s a draw'
    }
}

//Rock selection
rock.addEventListener('click', function(e) {
    playRound('rock', getComputerChoice());
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
    if (computerScore === 5) {
        para.textContent = 'Computer is the almighty champion';
        content.append(para);
        let playAgain = prompt('You want to play another game? type yes or no')
        if (playAgain === 'yes'.toLowerCase()) {
                playerScore = 0
                computerScore = 0
        }
    }
    else if (playerScore === 5) {
        para.textContent = 'Player is the almighty champion';
        content.append(para);
        let playAgain = prompt('You want to play another game? type yes or no')
        if (playAgain === 'yes'.toLowerCase()) {
                playerScore = 0
                computerScore = 0
        }
    }
});

//Paper selection
paper.addEventListener('click', function(e) {
    playRound('paper', getComputerChoice());
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
    if (computerScore === 5) {
        para.textContent = 'Computer is the almighty champion';
        content.append(para);
        let playAgain = prompt('You want to play another game? type yes or no')
        if (playAgain === 'yes'.toLowerCase()) {
                playerScore = 0
                computerScore = 0
        }
    }
    else if (playerScore === 5) {
        para.textContent = 'Player is the almighty champion';
        content.append(para);
        let playAgain = prompt('You want to play another game? type yes or no')
        if (playAgain === 'yes'.toLowerCase()) {
                playerScore = 0
                computerScore = 0
        }
    }
});

//Scissor selection
scissor.addEventListener('click', function(e) {
    playRound('scissor', getComputerChoice());
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
    if (computerScore === 5) {
        para.textContent = 'Computer is the almighty champion';
        content.append(para);
        let playAgain = prompt('You want to play another game? type yes or no')
        if (playAgain === 'yes'.toLowerCase()) {
                playerScore = 0
                computerScore = 0
        }
    }
    else if (playerScore === 5) {
        para.textContent = 'Player is the almighty champion';
        content.append(para);
        let playAgain = prompt('You want to play another game? type yes or no')
        if (playAgain === 'yes'.toLowerCase()) {
                playerScore = 0
                computerScore = 0
        }
    }
});


// if (playerSelection === 'rock' && computerSelection === 'scissor' || playerSelection === 'paper' && computerSelection
// === 'rock' || playerSelection === 'scissor' && computerSelection === 'paper' )