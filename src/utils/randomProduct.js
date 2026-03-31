const randomProduct = (allProducts, number) => {
  const randomizedProduct = [...allProducts].sort(() => 0.5 - Math.random())

  return number ? randomizedProduct.slice(0, number) 
                : randomizedProduct
}

export default randomProduct