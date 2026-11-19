import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TargetMarkets from "@/components/TargetMarkets";
import CoreFeatures from "@/components/CoreFeatures";
import PracticalScenarios from "@/components/PracticalScenarios";
import ProvenResults from "@/components/ProvenResults";
import OnboardingRoadmap from "@/components/OnboardingRoadmap";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Hero Section with 3D Metallic Matrix Visual */}
      <Hero />

      {/* 01. Target Industries */}
      <TargetMarkets />

      {/* 02. Core Features Architecture */}
      <CoreFeatures />

      {/* 03. Practical Scenarios & Integration Architecture */}
      <PracticalScenarios />

      {/* 04. Proven Results & Quantitative KPIs */}
      <ProvenResults />

      {/* 05. Enterprise Dedicated Deployment & Roadmap */}
      <OnboardingRoadmap />

      {/* 06. Lead Capture Inquiry Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </main>
  );
}
