let RPLarray = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
  return RPLarray[Math.floor(Math.random() * 3)];
}
const startbtn = document.querySelector(".reveal-btn");
const mainstartbtn = document.querySelector(".main-btn");
mainstartbtn.addEventListener(
  "click",
  () => {
    mainstartbtn.classList.add("main-start-btn");
    //startbtn.classList.remove("main-start-btn");
    getPlayerChoice();
    restart();
  },
  {
    once: true,
  }
);
function start() {
  startbtn.addEventListener("click", getPlayerChoice);
}

const restartbtn = document.querySelector(".hidden-content");
restartbtn.addEventListener("click", restart, () => {
  const h1 = document.querySelector("h1");
  h1.classList.remove("hidden-content");
});
let wrCount = 0;
let trCount = 0;
let lrCount = 0;

function restart() {
  restartbtn.classList.remove("hidden-content");
  wrCount *= 0;
  lrCount *= 0;
  console.log(wrCount, lrCount);
  getPlayerChoice();
}

function getPlayerChoice() {
  const btn = document.querySelectorAll(".CardText");
  const btnR = btn[0];
  const btnP = btn[1];
  const btnS = btn[2];
  btnR.addEventListener("click", getPlayerChoiceR);
  btnP.addEventListener("click", getPlayerChoiceP);
  btnS.addEventListener("click", getPlayerChoiceS);
}

function getPlayerChoiceR() {
  computerChoice = getComputerChoice();
  //console.log(computerChoice);
  if (computerChoice == "Rock") {
    console.log("TIE");
    trCount++;
  } else if (computerChoice == "Paper") {
    console.log("LOST");
    betweenround++;
    lrCount++;
    roundResult--;
  } else if (computerChoice == "Scissor") {
    console.log("WON");
    betweenround++;
    wrCount++;
    roundResult++;
  } else {
    console.log("ERROR");
  }
  //console.log(wrCount, trCount, lrCount);
  //console.log(roundResult);

  if (wrCount >= 5) {
    console.log(" YOU WON");
    wrCount *= 0;
  } else if (lrCount >= 5) {
    console.log("YOU LOST");
    lrCount *= 0;
  }
}
function getPlayerChoiceP() {
  computerChoice = getComputerChoice();
  //console.log(computerChoice);
  if (computerChoice == "Rock") {
    console.log("WON");
    betweenround++;
    wrCount++;
    roundResult++;
  } else if (computerChoice == "Paper") {
    console.log("TIE");
    trCount++;
  } else if (computerChoice == "Scissor") {
    console.log("LOST");
    betweenround++;
    lrCount++;
    roundResult--;
  } else {
    console.log("ERROR");
  }
  //console.log(wrCount, trCount, lrCount);
  //console.log(roundResult);
  if (wrCount >= 5) {
    console.log(" YOU WON");
    wrCount *= 0;
  } else if (lrCount >= 5) {
    console.log("YOU LOST");
    wrCount *= 0;
  }
}

function getPlayerChoiceS() {
  computerChoice = getComputerChoice();
  //console.log(computerChoice);
  if (computerChoice == "Rock") {
    console.log("LOST");
    betweenround++;
    lrCount++;
    roundResult--;
  } else if (computerChoice == "Paper") {
    console.log("WON");
    betweenround++;
    wrCount++;
    roundResult++;
  } else if (computerChoice == "Scissor") {
    console.log("TIE");
    trCount++;
  } else {
    console.log("ERROR");
  }
  //console.log(wrCount, trCount, lrCount);
  //console.log(roundResult);
  if (wrCount >= 5) {
    console.log(" YOU WON");
    wrCount *= 0;
  } else if (lrCount >= 5) {
    console.log("YOU LOST");
    lrCount *= 0;
  }
}

let betweenround = 0;
let roundResult = 0;
