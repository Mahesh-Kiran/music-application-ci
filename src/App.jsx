import react from "react";
import Navbar from "./Components/Navbar";
import Home from './Pages/Home';
import Playlist from "./Pages/Playlist";
import Songs from "./Pages/Songs";
import {Routes,Route} from "react-router-dom";
import { MusicProvider } from "./Context Provider/MusicContext";


function App(){
  return(
    <div>
    <MusicProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/songs" element={ <Songs />}/>
        <Route path="/playlist" element={<Playlist />}/>
      </Routes>
    </MusicProvider>
    </div>
  );
}

export default App;