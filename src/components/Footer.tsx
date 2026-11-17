import { ArrowUpRight, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#071D24] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        {/* Top */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/favicon.png"
                alt="AfriFlux mark"
                className="h-10 w-10 object-contain"
              />
              <div className="leading-none">
                <span className="font-display text-xl font-bold tracking-tight">
                  AFRIFLUX
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                  Impact Advisory BV
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-md text-lg font-medium leading-snug text-white/80">
              Catalyzing Capital.
              <br />
              Empowering Youth.
              <br />
              Powering Transition.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium text-white/60">
            <span>Flanders, Belgium</span>
            <span className="text-[#E9B850]">↔</span>
            <span>Nigeria</span>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-3">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E9B850]">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                { label: "About AfriFlux", href: "#who-we-are" },
                { label: "Our expertise", href: "#expertise" },
                { label: "Our approach", href: "#model" },
                { label: "Impact", href: "#impact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E9B850]">
              Backed companies
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="https://www.poulber.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                >
                  Poulber Africa
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ecofluxng.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                >
                  Ecoflux Nigeria
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E9B850]">
              Collaborate
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#connect"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Partnership enquiries
                </a>
              </li>
              <li className="text-sm text-white/70">Belgium & Nigeria</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            © 2026 AfriFlux Impact Advisory. All rights reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 transition-transform group-hover:-translate-y-1">
              <ArrowUp className="h-4 w-4" />
            </span>
          </a>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-white/40">
          This website is for general information, not an offer of securities or
          a promise of investment returns. Proposed financing arrangements and
          venture programmes require appropriate legal, regulatory and
          operational approvals. "AfriFlux-backed" does not imply a confirmed
          equity holding. Selected images on this website feature AfriFlux,
          Poulber and Ecoflux activities, teams and project environments.
        </p>

        <p className="mt-6 border-t border-white/10 pt-6 text-center text-xs font-medium uppercase tracking-[0.15em] text-white/40">
          Developed by XPRESSVERSE TECHNOLOGIES LTD
        </p>
      </div>
    </footer>
  );
}
