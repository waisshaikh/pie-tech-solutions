'use client';

import type { Application } from '@splinetool/runtime';
import dynamic from 'next/dynamic';
import { Component, type ErrorInfo, type ReactNode } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <span className="loader" />
    </div>
  ),
});

class SplineErrorBoundary extends Component<
  { children: ReactNode; className?: string },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('Robot WebGL renderer is unavailable.', error.message, info.componentStack);
  }

  render() {
    if (this.state.failed) {
      return <div className={this.props.className} aria-hidden="true" data-robot-webgl-fallback />;
    }

    return this.props.children;
  }
}

export function SplineScene({
  scene,
  className,
  onLoad,
}: {
  scene: string;
  className?: string;
  onLoad?: (app: Application) => void;
}) {
  return (
    <SplineErrorBoundary className={className}>
      <Spline scene={scene} className={className} onLoad={onLoad} renderOnDemand />
    </SplineErrorBoundary>
  );
}
