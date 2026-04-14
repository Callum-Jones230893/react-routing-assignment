import { useContext } from "react"
import { AllProductContext } from "../../context/AllProductContext"
import styles from "./productDisplay.module.css"
import ProductCard from "../ProductCard"

const ProductDisplay = () => {
  const {allProductsArray} = useContext(AllProductContext)
  
  return (
    <div className={styles.displayWrapper}>
      <h3>{allProductsArray[0]?.category}</h3>
      <div className={styles.displayInnerWrapper}>
        {allProductsArray.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductDisplay