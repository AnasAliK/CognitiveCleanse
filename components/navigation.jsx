"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Orbit } from "lucide-react";

const pages = [
  ["/", "Home"],
  ["/dashboard", "Dashboard"],
  ["/cleanse", "The Cleanse"],
  ["/support", "Support"],
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand"><span className="brand-icon"><Orbit size={23} aria-hidden="true" /></span>Cognitive<span>Cleanse</span></Link>
        <nav className="navigation" aria-label="Main navigation">
          {pages.map(([href, label]) => <Link href={href} key={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
        </nav>
        <Link className="button button-small" href="/join" aria-current={pathname === "/join" ? "page" : undefined}>Join community <ArrowUpRight size={15} aria-hidden="true" /></Link>
      </div>
    </header>
  );
}
