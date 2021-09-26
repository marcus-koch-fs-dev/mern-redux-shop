import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { userLogout } from '../../redux/actions/userActions'
import './Navbar.scss'

const Navbar = ({ click }) => {
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    const { userData } = useSelector((state) => state.userLogin)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')

    // useEffect(() => {
    //     if (!localStorage.getItem('authToken')) return
    //     const { data } = JSON.parse(localStorage.getItem('user'))
    //     const { username } = data
    //     setUserName(username)
    // }, [userData])

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const handleLogout = () => {
        dispatch(userLogout())
        setUserName('')
    }

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar__logo">
                <h2>Demo-Shop</h2>
                {/* {userData && <h3>Hallo {userName}</h3>} */}
            </div>
            {/* links */}
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cart__badge">
                                {getCartCount()}
                            </span>
                        </span>
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link to="/" className="shop__link">
                        Shop
                    </Link>
                </li>
                <li className="navbar__item">
                    {!userData ? (
                        <Link to="/login" className="login__link">
                            Login
                        </Link>
                    ) : (
                        <Link
                            to="/"
                            className="logout__link"
                            onClick={handleLogout}
                        >
                            Log out
                        </Link>
                    )}
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
