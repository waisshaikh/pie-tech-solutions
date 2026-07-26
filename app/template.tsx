import { ViewTransition } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition default="route-premium">
      <div className="route-stage">{children}</div>
    </ViewTransition>
  );
}
