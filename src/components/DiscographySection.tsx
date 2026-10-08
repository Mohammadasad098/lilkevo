import React, { useState } from 'react';
import { TRACKS, Track, ARTIST_INFO } from '../data/artistData';
import { Play, Pause, FileText, ExternalLink, Disc, Sparkles } from 'lucide-react';

interface DiscographySectionProps {
  currentTrackId?: string;
  isPlaying?: boolean;
  onPlayTrack: (trackId: string) => void;
  onOpenLyrics: (track: Track) => void;
}

export const DiscographySection: React.FC<DiscographySectionProps> = ({
  currentTrackId,
  isPlaying,
  onPlayTrack,
  onOpenLyrics,
}) => {
  const [filter, setFilter] = useState<'all' | 'cant-be-tamed' | 'singles'>('all');

  const filteredTracks = TRACKS.filter((track) => {
    if (filter === 'cant-be-tamed') return track.album.includes('Can’t Be Tamed');
    if (filter === 'singles') return track.category === 'single' || track.album.includes('Before The Blessings');
    return true;
  });

  return (
    <section id="music" className="py-24 border-t border-purple-950/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-2">
              Discography & Stream Vault
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
              Essential Records
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Stream official releases by Lil Kevo. Listen to real synthesizer previews below or launch directly into Spotify and Apple Music.
            </p>
          </div>

          {/* Interactive Filter segmented control buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#120a26] border border-purple-900/50 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Tracks ({TRACKS.length})
            </button>
            <button
              onClick={() => setFilter('cant-be-tamed')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'cant-be-tamed'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Can’t Be Tamed LP
            </button>
            <button
              onClick={() => setFilter('singles')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'singles'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Singles & EPs
            </button>
          </div>
        </div>

        {/* Tracks Table / List */}
        <div className="bg-[#0e0822]/80 border border-purple-900/40 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm">
          {/* Table Header (Desktop) */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3.5 border-b border-purple-900/40 text-[11px] font-mono uppercase tracking-wider text-slate-400">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Title & Collaboration</div>
            <div className="col-span-3">Album Project</div>
            <div className="col-span-1">Key / BPM</div>
            <div className="col-span-1 text-right">Time</div>
            <div className="col-span-1 text-right">Actions</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-purple-950/40">
            {filteredTracks.map((track, idx) => {
              const isCurrent = currentTrackId === track.id;
              const isCurrentPlaying = isCurrent && isPlaying;

              return (
                <div
                  key={track.id}
                  className={`group px-6 py-3.5 transition-colors flex flex-col md:grid md:grid-cols-12 md:gap-4 md:items-center ${
                    isCurrent
                      ? 'bg-purple-950/40 border-l-2 border-purple-500'
                      : 'hover:bg-purple-950/20'
                  }`}
                >
                  {/* Track Number & Play trigger */}
                  <div className="hidden md:flex col-span-1 items-center gap-3">
                    <button
                      onClick={() => onPlayTrack(track.id)}
                      className="w-7 h-7 rounded-lg bg-purple-900/40 group-hover:bg-purple-600 text-purple-300 group-hover:text-white flex items-center justify-center transition-colors"
                      aria-label={isCurrentPlaying ? 'Pause track' : `Play ${track.title}`}
                    >
                      {isCurrentPlaying ? (
                        <Pause className="w-3.5 h-3.5 fill-current" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      )}
                    </button>
                    <span className="font-mono text-xs tabular-nums text-slate-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Featured Artists */}
                  <div className="col-span-5 flex items-center gap-3">
                    {/* Thumbnail */}
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-purple-950 border border-purple-800/40">
                      <img
                        src={track.albumCover}
                        alt={track.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      {isCurrentPlaying && (
                        <div className="absolute inset-0 bg-purple-900/60 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onPlayTrack(track.id)}
                          className="text-sm font-bold text-white hover:text-purple-300 transition-colors text-left truncate font-display"
                        >
                          {track.title}
                        </button>
                        {isCurrentPlaying && (
                          <span className="text-[10px] font-mono text-purple-400 animate-pulse hidden sm:inline">
                            Playing
                          </span>
                        )}
                      </div>

                      {/* Clean unboxed metadata with typographic separators */}
                      <div className="text-xs text-slate-400 flex items-center gap-1.5 truncate">
                        <span>Lil Kevo</span>
                        {track.featuredArtists && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-purple-300">feat. {track.featuredArtists}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Album Name */}
                  <div className="col-span-3 hidden md:block text-xs text-slate-300 truncate">
                    {track.album}
                  </div>

                  {/* Key and BPM */}
                  <div className="col-span-1 hidden md:block font-mono text-[11px] tabular-nums text-slate-400">
                    <div>{track.key}</div>
                    <div className="text-purple-400">{track.bpm} BPM</div>
                  </div>

                  {/* Duration */}
                  <div className="col-span-1 hidden md:block text-right font-mono text-xs tabular-nums text-slate-300">
                    {track.duration}
                  </div>

                  {/* Actions: Lyrics + Spotify */}
                  <div className="col-span-1 flex items-center justify-between md:justify-end gap-2 mt-2 md:mt-0 pt-2 md:pt-0 border-t md:border-t-0 border-purple-900/20">
                    <div className="md:hidden flex items-center gap-2">
                      <button
                        onClick={() => onPlayTrack(track.id)}
                        className="p-1.5 bg-purple-600 text-white rounded-md text-xs flex items-center gap-1"
                      >
                        {isCurrentPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                        <span>{isCurrentPlaying ? 'Pause' : 'Play'}</span>
                      </button>
                      <span className="text-xs font-mono text-slate-400">{track.duration}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => onOpenLyrics(track)}
                        className="p-1.5 text-slate-400 hover:text-purple-300 hover:bg-purple-900/30 rounded-lg transition-colors"
                        title="View Lyrics"
                      >
                        <FileText className="w-4 h-4" />
                      </button>

                      <a
                        href={track.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-400 hover:text-[#1DB954] hover:bg-emerald-950/30 rounded-lg transition-colors"
                        title="Listen on Spotify"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner with streaming links */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-[#130b2c] to-purple-950/60 border border-purple-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Disc className="w-6 h-6 text-purple-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">Full Discography on Spotify</div>
              <div className="text-xs text-slate-400">Stream all 18+ singles, remasters, and upcoming album tracks directly.</div>
            </div>
          </div>

          <a
            href={ARTIST_INFO.links.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-black bg-[#1DB954] hover:bg-[#1ed760] rounded-xl transition-colors whitespace-nowrap shadow-md shadow-emerald-950"
          >
            <span>Open Spotify Artist Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
