import Image from "next/image";
import Link from "next/link";
import AudioPlayer from "./components/audio-player/AudioPlayer";
import { AudioProvider } from "./contexts/AudioProvider";
import "./home.css"

export default function Home() {
  return (
    <div className="w-full grid grid-rows-3 justify-items-center min-h-screen">
      <header className="w-full row-start-1 flex flex-col items-start justify-start">
        <div className="w-full flex justify-start items-center py-2 px-4">
          <Image src="/bow.webp" alt="le fog" width={200} height={200} className="max-w-32"/>
        </div>
        <nav className="w-full flex justify-between max-w-80 mx-auto py-2">
          <Link href="/about">about</Link>
          <Link href="/music">music</Link>
          <Link href="/writing">writing</Link>
          <Link href="/photos">photos</Link>
          <Link href="/contact">contact</Link>       
        </nav>
      </header>
      <main className="flex flex-col row-start-2 items-center">
        <Image src="/fishhed.webp" alt="le fog" width={500} height={500} className="absolute top-40 left-50 -translate-x-50 -translate-y-50 opacity-50 blur-sm -z-20" />
      </main>
      <footer className="row-start-3 flex justify-center items-center">
        <AudioProvider>
          <AudioPlayer />
        </AudioProvider>
      </footer>
    </div>
  );
}
