// @ts-nocheck
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight, Search, Pill } from "lucide-react";

export function DrugForm({ drug1, drug2, setDrug1, setDrug2 }) {
  const swap = () => {
    setDrug1(drug2);
    setDrug2(drug1);
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
        <div className="hidden sm:grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
          <Pill className="h-5 w-5" />
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 items-center">
        <div className="relative">
          <label className="block text-xs font-medium text-muted-foreground mb-1.5 ml-1">Drug 1</label>
          <Search className="absolute left-3.5 top-[38px] h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            value={drug1}
            onChange={(e) => setDrug1(e.target.value)}
            placeholder="Search Drug..."
            className="pl-10 h-12 rounded-xl bg-white/70 backdrop-blur border-slate-200 focus-visible:ring-emerald-500"
          />
        </div>

        <div className="flex justify-center md:pt-6">
          <Button
            type="button"
            onClick={swap}
            variant="outline"
            size="icon"
            aria-label="Swap drugs"
            className="h-11 w-11 rounded-full border-emerald-200 bg-white/70 hover:bg-emerald-50 hover:border-emerald-300 hover:rotate-180 transition-all duration-300 shadow-sm"
          >
            <ArrowLeftRight className="h-4 w-4 text-emerald-600" />
          </Button>
        </div>

        <div className="relative">
          <label className="block text-xs font-medium text-muted-foreground mb-1.5 ml-1">Drug 2</label>
          <Search className="absolute left-3.5 top-[38px] h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            value={drug2}
            onChange={(e) => setDrug2(e.target.value)}
            placeholder="Search Drug..."
            className="pl-10 h-12 rounded-xl bg-white/70 backdrop-blur border-slate-200 focus-visible:ring-emerald-500"
          />
        </div>
      </div>
    </Card>
  );
}
