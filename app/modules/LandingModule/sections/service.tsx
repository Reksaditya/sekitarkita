import { Title } from "~/components/ui/title"

interface serviceProps {
  title: string,
  desc: string,
  image: string
}

const serviceItems: serviceProps[] = [
  {
    title: "Harga Bersahabat",
    desc: "Kualitas terbaik tidak harus mahal karena kepuasan pelanggan adalah prioritas kami.",
    image: "money"
  },
  {
    title: "Contact Delivery",
    desc: "Kami memiliki contact delivery  yang dapat membantu anda.",
    image: "contact"
  },
  {
    title: "Informasi Up-to-date",
    desc: "layanan informasi yang di update secara berkala terkait UMKM.",
    image: "clock"
  }
]

export const ServiceSection = () => {
  return (
    <section className="px-20 flex flex-col gap-10 py-20">
      <Title title="Layanan Kami" />
      <div

        className="w-full flex justify-between items-center"
      >
      {serviceItems.map((item, index) => {
        return (
            <div
              key={index}
              className="w-96 h-96 flex flex-col items-center justify-center bg-white shadow-2xl rounded-3xl gap-5 text-center p-10 border cursor-pointer hover:scale-105 duration-500"
            >
              <img src={`/public/${item.image}.png`} alt={item.image} />
              <h2 className="font-semibold">{item.title}</h2>
              <p className="">{item.desc}</p>
            </div>
        )
      })}
      </div>
    </section>
  )
}