var result = false;
var replay = document.getElementById('replay');
var Choose = document.getElementsByClassName('.chooseP');
var showTable = document.getElementById("table");
const xPlayer = 'X';
const oPlayer = 'O';
var cpuPlayer = '';
var unBlock = document.getElementById('endGame');
var msg = document.getElementById('massage');
var hideS = document.getElementById('hideS');

//hide display of element
const displayNone = (element => element.style.display = 'none')

//clean table and declare who starts
function startGame() {
    result = false;
    hideS.style.display = 'block';
    displayNone(showTable)
    for (var i = 0; i <= 8; i++) {
        reset(i);
    }
    displayNone(replay);
    displayNone(unBlock);
    msg.innerText = null;
}

//choose who start the game 
function decPlayer() {
    displayNone(hideS);
    cpuPlayer = '';
    showTable.style.display = 'block';
    document.getElementById("who").innerText = null;
    if (Math.random() > 0.5) {
        (document.turn = oPlayer)
        namePlayer(oPlayer)
    } else {
        (document.turn = xPlayer)
        namePlayer(xPlayer)
    }
}
//CPU OR HUMAN SELECTOR
function decPlayerCPU() {
    displayNone(hideS);
    cpuPlayer = 1;
    showTable.style.display = "block";
    document.getElementById("who").innerText = null;
    if (Math.random() > 0.5) {
        (document.turn = oPlayer);
        namePlayer(oPlayer);
        playCPU();
    } else {
        (document.turn = xPlayer)
        namePlayer(xPlayer)
    }
}

//declare names in massage
const namePlayer = (name => msg.innerText = (name + " Gets to start!"))

//next move after start game
function nextMove(cell) {
    if (cpuPlayer == '' && cell.innerText == '') {
        cell.innerText = document.turn;
        switchPlayer();

    } else if (cpuPlayer == 1 && cell.innerText == '') {
        cell.innerText = document.turn;
        switchPlayerCPU();
    }

}

//switch CPU players
function switchPlayerCPU() {
    if (winTie());
    else if (document.turn = oPlayer) {
        playCPU()
    } else if (cell.innerText == '') {
        document.turn = xPlayer
        msg.innerText = "Play Human";
    }
}

//switch p2p players
function switchPlayer() {
    cpuPlayer = '';
    if (winTie());
    else if (document.turn == 'X') {
        document.turn = oPlayer;
        msg.innerText = "O you're up";
    } else {
        (document.turn = xPlayer);
        msg.innerText = "X you're up";
    }
}

const reset = (number => document.getElementById("cell" + number).innerText = '')

//determine where to move CPU
var ranNum = Math.floor((Math.random() * 8) + 0)
var j = ranNum - ranNum

function playCPU() {
    for (let i = ranNum; i <= 8; i = j++) {
        if (getCell(i) == '') {
            document.getElementById('cell' + i).innerText = 'O';
            j = Math.floor((Math.random() * 8) + 0);
            break;
        }
    }
    if (winTie());
    else document.turn = xPlayer
    msg.innerText = "Play Human";
}

//check for win ad tie
function winTie() {
    if (checkWin(document.turn)) {
        msg.innerText = null;
        endGame();
    } else if (tieCheck()) {
        blockDis();
        unBlock.innerText = 'TIE GAME';
    }
}

function checkWin(player) {
    if (checkCell(0, 1, 2, player) ||
        checkCell(3, 4, 5, player) ||
        checkCell(6, 7, 8, player) ||
        checkCell(0, 3, 6, player) ||
        checkCell(1, 4, 7, player) ||
        checkCell(2, 5, 8, player) ||
        checkCell(0, 4, 8, player) ||
        checkCell(2, 4, 6, player)) {
        result = true;
    }
    return result;
}

//conditions of a win
function checkCell(a, b, c, player) {
    if (getCell(a) == player && getCell(b) == player && getCell(c) == player) {
        result = true
    }
    return result;
}
//get cell content
const getCell = (number => document.getElementById("cell" + number).innerText)

//declaring winner
function endGame() {
    blockDis();
    unBlock.innerText = document.turn + " Has Won";
}
//block display for win or tie
function blockDis() {
    msg.innerText = '';
    showTable.style.display = 'none';
    replay.style.display = 'block';
    unBlock.style.display = 'block';
    hideS.style.display = 'none';
}

//check 4 tie
function tieCheck() {
    for (let i = 0; i <= 8; i++) {
        if (getCell(0) != '' &&
            getCell(1) !== '' &&
            getCell(2) !== '' &&
            getCell(3) !== '' &&
            getCell(4) !== '' &&
            getCell(5) !== '' &&
            getCell(6) !== '' &&
            getCell(7) !== '' &&
            getCell(8) !== '') {
            result = true
        }
    }
    return result;
}