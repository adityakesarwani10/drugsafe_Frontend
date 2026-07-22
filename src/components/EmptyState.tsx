import { ClipboardList, Pill } from "lucide-react";

export function EmptyState() {
  return (
    <div className="glass-card rounded-3xl p-10 sm:p-14 text-center border-0 animate-fade-up">
      <div className="relative mx-auto w-28 h-28">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-100 to-blue-100 blur-xl" />
        <div className="relative w-full h-full grid place-items-center rounded-3xl glass-card">
          <ClipboardList className="h-10 w-10 text-emerald-600" strokeWidth={1.8} />
          <div className="absolute -bottom-2 -right-2 grid h-10 w-10 place-items-center rounded-2xl gradient-primary shadow-lg shadow-emerald-500/30">
            <Pill className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight">No interaction analysis yet.</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
        Enter two medicines and generate your report to see AI-powered interaction insights.
      </p>
    </div>
  );
}
