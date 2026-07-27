'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { Application } from '@splinetool/runtime';
import { SplineScene } from '@/components/ui/splite';

export function RobotScene() {
  const [showBrand,setShowBrand]=useState(false);
  const [active,setActive]=useState(false);
  const container=useRef<HTMLDivElement>(null);
  const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
  const splineApp=useRef<Application|null>(null);
  useEffect(()=>{
    const element=container.current;
    if(!element)return;
    let inView=false;
    let idleId:number|undefined;
    const schedule=()=>{
      if(!inView||document.hidden)return;
      if('requestIdleCallback' in window){
        idleId=window.requestIdleCallback(()=>setActive(true),{timeout:800});
      }else{
        timer.current=setTimeout(()=>setActive(true),200);
      }
    };
    const observer=new IntersectionObserver(([entry])=>{
      inView=entry.isIntersecting;
      if(inView){
        schedule();
        splineApp.current?.play();
        splineApp.current?.requestRender();
      }else{
        splineApp.current?.stop();
      }
    },{rootMargin:'80px'});
    const visibility=()=>{
      if(document.hidden){
        splineApp.current?.stop();
      }else if(inView){
        schedule();
        splineApp.current?.play();
        splineApp.current?.requestRender();
      }
    };
    observer.observe(element);
    document.addEventListener('visibilitychange',visibility);
    return ()=>{
      observer.disconnect();
      document.removeEventListener('visibilitychange',visibility);
      if(idleId!==undefined&&'cancelIdleCallback' in window)window.cancelIdleCallback(idleId);
      if(timer.current)clearTimeout(timer.current);
    };
  },[]);
  const handleLoad=(app:Application)=>{
    splineApp.current=app;
    if(timer.current)clearTimeout(timer.current);
    timer.current=setTimeout(()=>setShowBrand(true),2700);
  };
  return <div ref={container} className="relative isolate -mx-16 h-[440px] lg:-mr-28 lg:h-[700px]"><div className="absolute inset-0 z-0">{active?<SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="h-full w-full" onLoad={handleLoad}/>:<div className="h-full w-full" aria-hidden="true"/>}</div>{showBrand&&active&&<div className="robot-chest-brand robot-chest-brand-enter" aria-hidden="true"><span className="robot-brand-flash"/><span className="robot-energy-ring"/><Image src="/zyberly-logo.webp" alt="" width={1291} height={267} sizes="100px" className="zyberly-wordmark"/></div>}</div>;
}

