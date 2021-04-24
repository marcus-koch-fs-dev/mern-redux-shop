import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './SideDrawer.scss'

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ['sidedrawer']
  if (show) {
    sideDrawerClass.push('show')
  }

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  return (
    <div className={sideDrawerClass.join(' ')}>
      <ul className="sidedrawer__list" onClick={click}>
        <li className="sidedrawer__item">
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cart__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li className="sidedrawer__item">
          <Link to="/" className="shop__link">
            Shop
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideDrawer
