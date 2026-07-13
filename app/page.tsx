import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Results />
      <Projects />
      <WhyUs />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
