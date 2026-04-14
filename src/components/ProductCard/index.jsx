import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartFunctionContext } from "../../context/CartFunctionContext"
// import useViewedProducts from "../../hooks/useViewedProducts"
import styles from "./productCard.module.css"

const ProductCard = ({product}) => {
  const {addToCart} = useContext(CartFunctionContext)
  // const {recommended} = useViewedProducts()

  return (
    <div className={styles.productCard}>
      <div className={styles.top}>
        <div className={styles.imageWrapper}>
          {product.image && <img src={product.image} alt={product.name} />}
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