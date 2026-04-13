import styles from "./mainContent.module.css"
import Hero from "../Hero"
import PreviewContent from "../PreviewContent"

const MainContent = ({heroItem, previewItems}) => {
  return (
    <div className={styles.mainWrapper}>
      <Hero hero={heroItem} />
      <PreviewContent preview={previewItems} />
    </div>
  )
}

export default MainContent