import { useEffect } from "react"
import styles from "./cartItem.module.css"

const CartItem = ({adjustQuantity, shoppingCart}) => {

  useEffect(() => {
    shoppingCart
  }, [adjustQuantity])

  return (
    <div>
      {shoppingCart.map((product, index) =>
        <div className={styles.cartItemWrapper} key={index}>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <span onClick={() => {adjustQuantity(product)}}>Remove</span>
        </div>
      )}
    </div>
  )
}

export default CartItem