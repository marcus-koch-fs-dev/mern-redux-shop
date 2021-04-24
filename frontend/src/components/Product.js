import React from 'react'
import { Link } from 'react-router-dom'
import './Product.scss'

const Products = ({ imageUrl, name, price, description, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt="product_image" />
      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{description.substring(0, 100)}...</p>
        <p className="info__price">{price}€</p>
        <Link to={`/product/${productId}`} className="info__button">
          Go to product
        </Link>
      </div>
    </div>
  )
}

export default Products
