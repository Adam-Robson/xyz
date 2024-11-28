import Image from "next/image";
import AudioPlayer from "./components/audio-player/AudioPlayer";
import Navigation from "./components/Navigation";
import { AudioProvider } from "./contexts/AudioProvider";
import "./colors.css";
import "./home.css";

export default function Home() {
  return (
    <div className="home-page-container">
      <header className="header">
        <div className="home-logo-container">
          <Image src="/bow.webp" alt="le fog" width={200} height={200} className="max-w-32"/>
        </div>
        <Navigation />
      </header>
      <main className="home-main-content">
        <Image src="/fishhed.webp" alt="le fog" width={500} height={500} className="home-main-image" />
      </main>
      <footer className="footer">
        <AudioProvider>
          <AudioPlayer />
        </AudioProvider>
      </footer>
    </div>
  );
}
