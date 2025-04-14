const allHighScores = document.querySelector('#allHighScores')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []
allHighScores.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} -> ${score.score}</li>`
}).join("")