// @ts-nocheck
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";

const config = {
  SAFE: {
    label: "SAFE",
    className: "bg-emerald-100 text-emerald-700 border-emerald-200",
    icon: CheckCircle2,
  },
  MILD: {
    label: "MILD",
    className: "bg-yellow-100 text-yellow-800 border-yellow-200",
    icon: AlertCircle,
  },
  MODERATE: {
    label: "MODERATE",
    className: "bg-orange-100 text-orange-700 border-orange-200",
    icon: AlertTriangle,
  },
  SEVERE: {
    label: "SEVERE",
    className: "bg-red-100 text-red-700 border-red-200",
    icon: ShieldAlert,
  },
};

export function SeverityBadge({ severity = "SEVERE" }) {
  const c = config[severity] || config.SEVERE;
  const Icon = c.icon;
  return (
    <Badge className={`gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide border ${c.className}`}>
      <Icon className="h-3.5 w-3.5" />
      {c.label}
    </Badge>
  );
}
