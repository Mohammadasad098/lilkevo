import React, { useState } from 'react';
import { TOUR_DATES, TourDate, ARTIST_INFO } from '../data/artistData';
import { Calendar, MapPin, Ticket, Check, X, Mail } from 'lucide-react';

export const LiveTourSection: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState<TourDate | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [ticketCount, setTicketCount] = useState(2);
  const [isReserved, setIsReserved] = useState(false);

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsReserved(true);
    setTimeout(() => {
      setIsReserved(false);
      setSelectedTour(null);
      setEmailInput('');
    }, 2500);
  };

  return (
    <section id="tour" className="py-24 border-t border-purple-950/40 relative bg-[#090416]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-2">
              Live Dates & Sessions
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
              Can’t Be Tamed Tour
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Experience the energy, the live poetry, and intimate club acoustics live. Reserve your access or join the city waiting list.
            </p>
          </div>

          <a
            href={ARTIST_INFO.links.linktree}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-purple-200 bg-purple-950/80 hover:bg-purple-900 border border-purple-700/40 rounded-xl transition-colors self-start md:self-auto"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Booking & Inquiries</span>
          </a>
        </div>

        {/* Tour Dates List */}
        <div className="bg-[#0f0824]/90 border border-purple-900/40 rounded-2xl overflow-hidden shadow-xl divide-y divide-purple-950/50">
          {TOUR_DATES.map((tour) => (
            <div
              key={tour.id}
              className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-purple-950/20 transition-colors"
            >
              {/* Date & City */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-purple-900/40 border border-purple-700/30 flex flex-col items-center justify-center text-center shrink-0">
                  <Calendar className="w-4 h-4 text-purple-400 mb-0.5" />
                  <span className="text-[10px] font-mono text-purple-200 uppercase font-semibold">
                    {tour.date.split(',')[0]}
                  </span>
                </div>

                <div>
                  <div className="text-lg font-bold text-white font-display">
                    {tour.city}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{tour.venue}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-500">{tour.country}</span>
                  </div>
                </div>
              </div>

              {/* Status and Action Button */}
              <div className="flex items-center justify-between md:justify-end gap-4">
                <div className="text-xs font-mono text-purple-300">
                  {tour.status}
                </div>

                <button
                  onClick={() => setSelectedTour(tour)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-purple-950"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>RSVP / Tickets</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ticket RSVP Modal */}
      {selectedTour && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#120a28] border border-purple-700/50 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedTour(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isReserved ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  You’re on the Guestlist!
                </h3>
                <p className="text-xs text-slate-300">
                  Presale passcode and venue directions sent to{' '}
                  <span className="text-purple-300 font-mono">{emailInput}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReserve} className="space-y-4">
                <div>
                  <div className="text-xs font-mono text-purple-400 uppercase">
                    Tour Access Presale
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {selectedTour.city} · {selectedTour.venue}
                  </h3>
                  <div className="text-xs text-slate-400 mt-1">
                    {selectedTour.date} · {selectedTour.status}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="fan@lilkevo.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-purple-800/60 text-white text-sm focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Number of Passes
                  </label>
                  <select
                    value={ticketCount}
                    onChange={(e) => setTicketCount(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-purple-800/60 text-white text-sm focus:outline-none focus:border-purple-400"
                  >
                    <option value={1}>1 General Pass</option>
                    <option value={2}>2 Passes (Recommended)</option>
                    <option value={4}>4 Passes (Crew)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-colors shadow-lg shadow-purple-950 mt-2"
                >
                  Confirm Free Presale RSVP
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
