import { Navbar } from "~/components/ui/navbar"
import { ProductSection } from "./section/productPage"
import { Footer } from "~/components/ui/footer"

export const ProductPage = () => {
  return (
    <section>
      <Navbar />
      <ProductSection />
      <Footer />
    </section>
  )
}