import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartFunctionContext } from "../../context/CartFunctionContext"
import styles from "./shoppingCart.module.css"
import CartItem from "../CartItem"

const ShoppingCart = ({displayed}) => {
  const {cartTotal} = useContext(CartFunctionContext)

  return (
    <div className={styles.shoppingCartWrapper}>
      <div className={`${styles.shoppingCartContent} ${displayed ? styles.displayCart : ``}`}>
        <CartItem />
        <div className={styles.checkoutWrapper}>
          <span className={styles.totalPrice}>{cartTotal}</span>
          <NavLink className={styles.navItem} to={"/checkout"}>Checkout</NavLink>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart