let gameBoard = [];

function createBoard() {
    const table = document.getElementById('table');
    for (let i = 0; i < 9; i++){
        const button = document.createElement('button');
        table.appendChild(button)
        gameBoard.push(button)
    }
}

createBoard();

function player (symbol){
    let moves = 0;
    let smbol = symbol;
    const showMoves = () => moves;
    const addMove = () => moves ++;
    const removeMoves = () => moves = 0;
    return {smbol, addMove, showMoves, removeMoves};
}

const playerOne = player('X');
const playerTwo = player('O');

function whoMoves(){
    if (playerOne.showMoves() + playerTwo.showMoves() % 2 === 0 )
        {
            console.log('playerOne');
            return playerOne;
    }
    else if (playerOne.showMoves() + playerTwo.showMoves() === 9){
            console.log('Draw');
    }
    else
        {
            console.log('playerTwo');
            return playerTwo;
        }
}
