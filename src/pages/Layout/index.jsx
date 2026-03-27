import { Outlet } from "react-router-dom"
import styles from "./layout.module.css"
import Header from "../../components/Header"
import SideBar from "../../components/SideBar"
import Footer from "../../components/Footer"

const Layout = ({cart, updateCart}) => {
  return (
    <div className={styles.layoutWrapper}>
      <Header shoppingCart={cart} updateShoppingCart={updateCart} />
      <div className={styles.mainContent}>
        <SideBar />
        <div className={styles.pageContent}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout