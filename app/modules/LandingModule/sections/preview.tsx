import { useRef } from "react"
import { Button } from "~/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "~/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface preview {
  title: string,
  desc: string,
  image: string,
  link: string,
  style: string
}

const previewItem: preview[] = [
  {
    title: 'Makan Enak Murah!',
    desc: 'Makanan bukan sekadar pengisi perut, tapi juga pengikat kebersamaan. Kami percaya, setiap hidangan yang dimasak dengan hati bisa menghadirkan senyum di meja makan.',
    image: '/public/ayamgeprek.png',
    link: '',
    style: "rounded-full w-170 h-170 -right-10 top-0 bg-black/50"
  },
  {
    title: 'Cuci Bersih Murah!',
    desc: 'Pakaian bersih itu bukan sekadar kebutuhan, tapi juga kenyamanan. Disini kami mencuci setiap helai pakaian Anda dengan perhatian, menjaga warna tetap cerah dan kain tetap lembut.',
    image: '/public/mesincuci.png',
    link: '',
    style: "w-150 h-150 top-14 bg-black/20"
  },
]

export const PreviewSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section className="px-20 py-10 h-screen flex items-center">
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
                  className="relative bg-primary rounded-lg flex p-10 h-160"
                  id="preview"
                >
                  <div className="text-white flex flex-col max-w-190 justify-between">
                    <div className="flex flex-col gap-5">
                      <h1 className="font-bold text-9xl">{item.title}</h1>
                      <h2 className="max-w-130 text-justify ml-3">{item.desc}</h2>
                    </div>
                    <Button variant={'secondary'} size={'xl'} className="w-72 text-primary font-semibold">Cek Disini!</Button>
                  </div>
                  <div>
                    <img src={item.image} alt="Ayam Geprek" width={700} className="absolute -right-10 -top-1 z-20" />
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