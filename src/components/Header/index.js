import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navBarEdit">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logoEdit"
    />
    <ul className="navMenuEdit">
      <Link to="/">
        <li className="listEdit">Home</li>
      </Link>
      <li className="listEdit">Products</li>
      <li className="listEdit">Cart</li>
    </ul>
  </nav>
)

export default Header
