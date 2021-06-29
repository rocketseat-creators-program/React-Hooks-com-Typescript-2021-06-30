import React from "react";
import { useAudioPlayer } from "react-use-audio-player";

const AudioPlayer = ({
  file,
  title,
  artWork,
}: {
  file?: string;
  title?: string;
  artWork?: string;
}) => {
  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src: file,
    autoplay: true,
    onend: () => console.log("sound has ended!"),
  });

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <div className="audio-player-wrapper">
      <div className="audio-player">
        <div className="art-work">
          <img
            className="album__cover"
            width={50}
            height={50}
            src={artWork}
            alt={`Album artwork from track`}
          />
        </div>
        <div className="album-title">{title}</div>
      </div>

      <div className="controls">
        <button className="play-btn" onClick={togglePlayPause}>
          <i
            className={`fa ${playing ? "fa-pause" : "fa-play"}`}
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
