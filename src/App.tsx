import React from "react";

import Playlist from "./pages/Playlist";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Header />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
