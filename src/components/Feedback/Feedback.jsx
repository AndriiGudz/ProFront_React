import React, { useState } from 'react'
import Button from '../Button/Button'
import './styles.css'

function Feedback() {
  const [countLike, setLike] = useState(0)
  const [countDislike, setDislike] = useState(0)

  const likePlus = () => {
    setLike((prevCount) => prevCount + 1)
  }

  const dislikePlus = () => {
    setDislike((prevCount) => prevCount + 1)
  }

  const resetResults = () => {
    setLike(0)
    setDislike(0)
  }

  return (
    <div className="feedback-component">
      <div className="feedback like">
        <Button className="btn" name="Like 👍" onClick={likePlus} />
        <div className="like-result">{countLike}</div>
      </div>
      <div className="feedback dislike">
        <Button className="btn" name="Dislike 👎" onClick={dislikePlus} />
        <div className="dislike-result">{countDislike}</div>
      </div>
      <Button
        className="btn-reset"
        name="Reset Results"
        onClick={resetResults}
      />
    </div>
  )
}

export default Feedback
