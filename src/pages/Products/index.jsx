import { Outlet } from "react-router-dom"
import ProductDisplay from "../../components/ProductDisplay"

const Products = ({cartItems, updateCartItems, addItem}) => {

  return (
    <>
      <ProductDisplay 
        cart={cartItems} 
        setCart={updateCartItems} 
        addToCart={addItem}
      />
      <Outlet />
    </>
  )
}

export default Products