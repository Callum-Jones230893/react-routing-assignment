import { ArrowFatLinesDownIcon, ArrowFatLinesUpIcon } from "@phosphor-icons/react"
import styles from "./dropDownMenu.module.css"

const DropDownMenu = () => {
  return (
    <div className={styles.dropDownWrapper}>
      <ArrowFatLinesDownIcon size={32} />
    </div>
  )
}

export default DropDownMenu