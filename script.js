const ball = document.querySelectorAll('.ball');
const h3 = document.querySelector('h3');
const button = document.querySelector('#reset-game');
const rgbColor = document.querySelector('#rgb-color');
const score = document.querySelector('#score');

// Generate color RGB random
function generateColor(opacidade = 1) {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b}, ${opacidade})`;
}

// Aplly color in ball
function colorBall() {
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].style.backgroundColor = generateColor();
  }
}

colorBall();

// Correct color
function colorGuess() {
  const selected = ball[parseInt((Math.random() * 5))];
  selected.style.backgroundColor = 'rgb' + '(168, 34, 1)';
}

colorGuess();

// Guess color

for (let index = 0; index < ball.length; index += 1) {
  ball[index].addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === rgbColor.innerText) {
      h3.innerText = 'Acertou!';
      score.innerText = parseInt(score.innerText) + 3;
    } else {
      h3.innerText = 'Errou! Tente novamente!';
    }
  });
}

// Reset button
button.addEventListener('click', () => {
  h3.innerText = 'Escolha uma cor';
  colorBall();
  rgbColor.innerText = `${ball[parseInt((Math.random() * 5))].style.backgroundColor}`;
  colorGuess();
});
