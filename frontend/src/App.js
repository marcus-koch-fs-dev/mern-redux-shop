import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.scss'

// Screens
import HomeScreen from './pages/HomeScreen'
import ProductScreen from './pages/ProductScreen'
import CartScreen from './pages/CartScreen'

// Components
import Navbar from './components/UI/Navbar'
import Backdrop from './components/UI/Backdrop'
import SideDrawer from './components/UI/SideDrawer'

function App() {
  const [sideToggle, setSideToggle] = useState(false)

  return (
    <div className="app">
      <Navbar click={() => setSideToggle(true)} />

      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </div>
  )
}

export default App
