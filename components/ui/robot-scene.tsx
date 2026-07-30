'use client';

import type { Application } from '@splinetool/runtime';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { SplineScene } from '@/components/ui/splite';

export function RobotScene() {
  const [showBrand, setShowBrand] = useState(false);
  const [active, setActive] = useState(true);
  const container = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const splineApp = useRef<Application | null>(null);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const contextLostHandler = useRef<((event: Event) => void) | null>(null);

  const handleLoad = (app: Application) => {
    splineApp.current = app;
    app.play();
    app.requestRender();

    const nextCanvas = container.current?.querySelector('canvas') ?? null;
    if (nextCanvas && nextCanvas !== canvas.current) {
      if (canvas.current && contextLostHandler.current) {
        canvas.current.removeEventListener('webglcontextlost', contextLostHandler.current);
      }

      const handleContextLost = (event: Event) => {
        event.preventDefault();
        setShowBrand(false);
        setActive(false);
      };

      canvas.current = nextCanvas;
      contextLostHandler.current = handleContextLost;
      nextCanvas.addEventListener('webglcontextlost', handleContextLost);
    }

    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setShowBrand(true), 2700);
  };

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
      if (canvas.current && contextLostHandler.current) {
        canvas.current.removeEventListener('webglcontextlost', contextLostHandler.current);
      }

      const app = splineApp.current;
      splineApp.current = null;
      canvas.current = null;
      contextLostHandler.current = null;
      app?.stop();
      app?.dispose();
    };
  }, []);

  return (
    <div ref={container} className="relative isolate -mx-16 h-[440px] lg:-mr-28 lg:h-[700px]">
      <div className="absolute inset-0 z-0">
        {active ? (
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
            onLoad={handleLoad}
          />
        ) : (
          <div className="h-full w-full" aria-hidden="true" />
        )}
      </div>
      {showBrand && active && (
        <div className="robot-chest-brand robot-chest-brand-enter" aria-hidden="true">
          <span className="robot-brand-flash" />
          <span className="robot-energy-ring" />
          <Image
            src="/zyberly-logo.webp"
            alt=""
            width={1291}
            height={267}
            sizes="100px"
            className="zyberly-wordmark"
          />
        </div>
      )}
    </div>
  );
}
