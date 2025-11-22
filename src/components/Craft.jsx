export default function Craft() {
  const items = [
    { title: 'Leather Selection', text: 'Only museum and full‑grain calfskins make the cut.' },
    { title: 'Hand Cutting', text: 'Patterns are cut by hand to preserve grain integrity.' },
    { title: 'Stitching', text: 'Tight, even stitches for durability and elegance.' },
    { title: 'Lasting', text: 'Shaped on wooden lasts to achieve sculpted silhouettes.' },
    { title: 'Construction', text: 'Goodyear welt and Blake stitched depending on the model.' },
    { title: 'Finishing', text: 'Hand‑dyed patinas, burnishing, and mirror shines.' },
  ]
  return (
    <section id="craft" className="py-20 bg-gradient-to-b from-charcoal to-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl text-cream mb-8 tracking-tight">Artisanal Craftsmanship</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((step, i) => (
            <div key={i} className="p-6 rounded-lg border border-cream/10 bg-charcoal/60">
              <h3 className="text-cream font-medium mb-2">{step.title}</h3>
              <p className="text-cream/70 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
