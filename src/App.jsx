import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import CategoryGrid from './components/CategoryGrid.jsx';
import ListingsGrid from './components/ListingsGrid.jsx';

function App() {
  const [filter, setFilter] = useState('');

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroBanner onSearch={(q) => setFilter(q)} />
        <section id="explore" className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 text-slate-700">
            <p className="text-sm">Search filter: <span className="font-medium text-emerald-700">{filter || 'All'}</span></p>
          </div>
        </section>
        <CategoryGrid />
        <ListingsGrid filter={filter} />
      </main>
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-600">
          © {new Date().getFullYear()} Rentify. Find homes for rent with ease.
        </div>
      </footer>
    </div>
  );
}

export default App;
