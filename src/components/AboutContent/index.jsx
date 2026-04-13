import styles from "./aboutContent.module.css"

const AboutContent = () => {
  return (
    <>
      <h2 className={styles.aboutTitle}>About us</h2>
      <div className={styles.aboutContentWrapper}>
        <p className={styles.aboutText}>
          At The Warpstone Emporium, we live and breathe the hobby. Born from a passion for miniature wargaming and the art of painting, we set out to create the go-to destination for hobbyists in Stockholm and beyond.
          Whether you're a seasoned general marshalling veteran armies or a newcomer taking your first steps into the hobby, we stock everything you need — from the finest miniatures and starter sets to professional-grade paints, brushes, and tools.
          We believe the hobby is about more than just the game. It's about the craft, the community, and the stories told through every carefully painted model. That's why alongside our catalogue we offer painting guides, faction advice, and a community space for hobbyists to connect.
          Welcome to the Emporium. Your next great army starts here.
        </p>
      </div>
    </>
  )
}

export default AboutContent