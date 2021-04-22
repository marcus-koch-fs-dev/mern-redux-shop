import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <h2>MERN-Redux-Shop</h2>
      </div>
      {/* links */}
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cart__badge">0</span>
            </span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/" className="shop__link">
            Shop
          </Link>
        </li>
      </ul>

      <div className="navbar__hamburger-menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
