import { Outlet } from "react-router-dom"
import styles from "./layout.module.css"
import Header from "../../components/Header"
import SideBar from "../../components/SideBar"
import Footer from "../../components/Footer"

const Layout = ({productArray}) => {

  return (
    <div className={styles.layoutWrapper}>
      <Header products={productArray} />
      <div className={styles.mainContent}>
        <SideBar products={productArray} />
        <div className={styles.pageContent}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout