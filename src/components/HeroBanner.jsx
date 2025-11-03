import { MapPin, Search } from 'lucide-react';

export default function HeroBanner({ onSearch }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Find your next home to rent
            </h1>
            <p className="mt-3 text-slate-600">
              Discover verified listings from trusted owners and agents across the city.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex flex-1 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <input
                    type="text"
                    placeholder="City, neighborhood, or landmark"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                    onChange={(e) => onSearch?.(e.target.value)}
                  />
                </div>
                <button
                  onClick={() => onSearch?.('')}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  <Search className="h-4 w-4" />
                  Search
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 text-xs text-slate-600">
              <span className="rounded-full bg-emerald-100 px-2 py-1 font-medium text-emerald-700">No brokerage</span>
              <span className="rounded-full bg-emerald-100 px-2 py-1 font-medium text-emerald-700">Verified owners</span>
              <span className="rounded-full bg-emerald-100 px-2 py-1 font-medium text-emerald-700">Easy move-in</span>
            </div>
          </div>

          <div className="relative hidden aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg md:block">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop"
              alt="Modern living room"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
