/*

  Gamelet: a starting point for writing games
  Author: Chris Minnick
  Version: 1.0

  Instructions:
  Include gamelet.js in an HTML document containing
  an element with an id of 'ball'.
  The script will detect when the left or right arrow
  key is pressed and will move the ball element
  accordingly.

*/

const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let Xposition = 0;
let Yposition = 0;

function handleKeyPress(e) {
    if (e.code == 'ArrowLeft') {
        Xposition = Xposition - 10;
    }
    if (e.code == 'ArrowRight') {
        Xposition = Xposition + 10;
    }
    if (Xposition < 0) {
        Xposition = 0;
    }
    if (e.code == 'ArrowUp') {
        Yposition = Yposition - 10;
    }
    if (e.code == 'ArrowDown') {
        Yposition = Yposition + 10;
    }
    if (Yposition < 0) {
        Yposition = 0;
    }

    refresh();  // update the ball's position
}

function refresh() {
    ball.style.left = Xposition + 'px';
    ball.style.top = Yposition + 'px';
}