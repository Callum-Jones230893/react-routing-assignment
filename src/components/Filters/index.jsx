import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { FilteringContext } from "../../context/FilteringContext"
import styles from "./filters.module.css"
import { AllProductContext } from "../../context/AllProductContext"

const Filters = () => {
  const {
    brandArray,
    colourArray
  } = useContext(AllProductContext)

  const { 
    filteredByBrand,
    filteredByColour, 
    handleBrand,
    handleColour,
  } = useContext(FilteringContext)

  return (
    <>
      <div className={styles.filterWrapper}>
        <p className={styles.filterGroup}>By Brand :</p>
        {brandArray.map(([key], index) => (
          <label key={index}>
            <NavLink className={styles.filterNav} to={`/products`}>
              <input type="checkbox" checked={filteredByBrand.includes(key)} onChange={() => handleBrand(key)}/>
              {key}
            </NavLink>
          </label>
        ))}
      </div>
      <div className={styles.filterWrapper}>
        <p className={styles.filterGroup}>By Color :</p>
        {colourArray.map(([key], index) => (
          <label key={index}>
            <NavLink className={styles.filterNav} to={`/products`}>
              <input type="checkbox" checked={filteredByColour.includes(key)} onChange={() => handleColour(key)}/>
              {key}
            </NavLink>
          </label>
        ))}
      </div>
    </>
  )
}

export default Filters