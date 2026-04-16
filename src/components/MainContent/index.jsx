import styles from "./mainContent.module.css"
import Hero from "../Hero"
import ProductDisplay from "../ProductDisplay"

const MainContent = ({heroItem, previewItems}) => {
  return (
    <div className={styles.mainWrapper}>
      <Hero hero={heroItem} />
      <ProductDisplay preview={previewItems} />
    </div>
  )
}

export default MainContent