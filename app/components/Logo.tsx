import Image from "next/image";
import "./logo.css";

interface LogoProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    c: string;
}

export default function Logo({src, alt, width, height, c}: LogoProps) {
    return (
    <div className="logo-container">
        <Image src={src} alt={alt} width={width} height={height} className={c} />
    </div>
    );
}
