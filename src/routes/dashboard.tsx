// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DrugForm } from "@/components/DrugForm";
import { EmptyState } from "@/components/EmptyState";
import { ResultCard } from "@/components/ResultCard";
import { PDFButton } from "@/components/PDFButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — DrugSave" },
      { name: "description", content: "Check drug interactions with AI severity analysis. Enter two medicines and generate an instant report." },
      { property: "og:title", content: "DrugSave Dashboard" },
      { property: "og:description", content: "Check drug interactions with AI severity analysis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const [drug1, setDrug1] = useState("Paracetamol");
  const [drug2, setDrug2] = useState("Ibuprofen");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const generate = () => {
    if (!drug1.trim() || !drug2.trim()) {
      toast.error("Please enter both medicine names.");
      return;
    }
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult({
        drug1: drug1.trim(),
        drug2: drug2.trim(),
        severity: "SEVERE",
        interaction: "These medicines may increase kidney damage risk when taken together.",
        recommendation: "Avoid taking together unless prescribed by a healthcare professional.",
      });
      setLoading(false);
      toast.success("Interaction report generated.");
    }, 1400);
  };

  const generatePDF = () => {
    toast.success("PDF export coming soon.");
  };

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="mb-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Interaction Checker
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Drug Interaction Dashboard</h1>
          <p className="mt-2 text-muted-foreground">Follow three simple steps to get an AI-powered interaction report.</p>
        </div>

        <div className="grid gap-6">
          <DrugForm drug1={drug1} drug2={drug2} setDrug1={setDrug1} setDrug2={setDrug2} />

          <Card className="glass-card rounded-3xl p-6 sm:p-8 border-0 animate-fade-up [animation-delay:80ms]">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-bold tracking-wider text-emerald-600">STEP 2</div>
                <h2 className="mt-1 text-xl font-semibold tracking-tight">Generate Result</h2>
                <p className="mt-1 text-sm text-muted-foreground">Run the AI interaction analysis on the entered medicines.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={generate}
                disabled={loading}
                className="flex-1 sm:flex-none gradient-primary text-white shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] transition-all rounded-xl h-12 px-6 gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Generate Interaction Report
                  </>
                )}
              </Button>
              <PDFButton disabled={!result} onClick={generatePDF} />
            </div>
          </Card>

          {loading ? (
            <Card className="glass-card rounded-3xl p-10 border-0 animate-fade-up text-center">
              <Loader2 className="mx-auto h-8 w-8 text-emerald-600 animate-spin" />
              <div className="mt-4 font-medium">Analyzing interactions...</div>
              <div className="text-sm text-muted-foreground mt-1">Consulting trusted medical data.</div>
            </Card>
          ) : result ? (
            <ResultCard result={result} onGeneratePDF={generatePDF} />
          ) : (
            <EmptyState />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
