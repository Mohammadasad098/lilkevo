import React, { useState } from 'react';
import { ARTIST_INFO } from '../data/artistData';
import { ExternalLink, Disc3, Music2, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenSpotifyEmbed?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSpotifyEmbed }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#090514]/90 backdrop-blur-md border-b border-purple-950/40">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Brand single text element wordmark */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-white font-display hover:text-purple-300 transition-colors flex items-center gap-2"
        >
          <span className="tracking-wider">LIL KEVO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#music"
            className="hover:text-purple-300 transition-colors hover:underline underline-offset-8"
          >
            Music & Tracks
          </a>
          <a
            href="#album-spotlight"
            className="hover:text-purple-300 transition-colors hover:underline underline-offset-8"
          >
            Can’t Be Tamed
          </a>
          <a
            href="#poetry"
            className="hover:text-purple-300 transition-colors hover:underline underline-offset-8"
          >
            Poet’s Vault
          </a>
          <a
            href="#tour"
            className="hover:text-purple-300 transition-colors hover:underline underline-offset-8"
          >
            Tour Dates
          </a>
          <a
            href="#merch"
            className="hover:text-purple-300 transition-colors hover:underline underline-offset-8"
          >
            Merch & Vinyl
          </a>
          <a
            href="#links"
            className="hover:text-purple-300 transition-colors hover:underline underline-offset-8"
          >
            Official Hub
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {onOpenSpotifyEmbed && (
            <button
              onClick={onOpenSpotifyEmbed}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-purple-200 bg-purple-950/60 border border-purple-800/60 rounded-lg hover:bg-purple-900/60 transition-colors whitespace-nowrap"
            >
              <Disc3 className="w-3.5 h-3.5 text-purple-400" />
              <span>Spotify Player</span>
            </button>
          )}

          <a
            href={ARTIST_INFO.links.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-black bg-[#1DB954] hover:bg-[#1ed760] rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-emerald-950/40"
          >
            <Music2 className="w-3.5 h-3.5" />
            <span>Listen Spotify</span>
            <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-slate-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-purple-950/60 bg-[#0c071b] px-6 py-4 flex flex-col gap-3">
          <a
            href="#music"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 hover:text-purple-300 py-1"
          >
            Music & Tracks
          </a>
          <a
            href="#album-spotlight"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 hover:text-purple-300 py-1"
          >
            Can’t Be Tamed (Album)
          </a>
          <a
            href="#poetry"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 hover:text-purple-300 py-1"
          >
            Poet’s Vault & Lyrics
          </a>
          <a
            href="#tour"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 hover:text-purple-300 py-1"
          >
            Tour Dates
          </a>
          <a
            href="#merch"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 hover:text-purple-300 py-1"
          >
            Merch & Vinyl
          </a>
          <a
            href="#links"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 hover:text-purple-300 py-1"
          >
            Linktree & Socials
          </a>
          <div className="pt-2 border-t border-purple-900/40 flex gap-2">
            <a
              href={ARTIST_INFO.links.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 text-xs font-semibold bg-purple-900/40 text-purple-200 rounded-lg border border-purple-700/40"
            >
              Open Linktree
            </a>
            <a
              href={ARTIST_INFO.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 text-xs font-semibold bg-purple-900/40 text-purple-200 rounded-lg border border-purple-700/40"
            >
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
