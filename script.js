//Initial data
let square = {
    a1: '',
    a2: '',
    a3: '',
    b1: '',
    b2: '',
    b3: '',
    c1: '',
    c2: '',
    c3: '',
}

let player = '';
let warning = '';
let playing = false;

reset();
//Events
document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick)
})

//Functions
function itemClick(event) {
    console.log(event.target)
    let item = event.target.getAttribute('data-item');
    if (square[item] === '') {
        square[item] = player;
        renderSquare()
        togglePlayer();
    }

}

function reset() {
    let warning = '';

    let random = Math.floor(Math.random() * 2);
    player = (random === 0) ? 'x' : 'o';
    // if (random === 0) {
    //     let playing = 'x';
    // } else {
    //     let playing = 'o';
    // }

    //formas de acessar objetos
    // square.a1;
    // square['a1']

    for (let i in square) {
        square[i] = '';
    }

    playing = true;

    renderSquare();
    renderInfo();
}

function renderSquare() {
    for (let i in square) {
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = square[i]
            // if (square[i] !== '') {
            //     item.innerHTML = square[i];
            // } else {
            //     item.innerHTML = '';
            // }
    }

    checkGame();
}

function renderInfo() {
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}

function togglePlayer() {
    if (player === 'x') {
        player = 'o'
    } else {
        player = 'x'
    }
    renderInfo()
}

function checkGame() {
    if (checkWinnerFor('x')) {
        warning = 'O "x" venceu'
        playing = false;
    } else if (checkWinnerFor('o')) {
        warning = 'X "o" venceu'
        playing = false;
    } else if (isFull()) {
        warning = 'Deu empate'
        playing = false;
    }
}

function checkWinnerFor(player) {
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1',

    ];

    for (let w in pos) {
        let pArray = pos[w].split(','); // ex: a1,a2,a3...
        pArray.every(() => {

        })
    }
}

function isFull() {

}