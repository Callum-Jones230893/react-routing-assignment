 import { useContext } from "react"
import { CartFunctionContext } from "../../context/CartFunctionContext"
import styles from "./fullProduct.module.css"
import ReturnButton from "../ReturnButton"

const FullProductCard = ({product}) => {
  const {addToCart} = useContext(CartFunctionContext)

  return (
    <div className={styles.fullProductWrapper}>
      <div className={styles.top}>
        <div className={styles.imageWrapper}>
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.textWrapper}>
          <p>{product.name}</p>
          <p>{`${product.faction ? product.faction : ""}`}</p>
          <p>{product.description}</p>
          <p>{product.information}</p>
          <p>{product.contents}</p>
        </div>
        <div className={styles.clickWrapper}>
          <p>{product.price} :-</p>
          <span onClick={() => addToCart(product)}>Add to cart</span>
          <ReturnButton />
        </div>
      </div>
    </div>
  )
}

export default FullProductCard