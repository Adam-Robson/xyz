export type ITitle = string;

export interface ISong {
    id: number;
    title: string;
    album: string;
    artist: string;
    url: string;
    duration: string;
  }
  
  export interface IAudioContext {
    playlist: ISong[];
    song: ISong;
    currentIndex: number;
    playback: boolean;
    handleVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleMuteChange: () => void;
    handlePlayPause: () => void;
    handleSongChange: (newIndex: number) => void;
    handlePreviousSong: () => void;
    handleNextSong: () => void;
    elapsed: string;
    duration: string;
    volume: number;
    setVolume: React.Dispatch<React.SetStateAction<number>>;
    mute: boolean;
    setMute: React.Dispatch<React.SetStateAction<boolean>>;
    volumeSliderRef: React.RefObject<HTMLInputElement>;
  }
  
  export type TAudioProviderProps = {
    children: React.ReactNode;
    initialVolume?: number;
    initialIndex?: number;
  };


export interface IToggleAudioPlayerProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


export interface BackgroundProps {
  height: number;
  width: number;
  src: string;
  alt: string;
  overlay?: string;
  children?: React.ReactNode;
}

  