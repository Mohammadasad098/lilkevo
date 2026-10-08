import cantBeTamedCover from '@/src/assets/images/cant_be_tamed_cover_1791470013488.jpg';
import beforeTheBlessingsCover from '@/src/assets/images/before_the_blessings_cover_1791470028028.jpg';
import biggerDreamsCover from '@/src/assets/images/bigger_dreams_single_1791470040773.jpg';

export interface Track {
  id: string;
  title: string;
  featuredArtists?: string;
  album: string;
  albumCover: string;
  releaseYear: number;
  duration: string;
  durationSeconds: number;
  spotifyUrl: string;
  appleMusicUrl?: string;
  category: 'album' | 'single' | 'feature';
  lyricsExcerpt: string;
  fullLyrics: string[];
  bpm: number;
  key: string;
  mood: string;
}

export interface Release {
  id: string;
  title: string;
  type: 'Album' | 'EP' | 'Single';
  releaseYear: number;
  releaseDate: string;
  coverImage: string;
  trackCount: number;
  description: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  featuredTracks: string[];
}

export interface TourDate {
  id: string;
  city: string;
  venue: string;
  country: string;
  date: string;
  status: 'Tickets Available' | 'Selling Fast' | 'Sold Out';
  ticketUrl?: string;
}

export interface MerchItem {
  id: string;
  name: string;
  type: string;
  price: string;
  image: string;
  tag: string;
  description: string;
}

export const ARTIST_INFO = {
  name: 'Lil Kevo',
  handle: '@itslilkevo_',
  linktreeHandle: 'imlilkevo',
  bioHeadline: '20 year old POET 💜 New Album OCT 9 🎲',
  bioLong:
    'Lil Kevo is a 20-year-old poet and recording artist crafting a distinct nocturnal soundscape. Blending melodic vulnerability, reflective penmanship, and evocative cadence, his music reflects the turbulent journey of youth, love, hardship, and unwavering ambition. His latest studio project "Can’t Be Tamed" stands as a testament to staying genuine in an unfiltered world.',
  location: 'United States',
  photos: {
    hero: '/images/lil_kevo_apple.png',
    spotify: '/images/lil_kevo_spotify.jpg',
    profile: '/images/lil_kevo_linktree.jpg',
    artCover: cantBeTamedCover,
  },
  links: {
    spotify:
      'https://open.spotify.com/artist/3GCaVn69b5amgFhOzlNQq8?si=A_lKR9eHTzChTaj2-i9RAg&utm_source=copy-link',
    spotifyArtistId: '3GCaVn69b5amgFhOzlNQq8',
    instagram: 'https://www.instagram.com/itslilkevo_',
    tiktok: 'https://tiktok.com/@itslilkevo_',
    youtube: 'https://www.youtube.com/channel/UCe7uh1KkTTGBWCxRjQMxW5g',
    appleMusic: 'https://music.apple.com/us/artist/lil-kevo/1867523578',
    linktree: 'https://linktr.ee/imlilkevo',
  },
  stats: [
    { label: 'Studio Projects', value: '3' },
    { label: 'Catalog Records', value: '18+' },
    { label: 'Age & Vision', value: '20 · Poet' },
    { label: 'Next Chapter', value: 'OCT 9 🎲' },
  ],
};

export const RELEASES: Release[] = [
  {
    id: 'cant-be-tamed',
    title: 'Can’t Be Tamed',
    type: 'Album',
    releaseYear: 2026,
    releaseDate: 'October 2026',
    coverImage: cantBeTamedCover,
    trackCount: 14,
    description:
      'The defining studio album capturing midnight meditations, unyielding resolve, and deep brotherhood collaborations with K30 and Tr3yBills.',
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    featuredTracks: ['Seen Enough', '2 Faced', 'Be The Change', 'Empty Home'],
  },
  {
    id: 'before-the-blessings',
    title: 'Before The Blessings',
    type: 'EP',
    releaseYear: 2026,
    releaseDate: '2026',
    coverImage: beforeTheBlessingsCover,
    trackCount: 2,
    description:
      'A raw prelude project confronting spiritual temptations and fearlessness ahead of the breakthrough.',
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    featuredTracks: ['Never Be Afraid', 'Temptations In Disguise'],
  },
  {
    id: 'bigger-dreams',
    title: 'Bigger Dreams (feat. K30 & Lil Icy)',
    type: 'Single',
    releaseYear: 2026,
    releaseDate: '2026',
    coverImage: biggerDreamsCover,
    trackCount: 1,
    description:
      'Anthemic collaboration celebrating the hunger to elevate beyond circumstances with fellow innovators K30 and Lil Icy.',
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    featuredTracks: ['Bigger Dreams'],
  },
];

