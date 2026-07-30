'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RobotScene } from '@/components/ui/robot-scene';

function webGLIsAvailable() {
  try {
    const probe = document.createElement('canvas');
    const context =
      probe.getContext('webgl2', { powerPreference: 'low-power' }) ??
      probe.getContext('webgl', { powerPreference: 'low-power' });

    if (!context) return false;

    const loseContext = context.getExtension('WEBGL_lose_context');
    loseContext?.loseContext();
    return true;
  } catch {
    return false;
  }
}

export function PersistentRobot() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [canRenderRobot, setCanRenderRobot] = useState(false);

  useEffect(() => {
    const updateRobotState = () => {
      const shouldRender =
        isHome &&
        document.visibilityState === 'visible' &&
        webGLIsAvailable();

      setCanRenderRobot(shouldRender);
    };

    updateRobotState();
    document.addEventListener('visibilitychange', updateRobotState);
    window.addEventListener('pageshow', updateRobotState);

    return () => {
      document.removeEventListener('visibilitychange', updateRobotState);
      window.removeEventListener('pageshow', updateRobotState);
    };
  }, [isHome]);

  return (
    <div className={`persistent-robot ${isHome ? 'is-home' : ''}`} aria-hidden={!isHome}>
      {canRenderRobot ? <RobotScene /> : null}
    </div>
  );
}
