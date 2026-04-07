import { Outlet, useParams } from "react-router-dom"
import ProductDisplay from "../../components/ProductDisplay"
import CategoryProducts from "../../components/CategoryProducts"

const Products = ({allProducts}) => {
  const {category, name} = useParams()

  const filteredProducts = category
    ? allProducts.filter(product => product.category === category)
    : allProducts

  return (
    <>
      {name ? <Outlet /> : category ? <CategoryProducts productArray={filteredProducts} /> : <ProductDisplay productArray={allProducts} />}
    </>
  )
}

export default Products