import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
