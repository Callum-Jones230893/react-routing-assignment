import { ArrowFatLinesDownIcon, ArrowFatLinesUpIcon } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"
import { pages } from "../../data/data"
import styles from "./dropDownMenu.module.css"

const DropDownMenu = ({menuDisplay, toggleCart, toggleMenu}) => {
  return (
    <div className={styles.dropDownWrapper}>
      {!menuDisplay ? <ArrowFatLinesDownIcon size={28} onClick={toggleMenu} />
                    : <ArrowFatLinesUpIcon size={28} onClick={toggleMenu} />}
      {menuDisplay && (<div className={styles.dropDownOverlay} onClick={toggleMenu}></div>)}
      <div className={`${styles.dropDownContent} ${menuDisplay ? styles.displayDropDown : ``}`}>
        {pages.map((navigation, index) => (
          <div key={index}>
            <NavLink className={styles.navItem} to={`/${navigation.page}`}>{navigation.name}</NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropDownMenu