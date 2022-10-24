import './css/style.css';
import './js/game';
import imageUrl from './img/goblin.png';

const makeImg = (url) => {
  const image = document.createElement('img');
  image.src = url;
  image.className = 'enemy';
  image.id = 'enemy-face';
  return image;
};

const enemy = makeImg(imageUrl);

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function enemyChange() {
  const arena = Array.from(document.getElementsByClassName('game-cell'));

  let randomCell = randomInteger(0, arena.length - 1);

  while (arena[randomCell].childElementCount === 1) {
    randomCell = randomInteger(0, 15);
  }

  arena[randomCell].insertAdjacentElement('afterbegin', enemy);
}

setInterval(enemyChange, 1000);
