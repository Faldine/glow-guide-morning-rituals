
import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";
import Features from "../components/features/Features";
import RoutinesShowcase from "../components/routines/RoutinesShowcase";
import StatisticsSection from "../components/statistics/StatisticsSection";
import CallToAction from "../components/cta/CallToAction";
import Footer from "../components/footer/Footer";
import '../styles/pages/Index.css';

const Index = () => {
  return (
    <div className="main-layout">
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
