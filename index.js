let score1 = 0;
let score2 = 0;

let scoreContent1 = document.getElementById('score-1')
scoreContent1.textContent = score1;

let scoreContent2 = document.getElementById('score-2')
scoreContent2.textContent = score2;




function plusOne() {
    
  if (event.target.id === 'plus-11') {
        score1 += 1;
        scoreContent1.textContent = score1;
    } else {
        score2 += 1;
        scoreContent2.textContent = score2;
    }
}

function plusTwo() {
    if (event.target.id === 'plus-12') {
        score1 += 2;
        scoreContent1.textContent = score1;
    } else {
        score2 += 2;
        scoreContent2.textContent = score2;
    }
}

function plusThree() {
     if (event.target.id === 'plus-13') {
        score1 += 3;
        scoreContent1.textContent = score1;
    } else {
        score2 += 3;
        scoreContent2.textContent = score2;
    }
}

function zero() {
    score1 = 0;
    scoreContent1.textContent = score1;
    
    score2 = 0;
    scoreContent2.textContent = score2;
}