import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import useProducts from './hooks/fetch'
import useRandomProduct from './hooks/useRandomProduct'
import Layout from "./pages/Layout"
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Checkout from './pages/Checkout'
import Account from './pages/Account'
import ProductInformation from './pages/Products/ProductInformation'

function App() {
  const [shoppingCart, setShoppingCart] = useState([])
  const {heroProduct, previewProducts} = useRandomProduct() 
  // put the useRandomProduct() inside mainContent
  const { miniatures, paints, paintingAccessories} = useProducts()
  const allProductsArray = [...miniatures, ...paints, ...paintingAccessories]
  
  const addToCart = (product) => {
    const exists = shoppingCart.findLast((item) => item.id === product.id)
    !exists ? setShoppingCart([...shoppingCart, {...product, quantity: 1}]) 
             : setShoppingCart([...shoppingCart, {...exists, quantity: exists.quantity + 1}]) 
  }

  return (
    <Routes>
      <Route element={<Layout cartItems={shoppingCart} updateCartItems={setShoppingCart} />}>
        <Route path="/" element={<Home addItem={addToCart} heroItem={heroProduct} previewItems={previewProducts} />} />
        <Route path="/products" element={<Products cartItems={shoppingCart} updateCartItems={setShoppingCart} addItem={addToCart} allProducts={allProductsArray} />}>
          <Route path=":category" element={<Products cartItems={shoppingCart} updateCartItems={setShoppingCart} addItem={addToCart} allProducts={allProductsArray} />} />
          <Route path=":category/:id" element={<ProductInformation cartItems={shoppingCart} updateCartItems={setShoppingCart} addItem={addToCart}  allProducts={allProductsArray} />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/myaccount" element={<Account />} />
      </Route>
    </Routes>
  )
}

export default App