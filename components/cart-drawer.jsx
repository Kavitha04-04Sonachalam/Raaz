"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Plus, Minus, Trash2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Checkout from "./checkout"

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    deliveryCharge,
    total,
  } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[#FFF8E7] shadow-2xl animate-slide-in-right"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#D4AF37]/20 px-6 py-4">
          <h2 className="font-serif text-xl font-bold text-[#7A1C1C]">
            {showCheckout ? "Checkout" : "Your Cart"}
          </h2>
          <button
            onClick={closeCart}
            className="rounded-full p-2 text-[#7A1C1C]/60 transition-colors hover:bg-[#D4AF37]/10 hover:text-[#7A1C1C]"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {showCheckout ? (
          <Checkout onBack={() => setShowCheckout(false)} />
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-4 rounded-full bg-[#D4AF37]/10 p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#D4AF37]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-[#7A1C1C]">
                    Your cart is empty
                  </p>
                  <p className="mt-1 text-sm text-[#7A1C1C]/60">
                    Add some delicious sweets to get started!
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 rounded-lg border border-[#D4AF37]/15 bg-white p-3"
                    >
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-[#7A1C1C]">
                              {item.product.name}
                            </h3>
                            <p className="text-sm font-semibold text-[#D4AF37]">
                              {"₹"}{item.product.price}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="rounded-md p-1 text-[#7A1C1C]/40 transition-colors hover:bg-red-50 hover:text-red-500"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1
                              )
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-md border border-[#D4AF37]/30 bg-[#FFF8E7] text-[#7A1C1C] transition-colors hover:bg-[#D4AF37]/10"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-[2rem] text-center text-sm font-medium text-[#7A1C1C]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1
                              )
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-md border border-[#D4AF37]/30 bg-[#FFF8E7] text-[#7A1C1C] transition-colors hover:bg-[#D4AF37]/10"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <span className="ml-auto text-sm font-semibold text-[#7A1C1C]">
                            {"₹"}{item.product.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[#D4AF37]/20 px-6 py-4">
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between text-[#7A1C1C]/60">
                    <span>Subtotal</span>
                    <span>{"₹"}{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-[#7A1C1C]/60">
                    <span>Delivery</span>
                    <span>{"₹"}{deliveryCharge}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#D4AF37]/20 pt-2 text-base font-bold text-[#7A1C1C]">
                    <span>Total</span>
                    <span>{"₹"}{total}</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="mt-4 w-full rounded-lg bg-[#7A1C1C] py-3 text-center text-sm font-semibold text-[#FFF8E7] transition-colors hover:bg-[#5a1515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}
