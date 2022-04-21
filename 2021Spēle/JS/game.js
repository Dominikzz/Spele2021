const gameDiv= document.querySelector('#gameDiv');
let timer = document.querySelector('#timer')
let score = document.querySelector('#score')
let startCountDown = setInterval(countDown, 1000)
let timeLeft = 90
let totalScore = 0

document.addEventListener('DOMContentLoaded', renderGame())

function renderGame() {
    const gameCard = document.createElement('div');
    click.textContent = 'CLICK FOR POINTS ';
    click.addEventListener('click', pointsClick);
    
    gameCard.append(click);
    gameDiv.append(gameCard);
}

function pointsClick() {
    totalScore++
    score.innerText = totalScore
}

function countDown(){
    timeLeft--;
    timer.innerText = timeLeft;

    if(timeLeft === 0){
        gameOver();
    }
}


function gameOver() {
  clearInterval(startCountDown);

  const button = document.querySelector('button')
  button.removeEventListener('click', pointsClick)

  const gameOver = document.createElement('h1');
  gameOver.id = "Over";
  gameOver.innerHTML = 'Laiks beidzās!' + '<br>' + `Punkti: ${totalScore}`;
  
  gameDiv.append(gameOver);
}