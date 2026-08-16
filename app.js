let gameSeq = [];
let userSeq = [];
let startGame = false;
let level = 0;
let h2 = document.querySelector('h2');
let btns = ["one", "two", "three", "four"];

// start Game
let body = document.querySelector('body');
document.addEventListener('keypress',function(){
    if(startGame == "false"){
        console.log("Game started");
        startGame = true;
    }
    
    levelUp();
});

// game Flash
function gameFlash(btn){
    btn.classList.add('gameFlash');
    setTimeout(function () {
        btn.classList.remove('gameFlash');
    },250)
};


function levelUp(){
    level++;
    h2.innerText = `Level ${level}` ;
    userSeq = [];

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}


// User flash
function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function () {
        btn.classList.remove('userFlash');
    },250)
};

function btnPress(){
    let btn = this;
    userFlash(btn);

    let pressedColor = btn.getAttribute("id");
    userSeq.push(pressedColor);
    checkAns(userSeq.length - 1);

}

// clicking the buttons
let allBtns = document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML = `Game Over!! your score is <b>${level}</b> <br>Press any key to restart the game.`;
        body.style.backgroundColor = "red";
        setTimeout(
            function(){
                body.style.backgroundColor = "white";
            },150);
        reset();
    }
}

function reset(){
    startGame = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
