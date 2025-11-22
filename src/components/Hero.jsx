export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 bg-gradient-to-b from-black to-charcoal">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(212,175,55,0.25),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl leading-tight text-cream tracking-tight">
            ZÈLE – Handmade Leather for the Distinguished Man
          </h1>
          <p className="mt-4 text-cream/70 text-lg">
            Handmade precision. Luxury you can feel. Explore formal and casual silhouettes crafted in premium calfskin.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="/shop" className="px-6 py-3 bg-gold text-charcoal rounded-md font-medium">Shop Now</a>
            <a href="#craft" className="px-6 py-3 border border-cream/20 text-cream rounded-md font-medium">Our Craft</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-lg overflow-hidden border border-cream/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1400&auto=format&fit=crop" alt="Handmade leather shoes" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-gold/30 to-transparent blur-2xl" />
        </div>
      </div>
    </section>
  )
}
