import { useReveal } from './hooks/useReveal'
import { useSpotlight } from './hooks/useSpotlight'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import About from './components/About'
import Ventures from './components/Ventures'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  useReveal()
  useSpotlight()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Ventures />
        <Industries />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppButton />
    </>
  )
}
