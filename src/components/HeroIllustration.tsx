import { Pill, Shield, Plus, Sparkles } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative h-[420px] w-[420px] max-w-full">
      {/* Gradient blob */}
      <div className="absolute inset-8 rounded-[40%_60%_60%_40%/50%_40%_60%_50%] bg-gradient-to-br from-emerald-200/70 via-teal-200/50 to-blue-200/60 blur-2xl animate-blob" />

      {/* Glow ring */}
      <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-emerald-400/20 to-blue-400/10 blur-xl" />

      {/* Central medicine bottle card */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float">
        <div className="relative">
          <div className="glass-card rounded-3xl p-8 w-56">
            <div className="mx-auto w-24 h-32 relative">
              {/* Bottle cap */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 rounded-t-lg bg-gradient-to-b from-emerald-600 to-emerald-700" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3 rounded bg-emerald-800/80" />
              {/* Bottle body */}
              <div className="absolute top-7 left-0 right-0 bottom-0 rounded-b-2xl rounded-t-lg bg-gradient-to-br from-white to-slate-100 border border-slate-200 shadow-inner">
                <div className="absolute inset-x-3 top-6 h-14 rounded-md bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex flex-col items-center justify-center">
                  <Plus className="h-5 w-5 text-emerald-600" strokeWidth={3} />
                  <div className="mt-1 h-1 w-8 rounded bg-emerald-300" />
                  <div className="mt-1 h-1 w-6 rounded bg-emerald-200" />
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="text-xs font-semibold text-emerald-700">DRUGSAVE</div>
              <div className="text-[10px] text-muted-foreground">Verified · AI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating capsule top-left */}
      <div className="absolute top-6 left-4 animate-float-slow">
        <div className="glass-card rounded-full p-3 rotate-[-25deg]">
          <div className="w-16 h-6 rounded-full overflow-hidden flex shadow-inner">
            <div className="w-1/2 bg-gradient-to-br from-red-400 to-red-500" />
            <div className="w-1/2 bg-gradient-to-br from-slate-100 to-white" />
          </div>
        </div>
      </div>

      {/* Floating tablet top-right */}
      <div className="absolute top-10 right-2 animate-float [animation-delay:1s]">
        <div className="glass-card rounded-2xl p-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300 grid place-items-center relative">
            <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-px bg-blue-400/60" />
          </div>
        </div>
      </div>

      {/* Shield badge bottom-left */}
      <div className="absolute bottom-8 left-0 animate-float-slow [animation-delay:2s]">
        <div className="glass-card rounded-2xl p-3 flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl gradient-primary">
            <Shield className="h-5 w-5 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-[10px] font-bold text-emerald-700">SAFE</div>
            <div className="text-[9px] text-muted-foreground">Verified</div>
          </div>
        </div>
      </div>

      {/* Medical cross bottom-right */}
      <div className="absolute bottom-4 right-4 animate-float [animation-delay:1.5s]">
        <div className="glass-card rounded-2xl p-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
            <Plus className="h-6 w-6 text-white" strokeWidth={3} />
          </div>
        </div>
      </div>

      {/* Sparkle particles */}
      <Sparkles className="absolute top-24 right-16 h-4 w-4 text-emerald-400 animate-pulse" />
      <Sparkles className="absolute bottom-24 left-16 h-3 w-3 text-blue-400 animate-pulse [animation-delay:1s]" />
      <div className="absolute top-1/3 left-8 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
      <div className="absolute bottom-1/3 right-10 h-2 w-2 rounded-full bg-blue-400 animate-pulse [animation-delay:0.5s]" />

      {/* Loose capsule */}
      <div className="absolute bottom-20 right-24 animate-float-slow [animation-delay:0.5s]">
        <div className="w-10 h-4 rounded-full overflow-hidden flex rotate-45 shadow-lg">
          <div className="w-1/2 bg-gradient-to-br from-amber-400 to-amber-500" />
          <div className="w-1/2 bg-gradient-to-br from-slate-50 to-slate-200" />
        </div>
      </div>

      <Pill className="absolute top-32 left-2 h-5 w-5 text-emerald-500/60 animate-float [animation-delay:2s]" />
    </div>
  );
}
