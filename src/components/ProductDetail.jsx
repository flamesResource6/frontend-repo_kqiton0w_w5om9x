import { useEffect, useState } from 'react'

export default function ProductDetail({ slug }) {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/products/${slug}`)
      if (res.ok) {
        const data = await res.json()
        setProduct(data)
      }
    }
    load()
  }, [slug])

  if (!product) return <div className="min-h-[50vh] grid place-items-center text-cream/70">Loading…</div>

  return (
    <section className="pt-28 pb-20 bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div className="grid gap-4">
          <div className="aspect-[4/5] overflow-hidden rounded border border-cream/10">
            <img src={product.images?.[0]} alt={product.title} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.images?.slice(1,5).map((img, i) => (
              <img key={i} src={img} className="aspect-square object-cover rounded border border-cream/10" />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl tracking-tight">{product.title}</h1>
          <p className="mt-2 text-cream/70">{product.short_description || product.description}</p>
          <div className="mt-4 text-gold text-xl">${product.price.toFixed(2)}</div>

          <div className="mt-6">
            <div className="text-sm text-cream/60 mb-2">Select Size (EU)</div>
            <div className="flex flex-wrap gap-2">
              {product.sizes?.map(s => (
                <button key={s} className="px-3 py-2 rounded border border-cream/10 hover:border-gold hover:text-gold">
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm text-cream/60 mb-2">Color</div>
            <div className="flex gap-2">
              {product.colors?.map(c => (
                <span key={c} className="px-3 py-1 rounded-full border border-cream/10 text-sm">{c}</span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="px-6 py-3 bg-gold text-charcoal rounded-md">Add to Cart</button>
            <button className="px-6 py-3 border border-cream/20 rounded-md">Buy Now</button>
          </div>

          <div className="mt-8 grid gap-4 text-sm">
            <div className="p-4 rounded border border-cream/10">
              <div className="font-medium mb-1">Description</div>
              <p className="text-cream/70">{product.description}</p>
            </div>
            <div className="p-4 rounded border border-cream/10">
              <div className="font-medium mb-1">Size Guide</div>
              <p className="text-cream/70">Fits true to size. If between sizes, take the larger size. EU sizes 39–45 available.</p>
            </div>
            <div className="p-4 rounded border border-cream/10">
              <div className="font-medium mb-1">Care Instructions</div>
              <p className="text-cream/70">Use cedar shoe trees, allow 24h between wears, nourish leather with neutral cream, avoid excessive moisture.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
