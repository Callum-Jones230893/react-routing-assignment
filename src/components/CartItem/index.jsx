import { useEffect } from "react"
import styles from "./cartItem.module.css"

const CartItem = ({adjustQuantity, shoppingCart}) => {
  return (
    <div>
      {shoppingCart.map((product, index) =>
        <div className={styles.cartItemWrapper} key={index}>
          <div>{product.name}</div>
          <div>{product.price * product.quantity}</div>
          <div>{product.quantity}</div>
          <span onClick={() => {adjustQuantity(product)}}>Remove</span>
        </div>
      )}
    </div>
  )
}

export default CartItem