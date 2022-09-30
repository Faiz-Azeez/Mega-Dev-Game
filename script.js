var START_GAME_BUTTON = document.getElementById('start-game');
START_GAME_BUTTON.addEventListener('click', startGame);

function startGame() {
    setTimeout(() => {

        document.getElementById('main-container').style.display = 'none';
        // displayQuestion();
        document.getElementById('game-container').style.display = 'block';
    }, 250);
}