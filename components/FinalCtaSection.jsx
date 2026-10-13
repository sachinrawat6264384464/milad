export default function FinalCtaSection({ onOpenModal }) {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-card to-background" id="final-cta">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="container mx-auto px-4 text-center max-w-3xl">
        {/* Scarcity Badge */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 mb-10 inline-block">
          <p className="font-display text-destructive text-sm tracking-wide">
            ⚠️ Only 47 Seats Left — Workshop Starts Soon
          </p>
        </div>

        {/* Quote */}
        <blockquote className="font-body text-xl md:text-2xl italic text-foreground/80 max-w-2xl mx-auto mb-6">
          &ldquo;2025 gave you lessons. 2026 is where you turn them into crores.&rdquo;
        </blockquote>
        <p className="font-display text-primary tracking-wider mb-10 text-sm">— Shubh Jain</p>

        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
          Stop Watching. Start Building.
        </h2>
        <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto text-base">
          You have 2 choices: Close this tab and stay stuck, or register now and finally build the coaching business you deserve.
        </p>

        {/* Final CTA Button */}
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={onOpenModal}
            type="button"
            className="mirror-button px-12 py-7 text-xl md:text-2xl font-display text-primary-foreground border-0 rounded-lg hover:scale-105 transition-transform cursor-pointer"
          >
            🔥 Claim Your FREE Seat Now
          </button>
          <span className="font-display text-primary text-base md:text-lg tracking-wide mt-1">
            📅 17th January, 7 PM
          </span>
        </div>

        <p className="font-body text-muted-foreground mt-6 text-xs">
          100% Free • No Credit Card Required • Instant Access
        </p>
        <p className="font-body text-muted-foreground mt-12 text-sm">
          © 2026 Shubh Jain. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}
