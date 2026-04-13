import styles from "./checkoutContent.module.css"
import CheckoutSummary from "../CheckoutSummary"
import RecommendedItems from "../RecommendedItems"

const CheckoutContent = ({recommendedProducts}) => {
  return (
    <div className={styles.checkoutWrapper}>
      <CheckoutSummary />
      <RecommendedItems recommended={recommendedProducts} />
    </div>
  )
}

export default CheckoutContent