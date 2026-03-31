import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import styles from "./shoppingCart.module.css"
import CartItem from "../CartItem"

const ShoppingCart = ({displayed, cart, updateShoppingCart}) => {
  const [cartTotal, setCartTotal] = useState(0.00)

  const removeFromCart = (product) => {
    const exists = cart.findLast((item) => item.id === product.id)
      exists.quantity > 1 ? updateShoppingCart([...cart, {...product, quantity: product.quantity -1 }])
                          : updateShoppingCart(cart.filter((item) => item.id !== product.id))
    
  } 

  // console.log(cart)

  const calculateTotal = () => {
    let sum = 0
    cart.forEach(item => sum += item.price)
    setCartTotal(sum)
  }

  useEffect(() => {
    calculateTotal()
  }, [cart])

  return (
    <div className={styles.shoppingCartWrapper}>
      <div className={`${styles.shoppingCartContent} ${displayed ? styles.displayCart : ``}`}>
        <CartItem adjustQuantity={removeFromCart} shoppingCart={cart} setShoppingCart={updateShoppingCart}/>
      <span>{cartTotal}</span>
      <NavLink className={styles.navItem} to={"/checkout"}>Checkout</NavLink>
      </div>
    </div>
  )
}

export default ShoppingCart