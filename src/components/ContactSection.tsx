import { ArrowUpRight, MessageCircle } from "lucide-react";

const audiences = ["Investors & funders", "Strategic partners", "Entrepreneurs"];

export function ContactSection() {
  return (
    <section id="connect" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-display text-sm font-bold text-accent">06 /</span>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Work with us
          </span>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-20">
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Let's build what
            <br />
            comes next.
          </h2>
          <p className="max-w-md self-end text-lg leading-relaxed text-foreground/80">
            Whether you represent an institution, an enterprise or an operating
            partner, we're interested in conversations that connect ambition
            with practical opportunity.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Left: audiences + whatsapp */}
          <div className="flex flex-col justify-between gap-8 rounded-3xl bg-primary p-8 text-primary-foreground lg:col-span-2 sm:p-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                Start a conversation
              </span>
              <div className="mt-6 flex flex-col gap-3">
                {audiences.map((audience) => (
                  <div
                    key={audience}
                    className="flex items-center justify-between border-b border-primary-foreground/15 py-3 text-lg font-medium"
                  >
                    {audience}
                    <span className="text-accent">✳</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm leading-relaxed text-primary-foreground/70">
                Have a venture or partnership in mind? Tell us what you're
                building and how our priorities might align.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=2348073513959&text=Hello+AfriFlux%2C+I%27d+like+to+discuss+a+potential+partnership.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" />
                Connect on WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="mt-4 text-xs text-primary-foreground/50">
                Contact number is provisional and must be confirmed before
                public launch.
              </p>
            </div>
          </div>

          {/* Right: Google Form */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card lg:col-span-3">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScsDS7rJI8paaPUDnfDdLnVMnqav_xjeUbXFQqXu3HZJtWsCg/viewform?embedded=true"
              className="h-[691px] w-full"
              title="AfriFlux contact form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
