import CustomCursor from "@/components/CustomCursor";
import Nav from "@/sections/Nav";
import Hero from "@/sections/Hero";
import Marquee from "@/sections/Marquee";
import HowItWorks from "@/sections/HowItWorks";
import FlipCards from "@/sections/FlipCards";
import Reviews from "@/sections/Reviews";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <Hero />
      <Marquee />
      <HowItWorks />
      <FlipCards />
      <Reviews />
      <CTA />
      <Footer />
    </>
  );
}
