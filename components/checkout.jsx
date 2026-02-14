"use client"

import { useState } from "react"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function Checkout({ onBack }) {
  const { items, subtotal, deliveryCharge, total, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrderPlaced(true)
    setTimeout(() => {
      clearCart()
    }, 3000)
  }

  if (orderPlaced) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-4 rounded-full bg-green-100 p-4">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#7A1C1C]">
          Order Placed Successfully!
        </h3>
        <p className="mt-2 text-[#7A1C1C]/60">
          Thank you for your order. We will contact you shortly with delivery
          details.
        </p>
        <p className="mt-4 text-sm text-[#7A1C1C]/40">
          This drawer will close automatically...
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      {/* Back button */}
      <div className="px-6 pt-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-[#7A1C1C]/60 transition-colors hover:text-[#7A1C1C]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Cart
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col px-6 py-4">
        {/* Customer Details */}
        <h3 className="mb-4 font-serif text-lg font-semibold text-[#7A1C1C]">
          Customer Details
        </h3>
        <div className="flex flex-col gap-3">
          <input
            name="name"
            type="text"
            required
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="rounded-md border border-[#D4AF37]/30 bg-[#FFF8E7] px-4 py-2.5 text-sm text-[#7A1C1C] placeholder:text-[#7A1C1C]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="rounded-md border border-[#D4AF37]/30 bg-[#FFF8E7] px-4 py-2.5 text-sm text-[#7A1C1C] placeholder:text-[#7A1C1C]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="rounded-md border border-[#D4AF37]/30 bg-[#FFF8E7] px-4 py-2.5 text-sm text-[#7A1C1C] placeholder:text-[#7A1C1C]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />
          <textarea
            name="address"
            required
            placeholder="Full Address"
            value={form.address}
            onChange={handleChange}
            rows={2}
            className="rounded-md border border-[#D4AF37]/30 bg-[#FFF8E7] px-4 py-2.5 text-sm text-[#7A1C1C] placeholder:text-[#7A1C1C]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none"
          />
          <div className="flex gap-3">
            <input
              name="city"
              type="text"
              required
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="flex-1 rounded-md border border-[#D4AF37]/30 bg-[#FFF8E7] px-4 py-2.5 text-sm text-[#7A1C1C] placeholder:text-[#7A1C1C]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
            <input
              name="pincode"
              type="text"
              required
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              className="w-32 rounded-md border border-[#D4AF37]/30 bg-[#FFF8E7] px-4 py-2.5 text-sm text-[#7A1C1C] placeholder:text-[#7A1C1C]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>
        </div>

        {/* Order Summary */}
        <h3 className="mb-3 mt-6 font-serif text-lg font-semibold text-[#7A1C1C]">
          Order Summary
        </h3>
        <div className="rounded-lg border border-[#D4AF37]/20 bg-[#FFF8E7] p-4">
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-[#7A1C1C]">
                  {item.product.name} x {item.quantity}
                </span>
                <span className="font-medium text-[#7A1C1C]">
                  {"₹"}{item.product.price * item.quantity}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 border-t border-[#D4AF37]/20 pt-3">
            <div className="flex justify-between text-sm text-[#7A1C1C]/60">
              <span>Subtotal</span>
              <span>{"₹"}{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm text-[#7A1C1C]/60">
              <span>Delivery</span>
              <span>{"₹"}{deliveryCharge}</span>
            </div>
            <div className="mt-2 flex justify-between border-t border-[#D4AF37]/20 pt-2 text-base font-bold text-[#7A1C1C]">
              <span>Total</span>
              <span>{"₹"}{total}</span>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-[#D4AF37] py-3 text-center text-sm font-bold text-[#7A1C1C] transition-colors hover:bg-[#c9a02f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          Place Order
        </button>
      </form>
    </div>
  )
}
