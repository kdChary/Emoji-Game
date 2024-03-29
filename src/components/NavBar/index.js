import './index.css'

const NavBar = props => {
  const {score, totalScore, isHide} = props

  return (
    <nav className="nav-bar">
      <div className="logo-section">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h2 className="logo-title">Emoji Game</h2>
      </div>
      {isHide && (
        <div className="nav-score-card">
          <p className="nav-score">Score: {score}</p>
          <p className="nav-total-score">Top Score: {totalScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
