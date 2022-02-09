import { useState } from 'react'
import './css/Navbar.scss'
import './css/Sidenav.scss'

const NavBar = () => {
  const [flex, setFlex] = useState('navContent')

  const handleMenu = () => {
    if (flex == 'navContent') {
      setFlex('navContent navDrop')
    } else {
      setFlex('navContent')
    }
  }

  return (
    <nav>
      <div className="navItems">
        <button className="menuIcon" onClick={handleMenu}>
          <i className="material-icons">menu</i>
        </button>
        <div className="navTitle">Cameron Kim</div>
      </div>

      <ul className={flex}>
        <li>
          <a href="#about">
            <i class="material-icons" id="i-about" title="About Me">
              face
            </i>
            <p>About</p>
          </a>
        </li>
        <li>
          <a href="#skill">
            <i class="material-icons" id="i-skills" title="Skills">
              psychology
            </i>
            <p>Skills</p>
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <i class="material-icons" id="i-portfolio" title="Portfolio">
              code
            </i>
            <p>Portfolio</p>
          </a>
        </li>
        <li>
          <a href="#contact">
            <i class="material-icons" id="i-contact" title="Contact Me">
              alternate_email
            </i>
            <p>Contact</p>
          </a>
        </li>
        <li className="resume">
          <a href={require('../assets/resume.pdf')} target="_blank">
            <i class="material-icons">contact_page</i>
            <p>Resume</p>
          </a>
        </li>
      </ul>
      <ul className="personalLinks">
        <li>
          <a href={require('../assets/resume.pdf')} target="_blank">
            <i class="material-icons" title="Resume">
              contact_page
            </i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/cameron-kim-1849a4205/"
            target="_blank"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/CamnKim" target="_blank">
            <i class="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/camnk2000" target="_blank">
            <i class="bi bi-instagram"></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
