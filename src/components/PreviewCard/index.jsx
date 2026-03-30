import { useEffect } from "react"
import styles from "./previewCard.module.css"
import randomProduct from "../../utils/randomProduct"

const PreviewCard = ({addItems}) => {
  const displayedProduct = randomProduct(4)

  return (
    <div className={styles.previewContentWrapper}>
      {displayedProduct.map((product, index) => (
        <div className={styles.previewProductCards} key={index}>
          <div className={styles.top}>
            <div className={styles.imageWrapper}>
              {product.image && <img src={product.image} alt={product.name} />}
            </div>
          </div>
          <div className={styles.bottom}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <span onClick={() => addItems(product)}>Add to cart</span>
          </div>
        </div>
      ))}
    </div>

  )
}

export default PreviewCard