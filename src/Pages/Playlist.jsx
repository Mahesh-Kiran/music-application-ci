import { useContext } from "react";
import { MusicContext } from "../Context Provider/MusicContext";

function Playlist() {

  const { playlist } = useContext(MusicContext);

  return (
    <>
      <h1>My Playlist</h1>

      {playlist.length === 0 && <p>No songs added</p>}

      {playlist.map(song => (
        <p key={song.id}>
          {song.name} - {song.artist} - {song.duration}
        </p>
      ))}
    </>
  );
}

export default Playlist;
