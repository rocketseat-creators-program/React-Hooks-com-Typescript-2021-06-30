import React, { useState } from "react";
import useFetch, { RequestStatus } from "../hooks/useFetch";
import { axiosOptions, tracksUrl } from "../service/index";
import Player from "../components/Player";
import {  AudioPlayerProvider } from "react-use-audio-player";

interface Track {
  id: number;
  uri: string;
  title: string;
  index: number;
  artist: string;
  paused: boolean;
  played: boolean;
  playing: boolean;
  duration: number;
  percentage: number;
  stream_url: string;
  currentTime: number;
  artwork_url: string;
  permalink_url: string;
  favoritings_count: number;
}

function Playlist() {
  const { status, data, error, } = useFetch<Track[]>(tracksUrl, axiosOptions);
  const [track, setTrack] = useState<Track>();

  if (status === RequestStatus.fetching) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>${error}</h1>;
  }

  return (
    <div className="playlists">
      <div className="list">
        <ul className="track-list">
          {data?.map((track: Track, index) => (
            <li key={`track-${index}`} className="row">
              <button className="btn" onClick={() => setTrack(track)}>
                <div className="album">
                  <img
                    className="album__cover"
                    width={80}
                    height={80}
                    src={track.artwork_url}
                    alt={`Album artwork from track ${track.title}.`}
                  />
                </div>
                <div className="info">
                  <h2 className="info__track">{track.title}</h2>
                  <span className="info__artist">{track.artist}</span>
                </div>

                <div className="more">
                  <i className="fas fa-ellipsis-v" />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <AudioPlayerProvider>
        <Player
          title={track?.title}
          file={track?.stream_url}
          artWork={track?.artwork_url}
        />
      </AudioPlayerProvider>
    </div>
  );
}

export default Playlist;
