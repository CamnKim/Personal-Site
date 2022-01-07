import { useState } from 'react'
import './css/Navbar.scss'

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

      <ul className={flex} active>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
