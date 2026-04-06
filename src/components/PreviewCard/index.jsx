import { NavLink } from "react-router-dom"
import styles from "./previewCard.module.css"

const PreviewCard = ({addItems, randomPreviewProducts}) => {
  return (
    <div className={styles.previewContentWrapper}>
      {randomPreviewProducts.map((product, index) => (
        <div className={styles.previewProductCards} key={index}>
          <div className={styles.top}>
            <div className={styles.imageWrapper}>
              {product.image && <img src={product.image} alt={product.name} />}
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomDiv}>
              <p>{product.name}</p>
              <p>{product.price} SEK</p>
              <span onClick={() => addItems(product)}>Add to cart</span>
            </div>
            <NavLink className={styles.productNav} to={`/products/${product.category}/${product.name.toLowerCase().replace(/\s+/g, '')}`}>Read More</NavLink>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PreviewCard