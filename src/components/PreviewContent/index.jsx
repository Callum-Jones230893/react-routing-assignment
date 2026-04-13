import PreviewCard from "../PreviewCard"
import styles from "./previewContent.module.css"

const PreviewContent = ({preview}) => {
  return (
    <div className={styles.previewWrapper}>
      <div className={styles.previewHeader}>
        <h4>Featured Products</h4>
      </div>
      <PreviewCard previewDisplay={preview} />
    </div>
  )
}

export default PreviewContent