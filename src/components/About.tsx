import { Card } from "@/components/ui/card";
import { Shield, Brain, Users, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: Shield,
    title: "Our Mission",
    description: "Help users safely verify medicine interactions before consuming drugs.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Brain,
    title: "AI Powered Analysis",
    description: "Analyze trusted drug information with AI-generated explanations.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "Who It's For",
    description: "Patients, Doctors, Pharmacists, Healthcare Professionals and Students.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-medium text-emerald-700 mb-4">
            About
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            About DrugSave
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            DrugSave is an AI-powered platform that predicts possible interactions between
            medications and provides severity analysis using trusted medical information.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Card
              key={c.title}
              className="glass-card rounded-2xl p-8 border-0 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${c.gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                <c.icon className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 glass-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 border-0 bg-gradient-to-br from-emerald-50/80 to-blue-50/60">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-primary shadow-lg shadow-emerald-500/30">
            <ShieldCheck className="h-7 w-7 text-white" strokeWidth={2.5} />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-lg font-semibold">Your health is our priority.</div>
            <div className="text-sm text-muted-foreground mt-1">
              Always consult healthcare professionals before taking medicines.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
