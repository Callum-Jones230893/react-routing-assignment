import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from "./pages/Layout"
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Checkout from './pages/Checkout'
import Account from './pages/Account'
import ProductInformation from './pages/Products/ProductInformation'

function App() {
  const [shoppingCart, setShoppingCart] = useState([])

  return (
    <Routes>
      <Route element={<Layout cart={shoppingCart} updateCart={setShoppingCart} />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path=":category" element={null} />
          <Route path=":category/:id" element={<ProductInformation />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/myaccount" element={<Account />} />
      </Route>
    </Routes>
  )
}

export default App

