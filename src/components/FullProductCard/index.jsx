import styles from "./fullProduct.module.css"

const FullProductCard = ({product, addItems}) => {
  return (
    <div className={styles.fullProductWrapper}>
      <div className={styles.top}>
        <div className={styles.imageWrapper}>
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div>{product.name}</div>
        <div>{`${product.faction ? product.faction : ""}`}</div>
        <div>{product.description}</div>
        <div>{product.information}</div>
        <div>{product.contents}</div>
        <div>{product.price}</div>
        <span onClick={() => addItems(product)}>Add to cart</span>
      </div>
    </div>
  )
}

export default FullProductCard