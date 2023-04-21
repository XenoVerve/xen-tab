export interface MusicTrack {
    title: string;
    artist: string;
    artwork: string;
    src: string;
    length: number;
    currentTime: number;
    status: MusicTrackStatus;
}

export type MusicTrackStatus = 'playing' | 'paused' | 'stopped';