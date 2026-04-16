import styles from "./header.module.css"
import Logo from "../Logo"
import Navigation from "../Navigation"

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Logo />
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>The Warpstone Emporium</h1>
      </div>
      <Navigation />
    </div>
  )
}

export default Header