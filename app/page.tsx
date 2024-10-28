import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Video from "./components/Video";
import SocialProofReviews from "./components/SocialProofReviews";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <div className="h-28" />
        <Showcase />
        <div className="h-20" />
        <CTA />
        <div className="h-28" />
        <Features />
        <div className="h-28" />
        <Video />
        <div className="h-28" />
        <SocialProofReviews />
        <div className="h-28" />
        <Pricing />
        <div className="h-28" />
        <FAQ />
        <div className="h-28" />
      </main>
      <Footer />
    </div>
  );
}
