'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

type TransitionPhase = 'idle' | 'covering' | 'covered' | 'revealing';

const COVER_DURATION = 920;
const REVEAL_DURATION = 720;

export function RouteTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<TransitionPhase>('idle');
  const pendingPath = useRef<string | null>(null);
  const previousPath = useRef(pathname);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        phase !== 'idle'
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest('a');
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      const current = `${window.location.pathname}${window.location.search}`;
      const next = `${destination.pathname}${destination.search}`;
      if (next === current) return;

      event.preventDefault();
      event.stopPropagation();
      pendingPath.current = `${next}${destination.hash}`;
      setPhase('covering');

      timer.current = setTimeout(() => {
        setPhase('covered');
        router.push(pendingPath.current!);
      }, COVER_DURATION);
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [phase, router]);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;

    if (pendingPath.current) {
      pendingPath.current = null;
      requestAnimationFrame(() => {
        setPhase('revealing');
        timer.current = setTimeout(() => setPhase('idle'), REVEAL_DURATION);
      });
    }
  }, [pathname]);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  return (
    <div
      className={`route-stair-overlay route-stair-overlay--${phase}`}
      aria-hidden="true"
    >
      <span className="route-stair-panel route-stair-panel--one" />
      <span className="route-stair-panel route-stair-panel--two" />
      <span className="route-stair-panel route-stair-panel--three" />
      <span className="route-stair-panel route-stair-panel--four" />
    </div>
  );
}
