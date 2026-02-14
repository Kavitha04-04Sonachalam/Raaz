"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [

  {
    image: "/images/b1.jpg",
    heading: "Our Bestselling Sweets & Savouries",
    subtext: "Deliciously curated combos for you",
    showOverlay: true,
  },
  {
    image: "/images/b2.jpg",
    heading: "Perfect Blend of Taste & Tradition",
    subtext: "Made with love, just for you",
    showOverlay: true,
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section id="home" className="relative w-full overflow-hidden" aria-label="Hero slider">
      <div className="relative w-full aspect-[16/9] md:aspect-[2.5/1] lg:aspect-[3/1]">
        {slides.map((slide, index) => (
          <div
            key={slide.heading}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            aria-hidden={index !== current}
          >
            {/* Background Image */}
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                className={`object-cover ${slide.imagePosition || "object-center"}`}
                priority={index === 0}
                sizes="100vw"
              />
            </div>

            {/* Dark overlay for readability (Only if overlay text is shown) */}
            {slide.showOverlay && (
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            )}

            {/* Text Content */}
            {slide.showOverlay && (
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                  <div className="max-w-xl">
                    <h1
                      className={`font-serif text-4xl font-bold leading-tight text-[#FFF8E7] md:text-5xl lg:text-6xl text-balance transition-all duration-700 ${index === current
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                        }`}
                    >
                      {slide.heading}
                    </h1>
                    <p
                      className={`mt-4 font-serif text-lg italic text-[#FFF8E7]/90 md:text-xl transition-all duration-700 delay-150 ${index === current
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                        }`}
                    >
                      {slide.subtext}
                    </p>
                    <a
                      href="#sweets"
                      className={`mt-6 inline-block rounded-full bg-[#D4AF37] px-8 py-3 text-base font-semibold text-[#7A1C1C] shadow-lg transition-all duration-300 hover:bg-[#c9a02f] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 md:px-10 md:py-4 md:text-lg ${index === current
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                        }`}
                      style={{ transitionDelay: "300ms" }}
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40 md:left-5 md:p-3"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40 md:right-5 md:p-3"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === current
                ? "w-8 bg-[#D4AF37]"
                : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
