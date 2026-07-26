## Goal

Connect the existing DrugSave UI to the FastAPI backend documented in the PDF, preserving the current design and 3-step flow. No visual redesign — only wire real data, add optional SMILES inputs, and enrich the result card with the fields the API returns.

## Backend contract (from PDF)

Base URL: `http://127.0.0.1:8000/api` (configurable via `VITE_API_BASE_URL`, falls back to the above).

- `GET /health` → `{ status: "healthy" }`
- `POST /predict` → body `{ drug1, drug2, smiles1?, smiles2? }` → `{ success, message, data: { known_interaction, drug1, drug2, interaction, severity, category, probability, prediction, simple_description, possible_symptoms[], recommendation, urgency, confidence, ... } }`
- `POST /generate-report` → same body → `{ data: { filename, download_url } }`
- `GET /download-report/{filename}` → `application/pdf`

Called directly from the browser (dev-only backend on localhost, no auth). No server functions or Lovable Cloud needed.

## Changes

1. **`src/services/api.ts`** — new. Exports `API_BASE_URL`, typed `PredictionData`, and:
   - `checkHealth()`
   - `predictInteraction(payload)`
   - `generateReport(payload)`
   - `downloadReport(filename)` — builds absolute URL and triggers browser download via a hidden anchor.
   Uses `fetch`, throws `Error(message)` on `!success` / non-2xx using backend's `message` field.

2. **`src/components/DrugForm.tsx`** — add a collapsible "Advanced: provide SMILES (for unknown drugs)" section with two optional inputs `smiles1`, `smiles2`. Same glass styling. Lift state via new props.

3. **`src/routes/dashboard.tsx`** — replace the dummy `setTimeout` with a real `predictInteraction` call; wire `PDFButton` to call `generateReport` then `downloadReport`. Add optional `smiles1/smiles2` state. Toast errors from the API. Keep the 3-step layout, loading skeleton, and empty state exactly as-is.

4. **`src/components/ResultCard.tsx`** — extend to render the richer response:
   - Header: drug1 × drug2, `SeverityBadge` mapped from `severity` (Low→SAFE/MILD, Moderate→MODERATE, High→SEVERE), plus a small pill showing **Known DrugBank Interaction** or **AI Predicted Interaction** based on `known_interaction`.
   - Meta row: Category, Urgency, Confidence (`{confidence.toFixed(1)}%`), Probability.
   - Sections: Interaction, Simple Description, Possible Symptoms (bullet list), Recommendation.
   - Keep existing card/typography.

5. **`src/components/PDFButton.tsx`** — accept `loading` prop, show spinner + "Generating..." while the report call is in flight; stays disabled until a prediction result exists.

6. **`src/components/SeverityBadge.tsx`** — add a small helper `mapSeverity(apiSeverity)` and support the new mapping; color rules from the PDF (Low green, Moderate orange, High red).

7. **`.env.example`** — document `VITE_API_BASE_URL=http://127.0.0.1:8000/api`.

## Out of scope

- No visual redesign, no new routes, no auth, no backend hosting. CORS must be enabled on the FastAPI side by the user (mention in closing note, not in code).
