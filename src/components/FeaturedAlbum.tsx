import React, { useState } from 'react';
import { RELEASES, TRACKS, ARTIST_INFO, Track } from '../data/artistData';
import { Play, Pause, Disc3, ExternalLink, Check, Sparkles } from 'lucide-react';

interface FeaturedAlbumProps {
  currentTrackId?: string;
  isPlaying?: boolean;
  onPlayTrack: (trackId: string) => void;
  onOpenLyrics: (track: Track) => void;
}

export const FeaturedAlbum: React.FC<FeaturedAlbumProps> = ({
  currentTrackId,
  isPlaying,
  onPlayTrack,
  onOpenLyrics,
}) => {
  const album = RELEASES[0]; // Can't Be Tamed
  const albumTracks = TRACKS.filter((t) => t.album.includes('Can’t Be Tamed'));
  const isAnyAlbumTrackPlaying =
    isPlaying && albumTracks.some((t) => t.id === currentTrackId);

  return (
    <section id="album-spotlight" className="py-24 relative overflow-hidden bg-[#070311]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Vinyl Artwork Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square">
              {/* Spinning Vinyl Record (Slides out when active) */}
              <div
                className={`absolute top-0 right-0 w-full h-full rounded-full bg-neutral-950 border-4 border-neutral-800 shadow-2xl flex items-center justify-center transition-all duration-700 ${
                  isAnyAlbumTrackPlaying
                    ? 'translate-x-12 sm:translate-x-20 rotate-180 animate-spin'
                    : 'translate-x-6 sm:translate-x-10'
                }`}
                style={{ animationDuration: '6s' }}
              >
                {/* Vinyl Grooves Texture */}
                <div className="w-[85%] h-[85%] rounded-full border border-neutral-800/80 flex items-center justify-center">
                  <div className="w-[70%] h-[70%] rounded-full border border-neutral-700/60 flex items-center justify-center">
                    <div className="w-[50%] h-[50%] rounded-full border border-neutral-800 flex items-center justify-center">
                      {/* Vinyl Center Label */}
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-900 to-indigo-900 border-2 border-purple-500/60 flex flex-col items-center justify-center p-2 text-center shadow-inner">
                        <div className="text-[9px] font-bold text-white uppercase font-display leading-tight">
                          CAN’T BE TAMED
                        </div>
                        <div className="text-[7px] text-purple-200 font-mono">LIL KEVO</div>
                        <div className="w-2.5 h-2.5 rounded-full bg-black border border-neutral-700 mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Album Cover Sleeve Container */}
              <div className="relative z-10 w-[88%] h-[88%] rounded-2xl overflow-hidden shadow-2xl shadow-purple-950/90 border border-purple-700/50 bg-[#120a26] group">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Sleeve Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <div className="text-xs font-mono uppercase text-purple-400">
                      Studio LP · 2026
                    </div>
                    <div className="text-base font-bold font-display">{album.title}</div>
                  </div>
                  <button
                    onClick={() => onPlayTrack(albumTracks[0]?.id || 'seen-enough')}
                    className="w-11 h-11 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg shadow-purple-950"
                    aria-label="Play album"
                  >
                    {isAnyAlbumTrackPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Album Details & Tracklist */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400">
              <span>Spotlight Release</span>
              <span aria-hidden="true">·</span>
              <span>14 Tracks</span>
              <span aria-hidden="true">·</span>
              <span>October 2026</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
              Can’t Be Tamed
            </h2>

            <p className="text-base text-slate-300 leading-relaxed max-w-2xl font-light">
              {album.description} Written and conceived entirely from the perspective of a
              20-year-old poet navigating fame, brotherhood, and unfiltered reality.
            </p>

            {/* Quick Stream Launchers */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={album.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-black bg-[#1DB954] hover:bg-[#1ed760] rounded-xl transition-colors whitespace-nowrap shadow-md shadow-emerald-950"
              >
                <span>Stream Album on Spotify</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={album.appleMusicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#FC3C44] hover:bg-[#ff4b53] rounded-xl transition-colors whitespace-nowrap shadow-md shadow-rose-950"
              >
                <span>Listen on Apple Music</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Tracklist Preview Drawer */}
            <div className="pt-4 border-t border-purple-950/60">
              <div className="text-xs font-mono uppercase text-slate-400 mb-3 flex items-center justify-between">
                <span>Featured LP Tracklist</span>
                <span>Click to stream audio preview</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-2">
                {albumTracks.map((t, idx) => {
                  const isTrackActive = currentTrackId === t.id;
                  const isTrackPlaying = isTrackActive && isPlaying;

                  return (
                    <button
                      key={t.id}
                      onClick={() => onPlayTrack(t.id)}
                      className={`text-left p-2.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                        isTrackActive
                          ? 'bg-purple-950/60 border-purple-600 text-white'
                          : 'bg-[#110926]/60 border-purple-900/30 text-slate-300 hover:bg-purple-950/30 hover:border-purple-700/40'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="font-mono text-[11px] tabular-nums text-purple-400 shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="truncate">
                          <div className="text-xs font-bold truncate font-display">
                            {t.title}
                          </div>
                          {t.featuredArtists && (
                            <div className="text-[10px] text-purple-300 truncate">
                              feat. {t.featuredArtists}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-[10px] text-slate-400 tabular-nums">
                          {t.duration}
                        </span>
                        <div className="w-6 h-6 rounded-md bg-purple-900/50 flex items-center justify-center text-purple-300">
                          {isTrackPlaying ? (
                            <Pause className="w-3 h-3 fill-current" />
                          ) : (
                            <Play className="w-3 h-3 fill-current ml-0.5" />
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
