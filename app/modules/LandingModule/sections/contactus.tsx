import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Title } from "~/components/ui/title"

export const Contact = () => {
  return (
    <section className="flex flex-col items-center px-5 md:px-20 py-10 gap-10" id="contact">
      <div className="w-full flex flex-col items-center">
        <Title title="Kontak Kami" />
        <h3 className="text-xs text-center md:text-lg text-gray-600 font-semibold">Ada saran atau masukkan? Silahkan isi form di bawah!</h3>
      </div>
      <form className="w-fit px-5 md:px-10 py-5 bg-white shadow-xl rounded-xl">
        <div className="flex flex-col md:flex-row w-full gap-3 pb-3 items-center justify-center">
          <div className="w-75 md:w-150 flex flex-col gap-3"> 
            <Input type="text" placeholder="Nama" className="rounded-lg" />
            <Input type="text" placeholder="Email" className="rounded-lg" />
            <Input type="text" placeholder="Subject" className="rounded-lg" />
          </div>
          <Textarea placeholder="Message" className="w-75  md:w-150" />
        </div>
        <Button variant={"default"} className="text-secondary font-semibold w-full">Kirim Form</Button>
      </form>
    </section>
  )
}