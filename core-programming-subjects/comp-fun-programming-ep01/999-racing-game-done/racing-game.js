const STARTING_POINT = 50;
const FINISH_LINE = 1600;
const MAX_SPEED = 200;
const RUN_INTERNAL_MS = 1000;

const players = [
    { id: 'player-1', left: 50 },
    { id: 'player-2', left: 50 },
    { id: 'player-3', left: 50 },
    { id: 'player-4', left: 50 },
    { id: 'player-5', left: 50 }
];

let interval;
let hasWinner = false;

function generateNextRunDistance() {
    const distance = Math.random() * MAX_SPEED;
    const ceiling = Math.ceil(distance);
    return ceiling;
}

function checkWinner() {
    players.forEach(player => {
        if (player.left >= FINISH_LINE && !hasWinner) {
            endGame(player)
        }
    })
}

function startGame() {

    hasWinner = false;
    players.forEach(player => {
        const target = document.getElementById(player.id);
        player.left = STARTING_POINT;
        target.style.left = STARTING_POINT + 'px';
    });

    interval = setInterval(function() {
        checkWinner();
        players.forEach((player, index) => {
            const target = document.getElementById(player.id);
            player.left += generateNextRunDistance();
            target.style.left = player.left + 'px';
        });
    }, RUN_INTERNAL_MS)
}

function endGame(player) {
    hasWinner = true;
    clearInterval(interval);
    alert('Player ' + player.id + ' has won the race!');
}
