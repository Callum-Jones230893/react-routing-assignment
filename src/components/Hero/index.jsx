import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartFunctionContext } from "../../context/CartFunctionContext"
import styles from "./hero.module.css"

const Hero = ({hero}) => {
  const {addToCart} = useContext(CartFunctionContext)

  return (
    <>
      {hero.map((product, index) => (
        <div className={styles.heroWrapper} key={index}>
          <div className={styles.mainCardWrapper} >
            <div className={styles.mainCardInnerWrapper}>
              <h3 className={styles.newItemsTitle}>New Product!</h3>
              <h2 className={styles.heroTitle}>{product.name}</h2>
              <p className={styles.heroInformation}>{product.description}</p>
              <span onClick={() => addToCart(product)}>Add to cart - {product.price} SEK</span>
            </div>
          </div>
          <div className={styles.sideCard} key={index}>
            <div className={styles.sideCardInnerWrapper}>
              <h3 className={styles.newItemsContents}>Contents</h3>
              <p className={styles.heroContents}>{product.contents}</p>
            </div>
            <NavLink className={styles.productNav} to={`/products/${product.category}/${product.name.toLowerCase().replace(/\s+/g, '')}`}>Read More</NavLink>
          </div>
      </div>
      ))}
    </>
  )
}

export default Hero