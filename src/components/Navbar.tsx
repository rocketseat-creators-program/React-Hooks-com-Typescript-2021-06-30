import React from "react";
import Toggle from "./Toggle";
import useDarkMode from "../hooks/useDarkmode";

export default function Navbar() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div className="navbar">
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
