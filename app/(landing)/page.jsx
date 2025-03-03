import ComparisonSection from "@/components/Comparison";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      <ComparisonSection />
      <Footer />
    </div>
  );
}
