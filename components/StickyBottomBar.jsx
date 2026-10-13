"use client";

import { useState, useEffect } from "react";

export default function StickyBottomBar({ onOpenModal }) {
  const [secondsLeft, setSecondsLeft] = useState(240);
  const [deadlineText, setDeadlineText] = useState("");

  useEffect(() => {
    // Dynamic deadline string
    const now = new Date();
    const formatted = now.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    setDeadlineText(`Deadline ${formatted}`);

    // Session storage countdown
    const stored = sessionStorage.getItem("countdown-end-time");
    let remaining = 240;
    if (stored) {
      const diff = Math.max(0, parseInt(stored, 10) - Date.now());
      remaining = Math.floor(diff / 1000);
    } else {
      const endTime = Date.now() + 4 * 60 * 1000;
      sessionStorage.setItem("countdown-end-time", endTime.toString());
    }

    setSecondsLeft(remaining);
    if (remaining <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/98 backdrop-blur-md border-t border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Price & Dynamic Deadline */}
        <div className="hidden md:block text-left">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl text-primary font-bold">FREE</span>
            <span className="font-body text-muted-foreground line-through text-sm">₹999</span>
          </div>
          <p className="font-body text-muted-foreground text-xs">{deadlineText || "Deadline Loading..."}</p>
        </div>

        {/* Real-time countdown timer */}
        <div className="flex items-center gap-2 md:gap-3">
          <span className="font-display text-xs md:text-sm text-muted-foreground uppercase tracking-wide">
            Seats close in
          </span>
          <div className="flex items-center gap-1">
            <div className="bg-primary/20 border border-primary/40 rounded px-2 py-1">
              <span className="font-display text-base md:text-lg text-primary tabular-nums">
                {String(minutes).padStart(2, "0")}
              </span>
            </div>
            <span className="font-display text-base text-primary">:</span>
            <div className="bg-primary/20 border border-primary/40 rounded px-2 py-1">
              <span className="font-display text-base md:text-lg text-primary tabular-nums">
                {String(seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Seats Scarcity & CTA Action */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center bg-primary/20 border border-primary/40 rounded-full px-3 py-1">
            <span className="font-display text-xs text-primary font-semibold">47 Seats Left</span>
          </div>
          <button
            onClick={onOpenModal}
            type="button"
            className="bg-destructive hover:bg-destructive/90 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-display text-white border-0 rounded-lg cursor-pointer transition-colors font-bold shadow-lg"
          >
            ENROLL NOW
          </button>
        </div>
      </div>
    </div>
  );
}
