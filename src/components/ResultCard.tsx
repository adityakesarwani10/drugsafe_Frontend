// @ts-nocheck
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Info, CheckCircle2, Pill } from "lucide-react";
import { SeverityBadge } from "./SeverityBadge";
import { PDFButton } from "./PDFButton";

const statusMap = {
  SAFE: { label: "SAFE", subtitle: "These medicines are safe to take together.", ring: "from-emerald-500 to-teal-500", icon: CheckCircle2, iconBg: "bg-emerald-100 text-emerald-600" },
  MILD: { label: "CAUTION", subtitle: "These medicines may have a mild interaction.", ring: "from-yellow-400 to-amber-500", icon: AlertTriangle, iconBg: "bg-yellow-100 text-yellow-700" },
  MODERATE: { label: "WARNING", subtitle: "These medicines have a moderate interaction risk.", ring: "from-orange-400 to-orange-600", icon: AlertTriangle, iconBg: "bg-orange-100 text-orange-700" },
  SEVERE: { label: "DANGEROUS", subtitle: "These medicines may interact with each other.", ring: "from-red-500 to-rose-600", icon: AlertTriangle, iconBg: "bg-red-100 text-red-600" },
};

export function ResultCard({ result, onGeneratePDF }) {
  const status = statusMap[result.severity] || statusMap.SEVERE;
  const StatusIcon = status.icon;

  return (
    <Card className="glass-card rounded-3xl p-6 sm:p-8 border-0 animate-fade-up overflow-hidden relative">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${status.ring}`} />

      <div className="text-xs font-bold tracking-wider text-emerald-600">STEP 3</div>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">View Result</h2>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
        <div className="flex items-start gap-4">
          <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${status.iconBg}`}>
            <StatusIcon className="h-7 w-7" strokeWidth={2.2} />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Interaction Status</div>
            <div className={`text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r ${status.ring} bg-clip-text text-transparent`}>
              {status.label}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{status.subtitle}</div>
          </div>
        </div>
        <SeverityBadge severity={result.severity} />
      </div>

      <Separator className="my-6" />

      <div className="grid sm:grid-cols-2 gap-4">
        <DetailBox label="Drug 1" value={result.drug1} />
        <DetailBox label="Drug 2" value={result.drug2} />
      </div>

      <div className="mt-4 grid gap-4">
        <TextBlock title="Interaction" text={result.interaction} />
        <TextBlock title="Recommendation" text={result.recommendation} />
      </div>

      <Alert className="mt-6 border-blue-200 dark:border-blue-500/30 bg-blue-50/70 dark:bg-blue-500/10 backdrop-blur rounded-2xl">
        <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <AlertDescription className="text-sm text-blue-900/80 dark:text-blue-200">
          This result is generated using AI and trusted drug data. It should never replace professional medical advice.
        </AlertDescription>
      </Alert>

      <div className="mt-6 rounded-2xl border border-emerald-200 dark:border-emerald-500/30 bg-gradient-to-r from-emerald-50 to-teal-50/70 dark:from-emerald-500/10 dark:to-teal-500/5 p-5 flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div className="text-center sm:text-left">
            <div className="font-semibold text-emerald-900 dark:text-emerald-200">Your report is ready.</div>
            <div className="text-xs text-emerald-700/80 dark:text-emerald-400/80">Download the full analysis as a PDF.</div>
          </div>
        </div>
        <PDFButton variant="outline" onClick={onGeneratePDF} />
      </div>
    </Card>
  );
}

function DetailBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-border bg-white/60 dark:bg-white/5 backdrop-blur p-4 flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
        <Pill className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">{label}</div>
        <div className="font-semibold truncate">{value}</div>
      </div>
    </div>
  );
}

function TextBlock({ title, text }) {
  return (
    <div className="rounded-2xl border border-border bg-white/50 dark:bg-white/5 backdrop-blur p-4">
      <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">{title}</div>
      <p className="mt-1.5 text-sm text-foreground/80 leading-relaxed">{text}</p>
    </div>
  );
}
