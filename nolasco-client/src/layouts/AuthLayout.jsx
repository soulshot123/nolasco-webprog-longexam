import { Outlet, NavLink } from 'react-router-dom';
import bannerImage from '../assets/img/nu_bulldogex_banner.jpg';
import logoImage from '../assets/img/nubdexchange_logo.png';

const AuthLayout = () => {
  return (
<section className="min-h-screen bg-zinc-100 text-zinc-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-amber-400 bg-white/95 backdrop-blur px-4 py-3 sm:py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 sm:gap-3" aria-label="Return to home">
            <img 
              src={bannerImage} 
              alt="BulldogEx banner" 
              className="h-12 w-24 object-cover rounded-lg border border-amber-500 shadow-md sm:h-16 sm:w-32" 
            />
            <span className="text-lg font-bold text-zinc-900 tracking-tight sm:text-xl">BulldogEx</span>
          </NavLink>
          <nav role="navigation" aria-label="Authentication navigation" className="hidden items-center gap-2 sm:flex md:gap-4">
            <NavLink
              to="/auth/signin"
              className={({ isActive }) =>
                [
                  'rounded-full border-2 px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:ring-offset-2',
                  isActive
                    ? 'border-blue-600 bg-blue-600 text-white shadow-lg hover:shadow-xl hover:bg-blue-700'
                    : 'border-amber-500 bg-amber-500/20 text-amber-800 hover:border-amber-600 hover:bg-amber-500/40 hover:text-amber-900 hover:shadow-md'
                ].join(' ')
              }
              end
            >
              Sign In
            </NavLink>
            <NavLink
              to="/auth/signup"
              className={({ isActive }) =>
                [
                  'rounded-full border-2 px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/50 focus:ring-offset-2',
                  isActive
                    ? 'border-amber-500 bg-amber-500 text-white shadow-lg hover:shadow-xl hover:bg-amber-600'
                    : 'border-blue-600 bg-blue-600/20 text-blue-900 hover:border-blue-700 hover:bg-blue-600/40 hover:text-blue-800 hover:shadow-md'
                ].join(' ')
              }
            >
              Sign Up
            </NavLink>
          </nav>
        </div>
      </header>
      <div className="grid min-h-[calc(100vh-80px)] pt-20 w-full lg:grid-cols-[1fr_0.95fr]"> 
        <div className="flex items-center justify-center border-b-2 border-dark-gold-300 bg-dark-gold-200 p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-dark-gold-300 lg:p-16">
          <div className="flex w-full max-w-md items-center justify-center bg-dark-gold-100/60 p-8 sm:p-10">
            <img 
              src={logoImage} 
              alt="NubdExchange Logo" 
              className="max-h-80 w-auto mx-auto object-contain rounded-xl shadow-xl border-2 border-amber-400 bg-white/50 p-4 flex-shrink-0" 
            />
          </div>
        </div>

        <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
