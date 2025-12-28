import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import CaseStudy from './pages/CaseStudy'

// Home Page Component (Current Single Page Layout)
const Home = () => (
  <>
    <div id="hero"><Hero /></div>
    <div id="work"><Work /></div>
    <div id="services"><Services /></div>
    <div id="about"><About /></div>
    <div id="contact"><Contact /></div>
  </>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
