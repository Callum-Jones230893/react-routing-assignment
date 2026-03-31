import { Outlet } from "react-router-dom"
import MainContent from "../../components/MainContent"

const Home = ({addItem, heroItem, previewItems}) => {

  return (
    <>
      <MainContent  addItems={addItem} randomHeroProduct={heroItem} randomPreviewItems={previewItems} />
      <Outlet />
    </>
  )
}

export default Home