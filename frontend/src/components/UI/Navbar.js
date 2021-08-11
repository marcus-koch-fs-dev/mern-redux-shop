import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Navbar.scss'

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <h2>Demo-Shop</h2>
      </div>
      {/* links */}
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cart__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/" className="shop__link">
            Shop
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/login" className="login__link">
            Login
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
