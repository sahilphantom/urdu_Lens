import  Button  from "../ui/Button"
import React from "react"
import { Bot, Menu } from "lucide-react"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
        <div className="w-[90%] m-auto flex items-center justify-between backdrop-blur-sm  ">
      <a href="/" className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">UrduVision</span>
      </a>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/how-it-works">How it Works</NavLink>
        <NavLink to="/about">About</NavLink>
       
      </div>

      <div className="hidden md:flex items-center space-x-4">
        
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </Button>
      </div>
    </motion.nav>
  )
}

function NavLink({ to, children }) {
  return (
    <a href={to} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </a>
  )
}
export default Navbar;
