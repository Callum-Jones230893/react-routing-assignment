import { Outlet } from "react-router-dom"
import Layout from "../Layout"

const Account = () => {
  return(
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

export default Account