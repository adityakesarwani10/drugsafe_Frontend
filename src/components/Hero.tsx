import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { HeroIllustration } from "./HeroIllustration";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 h-96 w-96 rounded-full bg-blue-300/25 blur-3xl animate-blob [animation-delay:3s]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <Badge className="mb-6 gap-1.5 bg-white/70 backdrop-blur border border-emerald-200 text-emerald-700 hover:bg-white/80 rounded-full px-3 py-1 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Check Drug Interactions.
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Stay Safe.
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              DrugSave helps users identify possible interactions between two medications
              using trusted medical data and AI-generated severity analysis.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto gradient-primary text-white shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all rounded-xl h-12 px-6">
                  Get Started
                </Button>
              </Link>
              <a href="#about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-xl h-12 px-6 bg-white/60 backdrop-blur border-slate-200 hover:bg-white">
                  Learn More
                </Button>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Trusted medical data
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                AI severity analysis
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-up [animation-delay:150ms]">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
