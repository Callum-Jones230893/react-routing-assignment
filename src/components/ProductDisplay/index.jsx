import { useParams } from "react-router-dom"
import styles from "./productDisplay.module.css"
import ProductCard from "../ProductCard"
import useProducts from "../../hooks/fetch"

const ProductDisplay = ({category, cart, setCart, addToCart}) => {
  const { miniatures, paints, paintingAccessories} = useProducts()

  const allProducts = [...miniatures, ...paints, ...paintingAccessories]
  
  const filteredProducts = category
    ? allProducts.filter(product => product.category === category)
    : allProducts

  return (
    <div className={styles.displayWrapper}>
        <h3>{allProducts[0]?.category}</h3>
      <div className={styles.displayInnerWrapper}>
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} addItems={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default ProductDisplay