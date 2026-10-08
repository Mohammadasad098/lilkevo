import React, { useState } from 'react';
import { TRACKS, Track } from './data/artistData';
import { audioEngine } from './utils/audioEngine';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedAlbum } from './components/FeaturedAlbum';
import { DiscographySection } from './components/DiscographySection';
import { PoetryVault } from './components/PoetryVault';
import { LiveTourSection } from './components/LiveTourSection';
import { MerchSection } from './components/MerchSection';
import { LinktreeHub } from './components/LinktreeHub';
import { Footer } from './components/Footer';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { LyricsModal } from './components/LyricsModal';
import { SpotifyEmbedModal } from './components/SpotifyEmbedModal';

export default function App() {
  const [currentTrack, setCurrentTrack] = useState<Track>(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [lyricsModalTrack, setLyricsModalTrack] = useState<Track | null>(null);
  const [isSpotifyModalOpen, setIsSpotifyModalOpen] = useState<boolean>(false);

  const handlePlayTrack = (trackId: string) => {
    const target = TRACKS.find((t) => t.id === trackId) || TRACKS[0];
    if (currentTrack.id === target.id && isPlaying) {
      audioEngine.pause();
      setIsPlaying(false);
    } else {
      setCurrentTrack(target);
      setIsPlaying(true);
      audioEngine.playTrack(target.bpm, target.key, target.durationSeconds);
    }
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      audioEngine.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      audioEngine.resume();
    }
  };

  const handleNextTrack = () => {
    const currentIndex = TRACKS.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % TRACKS.length;
    const next = TRACKS[nextIndex];
    setCurrentTrack(next);
    setIsPlaying(true);
    audioEngine.playTrack(next.bpm, next.key, next.durationSeconds);
  };

  const handlePrevTrack = () => {
    const currentIndex = TRACKS.findIndex((t) => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + TRACKS.length) % TRACKS.length;
    const prev = TRACKS[prevIndex];
    setCurrentTrack(prev);
    setIsPlaying(true);
    audioEngine.playTrack(prev.bpm, prev.key, prev.durationSeconds);
  };

  return (
    <div className="min-h-screen bg-[#090514] text-slate-100 flex flex-col selection:bg-purple-500/30 selection:text-purple-200">
      {/* Top 3-Zone Navigation */}
      <Navbar onOpenSpotifyEmbed={() => setIsSpotifyModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onPlayTrack={handlePlayTrack}
          currentTrackId={currentTrack.id}
          isPlaying={isPlaying}
        />

        {/* Can't Be Tamed LP Spotlight */}
        <FeaturedAlbum
          currentTrackId={currentTrack.id}
          isPlaying={isPlaying}
          onPlayTrack={handlePlayTrack}
          onOpenLyrics={(track) => setLyricsModalTrack(track)}
        />

        {/* Full Track Discography & Audio Vault */}
        <DiscographySection
          currentTrackId={currentTrack.id}
          isPlaying={isPlaying}
          onPlayTrack={handlePlayTrack}
          onOpenLyrics={(track) => setLyricsModalTrack(track)}
        />

        {/* 20 Year Old Poet Vault & Verses */}
        <PoetryVault
          onOpenLyrics={(track) => setLyricsModalTrack(track)}
          onPlayTrack={handlePlayTrack}
        />

        {/* Live Tour Schedule */}
        <LiveTourSection />

        {/* Vinyl & Apparel Merch Capsule */}
        <MerchSection />

        {/* Linktree & Instagram Official Hub */}
        <LinktreeHub />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Bottom Audio Player Bar */}
      <AudioPlayerBar
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onNextTrack={handleNextTrack}
        onPrevTrack={handlePrevTrack}
        onOpenLyrics={(track) => setLyricsModalTrack(track)}
      />

      {/* Synchronized Lyrics Reader Modal */}
      <LyricsModal
        track={lyricsModalTrack}
        onClose={() => setLyricsModalTrack(null)}
        onPlayTrack={handlePlayTrack}
        isPlaying={isPlaying}
        currentTrackId={currentTrack.id}
      />

      {/* Spotify Artist Embed Modal */}
      <SpotifyEmbedModal
        isOpen={isSpotifyModalOpen}
        onClose={() => setIsSpotifyModalOpen(false)}
      />
    </div>
  );
}
