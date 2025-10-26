export const Navbar = () => {
  return (
    <nav className="relative z-20 h-11 bg-black/10 border-2 border-white/20 w-fit px-5 py-2 rounded-full backdrop-blur-lg">
      <ul className="list-none flex text-white gap-5">
        <li className="hover:cursor-pointer">Home</li>
        <li className="hover:cursor-pointer">List UMKM</li>
        <li className="hover:cursor-pointer">Contact Us</li>
      </ul>
    </nav>
  )
}