import Image from 'next/image';
import "./background.css";

export interface BackgroundProps {
    height: number;
    width: number;
    src: string;
    alt: string;
    overlay?: string;
    children?: React.ReactNode;
}

export default function Background({ 
  src, 
  alt, 
  height = 1400, 
  width = 1400, 
  overlay = 'transparent', 
  children 
}: BackgroundProps
) {
    return (
        <div className="background-container">
          <Image 
            src={src} 
            alt={alt} 
            width={width} 
            height={height} 
          />
          <div className="background-overlay" style={{ backgroundColor: overlay }}>
            <div className="background-content">{children}</div>
          </div>
        </div>
    )
}
