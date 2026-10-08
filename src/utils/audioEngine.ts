/**
 * Web Audio Engine for Lil Kevo website.
 * Generates aesthetic melodic chord progressions, 808 sub-bass, and trap rhythms
 * matched to each track's key and BPM, so every song is genuinely playable with sound!
 */

class LilKevoAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private currentBpm = 130;
  private currentKey = 'F# Minor';
  private timerId: number | null = null;
  private step = 0;
  private masterGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private volume = 0.8;
  private onTimeUpdateCallback?: (currentTime: number) => void;
  private playbackStartTime = 0;
  private pausedAt = 0;
  private duration = 194;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getAnalyser(): AnalyserNode | null {
    return this.analyser;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public playTrack(bpm: number, key: string, durationSeconds: number, startFromSec = 0) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    this.currentBpm = bpm || 130;
    this.currentKey = key || 'F# Minor';
    this.duration = durationSeconds;
    this.pausedAt = startFromSec;
    this.playbackStartTime = this.ctx.currentTime - startFromSec;
    this.isPlaying = true;
    this.step = 0;

    this.stopLoop();
    this.startLoop();
  }

  public pause() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.ctx) {
      this.pausedAt = this.ctx.currentTime - this.playbackStartTime;
    }
    this.stopLoop();
  }

  public resume() {
    if (this.isPlaying) return;
    this.playTrack(this.currentBpm, this.currentKey, this.duration, this.pausedAt);
  }

  public seek(seconds: number) {
    this.pausedAt = Math.max(0, Math.min(this.duration, seconds));
    if (this.ctx) {
      this.playbackStartTime = this.ctx.currentTime - this.pausedAt;
    }
  }

  public getCurrentTime(): number {
    if (!this.isPlaying || !this.ctx) return this.pausedAt;
    const elapsed = this.ctx.currentTime - this.playbackStartTime;
    if (elapsed >= this.duration) {
      this.stop();
      return 0;
    }
    return elapsed;
  }

  public stop() {
    this.isPlaying = false;
    this.pausedAt = 0;
    this.stopLoop();
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private stopLoop() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private startLoop() {
    const stepDurationMs = (60 / this.currentBpm / 4) * 1000; // 16th notes
    this.timerId = window.setInterval(() => {
      if (!this.isPlaying) return;
      this.tick();
    }, stepDurationMs);
  }

  private getRootFreq(): number {
    const noteMap: Record<string, number> = {
      'C': 130.81,
      'C#': 138.59,
      'D': 146.83,
      'Eb': 155.56,
      'E': 164.81,
      'F': 174.61,
      'F#': 185.0,
      'G': 196.0,
      'G#': 207.65,
      'A': 220.0,
      'Bb': 233.08,
      'B': 246.94,
    };

    const clean = this.currentKey.replace(' Minor', '').replace(' Major', '').trim();
    return noteMap[clean] || 185.0;
  }

  private tick() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const baseFreq = this.getRootFreq();

    // 16-step pattern
    const patternStep = this.step % 16;

    // 808 Sub-bass kick on beats 0, 6, 10
    if (patternStep === 0 || patternStep === 6 || patternStep === 10) {
      this.trigger808(now, baseFreq * 0.5);
    }

    // Hi-hat rolls on every even 16th note, with subtle swing
    if (patternStep % 2 === 0 || patternStep === 7 || patternStep === 15) {
      this.triggerHiHat(now, patternStep === 7 ? 0.35 : 0.2);
    }

    // Ambient Synth Chords on bars (steps 0, 8)
    if (patternStep === 0 || patternStep === 8) {
      const semitones = patternStep === 0 ? [0, 3, 7, 10] : [5, 8, 12, 15];
      this.triggerChord(now, baseFreq, semitones);
    }

    // Snare / Rimshot on beats 4 and 12
    if (patternStep === 4 || patternStep === 12) {
      this.triggerSnare(now);
    }

    this.step++;
  }

  private trigger808(time: number, freq: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq * 1.5, time);
    osc.frequency.exponentialRampToValueAtTime(freq, time + 0.08);

    gain.gain.setValueAtTime(0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.45);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.5);
  }

  private triggerHiHat(time: number, level: number) {
    if (!this.ctx || !this.masterGain) return;
    const bufferSize = this.ctx.sampleRate * 0.03;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(7500, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(level * 0.25, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.03);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + 0.04);
  }

  private triggerSnare(time: number) {
    if (!this.ctx || !this.masterGain) return;
    const bufferSize = this.ctx.sampleRate * 0.12;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(3200, time);
    filter.Q.setValueAtTime(1.5, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.12);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + 0.13);
  }

  private triggerChord(time: number, rootFreq: number, semitones: number[]) {
    if (!this.ctx || !this.masterGain) return;
    semitones.forEach((st) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      const filter = this.ctx!.createBiquadFilter();

      const noteFreq = rootFreq * Math.pow(2, st / 12);
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(noteFreq, time);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, time);
      filter.frequency.exponentialRampToValueAtTime(600, time + 0.9);

      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(0.08, time + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.9);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(time);
      osc.stop(time + 1.0);
    });
  }
}

export const audioEngine = new LilKevoAudioEngine();
