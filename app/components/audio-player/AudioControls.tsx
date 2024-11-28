'use client';

import { useEffect } from 'react';
import { useAudioContext } from '@/contexts/AudioProvider';
import { 
    PiPlay,
    PiPause,
    PiSkipBack,
    PiSkipForward,
    PiSpeakerSlash
} from 'react-icons/pi';
import "./audio-controls.css";

export default function AudioControls() {
  const {
    volume,
    mute,
    playback,
    handlePlayPause,
    handleVolumeChange,
    handleMuteChange,
    handlePreviousSong,
    handleNextSong,
    volumeSliderRef
  } = useAudioContext() ?? {};

  useEffect(() => {
    if (volumeSliderRef?.current) {
      const value = ((volume ?? 0) * 100).toFixed(2); 
      volumeSliderRef.current.style.backgroundSize = `${value}% 100%`;
    }
  }, [volume, volumeSliderRef]);

  const volumeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleVolumeChange?.(event);
    const value = ((volume ?? 0) * 100).toFixed(2);
    event.target.style.backgroundSize = `${value}% 100%`;
  };

  return (
    <div className="min-h-32 w-full max-w-96 mx-auto flex flex-col justify-between items-center my-4">
      <section className="w-full flex justify-between">
        <button onClick={handlePreviousSong} className="control-btn">
          <PiSkipBack size={32} />
          <label className="control-label">Previous</label>
        </button>

        <button onClick={handlePlayPause} className="control-btn">
          {playback ? (
            <PiPause size={44}  />
          ) : (
            <PiPlay size={44}  />
          )}
          <label className="control-label">{playback ? 'Pause' : 'Play'}</label>
        </button>

        <button onClick={handleNextSong} className="control-btn">
          <PiSkipForward size={32} />
          <label className="control-label">Next</label>
        </button>
      </section>

      <div className="w-full flex justify-between items-center">
        <button
          id="mute"
          type="button"
          aria-label="Mute"
          onClick={handleMuteChange}
          className="control-btn"
        >
          <PiSpeakerSlash size={28}  />
          <label className="control-label">{mute ? 'Unmute' : 'Mute'}</label>
        </button>
        <div className="relative w-full h-full flex justify-center items-center p-4">
          <input
            id="volume"
            ref={volumeSliderRef}
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={volumeChangeHandler}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
