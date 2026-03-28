// Main Game Controller

class GameController {
    constructor() {
        this.players = [];
        this.gameState = 'INITIAL';
    }

    startGame() {
        this.gameState = 'RUNNING';
        console.log('Game started!');
    }

    addPlayer(player) {
        this.players.push(player);
        console.log(`Player ${player} added!`);
    }

    endGame() {
        this.gameState = 'ENDED';
        console.log('Game ended!');
    }
}

// Exporting the GameController class for use in other modules
module.exports = GameController;