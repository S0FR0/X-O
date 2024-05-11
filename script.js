let gameBoard = [];
let button = [];

function createBoard(number) {
    const table = document.getElementById('table');
    const button = document.createElement('button');
    button.setAttribute('id',`${number}`)
    table.appendChild(button)
    gameBoard.push(button)
    }

for(let i = 0; i < 9; i++)
    {createBoard(i);}

function player (smbol){
    let moves = 0;
    let symbol = smbol;
    const showMoves = () => moves;
    const addMove = () => moves ++;
    const removeMoves = () => moves = 0;
    return {symbol, addMove, showMoves, removeMoves};
}

const playerOne = player('X');
const playerTwo = player('O');

function whoMoves(){
    if (playerOne.showMoves() === playerTwo.showMoves())
        {
            console.log(playerOne.showMoves());
            playerOne.addMove();
            return playerOne;
    }
    else if (playerOne.showMoves() > playerTwo.showMoves())
        {
            playerTwo.addMove();
            return playerTwo;
        }
}

for(let i = 0; i < 9; i++)
    {button[i] = document.getElementById(`${i}`);
    button[i].addEventListener('click', (e) => {
        if (button[i].innerHTML==='')
            button[i].innerHTML=`${whoMoves().symbol}`;
        if( button[0].innerHTML === button[1].innerHTML && button[1].innerHTML === button[2].innerHTML && button[0].innerHTML != '' ||
                button[3].innerHTML === button[4].innerHTML && button[4].innerHTML === button[5].innerHTML && button[3].innerHTML != '' ||
                button[6].innerHTML === button[7].innerHTML && button[7].innerHTML === button[8].innerHTML && button[6].innerHTML != '' ||
                button[0].innerHTML === button[3].innerHTML && button[3].innerHTML === button[6].innerHTML && button[0].innerHTML != '' ||
                button[1].innerHTML === button[4].innerHTML && button[4].innerHTML === button[7].innerHTML && button[1].innerHTML != '' ||
                button[2].innerHTML === button[5].innerHTML && button[5].innerHTML === button[8].innerHTML && button[2].innerHTML != '' ||
                button[0].innerHTML === button[4].innerHTML && button[4].innerHTML === button[8].innerHTML && button[0].innerHTML != '' ||
                button[2].innerHTML === button[4].innerHTML && button[4].innerHTML === button[6].innerHTML && button[2].innerHTML != '' 
            )
                {   
                    winner();
                    if( button[i].innerHTML === '')
                        button[i].removeEventListener();
                }
    })}

function winner () {
    
    const div = document.getElementById('button');
    const winText = document.createElement('h2');

    if(playerOne.showMoves() === playerTwo.showMoves())
        winText.innerHTML = `${playerTwo.symbol} won!`;
        
    else
        winText.innerHTML = `${playerOne.symbol} won!`;
    
    div.appendChild(winText);
    const reset = document.createElement('button');
    div.appendChild(reset);
    reset.innerHTML = 'Play again?';
    reset.addEventListener('click', () => {
    reset.remove();
    winText.remove();
    for(let i = 0; i < 9; i++)
    button[i].innerHTML = '';
    playerOne.removeMoves();
    playerTwo.removeMoves();
    })
}