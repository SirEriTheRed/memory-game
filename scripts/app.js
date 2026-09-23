const cardContainer = document.getElementById("card-container");
const dimensions = 150;
const ImgStart = Math.round(Math.random() * 100);
const imgNb = 8;

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedCount = 0;

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

function checkMatch() {
  if (firstCard.dataset.value === secondCard.dataset.value) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    matchedCount++;
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

function initGame() {
  cards = shuffle(cards);
  cards.forEach((url) => {
    const card = document.createElement("button");
    card.classList.add("card");
    card.dataset.value = url;
    card.role = "button";
    card.tabIndex = "0";
    card.addEventListener("click", () => handleCardClick(card));

    cardContainer.appendChild(card);
  });
}

initGame();
