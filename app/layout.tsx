import '@/styles/globals.css';

import { open_sans } from '@/lib/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={open_sans.className}>
      <body>{children}</body>
    </html>
  );
}
