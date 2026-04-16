import styles from "./checkoutContent.module.css"
import CheckoutSummary from "../CheckoutSummary"
import ProductDisplay from "../ProductDisplay"

const CheckoutContent = () => {
  return (
    <div className={styles.checkoutWrapper}>
      <CheckoutSummary />
      <ProductDisplay />
    </div>
  )
}

export default CheckoutContent