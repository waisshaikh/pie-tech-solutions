'use client';

import { usePathname } from 'next/navigation';
import { RobotScene } from '@/components/ui/robot-scene';

export function PersistentRobot() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className={`persistent-robot ${isHome ? 'is-home' : ''}`} aria-hidden={!isHome}>
      <RobotScene />
    </div>
  );
}
