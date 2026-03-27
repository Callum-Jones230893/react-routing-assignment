export const pages = [
  {"id" : 1, "page" : "", "name" : "Home"},
  {"id" : 3, "page" : "Login", "name" : "Login"},
  {"id" : 2, "page" : "About", "name" : "About"},
]

function Category(id, name, value) {
  this.id = id,
  this.name = name,
  this.value = value
}

const Miniatures = new Category(
  "1",
  "Miniatures",
  "Miniatures"
)
const Paints = new Category(
  "2",
  "Paints",
  "Paints"
)
const Accessories = new Category(
  "3",
  "Accessories",
  "Accessories"
)

export const categories = [Miniatures, Paints, Accessories]