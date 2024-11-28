"use client";

import { useAudioContext } from "@/contexts/AudioProvider";
import { playlist } from "@/contexts/AudioProvider";
import { ISong } from "@/types.d";

export default function AudioPlaylist() {
  const { currentIndex, handleSongChange } = useAudioContext() ?? {};
  return (
    <div className="flex flex-col justify-start items-center">
      <ul className="list-none p-2">
        {playlist.map((track: ISong, index: number) => (
          <li
            key={track.id}
            className={`text-base ${currentIndex === index ? "active" : ""}`}
          >
            <button
              className="text-md subpixel-antialiased"
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
