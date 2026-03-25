import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element="" />
      <Route path="/products" element="">
        <Route path=":id" element="" />
      </Route>
      <Route path="/about" element="" />
      <Route path="/checkout" element="" />
      <Route path="/account" element="" />
    </Routes>
  )
}

export default App
