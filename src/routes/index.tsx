import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DrugSave — Smart AI Drug Interaction Checker" },
      { name: "description", content: "Check possible interactions between medications with AI-powered severity analysis backed by trusted medical data." },
      { property: "og:title", content: "DrugSave — Smart AI Drug Interaction Checker" },
      { property: "og:description", content: "AI-powered drug interaction checker with severity analysis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}
