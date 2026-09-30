"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const links = [["/", "Inicio"], ["/characters", "Personajes"], ["/episodes", "Episodios"]];
  return (
    <header className="bg-emerald-800 text-white">
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link href="/" className="text-xl font-bold">Explorador de Rick y Morty</Link>
        <div className="flex flex-wrap gap-2">
          {links.map(([href, label]) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}
              className={`rounded px-3 py-2 text-sm ${pathname === href ? "bg-white font-semibold text-emerald-900" : "hover:bg-emerald-700"}`}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
