import { ArrowUpRight, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        {/* Top */}
        <div className="flex flex-col gap-8 border-b border-primary-foreground/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/afriflux-mark.png"
                alt="AfriFlux mark"
                className="h-10 w-10 object-contain"
              />
              <div className="leading-none">
                <span className="font-display text-xl font-bold tracking-tight">
                  AFRIFLUX
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
                  Impact Advisory BV
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-md text-lg font-medium leading-snug">
              Catalyzing Capital.
              <br />
              Empowering Youth.
              <br />
              Powering Transition.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium text-primary-foreground/70">
            <span>Flanders, Belgium</span>
            <span className="text-accent">↔</span>
            <span>Nigeria</span>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-3">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
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
                    className="text-base text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
              Backed companies
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="https://www.poulber.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-base text-primary-foreground/80 transition-colors hover:text-primary-foreground"
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
                  className="inline-flex items-center gap-1 text-base text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Ecoflux Nigeria
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
              Collaborate
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#connect"
                  className="text-base text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Partnership enquiries
                </a>
              </li>
              <li className="text-base text-primary-foreground/80">
                Belgium & Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 border-t border-primary-foreground/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-primary-foreground/60">
            © 2026 AfriFlux Impact Advisory. All rights reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/30 transition-transform group-hover:-translate-y-1">
              <ArrowUp className="h-4 w-4" />
            </span>
          </a>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-primary-foreground/45">
          This website is for general information, not an offer of securities or
          a promise of investment returns. Proposed financing arrangements and
          venture programmes require appropriate legal, regulatory and
          operational approvals. "AfriFlux-backed" does not imply a confirmed
          equity holding. Selected images on this website feature AfriFlux,
          Poulber and Ecoflux activities, teams and project environments.
        </p>
      </div>
    </footer>
  );
}
