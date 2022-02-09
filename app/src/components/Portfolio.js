import { useState } from 'react'

import Card from './Card'
import Modal from './Modal'
import './css/Portfolio.scss'
// import content from content.json
const { portfolio } = require('../content.json')

const Portfolio = ({ offsetY }) => {
  const [cardIndex, setIndex] = useState(0)
  const [modalBool, showModal] = useState(false)

  const closeModal = () => {
    showModal(false)
  }

  return (
    <div className="portWrapper">
      <section className="portfolio" id="portfolio">
        <div className="contentWrapper">
          <h1>Portfolio</h1>
          <div className="portfolioWrapper">
            {portfolio.map((element, index) => {
              return (
                <Card
                  thumbnail={element.images[0]}
                  title={element.title}
                  index={index}
                  setIndex={setIndex}
                  openModal={showModal}
                />
              )
            })}
          </div>
          <Modal
            content={portfolio[cardIndex]}
            open={modalBool}
            close={closeModal}
          />
        </div>
      </section>
    </div>
  )
}

export default Portfolio
