import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <Link to="/">
      <div className="icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
          className="icon-style"
        />
      </div>
    </Link>
  </nav>
)

export default Header
