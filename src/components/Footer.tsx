import React, { useState } from 'react';
import { ARTIST_INFO } from '../data/artistData';
import { Check, Send, Instagram, Youtube, Music } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-[#06030e] border-t border-purple-950/60 pb-28 pt-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-950/50">
          {/* Brand & Ethos */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-2xl font-black text-white font-display tracking-tight hover:text-purple-300 transition-colors inline-block"
            >
              LIL KEVO
            </a>
            <p className="text-sm text-slate-400 max-w-sm font-light leading-relaxed">
              {ARTIST_INFO.bioHeadline} — Crafting unfiltered midnight lyricism and melodic anthems for the restless.
            </p>
            <div className="text-xs font-mono text-purple-400">
              linktr.ee/{ARTIST_INFO.linktreeHandle} · instagram.com/itslilkevo_
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-300 tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#music" className="hover:text-white transition-colors">
                  Music & Discography
                </a>
              </li>
              <li>
                <a href="#album-spotlight" className="hover:text-white transition-colors">
                  Can’t Be Tamed LP
                </a>
              </li>
              <li>
                <a href="#poetry" className="hover:text-white transition-colors">
                  Poet’s Vault & Verses
                </a>
              </li>
              <li>
                <a href="#tour" className="hover:text-white transition-colors">
                  Live Tour Dates
                </a>
              </li>
              <li>
                <a href="#merch" className="hover:text-white transition-colors">
                  Vinyl & Merchandise
                </a>
              </li>
              <li>
                <a href="#links" className="hover:text-white transition-colors">
                  Verified Streaming Hub
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Circle */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-300 tracking-wider">
              The Poet’s Circle
            </div>
            <p className="text-xs text-slate-400">
              Receive direct notice on secret warehouse sessions, new verse releases, and exclusive merch capsules.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-purple-950/60 border border-purple-700/50 text-xs text-purple-200">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>You’re enrolled. Welcome to the circle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#0f0724] border border-purple-900/60 text-white text-xs focus:outline-none focus:border-purple-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Lil Kevo. All rights reserved. Independent Release.
          </div>

          <div className="flex items-center gap-5">
            <a
              href={ARTIST_INFO.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href={ARTIST_INFO.links.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              Spotify
            </a>
            <a
              href={ARTIST_INFO.links.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-400 transition-colors"
            >
              Apple Music
            </a>
            <a
              href={ARTIST_INFO.links.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors"
            >
              Linktree
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
