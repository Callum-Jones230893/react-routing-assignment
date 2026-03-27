import styles from "./previewCard.module.css"

const PreviewCard = () => {
  return (
    <div className={styles.previewContentWrapper}>
      <div className={styles.previewProductCards}>
        <div>
          <img src="" alt="" />
        </div>
        <span>faction Placeholder</span>
        <span>product name placeholder</span>
        <span>price placeholder</span>
        <span>add to cart</span>
      </div>
      <div className={styles.previewProductCards}>
        <div>
          <img src="" alt="" />
        </div>
        <span>faction Placeholder</span>
        <span>product name placeholder</span>
        <span>price placeholder</span>
        <span>add to cart</span>
      </div>
      <div className={styles.previewProductCards}>
        <div>
          <img src="" alt="" />
        </div>
        <span>faction Placeholder</span>
        <span>product name placeholder</span>
        <span>price placeholder</span>
        <span>add to cart</span>
      </div>
      <div className={styles.previewProductCards}>
        <div>
          <img src="" alt="" />
        </div>
        <span>faction Placeholder</span>
        <span>product name placeholder</span>
        <span>price placeholder</span>
        <span>add to cart</span>
      </div>
    </div>

  )
}

// randomize 4 products, map over them and then display. So only code it once with a map function

export default PreviewCard