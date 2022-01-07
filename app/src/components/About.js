import './css/About.scss'

const About = ({ introduction }) => {
  return (
    <section>
      <h1 className="nameTitle">Cameron Kim</h1>
      <h1 className="descriptor">Software Developer</h1>
      <p className="introduction">{introduction}</p>
      <div className="hex">
        <div className="hexBorder">
          <img src={require('../assets/headshot.jpg')} alt="headshot" />
        </div>
      </div>
    </section>
  )
}

export default About
