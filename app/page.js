"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import SessionDetailsSection from "@/components/SessionDetailsSection";
import HostSection from "@/components/HostSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import StickyBottomBar from "@/components/StickyBottomBar";
import RegistrationModal from "@/components/RegistrationModal";

export default function Home() {
  const [content, setContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setContent(data);
      })
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-background pb-28 text-foreground selection:bg-primary/30 selection:text-foreground">
      <HeroSection content={content} onOpenModal={handleOpenModal} />
      <SectionDivider />
      <SessionDetailsSection content={content} onOpenModal={handleOpenModal} />
      <SectionDivider />
      <HostSection content={content} />
      <SectionDivider />
      <FinalCtaSection content={content} onOpenModal={handleOpenModal} />
      {!isModalOpen && <StickyBottomBar content={content} onOpenModal={handleOpenModal} />}
      <RegistrationModal content={content} isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
