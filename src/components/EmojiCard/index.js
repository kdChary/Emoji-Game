import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClicked} = props

  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    emojiClicked(id)
  }

  return (
    <li className="emoji-card-item">
      <button className="emoji-button" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
