import CTA from "@/components/landing/CTA";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";

export default function Page() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <CTA />
    </div>
  );
}
