"use client";

import { useAudioContext } from "@/contexts/AudioProvider";
import { playlist } from "@/contexts/AudioProvider";
import { ISong } from "@/types.d";
import "./audio-controls.css";

export default function AudioPlaylist() {
  const { currentIndex, handleSongChange } = useAudioContext() ?? {};
  return (
    <div className="audio-playlist flex flex-col justify-start items-center">
      <ul className="list-none p-2">
        {playlist.map((track: ISong, index: number) => (
          <li
            key={track.id}
            className={`audio-playlist-item ${currentIndex === index ? "active" : ""}`}
          >
            <button
              className="audio-playlist-button"
              onClick={() => handleSongChange && handleSongChange(index)}
            >
              {track.title} | {track.album} | {track.artist}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
