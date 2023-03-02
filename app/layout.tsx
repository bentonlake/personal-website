import '@/styles/globals.css';

import { Open_Sans } from 'next/font/google';

const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

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
