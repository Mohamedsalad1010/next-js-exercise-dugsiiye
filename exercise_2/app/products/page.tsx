

const Products = async() => {
 const data = await fetch('https://dummyjson.com/products')
 const result = await data.json()
  return (
  <div>
    <ul>
        {result.products.slice(0,5).map(((p:any) => (
            <li key={p.id}>{p.title}</li>
        )))}
    </ul>
  </div>
  )
}

export default Products
