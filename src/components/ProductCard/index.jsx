import styles from "./productCard.module.css"

const ProductCard = ({product, addItems}) => {

  return (
    <div className={styles.productCard}>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <span onClick={() => addItems(product)}>Add to cart</span>
    </div>
  )
}

export default ProductCard