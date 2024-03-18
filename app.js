let homeScore = 0
let awayScore = 0
let reset = ""
let value = 0

function homeAdd1Button() {
  homeScore++
  console.log("Score Increase", homeScore)
  const homeScoreElem = document.getElementById('homeScore')
  homeScoreElem.innerText = homeScore.toString()
}

function awayAdd1Button() {
  awayScore++
  console.log("Score Increase", awayScore)
  const awayScoreElem = document.getElementById('awayScore')
  awayScoreElem.innerText = awayScore.toString()
}

function homeAdd3Button() {
  homeScore += 3
  console.log("Score Increase", homeScore)
  const homeScoreElem = document.getElementById('homeScore')
  homeScoreElem.innerText = homeScore.toString()
}

function awayAdd3Button() {
  awayScore += 3
  console.log("Score Increase", awayScore)
  const awayScoreElem = document.getElementById('awayScore')
  awayScoreElem.innerText = awayScore.toString()
}

function resetButton() {
  const reset = document.getElementById('homeScore')
  reset.innerText = homeScore.toString()
}