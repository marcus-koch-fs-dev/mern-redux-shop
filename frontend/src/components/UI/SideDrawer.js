import { Link } from 'react-router-dom'
import './SideDrawer.scss'

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ['sidedrawer']
  if (show) {
    sideDrawerClass.push('show')
  }

  return (
    <div className={sideDrawerClass.join(' ')}>
      <ul className="sidedrawer__list" onClick={click}>
        <li className="sidedrawer__item">
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cart__badge">0</span>
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
