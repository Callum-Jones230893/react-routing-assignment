import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartFunctionContext } from "../../context/CartFunctionContext"
import styles from "./productCard.module.css"

const ProductCard = ({product}) => {
  const {addToCart} = useContext(CartFunctionContext)

  return (
    <div className={styles.productCard}>
      <div className={styles.top}>
        <div className={styles.imageWrapper}>
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomDiv}>
          <p>{product.name}</p>
          <p>{product.price} SEK</p>
          <span onClick={() => addToCart(product)}>Add to cart</span>
          <NavLink className={styles.productNav} to={`/products/${product.category}/${product.name.toLowerCase().replace(/\s+/g, '')}`}>Read More</NavLink>
        </div>
      </div>
    </div>
  )
}

export default ProductCard