import styles from "./categoryProducts.module.css"
import ProductCard from "../ProductCard"

const CategoryProducts = ({addToCart, productArray}) => {

  return (
    <div className={styles.displayWrapper}>
      <h3>{productArray[0]?.category}</h3>
      <div className={styles.displayInnerWrapper}>
        {productArray.map((product, index) => (
          <ProductCard key={index} product={product} addItems={addToCart} allProducts={productArray} />
        ))}
      </div>
    </div>
  )
}

export default CategoryProducts