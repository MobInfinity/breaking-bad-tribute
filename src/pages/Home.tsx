import '../App.css'
import { useReveal } from '../hooks/useReveal'
import Hero from '../sections/Hero'
import Timeline from '../sections/Timeline'
import Characters from '../sections/Characters'
import Moments from '../sections/Moments'
import Legacy from '../sections/Legacy'
import Footer from '../sections/Footer'

export default function Home() {
  useReveal()

  return (
    <div className="film-grain vignette min-h-screen bg-[#191009]">
      <Hero />
      <main>
        <Timeline />
        <Characters />
        <Moments />
        <Legacy />
      </main>
      <Footer />
    </div>
  )
}
