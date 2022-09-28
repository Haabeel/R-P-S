let RPLarray = ["Rock", "Paper", "Scissor"];

let wrCount = 0;
let trCount = 0;
let lrCount = 0;

const scoreTitle = document.querySelector(".wonLost");

const PchoiceBG = document.querySelector(".Pchoice");
const CchoiceBG = document.querySelector(".Cchoice");

const R = document.querySelector(".Rock");
const P = document.querySelector(".Paper");
const S = document.querySelector(".Scissor");
const G = document.querySelector(".GameOver");
const W = document.querySelector(".wonText");
const L = document.querySelector(".lostText");

const scoreCount = document.querySelectorAll(".ScoreCount");
const Lscore = scoreCount[1];
const Wscore = scoreCount[0];

const startbtn = document.querySelector(".reveal-btn");
const restartbtncontainer = document.querySelector(".RestartScore");
const mainstartbtn = document.querySelector(".main-btn");
const restartbtn = document.querySelector(".hidden-content");

restartbtn.addEventListener("click", restart);
mainstartbtn.addEventListener(
  "click",
  () => {
    mainstartbtn.classList.add("main-start-btn");
    getPlayerChoice();
    restart();
    scoreTitles();
  },
  {
    once: true,
  }
);

function getComputerChoice() {
  return RPLarray[Math.floor(Math.random() * 3)];
}

function start() {
  startbtn.addEventListener("click", getPlayerChoice);
}

function scoreTitles() {
  if (scoreTitle.classList.contains("hide-cards")) {
    scoreTitle.classList.add("flex");
    scoreTitle.classList.remove("hide-cards");
  } else if (scoreTitle.classList.contains("flex")) {
    scoreTitle.classList.remove("flex");
    scoreTitle.classList.add("hide-cards");
  }
}

