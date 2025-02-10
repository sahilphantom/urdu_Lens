import React from 'react';
import { Upload, Search, Clock, Edit, Cloud } from 'react-feather';
import { Brain } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced Urdu OCR technology",
    description: "State-of-the-art AI for accurate Urdu text recognition.",
  },
  {
    icon: Clock ,
    title: "Fast and accurate text recognition",
    description: "Convert images to text in seconds with high precision.",
  },
  {
    icon: Search ,
    title: "Support for various image formats",
    description: "Process a wide range of image types effortlessly.",
  },
  {
    icon: Edit ,
    title: "Editable and searchable output",
    description: "Get text you can edit, copy, and search through.",
  },
//   {
//     icon: <Cloud className="h-8 w-8 text-primary" />,
//     title: "Cloud storage for your scanned documents",
//     description: "Securely store and access your converted texts anytime.",
//   },
];

const Fsection = () => {
  return (
    <section className="container text-white space-y-16 py-20 md:py-22">
    <div className="mx-auto max-w-[58rem] text-center">
      <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Features</h2>
      <p className="mt-4 text-gray-400 text-muted-foreground sm:text-lg">
      Upload your Urdu images and let our advanced OCR technology convert them into editable, searchable text in seconds.
      </p>
    </div>
    <div className="mx-auto  grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 max-sm:mx-4">
      {features.map((feature) => (
        <div key={feature.name} className="relative bg-black/[0.96] overflow-hidden rounded-lg border border-white/10 p-11">
          <div className="flex items-center gap-4">
            <feature.icon className="h-8 w-8 text-white" />
            <h3 className="font-bold">{feature.title}</h3>
          </div>
          <p className="mt-2 text-gray-400 ">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
  );
}
export default Fsection;