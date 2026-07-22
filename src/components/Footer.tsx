import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/50 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-lg gradient-primary">
              <Shield className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-semibold tracking-tight">DrugSave</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 DrugSave · All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
