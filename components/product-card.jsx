"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-[#D4AF37]/15 bg-[#FFF8E7] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/10">
      {/* Wishlist button */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute right-3 top-3 z-10 rounded-full bg-[#FFF8E7]/80 p-2 backdrop-blur-sm transition-colors hover:bg-[#FFF8E7]"
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={`h-4 w-4 transition-colors ${
            isWishlisted
              ? "fill-red-500 text-red-500"
              : "text-[#7A1C1C]/40"
          }`}
        />
      </button>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#f5ecd7]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-serif text-lg font-semibold text-[#7A1C1C]">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-[#7A1C1C]/60 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <span className="text-xl font-bold text-[#D4AF37]">
            {"₹"}{product.price}
          </span>

          {/* Quantity selector */}
          <div className="flex items-center gap-2">
            <label htmlFor={`qty-${product.id}`} className="sr-only">
              Quantity
            </label>
            <select
              id={`qty-${product.id}`}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="rounded-md border border-[#D4AF37]/30 bg-[#FFF8E7] px-2 py-1.5 text-sm text-[#7A1C1C] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                  {n}pc
                </option>
              ))}
            </select>

            <button
              onClick={() => addToCart(product, quantity)}
              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#7A1C1C] px-4 py-2 text-sm font-semibold text-[#FFF8E7] transition-colors hover:bg-[#5a1515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
