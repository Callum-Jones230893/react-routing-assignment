import { Outlet } from "react-router-dom"
import Layout from "../Layout"
import ProductDisplay from "../../components/ProductDisplay"

const Products = () => {

  return (
    <Layout>
      <ProductDisplay />
      <Outlet />
    </Layout>
  )
}

export default Products