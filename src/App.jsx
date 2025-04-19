import { useState } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import ThreatSimulations from './components/ThreatSimulations'
import CyberHygiene from './components/CyberHygiene'
import HackerProfiles from './components/HackerProfiles'
import Quiz from './components/Quiz'
import FeedbackForm from './components/FeedbackForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [quizScore, setQuizScore] = useState(0)

  return (
    <ParallaxProvider>
      <div className="app">
        <div className="matrix-background"></div>
        <Navigation />
        <div className="content">
          <Hero />
          <ThreatSimulations />
          <CyberHygiene />
          <HackerProfiles />
          <Quiz setQuizScore={setQuizScore} />
          <FeedbackForm />
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default App
