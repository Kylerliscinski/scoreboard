let homeScore = 0
let awayScore = 0
let initScore = 0

function homeAdd1Button() {
  homeScore++
  console.log("Score Increase", homeScore)
  const homeScoreElem = document.getElementById('homeScore')
  homeScoreElem.innerText = homeScore.toString()
  declareWinner()
}

function awayAdd1Button() {
  awayScore++
  console.log("Score Increase", awayScore)
  const awayScoreElem = document.getElementById('awayScore')
  awayScoreElem.innerText = awayScore.toString()
  declareWinner()
}

function homeAdd3Button() {
  homeScore += 3
  console.log("Score Increase", homeScore)
  const homeScoreElem = document.getElementById('homeScore')
  homeScoreElem.innerText = homeScore.toString()
  declareWinner()
}

function awayAdd3Button() {
  awayScore += 3
  console.log("Score Increase", awayScore)
  const awayScoreElem = document.getElementById('awayScore')
  awayScoreElem.innerText = awayScore.toString()
  declareWinner()
}

function resetButton() {
  const reset = document.getElementById('homeScore')
  reset.innerText = initScore.toString()
  const reset1 = document.getElementById('awaScore')
  reset1.innerText = initScore.toString()
}

function declareWinner() {
  if (homeScore >= 21) {
    window.alert("Home team wins!")
  } else if (awayScore >= 21) {
    window.alert("Away team wins!")
  }
}