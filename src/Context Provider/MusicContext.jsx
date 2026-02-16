import { createContext, useState } from "react";

export const MusicContext = createContext();

export function MusicProvider({ children }) {

  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (song) => {
    setPlaylist(prev => {
      if (prev.find(s => s.id === song.id)) return prev;
      return [...prev, song];
    });
  };

  return (
    <MusicContext.Provider value={{ playlist, addToPlaylist }}>
      {children}
    </MusicContext.Provider>
  );
}
