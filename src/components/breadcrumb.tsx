// components/breadcrumb.tsx
import Link from "next/link";

export function Breadcrumb({ items }: { items: { label: string; link: string }[] }) {
  return (
    <nav className="text-sm text-gray-600">
      {items.map((item, index) => (
        <span key={index}>
          <Link href={item.link} className="hover:text-purple-800">
            {item.label}
          </Link>
          {index < items.length - 1 && <span className="mx-2">.</span>}
        </span>
      ))}
    </nav>
  );
}
