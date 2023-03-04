import Link from 'next/link';
import Image from 'next/image';

import socialList from '@/lib/socials';

export function DefaultSocials() {
  return (
    <>
      {socialList.map((social) => (
        <SocialButton key={social.name} href={social.href} src={social.name} />
      ))}
    </>
  );
}

export default function SocialButton({
  href,
  src,
}: {
  href: string;
  src: string;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="rounded-md hover:bg-gray-300 p-1 dark:hover:bg-gray-700"
      target="_blank"
      rel="nofollow"
    >
      <Image
        src={`/icons/${src}.svg`}
        alt={src}
        width={40}
        height={40}
        className="dark:invert"
      />
    </Link>
  );
}
