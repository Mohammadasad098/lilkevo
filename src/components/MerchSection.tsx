import React, { useState } from 'react';
import { MERCH_ITEMS, MerchItem } from '../data/artistData';
import { ShoppingBag, Check, X, Sparkles } from 'lucide-react';

export const MerchSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MerchItem | null>(null);
  const [selectedSize, setSelectedSize] = useState('L');
  const [ordered, setOrdered] = useState(false);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
      setSelectedItem(null);
    }, 2500);
  };

  return (
    <section id="merch" className="py-24 relative overflow-hidden bg-[#070312]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-2">
              Official Physical Archive
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
              Vinyl & Apparel Capsule
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Limited run physical artifacts from the “Can’t Be Tamed” era. Heavyweight textiles and collector translucent marbled vinyl.
            </p>
          </div>
        </div>

        {/* Merch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MERCH_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#110926] border border-purple-900/40 overflow-hidden flex flex-col justify-between group hover:border-purple-600/50 transition-all shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-square overflow-hidden bg-purple-950/60">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm border border-purple-700/50 text-[10px] font-mono text-purple-300">
                  {item.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] text-purple-400 font-mono">
                    {item.type}
                  </div>
                  <h3 className="text-base font-bold text-white font-display mt-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-950/60 flex items-center justify-between">
                  <span className="text-lg font-bold font-mono tabular-nums text-white">
                    {item.price}
                  </span>

                  <button
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors shadow-md shadow-purple-950"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Pre-Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preorder Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#120a28] border border-purple-700/50 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {ordered ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Item Reserved!
                </h3>
                <p className="text-xs text-slate-300">
                  Your reservation for{' '}
                  <span className="text-purple-300 font-bold">{selectedItem.name}</span>{' '}
                  has been added to the presale batch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleOrder} className="space-y-4">
                <div className="flex gap-4 items-center">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-16 h-16 rounded-xl object-cover border border-purple-800"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white font-display">
                      {selectedItem.name}
                    </h3>
                    <div className="text-xs font-mono text-purple-400 mt-0.5">
                      {selectedItem.price} · {selectedItem.tag}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedItem.description}
                </p>

                {selectedItem.name.includes('Sweatshirt') || selectedItem.name.includes('Tee') ? (
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Select Size
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {['S', 'M', 'L', 'XL'].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelectedSize(s)}
                          className={`py-2 text-xs font-bold rounded-lg border transition-colors ${
                            selectedSize === s
                              ? 'bg-purple-600 border-purple-400 text-white'
                              : 'bg-[#090514] border-purple-900/60 text-slate-400 hover:text-white'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Contact Email for Shipping Updates
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="order@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-purple-800/60 text-white text-sm focus:outline-none focus:border-purple-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-colors shadow-lg shadow-purple-950 mt-2"
                >
                  Secure Collector Reservation ({selectedItem.price})
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
