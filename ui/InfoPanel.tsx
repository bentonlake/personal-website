'use client';

import { useState, useEffect } from 'react';

export default function InfoPanel({ children }: { children: React.ReactNode }) {
  const [isPanelOpen, setPanelState] = useState(false);

  useEffect(() => {
    console.log(window.location.pathname);

    if (window.location.pathname !== '/') {
      setPanelState(true);
    } else {
      setPanelState(false);
    }
  }, []);

  return (
    <div
      className={`transition-all ${
        isPanelOpen ? 'block translate-x-10' : 'hidden translate-x-0'
      }`}
    >
      {children}
    </div>
  );
}
