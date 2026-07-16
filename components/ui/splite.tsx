'use client';
import { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));
export function SplineScene({ scene, className, onLoad }: { scene: string; className?: string; onLoad?: () => void }) {
  return <Suspense fallback={<div className="flex h-full w-full items-center justify-center"><span className="loader" /></div>}><Spline scene={scene} className={className} onLoad={onLoad} /></Suspense>;
}
