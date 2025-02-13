import { Link, useNavigate } from "react-router-dom"
import React, { useState } from "react"
import  Button  from "../ui/Button"
import { Bot, Menu } from "lucide-react"
import MobileMenu from "./MobileMenu"

 const StaticNavbar = () => {
    const navigate = useNavigate()
    const handleGetStarted = () => {
        navigate('/upload')
    }
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen)
    }
  
    return (
      <>
        <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10">
        <div className=" w-[93%] m-auto  flex items-center justify-between  backdrop-blur-sm ">

          <Link to="/" className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-purple-500" />
            <span className="text-white font-medium text-xl">UrduVision</span>
          </Link>
  
          <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
  
          <div className="hidden md:flex items-center space-x-4">
            
            <Button onClick={handleGetStarted} className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
          </div>
  
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={toggleMobileMenu}>
            <Menu className="w-6 h-6" />
          </Button>
          </div>
        </nav>
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
export default StaticNavbar;
