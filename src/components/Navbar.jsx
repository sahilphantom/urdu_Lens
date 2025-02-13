import { useState, useEffect } from "react"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import  Button  from "../ui/Button"
import { Bot, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
   const navigate = useNavigate()
      const handleGetStarted = () => {
          navigate('/upload')
      }

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between  backdrop-blur-sm bg-black/80 border-b border-white/10"
          >
            <div className=" w-[93%] m-auto flex items-center justify-between px-6 py-4 ">
            <Link to="/" className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-purple-500" />
              <span className="text-white font-medium text-xl">UrduVision</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/features">Features</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              
              <Button onClick={handleGetStarted} className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
            </div>

            <button  size="icon" className="md:hidden text-white" onClick={toggleMobileMenu}>
              <Menu className="w-6 h-6" />
            </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </Link>
  )
}
export default Navbar;


