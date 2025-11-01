import { useEffect } from "react"
import { Link, scroller } from "react-scroll"
import { Button } from "~/components/ui/button"

export const HeroSection = () => {
  useEffect(() => {
    scroller.scrollTo("hero", {
      smooth: true,
      duration: 800,
      delay: 0,
    })
  }, [])


  return (
    <section id="hero" className="px-20 py-3 relative bg-[url('/public/background.webp')] bg-cover bg-center h-screen font-sans">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className=" relative items-center justify-center text-white text-center w-full gap-10 flex flex-col z-20 top-1/2 -translate-y-1/3">
        <div className="w-full flex flex-col gap-3">
          <h1 className="text-6xl font-bold relative z-30">Temukan Rasa dan Kenyamanan dari <br />
            UMKM di Sekitar Kita
            <span className="absolute border-b-25 border-primary/80 bottom-0 right-[380px] w-[330px] -z-10"></span>
          </h1>
          <h2>Dari makanan lezat sampai laundry kilat, semuanya bisa kamu temuin di satu tempat!</h2>
        </div>
        <Link
          to={"preview"}
          smooth={true}
          duration={500}
        >
          <Button
            variant={'ghost'}
            size={'xl'}
            className="px-5 hover:scale-105 active:scale-100"
          >
            <span
              className="flex items-center bg-primary rounded-full w-5 h-5 justify-center"
            >
              &darr;
            </span>
            Jelajahi Direktori
          </Button>
        </Link>
      </div>
    </section>
  )
}