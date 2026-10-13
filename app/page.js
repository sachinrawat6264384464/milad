"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import SessionDetailsSection from "@/components/SessionDetailsSection";
import HostSection from "@/components/HostSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import StickyBottomBar from "@/components/StickyBottomBar";
import RegistrationModal from "@/components/RegistrationModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-background pb-24 text-foreground selection:bg-primary/30 selection:text-foreground">
      <HeroSection onOpenModal={handleOpenModal} />
      <SectionDivider />
      <SessionDetailsSection onOpenModal={handleOpenModal} />
      <SectionDivider />
      <HostSection />
      <SectionDivider />
      <FinalCtaSection onOpenModal={handleOpenModal} />
      <StickyBottomBar onOpenModal={handleOpenModal} />
      <RegistrationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
