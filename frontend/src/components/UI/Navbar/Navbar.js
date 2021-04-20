import { Link } from 'react-router-dom'
import './Navbar.sass'

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <h2 className="navbar__h2">MERN-Redux-Shop</h2>
      </div>
      {/* links */}
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/cart" className="navbar__link">
            <i class="fas fa-shopping-cart"></i>
            cart
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Shop
          </Link>
        </li>
      </ul>

      <div className="navbar__hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
