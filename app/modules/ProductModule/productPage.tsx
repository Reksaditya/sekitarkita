import { Button } from "~/components/ui/button"
import { productData } from "./data/productData"
import { useNavigate } from "react-router-dom"
import { Badge } from "~/components/ui/badge";

export const ProductSection = () => {
  const navigate = useNavigate();

  return (
    <section className="md:px-20 px-5 py-10">
      {/* <div className="flex z-20">
        <h1>Mau Makan Apa Hari Ini?</h1>
      </div> */}
      <div className="grid md:grid-cols-4 gap-10">
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
                  navigate(`/${item.id.toString()}`);
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