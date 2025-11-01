import { useEffect, useState } from "react"
import { Input } from "./input"
import { Link } from "react-router"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return() => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`flex fixed items-center justify-between w-full px-20 py-3 ${isScrolled ? 'bg-white z-30 shadow-xl' : 'bg-transparent z-20'} transition duration-500`}>
      <img src={`/public/${isScrolled ? 'logodark.svg' : 'logo.svg'}`} alt="logo" width={150} height={150} className="" />
      <Input className={`max-w-2xl backdrop-blur-lg ${isScrolled ? 'text-foreground' : 'text-white bg-black/10 border-2 border-white/20'}`} />
      <nav className={`relative z-20 h-11 w-fit px-5 py-2 rounded-full backdrop-blur-lg ${isScrolled ? 'text-foreground' : 'text-white bg-black/10 border-2 border-white/20'}`}>
        <ul className="list-none flex gap-5">
          <li className="hover:cursor-pointer">Beranda</li>
          <Link to={"/product"}>
            <li className="hover:cursor-pointer">List UMKM</li>
          </Link>
          <li className="hover:cursor-pointer">Kontak Kami</li>
        </ul>
      </nav>
    </div>
  )
}