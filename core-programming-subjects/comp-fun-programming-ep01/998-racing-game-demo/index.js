const MAXIMUM_SPEED = 200;
const FINISH_LINE = 1200;
let playerLeftPosition = 50;
let playerLeftPositionOrange = 50;
let hasFoundWinner = false;
let interval;

function startGame() {
    interval = setInterval(moveRight, 1000);
}
function moveRight() {
    playerLeftPosition = playerLeftPosition + Math.random() * MAXIMUM_SPEED;
    playerLeftPositionOrange = playerLeftPositionOrange + Math.random() * MAXIMUM_SPEED;

    document.getElementById('player-1').style.left = playerLeftPosition;
    document.getElementById('player-2').style.left = playerLeftPositionOrange;

    if (playerLeftPosition > FINISH_LINE) {
        hasFoundWinner = true;
        alert('We have found a winner! The winner is blue!');
        endGame();
    }


    if (playerLeftPositionOrange > FINISH_LINE) {
        hasFoundWinner = true;
        alert('We have found a winner! The winner is orange!');
        endGame();
    }

}

function endGame() {
    clearInterval(interval);
}
