import { useContext } from "react"
import { Outlet, useParams } from "react-router-dom"
import { AllProductContext } from "../../context/AllProductContext"
import ProductDisplay from "../../components/ProductDisplay"
import CategoryProducts from "../../components/CategoryProducts"

const Products = () => {
  const {category, name} = useParams()
  const {allProductsArray} = useContext(AllProductContext)

  const filteredProducts = category
    ? allProductsArray.filter(product => product.category === category)
    : allProductsArray

  return (
    <>
      {name ? <Outlet /> : category ? <CategoryProducts productArray={filteredProducts} /> : <ProductDisplay />}
    </>
  )
}

export default Products