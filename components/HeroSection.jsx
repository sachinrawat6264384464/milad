export default function HeroSection({ content, onOpenModal }) {
  const hero = content?.hero || {};

  const badge = hero.badge || "NO REPLAYS (CONFIDENTIAL)";
  const preheading = hero.preheading || "Would You Trade Just 2 Hours...?";
  const headlineLive = hero.headlineLive || "LIVE:";
  const headlineMain1 = hero.headlineMain1 || "Build Your";
  const headlineGold = hero.headlineGold || "₹1 CRORE";
  const headlineMain2 = hero.headlineMain2 || "Profit Plan For 2026";
  const description =
    hero.description ||
    "We'll Map Your Entire Calendar, Design Your Scalable Offer & Create Your Complete Revenue Roadmap — LIVE";
  const ctaText = hero.ctaText || "🔥 Claim Your FREE Seat Now";
  const dateText = hero.dateText || "📅 17th January, 7 PM";
  const noticeText = hero.noticeText || "⚡ Takes only 30 seconds to register";
  const hostName = hero.hostName || "Shubh Jain";
  const hostTagline = hero.hostTagline || "The Mafia Behind The Biggest Coaches Of 🇮🇳";
  const hostImage = hero.hostImage || "/assets/shubh-jain-BAGpkc-R.webp";
  const bgVideo = hero.bgVideo || "/assets/roman-hero-bg-BAaz7ED8.mp4";
  const videoOpacity = hero.videoOpacity ? Number(hero.videoOpacity) / 100 : 0.75;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 md:pt-12" id="hero">
      {/* Crisp Roman Architecture Video Background - NO BLUR */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ opacity: videoOpacity }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        <source src="https://2026.launchatscale.com/assets/roman-hero-bg-BAaz7ED8.mp4" type="video/mp4" />
      </video>

      {/* Clean crisp gradient overlay - NO BLUR, high clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[#161412] pointer-events-none" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl pt-4">
        {/* Pill Badge */}
        <div
          className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/40 rounded-full px-4 py-2 mb-6 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
          <span className="font-display text-sm text-destructive tracking-wide uppercase">
            {badge}
          </span>
        </div>

        {/* Pre-heading */}
        <p
          className="font-sans text-xl md:text-2xl text-primary tracking-[0.1em] uppercase mb-4 animate-fade-in font-semibold"
          style={{ animationDelay: "0.2s" }}
        >
          {preheading}
        </p>

        {/* Main H1 Headline */}
        <h1
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-gradient-gold">{headlineLive}</span> {headlineMain1}
          <br />
          <span className="text-gradient-gold">{headlineGold}</span> {headlineMain2}
        </h1>

        {/* Description */}
        <p
          className="font-body text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-4 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {description}
        </p>

        {/* CTA Button Block */}
        <div className="animate-fade-in flex flex-col items-center gap-1" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={onOpenModal}
            type="button"
            className="mirror-button px-12 py-7 text-xl md:text-2xl font-display text-primary-foreground border-0 rounded-lg hover:scale-105 transition-transform cursor-pointer"
          >
            {ctaText}
          </button>
          <span className="font-display text-primary text-base md:text-lg tracking-wide mt-2">
            {dateText}
          </span>
          <span className="text-sm text-muted-foreground font-body">
            {noticeText}
          </span>
        </div>

        {/* Host Avatar Preview */}
        <div className="flex flex-col items-center gap-4 mt-12 animate-fade-in" style={{ animationDelay: "0.9s" }}>
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-primary glow-gold">
            <img
              src={hostImage}
              alt={`${hostName} - Workshop Host`}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              width={144}
              height={144}
            />
          </div>
          <p className="font-display text-foreground text-xl md:text-2xl">
            Hosted by <span className="text-primary font-semibold">{hostName}</span>
          </p>
          <p className="font-body text-muted-foreground text-base md:text-lg italic">
            {hostTagline}
          </p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
