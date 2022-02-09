import './css/Contact.scss'

const Contact = ({ desc }) => {
  return (
    <section className="contact" id="contact">
      <div className="contentWrapper">
        <h1>Reach Out</h1>
        <p>{desc}</p>
        <div className="email">
          <a href="mailto:cameronnkim2000@gmail.com">
            <i class="bi bi-envelope"></i>
          </a>
        </div>
        <div className="links">
          <ul className="linkList">
            <li className="linkItems">
              <a
                href="https://www.linkedin.com/in/cameron-kim-1849a4205/"
                target="_blank"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="linkItems">
              <a href="https://github.com/CamnKim" target="_blank">
                <i class="bi bi-github"></i>
              </a>
            </li>
            <li className="linkItems">
              <a href="https://www.instagram.com/camnk2000" target="_blank">
                <i class="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
