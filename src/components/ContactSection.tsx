import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

const audiences = ["Investors & funders", "Strategic partners", "Entrepreneurs"];

export function ContactSection() {
  return (
    <section id="connect" className="bg-[#F5F7F3] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-display text-sm font-bold text-[#126F4C]">06 /</span>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#738184]">
            Work with us
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#122730] sm:text-5xl lg:text-6xl">
              Let's build what
              <br />
              comes <span className="text-[#126F4C]">next.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#738184] sm:text-lg">
              Whether you represent an institution, an enterprise or an
              operating partner, we're interested in conversations that connect
              ambition with practical opportunity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-[#E5EBE7] bg-white px-4 py-2 text-sm font-medium text-[#122730]"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>

          {/* Right column: dark CTA panel */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-[#0B2C2B] p-8 shadow-lg sm:p-10">
            <Sparkles className="absolute right-6 top-6 h-5 w-5 text-[#E9B850]" />

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                Start a conversation
              </span>
              <h3 className="mt-3 font-display text-3xl font-bold text-white">
                Have a venture or partnership in mind?
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Tell us what you're building and how our priorities might align.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://api.whatsapp.com/send/?phone=2348073513959&text=Hello+AfriFlux%2C+I%27d+like+to+discuss+a+potential+partnership.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E9B850] px-6 py-4 text-sm font-semibold text-[#071D24] transition-all hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" />
                Connect on WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="mt-4 text-center text-xs text-white/40">
                Contact number is provisional and must be confirmed before
                public launch.
              </p>
            </div>
          </div>
        </div>

        {/* Google Form */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#E5EBE7] bg-white">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScsDS7rJI8paaPUDnfDdLnVMnqav_xjeUbXFQqXu3HZJtWsCg/viewform?embedded=true"
            className="h-[691px] w-full"
            title="AfriFlux contact form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}
