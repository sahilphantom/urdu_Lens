import { useState } from "react"
import React from "react"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqItems = [
    {
        question: " What is this Urdu OCR web app used for?",
        answer:
          "This app extracts text from images containing Urdu script using AI-based Optical Character Recognition (OCR) technology.",
      },
    {
      question: "Does UrduVision OCR store any documents on the server?",
      answer:
        "No, We do not store any user documents and images on our servers.",
    },
    {
      question: " Is this service available at all times?",
      answer:
        "Yes, OCR converter is available 24/7.",
    },
    {
      question: " What types of images does the app support?",
      answer: "It supports common image formats like JPG, PNG, JPEG and WEBP. For best results, use clear, high-resolution images with minimal noise.",
    },
    {
      question: " Does the app work on handwritten Urdu text?",
      answer:
        "Currently, it works best with printed Urdu text. Handwritten text recognition is still in development.",
    },
  ]

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="border-t border-white/10">
    <div className="max-w-3xl mx-auto px-4 py-20 ">
      <h2 className="text-3xl text-center text-white font-bold tracking-tight sm:text-3xl md:text-5xl">Frequently asked questions</h2>

      <p className="mt-6 text-center text-base text-gray-400 sm:text-xl">
        Can't find the answer you're looking for?{" "}
        <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Reach out to us
        </a>{" "}
        and we will get in touch with you.
      </p>

      <div className="mt-12 space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-white/10  ">
            <button
              onClick={() => toggleQuestion(index)}
              className="flex w-full items-center justify-between py-6 text-left"
            >
              <span className="text-base font-normal text-white sm:text-xl">{item.question}</span>
              <span
                className={`ml-6 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 ${openIndex === index ? "bg-transparent" : ""}`}
              >
                <svg
                  className={`h-6 w-6 transform text-white/10 transition-transform ${openIndex === index ? "rotate-45" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </span>
            </button>
            {openIndex === index && (
              <div className="pb-6 pr-12">
                <p className="text-base text-gray-400 sm:text-xl">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}
export default FAQ;
