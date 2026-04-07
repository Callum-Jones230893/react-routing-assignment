import PreviewCard from "../PreviewCard"
import styles from "./previewContent.module.css"

const PreviewContent = () => {
  return (
    <div className={styles.previewWrapper}>
      <div className={styles.previewHeader}>
        <h4>Recommended Products</h4>
      </div>
      <PreviewCard />
    </div>
  )
}

export default PreviewContent