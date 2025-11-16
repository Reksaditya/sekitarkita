import { Facebook, Instagram, Linkedin, Mail, Twitter, X, Youtube } from "lucide-react"
import { Button } from "./button"

export const Footer = () => {
  return (
    <footer className="bg-primary text-white shadow-lg w-full">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between px-5 py-5 md:px-20 pt-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <img src="/logo.svg" alt="logo" width={200} className="scale-50 md:scale-100" />
          </div>
          <div className="flex gap-5 pb-10">
            <Mail />
            <Instagram />
            <Linkedin />
            <Facebook />
            <Youtube />
          </div>
          <Button></Button>
        </div>
        <div className="flex gap-20 h-full">
          <div className="flex flex-col gap-7 h-full">
            <h4 className="font-bold">Site Map</h4>
            <ul className="flex flex-col gap-2">
              <li>Beranda</li>
              <li>List UMKM</li>
              <li>Kontak Kami</li>
            </ul>
          </div>
          <div className="flex flex-col gap-7">
            <h4 className="font-bold">Legal</h4>
            <ul className="flex flex-col gap-2">
              <li>Privacy Policy</li>
              <li>Terms of Services</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="font-semibold py-3 px-5 md:px-20">
        <h2 className="text-sm md:text-base">Copyright &copy; 2025. Sekitar Kita. All Rights Reserved.</h2>
      </div>
    </footer>
  )
}