import styles from "./mainContent.module.css"
import Hero from "../Hero"
import PreviewContent from "../PreviewContent"

const MainContent = ({addItems, randomHeroProduct, randomPreviewItems}) => {
  return (
    <div className={styles.mainWrapper}>
      <Hero addToCart={addItems} heroProduct={randomHeroProduct} />
      <PreviewContent addToCart={addItems} previewProducts={randomPreviewItems} />
    </div>
  )
}

export default MainContent