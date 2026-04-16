import { useContext } from "react"
import { CartFunctionContext } from "../../context/CartFunctionContext"
import { PlusSquareIcon, MinusSquareIcon } from "@phosphor-icons/react"
import styles from "./checkoutSummary.module.css"
import ReturnButton from "../ReturnButton"

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
                    <span onClick={() => {removeFromCart(product)}}>
                      <MinusSquareIcon className={styles.qtyToggle} size={18} />
                    </span>
                    <div>{product.quantity}</div>
                    <span onClick={() => {addToCart(product)}}>
                      <PlusSquareIcon className={styles.qtyToggle} size={18} />
                    </span>
                  </div>
                  <span className={styles.checkoutItemRemove} onClick={() => {removeFromCart(product)}}>Remove</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.totalPrice}>
        <span>{cartTotal}</span>
        <ReturnButton />
      </div>
    </>
  )
}

export default CheckoutSummary