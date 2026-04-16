import { useContext } from "react"
import { CartFunctionContext } from "../../context/CartFunctionContext"
import { PlusSquareIcon, MinusSquareIcon } from "@phosphor-icons/react"
import styles from "./cartItem.module.css"

const CartItem = () => {
  const {shoppingCart, addToCart, removeFromCart} = useContext(CartFunctionContext)

  return (
    <div>
      {shoppingCart.map((product, index) =>
        <div className={styles.cartItemWrapper} key={index}>
          <p>{product.name}</p>
          <p>{product.price * product.quantity} :-</p>
          <div className={styles.itemQtyContainer}>
              <span onClick={() => {removeFromCart(product)}}>
                <MinusSquareIcon className={styles.qtyToggle} size={18} />
              </span>
            <div>{product.quantity}</div>
              <span onClick={() => {addToCart(product)}}>
                <PlusSquareIcon className={styles.qtyToggle} size={18} />
              </span>
          </div>
          <span onClick={() => {removeFromCart(product)}}>Remove</span>
        </div>
      )}
    </div>
  )
}

export default CartItem