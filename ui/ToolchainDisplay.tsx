import { Tool } from '@/lib/tool';

function ToolItem({ name }: { name: string }) {
  return (
    <li className="rounded-r-full rounded-l-full border border-gray-300 dark:border-gray-700 px-2 py-1 text-xs font-mono text-gray-400">
      {name}
    </li>
  );
}

export default function ToolchainDisplay({ toolchain }: { toolchain: Tool[] }) {
  return (
    <ul className="flex flex-wrap gap-2 list-none">
      {toolchain.map((tool, i) => (
        <ToolItem key={i} name={tool} />
      ))}
    </ul>
  );
}
