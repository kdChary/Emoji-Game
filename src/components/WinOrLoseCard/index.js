import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain, isWon} = props

  const text = isWon ? 'You Won' : 'You Lose'
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const playAgainClicked = () => {
    playAgain()
  }

  return (
    <div className="result-card">
      <div className="score-card">
        <h1 className="result-title">{text}</h1>
        {isWon && <p className="result-caption">Best Score</p>}
        {!isWon && <p className="result-caption">Score</p>}
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
