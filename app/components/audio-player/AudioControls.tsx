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
    <div className="audio-controls-container">
      <section className="audio-controls-top-half">
        <button onClick={handlePreviousSong} className="audio-controls-button">
          <PiSkipBack size={40} />
          <label className="audio-controls-label">Previous</label>
        </button>

        <button onClick={handlePlayPause} className="audio-controls-button">
          {playback ? (
            <PiPause size={48}  />
          ) : (
            <PiPlay size={48}  />
          )}
          <label className="audio-controls-label">{playback ? 'Pause' : 'Play'}</label>
        </button>

        <button onClick={handleNextSong} className="audio-controls-button">
          <PiSkipForward size={40} />
          <label className="audio-controls-label">Next</label>
        </button>
      </section>

      <div className="audio-controls-bottom-half">
        <button
          id="mute"
          type="button"
          aria-label="Mute"
          onClick={handleMuteChange}
          className="audio-controls-button"
        >
          <PiSpeakerSlash size={32}  />
          <label className="audio-controls-label">{mute ? 'Unmute' : 'Mute'}</label>
        </button>
        <div className="audio-controls-volume">
          <input
            id="volume"
            ref={volumeSliderRef}
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={volumeChangeHandler}
          />
        </div>
      </div>
    </div>
  );
}
