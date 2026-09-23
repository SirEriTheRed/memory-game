const cardContainer = document.getElementById("card-container");
const card = document.querySelector(".card");
const dimensions = 150;
const ImgStart = Math.round(Math.random() * 100);
const imgNb = 8;

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

function initGame() {
  cards = shuffle(cards);
  cards.forEach((url) => {
    const card = document.createElement("button");
    card.className = "card";
    card.dataset.value = url;
    card.role = "button";
    card.tabindex = "0";

    const img = document.createElement("img");
    img.src = card.dataset.value;
    card.appendChild(img);
    cardContainer.appendChild(card);
  });
}

initGame();
