export default function SessionDetailsSection({ content, onOpenModal }) {
  const session = content?.session || {};

  const eyebrow = session.eyebrow || "In This 2-Hour Session";
  const title = session.title || "You'll Walk Away With";
  const titleGold = session.titleGold || "Everything";
  const titleSuffix = session.titleSuffix || "You Need";
  const description =
    session.description || "No fluff. No theory. Just a complete, actionable plan you can execute immediately.";
  const cards = session.cards || [
    {
      id: "1",
      icon: "📅",
      highlight: "Worth ₹25,000",
      title: "Your 2026 Calendar",
      description: "Complete quarterly roadmap with weekly action items — ready to execute",
    },
    {
      id: "2",
      icon: "💎",
      highlight: "Worth ₹50,000",
      title: "1 Scalable Offer",
      description: "A high-ticket offer designed to generate ₹1L+ per sale consistently",
    },
    {
      id: "3",
      icon: "🎯",
      highlight: "Worth ₹15,000",
      title: "Revenue Calculator",
      description: "Know exactly how many clients you need and when to hit ₹1 Crore",
    },
  ];
  const totalValue = session.totalValue || "₹90,000";
  const investment = session.investment || "FREE";
  const ctaText = session.ctaText || "Reserve My Spot Now →";
  const dateText = session.dateText || "📅 17th January, 7 PM";

  return (
    <section className="py-20 bg-card relative" id="features">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <p className="font-display text-primary text-center text-sm tracking-[0.3em] uppercase mb-4">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-4">
          {title} <span className="text-gradient-gold">{titleGold}</span> {titleSuffix}
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-base md:text-lg">
          {description}
        </p>

        {/* Feature Cards Grid (Dynamic, Crisp, Clean - NO BLUR) */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <div
              key={card.id || idx}
              className="border-gradient-gold rounded-xl p-6 text-center bg-[#1d1916] hover:scale-[1.02] transition-transform duration-300 group shadow-lg"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{card.icon}</div>
              <span className="inline-block bg-primary/20 text-primary text-xs font-display tracking-wider px-3 py-1 rounded-full mb-3">
                {card.highlight}
              </span>
              <h3 className="font-display text-lg text-foreground mb-2">{card.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Summary */}
        <div className="text-center mt-10">
          <p className="font-body text-muted-foreground text-sm mb-2">
            Total Value: <span className="line-through">{totalValue}</span>
          </p>
          <p className="font-display text-2xl text-primary">
            Your Investment: <span className="text-gradient-gold text-3xl">{investment}</span>
          </p>
        </div>

        {/* Action Button */}
        <div className="text-center mt-8 flex flex-col items-center gap-2">
          <button
            onClick={onOpenModal}
            type="button"
            className="mirror-button px-10 py-6 text-lg font-display text-primary-foreground border-0 rounded-xl cursor-pointer"
          >
            {ctaText}
          </button>
          <span className="font-display text-primary text-base md:text-lg tracking-wide mt-1">
            {dateText}
          </span>
        </div>
      </div>
    </section>
  );
}
