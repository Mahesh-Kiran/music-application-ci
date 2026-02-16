import SongCard from "../Components/SongCard";
import songs from "../songs.json";
import { MusicContext } from "../Context Provider/MusicContext";
import { useEffect, useState, useContext } from "react";

function Songs() {

  const { addToPlaylist } = useContext(MusicContext);
  const [added, setAdded] = useState({});

  useEffect(() => {
    console.log("playlist updated");
  }, [added]);

  const toggleAdd = (song) => {
    if (added[song.id]) return;

    setAdded(prev => ({
      ...prev,
      [song.id]: true
    }));

    addToPlaylist(song);
  };

  return (
    <div className="songs-grid">
      <h1>Songs</h1>

      {songs.map(song => (
        <div key={song.id} className="song-card">
          <SongCard song={song} />

          <button onClick={() => toggleAdd(song)}>
            {added[song.id]
              ? "Added to Playlist ☑️"
              : "Add to Playlist ✔️"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Songs;
