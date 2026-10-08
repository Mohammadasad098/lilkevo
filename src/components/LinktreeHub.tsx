import React, { useState } from 'react';
import { ARTIST_INFO } from '../data/artistData';
import {
  ExternalLink,
  Copy,
  Check,
  Instagram,
  Music,
  Youtube,
  Share2,
  Disc3,
  Sparkles,
} from 'lucide-react';

export const LinktreeHub: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showSpotifyEmbed, setShowSpotifyEmbed] = useState(true);

  const copyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      title: 'Spotify Artist Profile',
      desc: 'Stream all songs, singles & upcoming drops',
      url: ARTIST_INFO.links.spotify,
      icon: Music,
      color: 'text-[#1DB954]',
      badge: 'Streaming',
    },
    {
      title: 'Instagram (@itslilkevo_)',
      desc: 'Official visual diaries, story updates & studio reels',
      url: ARTIST_INFO.links.instagram,
      icon: Instagram,
      color: 'text-pink-400',
      badge: 'Visuals',
    },
    {
      title: 'Apple Music',
      desc: 'Lossless audio streaming & artist station',
      url: ARTIST_INFO.links.appleMusic,
      icon: Music,
      color: 'text-rose-400',
      badge: 'Lossless',
    },
    {
      title: 'TikTok (@itslilkevo_)',
      desc: 'Snippet previews, creative acoustic takes & viral clips',
      url: ARTIST_INFO.links.tiktok,
      icon: Share2,
      color: 'text-cyan-400',
      badge: 'Community',
    },
    {
      title: 'YouTube Official Channel',
      desc: 'Music videos, lyric visualizers & live recordings',
      url: ARTIST_INFO.links.youtube,
      icon: Youtube,
      color: 'text-red-400',
      badge: 'Videos',
    },
    {
      title: 'Linktree Profile (imlilkevo)',
      desc: 'Original multi-link hub for direct booking & contact',
      url: ARTIST_INFO.links.linktree,
      icon: ExternalLink,
      color: 'text-emerald-400',
      badge: 'Verified Hub',
    },
  ];

  return (
    <section id="links" className="py-24 bg-[#0a0518] border-t border-purple-950/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400">
            <span>Direct Access</span>
            <span aria-hidden="true">·</span>
            <span>Linktree Verified</span>
            <span aria-hidden="true">·</span>
            <span>@itslilkevo_</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Official Links & Streaming Hub
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light">
            Connect directly with Lil Kevo across all verified streaming platforms and social channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Linktree Artist Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#120a28] border border-purple-800/40 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Official Profile Avatar */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-purple-500 shadow-xl shadow-purple-950/80 bg-purple-950">
                  <img
                    src={ARTIST_INFO.photos.profile}
                    alt="Lil Kevo Linktree Avatar"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = ARTIST_INFO.photos.hero;
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white font-display">
                    {ARTIST_INFO.name}
                  </h3>
                  <div className="text-xs font-mono text-purple-400 mt-0.5">
                    {ARTIST_INFO.handle} · linktr.ee/{ARTIST_INFO.linktreeHandle}
                  </div>
                </div>

                {/* Bio pill badge replacement -> unboxed text */}
                <div className="py-2 px-4 rounded-xl bg-purple-950/60 border border-purple-800/40 text-center">
                  <p className="text-sm font-medium text-purple-200">
                    {ARTIST_INFO.bioHeadline}
                  </p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                  Official music, creative releases, poetic essays, and upcoming tour notices.
                </p>

                {/* Copy link or share */}
                <div className="w-full pt-4 border-t border-purple-900/40 flex items-center justify-center gap-3">
                  <button
                    onClick={() => copyLink(ARTIST_INFO.links.linktree)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-purple-200 bg-purple-950/80 hover:bg-purple-900 border border-purple-700/50 rounded-xl transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied Link!' : 'Copy Linktree URL'}</span>
                  </button>

                  <a
                    href={ARTIST_INFO.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 text-pink-400 bg-pink-950/40 hover:bg-pink-900/40 border border-pink-700/40 rounded-xl transition-colors"
                    title="Open Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Spotify Official Player Toggle */}
            <div className="p-6 rounded-2xl bg-[#0e0722] border border-purple-900/40 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Disc3 className="w-4 h-4 text-[#1DB954]" />
                  <span className="text-xs font-bold text-white uppercase font-mono">
                    Official Spotify Player
                  </span>
                </div>
                <button
                  onClick={() => setShowSpotifyEmbed(!showSpotifyEmbed)}
                  className="text-xs text-purple-400 hover:text-purple-300 font-medium"
                >
                  {showSpotifyEmbed ? 'Hide Embed' : 'Show Embed'}
                </button>
              </div>

              {showSpotifyEmbed && (
                <div className="rounded-xl overflow-hidden shadow-inner border border-purple-950">
                  <iframe
                    title="Lil Kevo Spotify Player"
                    src={`https://open.spotify.com/embed/artist/${ARTIST_INFO.links.spotifyArtistId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-xl"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Verified Social & Streaming Links List */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 mb-2">
              Verified Outlets & Social Channels
            </div>

            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 rounded-xl bg-[#120a28]/80 hover:bg-[#1a0f38] border border-purple-900/30 hover:border-purple-600/60 transition-all shadow-md"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`p-2.5 rounded-lg bg-[#090514] border border-purple-900/40 shrink-0 ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-white group-hover:text-purple-200 transition-colors font-display flex items-center gap-2">
                          <span>{item.title}</span>
                          <span className="text-[10px] font-mono text-purple-400 font-normal">
                            [{item.badge}]
                          </span>
                        </div>
                        <div className="text-xs text-slate-400 truncate mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </div>

                    <div className="text-slate-400 group-hover:text-white shrink-0 p-1">
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
