// import Image from "next/image";
import { AudioProvider } from "./contexts/AudioProvider";

import AudioPlayer from "./components/audio-player/AudioPlayer";
import Header from "./components/Header";
import Background from "./components/Background";

function Home() {
  return (
    <div className="home-page-container">
      <Header title="le fog" />
      <main className="home-page-content">
        <Background src="/fishhed.webp" alt="le fog" height={800} width={800} />
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
