import styles from "./productCard.module.css"
import useProducts from "../../hooks/fetch"

const ProductCard = ({product}) => {

  return (
    <div className={styles.productCard}>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductCard