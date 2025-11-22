export default function ProductGrid({ products = [], title = 'Shop' }) {
  return (
    <section className="py-16 bg-charcoal min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl text-cream tracking-tight">{title}</h2>
          <div className="flex gap-2 text-sm text-cream/70">
            <span className="px-3 py-1 rounded-full border border-cream/10">Size</span>
            <span className="px-3 py-1 rounded-full border border-cream/10">Color</span>
            <span className="px-3 py-1 rounded-full border border-cream/10">Type</span>
            <span className="px-3 py-1 rounded-full border border-cream/10">Price</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <a key={i} href={`/product/${p.slug}`} className="group rounded-lg overflow-hidden border border-cream/10 bg-black">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.images?.[0] || 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop'} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="text-cream text-lg font-medium">{p.title}</h3>
                <p className="text-cream/60 text-sm">${p.price?.toFixed(2)}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
