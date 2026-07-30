'use client';

import { useEffect, useRef } from 'react';

const FOX_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260713_234424_b1332b69-2e69-4302-8dbc-40f86846afbd.mp4';

export function Fox404Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;

    let animationFrame = 0;
    const draw = () => {
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const sourceWidth = video.videoWidth || 720;
        const sourceHeight = video.videoHeight || 720;
        const width = Math.min(sourceWidth, 720);
        const height = Math.round(width * (sourceHeight / sourceWidth));

        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
      }
      animationFrame = requestAnimationFrame(draw);
    };

    animationFrame = requestAnimationFrame(draw);
    void video.play().catch(() => undefined);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <video ref={videoRef} autoPlay loop muted playsInline aria-hidden="true">
        <source src={FOX_VIDEO} type="video/mp4" />
      </video>
      <canvas ref={canvasRef} aria-hidden="true" />
    </>
  );
}
