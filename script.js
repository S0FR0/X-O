function player (symbol){
    let moves = 0;
    let smbol = symbol;
    const showMoves = () => moves;
    const addMove = () => moves ++;
    return {smbol, addMove, showMoves};
}

const playerOne = player('X');
const playerTwo = player('O');