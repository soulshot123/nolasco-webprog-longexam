import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="border-t-4 border-amber-400 bg-gradient-to-r from-blue-900 via-blue-800 to-amber-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-blue-100">
          <p className="text-xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
            BulldogEx Shop
          </p>
          <p className="mt-1 text-sm text-blue-200">Campus essentials, simple ordering.</p>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-8 items-center justify-center sm:justify-end pt-2">
          <Link 
            to="/products" 
            className="text-sm font-bold uppercase tracking-widest text-amber-300 hover:text-amber-100 transition-all duration-300 hover:underline hover:scale-105"
          >
            Products
          </Link>
          <span className="text-amber-400 hidden sm:inline">|</span>
          <Link 
            to="/cart" 
            className="text-sm font-bold uppercase tracking-widest text-amber-300 hover:text-amber-100 transition-all duration-300 hover:underline hover:scale-105"
          >
            Cart
          </Link>
          <span className="text-amber-400 hidden sm:inline">|</span>
          <Link 
            to="/pickup" 
            className="text-sm font-bold uppercase tracking-widest text-amber-300 hover:text-amber-100 transition-all duration-300 hover:underline hover:scale-105"
          >
            Pickup
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
