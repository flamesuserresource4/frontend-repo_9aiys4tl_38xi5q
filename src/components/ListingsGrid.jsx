import { Heart, MapPin, Bath, Square } from 'lucide-react';

const sampleListings = [
  {
    id: 1,
    title: 'Sunny 2BHK near City Center',
    location: 'Indiranagar, Bangalore',
    price: 32000,
    baths: 2,
    area: 980,
    img: 'https://images.unsplash.com/photo-1505692794403-34cb4a3b4f9c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Cozy Studio with Balcony',
    location: 'Khar West, Mumbai',
    price: 22000,
    baths: 1,
    area: 420,
    img: 'https://images.unsplash.com/photo-1598928506311-1423b7612eae?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Spacious 3BHK Park Facing',
    location: 'Gurugram DLF Phase 2',
    price: 58000,
    baths: 3,
    area: 1450,
    img: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Minimal 1BHK Downtown',
    location: 'Koregaon Park, Pune',
    price: 26000,
    baths: 1,
    area: 600,
    img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function ListingsGrid({ filter }) {
  const listings = sampleListings.filter((l) =>
    !filter ? true : l.location.toLowerCase().includes(filter.toLowerCase()) || l.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section id="listings" className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Popular rentals</h2>
          <p className="mt-1 text-sm text-slate-600">Handpicked homes trending this week.</p>
        </div>
        <a href="#" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">View all</a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {listings.map((item) => (
          <article key={item.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={item.img} alt={item.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <button className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow hover:bg-white">
                <Heart className="h-5 w-5" />
              </button>
              <span className="absolute bottom-3 left-3 rounded-md bg-emerald-600/90 px-2 py-1 text-xs font-medium text-white">Verified</span>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <h3 className="line-clamp-1 font-semibold text-slate-900">{item.title}</h3>
                <p className="shrink-0 pl-2 text-right font-semibold text-emerald-700">₹{item.price.toLocaleString()}</p>
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <span className="line-clamp-1">{item.location}</span>
              </div>
              <div className="mt-3 flex items-center gap-4 text-sm text-slate-600">
                <div className="inline-flex items-center gap-1"><Bath className="h-4 w-4" /> {item.baths} bath</div>
                <div className="inline-flex items-center gap-1"><Square className="h-4 w-4" /> {item.area} sqft</div>
              </div>
              <button className="mt-4 w-full rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Contact Owner
              </button>
            </div>
          </article>
        ))}
      </div>

      {listings.length === 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-slate-600">
          No listings match your search yet. Try a different area.
        </div>
      )}
    </section>
  );
}
