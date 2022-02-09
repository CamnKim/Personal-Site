import './css/About.scss'

const About = ({ introduction, offsetY }) => {
  return (
    <section
      className="About"
      id="about"
      style={{ transform: `translateY(${offsetY * 0.5}px)` }}
    >
      <div className="contentWrapper">
        <div className="topPart">
          <h1 className="nameTitle">Cameron Kim</h1>
          <h1 className="descriptor">Software Developer</h1>
        </div>
        <div className="bottomPart">
          <div className="introWrapper">
            <p className="introduction">{introduction}</p>
          </div>
          <div className="hex">
            <div className="hexBorder">
              <img src={require('../assets/headshot.jpg')} alt="headshot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
