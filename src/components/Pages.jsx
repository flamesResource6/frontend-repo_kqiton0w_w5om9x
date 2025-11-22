import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Featured from './Featured'
import Craft from './Craft'
import Footer from './Footer'
import ProductGrid from './ProductGrid'
import ProductDetail from './ProductDetail'

export function HomePage() {
  const [featured, setFeatured] = useState([])
  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/products?featured=true`)
      const data = res.ok ? await res.json() : []
      setFeatured(data)
    }
    load()
  }, [])

  return (
    <div className="bg-black min-h-screen text-cream">
      <Navbar />
      <Hero />
      <Featured products={featured} />
      <Craft />
      <Footer />
    </div>
  )
}

export function ShopPage() {
  const [items, setItems] = useState([])
  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/products`)
      const data = res.ok ? await res.json() : []
      setItems(data)
    }
    load()
  }, [])
  return (
    <div className="bg-black min-h-screen text-cream">
      <Navbar />
      <ProductGrid products={items} title="The Collections" />
      <Footer />
    </div>
  )
}

export function ProductPage({ slug }) {
  return (
    <div className="bg-black min-h-screen text-cream">
      <Navbar />
      <ProductDetail slug={slug} />
      <Footer />
    </div>
  )
}

export function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-cream">
      <Navbar />
      <section className="pt-28 pb-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h1 className="text-4xl tracking-tight">About ZÈLE</h1>
          <p className="text-cream/70">Born from a devotion to fine shoemaking, ZÈLE celebrates the quiet confidence of artisanship. Every pair is hand‑crafted in small batches using time‑honored techniques, premium leathers, and uncompromising standards.</p>
          <p className="text-cream/70">Philosophy: Elegance, Precision, Passion.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export function ArtisanPage() {
  const steps = [
    { t: 'Selection', d: 'Full‑grain and museum calf carefully sourced.' },
    { t: 'Cutting', d: 'Hand‑cut patterns respecting the natural grain.' },
    { t: 'Stitching', d: 'Even, resilient stitches; seams minimized.' },
    { t: 'Lasting', d: 'Sculpted over wooden lasts for structure.' },
    { t: 'Construction', d: 'Goodyear welt and Blake construction.' },
    { t: 'Finishing', d: 'Patina, burnishing, and mirror shine.' },
  ]
  return (
    <div className="bg-black min-h-screen text-cream">
      <Navbar />
      <section className="pt-28 pb-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl tracking-tight mb-8">The Artisan Process</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="p-6 rounded-lg border border-cream/10 bg-black/40">
                <div className="text-gold font-medium mb-1">Step {i+1}</div>
                <div className="text-cream mb-1">{s.t}</div>
                <div className="text-cream/70 text-sm">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export function ContactPage() {
  async function submit(e) {
    e.preventDefault()
    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (res.ok) alert('Message received. We will respond shortly.')
      e.target.reset()
    } catch (err) {
      alert('Failed to send')
    }
  }
  return (
    <div className="bg-black min-h-screen text-cream">
      <Navbar />
      <section className="pt-28 pb-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl tracking-tight mb-6">Contact</h1>
          <form onSubmit={submit} className="grid gap-4">
            <input name="name" placeholder="Name" className="bg-black border border-cream/10 rounded px-3 py-2" required />
            <input name="email" type="email" placeholder="Email" className="bg-black border border-cream/10 rounded px-3 py-2" required />
            <input name="subject" placeholder="Subject" className="bg-black border border-cream/10 rounded px-3 py-2" />
            <textarea name="message" placeholder="Message" rows="5" className="bg-black border border-cream/10 rounded px-3 py-2" required />
            <button className="px-6 py-3 bg-gold text-charcoal rounded-md w-max">Send</button>
          </form>
          <div className="mt-8 text-sm text-cream/70">
            ZÈLE HQ — Via Montenapoleone, Milano • +39 02 1234 5678
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export function PoliciesPage() {
  return (
    <div className="bg-black min-h-screen text-cream">
      <Navbar />
      <section className="pt-28 pb-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h1 className="text-4xl tracking-tight">Policies</h1>
          <div id="shipping">
            <h2 className="text-xl mb-2">Shipping</h2>
            <p className="text-cream/70">Worldwide express shipping. Orders ship within 2–3 business days. Duties may apply depending on destination.</p>
          </div>
          <div id="returns">
            <h2 className="text-xl mb-2">Returns</h2>
            <p className="text-cream/70">30‑day returns on unworn items. Return shipping label provided for most regions.</p>
          </div>
          <div id="warranty">
            <h2 className="text-xl mb-2">Warranty</h2>
            <p className="text-cream/70">One‑year warranty against manufacturing defects. Out‑of‑warranty repairs available.</p>
          </div>
          <div id="care">
            <h2 className="text-xl mb-2">Care Guide</h2>
            <p className="text-cream/70">Insert cedar trees, rotate pairs, and nourish leather monthly with neutral cream. Avoid water saturation.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
