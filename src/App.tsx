import Hero from './Hero'
import Header from './Header'
import Performance from './Performance'
import Services from './Services'
import HowWeWork from './HowWeWork'
import FeaturedProjects from './FeaturedProjects'
import ClientReviews from './ClientReviews'
import ParallaxDemo from './components/ParallaxDemo'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <main className="min-h-screen w-full relative">
      <Header />
      <Hero />
      <Performance />
      <Services />
      <HowWeWork />
      <FeaturedProjects />
      <ClientReviews />
      <ParallaxDemo />
      <Footer />
    </main>
  )
}

export default App
