import { useParams } from "react-router-dom"
import styles from "./productDisplay.module.css"
import ProductCard from "../ProductCard"
import useProducts from "../../hooks/fetch"

const ProductDisplay = () => {
  const { category } = useParams()
  const { miniatures, paints, paintingAccessories} = useProducts()

  const allProducts = [...miniatures, ...paints, ...paintingAccessories]
  
  const filteredProducts = category
    ? allProducts.filter(p => p.category === category)
    : allProducts

  return (
    <div className={styles.displayWrapper}>
      <div>
        <h3>{allProducts[0]?.category}</h3>
      </div>
      <div className={styles.displayInnerWrapper}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductDisplay