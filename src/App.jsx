import { Routes, Route, useParams } from 'react-router-dom'
import { HomePage, ShopPage, ProductPage, AboutPage, ArtisanPage, ContactPage, PoliciesPage } from './components/Pages'
import './index.css'

// Brand palette classes
// black #0b0b0b, charcoal #151515, deep brown #3a2f2a, cream #f1efe8, gold #d4af37

export default function App() {
  return (
    <div className="font-['Manrope'] bg-black text-cream">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:slug" element={<ProductRoute />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/artisan" element={<ArtisanPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
      </Routes>
    </div>
  )
}

function ProductRoute() {
  const { slug } = useParams()
  return <ProductPage slug={slug} />
}
