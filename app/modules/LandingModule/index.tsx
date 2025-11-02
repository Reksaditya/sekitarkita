import { HeroSection } from "./sections/hero"
import { PreviewSection } from "./sections/preview"
import { Navbar } from "~/components/ui/navbar"
import { AboutSection } from "./sections/about"
import { ServiceSection } from "./sections/service"
import { CategoriesSection } from "./sections/categories"
import { Footer } from "~/components/ui/footer"
import { Contact } from "./sections/contactus"

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PreviewSection />
      <AboutSection />
      <ServiceSection />
      <CategoriesSection />
      <Contact />
      <Footer />
    </div>
  )
}