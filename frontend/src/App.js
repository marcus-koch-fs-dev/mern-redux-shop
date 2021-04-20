import { Switch, Route } from 'react-router-dom'
import Navbar from './components/UI/Navbar/Navbar'
import HomeScreen from './pages/HomeScreen'
import ProductScreen from './pages/ProductScreen'
import CartScreen from './pages/CartScreen'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* SideDrawer */}

      {/* Backdrop */}

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
