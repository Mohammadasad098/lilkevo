import React from 'react';
import { POETRY_SNIPPETS, TRACKS, Track } from '../data/artistData';
import { BookOpen, Sparkles, Quote, Music } from 'lucide-react';

interface PoetryVaultProps {
  onOpenLyrics: (track: Track) => void;
  onPlayTrack: (trackId: string) => void;
}

export const PoetryVault: React.FC<PoetryVaultProps> = ({ onOpenLyrics, onPlayTrack }) => {
  return (
    <section id="poetry" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400">
            <span>The Notebook</span>
            <span aria-hidden="true">·</span>
            <span>20 Year Old Poet</span>
            <span aria-hidden="true">·</span>
            <span>OCT 9 🎲</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Poet’s Vault & Verses
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light">
            Before the melodies and studio production, every track begins as raw poetry in Lil Kevo’s private journal. Explore selected stanzas and lyrical breakdown.
          </p>
        </div>

        {/* Poetry Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {POETRY_SNIPPETS.map((snippet) => (
            <div
              key={snippet.id}
              className="p-8 rounded-2xl bg-[#100924]/90 border border-purple-800/40 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-purple-600/50 transition-all"
            >
              <div className="absolute top-4 right-4 text-purple-900/40 group-hover:text-purple-600/30 transition-colors">
                <Quote className="w-16 h-16" />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="space-y-2">
                  {snippet.lines.map((line, idx) => (
                    <p
                      key={idx}
                      className="text-lg sm:text-xl font-medium text-purple-100 font-display italic tracking-wide leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                <div className="pt-4 border-t border-purple-900/40 text-xs font-mono text-purple-400">
                  {snippet.citation}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Lyric Excerpts & Play Track Callouts */}
        <div className="p-8 rounded-2xl bg-[#0c061d] border border-purple-900/50">
          <div className="text-xs font-mono uppercase text-purple-400 mb-6">
            Featured Lyrical Highlights
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRACKS.slice(0, 3).map((track) => (
              <div
                key={track.id}
                className="p-5 rounded-xl bg-[#140b2e]/60 border border-purple-800/30 flex flex-col justify-between space-y-4 hover:border-purple-600/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white font-display">
                      {track.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {track.album}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 italic line-clamp-3 leading-relaxed">
                    “{track.lyricsExcerpt}”
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-purple-900/40">
                  <button
                    onClick={() => onOpenLyrics(track)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-300 hover:text-white transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read Full Verse</span>
                  </button>

                  <button
                    onClick={() => onPlayTrack(track.id)}
                    className="p-1.5 text-purple-400 hover:text-white hover:bg-purple-900/40 rounded-lg transition-colors"
                    title={`Play ${track.title}`}
                  >
                    <Music className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
