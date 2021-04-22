import React from 'react'
import { Link } from 'react-router-dom'
import './Products.scss'

const Products = () => {
  return (
    <div className="product">
      <img
        src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="product_image"
      />
      <div className="product__info">
        <p className="info__name">Product name</p>
        <p className="info__description">bla bla bla</p>
        <p className="info__price">5000€</p>
        <Link to={`/product/${1111}`} className="info__button">
          Go to product
        </Link>
      </div>
    </div>
  )
}

export default Products
