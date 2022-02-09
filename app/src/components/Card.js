import { useState } from 'react'
import './css/Card.scss'

const Card = ({ thumbnail, title, index, setIndex, openModal }) => {
  const handleClick = () => {
    console.log('test')
    setIndex(index)
    openModal(true)
  }

  return (
    <div>
      <button className="cardButton" onClick={handleClick}>
        <div className="card">
          <div className="cardTitle">{title}</div>
          <img
            src={require(`../assets/portfolio/${thumbnail}`)}
            alt="project thumbnail"
          />
        </div>
      </button>
    </div>
  )
}

export default Card
