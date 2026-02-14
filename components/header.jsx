"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Menu, X, User } from "lucide-react"
import { useCart } from "@/lib/cart-context"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Sweets", href: "#sweets" },
  { label: "Best Sellers", href: "#bestsellers" },
  { label: "Corporate Gifting", href: "#gifting" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const { totalItems, openCart } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8E7]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FFF8E7]/80 border-b border-[#D4AF37]/20 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <Image
            src="/images/raaz-logo.png"
            alt="RAAZ - Premium North Indian Sweets"
            width={120}
            height={48}
            className="h-10 w-auto object-contain lg:h-12"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#7A1C1C]/80 transition-colors hover:text-[#D4AF37]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <button
            onClick={openCart}
            className="relative rounded-full p-2 text-[#7A1C1C]/80 transition-colors hover:bg-[#D4AF37]/10 hover:text-[#7A1C1C]"
            aria-label={`Shopping cart with ${totalItems} items`}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37] text-[10px] font-bold text-[#7A1C1C]">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="rounded-full p-2 text-[#7A1C1C]/80 transition-colors hover:bg-[#D4AF37]/10 hover:text-[#7A1C1C] hidden lg:flex"
            aria-label="User account"
          >
            <User className="h-5 w-5" />
          </button>

          <button
            className="rounded-md p-2 text-[#7A1C1C]/80 transition-colors hover:bg-[#D4AF37]/10 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav
          className="border-t border-[#D4AF37]/20 bg-[#FFF8E7] px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-[#7A1C1C]/80 transition-colors hover:bg-[#D4AF37]/10 hover:text-[#7A1C1C]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
