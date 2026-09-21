import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'

import Hero from './sections/Hero'
import About from './sections/About'
import Programs from './sections/Programs'
import Trainers from './sections/Trainers'
import Membership from './sections/Membership'
import ClassSchedule from './sections/ClassSchedule'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Membership />
        <ClassSchedule />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
      <BackToTop />
    </>
  )
}
