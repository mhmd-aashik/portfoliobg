// ./src/AudioPlayer.tsx
import React, { useRef, useState } from "react";

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="rounded-lg bg-gray-800 p-4 text-white shadow-lg">
        <audio ref={audioRef} src="your-audio-file.mp3" preload="auto"></audio>
        <button
          onClick={togglePlayPause}
          className="rounded-full bg-blue-500 px-4 py-2 hover:bg-blue-700 focus:outline-none"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
