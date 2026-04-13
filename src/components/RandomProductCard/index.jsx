import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartFunctionContext } from "../../context/CartFunctionContext"
import useViewedProducts from "../../hooks/useViewedProducts"
import styles from "./randomProductCard.module.css"

const RandomProductCard = ({}) => {
  const {addToCart} = useContext(CartFunctionContext)
  const {mostViewedFilter, secondMostFilter} = useViewedProducts()

  return (
    <div className={styles.randomContentWrapper}>
      {/* {mostViewedFilter.map((product, index) => (
        <div className={styles.randomProductCards} key={index}>
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
            </div>
            <NavLink className={styles.productNav} to={`/products/${product.category}/${product.name.toLowerCase().replace(/\s+/g, '')}`}>Read More</NavLink>
          </div>
        </div>
      ))} */}
    </div>
  )
}

export default RandomProductCard