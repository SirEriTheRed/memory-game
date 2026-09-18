const dimensions = 150;
function getImgStart() {
  return Math.round(Math.random() * 100);
}
const imgNb = 8;

let imgList = [];

for (let image = 0; image <= imgNb; image++) {
  let image = `https://picsum.photos/id/${getImgStart()}/${dimensions}`;
  imgList.push(image);
}

let cards = [...imgList, ...imgList];

function shuffle(array) {
  let shuffled = array;
  let length = shuffled.length;
  for (let i = length - 1; i >= 1; i--) {
    let rdmIndex = Math.round(Math.random() * length);
    let tmp = shuffled[rdmIndex];
    shuffled[rdmIndex] = shuffled[i];
    shuffled[rdmIndex] = tmp;
  }
  return shuffled;
}

cards = shuffle(cards);

console.table(cards);
