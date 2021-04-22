import Product from '../components/Products'
import './HomeScreen.scss'

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Product</h2>
      <div className="homescreen__product">
        <Product />
      </div>
    </div>
  )
}

export default HomeScreen
