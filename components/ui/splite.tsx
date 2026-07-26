'use client';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="flex h-full w-full items-center justify-center"><span className="loader" /></div>,
});

export function SplineScene({ scene, className, onLoad }: { scene: string; className?: string; onLoad?: () => void }) {
  return <Spline scene={scene} className={className} onLoad={onLoad} renderOnDemand />;
}
