import { HeroSection } from "./sections/hero"
import { PreviewSection } from "./sections/preview"
import { Navbar } from "~/components/ui/navbar"
import { Loading } from "~/components/ui/loading"

export const LandingPage = () => {
  return (
    <div>
      <Loading />
      <Navbar />
      <HeroSection />
      <PreviewSection />
    </div>
  )
}