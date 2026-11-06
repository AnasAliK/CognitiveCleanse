import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, LineChart, Compass, HeartHandshake, Sparkles } from "lucide-react";

const steps = [
  { icon: BookOpen, title: "Notice the thought", description: "Use a guided prompt to put what is on your mind into words.", href: "/cleanse#thought" },
  { icon: Compass, title: "Find a new angle", description: "Spot familiar thinking patterns and practice a more balanced response.", href: "/cleanse#biases" },
  { icon: LineChart, title: "See the bigger picture", description: "Explore how your practice can change over time in the dashboard.", href: "/dashboard" },
];

export default function Home() {
  return (
    <main id="main" className="shell">
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} aria-hidden="true" /> A daily practice for mental clarity</p>
          <h1>Make room for <em>a clearer mind.</em></h1>
          <p className="lede">Notice the thoughts that keep you stuck. Practice seeing them differently, one small reflection at a time.</p>
          <div className="actions">
            <Link className="button" href="/cleanse">Start your cleanse <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link className="button secondary" href="/dashboard">Explore dashboard</Link>
          </div>
        </div>
        <div className="orb-panel" aria-hidden="true">
          <span className="art-label">01 / THE SPACE BETWEEN THOUGHTS</span>
          <div className="orb-rings"><div className="orb" /></div>
          <span className="art-bottom"><span className="status-dot" /> PAUSE · NOTICE · REFRAME</span>
        </div>
      </section>
      <section className="section">
        <div className="section-heading"><p className="eyebrow">The practice</p><h2>Three steps to shift your perspective.</h2></div>
        <div className="card-grid">
          {steps.map(({ icon: Icon, title, description, href }, index) => (
            <Link className="panel feature" href={href} key={title}>
              <div className="feature-top"><span className="icon-tile"><Icon size={22} aria-hidden="true" /></span><span className="micro">0{index + 1}</span></div>
              <h3>{title}</h3><p>{description}</p><span className="text-link">Explore <ArrowUpRight size={16} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>
      <section className="panel banner">
        <div><p className="eyebrow"><HeartHandshake size={17} aria-hidden="true" /> Community and support</p><h2>Make space for connection.</h2></div>
        <div className="actions"><Link className="button" href="/join">Join the community <ArrowRight size={17} aria-hidden="true" /></Link><Link className="button secondary" href="/support">Find support</Link></div>
      </section>
    </main>
  );
}

