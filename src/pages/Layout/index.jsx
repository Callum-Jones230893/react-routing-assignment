import styles from "./layout.module.css"
import Header from "../../components/Header"
import SideBar from "../../components/SideBar"
import Footer from "../../components/Footer"

const Layout = ({children}) => {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <div className={styles.mainContent}>
        <SideBar />
        <div className={styles.pageContent}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout