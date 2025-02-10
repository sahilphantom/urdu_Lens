import { Facebook, Twitter, Instagram, Linkedin } from "react-feather"
import React from "react"
import { Bot } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" mt-5 text-white py-12 border-t border-white/10">
      <div className="container w-[86%] mx-auto grid justify-between grid-cols-1 md:grid-cols-4 gap-8">
        <div>
        <a href="/" className="flex items-center pb-3 space-x-2">
        <Bot className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">UrduVision</span>
      </a>
          <p className="text-gray-400">Streamlining your workflow, one task at a time.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-2">
            <li>
              <a href="#features" className="text-gray-400 hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#About" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()}  All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer;
