import React from "react"
import Navbar from "./components/Navbar"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Features from "./pages/Features"
import HowItWork from "./pages/HowItWork"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import About from "./pages/About"
import ImageUploadDemo from "./components/ImageUploadDemo"

const App = () => {
  return (
    <Router>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[400px] w-[300px] bg-rose-300/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[300px] bg-purple-500/10 blur-[100px]" />
      </div>
        {/* Ambient background with moving particles */}
          <div className="relative z-0">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWork />} />
            <Route path="/about" element={<About />} />
            <Route path="/upload" element={<ImageUploadDemo />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <Footer />
        </div>
      </main>
    </Router>
  )
}

export default App;

