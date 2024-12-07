import { Suspense } from 'react';
import { BackgroundProps } from '../types';
import Loading from '../loading';
import Image from 'next/image';
import "./background.css"

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
      <Suspense fallback={<Loading />}>
        <div className="background-container">
          <Image 
            src={src} 
            alt={alt} 
            width={width} 
            height={height} 
            loading="lazy" 
          />
          <div className="background-overlay" style={{ backgroundColor: overlay }}>
            <div className="background-content">{children}</div>
          </div>
        </div>
      </Suspense>
    )
}
