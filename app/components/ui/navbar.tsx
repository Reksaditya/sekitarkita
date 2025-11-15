import { useEffect, useState } from "react"
import { Input } from "./input"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { scroller } from "react-scroll"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isLight = !isHome || isScrolled

  return (
    <div className={`flex items-center justify-between w-full px-5 md:px-20 md:py-3 transition duration-500 ${isHome
      ? `fixed ${isScrolled
        ? "bg-white z-40 shadow-xl"
        : "bg-transparent z-20"
      }`
      : "relative bg-white shadow-md z-30"
      }`}>
      <img
        src={`/public/${isLight ? "logodark.svg" : "logo.svg"}`}
        alt="logo"
        width={150}
        height={150}
        className="scale-75 lg:scale-100"
      />
      <Input
        className={`max-w-2xl backdrop-blur-lg md:flex hidden ${isLight
          ? "text-foreground"
          : "text-white bg-black/10 border-2 border-white/20"
          }`}
      />
      <nav
        className={`relative z-20 h-11 w-fit px-5 py-2 lg:flex hidden rounded-full backdrop-blur-lg ${isLight
          ? "text-foreground"
          : "text-white bg-black/10 border-2 border-white/20"
          }`}
      >
        <ul className="list-none flex gap-5">
          <li
            className="hover:cursor-pointer"
            onClick={() => {
              if (location.pathname == '/') {
                scroller.scrollTo('hero', {
                  smooth: true,
                  duration: 800,
                  delay: 0,
                })
              } else {
                navigate('/')
              }
            }}
          >
            Beranda
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => {
              navigate('/product')
            }}
          >
            List UMKM
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => {
              if (location.pathname === '/') {
                scroller.scrollTo("contact", {
                  smooth: true,
                  duration: 800,
                  delay: 0,
                })
              } else {
                navigate('/')
              }
            }}
          >
            Kontak Kami
          </li>
        </ul>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex lg:hidden">
          <Menu className={isScrolled ? `text-black` : "text-white"} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-5 mr-3">
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => {
              if (location.pathname == '/') {
                scroller.scrollTo('hero', {
                  smooth: true,
                  duration: 800,
                  delay: 0,
                })
              } else {
                navigate('/')
              }
            }}
          >
            Beranda
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => {
              navigate('/product')
            }}
          >
            List UMKM
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => {
              if (location.pathname === '/') {
                scroller.scrollTo("contact", {
                  smooth: true,
                  duration: 800,
                  delay: 0,
                })
              } else {
                navigate('/')
              }
            }}
          >
            Kontak Kami
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}