"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "./product-card"

export default function ProductRow({ title, products, id }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const scrollAmount = 320
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section id={id} className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-[#7A1C1C] md:text-3xl">
            {title}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="rounded-full border border-[#D4AF37]/30 bg-[#FFF8E7] p-2 text-[#7A1C1C]/60 transition-colors hover:bg-[#D4AF37]/10 hover:text-[#7A1C1C]"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="rounded-full border border-[#D4AF37]/30 bg-[#FFF8E7] p-2 text-[#7A1C1C]/60 transition-colors hover:bg-[#D4AF37]/10 hover:text-[#7A1C1C]"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[280px] flex-shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
