import { Route, Routes } from 'react-router-dom'
import './App.css'
import { CartFunctionProvider } from './context/CartFunctionContext'
import useProducts from './hooks/fetch'
import Layout from "./pages/Layout"
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Checkout from './pages/Checkout'
import Account from './pages/Account'
import ProductInformation from './pages/Products/ProductInformation'

function App() {
  const { miniatures, paints, accessories} = useProducts()
  const allProductsArray = [...miniatures, ...paints, ...accessories]

  return (
    <CartFunctionProvider>
      <Routes>
        <Route element={<Layout productArray={allProductsArray} />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products allProducts={allProductsArray} />}>
            <Route path=":category" element={<Products allProducts={allProductsArray} />} />
            <Route path=":category/:name" element={<ProductInformation allProducts={allProductsArray} />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/myaccount" element={<Account />} />
        </Route>
      </Routes>
    </CartFunctionProvider>
  )
}

export default App