import React from "react"



const Asection = () => {
    return (
      <div className="py-16">
        {/* Header Section - now transparent */}
        <div className="px-4">
          <div className="max-w-6xl mx-auto text-center">
            <button className="text-xl font-normal px-4 py-2 rounded-full border border-white/10 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">About Us</button>
            <p className="text-gray-400 text-xl">Convert your images, scanned doc images text into editable files</p>
          </div>
        </div>
  
        {/* Content Section */}
        <div className="max-w-6xl text-center mx-auto px-4 py-14">
          <div className="relative inline-block mx-auto">
            <h2 className="text-3xl font-bold text-white/90 mb-3 ">Online OCR Converter</h2>
            {/* Blue underline decoration - centered */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-12 h-1 rounded-lg bg-gradient-to-r from-purple-400 to-pink-600"></div>
          </div>
  
          <p className="mt-8 text-gray-400 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Our Urdu OCR web app uses advanced AI to accurately extract Urdu text from images. 
          It supports JPG, PNG, and BMP formats, making text digitization quick and efficient.
           The app works best with printed Urdu text, ensuring high accuracy with clear images.
            While some minor errors may occur, users can easily edit the extracted text. 
            This tool is ideal for researchers, students, and professionals who need a fast and reliable Urdu text conversion solution.
          </p>
        </div>
      </div>
    )
  }
  export default Asection;
  