export const TRACKS: Track[] = [
  {
    id: 'seen-enough',
    title: 'Seen Enough',
    featuredArtists: 'K30',
    album: 'Can’t Be Tamed',
    albumCover: cantBeTamedCover,
    releaseYear: 2026,
    duration: '3:14',
    durationSeconds: 194,
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    category: 'album',
    bpm: 130,
    key: 'F# Minor',
    mood: 'Nocturnal & Reflective',
    lyricsExcerpt:
      'Looked in the rear view, I seen enough to know the difference between love and counterfeit promises...',
    fullLyrics: [
      '[Intro: Lil Kevo]',
      'Yeah, midnight whispers in the cold wind',
      'Roll the dice, twenty years deep, you know how it goes',
      '',
      '[Verse 1: Lil Kevo]',
      'Looked in the rear view, I seen enough',
      'To know the difference between true love and counterfeit trust',
      'They smiled in my face while they turned to dust',
      'I keep my circle guarded, in poetic rhymes I trust',
      'Raindrops sliding down the window pane',
      'Every setback taught me how to bear the pain',
      'They said slow down, boy you movin’ insane',
      'Now they asking how I navigated through the rain',
      '',
      '[Chorus: Lil Kevo & K30]',
      'Seen enough, seen enough of the fake',
      'Took the high road for my family’s sake',
      'Can’t be tamed, no chain I can’t break',
      'Roll a six, watch what we gonna make',
      '',
      '[Verse 2: K30]',
      'K30 on the beat, brother standing tall',
      'We came from nothing, had our backs against the wall',
      'Now when they dial up, we don’t even take the call',
      'Built this legacy, no we never gonna fall',
      '',
      '[Outro]',
      'Seen enough... yeah, 20 year old poet, OCT 9.',
    ],
  },
  {
    id: '2-faced',
    title: '2 Faced',
    featuredArtists: 'K30',
    album: 'Can’t Be Tamed',
    albumCover: cantBeTamedCover,
    releaseYear: 2026,
    duration: '2:48',
    durationSeconds: 168,
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    category: 'album',
    bpm: 124,
    key: 'C Minor',
    mood: 'Dark Trap & Melodic',
    lyricsExcerpt:
      'Which face are you showing me tonight? Shadows change when the spotlight hits the pavement...',
    fullLyrics: [
      '[Verse 1: Lil Kevo]',
      'Masks slipping off when the sun sets down',
      'Can’t let the noise turn my focus upside down',
      '2 Faced energy walking in my town',
      'Only few real ones get to wear the crown',
      '',
      '[Chorus]',
      '2 Faced, I can see behind the veil',
      'Wrote my story when they wished that I would fail',
      'Purple smoke rising as the sirens wail',
      'Ship’s afloat, watch me set the sail',
    ],
  },
  {
    id: 'be-the-change',
    title: 'Be The Change',
    album: 'Can’t Be Tamed',
    albumCover: cantBeTamedCover,
    releaseYear: 2026,
    duration: '3:02',
    durationSeconds: 182,
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    category: 'album',
    bpm: 138,
    key: 'A Minor',
    mood: 'Empowering & Soulful',
    lyricsExcerpt:
      'If you waiting on the world to shift its axis, you gonna stay stagnant. Be the change you seek.',
    fullLyrics: [
      '[Intro]',
      'Poetry isn’t what you read, it’s what you bleed...',
      '',
      '[Verse 1]',
      'Looking at the mirror wondering what is next',
      'Sending silent prayers when my soul is stressed',
      'Gave up the excuses, left behind the rest',
      'Turned every single trial into a blessed test',
      '',
      '[Chorus]',
      'Be the change, don’t just watch it burn',
      'Every scar is a chapter that you had to learn',
      'Money come and go, but the respect you earn',
      'Standing in the light, now it’s our turn',
    ],
  },
  {
    id: 'bigger-dreams',
    title: 'Bigger Dreams',
    featuredArtists: 'K30 & Lil Icy',
    album: 'Bigger Dreams - Single',
    albumCover: biggerDreamsCover,
    releaseYear: 2026,
    duration: '2:40',
    durationSeconds: 160,
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    category: 'single',
    bpm: 142,
    key: 'E Minor',
    mood: 'Triumphant & Kinetic',
    lyricsExcerpt:
      'Started with a notebook and twenty dollars in a pocket. Now our dreams bigger than the city lights.',
    fullLyrics: [
      '[Lil Kevo]',
      'Bigger dreams in a crowded room',
      'Blooming flowers even under doom',
      'With K30 and Icy, we ignite the boom',
      'Watch us take this music to the moon',
    ],
  },
  {
    id: 'never-be-afraid',
    title: 'Never Be Afraid',
    featuredArtists: 'Yrk Rari',
    album: 'Before The Blessings',
    albumCover: beforeTheBlessingsCover,
    releaseYear: 2026,
    duration: '2:55',
    durationSeconds: 175,
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    category: 'album',
    bpm: 128,
    key: 'D Minor',
    mood: 'Atmospheric & Resilient',
    lyricsExcerpt:
      'Fear is just a ghost that evaporates when you walk towards it. Never back down.',
    fullLyrics: [
      '[Verse 1: Lil Kevo]',
      'Never be afraid of the road less seen',
      'Chasing down a reality bigger than a dream',
      'Rari on the verse, know what we mean',
      'Pure dedication running in the bloodstream',
    ],
  },
  {
    id: 'temptations-in-disguise',
    title: 'Temptations In Disguise',
    featuredArtists: 'K30',
    album: 'Before The Blessings',
    albumCover: beforeTheBlessingsCover,
    releaseYear: 2026,
    duration: '3:22',
    durationSeconds: 202,
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    category: 'album',
    bpm: 120,
    key: 'G Minor',
    mood: 'Introspective & Moody',
    lyricsExcerpt:
      'Gold glitters even when it’s brass. Guard your heart when the tempter whispers.',
    fullLyrics: [
      '[Lil Kevo]',
      'Sweet words that carry hidden knives',
      'Gotta stay awake in these modern lives',
      'K30 told me focus on the prize',
      'See right through temptations in disguise',
    ],
  },
  {
    id: 'empty-home',
    title: 'Empty Home',
    album: 'Can’t Be Tamed',
    albumCover: cantBeTamedCover,
    releaseYear: 2026,
    duration: '2:52',
    durationSeconds: 172,
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    category: 'album',
    bpm: 115,
    key: 'B Minor',
    mood: 'Emotional & Melancholic',
    lyricsExcerpt:
      'Walls hold memories of who we were before the microphones and studio clocks.',
    fullLyrics: [
      '[Lil Kevo]',
      'Echoes down the hallway, dust upon the chair',
      'Searching for a presence that is no longer there',
      'Turned my solitary sorrow into songs to share',
      'Now millions humming along to my quiet prayer',
    ],
  },
  {
    id: 'fade-away',
    title: 'Fade Away',
    album: 'Can’t Be Tamed',
    albumCover: cantBeTamedCover,
    releaseYear: 2026,
    duration: '3:18',
    durationSeconds: 198,
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    category: 'album',
    bpm: 132,
    key: 'F Minor',
    mood: 'Vulnerable & Dynamic',
    lyricsExcerpt:
      'Will they remember the words when the reverb fades into silence?',
    fullLyrics: [
      '[Lil Kevo]',
      'Don’t let the fire fade away',
      'Writing poetry until the light of day',
      'If tomorrow’s promised, what you gonna say?',
      'I pour my spirit out without delay',
    ],
  },
  {
    id: 'made-it-happen',
    title: 'Made It Happen',
    album: 'Can’t Be Tamed',
    albumCover: cantBeTamedCover,
    releaseYear: 2026,
    duration: '3:06',
    durationSeconds: 186,
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    category: 'album',
    bpm: 136,
    key: 'D Minor',
    mood: 'Triumphant',
    lyricsExcerpt:
      'Nobody believed when we mapped it on napkins. Look at the numbers now, we made it happen.',
    fullLyrics: [
      '[Lil Kevo]',
      'From late nights coughing over cold tracks',
      'To headline talks and rolling off the racks',
      'We made it happen, and that is just the facts',
    ],
  },
  {
    id: 'aint-easy',
    title: 'Ain’t Easy',
    featuredArtists: 'Tr3yBills',
    album: 'Can’t Be Tamed',
    albumCover: cantBeTamedCover,
    releaseYear: 2026,
    duration: '3:04',
    durationSeconds: 184,
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    category: 'album',
    bpm: 134,
    key: 'C# Minor',
    mood: 'Grit & Hustle',
    lyricsExcerpt:
      'Ain’t easy being genuine in a room full of mannequins. Bills in my corner, we locked in.',
    fullLyrics: [
      '[Lil Kevo & Tr3yBills]',
      'Ain’t easy, but nothing worth having ever is',
      'Handling the business, handling the biz',
      'Real lyricism, that’s what it is',
    ],
  },
  {
    id: 'cant-stop-me-remix',
    title: 'Can’t Stop Me [Remix]',
    featuredArtists: 'K30',
    album: 'Can’t Be Tamed',
    albumCover: cantBeTamedCover,
    releaseYear: 2026,
    duration: '3:35',
    durationSeconds: 215,
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    category: 'album',
    bpm: 140,
    key: 'F# Minor',
    mood: 'High Energy Anthem',
    lyricsExcerpt:
      'Pedal to the floor, brakes disconnected. We unstoppable, exactly as expected.',
    fullLyrics: [
      '[Lil Kevo]',
      'Can’t stop me, no brick wall too wide',
      'K30 riding shotgun, rhythm by our side',
      'Took the pain and turned it into pride',
    ],
  },
  {
    id: 'heroes-villains',
    title: 'Heroes & Villains',
    album: 'Can’t Be Tamed',
    albumCover: cantBeTamedCover,
    releaseYear: 2026,
    duration: '3:11',
    durationSeconds: 191,
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    category: 'album',
    bpm: 126,
    key: 'G# Minor',
    mood: 'Cinematic Noir',
    lyricsExcerpt:
      'Depending on whose story you read, you either save the city or watch it burn.',
    fullLyrics: [
      '[Lil Kevo]',
      'Heroes and villains divided by a line',
      'Both chasing justice in the sands of time',
      'I stay true to my own design',
    ],
  },
  {
    id: 'tunnel-vision',
    title: 'Tunnel Vision',
    album: 'Can’t Be Tamed',
    albumCover: cantBeTamedCover,
    releaseYear: 2026,
    duration: '2:50',
    durationSeconds: 170,
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    category: 'album',
    bpm: 135,
    key: 'A Minor',
    mood: 'Focused & Relentless',
    lyricsExcerpt:
      'Blinders on, I only see the finish line. All background noise tuned out.',
    fullLyrics: [
      '[Lil Kevo]',
      'Tunnel vision on the paper and the sound',
      'Lifting up the people that were down',
      'Poetry the weapon, truth is unbound',
    ],
  },
  {
    id: 'patience',
    title: 'Patience',
    featuredArtists: 'K30',
    album: 'Can’t Be Tamed',
    albumCover: cantBeTamedCover,
    releaseYear: 2026,
    duration: '3:08',
    durationSeconds: 188,
    spotifyUrl: ARTIST_INFO.links.spotify,
    appleMusicUrl: ARTIST_INFO.links.appleMusic,
    category: 'album',
    bpm: 118,
    key: 'E Minor',
    mood: 'Slow Burn & Soulful',
    lyricsExcerpt:
      'Trees don’t bear fruit overnight. Planting verses in the dark, waiting for sunrise.',
    fullLyrics: [
      '[Lil Kevo & K30]',
      'Patience is the currency of masters',
      'Slow and steady outlasts all disasters',
      'Keep your heart calm when it beats faster',
    ],
  },
];

