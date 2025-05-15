import Hero from "@/components/sections/hero";
import AboutUs from "@/components/sections/about-us";
import OurPillars from "@/components/sections/our-pillars";
import Solutions from "@/components/sections/solutions";
import Operation from "@/components/sections/operation";
import Documents from "@/components/sections/documents";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutUs />
      <OurPillars />
      <Solutions />
      <Operation />
      <Documents />
    </div>
  );
}