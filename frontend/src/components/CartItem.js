import { Link } from 'react-router-dom'
import './CartItem.scss'

const CartItem = () => {
  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img
          src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="product_image"
        />
      </div>
      <Link to={`/product/${111}`} className="cartItem__name">
        <p>Product 1</p>
      </Link>
      <p className="cartItem__price"> 5000€</p>
      <select className="cartItem__select">
        <option value="1">value 1</option>
      </select>

      <button className="cartItem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default CartItem
