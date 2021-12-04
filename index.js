const p1num = Math.floor(Math.random() * 6) + 1
const p2num = Math.floor(Math.random() * 6) + 1
const p1DiceImg = 'images/dice' + p1num + '.png'
const p2DiceImg = 'images/dice' + p2num + '.png'

document.querySelectorAll('img')[0].setAttribute('src', p1DiceImg);
document.querySelectorAll('img')[1].setAttribute('src', p2DiceImg);

if (p1num > p2num){
  document.querySelector('h1').innerHTML = '🚩Player 1 Wins'
} else if (p1num < p2num){
  document.querySelector('h1').innerHTML = 'Player 2 Wins🚩'
} else {
  document.querySelector('h1').innerHTML = 'Draw'
}
