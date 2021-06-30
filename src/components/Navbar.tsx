import React from "react";
import Toggle from "./Toggle";

export default function Navbar() {
  return (
    <div className="navbar">
      <Toggle darkMode={false} setDarkMode={() => false} />
    </div>
  );
}
