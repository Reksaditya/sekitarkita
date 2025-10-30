import { Title } from "~/components/ui/title"

export const AboutSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-10">
      <Title title="Tentang Kami" />
      <div className="relative h-150 w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src="/public/background.webp" alt="background" className="object-cover" />
        <div className="absolute z-20 inset-0 flex flex-col justify-center px-20 text-white">
          <h1 className="text-8xl font-extrabold">Sekitar Kita</h1>
          <p className="max-w-2xl mt-2 text-justify pl-2 text-lg">
            Sekitar Kita adalah website yang menyediakan direktori UMKM yang ada, khususnya di sekitar Telkom University. Guna membantu mahasiswa tahun pertama yang di wajibkan asrama serta membantu UMKM Naik Kelas dengan menyediakan solusi digital sekaligus layanan informasi mengenai UMKM yang ada di sekitar Telkom University.
          </p>
        </div>
      </div>
    </section>
  )
}