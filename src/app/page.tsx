import Hero from "@/components/Hero";
import Main from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beam";

export default function Home() {
  return (
    <div>
      <BackgroundBeams />
      <Navbar />
      <Hero />
      <Main />
    </div>
  );
}
