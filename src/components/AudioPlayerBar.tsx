import React, { useEffect, useRef, useState } from 'react';
import { Track } from '../data/artistData';
import { audioEngine } from '../utils/audioEngine';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  FileText,
  ExternalLink,
  ChevronUp,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

interface AudioPlayerBarProps {
  currentTrack: Track;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNextTrack: () => void;
  onPrevTrack: () => void;
  onOpenLyrics: (track: Track) => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  currentTrack,
  isPlaying,
  onTogglePlay,
  onNextTrack,
  onPrevTrack,
  onOpenLyrics,
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Poll current time from engine
  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setCurrentTime(audioEngine.getCurrentTime());
      }, 250);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Handle Seek
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
    audioEngine.seek(targetTime);
  };

  // Handle Volume
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    setIsMuted(newVol === 0);
    audioEngine.setVolume(newVol);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      audioEngine.setVolume(volume || 0.8);
    } else {
      setIsMuted(true);
      audioEngine.setVolume(0);
    }
  };

  // Waveform canvas visualizer
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const analyser = audioEngine.getAnalyser();
    const bufferLength = analyser ? analyser.frequencyBinCount : 32;
    const dataArray = new Uint8Array(bufferLength);

    const render = () => {
      animId = requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (analyser && isPlaying) {
        analyser.getByteFrequencyData(dataArray);
      }

      const barWidth = 3;
      const gap = 2;
      const numBars = 16;
      const totalWidth = numBars * (barWidth + gap);
      const startX = (canvas.width - totalWidth) / 2;

      for (let i = 0; i < numBars; i++) {
        let barHeight = 4;
        if (isPlaying) {
          const val = dataArray[i * 2] || Math.sin(Date.now() / 150 + i) * 20 + 25;
          barHeight = Math.max(3, (val / 255) * canvas.height * 0.9);
        }

        const x = startX + i * (barWidth + gap);
        const y = canvas.height - barHeight;

        // Gradient bar
        ctx.fillStyle = isPlaying ? '#a855f7' : '#475569';
        ctx.fillRect(x, y, barWidth, barHeight);
      }
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent =
    currentTrack.durationSeconds > 0
      ? (currentTime / currentTrack.durationSeconds) * 100
      : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300">
      {/* Minimize Toggle Pill */}
      <div className="flex justify-end max-w-7xl mx-auto px-6">
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="mb-1 px-3 py-1 bg-[#120a26] border border-purple-800/40 rounded-t-lg text-xs text-purple-300 hover:text-white flex items-center gap-1.5 backdrop-blur-md shadow-lg"
          title={isMinimized ? 'Expand Audio Player' : 'Minimize Audio Player'}
        >
          <span className="font-mono text-[10px]">
            {isPlaying ? 'AUDIO ACTIVE' : 'LIL KEVO PLAYER'}
          </span>
          {isMinimized ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {!isMinimized && (
        <div className="bg-[#0c071d]/95 backdrop-blur-xl border-t border-purple-900/40 shadow-2xl shadow-black">
          {/* Top subtle progress scrubber bar */}
          <div className="relative w-full h-1 bg-purple-950/80 group">
            <div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-purple-500 to-violet-400"
              style={{ width: `${progressPercent}%` }}
            />
            <input
              type="range"
              min={0}
              max={currentTrack.durationSeconds}
              value={currentTime}
              onChange={handleSeek}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              aria-label="Seek track position"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
            {/* Left: Track Information */}
            <div className="flex items-center gap-3 min-w-0 max-w-[280px] sm:max-w-xs">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-purple-950 border border-purple-800/40">
                <img
                  src={currentTrack.albumCover}
                  alt={currentTrack.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {isPlaying && (
                  <div className="absolute inset-0 bg-purple-900/30 backdrop-blur-[1px] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <div className="text-sm font-bold text-white truncate font-display">
                  {currentTrack.title}
                </div>
                <div className="text-xs text-purple-300 truncate">
                  Lil Kevo {currentTrack.featuredArtists ? `feat. ${currentTrack.featuredArtists}` : ''}
                </div>
                <div className="text-[10px] text-slate-400 font-mono truncate">
                  {currentTrack.album} · {currentTrack.key}
                </div>
              </div>
            </div>

            {/* Middle: Controls & Scrubber */}
            <div className="flex flex-col items-center gap-1.5 flex-1 max-w-xl">
              <div className="flex items-center gap-4">
                <button
                  onClick={onPrevTrack}
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-purple-900/30 rounded-lg transition-colors"
                  aria-label="Previous track"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  onClick={onTogglePlay}
                  className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition-all transform hover:scale-105 shadow-md shadow-purple-950"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>

                <button
                  onClick={onNextTrack}
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-purple-900/30 rounded-lg transition-colors"
                  aria-label="Next track"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Time displays & scrubber input */}
              <div className="w-full flex items-center gap-3 text-xs font-mono tabular-nums text-slate-400">
                <span className="text-[11px] w-8 text-right">{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min={0}
                  max={currentTrack.durationSeconds}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  aria-label="Track progress slider"
                />
                <span className="text-[11px] w-8">{currentTrack.duration}</span>
              </div>
            </div>

            {/* Right: Audio Visualizer, Lyrics button, Volume */}
            <div className="hidden md:flex items-center gap-5 justify-end">
              {/* Mini canvas frequency waveform */}
              <div className="hidden lg:block w-20 h-6">
                <canvas
                  ref={canvasRef}
                  width={80}
                  height={24}
                  className="w-full h-full"
                />
              </div>

              {/* Lyrics Button */}
              <button
                onClick={() => onOpenLyrics(currentTrack)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-200 hover:text-white bg-purple-950/60 hover:bg-purple-900/60 border border-purple-800/40 rounded-lg transition-colors whitespace-nowrap"
              >
                <FileText className="w-3.5 h-3.5 text-purple-400" />
                <span>Lyrics</span>
              </button>

              {/* Volume Slider */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="text-slate-400 hover:text-white p-1"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-rose-400" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.02}
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  aria-label="Volume slider"
                />
              </div>

              {/* Spotify Link Out */}
              <a
                href={currentTrack.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#1DB954] hover:text-[#1ed760] hover:bg-emerald-950/40 rounded-lg transition-colors"
                title="Open on Spotify"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
