import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"
import styles from "./logo.module.css"

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <NavLink to="/">
        <img className={styles.logoImage} src={logo} alt="Warpstone Emporium" />
      </NavLink>
    </div>
  )
}

export default Logo