let RPLarray = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
  return RPLarray[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  let p = prompt("Enter your choice");
  let p1 = p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
  return p1;
}

let wrCount = 0;
let trCount = 0;
let lrCount = 0;
let roundResult = 0;

function playRound() {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();
  if (playerChoice == "Rock") {
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
  } else if (playerChoice == "Paper") {
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
  } else if (playerChoice == "Scissor") {
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
  } else {
    alert("ERROR INPUT");
  }
}
let betweenround = 0;
function game() {
  while (betweenround < 5) {
    playRound();
  }
  console.log(wrCount, trCount, lrCount);
  RoundScoreLogic();
}

function RoundScoreLogic() {
  if (roundResult > 0) {
    alert("YOU WON");
  } else if (roundResult < 0) {
    alert("YOU LOST");
  } else if (roundResult == 0) {
    alert("TIE");
  }
}
game();
