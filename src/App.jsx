import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Playlist from './components/Playlist'
import Footer from './components/Footer'
import ParticlesBg from './components/ParticlesBg'
import BackgroundMusic from './components/BackgroundMusic'
import './App.css'

function App() {
  return (
    <div className="app">
      <ParticlesBg />
      <Navbar />
      <Hero />
      <BackgroundMusic />
      <Timeline />
      <Playlist />
      <Footer />
    </div>
  )
}

export default App