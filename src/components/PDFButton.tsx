import { Button } from "@/components/ui/button";
import { FileDown, Loader2 } from "lucide-react";

interface PDFButtonProps {
  disabled?: boolean;
  loading?: boolean;
  variant?: "default" | "outline";
  onClick: () => void;
}

export function PDFButton({ disabled = false, loading = false, variant = "default", onClick }: PDFButtonProps) {
  const Icon = loading ? Loader2 : FileDown;
  const label = loading ? "Generating..." : "Generate PDF";
  if (variant === "outline") {
    return (
      <Button
        onClick={onClick}
        disabled={disabled || loading}
        variant="outline"
        className="rounded-xl border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 gap-2"
      >
        <Icon className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
        {label}
      </Button>
    );
  }
  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      variant="outline"
      className="rounded-xl h-12 px-5 gap-2 bg-white/60 backdrop-blur disabled:opacity-50"
    >
      <Icon className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
      {label}
    </Button>
  );
}
