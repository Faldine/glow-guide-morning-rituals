
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import RoutinesShowcase from "@/components/RoutinesShowcase";
import StatisticsSection from "@/components/StatisticsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <RoutinesShowcase />
        <StatisticsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
