import { Leaf, Flame, Award } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Fresh Delights",
    description: "Made fresh daily with premium ingredients",
  },
  {
    icon: Flame,
    title: "Pure Ghee",
    description: "100% pure desi ghee in every sweet",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Trusted by families for generations",
  },
]

export default function FeaturesBar() {
  return (
    <section className="bg-[#7A1C1C] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-16 lg:px-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-center gap-3 text-center md:text-left"
          >
            <div className="rounded-full bg-[#D4AF37]/20 p-3">
              <feature.icon className="h-6 w-6 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold text-[#FFF8E7]">
                {feature.title}
              </h3>
              <p className="text-xs text-[#FFF8E7]/70">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
