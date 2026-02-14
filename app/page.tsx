import { CartProvider } from "@/lib/cart-context.jsx"
import { products } from "@/lib/products.js"
import Header from "@/components/header.jsx"
import Hero from "@/components/hero.jsx"
import FeaturesBar from "@/components/features-bar.jsx"
import ProductRow from "@/components/product-row.jsx"
import ProductGrid from "@/components/product-grid.jsx"
import CorporateGifting from "@/components/corporate-gifting.jsx"
import Footer from "@/components/footer.jsx"
import CartDrawer from "@/components/cart-drawer.jsx"
import WhatsAppButton from "@/components/whatsapp-button.jsx"

export default function Page() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <FeaturesBar />
        <ProductRow
          id="bestsellers"
          title="Our North Indian Specials"
          products={products}
        />
        <ProductGrid
          id="sweets"
          title="RAAZ Sweets — Freshness In Every Bite"
          subtitle="Handcrafted with pure desi ghee and traditional recipes"
          products={products}
        />
        <CorporateGifting />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </CartProvider>
  )
}
