import { useState, useEffect } from "react"
import React from "react"
import { Link } from "react-router-dom"
import  Button  from "../ui/Button"
import { Bot, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
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
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/60 border-b border-white/10 "
        >
          <div className=" w-[90%] m-auto px-6 py-4 flex items-center justify-between  backdrop-blur-sm ">
          <Link to="/" className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-purple-500" />
            <span className="text-white font-medium text-xl">UrduVision</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/how-it-works">How It Works</NavLink>
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
      )}
    </AnimatePresence>
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



// function NavLink({ to, children }) {
//   return (
//     <a href={to} className="text-gray-300 hover:text-white transition-colors relative group">
//       {children}
//       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
//     </a>
//   )
// }
// export default Navbar;
