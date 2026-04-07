import styles from "./header.module.css"
import Logo from "../Logo"
import Navigation from "../Navigation"

const Header = ({products}) => {
  return (
    <div className={styles.headerWrapper}>
      <Logo />
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Welcome</h1>
      </div>
      <Navigation productArray={products} />
    </div>
  )
}

export default Header