export default function Footer() {
  return (
    <footer className="bg-black border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-cream/70">
        <div>
          <h4 className="text-cream text-lg mb-3">ZÈLE</h4>
          <p className="text-sm">Elegance, Precision, Passion.</p>
        </div>
        <div>
          <h5 className="text-cream font-medium mb-2">Shop</h5>
          <ul className="space-y-1 text-sm">
            <li><a href="/shop?category=formal" className="hover:text-cream">Formal Collection</a></li>
            <li><a href="/shop?category=casual" className="hover:text-cream">Casual Collection</a></li>
            <li><a href="/shop?category=bestseller" className="hover:text-cream">Bestsellers</a></li>
            <li><a href="/shop?category=new" className="hover:text-cream">New Arrivals</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-cream font-medium mb-2">Policies</h5>
          <ul className="space-y-1 text-sm">
            <li><a href="/policies#shipping" className="hover:text-cream">Shipping</a></li>
            <li><a href="/policies#returns" className="hover:text-cream">Returns</a></li>
            <li><a href="/policies#warranty" className="hover:text-cream">Warranty</a></li>
            <li><a href="/policies#care" className="hover:text-cream">Care Guide</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-cream font-medium mb-2">Newsletter</h5>
          <NewsletterForm />
          <div className="mt-4 text-xs">© {new Date().getFullYear()} ZÈLE. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

function NewsletterForm() {
  async function submit(e) {
    e.preventDefault()
    const email = e.target.email.value
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/newsletter`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
      const data = await res.json()
      alert(data.status === 'subscribed' ? 'Subscribed. Welcome to ZÈLE.' : 'You are already subscribed.')
      e.target.reset()
    } catch (err) {
      alert('Subscription failed')
    }
  }
  return (
    <form onSubmit={submit} className="flex gap-2">
      <input name="email" required type="email" placeholder="Your email" className="bg-charcoal text-cream placeholder:text-cream/40 border border-cream/10 rounded px-3 py-2 text-sm w-full" />
      <button className="px-4 py-2 bg-gold text-charcoal rounded text-sm">Join</button>
    </form>
  )
}
