import { useState } from "react"
import { Outlet } from "react-router-dom"
import styles from "./layout.module.css"
import Header from "../../components/Header"
import SideBar from "../../components/SideBar"
import Footer from "../../components/Footer"

const Layout = ({cartItems, updateCartItems}) => {

  return (
    <div className={styles.layoutWrapper}>
      <Header cart={cartItems} updateCart={updateCartItems} />
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