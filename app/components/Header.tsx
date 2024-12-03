import Link from "next/link";
import Image from "next/image";
import { specialElite } from "@/fonts/fonts";
import Navigation from "@/components/Navigation";
import type { ITitle } from "@/types";
import "./header.css";

export default function Header({ title }: { title: ITitle }) {
  return (
    <header className="header">
      <div className="heading-container">
        <Link href="/" className="home-logo-container">
          <Image src="/bow.webp" alt="" width={120} height={120} className="max-w-32" />
        </Link>
        <Navigation />
        <div className="title-container">
          <h1 className={`${specialElite.className} title`}>{title}</h1>
        </div>
      </div>
    </header>
  );
}
