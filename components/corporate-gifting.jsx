import { Gift, Package, Users } from "lucide-react"

export default function CorporateGifting() {
  return (
    <section id="gifting" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-[#7A1C1C]">
          <div className="flex flex-col items-center gap-8 px-8 py-12 text-center md:px-16 md:py-16">
            <div className="rounded-full bg-[#D4AF37]/20 p-4">
              <Gift className="h-10 w-10 text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#FFF8E7] md:text-4xl text-balance">
                Corporate Gifting
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[#FFF8E7]/80">
                Make your celebrations special with our premium sweet gift
                boxes. Perfect for Diwali, weddings, and corporate events.
                Customized packaging available.
              </p>
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:gap-12">
              <div className="flex items-center gap-3">
                <Package className="h-6 w-6 text-[#D4AF37]" />
                <span className="text-sm text-[#FFF8E7]/80">Custom Packaging</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-[#D4AF37]" />
                <span className="text-sm text-[#FFF8E7]/80">Bulk Orders Welcome</span>
              </div>
              <div className="flex items-center gap-3">
                <Gift className="h-6 w-6 text-[#D4AF37]" />
                <span className="text-sm text-[#FFF8E7]/80">Premium Gift Boxes</span>
              </div>
            </div>

            <a
              href="https://wa.me/919876543210?text=Hi%20RAAZ!%20I%20am%20interested%20in%20corporate%20gifting."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#D4AF37] px-10 py-3 font-semibold text-[#7A1C1C] transition-colors hover:bg-[#c9a02f]"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
