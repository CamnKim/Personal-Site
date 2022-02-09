import { useState } from 'react'
const { portfolio } = require('../content.json')

const Portfolio = ({ size }) => {
  const [projectIndex, setIndex] = useState(0)

  const decPort = () => {
    if (projectIndex == 0) {
      setIndex(portfolio.length - 1)
    } else {
      setIndex(projectIndex - 1)
    }
  }

  const incPort = () => {
    if (projectIndex == portfolio.length - 1) {
      setIndex(0)
    } else {
      setIndex(projectIndex + 1)
    }
  }

  return (
    <section className="portfolio">
      <button className="caroLeft" onClick={decPort}>
        <i class="material-icons">chevron_left</i>
      </button>
      <div className="card">
        <img
          src={require(`../assets/portfolio/${portfolio[projectIndex].thumbnail}`)}
          alt="project thumbnail"
        />
        <p className="title">{portfolio[projectIndex].title}</p>
        <p className="desc">{portfolio[projectIndex].description}</p>
        <a href={portfolio[projectIndex].git}>
          <i class="devicon-github-original port-git-link"></i>
        </a>
      </div>
      <button className="caroRight" onClick={incPort}>
        <i class="material-icons">chevron_right</i>
      </button>
    </section>
  )
}

export default Portfolio
