import Link from 'next/link';
import Image from 'next/image';

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
      className="rounded-md hover:bg-gray-300 p-1"
      target="_blank"
      rel="nofollow"
    >
      <Image src={`/icons/${src}.svg`} alt={src} width={40} height={40} />
    </Link>
  );
}
