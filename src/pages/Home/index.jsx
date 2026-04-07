import { Outlet } from "react-router-dom"
import MainContent from "../../components/MainContent"

const Home = ({heroItem, previewItems}) => {

  return (
    <>
      <MainContent randomHeroProduct={heroItem} randomPreviewItems={previewItems} />
      <Outlet />
    </>
  )
}

export default Home