'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { SplineScene } from '@/components/ui/splite';
export function RobotScene() {
  const [showBrand,setShowBrand]=useState(false);
  const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
  useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current)},[]);
  const handleLoad=()=>{timer.current=setTimeout(()=>setShowBrand(true),900)};
  return <div className="relative isolate -mx-16 h-[440px] lg:-mr-28 lg:h-[700px]"><div className="absolute inset-0 z-0"><SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="h-full w-full" onLoad={handleLoad}/></div>{showBrand&&<div className="robot-chest-brand robot-chest-brand-enter" aria-hidden="true"><span className="robot-brand-flash"/><Image src="/favicon.svg" alt="" width={76} height={76} priority/><span className="robot-brand-name">PIE TECH SOLUTIONS</span></div>}</div>;
}
