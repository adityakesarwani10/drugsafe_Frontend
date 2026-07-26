// @ts-nocheck
export const API_BASE_URL =
  (import.meta as any).env?.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";

export type PredictPayload = {
  drug1: string;
  drug2: string;
  smiles1?: string;
  smiles2?: string;
};

export type PredictionData = {
  known_interaction: boolean;
  drug1: string;
  drug2: string;
  smiles1?: string;
  smiles2?: string;
  interaction: string;
  severity: string; // Low | Moderate | High
  category: string;
  probability: number;
  prediction: string;
  simple_description: string;
  possible_symptoms: string[];
  recommendation: string;
  urgency: string; // Low | Medium | High
  confidence: number;
};

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers || {}),
      },
    });
  } catch (e: any) {
    throw new Error(
      `Cannot reach backend at ${API_BASE_URL}. Is the FastAPI server running?`,
    );
  }

  let body: any = null;
  try {
    body = await res.json();
  } catch {
    // ignore
  }

  if (!res.ok || (body && body.success === false)) {
    throw new Error(body?.message || `Request failed (${res.status})`);
  }
  return body as T;
}

export function checkHealth() {
  return request<{ status: string }>("/health");
}

export function predictInteraction(payload: PredictPayload) {
  const clean: PredictPayload = { drug1: payload.drug1, drug2: payload.drug2 };
  if (payload.smiles1?.trim()) clean.smiles1 = payload.smiles1.trim();
  if (payload.smiles2?.trim()) clean.smiles2 = payload.smiles2.trim();
  return request<{ success: boolean; message: string; data: PredictionData }>(
    "/predict",
    { method: "POST", body: JSON.stringify(clean) },
  );
}

export function generateReport(payload: PredictPayload) {
  const clean: PredictPayload = { drug1: payload.drug1, drug2: payload.drug2 };
  if (payload.smiles1?.trim()) clean.smiles1 = payload.smiles1.trim();
  if (payload.smiles2?.trim()) clean.smiles2 = payload.smiles2.trim();
  return request<{
    success: boolean;
    message: string;
    data: { filename: string; download_url: string };
  }>("/generate-report", { method: "POST", body: JSON.stringify(clean) });
}

export function downloadReport(filenameOrUrl: string) {
  // Accepts either "file.pdf" or "/api/download-report/file.pdf"
  const url = filenameOrUrl.startsWith("http")
    ? filenameOrUrl
    : filenameOrUrl.startsWith("/api/")
      ? `${API_BASE_URL.replace(/\/api$/, "")}${filenameOrUrl}`
      : `${API_BASE_URL}/download-report/${filenameOrUrl}`;
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
  a.download = filenameOrUrl.split("/").pop() || "report.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function mapSeverityToBadge(
  severity?: string,
): "SAFE" | "MILD" | "MODERATE" | "SEVERE" {
  const s = (severity || "").toLowerCase();
  if (s === "high" || s === "severe") return "SEVERE";
  if (s === "moderate" || s === "medium") return "MODERATE";
  if (s === "low" || s === "mild") return "MILD";
  if (s === "none" || s === "safe") return "SAFE";
  return "MODERATE";
}
