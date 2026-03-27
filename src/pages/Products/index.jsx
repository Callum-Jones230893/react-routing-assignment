import { Outlet } from "react-router-dom"
import Layout from "../Layout"
import ProductDisplay from "../../components/ProductDisplay"

const Products = () => {

  return (
    <>
      <ProductDisplay />
      <Outlet />
    </>
  )
}

export default Products