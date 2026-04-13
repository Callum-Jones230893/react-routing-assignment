import { useContext } from "react"
import { FilteringContext } from "../../context/FilteringContext"
import styles from "./filters.module.css"

const Filters = () => {
  const {
    filteredByPrice,
    filteredByBrand,
    filteredByColour,
    setFilteredByPrice,
    setFilteredByBrand,
    setFilteredByColour,
    priceFilter, 
    brandFilter,
    colourFilter,
    handleBrand
  } = useContext(FilteringContext)

  return (
    <>
      <div className={styles.filterWrapper}>
        <p className={styles.filterGroup}>By Price : </p>
        <label>
          <input type="checkbox" name="" id="" /> 0 - 300kr
        </label>
      </div>
      <div className={styles.filterWrapper}>
        <p className={styles.filterGroup}>By Brand :</p>
        <label>
          <input type="checkbox" name="" id="" /> Games Workshop
        </label>
      </div>
      {/* useLocation for paints only and put in datafile to loop through*/}
      <div className={styles.filterWrapper}>
        <p className={styles.filterGroup}>By Color :</p>
        <label>
          <input type="checkbox" name="" id="" /> Black
        </label>
      </div>
    </>
  )
}

export default Filters