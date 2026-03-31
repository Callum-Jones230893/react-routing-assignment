import { Outlet } from "react-router-dom"
import ProductDisplay from "../../components/ProductDisplay"

const Products = ({cartItems, updateCartItems, addItem, allProducts}) => {

  return (
    <>
      <ProductDisplay 
        cart={cartItems} 
        setCart={updateCartItems} 
        addToCart={addItem}
        productArray={allProducts}
      />
      <Outlet />
    </>
  )
}

export default Products