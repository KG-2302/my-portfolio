import Navbar from './components/Navbar'
import Hero from './components/Home'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  )
}

export default App
