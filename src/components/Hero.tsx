import React from 'react';
import { ARTIST_INFO, TRACKS } from '../data/artistData';
import { Play, Disc3, ExternalLink, Sparkles, Instagram, Youtube, Music } from 'lucide-react';

interface HeroProps {
  onPlayTrack: (trackId: string) => void;
  currentTrackId?: string;
  isPlaying?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onPlayTrack, currentTrackId, isPlaying }) => {
  const leadTrack = TRACKS[0];
  const isLeadPlaying = currentTrackId === leadTrack.id && isPlaying;

  return (
    <section className="relative min-h-[92vh] pt-24 pb-16 flex items-center overflow-hidden">
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-700/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Editorial Presence */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Human unboxed kicker with typographic separators */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-300/90">
              <span>Official Artist Portal</span>
              <span aria-hidden="true">·</span>
              <span>20 Year Old Poet</span>
              <span aria-hidden="true">·</span>
              <span className="text-purple-400 font-semibold">OCT 9 🎲</span>
            </div>

            {/* Oversized Brand Display Title */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white font-display leading-[0.95]">
              LIL KEVO
            </h1>

            {/* Poetic Subtitle / Mission */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-xl font-light leading-relaxed">
              <span className="text-purple-300 font-medium italic">“20 year old POET 💜”</span>{' '}
              — Raw penmanship, nocturnal frequencies, and unapologetic lyricism. Stepping
              forward with new studio album{' '}
              <span className="text-white font-medium underline decoration-purple-500/60 underline-offset-4">
                Can’t Be Tamed
              </span>
              .
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onPlayTrack(leadTrack.id)}
                className="inline-flex items-center gap-3 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-purple-700 to-violet-600 hover:from-purple-600 hover:to-violet-500 rounded-xl shadow-lg shadow-purple-950/60 hover:shadow-purple-700/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                {isLeadPlaying ? (
                  <>
                    <Disc3 className="w-5 h-5 animate-spin text-purple-200" />
                    <span>Now Playing: {leadTrack.title}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 fill-current" />
                    <span>Play Lead Track · {leadTrack.title}</span>
                  </>
                )}
              </button>

              <a
                href={ARTIST_INFO.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-purple-900/40 rounded-xl hover:border-purple-600/50 transition-colors whitespace-nowrap"
              >
                <Music className="w-4 h-4 text-[#1DB954]" />
                <span>Spotify Artist Page</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={ARTIST_INFO.links.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <span>Linktree Hub</span>
                <span className="text-xs text-purple-400">@imlilkevo</span>
              </a>
            </div>

            {/* Direct Social & Platform Icons Row */}
            <div className="pt-4 border-t border-purple-950/50 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <span className="text-slate-500 font-medium">Verified Channels:</span>
              <a
                href={ARTIST_INFO.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>@itslilkevo_</span>
              </a>
              <a
                href={ARTIST_INFO.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Spotify</span>
              </a>
              <a
                href={ARTIST_INFO.links.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-rose-400 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Apple Music</span>
              </a>
              <a
                href={ARTIST_INFO.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-4 h-4 text-red-500" />
                <span>YouTube</span>
              </a>
            </div>

            {/* Unboxed Metadata Stats with Tabular Numerals */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-purple-950/40">
              {ARTIST_INFO.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl font-bold font-mono tabular-nums text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Container with Official Artist Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative backdrop border */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-purple-600/30 via-purple-950/40 to-transparent border border-purple-800/40 shadow-2xl shadow-purple-950/80">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#120a26]">
                  {/* Real Official Artist Photography from Apple Music / Spotify */}
                  <img
                    src={ARTIST_INFO.photos.hero}
                    alt="Lil Kevo Official Portrait"
                    className="w-full h-full object-cover object-center filter saturate-110 contrast-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to Spotify downloaded asset or Linktree
                      const target = e.currentTarget;
                      if (!target.src.includes('spotify')) {
                        target.src = ARTIST_INFO.photos.spotify;
                      }
                    }}
                  />

                  {/* Gradient Scrim for media contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-[#090514]/30 to-transparent" />

                  {/* Bottom Image Overlay Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0d0720]/85 backdrop-blur-md border border-purple-800/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono uppercase text-purple-400 tracking-wider">
                          Latest Release
                        </div>
                        <div className="text-sm font-bold text-white font-display">
                          Can’t Be Tamed · LP
                        </div>
                        <div className="text-xs text-slate-400">14 Tracks · Released 2026</div>
                      </div>
                      <button
                        onClick={() => onPlayTrack('seen-enough')}
                        className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition-transform hover:scale-105 shadow-md shadow-purple-950"
                        aria-label="Play Seen Enough"
                      >
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Floating Dice Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-[#090514]/90 backdrop-blur-sm border border-purple-700/50 text-xs font-mono text-purple-200 flex items-center gap-1.5 shadow-lg">
                    <span>OCT 9</span>
                    <span className="text-purple-400">🎲</span>
                  </div>
                </div>
              </div>

              {/* Offset thumbnail featuring Spotify artist avatar */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-2.5 rounded-2xl bg-[#120a26]/95 border border-purple-800/60 shadow-xl backdrop-blur-md">
                <img
                  src={ARTIST_INFO.photos.spotify}
                  alt="Lil Kevo Spotify thumbnail"
                  className="w-12 h-12 rounded-xl object-cover border border-purple-700/40"
                  referrerPolicy="no-referrer"
                />
                <div className="pr-3">
                  <div className="text-xs font-bold text-white">@itslilkevo_</div>
                  <div className="text-[11px] text-purple-300 font-mono">Spotify Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
