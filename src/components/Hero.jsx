import Button  from "../ui/Button"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Image, Sparkles } from "lucide-react"
import  FloatingPaper  from "./FloatingPaper"
import  RoboAnimation  from "./RoboAnimation"
import SparklesCore from "./Sparkles"
import { useNavigate } from "react-router-dom"

const Hero = () => {
const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate('/upload')
  }

 

  return (
    <div className="relative min-h-[calc(110vh-76px)] flex items-center">
         {/* SparklesCore background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    {/* Floating images background */}
    <div className="absolute inset-0 overflow-hidden">
      <FloatingPaper count={8} />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Transform Urdu Text with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {" "}
              AI-Powered OCR
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
        >
          Upload your Urdu images and let our advanced OCR technology convert them into editable, searchable text in
          seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" onClick={handleUploadClick} className="bg-purple-600 hover:bg-purple-700 text-white px-8">
            <div className="flex flex-row">
            <Image className="mr-2 h-5 w-5" />
            <span>Upload Image</span>
            </div>    
          </Button>

          <Button size="lg" variant="outline" className="text-white border-purple-500 hover:bg-purple-500/20">
          <div className="flex flex-row">
            <Sparkles className="mr-2 h-5 w-5" />
            <span>See Examples</span>
            </div>
          </Button>
        </motion.div>
      </div>
    </div>

    {/* Animated robot */}
    <div className="absolute bottom-0 right-0 w-96 h-96">
      <RoboAnimation />
    </div>
  </div>
  )
}

export default Hero;