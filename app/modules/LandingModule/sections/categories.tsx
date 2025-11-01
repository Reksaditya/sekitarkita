import { Title } from "~/components/ui/title"
import { Recomendation } from "~/modules/ProductModule/data/productData"

export const CategoriesSection = () => {
  return (
    <section className="px-20 flex flex-col gap-10 py-10">
      <Title title="Kategori UMKM" />
      <div className="flex gap-5">
        <div className="rounded-lg relative overflow-hidden h-75 cursor-pointer hover:scale-105 transition duration-500">
          <div className="absolute inset-0 bg-black/50 z-20 hover:bg-primary/70 transition duration-500"></div>
          <img src="/public/laundry.png" alt="laundry" className="object-cover object-center" width={700} />
          <div className="font-semibold overflow-hidden h-full w-full top-60 inset-0 absolute">
            <h3 className="absolute z-30 inset-0 text-white bg-primary w-fit h-fit px-5 py-2 rounded-lg text-lg left-1/2 -translate-x-1/2">Laundry</h3>
          </div>
        </div>
        <div className="rounded-lg relative overflow-hidden h-75 cursor-pointer hover:scale-105 transition duration-500">
          <div className="absolute inset-0 bg-black/50 z-20 hover:bg-primary/70 transition duration-500"></div>
          <img src="/public/makanan.png" alt="makanan" className="object-cover object-center" width={700} />
          <div className="font-semibold overflow-hidden h-full w-full top-60 inset-0 absolute">
            <h3 className="absolute z-30 inset-0 text-white bg-primary w-fit h-fit px-5 py-2 rounded-lg text-lg left-1/2 -translate-x-1/2">Makanan</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h3 className="font-semibold text-3xl">Rekomendasi dari Kami</h3>
        <div className="flex justify-between">
          {Recomendation.map((item) => {
            return (
              <div className="flex flex-col justify-center items-center bg-white shadow-xl w-80 h-80 rounded-xl">
                <img src={item.image} alt={item.name} width={200} />
                <h3>{item.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}