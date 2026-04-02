import { NavLink } from "react-router-dom"
import styles from "./productCard.module.css"

const ProductCard = ({product, addItems}) => {

  return (
    <div className={styles.productCard}>
      <div className={styles.top}>
        <div className={styles.imageWrapper}>
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className={styles.bottom}>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <span onClick={() => addItems(product)}>Add to cart</span>
        <NavLink to={`/products/${product.category}/${product.name.toLowerCase().replace(/\s+/g, '')}`}>Read More</NavLink>
      </div>
    </div>
  )
}

export default ProductCard