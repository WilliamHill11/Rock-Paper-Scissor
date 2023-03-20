// Get random selection from rock, paper, scissor
function getComputerChoice() {
    let selection = ['rock', 'paper', 'scissor'];
    return selection[Math.floor(Math.random() * selection.length)];
}

// Getting all the elements from html
const rock = document.querySelector('#option1');
const paper = document.querySelector('#option2');
const scissor = document.querySelector('#option3');
const para = document.createElement('p');
const restartGame = document.querySelector('#restart');
const scoreBoardBox = document.querySelector('.scoreboard');
const resultBox = document.querySelector('.result');

//Restart button
restartGame.addEventListener('click', (e) => {
    location.reload();
});


//Score
const scoreBoard = document.createElement('p');
let computerScore = 0;
let playerScore = 0;
        

// Possibilities of which player wins
function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        para.textContent = "You win rock beats scissor";
        scoreBoardBox.append(para);
        return playerScore++ 
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        para.textContent = 'You win paper beats rock';
        scoreBoardBox.append(para);
        return playerScore++
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        para.textContent = 'You win scissor beats paper';
        scoreBoardBox.append(para);
        return playerScore++
    } else if (computerSelection === 'rock' && playerSelection === 'scissor') {
        para.textContent = 'Computer wins rock beats your scissor';
        scoreBoardBox.append(para);
        return computerScore++
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        para.textContent = 'Computer wins paper beats your rock';
        scoreBoardBox.append(para);
        return computerScore++
    } else if (computerSelection === 'scissor' && playerSelection === 'paper') {
        para.textContent = 'Computer wins scissor beats your paper';
        scoreBoardBox.append(para);
        return computerScore++
    } else if (computerSelection === playerSelection) {
        para.textContent = "It's a tie!";
        scoreBoardBox.append(para);
    }
}

//Rock selection
rock.addEventListener('click', function(e) {
    playRound('rock', getComputerChoice()); 
    scoreBoard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    resultBox.append(scoreBoard);
    if (computerScore === 5) {
        para.textContent = 'LOSSSEERRRR!';
        resultBox.append(para);
        alert('You LOST!')
            playerScore = 0
            computerScore = 0
    }
    else if (playerScore === 5) {
        para.textContent = 'WINNER!!!!!';
        resultBox.append(para);
        alert('You Win!')
            playerScore = 0
            computerScore = 0
    }
});

//Paper selection
paper.addEventListener('click', function(e) {
    playRound('paper', getComputerChoice());
    scoreBoard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    resultBox.append(scoreBoard);
    if (computerScore === 5) {
        para.textContent = 'LOSSSEERRRR!';
        resultBox.append(para);
        alert('You LOST!')
            playerScore = 0
            computerScore = 0
    }
    else if (playerScore === 5) {
        para.textContent = 'WINNER!!!!!';
        resultBox.append(para);
        alert('You Win!')
            playerScore = 0
            computerScore = 0
    }
});

//Scissor selection
scissor.addEventListener('click', function(e) {
    playRound('scissor', getComputerChoice());
    scoreBoard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    resultBox.append(scoreBoard);
    if (computerScore === 5) {
        para.textContent = 'LOSSSEERRRR!';
        resultBox.append(para);
        alert('You LOST!')
            playerScore = 0
            computerScore = 0
    }
    else if (playerScore === 5) {
        para.textContent = 'WINNER!!!!!';
        resultBox.append(para);
        alert('You Win!')
        playerScore = 0
        computerScore = 0
}
});


// if (playerSelection === 'rock' && computerSelection === 'scissor' || playerSelection === 'paper' && computerSelection
// === 'rock' || playerSelection === 'scissor' && computerSelection === 'paper' )