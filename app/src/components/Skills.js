import './css/Skills.scss'

// SVGs
import { ReactComponent as ReactSVG } from '../assets/svgs/react.svg'
import { ReactComponent as MaterializeSVG } from '../assets/svgs/materialize.svg'
import { ReactComponent as BootstrapSVG } from '../assets/svgs/bootstrap.svg'
import { ReactComponent as ExpressSVG } from '../assets/svgs/express.svg'

import { ReactComponent as ElectronSVG } from '../assets/svgs/electron.svg'
import { ReactComponent as UnitySVG } from '../assets/svgs/unity.svg'

import { ReactComponent as JSSVG } from '../assets/svgs/js.svg'
import { ReactComponent as CSSSVG } from '../assets/svgs/css.svg'
import { ReactComponent as HTMLSVG } from '../assets/svgs/html.svg'
import { ReactComponent as CsharpSVG } from '../assets/svgs/csharp.svg'
import { ReactComponent as CplusplusSVG } from '../assets/svgs/cplusplus.svg'
import { ReactComponent as PythonSVG } from '../assets/svgs/python.svg'

const Skills = () => {
  return (
    <section className="Skills" id="skills">
      <div className="contentWrapper">
        <h1 className="SkillsTitle">Skills</h1>
        <ul className="skillsWrapper">
          {/* web skills */}
          <li className="skillCard">
            <div className="skillHeader">Web Technologies</div>
            <hr />
            <ul>
              <li>
                <ReactSVG />
                <p>React</p>
              </li>
              {/* <li>
                <ExpressSVG />
                <p>Express</p>
              </li> */}
              <li>
                <MaterializeSVG />
                <p>Materialize</p>
              </li>
              <li>
                <BootstrapSVG />
                <p>Bootstrap</p>
              </li>
            </ul>
          </li>
          {/* desktop skills */}
          <li className="skillCard">
            <div className="skillHeader">Desktop Technologies</div>
            <hr />
            <ul>
              <li>
                <ElectronSVG />
                <p>Electron</p>
              </li>
              <li>
                <UnitySVG />
                <p>Unity</p>
              </li>
            </ul>
          </li>
          {/* language skills */}
          <li className="skillCard">
            <div className="skillHeader">Languages</div>
            <hr />
            <ul>
              <li>
                <HTMLSVG />
                <CSSSVG />
                <JSSVG />
                <p>HTML/CSS/JS</p>
              </li>
              <li>
                <CsharpSVG />
                <p>C Sharp</p>
              </li>
              <li>
                <CplusplusSVG />
                <p>C++</p>
              </li>
              <li>
                <PythonSVG />
                <p>Python</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
