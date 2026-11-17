import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Who we are", href: "#who-we-are" },
  { label: "Expertise", href: "#expertise" },
  { label: "Our companies", href: "#companies" },
  { label: "Our model", href: "#model" },
  { label: "Impact", href: "#impact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#071D24]/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/favicon.png"
            alt="AfriFlux mark"
            className="h-9 w-9 object-contain"
          />
          <div className="leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-white">
              AFRIFLUX
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
              Impact Advisory BV
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-semibold transition-colors ${
                active === link.href.slice(1)
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
              {active === link.href.slice(1) && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-[#E9B850]" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#connect"
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            Let's connect
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#071D24] px-5 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#connect"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
            >
              Let's connect
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
