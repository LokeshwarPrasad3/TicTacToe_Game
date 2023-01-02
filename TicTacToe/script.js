
console.log("Welcome to Tic Tac Toe");

// let backMusic = new Audio("backgroundMusic.mp3")
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameOver.mp3");

// backMusic.play();


let turn = "X";
let isGameOver = false;

// change turn function 
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 2, 4, 0],
        [3, 4, 5, 2, 13, 0],
        [6, 7, 8, 2, 22, 0],
        [0, 3, 6, -7, 13.5, 90],
        // transform: translate(204px, 149px); rotate: 45deg;
        [1, 4, 7, 2, 13.5, 90],
        [2, 5, 8, 11, 13.5, 90],
        [0, 4, 8, 2, 13.5,45],
        [2, 4, 6,2,13.5,-45],
    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isGameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";


            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width = "23vw";

            gameover.play();
        }
    })
}

//  Game main logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            audioTurn.play();
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})


// add onclick to reset btn
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = " ";
    })
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    isGameOver = false;
    // document.querySelector('.imgBox').getElementsByTagName('video')[0].style.width = "0px";
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";

    document.querySelector('.line').style.width = "0vw";
})
