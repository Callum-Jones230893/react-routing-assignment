import { ArrowFatLinesDownIcon, ArrowFatLinesUpIcon } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"
import { pages } from "../../data/data"
import styles from "./dropDownMenu.module.css"
import DropDownSubMenu from "../DropDownSubMenu"

const DropDownMenu = ({menuDisplay, toggleMenu, toggleSubMenu, displaySub, updateMenu, updateSubMenu}) => {

  const closeMenu = () => {
    updateMenu(!menuDisplay)
    updateSubMenu(!displaySub)
  }

  return (
    <div className={styles.dropDownWrapper}>
      {!menuDisplay ? <ArrowFatLinesDownIcon size={28} className={styles.dropDownIcon} onClick={toggleMenu} />
                    : <ArrowFatLinesUpIcon size={28} className={styles.dropDownIcon} onClick={toggleMenu} />}
      {menuDisplay && (
        <div className={styles.dropDownOverlay} onClick={closeMenu}></div>
      )}
      <div className={`${styles.dropDownContent} ${menuDisplay ? styles.displayDropDown : ``}`}>
        {pages.map((navigation, index) => (
          <div key={index} className={styles.navItemWrapper}>
            <NavLink className={styles.navItem} to={`/${navigation.page}`} onClick={toggleMenu}>
              {navigation.name}
            </NavLink>
          </div>
        ))}
        <DropDownSubMenu 
          toggleMenu={toggleMenu}
          toggleSub={toggleSubMenu}
          displaySubMenu={displaySub}
        />
      </div>
    </div>
  )
}

export default DropDownMenu