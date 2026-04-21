import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from "./pages/Layout"
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Checkout from './pages/Checkout'
// import Account from './pages/Account'
import ProductInformation from './pages/Products/ProductInformation'
import useRandomProduct from './hooks/useRandomProduct'

function App() {
  const {heroProduct, previewProducts} = useRandomProduct()

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home randomHero={heroProduct} randomPreview={previewProducts}/>} />
        <Route path="/products" element={<Products />}>
          <Route path=":category" element={<Products />} />
          <Route path=":category/:name" element={<ProductInformation />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/myaccount" element={<Account />} /> */}
      </Route>
    </Routes>
  )
}

export default App