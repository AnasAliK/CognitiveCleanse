import Link from "next/link";
import { ArrowUpRight, Orbit } from "lucide-react";
import Navigation from "@/components/navigation";
import "./globals.css";

export const metadata = {
  title: { default: "Cognitive Cleanse", template: "%s | Cognitive Cleanse" },
  description: "A space to reflect, reframe and build a steadier relationship with your thoughts.",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Navigation />
        {children}
        <footer className="shell footer">
          <Link className="brand" href="/"><Orbit size={21} aria-hidden="true" /> Cognitive Cleanse</Link>
          <span>Make space for a clearer mind.</span>
          <Link href="/support">Support <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </footer>
      </body>
    </html>
  );
}
