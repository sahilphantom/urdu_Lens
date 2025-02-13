import { motion } from "framer-motion"
import React from "react"
import { Link } from "react-router-dom"
import { X } from "lucide-react"
import  Button  from "../ui/Button"

const MobileMenu = ({ isOpen, onClose }) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        y: { stiffness: 1000 },
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/100 flex flex-col"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
    >
      <div className="flex justify-end p-4">
        <Button  size="icon" onClick={onClose}>
          <X className="h-6 w-6 text-white" />
        </Button>
      </div>
      <nav className="flex flex-col items-center justify-center flex-grow">
        <MobileNavLink to="/" onClick={onClose}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/features" onClick={onClose}>
          Features
        </MobileNavLink>
        
        <MobileNavLink to="/about" onClick={onClose}>
          About
        </MobileNavLink>
        <MobileNavLink to="/contact" onClick={onClose}>
          Contact
        </MobileNavLink>
      </nav>
    </motion.div>
  )
}

const MobileNavLink = ({ to, children, onClick }) => (
  <Link to={to} className= " text-2xl mb-4 text-gray-400 hover:text-white transition-colors relative group" onClick={onClick}>
    {children}
<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
  </Link>
)

export default MobileMenu

