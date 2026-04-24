import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartFunctionContext } from "../../context/CartFunctionContext"
import styles from "./shoppingCart.module.css"
import CartItem from "../CartItem"

const ShoppingCart = ({displayed, updateDisplayed}) => {
  const {cartTotal} = useContext(CartFunctionContext)

  const closeMenu = () => {
    updateDisplayed(false)
  }

  return (
    <div className={styles.shoppingCartWrapper}>
      {displayed && (
        <div className={styles.cartOverlay} onClick={closeMenu}></div>
      )}
      <div className={`${styles.shoppingCartContent} ${displayed ? styles.displayCart : ``}`}>
        <CartItem />
        <div className={styles.checkoutWrapper}>
          <span className={styles.totalPrice}>Total: {cartTotal} :-</span>
          <NavLink className={styles.navItem} to={"/checkout"}>Checkout</NavLink>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart