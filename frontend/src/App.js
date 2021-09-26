import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import './App.scss'

// Screens
import HomeScreen from './pages/HomeScreen'
import ProductScreen from './pages/ProductScreen'
import CartScreen from './pages/CartScreen'
import LoginScreen from './pages/auth/LoginScreen'
import RegisterScreen from './pages/auth/RegisterScreen'
import ForgotPasswordScreen from './pages/auth/ForgotPasswordScreen'
import ResetPassword from './pages/auth/ResetPassword'

// Components
import Navbar from './components/UI/Navbar'
import Backdrop from './components/UI/Backdrop'
import SideDrawer from './components/UI/SideDrawer'
import PrivateScreen from './pages/auth/PrivateScreen'

function App() {
    const { userData } = useSelector((state) => state.userLogin)
    console.log('userData', userData)
    const [sideToggle, setSideToggle] = useState(false)

    return (
        <div className="app">
            <Navbar click={() => setSideToggle(true)} />
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
            <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
            <main>
                <Switch>
                    {userData && (
                        <Route
                            exact
                            path="/"
                            render={() => <PrivateScreen />}
                        />
                    )}
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/register" component={RegisterScreen} />
                    <Route
                        exact
                        path="/forgotPassword"
                        component={ForgotPasswordScreen}
                    />
                    <Route
                        exact
                        path="/resetPassword/:resetToken"
                        component={ResetPassword}
                    />
                    <Route
                        exact
                        path="/product/:id"
                        component={ProductScreen}
                    />
                    <Route exact path="/cart" component={CartScreen} />
                </Switch>
            </main>
        </div>
    )
}

export default App
