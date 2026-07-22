// @ts-nocheck
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export function PDFButton({ disabled = false, variant = "default", onClick }) {
  if (variant === "outline") {
    return (
      <Button
        onClick={onClick}
        disabled={disabled}
        variant="outline"
        className="rounded-xl border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 gap-2"
      >
        <FileDown className="h-4 w-4" />
        Generate PDF
      </Button>
    );
  }
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="outline"
      className="rounded-xl h-12 px-5 gap-2 bg-white/60 backdrop-blur disabled:opacity-50"
    >
      <FileDown className="h-4 w-4" />
      Generate PDF
    </Button>
  );
}
