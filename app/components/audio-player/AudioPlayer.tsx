"use client";

import { useState } from "react";
import AudioControls from "./AudioControls";
import AudioNowPlaying from "./AudioNowPlaying";
import AudioPlaylist from "./AudioPlaylist";
import ToggleAudioPlayer from "./ToggleAudioPlayer";
import "./audio-player.css";

export default function AudioPlayer() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="audio-player-component">
      <AudioNowPlaying />
      <div
        className={`audio-player-card shadow-xl ${isVisible ? "visible" : ""}`}
      >
        <AudioPlaylist />
        <AudioControls />
      </div>
      <ToggleAudioPlayer isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
}
