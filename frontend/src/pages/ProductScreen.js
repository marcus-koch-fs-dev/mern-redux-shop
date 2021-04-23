import './ProductScreen.scss'

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img
            src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="product_image"
          />
        </div>

        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p>Price: 5000</p>
          <p>This is example text</p>
        </div>
      </div>

      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price: <span>5000€</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty:{' '}
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </p>
          <p>
            <button type="button">Add to cart</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
