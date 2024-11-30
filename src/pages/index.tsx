import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Products from "@/components/Products"
import Projects from "@/components/Projects"
import Partners from '@/components/Partners'
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Projects />
      <Partners />
      <Footer />
    </div>
  )
}
