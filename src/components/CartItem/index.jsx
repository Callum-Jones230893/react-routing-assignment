import { useEffect } from "react"
import styles from "./cartItem.module.css"

const CartItem = ({adjustQuantity, shoppingCart}) => {
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
          <span onClick={() => {adjustQuantity(product)}}>Remove</span>
        </div>
      )}
    </div>
  )
}

export default CartItem