import { Home, Heart, User, PlusCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600 text-white shadow">
            <Home className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Rentify</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a className="hover:text-slate-900" href="#explore">Explore</a>
          <a className="hover:text-slate-900" href="#categories">Categories</a>
          <a className="hover:text-slate-900" href="#listings">Popular</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <PlusCircle className="h-4 w-4 text-emerald-600" />
            Post Ad
          </button>
          <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50">
            <Heart className="h-5 w-5" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-50">
            <User className="h-5 w-5" />
            <span className="hidden sm:inline">Sign in</span>
          </button>
        </div>
      </div>
    </header>
  );
}
