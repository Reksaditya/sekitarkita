import { productData } from "../data/productData"

export const ProductSection = () => {
  return (
    <section>
      {productData.map((item) => {
        return (
          <div
            key={item.id}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        )
      })}
    </section>
  )
} 