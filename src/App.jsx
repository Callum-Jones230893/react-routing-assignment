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

  const addToCart = (product) => {
    setShoppingCart([...shoppingCart, product])
  }
  
  console.log(shoppingCart)

  return (
    <Routes>
      <Route element={<Layout cartItems={shoppingCart} updateCartItems={setShoppingCart} />}>
        <Route path="/" element={<Home addItem={addToCart} />} />
        <Route path="/products" element={<Products cartItems={shoppingCart} updateCartItems={setShoppingCart} addItem={addToCart} />}>
          <Route path=":category" element={<Products cartItems={shoppingCart} updateCartItems={setShoppingCart} addItem={addToCart} />} />
          <Route path=":category/:id" element={<ProductInformation cartItems={shoppingCart} updateCartItems={setShoppingCart} addItem={addToCart} />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/myaccount" element={<Account />} />
      </Route>
    </Routes>
  )
}

export default App

