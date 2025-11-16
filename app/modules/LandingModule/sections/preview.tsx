import { useRef } from "react"
import { Button } from "~/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "~/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Navigate, useNavigate } from "react-router"

interface preview {
  title: string,
  desc: string,
  image: string,
  link: string,
  width: number,
  style: string
}

const previewItem: preview[] = [
  {
    title: 'Makan Enak Murah!',
    desc: 'Makanan bukan sekadar pengisi perut, tapi juga pengikat kebersamaan. Kami percaya, setiap hidangan yang dimasak dengan hati bisa menghadirkan senyum di meja makan.',
    image: '/ayamgeprek.png',
    link: '',
    width: 700,
    style: "rounded-full w-170 h-170 -right-10 top-0 bg-black/50 hidden lg:flex"
  },
  {
    title: 'Cuci Bersih Murah!',
    desc: 'Pakaian bersih itu bukan sekadar kebutuhan, tapi juga kenyamanan. Disini kami mencuci setiap helai pakaian Anda dengan perhatian, menjaga warna tetap cerah dan kain tetap lembut.',
    image: '/mesincuci.png',
    link: '',
    width: 680,
    style: "w-150 h-150 top-14 bg-black/20 hidden lg:flex"
  },
]

export const PreviewSection = () => {
  const navigate = useNavigate()
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section className="px-5 py-10 md:px-20 md:py-10 h-screen flex items-center">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {previewItem.map((item, index) => {
            return (
              <CarouselItem>
                <div
                  key={index}
                  className="relative bg-primary w-85 lg:w-auto rounded-lg flex p-10 lg:h-160"
                  id="preview"
                >
                  <div className="text-white flex flex-col max-w-190 justify-between">
                    <div className="flex flex-col gap-5">
                      <h1 className="font-bold max-w-60 lg:max-w-200 text-3xl lg:text-9xl z-30">{item.title}</h1>
                      <h2 className="max-w-60 lg:max-w-130 text-xs lg:text-base text-justify ml-1 lg:ml-3 z-30">{item.desc}</h2>
                    </div>  
                    <Button variant={'black'} size={'xl'} className="w-72 font-semibold scale-75 lg:scale-100 mt-3" onClick={() => {
                      navigate('/product')
                    }}>Cek Disini!</Button>  
                  </div>
                  <div>
                    <img src={item.image} alt="Ayam Geprek" width={item.width} className="absolute -right-25 -top-28 lg:-right-10 lg:-top-5 z-20 scale-50 lg:scale-100" />
                    <div className={`absolute z-10 blur-lg rotate-12 ${item.style}`}>a</div>
                  </div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </section>
  )
}