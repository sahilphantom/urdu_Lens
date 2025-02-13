
import React from "react"


const HowItWorks = () => {
    const steps = [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8" strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
        ),
        title: "Upload your file to our online OCR converter.",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        ),
        title: "OCR converter will instantly start the scanning process.",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8" strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        ),
        title: "Wait for the converter to finish and Easily Copy The Text",
      },
    ]
  
    return (
      <div className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 md:text-5xl">How Does It Works.</h2>
            <p className="text-gray-400 text-lg max-w-[58rem] mx-auto mb-[5rem]">
              First, upload the image file to our OCR Converter. Then the OCR Converter will instantly scan the image
              file. After the scanning process is done, you will get your extracted text from your image file.
            </p>
          </div>
  
          <div className="flex flex-wrap justify-center gap-10 ">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center bg-black/[0.96] text-lg p-6 rounded-lg border border-white/10 text-center max-w-[250px]">
                <div className="bg-transparent rounded-full p-6 mb-14 border-b border-white/10 text-white/90">{step.icon}</div>
                <p className="text-gray-400">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  export default HowItWorks
  
  