import styles from "./productDisplay.module.css"
import ProductCard from "../ProductCard"

const ProductDisplay = ({category, addToCart, productArray}) => {
  
  const filteredProducts = category
    ? productArray.filter(product => product.category === category)
    : productArray

  return (
    <div className={styles.displayWrapper}>
        <h3>{productArray[0]?.category}</h3>
      <div className={styles.displayInnerWrapper}>
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} addItems={addToCart} allProducts={productArray} />
        ))}
      </div>
    </div>
  )
}

export default ProductDisplay