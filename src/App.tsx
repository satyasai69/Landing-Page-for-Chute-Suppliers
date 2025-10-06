import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Products } from "./components/Products";
import { Specifications } from "./components/Specifications";
import { Applications } from "./components/Applications";
import { AboutSection } from "./components/AboutSection";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Specifications />
      <Applications />
      <AboutSection />
      <CTA />
      <Footer />
    </div>
  );
}