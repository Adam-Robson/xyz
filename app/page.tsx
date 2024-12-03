import Image from "next/image";
import { AudioProvider } from "./contexts/AudioProvider";

import AudioPlayer from "./components/audio-player/AudioPlayer";
import Header from "./components/Header";

import "./colors.css";
import "./home.css";

function Home() {
  return (
    <div className="home-page-container">
      <Header title="le fog" />
      <main className="home-page-content">
        <Image src="/fishhed.webp" alt="le fog" width={500} height={500} className="home-page-image" />
      </main>

      <footer className="home-page-footer">
        <AudioProvider>
          <AudioPlayer />
        </AudioProvider>
      </footer>
    </div>
  );
}

export default Home;
