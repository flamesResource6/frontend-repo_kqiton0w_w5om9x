import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingBag, Search } from 'lucide-react'

const navLink = ({ isActive }) => (
  isActive ? 'text-cream border-b border-gold' : 'text-cream/80 hover:text-cream'
)

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-charcoal/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl tracking-widest font-semibold text-cream">
          ZÈLE
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/shop" className={navLink}>Shop</NavLink>
          <NavLink to="/about" className={navLink}>About</NavLink>
          <NavLink to="/artisan" className={navLink}>Artisan Process</NavLink>
          <NavLink to="/contact" className={navLink}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-cream/80 hover:text-cream"><Search size={20} /></button>
          <Link to="/cart" className="relative text-cream/80 hover:text-cream">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-charcoal text-xs w-5 h-5 grid place-items-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="md:hidden text-cream/80 hover:text-cream"><Menu size={22} /></button>
        </div>
      </div>
    </header>
  )
}
