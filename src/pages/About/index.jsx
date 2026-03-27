import { Outlet } from "react-router-dom"
import Layout from "../Layout"

const About = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

export default About