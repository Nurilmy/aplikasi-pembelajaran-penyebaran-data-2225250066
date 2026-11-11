import { useRef, useState, useEffect } from "react";
import "./MusicPlayer.css";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(40);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (error) {
        console.error("Musik gagal diputar:", error);
        alert("Musik gagal diputar. Periksa file audio.");
      }
    }
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src="/audio/study-music.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="music-icon">🎵</div>

      <div className="music-info">
        <strong>Study Time</strong>
        <span>Happy Educational Music</span>
      </div>

      <button
        type="button"
        className="music-button"
        onClick={toggleMusic}
      >
        {isPlaying ? "Ⅱ Pause" : "▶ Play"}
      </button>

      <label className="music-volume">
        🔊
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
        />
      </label>
    </div>
  );
}