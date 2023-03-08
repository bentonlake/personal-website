import Avatar from '@/ui/Avatar';
import { NavBar, NavItem } from '@/ui/Nav';

import { open_sans } from '@/lib/fonts';

import me from '@/public/images/me.jpg';

export const metadata = {
  description:
    'Benton Lake is an aspiring developer based in Northern Virginia. This is his personal, very cool, website.',
};

export default function SidePanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`w-screen bg-layered-waves-1 bg-cover text-white h-screen p-2 flex justify-center ${open_sans.className}`}
    >
      <section className="flex flex-col gap-4 items-center">
        <Avatar src={me} alt="Benton Lake" size={288} priority />
        <h1 className="text-3xl text-center font-thin">Benton Lake</h1>
        <NavBar>
          <NavItem href="/about" innerText="About me" />
          <NavItem href="/goals" innerText="My goals" />
          <NavItem href="/experience" innerText="Work experience" />
          <NavItem href="/projects" innerText="Personal projects" />
          <NavItem href="/contributions" innerText="Contributions" />
        </NavBar>
      </section>
      <main>{children}</main>
    </div>
  );
}
