import { useEffect } from "react"
import styles from "./mainContent.module.css"
import randomProduct from "../../utils/randomProduct"
import Hero from "../Hero"
import PreviewContent from "../PreviewContent"

const MainContent = ({addItems}) => {

  return (
    <div className={styles.mainWrapper}>
      <Hero addToCart={addItems} />
      <PreviewContent addToCart={addItems} />
    </div>
  )
}

export default MainContent