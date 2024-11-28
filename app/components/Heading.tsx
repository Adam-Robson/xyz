import Link from "next/link";
import Navigation from "@/components/Navigation";
import { karla } from "@/fonts/fonts";
import type { ITitle } from "@/types";

import "@/styles/heading.css";

export default function Heading({ title }: { title: ITitle }) {
  return (
    <header className="header">
      <div className="heading-container">
        <Link href="/">
        home link
        </Link>
        <div className="titles-container">
          <h1 className={`${karla.className} title`}>{title}</h1>
        </div>
        <div><Navigation /></div>
      </div>
    </header>
  );
}
