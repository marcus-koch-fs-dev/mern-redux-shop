import './LoginScreen.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/userActions'

const LoginScreen = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [error, setError] = useState('')
    const dispatch = useDispatch()
    const { loading, userData, error } = useSelector((state) => state.userLogin)

    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            history.push('/')
        }
    }, [history])

    const loginHandler = async (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    useEffect(() => {
        if (userData) {
            history.push('/')
        }
    }, [userData, history])

    // setError(error.response.data.error)
    // setTimeout(() => {
    //   setError('')
    // }, 5000)

    return (
        <div className="login-screen">
            <form onSubmit={loginHandler} className="login-screen__form">
                <h3 className="login-screen__title">Login</h3>
                {userData && (
                    <span className="error-message">{userData.error}</span>
                )}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        required
                        id="email"
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        tabIndex={1}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Password:{' '}
                        <Link
                            to="/forgotpassword"
                            className="login-screen__forgotpassword"
                        >
                            Forgot Password?
                        </Link>
                    </label>
                    <input
                        type="password"
                        required
                        id="password"
                        autoComplete="true"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        tabIndex={2}
                    />
                </div>
                {!userData ? (
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                ) : (
                    <button className="btn btn-primary">Logout</button>
                )}

                <span className="login-screen__subtext">
                    Don't have an account? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    )
}

export default LoginScreen
