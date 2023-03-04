import Link from 'next/link';
import Image from 'next/image';

import Avatar from '@/ui/Avatar';
import SocialButton from '@/ui/SocialButton';
import StyleControls from '@/ui/StyleControls';
import ToolchainDisplay from '@/ui/ToolchainDisplay';

import me from '@/public/images/me_tiara.jpg';

import socialList from '@/lib/socials';
import projectList from '@/lib/projects';

export const metadata = {
  title: 'Benton Lake | Dev-in-Training',
  description:
    'Benton Lake is an aspiring developer based in Northern Virginia. This is his personal, very cool, website.',
};

export default function Home() {
  return (
    <main className="flex justify-center flex-col md:flex-row md:max-h-screen p-1 sm:p-6 gap-4 dark:bg-gray-900 dark:text-gray-300">
      <section className="flex flex-col items-center gap-4">
        <Avatar
          src={me}
          alt="Excepteur aliquip enim reprehenderit labore eiusmod culpa ipsum."
          size={288}
          priority
        />
        <div className="w-72">
          <h1 className="text-2xl font-semibold">Benton Lake</h1>
          <p className="text-md">
            Hey! I&apos;m an aspiring developer, currently prepping to go to
            college and study Computer Science. In terms of experience, I am
            most capable with JS/TS and the Next.JS metaframework, however I
            have recently come to adore Rust. I love constantly exploring new
            things; a topic I explore on my blog, <i>🥒 for the unknowing.</i>
          </p>
        </div>
        <div className="w-72 flex justify-center">
          {socialList.map((social) => (
            <SocialButton
              key={social.name}
              href={social.href}
              src={social.name}
            />
          ))}
        </div>
      </section>
      <div className="flex flex-col gap-2">
        <header className="border-b border-gray-200 dark:border-gray-800 p-2 flex items-center">
          <div>
            <h2 className="font-semibold">Projects</h2>
          </div>
          <div className="ml-auto">
            <StyleControls />
          </div>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-auto sm:p-1">
          {projectList.map((project) => (
            <article key={project.name} className="p-2 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Image
                  src={project.favicon}
                  alt={project.name}
                  width={40}
                  height={40}
                />
                <h3 className="text-xl">{project.name}</h3>
              </div>
              <p className="text-sm">{project.description}</p>
              <ToolchainDisplay toolchain={project.toolchain} />
              <Link
                href={project.github}
                prefetch={false}
                target="_blank"
                rel="nofollow"
                className="rounded-md bg-black hover:bg-gray-700 dark:hover:bg-gray-600 flex justify-center"
                title="View source code"
              >
                <Image
                  src="/icons/source_code.svg"
                  alt="Source code"
                  width={35}
                  height={35}
                  className="invert"
                />
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
