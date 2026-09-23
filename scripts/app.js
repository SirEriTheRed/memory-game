const cardContainer = document.getElementById("card-container");
const timerDisplay = document.getElementById("timer-display");
const result = document.getElementById("result");
const dimensions = 150;
const ImgStart = Math.round(Math.random() * 100);
const imgNb = 8;

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedCount = 0;
let seconds = 0;
let timeInterval = null;

let imgList = [];

for (let imageIndex = 0; imageIndex < imgNb; imageIndex++) {
  let image = `https://picsum.photos/seed/${ImgStart + imageIndex}/${dimensions}`;
  imgList.push(image);
}

let cards = [...imgList, ...imgList];

function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function formatTime(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  const minutesString = minutes.toString().padStart(2, "0");
  const secondsString = seconds.toString().padStart(2, "0");
  return `${minutesString}:${secondsString}`;
}

function startTimer() {
  timeInterval = setInterval(() => {
    seconds++;
    updateTimer();
  }, 1000);
}

function updateTimer() {
  timerDisplay.innerText = formatTime(seconds);
}

function checkMatch() {
  if (firstCard.dataset.value === secondCard.dataset.value) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    matchedCount++;
    checkVictory();
  } else {
    setTimeout(() => {
      firstCard.innerHTML = "";
      secondCard.innerHTML = "";
      firstCard = null;
      secondCard = null;
      lockBoard = false;
    }, 800);
  }
}

function handleCardClick(card) {
  if (card.classList.contains("matched")) {
    return;
  }
  if (firstCard == card) {
    return;
  }
  if (lockBoard) {
    return;
  }

  const img = document.createElement("img");
  img.src = card.dataset.value;
  img.alt = "";

  card.appendChild(img);

  if (firstCard === null) {
    firstCard = card;
    return;
  }

  secondCard = card;
  lockBoard = true;
  moves++;

  checkMatch();
}

function checkVictory() {
  if (matchedCount === imgNb) {
    clearInterval(timeInterval);
    result.innerText = `You won the game in ${moves} moves and in ${formatTime(seconds)} minutes and seconds`;
  }
}

function initGame() {
  cardContainer.innerHTML = "";
  cards = shuffle(cards);
  moves = 0;
  matchedCount = 0;
  seconds = 0;
  timeInterval = null;
  cards.forEach((url) => {
    const card = document.createElement("button");
    card.classList.add("card");
    card.dataset.value = url;
    card.role = "button";
    card.tabIndex = "0";
    card.addEventListener("click", () => handleCardClick(card));

    cardContainer.appendChild(card);
  });
  startTimer();
}

initGame();
