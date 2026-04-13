import { useContext } from "react"
import { CartFunctionContext } from "../../context/CartFunctionContext"
import styles from "./checkoutSummary.module.css"

const CheckoutSummary = () => {
  const {shoppingCart, addToCart, removeFromCart, cartTotal} = useContext(CartFunctionContext)

  return (
    <>
      <div className={styles.checkoutSummaryWrapper}>
        <div>
          <h3 className={styles.cartTitle}>Your Cart</h3>
          <div className={styles.checkoutInnerWrapper}>
            <div className={styles.checkoutItemWrapper}>
              {shoppingCart.map((product) =>
                <>
                  <p className={styles.checkoutItemName}>{product.name}</p>
                  <p className={styles.checkoutItemPrice}>{product.price * product.quantity}</p>
                  <div className={styles.itemQtyContainer}>
                    <span className={styles.qtyToggle}>-</span>
                    <div>{product.quantity}</div>
                    <span>+</span>
                  </div>
                  <span className={styles.checkoutItemRemove} onClick={() => {removeFromCart(product)}}>Remove</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <span className={styles.totalPrice}>{cartTotal}</span>
    </>
  )
}

export default CheckoutSummary