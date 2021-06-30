import React, { useState } from "react";
import { responseDemo } from "../mock";

function Playlist() {
  const [data] = useState(responseDemo);

  return (
    <div className="playlists">
      <div className="list">
        <ul className="track-list">
          {data?.map((track, index) => (
            <li key={`track-${index}`} className="row">
              <button className="btn" onClick={() => console.log(track)}>
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
    </div>
  );
}

export default Playlist;
