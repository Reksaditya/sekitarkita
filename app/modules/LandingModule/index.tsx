import { HeroSection } from "./sections/hero"
import { PreviewSection } from "./sections/preview"
import { Navbar } from "~/components/ui/navbar"
import { AboutSection } from "./sections/about"
import { ServiceSection } from "./sections/service"

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PreviewSection />
      <AboutSection />
      <ServiceSection />
    </div>
  )
}