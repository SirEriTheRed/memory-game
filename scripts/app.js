const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorButton = document.getElementById("scissorButton");
const scoreBlock = document.getElementById("scoreBlock");
const historyBlock = document.getElementById("historyBlock");
const resetButton = document.getElementById("resetButton");
const botModeToggle = document.getElementById("botModeToggle");

const clickAudio = new Audio(
  "assets/mixkit-cool-interface-click-tone-2568.wav",
);

let drawScore = 0;
let winScore = 0;
let loseScore = 0;
let player1Action = null;
let player2Action = null;
let outcome = null;

function initialize() {
  drawScore = 0;
  winScore = 0;
  loseScore = 0;
  player1Action = null;
  player2Action = null;
  let outcome = null;
  updateStats();
}

const evaluationMatrix = [
  ["draw", "lose", "win"],
  ["win", "draw", "lose"],
  ["lose", "win", "draw"],
];

const actionLabelMap = [
  `<span class="rockLabel">rock</span>`,
  `<span class="paperLabel">paper</span>`,
  `<span class="scissorLabel">scissor</span>`,
];

function evaluate() {
  outcome = evaluationMatrix[player1Action][player2Action];
  switch (outcome) {
    case "draw":
      drawScore++;
      break;

    case "win":
      winScore++;
      break;

    case "lose":
      loseScore++;
      break;

    default:
      break;
  }
  updateStats();
}

function play(action) {
  clickAudio.play();
  if (player1Action == null) {
    player1Action = action;
  } else {
    player2Action = action;
  }
  if (player2Action != null) {
    evaluate();
    return;
  }
  if (botModeToggle.checked) {
    const botAction = Math.floor(Math.random() * 3);
    play(botAction);
  }
}

function updateStats() {
  historyBlock.innerHTML = `Player 1 have played ${actionLabelMap[player1Action]}, Player 2 have played ${actionLabelMap[player2Action]}, it is a ${outcome}.`;
  scoreBlock.innerHTML = `You have won ${winScore} times, made draw ${drawScore} times and lost ${loseScore} times.`;
  player1Action = null;
  player2Action = null;
  outcome = null;
}

resetButton.addEventListener("click", () => initialize());

rockButton.addEventListener("click", () => {
  play(0);
});

paperButton.addEventListener("click", () => {
  play(1);
});

scissorButton.addEventListener("click", () => {
  play(2);
});

initialize();
