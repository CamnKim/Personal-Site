import './css/Modal.scss'
import { useState } from 'react'
import reactDom from 'react-dom'

const Modal = ({ content, open, close }) => {
  const [caroIndex, setCaroIndex] = useState(0)

  const handleRight = () => {
    setCaroIndex(caroIndex + 1)
    if (caroIndex === content.images.length - 1) {
      setCaroIndex(0)
    }
  }

  const handleLeft = () => {
    setCaroIndex(caroIndex - 1)
    if (caroIndex === 0) {
      setCaroIndex(content.images.length - 1)
    }
  }

  const handleBottomNav = e => {
    setCaroIndex(parseInt(e.target.id))
  }

  let caroPositionStyle = {
    transform: `translateX(-${caroIndex * 100}%)`,
  }

  const closeModal = () => {
    setCaroIndex(0)
    close()
  }

  if (!open) return null
  return reactDom.createPortal(
    <>
      <div className="overlay" onClick={closeModal}></div>
      <div className="modal">
        <div className="modalTitle">{content.title}</div>
        {content.images.length == 1 ? (
          <img
            src={require(`../assets/portfolio/${content.images[0]}`)}
            alt="modalImage"
            className="modalImage"
          />
        ) : (
          <div className="carousel">
            <div className="sliderWrapper">
              <div className="imageWrapper" style={caroPositionStyle}>
                {content.images.map(image => {
                  return (
                    <img
                      src={require(`../assets/portfolio/${image}`)}
                      alt="modalImage"
                      className="modalImage"
                    />
                  )
                })}
              </div>
            </div>
            <button className="caroLeft" onClick={handleLeft}>
              <i class="material-icons">chevron_left</i>
            </button>
            <button className="caroRight" onClick={handleRight}>
              <i class="material-icons">chevron_right</i>
            </button>
            <div className="bottomNav">
              {content.images.map((image, index) => {
                return (
                  <div
                    id={index}
                    className={caroIndex === index ? 'dot active' : 'dot'}
                    onClick={handleBottomNav}
                  ></div>
                )
              })}
            </div>
          </div>
        )}

        <p className="desc">{content.description}</p>
        <div className="github">
          <a href={content.git} target="_blank">
            <i class="devicon-github-original"></i>
          </a>
        </div>
      </div>
    </>,
    document.getElementById('root')
  )
}

export default Modal
