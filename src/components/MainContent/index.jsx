import styles from "./mainContent.module.css"
import Hero from "../Hero"
import PreviewContent from "../PreviewContent"

const MainContent = () => {
  return (
    <div className={styles.mainWrapper}>
      <Hero />
      <PreviewContent />
    </div>
  )
}

export default MainContent