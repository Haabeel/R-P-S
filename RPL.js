let RPLarray = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
  return RPLarray[Math.floor(Math.random() * 3)];
}
//computerChoice = getComputerChoice();
function startGame() {
  const startbtn = document.querySelector(".startbtn");
  startbtn.addEventListener("click", getPlayerChoice);
}
startGame();
function getPlayerChoice() {
  let wrCount = 0;
  let trCount = 0;
  let lrCount = 0;
  const btn = document.querySelectorAll(".CardText");
  const btnR = btn[0];
  const btnP = btn[1];
  const btnS = btn[2];
  btnR.addEventListener("click", getPlayerChoiceR);
  btnP.addEventListener("click", getPlayerChoiceP);
  btnS.addEventListener("click", getPlayerChoiceS);
  function getPlayerChoiceR() {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (computerChoice == "Rock") {
      alert("TIE");
      trCount++;
    } else if (computerChoice == "Paper") {
      alert("LOST");
      betweenround++;
      lrCount++;
      roundResult--;
    } else if (computerChoice == "Scissor") {
      alert("WON");
      betweenround++;
      wrCount++;
      roundResult++;
    } else {
      alert("ERROR");
    }
    console.log(wrCount, trCount, lrCount);
  }

  function getPlayerChoiceP() {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (computerChoice == "Rock") {
      alert("WON");
      betweenround++;
      wrCount++;
      roundResult++;
    } else if (computerChoice == "Paper") {
      alert("TIE");
      trCount++;
    } else if (computerChoice == "Scissor") {
      alert("LOST");
      betweenround++;
      lrCount++;
      roundResult--;
    } else {
      alert("ERROR");
    }
    console.log(wrCount, trCount, lrCount);
  }

  function getPlayerChoiceS() {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (computerChoice == "Rock") {
      alert("LOST");
      betweenround++;
      lrCount++;
      roundResult--;
    } else if (computerChoice == "Paper") {
      alert("WON");
      betweenround++;
      wrCount++;
      roundResult++;
    } else if (computerChoice == "Scissor") {
      alert("TIE");
      trCount++;
    } else {
      alert("ERROR");
    }
    console.log(wrCount, trCount, lrCount);
  }
}
let betweenround = 0;
let roundResult = 0;

function RoundScoreLogic() {
  if (roundResult > 0) {
    alert("YOU WON");
  } else if (roundResult < 0) {
    alert("YOU LOST");
  } else if (roundResult == 0) {
    alert("TIE");
  }
}
