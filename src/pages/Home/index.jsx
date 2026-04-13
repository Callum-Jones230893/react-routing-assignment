import MainContent from "../../components/MainContent"

const Home = ({randomHero, randomPreview}) => {

  return (
    <MainContent heroItem={randomHero} previewItems={randomPreview} />
  )
}

export default Home