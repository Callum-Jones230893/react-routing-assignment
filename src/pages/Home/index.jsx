import { Outlet } from "react-router-dom"
import Layout from "../Layout"
import MainContent from "../../components/MainContent"

const Home = () => {

  return (
    <>
      <MainContent />
      <Outlet />
    </>
  )
}

export default Home