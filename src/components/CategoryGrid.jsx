import { Building2, BedDouble, Home, Hotel } from 'lucide-react';

const categories = [
  { name: 'Apartments', icon: Building2, color: 'bg-emerald-50 text-emerald-700' },
  { name: 'Independent Houses', icon: Home, color: 'bg-amber-50 text-amber-700' },
  { name: 'Rooms', icon: BedDouble, color: 'bg-sky-50 text-sky-700' },
  { name: 'Studios', icon: Hotel, color: 'bg-rose-50 text-rose-700' },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Browse by category</h2>
          <p className="mt-1 text-sm text-slate-600">Quickly jump into what you are looking for.</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {categories.map(({ name, icon: Icon, color }) => (
          <button
            key={name}
            className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:shadow-md"
          >
            <span className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${color}`}>
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-medium text-slate-900">{name}</p>
              <p className="text-xs text-slate-500">Explore rentals</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
