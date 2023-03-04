'use client';

import { MouseEventHandler, useState, useEffect } from 'react';
import Image from 'next/image';

// Lightmode, darkmode, accent color, etc. controls will eventually go here

function Control({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="rounded-md bg-black hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-300 p-1 flex justify-center items-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function StyleControls() {
  const [isDarkModeActive, setDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkModeActive) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkModeActive]);

  return (
    <div className="flex gap-1">
      <Control onClick={() => setDarkMode(!isDarkModeActive)}>
        <Image
          src="/icons/light_mode.svg"
          alt="Light mode"
          width={30}
          height={30}
          className={`${isDarkModeActive ? '' : 'hidden'}`}
        />
        <Image
          src="/icons/dark_mode.svg"
          alt="Dark mode"
          width={30}
          height={30}
          className={`${isDarkModeActive ? 'hidden' : ''} invert`}
        />
      </Control>
    </div>
  );
}
