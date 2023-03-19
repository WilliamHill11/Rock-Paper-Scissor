// Get random selection from rock, paper, scissor
function getComputerChoice() {
    let selection = ['rock', 'paper', 'scissor'];
    return selection[Math.floor(Math.random() * selection.length)];
}

const computerSelection = getComputerChoice();

const rock = document.querySelector('#option1');
const paper = document.querySelector('#option2');
const scissor = document.querySelector('#option3');
const container = document.querySelector('#container');
const content = document.createElement('div');
const para = document.createElement('p');
container.appendChild(content);
        

// Possibilities of which player wins
function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        para.textContent = "Rock beats scissor, player wins";
        content.appendChild(para);
        return playerScore++ 
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('Player wins, paper beats rock')
        const para = document.createElement('p');
        para.textContent = 'Paper beats rock, player wins';
        content.appendChild(para);
        return playerScore++
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        console.log('Player wins, scissor beats paper')
        const para = document.createElement('p');
        para.textContent = 'Scissor beats paper, player wins';
        content.appendChild(para);
        return playerScore++
    } else if (computerSelection === 'rock' && playerSelection === 'scissor') {
        console.log('Computer, rock beats scissor')
        const para = document.createElement('p');
        para.textContent = 'Rock beat scissor, computer wins';
        content.appendChild(para);
        return computerScore++
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        console.log('Computer wins, paper beats rock')
        const para = document.createElement('p');
        para.textContent = 'Paper beats rock, computer wins';
        content.appendChild(para);
        return computerScore++
    } else if (computerSelection === 'scissor' && playerSelection === 'paper') {
        console.log('Computer wins, scissor beats paper')
        const para = document.createElement('p');
        para.textContent = 'Scissor beats paper, computer wins';
        content.appendChild(para);
        return computerScore++
    } else if (computerSelection === playerSelection) {
        const para = document.createElement('p');
        para.textContent = "It's a tie!";
        content.appendChild(para);
        return 'it\'s a draw'
    }
}


// const playerSelection = prompt('rock, paper, scissor?').toLowerCase();


rock.addEventListener('click', function(e) {
    playRound('rock', computerSelection);
    para.textContent = '';
});

paper.addEventListener('click', function(e) {
    playRound('paper', computerSelection);
    para.textContent = '';
});

scissor.addEventListener('click', function(e) {
    playRound('scissor', computerSelection);
    para.textContent = '';
});


//Score
let computerScore = 0;
let playerScore = 0;


// 5 round game
function game() {
    gameFinished = true
    while (gameFinished) {
        if (computerScore === 5) {
            console.log('Computer is the almighty champion')
            gameFinished = false
        } else if (playerScore === 5) {
            console.log('Player is the almighty champion')
            gameFinished = false
        }
    }
}

// if (playerSelection === 'rock' && computerSelection === 'scissor' || playerSelection === 'paper' && computerSelection
// === 'rock' || playerSelection === 'scissor' && computerSelection === 'paper' ) 