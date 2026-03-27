import { Outlet } from "react-router-dom"
import Layout from "../Layout"
import MainContent from "../../components/MainContent"

const Home = () => {

  return (
    <>
      <Layout>
        <MainContent />
        <Outlet />
      </Layout>
    </>
  )
}

export default Home