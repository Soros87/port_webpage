import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-24">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}
