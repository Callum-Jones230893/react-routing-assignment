import { useContext } from "react"
import { CartFunctionContext } from "../../context/CartFunctionContext"
import styles from "./categoryProducts.module.css"
import ProductCard from "../ProductCard"

const CategoryProducts = ({productArray}) => {
  const {addToCart} = useContext(CartFunctionContext)

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