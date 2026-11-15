import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import UpNext from "./components/UpNext"




function App() {


  return (
    <div className="frame">
      <div className="board">
        <div className="container">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <UpNext />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
