import { Outlet, useParams } from "react-router-dom"
import ProductDisplay from "../../components/ProductDisplay"
import CategoryProducts from "../../components/CategoryProducts"

const Products = ({cartItems, updateCartItems, addItem, allProducts}) => {
  const { category, name } = useParams()

  const filteredProducts = category
    ? allProducts.filter(product => product.category === category)
    : allProducts

  if (name) return <Outlet />

  return (
    <>
      {category
        ? <CategoryProducts
            addToCart={addItem}
            productArray={filteredProducts}
          />
        : <ProductDisplay 
            addToCart={addItem}
            productArray={allProducts}
          />
      }
    </>
  )
}

export default Products