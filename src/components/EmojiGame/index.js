/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {topScore: 0, isPlaying: true, clickedEmojis: []}

  playAgain = () => {
    this.setState({
      isPlaying: true,
      clickedEmojis: [],
    })
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = clickedEmojis.length === emojisList.length

    return (
      <WinOrLoseCard
        score={clickedEmojis.length}
        playAgain={this.playAgain}
        isWon={isWon}
      />
    )
  }

  finishAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newScore = topScore
    if (currentScore > topScore) {
      newScore = currentScore
    }
    this.setState({topScore: newScore, isPlaying: false})
  }

  emojiClicked = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isClickedEmojiTwice = clickedEmojis.includes(id)
    const totalEmojisClicked = clickedEmojis.length

    if (isClickedEmojiTwice) {
      this.finishAndSetTopScore(totalEmojisClicked)
    } else {
      if (emojisList.length - 1 === totalEmojisClicked) {
        this.finishAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  renderEmojisList = () => {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const shuffledEmojis = shuffledEmojisList()
    return (
      <ul className="emojis-list">
        {shuffledEmojis.map(eachEmoji => (
          <EmojiCard
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
            emojiClicked={this.emojiClicked}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojis, topScore, isPlaying} = this.state

    return (
      <>
        <NavBar
          score={clickedEmojis.length}
          totalScore={topScore}
          isHide={isPlaying}
        />
        <div className="app-container">
          {isPlaying ? this.renderEmojisList() : this.renderScoreCard()}
          {/* <div className="game-container">
          {isClickedTwice && (
            <WinOrLoseCard score={score} playAgain={this.playAgain} />
          )}
          {score === 12 && (
            <WinOrLoseCard score={score} playAgain={this.playAgain} />
          )}
        </div> */}
        </div>
      </>
    )
  }
}

export default EmojiGame
