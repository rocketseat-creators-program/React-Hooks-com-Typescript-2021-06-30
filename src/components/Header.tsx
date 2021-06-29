import React from "react";

export default function Header() {
  return (
    <>
      <div className="header" style={{ backgroundImage: `url(Playlist.jpg)` }}>
        <div className="heading">
          <span>This is </span>
          <h1>Experts Club</h1>
          <p className="listeners-head">9999 Monthly Listeners</p>
        </div>
      </div>

      <div className="btn-heads">
        <button className="btn-shuffle">SHUFFLE PLAY</button>
      </div>
    </>
  );
}
