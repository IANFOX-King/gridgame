document.addEventListener('DOMContentLoaded', () => {
    const vsAiButton = document.getElementById('vs-ai');
    const twoPlayerButton = document.getElementById('two-player');
    const tournamentButton = document.getElementById('tournament');
    const leaderboardButton = document.getElementById('leaderboard');
    const backToMenuButton = document.getElementById('back-to-menu');
    const menuSection = document.getElementById('menu');
    const gameBoardSection = document.getElementById('game-board');
    const playerGrid = document.getElementById('player-grid');
    const enemyGrid = document.getElementById('enemy-grid');
    function createGrid(gridElement) {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.addEventListener('click', () => {
                cell.classList.toggle('sword');
            });
            gridElement.appendChild(cell);
        }
    }
    vsAiButton.addEventListener('click', () => {
        menuSection.style.display = 'none';
        gameBoardSection.style.display = 'block';
        createGrid(playerGrid);
        createGrid(enemyGrid);
    });
    twoPlayerButton.addEventListener('click', () => {
        menuSection.style.display = 'none';
        gameBoardSection.style.display = 'block';
                createGrid(playerGrid);
        createGrid(enemyGrid);
    });
    tournamentButton.addEventListener('click', () => {
        alert('Tournament Mode Coming Soon!');
    });
    leaderboardButton.addEventListener('click', () => {
        alert('Leaderboard Coming Soon!');
    });
    backToMenuButton.addEventListener('click', () => {
        gameBoardSection.style.display = 'none';
        menuSection.style.display = 'block';
        // Clear grids
        playerGrid.innerHTML = '';
        enemyGrid.innerHTML = '';
    });
});
