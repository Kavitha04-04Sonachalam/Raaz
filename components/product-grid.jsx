"use client"

import ProductCard from "./product-card"

export default function ProductGrid({ title, subtitle, products, id }) {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-[#7A1C1C] md:text-3xl text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-[#7A1C1C]/60">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
