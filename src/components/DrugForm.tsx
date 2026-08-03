import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight, Search, Pill, ChevronDown, Beaker } from "lucide-react";

interface DrugFormProps {
  drug1: string;
  drug2: string;
  setDrug1: (value: string) => void;
  setDrug2: (value: string) => void;
  smiles1?: string;
  smiles2?: string;
  setSmiles1?: (value: string) => void;
  setSmiles2?: (value: string) => void;
}

export function DrugForm({
  drug1,
  drug2,
  setDrug1,
  setDrug2,
  smiles1 = "",
  smiles2 = "",
  setSmiles1 = () => {},
  setSmiles2 = () => {},
}: DrugFormProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const swap = () => {
    setDrug1(drug2);
    setDrug2(drug1);
    setSmiles1(smiles2);
    setSmiles2(smiles1);
  };

  return (
    <Card className="glass-card rounded-3xl p-6 sm:p-8 border-0 animate-fade-up">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="text-xs font-bold tracking-wider text-emerald-600">STEP 1</div>
          <h2 className="mt-1 text-xl font-semibold tracking-tight">Enter Drugs</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Enter two medicine names to check possible interactions.
          </p>
        </div>
        <div className="hidden sm:grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Pill className="h-5 w-5" />
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 items-center">
        <div className="relative">
          <label className="block text-xs font-medium text-muted-foreground mb-1.5 ml-1">Drug 1</label>
          <Search className="absolute left-3.5 top-9.5 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            value={drug1}
            onChange={(e) => setDrug1(e.target.value)}
            placeholder="Paracetamol"
            className="pl-10 h-12 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur border-border focus-visible:ring-emerald-500"
          />
        </div>

        <div className="flex justify-center md:pt-6">
          <Button
            type="button"
            onClick={swap}
            variant="outline"
            size="icon"
            aria-label="Swap drugs"
            className="h-11 w-11 rounded-full border-emerald-200 dark:border-emerald-500/30 bg-white/70 dark:bg-white/5 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:border-emerald-300 hover:rotate-180 transition-all duration-300 shadow-sm"
          >
            <ArrowLeftRight className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          </Button>
        </div>

        <div className="relative">
          <label className="block text-xs font-medium text-muted-foreground mb-1.5 ml-1">Drug 2</label>
          <Search className="absolute left-3.5 top-9.5 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            value={drug2}
            onChange={(e) => setDrug2(e.target.value)}
            placeholder="Vitamin C"
            className="pl-10 h-12 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur border-border focus-visible:ring-emerald-500"
          />
        </div>
      </div>

      <div className="mt-5">
        <button
          type="button"
          onClick={() => setShowAdvanced((v) => !v)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 transition"
        >
          <Beaker className="h-3.5 w-3.5" />
          Advanced: provide SMILES (for unknown drugs)
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showAdvanced ? "rotate-180" : ""}`} />
        </button>

        {showAdvanced && (
          <div className="mt-3 grid md:grid-cols-2 gap-3 md:gap-4 animate-fade-up">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5 ml-1">SMILES 1 (optional)</label>
              <Input
                value={smiles1}
                onChange={(e) => setSmiles1(e.target.value)}
                placeholder="e.g. CC(=O)OC1=CC=CC=C1C(=O)O"
                className="h-11 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur border-border focus-visible:ring-emerald-500 font-mono text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5 ml-1">SMILES 2 (optional)</label>
              <Input
                value={smiles2}
                onChange={(e) => setSmiles2(e.target.value)}
                placeholder="e.g. CC(C)CC1=CC=C(C=C1)C(C)C(=O)O"
                className="h-11 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur border-border focus-visible:ring-emerald-500 font-mono text-xs"
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
