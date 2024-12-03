import Image from "next/image";
import "./logo.css";

export default function Logo() {
    return (
    <div className="logo-container">
        <Image src="/bow.webp" alt="le fog logo" width={400} height={400} className="logo"/>
    </div>
    );
}
