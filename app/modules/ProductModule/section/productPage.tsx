import { Button } from "~/components/ui/button"
import { productData } from "../data/productData"
import { useNavigate } from "react-router"
import { Badge } from "~/components/ui/badge";

export const ProductSection = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/product/${id}`)
  }

  return (
    <section className="px-20 py-10">
      <div className="grid grid-cols-4 gap-10">
        {productData.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col shadow-lg rounded-xl items-center overflow-hidden"
            >
              <img src={item.image} alt={item.name} width={400} className="rounded-xl" />
              <div className="flex flex-col items-start w-full gap-5 p-5">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <h4 className="text-gray-700">{item.operation}</h4>
                  <Badge>{item.status}</Badge>
                </div>
                <Button variant={"outline"} className="text-primary font-bold w-full" onClick={() => {
                  handleClick(item.id)
                }}
                >
                  Lihat Selengkapnya
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
} 