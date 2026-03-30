import { Outlet } from "react-router-dom"
import MainContent from "../../components/MainContent"

const Home = ({addItem}) => {

  return (
    <>
      <MainContent  addItems={addItem} />
      <Outlet />
    </>
  )
}

export default Home