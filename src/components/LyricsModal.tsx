import React from 'react';
import { Track } from '../data/artistData';
import { X, Play, Pause, ExternalLink, Music2 } from 'lucide-react';

interface LyricsModalProps {
  track: Track | null;
  onClose: () => void;
  onPlayTrack: (trackId: string) => void;
  isPlaying: boolean;
  currentTrackId?: string;
}

export const LyricsModal: React.FC<LyricsModalProps> = ({
  track,
  onClose,
  onPlayTrack,
  isPlaying,
  currentTrackId,
}) => {
  if (!track) return null;
  const isThisPlaying = currentTrackId === track.id && isPlaying;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#100824] border border-purple-700/60 rounded-3xl max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl shadow-purple-950/80 overflow-hidden relative">
        {/* Header */}
        <div className="p-6 border-b border-purple-900/40 flex items-center justify-between bg-[#140b2e]">
          <div className="flex items-center gap-4">
            <img
              src={track.albumCover}
              alt={track.title}
              className="w-14 h-14 rounded-xl object-cover border border-purple-800"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="text-xs font-mono uppercase text-purple-400">
                Poet’s Manuscript
              </div>
              <h2 className="text-xl font-bold text-white font-display">
                {track.title}
              </h2>
              <div className="text-xs text-slate-400 mt-0.5">
                Lil Kevo {track.featuredArtists ? `feat. ${track.featuredArtists}` : ''} · {track.album}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onPlayTrack(track.id)}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
            >
              {isThisPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-purple-900/40 transition-colors"
              aria-label="Close lyrics modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Lyrics Body */}
        <div className="p-8 overflow-y-auto space-y-4 font-mono text-sm leading-relaxed text-slate-200">
          <div className="text-xs text-purple-400 italic mb-4 font-sans">
            Key: {track.key} · Tempo: {track.bpm} BPM · Mood: {track.mood}
          </div>

          {track.fullLyrics && track.fullLyrics.length > 0 ? (
            track.fullLyrics.map((line, idx) => {
              if (line.startsWith('[')) {
                return (
                  <div
                    key={idx}
                    className="text-purple-400 font-bold uppercase tracking-wider text-xs pt-4 pb-1 border-b border-purple-950 font-sans"
                  >
                    {line}
                  </div>
                );
              }
              if (line.trim() === '') {
                return <div key={idx} className="h-3" />;
              }
              return (
                <div key={idx} className="hover:text-white transition-colors">
                  {line}
                </div>
              );
            })
          ) : (
            <p className="italic text-slate-400">
              “{track.lyricsExcerpt}”
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-purple-900/40 bg-[#120a28] flex items-center justify-between text-xs text-slate-400">
          <span>Written & Composed by Lil Kevo</span>
          <a
            href={track.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#1DB954] hover:text-[#1ed760] font-semibold"
          >
            <Music2 className="w-3.5 h-3.5" />
            <span>Open in Spotify</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
