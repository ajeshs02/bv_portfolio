import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Work from '@/components/Work'

const page = () => {
  return (
    <div
      className={`bg-primary text-black max-md:px-2  overflow-x-hidden transition-all duration-500 snap-y snap-mandatory`}
    >
      <Header />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
export default page
