import { useContext } from "react"
import { CartFunctionContext } from "../../context/CartFunctionContext"
import styles from "./cartItem.module.css"

const CartItem = () => {
  const {shoppingCart, addToCart, removeFromCart} = useContext(CartFunctionContext)

  return (
    <div>
      {shoppingCart.map((product, index) =>
        <div className={styles.cartItemWrapper} key={index}>
          <div>{product.name}</div>
          <div>{product.price * product.quantity}</div>
          <div className={styles.itemQtyContainer}>
            <span className={styles.qtyToggle}>-</span>
            <div>{product.quantity}</div>
            <span className={styles.qtyToggle}>+</span>
          </div>
          <span onClick={() => {removeFromCart(product)}}>Remove</span>
        </div>
      )}
    </div>
  )
}

export default CartItem