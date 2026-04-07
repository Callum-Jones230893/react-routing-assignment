import styles from "./productDisplay.module.css"
import ProductCard from "../ProductCard"

const ProductDisplay = ({productArray}) => {
  return (
    <div className={styles.displayWrapper}>
      <h3>{productArray[0]?.category}</h3>
      <div className={styles.displayInnerWrapper}>
        {productArray.map((product, index) => (
          <ProductCard key={index} product={product} allProducts={productArray} />
        ))}
      </div>
    </div>
  )
}

export default ProductDisplay