import React from 'react';
import { ARTIST_INFO } from '../data/artistData';
import { X, ExternalLink, Music2 } from 'lucide-react';

interface SpotifyEmbedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpotifyEmbedModal: React.FC<SpotifyEmbedModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#120a28] border border-purple-700/60 rounded-3xl max-w-xl w-full p-6 shadow-2xl relative">
        <div className="flex items-center justify-between pb-4 border-b border-purple-900/40">
          <div className="flex items-center gap-2 text-sm font-bold text-white font-display">
            <Music2 className="w-4 h-4 text-[#1DB954]" />
            <span>Lil Kevo · Official Spotify Player</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-purple-900/40 transition-colors"
            aria-label="Close Spotify modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="my-5 rounded-2xl overflow-hidden border border-purple-950 shadow-inner">
          <iframe
            title="Lil Kevo Spotify Artist View"
            src={`https://open.spotify.com/embed/artist/${ARTIST_INFO.links.spotifyArtistId}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-2xl"
          />
        </div>

        <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
          <span>Stream directly on Spotify with full audio fidelity</span>
          <a
            href={ARTIST_INFO.links.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-[#1DB954] hover:text-[#1ed760]"
          >
            <span>Launch Spotify App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
