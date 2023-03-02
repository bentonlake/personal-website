import Link from 'next/link';
import Image from 'next/image';

import { Project } from '@/lib/projects';

export default function ProjectInfo({
  name,
  description,
  href,
  github,
  favicon,
}: Project) {
  return (
    <Link
      href={href}
      prefetch={false}
      target="_blank"
      rel="nofollow"
      className="rounded-md hover:bg-gray-300 p-1"
    >
      <h2 className="text-xl">{name}</h2>
      <p className="text-sm">{description}</p>
    </Link>
  );
}