function restart() {
  restartbtncontainer.classList.remove("hidden-content");
  wrCount *= 0;
  lrCount *= 0;

  getPlayerChoice();

  R.classList.remove("hidden-content");
  P.classList.remove("hidden-content");
  S.classList.remove("hidden-content");
  G.classList.add("hide-cards");
  W.classList.add("hide-cards");
  L.classList.add("hide-cards");
  scoreTitle.classList.add("flex");
  Wscore.textContent = wrCount;
  Lscore.textContent = lrCount;

  if (CchoiceBG.classList.contains("PaperBG")) {
    CchoiceBG.classList.remove("PaperBG");
  } else if (CchoiceBG.classList.contains("ScissorBG")) {
    CchoiceBG.classList.remove("ScissorBG");
  } else if (CchoiceBG.classList.contains("RockBG")) {
    CchoiceBG.classList.remove("RockBG");
  }

  CchoiceBG.classList.add("defaultChoiceContainerBGcolor");
  CchoiceBG.classList.remove("white");

  if (PchoiceBG.classList.contains("PaperBG")) {
    PchoiceBG.classList.remove("PaperBG");
  } else if (PchoiceBG.classList.contains("ScissorBG")) {
    PchoiceBG.classList.remove("ScissorBG");
  } else if (PchoiceBG.classList.contains("RockBG")) {
    PchoiceBG.classList.remove("RockBG");
  }

  PchoiceBG.classList.add("defaultChoiceContainerBGcolor");
  PchoiceBG.classList.remove("white");
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

function won() {
  R.classList.add("hidden-content");
  P.classList.add("hidden-content");
  S.classList.add("hidden-content");
  G.classList.remove("hide-cards");
  W.classList.remove("hide-cards");
  scoreTitle.classList.remove("flex");
  scoreTitle.classList.add("hide-cards");

  if (CchoiceBG.classList.contains("PaperBG")) {
    CchoiceBG.classList.remove("PaperBG");
  } else if (CchoiceBG.classList.contains("ScissorBG")) {
    CchoiceBG.classList.remove("ScissorBG");
  } else if (CchoiceBG.classList.contains("RockBG")) {
    CchoiceBG.classList.remove("RockBG");
  }

  CchoiceBG.classList.add("defaultChoiceContainerBGcolor");
  CchoiceBG.classList.remove("white");

  if (PchoiceBG.classList.contains("PaperBG")) {
    PchoiceBG.classList.remove("PaperBG");
  } else if (PchoiceBG.classList.contains("ScissorBG")) {
    PchoiceBG.classList.remove("ScissorBG");
  } else if (PchoiceBG.classList.contains("RockBG")) {
    PchoiceBG.classList.remove("RockBG");
  }

  PchoiceBG.classList.add("defaultChoiceContainerBGcolor");
  PchoiceBG.classList.remove("white");
}

function lost() {
  R.classList.add("hidden-content");
  P.classList.add("hidden-content");
  S.classList.add("hidden-content");
  G.classList.remove("hide-cards");
  L.classList.remove("hide-cards");
  scoreTitle.classList.remove("flex");
  scoreTitle.classList.add("hide-cards");

  if (CchoiceBG.classList.contains("PaperBG")) {
    CchoiceBG.classList.remove("PaperBG");
  } else if (CchoiceBG.classList.contains("ScissorBG")) {
    CchoiceBG.classList.remove("ScissorBG");
  } else if (CchoiceBG.classList.contains("RockBG")) {
    CchoiceBG.classList.remove("RockBG");
  }

  CchoiceBG.classList.add("defaultChoiceContainerBGcolor");
  CchoiceBG.classList.remove("white");

  if (PchoiceBG.classList.contains("PaperBG")) {
    PchoiceBG.classList.remove("PaperBG");
  } else if (PchoiceBG.classList.contains("ScissorBG")) {
    PchoiceBG.classList.remove("ScissorBG");
  } else if (PchoiceBG.classList.contains("RockBG")) {
    PchoiceBG.classList.remove("RockBG");
  }

  PchoiceBG.classList.add("defaultChoiceContainerBGcolor");
  PchoiceBG.classList.remove("white");
}

function CAddRockBG() {
  CchoiceBG.classList.remove("defaultChoiceContainerBGcolor");

  if (CchoiceBG.classList.contains("PaperBG")) {
    CchoiceBG.classList.remove("PaperBG");
  } else if (CchoiceBG.classList.contains("ScissorBG")) {
    CchoiceBG.classList.remove("ScissorBG");
  }

  CchoiceBG.classList.add("RockBG");
  CchoiceBG.classList.add("white");
}

function CaddPaperBG() {
  CchoiceBG.classList.remove("defaultChoiceContainerBGcolor");

  if (CchoiceBG.classList.contains("RockBG")) {
    CchoiceBG.classList.remove("RockBG");
  } else if (CchoiceBG.classList.contains("ScissorBG")) {
    CchoiceBG.classList.remove("ScissorBG");
  }

  CchoiceBG.classList.add("PaperBG");
  CchoiceBG.classList.add("white");
}

function CaddScissorBG() {
  CchoiceBG.classList.remove("defaultChoiceContainerBGcolor");

  if (CchoiceBG.classList.contains("PaperBG")) {
    CchoiceBG.classList.remove("PaperBG");
  } else if (CchoiceBG.classList.contains("RockBG")) {
    CchoiceBG.classList.remove("RockBG");
  }

  CchoiceBG.classList.add("ScissorBG");
  CchoiceBG.classList.add("white");
}

function PaddRockBG() {
  PchoiceBG.classList.remove("defaultChoiceContainerBGcolor");

  if (PchoiceBG.classList.contains("PaperBG")) {
    PchoiceBG.classList.remove("PaperBG");
  } else if (PchoiceBG.classList.contains("ScissorBG")) {
    PchoiceBG.classList.remove("ScissorBG");
  }

  PchoiceBG.classList.add("RockBG");
  PchoiceBG.classList.add("white");
}

function PaddPaperBG() {
  PchoiceBG.classList.remove("defaultChoiceContainerBGcolor");

  if (PchoiceBG.classList.contains("RockBG")) {
    PchoiceBG.classList.remove("RockBG");
  } else if (PchoiceBG.classList.contains("ScissorBG")) {
    PchoiceBG.classList.remove("ScissorBG");
  }

  PchoiceBG.classList.add("PaperBG");
  PchoiceBG.classList.add("white");
}

function PaddScissorBG() {
  PchoiceBG.classList.remove("defaultChoiceContainerBGcolor");

  if (PchoiceBG.classList.contains("PaperBG")) {
    PchoiceBG.classList.remove("PaperBG");
  } else if (PchoiceBG.classList.contains("RockBG")) {
    PchoiceBG.classList.remove("RockBG");
  }

  PchoiceBG.classList.add("ScissorBG");
  PchoiceBG.classList.add("white");
}

function getPlayerChoiceR() {
  computerChoice = getComputerChoice();

  PaddRockBG();

  if (computerChoice == "Rock") {
    CAddRockBG();
    trCount++;
  } else if (computerChoice == "Paper") {
    CaddPaperBG();
    lrCount++;
    Lscore.textContent = lrCount;
  } else if (computerChoice == "Scissor") {
    CaddScissorBG();
    wrCount++;
    Wscore.textContent = wrCount;
  }

  if (wrCount >= 5) {
    won();
    wrCount *= 0;
  } else if (lrCount >= 5) {
    lost();
    lrCount *= 0;
  }
}

function getPlayerChoiceP() {
  computerChoice = getComputerChoice();

  PaddPaperBG();

  if (computerChoice == "Rock") {
    CAddRockBG();
    wrCount++;
    Wscore.textContent = wrCount;
  } else if (computerChoice == "Paper") {
    CaddPaperBG();
    trCount++;
  } else if (computerChoice == "Scissor") {
    CaddScissorBG();
    lrCount++;
    Lscore.textContent = lrCount;
  }

  if (wrCount >= 5) {
    won();
    wrCount *= 0;
  } else if (lrCount >= 5) {
    lost();
    wrCount *= 0;
  }
}

function getPlayerChoiceS() {
  PaddScissorBG();

  computerChoice = getComputerChoice();

  if (computerChoice == "Rock") {
    CAddRockBG();
    lrCount++;
    Lscore.textContent = lrCount;
  } else if (computerChoice == "Paper") {
    CaddPaperBG();
    wrCount++;
    Wscore.textContent = wrCount;
  } else if (computerChoice == "Scissor") {
    CaddScissorBG();
    trCount++;
  }

  if (wrCount >= 5) {
    won();
    wrCount *= 0;
  } else if (lrCount >= 5) {
    lost();
    lrCount *= 0;
  }
}
