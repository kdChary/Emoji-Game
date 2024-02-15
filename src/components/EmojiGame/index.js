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
  state = {score: 0, topScore: 0, isClickedTwice: false, emojiId: -1}

  playAgain = score => {
    const {topScore} = this.state
    this.setState({
      score: 0,
      isClickedTwice: false,
      emojiId: -1,
    })
    if (score > topScore) {
      this.setState({topScore: score})
    }
  }

  emojiClicked = id => {
    const {score, topScore, emojiId} = this.state
    if (id !== emojiId) {
      this.setState({emojiId: id})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      if (topScore < score) {
        this.setState(prevState => ({topScore: prevState.topScore + 1}))
      }
    } else {
      this.setState(prevState => ({
        isClickedTwice: !prevState.isClickedTwice,
      }))
    }
  }

  //   renderResults = () => {
  //     const {score, totalScore, isClickedTwice} = this.state
  //     const result = isClickedTwice || totalScore < 12
  //     return
  //   }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const listEmojis = shuffledEmojisList()
    const {score, topScore, isClickedTwice} = this.state
    const hideScore = isClickedTwice || score === 12

    return (
      <div className="app-container">
        <NavBar score={score} totalScore={topScore} isHide={hideScore} />
        <div className="game-container">
          <ul className="emojis-list">
            {!isClickedTwice &&
              score < 12 &&
              listEmojis.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  emojiClicked={this.emojiClicked}
                />
              ))}
          </ul>
          {isClickedTwice && (
            <WinOrLoseCard score={score} playAgain={this.playAgain} />
          )}
          {score === listEmojis.length && (
            <WinOrLoseCard score={score} playAgain={this.playAgain} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
