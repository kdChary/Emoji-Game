import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props

  const text = score === 12 ? 'You Won' : 'You Lose'
  const imageUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const playAgainClicked = () => {
    playAgain(score)
  }

  return (
    <div className="result-card">
      <div className="score-card">
        <h1 className="result-title">{text}</h1>
        <p className="result-caption">Best Score</p>
        <p className="result-score">{score}/12</p>
        <button
          className="result-button"
          type="button"
          onClick={playAgainClicked}
        >
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" className="win-lose-image" />
    </div>
  )
}

export default WinOrLoseCard
