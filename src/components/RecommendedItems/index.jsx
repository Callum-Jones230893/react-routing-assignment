import styles from "./recommendedItems.module.css"
import RandomProductCard from "../RandomProductCard"

const RecommendedItems = () => {
  return (
    <div className={styles.recommendedWrapper}>
      <div className={styles.recommendedHeader}>
        <h4>Recommended Products</h4>
      </div>
      <RandomProductCard />
    </div>
  )
}

export default RecommendedItems