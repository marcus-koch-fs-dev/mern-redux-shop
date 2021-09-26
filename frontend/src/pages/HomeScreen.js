import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './HomeScreen.scss'

// Components
import Product from '../components/Product'

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const getProducts = useSelector((state) => state.getProducts)
    const { loading, products, error } = getProducts

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Product</h2>
            <div className="homescreen__product">
                {loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    products.map((product) => (
                        <Product
                            key={product._id}
                            productId={product._id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default HomeScreen
