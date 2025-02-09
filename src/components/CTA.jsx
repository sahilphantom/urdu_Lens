import  Button  from "../ui/Button"
import React from "react"

export default function CTA() {
  return (
    <section className="border-t text-white border-white/10">
      <div className="container leading-normal flex flex-col space-y-4 items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
        Ready to revolutionize Urdu  text<br /> digitization?
        </h2>
        <p className="max-w-[42rem]   text-muted-foreground max-sm:px-4  sm:text-xl  sm:leading-8">
        Join leading organizations who trust UrduVision to transform their Urdu documents into searchable,
        editable text. Stay ahead in the digital preservation of Urdu literature and content.
        </p>
        <Button size="lg" className="mt-8">
          Get Started Today
        </Button>
      </div>
    </section>
  )
}

