import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Capabilities from "@/components/Capabilities";
import PolicyWorkflows from "@/components/PolicyWorkflows";
import WhoItsFor from "@/components/WhoItsFor";
import Credibility from "@/components/Credibility";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Capabilities />
      <PolicyWorkflows />
      <WhoItsFor />
      <Credibility />
      <CTABlock />
      <Footer />
    </main>
  );
}
