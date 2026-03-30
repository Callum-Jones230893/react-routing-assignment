import { useState, useEffect } from "react"
import styles from "./shoppingCart.module.css"
import CartItem from "../CartItem"

const ShoppingCart = ({displayed, cart, updateShoppingCart}) => {
  const [cartTotal, setCartTotal] = useState(0.00)


  const removeProduct = (product) => {
    const exists = cart.find((item) => item.id === product.id)

    if (exists) {
      updateShoppingCart(cart.filter((item) => item.id !== product.id))
    } else {
      updateShoppingCart(
        cart.map((item) => 
          item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
        )
      )
    }
  } 

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
      <div className={`${styles.shoppingCartContent} ${displayed ? styles.displayCart : ``} `}>
        <CartItem adjustQuantity={removeProduct} shoppingCart={cart} />
      <span>{cartTotal}</span>
      </div>
    </div>
  )
}

export default ShoppingCart