export const TOUR_DATES: TourDate[] = [
  {
    id: 'tour-1',
    city: 'Atlanta, GA',
    venue: 'The Masquerade (Heaven Stage)',
    country: 'USA',
    date: 'Nov 14, 2026',
    status: 'Selling Fast',
  },
  {
    id: 'tour-2',
    city: 'Houston, TX',
    venue: 'Warehouse Live Midtown',
    country: 'USA',
    date: 'Nov 21, 2026',
    status: 'Tickets Available',
  },
  {
    id: 'tour-3',
    city: 'Chicago, IL',
    venue: 'Subterranean',
    country: 'USA',
    date: 'Dec 05, 2026',
    status: 'Tickets Available',
  },
  {
    id: 'tour-4',
    city: 'Brooklyn, NY',
    venue: 'Baby’s All Right',
    country: 'USA',
    date: 'Dec 18, 2026',
    status: 'Selling Fast',
  },
  {
    id: 'tour-5',
    city: 'Los Angeles, CA',
    venue: 'The Roxy Theatre',
    country: 'USA',
    date: 'Jan 10, 2027',
    status: 'Tickets Available',
  },
];

export const MERCH_ITEMS: MerchItem[] = [
  {
    id: 'merch-1',
    name: 'Can’t Be Tamed Limited Violet Vinyl LP',
    type: 'Physical Vinyl · 180g Custom Purple Marbled',
    price: '$38.00',
    image: cantBeTamedCover,
    tag: 'Limited Edition',
    description:
      'Collector edition 180g heavyweight double vinyl pressed on translucent obsidian-violet marble. Includes full lyric booklet with Lil Kevo hand-written poetry notes.',
  },
  {
    id: 'merch-2',
    name: '“20 Year Old Poet” Heavyweight Hooded Sweatshirt',
    type: 'Apparel · 480 GSM French Terry Cotton',
    price: '$72.00',
    image: biggerDreamsCover,
    tag: 'Tour Capsule',
    description:
      'Custom dyed nocturnal pigment wash hoodie with embroidered dice chest emblem and high-density screenprinted verse on reverse.',
  },
  {
    id: 'merch-3',
    name: 'Nocturnal Dice & Verse Oversized Tee',
    type: 'Apparel · 260 GSM Pre-Shrunk Jersey',
    price: '$38.00',
    image: beforeTheBlessingsCover,
    tag: 'Popular',
    description:
      'Vintage boxy silhouette tee featuring the official OCT 9 dice artwork and reflective metallic purple branding.',
  },
];

export const POETRY_SNIPPETS = [
  {
    id: 'verse-1',
    lines: [
      '“I learned to sculpt my sorrow into stanzas,',
      'When the nights gave no easy answers.',
      'A twenty-year-old soul with centuries of ink,',
      'We move before the critics even blink.”',
    ],
    citation: 'From the Studio Notebook · Can’t Be Tamed Era',
  },
  {
    id: 'verse-2',
    lines: [
      '“Roll the dice against the midnight asphalt,',
      'If we rise, it’s destiny; if we fall, it’s our own fault.',
      'No counterfeit applause, no borrowed crown,',
      'The quiet poet walking through the neon town.”',
    ],
    citation: 'October 9 Journal Excerpt · Lil Kevo',
  },
];
