import { Title } from "~/components/ui/title"

export const AboutSection = () => {
  return (
    <section className="flex flex-col items-center justify-center md:gap-10 pb-10 pt-20">
      <Title title="Tentang Kami" />
      <div className="relative lg:h-150 w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src="/public/background.webp" alt="background" className="object-cover" />
        <div className="absolute z-20 inset-0 flex flex-col justify-center px-5 md:px-20 text-white">
          <h1 className="text-3xl md:text-8xl ml-2 font-extrabold">Sekitar Kita</h1>
          <p className="max-w-2xl mt-2 text-justify pl-2 text-xs md:text-lg">
            Sekitar Kita adalah website yang menyediakan direktori UMKM yang ada, khususnya di sekitar Telkom University. Guna membantu mahasiswa tahun pertama yang di wajibkan asrama serta membantu UMKM Naik Kelas dengan menyediakan solusi digital sekaligus layanan informasi mengenai UMKM yang ada di sekitar Telkom University.
          </p>
        </div>
      </div>
    </section>
  )
}