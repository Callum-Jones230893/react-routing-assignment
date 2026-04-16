import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { FilteringContext } from "../../context/FilteringContext"
import styles from "./productDisplay.module.css"
import ProductCard from "../ProductCard"
import useViewedProducts from "../../hooks/useViewedProducts"

const ProductDisplay = ({preview}) => {
  const location = useLocation()
  const path = location.pathname

  const {filteredProducts} = useContext(FilteringContext)
  const {recommended} = useViewedProducts()

  return (
    <div className={styles.displayWrapper}>
      {path === "/" && (
        <>
          <h3>Preview Products</h3>
          <div className={styles.displayInnerWrapper}>
            {preview.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </>
      )}
      {path === "/products" && (
        <>
          <h3>All Products</h3>
          <div className={styles.displayInnerWrapper}>
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </>
      )}
      {path === "/checkout" && (
        <>
          <h3>Suggested Products</h3>
          <div className={styles.displayInnerWrapper}>
            {recommended.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}


export default ProductDisplay