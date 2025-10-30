import { HeroSection } from "./sections/hero"
import { PreviewSection } from "./sections/preview"
import { Navbar } from "~/components/ui/navbar"
import { Loading } from "~/components/ui/loading"
import { About } from "./sections/about"

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PreviewSection />
      <About />
    </div>
  )
}