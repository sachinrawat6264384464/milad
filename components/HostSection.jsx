export default function HostSection() {
  return (
    <section className="py-12 bg-background relative" id="about-host">
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <p className="font-display text-primary text-center text-sm tracking-[0.3em] uppercase mb-4">
          Your Host
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-12">
          Meet <span className="text-gradient-gold">Shubh Jain</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Portrait Frame */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-gradient-gold glow-gold">
              <img
                src="/assets/shubh-jain-BAGpkc-R.webp"
                alt="Shubh Jain - The Mafia Behind The Biggest Coaches"
                className="w-full h-full object-cover"
                loading="lazy"
                width={256}
                height={256}
              />
            </div>
          </div>

          {/* Description & Numbers */}
          <div className="text-center md:text-left">
            <p className="font-display text-primary text-lg mb-2 italic">
              The Mafia Behind The Biggest Coaches Of 🇮🇳
            </p>
            <div className="space-y-4 font-body text-foreground/80 leading-relaxed text-base md:text-lg">
              <p>
                Shubh Jain has helped <span className="text-primary font-semibold">48,000+ coaches and consultants</span> of India build hyper profitable 8 figure companies using his IPs and self-built systems.
              </p>
              <p>
                His clients (The Biggest Names You Admire In This Country) have collectively generated over <span className="text-primary font-semibold">₹210 Crores</span> in last 1 year, and now he is sharing his exact blueprint with you — for free.
              </p>
            </div>

            {/* Stat Counters */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <div className="bg-card border border-border rounded-lg px-4 py-2 text-center min-w-[110px]">
                <p className="font-display text-primary text-xl font-bold">48,000+</p>
                <p className="font-body text-muted-foreground text-xs">Coaches Trained</p>
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2 text-center min-w-[110px]">
                <p className="font-display text-primary text-xl font-bold">₹210Cr+</p>
                <p className="font-body text-muted-foreground text-xs">Client Revenue (1 Year)</p>
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2 text-center min-w-[110px]">
                <p className="font-display text-primary text-xl font-bold">8 Figure</p>
                <p className="font-body text-muted-foreground text-xs">Companies Built</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
