import ComparisonSection from "@/components/Comparison";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      <ComparisonSection />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
