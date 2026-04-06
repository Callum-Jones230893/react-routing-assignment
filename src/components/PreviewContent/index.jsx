import PreviewCard from "../PreviewCard"
import styles from "./previewContent.module.css"

const PreviewContent = ({addToCart, previewProducts}) => {
  return (
    <div className={styles.previewWrapper}>
      <div className={styles.previewHeader}>
        <h4>Recommended Products</h4>
      </div>
      <PreviewCard addItems={addToCart} randomPreviewProducts={previewProducts} />
    </div>
  )
}

export default PreviewContent