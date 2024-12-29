let gameSeq=[];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["yellow", "red", "purple", "green"];

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIndx = Math.floor(Math.random() * 3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }
        console.log("same value");
    } else {
        h2.innerHTML = `Game over at Level ${level} . Your Score was <b>${level}</b><br>.Press any key to start `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            reset();
            document.querySelector("body").style.backgroundColor = "white"; 
        },150);
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}